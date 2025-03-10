---
sidebar_position: 1
description: cs50x 练习题库
title: bank
---

# Home Federal Savings Bank - CS50x 2023

在[辛菲尔德](https://zh.wikipedia.org/wiki/%E5%AE%8B%E9%A3%9E%E6%AD%A3%E4%BC%A0)的[第7季第24集](https://en.wikipedia.org/wiki/The_Invitations)中，[克莱默](https://en.wikipedia.org/wiki/Cosmo_Kramer)拜访了一家银行，该银行承诺向任何没有被“hello”问候的人提供 100 美元。克莱默被招呼了一声“hey”，但他认为这不算“hello”，因此要求获得100美元的赔偿。银行经理提出折中方案：“既然你的招呼语是以'h'开头的，给你20美元怎么样？” 克莱默接受了。

在一个名为 `bank.py` 的文件中，实现一个程序，提示用户输入问候语。如果问候语以“hello”开头，则输出 `$0`。如果问候语以“h”开头（但不是“hello”），则输出 `$20`。否则，输出 `$100`。忽略用户问候语中的任何前导空格，并且不区分大小写地处理用户的问候语。

小贴士

-   别忘了，`str` 类型有很多内置方法，可以参考 [docs.python.org/3/library/stdtypes.html#string-methods](https://docs.python.org/3/library/stdtypes.html#string-methods)。
-   请确保对于“hello”、“hello there”、“hello, Newman”等以“hello”开头的问候语，都输出 0 美元。

## [演示](#demo)

## [开始之前](#before-you-begin)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  在终端窗口中点击，然后执行 `cd` 命令。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/6/bank.zip`，然后按 Enter 键，以便在您的 codespace 中下载一个名为 `bank.zip` 的 zip 文件。注意 `wget` 命令后要加上空格，并且URL不能有任何错误！
4.  现在执行 `unzip bank.zip` 以创建一个名为 `bank` 的文件夹。
5.  删除 ZIP 文件可以执行 `rm bank.zip` 命令，然后根据提示输入“y”并回车。

## [如何测试](#how-to-test)

以下是手动测试代码的方法：

-   使用 `python bank.py` 运行您的程序。键入 `Hello` 并按 Enter 键。您的程序应输出：
-   使用 `python bank.py` 运行您的程序。键入 `Hello, Newman` 并按 Enter 键。您的程序应输出：
-   使用 `python bank.py` 运行您的程序。键入 `How you doing?` 并按 Enter 键。您的程序应输出
-   使用 `python bank.py` 运行您的程序。键入 `What's happening?` 并按 Enter 键。您的程序应输出

您可以执行以下命令，使用 `check50` 检查您的代码，`check50` 是 CS50 在您提交代码时将用于测试您的代码的程序。但一定要自己测试一下！

```
check50 cs50/problems/2022/python/bank

```

绿色的笑脸表示程序通过了测试！红色的皱眉则表示程序输出了错误的结果。访问 `check50` 输出的链接，可以查看 `check50` 程序的输入、期望的输出以及你程序的实际输出。

## [如何提交](#how-to-submit)

无需提交，这只是一个练习。
