---
title: '5 Things I''ve Learned About Writing Flexible Plugins'
published: 2013-02-05
description: 'This year I had the opportunity to travel to WordCamp San Francisco where I saw a myriad of great speakers and met a ton of great WordPress developers,…'
image: '/images/blog/449769140_a4480b0025_o1.jpg'
tags: ['Open Source', 'PHP', 'WordPress']
category: 'Software Development'
draft: false
---
This year I had the opportunity to travel to WordCamp San Francisco where I saw a myriad of great speakers and met a ton of great WordPress developers, users, and everything in between. One of the most influential talks, for me at least, was by Michael Fields on "Extendable Extensions". You can watch the video on WordPress.tv: [http://wordpress.tv/2012/08/27/michael-fields-extendable-extensions/](http://wordpress.tv/2012/08/27/michael-fields-extendable-extensions/)

So, after a while I started try and find ways I could include this in my plugins. Let me tell you, I've never coded like this before. While attempting this, I've started to realize how non-friendly my code was to other developers or people who wanted to change just the smallest detail about the output of my plugin. I was pretty pumped at this point to move forward and with Pushover Notifications for WordPress, I'm living it. [Pushover Notifications for WordPress](https://wp-push.com/) is pretty extensible, and is getting more and more extensible with every release.

**Here's 5 things I've started focusing on while writing my plugins to help make them more extensible.**

### apply\_filters All The Things!

`apply_filters()` is BY FAR the easiest way to make your code extendable. If your plugin displays text to a user and you can think of even 1 instance where someone might to change your verbiage, `apply_filters()`. If you have an array of elements, and you think someone might want to add more to it at any point, `apply_filters()`. This is a great tool, if you use it correctly. Don't just pass along the string or array you want to modify. The function also allows arguments to be passed. If you are modifying user data, send the user ID as an argument, if it's post content send the post ID. You get the point.

[Read more about apply\_filters() in the codex.](http://codex.wordpress.org/Function_Reference/apply_filters)

### Make your admin menus extendable

I've started putting `do_action()` references to my settings pages and it's helped me realize that not only can someone change the content of your current settings, but they can add their own settings to your plugin. This is the next step in full extensible-ness. Without this, your plugin will eternally be just your plugin, nothing more, nothing less. Take it to the next level by putting in your own action hooks for people (or even yourself) to extend into.

### Never assume your core plugin is available

If you've already started doing the first two items I've listed, then this is your most important take away. It's easy in our development sandboxes to think miss a real world scenario. I mean, who really would deactivate our one of our plugins that requires another?

Well, users do, and as developers, it's our job to make sure we degrade gracefully. I failed this goal recently and let me tell you, it sucks. Use the 'function\_exists' and 'class\_exists' functions to verify the function or method you are about to use is available to you, prior to executing. Building plugins that work together can yield great results, just make sure you are yielding on the side of caution when relying on content from outside the core plugin.

In my scenario, one of my extensions to Pushover Notifications for WordPress was calling a method in the core plugin looking for some settings. The error happened when the core plugin was being upgraded through the WordPress automatic updater. For a brief moment, my core plugin was unavailable while the changes were being applied, which caused my extension to return a server 500 error, halting the upgrade and corrupting the core plugin. How am I preventing it now? I'm avoiding calls to the core plugin, and running function\_exists checks prior to any calls to the core plugin.

### Everybody wants a Log

Some of you may not [get that reference](http://www.youtube.com/watch?v=eusMzC7Rx7M), but the phrase "It's better than bad, it's Good" is oh so true. If you are building something for every day use by others, build in the option for logging functionality. It makes it easier for you to troubleshoot errors in development but also makes your user's feedback more valuable. If you don't quite know how to start with logging, try out [Pippin's Plugins WP\_Logging General Logging Class for WordPress](http://pippinsplugins.com/wp-logging/)

### Be embarassed by 1.0

There's a famous Opbeat Engineering quote that's slightly uncouth but goes something like this:

> F\*\*\* It, Ship It

Since we're talking WordPress here, let's look at a slightly more classy rendition of the same principal, courtesy of Ma.tt (Matt Mullenweg):

> ...if you’re not embarrassed when you ship your first version you waited too long.

You're going to have mistakes, unknown conflicts, and in some cases failure. That's part of learning and executing. Failure is always an option, but that's not a bad thing. Ship early, ship often, and never stop creating. The only thing better than getting your first bug report, is closing your first bug report as fixed. Also, bug reports mean people are using your product. Think of it that way.

I know this got a little long winded and probably isn't as technical as some people may want, but these are the 5 key points I've been trying to keep in my mind while working on my latest batch of extensions and it's really helped change my mindset on how I write my code.

Post Image via Flickr & Creative Commons by [ATOMIC Hot Links](http://www.flickr.com/photos/7552532@N07/449769140/)
