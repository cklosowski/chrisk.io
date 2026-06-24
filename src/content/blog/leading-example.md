---
title: 'Leading By Example'
description: 'I''ve previously written a few posts about using WordPress Actions and Filters to better extend your plugins and/or themes. This time though, I want to talk…'
pubDate: 2014-08-15
heroImage: '/images/blog/4211977680_a7ed8a38c1_o.jpg'
---
I've previously written a few posts about using WordPress Actions and Filters to better extend your plugins and/or themes. This time though, I want to talk about leading by example, and using your own hooks and filters to add functionality. What does this mean? It means where a hook or filter exists, you should use it to add your built in functionality. It's probably easiest to explain by example...so here is a recent issue I ran into. I wanted the ability to create an arbitrary number of 'tab' sections in a plugin settings page I was building. Something like this:  
  
![Screen Shot 2014-08-15 at 3.16.04 PM](/images/blog/Screen-Shot-2014-08-15-at-3.16.04-PM-1024x141.png)

Now, hard coding a list of tabs is easy, but what if I didn't want to always show the tabs, just the ones that were active? Well, I could simply make the action of outputting the tabs, an filter that get's looped on. Like this:

\[php light=true\]  
function ck\_generate\_tabs() {  
$tabs = apply\_filters( 'ck\_metabox\_tabs', array() );  
foreach ( $tabs as $key => $values ) {  
?>

-   [](<#\<?php echo $key; ?\>>)

$i++;  
}  
}  
\[/php\]

If we go no further, we'll have an empty set, and nothing will foreach on, however, if we do something like the following, we'll add an element to the array, therefore allowing a loop and generating tabs:

\[php light=true\]  
function ck\_tw\_add\_meta\_tab( $tabs ) {  
$tabs\['tw'\] = array( 'name' => \_\_( 'Twitter', 'ppp-txt' ) );

return $tabs;  
}  
add\_filter( 'ck\_metabox\_tabs', 'ck\_tw\_add\_meta\_tab', 10, 1 );  
\[/php\]

This is great for 2 reasons.

1.  It makes sure our hooks and filters work!  
    I can't tell you how important this is. By using it, we've essentially tested it works as expected, which will make other developers happy.
2.  It provides other developers a 'guide' on how to extend your platform.

The chain we end up with is, you call `ck_generate_tabs` which will then run the `apply_filters` on `ck_metabox_tabs`, which then triggers `ck_tw_add_meta_tab` to add an item to the empty array and then return it, allowing the original function to generate the tabs.

This example is clearly missing styles and JavaScript to allow this to fully function, but this should get you an example of how hooks and filters in your own code, that you, yourself are using.
