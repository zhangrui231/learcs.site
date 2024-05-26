---
title: Homework 7 Solutions
---

# Homework 7 Solutions | CS 61A Spring 2024

## Homework 7 Solutions

-   [hw07.zip](/resource/cs61a/hw07.zip)

## Solution Files

You can find the solutions in [hw07.scm](https://cs61a.org//hw/sol-hw07/hw07.scm).

The 61A Scheme interpreter is included in each Scheme assignment. To start it, type `python3 scheme` in a terminal. To load a Scheme file called `f.scm`, type `python3 scheme -i f.scm`. To exit the Scheme interpreter, type `(exit)`.

### Scheme Editor

All Scheme assignments include a web-based editor that makes it easy to run ok tests and visualize environments. Type `python3 editor` in a terminal, and the editor will open in a browser window (at `http://127.0.0.1:31415/`). To stop running the editor and return to the command line, type `Ctrl-C` in the terminal where you started the editor.

The `Run` button loads the current assignment's `.scm` file and opens a Scheme interpreter, allowing you to try evaluating different Scheme expressions.

The `Test` button runs all ok tests for the assignment. Click `View Case` for a failed test, then click `Debug` to step through its evaluation.

### Recommended VS Code Extensions

If you choose to use VS Code as your text editor (instead of the web-based editor), install the [vscode-scheme](https://marketplace.visualstudio.com/items?itemName=sjhuangx.vscode-scheme) extension so that parentheses are highlighted.

Before:

![](/img/cs61a/before.png)

After:

![](/img/cs61a/after.png)

In addition, the 61a-bot ([installation instructions](https://cs61a.org/articles/61a-bot)) VS Code extension is available for Scheme homeworks. The bot is also integrated into `ok`.

## Required Questions

  

## Getting Started Videos

These videos may provide some helpful direction for tackling the coding problems on this assignment.

> To see these videos, you should be logged into your berkeley.edu email.

[YouTube link](https://youtu.be/playlist?list=PLx38hZJ5RLZcQgwUYw_yvAcp0-vz6L0Zh)

### Q1: Pow

Implement a procedure `pow` that raises a `base` to the power of a nonnegative integer `exp`. The number of recursive `pow` calls should grow logarithmically with respect to `exp`, rather than linearly. For example, `(pow 2 32)` should result in 5 recursive `pow` calls rather than 32 recursive `pow` calls.

> _Hint:_
> 
> 1.  x2y = (xy)2
> 2.  x2y+1 = x(xy)2
> 
> For example, 216 = (28)2 and 217 = 2 \* (28)2.
> 
> You may use the built-in predicates `even?` and `odd?`. Also, the `square` procedure is defined for you.
> 
> Scheme doesn't have `while` or `for` statements, so use recursion to solve this problem.

```
(define (square n) (* n n))

(define (pow base exp)
  (cond ((= exp 0) 1)
        ((even? exp) (square (pow base (/ exp 2))))
        (else (* base (pow base (- exp 1))))))
```

Use Ok to test your code:

```
python3 ok -q pow
```

  

We avoid unnecessary `pow` calls by squaring the result of `base^(exp/2)` when `exp` is even.

The `else` clause, which is for odd values of `exp`, multiplies the result of `base^(exp-1)` by `base`.

When `exp` is even, computing `base^exp` requires one more call than computing `base^(exp/2)`. When `exp` is odd, computing `base^exp` requires two more calls than computing `base^((exp-1)/2)`.

So we have a logarithmic runtime for `pow` with respect to `exp`.

### Q2: Repeatedly Cube

Implement `repeatedly-cube`, which receives a number `x` and cubes it `n` times.

Here are some examples of how `repeatedly-cube` should behave:

```
scm> (repeatedly-cube 100 1) ; 1 cubed 100 times is still 1
1
scm> (repeatedly-cube 2 2) ; (2^3)^3
512
scm> (repeatedly-cube 3 2) ; ((2^3)^3)^3
134217728
```

> For information on `let`, see [the Scheme spec](https://cs61a.org/articles/scheme-spec/#let).

```
(define (repeatedly-cube n x)
    (if (zero? n)
        x
        (let
            ((y (repeatedly-cube (- n 1) x)))            (* y y y))))
```

Use Ok to test your code:

```
python3 ok -q repeatedly-cube
```

  

We know our solution must be recursive because Scheme handles recursion much better than it handles iteration.

The provided code returns `x` when `n` is zero. This is the correct base case for `repeatedly-cube`; we just need to write the recursive case.

In the recursive case, the provided code returns `(* y y y)`, which is the cube of `y`. We use recursion to set `y` to the result of cubing `x` `n - 1` times. Then the cube of `y` is the result of cubing `x` `n` times, as desired.

### Q3: Cadr

**Note:** _Scheme lists are covered in the lecture videos for Wednesday, April 3._

Define the procedure `cadr`, which returns the second element of a list. Also define `caddr`, which returns the third element of a list.

```
(define (cddr s)
  (cdr (cdr s)))

(define (cadr s)
  (car (cdr s)))

(define (caddr s)
  (car (cddr s)))
```

The second element of a list `s` is the first element of the rest of `s`. So we define `(cadr s)` as the `car` of the `cdr` of s.

The provided `cddr` procedure takes a list `s` and returns a list that starts at the third element of `s`. So we define `(caddr s)` as the `car` of the `cddr` of `s`.

Use Ok to test your code:

```
python3 ok -q cadr-caddr
```