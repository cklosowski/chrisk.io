---
title: 'Nvidia Display tool incorrectly wrote xorg.conf'
published: 2011-04-08
description: 'My xorg.conf file was improperly written by the nVidia xserver configuration tool today, and wouldn''t you know it, it was when I had just gotten to the…'
tags: ['nVidia', 'startx', 'xorg.conf']
category: 'Software Development'
draft: false
---
My xorg.conf file was improperly written by the nVidia xserver configuration tool today, and wouldn't you know it, it was when I had just gotten to the Airport and didnt' have wifi yet. It's cool. just a little reading of the error logs showed me I needed to do 1 quick thing.

My 'ServerLayout' section looked like this:

Section "ServerLayout"
    Identifier     "Layout0"
    Screen     0   "Screen0" -1600-0
    InputDevice    "Keyboard0" "CoreKeyboard"
    InputDevice    "Mouse0" "CorePointer"
    Option         "Xinerama" "0"
EndSection

This was for my dual monitor hookup that I have at home. Well guess what isn't there....my 2nd monitor and the tool I used to re-write the conf file did so incorrectly. It should look like this:

Section "ServerLayout"
    Identifier     "Layout0"
    Screen         "Screen0"
    InputDevice    "Keyboard0" "CoreKeyboard"
    InputDevice    "Mouse0" "CorePointer"
    Option         "Xinerama" "0"
EndSection
