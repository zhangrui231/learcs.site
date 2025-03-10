---
sidebar_position: 1
description: cs50x 练习题 小时数
title: 小时数
---

# 小时数 - CS50x 2023

## [学习目标](#learning-goals)

-   练习使用数组
-   使用数组作为函数的参数
-   在循环中添加值
-   整数除法和类型转换

![OfficeHours](/img/cs50/officehours.jpeg )

## [背景](#background)

假设你正在学习 CS50（如果你正在阅读本文，你可能就是！），并且每周都花时间完成每个问题集。你可能想知道你总共花了多少时间，或者平均每周花多少时间学习计算机科学！在这个程序中，你将完成一个函数，该函数根据用户的输入，计算给定周数的总小时数或平均每周小时数。

-   提示
    
    -   要累加数组中的数字，你可能需要首先将一个变量初始化为零。然后，使用循环将数组中的每个元素加到该变量上。
    -   计算平均值时，请务必注意两个整数相除的结果！
    

## [演示](#demo)

![HoursGif](/img/cs50/hoursDemo.gif )

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  在 `$` 提示符下，键入 `mkdir hours`
4.  现在执行 `cd hours`
5.  然后复制粘贴 `wget https://cdn.cs50.net/2022/fall/labs/2/hours.c` 到你的终端，下载本次实验的初始代码。

## [实现细节](#implementation-details)

`main` 函数提示用户输入学习 CS50 的周数，然后创建一个具有相同数量元素的数组。请注意，获取一些数据后，程序会提示用户输入“T”或“A”。“T”本应（但尚未！）打印用户输入的总小时数，而“A”本应（但尚未！）打印用户输入的平均小时数。请注意，`do while` 循环使用 `toupper` 将输入的字母大写，然后再将其保存在变量 `output` 中。然后，`printf` 函数调用 `calc_hours`。请注意将数组作为参数传递给函数时所使用的语法。

要完成 `calc_hours`，首先将数组中保存的小时数加到一个新变量中。然后，根据 `output` 的值，返回总小时数或平均每周小时数。

## [思考题](#thought-question)

-   使用函数计算小时数的优势是什么？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该按照下面的示例运行。

```
hours/ $ ./hours
Number of weeks taking CS50: 3
Week 0 HW Hours: 3
Week 1 HW Hours: 7
Week 2 HW Hours: 10
Enter T for total hours, A for average hours per week: A
6.7 hours

```

```
hours/ $ ./hours
Number of weeks taking CS50: 2
Week 0 HW Hours: 2
Week 1 HW Hours: 8
Enter T for total hours, A for average hours per week: T
10.0 hours

```

你可以使用 `check50` 来检查你的代码。`check50` 是 CS50 用于在你提交代码时自动测试代码的程序。你只需在 `$` 提示符下输入相应的命令即可。不过，务必先自行测试！

```
check50 cs50/labs/2023/x/hours

```

要评估你的代码风格是否符合规范，请在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个可选的练习，可以在实验课上完成。
