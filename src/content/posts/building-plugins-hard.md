---
title: 'Why Building Plugins for Others can be Hard'
published: 2013-01-16
description: 'For those who don''t know, I''ve been developing WordPress plugins for about 5 years. While it started out as some random small time stuff, it''s recently…'
image: '/images/blog/6390464879_1cdefc34af_b1.jpg'
tags: ['PHP', 'Plugins', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
For those who don't know, I've been developing WordPress plugins for about 5 years. While it started out as some random small time stuff, it's recently increased in scale with the release of [Pushover Notifications for WordPress](http://wp-push.com "Pushover Notifications for WordPress"). All of my plugins, including Pushover Notifications for WordPress were built because I found a need in WordPress and decided to fulfill it. This is a great method of development because you are the user and the developer. A great combination when it comes to bugs, features, user experience, etc.

So shortly after the release of Pushover Notifications for WordPress, I got hit up by Adam Pickering (of [MintThemes.com](http://www.mintthemes.com/)) to possibly develop an extension for [Easy Digital Downloads](https://easydigitaldownloads.com/) (by [Pippin Williamson](http://pippinsplugins.com/)). There's a nice revenue sharing model with Easy Digital Downloads and it seemedd simple enough so away I went, coding up an integration of our two plugins.

Here we are, a couple months later, and up until today, I've never used Easy Digital Downloads on a live site with my extension, just a development environment. If you aren't in software development, let me be the first to mention that having a development environment exactly replicate a production site isn't 100% possible sometimes, even less when your plugin is used on a platform like WordPress. You have to write flexible code, and sometimes, we fail.

Besides that, developing a plugin (or any application for that matter) when you aren't a user can be extremely difficult, even more so when it involves a purchase path (payment gateways and what not). I've never realized the needs, wants, and annoyances of my work until I actually used it this week. I've never noticed little things that other users probably curse my name at.

So why write about this now? Well, like I said, I finally released WP-Push.com and with it, my first paid extension that I'm hosting and selling, [Pushover Notifications for bbPress](http://wp-push.com/extensions/bbpress-extension/). Today, seeing that first push notification of an actual sale (not just a test sale worth nothing), seeing my first sales report with real money in it, watching a new user signup...it all just clicked! I finally saw what my users found so exciting about the hard work I had done.

While every application you develop may not be one you can use personally, I would implore you to build a personal relationship with some of your more active users. People who are able to give good feedback and can steer the direction of your (but in reality _their_) product will be more valuable than you can imagine. If you can become an end user, there's nothing quite like seeing all those things people requested work right in front of you in a live environment.

Post Image by [Killer129](http://www.flickr.com/photos/kiler129/6390464879/) under Creative Commons
