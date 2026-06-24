---
title: 'Check Linux Version from Command Line'
description: 'When you are running a command line only version of Linux, on a server for instance, keeping up to date can fall to the wayside in your daily use as there…'
pubDate: 2011-07-06
---
When you are running a command line only version of Linux, on a server for instance, keeping up to date can fall to the wayside in your daily use as there is no nagging icon to tell you there are updates. One of the most useful directories you can peek around in is the '/proc' directory, just off of root. This directory contains text files that have information ranging form memory stats, swap information, cpu information, cryptographic information, and even...the version of your current Linux Kernel. This can be useful when you are preparing to apply a kernel patch or upgrade to your system.

To do this we are going to use the '[cat](https://chrisk.io/tag/cat "Kung Fu Grep - How to use cat")' command in Linux. This is short for conCATenate, meaning to stitch together, however we are going to use the command to simply display some text from a file.

The following will give you a nice printout of the exact Kernel version you are running on:

$ cat /proc/version
Linux version 2.6.38-8-generic (buildd@allspice) (gcc version 4.5.2 (Ubuntu/Linaro 4.5.2-8ubuntu3) ) #42-Ubuntu SMP Mon Apr 11 03:31:24 UTC 2011

This shows what version I am using, which is currently [Linux Mint 11](http://www.linuxmint.com "From Freedom came Elegance") (based on Ubuntu)

These types of tools can be really useful when combined with applications like [Conky](http://conky.sourceforge.net/ "Conky"), the desktop based system information display.

A few other useful files you can 'cat' are:

\# Memory Information
$ cat /proc/meminfo

\# Version Signature  
$ cat /proc/version\_signature

\# Swap Partition Information  
$ cat /proc/swaps

\# CPU Information  
$ cat /proc/cpuinfo
