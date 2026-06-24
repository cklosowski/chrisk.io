---
title: 'Selecting Your Default Linux Shell'
description: 'When I got my server up and running, it was dumping me into a default C-Shell. I am familiar with the Bourne Again SHell, or BASH . I kept having to invoke…'
pubDate: 2011-07-05
heroImage: '/images/blog/5497077371_c0dbd053b71.jpg'
---
When I got my server up and running, it was dumping me into a default C-Shell. I am familiar with the [Bourne Again SHell, or BASH](http://en.wikipedia.org/wiki/Bash_\(Unix_shell\) "Bourne Again Shell"). I kept having to invoke the BASH shell upon login, which just get's annoying. Here's how I defaulted my user to use the BASH shell.

$ sudo vim /etc/passwd

This will give you a long listing of user accounts on your Linux OS. The items are a colon ":" sperated value list. Here's a breakdown of what everything means:

username:encrypted password field:user id (UID):group id (GID):Real Name:Home Directory:Shell

So for my user to be defaulted to the BASH shell:

username:x:1000:1000::/home/username:/bin/bash

Cheers!
