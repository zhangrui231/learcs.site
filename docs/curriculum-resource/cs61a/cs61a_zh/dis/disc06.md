---
title: Discussion 6 Iterators, Generators
---

# CS 61A 2024春季学期 讨论 6

## 讨论 6：迭代器、生成器

-   [disc06.pdf](/resource/cs61a/disc/disc06.pdf)

选小组里一个人[加入 Discord](https://cs61a.org/articles/discord)。可以多个人加入，但一个人就够了。

现在切换到 Pensieve：

-   **所有人**: 前往 [discuss.pensieve.co]，用你的 @berkeley.edu 邮箱登录，然后输入小组号码 (就是你的 Discord 频道号码)。

进了 Pensieve 之后就不用回到这个页面了，Pensieve 上有同样的内容 (而且功能更多)。如果 Pensieve 无法工作，请返回此页面并继续讨论。

有问题的话，在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道发帖求助。

## 开始

介绍一下自己，分享一个你在伯克利校园或者周边城市发现的，你最喜欢的地方。 尽量选一个别人可能还没去过的。（当然，如果你最喜欢的地方就是现在所在的房间，也行。）
:::tip[**提示**]
[McCone Hall](https://www.campus-maps.com/university-of-california-berkeley/mccone-hall/) 从 5 楼的阳台上可以看到不错的景色。
:::

## 生成器

生成器是通过调用生成器函数返回的迭代器。生成器函数里包含的是 `yield` 语句，而不是 `return` 语句。 使用迭代器的方法是调用 `next` 函数，或者把它当成可迭代对象 (比如在 `for` 循环里用)。

### Q1: 大斐波那契数

这个生成器函数会生成所有的斐波那契数列。

```
def gen_fib():
    n, add = 0, 1
    while True:
        yield n
        n, add = n + add, n
```

互相解释一下下面的表达式，确保每个人都明白它的原理 (它会生成一个包含前10个斐波那契数的列表)。

```
(lambda t: [next(t) for _ in range(10)])(gen_fib())
```

接下来，在下面的表达式的空白处填上名称和括号，让它计算出大于2024的最小斐波那契数。

讨论一下哪些内置函数可能有用，比如 [`map`](https://docs.python.org/3/library/functions.html#map), [`filter`](https://docs.python.org/3/library/functions.html#filter), [`list`](https://docs.python.org/3/library/functions.html#func-list), [`any`](https://docs.python.org/3/library/functions.html#any), [`all`](https://docs.python.org/3/library/functions.html#all) 等 (点击函数名可以查看文档)。 尽量不要用 Python 直接跑，先想清楚答案。 只有小组都同意答案正确的时候再运行代码，不要瞎猜。
```python
def gen_fib():
    n, add = 0, 1
    while True:
        yield n
        n, add = n + add, n

____lambda n: n > 2024, ____
```
在 61A 代码中运行
:::tip[**提示**]
其中一种解法的形式是：`next(____(lambda n: n > 2024, ____))`。 第一个空需要用一个内置函数来创建一个只包含大于2024的数的迭代器，第二个空需要创建一个包含所有斐波那契数的迭代器。
:::
如果还是没思路，就赶紧找助教帮忙吧。

### Q2: 有所不同

实现一个生成器函数 `differences`，它接收一个非空的数字迭代器 `t` 作为参数。 这个函数会生成 `t` 中每对相邻元素的差。 如果 `t` 迭代了 `n` 个数，那么 `differences` 应该生成 `n-1` 个值。
```python
def differences(t):
    """Yield the differences between adjacent values from iterator t.

    >>> list(differences(iter([5, 2, -100, 103])))
    [-3, -102, 203]
    >>> next(differences(iter([39, 100])))
    61
    """
    "*** YOUR CODE HERE ***"
```
在 61A 代码中运行
:::tip[**提示**]
在下面的代码基础上进行修改，初始化并更新 `previous_x`，让它始终保存 `x` 前一个 `t` 的值。

```
for x in t:
    yield x - previous_x
```
:::

**展示时间！** 解释一下为什么对于一个包含 `n` 个值的迭代器 `t`，`differences` 总是会生成 `n-1` 个值。 小组里选一个上周没讲过题的人来展示你们的答案，然后在 discuss-queue 频道发消息，带上 @discuss 标签和你们的讨论小组号码，内容写 "We beg to differ!"，助教就会来听你们的讲解并给出反馈。

### 中场休息

我们很懒（像一个迭代器），并使用 ChatGPT 来生成一个生成器笑话...

因为它很懂什么时候该 "return" (回到菜谱)，什么时候该 "yield" (即兴发挥)！

### Q3: 分区

树递归生成器函数具有与常规树递归函数类似的结构。 它们对于迭代所有可能性很有用。 无需构建结果列表并返回它，只需 `yield` 每个结果即可。

你需要找到一个_递归分解_ 的方法： 也就是如何用更简单的递归调用来表达答案。 想一想递归调用会生成什么结果，然后怎么利用这些结果。

**定义。** 对于正整数 `n` 和 `m`，用不超过 `m` 的数来_划分_ `n`，就是用一些不超过 `m` 的正整数相加，并且这些加数按非递减顺序排列，它们的和等于 `n`。

实现一个生成器函数 `partition_gen`，它接收正整数 `n` 和 `m` 作为参数。 这个函数会生成所有用不超过 `m` 的数来划分 `n` 的方案，每个方案用字符串表示。

**提醒：** 回忆一下我们在课上讲的 `partitions` 函数 ([视频](https://youtu.be/DvgT4dnSMVM))，它的递归分解方法是：先枚举所有包含至少一个 `m` 的划分方案，然后再枚举所有不包含 `m` 的方案 (也就是只用 `m-1` 以及更小的数)。
```python
def partition_gen(n, m):
    """Yield the partitions of n using parts up to size m.
```
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
        yield ____
    if n - m > 0:
        "*** YOUR CODE HERE ***"
    if m > 1:
        "*** YOUR CODE HERE ***"
```
在 61A 代码中运行
:::tip[**小贴士**]
生成一个只包含一个元素 `n` 的划分。请确保生成的是字符串类型。

第一个递归情况使用至少一个 `m`，因此你需要生成一个包含 `m` 的划分字符串。第二个递归情况只使用最大为 `m-1` 的部分。（你可以使用 `yield from` 在一行中实现第二种情况。）
:::

**展示环节。** 如果你有时间，一起解释为什么 `partition_gen` 的这个实现不包括 `n < 0`、`n == 0` 或 `m == 0` 的基本情况，即使讲座中原始的`partitions`实现 ([视频](https://youtu.be/DvgT4dnSMVM?si=MEkqzloqIcbD1-09&t=515)) 包含了所有三种情况。请小组选择一位本周或上周没有向课程人员展示过的小组成员来展示你们的答案。展示完毕后，请在 discuss-queue 频道发送消息， 消息内容包括 @discuss 标签，你们的讨论小组号码，以及 "We're positive!"。 课程人员会加入你们的语音频道，听取你们的描述并提供反馈。

## 活动记录

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。
