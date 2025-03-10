---
sidebar_position: 3
description: cs50x practice problem  jar
title: jar
---

# Cookie Jar - CS50x 2023

![Cookie Monster](/img/cs50/giphy1.gif )

Source: Sesame Street

Suppose that you’d like to implement a [cookie jar](https://en.wikipedia.org/wiki/Cookie_jar) in which to store cookies. In a file called `jar.py`, implement a `class` called `Jar` with these methods:

-   `__init__` should initialize a cookie jar with the given `capacity`, which represents the maximum number of cookies that can fit in the cookie jar. If `capacity` is not a non-negative `int`, though, `__init__` should instead raise a `ValueError` (via `raise ValueError`).
-   `__str__` should return a `str` with `![🍪](/img/cs50/1f36a.png )`, where is the number of cookies in the cookie jar. For instance, if there are 3 cookies in the cookie jar, then `str` should return `"![🍪](/img/cs50/1f36a.png )![🍪](/img/cs50/1f36a.png )![🍪](/img/cs50/1f36a.png )"`
-   `deposit` should add `n` cookies to the cookie jar. If adding that many would exceed the cookie jar’s capacity, though, `deposit` should instead raise a `ValueError`.
-   `withdraw` should remove `n` cookies from the cookie jar. Nom nom nom. If there aren’t that many cookies in the cookie jar, though, `withdraw` should instead raise a `ValueError`.
-   `capacity` should return the cookie jar’s capacity.
-   `size` should return the number of cookies actually in the cookie jar.

Structure your `class` per the below. You may not alter these methods’ parameters, but you may add your own methods.

```
class Jar:
    def __init__(self, capacity=12):
        ...

    def __str__(self):
        ...

    def deposit(self, n):
        ...

    def withdraw(self, n):
        ...

    @property
    def capacity(self):
        ...

    @property
    def size(self):
        ...

```

## [Demo](#demo)

You’re welcome, but not required, to implement a `main` function in which to test your class, so this is all we can demo!

![Cookie Monster](/img/cs50/giphy2.gif )

Source: Sesame Street

## [Before You Begin](#before-you-begin)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/6/jar.zip` followed by Enter in order to download a zip called `jar.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip jar.zip` to create a folder called `jar`.
5.  You no longer need the ZIP file, so you can execute `rm jar.zip` and respond with “y” followed by Enter at the prompt.

## [How to Test](#how-to-test)

Here’s how to test your code manually:

-   Define a `main` function in your `jar.py` file, wherein you create a new instance of `Jar` with `jar = Jar()`. Test this `jar` has the capacity it should by calling `print(str(jar.capacity))`. Be sure your program calls `main` at the bottom of the file, as via `main()`.
-   Test that your `__str__` function works as intended by calling `print(str(jar))`.
-   Try calling `jar.deposit(2)` to deposit two cookies. Calling `print(str(jar))` should now show you the same number of cookies you’ve deposited.
-   Try calling `jar.withdraw(1)` to withdraw one cookie. Calling `print(str(jar))` should now show you one fewer cookie than you had before.
-   Try experimenting with depositing and withdrawing various amounts of cookies. Are you unable to withdraw past the jar’s size? Are you unable to deposit past the jar’s capacity?

No `check50` for this one!

## [How to Submit](#how-to-submit)

No need to submit! This is a practice problem.