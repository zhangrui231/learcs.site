---
title: Discussion 2 Environment Diagrams, Higher-Order Functions
---

# Discussion 2 | CS 61A 2024年春季学期

## 讨论 2：环境图、高阶函数

-   [disc02.pdf](/resource/cs61a/disc/disc02.pdf)

小组里选个人加入 [Discord](https://cs61a.org/articles/discord)。多几个人加入也行，但一个人就够了。

现在转到Pensieve:

-   **所有人**: 前往 [discuss.pensieve.co](http://discuss.pensieve.co/)，用你的 @berkeley.edu 邮箱登录，然后输入你的小组号码。（你的小组号码是你的 Discord 频道号码。）

进了Pensieve之后，就不用再回到这个页面了。Pensieve上的内容一样，功能还更多。如果Pensieve用不了，再回到这个页面继续讨论.

有问题的话，在 [Discord](https://cs61a.org/articles/discord/) 上的 `#help` 频道中发帖。

## 开始 \[5 分钟]

说出你的名字，再说说你喜欢的一个城市（或地方），但别是伯克利，也别是你住过的地方。随便说说你为什么喜欢它。

**注意:** 这次讨论，在整个小组都确定答案正确之前，别按“_检查答案_”，也别运行任何Python代码。 目标是争取一次通过所有检查！通过_思考_代码的运行结果来搞清楚问题，并检查答案。不确定？跟小组讨论一下！ （你将无法在期中考试期间运行 Python，所以现在就开始习惯在没有它的情况下解决问题。）

### Q1：热身

执行 `result = (lambda x: 2 * (lambda x: 3)(4) * x)(5)` 后，`result` 的值是多少？跟小组讨论一下，确保大家都意见一致了再按“_检查答案_”。

## 调用表达式 \[15 分钟]

为下面的代码绘制一个环境图。 你可以使用纸、平板电脑或白板。 跟小组讨论一下怎么画，然后_一起_一步一步地完成。 然后，一步一步地检查图，看看有没有问题。

<iframe
                width="800"
                height="460"
                frameborder="0"
                src="https://pythontutor.com/iframe-embed.html#code=def+team%28work%29%3A%0A%09return+t%28work%29+-+1%0Adef+dream%28work%2C+s%29%3A%0A%09if+work%28s-2%29%3A%0A%09%09t+%3D+not+s%0A%09return+not+t%0Awork%2C+t+%3D+3%2C+abs%0Ateam+%3D+dream%28team%2C+work+%2B+1%29+and+t&codeDivHeight=460&codeDivWidth=350&cumulative=true&curInstr=1&heapPrimitives=nevernest&origin=composingprograms.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false">
</iframe>

这是一个空白图，以防你使用平板电脑：

![template](/img/cs61a/A9nnHPb.png)

有问题的话，在`discuss-queue`频道发消息，带上@discuss标签和你的小组号码，跟助教们讨论一下。

## 高阶函数 \[60 分钟]

还记得上次讨论的问题解决思路吗？ 同样适用于实现高阶函数。
1.  选择一个示例输入和对应的输出 (这次输入 *可能* 是一个函数).
2.  用简单的步骤 (用英文) 描述一个从输入计算输出的过程.
3.  弄清楚你需要哪些额外的变量来执行这个过程.
4.  使用这些额外的变量在代码中实现这个过程.
5.  确定你的实现是否适用于最初的示例.
6.  确定你的实现是否适用于其他示例 (如果不是, 你可能需要修改步骤 2).

### Q2: Make Keeper

实现 `make_keeper`，它接受一个正整数 `n` 并返回一个函数 `f`，该函数 `f` 接受另一个单参数函数 `cond` 作为其参数。当 `f` 在 `cond` 上被调用时，它会打印出从 1 到 `n`（包括 `n`）的整数，对于这些整数，当 `cond` 在每个整数上被调用时，会返回 true 值。每个整数都打印在单独的一行上。
```python
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
    "*** YOUR CODE HERE ***"
```
在 61A 代码编辑器中运行

不要偷看！首先尝试在没有提示的情况下实现它。

:::tip[**提示**]
要返回函数 `f`, 请将 `def f(cond):` 放在函数定义的开头, 并将 `return f` 放在函数定义的结尾.
`f` 函数应该初始化 `i = 1` 以便循环遍历所有整数, 并通过调用 `cond(i)` 来判断 `cond` 在每个整数上的返回值是否为真.
:::

**不要运行 Python 代码来检查你的结果, 尝试通过思考来解决问题!**。 如果你遇到困难，请向工作人员寻求帮助。

当你们小组找到解决方案之后, 现在是时候练习如何清晰地描述你的代码了. 一个好的描述就像一个好的程序：简洁而准确。推荐一位同学来描述你们的解决方案, 并向大家讲解, 借此进行练习. 之后, 在 `discuss-queue` 频道发送消息, 加上 @discuss 标签和你们的讨论小组号码, 并写上 "Listen up!". 课程的工作人员会加入你们的语音频道, 听取你的讲解. 如果工作人员没有立刻出现, 可以先开始做下一题, 等待工作人员的到来.

### Q3: Digit Finder

实现函数 `find_digit`, 该函数接收一个正整数 `k` 作为参数, 并返回另一个函数. 返回的函数接收一个正整数 `x` 作为参数, 并返回 `x` 从右往左数的第 `k` 位数字. 如果 `x` 的位数不足 `k` 位, 则返回 0.

例如，在数字 4567 中，7 是从右边开始数的第 1 位数字，6 是从右边开始数的第 2 位数字，而从右边开始数的第 5 位数字是 0（因为只有 4 位数字）。

**重要提示：** 你不能在此问题中使用字符串或索引。

使用向下取整除以 10 的幂可以去掉最右边的若干位数字.
```python
def find_digit(k):
    """Returns a function that returns the kth digit of x.
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
    "*** YOUR CODE HERE ***"
```
在 61A 代码中运行此代码

:::tip[**小提示**]
首先移除第 `k` 位之后的所有数字，这样第 `k` 位就变成了最后一位。
:::

### Q4：匹配器

实现 `match_k`，它接受一个整数 `k`，并返回一个函数，该函数接受一个变量 `x`，如果 `x` 中所有相隔 `k` 位的数字都相同，则返回 `True`。

例如，`match_k(2)` 返回一个单参数函数，用于检查 `x` 中每隔 2 位的数字是否相同。

对于 `match_k(2)(1010)`，`x` 的值为 1010，从左到右的数字依次为 1、0、1、0。因为 `1 == 1` 且 `0 == 0`，所以结果为 `True`。

对于 `match_k(2)(2010)`，`x` 的值为 2010，从左到右的数字依次为 2、0、1、0。因为 `2 != 1` 且 `0 == 0`，所以结果为 `False`。

**注意：此题禁止使用字符串或索引。**

用整除10的幂可以去掉最右边的数字。
```python
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
            if ____________________________:
                return ____________________________
            x //= 10
        ____________________________
    ____________________________
```
在 61A 代码中运行此代码

:::tip[**小提示**]
在每次迭代中，将最后一位数字与它之前 `k` 位的数字进行比较。
:::

## 填写出勤表

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)，每周每人提交一次。
