---
title: Homework 8 Solutions
---

# 作业 8 解答 | CS 61A 2024 春季

## 作业 8 解答

-   [hw08.zip](/resource/cs61a/hw08.zip)

## 解答文件

解答位于 [hw08.scm](https://cs61a.org//hw/sol-hw08/hw08.scm)。

每个 Scheme 作业都自带 61A Scheme 解释器。要启动它，请在终端中运行 `python3 scheme` 命令。要加载名为 `f.scm` 的 Scheme 文件，请输入 `python3 scheme -i f.scm` 命令。要退出 Scheme 解释器，请输入 `(exit)`。

### Scheme 编辑器

所有 Scheme 作业都提供一个基于 Web 的编辑器，方便运行 ok 测试并可视化程序运行环境。在终端中输入 `python3 editor`，编辑器将在浏览器窗口中打开（位于 `http://127.0.0.1:31415/`）。要停止运行编辑器并返回到命令行，请在启动编辑器的终端中输入 `Ctrl-C` 命令。

“运行”按钮会加载当前作业的 `.scm` 文件，并启动 Scheme 解释器，方便你尝试运行不同的 Scheme 表达式。

“测试”按钮会运行所有 ok 测试。对于失败的测试，可以点击“查看用例”，再点击“调试”来逐步执行代码。

### 推荐的 VS Code 扩展

如果你选择使用 VS Code 作为文本编辑器（而非网页编辑器），建议安装 [vscode-scheme](https://marketplace.visualstudio.com/items?itemName=sjhuangx.vscode-scheme) 扩展，它能高亮显示括号。

之前：

![](/img/cs61a/before.png)

之后：

![](/img/cs61a/after.png)

此外，61a-bot ([安装说明](https://cs61a.org/articles/61a-bot)) VS Code 扩展也能用于 Scheme 作业。该 Bot 已经集成到了 `ok` 中。

## 必做题

## 必做题

## 入门指导视频

这些视频能帮你更好地解决本次作业中的编程问题。

> 观看视频需要登录你的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZeOPmZFG6vuUl71MdfpmBLe)

### Q1: 递增

实现一个名为 `ascending?` 的函数，它接受一个数字列表 `s` 作为参数。如果列表中的数字按非降序排列，则返回 `True`，否则返回 `False`。

如果列表中每个元素都大于等于它之前的元素，则该列表为非降序排列。例如...

-   `(1 2 3 3 4)` 是非降序的。
-   `(1 2 3 3 2)` 不是。

> **提示**：内置的 `null?` 函数用于判断参数是否为 `nil`。

> **注意**：`ascending?` 中的问号只是函数名称的一部分，在 Scheme 语法方面没有特殊含义。在 Scheme 中，通常以问号结尾命名返回布尔值的函数。

```
(define (ascending? s)
  (if (or (null? s) (null? (cdr s)))
      #t
      (and (<= (car s) (car (cdr s))) (ascending? (cdr s)))))
```

这个问题和标准的 Python 链表问题很相似。
- 基本情况：当列表 `s` 中没有元素或只有一个元素时，它就被认为是升序的。
- 对于递归的情况，我们需要检查列表中的第二个元素是否大于或等于第一个元素，并且剩余的子列表是否也满足升序排列。

你可以使用 Ok 解锁并测试你的代码：

```
python3 ok -q ascending -u
python3 ok -q ascending
```

### Q2: My Filter

编写一个名为 `my-filter` 的函数，它接受一个谓词 `pred` 和一个列表 `s`，并返回一个新列表，其中仅包含满足谓词的列表元素。输出应包含与原始列表中出现的顺序相同的元素。

**注意：** 请确保你不仅仅是在调用 Scheme 中的内置 `filter` 函数 - 我们要求你重新实现它！

```
(define (my-filter pred s)
  (cond ((null? s) '())
        ((pred (car s)) (cons (car s) (my-filter pred (cdr s))))
        (else (my-filter pred (cdr s))))
)
```

[YouTube 链接](https://youtu.be/UJ37SCaM3cQ?t=39m39s)

解决这个问题的方法是对列表中的每个元素调用 `pred` 函数。我们可以通过 `car` 来访问列表中的元素。

- 如果某个元素满足 `pred` 函数的条件，则它会“通过”过滤器，并被包含在新列表中。
- 如果该元素不满足条件，我们则直接返回递归调用的结果，因为这个元素不应该被包含在新列表中。

你可以使用 Ok 解锁并测试你的代码：

```
python3 ok -q filter -u
python3 ok -q filter
```

### Q3: Interleave

实现函数 `interleave`，它接受两个列表 `lst1` 和 `lst2` 作为参数。`interleave` 应该返回一个新列表，该列表交错两个列表的元素。（换句话说，结果列表应该包含在 `lst1` 和 `lst2` 之间交替的元素，从 `lst1` 开始）。

如果 `interleave` 的一个输入列表比另一个短，那么 `interleave` 应该交替来自两个列表的元素，直到一个列表没有更多元素，然后将较长列表中剩余的元素添加到新列表的末尾。

```
(define (interleave lst1 lst2)
  (if (or (null? lst1) (null? lst2))
      (append lst1 lst2)
      (cons (car lst1)
            (cons (car lst2)
                  (interleave (cdr lst1) (cdr lst2)))))
)
; 另一种解决方案
(define (interleave lst1 lst2) 
  (cond 
    ((null? lst1) lst2)
    ((null? lst2) lst1)
    (else (cons (car lst1) (interleave lst2 (cdr lst1))))
  ))
```

两种解决方案（它们是等效的）的基本情况直接来自规范。也就是说，如果我们在一个列表中用完了元素，那么我们应该简单地附加来自较长列表的剩余元素。

第一种解决方案通过每次取两个列表的头部元素，并将它们与递归调用 `interleave` 处理剩余部分的结果拼接起来，从而构建交错列表。这里使用了 `cons` 函数来实现元素的拼接。

第二种解决方案通过在递归调用时交换 `lst1` 和 `lst2` 的位置，从而每次构建一个元素的交错列表。这样，每次都只需要从当前的 `lst1` 中取元素即可。
用 Ok 解锁并测试你的代码：

```
python3 ok -q interleave -u
python3 ok -q interleave
```

### Q4: No Repeats

实现 `no-repeats` 函数，该函数接受一个数字列表 `s`。它返回一个列表，其中包含 `s` 中所有唯一的元素，按照它们首次出现的顺序排列，但没有重复项。

例如，`(no-repeats (list 5 4 5 4 2 2))` 的求值结果为 `(5 4 2)`。

> **提示：** 可以使用 `filter` 和 `lambda` 来过滤重复元素。判断两个数 `a` 和 `b` 是否不等，可以使用 `(not (= a b))`。

```
(define (no-repeats s)
  (if (null? s) s
    (cons (car s)
      (no-repeats (filter (lambda (x) (not (= (car s) x))) (cdr s))))))
```

对于基本情况，如果输入列表为空，则我们不执行任何操作并返回空列表。

否则，按照直觉，删除重复项需要记录已“看到”的元素。但这需要辅助函数。而且，Scheme 没有类似 Python 中 `in` 的内置谓词。

思路是，迭代列表时，同时删除列表中该元素的所有其他实例，确保列表中只有一个该元素。这可以通过对列表剩余部分应用过滤器来实现。

用 Ok 测试你的代码：

```
python3 ok -q no_repeats
```

## 提交

通过上传你编辑过的文件到 Gradescope 上对应的作业来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有不在大型实验班的学生都必须填写此[考勤表](https://go.cs61a.org/lab/lab00/#submit-with-gradescope)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了实验课。大型实验班的学生不需要填写考勤表。

## 考试练习

以下是往届学期的一些 Scheme 列表考试题，对你备考有帮助。

1.  [2022 年秋季期末考试，问题 8：括号 Scheme](https://cs61a.org/exam/fa22/final/61a-fa22-final.pdf#page=20)
2.  [2022 年春季期末考试，问题 11：珠光宝气，Scheme 续集](https://cs61a.org/exam/sp22/final/61a-sp22-final.pdf#page=23)
3.  [2021 年秋季期末考试，问题 4：香料](https://cs61a.org/exam/fa21/final/61a-fa21-final.pdf#page=18)
