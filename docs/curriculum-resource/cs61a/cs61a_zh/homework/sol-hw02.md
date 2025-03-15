---
title: Homework 2 Solutions
---

# CS 61A 2024年春季学期作业2答案

## Homework 2 答案

-   [hw02.zip](/resource/cs61a/hw02.zip)

## 解答文件

所有问题的解答都在 [hw02.py](https://cs61a.org//hw/sol-hw02/hw02.py) 文件中。

## 必做题目

## 入门视频

这些视频可能对解决作业中的编程问题有所帮助。

> 要观看这些视频，您应该登录您的 berkeley.edu 电子邮件。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZccKjCjJSv4aCdx6s0u0lo5)

一些 doctest 用到了以下函数：

```
from operator import add, mul

square = lambda x: x * x

identity = lambda x: x

triple = lambda x: 3 * x

increment = lambda x: x + 1
```

## 高阶函数

### Q1: 乘积

编写一个名为 `product` 的函数，它接受整数 `n` 和函数 `term` 作为参数。`term` 函数定义了一个序列，`term(i)` 返回序列的第 `i` 项。`product(n, term)` 应该返回该序列前 `n` 项的乘积，即 `term(1) * ... * term(n)`。

```
def product(n, term):
    """Return the product of the first n terms in a sequence.

    n: a positive integer
    term:  a function that takes one argument to produce the term

    >>> product(3, identity)  # 1 * 2 * 3
    6
    >>> product(5, identity)  # 1 * 2 * 3 * 4 * 5
    120
    >>> product(3, square)    # 1^2 * 2^2 * 3^2
    36
    >>> product(5, square)    # 1^2 * 2^2 * 3^2 * 4^2 * 5^2
    14400
    >>> product(3, increment) # (1+1) * (2+1) * (3+1)
    24
    >>> product(3, triple)    # 1*3 * 2*3 * 3*3
    162
    """
    prod, k = 1, 1
    while k <= n:
        prod, k = term(k) * prod, k + 1
    return prod
```

使用 Ok 测试你的代码：

```
python3 ok -q product
```

`prod` 变量用于记录当前的乘积。 初始值为 `prod = 1`，因为任何数乘以 1 都等于它本身。 计数器变量 `k` 用于 while 循环，确保遍历从 `1` 到 `n` 的所有值。

### Q2: 累积

现在我们来看看如何将 `product` 抽象成一个更通用的函数 `accumulate`，并实现它：

```
def accumulate(fuse, start, n, term):
    """Return the result of fusing together the first n terms in a sequence 
    and start.  The terms to be fused are term(1), term(2), ..., term(n). 
    The function fuse is a two-argument commutative & associative function.

>>> accumulate(add, 0, 5, identity)  # 0 + 1 + 2 + 3 + 4 + 5
    15
    >>> accumulate(add, 11, 5, identity) # 11 + 1 + 2 + 3 + 4 + 5
    26
    >>> accumulate(add, 11, 0, identity) # 11 (fuse 从未被调用)
    11
    >>> accumulate(add, 11, 3, square)   # 11 + 1^2 + 2^2 + 3^2
    25
    >>> accumulate(mul, 2, 3, square)    # 2 * 1^2 * 2^2 * 3^2
    72
    >>> # 2 + (1^2 + 1) + (2^2 + 1) + (3^2 + 1)
    >>> accumulate(lambda x, y: x + y + 1, 2, 3, square)
    19
    """
    total, k = start, 1
    while k <= n:
        total, k = fuse(total, term(k)), k + 1
    return total

# 另一种解法
def accumulate_reverse(fuse, start, n, term):
    total, k = start, n
    while k >= 1:
        total, k = fuse(total, term(k)), k - 1
    return total
```

`accumulate` 具有以下参数：

-   `fuse`: 一个接受两个参数的函数，用于指定如何将当前项与之前的累积结果合并。
-   `start`: 累积的起始值。
-   `n`: 一个非负整数，表示要融合的项数。
-   `term`: 一个接受单个参数的函数；`term(i)` 是序列的第 `i` 项。

实现 `accumulate`，它使用 `fuse` 函数将由 `term` 定义的序列的前 `n` 项与 `start` 值融合。

例如，`accumulate(add, 11, 3, square)` 的结果是

```
add(11,  add(square(1), add(square(2),  square(3)))) =
    11 +     square(1) +    square(2) + square(3)    =
    11 +     1         +    4         + 9            = 25
```

> 假设 `fuse` 满足交换律，`fuse(a, b) == fuse(b, a)`，并且满足结合律，`fuse(fuse(a, b), c) == fuse(a, fuse(b, c))`。

