---
title: 'Quickly emptying a file'
published: 2011-04-01
description: 'So I was messing around with getting a few logging systems setup for a web app I''m writing and after a while these log files started to grow in size to the…'
tags: ['cat', 'echo', 'redirection']
category: 'Software Development'
draft: false
---
So I was messing around with getting a few logging systems setup for a web app I'm writing and after a while these log files started to grow in size to the point that it was difficult to find the relevant data quickly. I needed a quick way to empty a file without deleting it. Here's the trick I learned:

// First let's put some text into a file
$ echo "test" > filename.log

// Let's display it  
$ cat filename.log

// and empty it  
$ cat /dev/null > filename.log

Basically 'cat' reads the file contents of whatever you specify, in this case /dev/null which is empty. It then uses the '>' character to push the contents of /dev/null (empty) to filename.log, overwriting anything that currently exists in it.
