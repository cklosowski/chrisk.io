---
title: 'Using Find and Grep to search your code base'
description: 'Let''s face it, when you are in the middle of developing your most recent genius idea, there are times you just need to find every instance of a function…'
pubDate: 2011-07-07
---
Let's face it, when you are in the middle of developing your most recent genius idea, there are times you just need to find every instance of a function being used. For this, we can revert to the 'find' and 'grep' commands to narrow things down a bit. First, a little bit about the tools we'll use:

##### Pipe, |

The pipe or | character is used to join command line requests into a single input and output. We'll be using it to start the find command, look for an occurring, and avoid a negative case...all on the same data set.

##### Find

The find command is used to locate files on a Unix or Linux system. find will search any set of directories you specify for files that match the supplied search criteria. You can search for files by name, owner, uhoup, type, permissions, date, and other criteria. The search is recursive in that it will search all subdirectories too. In our case, we're going to be looking at all files from the current directory and all sub-directories. This is noted by the period character '.'

##### Xargs

We will be using the 'xargs' command to build and execute command lines from standard input.

##### Grep

Grep is used to print lines matching a pattern. In our case we'll be using the basic usage, as well as the '-v' flag, for inversing the match. In this case, I use it to avoid any occurrences of the search term in a .svn folder.

So on with the commandline. So, I would like to search for all instances where my current project uses the 'foo' function:

$ find . | xargs grep "foo(" | grep -v .svn
