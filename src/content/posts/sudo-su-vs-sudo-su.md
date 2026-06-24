---
title: 'sudo su vs. sudo su -'
published: 2011-06-29
description: 'I''ve always wondered this but finally got the answer as to why you should use: $ sudo su - instead of using: $ sudo su When adding the ''-'' character to the…'
tags: ['sudo']
category: 'Software Development'
draft: false
---
I've always wondered this but finally got the answer as to why you should use:  
`$ sudo su -`  
instead of using:  
`$ sudo su`

When adding the '-' character to the end of this command, you are also put into the PATH of the superuser. Without it, you cannot access things like the 'service' command for restarting services.
