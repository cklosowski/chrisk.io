---
title: 'Local WordPress development with Pressmatic. A Review.'
description: 'Full disclosure: I was an early beta tester for Pressmatic and was provided a license key for testing purposes. Screenshots and information in this post may…'
pubDate: 2016-07-02
heroImage: '/images/blog/Screen-Shot-2016-07-02-at-8.36.28-AM.png'
---
Full disclosure: I was an early beta tester for [Pressmatic](https://chrisk.io/i/pressmatic) and was provided a license key for testing purposes. Screenshots and information in this post may change as the software changes, but this is my 100% honest opinion of the product.

**Update:** Pressmatic has been acquired by the hosting provider Flywheel, and renamed "Local by Flywheel". It's also been made [freely available](https://local.getflywheel.com/)! The rest of this review still holds fairly accurate as the product was virtually unchanged upon acquisition.

My history with development environments is probably like most PHP developers. Always finding something that got us most of the way there, only to have a few shortcomings (or a lot in some cases) that just didn't make it the most efficient of all work flows. I've either used or purchased close to 5 environments in the past few years, including MAMP Pro, Vagrant configurations, DesktopServer, XAAMP, and even just the local versions of the binaries installed with OS X. None of them met my needs to the fullest. MAMP Pro was _very_ close until payment gateways started requiring strong encryption to talk to their APIs (yay!), and MAMP Pro ships with Apache 2.2, which doesn't support this protocol (TLS 1.2).

#### Enter Pressmatic

![pressmatic-review-main-view](/images/blog/Screen-Shot-2016-07-02-at-8.36.28-AM.png)

I was hit up by a friend already in the testing group to join in and see what this thing [Pressmatic](https://chrisk.io/i/pressmatic) was. The developer of Pressmatic was looking for developers to use it out and see if it met their needs for local Development. I was pumped to try something new, but pretty skeptical that it would be right, as most things aren't perfect. [Pressmatic](https://chrisk.io/i/pressmatic) was pretty damn close to perfect. I won't go into the nitty gritty details as those are on the site, and are pretty boring...but here's some of the highlights that sold me.

##### **Site Defaults**

With the \`New Site Defaults\` setting, you can define all of the basic setup information for when you create a site. You have the opportunity to change these upon creation, but it will be pre-filled with this info. saves me so much time when I quickly need a WordPress install.

##### **Multisite Support**

When setting up a new site, you have the option to choose if you want multisite, and not just subdirectory support either!  
![pressmatic-review-multisite-switcher](/images/blog/Screen-Shot-2016-07-02-at-8.08.46-AM.png)

##### **Nginx, Apache, PHP versions, oh my!**

You have the ability to use (and swap out at any time) either Apache or Nginx as your web server, and you also can choose from 5 versions of PHP (at the time of writing 5.2.4, 5.2.17, 5.3.29, 5.6.20, and 7.0.3).

##### **Site templates**

Do you have a base install that you use for every new WordPress development environment? Me too. Anytime I work locally I install a handful of plugins, and with site templates, it's done for me. Basically how it works is you setup what you want your template to look like, and then you can tell [Pressmatic](https://chrisk.io/i/pressmatic) to make it a template. Then when adding a new site, you can choose it as an option and a few minutes later, you're up and running without having to install any of those utilities. It's beautiful.

Don't want WordPress? That's fine, I've made a non-WordPress template, by basically creating a base WordPress install, deleting all the parts of WordPress, and making a template out of it. Now I just have a quick an easy site that's ready with PHP and MySQL based off Apache or Nginx.

##### **Mailcatcher!!!**

This is the first time I've worked with Mailcatcher, and it's _**amazing**_. Many times I'll use email addresses that aren't valid, in order to test things on my local environments. Things like `admin@local.dev` or `customer@local.dev`. Obviously these won't get sent to me, so when I want to test what emails look like when they arrive I have to configure a real email address, which ends up cluttering my inbox. I hate that. Mailcatcher, is basically a local loopback for emails sent via your sites.  
![pressmatic-review-mailcatcher](/images/blog/Screen-Shot-2016-07-02-at-8.14.26-AM-1024x488.png)  
This essentially gives us an inbox for all the emails that the site sends, in a single window. Beautiful!

##### **One-click, Self-Signed Certificate Trusting**

This is a huge one I didn't even know I was missing. Being that I develop a lot of code that's eCommerce based, thanks to Easy Digital Downloads, I tend to always want my local development environments to be over HTTPS with a self-signed certificate. When doing this in MAMP, I'd always be met with the 'Do you want to trust this certificate!?!?!?' warning in Chrome and other browsers. Well, [Pressmatic](https://chrisk.io/i/pressmatic) made this easy, with a single click.  
![pressmatic-review-trusted-certs](/images/blog/Screen-Shot-2016-07-02-at-8.15.29-AM.png)  
After 'trusting' the cert, I can be fully HTTPS locally without any weird warnings.

#### Other things I like:

-   Ability to set the default terminal app.
-   One click access to SSH and MySQL for any single site
-   Add-On management (not many available now, but in the works)
-   Automatic Updates to the application
-   Quick site duplication

So, overwhelmingly a positive experience. As always there are some things I am either missing aren't quite what I expect, but that list is pretty small, and a bit picky if you ask me...

#### A few things to improve on:

-   Does not have the ability to change the path to the web root on an existing site.
-   Cannot pick WordPress version at new site creation, some sites I like to run nightly.
-   WordPress debug constants are not set on installation (but I hear an add-on is coming for that).
-   It's only OS X (for now)

Those are the only ones I can think of at the moment. Pretty small eh? So far this is the most comprehensive change to my development environment in a while, and it's pretty much changed it completely. The speed at which I can replicate, create, and destroy sites makes my testing and development much **faster** and **efficient**, and _**repeatable**_. Which is key.

\[bctt tweet="The features of Pressmatic allow me to test and replicate environments much faster." username="cklosowski"\]

#### The precieved elephant in the room...price

[Pressmatic](https://chrisk.io/i/pressmatic) comes in at $129. **There are no renewals with Pressmatic**. Licenses are valid for all 1.X releases and you will be able to upgrade at a discount when new major versions are released. This is a pretty standard platform. MAMP has been using it for years with its Pro version.

One might argue that MAMP Pro is only $59, and you are 100% right. You also get what you pay for. MAMP is running outdated software versions, doesn't have the template features, and isn't geared towards WordPress development, which I feel is a huge selling point here. The other major improvement this has over other ones I've used is it's design. It's just clean, and easy to use as a native OS X app. It's also not running in such a container platform, which is a huge benefit in my opinion. You have to approach financial decisions about development tools with one thing in mind: "How much time will this save me." The answer with [Pressmatic](https://chrisk.io/i/pressmatic), is _a ton_.
