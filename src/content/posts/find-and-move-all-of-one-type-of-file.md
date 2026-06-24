---
title: 'Find and move all of one type of file'
published: 2011-04-02
description: 'I was doing a little organizing of my home directory and needed a quick way to move all of my .pdf files into my Documents/PDF folder. It''s where I keep all…'
tags: ['cp', 'exec', 'find', 'mv']
category: 'Software Development'
draft: false
---
I was doing a little organizing of my home directory and needed a quick way to move all of my .pdf files into my Documents/PDF folder. It's where I keep all PDFs for easy organization. Receipts, financial documents, e-books, etc. Here's a quick way to find ALL of a file type (recursively of course) and move (or copy if you prefer) to another directory.

`    $ find /home/username/ -iname "*.pdf*" -exec mv {} /home/cklosowski/Documents/pdfs/ ;    `

Again you could also cp instead of mv if you prefer (would end up with duplicates however) by changing it to read:

`    $ find /home/username/ -iname "*.pdf*" -exec cp {} /home/cklosowski/Documents/pdfs/ ;    `
