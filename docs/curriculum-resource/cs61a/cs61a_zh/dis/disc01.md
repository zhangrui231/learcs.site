---
title: Discussion 1 Control, Environment Diagrams
---

# 讨论 1 | CS 61A 2024 年春季学期

## 讨论 1：控制、环境图

-   [disc01.pdf](/resource/cs61a/disc/disc01.pdf)

大家都需要：

-   查看这份讲义的方式（手机也行）
-   记笔记的工具（纸或者电子设备）

小组里选一个人[加入 Discord](https://cs61a.org/articles/discord)，找到小组的频道，然后在小组的 Discord 文本频道里发一句“我们开始吧！”。多几个人加入也行，但一个人就够了。

**确定小组引导者：** 现在大家商量一下，谁来当这次讨论剩下的时间的引导者。

-   如果你觉得自己适合当引导者，就跟大家说一声。
-   要是没人主动当引导者，那就谁手机壳最亮谁来。

现在切换到 Pensieve：

-   **所有人**：前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件登录。
-   **引导者**：点击“_创建房间_”，选这次讨论，然后把房间代码发到小组里。
-   **其他人**：别建房间，输完引导者分享的房间号，直接点“加入房间”就行。
-   有问题就在 Discord 的 `#help` 频道里问。

进了 Pensieve 之后就不用再回到这个页面了，Pensieve 上的内容都有（而且功能更多）。 如果 Pensieve 抽风了，再回到这个页面继续讨论。

## 表达式

说出你的名字，再分享一句你特别喜欢的东西，比如“太棒了”或者“真不错”。每个人尽量说点儿不一样的。要是卡住了，随时问组里的人。说别的语言也行。这样，之后小组讨论解题的时候，你就有词儿说了。

## While 和 If

掌握 `if` 和 `while` 是基本功。在本次讨论中，重点关注我们在前三次讲座中学习的内容：`if`、`while`、赋值（`=`）、比较（`<`、`>`、`==`、...）和算术。先别用咱们课上还没讲过的 Python 功能，像 `for`、`range` 和列表什么的。以后有的是时间学那些，现在先好好练练 `if` (课本 [1.5.4](https://www.composingprograms.com/pages/15-control.html#conditional-statements) 节) 和 `while` (课本 [1.5.5](https://www.composingprograms.com/pages/15-control.html#conditional-statements) 节)。

### Q1: 赛跑

下面的 `race` 函数有时会返回错误的值，有时会永远运行。

```python
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
在 61A 代码编辑器里运行
找到满足以下任一条件的正整数 `x` 和 `y`（其中 `y` 大于 `x`，但不超过 `2 * x`）：

-   `race(x, y)` 返回错误的值；或
-   `race(x, y)` 永远运行。

您只需找到一组满足任一条件的数字即可完成此题；当然，您也可以尝试寻找更多组合。

提示：

-   当 `x` 被赋值为一个数字时，`x += 1` 与 `x = x + 1` 相同。
-   0 是一个假值，所有其他数字都是真值。

:::tip[**提示**]
当乌龟**不是第一次**追上兔子时，`race(x, y)` 的结果才是错误的。尝试一些小于5的较小数字，看看是否能找到这样一种情况：`tortoise` 已经大于 `hare`，但此时 `tortoise - hare` 的值并不为零。
:::

将您找到的 `(x, y)` 示例发布到小组语音频道中的[文本聊天](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X)中。如果遇到困难超过十分钟，请及时寻求帮助！

### Q2: Fizzbuzz

实现经典的 [_Fizz Buzz_ 序列](https://en.wikipedia.org/wiki/Fizz_buzz)。 `fizzbuzz` 函数接受一个正整数 `n`，并为 1 到 `n` 之间的每个整数打印_一行_输出。 对于每个 `i`：

-   如果 `i` 可以同时被 3 和 5 整除，则打印 `fizzbuzz`。
-   如果 `i` 可以被 3 整除（但不能被 5 整除），则打印 `fizz`。
-   如果 `i` 可以被 5 整除（但不能被 3 整除），则打印 `buzz`。
-   否则，打印数字 `i`。

尝试使您的 `fizzbuzz` 实现简洁。

```python
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
    "*** YOUR CODE HERE ***"
```
Run in 61A Code

:::tip[**提示**]
请注意 `if` 和 `elif` 子句的顺序：首先尝试检查当前数字是否可以同时被 3 和 5 整除，然后检查是否仅能被 3 整除以及是否仅能被 5 整除。
:::

## 问题解决

实现函数的一个有效方法是：

1.  选择一个输入示例及其对应的输出。
2.  描述一个过程（用英语），该过程使用简单的步骤从输入计算输出。
3.  弄清楚您需要哪些其他名称来执行此过程。
4.  使用这些附加名称在代码中实现该过程。
5.  确定该实现是否真的适用于您的原始示例。
6.  确定该实现是否真的适用于其他示例。（如果不是，您可能需要修改步骤 2。）

重要的是，这种方法不是直接从阅读问题到编写代码。

例如，在下面的 `is_prime` 问题中，您可以：
1.  首先，假设输入 `n` 为 9，输出为 `False`。
2.  过程如下：检查 `9` (即 `n`) 是否能被 1 到 `9` (即 `n`) 之间的任何整数整除。
3.  引入变量 `i` 来代表 1 到 9 (即 `n`) 之间的每一个整数。
4.  实现 `is_prime`（这部分由你们小组完成）。
5.  通过分析代码的执行流程，验证 `is_prime(9)` 的返回值是否为 `False`。
6.  检查 `is_prime(3)` 的返回值是否为 `True`，`is_prime(1)` 的返回值是否为 `False`。

在接下来的两个问题中，尝试一起应用这种方法。

**重要提示：** 强烈建议**不要**立刻用电脑验证答案。 而是和小组成员讨论思考，尝试判断答案是否正确。 考试时，你们无法通过猜测和运行代码来验证，因为没有 Python 解释器。 现在是练习通过分析示例来验证思路的好机会。 你们甚至可以画出环境图来辅助理解！

如果对某些概念不理解，或者遇到难题，可以向助教或老师寻求帮助。

### Q3：是素数吗？

编写一个函数，如果正整数 `n` 是素数，则返回 `True`，否则返回 `False`。

素数 n 是一个除了 1 和 n 本身之外不能被任何数字整除的数字。 例如，13 是素数，因为它只能被 1 和 13 整除，但 14 不是，因为它能被 1、2、7 和 14 整除。

使用 `%` 运算符：`x % y` 返回 `x` 除以 `y` 的余数。

:::tip[**提示**]
以下是一个 `while` 循环，它会遍历所有大于 1 且小于 `n` 的整数:
 
```python
i = 2
while i < n:
    ...
    i = i + 1
```

可以使用 `n % i == 0` 来判断 `i` 是否是 `n` 的因子。 如果是，则 `return False`。
:::

```python
def is_prime(n):
    """
    >>> is_prime(10)
    False
    >>> is_prime(7)
    True
    >>> is_prime(1) # one is not a prime number!!
    False
    """
    "*** YOUR CODE HERE ***"
```

在 61A 代码中运行

**展示时间**：请用**一句话**概括你们解决 `is_prime` 问题所使用的思路，确保即使不看代码也能理解。 选出一位同学来讲解，然后在 Discord 的 `discuss-queue` 频道发送带有 `@discuss` 标签的消息，内容包括你们的小组编号和 “Prime Time!”。 助教或老师会加入你们的语音频道，听取讲解并给出反馈。

### Q4：唯一数字

编写一个函数，返回正整数中唯一数字的个数。

:::tip[**提示**]
您可以使用 `//` 和 `%` 将一个正整数分成它的个位数和其余的数字。

建议先定义一个函数 `has_digit(n, k)`，用来判断数字 `n` 是否包含数字 `k`。
:::

```python
def unique_digits(n):
    """Return the number of unique digits in positive integer n.

    >>> unique_digits(8675309) # All are unique
    7
    >>> unique_digits(13173131) # 1, 3, and 7
    3
    >>> unique_digits(101) # 0 and 1
    2
    """
    "*** YOUR CODE HERE ***"

def has_digit(n, k):
    """Returns whether k is a digit in n.

    >>> has_digit(10, 1)
    True
    >>> has_digit(12, 7)
    False
    """
    assert k >= 0 and k < 10
    "*** YOUR CODE HERE ***"
```

在 61A 代码中运行
一种方法是循环遍历从 0 到 9 的每个数字，并检查 `n` 是否包含该数字。然后数数看总共有多少个不同的数字。

## 环境图

环境图用于记录框架中变量的名称和值，框架以方框的形式呈现。

### Q5: 瓶子

与你的小组一起回答以下问题。逐步执行该图表以检查你的答案。

1) 什么决定了环境图中出现的不同框架的数量？

- 代码中定义的函数的数量
- 代码中函数调用表达式的数量
- 代码中返回语句的数量
- 运行代码时调用用户定义函数的次数

2) `pass(bottles)` 的返回值会发生什么？

- 它被用作全局框架中 `remaining` 的新值
- 它被用作全局框架中 `bottles` 的新值
- 它被用作全局框架中 `pass` 的新值
- 以上都不是

3) 行 `bottles = 98` 对全局框架有什么影响？

- 它会暂时改变全局框架中 `bottles` 变量所绑定的值。
- 它永久更改绑定到全局框架中 `bottles` 的值。
- 它对全局框架没有影响。

<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=bottles+%3D+99%0Atake+%3D+1%0A%0Adef+pass_it%28around%29%3A%0A++++bottles+%3D+98%0A++++return+take%0A%0Aremaining+%3D+bottles+-+pass_it%28bottles%29%0Abottles+%3D+remaining%0A&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

### Q6: 双重麻烦

在纸上或白板上绘制环境图（不要让计算机为你绘制）！然后，通过逐步执行该图表来检查你的工作。

<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=def+double%28x%29%3A%0A++++return+x+%2A+2%0A%0Adef+triple%28x%29%3A%0A++++return+x+%2A+3%0A%0Ahat+%3D+double%0Adouble+%3D+triple%0A&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

## 留下美好瞬间

如果你愿意，可以再拍一张小组自拍照，并将其添加到你小组 Discord 频道的文本聊天中。然后，请大家填写 [出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。
