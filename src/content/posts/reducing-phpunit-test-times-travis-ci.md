---
title: 'Reducing PHPUnit test times with Travis-CI'
published: 2015-01-01
description: 'A few months ago I had proposed that the Easy Digital Downloads project expand our PHP/WordPress version matrix for our Travis-CI builds. The problem we…'
image: '/images/blog/310155894_2e5b7517c2_o.jpg'
tags: ['Easy Digital Downloads', 'PHP', 'Software Development', 'Travis-CI', 'Unit Tests']
category: 'Software Development'
draft: false
---
A few months ago I had proposed that the [Easy Digital Downloads](https://chrisk.io/EDD "Sell digital products with WordPress") project expand our PHP/WordPress version matrix for our Travis-CI builds. The problem we quickly ran into, is that with the existing matrix, our builds were taking ~1.25 hours to complete. This was just not a realistic means of getting feedback on a git push. In order be effective at providing feedback, it needs to be something you can wait for without using up a drastic amount of time.

### Coverage For the Win/Loss

After some investigation, it was found that the biggest hit to the build performance, was code coverage. For those that don't know, code coverage is a means of monitoring your tests, and telling you what percentage of your code is (or isn't) tested. This allows you to build more tests to test a greater percentage of your code. This is actually a very important statistic, as it lends to the credence of your unit test passing. For example, let's say we have two projects, Project X and Project Y. They have the following unit test pass %:  

-   **Project X:** 100% - 10/10 Tests Passed
-   **Project Y:** 100% - 10/10 Tests Passed

On the surface, they both pass 10 out of 10 tests...but what if we throw code coverage into the mix:

-   **Project X:** 100% - 10/10 Tests Passed - 85% Code Coverage
-   **Project Y:** 100% - 10/10 Tests Passed - 45% Code Coverage

Are you more prone trust a codebase that has 85% of it's code tested, and passing, or less than half? I'll admit, we're working to get the EDD codebase up to a better percentage of code coverage, but really that's another story and another blog post. For now we'll just focus on why it's important to get code coverage.

**But every time?**  
  
This is the decision we made. With Code Coverage, a single unit test took ~5 minutes to complete. Cross that with 3 PHP versions and 6 Combinations of WordPress (3 versions, with and without Multisite), and you've got 18 tests, @ 5 minutes each. That is a LONG time to wait for a built to complete.

Without code coverage reporting, our suite builds in ~30 seconds (on average). Now, multiply by 18 combinations of builds, and we've got a 9 minute build time. That's awesome, the problem is, we were only testing PHP 5.3, 5.4, and 5.5 alongside WordPress 4.0, 4.1, and the latest nightly build. Why isn't this enough? Well, PHP 5.6 is on the edge of being provided by some hosts, so we should get ahead of that, and our 'Required Version' of WordPress is 3.9.2, and we weren't testing for it.

So how do we maximize the matrix, while maintaining code coverage reporting?

### Only running Code Coverage on Pull Requests

Yep, after looking over the documentation of Travis-CI, I found a way that you could identify when a build being run is the result of a Pull Request creation/update, versus a commit to a branch. Here's how we did it.

### The Files

**travis.yml**  
  
The Travis-CI config file has an entry for `script` (what to run as the tests) and `after_script` (what to run when complete). Typically you would put the BASH command you want to run here, most likely `$> phpunit`. Did you know though, that you can just call a normal bash script too? That's what we did, like this:

language: php

sudo: false

php:  
    - 5.3  
    - 5.4  
    - 5.5  
    - 5.6  
    - hhvm

env:  
    - WP\_VERSION=latest WP\_MULTISITE=0  
    - WP\_VERSION=latest WP\_MULTISITE=1  
    - WP\_VERSION=4.1 WP\_MULTISITE=0  
    - WP\_VERSION=4.1 WP\_MULTISITE=1  
    - WP\_VERSION=4.0 WP\_MULTISITE=0  
    - WP\_VERSION=4.0 WP\_MULTISITE=1  
    - WP\_VERSION=3.9.2 WP\_MULTISITE=0  
    - WP\_VERSION=3.9.2 WP\_MULTISITE=1

before\_script:  
    - bash bin/install-wp-tests.sh wordpress\_test root '' localhost $WP\_VERSION

script:  
    - ./travis-tests.sh

after\_script:  
    - ./travis-after.sh  

The contents of our scripts are as follows:  
**travis-tests.sh**

#!/bin/bash
if \[ "${TRAVIS\_PULL\_REQUEST}" = "false" \]
then
  phpunit
else
  phpunit --coverage-clover=coverage.clover
fi

**travis-after.sh**

#!/bin/bash
if \[ "${TRAVIS\_PULL\_REQUEST}" != "false" \]
then
	wget https://scrutinizer-ci.com/ocular.phar
	php ocular.phar code-coverage:upload --format=php-clover coverage.clover
fi

### Conclusion

What this essentially does now, is when a signal comes into Travis-CI to do a build, it checks the environment variable `${TRAVIS_PULL_REQUEST}`, which when there is a pull request present is set to the pull request number, otherwise it's `false`. This allows us to only run Code Coverage during a Pull Request, and for all other commits/push builds, simply run the basic unit tests, looking for breaking points.

With these faster tests, we can now have a matrix that is `5 x 8`, or 40 builds, instead of 18, and finish in a fraction of the time. This gives us maximum compatibility checks, but still allows us to get coverage reports before merging in a Pull Request. Granted, our Pull Request builds take ~2 hours to complete, however these are usually items that are less necessary to be a quick response, as Pull Requests typically aren't merged until a few hours after submitting them (at best). And on top of that, when a Pull Request is submitted, 2 builds are done, 1 Full build with code coverage, and 1 without, so we can get a quick check of it to make sure that the tests pass, and then wait to make sure we've got ample code coverage in the code to be merged.

So that's just a little bit of what we decided and executed as a team to maximize our matrix, without paying the penalty of the build times. Hope you find it useful, and if you have any suggestions, I'd be happy to see them in the comments.

Cheers!

  
Post Image by [Jean-Etienne Minh-Duy Poirrier](http://www.flickr.com/photos/jepoirrier/) via Creative Commons and Flickr  

UPDATE: As a discussion opened on Twitter, it was also recognized by [Brad Touesnard](https://twitter.com/bradt) identified, we could also look into only running code coverage on one of the build matrix items. I'm going to be looking into seeing if we can optimize this way next, after I discuss it with the team.
