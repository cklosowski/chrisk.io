---
title: 'Developer ProTip: Don''t be tricky'
description: 'Well that was embarrassing! Day 1 of a plugin release. One of my first customers. Boom, Fatal Error. (╯°□°）╯︵ ┻━┻ In short, it was a simple mistake on my…'
pubDate: 2014-05-05
heroImage: '/images/blog/5606897230_5a991880a9_o.jpg'
---
Well that was embarrassing! Day 1 of a plugin release. One of my first customers. Boom, Fatal Error. (╯°□°）╯︵ ┻━┻

In short, it was a simple mistake on my part, by using a function in PHP that wasn't supported by versions of PHP lower the 5.3. Now, some of your purist developers and site owners might think "Well, that's their fault for not having a modern version of PHP". Let me remind you, [WordPress still requires PHP 5.2.4 or greater](http://wordpress.org/about/requirements/). I write WordPress plugins, therefore I must support PHP 5.2.4 or greater. I'll take full responsibility for that.

So what did I do wrong? Well, PHP 5.3 introduced 'closures', or what other languages call "Anonymous Functions". The line of code in question was this:

$utm\_string .= implode( '&', array\_map( function ( $v, $k ) { return 'utm\_' . $k . '=' . $v; }, $utm, array\_keys( $utm ) ) );

To be completely honest, this line of code should have been (and was actually replaced by) a simple foreach loop. So why didn't I do that? Simple answer is, I was looking for a 'fancy' way to make it a one liner. Closures are a powerful tool and can be used very intelligently...if your sure that the version of PHP being used is new enough. In this case, it was just a 'tricky' way to make 6 lines into 1. Here's the replaced code:

$first = true;
foreach ( $utm as $key => $value ) {
    if ( !$first ) {
        $utm\_string .= '&';
    }

$utm\_string .= 'utm\_' . $key . '=' . $value;  
    $first = false;  
}

See, minus whitespace and brackets, 6 lines of code. So stop being tricky developers! just take a few extra minutes to do it the compatible way. You AND your users will thank you later. Still not convinced? Great, here's a few more reasons why tricky code is a bad idea.

### 1\. Tricky code is NOT readable

Look at that line I wrote above. Not the nice foreach...but that monstrosity of a single line. That thing is not easy to read. The variables are named poorly. No whitespacing, and it just reads like a compiled mess. We use non-compiled languages for a reason, and it's so we don't have to look at crap like that.

### 2\. Tricky code is NOT safe

Finding a tricky unique way to make a shortcut usually isn't backwards compatible. Think about it, the tricky way exists in the version you are using, because over time we've grown to find a need for a shorter method. Older versions of the platform may not have that ability.

### 3\. Tricky code is NOT easily debugged

I'll draw your attention again to Exhibit A. How would you put debug code into that thing? Not easily right? You'd be having to count brackets, and make sure you're in the right method. Now compare that with the simply foreach loop. We could easily throw a line or two of debugging in there without having to worry about breaking the logic.

Look, I'm not opposed to using clever methods to do things. That's what developers do...but when it comes to your customers, just make sure you put their experience before your number of lines of code. I'll leave you with one quote before I prompt you, and it's one I love using:

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.  
> \-Brian Kernighan: Co-Developer of Unix

**_So what's one way you've been tricky, and how has it hurt (or helped!) you out?_**
