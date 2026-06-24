---
title: 'Setup DesktopServer with WordPress Trunk'
published: 2014-10-31
description: 'While at WordCamp San Francisco this weekend I had the opportunity to sit down with the Operations Manager for ServerPress, the group behind the popular…'
image: '/images/blog/computer.jpg'
tags: ['DesktopServer', 'Software Development', 'WordPress']
category: 'Software Development'
draft: false
---
While at WordCamp San Francisco this weekend I had the opportunity to sit down with the Operations Manager for ServerPress, the group behind the popular [DesktopServer](http://serverpress.com/downloads/) application that helps you quickly setup and manage your local development environments (amongst other amazing features). The first thing I wanted to do was have a 'Trunk' install of WordPress so I could get the nightly releases.

This didn't seem obvious at first, and there was a guide listed on the ServerPress documentation, but it was somewhat difficult to follow, so I figured I'd lay it out here, step by step.

We're going to use the Blueprints feature here, as well as some command line so bear with me.  
  
Step 1: Prepare your blueprint.  
Create an empty folder on your desktop and name it `WordPress (SVN)`

Copy the `index.html` from the `Blank (Non-WordPress)` blueprint to your new `WordPress (SVN)` folder. On a Mac this is located in `/Applications/XAMPP/blueprints`

[Grab a copy](http://core.svn.wordpress.org/trunk/wp-config-sample.php) of the `wp-config-sample.php` file and put it in the `WordPress (SVN)` folder.

[![Your WordPress (SVN) folder should have these two files in it.](/images/blog/Screen-Shot-2014-10-29-at-10.51.46-PM-300x194.png)](/images/blog/Screen-Shot-2014-10-29-at-10.51.46-PM.png)

Step 2: Copy your blueprint

Next, copy that folder to your blueprints directory.

[![Add the WordPress (SVN) folder to your blueprints directory](/images/blog/Screen-Shot-2014-10-29-at-11.20.00-PM-300x186.png)](/images/blog/Screen-Shot-2014-10-29-at-11.20.00-PM.png)

Step 3: Setup the site  
Start up DesktopServer and choose a new site.

[![Choose to create a new site](/images/blog/Screen-Shot-2014-10-29-at-10.53.12-PM-300x239.png)](/images/blog/Screen-Shot-2014-10-29-at-10.53.12-PM.png)

Select the blueprint for "WordPress (SVN)".

[![Select our newly created blueprint](/images/blog/Screen-Shot-2014-10-29-at-10.54.20-PM-300x239.png)](/images/blog/Screen-Shot-2014-10-29-at-10.54.20-PM.png)

What we've left with here is now a properly created wp-config.php file with the correct database credentials for this site install.

![Screen Shot 2014-10-29 at 10.54.55 PM](/images/blog/Screen-Shot-2014-10-29-at-10.54.55-PM-300x186.png)

Step 4: Get WordPress  
Now we can go get the WordPress Trunk code.

Open up your favorite terminal and change directories into where your DesktopServer saves your local sites. Mine happens to be in my home directory in a folder called "WordPress".

Once there, go to the site you created, mine was "trunk-testing.dev". Run the following two commands:

`svn co https://core.svn.wordpress.org/trunk .`  
`rm index.html`

\*note, the '.' is important in the first command\*

Step 5: Setup WordPress  
This should give you a copy of WordPress in that newly created local site, and if you open a browser and go to the url (in my case trunk-testing.dev), you should see the following:  
[![Screen Shot 2014-10-29 at 10.56.40 PM](/images/blog/Screen-Shot-2014-10-29-at-10.56.40-PM-300x173.png)](/images/blog/Screen-Shot-2014-10-29-at-10.56.40-PM.png)

Step 6: Make cool stuff  
Now you can develop on trunk!

As a note, I've had a couple discussions with people familiar with the matter and for DesktopServer 4.0, this might become obsolete as they have expanded the capabilities of the platform tremendously. However, until then, this should get you started.
