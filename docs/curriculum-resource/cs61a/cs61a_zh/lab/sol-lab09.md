---
title: Lab 9 Solutions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# CS 61A 2024 春季 Lab 9 答案

## Lab 9 答案

-   [lab09.zip](/resource/cs61a/lab09.zip)

## 答案文件

## Scheme 简介

每个Scheme作业都自带61A Scheme解释器。启动方法：在终端输入 `python3 scheme`。加载 `f.scm` 文件：输入 `python3 scheme -i f.scm`。要退出 Scheme 解释器，请键入 `(exit)`。

### Scheme 编辑器

所有Scheme作业都包含一个网页编辑器，方便运行ok测试和可视化环境。在终端输入 `python3 editor`，编辑器会在浏览器中打开 (地址：`http://127.0.0.1:31415/`)。停止编辑器并返回命令行：在启动编辑器的终端按 `Ctrl-C`。

“运行”按钮会加载当前作业的 `.scm` 文件，并打开Scheme解释器，方便你尝试运行不同的Scheme表达式。

“测试”按钮会运行所有ok测试。点击失败测试的“查看用例”，然后点击“调试”来逐步调试。

### 推荐的 VS Code 插件

如果你选择使用 VS Code 作为代码编辑器 (而不是网页编辑器)，请安装 [vscode-scheme](https://marketplace.visualstudio.com/items?itemName=sjhuangx.vscode-scheme) 插件，它可以高亮显示括号。

之前：

![](/img/cs61a/before.png)

之后：

![](/img/cs61a/after.png)

## 必做题目

## 入门指导视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 观看视频需要登录berkeley.edu邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdwIF0I28zXMYAvd-BQ2nWY)

如果需要复习Scheme，请参考下面的内容。可以直接开始做题，遇到问题再回来查阅。

原子表达式 (也叫_原子_) 是指没有子表达式的表达式，例如数字、布尔值和符号。

```
scm> 1234    ; 整数
1234
scm> 123.4   ; 实数
123.4
scm> #f      ; Scheme 中相当于 Python 中的 False
#f
```

Scheme中的_符号_相当于Python中的变量名。符号的值是它在当前环境中绑定的值。(之所以称为符号而不是变量名，是因为它们可以包含`+`等算术符号)。

```
scm> quotient      ; 绑定到内置过程的符号
#[quotient]
scm> +             ; 绑定到内置过程的符号
#[+]
```

在Scheme中，除了`#f` (相当于Python中的`False`) 以外，_所有_值都为真 (与Python不同，Python中还有其他为假的值，例如`0`)。

```
scm> #t
#t
scm> #f
#f
```

Scheme 使用前缀表达式 (也称波兰表示法)，运算符位于操作数之前。例如，计算 `3 * (4 + 2)`，可以写成：

```
scm> (* 3 (+ 4 2))
18
```

与Python类似，计算函数调用时：

1.  先计算运算符，结果应该是一个函数。
2.  然后从左到右计算操作数。
3.  将函数应用于计算后的操作数。

以下是一些使用内置函数的示例：

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

`define` 用于给符号赋值，语法如下：

```
(define <symbol> <expression>)

scm> (define pi (+ 3 0.14))
pi
scm> pi
3.14
```

要对 `define` 表达式求值，需要：

1.  求最后一个子表达式 (`<expression>`) 的值，本例中结果为 `3.14`。
2.  将该值赋给符号 (`symbol`)，这里是 `pi`。
3.  返回该符号。

`define` 形式也可以定义新的过程（函数），详见“定义函数”部分。

**If 表达式：** `if` 这种特殊形式会根据一个判断条件来决定执行两个表达式中的哪一个。

```
(if <predicate> <if-true> <if-false>)
```

对 `if` 这种特殊形式的表达式进行求值的规则如下：

1.  计算 `<predicate>` 的值。
2.  如果 `<predicate>` 的值为真（除了 `#f` 之外的任何值），那么就计算并返回 `<if-true>` 表达式的值；否则，计算并返回 `<if-false>` 表达式的值。

例如，即使子表达式 `(/ 1 (- x 3))` 在计算时会导致错误，整个表达式依然可以顺利执行，结果为 5。

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

我们来比较一下 Scheme 的 `if` 表达式和 Python 的 `if` 语句：

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


Scheme 的 `if` 表达式求值为一个数字（1 或 2，取决于 `x`）。 Python 语句本身没有返回值，因此 1 和 2 的值无法被使用或访问。

另一个区别是，Python 的 `if` 语句块中可以包含多行代码，而 Scheme 的 `if` 表达式则要求 `<if-true>` 和 `<if-false>` 的位置都只能是一个表达式。

最后一个区别是，在 Scheme 中，您不能编写 `elif` 子句。

**Cond 表达式：** `cond` 这种特殊形式可以包含多个判断条件（类似于 Python 中的 if/elif 结构）：

```
(cond
    (<p1> <e1>)
    (<p2> <e2>)
    ...
    (<pn> <en>)
    (else <else-expression>))
```

每个子句的第一个表达式是一个判断条件。 子句中的第二个表达式是与该判断条件相对应的返回值。 如果所有判断条件都不成立，则 `<else-expression>` 的值将作为返回值，`else` 子句是可选的。

求值规则如下：

1.  依次计算判断条件 `<p1>`、`<p2>`、...、`<pn>` 的值，直到找到一个值为真（除了 `#f` 之外的任何值）的条件。
2.  计算并返回与第一个值为真的判断条件相对应的返回值。
3.  如果所有判断条件的值都为假，且存在 `else` 子句，则计算并返回 `<else-expression>` 的值。

例如，此 `cond` 表达式返回最接近 `x` 的 3 的倍数：

```
scm> (define x 5)
x
scm> (cond ((= (modulo x 3) 0) x)
            ((= (modulo x 3) 1) (- x 1))
            ((= (modulo x 3) 2) (+ x 1)))
6
```

**Lambdas：** `lambda` 这种特殊形式用于创建一个匿名函数。

```
(lambda (<param1> <param2> ...) <body>)
```

该表达式会创建一个具有指定参数和函数体的匿名函数，其作用类似于 Python 中的 `lambda` 表达式。
``````
scm> (lambda (x y) (+ x y))        ; 返回一个 lambda 过程，但未将其赋值给任何变量
(lambda (x y) (+ x y))
scm> ((lambda (x y) (+ x y)) 3 4)  ; 在一行代码中创建并调用一个 lambda 过程
7
```

以下是 Python 中等价的表达式：

```
>>> lambda x, y: x + y
<function <lambda> at ...>
>>> (lambda x, y: x + y)(3, 4)
7
```

`<body>` 可以包含多个表达式。Scheme 过程会返回其函数体中最后一个表达式的值。

`define` 形式可以创建一个过程并为其指定一个名称：

```
(define (<symbol> <param1> <param2> ...) <body>)
```

例如，以下是我们如何定义 `double` 过程：

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

当对 `define` 表达式求值时，会发生以下情况：

1.  使用给定的参数和 `<body>` 创建一个过程。
2.  将该过程绑定到当前环境帧中的 `<symbol>`。
3.  返回 `<symbol>`。

以下两个表达式是等价的：

```
scm> (define add (lambda (x y) (+ x y)))
add
scm> (define (add x y) (+ x y))
add
```

### Q1: Over or Under (大小判断)

定义一个名为 `over-or-under` 的过程，该过程接受两个数字 `num1` 和 `num2` 作为参数，并返回以下结果：

-   如果 `num1` 小于 `num2`，则返回 -1
-   如果 `num1` 等于 `num2`，则返回 0
-   如果 `num1` 大于 `num2`，则返回 1

> 挑战：使用 `if` 和 `cond` 以 2 种不同的方式实现此功能！

```
(define (over-or-under num1 num2)
  (cond
    ((< num1 num2) -1)
    ((= num1 num2) 0)
    (else 1))
)
```

使用 Ok 测试您的代码：

```
python3 ok -q over_or_under
```

### Q2: Make Adder (创建加法器)

创建一个名为 `make-adder` 的过程，它接受一个初始数字 `num`，然后返回一个过程。 这个返回的过程接受一个数字 `inc` 并返回 `num + inc` 的结果。

> _提示_：要返回一个过程，您可以返回一个 `lambda` 表达式或 `define` 另一个嵌套过程。 请记住，Scheme 将自动返回您过程中的最后一个子句。
> 
> 您可以在 [61A scheme 规范！](https://cs61a.org/articles/scheme-spec/#lambda) 中找到有关 `lambda` 表达式语法的文档！

```
(define (make-adder num)
  (lambda (inc) (+ inc num))
)
```

使用 Ok 测试您的代码：

```
python3 ok -q make_adder
```

### Q3: Compose (组合)

编写一个名为 `composed` 的过程，该过程接受两个过程 `f` 和 `g` 作为参数，并返回一个新的过程。这个新的过程接受一个数字 `x` 作为参数，并返回将 `g` 作用于 `x` 的结果再作用于 `f` 的结果。

```
(define (composed f g)
  (lambda (x) (f (g x))))
```

使用 Ok 测试您的代码：

```
python3 ok -q composed
```

### Q4: Repeat (重复)

编写一个名为 `repeat` 的过程，该过程接受一个过程 `f` 和一个数字 `n` 作为参数，并返回一个新的过程。这个新的过程接受一个数字 `x` 作为参数，并返回将 `f` 作用于 `x`，总共作用 `n` 次的结果。例如：
``````
scm> (define (square x) (* x x))
square
scm> ((repeat square 2) 5) ; (square (square 5))
625
scm> ((repeat square 3) 3) ; (square (square (square 3)))
6561
scm> ((repeat square 1) 7) ; (square 7)
49
```

> 提示：你在前一个问题中编写的 `composed` 函数可能很有用。

```
(define (repeat f n)
; 注意：这个函数依赖于 `composed` 函数的正确实现
  (if (< n 1)
    (lambda (x) x)
    (composed f (repeat f (- n 1)))))
```

使用 Ok 来测试你的代码：

```
python3 ok -q repeat
```

### Q5：最大公约数

最大公约数 (GCD) 是两个正整数共有的最大因数。

定义函数 `gcd`，它使用欧几里得算法计算数字 `a` 和 `b` 的 GCD，该算法基于以下原理：两个数的最大公约数是以下情况之一：

- 如果较小的数能整除较大的数，那么最大公约数就是较小的数；或者
- 较小的数和较大数除以较小数的余数的最大公约数。

换句话说，如果 `a` 大于 `b` 并且 `a` 不能被 `b` 整除，则

```
gcd(a, b) = gcd(b, a % b)
```

> 你可能会发现提供的 `min` 和 `max` 函数很有用。 你也可以使用内置的 `modulo` 和 `zero?` 函数。
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
  (cond ((zero? a) b)
        ((zero? b) a)
        ((= (modulo (max a b) (min a b)) 0) (min a b))
        (else (gcd (min a b) (modulo (max a b) (min a b))))))
```

使用 Ok 来测试你的代码：

```
python3 ok -q gcd
```

## 在本地检查你的分数

你可以通过运行以下命令来本地检查你在本次作业中每个题目的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对你的得分感到满意之后，请将作业提交到 Gradescope 以获得学分。

## 提交

请将你编辑过的文件上传到 Gradescope 上对应的作业以提交本次作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验班的学生都必须填写此[出勤表](https://go.cs61a.org/lab-att)。请每周提交此表格，无论你是否参加了实验课，或因故缺席。大型实验班的学生不需要填写出勤表。
```