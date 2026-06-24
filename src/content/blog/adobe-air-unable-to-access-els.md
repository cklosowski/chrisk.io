---
title: 'Adobe AIR unable to access ELS'
description: 'Adobe AIR keeps the passwords and account information of your AIR application in what they call the Encrypted Local Storage or ELS. Well on Linux, this can…'
pubDate: 2011-04-12
---
Adobe AIR keeps the passwords and account information of your AIR application in what they call the Encrypted Local Storage or ELS. Well on Linux, this can sometimes get confused, corrupted, or just wonky if your Gnome Keyring is out of sync or has an issue. Luckely I was given the link to [Troubleshooting AIR's Encrypted Local Storage (ELS) on Linux](http://kb2.adobe.com/cps/492/cpsid_49267.html) from the AIR application screaming at me about this. I ran the check to see if the Daemon was running:

$ ps -aef | grep -i 'gnome.\*keyring'
1000      3923     1  0 00:39 ?        00:00:00 /usr/bin/gnome-keyring-daemon --daemonize --login
1000      8884  8869  0 09:05 pts/0    00:00:00 grep --colour=auto -i gnome.\*keyring

Well, we can see that it is running, so skip on to step 3 of that guide and we'll see:

> As ELS is not accessible, all previously stored data in ELS cannot be retrieved anymore. To start using ELS again, we need to reset ELS, by deleting the following directory

So let's give this a shot:

$ rm -rf ~/.appdata/Adobe/AIR/ELS

Sure enough, all my data was cleared from the ELS, but my AIR applications could start once again. WOOT!
