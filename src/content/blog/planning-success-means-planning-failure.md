---
title: 'Planning for success means planning for failure'
description: 'By planning for failure, your next project should succeed. You may hit a point where things go wrong, but with proper planning, you''ll be prepared for it.'
pubDate: 2016-04-05
heroImage: '/images/blog/planning.jpg'
---
If you ask someone to write out a 'game plan' for some arbitrary goal or task they need to achieve, odds are the list will be precisely what needs to happen to achieve the goal. Lists like this are helpful, keep us focused, and 100% on task. So what happens when something doesn't go as planned. What if step 3 fails...where do you go from there? After all, no one really 'plans' to fail. Planning for failure isn't normal...or is it?

### Planning for Failure

Look, planning for something to go wrong might be 'bad joo joo' or 'Not thinking positive', but when time an money are at stake...planning for failure is necessary. In software development, specifically, planning for failure during a release or deployment is called a 'Rollback plan'. Today...I used a rollback plan. And it worked out just great in the end.

### Welcome, Restrict Content Pro

The company I work for has a few projects we manage. For the longest time, [Restrict Content Pro](https://chrisk.io/i/rcp) (one of our earliest) has been sold as a product on PippinsPlugins.com. Nothing wrong with this, but as we started realizing that we needed a better sales platform for the plugin, we needed to move the sales and marketing to it's own site, [RestrictContentPro.com](https://chrisk.io/i/rcp). No big deal...except that [PippinsPlugins.com](https://chrisk.io/i/pp) has been selling license keys for it for almost 4 years now. This poses quite a challenge when you try and separate 4,000 licenses and payments out of nearly 7,000. Some of which contain the purchase of multiple products.

### Failure is always an option

In a situation like this, moving payments and customers with actively maintained license keys around between sites...one might say "Failure is not an option". The reality is, failure is always an option. How you plan for that failure though, is where the end result is successful. We knew there was a reasonable chance that at some point during this migration, something could fail. There just wasn't any illusion that this would be all rainbows and butterflies. So we planned for failure. Prior to running the deployment scripts, we had a list of commands we could run that would set us back to ground zero. A 'reset' button if you will, in the form of 6 commands. By having these handy, ready, and proven working, any failure we ran into was easy to stop, take a couple steps back, fix our issues and start again.

\[bctt tweet="The reality is, failure is always an option."\]

It's no secret that situations, where real money is on the line, can cause tense emotions. With a plan on what to do if something fails, no one is left making rash and quick decisions that aren't well thought out and tested. Quick and untested decisions lead to larger failures, most of the time.

### Always plan for your failures

When planning out a large project with many moving parts, the first thing you should do is pick the points most susceptible to failure, and write a 'rollback' or 'fallback' plan. Outline the definition of what a failure us, how the item could fail, what it means to the outcome of the project, and any steps you can take to either fix the issue. More importantly than all those, write out the steps needed to get the process back to step one. Essentially, what's your "reset" button look like?

\[bctt tweet="Knowing what to do when something fails ahead of time, leads to success."\]

With just those things done, you'll feel much more confident going into your next big release and, while you may experience a failure, you can help the overall project reach a successful outcome.
