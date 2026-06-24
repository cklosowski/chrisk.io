---
title: 'Using Zapier, Twitter, and Pushover to Monitor Your Followers'
description: 'One of the things that I''ve found the most annoying about all the Twitter apps on my iPhone is that when I get followed by someone new, it takes too many…'
pubDate: 2016-03-11
heroImage: '/images/blog/twitter-zapier-pushover-automation.jpg'
---
One of the things that I've found the most annoying about all the Twitter apps on my iPhone is that when I get followed by someone new, it takes too many steps to learn a little bit more about them. Typically when someone follows me, I will check their profile, see what they do and if I want to follow back. Usually this takes a couple clicks, swipes, and a few more clicks (especially if I want to follow them from more than one Twitter account).

### Zaps make things easier

Recently I've been playing around with an automation service called [Zapier](https://zapier.com) (think 'zap' like a laser). Zapier is a service that connects all kinds of different web-based services to each other through what they call 'Zaps'. These Zaps allow you to make services that would normally not pass data back and forth, do so. There are endless combinations of zaps, but you can get a good idea of the things you can do via their [recommended collections](https://zapier.com/app/recommendations).

### Using Pushover

I love [Pushover](https://chrisk.io/pushover), a mobile app to send any type of data you wish to your phone via a push notification. The strength of Zapier is to take data from one service and send it to another, so in my case, get a little more data than just `@username followed you`.

### The Zap

My Zap looks like this. When I get a new follower on my Twitter account [@cklosowski](https://twitter.com/cklosowski)... ![zapier-twitter-new-follower](/images/blog/zapier-twitter-new-follower.png) Trigger a Pushover Notification with the data I'm looking for: ![zapier-pushover-with-twitter](/images/blog/zapier-pushover-with-twitter.png) You'll even notice I've added an 'Action URL' that will open my preferred Twitter client on iOS ([TweetBot](https://chrisk.io/tweetbot)) to my new follower's profile so I can quickly follow them from any account I have setup in [TweetBot](https://chrisk.io/tweetbot).

**Update:** I've recently also switched back to the official Twitter app for iOS. If you are using that the custom URL to open a profile is `twitter://user?screen_name=[screen_name]` using the 'Follower Screen Name' ingredient.

 

### The End Result

With this Zap in place (running every 15 minutes), I'll see the following on my phone when I get a new follower (Hey there [@tannermoushey](https://twitter.com/tannermoushey)!). The **_Open URL_** intent and **_View Profile_** link will open up [TweetBot](https://chrisk.io/tweetbot) to interact with the profile.

**Note:** After using this for a few followers, I noticed that profiles without descriptions caused the Zap to fail. To fix this, you can put a 'filter' between the Twitter and Pushover steps that looks to verify that the 'Description' exists, and if so, move onto pushing to Pushover.

![IMG\_1137](/images/blog/IMG_1137-169x300.jpg)![IMG\_1139](/images/blog/IMG_1139-169x300.jpg)![IMG\_1140](/images/blog/IMG_1140-169x300.jpg)
