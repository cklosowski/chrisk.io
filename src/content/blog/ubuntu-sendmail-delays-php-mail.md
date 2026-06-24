---
title: 'Ubuntu sendmail delays with PHP mail()'
description: 'I was working on a project recently and was trying to send an email via my PHP script using the mail() command when it would appear that my site would just…'
pubDate: 2011-06-27
heroImage: '/images/blog/4968422200_1ab99c61ef_b1.jpeg'
---
I was working on a project recently and was trying to send an email via my PHP script using the mail() command when it would appear that my site would just sit and wait for the email to be sent, taking sometimes a minute or two for the page to load. The email would successfully send, however it took forever for my pages to load while trying to send.

To fix this issue, we can do two quick things and you'll be off and sending email.

First, get your hostname:

$ hostname
your-host-name

Your hostname will be printed out and then we need to edit your /ect/hosts file, which is used for DNS resolution by your system. Open up the file with your favorite editor:

$ sudo vim /etc/hosts

You may see a line that looks like the following:

127.0.0.1     localhost

We want it to read:

127.0.0.1    localhost localhost.localdomain your-host-name

Obviously replace your-host-name with what the hostname command outputs.

Post Image via Flickr and CC by [Pacdog](http://www.flickr.com/photos/pacdog/4968422200/)
