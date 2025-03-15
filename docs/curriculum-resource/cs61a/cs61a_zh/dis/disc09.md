---
title: Discussion 9 Scheme, Scheme Lists
---

# 讨论 9 | CS 61A 2024 年春季学期

## 讨论 9：Scheme，Scheme 列表和引用 (Quotation)

-   [disc09.pdf](/resource/cs61a/disc/disc09.pdf)

**注意：** 我们仍然会使用 Pensieve，但是我们已经从 Pensieve 中移除了语音/视频聊天功能。请用 Discord 联系课程人员。Discord 更稳定，而且支持屏幕分享。随时在 Discord 的 `#discuss-queue` 频道 @discuss 提问，课程人员会加入你们的语音频道。

小组里派个人[加入 Discord]就行。当然，多几个人加入也行，一个就够了。

接下来，请切换到 Pensieve：

-   **大家：** 前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

进了 Pensieve 之后，就不用再回到这个页面了；Pensieve 上的内容和这里一样（而且功能更多）。如果 Pensieve 出了什么问题，请返回此页面并继续讨论。

有问题就去 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道求助。

**小贴士：** 你们可以在小组的 Discord 频道文本框里 @discuss 提问，课程人员会回复的。

## 开始之前

如果你们组只有一两个人，可以跟其他组一块儿讨论。

大家先自我介绍一下，然后看看谁最近摸过狗。欢迎分享狗的照片，猫片也行。

## Scheme

### Q1：完美平方

**定义：** 完全平方数就是 `k*k` (k 为整数)。

写一个函数 `fit(total, n)`，输入两个非负整数 `total` 和 `n`，判断是否存在 `n` 个不同的正完全平方数，加起来等于 `total`。

**注意：** 别用 Scheme 解释器验证答案！好好讨论！期末考试可没得用。
```
; 判断是否存在 n 个互不相同的完全平方数，加起来等于 total

    (define (fit total n)
        (define (f total n k)
            (if (and (= n 0) (= total 0))
                #t
            (if (< total (* k k))
                #f
            'YOUR-CODE-HERE
            )))
        (f total n 1))

    (expect (fit 10 2) #t)  ; 1*1 + 3*3
    (expect (fit 9 1)  #t)  ; 3*3
    (expect (fit 9 2)  #f)  ;
    (expect (fit 9 3)  #f)  ; 1*1 + 2*2 + 2*2 因为重复的 2*2 所以不算
    (expect (fit 25 1)  #t) ; 5*5
    (expect (fit 25 2)  #t) ; 3*3 + 4*4
```

在 61A 代码平台运行
:::tip[**提示：**]
提示：用 `(or _ _)` 组合两个递归调用：一个用 `k*k`，另一个不用。用 `k*k` 的那个，`total` 减 `k*k`，`n` 减 1；不用 `k*k` 的那个，`total` 和 `n` 保持不变。两种情况都要把 `k` 加 1。
:::

**展示时间：** 小组讨论一下，用一句话概括你们的代码是怎么保证这 n 个正完全平方数互不相同的。讨论好之后（或者需要帮助），在 `#discuss-queue` 频道 @discuss 提问，带上你们的组号，然后说 "It fits!"，课程人员会来听你们的解释，并给出反馈。

## Scheme 列表和引用

