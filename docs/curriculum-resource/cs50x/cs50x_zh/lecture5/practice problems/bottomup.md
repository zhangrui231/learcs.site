---
sidebar_position: 1
description: cs50x 练习题 bottomup
title: bottomup
---

# 自下而上 - CS50x 2023

## [学习目标](#learning-goals)

-   练习处理图像
-   了解元数据
-   进一步了解 `struct` 的用途

## [背景](#background)

想象一下，你在一个重要的演示文稿中需要展示的图像，不知怎么的损坏了！经过调查，你发现图像主体完好，但查看时却发现图像上下颠倒了！

回想一下，数字图像文件只是一个比特序列，以某种方式排列。那么，一个24位的BMP文件，本质上就是一个比特序列，其中每24个比特（近似地）代表一个像素的颜色。但是 BMP 文件也包含一些“元数据”，例如图像的高度和宽度等信息。这些元数据以两种数据结构的形式，存储在文件开头，通常被称为“头部”，注意不要和C语言的头文件混淆。第一个头部，称为 `BITMAPFILEHEADER`，长度为 14 字节。（回想一下，1 字节等于 8 比特。）第二个头部，称为 `BITMAPINFOHEADER`，长度为 40 字节。紧随这些头部之后的是实际的位图：一个字节数组，其中每三个字节代表一个像素的颜色。

你的任务是通过编程修改元数据，使位图的顶行显示在最上方，底行显示在最下方。最好避免直接修改像素，以防进一步损坏文件！

-   提示
    
    -   请务必仔细查看 `bmp.h` 文件中 `BITMAPINFOHEADER` 结构体的成员。
    -   阅读每个成员的[文档](https://learn.microsoft.com/en-us/previous-versions//dd183376(v=vs.85))，确定你需要修改哪些成员，以及如何修改它们。
    

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/4/bottomup.zip` 后按回车键，即可在你的 codespace 中下载名为 `bottomup.zip` 的压缩文件。
4.  请注意 `wget` 命令和URL之间的空格，以及其他任何字符的正确性！
5.  现在执行 `unzip bottomup.zip` 以创建一个名为 `bottomup` 的文件夹。
6.  删除压缩包：执行 `rm bottomup.zip`，并在提示符下输入“y”后按回车键确认。

## [演示](#demo)

## [实现细节](#implementation-details)

请查阅 `bmp.h` 文件注释中提到的 `BITMAPFILEHEADER` 和 `BITMAPINFOHEADER` 的相关文档链接。仔细查看 `BITMAPINFOHEADER` `struct` 的成员。使用该信息在 `bottomup.c` 中编写一些代码，将图像从自下而上更改为自上而下。相关代码并不复杂，特别是当你理解了原理之后！

## [思考题](#thought-question)

-   为什么图像文件需要元数据？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该按照下面的示例运行。

```
bottomup/ $ ./bottomup harvard_bottomup.bmp harvard_topdown.bmp

```

当你的程序正常工作时，你应该在你的 `bottomup` 目录中看到一个新文件 `harvard_topdown.bmp`。打开它，看看图像的方向是否正确。

你可以使用 `check50` 命令检查你的代码。在 `$` 提示符下输入以下内容即可使用 `check50`，这是 CS50 用于测试你代码的程序。但一定要自己测试一下！

```
check50 cs50/labs/2023/x/bottomup

```

要检查你的代码风格（缩进和空格）是否符合规范，请在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个练习题。
