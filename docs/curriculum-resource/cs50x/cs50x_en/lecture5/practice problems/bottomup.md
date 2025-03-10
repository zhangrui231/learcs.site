---
sidebar_position: 1
description: cs50x practice problem  bottomup
title: bottomup
---

# Bottom Up - CS50x 2023

## [Learning Goals](#learning-goals)

-   Practice working with images
-   Learn about metadata
-   Learn more about how `struct`s can be useful

## [Background](#background)

Imagine an image you need to present to your boss for a major presentation somehow got corrupted! Upon investigating, you find that the image is mostly intact. Except, when you view the image, it now appears to be upside down!

Recall that a digital image file is just a sequence of bits, arranged in some fashion. A 24-bit BMP file, then, is essentially just a sequence of bits, (almost) every 24 of which happen to represent some pixel’s color. But a BMP file also contains some “metadata,” information like an image’s height and width. That metadata is stored at the beginning of the file in the form of two data structures generally referred to as “headers,” not to be confused with C’s header files. The first of these headers, called `BITMAPFILEHEADER`, is 14 bytes long. (Recall that 1 byte equals 8 bits.) The second of these headers, called `BITMAPINFOHEADER`, is 40 bytes long. Immediately following these headers is the actual bitmap: an array of bytes, triples of which represent a pixel’s color.

Your job is to edit the metadata programmatically so that the bitmap’s top row is first and bottom row last. Best to avoid editing the pixels directly, lest you further corrupt the file!

-   Hints
    
    -   Be sure to look carefully at the members of the `BITMAPINFOHEADER` `struct` in `bmp.h`.
    -   If you read the [documentation](https://learn.microsoft.com/en-us/previous-versions//dd183376(v=vs.85)) for each of these members, which should you modify? How so?
    

## [Getting Started](#getting-started)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/4/bottomup.zip` followed by Enter in order to download a zip called `bottomup.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip bottomup.zip` to create a folder called `bottomup`.
5.  You no longer need the ZIP file, so you can execute `rm bottomup.zip` and respond with “y” followed by Enter at the prompt.

## [Demo](#demo)

## [Implementation Details](#implementation-details)

Go ahead and pull up the URLs to which `BITMAPFILEHEADER` and `BITMAPINFOHEADER` are attributed, per the comments in `bmp.h`. Take a close look at the members of the `BITMAPINFOHEADER` `struct`. Use that information to write a bit of code in `bottomup.c` to change the image from bottom-up to top-down. The code in question needn’t be very complicated, particularly if you know what you’re doing!

## [Thought Question](#thought-question)

-   Why do image files need metadata?

## [How to Test Your Code](#how-to-test-your-code)

Your program should behave per the examples below.

```
bottomup/ $ ./bottomup harvard_bottomup.bmp harvard_topdown.bmp

```

When your program is working correctly, you should see a new file, `harvard_topdown.bmp` in your `bottomup` directory. Open it up and see if the orientation of the image is correct.

You can check your code using `check50`, a program that CS50 will use to test your code when you submit, by typing in the following at the `$` prompt. But be sure to test it yourself as well!

```
check50 cs50/labs/2023/x/bottomup

```

To evaluate that the style of your code (indentations and spacing) is correct, type in the following at the `$` prompt.

## [How to Submit](#how-to-submit)

No need to submit! This is a practice problem.