---
title: 'Postmeta all the things!'
published: 2013-02-11
description: 'I decided it was time to update the theme for this site to something a little less...kid like? I dunno, it was growing old on me. I always typically just go…'
image: '/images/blog/3778598336_901104ed6a_z1.jpg'
category: 'Software Development'
draft: false
---
I decided it was time to update the theme for this site to something a little less...kid like? I dunno, it was growing old on me. I always typically just go through the basic featured themes on WordPress.org trying to find something that will suit my needs. I don't want to make it a labor of love...just somewhere I can post my thoughts. Anyway, I'm digressing.

I ended up on this nice looking, feature rich, responsive (need this) theme called [Pinboard](http://wordpress.org/extend/themes/pinboard "Pinboard"). Yep, it's a popular one, I'm fine with that. I was having this weird issue where on posts imported from Flickr, a double image was showing, as well as some extra information about the Flickr URL. I decided to dive in.

Turns out, this theme has a function that takes all post meta entries (custom fields) and displays them. Here's the code:

<?php $meta\_keys = get\_post\_meta( get\_the\_ID() ); ?>
<?php foreach( $meta\_keys as $meta => $value ) : ?>
    <?php if( ( '\_' != $meta\[0\] ) && ( 'enclosure' != $meta ) ) : ?>
        <span class="custom-meta"><strong><?php echo $meta; ?>:</strong> <?php echo $value\[0\]; ?></span>
    <?php endif; ?>
<?php endforeach; ?>

This was the cause of my problem. I was seeing entries made by the Flickr import, in my post meta area. I've submitted a support ticket asking for a clarification as to why they would do this or if they'd consider a filter on this. I'll update the post when I hear back.

This is a bad idea for a few reasons, but most importantly, some plugins use this area to store non-user-facing information about the posts. Doing a blanket display of postmeta could result in some improperly formatted or private data being shown to users.

Post image by [motti82](http://www.flickr.com/photos/motti82/3778598336/) via Flickr & Creative commons
