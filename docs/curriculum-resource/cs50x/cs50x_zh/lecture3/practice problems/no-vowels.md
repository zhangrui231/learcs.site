---
sidebar_position: 2
description: cs50x 实践练习 no-vowels
title: no-vowels
---

# N0 V0w3ls - CS50x 2023

## [学习目标](#learning-goals)

-   练习使用字符串
-   练习使用命令行参数
-   从零开始编写程序

![leetspeak](/img/cs50/leetspeak-t.jpeg )

## [背景](#background)

如果你经常上网，可能见过 leetspeak (黑客语)（或者更准确地说，是“l33tsp36k”！）。 Leetspeak 指的是用符号替换字母字符，这些符号在一定程度上模仿字母的形状。 在这个实验中，你将编写一个程序来用数字替换某些元音！

之前你可能经常会接触到已经提供初始代码的程序。 你会注意到，下载该问题的初始代码（"distro"）后，你会发现它包含了一些常用库和一个空的 `main` 函数。 在这个问题中，你需要将命令行输入的单词进行转换，用数字替换其中的元音字母。

-   提示

    -   `main` 函数中使用了 `argc` 和 `argv`，请务必利用它们！
    -   在 `main` 函数中，请先检查命令行参数的数量是否正确。

## [演示](#demo)

![no-vowelsGif](/img/cs50/no-vowelsDemo.gif )

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  在 `$` 提示符下，键入 `mkdir no-vowels`
4.  现在执行 `cd no-vowels`
5.  然后复制并粘贴以下命令 `wget https://cdn.cs50.net/2022/fall/labs/2/no-vowels.c` 到终端，下载本次实验的初始代码。

## [实现细节](#implementation-details)
-   你的程序需要在名为 `no-vowels` 的目录下，创建一个名为 `no-vowels.c` 的文件来实现。
-   你的程序必须接收一个命令行参数，作为需要转换的单词。
-   如果程序在没有命令行参数或多于一个命令行参数的情况下运行，程序应该使用 `printf` 打印一条自定义错误信息，并立即从 `main` 函数返回 1 (通常表示错误)。
-   你的程序必须包含一个名为 `replace` 的函数，该函数接收一个字符串类型的输入，并返回一个字符串类型的输出。
-   这个函数会将以下元音字母替换为数字：`a` 替换为 `6`，`e` 替换为 `3`，`i` 替换为 `1`，`o` 替换为 `0`，`u` 则不作改变。
-   `replace` 函数的输入参数是 `argv[1]`，返回值是转换后的单词。
-   之后，`main` 函数会打印转换后的单词，并加上 `\n` 换行符。
-   建议尝试在 `replace` 函数中使用 [`switch` 语句](https://cs50.readthedocs.io/style/c/#switches)。
要检查您的代码风格（缩进和空格）是否符合规范，请在 `$` 提示符后输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个选做练习，在实验课上完成即可。
