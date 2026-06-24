---
title: 'Don''t Settle for Broken Windows'
description: 'Small or large...a broken window is still broken. The same principal applies to your code. Small or large, a bug exists and needs to be fixed.'
pubDate: 2015-01-27
heroImage: '/images/blog/7856783506_ebfb329672_o.jpg'
---
In one of my posts a while back about my [must have books on software development](https://chrisk.io/2014/05/must-books-software-development/ "My Must Have Books on Software Development"), I listed '[The Pragmatic Programmer](https://chrisk.io/Pragmatic)' as the 2nd book. Yes, I still recommend it. I still try and re-read it every year or two...and more recently one of the first metaphors listed in the book guided me, and I didn't even realize it. Before you go on, [read this excerpt/concept from the book about Software Entropy](https://pragprog.com/the-pragmatic-programmer/extracts/software-entropy "Software Entropy via The Pragmatic Programmer").

### "Don’t Live with Broken Windows"

So now that you've read it, the main concept I love is the phrase "Don't Live with Broken Windows". Small or large...a broken window is still broken. Small cracks lead to bigger problems. So how is this relevant and why is this post better than just picking up the book? I'm going to tell you a little story about my new job with [Easy Digital Downloads](https://chrisk.io/EDD) (EDD).  
  
I'd been working on the EDD team for about the past year and a half, as a contributor. Along with this came submitting patches, commenting on issues, but I never really 'owned' the code base. I was not an outsider, but I wan't an insider either. It's a weird spot. The day I joined as an official EDD employee, things instantly changed.

### Fixing broken windows

We are using Travis-CI as a way to run our unit tests on all merges, pull requests, and commits. If you aren't doing it for your open source project, go do it. It's free if you are open source on GitHub. Our build for EDD has been failing for a while, and because of that, our GitHub repo showed that in a nice red badge..that we chose to put there. In reality, the build was failing for a super simple reason, it only took a 1 line fix and it wasn't even failing hard. The application worked, everything was fine, but there was no failure or corruption of data. No _fatal error_.

The most interesting thing happened in a conversation with another team member. I had asked him about how a PR he submitted had broken the build...and his response (at no fault to him) was "...and that's different than normal how...?".

What he hadn't realized was, the first week I started, I focused efforts on improving, and making sure our build was passing, at every moment. His comment though, wasn't unique to him. The team had just grown _content_ with the fact that our build failed. When I told him the change to fix it he asked why we hadn't fixed that a long time ago!? The 'broken window' had gone unfixed for so long, we all just assumed it was a lost cause.

### Fix or log it when you see it

So how do we stop being content? Well, that's up to each person individually but there are a few keys that I think help.

**1) When you see an issue, log it:**  
This is important because an unnamed problem is an forgotten problem. the more detailed the better. This way you can track it down faster in the future.

**2) Assign a timeframe, immediately:**  
Software development isn't written in stone. Milestones and release dates can be changed. However, if you never assign a milestone or release date, it's more likely to get ignored. On the EDD Team, I will periodically go through un-milestoned issues and put them in a future release. Even if it's going to change later, at least it's on the radar somewhere.

**3) The only 'bad' issue, is the one not created:**  
I know some devs or project owners get annoyed at petty issues or tickets, but I'd rather have an issue raised and marked as 'wontfix' or 'Not a Bug', than not see them at all.

  
Post Image courtesy of [Michael Coghlan via Flickr & Creative Commons](http://www.flickr.com/photos/mikecogh/)
