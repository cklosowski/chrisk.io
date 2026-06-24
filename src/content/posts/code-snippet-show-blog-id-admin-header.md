---
title: 'Code Snippet: Show blog ID in admin header'
published: 2015-02-20
description: 'Just recently I ran into a case where I had to quickly look something up in the database of my WordPress development environment. I typically do this via a…'
image: '/images/blog/id-e1420074238916.png'
tags: ['Open Source', 'Plugins', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
Just recently I ran into a case where I had to quickly look something up in the database of my WordPress development environment. I typically do this via a program called Sequel Pro, which helps give some visualization to your database. I love Command Line tools, but sometimes I prefer the visuals to do some troubleshooting.

If you've ever looked at a WordPress database, you'll typically see tables like `wp_posts, wp_postameta, and wp_options`. In multisite however, things like the posts table, postmeta and options are in tables that contain the `blog_id`, giving us `wp_3_posts, wp_3_postmeta, and wp_3_options`. No problem at all if your multisite only has a couple sites setup, but when you use it for your development environment, you get something like this:  
  
![Screen Shot 2015-02-20 at 11.32.51 AM](/images/blog/Screen-Shot-2015-02-20-at-11.32.51-AM.png)

Determining what blog ID you are looking at, isn't quite easy. So here's a quick snippet that will drop the current blog ID in the admin header, like so:

![Screen Shot 2015-02-20 at 11.35.06 AM](/images/blog/Screen-Shot-2015-02-20-at-11.35.06-AM.png)

function kfg\_toolbar\_blog\_id( $wp\_admin\_bar ) {
	$args = array(
		'id'    => 'blog\_id',
		'title' => 'Blog #' . get\_current\_blog\_id()
	);
	$wp\_admin\_bar->add\_node( $args );
}
add\_action( 'admin\_bar\_menu', 'kfg\_toolbar\_blog\_id', 999 );
