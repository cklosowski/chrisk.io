---
title: 'The benefits of WordPress actions and filters'
published: 2013-06-07
description: 'As a WordPress plugin developer, the 3 most important things I put in my code are: Translatable Text (__, _e, _n, etc) apply_filters do_action Why are those…'
image: '/images/blog/8188141853_310284d92b1.jpg'
tags: ['apply_filters', 'code', 'do_action', 'Open Source', 'PHP', 'Plugins', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
As a WordPress plugin developer, the 3 most important things I put in my code are:

1.  Translatable Text (\_\_, \_e, \_n, etc)
2.  apply\_filters
3.  do\_action

Why are those the most important, you might ask? Freedom. They are important because they allow any user or developer to bend my plugins to their specific needs. The whole POINT of the plugin system for WordPress is to _help_ people extend their site to be so much more than a standard blogging platform. I was looking into building a new (and free) Pushover Notification extension for a plugin tonight, when I came across something that frustrated the heck out of me.

-   Plugin Downloads: 1,717,451
-   Searching 138 files:

-   Search code for do\_action: 0 found
-   Search code for apply\_filters: 3 found

One of the top 20 plugins on the WordPress repository, with almost 1.75 million downloads, has but a TRACE of extensibility.

To contrast, let me give you some stats on another plugin:

-   Plugin Downloads: 99,948
-   Searching 296 files:

-   Search code for do\_action: 217 found across 45 files
-   Search code for apply\_filters: 280 found across 50 files

-   Add On Plugins: ~126

Because this second plugin is so extensibile, at least 126 'extensions' have been created to make this plugin extend past it's core functionality. This is all due to the inclusion of almost 500 points of integration that the developers have created.

My frustration with the first plugin is that, because the developers simply didn't think it was necessary to use actions and filters, the plugin can never become more than the sum of it's own parts. This saddens me as a developer, but more as a WordPress user and community member.

If you aren't including actions and filters in your plugins because you aren't quite sure where to get started, that's ok, we've all been at that point. Start by reading up on the codex pages for both:

[do\_action](http://codex.wordpress.org/Function_Reference/do_action)  
[apply\_filters](http://codex.wordpress.org/Function_Reference/apply_filters)

Tom McFarlin also wrote up a great [Beginners Guide to WordPress Actions and Filters](http://wp.tutsplus.com/tutorials/the-beginners-guide-to-wordpress-actions-and-filters/)

Now go out and start applying filters and doing actions!
