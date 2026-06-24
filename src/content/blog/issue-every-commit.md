---
title: 'An issue for every commit'
description: 'Over this past weekend at WordCamp Phoenix , I had the pleasure of sitting down with the 3/4 of the Easy Digital Downloads core development team. Pippin,…'
pubDate: 2014-01-22
heroImage: '/images/blog/Screen-shot-2014-01-22-at-10.07.04-PM.png'
---
Over this past weekend at [WordCamp Phoenix](http://2014.phoenix.wordcamp.org/), I had the pleasure of sitting down with the 3/4 of the [Easy Digital Downloads](https://chrisk.io/EDD) core development team. Pippin, Dan, and Chris traveled from their respective hometowns to attend a WordCamp in my backyard. This was the first time I'd had a chance to meet Dan and Chris in person, although we've gone back and forth on many of GitHub issues.

Which brings me to the point of writing this. At one point I believe Chris had stumbled upon a bit of code he wanted to commit, and when asked what 'issue' it was related to, we all had a small discussion on commits and how they should always be tied to an issue (or ticket, project, etc). I use the word 'issue' as that's the way GitHub tracks a project's bugs, enhancements, discussions, etc.  

##### It's all relative

So why an issue to every commit?! This isn't really the case, not every commit needs it's own issue, but every commit should relate to an issue. Weather it's existing, or you are creating it for this specific commit, there needs to be some sort of documentation of why the change is being made, what kind of change it is, and from there, all related change sets that relate to it.

If you have multiple files being edited, only commit files together if their changes are related. This helps the rollback process, when you can easily revert a changeset and all related changes are reversed, while unrelated changes are kept in their own revision.

Ad-Hoc changes are not only a challenge to track down if a bug arrises later, but it leads to a messy codebase where not all parties involved are aware of changes and their reasoning.

##### Meaningful messages tell a story

I'll be honest, when it's time to release, having the ability to just look at your commit messages and easily summarize what was changed is a godsend. It also helps you scope a release and the possible impact it may have. Each commit you make should have a meaningful message with it. "Updating Header" or "deleting stuff" doesn't quite cut it. Not only does it make looking through issues later difficult, but it shows a lack of care and pride in what you just accomplished. I'll be honest, I've done it once or twice, but try not to make it a habit.

##### Tools to do the job

Most developers have a few things in the air at once, and what happens if you have multiple changes to a file, but you only want to commit part of it!? These changes aren't related and in fact, belong to different issues?! What is a developer to do? `git add -p` to the rescue. This command allows you to commit specific parts of a file, instead of all changes in the file. This is a great way to work in parallel, while keeping your commits tied to separate issue.

So be sure to write up that bug, enhancement, or feature next time you start coding and drop some project requirements in there while you are at it. Let's focus on making your projects as manageable as possible.

What are some of your practices when it comes to issue tracking and commits?
