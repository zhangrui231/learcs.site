---
sidebar_position: 2
description: cs50x problem set bulbs
title: bulbs
---

# Bulbs - CS50x 2023

## [Not-So-Broken Light Bulbs](#not-so-broken-light-bulbs)

In lecture, you may have noticed what seemed like a “bug” at the front of the stage, whereby some of the bulbs always seem to be off:

![screenshot of Week 2 lecture with strip of bulbs](/img/cs50/binary_bulbs.jpg )

Each sequence of bulbs, though, encodes a message in _binary_, the language computers “speak.” Let’s write a program to make secret messages of your own, perhaps that we could even put on stage!

## [Getting Started](#getting-started)

Open [VS Code](https://cs50.dev/).

Start by clicking inside your terminal window, then execute `cd` by itself. You should find that its “prompt” resembles the below.

Click inside of that terminal window and then execute

```
wget https://cdn.cs50.net/2022/fall/psets/2/bulbs.zip

```

followed by Enter in order to download a ZIP called `bulbs.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!

Now execute

to create a folder called `bulbs`. You no longer need the ZIP file, so you can execute

and respond with “y” followed by Enter at the prompt to remove the ZIP file you downloaded.

Now type

followed by Enter to move yourself into (i.e., open) that directory. Your prompt should now resemble the below.

If all was successful, you should execute

and see a file named `bulbs.c`. Executing `code bulbs.c` should open the file where you will type your code for this problem set. If not, retrace your steps and see if you can determine where you went wrong!

## [Implementation Details](#implementation-details)

To write our program, we’ll first need to think about **bases**.

### [The Basics](#the-basics)

The simplest _base_ is base-1, or _unary_; to write a number, _N_, in base-1, we would simply write _N_ consecutive `1`s. So the number `4` in base-1 would be written as `1111`, and the number `12` as `111111111111`. Think of it like counting on your fingers or tallying up a score with marks on a board.

You might see why base-1 isn’t used much nowadays. (The numbers get rather long!) Instead, a common convention is base-10, or _decimal_. In base-10, each _digit_ is multiplied by some power of 10, in order to represent larger numbers. For instance, is short for .

Changing base is as simple as changing the above to a different number. For instance, if you wrote `123` in base-4, the number you’d really be writing is , which is equal to the decimal number .

Computers, though, use base-2, or _binary_. In binary, writing `123` would be a mistake, since binary numbers can only have `0`s and `1`s. But the process of figuring out exactly what decimal number a binary number stands for is exactly the same. For instance, the number `10101` in base-2 represents , which is equal to the decimal number .

### [Encoding a Message](#encoding-a-message)

Light bulbs can only be on or off. In other words, light bulbs represent two possible states; either the bulb is on, or the bulb is off, just as binary numbers are either 1 or 0. We’ll have to find a way to encode text as a sequence of binary numbers.

Let’s write a program called `bulbs` that takes a message and converts it to a set of bulbs that we could show to an unsuspecting audience. We’ll do it in two steps:

-   The first step consists of turning the text into decimal numbers. Let’s say we want to encode the message `HI!`. Luckily, we already have a convention in place for how to do this, [ASCII](https://asciitable.com/). Notice that `H` is represented by the decimal number `72`, `I` is represented by `73`, and `!` is represented by `33`.
-   The next step involves taking our decimal numbers (like `72`, `73`, and `33`) and converting them into equivalent binary numbers, which only use 0s and 1s. For the sake of having a consistent number of bits in each of our binary numbers, assume that each decimal is represented with 8 bits. `72` is `01001000`, `73` is `01001001`, and `33` is `00100001`.

Lastly, we’ll interpret these binary numbers as instructions for the light bulbs on stage; 0 is off, 1 is on. (You’ll find that `bulbs.c` includes a `print_bulb` function that’s been implemented for you, which takes in a `0` or `1` and outputs emoji representing light bulbs.)

Here’s an example of how the completed program might work. Unlike the Sanders stage, we’ll print one byte per line for clarity.

To check our work, we can read a bulb that’s on (![🟡](/img/cs50/1f7e1.png )) as a `1` and bulb that’s off (![⚫](/img/cs50/26ab.png )) as a `0`. Then `HI!` became

```
01001000
01001001
00100001

```

which is precisely what we’d expect.

Another example:

Notice that all characters are included in the lightbulb instructions, including nonalphabetical characters like spaces (`00100000`).

## [Specification](#specification)

Design and implement a program, `bulbs`, that converts text into instructions for the strip of bulbs on CS50’s stage as follows:

-   Implement your program in a file called `bulbs.c`.
-   Your program must first ask the user for a message using `get_string`.
-   Your program must then convert the given `string` into a series of 8-bit binary numbers, one for each character of the string.
-   You can use the provided `print_bulb` function to print a series of `0`s and `1`s as a series of yellow and black emoji, which represent on and off light bulbs.
-   Each “byte” of 8 symbols should be printed on its own line when outputted; there should be a `\n` after the last “byte” of 8 symbols as well.

Hints for Decimal-to-Binary

Let’s walk through an example with the number 4. How would you convert 4 to binary? Start by considering the right-most bit, that which—if on—adds 1 to the number we’re representing. Do you need this bit to be on? Divide 4 by 2 to find out:

2 divides evenly into 4, which tells us there’s no remainder of 1 to worry about. We can safely leave this right-most bit off, then:

What about the preceding bit, now, the one just the left of this bit we discovered? To check, let’s follow a similar process, but pick up where we left off. In the previous step, we divided 4 by 2 and got 2. Now, does 2 divide evenly into 2? It does, so there’s no remainder of 2 to worry about:

Let’s continue further still. After dividing 2 by 2, we’re left with 1. Diving 1 by 2 leaves a remainder of 1. That means we’ll need to turn this bit on:

And now that we’ve divided our number down to 0, we need no further bits to represent it. Notice that we discovered the bits to represent 4 in the opposite order in which we need to print them: we’ll likely need a structure that lets us store these bits, so we can print them forwards later on. And, of course, in your actual code, you’ll be working with `char`s of 8 bits, so you’ll want to prepend any needed 0’s.

When checking for remainders, the modulo (`%`) operator may come in handy! `4 % 2`, for example, returns 0, meaning that 2 divides into 4 with a remainder of 0.

## [How to Test Your Code](#how-to-test-your-code)

Your program should behave per the examples above. You can check your code using `check50`, a program that CS50 will use to test your code when you submit, by typing in the following at the `$` prompt. But be sure to test it yourself as well!

```
check50 cs50/problems/2023/x/bulbs

```

To evaluate that the style of your code, type in the following at the `$` prompt.

## [How to Submit](#how-to-submit)

In your terminal, execute the below to submit your work.

```
submit50 cs50/problems/2023/x/bulbs

```