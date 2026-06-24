---
title: 'Generating Star Ratings with Dashicons'
description: 'Recently I was working on a ratings website, and needed a quick way to consistently generate the current star ratings of the items. Many of you are familiar…'
pubDate: 2014-07-07
heroImage: '/images/blog/stars.jpg'
---
Recently I was working on a ratings website, and needed a quick way to consistently generate the current star ratings of the items. Many of you are familiar with the 'dashicons' font that is shipped with WordPress, but if you aren't, it's a simple icon-font available to theme and plugin developers. You're probably more familiar with it than you think, it's used to add icons to the WordPress admin dashboard menu:

![Screen Shot 2014-07-07 at 12.27.33 AM](/images/blog/Screen-Shot-2014-07-07-at-12.27.33-AM-174x300.png)

There are 3 icons I was interested in, and they are the 3 stars:  
![Screen Shot 2014-07-07 at 12.41.41 AM](/images/blog/Screen-Shot-2014-07-07-at-12.41.41-AM-300x86.png)

With those icons, I could generate something that looked like this:  
![Screen Shot 2014-07-07 at 12.34.11 AM](/images/blog/Screen-Shot-2014-07-07-at-12.34.11-AM.png)

This function allows accuracy to the closest 1/2 star. You simply pass in your rating number, and it will return you HTML output for the stars.

function kfg\_generate\_stars( $number ) {
	// Get the whole number
	$whole = floor( $number );

// Find out if our number contains a decimal  
	$fraction = $number - $whole;

$i = 0;  
	// This is the total number of stars to generate.  
	$total = 5;  
	$output = '';

// Generate the filled stars  
	while( $i < $whole ) {  
		$output .= '<span class="ratings dashicons dashicons-star-filled"></span>';  
		$i++;  
	}

// Generate the half star, if needed  
	if ( $fraction > 0 ) {  
		$output .= '<span class="ratings dashicons dashicons-star-half"></span>';  
		$i++;  
	}

// Until total is met, generate empty stars  
	if ( $i < $total ) {  
		while ( $i < $total ) {  
			$output .= '<span class="ratings dashicons dashicons-star-empty"></span>';  
			$i++;  
		}  
	}

return $output;  
}

As a note, if your theme doesn't include dashicons in the front end (by default it's only in the Admin), you can use the following to add it:

function kfg\_load\_dashicons() {
    wp\_enqueue\_style( 'dashicons' );
}
add\_action( 'wp\_enqueue\_scripts', 'kfg\_load\_dashicons' );

To get a full listing of items included in the Dashicons font, visit [http://melchoyce.github.io/dashicons/](http://melchoyce.github.io/dashicons/)

Image courtesy of [Scott Cresswell via Flickr](https://www.flickr.com/photos/scott-s_photos/)
