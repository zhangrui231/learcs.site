---
title: Lab 9 Scheme
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Lab 9: Scheme | CS 61A 2024春季课程实验

## Lab 9: Scheme

-   [lab09.zip](/resource/cs61a/lab/lab09.zip)

_截止时间：4月3日 星期三 晚上11:59_

## 起始文件

下载 [lab09.zip](/resource/cs61a/lab/lab09.zip)。在压缩包内，你将找到本次实验的起始文件，以及 [Ok](https://cs61a.org//lab/lab09/ok) 自动评分器的副本。

## Scheme 简介

61A Scheme 解释器已包含在每个 Scheme 作业中。要启动它，请在终端中键入：`python3 scheme`。要加载名为 `f.scm` 的 Scheme 文件，请键入：`python3 scheme -i f.scm`。要退出 Scheme 解释器，请键入 `(exit)`。

### Scheme 编辑器

所有 Scheme 作业都提供一个基于 Web 的编辑器，方便运行 ok 测试并可视化环境。在终端输入`python3 editor`后，编辑器将在浏览器窗口中打开，地址为`http://127.0.0.1:31415/`。要停止运行编辑器并返回命令行，请在启动编辑器的终端按下`Ctrl-C`键。

“运行”按钮会加载当前作业的 `.scm` 文件，并启动 Scheme 解释器，方便你尝试运行不同的 Scheme 表达式。

“测试”按钮会运行该作业的所有 ok 测试。对于失败的测试，可以点击“查看用例”，然后点击“调试”来逐步执行。

### 推荐的 VS Code 扩展

如果你选择使用 VS Code 作为文本编辑器（而非网页编辑器），建议安装 [vscode-scheme](https://marketplace.visualstudio.com/items?itemName=sjhuangx.vscode-scheme) 扩展，它可以高亮显示括号。

之前：

![](/img/cs61a/before.png)

之后：

![](/img/cs61a/after.png)

## 作业题目

## 入门指导视频

这些视频能帮助你更好地解决本次作业中的编程问题。

> 要观看这些视频，请使用你的 berkeley.edu 邮箱账号登录。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdwIF0I28zXMYAvd-BQ2nWY)

可以直接开始做题，遇到困难时再回头参考这些内容。

原子表达式（也称作_原子_）是指不包含子表达式的表达式，例如数字、布尔值和符号。

```
scm> 1234    ; 整数
1234
scm> 123.4   ; 实数
123.4
scm> #f      ; Scheme 中等价于 Python 中的 False
#f
```

Scheme _符号_ 相当于 Python 中的变量名。符号会被解析为当前环境中该符号所绑定的值。之所以称它们为符号而不是变量名，是因为它们可以包含 `+` 等算术符号。

```
scm> quotient      ; 绑定到内置过程的符号
#[quotient]
scm> +             ; 绑定到内置过程的符号
#[+]
```

在 Scheme 中，除了 `#f`（等价于 Python 中的 `False`）之外，_所有_其他值都被视为真值。

```
scm> #t
#t
scm> #f
#f
```

Scheme 使用波兰前缀表达式，运算符位于操作数之前。例如，要计算 `3 * (4 + 2)`，我们写成：

```
scm> (* 3 (+ 4 2))
18
```

与 Python 类似，计算函数调用表达式时：

1.  先计算运算符，其结果应该是一个过程（procedure）。
2.  从左到右计算操作数。
3.  将该过程应用于计算后的操作数。

以下是一些使用内置过程的示例：
```
scm> (+ 1 2)
3
scm> (- 10 (/ 6 2))
7
scm> (modulo 35 4)
3
scm> (even? (quotient 45 2))
#t
```

**Define（定义）:** `define` 形式用于将值赋给符号。 语法如下：

```
(define <符号> <表达式>)
```

```
scm> (define pi (+ 3 0.14))
pi
scm> pi
3.14
```

计算 `define` 表达式时：

1.  计算最终子表达式 (`<表达式>`)，此例中结果为 `3.14`。
2.  将该值绑定到符号 (`symbol`)，此例中为 `pi`。
3.  返回该符号。

`define` 形式还可以定义新的函数，详见“定义函数”部分。

**If 表达式:** `if` 特殊形式基于条件判断来计算两个表达式之一。

```
(if <条件> <if-true> <if-false>)
```

计算 `if` 特殊形式表达式的规则如下：

1.  计算 `<条件>`。
2.  如果 `<条件>` 的计算结果为真值（除了 `#f` 之外的任何值），则计算并返回 `<if-true>` 表达式的值。 否则，计算并返回 `<if-false>` 表达式的值。

例如，即使子表达式 `(/ 1 (- x 3))` 在计算时会出错，此表达式也不会出错，并且计算结果为 5。

```
scm> (define x 3)
x
scm> (if (> (- x 3) 0) (/ 1 (- x 3)) (+ x 2))
5
```

`<if-false>` 表达式是可选的。

```
scm> (if (= x 3) (print x))
3
```

让我们比较一下 Scheme `if` 表达式和 Python `if` 语句：

<Tabs>
  <TabItem value="scheme" label="Scheme">
    <pre>
      <code className="language-scheme">
        {`scm> (if (> x 3) 1 2)`}
      </code>
    </pre>
  </TabItem>
  <TabItem value="python" label="Python">
    <pre>
      <code className="language-python">
        {`>>> if x > 3:
...     1
... else:
...     2`}
      </code>
    </pre>
  </TabItem>
</Tabs>


Scheme `if` 表达式的计算结果为一个数字（1 或 2，取决于 `x`）。 Python 语句的计算结果没有任何内容，因此 1 和 2 无法使用或访问。

两者之间的另一个区别是，可以在 Python `if` 语句的代码块中添加更多代码行，而 Scheme `if` 表达式期望在 `<if-true>` 和 `<if-false>` 位置中只有一个表达式。

最后一个区别是，在 Scheme 中，您不能编写 `elif` 子句。

**Cond 表达式:** `cond` 特殊形式可以包含多个条件判断（类似于 Python 中的 if/elif）：

```
(cond
    (<p1> <e1>)
    (<p2> <e2>)
    ...
    (<pn> <en>)
    (else <else-expression>))
```

每个子句中的第一个表达式是一个条件。 子句中的第二个表达式是与其条件对应的返回表达式。 `else` 分支是可选的； 如果没有一个条件为真，则其 `<else-expression>` 是返回表达式。

计算规则如下：

1.  按顺序计算条件 `<p1>`、`<p2>`、...、`<pn>`，直到其中一个计算结果为真值（除了 `#f` 之外的任何值）。
2.  计算并返回与第一个真值条件对应的返回表达式的值。
3.  如果没有一个条件的计算结果为真值并且存在 `else` 分支，则计算并返回 `<else-expression>`。

例如，以下 `cond` 表达式返回 `x` 离 3 的倍数最近的值：

```
scm> (define x 5)
x
scm> (cond ((= (modulo x 3) 0) x)
            ((= (modulo x 3) 1) (- x 1))
            ((= (modulo x 3) 2) (+ x 1)))
6
```

**Lambda 表达式 (Lambdas):** `lambda` 特殊形式用于创建函数 (hánshù)。

```
(lambda (<param1> <param2> ...) <body>)
```

这个表达式将会创建并返回一个带有指定形参和函数主体的函数，类似于 Python 中的 `lambda` 表达式。

```
scm> (lambda (x y) (+ x y))        ; 返回一个 lambda 函数，但没有将其赋值给任何名称
(lambda (x y) (+ x y))
scm> ((lambda (x y) (+ x y)) 3 4)  ; 创建并调用一个单行的 lambda 函数
7
```

以下是等价的 Python 表达式：

```
>>> lambda x, y: x + y
<function <lambda> at ...>
>>> (lambda x, y: x + y)(3, 4)
7
```

`<body>` 可以包含多个表达式。Scheme 函数会返回函数体中最后一个表达式的计算结果。

`define` 形式可以创建一个函数并为其命名：

```
(define (<symbol> <param1> <param2> ...) <body>)
```

例如，以下是如何定义 `double` 函数：

```
scm> (define (double x) (* x 2))
double
scm> (double 3)
6
```

这是一个带有三个参数的示例：

```
scm> (define (add-then-mul x y z)
        (* (+ x y) z))
scm> (add-then-mul 3 4 5)
35
```

当对 `define` 表达式求值时，会发生以下步骤：

1.  创建一个带有给定参数和 `<body>` 的函数。
2.  将该函数绑定到当前帧中的 `<symbol>`。
3.  返回 `<symbol>`。

以下两个表达式是等价的：

```
scm> (define add (lambda (x y) (+ x y)))
add
scm> (define (add x y) (+ x y))
add
```

### Q1: 超过或未达到 (Over or Under)

定义一个函数 `over-or-under`，它接受一个数字 `num1` 和一个数字 `num2`，并返回以下内容：

-   如果 `num1` 小于 `num2`，则返回 -1
-   如果 `num1` 等于 `num2`，则返回 0
-   如果 `num1` 大于 `num2`，则返回 1

> 挑战：使用 `if` 和 `cond` 以两种不同的方式实现它！

```
(define (over-or-under num1 num2)
  'YOUR-CODE-HERE
)
```

使用 Ok 来测试你的代码：

```
python3 ok -q over_or_under
```

### Q2: 创建加法器 (Make Adder)

编写函数 `make-adder`，它接受一个初始数字 `num`，然后返回一个函数。 这个返回的函数接受一个数字 `inc`，并返回 `num + inc` 的结果。

> _提示 (tíshì)_：要返回一个函数，你可以返回一个 `lambda` 表达式或者 `define` 另一个嵌套函数。请记住，Scheme 会自动返回你函数中的最后一个子句。
>
> 你可以在 [61A scheme 规范](https://cs61a.org/articles/scheme-spec/#lambda) 中找到关于 `lambda` 表达式语法的文档！

```
(define (make-adder num)
  'YOUR-CODE-HERE
)
```

使用 Ok 来测试你的代码：

```
python3 ok -q make_adder
```

### Q3: 组合 (Compose)

编写函数 `composed`，它接受函数 `f` 和 `g` 并输出一个新函数。 这个新函数接受一个数字 `x` 并输出对 `x` 应用 `g` 之后再应用 `f` 的结果。
```
(define (composed f g)
  'YOUR-CODE-HERE
)
```

使用 Ok 运行你的代码测试:

```
python3 ok -q composed
```

### Q4: Repeat

编写一个名为 `repeat` 的过程, 它接受一个过程 `f` 和一个数字 `n`, 并返回一个新的过程。这个新过程接收一个数字 `x`, 并将 `f` 应用于 `x`，总共 `n` 次，并输出结果。例如：

```
scm> (define (square x) (* x x))
square
scm> ((repeat square 2) 5) ; (square (square 5))
625
scm> ((repeat square 3) 3) ; (square (square (square 3)))
6561
scm> ((repeat square 1) 7) ; (square 7)
49
```

> _提示:_ 你在前一个问题中编写的 `composed` 函数可能很有用。

```
(define (repeat f n)
  'YOUR-CODE-HERE
)
```

使用 Ok 运行你的代码测试:

```
python3 ok -q repeat
```

### Q5: Greatest Common Divisor

GCD 指的是两个正整数的最大公约数。

编写过程 `gcd`，它使用欧几里得算法计算数字 `a` 和 `b` 的 GCD，该算法基于以下原理：两个数的最大公约数是以下情况之一：

- 如果较小的值能整除较大的值，那么最大公约数就是较小的值；或者
- 较小的值和较大值除以较小值的余数，这两者的最大公约数。

换句话说，如果 `a` 大于 `b` 并且 `a` 不能被 `b` 整除，则

```
gcd(a, b) = gcd(b, a % b)
```

> 你可能会发现提供的过程 `min` 和 `max` 很有用。你也可以使用内置的 `modulo` 和 `zero?` 过程。
>
> ```
> scm> (modulo 10 4)
> 2
> scm> (zero? (- 3 3))
> #t
> scm> (zero? 3)
> #f
> ```

```
(define (max a b) (if (> a b) a b))
(define (min a b) (if (> a b) b a))
(define (gcd a b)
  'YOUR-CODE-HERE
)
```

使用 Ok 运行你的代码测试:

```
python3 ok -q gcd
```

## Check Your Score Locally

你可以通过运行以下命令，在本地查看本次作业中每个题目的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，请将作业提交到 Gradescope 以获得学分。

## Submit

请将你编辑过的所有文件**上传至 Gradescope 上对应的作业页面**，以提交本次作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**没有参加**大型实验课的学生都需要填写[出勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加实验，或者因为正当理由而错过。参加大型实验课的学生无需填写出勤表。
