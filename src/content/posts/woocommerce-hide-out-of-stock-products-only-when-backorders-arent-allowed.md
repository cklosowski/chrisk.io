---
title: 'WooCommerce - Hide out of stock products, only when backorders aren''t allowed'
published: 2015-06-17
description: 'A while back I wrote about how I was using WooCommerce for a site my Wife was running. It''s been running totally solid since then, with very minimal…'
image: '/images/blog/317845866_4ec3a91d4f_b.jpg'
tags: ['eCommerce', 'WooCommerce', 'WordPress']
category: 'Software Development'
draft: false
---
A while back I wrote about [how I was using WooCommerce](https://chrisk.io/2014/11/not-everything-nail/) for a site my Wife was running. It's been running totally solid since then, with very minimal involvement from my part, which was my goal. Recently she asked a couple questions about how to achieve some things and I couldn't find a way. They were:

1.  Charge a fee based off the category a product belonged to
2.  Only show items out of stock that were accepting backorders

The first, I turned into a plugin, available for purchase: [WooCommerce - Category Fees plugin](https://filament-studios.com/downloads/woocommerce-category-fees/). The second, was a custom function that I wrote.

## The Problem

WooCommerce as a plugin to 'Hide out of stock items', the problem is that it also hides out of stock items that are accepting backorders. We wanted to hide out of stock items, unless they accepted backorders.

## The Solution

So heres my quick fix. First, leave the box to 'Hide out of stock items from the catalog' _**unchecked**_. Then paste this into the appropriate plugin or theme file:

function kfg\_show\_backorders( $is\_visible, $id ) {
    $product = new wC\_Product( $id );

if ( ! $product->is\_in\_stock() && ! $product->backorders\_allowed() ) {  
        $is\_visible = false;  
    }

return $is\_visible;  
}  
add\_filter( 'woocommerce\_product\_is\_visible', 'kfg\_show\_backorders', 10, 2 );

\[purchase\_link id="2457" text="Purchase" style="button" color="green"\]

Now, items that are out of stock that _accept_ backorders will be visible, while out of stock items that _do not_ accept backorders will be hidden.

**Update:** Commenter Oliver found out how to make variation products gray out variations that are sold out, yet keep other variations selectable in [this comment below](https://chrisk.io/woocommerce-hide-out-of-stock-products-only-when-backorders-arent-allowed/#comment-3564).
