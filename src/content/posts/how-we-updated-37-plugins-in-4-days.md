---
title: 'How We Updated 37 Plugins in 4 Days'
published: 2015-04-23
description: 'If you haven''t heard by now, there was a massive day of security releases for several WordPress plugins , and Easy Digital Downloads was no different . We…'
image: '/images/blog/3878741556_5aaa29113d_o.png'
tags: ['.bashrc', 'Easy Digital Downloads', 'eCommerce', 'GitHub', 'Linux', 'Open Source', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
If you haven't heard by now, there was a [massive day of security releases for several WordPress plugins](https://make.wordpress.org/plugins/2015/04/20/fixing-add_query_arg-and-remove_query_arg-usage/), and [Easy Digital Downloads was no different](https://easydigitaldownloads.com/blog/security-fix-released/?ref=371). We were included in a batch of auto updates to correct an issue with the way we were using the `add_query_arg()` and `remove_query_arg()` functions. Unlike many other plugin authors, we have a large number of extensions that we manage and push releases for ourselves, not via WordPress.org. So how did we push 6 versions of Easy Digital Downloads, and also update 37 extensions all in the timeframe? It was a collection of command line scripts and process that helped us nail this down so quickly and accurately. So here's how we did it.

### Identify all the \_query\_args

In total, the [Easy Digital Downloads](https://chrisk.io/EDD) Team manages 120 repositories on GitHub. They all needed to be checked to make sure they didn't contain this bug. First step, checking out 120 GitHub Repositories. With that our first little tip. **Getting all of our repositories in 1 command**

curl -u \[\[USERNAME\]\] -s https://api.github.com/orgs/\[\[ORGANIZATION\]\]/repos?per\_page=200 | ruby -rubygems -e 'require "json"; JSON.load(STDIN.read).each { |repo| %x\[git clone #{repo\["ssh\_url"\]} \]}'

[source](https://gist.github.com/caniszczyk/3856584#comment-1298718) With this, replace `[[USERNAME]]` with your GitHub username, `[[ORGANIZATION]]` with the organization you want all the repos of, and you'll end up with all of them in the current directory. From there, we needed to find all references to the two functions `add_query_arg()` and `remove_query_arg()`. For this I used a command called `ack` **Find all the references**

ack "\_query\_arg/("

This gave me a list of files, and their lines of where we referenced these functions. It was basically a list of 187 lines across 37 extensions. A single line looked something like this:

\-edd-amazon-s3/edd\_s3.php:177: $form\_action\_url = add\_query\_arg( array( 'edd\_action' => 's3\_upload' ), admin\_url() );

### Separate the Work

Nothing super special here, Pippin and I used Google Spreadsheets to make a matrix of Extensions and EDD Core versions that needed updates. Each had a column of Patched, Tested, and Deployed. This way we could easily track and make sure nothing fell through the cracks.

### Testing

For the extensions, it was a bulk of manual testing. For Core however, we have PHPUnit setup for unit testing. We needed a quick way to quickly test applying a patch file to a version, and then run PHPUnit on it. Bash Aliases and scripting to the rescue. We had already outlined in our spreadsheet what EDD Core version got which patch. **Patch, test, un-patch, repeat** Started off with a bash script that took two arguments: EDD Version and Patch file name. _A quick bash alias to make the typing shorter_

alias testpatch="bash ~/scripts/testpatch"

_Then this little file in my `~/scripts` folder_

#!/usr/bin/env bash
if \[ $# -lt 2 \]; then
        echo "usage: $0 <edd\_version> <patch name>"
        exit 1
fi

VER=$1
PATCH=$2
git checkout $VER
git apply -v ~/Dropbox/Add\\ Ons/patches/Core/$PATCH
phpunit
git apply -Rv ~/Dropbox/Add\\ Ons/patches/Core/$PATCH

And now I can type something like the following to test version 2.3.6 with the file args.patch:

$ testpatch 2.3.6 args.patch

This ensured we never broke the unit tests in our changes. We still had some manual testing to do, but this was a good start, and also allowed us to quickly test the patch files.

### Deploying

I used two bash alias/script combinations for Deploying. One to do all the commits to the master branch of the repositories, and one to tag the new version after I had done the version bumps. They were: **Committing** _The alias for committing the repo I'm currently on_

alias committhis="git commit -am 'Better query arg handling' && git push origin master"

No script needed here, just some combined commands. **Tagging** _The alias for tagging the repo I'm currently on_

alias tagthis="bash ~/scripts/tagthis"

_The script to tag_

#!/usr/bin/env bash
if \[ $# -lt 1 \]; then
        echo "usage: $0 <version>"
        exit 1
fi

VER=$1
git tag -a $VER -m 'Tagging $VER' && git push origin $VER

This let me type a command like:

$ tagthis 1.1.1

And a tag would be created in GitHub for use later. The rest of the process was a manual uploading of .zip files and publishing the Download Updates. I have no idea how long it would have taken it to do this process without these little scripts, but I'd estimate it would have take quite a bit longer. And with this type of consistency (not typing manually over and over), you help mitigate the risk of making a typo.

### The After Action Review

So, this is the first time we've had to do this massive of an effort to release a large number of updates. It's unprecedented really. Because of this, we have some takeaways that we're going to look to institute in our team.

1.  Better Development Workflow  
    
    Wether it's a super popular repository, or an extremely obscure one, we need to implement a consistent workflow starting with issue branches, pull requests, and nothing being in master branches until it's 100% tested and ready for release.
    
2.  Consistent naming conventions  
    
    The biggest issue here was with Repositories named in Camel Case, but deployable folders being all lowercase. This just caused some manual work that would have been safer had it been consistent.
    
3.  Front-End Testing  
    
    Lower on the list, but we have discussed implementing Selenium Suites for testing front-end changes. The largest issues with this release was the changes affected outputted HTML to the end user, which sometimes isn't as easily tested with PHPUnit.
    

### Conclusion

Overall I'm **_extremely_** happy with the way the team stepped up to handle Support and other development issues while Pippin and I took care of these changes. When we needed something, they were there to help out and kept asking what they could to do help more.
