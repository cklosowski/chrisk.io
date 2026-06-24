---
title: 'A Call For Changelog Transparency'
description: 'The other day I was notified by the iOS App Store that two of my apps had available updates. I always get excited when updates come. "Is it new features?…'
pubDate: 2013-06-23
heroImage: '/images/blog/bug-fixes1.png'
---
The other day I was notified by the iOS App Store that two of my apps had available updates. I always get excited when updates come. "Is it new features? Long standing annoyances fixed? Performance boosts?" All to often though this is all I see:

[![bug-fixes](/images/blog/bug-fixes-300x216.png)](/images/blog/bug-fixes.png)

"- Bug Fixes" is possibly my biggest pet-peeve practice of software developers. Great you fixed some stuff. Was it 1 bug or 100 bugs? Were they security related? Is it the bug I told your support staff about months ago? I'll never know because of this changelog. One thing that a professional developer does is take ownership of their code. If you made the mistake, take the blame. Changelog transparency is just one way of doing this. Being clear about what you change leads to being clear about what you have/are doing.

#### How embarrassing...

Look, as a developer I get it. Sometimes your bug fixes are because you did something you find "stupid", and that's embarrassing. Misspelling a variable or function name, not verifying a data set, or just general mistakes sometimes sneak their way into a commit. That happens. But why hide the fact that you aren't perfect? You don't have to go into details, but you could explain what your bug fix...well...fixes! That's a novel idea. Transparency in your mistakes.

#### Identify new bugs

One other reason to be more clear of your "bug fixes" is to allow new bugs to be identified easier. If your new code introduces a bug, having a list of items you did in the last release might help you narrow down your debugging window. One of the primary focuses of change management is logging every change. If something goes wrong during a deployment or release, giving proper information can help avoid hours of lost time tracking down a bug.

#### When did we add that one feature that does that one thing?

If your a developer who iterates quickly, you might easily forget when you made a specific change or added a new feature. Here comes the changelog to the rescue. I prefer to list each item in my change log with one of the following:

-   FIX - For bug fixes
-   NEW - For new features
-   ENHANCEMENT - For smaller updates to current features

So let's try and give our users and other developers a little more transparency when we push a new release and avoid using 'Bug Fixes' in our changelogs. Here are two changelogs for WordPress plugins that you can take examples from:

[WordPress SEO by Yoast](http://wordpress.org/plugins/wordpress-seo/changelog/)  
[Easy Digital Downloads](http://wordpress.org/plugins/easy-digital-downloads/changelog/)
