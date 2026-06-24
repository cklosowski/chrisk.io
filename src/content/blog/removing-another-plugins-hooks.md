---
title: 'Removing another plugins hooks'
description: 'The Problem Recently, I was working on a support thread where the user was attempting to override the default functionality of Easy Digital Downloads by…'
pubDate: 2014-03-03
heroImage: '/images/blog/61OwKtAi1vL._SL1500_.jpg'
---
##### The Problem

Recently, I was working on a support thread where the user was attempting to override the default functionality of Easy Digital Downloads by using the `remove_action()` function. This was being done in a custom plugin. This function allows you to negate any `add_action()` created by another plugin, theme, or WordPress core. Their code, at a basic level, looked like this:  

<?php
/\*\*
 \* Plugin Name: Some Custom Plugin
 \* Plugin URI:  ...
 \* Description: Another custom plugin
 \* Author:      ...
 \* Author URI:  ...
 \* Version:     ...
 \* Text Domain: ...
 \*/

remove\_action( 'edd\_purchase\_form\_after\_user\_info', 'edd\_user\_info\_fields' );  
remove\_action( 'edd\_register\_fields\_before', 'edd\_user\_info\_fields' );

function new\_edd\_user\_info\_fields() {  
 // Replace the checkout form user fields  
}  
add\_action( 'edd\_purchase\_form\_after\_user\_info', 'new\_edd\_user\_info\_fields' );  
add\_action( 'edd\_register\_fields\_before', 'new\_edd\_user\_info\_fields' );

In short, they were trying to write a custom set of customer info fields on the checkout screen, by overriding the defaults using `remove_action`. This wasn't working for them however...I'll give you a second to think about why. Go ahead, get your thoughts in _order_.

##### The Explanation

The issue at hand, is plugin load order. WordPress loads the code for plugins in the following order:

1.  Must Use Plugins (or mu-plugins)
2.  Network Activated Plugins (if it's a multisite install)
3.  Plugins in the 'plugins\_activated' option in **alphabetical order**

What was basically happening, is this custom plugin was loading _before_ Easy Digital Downloads, resulting in the `remove_action()` was being called before the `add_action()` that EDD was using.

##### The Solution

So how did we solve it? Pretty easily actually...

add\_action( 'plugins\_loaded', 'ck\_edd\_remove\_personal\_info', 99 );
function ck\_edd\_remove\_personal\_info() {
	remove\_action( 'edd\_purchase\_form\_after\_user\_info', 'edd\_user\_info\_fields' );
	remove\_action( 'edd\_register\_fields\_before', 'edd\_user\_info\_fields' );
}

What this allowed us to do is wait until the last possible moment of the `plugins_loaded` hook using the '99' parameter for order, and then tell WordPress to remove the hooks run by EDD. Then we were free to add our own hooks to make a personalized checkout screen.

##### Any gotchas?

As with all software development, there's probably a few edge cases where this won't work. If the hooks and filters are determining anything before the end of plugins loaded, you might have an issue, but for most general use cases, this should do the trick.
