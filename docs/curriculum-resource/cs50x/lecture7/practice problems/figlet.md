---
sidebar_position: 2
description: cs50x practice problem  figlet
title: figlet
---

# Frank, Ian and Glen’s Letters - CS50x 2023

[FIGlet](https://en.wikipedia.org/wiki/FIGlet), named after [Frank, Ian, and Glen’s letters](http://www.figlet.org/faq.html), is a program from the early 1990s for making large letters out of ordinary text, a form of [ASCII art](https://en.wikipedia.org/wiki/ASCII_art):

```
 _ _ _          _   _     _
| (_) | _____  | |_| |__ (_)___
| | | |/ / _ \ | __| '_ \| / __|
| | |   <  __/ | |_| | | | \__ \
|_|_|_|\_\___|  \__|_| |_|_|___/

```

Among the fonts supported by FIGlet are those at [figlet.org/examples.html](http://www.figlet.org/examples.html).

FIGlet has since been ported to Python as a module called [pyfiglet](https://pypi.org/project/pyfiglet/0.7/).

In a file called `figlet.py`, implement a program that:

-   Expects zero or two command-line arguments:
    -   Zero if the user would like to output text in a random font.
    -   Two if the user would like to output text in a specific font, in which case the first of the two should be `-f` or `--font`, and the second of the two should be the name of the font.
-   Prompts the user for a `str` of text.
-   Outputs that text in the desired font.

If the user provides two command-line arguments and the first is not `-f` or `--font` or the second is not the name of a font, the program should exit via `sys.exit` with an error message.

Hints

-   You can install `pyfiglet` with:
-   The documentation for pyfiglet isn’t very clear, but you can use the module as follows:
    
    ```
    from pyfiglet import Figlet
    
    figlet = Figlet()
    
    ```
    
    You can then get a `list` of available fonts with code like this:
    
    You can set the font with code like this, wherein `f` is the font’s name as a `str`:
    
    And you can output text in that font with code like this, wherein `s` is that text as a `str`:
    
    ```
    print(figlet.renderText(s))
    
    ```
    
-   Note that the `random` module comes with quite a few functions, per [docs.python.org/3/library/random.html](https://docs.python.org/3/library/random.html).

## [Demo](#demo)

This demo’s first output used a random font. Your output may vary.

## [Before You Begin](#before-you-begin)

1.  Log into [cs50.dev](https://cs50.dev/) using your GitHub account.
2.  Click inside the terminal window and execute `cd`.
3.  Execute `wget https://cdn.cs50.net/2022/fall/labs/6/figlet.zip` followed by Enter in order to download a zip called `figlet.zip` in your codespace. Take care not to overlook the space between `wget` and the following URL, or any other character for that matter!
4.  Now execute `unzip figlet.zip` to create a folder called `figlet`.
5.  You no longer need the ZIP file, so you can execute `rm figlet.zip` and respond with “y” followed by Enter at the prompt.

## [How to Test](#how-to-test)

Here’s how to test your code manually:

-   Run your program with `python figlet.py test`. Your program should exit via `sys.exit` and print an error message:
-   Run your program with `python figlet.py -a slant`. Your program should exit via `sys.exit` and print an error message:
-   Run your program with `python figlet.py -f invalid_font`. Your program should exit via `sys.exit` and print an error message:
-   Run your program with `python figlet.py -f slant`. Type `CS50`. Your program should print the following:
    
    ```
       ___________ __________ 
      / ____/ ___// ____/ __ \
     / /    \__ \/___ \/ / / /
    / /___ ___/ /___/ / /_/ / 
    \____//____/_____/\____/  
    
    ```
    
-   Run your program with `python figlet.py -f rectangles`. Type `Hello, world`. Your program should print the following:
    
    ```
     _____     _ _                        _   _ 
    |  |  |___| | |___      _ _ _ ___ ___| |_| |
    |     | -_| | | . |_   | | | | . |  _| | . |
    |__|__|___|_|_|___| |  |_____|___|_| |_|___|
                      |_|                       
    
    ```
    
-   Run your program with `python figlet.py -f alphabet`. Type `Moo`. Your program should print the following:
    
    ```
    M   M         
    MM MM         
    M M M ooo ooo 
    M   M o o o o 
    M   M ooo ooo                     
    
    ```
    

You can execute the below to check your code using `check50`, a program that CS50 will use to test your code when you submit. But be sure to test it yourself as well!

```
check50 cs50/problems/2022/python/figlet

```

Green smilies mean your program has passed a test! Red frownies will indicate your program output something unexpected. Visit the URL that `check50` outputs to see the input `check50` handed to your program, what output it expected, and what output your program actually gave.

## [How to Submit](#how-to-submit)

No need to submit! This is a practice problem.