---
sidebar_position: 3
description: cs50x 练习题 max
title: max
---

# Max - CS50x 2023

## [学习目标](#learning-goals)

-   将数组传递给函数
-   创建一个查找最大值的辅助函数

## [背景](#background)

很多时候，能有一个函数来查找数组中的最大值（和最小值）会很有帮助。由于 `C` 中没有内置的 `max` 函数，你将在这个练习中创建一个。之后你可以在后续的作业中使用，这会很有帮助！

-   提示
    
    -   首先用一个变量来记录当前最大值。有两种方法可以初始化这个变量。你可以从一个足够小的数开始（注意不要用零，因为最大值有可能是负数！），或者直接用数组的第一个元素作为初始值。
    -   遍历数组，每次发现更大的值就更新记录的最大值。
    

## [演示](#demo)

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/3/max.zip`，然后按回车键，以便在你的 codespace 中下载 `max.zip` 压缩包。注意`wget`命令和URL之间的空格，以及其他任何字符都不能省略！
4.  现在执行 `unzip max.zip` 以创建一个名为 `max` 的文件夹。
5.  删除压缩包可以执行 `rm max.zip` 命令，然后输入 `y` 并按回车键确认。

## [实现细节](#implementation-details)

`main` 函数初始化数组，要求用户输入值，然后将数组和项目数传递给 `max` 函数。实现 `max` 函数，遍历数组中的每个元素，然后返回最大值。

## [思考题](#thought-question)

-   你觉得哪些程序会需要用到 `max` 这样的辅助函数？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该按照下面的示例运行。

```
max/ $ ./max
Number of elements: 3
Element 0: 2
Element 1: 10
Element 2: -1
The max value is 10.

```

```
max/ $ ./max
Number of elements: 4
Element 0: -100
Element 1: -200
Element 2: -3
Element 3: -5000
The max value is -3.

```

你可以使用 `check50` 来检查代码。`check50` 是 CS50 提交时用来测试代码的工具。在 `$` 提示符下输入相应命令即可使用。不过，别忘了自己先测试一下！

```
check50 cs50/labs/2023/x/max

```

要检查代码风格，可以在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个可选的练习题。
