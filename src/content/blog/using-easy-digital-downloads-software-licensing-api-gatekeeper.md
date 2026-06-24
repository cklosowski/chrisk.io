---
title: 'Using Easy Digital Downloads Software Licensing as an API GateKeeper'
description: 'It''s no secret I''m a fan of Easy Digital Downloads as I''m a contributor and support technician Lead Developer for the project. I''m also a HUGE fan of the…'
pubDate: 2014-04-19
heroImage: '/images/blog/gatekeeper.jpg'
---
It's no secret I'm a fan of Easy Digital Downloads as I'm a ~contributor and support technician~ Lead Developer for the project. I'm also a HUGE fan of the [Software Licensing Extension](https://chrisk.io/EDDSL) we sell for it. While it's a verify flexible extension, the vast majority of people use it to sell WordPress Plugins and Themes, as it enables users to update the items from within their WordPress admin. I needed to take it a bit further though. During the development of [Post Promoter Pro](https://postpromoterpro.com) I found it necessary for the plugin to periodically "call home" (once a week in this case) to postpromoterpro.com to get updated social media tokens and data necessary for proper functionality.

The key here though, was I didn't want just anybody to be able to access my API. I wanted any customer with a valid or expired license key to be able to retrieve this data. In your case, you may just want valid, but in my case I found it beneficial to the users to allow this to work after expiration, they just won't get updates to the plugin itself. So here's what I did.  
  
_This is a pretty code heavy example, so I apologize ahead of time_.

The following code does require the [Software Licensing extension](https://chrisk.io/EDDSL) and [Easy Digital Downloads](https://chrisk.io/EDD) be installed and activated.

### On our site running EDD Software Licensing

We need to create an API endpoint for the plugin to call. Here's one I built. It receives a license key, and checks it's status, returning the appropriate data for each case.

\[purchase\_link id="2436" text="Download as a Plugin" style="button" color="green"\]

<?php
/\*
Plugin Name: EDD SL Endpoint for status
Plugin URI: http://filament-studios.com
Description: Creates and endpoint to get license key status
Version: 1.0
Author: Filament Studios
Author URI: http://filament-studios.com
License: GPLv2
\*/

add\_action( 'init', 'ck\_eddsl\_add\_endpoint' );  
function ck\_eddsl\_add\_endpoint( $rewrite\_rules ) {  
    add\_rewrite\_endpoint( 'ck-eddsl-api', EP\_ALL );  
}

register\_activation\_hook( \_\_FILE\_\_, 'ck\_eddsl\_activation\_tasks' );  
function ck\_eddsl\_activation\_tasks() {  
    flush\_rewrite\_rules();  
}

register\_deactivation\_hook( \_\_FILE\_\_, 'ck\_eddsl\_deactivation\_tasks' );  
function ck\_eddsl\_deactivation\_tasks() {  
    flush\_rewrite\_rules();  
}

add\_filter( 'query\_vars', 'ck\_eddsl\_query\_vars' );  
function ck\_eddsl\_query\_vars( $vars ) {  
    $vars\[\] = 'ck-eddsl-license-key';

return $vars;  
}

add\_action( 'template\_redirect', 'ck\_eddsl\_process\_request', -1 );  
function ck\_eddsl\_process\_request() {  
    global $wp\_query;

// If our endpoint isn't hit, just return  
    if ( ! isset( $wp\_query->query\_vars\['ck-eddsl-api'\] ) ) {  
        return;  
    }

// If they didn't supply a key, return  
    if ( ! isset( $wp\_query->query\_vars\['ck-eddsl-license-key'\] ) ) {  
        ck\_eddsl\_output( array( 'error' => 'No License Key Provided' ) );  
    }

$sl = edd\_software\_licensing();

define( 'EDD\_BYPASS\_NAME\_CHECK', true );  
    $status = $sl->check\_license( array( 'key' => $wp\_query->query\_vars\['ck-eddsl-license-key'\] ) );

// If the key isn't invalid or disabled, return our API data  
    if ( $status != 'invalid' && $status != 'disabled' ) {  
        $data = array( 'foo' => 'bar' );  
        ck\_eddsl\_output( $data );  
    } else {  
        ck\_eddsl\_output( array( 'error' => 'Invalid License Key. Cheetin\\' eh?' ) );  
    }

}

function ck\_eddsl\_output( $output ) {  
    // Helps us exit any output buffers started by plugins or themes  
    $ob\_status = ob\_get\_level();  
    while ( $ob\_status > 0 ) {  
        ob\_end\_clean();  
        $ob\_status--;  
    }

// Output the data for the endpoint  
    header( 'Content-Type: application/json' );  
    echo json\_encode( $output );  
    exit;  
}

\[purchase\_link id="2436" text="Download as a Plugin" style="button" color="green"\]

To test this, just be sure you have a valid license key, and you should be able to send a request like this:  
`https://yoursite.com/ck-eddsl-api?ck-eddsl-license-key=[valid license key here]`  
And receive a response like this:  
`    {"foo": "bar"}    `

NOTE: If your endpoint gives you a 404, just go into your Settings -> Permalinks and click 'Save'

### In the plugin the user installs:

We need to create a way for the plugin the user purchases to call home to our site and retrieve the data depending on the status of their license key. In short this function does the following:

1.  Checks if the transient exists
2.  Requests the data from the API if it doesn't
3.  Stores the data from the API for a week

function ck\_eddsl\_get\_api\_data() {
    $current\_data\_from\_api = get\_transient( 'my\_api\_data' );

if ( !$current\_data\_from\_api ) {  
        $license = trim( get\_option( '\_my\_license\_key' ) );  
        $url = EDDSL\_STORE\_URL . '/ck-eddsl-api?ck-eddsl-license-key=' . $license;  
        $args = array( 'timeout' => 15, 'sslverify' => false );  
        $response = wp\_remote\_get( $url, $args );

if ( is\_wp\_error( $response ) ) {  
            return false;  
        }

$current\_data\_from\_api = json\_decode( wp\_remote\_retrieve\_body( $response ) );  
        if ( !isset( $current\_data\_from\_api->error ) ) {  
            set\_transient( 'my\_api\_data', $current\_data\_from\_api, WEEK\_IN\_SECONDS );  
        }  
    }

// Do something with $current\_data\_from\_api  
}

Now, by calling this function `ck_eddsl_get_api_data`, the plugin will either retrieve the data from the transient if it exists from a previous call, or go to our API to get it, sending along the user's license key.

### Putting it all together

Now that we have the plugin, and the endpoint setup. Your user's sites can request data from you directly, once a week, only if they've ever held a valid license key. This could be used in a number of ways, especially in a SaaS implementation. My example here is just one way it could be done.
