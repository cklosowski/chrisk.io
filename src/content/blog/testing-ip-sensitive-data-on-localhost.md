---
title: 'Testing IP sensitive data on localhost'
description: 'Recently I''ve been doing some updates to the Fraud Monitor extension for Easy Digital Downloads which helps store owners avoid costly charge-back fees from…'
pubDate: 2016-01-25
heroImage: '/images/blog/ip-address.jpg'
---
Recently I've been doing some updates to the [Fraud Monitor extension for Easy Digital Downloads](https://chrisk.io/fraud-monitor) which helps store owners avoid costly charge-back fees from fraudulent credit card purchases. The most recent feature is one that verifies the IP address that is downloading the files is in a country not on the blacklist.

When writing this feature I found out that most local hosts (used in development) use either 127.0.0.1 or ::1 as the 'IP Address' of the local computer making a request. Even in setups with vagrant and other situations a private IP is what is reveled as the IP making the purchase. The problem is, these IPs are not query-able in tools that do GeoIP lookups, to determine which country, state, or even city an IP address is registered in. This is a key feature of a fraud detection tool. For this reason, I felt it necessary to write a little plugin that does a lookup of my externally facing IP (assigned by my Internet Service Provider) and use IT as my `$_SERVER['REMOTE_ADDR']`.

By doing this, now when I make purchase in Easy Digital Downloads (in my local development environment), my IP address will be one that can be run through Geo IP lookups and WHOIS requests, allowing me to develop tools based on these types of services.

I've built a little single file plugin for WordPress to use on your local host during development that checks the external IP once per hour to use it instead of your 'local ip'.

Below, you can download a single file plugin to install on your local WordPress site, allowing you to have the same freedoms to do GeoIP lookups in your WordPress projects.

\[purchase\_link id="2466" text="Purchase" style="button" color="green"\]

The code looks like this:

<?php
/\*\*
 \* Plugin Name: Public IP FIx
 \* Plugin URI:  https://chrisk.io
 \* Description: For testing IP sensitive code, use the public facing IP in your localhost
 \* Version:     1.0
 \* Author:      Filament Studios
 \* Author URI:  https://filament-studios.com
 \* License:     GPL-2.0+
 \*/

/\*\*  
 \*  
 \* The point of this plugin is to allow a local development environment to identify  
 \* the REMOTE\_ADDR of the user as the public facing IP, which is able to be used in  
 \* GeoIP lookups and WHOIS checks for things like fraud services and other types of  
 \* eCommerce and rate limiting checks  
 \*  
 \*/

if ( ! defined( 'ABSPATH' ) ) {  
	exit;  
}

function kfg\_use\_external\_ip() {

$ip = get\_transient( '\_kfg\_remote\_ip' );

if ( false === $ip ) {  
		$response = wp\_remote\_get( 'http://bot.whatismyipaddress.com/' );

if ( ! is\_wp\_error( $response ) ) {  
			$body = wp\_remote\_retrieve\_body( $response );  
			$ip = $body;  
			set\_transient( '\_kfg\_remote\_ip', $ip, HOUR\_IN\_SECONDS );  
		}

}

if ( false !== filter\_var( $ip, FILTER\_VALIDATE\_IP, FILTER\_FLAG\_NO\_PRIV\_RANGE | FILTER\_FLAG\_NO\_RES\_RANGE ) ) {  
		$\_SERVER\['REMOTE\_ADDR'\] = $ip;  
	}

}  
add\_action( 'plugins\_loaded', 'kfg\_use\_external\_ip', 1 );  

\[purchase\_link id="2466" text="Purchase" style="button" color="green"\]
