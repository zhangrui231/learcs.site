---
title: Discussion 3 Recursion
---

# 讨论 3 | CS 61A 2024 年春季学期

## 讨论 3：递归

-   [disc03.pdf](/resource/cs61a/disc/disc03.pdf)

从你们小组里选一个人加入 [Discord](https://cs61a.org/articles/discord)。 多个人加入也行，但一个就够了。

接下来，切换到 Pensieve：

-   **所有人**：前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 邮箱登录，然后输入您的组号。（您的组号是您的 Discord 频道号。）

进入 Pensieve 后就不用回到这个页面了，Pensieve 上有完全相同的内容（而且功能更多）。如果 Pensieve 出了问题，再回到这里继续讨论。

如果您遇到问题，请在 [Discord](https://cs61a.org/articles/discord/) 上的 `#help` 频道中发帖。

## 开始

请大家说一下自己的名字，然后分享一种小时候最喜欢的食物。（现在还喜欢也没问题。）

**建议：** 在期中考试 1 之后，一些学生正在寻找更有效的学习方法。 一个好办法是课后和你的讨论小组一起复习练习题。 现在可以安排时间和地点，小组一起多练练往年的期中考试题。 这是可选的，并非每个人都需要来，但是如果还有期中考试 1 的主题尚未完全理解，那么这个周末是复习它们的绝佳时机。

这门课的内容都是环环相扣的，如果期中考试 1 的内容掌握不牢，后面会很难跟上。

请记住，如果有人还没有学到所有东西并且需要更多时间来掌握课程材料，那也没关系。 这门课的目的就是让大家学习新知识。希望大家互相帮助，共同进步。

## 递归

好了，开始讨论问题吧！ 记住要一起合作。 小组里的每个人都理解了解法之后，才能继续往下进行。 许多学生发现这次讨论具有挑战性。 一切都会随着练习而变得更容易。

**非常重要：** 在本次讨论中，在整个小组确定答案正确之前，请勿检查您的答案。 通过_思考_代码的运行结果来理解并检查你的答案。 争取一次通过所有的测试！ 如果你需要帮助，请提问。

### Q1：实现 Swipe 函数

实现 `swipe`，它逐行打印参数 `n` 的数字，先向后，然后向前。 最左边的数字只打印一次。 不要使用 `while` 或 `for` 或 `str`。（当然要使用递归！）
```python
def swipe(n):
    """Print the digits of n, one per line, first backward then forward.

    >>> swipe(2837)
    7
    3
    8
    2
    8
    3
    7
    """
    if n < 10:
        print(n)
    else:
        "*** YOUR CODE HERE ***"
```
在 61A 代码中运行

:::tip[**提示**]
先 `print` 输出的第一行，然后进行递归调用，最后 `print` 输出的最后一行。
:::

### Q2：间隔阶乘
定义 `skip_factorial` 函数的*基本情形*，该函数返回从 `n` 开始的*每隔一个*正整数的乘积。
```python
def skip_factorial(n):
    """Return the product of positive integers n * (n - 2) * (n - 4) * ...

    >>> skip_factorial(5) # 5 * 3 * 1
    15
    >>> skip_factorial(8) # 8 * 6 * 4 * 2
    384
    """
    if ___:
        return ___
    else:
        return n * skip_factorial(n - 2)
```
在 61A 代码中运行

:::tip[**小提示**]
如果 `n` 是偶数，*那么*基本情形将是 2。如果 `n` 是奇数，*那么*基本情形将是 1。尝试编写一个可以处理这两种情况的条件。
:::
### Q3：判断是否为质数

实现 `is_prime` 函数，该函数接受一个大于 1 的整数 `n`。如果 `n` 是质数，则返回 `True`，否则返回 `False`。尝试按照下面的方法，*用*递归实现它，而不使用 `while`（或 `for`）语句。

```
def is_prime(n):
    assert n > 1
    i = 2
    while i < n:
        if n % i == 0:
            return False
        i = i + 1
    return True
```

你需要定义另一个“辅助”函数（一个仅用于帮助实现此函数的函数）。在 `is_prime` 函数*内部*定义它，还是在全局*作用域*中定义为单独的函数，有关系吗？尝试定义它，*使其*使用尽可能少的参数。
```python
def is_prime(n):
    """Returns True if n is a prime number and False otherwise.
    >>> is_prime(2)
    True
    >>> is_prime(16)
    False
    >>> is_prime(521)
    True
    """
    "*** YOUR CODE HERE ***"
```
在 61A 代码中运行
:::tip[**小提示**]
定义一个内部函数，检查 `i` 和 `n` 之间的一些整数是否能整除 `n`。然后你可以从 `i=2` 开始调用它：

```
def is_prime(n):
    def f(i):
        if n % i == 0:
            return ____
        elif ____:
            return ____
        else:
            return f(____)
    return f(2)
```
:::

为辅助函数*撰写*一句话的文档字符串，描述它的作用。不要只写“它有助于实现 `is_prime` 函数”。而是描述它的行为。完成后，将该文档字符串的文本粘贴到您小组的 [频道文本聊天](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X) 中。

### Q4：递归实现冰雹序列
还记得[作业 1](https://cs61a.org/hw/hw01/)里的 `hailstone` 函数吗？首先，选择一个正整数 `n` 作为起始值。如果 `n` 是偶数，则将其除以 2。如果 `n` 是奇数，则将其乘以 3 并加 1。重复此过程，直到 `n` 为 1。完成这个 `hailstone` 函数的递归版本。这个版本会打印冰雹序列的值，并返回序列的长度（步数）。
```python
def hailstone(n):
    """Print out the hailstone sequence starting at n, 
    and return the number of elements in the sequence.
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
    print(n)
    if n % 2 == 0:
        return even(n)
    else:
        return odd(n)

def even(n):
    return ____

def odd(n):
    "*** YOUR CODE HERE ***"
```
:::tip[**小贴士**]
偶数永远不是基本情况，因此 `even` 总是对 `hailstone` 进行递归调用，并返回比 hailstone 序列其余部分的长度多 1 的值。

奇数可能是 1（基本情况）或大于 1（递归情况）。只有递归情况才应该调用 `hailstone`。
:::

小组达成一致方案后，就可以练习描述代码了。选择一位演示者，然后向带有 @discuss 标签的 `discuss-queue` 频道发送一条消息，其中包含你的讨论小组编号和消息“呼叫所有课程 staff！”课程工作人员将加入你的语音频道来听取你的描述。

## 记录参与

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。

这个问题需要整个讨论小组一起参与。至少尝试一下。大家可能会觉得很有意思。我们将在周五的讲座中回顾这个问题。

### Q5: Sevens

**Sevens 游戏**：圆圈中的玩家从 1 开始顺时针计数。（起始玩家说 1，左边的玩家说 2，依此类推。）如果数字能被7整除，或者包含数字7，就切换方向。数字必须以 [每分钟 60 拍](https://www.youtube.com/watch?v=ymJIXzvDvj4) 的节拍说出。如果有人在不是他们回合的时候说了一个数字，或者有人在他们的回合中错过了节拍，游戏就会结束。

例如，5 个人会这样数到 20：
```
玩家 1 说 1
玩家 2 说 2
玩家 3 说 3
玩家 4 说 4
玩家 5 说 5
玩家 1 说 6
玩家 2 说 7  # 改为逆时针
玩家 1 说 8
玩家 5 说 9
玩家 4 说 10
玩家 3 说 11
玩家 2 说 12
玩家 1 说 13
玩家 5 说 14 # 改回顺时针
玩家 1 说 15
玩家 2 说 16
玩家 3 说 17 # 改回逆时针
玩家 2 说 18
玩家 1 说 19
玩家 5 说 20
```

玩几局游戏。在 Discord 上发布你们小组达到的最高分。

然后，实现 `sevens` 函数，该函数接受一个正整数 `n` 和玩家数量 `k`。它返回 `k` 个玩家中，谁会说出数字 `n`。你可以调用 `has_seven` 函数。

解决这个问题的一个好办法是模拟这个游戏，直到第 `n` 轮。这个实现需要跟踪几个变量：最终的数字 `n`，当前的数字 `i`，说出数字 `i` 的玩家 `who`，以及决定下一个玩家的 `direction` (方向)，这个方向可以是递增或者递减。`direction` 用 `1` 代表递增，`-1` 代表递减，并在两者之间切换。
```python
def sevens(n, k):
    """Return the (clockwise) position of who says n among k players.

    >>> sevens(2, 5)
    2
    >>> sevens(6, 5)
    1
    >>> sevens(7, 5)
    2
    >>> sevens(8, 5)
    1
    >>> sevens(9, 5)
    5
    >>> sevens(18, 5)
    2
    """
    def f(i, who, direction):
        if i == n:
            return who
        "*** YOUR CODE HERE ***"
    return f(1, 1, 1)

def has_seven(n):
    if n == 0:
        return False
    elif n % 10 == 7:
        return True
    else:
        return has_seven(n // 10)
```
在 61A 代码中运行
:::tip[**提示**]
首先检查 `i` 是否是 7 的倍数或包含数字 7，如果是，则切换方向。然后，将方向添加到 `who`，并确保 `who` 没有小于 1 或大于 `k`。
:::
### Q6: Karel the Robot

[Karel the robot](https://compedu.stanford.edu/karel-reader/docs/python/en/chapter1.html) 从一个 `n` x `n` 正方形的角落开始，`n` 是某个未知数。 Karel 只响应四个函数：

-   `move()` 如果 Karel 前面没有墙，`move()` 会让它向前移动一格；否则会报错。
-   `turn_left()` 将 Karel 向左转 90 度。
-   `front_is_blocked()` 返回 Karel 前面是否有墙。
-   `front_is_clear()` 返回 Karel 前面是否无墙。
```实现一个 `main()` 函数，让 Karel 停在底边正中央附近。例如，如果正方形是 7 x 7，Karel 从 (1, 1) 位置开始，即左下角，那么 Karel 应该停在 (1, 4) 位置（底边左右各三格）。Karel 可以朝向任何方向。如果底边的长度是偶数，Karel 可以停在 (1, `n // 2`) 或 (1, `n // 2 + 1`) 位置。

**注意** `main()` 函数里只能写 `if` 和 `if`/`else` 语句以及函数调用。你不能编写赋值语句、def 语句、lambda 表达式或 while/for 语句。

<iframe width='960' height='600' src="https://compedu.stanford.edu/karel-reader/docs/python/en/ide.html">
</iframe>

:::tip[**提示**]
每前进两格，后退一格，就能到达中间位置附近。
:::
