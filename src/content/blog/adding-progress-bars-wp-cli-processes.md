---
title: 'Adding progress bars to your WP-CLI processes.'
description: 'Learn how to add a progress bar to your WPCLI commands'
pubDate: 2017-03-03
---
As of late, I've found myself doing quite a few things via the command line with [WP-CLI](http://wp-cli.org/). If you've never used it before, it's an extremely powerful command line interface for interacting with your WordPress installation. It comes bundled with some great utilities to help you out, including a WPCLI progress bar, but we'll get to that in a minute.

Where it becomes extremely powerful is with tasks that can cause a web based interface to timeout or reach the max execution times. I have found it very helpful when running migration, import, and export scripts. If you've ever executed a long running task in the command line, you've felt the pain of thinking:

> Is it still going? Did it break? What's happening?

#### Enter...the progress bar

WP-CLI has an awesome built in method that allows you to output a progress bar, complete with the percentages, running time, and estimated time to completion.

![](/images/blog/wp-cli-progress-bar-example.png)

The code to make this happen is surprisingly simple. It consists of 3 lines:

First you define what the text will be in front of the progress bar, and the total number of items to complete.  
`$progress = \WP_CLI\Utils\make_progress_bar( 'Progress Bar', $total );`

Next, during each step of your loop, you _tick_ the progress bar.  
`$progress->tick();`

After your loop is complete, you _finish_ the progress bar  
`$progress->finish();`

#### Example Plugin

\[purchase\_link id="3150" text="Get Project File" style="button" color="green"\]

https://gist.github.com/cklosowski/1aba412c4476c8d6fb5107eba9f90741

\[purchase\_link id="3150" text="Get Project File" style="button" color="green"\]
