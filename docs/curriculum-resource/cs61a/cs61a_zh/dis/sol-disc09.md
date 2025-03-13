---
title: Discussion 9 Solutions
---

# 讨论 9 | CS 61A 2024 年春季学期

## 讨论 9：Scheme 列表与引用

-   [disc09.pdf](/resource/cs61a/disc09.pdf)

**温馨提示：** 我们仍然使用 Pensieve，但 Pensieve 已移除语音/视频聊天功能。建议使用 Discord 与课程工作人员进行语音聊天。它更可靠，还支持屏幕共享。随时在 Discord 的 `#discuss-queue` 频道 @discuss 提问，课程工作人员会加入您小组的语音频道。

小组中选一个人[加入 Discord](https://cs61a.org/articles/discord)即可，多人加入也可以。

请切换到 Pensieve：

-   **大家**：前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件地址登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

进入 Pensieve 后，就不用回到这个页面了；Pensieve 包含了所有相同的内容（而且功能更多）。如果 Pensieve 无法使用，请返回此页面继续讨论。

如果遇到问题，请在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道求助。

**小贴士：** 你们可以在小组的 Discord 频道文本聊天中 @discuss 提问，课程工作人员会及时回复。

## 开始吧

如果你们组只有一两个人，可以加入房间里的其他小组。

大家轮流介绍一下自己，然后看看谁最近摸过狗。（欢迎分享狗的照片，猫的照片也行！）

## Scheme

### Q1：完美平方数匹配

**定义：** 完全平方数是指可以表示成 k*k 形式的整数，其中 k 为整数。

实现 `fit`，它接受非负整数 `total` 和 `n`。它返回是否存在 `n` 个**不同**的正完全平方数，它们的和为 `total`。

**注意：** 不要依赖 Scheme 解释器来验证结果，多进行讨论！期末考试时没有解释器可用。

**你的解答**

在 61A 代码中运行

**参考答案**

```
;;; 判断是否存在 n 个互不相同且总和为 total 的完全平方数
(define (fit total n)
    (define (f total n k)
        (if (and (= n 0) (= total 0))
            #t
        (if (< total (* k k))
            #f
        (or (f total n (+ k 1)) (f (- total (* k k)) (- n 1) (+ k 1)))
        )))
    (f total n 1))

(expect (fit 10 2) #t)  ; 1*1 + 3*3
(expect (fit 9 1)  #t)  ; 3*3
(expect (fit 9 2)  #f)  ;
(expect (fit 9 3)  #f)  ; 1*1 + 2*2 + 2*2 不算，因为有重复的 2*2
(expect (fit 25 1)  #t) ; 5*5
(expect (fit 25 2)  #t) ; 3*3 + 4*4
```

使用 `(or _ _)` 组合两个递归调用：一个包含 `k*k`，另一个不包含。包含 `k*k` 的调用应从 `total` 减去 `k*k`，并从 `n` 减 1；另一个调用则保持 `total` 和 `n` 不变。两种情况下，`k` 都要加 1。

**展示环节：** 小组讨论：用一句话概括你们的代码如何确保所有 `n` 个正完全平方数互不相同（没有重复）。达成一致后（或需要帮助时），在 `#discuss-queue` 频道 @discuss，附上小组号码和消息“It fits!”，课程工作人员会加入语音频道听取你们的解释并给出反馈。

## Scheme 列表和引用

Scheme 列表是链表。快速复习：
-   `nil` 和 `()` 是一样的：空列表。
-   `(cons first rest)` 构造一个链表，`first` 是链表的第一个元素，`rest` 是链表中剩余的部分，`rest` 应该始终是一个列表。
-   `(car s)` 返回列表 `s` 的第一个元素。
-   `(cdr s)` 返回列表 `s` 的其余部分。
-   `(list ...)` 接受 n 个参数，并返回一个长度为 n 的列表，这些参数作为元素。
-   `(append ...)` 接受 n 个列表作为参数，并返回一个包含所有这些列表的元素的列表。
-   `(draw s)` 绘制列表 `s` 的链表结构。它只在 [code.cs61a.org/scheme](https://code.cs61a.org/scheme) 上有效。**现在尝试一下，例如 `(draw (cons 1 nil))`**。

引用一个表达式会使其不被计算。例子：

-   `'four` 和 `(quote four)` 都计算结果为符号 `four`。
-   `'(2 3 4)` 和 `(quote (2 3 4))` 都计算结果为包含三个元素的列表：2、3 和 4。
-   `'(2 3 four)` 和 `(quote (2 3 four))` 都计算结果为包含 2、3 和符号 `four` 的列表。

这是 `list` 和引用之间的一个重要区别：

```
scm> (list 2 (+ 3 4))
(2 7)
scm> `(2 (+ 3 4))
(2 (+ 3 4))
```

### Q2：嵌套列表

用三种不同的方式创建下面描述的嵌套列表：使用 `list`、`quote` 和 `cons`。

![链表](/img/cs61a/make-list.png)

首先，一起描述这个列表：“看起来有四个元素，第一个元素是……” 如果你卡住了，看看下面的提示。（但先尝试自己描述！）

这个列表包含四个元素：第一个元素是包含 `a` 和 `b` 的列表，第二个元素是 `c`，第三个元素是 `d`，第四个元素是只包含 `e` 的列表。

接下来，使用对 `list` 的调用来构造这个列表。 如果你运行这段代码，然后在 [code.cs61a.org](https://code.cs61a.org/scheme) 中运行 `(draw with-list)`，`draw` 过程将绘制你构建的内容。

**你的答案**

在 61A 代码中运行

**解决方案**

```
(define with-list
    (list
        (list 'a 'b) 'c 'd (list 'e)
    )
)
; (draw with-list)  ; 去掉此行注释以绘制 with-list
```

每次调用 list 都会创建一个列表，并且此图中存在三个不同的列表：一个包含 `a` 和 `b` 的列表：`(list 'a 'b)`，一个包含 `e` 的列表：`(list 'e)`，以及包含四个元素的整个列表：`(list _ 'c 'd _)`。 尝试将这些表达式放在一起。

现在，使用 `quote` 来构造这个列表。

**你的答案**

在 61A 代码中运行

**解决方案**

```
(define with-quote
    '(
        (a b) c d (e)
    )

)
; (draw with-quote)  ; 去掉此行注释以绘制 with-list
```

一个带引号的表达式就足够了，但它需要使用 Scheme 符号匹配链表的结构。 因此，你的任务是弄清楚这个列表在 Scheme 中应该如何用引号 (quote) 来表示。

上面绘制的嵌套列表是一个包含四个元素的列表，其第一个和最后一个元素都是列表：`((a b) c d (e))`。 引用该表达式将创建该列表。

现在，使用 `cons` 来构造这个列表。 不要使用 `list`。 你可以在你的答案中使用 `first`。

**你的答案**

在 61A 代码中运行

**解决方案**

```
(define first
   (cons 'a (cons 'b nil)))

(define with-cons
    (cons
        first (cons 'c (cons 'd (cons (cons 'e nil) nil)))
    )
)
; (draw with-cons)  ; 去掉此行注释以绘制 with-list
```

提供的 `first` 是结果的第一个元素，因此答案采用以下形式：

`first ____`

你可以用带引号的三个元素列表填充空白：

`'(___ ___ ___)` `c d (e)`

或者使用嵌套的 `cons` 调用：

`(cons ___ (cons ___ (cons ___ nil)))` `c d (e)`

### Q3：分组
实现 `pair-up` 函数，该函数接收列表 `s` 作为输入，并返回一个列表的列表，其中包含了 `s` 的所有元素，且顺序保持不变。结果中，除了最后一个列表可能包含最多 3 个元素外，其余列表都应包含 2 个元素。

请一起查看示例，以确保每个人都理解此函数的作用。

**你的解答**

在 61A 代码中运行

**参考答案**

```
;;; 返回一个包含 `s` 中元素对的列表。
;;;
;;; scm> (pair-up '(3 4 5 6 7 8))
;;; ((3 4) (5 6) (7 8))
;;; scm> (pair-up '(3 4 5 6 7 8 9))
;;; ((3 4) (5 6) (7 8 9))
(define (pair-up s)
    (if (<= (length s) 3)
        (list s)
        (cons (list (car s) (car (cdr s))) (pair-up (cdr (cdr s))))
    ))

(expect (pair-up '(3 4 5 6 7 8)) ((3 4) (5 6) (7 8)) )
(expect (pair-up '(3 4 5 6 7 8 9)) ((3 4) (5 6) (7 8 9)) )
```

`pair-up` 接收一个列表（数字列表），并返回一个列表的列表。因此，当 `(length s)` 小于等于 3 时，函数会返回一个包含 `s` 自身的列表。例如，`(pair-up (list 2 3 4))` 应该返回 `((2 3 4))`。

使用 `(cons _ (pair-up _))` 来构建结果，其中 `cons` 的第一个参数是一个包含两个元素的列表，这两个元素分别是 `(car s)` 和 `(car (cdr s))`。而传递给 `pair-up` 的参数则是 `s` 中剩余的元素（即去除前两个元素后的部分）。

**思考题**：对于哪个最长的列表 `s`，`(pair-up (pair-up s))` 将返回一个仅包含一个元素的列表？（不要只是猜测和检查；请讨论！）请在你们小组的文本聊天频道中分享你们的答案。

## 填写出勤表

请各位填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次即可）。

**重要提示：** 离开前，请大家帮忙把房间里的家具恢复到原来的位置。谢谢合作！
