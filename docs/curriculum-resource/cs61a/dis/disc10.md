---
title: Discussion 10 Interpreters
---
# Discussion 10 | CS 61A Spring 2024

## Discussion 10: Interpreters

-   [disc10.pdf](/resource/cs61a/disc/disc10.pdf)

**Reminder:** We'll still use Pensieve, but we've removed the voice/video chat from Pensieve. Use Discord for voice chat with the course staff. It's more reliable and includes screensharing. Write to `@discuss` in the `#discuss-queue` channel on Discord at any time, and a member of the course staff will join your group's voice channel.

Pick someone in your group to [join Discord](https://cs61a.org/articles/discord). It's fine if multiple people join, but one is enough.

Now switch to Pensieve:

-   **Everyone**: Go to [discuss.pensieve.co](http://discuss.pensieve.co/) and log in with your @berkeley.edu email, then enter your group number. (Your group number is the number of your Discord channel.)

Once you're on Pensieve, you don't need to return to this page; Pensieve has all the same content (but more features). If for some reason Penseive doesn't work, return to this page and continue with the discussion.

Post in the `#help` channel on [Discord](https://cs61a.org/articles/discord/) if you have trouble.

**Pro tip:** Any of you can type a question into your group's Discord [channel's text chat](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X) with the `@discuss` tag, and a member of the course staff will respond.

## Getting Started

If you have only 1 or 2 people in your group, you can join the other group in the room with you.

Everybody say your name, and then figure out who is planning to travel outside of the Bay Area the soonest.

## Representing Lists

A Scheme call expression is a Scheme list that is represented using a `Pair` instance in Python.

For example, the call expression `(+ (* 3 4) 5)` is represented as:

```
Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
```

![(+ (* 3 4) 5)](/img/cs61a/I3972ut.png)

The `Pair` class and `nil` object are defined in [pair.py](http://cs61a.org/proj/scheme/pair.py) of the [Scheme project](http://cs61a.org/proj/scheme).

```
class Pair:
    "A Scheme list is a Pair in which rest is a Pair or nil."
    def __init__(self, first, rest):
        self.first = first
        self.rest = rest

    ... # There are also __str__, __repr__, and map methods, omitted here.
```

### Q1: Representing Expressions

Write the Scheme expression in Scheme syntax represented by each `Pair` below. Try drawing the linked list diagram too. The first one is done for you.

```
Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
```

Answer: `(+ (* 3 4) 5)`

```
>>> Pair('+', Pair(1, Pair(Pair('*', Pair(2, Pair(3, nil))), nil)))
```

Your Answer:

![](/img/cs61a/LXubaoe.png)

`(+ 1 (* 2 3))`

```
>>> Pair('and', Pair(Pair('<', Pair(1, Pair(0, nil))), Pair(Pair('/', Pair(1, Pair(0, nil))), nil)))
```

Your Answer:

![](/img/cs61a/nG9GUbt.png)

`(and (< 1 0) (/ 1 0))`

**Discussion Time:** What does `(and (< 1 0) (/ 1 0))` evaluate to? Discuss among your group until you all agree, then post your answer in your group's Discord [channel's text chat](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X).

## Evaluation

To evaluate the expression `(+ (* 3 4) 5)` using the Project 4 interpreter, `scheme_eval` is called on the following expressions (in this order):

1.  `(+ (* 3 4) 5)`
2.  `+`
3.  `(* 3 4)`
4.  `*`
5.  `3`
6.  `4`
7.  `5`

**Discussion time:** Describe to each other why `*` is evaluated and what it evaluates to.

The `*` is evaluated because it is the operator sub-expression of `(* 3 4)`, which is an operand sub-expression of `(+ (* 3 4) 5)`.

By default, `*` evaluates to a procedure that multiplies its arguments together. But `*` could be redefined at any time, and so the symbol `*` must be evaluated each time it is used in order to look up its current value.

```
scm> (* 2 3)  ; Now it multiplies
6
scm> (define * +)
*
scm> (* 2 3)  ; Now it adds
5
```

An `if` expression is also a Scheme list represented using a `Pair` instance.

For example, `(if (< x 0) (- x) x)` is represented as:

`Pair('if', Pair(Pair('<', Pair('x', Pair(0, nil))), Pair(Pair('-', Pair('x', nil)), Pair('x', nil))))`

![](/img/cs61a/JySFkth.png)

To evaluate this expression in an environment in which `x` is bound to 2 (and `<` and `-` have their default values), `scheme_eval` is called on the following expressions (in this order):

1.  `(if (< x 0) (- x) x)`
2.  `(< x 0)`
3.  `<`
4.  `x`
5.  `0`
6.  `x`

**Presentation time:** Come up with a short explanation of why neither `if` nor `-` are evaluated even though they both appear in `(if (< x 0) (- x) x)`. Once your group agrees on an answer (or wants help), send a message to the `#discuss-queue` channel with the `@discuss` tag, your discussion group number, and the message "If you please!" and a member of the course staff will join your voice channel to hear your explanation and give feedback.

### Q2: Evaluation

Which of the following are evaluated when `scheme_eval` is called on `(if (< x 0) (- x) (if (= x -2) 100 y))` in an environment in which `x` is bound to -2? (Assume `<`, `-`, and `=` have their default values.)

-   `if`
-   `<`
-   `=`
-   `x`
-   `y`
-   `0`
-   `-2`
-   `100`
-   `-`
-   `(`
-   `)`

With `x` bound to -2, `(< x 0)` evaluates to `#t`, and so `(- x)` will be evaluated, but `(if (= x 1) 100 x)` will not. The operator and operands of a call expression are evaluated for every call expression that is evaluated. `(< x 0)` and `(- x)` are both call expressions.

List your group's answers in your group's Discord [channel's text chat](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X). For example, write `if < 0 )` if you think those are the four that get evaluated. A member of the course staff will review your answer and give feedback.

### Q3: Print Evaluated Expressions

Define `print_evals`, which takes a Scheme expression `expr` that contains only numbers, `+`, `*`, and parentheses. It prints all of the expressions that are evaluated during the evaluation of `expr`. They are printed in the order that they are passed to `scheme_eval`.

**Note:** Calling `print` on a `Pair` instance will print the Scheme expression it represents.

```
>>> print(Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil))))
(+ (* 3 4) 5)
```
```scheme
def print_evals(expr):
        """Print the expressions that are evaluated while evaluating expr.

        expr: a Scheme expression containing only (, ), +, *, and numbers.

        >>> nested_expr = Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
        >>> print_evals(nested_expr)
        (+ (* 3 4) 5)
        +
        (* 3 4)
        *
        3
        4
        5
        >>> print_evals(Pair('*', Pair(6, Pair(7, Pair(nested_expr, Pair(8, nil))))))
        (* 6 7 (+ (* 3 4) 5) 8)
        *
        6
        7
        (+ (* 3 4) 5)
        +
        (* 3 4)
        *
        3
        4
        5
        8
        """
        if not isinstance(expr, Pair):
            "*** YOUR CODE HERE ***"
        else:
            "*** YOUR CODE HERE ***"
```
Run in 61A Code
:::tip[**Hint**]
If `expr` is not a pair, then it is a number or `'+'` or `'*'`. In all of these cases, the `expr` should be printed to indicate that it would be evaluated.

If `expr` is a pair, then it is a call expression. Print it. Then, the operator and operands are evaluated. These are the elements in the list `expr`. So, iterate through `expr` (using either a `while` statement or `expr.map(...)`) and call `print_evals` on each element.
:::

## Document the Occasion

Please all fill out the [attendance form](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (one submission per person per week).

**Important:** Please help put the furniture in the room back where you found it before you leave. Thanks!