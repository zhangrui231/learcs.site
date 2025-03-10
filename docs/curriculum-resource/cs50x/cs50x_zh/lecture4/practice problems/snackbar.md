---
sidebar_position: 4
description: cs50x 练习题 小吃店
title: 小吃店
---

# 小吃店 - CS50x 2023

## [学习目标](#learning-goals)

-   练习使用 `struct` 结构体
-   编写线性搜索算法

![海滩图片](/img/cs50/beach-g1e2b206d7_1280.jpg )

## [背景](#background)

想象一下你在海滩上，想从小吃店点一些东西。你手头的现金有限，想在点餐前算一下选的东西一共多少钱。在 `snackbar.c` 中，你将完成两个函数。首先是 `add_items`，至少要把 Beach Burger Shack 菜单上的前 4 个菜品加进去。然后你将完成 `get_cost`，它将实现一个线性搜索算法来搜索你选择的每个项目，并返回相应的价格。

-   提示
    
    -   你可以直接在 `add_items` 函数里把菜单和价格写死。
    -   [`strings.h`](https://manual.cs50.io/#strings.h) 里有个函数说不定能帮上忙。
    

## [演示](#demo)

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  在终端窗口里点一下，然后输入 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/3/snackbar.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `snackbar.zip` 的 zip 文件。注意 `wget` 后面要空一格，URL 也别输错了，一个字符都不能错！
4.  现在执行 `unzip snackbar.zip` 以创建一个名为 `snackbar` 的文件夹。
5.  你不再需要 ZIP 文件，因此你可以执行 `rm snackbar.zip` 并在提示符下回复 “y”，然后按 Enter 键。

## [实现细节](#implementation-details)

`main` 函数已经完成。调用 `add_items` 初始化 `menu` 数组之后，程序会打印出菜单和价格，然后提示你点菜，一直点到你直接按回车为止。你需要完成两个函数：`add_items`，用来添加至少前四个菜品；还有 `get_cost`，用来返回每个菜的价格。在 `get_cost` 里写线性搜索的时候，记得忽略大小写。

## [思考题](#thought-question)

-   为啥用 `struct` 数组比用好几个数组更好呢？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该表现如下：

```
snackbar/ $ ./snackbar

Welcome to Beach Burger Shack!
Choose from the following menu to order. Press enter when done.

Burger: $9.50
Vegan Burger: $11.00
Hot Dog: $5.00
Cheese Dog: $7.00
Fries: $5.00
Cheese Fries: $6.00
Cold Pressed Juice: $7.00
Cold Brew: $3.00
Water: $2.00
Soda: $2.00

Enter a food item: burger
Enter a food item: fries
Enter a food item: soda
Enter a food item: 

Your total cost is: $16.50

```

```
snackbar/ $ ./snackbar

Welcome to Beach Burger Shack!
Choose from the following menu to order. Press enter when done.

Burger: $9.50
Vegan Burger: $11.00
Hot Dog: $5.00
Cheese Dog: $7.00
Fries: $5.00
Cheese Fries: $6.00
Cold Pressed Juice: $7.00
Cold Brew: $3.00
Water: $2.00
Soda: $2.00

Enter a food item: cold brew
Enter a food item: hot dog
Enter a food item: 

Your total cost is: $8.00

```

_请注意，菜单应该只打印出你保存在 `menu` 数组中的项目。_

这个没有 `check50`！

想看看你的代码风格怎么样，就在 `$` 提示符后面输入这些。

## [如何提交](#how-to-submit)

不用交！这个是选做的练习。
