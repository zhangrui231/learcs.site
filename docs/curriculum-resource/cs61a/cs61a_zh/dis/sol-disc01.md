---
title: Discussion 1 Solutions
---

# CS 61A 2024春季学期 讨论1

## Discussion 1: 控制、环境图

-   [disc01.pdf](/resource/cs61a/disc01.pdf)

你需要：

-   一种查看此工作表的方式（手机上即可）
-   一种做笔记的工具（纸或电子设备）

小组里选一个人加入[Discord](https://cs61a.org/articles/discord)，找到小组频道，并在小组的Discord[文本频道](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X)中发布“Here we go!”。 可以多人加入，但一人足矣。

**确定你的引导者：** 现在确定谁将是本次讨论的引导者。

-   如果你知道你是引导者，请告知小组。
-   如果还没人当引导者，那就谁手机壳最闪亮谁上！

接下来，请切换到Pensieve：

-   **所有人**：访问 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用你的 @berkeley.edu 邮箱登录。
-   **引导者**：点击“创建房间”(_Create Room_)，选择本次讨论，并将房间代码分享给小组。
-   **其他人**：输入引导者分享的房间代码，点击“加入房间”(_Join Room_)即可。
-   有问题请在Discord的`#help`频道提问。

进入Pensieve后就不用再回到这个页面了，Pensieve包含了所有内容（而且功能更丰富）。 如果由于某种原因 Penseive 无法工作，请返回此页面并继续讨论。

## 表达式

说出你的名字，并分享一句你常听到的、表示赞赏的口头禅，比如“太棒了”或“干得漂亮”。 每个人都应该尝试提出不同的表达方式。 如果卡住了，可以向组员求助。 甚至可以用其他语言。 这样，之后小组讨论解题的时候，你就可以用上这些表达了。

## While 和 If

掌握`if`和`while`语句是基本功。 这次讨论，我们主要练习前三次课的内容：`if`、`while`、赋值（`=`）、比较运算符（`<`、`>`、`==`等）以及算术运算。 请先别用课上还没讲过的Python特性，比如`for`循环、`range`函数和列表。 这些内容以后会有充足的时间学习，现在重点练习`if`语句（参考教材1.5.4节）和`while`语句（参考教材1.5.5节）。

### Q1: 赛跑

下面的`race`函数有时会出错，有时会无限循环。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def race(x, y):
    """The tortoise always walks x feet per minute, while the hare repeatedly
    runs y feet per minute for 5 minutes, then rests for 5 minutes. Return how
    many minutes pass until the tortoise first catches up to the hare.

    >>> race(5, 7)  # After 7 minutes, both have gone 35 steps
    7
    >>> race(2, 4) # After 10 minutes, both have gone 20 steps
    10
    """
    assert y > x and y <= 2 * x, 'the hare must be fast but not too fast'
    tortoise, hare, minutes = 0, 0, 0
    while minutes == 0 or tortoise - hare:
        tortoise += x
        if minutes % 10 < 5:
            hare += y
        minutes += 1
    return minutes
```

找到满足以下任一条件的正整数`x`和`y`（`y`大于`x`但小于等于`2 * x`）：

-   `race(x, y)` 返回错误的值，或者
-   `race(x, y)` 永远运行

找到一组满足任意条件的`x`和`y`就可以完成这道题，当然，如果你想多找几组也没问题。

注意：

-   对于数值类型的变量`x`，`x += 1`等同于`x = x + 1`。
-   0 是一个假值，所有其他数字都是真值。

当乌龟不是**第一次**超过兔子时，`race(x, y)`的返回值就是错误的。 尝试一些小于5的数字，看看能不能找到这样一种情况：`tortoise`已经超过了`hare`，但此时`tortoise - hare`不等于零。
当乌龟第一次赶上兔子所用的时间不是整数分钟时（例如，对于`race(2, 3)`，乌龟在7.5分钟后赶上兔子），返回值就不正确。但是，如果存在某个更大的整数分钟数，在此之后，它们又走了相同的距离，返回值仍然是不正确的。

如果乌龟和兔子只有在非整数分钟时刻才走过相同距离（例如，对于`race(4, 5)`，乌龟在6.2分钟后赶上兔子，并且兔子永远无法赶上），则`race`函数将永远运行。

请将你的 `(x, y)` 示例放在你所在小组的频道文本聊天中。 如果遇到困难超过10分钟，请寻求帮助！

### Q2: Fizzbuzz

实现经典的 [_Fizz Buzz_ 序列](https://en.wikipedia.org/wiki/Fizz_buzz)。 `fizzbuzz` 函数接受一个正整数 `n`，并为从 1 到 `n` 的每个整数打印一行。 对于每个 `i`：

- 如果 `i` 可以同时被 3 和 5 整除，则打印 `fizzbuzz`。
- 如果 `i` 可以被 3 整除（但不能被 5 整除），则打印 `fizz`。
- 如果 `i` 可以被 5 整除（但不能被 3 整除），则打印 `buzz`。
- 否则，打印数字 `i`。

尝试使你的 `fizzbuzz` 实现尽可能简洁。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def fizzbuzz(n):
    """
    >>> result = fizzbuzz(16)
    1
    2
    fizz
    4
    buzz
    fizz
    7
    8
    fizz
    buzz
    11
    fizz
    13
    14
    fizzbuzz
    16
    >>> print(result)
    None
    """
    i = 1
    while i <= n:
        if i % 3 == 0 and i % 5 == 0:
            print('fizzbuzz')
        elif i % 3 == 0:
            print('fizz')
        elif i % 5 == 0:
            print('buzz')
        else:
            print(i)
        i += 1

```

请注意你的 `if` 和 `elif` 子句的顺序：首先尝试检查当前数字是否可以同时被 3 和 5 整除，然后检查是否仅可以被 3 整除以及仅可以被 5 整除。

## 解题思路

实现函数的一个有用方法是：

1. 选择一个示例输入和相应的输出。
2. 描述一个过程（用英语），该过程使用简单的步骤从输入计算输出。
3. 找出你需要哪些额外的名称来执行此过程。
4. 使用这些额外的名称在代码中实现该过程。
5. 确定该实现是否真的适用于你的原始示例。
6. 确定该实现是否真的适用于其他示例。 （如果不是，你可能需要修改步骤 2。）

重要的是，这种方法不是直接从阅读问题到编写代码。

例如，在下面的 `is_prime` 问题中，你可以：

1. 选择 `n` 为 9 作为输入，`False` 作为输出。
2. 这是一个过程：检查 `9` (`n`) 是否不是 1 和 `9` (`n`) 之间任何整数的倍数。
3. 引入 `i` 来表示 1 和 9 (`n`) 之间的每个数字。
4. 实现 `is_prime`（你将与你的小组一起完成此部分）。
5. 通过思考代码的执行来检查 `is_prime(9)` 是否将返回 `False`。
6. 检查 `is_prime(3)` 是否将返回 `True`，`is_prime(1)` 是否将返回 `False`。

在接下来的两个问题中一起尝试这种方法。

**重要提示：** 强烈建议你**不要**立即使用计算机检查你的工作。 而是与你的小组交谈并思考，尝试找出答案是否正确。 在考试中，你将无法进行猜测和检查，因为你没有 Python 解释器。 现在是练习通过思考示例来检查你的工作的好时机。 你甚至可以绘制环境图！

如果你不确定某件事的工作原理或遇到困难，请向课程工作人员寻求帮助。

### Q3：是素数吗？

编写一个函数，如果正整数 `n` 是素数，则返回 `True`，否则返回 `False`。

素数 n 是只能被 1 和 n 本身整除的数字。 例如，13 是素数，因为它只能被 1 和 13 整除，但 14 不是，因为它能被 1、2、7 和 14 整除。

使用 `%` 运算符：`x % y` 返回 `x` 除以 `y` 的余数。

这是一个 `while` 语句，它循环所有大于 1 且小于 `n` 的数字：
```
i = 2
while i < n:
    ...
    i = i + 1
```

你可以用 `n % i == 0` 来检查 `i` 是否能被 `n` 整除。如果可以，就 `return False`。

**你的答案**

在 61A 代码中运行

**解答**

```
def is_prime(n):
    """
    >>> is_prime(10)
    False
    >>> is_prime(7)
    True
    >>> is_prime(1) # one is not a prime number!!
    False
    """
    if n == 1:
        return False
    k = 2
    while k < n:
        if n % k == 0:
            return False
        k += 1
    return True

```

**展示时间**：用一句话概括你们解决 `is_prime` 的思路，确保别人不看代码也能明白。选一位同学讲解，然后在 `discuss-queue` 频道发送 `@discuss` 加上你们的小组号和 "Prime Time!"， 助教就会来听你们的讲解并给出反馈。

### Q4：唯一数字

编写一个函数，返回一个正整数中唯一数字的个数。

> **提示：** 你可以使用 `//` 和 `%` 将一个正整数分离成它的个位数和剩余的位数。
>
> 你或许可以先定义一个函数 `has_digit(n, k)`，用来判断数字 `n` 是否包含数字 `k`。

**你的答案**

在 61A 代码中运行

**解答**

```
def unique_digits(n):
    """Return the number of unique digits in positive integer n.

    >>> unique_digits(8675309) # All are unique
    7
    >>> unique_digits(13173131) # 1, 3, and 7
    3
    >>> unique_digits(101) # 0 and 1
    2
    """
    unique = 0
    while n > 0:
        last = n % 10
        n = n // 10
        if not has_digit(n, last):
            unique += 1
    return unique

# Alternate solution
def unique_digits_alt(n):
    unique = 0
    i = 0
    while i < 10:
        if has_digit(n, i):
            unique += 1
        i += 1
    return unique

def has_digit(n, k):
    """Returns whether k is a digit in n.

    >>> has_digit(10, 1)
    True
    >>> has_digit(12, 7)
    False
    """
    assert k >= 0 and k < 10
    while n > 0:
        last = n % 10
        n = n // 10
        if last == k:
            return True
    return False

```

一种方法是循环遍历从 0 到 9 的每个数字，并检查 `n` 是否包含该数字。统计它包含的数字。

我们提供了两种解决方案：

-   其中一种解法是，对于当前位的数字，检查它是否也出现在剩余的位数中。只有当它没有出现在其他位数中时，才认为它是“唯一”的。对每一位数字都进行这样的检查。
-   另一种解法是，循环检查 0 到 9 这十个数字，对每个数字都调用 `has_digit`。 如果函数返回真，就说明原数字包含这个数字，唯一数字的计数就加一。

## 环境图

环境图用方框记录变量名和对应的值。

### Q5：瓶子

与你的小组一起回答以下问题。逐步执行该图以检查你的答案。

1) 什么决定了环境图中出现多少个不同的框架？