然后，将 `summation`（来自讲座）和 `product` 实现为对 `accumulate` 的单行调用。

**重要提示：** `summation_using_accumulate` 和 `product_using_accumulate` 都应该用以 `return` 开头的单行代码实现。

```
def summation_using_accumulate(n, term):
    """返回使用 accumulate 计算的 term(1) + ... + term(n) 的总和。

    >>> summation_using_accumulate(5, square)
    55
    >>> summation_using_accumulate(5, triple)
    45
    >>> # 此测试检查函数体是否仅包含一个 return 语句。
    >>> import inspect, ast
    >>> [type(x).__name__ for x in ast.parse(inspect.getsource(summation_using_accumulate)).body[0].body]
    ['Expr', 'Return']
    """
return accumulate(add, 0, n, term)
def product_using_accumulate(n, term):
    """返回使用 accumulate 计算的 term(1) * ... * term(n) 的乘积。

    >>> product_using_accumulate(4, square)
    576
    >>> product_using_accumulate(6, triple)
    524880
    >>> # 此测试检查函数体是否仅包含一个 return 语句。
    >>> import inspect, ast
    >>> [type(x).__name__ for x in ast.parse(inspect.getsource(product_using_accumulate)).body[0].body]
    ['Expr', 'Return']
    """
return accumulate(mul, 1, n, term)
```

使用 Ok 来测试你的代码：

```
python3 ok -q accumulate
python3 ok -q summation_using_accumulate
python3 ok -q product_using_accumulate
```

我们希望将 `product` 和 `summation` 的逻辑抽象出来，放入 `accumulate` 中。 `product` 和 `summation` 的不同之处在于：
```-   各项如何组合。对于 `product`，我们通过 `*` (即 `mul`) 来组合。对于 `summation`，我们通过 `+` (即 `add`) 来组合。
-   初始值。对于 `product`，我们希望从 1 开始，因为如果从 0 开始，结果始终为 0 (任何数乘以 0 都是 0)。对于 `summation`，我们希望从 0 开始。

### Q3: Make Repeater

实现函数 `make_repeater`，该函数接受一个单参数函数 `f` 和一个正整数 `n`。它返回一个单参数函数，其中 `make_repeater(f, n)(x)` 返回 `f(f(...f(x)...))` 的值，其中 `f` 对 `x` 应用 `n` 次。例如，`make_repeater(square, 3)(5)` 将 5 平方三次，并返回 390625，就像 `square(square(square(5)))` 一样。

```
def make_repeater(f, n):
    """Returns the function that computes the nth application of f.

    >>> add_three = make_repeater(increment, 3)
    >>> add_three(5)
    8
    >>> make_repeater(triple, 5)(1) # 3 * 3 * 3 * 3 * 3 * 1
    243
    >>> make_repeater(square, 2)(5) # square(square(5))
    625
    >>> make_repeater(square, 3)(5) # square(square(square(5)))
    390625
    """
def repeater(x):
        k = 0
        while k < n:
            x, k = f(x), k + 1
        return x
    return repeater
```

使用 Ok 测试你的代码:

```
python3 ok -q make_repeater
```

有很多正确的方法来实现 `make_repeater`。这个解决方案重复应用 `h`。

## Check Your Score Locally

你可以通过运行以下命令在本地查看你在本次作业中每个题目的得分

```
python3 ok --score
```

**这 *并不会* 提交作业！** 当你对你的分数感到满意时，请将你编辑过的文件**上传到 Gradescope 上对应的作业**以提交。

## Submit

[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在** mega lab 的学生必须填写此[考勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。mega lab 的学生不需要填写考勤表。

## Exam Practice

以下是一些来自过去考试的相关问题供你尝试。这些是可选的。没有办法提交它们。

> 请注意，2020 年春季、2020 年秋季和 2021 年春季的考试允许学生访问解释器，因此问题格式可能与其他年份不同。无论如何，以下问题适合在_不使用_解释器的情况下进行练习。

1.  Fall 2019 MT1 Q3: [You Again](https://cs61a.org/exam/fa19/mt1/61a-fa19-mt1.pdf#page=4) \[高阶函数]
2.  Spring 2021 MT1 Q4: [Domain on the Range](https://cs61a.org/exam/sp21/mt1/61a-sp21-mt1.pdf#page=14) \[高阶函数]
3.  Fall 2021 MT1 Q1b: [tik](https://cs61a.org/exam/fa21/mt1/61a-fa21-mt1.pdf#page=4) \[函数和表达式]
