---
title: Discussion 10 Interpreters
---

# Discussion 10 | CS 61A 2024春季学期

## Discussion 10: 解释器

-   [disc10.pdf](/resource/cs61a/disc/disc10.pdf)

**注意：** 我们仍然使用 Pensieve, 但语音/视频聊天功能已移除. 请使用 Discord 和助教/老师语音交流. 它更可靠，也支持屏幕共享. 随时在 Discord 的 `#discuss-queue` 频道 @discuss 提问, 助教/老师会加入你们小组的语音频道.

小组里选一个人[加入 Discord](https://cs61a.org/articles/discord)就好. 多人加入也行, 但一个就够了.

现在切换到 Pensieve：

-   **大家**: 前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 邮箱登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

登录 Pensieve 后就不用回到这个页面了, Pensieve 上有同样的内容 (而且功能更多). 如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

有问题请在 Discord 的 `#help` 频道发帖.

**小贴士：** 你们中的任何人都可以在您小组的 Discord 频道文本聊天中输入带有 `@discuss` 标签的问题，助教/老师会回复.

## 准备开始

如果你们组只有一两个人, 可以加入房间里的其他组.

大家先自我介绍一下, 然后看看谁最近要离开湾区.

## 列表的表示

Scheme 调用表达式是一个 Scheme 列表，它在 Python 中使用 `Pair` 实例表示。

例如，调用表达式 `(+ (* 3 4) 5)` 表示为：

```
Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
```

![(+ (* 3 4) 5)](/img/cs61a/I3972ut.png)

`Pair` 类和 `nil` 对象在 [Scheme 项目](http://cs61a.org/proj/scheme) 的 [pair.py](http://cs61a.org/proj/scheme/pair.py) 中定义。

```
class Pair:
    "A Scheme list is a Pair in which rest is a Pair or nil."
    def __init__(self, first, rest):
        self.first = first
        self.rest = rest

    ... # There are also __str__, __repr__, and map methods, omitted here.
```

### Q1: 表示表达式

写出下面每个 `Pair` 对应的 Scheme 表达式. 试着画出链表图. 第一个例子已经做好了.

```
Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
```

答案：`(+ (* 3 4) 5)`

```
>>> Pair('+', Pair(1, Pair(Pair('*', Pair(2, Pair(3, nil))), nil)))
```

你的答案：

![](/img/cs61a/LXubaoe.png)

`(+ 1 (* 2 3))`

```
>>> Pair('and', Pair(Pair('<', Pair(1, Pair(0, nil))), Pair(Pair('/', Pair(1, Pair(0, nil))), nil)))
```

你的答案：

![](/img/cs61a/nG9GUbt.png)

`(and (< 1 0) (/ 1 0))`
**大家讨论一下：** `(and (< 1 0) (/ 1 0))` 的结果是什么？ 小组讨论直到达成一致，然后在你们小组的Discord文字频道里发答案。

## 求值

要用Project 4的解释器计算表达式 `(+ (* 3 4) 5)`，会按以下顺序调用 `scheme_eval` 来计算这些表达式：

1.  `(+ (* 3 4) 5)`
2.  `+`
3.  `(* 3 4)`
4.  `*`
5.  `3`
6.  `4`
7.  `5`

**讨论时间：** 互相解释一下为什么 `*` 会被计算，以及它的值是什么。

`*` 被求值是因为它是表达式 `(* 3 4)` 的运算符，而 `(* 3 4)` 又是表达式 `(+ (* 3 4) 5)` 的操作数。

默认情况下，`*` 这个操作符的功能是将所有参数相乘。 但因为 `*` 可以随时被重新定义，所以每次使用时都需要重新求值，来确定它当前代表什么。

```
scm> (* 2 3)  ; 现在是乘法
6
scm> (define * +)
*
scm> (* 2 3)  ; 现在是加法
5
```

`if` 表达式也是一个 Scheme 列表，使用 `Pair` 实例表示。

例如，`(if (< x 0) (- x) x)` 表示为：

`Pair('if', Pair(Pair('<', Pair('x', Pair(0, nil))), Pair(Pair('-', Pair('x', nil)), Pair('x', nil))))`

![](/img/cs61a/JySFkth.png)

要在 `x` 绑定到 2（且 `<` 和 `-` 具有其默认值）的环境中对该表达式求值，将按以下顺序对以下表达式调用 `scheme_eval`：

1.  `(if (< x 0) (- x) x)`
2.  `(< x 0)`
3.  `<`
4.  `x`
5.  `0`
6.  `x`

**现在轮到大家展示了：** 解释一下，为什么即使 `if` 和 `-` 都出现在 `(if (< x 0) (- x) x)` 中，它们却没有被求值。 如果你们小组对答案达成一致（或者需要帮助），就在 `#discuss-queue` 频道发消息，带上 `@discuss` 标签和你们的组号，再加上一句 "If you please!"。 助教会来听你们的解释并给出反馈。

### Q2：求值

如果 `x` 的值是 -2，那么在计算表达式 `(if (< x 0) (- x) (if (= x -2) 100 y))` 的过程中，`scheme_eval` 会对以下哪些项求值？ （假设 `<`、`-` 和 `=` 具有其默认值。）

-   `if`
-   `<`
-   `=`
-   `x`
-   `y`
-   `0`
-   `-2`
-   `100`
-   `-`
-   `(`
-   `)`

因为当 `x` 等于 -2 时，`(< x 0)` 的结果是 `#t`，所以会计算 `(- x)`，但不会计算 `(if (= x 1) 100 x)`。 对于每一个需要计算的表达式，它的运算符和操作数都会被计算。 `(< x 0)` 和 `(- x)` 都是调用表达式。
请在你们小组的 [Discord 频道文本聊天中](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X)列出你们的答案。例如，如果你们认为 `if < 0 )` 这几个会被评估，就写出来。助教会审查你们的答案并提供反馈。

### Q3：打印被求值的表达式

定义 `print_evals`，它接受一个 Scheme 表达式 `expr`，该表达式仅包含数字、`+`、`*` 和括号。 它会打印出在求值 `expr` 过程中所有被求值的表达式。打印顺序与 `scheme_eval` 的调用顺序一致。

**注意：** 在 `Pair` 实例上调用 `print` 将打印它所代表的 Scheme 表达式。

```
>>> print(Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil))))
(+ (* 3 4) 5)
```
```scheme
def print_evals(expr):
        """Print the expressions that are evaluated while evaluating expr.

        expr: a Scheme expression containing only (, ), +, *, and numbers.

        >>> nested_expr = Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil)))
        >>> print_evals(nested_expr)
        (+ (* 3 4) 5)
        +
        (* 3 4)
        *
        3
        4
        5
        >>> print_evals(Pair('*', Pair(6, Pair(7, Pair(nested_expr, Pair(8, nil))))))
        (* 6 7 (+ (* 3 4) 5) 8)
        *
        6
        7
        (+ (* 3 4) 5)
        +
        (* 3 4)
        *
        3
        4
        5
        8
        """
        if not isinstance(expr, Pair):
            "*** YOUR CODE HERE ***"
        else:
            "*** YOUR CODE HERE ***"
```
在 61A 代码中运行
:::tip[**提示**]
如果 `expr` 不是一个 pair，那么它是一个数字或 `'+'` 或 `'*'`。 在所有这些情况下，都应该打印 `expr` 以表明它将被评估。

如果 `expr` 是一个 pair，那么它是一个调用表达式。 打印它。 然后，评估运算符和操作数。 这些是列表 `expr` 中的元素。 因此，迭代 `expr`（使用 `while` 语句或 `expr.map(...)`）并在每个元素上调用 `print_evals`。
:::

## 填写出勤记录

请大家填写[考勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)，每周每人提交一次。

**注意：** 离开前请帮忙把房间里的家具放回原位。 谢谢！
