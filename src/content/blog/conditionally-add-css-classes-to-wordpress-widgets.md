---
title: 'Conditionally add CSS classes to WordPress Widgets'
description: 'How to conditionally add CSS classes to a WordPress Widget wrapper element, based off it''s instance settings.'
pubDate: 2017-02-09
---
Recently, while working on the next upcoming release of [Easy Digital Downloads](https://chrisk.io/i/edd), we were challenged with a unique request. The goal, was to hide our Cart Widget when the cart was empty, but show it when the cart had items added to it, then re-hide the widget if it were emptied again. All well and good, but it had to be something that was on a per-instance basis, and happen without a page refresh. Meaning, you could have multiple cart widgets on a page, and they could behave independently.

### Easy Peasy....ish

If you've ever dealt with Widgets in WordPress, then you know as well as I do, no problem, we'll just do some logic within the \`widget\` method of the PHP Class we built, and determine if the cart is empty, add a few CSS classes to a new HTML element that wraps the content, and we're good.

Or so I thought...

It was quickly pointed out that the \`widget\` method doesn't actually contain the 'wrapper' element that WordPress renders your widget within, just the internal content. Consequently, by hiding the content in the widget, we left the wrapper elements visible, and those are what Theme Developers use sometimes, causing a problem. So, back to the drawing board.

### Digging a little deeper

The original request mentioned a filter named `dynamic_sidebar_params`, and this filter was a great idea, except one thing, I couldn't figure out how to access the specific widget instance's settings, to know if we _should_ hide this instance when empty (and do so by adding CSS classes to the wrapper).

Or so I thought....again...

### The solution

It turns out, there are a few methods of the base \`WP\_Widget\` class that you can use to get some instance settings, that I wasn't aware of. Below is the basic outline of a widget class that includes a title option as well as an option to add a CSS Class to the widget wrapper, using the settings:

https://gist.github.com/cklosowski/f473f5234fb3cfe719d7f7a0c2edc5fa

### Breaking it all down

Most of this will look familiar if you've written a widget before, but the key is the inclusion of the `widget_class` method, and the filter hooking into `dynamic_sidebar_params`. What this does, is lets us access part of the Widget that wraps it within the theme, before the output of the widget contents.

This filter will run on each widget loaded on the page, so we first need to make sure that we're looking at an instance of our own widget:  
`if ( strpos( $params[0]['widget_id'], 'ck_example_widget' ) !== false ) {`

After that we get all the settings related to this specific instance of the Widget (since you can have multiple instances of the same widget in some cases).  
`$instance_settings = $all_settings[ $instance_id ];`

Once there, we see if the option to add the class was checked:  
`if ( ! empty( $instance_settings['add_wrapper_class'] ) ) {`

And if we've checked it, perform a regular expression search to add in our new class we want to add to the wrapper.

#### Hope this helps out!
