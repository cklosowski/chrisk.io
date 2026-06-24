---
title: 'Lessons I''ve Learned from Enterprise Software Development'
description: 'No matter how many personal projects, open-source projects, or GitHub repos you''ve submitted changes to...nothing can prepare you for the arduous process…'
pubDate: 2014-03-01
heroImage: '/images/blog/gallery_19.jpg'
---
No matter how many personal projects, open-source projects, or GitHub repos you've submitted changes to...nothing can prepare you for the arduous process that enterprise level software development can be. I moved from the 'DIY' development realm into an enterprise development position almost 4 years ago now, and while I've found many things that just frustrate me to no end, there are a few things that I've taken into practice in my own personal projects that make my life easier. These are lessons from the trenches of enterprise software development, and I hope you find them useful.  

## My Lessons in Enterprise Development

##### Change Management Is Important

So what's the biggest difference? For the most part, process. Enterprise level development (and deployment) ~is~ _should_ be a heavily documented process. Being able to track changesets, deployments, and configuration changes is very important. This leads to the ability to rollback changes that cause negative impact. This isn't just for blame, like you might think. It's great for future changes that may have similar impact. You can learn from past deployments better, when it's documented.

##### Formal Code Reviews Are Worth the Time

In the open-source community, our code is out there for the public to see, but how many people actually review the code as a whole? A common practice with enterprise development process is the 'code review'. This is having a peer or manager look over change sets to see if you've missed an edge case, made a minor mistake, or to suggest other naming conventions.

Code reviews lead to code that's easier to maintain, because you've gotten the opinion of another developer before it's even released. It also tends to lead to much more readable code. When you know someone else is going to read the code, in depth, you take more time making sure it's commented, and legible. Tools like GitHub make this a much easier process as well, since you can use Pull Requests and line-by-line comments during the code review.

##### Never Underestimate the Power of Requirements

There's a time and place for ad-hoc feature additions, and it's not very often. Features should come with a list of requirements. This is how you measure weather or not you've successfully completed development. Without it, you are stuck in an endless "...just one more thing" phase. You can see more on why this is important in my post ["The Power Of Pause"](https://chrisk.io/2013/07/the-power-of-pause-know-when-to-stop/ "The Power of Pause: Know when to stop").

In my experience with enterprise development, requirements are usually (at a minimum) thought through at a high level before the developer even sees them. While they aren't always perfect, they are a clear start and end point, which makes development much more measurable. Where requirements also come into play are with Quality Assurance. Weather you are using Test Driven Development or Waterfall, at some point your code needs to 'pass' and requirements are a very clear list of test 'assertions' that need to pass.

##### Act on data, not Instinct

Notice I didn't say 'ignore instinct'. Instinct in a developer has it's place. It helps us narrow down causes while troubleshooting, helps us in the early stages of writing our apps, and in general helps you avoid issues later on based off past experiences.

Where instinct should be avoided is when making crucial decisions to infrastructure, application performance, and deployment issues. Always trust data. You should be using something like [New Relic](https://chrisk.io/NewRelic) or a code profiler to tell you how much faster your site is running after your release. Testing pricing or copy changes? [Optimizley is a great tool](https://chrisk.io/optimizely) and will give you a clear winner.

If you can't give a statistic for a decision between two choices, then don't make the change. Use the vast number of tools at your disposal to get a clear 'winner'. If you aren't in production yet, employ User Groups to test changes in designs. If your response to 'Why color 1 over color 2?' is 'It pops', you're doing it wrong.

These are just a few things I've learned since entering the corporate development environment. If you have others that you stand by, drop them in the comments and let me know.
