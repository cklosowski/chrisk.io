---
title: 'Code Snippet: Clean up your Local Development Admin Bar'
description: 'As a developer of WordPress plugins, it''s safe to say that my Admin bar is FULL of super useful items added by plugins that help me develop more…'
pubDate: 2015-10-27
heroImage: '/images/blog/15891005718_c1f0a26c99_b.jpg'
---
As a developer of WordPress plugins, it's safe to say that my Admin bar is FULL of super useful items added by plugins that help me develop more efficiently. That being said, it's also full of a bunch of 'junk' that just isn't needed in my local environment most of the time. Case in point, the 'Updates' icon and the 'Comments' icon.

[![Screen Shot 2015-10-27 at 10.16.02 AM](/images/blog/Screen-Shot-2015-10-27-at-10.16.02-AM.png)](/images/blog/Screen-Shot-2015-10-27-at-10.16.02-AM.png)

In addition to all the default items that show up in a Network Install I've got items added by [Query Monitor](https://wordpress.org/plugins/query-monitor/), [Airplane Mode](https://github.com/norcross/airplane-mode), [Debug Bar](https://wordpress.org/plugins/debug-bar/), [Plugin Toggle](https://wordpress.org/plugins/plugin-toggle/), and [my own Blog ID item](https://chrisk.io/2015/02/code-snippet-show-blog-id-admin-header/).

My main machine is a Macbook Air 11" and from time to time, I disconnect from the monitors and work on the single screen, and with that many items, it get's a little crowded. So here's what I've dropped into my own MU plugin to help clean up the interface a bit:

<?php
function kfg\_remove\_admin\_bar\_items( $wp\_admin\_bar ) {
	$wp\_admin\_bar->remove\_node( 'wp-logo' );
	$wp\_admin\_bar->remove\_node( 'updates' );
	$wp\_admin\_bar->remove\_node( 'comments' );
}
add\_action( 'admin\_bar\_menu', 'kfg\_remove\_admin\_bar\_items', PHP\_INT\_MAX, 1 );

With this, I get the following view:

[![Screen Shot 2015-10-27 at 10.20.53 AM](/images/blog/Screen-Shot-2015-10-27-at-10.20.53-AM.png)](/images/blog/Screen-Shot-2015-10-27-at-10.20.53-AM.png)

This both cleans up some of the unnecessary items. The reason for getting rid of the 'updates' notifications is I work mostly off Git branches, which sometimes I'm installing a version that isn't latest on the WordPress.org repository for testing purposes.

Anyway, I hope that helps some devs out in getting rid of items they don't want to see in their development environment. You can [read more about the \`remove\_node\` method on the WordPress Codex](https://codex.wordpress.org/Function_Reference/remove_node).

Cheers.
