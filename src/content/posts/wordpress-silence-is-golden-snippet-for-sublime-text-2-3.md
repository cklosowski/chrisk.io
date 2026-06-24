---
title: 'WordPress Silence is Golden snippet for Sublime Text 2/3'
published: 2015-07-22
description: 'When I''m writing plugins for WordPress, there are a lot of ''models'' I follow to help speed up the process and one of my favorites is using snippets in…'
image: '/images/blog/silence.jpg'
tags: ['Open Source', 'PHP', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
When I'm writing plugins for WordPress, there are a lot of 'models' I follow to help speed up the process and one of my favorites is using snippets in Sublime Text. In WordPress, when building plugins, it's common to use the following code at the beginning of PHP files you do not want to be accessed directly:

<?php
if ( ! defined( 'ABSPATH' ) ) {
    exit;
}

Some people add a comment like `// Silence is golden` to this to be witty.

#### What does this do?

Well, since PHP files can be directly accessed from the web browser, anything you don't want to be loaded individually (without the rest of your plugin) needs a way to prevent this. What this does is looks for the constant `ABSPATH`, which is defined during the WordPress load process. The `wp-load.php` file to be specific. This means that unless WordPress has loaded, our file cannot be accessed directly from the browser.

#### I'm kind of forgetful

Well, I often forget to add this to the beginning of new files added to my projects for the sheer fact that I'm in the mindset of getting something written down quickly...so, I've turned it into a snippet to make it easy and quick to add it, without losing a thought. The following is a Sublime Text Snippet that you can save it as `Packages/User/silence-is-golden.sublime-snippet` in the location that Sublime Text stores packages, that then lets you simply start typing `silence`, and hit `enter` to enter this quick if statement.

<snippet>
	<content><!\[CDATA\[
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
\]\]></content>
	<tabTrigger>silence</tabTrigger>
	<scope>source.php</scope>
</snippet>

\[purchase\_link id="2449" text="Purchase" style="button" color="green"\]

The workflow looks something like this: ![Screen Shot 2015-07-22 at 2.13.24 PM](/images/blog/Screen-Shot-2015-07-22-at-2.13.24-PM.png) **Hit 'Enter'** ![Screen Shot 2015-07-22 at 2.14.47 PM](/images/blog/Screen-Shot-2015-07-22-at-2.14.47-PM.png)
