---
sidebar_position: 1
description: cs50x practice problem  bank
title: bank
---

# Home Federal Savings Bank - CS50x 2023

In [season 7, episode 24](https://en.wikipedia.org/wiki/The_Invitations) of [Seinfeld](https://en.wikipedia.org/wiki/Seinfeld), [Kramer](https://en.wikipedia.org/wiki/Cosmo_Kramer) visits a bank that promises to give $100 to anyone who isn’t greeted with a “hello.” Kramer is instead greeted with a “hey,” which he insists isn’t a “hello,” and so he asks for $100. The bank’s manager proposes a compromise: “You got a greeting that starts with an ‘h,’ how does $20 sound?” Kramer accepts.

In a file called `bank.py`, implement a program that prompts the user for a greeting. If the greeting starts with “hello”, output `$0`. If the greeting starts with an “h” (but not “hello”), output `$20`. Otherwise, output `$100`. Ignore any leading whitespace in the user’s greeting, and treat the user’s greeting case-insensitively.

Hints

-   Recall that a `str` comes with quite a few methods, per [docs.python.org/3/library/stdtypes.html#string-methods](https://docs.python.org/3/library/stdtypes.html#string-methods).
-   Be sure to give $0 not only for “hello” but also “hello there”, “hello, Newman”, and the like.

## [Demo](#demo)

## [Before You Begin](#before-you-begin)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/6/bank.zip` followed by Enter in order to download a zip called `bank.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip bank.zip` to create a folder called `bank`.
5.  You no longer need the ZIP file, so you can execute `rm bank.zip` and respond with “y” followed by Enter at the prompt.

## [How to Test](#how-to-test)

Here’s how to test your code manually:

-   Run your program with `python bank.py`. Type `Hello` and press Enter. Your program should output:
-   Run your program with `python bank.py`. Type `Hello, Newman` and press Enter. Your program should output:
-   Run your program with `python bank.py`. Type `How you doing?` and press Enter. Your program should output
-   Run your program with `python bank.py`. Type `What's happening?` and press Enter. Your program should output

You can execute the below to check your code using `check50`, a program that CS50 will use to test your code when you submit. But be sure to test it yourself as well!

```
check50 cs50/problems/2022/python/bank

```

Green smilies mean your program has passed a test! Red frownies will indicate your program output something unexpected. Visit the URL that `check50` outputs to see the input `check50` handed to your program, what output it expected, and what output your program actually gave.

## [How to Submit](#how-to-submit)

No need to submit! This is a practice problem.