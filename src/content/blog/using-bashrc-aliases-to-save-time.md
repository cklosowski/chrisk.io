---
title: 'Using .bashrc aliases to save time'
description: 'As a developer there are actions I do over and over that can be quite repetitive in the CLI. Some of these commands require specific flags to be set or a…'
pubDate: 2011-04-07
---
As a developer there are actions I do over and over that can be quite repetitive in the CLI. Some of these commands require specific flags to be set or a long string of sources and destinations. I've found it easier to write aliases into my .bashrc file in order to mediate that.

The .bashrc file is in your home directory (~/ or /home/username/) and is an invisible file (starting with a '.') that contains aliases and environmental variables for your bash session.

First, let's open your .bashrc file:  
`$ vim ~/.bashrc`

Once open, enter the following after the last entry.

\# User specific aliases and functions
alias ..="cd .."

Save and exit your bash session and restart terminal (or your bash session if you are running CLI only).

This entry allows you to simply type '..' instead of 'cd ..' to backup one directory.

Some of the more common aliases I use are:

#connect to a DB only needing to enter the password
alias sitenamedb="mysql -u username -p -h hostname databasename"

#navigate up two directories  
alias ...="cd ../.."

#navigate up three directories  
alias ....="cd ../../.."

#navigate directly to my downloads folder  
alias downloads="cd /home/username/downloads"
