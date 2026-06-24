---
title: 'Prevent additional discounts when renewal discounts are applied'
published: 2015-04-07
description: 'Update: This is now a feature that''s built directly into the Software Licensing add-on for Easy Digital Downloads . It can be accessed in Downloads >…'
image: '/images/blog/Ticket.jpg'
tags: ['Easy Digital Downloads', 'eCommerce', 'GitHub', 'Open Source', 'Plugins', 'WordPress']
category: 'Software Development'
draft: false
---
**Update:** This is now a feature that's built directly into the [Software Licensing add-on for Easy Digital Downloads](https://chrisk.io/EDDSL). It can be accessed in Downloads > Settings > Extensions > Software Licensing. From there check the box for "Disable Discount Codes on Renewals".

Recently I had a question about [Easy Digital Downloads - Software Licensing](https://chrisk.io/EDDSL) that I hadn't thought about before. When offering a renewal discount, how can we prevent any additional discounts from being applied to the cart? You see, depending on the discount code someone has, you could be losing money if you offer a discount to renew a license, and then a discount code is used on top of that.  
  
So here's the quick snippet, and what it looks like on the front end:

function kfg\_check\_if\_is\_renewal( $return ) {

if ( EDD()->session->get( 'edd\_is\_renewal' ) ) {  
		edd\_set\_error( 'edd-discount-error', \_\_( 'This discount is not valid with renewals.', 'edd' ) );  
		return false;  
	}

return $return;

}  
add\_filter( 'edd\_is\_discount\_valid', 'kfg\_check\_if\_is\_renewal', 99, 1 );

Then if a customer tries to apply a discount code, with a renewal, they'll see the following:  
![Screen Shot 2015-04-07 at 11.04.01 PM](/images/blog/Screen-Shot-2015-04-07-at-11.04.01-PM.png)

If you would like a single-file plugin for this, you can [get it from the EDD Library](https://github.com/easydigitaldownloads/library/blob/master/checkout/prevent-discounts-with-sl-renewals.php).
