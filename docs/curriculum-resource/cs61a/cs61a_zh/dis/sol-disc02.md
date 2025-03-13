---
title: Discussion 2 Solutions
---

# Discussion 2 | CS 61A 2024年春季学期

## 讨论 2：环境图、高阶函数

-   [disc02.pdf](/resource/cs61a/disc02.pdf)

小组里选一个人加入Discord。可以多个人加入，但一个人就够了。

现在转到Pensieve：

-   **所有人**：去[discuss.pensieve.co]，用你的@berkeley.edu邮箱登录，输入组号（就是你的Discord频道号）。

进了Pensieve就不用回到这页了，Pensieve上有同样的内容（而且功能更多）。如果Pensieve用不了，再回到这页继续讨论。

有问题就在Discord的#help频道里发帖。

## 开始 \[5 分钟]

说出你的名字，再说说你喜欢的一个城市（或地方），但别是伯克利，也别是你住过的地方。可以随便说说你喜欢它的理由。

**注意：** 这次讨论，在小组确定答案之前，别按“检查答案”，也别运行Python代码。目标是一次通过所有检查！通过思考代码会做什么来解决问题，检查答案。不确定？跟组员讨论！（期中考试不能运行Python，现在就开始适应不用Python解决问题。）

### Q1：热身

执行 `result = (lambda x: 2 * (lambda x: 3)(4) * x)(5)` 后，`result` 的值是多少？和小组成员讨论，确保大家意见一致再按“检查答案”。

## 调用表达式 \[15 分钟]

给下面的代码画个环境图。可以用纸、平板或者白板。和小组成员讨论怎么画，然后一起完成每一步。画完后，一步步检查。

<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=def+team%28work%29%3A%0A%09return+t%28work%29+-+1%0Adef+dream%28work%2C+s%29%3A%0A%09if+work%28s-2%29%3A%0A%09%09t+%3D+not+s%0A%09return+not+t%0Awork%2C+t+%3D+3%2C+abs%0Ateam+%3D+dream%28team%2C+work+%2B+1%29+and+t&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

这是一个空白图，以防你使用平板电脑：

![template](/img/cs61a/A9nnHPb.png)

有问题就去`discuss-queue`频道发消息，带上@discuss标签和你的小组号，跟助教讨论。

## 高阶函数 \[60 分钟]

还记得上次讨论的问题解决方法吗？同样适用于实现高阶函数。
1.  选择一个例子，包括输入和对应的输出。（这次输出可能是一个函数。）
2.  用英语描述一个用简单步骤，从输入计算出输出的过程。
3.  弄清楚你需要哪些额外的变量来辅助这个过程。
4.  用代码和这些额外的变量来实现这个过程。
5.  确定该实现是否真的适用于你的原始示例。
6.  确定该实现是否真的适用于其他示例。（如果不是，你可能需要修改步骤 2。）

### Q2：Make Keeper

实现 `make_keeper` 函数。它接受一个正整数 `n` 作为输入，并返回一个函数 `f`。 函数 `f` 接受一个单参数函数 `cond` 作为参数。当 `f` 被调用时，它会遍历从 1 到 `n`（包括 `n`）的所有整数。 对于每个整数，如果 `cond(i)` 返回真值，则打印该整数，每个整数占一行。

**你的解答**

在 61A 代码中运行

**解决方案**

```
def make_keeper(n):
    """Returns a function that takes one parameter cond and prints
    out all integers 1..i..n where calling cond(i) returns True.

    >>> def is_even(x): # Even numbers have remainder 0 when divided by 2.
    ...     return x % 2 == 0
    >>> make_keeper(5)(is_even)
    2
    4
    >>> make_keeper(5)(lambda x: True)
    1
    2
    3
    4
    5
    >>> make_keeper(5)(lambda x: False)  # Nothing is printed
    """
    def f(cond):
        i = 1
        while i <= n:
            if cond(i):
                print(i)
            i += 1
    return f

```