-   代码中定义的函数数量
-   代码中调用表达式的数量
-   代码中 return 语句的数量
-   运行代码时调用用户定义函数的次数

2) `pass(bottles)` 的返回值会发生什么？

-   它被用作全局框架中 `remaining` 的新值
-   它被用作全局框架中 `bottles` 的新值
-   它被用作全局框架中 `pass` 的新值
-   以上都不是

3) 行 `bottles = 98` 对全局框架有什么影响？

-   它暂时更改了绑定到全局框架中 `bottles` 的值。
-   它永久更改了绑定到全局框架中 `bottles` 的值。
-   它对全局框架没有影响。
```<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=bottles+%3D+99%0Atake+%3D+1%0A%0Adef+pass_it%28around%29%3A%0A++++bottles+%3D+98%0A++++return+take%0A%0Aremaining+%3D+bottles+-+pass_it%28bottles%29%0Abottles+%3D+remaining%0A&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

### Q6: Double Trouble

在纸上或者白板上手动画出环境图（别用电脑画！），然后一步一步地检查你的图。

<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=def+double%28x%29%3A%0A++++return+x+%2A+2%0A%0Adef+triple%28x%29%3A%0A++++return+x+%2A+3%0A%0Ahat+%3D+double%0Adouble+%3D+triple%0A&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

我们首先定义了两个函数 `double` 和 `triple`，并将它们分别绑定到对应的名称。 接下来，我们将名称 `hat` 赋值给 `double` 所指向的函数对象。 最后，我们将名称 `double` 赋值给 `triple` 所指向的函数对象。

[视频讲解](https://youtu.be/EuygSqH8nTk)

## 记录美好瞬间

大家如果愿意，可以再拍一张小组自拍，然后发到小组的Discord文字频道里。 之后，请各位填写一下[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (每人每周填一次哦)。
