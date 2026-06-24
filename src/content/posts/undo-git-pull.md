---
title: 'Undo git pull'
published: 2014-01-23
description: 'So this morning I was updating my local development environment and getting the latest code from the upstream repo of a project I have forked on GitHub when…'
image: '/images/blog/facepalm-picard.jpg'
tags: ['coding', 'Evergreen', 'git', 'GitHub', 'Software Development']
category: 'Software Development'
draft: false
---
So this morning I was updating my local development environment and getting the latest code from the upstream repo of a project I have forked on GitHub when I suddenly needed to undo a git pull. For some clarity, my method of forking is done [as suggested by GitHub themselves](https://help.github.com/articles/fork-a-repo).

The project I'm working on has recently split a new branch for an upcoming 2.0 version, while nightly work is done on master and will likely be released as something like 1.9.5. I have been taking care of some tickets on a branch named `release/2.0` but this morning was going to check something out in `master`.  

I logged in as I normally do, typed `git pull upstream master` and low and behold, was presented with a merge comment suggestion of `Merge branch 'master' of https://github.com/easydigitaldownloads/Easy-Digital-Downloads into release/2.0`. Face...meet palm. If you use git often, you know what I just did...but if you don't let me explain:

Master and release/2.0 are branches of the code base that, at one some point in the future will be merged. Today is not that day, and I'm not the person to do this. Because I had been working on the release/2.0 branch, when I typed my pull from upstream master, it merged the master branch of the primary project, with my local copy of the release/2.0.

I totally panicked for a second, thinking I'd have to delete and re-clone, but I found a way around this. Two great commands can fix this issue, if you happen to go down the same path I did.

##### Step 1: Determine the Hash of the previous HEAD

Using the `git reflog` command, we can get a list of the last 15 references or hashes. Mine looked something like this:

user@host:path$ git reflog
9d80215 HEAD@{0}: pull upstream master: Merge made by the 'recursive' strategy.
5f6c496 HEAD@{1}: pull: Fast-forward
3b3c6a4 HEAD@{2}: commit (merge): Fixing formatting, removing tests for further debugging, and fixing filter spelling for args"
bec0786 HEAD@{3}: commit: Fixing formatting issues, spelling issue, and removing tests for the moment
f6dd939 HEAD@{4}: commit: Fixing assertion for post type in unit tests
03f5507 HEAD@{5}: commit: Adding Unit tests for new function edd\_get\_users\_purchased\_products()
c517bf9 HEAD@{6}: checkout: moving from master to release/2.0
83ff820 HEAD@{7}: checkout: moving from release/2.0 to master
c517bf9 HEAD@{8}: commit: #1874 - purcahsed products list for a given user
c028f7d HEAD@{9}: checkout: moving from master to release/2.0
83ff820 HEAD@{10}: pull: Fast-forward
069aa66 HEAD@{11}: pull upstream master: Fast-forward
8c57661 HEAD@{12}: pull upstream master: Fast-forward
37a57c2 HEAD@{13}: pull upstream master: Fast-forward
6b01ff4 HEAD@{14}: clone: from git@github.com:cklosowski/Easy-Digital-Downloads.git

We can see my 'oops' is `HEAD@{0}`, which means, I want the hash of `HEAD@{1}` or `5f6c496`.

##### Step 2: Reset my local branch

Using the has above, we can now use the `git reset` command to get local copy of this branch, back to the state the remote is in, and no one will be the wiser.

user@host:path$ git reset --hard <hash found above>

Hit enter, and then run a `git status` where you should see a message of something that reads like `nothing to commit, working directory clean`.

SUCCESS! We've now unmerged the pull and merge we did by accident and we can continue coding like nothing ever happened.

##### Caveats

By doing this, any work you've done between the last successful commit and this pull will be lost. Be sure to stash that away somewhere before you run these commands or you will need to recode it.

\[kofi\]
