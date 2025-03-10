---
sidebar_position: 2
description: cs50x 练习题 half
title: half
---

# Half - CS50x 2023

## [学习目标](#learning-goals)

-   使用不同的数据类型
-   练习类型转换
-   使用数学运算
-   创建一个带有输入参数和返回值的函数

## [背景](#background)

假设你和朋友在餐馆吃饭，想要平摊账单。你可能想在账单加上税费之前，先预估一下自己要付多少钱。在这个问题里，你需要完成一个函数，根据账单金额、税费和小费，计算出每个人应该支付的金额。

-   提示
    
    -   注意，税费和小费是以百分比的形式给出的。在计算总金额之前，你可能需要先把这些百分比转换成小数。
    -   因为小费是以 `int` 类型输入的，记住 `int` 除以 `int` 结果还是 `int`！
    -   这里的运算顺序和代数里一样，先乘除后加减。
    

## [演示](#demo)

![DebugGif](/img/cs50/halfDemo.gif )

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  在 `$` 提示符下，键入 `mkdir half`
4.  现在执行 `cd half`
5.  然后复制粘贴 `wget https://cdn.cs50.net/2022/fall/labs/1/half.c` 到你的终端，下载本次实验的代码。
6.  你需要完成 `half` 函数，这个函数会计算加上税费和小费后账单总额的一半，并返回结果。

## [实现细节](#implementation-details)

你的函数应使用输入参数 `bill`、`tax` 和 `tip` 来计算最终金额。但因为这些值是百分比，你需要做一些处理，把它们转换成适合计算的格式。

应该先在账单金额上加上税费，_之后_再计算小费。最后，你需要返回包含账单金额、税费和小费的总金额的一半。

## [思考题](#thought-question)

-   你觉得 C 语言里为什么要设置不同的数据类型？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应按照以下示例运行。

```
half/ $ ./half
Bill before tax and tip: 12.50
Sale Tax Percent: 8.875
Tip percent: 20
You will owe $8.17 each!

```

```
half/ $ ./half
Bill before tax and tip: 23.50
Sale Tax Percent: 7  
Tip percent: 15
You will owe $14.46 each!

```

```
half/ $ ./half
Bill before tax and tip: 100
Sale Tax Percent: 6.25
Tip percent: 18
You will owe $62.69 each!

```

你可以用 `check50` 来检查你的代码。`check50` 是 CS50 用来测试你提交的代码的程序。在 `$` 提示符下输入下面的命令就可以使用。不过，记得自己也要先测试一下！

```
check50 cs50/labs/2023/x/half

```

绿色的笑脸表示你的程序通过了测试！红色的皱眉表示你的程序输出了错误的结果。访问 `check50` 输出的链接，可以看到 `check50` 给你的程序的输入、期望的输出和你程序实际的输出。

想要检查你的代码风格（缩进和空格）是否规范，可以在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

不用提交！这只是一个可选练习。
