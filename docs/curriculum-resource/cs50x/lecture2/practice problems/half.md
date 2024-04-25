---
sidebar_position: 2
description: cs50x practice problem  half
title: half
---

# Half - CS50x 2023

## [Learning Goals](#learning-goals)

-   Work with different data types
-   Practice type casting
-   Use math operations
-   Create a function with input parameters and return value

## [Background](#background)

Suppose you are eating out at a restaurant with a friend and want to split the bill evenly. You may want to anticipate the amount you’ll owe before the bill arrives with tax added. In this problem, you’ll complete a function to calculate the amount each of you owes based on the bill amount, the tax, and the tip.

-   Hints
    
    -   Note that the tax and tip are input as percents. You may want to change these to decimal values before calculating the total.
    -   Since the tip is input as an `int`, keep in mind that if you divide an `int` by an `int` you’ll get back an `int`!
    -   Order of operations here is exactly the same as in algebra, where multiplcation and division are performed before addition and subtraction.
    

## [Demo](#demo)

![DebugGif](/img/cs50/halfDemo.gif )

## [Getting Started](#getting-started)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  At the `$` prompt, type `mkdir half`
4.  Now execute `cd half`
5.  Then copy and paste `wget https://cdn.cs50.net/2022/fall/labs/1/half.c` into your terminal to download this lab’s distribution code.
6.  You are to complete the function, `half`, which calculates exactly half of the bill after tax and tip are added, and returns that value.

## [Implementation Details](#implementation-details)

Your function should use the input parameters, `bill`, `tax`, and `tip`, to calculate the final amount. However, since these values are percentages, you’ll have to do some work to convert these to more appropriate formats to use for your calculation.

The tax should be added to the bill amount _before_ calculating the tip. Finally, you will return exactly half of the full amount, including the bill amount, the tax and the tip.

## [Thought Question](#thought-question)

-   Why do you think there are different data types in C?

## [How to Test Your Code](#how-to-test-your-code)

Your program should behave per the examples below.

```
half/ $ ./half
Bill before tax and tip: 12.50
Sale Tax Percent: 8.875
Tip percent: 20
You will owe $8.17 each!

```

```
half/ $ ./half
Bill before tax and tip: 23.50
Sale Tax Percent: 7  
Tip percent: 15
You will owe $14.46 each!

```

```
half/ $ ./half
Bill before tax and tip: 100
Sale Tax Percent: 6.25
Tip percent: 18
You will owe $62.69 each!

```

You can check your code using `check50`, a program that CS50 will use to test your code when you submit, by typing in the following at the `$` prompt. But be sure to test it yourself as well!

```
check50 cs50/labs/2023/x/half

```

Green smilies mean your program has passed a test! Red frownies will indicate your program output something unexpected. Visit the URL that `check50` outputs to see the input `check50` handed to your program, what output it expected, and what output your program actually gave.

To evaluate that the style of your code (indentations and spacing) is correct, type in the following at the `$` prompt.

## [How to Submit](#how-to-submit)

No need to submit! This is an optional practice problem.