---
title: Discussion 6 Solutions
---

# CS 61A 2024春季学期讨论6

## 讨论 6: 迭代器, 生成器

-   [disc06.pdf](/resource/cs61a/disc06.pdf)

小组里选个人[加入Discord](https://cs61a.org/articles/discord)。多几个人加入也行，但一个人就够了。

接下来使用Pensieve:

-   **所有人**: 访问 [discuss.pensieve.co](http://discuss.pensieve.co/) 并用你的@berkeley.edu邮箱登录，然后输入小组号码 (就是你的Discord频道号码)。

进了Pensieve就不用回到这个页面了；Pensieve上的内容和这个页面一样 (但功能更多)。如果Pensieve出了问题，就回到这个页面继续讨论。

有问题的话，在[Discord](https://cs61a.org/articles/discord/)的 `#help` 频道里发帖求助。

## 开始

先说说你的名字，然后分享一个你在伯克利校园或者附近最喜欢的地方。尽量选一个别人可能还没去过的地方。当然，如果你现在待的房间就是你最喜欢的，也行。
:::tip[**小贴士**]
[McCone Hall](https://www.campus-maps.com/university-of-california-berkeley/mccone-hall/) 从五楼的阳台可以看到美丽的景色。
:::

## 生成器

生成器是一种迭代器。它通过调用生成器函数来创建。生成器函数里用的是`yield`语句，而不是`return`语句。使用迭代器的方法包括调用`next()`函数，或者把它放在可迭代对象能用的地方 (比如`for`循环里)。

### Q1: 斐波那契数列

这个生成器函数会生成所有斐波那契数。

```
def gen_fib():
    n, add = 0, 1
    while True:
        yield n
        n, add = n + add, n
```

互相解释一下下面的表达式，确保每个人都明白它的原理。这个表达式会生成一个包含前10个斐波那契数的列表。

```
(lambda t: [next(t) for _ in range(10)])(gen_fib())
```

接下来，在下面的表达式的空白处填上名称和括号，让它算出大于2024的最小斐波那契数。
大家讨论一下，哪些内置函数可能用得上，例如 [`map`](https://docs.python.org/3/library/functions.html#map), [`filter`](https://docs.python.org/3/library/functions.html#filter), [`list`](https://docs.python.org/3/library/functions.html#func-list), [`any`](https://docs.python.org/3/library/functions.html#any), [`all`](https://docs.python.org/3/library/functions.html#all) 等。（点击这些函数名可以查看它们的文档。） 尝试不用 Python 解出答案。只有小组所有人都认为答案正确时，才能运行代码。现在不是进行猜测和检查的时候。

**你的答案**

在 61A 代码中运行

**解答**

```
def gen_fib():
    n, add = 0, 1
    while True:
        yield n
        n, add = n + add, n

next(filter(lambda n: n > 2024, gen_fib()))

```

一种解法是这样的形式：`next(____(lambda n: n > 2024, ____))`，其中第一个空使用一个内置函数来创建一个仅包含大数的迭代器，第二个空创建一个包含所有斐波那契数的迭代器。

惊喜！这里没有提示。如果你仍然卡住了，是时候向课程工作人员寻求帮助了。

### Q2: 与众不同

实现 `differences`，一个生成器函数，它接受一个非空数字迭代器 `t`。它产生 `t` 中每对相邻值的差。如果 `t` 迭代一个正有限数量的值 `n`，那么 `differences` 应该产生 `n-1` 次。

**你的答案**

在 61A 代码中运行

**解答**

```
def differences(t):
    """Yield the differences between adjacent values from iterator t.

    >>> list(differences(iter([5, 2, -100, 103])))
    [-3, -102, 203]
    >>> next(differences(iter([39, 100])))
    61
    """
    last_x = next(t)
    for x in t:
        yield x - last_x
        last_x = x

```

通过初始化和更新 `previous_x` 来添加到以下实现，使其始终绑定到 `t` 中 `x` 之前的值。

```
for x in t:
    yield x - previous_x
```

**展示时间。** 共同努力解释为什么对于一个包含 `n` 个值的迭代器 `t`，`differences` 总是产生 `n-1` 次。选择一个上周没有向课程工作人员展示的人来展示你们小组的答案，然后向 discuss-queue 频道发送一条带有 @discuss 标签、你们讨论小组号码和消息 "We beg to differ!" 的消息，课程工作人员会加入你们的语音频道来听取你们的描述并提供反馈。

### 幕间休息

我们很懒（像一个迭代器），并使用 ChatGPT 生成了一个生成器笑话...
因为它很懂得什么时候该按部就班（“返回”到菜谱），什么时候该灵活应变（“产出”即兴创作）！

### Q3: 分割

树递归生成器函数和普通的树递归函数结构相似。它们对于迭代所有可能性非常有用。与其构建一个结果列表并返回它，不如直接 `yield` 每个结果。

你需要确定一个_递归分解_：如何用更简单的递归调用来描述答案。想想递归调用会生成什么，然后如何利用这些结果。

**定义。** 对于正整数 `n` 和 `m`，`n` 的一个_分割_（使用不超过 `m` 的数），是指将 `n` 表示成一系列正整数之和的加法表达式，其中每个正整数都不超过 `m`，且这些正整数按非递减顺序排列。

实现 `partition_gen`，这是一个生成器函数，它接受正整数 `n` 和 `m` 作为输入，并以字符串的形式生成 `n` 所有使用不超过 `m` 的数的分割结果。

**提醒：** 对于我们在讲座中学习的 `partitions` 函数（[视频](https://youtu.be/DvgT4dnSMVM)），递归分解是枚举所有使用至少一个 `m` 来分割 `n` 的方法，然后枚举所有没有 `m` 的方法（只有 `m-1` 及更低）。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def partition_gen(n, m):
    """Yield the partitions of n using parts up to size m.

    >>> for partition in sorted(partition_gen(6, 4)):
    ...     print(partition)
    1 + 1 + 1 + 1 + 1 + 1
    1 + 1 + 1 + 1 + 2
    1 + 1 + 1 + 3
    1 + 1 + 2 + 2
    1 + 1 + 4
    1 + 2 + 3
    2 + 2 + 2
    2 + 4
    3 + 3
    """
    assert n > 0 and m > 0
    if n == m:
        yield str(n)
    if n - m > 0:
        for p in partition_gen(n - m, m):
            yield p + ' + ' + str(m)
    if m > 1:
        yield from partition_gen(n, m-1)

```

生成一个只有一个元素的分割，`n`。确保你生成一个字符串。

在第一个递归情况中，因为使用了至少一个 `m`，所以你需要生成一个字符串，这个字符串以 `p` 开头，并且包含 `m`。在第二个递归情况中，只使用不超过 `m-1` 的数。（你可以使用 `yield from` 在一行代码中实现这种情况。）

**展示环节。** 如果时间允许，大家一起讨论一下：为什么这个 `partition_gen` 的实现没有包含 `n < 0`、`n == 0` 或 `m == 0` 这些基本情况？即使在讲座中，`partitions` 的原始实现（[视频](https://youtu.be/DvgT4dnSMVM?si=MEkqzloqIcbD1-09&t=515)）包含了所有这三种情况。请选一位本周或上周没有做过展示的同学来代表小组讲解答案。然后在 discuss-queue 频道发送消息，带上 @discuss 标签、你们的小组号码，以及 "We're positive!"。助教/老师 会加入你们的语音频道，听取讲解并提供反馈。

## 考勤记录

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)，每周每人一次。

