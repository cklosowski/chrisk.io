---
title: 'Make a branch from a Pull Request on GitHub'
published: 2016-11-11
description: 'How to make changes to a GitHub Pull Request'
tags: ['Evergreen', 'GitHub', 'Software Development']
category: 'Software Development'
draft: false
---
Many times, as an open source project maintainer, I'm tasked with reviewing pull requests that community members have contributed to our project. It's honestly one of my favorite things to do. Seeing community collaboration on projects is awesome, and really helps me feel a purpose to what I do on a day to day basis. While any pull request is typically welcome, there are times when slight edits are needed to meet project guidelines or coding standards.

### Edit a pull request and maintain commit history

The worst thing I could do as a maintainer is reject someone's code on they whitespace issues alone. I'd love to have the whitespace perfect, but as long as the code works and achieves the task in a manor I feel adequate, whitespace changes or docblocs should not matter.

The key here though, is I shouldn't lose someone's commit history, since they deserve credit for the initial work they've done. So here's how I handle this.

First, if an issue doesn't exist for the pull request I create one. That's important later.

We'll assume 2 things here in my code:  
1) The Pull Request number is `123`  
2) The Issue number is `567`

git fetch origin pull/123/head:pull/123
git checkout pull/123
git checkout -b issue/567 pull/123
// Make changes
git push origin issue/567

From that point you can close the original Pull Request in 123 without merging, and after making your edits and pushing to the `issue/567` branch, create a new pull request. This new pull request, will have all the necessary commit history to retain credit for the original Pull Request author.
