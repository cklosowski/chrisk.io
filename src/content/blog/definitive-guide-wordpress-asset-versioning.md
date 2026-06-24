---
title: 'The definitive guide to WordPress asset versioning'
description: 'How and when to use the different versioning options of the WordPress asset registration/enqueueing functions wp_register_script and wp_register_style.'
pubDate: 2017-06-05
---
Wether you are building a theme or plugin for WordPress, you will typically need to register and load your own Javascript or CSS file at some point. You do this by using the functions provided by WordPress core:

-   [wp\_register\_style](https://developer.wordpress.org/reference/functions/wp_register_style/) - Registers a CSS file `wp_register_style( string $handle, string $src, array $deps = array(), string|bool|null $ver = false, string $media = 'all' )`
-   [wp\_register\_script](https://developer.wordpress.org/reference/functions/wp_register_script/) - Registers a Javascript source (either local or external) `wp_register_script( string $handle, string $src, array $deps = array(), string|bool|null $ver = false, bool $in_footer = false )`

### Defining a version

Both of these functions allow you to define a source URL and a few other arguments, but today we're going to focus on the `$ver` argument. The `$ver` or 'Version' of your script or style allows you to append a version of your choice as a query string, for instance, these are a few examples from this site:

`https://chrisk.io/wp-content/plugins/better-click-to-tweet/assets/css/styles.css?ver=3.0`  
`https://chrisk.io/wp-content/plugins/easy-digital-downloads/templates/edd.min.css?ver=2.7.9`

Both of the above examples have version numbers appended that reference the currently installed version of those plugins.

### Why do we version our assets?

Versioning your assets is super useful for 'busting cache' when you release a new version. Modern browsers will cache CSS and JavaScript files locally to the visitor if the URL to the file is the same as it was the last visit. By appending a new version number when you update your theme or plugin, you're effectively telling all visitors to the site that a new version of the asset is available, and it should re-download it. This prevents you from having to ask the dreaded question of "Did you clear your cache?"

### What if I don't define a version

You may also, from time to time, see plugins and themes have their scripts or styles contain a version that match the currently installed WordPress version, like this:

`https://chrisk.io/wp-content/plugins/plugin-example/style.min.css?ver=4.7.5`

In this case, the developer would have chosen to not define a version when registering their styles or scripts. By providing no version, WordPress will append it's own version.

### Should we version external resource?

So what about assets that are _external_ to your server? Things like 3rd party JavaScript resources. For example the Stripe payment gateway has store owners include a JavaScript file directly from their own servers. In this case you want **NO** version to be appended. Not your plugin's, theme's, or WordPress's version. In this case you must pass in `null` as the version.

#### Ways do define your versions

-   String (Ex: '2.7.9') - Results in ../style.css?ver=2.7.9
-   `false` - Results in ../style.css?ver=4.7.5 (where 4.7.5 will be the current WordPress version)
-   Not defined - Results in ../style.css?ver=4.7.5 (where 4.7.5 will be the current WordPress version)
-   `null` - Results in ../style.css

### Why not use something other than the version?

There have been a few times that a person has asked me why not use something like a timestamp or the last time the file was changed to allow for version busting. While these do work to make sure the user isn't getting a cached version, there are a few issues that arise.

#### Using Timestamps

When you use the current timestamp to set your version, that means every time someone visits your page, they'll have to re-download your assets, since even 1 second later, your timestamp has changed from the last visit. While this helps by never having a cached version of the file, it can hurt your performance by making the user's browser download files it's previously downloaded, even though they have not changed.

#### Using file modification time

In the current space of hosting and multi-server configurations (even in some of the shared hosting world), file modification time could cause similar issues to timestamps. PHP has a function that allows you to get the last time a file was modified, and therefore, that would be the last time the CSS or JS file changed, in theory. All it really means is that's the last time the file was modified on your servers. If you have a multi-server environment, each server could have a slightly different time that the file was modified, and therefore it's possible that on subsequent visits to your site, a visitor would request the file from a different server and thus get a different 'last modified' time, requiring them to download the file again, even though it's the exact same file they just requested.
