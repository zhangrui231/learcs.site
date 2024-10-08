---
sidebar_position: 1
description: cs50x problem set hello
title: hello
---

# Hello - CS50x 2023

Implement a program that prints out a simple greeting to the user, per the below.

```
$ python hello.py
What is your name?
David
hello, David

```

## [Getting Started](#getting-started)

Log into [cs50.dev](https://cs50.dev/), click on your terminal window, and execute `cd` by itself. You should find that your terminal window’s prompt resembles the below:

Next execute

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-hello.zip

```

in order to download a ZIP called `sentimental-hello.zip` into your codespace.

Then execute

```
unzip sentimental-hello.zip

```

to create a folder called `sentimental-hello`. You no longer need the ZIP file, so you can execute

and respond with “y” followed by Enter at the prompt to remove the ZIP file you downloaded.

Now type

followed by Enter to move yourself into (i.e., open) that directory. Your prompt should now resemble the below.

Execute `ls` by itself, and you should see `hello.py`. If you run into any trouble, follow these same steps again and see if you can determine where you went wrong!

## [Specification](#specification)

Write, in a file called `hello.py`, a program that prompts a user for their name, and then prints `hello, so-and-so`, where `so-and-so` is their provided name, exactly as you did in [Problem Set 1](https://cs50.harvard.edu/x/2023/psets/1/), except that your program this time should be written in Python.

## [Usage](#usage)

Your program should behave per the example below.

```
$ python hello.py
What is your name?
Emma
hello, Emma

```

## [Testing](#testing)

While `check50` is available for this problem, you’re encouraged to first test your code on your own for each of the following.

-   Run your program as `python hello.py`, and wait for a prompt for input. Type in `David` and press enter. Your program should output `hello, David`.
-   Run your program as `python hello.py`, and wait for a prompt for input. Type in `Bernie` and press enter. Your program should output `hello, Bernie`.
-   Run your program as `python hello.py`, and wait for a prompt for input. Type in `Carter` and press enter. Your program should output `hello, Carter`.

Execute the below to evaluate the correctness of your code using `check50`. But be sure to compile and test it yourself as well!

```
check50 cs50/problems/2023/x/sentimental/hello

```

Execute the below to evaluate the style of your code using `style50`.

## [How to Submit](#how-to-submit)

In your terminal, execute the below to submit your work.

```
submit50 cs50/problems/2023/x/sentimental/hello

```