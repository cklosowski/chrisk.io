---
title: 'Apache2 vhost_combined log files'
description: 'How to define a vhost_combined log format to combine Apache logs for all vhosts into a single log file.'
pubDate: 2012-04-10
---
Recently I've been fighting with memory consumption on my server and have been looking for ways that I can reduce the overall load. After some research I found that Apache opens up a file descriptor for each VHosts log file, and keeps this descriptor open all the time. So when I had a bunch of sites that I didn't mind if their log files were combined, I did some work by using the vhost\_combined logging format, which groups a set of vhosts into a single log file. I verified that first, my /etc/apache2/apache2.conf file had a CustomLog entry for vhost\_combined:

LogFormat "%v:%p %h %l %u %t "%r" %&gt;s %O "%{Referer}i" "%{User-Agent}i"" vhost\_combined

Once this was confirmed I went into each of the config files in the sites-available directory and modified a single line:

CustomLog /var/log/apache2/groupofsites-access.log vhost\_combined

Notice that I added that 'vhost\_combined' to the end of this line, meaning that it will use the log format from above and for each vhost assigned to use this log file, only keep 1 file descriptor open instead of 6. So far I've actually noticed a quicker response from my webserver as well as lower memory usage. Hopefully this helps you out as well!

If you're searching for a hosting provider, I recommend [ChunkHost](https://chrisk.io/chunkhost). They have great uptime, a very responsive support staff, and their prices are hard to beat. See [my review of ChunkHost](https://chrisk.io/hosting-review-chunkhost-vps/).
