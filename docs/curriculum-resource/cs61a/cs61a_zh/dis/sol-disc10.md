---
title: Discussion 10 Solutions
---

# 讨论 10 | CS 61A 2024 春季

## 讨论 10：解释器

-   [disc10.pdf](/resource/cs61a/disc10.pdf)

**提醒：** 我们仍然会使用 Pensieve，但是我们已经从 Pensieve 中移除了语音/视频聊天功能。请使用 Discord 与课程工作人员进行语音聊天。它更可靠，并且包含屏幕共享功能。随时在 Discord 的 `#discuss-queue` 频道中向 `@discuss` 发送消息，课程工作人员会加入您小组的语音频道。

请小组里选一个人[加入 Discord](https://cs61a.org/articles/discord)。 也可以多个人加入，但一个人就够了。

现在请切换到 Pensieve：

-   **所有人**：前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

进入 Pensieve 后，你不需要返回此页面；Pensieve 包含了所有相同的内容（而且功能更多）。如果 Pensieve 因为某些原因无法使用，请返回此页面继续讨论。

如果您遇到问题，请在 [Discord](https://cs61a.org/articles/discord/) 上的 `#help` 频道中发帖。

**小贴士：** 你们可以在小组的 Discord 频道文本聊天里，用 `@discuss` 标签提问，课程工作人员会回复。

## 开始之前

如果您的团队只有 1 或 2 个人，您可以加入房间里的其他团队。

大家轮流说一下自己的名字，然后看看谁最近有离开湾区旅行的计划。

## 表示列表

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

### Q1：表示表达式

请写出以下每个 `Pair` 所代表的 Scheme 表达式，并使用 Scheme 语法。 也可以尝试画出链表图。 第一个例子已经完成了。

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

**讨论环节：** `(and (< 1 0) (/ 1 0))` 的计算结果是什么？ 在您的小组中讨论直到你们都同意，然后在您小组的 Discord 频道文本聊天里发布您的答案。

## 表达式求值
为了用 Project 4 的解释器求值表达式 `(+ (* 3 4) 5)`，`scheme_eval` 函数会按以下顺序被调用，参数是以下表达式：

1.  `(+ (* 3 4) 5)`
2.  `+`
3.  `(* 3 4)`
4.  `*`
5.  `3`
6.  `4`
7.  `5`

到了讨论时间：互相讨论一下，为什么 `*` 会被求值/评估，结果是什么。

`*` 被求值是因为它是 `(* 3 4)` 这个表达式中的运算符，而 `(* 3 4)` 又是 `(+ (* 3 4) 5)` 这个表达式中的操作数。

默认情况下，`*` 会被求值为一个函数，这个函数的功能是将它的参数相乘。但是，`*` 随时可能被重新定义，所以每次用到符号 `*` 的时候，都必须重新求值，才能找到它当前的值。

```
scm> (* 2 3)  ; 现在是乘法
6
scm> (define * +)
*
scm> (* 2 3)  ; 现在是加法
5
```

`if` 表达式也是 Scheme 中的一种列表，它通过 `Pair` 实例来表示。

例如，`(if (< x 0) (- x) x)` 表示为：

`Pair('if', Pair(Pair('<', Pair('x', Pair(0, nil))), Pair(Pair('-', Pair('x', nil)), Pair('x', nil))))`

![](/img/cs61a/JySFkth.png)

如果 `x` 被绑定为 2，且 `<` 和 `-` 都是默认值，那么为了求值这个表达式，`scheme_eval` 函数会按以下顺序被调用，参数是以下表达式：

1.  `(if (< x 0) (- x) x)`
2.  `(< x 0)`
3.  `<`
4.  `x`
5.  `0`
6.  `x`

到了展示时间：请想出一个简单的解释，说明为什么 `if` 和 `-` 没有被求值，即使它们都出现在 `(if (< x 0) (- x) x)` 这个表达式里。 一旦你们小组对答案达成一致，或者需要帮助，就在 `#discuss-queue` 频道里，用 `@discuss` 标签加上你们的小组编号，再发送消息 "If you please!"。 课程工作人员会加入你们的语音频道，听取你们的解释并给出反馈。

符号 `if` 没有被求值，因为它是一个特殊形式的开头，而不是函数调用表达式的一部分。 引入特殊形式的符号（`and`、`if`、`lambda` 等）永远不会被求值。

符号 `-` 没有被求值，包含它的子表达式 `(- x)` 也没有被求值，因为 `(< x 0)` 的求值结果是 `#f`。 如果你们还是不确定哪些部分会被求值，哪些不会，请咨询课程的助教。

### Q2：评估

如果 `x` 被绑定为 -2，那么在对表达式 `(if (< x 0) (- x) (if (= x -2) 100 y))` 调用 `scheme_eval` 函数时，以下哪些会被求值？ （假设 `<`、`-` 和 `=` 具有其默认值。）

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

当 `x` 被绑定为 -2 时，`(< x 0)` 的求值结果是 `#t`，所以 `(- x)` 会被求值，但 `(if (= x -2) 100 y)` 不会被求值。 对于每一个需要求值的函数调用表达式，它的运算符和操作数都会被求值。 `(< x 0)` 和 `(- x)` 都是函数调用表达式。

请在你们小组的 Discord 频道文本聊天里，列出你们的答案。 例如，如果您认为这四个被评估，请写 `if < 0 )`。 课程工作人员将审查你们的答案并提供反馈。

### Q3：打印评估的表达式
定义一个名为 `print_evals` 的函数，它接受一个 Scheme 表达式 `expr` 作为参数，该表达式仅包含数字、加号 `+`、乘号 `*` 和括号。它会按照表达式传递给 `scheme_eval` 的顺序，打印求值过程中所有被求值的表达式。

**提示：** 对 `Pair` 实例使用 `print` 函数会打印出它所代表的 Scheme 表达式。

```
>>> print(Pair('+', Pair(Pair('*', Pair(3, Pair(4, nil))), Pair(5, nil))))
(+ (* 3 4) 5)
```

**你的答案**

在 61A 代码中运行

**解决方案**

```
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
        print(expr)
    else:
        print(expr)
        while expr is not nil:
            print_evals(expr.first)
            expr = expr.rest

```

如果 `expr` 不是一个 `pair`，那么它就是一个数字、`'+'` 或 `'*'`。 在这些情况下，打印 `expr` 是为了表明它会被求值。

如果 `expr` 是一个 `pair`，则它是一个调用表达式。 打印该表达式后，操作符和操作数会被求值。 这些元素都包含在 `expr` 列表中，因此可以使用 `while` 语句或 `expr.map(...)` 遍历 `expr`，并在每个元素上调用 `print_evals` 函数。

## 填写出勤表

**温馨提示：** 请在离开前帮忙把房间里的家具放回原位。 谢谢！
