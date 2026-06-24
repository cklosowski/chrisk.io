---
title: 'Chunkhost Review: ChunkHost VPS - Hosting Review'
published: 2011-07-20
description: 'I''m not one to typically click on advertisements on social media sites, but when the ad told me I could get a '' Free 512MB VPS during beta period ''...I…'
image: '/images/blog/3328538733_c210a1f118_o11.jpg'
tags: ['ChunkHost', 'ssh']
category: 'Software Development'
draft: false
---
I'm not one to typically click on advertisements on social media sites, but when the ad told me I could get a '[Free 512MB VPS during beta period](<http://chunkhost.com/r/kungfugrep >)'...I instinctively clicked on that link. Let's fact it, you want to give me a free server for a short time, I'm your guy. I moved a few of my sites over to this new VPS and have been running them (including this site) off the server for the beta period, and now it's time to pay up. I've decided to keep this VPS with [ChunkHost](<http://chunkhost.com/r/kungfugrep >) for a while to see how it runs but I wanted to give you a little heads up on how things have been going with their service.

\*\*Full Disclosure Notice, the links in this article will credit me with you signing up for a beta and at the completion of your beta, if you complete a survey I receive a small credit for your participation. If you wish to not give me credit for the referral you can simply visit ChunkHost.com\*\*

I've divided the review into 5 areas rated from 1-5 (5 being the best).

-   Customer Support
-   Documentation
-   Hardware
-   Software
-   Account Features

**Customer Support - Rating: 5**  
About half-way through my Beta Period with ChunkHost, I hadn't had any issues with my VPS. No downtime, no connectivity issues, etc. Things were working GREAT! I was about to engage in a new project and I was concerned about CPU Cycles. I've seen VPS hosts before that would suspend your services had you passed their threshold of 'reasonable CPU resources'. This is all fair and well but I was curious at what point I would be responsible for this. I sent off an email to customer support and received the following response within 8 hours:

> No, the virtualization software is really good at mediating fair access to the CPU. Plenty of chunks just sit there burning 100% CPU 24/7. It's fine!
> 
> The one thing the software isn't great at is balancing fair IO usage, so hammering the disk is something you shouldn't do, but that's generally not a problem!

This may seem like an everyday answer but having worked in the technical support field before, there were two things that impressed me about this answer.

1.  I was given a specific answer to what my limit was...None! I could use up 100% CPU Usage on my VPS without causing any issues with the Virtualization software.
2.  I was given a specific answer to what WOULD cause an issue with performance, without me asking about it. From my interactions with support, they are staffing it with people who have the same types of questions I do, and are prepared to answer them.

On top of their support email address, they have a VERY active Twitter account that you can follow @ChunkHost

**Documentation - Rating: 5**  
When it comes to VPS accounts, us users are mostly on our own. A VPS is like the Condominium of the hosting world. You are sharing the building space, but you need to manage and maintain your section of it. With that in mind, a well setup documentation system is ideal for VPS companies. There are 3 ways you can really get information without asking for it on ChunkHost. You can visit their GetSatisfaction page, check out the F.A.Q. or visit the ChunkHost wiki @ http://wiki.chunkhost.com/. What's great about this is, you can dig around yourself before asking questions. This wiki includes things like SSH basics for beginners, which is GREAT! This helps those who aren't 100% comfortable letting go of their GUI get into the CLI managed servers.

There were two things I found most interesting about the wiki. One was that they offered how-to's on every day tasks instead of assuming we all knew how to setup an email server. Secondly, they went into detail on how to secure your chunk. This is SUPER important in recent times as security is at the forefront of everyone's mind.

**Hardware - Rating: 4**  
Overall, the stability of the hardware has been very acceptable. I'm running the 512MB Chunk which seems to always carry about 50-100MB of free ram while running a few WordPress sites. Keep in mind this is while running Apache2, PHP, MySQL, and APC all on the same box. I'm given 20GB of storage, which is plenty for a web server, and my system information tools show a total of 16 cores (4 x quad core) at my disposal. My current uptime reads '37 days 4 hours 13 minutes' and the restart was me being paranoid about script I was running taking up too much memory and causing the server to swap.

**Software - Rating: 4**  
While it's up to me to manage the software installed on the server, the OS choices are from a list provided by [ChunkHost](<http://chunkhost.com/r/kungfugrep >). They currently include:

-   Ubuntu 8.04(LTS)
-   Ubuntu 10.04(LTS)
-   Ubuntu 10.10
-   Debian 5
-   Debian 6
-   CentOS 5.4
-   CentOS 5.5

While this is a great list of proven server builds of popular distros, I'd like to see a few other of the big players in the mix. This is a very complete list. One thing I do commend ChunkHost is allowing the LTS versions of Ubuntu to be installed as well as a latest release.

**Account Features - Rating: 5**  
Account settings are one's held outside of the server itself, and in your [ChunkHost](<http://chunkhost.com/r/kungfugrep >) account. My favorite 'feature' by far is how quickly and easily you can have your chunk setup and ready for you to access. A single page asking you for the information for this chunk and you are done. The rest is up to you via the command prompt.

I also really like the fact that making your Reverse DNS correct is VERY easy. So many times it's a pain in the arse to get rDNS properly configured with your host, ChunkHost makes it as easy as type and save.

While your actual account management and billing options are minimal at best...I feel they meet my needs. I don't need a fancy control panel to schedule a payment or change my card on file. I just need it to work. Simple as that. They also make it easy to setup your referral links so you can get credit for telling your visitors about ChunkHost.

**Overall - Rating: 4.6**  
I've been in the VPS game for a while and this was a great service that was simple to use, no bells or whistles and was able to quickly expand my web tier. I'll be continuing my services with ChunkHost until it no longer meets my needs.

[Signup for your FREE Beta of ChunkHost's 512MB VPS running off their new Xen architecture](<http://chunkhost.com/r/kungfugrep >).
