---
title: 'My Perspective on Debugging'
description: 'So earlier tonight I was doing some work for a client and fired off a Tweet in frustration. I''ve embedded it below for easy of use:…'
pubDate: 2013-02-26
heroImage: '/images/blog/3645211083_43ed00c6e5_b1.jpg'
---
So earlier tonight I was doing some work for a client and fired off a Tweet in frustration. I've embedded it below for easy of use:

https://twitter.com/cklosowski/status/306596185366482945

The '#ragequit' was me just stopping work for a while, in frustration, and no, I don't think anyone should quit writing plugins, and no I won't list the plugin and in fact, I deleted the response in which I listed the name. I'm doing this out of respect for the developers as I was so [graciously reminded that we are all human](https://twitter.com/zslabs/status/306608419991851009).

One of the major responses I got was, "Why not just contribute and fix it?!" and I'm going to see if I can help out with that however, it did bring up a valid point...at what point are developers sometimes complacent with the code they release? I know we're all supposed to be 'Embarrassed by 1.0', but that doesn't mean 'Careless with 1.0'.

Developers who write code without display errors (or at least error reporting) turned on are only pulling the shades down to hide the crummy view. Notices and warnings are reminders that we're not quite doing it correctly, and should probably fix it. If your tooth hurts, you go to the dentist. If you have a cough, you go to the doctor. These are symptoms of underlying issues. Same goes with Warnings and Notices. They are symptoms that something isn't quite right and needs a fix. You can live with a sore tooth, or a cough, but life is so much better without them.

As pointed out in a fairly lengthy StackOverflow response about ["Why should I fix E\_NOTICE Errors?"](http://stackoverflow.com/questions/5073642/why-should-i-fix-e-notice-errors):

> 3\. THE BEST REASON
> 
> If you don't fix all the E\_NOTICE errors that you think aren't errors, you will probably grow complacent, and start ignoring the messages, and then one day you when a real error happens, you won't notice it.  

In all the noise, it's hard to determine the real cause of any future errors. So developers of WordPress plugins, please use WP\_DEBUG or at least do your users the favor of [tailing the wpdebug log file](https://twitter.com/tooshel/status/306609837570134016) as Sheldon McGee mentions.

For one of the most straight forward and best resources for debugging information and tools specific to WordPress, check out the [Debugging In WordPress Codex Page](http://codex.wordpress.org/Debugging_in_WordPress).

Now let's all go write some clean code!

Featured Image via [Flick, Creative Commons, and Robert Couse-Baker](http://www.flickr.com/photos/29233640@N07/3645211083/)