不要偷看！首先尝试在没有提示的情况下实现它。

要返回函数 `f`，请将 `def f(cond):` 放在实现代码的第一行，并将 `return f` 放在最后一行。 在 `f` 函数内部，需要初始化 `i = 1`，用于循环遍历所有整数，并通过调用 `cond(i)` 来判断 `cond` 对每个整数的返回值是否为真。

**不要运行 Python 来检查你的工作。你可以通过思考来检查它！**。如果你遇到困难，请向工作人员寻求帮助。

一旦你的小组达成了一个解决方案，现在是时候练习你描述自己代码的能力了。一个好的描述就像一个好的程序：简洁而准确。提名某人来描述你的解决方案是如何工作的，并让他们向小组展示以进行练习。然后，向 `discuss-queue` 频道发送一条带有 @discuss 标签、你的讨论小组号码和消息 "Listen up!" 的消息，助教将加入你的语音频道来听取你的描述。如果没有人立即出现，请随意处理下一个问题，直到有工作人员出现。

### Q3：数字查找器

实现 `find_digit` 函数。它接受一个正整数 `k` 作为输入，并返回另一个函数。后者接受一个正整数 `x` 作为输入，并返回 `x` 从右往左数的第 `k` 位数字。如果 `x` 的位数不足 `k` 位，则返回 0。

例如，在数字 4567 中，7 是从右边开始的第 1 个数字，6 是从右边开始的第 2 个数字，从右边开始的第 5 个数字是 0（因为只有 4 个数字）。

**重要提示：** 你不能使用字符串或索引来解决这个问题。

使用向下取整除以 10 的幂可以去除最右边的数字。

**你的解答**

在 61A 代码中运行

**解决方案**

```
def find_digit(k):
    """Returns a function that returns the kth digit of x.
```
>>> find_digit(2)(3456)
    5
    >>> find_digit(2)(5678)
    7
    >>> find_digit(1)(10)
    0
    >>> find_digit(4)(789)
    0
    """
    assert k > 0
    return lambda x: (x // pow(10, k-1)) % 10

```

首先去掉第`k`位之后的数字，此时第`k`位就变成了个位数。

### Q4: Match Maker

实现一个函数 `match_k`，它接收一个整数 `k`，并返回一个新的函数。这个新函数接收一个变量 `x`，如果 `x` 中所有间隔 `k` 位的数字都相同，就返回 `True`。

例如，`match_k(2)` 返回一个接收单个参数的函数，这个函数会检查 `x` 中间隔 2 位的数字是否相同。

`match_k(2)(1010)` 中，`x` 的值是 `1010`，从左到右的数字依次是 1、0、1、0。因为 1 和 1 相同，0 和 0 相同，所以 `match_k(2)(1010)` 的结果是 `True`。

`match_k(2)(2010)` 中，`x` 的值是 `2010`，从左到右的数字依次是 2、0、1、0。因为 2 和 1 不同，所以 `match_k(2)(2010)` 的结果是 `False`。

**注意：** 在解决这个问题时，请不要使用字符串或索引。

通过将数字向下取整除以 10 的幂，可以移除其最右边的数字。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def match_k(k):
    """Returns a function that checks if digits k apart match.

    >>> match_k(2)(1010)
    True
    >>> match_k(2)(2010)
    False
    >>> match_k(1)(1010)
    False
    >>> match_k(1)(1)
    True
    >>> match_k(1)(2111111111111111)
    False
    >>> match_k(3)(123123)
    True
    >>> match_k(2)(123123)
    False
    """
    def check(x):
        while x // (10 ** k) > 0:
            if (x % 10) != (x // (10 ** k)) % 10:
                return False
            x //= 10
        return True
    return check

```

每次迭代时，比较个位数和它前面第 `k` 位的数字。

## 记录本次活动

请大家填写一下[考勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (每人每周填一次哦).
```