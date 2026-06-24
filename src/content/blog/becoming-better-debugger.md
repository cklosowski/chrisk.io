---
title: 'Becoming a Better Debugger'
description: 'Debugging software is the bane of existence for most developers. Once you can use a few key strategies though, it becomes something you love to do.'
pubDate: 2017-02-10
---
Debugging. The ultimate equalizer when it comes to developers. The ability to identify, diagnose, fix, test, and deploy a patch to an elusive bug is the ultimate adrenaline rush for a developer...right? It cannot be _just me_! So how can you become a better debugger?

### Debugging is like being a sniper

Just as being a sniper takes immense training and instruction, as does becoming a good developer. Trained snipers have two phrases that **I like to think** relate to debugging software pretty well.

1.  DOPE - An acronym for "Data on Previous Engagement"
2.  One Shot. One Kill.

### Data. Data. Data.

#### The deal with DOPE

Snipers use their "_DOPE_" to make adjustments to their next shot, based off the data they observed from their previous shots. Seeing how the wind affected the trajectory, how the humidity weighed down the projectile, or even (at extremely long distances), how the rotation of the Earth affected the outcome. The point is, seeing the affects of the previous engagements helps them make an informed decision about the next move.

#### Experience matters

As your development career advances, so to will your experiences and chance to witness the outcomes of some of your decisions. Through your efforts to always produce stellar software, you will have some failures or unforeseen side affects. At times it's easy to try and ignore those as "one offs" or "edge cases", but it's important to remember these moments, as they can help you identify things "not to do" when you're working on a hot fix for a serious production bug.

#### Take "notes"

Whether you are the person who carries around a trendy Moleskin notebook, uses Evernote, or has the eidetic memory like Dr. Spencer Reed, keeping a note about a "weird bug" you saw is beneficial to your future debugging. By doing so, you can shorten the time between identification to resolution, simply by remembering what caused a previous bug, and being able to identify if it matches a pattern you've seen before.

Notes don't have to be physical. The key is that you are not just fixing the bug, but understanding why the bug happened in the first place. Usually error messages can be extremely helpful, but every now and then you get an error message you just don't understand why it happens. For instance:

From time to time, in the WordPress ecosystem, you'll see a site where the RSS Feeds fail XML validation for an unexpected character on line 1, character 1. This can leave many people stumped...and a google search shows lots of results, with lots of different suggestions.

Usually though, what it means is that a plugin or theme has an extra blank line at the end of a PHP file...like so:

https://gist.github.com/cklosowski/e6d9c8a59aa67ffc32d1fdab149c7958

I won't go into the specifics here of why it happens exactly, but the important thing is that when I see that error, the first thing I look for is PHP files with blank lines at the end. This is the type of thing that you should be taking 'mental note' of. It's the Data from Previous Engagements, like mentioned above.

#### There is no "coincidence"

If you've got a pesky bug that seems to be hard to replicate, but more than 1 person has seen it, odds are, you have a bug. It may not be a common bug, but based off the data, there is a bug. Your _DOPE_ doesn't just have to come from you, in the case of development. You can use the data from other people using your software to widen the scope of your bug hunt.

\[bctt tweet="When debugging, there is no such thing as coincidence." username="cklosowski"\]

### You only get one shot

#### Ok that's a little dramatic...

...but let's be honest. Finding a bug, fixing it, releasing it, only to find out that it either didn't fix it, or made matters worse...is no fun. This is a situation that no one likes to be in, and it's avoidable through a few practices.

#### ABaT

Always be (automated) testing. If you aren't writing unit tests for the bugs you find, then you need to be. I'll admit, I'm not always doing it...but I should be. If there is a bug that's big enough to force a deployment, you should be writing a unit test to make sure you've fixed it. This is for two reasons:

1.  An automated test is better at logic than a human
2.  You never want to reintroduce a failure

By adding a unit test for a production release level bug, you're making sure that in the future, you don't accidentally re-introduce the bug. Things can get hectic during an emergency deployment, and sometimes things get missed, like rolling a hot fix back into the development version of the app.

#### Reputation is hard to recover

As someone who writes software that people's businesses depend on, [reputation management does not fall short on me](https://chrisk.io/protect-all-the-reputations/). When I introduce a bug, it introduces a bug to my "customer's customers". This is why I think it's extremely important to have the 'one shot' approach to a bug release. Making sure it is **done, and done right** will go much further than _having it done now_.

### What's your most memorable bug?

We've all had that bug that we will never forget...what's yours? Mine, you ask? Well...mine was so epic, it was [the topic of an entire podcast episode](https://hardrefresh.audio/episodes/the-phantom-subscriptions/), so don't feel bad. In short a single line of code would have prevented 400 lines to patch a bug that was assigning incorrect payment data to customers.
