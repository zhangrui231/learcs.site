---
title: Homework 9 Solutions
---

# CS 61A 2024春季 作业9：答案

## Homework 9 答案

-   [hw09.zip](/resource/cs61a/hw09.zip)

## 解答

你可以在 [hw09.scm](https://cs61a.org//hw/sol-hw09/hw09.scm) 中找到答案。

每个Scheme作业都自带61A Scheme解释器. 启动方法：在终端输入 `python3 scheme`。 加载 `f.scm` 文件：在终端输入 `python3 scheme -i f.scm`。 要退出 Scheme 解释器，请键入 `(exit)`。

### Scheme 编辑器

所有Scheme作业都提供一个网页编辑器，方便运行ok测试和可视化代码环境. 在终端输入 `python3 editor`，编辑器将在浏览器中打开 (地址：`http://127.0.0.1:31415/`). 停止编辑器：在运行编辑器的终端中按 `Ctrl-C`。

`Run` 按钮会加载当前作业的 `.scm` 文件，并启动Scheme解释器，方便你尝试运行不同的Scheme表达式.

`Test` 按钮运行所有ok测试。如果测试失败，点击 `View Case` 查看详情，再点击 `Debug` 逐步调试.

### 推荐的 VS Code 扩展

如果你选择使用 VS Code 作为代码编辑器 (而非网页编辑器)，建议安装 [vscode-scheme](https://marketplace.visualstudio.com/items?itemName=sjhuangx.vscode-scheme) 扩展，它可以高亮显示括号.

之前:

![](/img/cs61a/before.png)

之后:

![](/img/cs61a/after.png)

此外，61a-bot VS Code 扩展 ( [安装说明](https://cs61a.org/articles/61a-bot) ) 也可用于Scheme作业。它与 `ok` 命令集成.

## 作业题目

## 入门指导视频

这些视频能帮助你解决本次作业中的编程问题.

> 观看视频需登录berkeley.edu邮箱.

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcRCa7WhQVKh5s5ZLfGV9hc)

## 程序即数据：Chef Curry

回顾一下，柯里化是将一个接受多个参数的函数转化为一系列接受单一参数的高阶函数. 接下来的问题将引导你编写函数，利用“程序即数据”的思想，自动柯里化任意长度的函数.

### Q1: Cooking Curry

请实现 `curry-cook` 函数，它接受一个Scheme列表 `formals` 和一个带引号的表达式 `body` 作为输入. `curry-cook` 函数应生成一个列表形式的程序，该程序是 lambda 函数的柯里化版本. 生成的柯里化 lambda 函数，其形式参数应与 `formals` 相同，函数体应与 `body` 相同. 你可以假设所有传入的函数都至少有一个形式参数 (`formals` > 0)，否则无法进行柯里化.
例如，如果你想柯里化函数 `(lambda (x y) (+ x y))`，你应该将 `formals` 设置为 `'(x y)`，将 `body` 设置为 `'(+ x y)`，并调用 `curry-cook`：`(curry-cook '(x y) '(+ x y))`。

```
scm> (curry-cook '(a) 'a)
(lambda (a) a)
scm> (curry-cook '(x y) '(+ x y))
(lambda (x) (lambda (y) (+ x y)))
```

```
(define (curry-cook formals body)
    (if (null? formals)
        body
        `(lambda (,(car formals)) ,(curry-cook (cdr formals) body))
    ))
```

使用 Ok 来测试你的代码：

```
python3 ok -q curry-cook
```

### Q2: Consuming Curry (柯里化函数的应用)

实现函数 `curry-consume`，它接受一个柯里化的 lambda 函数 `curry`，并将该函数应用于一个参数列表 `args`。你可以做出以下假设：

1. 如果 `curry` 是一个 n 阶柯里化函数，那么 `args` 中最多有 `n` 个参数。
2. **如果没有参数**（`args` 是一个空列表），那么你可以假设 `curry` 已经完全柯里化。此时，`curry` 的值就是 lambda 函数的返回值。返回它。

注意，`args` 的数量可能小于 lambda 函数 `curry` 的 `formals` 数量。如果提供的参数较少，`curry-consume` 应该返回一个*部分柯里化*的 lambda 函数。这个函数是 `curry` 应用了部分 `args` 后的结果。请参阅下面的 doctest 以获取一些示例。

```
scm> (define three-curry (lambda (x) (lambda (y) (lambda (z) (+ x (* y z)))) ))
three-curry
scm> (define eat-two (curry-consume three-curry '(1 2))) ; 只传入两个参数，返回值应该是一个单参数 lambda 函数！
eat-two
scm> eat-two
(lambda (z) (+ x (* y z)))
scm> (eat-two 3) ; 传入最后一个参数； 1 + (2 * 3)
7
scm> (curry-consume three-curry '(1 2 3)) ; 一次性传入所有三个参数
7

(define (curry-consume curry args)
    (if (null? args)
        curry
        (curry-consume (curry (car args)) (cdr args))
    ))
```

使用 Ok 来测试你的代码：

```
python3 ok -q curry-consume
```

## 宏 (指令)

### Q3: Switch to Cond
`switch` 是一个宏，它接受一个表达式 `expr` 和一个由配对组成的列表 `options`，其中每个配对的第一个元素是一个值，第二个元素是一个表达式。 `switch` 会计算 `options` 列表中，与 `expr` 的计算结果相匹配的那个配对中的表达式。

```
scm> (switch (+ 1 1) ((1 (print 'a))
                      (2 (print 'b)) ; (print 'b) 被执行，因为 (+ 1 1) 的结果是 2
                      (3 (print 'c))))
b
```

`switch` 在其实现中使用了另一个名为 `switch-to-cond` 的过程：

```
scm> (define-macro (switch expr options)
                   (switch-to-cond (list 'switch expr options))
     )
```

你的任务是定义 `switch-to-cond` 这个过程 (注意它不是宏)，它接受一个带引号的 `switch` 表达式，并将其转换为行为相同的 `cond` 表达式。 例子如下:

```
scm> (switch-to-cond `(switch (+ 1 1) ((1 2) (2 4) (3 6))))
(cond ((equal? (+ 1 1) 1) 2) ((equal? (+ 1 1) 2) 4) ((equal? (+ 1 1) 3) 6))

(define-macro (switch expr options) (switch-to-cond (list 'switch expr options)))

(define (switch-to-cond switch-expr)
  (cons 'cond    (map
      (lambda (option) (cons `(equal? ,(car (cdr switch-expr)) ,(car option)) (cdr option)))	  (car (cdr (cdr switch-expr))))))
```

使用 Ok 来测试你的代码：

```
python3 ok -q switch-to-cond
```

## 在本地检查你的分数

你可以通过运行以下命令，在本地查看你在本次作业中每个问题的得分

```
python3 ok --score
```

**这不会提交作业！** 当你对你的得分感到满意时，就可以把作业提交到 Gradescope 来获取学分了。

## 提交

请将你编辑过的文件上传**到 Gradescope 上对应的作业**来提交本次作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

另外，所有**没有参加**大型实验课的学生都需要填写这份[考勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。 大型实验课的学生不需要填写考勤表。

## 考试练习

本次作业还包含了一些往年的考题，供你练习。 这些问题没有提交组件； 如果你想进行一些练习，请随意尝试！

宏
1. 2019年秋期末考试 Q9：[宏镜头](https://cs61a.org/exam/fa19/final/61a-fa19-final.pdf#page=10)
2. 2019年夏期末考试 Q10c：[切片](https://cs61a.org/exam/su19/final/61a-su19-final.pdf#page=10)
3. 2019年春期末考试 Q8：[宏](https://cs61a.org/exam/sp19/final/61a-sp19-final.pdf#page=8)
