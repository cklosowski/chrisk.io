---
title: 'Find Disk Usage by Folder with du'
description: 'Something I''m always curious about is where my disk space always goes. Honestly, it''s amazing how quickly you can fill up a hard drive these days. Linux has…'
pubDate: 2011-06-15
---
Something I'm always curious about is where my disk space always goes. Honestly, it's amazing how quickly you can fill up a hard drive these days. Linux has a great tool called 'du' (disk usage) that we can leverage to see where all our GB are escaping to.

There's a few flags you'll want to use before you just go and start using 'du' only.

Navigate to the directory you would like to check up on, in this case, my web server root:

$ cd /var/www/
$ du --max-depth=1 -h
58M	./www.chriskdesigns.com
32M	./stock\_wordpress
17M	./www.binbash.in
106M	.

So I'm using 106MB of disk space with websites currently. This can be extremely useful with large media sites.

Let's look at those flags:

\--max-depth=1 - Tells us to only look at the current directory and the folders in it, not recursively
-h - 'Human Readable', so you'll get things like 10M or 54G

For all the flags hit up the man pages with:

$ du man
