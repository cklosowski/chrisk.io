---
title: 'Connecting to SSH without a Password'
published: 2011-07-09
description: 'When dealing with Linux servers, the preferred mode of connection is via SSH. The Secure Shell is one that allows for an encrypted connection between you…'
image: '/images/blog/3328538733_c210a1f118_o11.jpg'
tags: ['ssh', 'ssh-copy-id', 'ssh-keygen']
category: 'Software Development'
draft: false
---
When dealing with Linux servers, the preferred mode of connection is via SSH. The Secure Shell is one that allows for an encrypted connection between you and the remote server. As often as I connect to these boxes, I am always looking for a way to speed up tasks that I will do more than 3-5 times a day. Typically, an SSH connection will need to have the entry of a password. This is all well and good, however, what if we could create an 'Asymmetric Key Pair' and never need a password when on the machine you set this up on? Sounds like a winner to me.

A little information about a key pair. There are two key generated, a private key (kept local only) and a public key (shared with your server). Creating this pair with the DSA algoryhthem creates a 1024 bit key to secure your connection, which is typically longer than any user generated password for sure.

Here's the steps. First off, load up a terminal window and we're going to create the key pair. To do this we'll use the ssh-keygen command. You will be asked to enter a file path (I hit enter for default) and a pass-phrase (for an extra layer of security):

$ ssh-keygen -t dsa
Generating public/private dsa key pair.
Enter file in which to save the key (/home/username/.ssh/id\_dsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/username/.ssh/id\_dsa.
Your public key has been saved in /home/username/.ssh/id\_dsa.pub.
The key fingerprint is:
xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx:xx username@HostName
The key's randomart image is:
.......

So now we've crated your key pair locally, it's time to tell your server about it. We can do this with one easy line:

$ ssh-copy-id -i ~/.ssh/id\_dsa.pub remote\_username@remotehost

After that you should be able to simply type in a single line to connect to SSH, no password needed.

$ ssh remote\_username@remotehost
