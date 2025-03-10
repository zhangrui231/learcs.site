---
sidebar_position: 1
description: cs50x 问题集 hello
title: hello
---

# Hello - CS50x 2023

实现一个程序，按照下面的示例，向用户打印一个简单的问候语。

```
$ python hello.py
What is your name?
David
hello, David

```

## [入门](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击你的终端窗口，并单独执行 `cd`。你会发现终端提示符类似如下:

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-hello.zip

```

以便将名为 `sentimental-hello.zip` 的 ZIP 文件下载到你的 codespace。

然后执行

```
unzip sentimental-hello.zip

```

来创建一个名为 `sentimental-hello` 的文件夹。现在你可以执行

然后输入 `y` 并回车，删除下载的 ZIP 文件。

现在输入

然后按 Enter 键，进入该目录。现在你的提示符应该如下所示:

单独执行 `ls`，你应该看到 `hello.py`。如果遇到问题，请重复以上步骤，检查哪里出错。

## [规范](#specification)

编写一个名为 `hello.py` 的程序，提示用户输入姓名，然后打印 `hello, so-and-so`，其中 `so-and-so` 是用户输入的名字。 类似于[问题集 1](https://cs50.harvard.edu/x/2023/psets/1/)，但这次使用 Python 编写。

## [用法](#usage)

你的程序应该像下面的示例一样运行:

```
$ python hello.py
What is your name?
Emma
hello, Emma

```

## [测试](#testing)

虽然 `check50` 可用于此问题，但我们鼓励你首先针对以下每项自行测试你的代码。

-   运行程序 `python hello.py`，等待输入提示。输入 `David` 并按 Enter 键。你的程序应该输出 `hello, David`。
-   运行程序 `python hello.py`，等待输入提示。输入 `Bernie` 并按 Enter 键。你的程序应该输出 `hello, Bernie`。
-   运行程序 `python hello.py`，等待输入提示。输入 `Carter` 并按 Enter 键。你的程序应该输出 `hello, Carter`。

执行以下命令，使用 `check50` 评估你的代码的正确性。但别忘了自己编译并测试一下！

```
check50 cs50/problems/2023/x/sentimental/hello

```

运行以下命令，用 `style50` 检查你的代码风格。

## [如何提交](#how-to-submit)

在终端中运行以下命令来提交你的作业。

```
submit50 cs50/problems/2023/x/sentimental/hello

```
