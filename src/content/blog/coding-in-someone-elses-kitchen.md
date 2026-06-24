---
title: 'Coding In Someone Else''s Kitchen'
description: 'Recently I was watching an episode of Top Chef, from Season 1. Yep, All the way back. In fact it may have been episode one. Anyway, watch this scene, where…'
pubDate: 2015-03-11
heroImage: '/images/blog/IMG_1389.png'
---
Recently I was watching an episode of Top Chef, from Season 1. Yep, All the way back. In fact it may have been episode one. Anyway, watch this scene, where a contestant was given an opportunity to work for a world renown chef for 30 minutes (or until the chef decided they weren't cutting it). This contestant was asked to taste the sauce he was making, dipped his finger in to taste, and was _immediately_ shown the door. It lead to this awkwardly tense moment.

[Watch the video here.](http://www.hulu.com/embed.html?eid=lzesmv3xrxgccwfpugweew&et=853&st=799&it=i809)

### Coding in someone else's kitchen

Software development, at it's core, is a lot like cooking. Everyone has their own take on how something should be done. It can even be difficult repeating EXACTLY what we did last time. Just because you make one great cake, doesn't mean the next will turn out perfect. In software, these are bugs...in cooking, we'll refrain from calling them 'bugs' and just refer to them as 'variances' ;).

If you were to walk into the kitchen of another chef/cook, at the end of the day, it's their domain. When producing end results, the customer's don't know it was you who produced the dish, they think it's the head chef, so their reputation is on the line. The same goes for contributing to open source software.

### Respect the chef

In the commit history of the project, sure, your name shows. When it comes to the larger release notes, the primary developer or team, puts their name on the overall project. That means your code represents them. With that in mind, here's five things to remember when you submit code to someone else's project:

#### 1\. Coding standards are not universal

This is a hotbed of controversy in development. Spaces vs. Tabs. Camel Case vs. Snake Case. 2 vs. 4. I could go on, but you get the picture. The only thing that matters when contributing, is that you follow the projects defined standards. If they ask you to update a change to match, please oblige. It's a matter of consistency.

##### ...but,

If the project doesn't have a standard, suggest they implement one and use a [.editorconfig](http://editorconfig.org/) file.

#### 2\. Suggestions are not personal

Sometimes, when you work _really_ hard on a set of changes, it's hard not to take suggestions personal. You feel like you've done a great job, thought of all the cases, and even double checked it...but when the project lead comes back and suggests a few things, it can take the wind from your contribution sales. Don't let it, at the end of the day they are more intimate with the code than most people, so their suggestions may be taking other issues into consideration.

##### ...but,

As always though, if you have a valid case for your changes, explain it in a detailed and non-emotional response for the best reception.

#### 3\. Pull Requests can sit...for a while

This is more specific to GitHub but for any requested changes, keep in mind there is more than just your change queued in the pipe. At one point on [Easy Digital Downloads](https://chrisk.io/EDD) we had over 25 pull requests waiting for review. To be honest, it's on purpose. Not that we keep things waiting, but that we set aside a specific time of our week to go through open pull requests to review them. If we reviewed everyone as they came in, we'd never get anything done. There's a mental state to be in when doing code reviews, to allow for maximum quality.

##### ...but,

If you think it's been excessively long...just ping them on the issue/ticket. See if they need anything else.

#### 4\. Don't over-extend yourself

One of the most frequent issues, is absentee contributors. It's ok, as a repo owner, we understand you are doing this in your own time, and usually for free. We are fine with it, and totally get it. Sometimes the status of an issue or change can be lost though as we wait for a commit/change or comments/updates. If you feel you are overextended and won't get to something in a timely manor, just let them know in a comment with your timeframe, or if you need to pass along the work to someone else. It helps stop the 'Where are we at with this?' question.

##### ...but,

There's not really an alternative here, it's about the owner respecting your time and you respecting their timelines. Work it out, play nice and it'll be ok.

#### 5\. Focus on your area of expertise

We all have our own areas of proficiency. When finding projects to contribute to, find areas you can assist where you can provide the most impact. If you are a great JavaScript developer, go look through the front end files and see where you can offer improvements to the performance or reusability. Sometimes they may not always agree with your changes, and thats when we have to go back to #2. If you can offer yourself as a Subject Matter Expert (SME), work with the repo owner to help own those issues, if you have the time (See #4).

##### ...but,

If the project already has someone with your expertise, work with them to help review each others work. Unchecked work is dangerous, and if someone of a high skill level is being reviewed by someone with less skill, things will get missed. Two high level developers working in tandem can be a really powerful thing.

### Go Fourth and Contribute!

That's about it...go find somewhere to contribute! I'd never live it down if I didn't say [Easy Digital Downloads](https://github.com/easydigitaldownloads/Easy-Digital-Downloads/issues) is a great place to start.

Cheers!
