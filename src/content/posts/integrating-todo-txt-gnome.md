---
title: 'Integrating Todo.txt with Gnome Do'
published: 2013-03-21
description: 'I''m a long time user of both Gnome DO and Todo.txt . Recently, I''ve been looking for a good method of making these two work together in harmony and I''ve…'
image: '/images/blog/gnomedotodotxt1.png'
tags: ['Gnome Do', 'Linux', 'productivity', 'Todo.txt']
category: 'Image'
draft: false
---
I'm a long time user of both [Gnome DO](http://do.cooperteam.net/) and [Todo.txt](http://todotxt.com/). Recently, I've been looking for a good method of making these two work together in harmony and I've finally done so. I executed this on Ubuntu 12.10. This article assumes a couple things:

-   You have Gnome Do setup and configured with the Gnome Terminal plugin
-   You have Todo.txt fully working
-   You have sudo access on the computer

The typical usage of Todo.txt is all command line or mobile app based ([Android](https://chrisk.io/android-todotxt) and [iOS](https://chrisk.io/ios-todotxt)). What I was looking for was a quick way to add, alter, complete, and delete entries without having to open a terminal. I searched a bit and found Gnome Shell extensions, but those don't work with the Unity interface of Ubuntu 12.10.

Step 1: Symlink the todo.sh to /usr/bin  
\[bash light=true\] $ sudo ln -s /path/to/your/todo/todo.sh /usr/bin/todo\[/bash\]

Step 2: Symlink your todo.cfg to .config/todo/config  
\[bash light=true\]$ sudo ln -s /path/to/your/todo/todo.cfg ~/.config/todo/config\[/bash\]

These 2 steps are very important as the Gnome Terminal plugin for Gnome Do doesn't recognize todo.sh as a terminal program. These steps allow this to happen.

Step 3: Enjoy Todo.txt from your Gnome DO interface!

[![Gnome Do and Todo.txt playing together nicely.](/images/blog/gnomedotodotxt-300x207.png)](/images/blog/gnomedotodotxt.png) Gnome Do and Todo.txt playing together nicely.

The usage here is pretty simple:

-   Activate Gnome Do
-   Type out your command (eg: todo add "New Item @context +project")
-   Hit the 'tab' key once your full entry is typed
-   Choose 'Run in Terminal' (I use the arrow keys so I don't have to use the mouse)

This works with all commands of Todo.txt.

When it comes to reading my Todo.txt list, I use a varity of methods including the iOS and Android Apps, as well as a [Conky Configuration](https://github.com/ginatrapani/todo.txt-cli/wiki/Linux-with-Conky).
