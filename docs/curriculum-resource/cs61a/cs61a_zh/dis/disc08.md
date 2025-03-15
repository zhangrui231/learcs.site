---
title: Discussion 8 Linked Lists, Efficiency
---

# Discussion 8 | CS 61A 2024年春季学期

## Discussion 8: 链表，效率

-   [disc08.pdf](/resource/cs61a/disc/disc08.pdf)

**最新通知：** 从现在开始，我们将继续使用Pensieve，但我们已经从Pensieve中移除了语音聊天功能。建议使用Discord与课程人员进行语音交流，它更稳定，并且支持屏幕分享。随时在Discord的`#discuss-queue`频道@discuss提问，课程人员会加入语音频道提供帮助。

小组里派一个人[加入Discord](https://cs61a.org/articles/discord)即可，当然多人加入也没问题。

现在切换到Pensieve：

-   **所有人**: 前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 邮箱登录，然后输入您的组号。（您的组号是您的 Discord 频道号。）

进入Pensieve后就不用再回到这个页面了，Pensieve包含了所有内容，而且功能更丰富。如果Pensieve出现问题，再返回此页面继续。

遇到问题请在Discord的`#help`频道提问。

## 开始

如果你们组只有一两个人，可以加入房间里的其他小组。

大家轮流介绍一下自己，说说名字和生日，然后分享一个你最喜欢的生日聚会（自己的或者别人的都行）。

**小提示：** 很多小组都是卡很久才来求助。 建议尽早提问，我们很乐意帮忙，而且你可能会学到新东西！

## 链表

链表是一个 `Link` 对象或 `Link.empty`。

你可以用这两种方法修改 `Link` 对象 `s`：

-   使用 `s.first = ...` 更改第一个元素
-   使用 `s.rest = ...` 更改其余元素

您可以通过调用 `Link` 创建一个新的 `Link` 对象：

-   `Link(4)` 创建一个长度为 1 的链表，其中包含 4。
-   `Link(4, s)` 创建一个链表，该链表以 4 开头，后跟链表 `s` 的元素。

```
class Link:
    """A linked list is either a Link object or Link.empty

    >>> s = Link(3, Link(4, Link(5)))
    >>> s.rest
    Link(4, Link(5))
    >>> s.rest.rest.rest is Link.empty
    True
    >>> s.rest.first * 2
    8
    >>> print(s)
    <3 4 5>
    """
    empty = ()

    def __init__(self, first, rest=empty):
        assert rest is Link.empty or isinstance(rest, Link)
        self.first = first
        self.rest = rest

    def __repr__(self):
        if self.rest:
            rest_repr = ', ' + repr(self.rest)
        else:
            rest_repr = ''
        return 'Link(' + repr(self.first) + rest_repr + ')'

    def __str__(self):
        string = '<'
        while self.rest is not Link.empty:
            string += str(self.first) + ' '
            self = self.rest
        return string + str(self.first) + '>'
```

**主持人：** 小组选择一种画图的方式，纸、白板或者平板都行。 如果没有，可以问问其他小组有没有多余的纸。

### Q1：奇怪的循环

之前实验里出现过一种带循环的`Link`对象，它能表示无限重复的1组成的列表。

```
>>> ones = Link(1)
>>> ones.rest = ones
>>> [ones.first, ones.rest.first, ones.rest.rest.first, ones.rest.rest.rest.first]
[1, 1, 1, 1]
>>> ones.rest is ones
True
```

实现一个`strange_loop`函数，它不接受参数，返回一个`Link`对象`s`，满足`s.rest.first.rest` 就是 `s`。

绘制您要创建的链表的图片，然后编写代码来创建它。

**主持人：** 当您认为每个人都有机会读到这里时，请说：“那么，这东西会是什么样子？”

要让`s.rest.first.rest`存在，`s`的第二个元素（即`s.rest.first`）必须也是一个链表。

![奇怪的循环](/img/cs61a/e7qhrNQ.png)
创建循环需要两步：首先创建一个没有循环的链表，然后修改 `s.rest.first.rest` 使其指向 `s`，从而创建循环。例如，首先创建 `s = Link(6, Link(Link(1)))`。
```python
def strange_loop():
    """Return a Link s for which s.rest.first.rest is s.

    >>> s = strange_loop()
    >>> s.rest.first.rest is s
    True
    """
    "*** YOUR CODE HERE ***"
```

在 61A 代码环境中运行

### Q2：两种求和方法

实现 `sum_rec` 和 `sum_iter`。每个函数都接收一个数字链表 `s`，并返回其元素的总和。使用递归来实现 `sum_rec`。不要使用递归来实现 `sum_iter`；而是使用 `while` 循环。

**主持人：** 告诉小组先做哪个函数。你来决定。你可以说：“让我们从递归版本开始吧。”
```python
def sum_rec(s, k):
    """Return the sum of the first k elements in s.

    >>> a = Link(1, Link(6, Link(8)))
    >>> sum_rec(a, 2)
    7
    >>> sum_rec(a, 5)
    15
    >>> sum_rec(Link.empty, 1)
    0
    """
    # Use a recursive call to sum_rec; don't call sum_iter
    "*** YOUR CODE HERE ***"

def sum_iter(s, k):
    """Return the sum of the first k elements in s.

    >>> a = Link(1, Link(6, Link(8)))
    >>> sum_iter(a, 2)
    7
    >>> sum_iter(a, 5)
    15
    >>> sum_iter(Link.empty, 1)
    0
    """
    # Don't call sum_rec or sum_iter
    "*** YOUR CODE HERE ***"
```

在 61A 代码环境中运行

:::tip[**提示**]
将 `s.first` 添加到 `s.rest` 中元素的总和。你的基本情况应该是 `s is Link.empty`，这样你就可以在评估 `s.first` 或 `s.rest` 之前检查 `s` 是否为空。

引入一个新名称，例如 `total`，然后重复（在 `while` 循环中）将 `s.first` 添加到 `total` 并设置 `s = s.rest` 以在链表中前进，只要 `s is not Link.empty`。
:::
**讨论时间：** 计算数字之和时，中间结果取决于计算顺序。

(1 + 3) + 5 和 1 + (3 + 5) 都等于 9，但第一个在过程中产生 4，而第二个在过程中产生 8。对于同一个链表，`sum_rec` 和 `sum_iter` 在过程中产生的中间和是否相同？在您小组的 Discord 频道文本聊天中回复。如果相同，则回复“Same way all day”。如果不同，则回复“Sum thing is different”。

### Q3：重叠

实现 `overlap`，它接受两个名为 `s` 和 `t` 的数字链表，它们按递增顺序排序，并且每个列表中都没有重复的元素。它返回同时出现在两个列表中的数字个数。

对于长度之和为 n 的链表 s 和 t，可以在线性时间 O(n) 内完成此操作。方法是：始终比较两个链表的首个元素，并推进首个元素较小的链表。当两个首个元素相等时，计数加一，并同时推进两个链表。当其中一个链表为空时，即可返回。这是一个关于此的[讲座视频片段](https://youtu.be/UZ9nOiyMQ8A?si=W0N2ecsTHR5p8c2z&t=137)（但该视频使用 Python 列表而不是链表）。

投票决定是使用递归还是迭代。无论哪种方式都可以（并且解决方案的复杂性/难度大致相同）。

需要帮助吗？在 Discord 上的 `#discuss-queue` 频道中发布 `@discuss over here!` 和您的小组号码。
```python
def overlap(s, t):
    """For increasing s and t, count the numbers that appear in both.

    >>> a = Link(3, Link(4, Link(6, Link(7, Link(9, Link(10))))))
    >>> b = Link(1, Link(3, Link(5, Link(7, Link(8)))))
    >>> overlap(a, b)  # 3 and 7
    2
    >>> overlap(a.rest, b)  # just 7
    1
    >>> overlap(Link(0, a), Link(0, b))
    3
    """
    "*** YOUR CODE HERE ***"
```
在 61A 代码中运行

:::tip[**小提示**]
```
    if s is Link.empty or t is Link.empty:
        return 0
    if s.first == t.first:
        return __________________
    elif s.first < t.first:
        return __________________
    elif s.first > t.first:
        return __________________
```

```
    k = 0
    while s is not Link.empty and t is not Link.empty:
        if s.first == t.first:
            __________________
        elif s.first < t.first:
            __________________
        elif s.first > t.first:
            __________________
    return k
```
:::
### Q4: 重叠增长

下面的 `overlap` 函数的另一种实现方式没有假设 `s` 和 `t` 是按递增顺序排列的。假设 `s` 和 `t` 长度相同，那么它的运行时间复杂度，以 `s` 和 `t` 的长度为基准，是什么量级的？请从以下选项中选择：_常数级_、_对数级_、_线性级_、_平方级_ 或 _指数级_。

```
def length(s):
    if s is Link.empty:
        return 0
    else:
        return 1 + length(s.rest)

def filter_link(f, s):
    if s is Link.empty:
        return s
    else:
        frest = filter_link(f, s.rest)
        if f(s.first):
            return Link(s.first, frest)
        else:
            return frest

def contained_in(s):
    def f(s, x):
        if s is Link.empty:
            return False
        else:
            return s.first == x or f(s.rest, x)
    return lambda x: f(s, x)

def overlap(s, t):
    """对于没有重复的 s 和 t，计算出现在两者中的数字。

    >>> a = Link(3, Link(4, Link(6, Link(7, Link(9, Link(10))))))
    >>> b = Link(1, Link(3, Link(5, Link(7, Link(8, Link(12))))))
    >>> overlap(a, b)  # 3 和 7
    2
    >>> overlap(a.rest, b.rest)  # 只有 7
    1
    >>> overlap(Link(0, a), Link(0, b))
    3
    """
    return length(filter_link(contained_in(t), s))
```

## 考勤记录

请大家填写[考勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (每人每周提交一次).

**重要提示：**离开前请帮忙把房间里的家具恢复原位。谢谢！

你可以随意跳过这道题，但它很有趣，如果时间允许，不妨尝试一下。

### Q5：十进制展开

**定义。** 对于分数 `n/d` (其中 `n < d`)，它的_十进制展开_是指一个以小数点前的 0 开始的无限数字序列，其后跟随的数字分别代表了 `n/d` 的十分位、百分位、千分位等。例如，2/3 的十进制展开是 0.6666666...，也就是一个 0 后面跟着无限循环的 6。

实现 `divide`，它接受正整数 `n` 和 `d`，其中 `n < d`。它返回一个链表，这个链表包含 `n/d` 的十进制展开的循环数字。提供的 `display` 函数打印小数点后前 `k` 位数字。

例如，1/22 将表示为下面的 `x`：

```
>>> 1/22
0.045454545454545456
>>> x = Link(0, Link(0, Link(4, Link(5))))
>>> x.rest.rest.rest.rest = x.rest.rest
>>> display(x, 20)
0.04545454545454545454...
```
```python
def divide(n, d):
    """返回一个链表，这个链表包含 n/d 的十进制展开的循环数字。

    >>> display(divide(5, 6))
    0.8333333333...
    >>> display(divide(2, 7))
    0.2857142857...
    >>> display(divide(1, 2500))
    0.0004000000...
    >>> display(divide(3, 11))
    0.2727272727...
    >>> display(divide(3, 99))
    0.0303030303...
    >>> display(divide(2, 31), 50)
    0.06451612903225806451612903225806451612903225806451...
    """
    assert n > 0 and n < d
    result = Link(0)  # 小数点前的 0
    "*** 请在此处填写你的代码 ***"
    return result

    def display(s, k=10):
        """将无限链表 s 的前 k 位以小数形式打印出来。

        >>> s = Link(0, Link(8, Link(3)))
        >>> s.rest.rest.rest = s.rest.rest
        >>> display(s)
        0.8333333333...
        """
        assert s.first == 0, f'{s.first} 不是 0'
        digits = f'{s.first}.'
        s = s.rest
        for _ in range(k):
            assert s.first >= 0 and s.first < 10, f'{s.first} 不是一个数字'
            digits += str(s.first)
            s = s.rest
        print(digits + '...')
```
1/22 的十进制展开式可以构造如下：
```
>>> n, d = 1, 22
>>> n/d
0.045454545454545456
>>> result = Link(0)
>>> tail = result
>>> q, r = 10 * n // d, 10 * n % d
>>> tail.rest = Link(q)  # 0: 0.0
>>> tail = tail.rest
>>> n = r
>>> n
10
>>> q, r = 10 * n // d, 10 * n % d
>>> tail.rest = Link(q)  # 4: 0.04
>>> tail = tail.rest
>>> n = r
>>> n
12
>>> q, r = 10 * n // d, 10 * n % d
>>> tail.rest = Link(q)  # 5: 0.045
>>> tail = tail.rest
>>> n = r
>>> n
10
>>> result
Link(0, Link(0, Link(4, Link(5))))
>>> tail.rest = result.rest.rest
>>> display(result, 20)
0.04545454545454545454...
```
将上述示例中的除法模式放在 `while` 语句中：
```
>>> q, r = 10 * n // d, 10 * n % d
>>> tail.rest = Link(q)
>>> tail = tail.rest
>>> n = r
```
在构造十进制展开式时，将每个 `n` 的 `tail` 存储在以 `n` 为键的字典中。当某个 `n` 第二次出现时，不要创建新的`Link`对象，而是将当前`Link`对象的 `rest` 指向前一个相同 `n` 对应的 `Link` 对象。这样就能形成一个循环，循环的长度是正确的。
