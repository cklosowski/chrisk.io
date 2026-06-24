---
title: 'Patching 32-bit .deb for 64-bit'
description: 'I''ve been finding lots of .deb packages that are compiled for 32-bit OS''s that don''t have 64-bit versions available. While this may not be the most elegant…'
pubDate: 2011-04-04
---
I've been finding lots of .deb packages that are compiled for 32-bit OS's that don't have 64-bit versions available. While this may not be the most elegant solution, it's been allowing me to install things like Adobe AIR and DiffMerge, which don't have 64-bit .deb packages:

First, navigate to the location of the .deb folder.

Once there do the following:  
1) Make a tmp directory to hold the package  
`$ mkdir tmp`

2) Extract the .deb package into the tmp directory  
`$ dpkg-deb -x package.deb tmp`

3) Extract the control files  
`$ dpkg-deb --control package.deb tmp/DEBIAN`

4) Change the Architecture parameter from “i386″ to “all”  
`$ sed -i "s/i386/all/" tmp/DEBIAN/control`

5) Repackage the .deb into your new 64-bit version  
`$ dpkg -b tmp package_64.deb`

6) Install the new 64-bit .deb version :)  
`$ sudo dpkg -i package_64.deb`

I'm not going to say this will work for EVERY package b/c you are essentially faking out the installer to think your system is supported. You may run into some application errors due to this, however, I have experienced none as of yet.

Adapted from [jamesward.com](http://www.jamesward.com/2010/10/14/install-adobe-air-on-64-bit-ubuntu-10-10/)