Scheme 列表就是链表，快速复习一下：
-   `nil` 和 `()` 是相同的：空列表。
-   `(cons first rest)` 用于构造链表，其中 `first` 是链表的第一个元素，`rest` 是剩余部分，通常也应该是一个列表。
-   `(car s)` 返回列表 `s` 的第一个元素。
-   `(cdr s)` 返回列表 `s` 的其余部分。
-   `(list ...)` 接受 n 个参数，返回一个包含这些参数、长度为 n 的列表。
-   `(append ...)` 接受 n 个列表作为参数，并返回一个包含这些列表所有元素的列表。
-   `(draw s)` 绘制列表 `s` 的链表结构。它只在 [code.cs61a.org/scheme](https://code.cs61a.org/scheme) 上有效。**现在尝试一下，例如 `(draw (cons 1 nil))`**。

引用表达式使其不被求值。例子：

-   `'four` 和 `(quote four)` 都求值为符号 `four`。
-   `'(2 3 4)` 和 `(quote (2 3 4))` 都求值为包含三个元素的列表：2、3 和 4。
-   `'(2 3 four)` 和 `(quote (2 3 four))` 求值为包含 2、3 和符号 `four` 的列表。

下面是 `list` 和引用之间的一个重要区别：

```scheme
scm> (list 2 (+ 3 4))
(2 7)
scm> `(2 (+ 3 4))
(2 (+ 3 4))
```

### Q2：嵌套列表

用三种不同的方式创建下面描述的嵌套列表：使用 `list`、`quote` 和 `cons`。

![链表](/img/cs61a/make-list.png)

首先，一起描述这个列表：“看起来有四个元素，第一个元素是……” 如果你遇到困难，请查看下面的提示。（但先尝试自己描述！）

:::tip[**提示**]
一个包含四个元素的列表，其第一个元素是包含 `a` 和 `b` 的列表，第二个元素是 `c`，第三个元素是 `d`，第四个元素是仅包含 `e` 的列表。
:::

接下来，使用对 `list` 的调用来构造此列表。 如果你运行这段代码，然后在 [code.cs61a.org](https://code.cs61a.org/scheme) 中执行 `(draw with-list)`，`draw` 过程会显示你所创建的列表结构。
```scheme
 (define with-list
        (list
            'YOUR-CODE-HERE
        )
    )
    ; (draw with-list)  ; 取消注释此行以绘制 with-list
```
在 61A 代码中运行
:::tip[**提示**]
每次调用 list 都会创建一个列表，并且此图中有三个不同的列表：一个包含 `a` 和 `b` 的列表：`(list 'a 'b)`，一个包含 `e` 的列表：`(list 'e)`，以及包含四个元素的整个列表：`(list _ 'c 'd _)`。尝试将这些表达式放在一起。
:::
现在，使用 `quote` 来构造此列表。
```scheme
(define with-quote
        '(
            'YOUR-CODE-HERE
        )

    )
    ; (draw with-quote)  ; 取消注释此行以绘制 with-quote
```
在 61A 代码中运行

:::tip[**提示**]
一个引用表达式就足够了，但它需要符合 Scheme 语法的链表结构。因此，你的任务是理解该列表在 Scheme 中的表示方式。

上面绘制的嵌套列表是一个包含四个元素的列表，它的首尾元素均为列表：`((a b) c d (e))`。引用这个表达式就能创建该列表。
:::
现在，使用 `cons` 来构造此列表。不要使用 `list`。你可以在答案中使用 `first`。

```scheme
 (define first
    (cons 'a (cons 'b nil)))
(define with-cons
        (cons
            'YOUR-CODE-HERE
        )
    )
    ; (draw with-cons)  ; 取消注释此行以绘制 with-cons
```
在 61A 代码中运行
:::tip[**提示**]
提供的 `first` 是结果的第一个元素，因此答案采用以下形式：

`first ____`

你可以用带引号的三个元素列表填充空白：

`'(___ ___ ___)` `c d (e)`

或使用对 `cons` 的嵌套调用：

`(cons ___ (cons ___ (cons ___ nil)))` `c d (e)`
:::

### Q3：配对
实现 `pair-up` 函数，该函数接收列表 `s` 作为输入，并返回一个列表的列表，其中包含 `s` 的所有元素，且顺序不变。结果列表中，每个子列表应包含 2 个元素，最后一个子列表最多可包含 3 个元素。

大家一起看看例子，确保都明白这个函数是做什么的。
```scheme
;;; 返回由 s 元素组成的列表对。
    ;;;
    ;;; scm> (pair-up '(3 4 5 6 7 8))
    ;;; ((3 4) (5 6) (7 8))
    ;;; scm> (pair-up '(3 4 5 6 7 8 9))
    ;;; ((3 4) (5 6) (7 8 9))
    (define (pair-up s)
        (if (<= (length s) 3)
            'YOUR-CODE-HERE
        ))

    (expect (pair-up '(3 4 5 6 7 8)) ((3 4) (5 6) (7 8)) )
    (expect (pair-up '(3 4 5 6 7 8 9)) ((3 4) (5 6) (7 8 9)) )
```
在 61A 代码平台运行
:::tip[**小贴士：**]
`pair-up` 接收一个数字列表，并返回一个列表的列表。因此，当 `(length s)` 小于等于 3 时，直接返回包含列表 `s` 的列表。例如，`(pair-up (list 2 3 4))` 应该返回 `((2 3 4))`。

使用 `(cons _ (pair-up _))` 构建结果，`cons` 的第一个参数是由 `(car s)` 和 `(car (cdr s))` 组成的双元素列表。而 `pair-up` 的参数则是去除前两个元素后的剩余部分。
:::
**讨论**：对于哪个最长的列表 `s`，`(pair-up (pair-up s))` 将返回一个只有一个元素的列表？（不要只是猜测和检查；讨论！）把你们的答案发到小组的文字聊天频道里。

## 登记参与

请大家填写 [出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每周每人提交一次）。

**重要提示：**离开前请帮忙把房间里的家具放回原位。谢谢！
