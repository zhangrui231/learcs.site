---
title: Homework 1 Solutions
---

# 家庭作业 1 答案 | CS 61A 2024 春季

## 家庭作业 1 答案

-   [hw01.zip](/resource/cs61a/hw01.zip)

## 答案文件

你可以在 [hw01.py](https://cs61a.org//hw/sol-hw01/hw01.py) 文件中找到答案。

## 入门视频

这些视频可能对你完成这次作业的题目很有帮助。

> 要观看这些视频，你应该登录你的 berkeley.edu 邮箱。
> 
> [YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZeW4C9wRpz0ohqMmoctnnra)

## 必做题

### Q1: A Plus Abs B

Python 的 `operator` 模块包含像 `add` 和 `sub` 这样的双参数函数，它们是 Python 内置的算术运算符。 例如，`add(2, 3)` 的计算结果为 5，就像表达式 `2 + 3` 一样。

请填写以下函数中的空缺部分，实现将 `a` 加上 `b` 的绝对值的功能，但不能使用 `abs` 函数。 除了两个空缺处，你**不能**修改任何提供的代码。

```
def a_plus_abs_b(a, b):
    """Return a+abs(b), but without calling abs.

    >>> a_plus_abs_b(2, 3)
    5
    >>> a_plus_abs_b(2, -3)
    5
    >>> a_plus_abs_b(-1, 4)
    3
    >>> a_plus_abs_b(-1, -4)
    3
    """
    if b < 0:
        f = sub    else:
        f = add    return f(a, b)
```

使用 Ok 来测试你的代码：

```
python3 ok -q a_plus_abs_b
```

使用 Ok 运行本地语法检查器（它会检查你除了两个空缺部分之外，是否修改了其他提供的代码）：

```
python3 ok -q a_plus_abs_b_syntax_check
```

如果 `b` 是正数，我们就把它们加起来；如果是负数，就减去。

### Q2: Two of Three

编写一个函数，接收三个正数作为参数，返回其中两个最小数的平方和。函数体只能有一行代码。

```
def two_of_three(i, j, k):
    """Return m*m + n*n, where m and n are the two smallest members of the
    positive numbers i, j, and k.

    >>> two_of_three(1, 2, 3)
    5
    >>> two_of_three(5, 3, 1)
    10
    >>> two_of_three(10, 2, 8)
    68
    >>> two_of_three(5, 5, 5)
    50
    """
    return min(i*i+j*j, i*i+k*k, j*j+k*k)

# Alternate solution

def two_of_three_alternate(i, j, k):
    return i**2 + j**2 + k**2 - max(i, j, k)**2
> **提示：** 考虑使用 `max` 或 `min` 函数：
> 
> 
> >>> max(1, 2, 3)
> 3
> >>> min(-1, -2, -3)
> -3
> 

```

使用 Ok 来测试你的代码：

```
python3 ok -q two_of_three
```

使用 Ok 运行本地语法检查，检查函数体是否只用了一行代码：

```
python3 ok -q two_of_three_syntax_check
```

基于如果 `x>y` 且 `y>0`，则 `square(x)>square(y)` 这一原理。因此，我们可以取所有配对平方和的最小值。`min` 函数可以接受任意数量的参数。

或者，计算所有数字的平方和，然后减去最大值的平方。

### Q3: 最大因子

编写一个函数，接受一个**大于 1** 的整数 `n`，并返回小于 `n` 且能整除 `n` 的最大整数。

```
def largest_factor(n):
    """返回 n 的小于 n 的最大因子。

    >>> largest_factor(15) # 因子为 1, 3, 5
    5
    >>> largest_factor(80) # 因子为 1, 2, 4, 5, 8, 10, 16, 20, 40
    40
    >>> largest_factor(13) # 因子为 1，因为 13 是质数
    1
    """
    factor = n - 1
    while factor > 0:
        if n % factor == 0:
            return factor
        factor -= 1
```

> **提示：** 要检查 `b` 是否能整除 `a`，请使用表达式 `a % b == 0`，可以解读为“`a` 除以 `b` 的余数为 0”。

使用 Ok 来测试你的代码：

```
python3 ok -q largest_factor
```

从 `n-1` 递减到 1，返回第一个能整除 `n` 的整数。这确保了它是 `n` 的最大因子。

### Q4: 冰雹序列

道格拉斯·霍夫斯塔特在其普利策奖获奖作品《哥德尔、埃舍尔、巴赫》中提出了以下数学难题。

1.  选择一个正整数 `n` 作为开始。
2.  如果 `n` 是偶数，则将其除以 2。
3.  如果 `n` 是奇数，则将其乘以 3 并加 1。
4.  继续此过程，直到 `n` 为 1。

数字 `n` 会上下波动，但最终会变为 1 (至少对于所有已尝试的数字是这样——尚未有人证明该序列一定会终止)。 这类似于冰雹在大气中上下移动，最终落回地面。

编写一个函数，接受一个名为 `n` 的参数，打印出从 `n` 开始的冰雹序列，并返回序列的长度：

```
def hailstone(n):
    """打印从 n 开始的冰雹序列并返回其长度。

>>> a = hailstone(10)
    10
    5
    16
    8
    4
    2
    1
    >>> a
    7
    >>> b = hailstone(1)
    1
    >>> b
    1
    """
    length = 1
    while n != 1:
        print(n)
        if n % 2 == 0:
            n = n // 2      # Integer division prevents "1.0" output
        else:
            n = 3 * n + 1
        length = length + 1
    print(n)                # n is now 1
    return length
```

冰雹序列可能会非常长！不妨试试 27，看看你能得到多长的序列？

> 请注意，如果最初 `n == 1`，则序列的长度为一步。
> **提示：** 如果你看到 4.0 但只想看到 4，请尝试使用地板除法 `//` (即向下取整除法) 而不是常规除法 `/`。

使用 Ok 来测试你的代码：

```
python3 ok -q hailstone
```

**对冰雹或冰雹序列感到好奇吗？请查看以下文章：**

-   查看[这篇文章](https://www.nationalgeographic.org/encyclopedia/hail/)，了解更多关于冰雹如何形成的信息！
-   2019 年，在理解冰雹猜想如何适用于大多数数字方面取得了重大[进展](https://www.quantamagazine.org/mathematician-terence-tao-and-the-collatz-conjecture-20191211/)！

我们会记录冰雹序列当前的长度和数值。然后，循环会一直进行，直到序列结束，并在每一步更新序列的长度。

> 注意：我们需要进行地板除法 `//` 以删除小数。

## 在本地检查你的分数

你可以通过运行以下命令，在本地查看你在本次作业中每个题目的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过将你编辑过的任何文件上传**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，只有非大型实验课的学生才需要填写此[考勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。

> 如果你正确完成了所有题目，Gradescope 自动评分器会显示你的分数为 6.0。每个作业满分 2 分，因此如果你全部做对，你将获得满分 2 分。请注意，每错一题会扣 1 分，所以如果本次作业你得到 5.0/6.0，那么你的作业成绩将是 1.0/2.0。