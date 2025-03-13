---
title: Discussion 3 Solutions
---

# Discussion 3 | CS 61A 2024年春季学期

## Discussion 3: 递归

-   [disc03.pdf](/resource/cs61a/disc03.pdf)

小组里选一个人加入 [Discord](https://cs61a.org/articles/discord)。 也可以多个人加入，但一个人就够了。

现在请切换到 Pensieve:

-   **大家**: 前往 [discuss.pensieve.co](http://discuss.pensieve.co/)，用你的 @berkeley.edu 邮箱登录，然后输入小组号码（小组号码就是你们 Discord 频道的号码）。

进入 Pensieve 之后，就不用回到这个页面了。Pensieve 包含了所有相同的内容，而且功能更多。如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

如果遇到问题，可以在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道里发帖求助。

## 开始

说一下你的名字，然后分享一种你小时候特别喜欢的食物。（就算现在还喜欢也没关系。）

在期中考 1 之后，有些同学在找更有效的学习方法。建议大家可以和讨论小组的同学在课外一起复习练习题。现在就可以约个时间和地点，额外练习一下以前的期中考 1 题目。这不是强制的，不是每个人都必须参加。但如果有些期中考 1 的知识点还没完全掌握，这个周末是个复习的好机会。

这门课的内容都是建立在之前的知识点上的，如果期中考 1 的内容没掌握牢固，后面会很难跟上。

记住，如果有人还没学会，需要更多时间掌握，也没关系。这门课的目的就是让大家学习自己还不懂的东西。大家互相帮助。

## 递归

好啦，开始讨论题目吧！记住要一起合作。小组里的每个人都要理解解法，才能往下进行。很多同学觉得这次讨论有难度，但多加练习就会越来越容易。

**重点：** 这次讨论中，在整个小组都确定答案正确之前，不要急着看答案。要通过_思考_代码的运行方式来弄懂题目，并检查结果。目标是争取一次通过所有测试！如果需要帮助，随时提问。

### Q1: Swipe (滑动)

实现 `swipe` 函数，它会逐行打印参数 `n` 的每一位数字，先倒序打印，再正序打印。最左边的数字只打印一次。不要用 `while`、`for` 或者 `str`。（要用递归！）

**你的答案**

在 61A 代码中运行

**解决方案**

```
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
        print(n % 10)
        swipe(n // 10)
        print(n % 10)

```

先 `print` 第一行输出，然后进行递归调用，最后 `print` 最后一行的输出。

### Q2: Skip Factorial (跳跃阶乘)

定义 `skip_factorial` 函数的基准情形 (base case)，这个函数会返回从 `n` 开始，每隔一个正整数相乘的积。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def skip_factorial(n):
    """Return the product of positive integers n * (n - 2) * (n - 4) * ...
>>> skip_factorial(5) # 5 * 3 * 1
    15
    >>> skip_factorial(8) # 8 * 6 * 4 * 2
    384
    """
    if n <= 2:
        return n
    else:
        return n * skip_factorial(n - 2)
```

如果 `n` 是偶数，递归的基本情况是 2；如果 `n` 是奇数，基本情况则是 1。尝试写出一个能同时处理这两种情况的条件表达式。

### Q3：判断是否为素数

实现 `is_prime` 函数，该函数接收一个大于 1 的整数 `n`。如果 `n` 是素数，则返回 `True`，否则返回 `False`。尝试按照下面的方法，但使用递归实现，不使用 `while`（或 `for`）语句。

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

你需要定义另一个“辅助”函数，用来辅助实现 `is_prime`。在 `is_prime` 函数内部定义，还是在全局作用域中定义，有区别吗？尝试尽量使用最少的参数。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def is_prime(n):
    """如果 n 是素数，返回 True；否则，返回 False。
    >>> is_prime(2)
    True
    >>> is_prime(16)
    False
    >>> is_prime(521)
    True
    """
    def check_all(i):
        "检查 i 到 n 之间是否存在能整除 n 的数。"
        if i == n:      # 可以替换为 i > (n ** 0.5)
            return True
        elif n % i == 0:
            return False
        return check_all(i + 1)
    return check_all(2)

```

定义一个内部函数，检查 `i` 和 `n` 之间是否存在可以整除 `n` 的整数。然后你可以从 `i=2` 开始调用它：

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

为辅助函数编写一个单句文档字符串，描述它的作用。不要只写“用于辅助实现 `is_prime`”。要描述它的具体功能。完成后，将文档字符串复制粘贴到你们讨论组的频道聊天中。

### Q4：递归实现冰雹序列

回顾一下[作业 1](https://cs61a.org/hw/hw01/) 中学过的 `hailstone` 函数。首先，选择一个正整数 `n` 作为开始。如果 `n` 是偶数，则将其除以 2。如果 `n` 是奇数，则将其乘以 3 并加 1。重复此过程，直到 `n` 为 1。完成 `hailstone` 函数的递归实现，使其能够打印冰雹序列并返回序列的长度（步数）。

**你的答案**

在 61A 代码中运行

**解决方案**
```
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
    return 1 + hailstone(n // 2)

def odd(n):
    if n == 1:
        return 1
    else:
        return 1 + hailstone(3 * n + 1)

```

偶数永远不会是基本情况，因此 `even` 函数总是递归调用 `hailstone`，并返回的结果比剩余冰雹序列的长度多 1。

奇数可能为 1 (作为基本情况) 或者大于 1 (作为递归情况)。 只有在递归情况下才应该调用 `hailstone` 函数。

小组达成一致方案后，就该练练怎么讲解你们的代码了。选一位同学做讲解，然后在 `discuss-queue` 频道发消息，带上 @discuss 标签和你们小组的编号，内容是“Hailing all course staff!”。 助教就会来你们的语音频道听你讲解。

## 完成情况登记

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。

这个问题需要你们整个小组一起完成。 至少试试看。 你们可能会觉得挺有意思的。 我们会在周五的课上一起看看这个题。

### Q5: Sevens

**7 的游戏**：围成一圈的玩家按顺时针方向从 1 开始计数。（起始玩家说 1，左边的玩家说 2，以此类推。）如果数字能被 7 整除，或者包含数字 7 (两者满足其一)，就切换方向。数字必须以每分钟 60 拍的节奏说出。如果有人抢答，或者该他的时候没跟上节奏，游戏就结束。

例如，5 个人会这样数到 20：

```
玩家 1 说 1
玩家 2 说 2
玩家 3 说 3
玩家 4 说 4
玩家 5 说 5
玩家 1 说 6  # 绕圈一周
玩家 2 说 7  # 切换到逆时针方向
玩家 1 说 8
玩家 5 说 9  # 逆时针方向绕圈
玩家 4 说 10
玩家 3 说 11
玩家 2 说 12
玩家 1 说 13
玩家 5 说 14 # 切换回顺时针方向
玩家 1 说 15
玩家 2 说 16
玩家 3 说 17 # 切换回逆时针方向
玩家 2 说 18
玩家 1 说 19
玩家 5 说 20
```

玩几局游戏。在 Discord 上发布你们小组达到的最高分。

然后，实现 `sevens`，它接受一个正整数 `n` 和玩家数量 `k`。它返回 `k` 个玩家中谁说出了 `n`。你可以调用 `has_seven`。
解决这个问题的一个有效方法是模拟这个游戏，直到第 `n` 轮结束。实现过程需要跟踪最终的数字 `n`，当前的数字 `i`，说出数字 `i` 的玩家 `who`，以及决定下一个玩家的当前方向 `direction`（递增或递减）。使用整数来表示这些变量是很方便的，其中 `direction` 用 `1` 代表递增，`-1` 代表递减。

**你的答案**

在 61A 代码编辑器中运行

**解决方案**

```
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
        if i % 7 == 0 or has_seven(i):
            direction = -direction
        who = who + direction
        if who > k:
            who = 1
        if who < 1:
            who = k
        return f(i + 1, who, direction)
    return f(1, 1, 1)

def has_seven(n):
    if n == 0:
        return False
    elif n % 10 == 7:
        return True
    else:
        return has_seven(n // 10)
```

首先检查 `i` 是否为 7 的倍数或者包含数字 7，如果是，则切换方向。然后，将 `direction` 加到 `who` 上，并确保 `who` 不小于 1 且不大于 `k`。

### Q6: Karel the Robot

[Karel the robot](https://compedu.stanford.edu/karel-reader/docs/python/en/chapter1.html) 从一个 `n` x `n` 的正方形的角落开始，其中 `n` 是一个未知的数值。Karel 只响应四个函数：

-   `move()` 如果 Karel 前面没有墙，则向前移动一格；如果前面有墙，则报错。
-   `turn_left()` 将 Karel 向左转 90 度。
-   `front_is_blocked()` 返回 Karel 前面是否有墙。
-   `front_is_clear()` 返回 Karel 前面是否没有墙。

实现一个 `main()` 函数，使 Karel 停在底行的中间位置。例如，如果正方形是 7 x 7，并且 Karel 从位置 (1, 1)（左下角）开始，那么 Karel 应该停在位置 (1, 4)（从底行两侧数三个位置）。Karel 最终可以面向任何方向。如果底行的长度是偶数，Karel 可以停在位置 (1, `n // 2`) 或 (1, `n // 2 + 1`)。

**重要提示** 你只能在 `main()` 的主体中编写 `if` 或 `if`/`else` 语句和函数调用。你不能编写赋值语句、def 语句、lambda 表达式或 while/for 语句。


<iframe width='960' height='600' src="https://compedu.stanford.edu/karel-reader/docs/python/en/ide.html"></iframe>


简单来说，可以理解为每前进两步，后退一步，最终停在中间位置附近。
