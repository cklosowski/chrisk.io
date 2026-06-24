---
title: 'Hide categories with no visible products in the Product Category Widget'
published: 2015-11-07
description: 'By default, the WordPress wp_list_categories function will...get a list of categories. Surprising, I know. It will also even exclude empty categories if you…'
image: '/images/blog/Venns_four_ellipse_construction.png'
tags: ['code', 'eCommerce', 'Evergreen', 'PHP', 'WooCommerce', 'WordPress']
category: 'Software Development'
draft: false
---
By default, the WordPress wp\_list\_categories function will...get a list of categories. Surprising, I know. It will also even exclude empty categories if you want, meaning if a category has no items belonging to it, it will not display it.

It's awesome, I really dig this function. The Woocommerce Product Categories Widget uses it to display a list of categories for your Woocommerce products. It will even hide categories that do not have any products in them, much like the the default behavior for post categories, etc.

Where it doesn't always work though, is when the product is published, but isn't visible, due to stock or backorder status...so here's a quick function that will look at the categories in the product list, find the products in the category, and if none of the products are visible, it will not display the category in the widget:  
\[purchase\_link id="3187" text="Get Plugin File" style="button" color="green"\]  
https://gist.github.com/cklosowski/df41c06eb21f0405a618606f2b0daacc  
\[purchase\_link id="3187" text="Get Plugin File" style="button" color="green"\]
