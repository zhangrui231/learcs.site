---
sidebar_position: 1
description: cs50x 练习题 debug
title: debug
---

# Debug - CS50x 2023

## [学习目标](#learning-goals)

-   熟悉 C 语法
-   了解 C 编译器错误信息的含义
-   练习调试

![debugging](/img/cs50/first_bug.jpg )

## [背景](#background)

编写程序时可能会出现两种错误。你最先遇到的很可能是**语法**错误。除了语法错误，还可能存在逻辑错误，我们稍后会了解。

在计算机科学中，语法对于计算机理解你的指令至关重要。每种编程语言都有自己的语法规则，包括单词和标点符号的使用。

本实验从包含多个语法错误的发布代码开始。目的是让你尝试编译 (`make`) 程序，学会解读编译器输出的错误信息，并进行**调试**。

-   提示
    
    -   当你尝试编译 `debug.c` 时，你可能会看到类似这样的错误：`debug.c:9:5: error: use of undeclared identifier 'name'`。`debug.c:` 后的 `9` 表示第 9 行存在问题。你觉得为什么会出现 `undeclared identifier` 这样的提示？
    -   你可能需要检查是否缺少符号、库或变量声明等。
    -   如果仍然卡住，可以尝试在终端输入 `help50 make debug`。
    

## [演示](#demo)

![DebugGif](/img/cs50/debugDemo.gif )

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  在 `$` 提示符下，键入 `mkdir debug`
4.  现在执行 `cd debug`
5.  然后复制粘贴 `wget https://cdn.cs50.net/2022/fall/labs/1/debug.c` 到终端，下载本次实验的代码。
6.  现在尝试编译此程序，方法是键入 `make debug` 并查看会发生什么！
7.  你很可能会看到类似这样的错误：`debug.c:9:5: error: use of undeclared identifier 'name'`
8.  这意味着第 9 行存在一个关于“未声明标识符”的错误。修复此错误，然后再次尝试编译。记住，调试是一个反复迭代的过程。你可能需要修复一个错误，编译，然后修复另一个错误，再次编译，多次！

## [思考题](#thought-question)

-   你觉得为什么 C 语言（以及其他编程语言）对语法有这么严格的要求？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应按照以下示例运行。

```
debug/ $ ./debug
What is your name? Carter
Where do you live? Cambridge
Hello, Carter, from Cambridge!

```

```
debug/ $ ./debug
What is your name? Margaret
Where do you live? New York
Hello, Margaret, from New York!

```

你可以使用 `check50` 检查你的代码，`check50` 是 CS50 在你提交时用来测试你的代码的程序，只需在 $ 提示符下输入以下命令。但一定要自己测试一下！

```
check50 cs50/labs/2023/x/debug

```

绿色的笑脸表示你的程序已通过测试！红色的皱眉表示你的程序输出了一些意外的内容。访问 `check50` 输出的 URL，可以查看 `check50` 给你的程序的输入、期望的输出以及你的程序实际的输出。

要检查你的代码风格（缩进和空格）是否符合规范，请在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个可选的练习题。
