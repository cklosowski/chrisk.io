---
title: 'Create Random Passwords with makepasswd'
description: 'We all know the best way to have a secure password is for it to be random. There are a ton of sites out there that will give you a password, but your Linux…'
pubDate: 2011-06-14
---
We all know the best way to have a secure password is for it to be random. There are a ton of sites out there that will give you a password, but your Linux command line can do it for you with one command. You may need to install it with your favorite package manager:

$ sudo apt-get install makepasswd

$ makepasswd  
JAvMdvMu

Here's a readout of the man page:

makepasswd v1.10, a utility to generate and/or encrypt passwords.

Copyright (c) 1997-1999 by Rob Levin <levin@openproject.net>.  All rights are reserved by  
the author.  This program may be used under the terms of version 2 of the  
GNU Public License.

Last modified on Monday, 7 April 1999 at 22:56 (UCT).

Format:          makepasswd \[option...\]

Options are:

\--chars=N        Generate passwords with exactly N characters (do not use with  
                       options --minchars and --maxchars).  
--clearfrom=FILE Use a clear password from FILE instead of generating passwords.  
                       Requires the --crypt or --crypt-md5 option; may not be  
                       used with options --chars, --maxchars, --minchars,  
                       --count, --string, --nocrypt.  Trailing newlines are  
                       ignored, other whitespace is not.  
--count=N        Produce a total of N passwords (the default is one).  
--crypt          Produce encrypted passwords.  
--crypt-md5      Produce encrypted passwords using the MD5 digest (hash)  
                       algorithm.  
--cryptsalt=N    Use crypt() salt N, a positive number <= 4096.  If random  
                       seeds are desired, specify a zero value (the default).  
--help           Ignore other operands and produce only this help display.  
--maxchars=N     Generate passwords with at most N characters (default=10).  
--minchars=N     Generate passwords with at least N characters (default=8).  
--nocrypt        Do not encrypt the generated password(s) (the default).  
--noverbose      Display no labels on output (the default).  
--randomseed=N   Use random number seed N, between 0 and 2^32 inclusive.  A zero  
                       value results in a real-random seed.  This option  
                       generates predictable passwords, and should normally  
                       be avoided.  
--rerandom=N     Set the random seed value every N values used.  Specify zero  
                       to use a single seed value (the default).  Specify  
                       one to get true-random passwords, but plan on hitting  
                       the CONTROL key a lot while it's running. ;)  
--repeatpass=N   Use each password N times (4096 maximum, --crypt or  
                       --crypt-md5 must be set and --cryptsalt may not be set).  
--string=STRING  Use the characters in STRING to generate random passwords.  
--verbose        Display labelling information on output.
