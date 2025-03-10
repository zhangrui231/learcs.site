---
sidebar_position: 3
description: cs50x 练习题 密码
title: 密码
---

# 密码 - CS50x 2023

## [学习目标](#learning-goals)

-   练习遍历字符串
-   练习使用 `ctype` 库
-   练习使用布尔变量

## [背景](#background)

现在大家都知道，使用不易被猜到的密码非常重要！ 现在很多Web应用都要求密码包含字母、数字和符号。

在本实验中，会提示用户输入密码，然后用你编写的 `check` 函数来验证密码。 如果密码包含至少一个大写字母、一个小写字母、一个数字和一个符号（指的是非字母和数字的可打印字符，例如“！”、“$”和“#”），则该函数应返回 `true`。 否则，它应该返回 `false`。

提示

1.  `ctype` 库有许多有用的函数，在这里很有用。
2.  布尔变量可以用来记录算法中各项标准是否已满足。

## [演示](#demo)

![PasswordGif](/img/cs50/passwordDemo.gif )

## [开始](#getting-started)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  在 `$` 提示符下，键入 `mkdir password`
4.  现在执行 `cd password`
5.  然后将 `wget https://cdn.cs50.net/2022/fall/labs/2/password.c` 复制并粘贴到您的终端中，以下载此实验的发行代码。
6.  你需要完成 `valid` 函数。如果密码符合所有标准，函数返回 `true`；否则，返回 `false`。

## [实现细节](#implementation-details)

你的函数将遍历作为参数提供给它的密码。 因为你需要找到至少一个小写字母、一个大写字母、一个数字和一个符号，所以你可以为每种字符类型创建一个布尔变量，并在遍历字符串之前将每个变量设置为 `false`。 例如，如果找到了数字，就把对应的布尔值设为 `true`。 如果在函数结束时所有布尔值都为 `true`，则表示满足所有条件，你将返回 `true`。

## [思考题](#thought-question)

-   您认为可以使用 95 个可打印的 ASCII 字符制作多少个长度为 8 个字母的不同密码？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应按照以下示例运行。

```
password/ $ ./password
Enter your password: hello
Your password needs at least one uppercase letter, lowercase letter, number and symbol!

```

```
password/ $ ./password
Enter your password: h3ll(
Your password needs at least one uppercase letter, lowercase letter, number and symbol!

```

```
password/ $ ./password
Enter your password: h3LL0!
Your password is valid!

```

您可以使用 `check50` 检查你的代码，`check50` 是 CS50 在你提交时用来测试你的代码的程序，方法是在 $ 提示符下键入以下内容。 但一定要自己测试一下！

```
check50 cs50/labs/2023/x/password

```

要评估你的代码风格，在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

无需提交！ 这是一个可选的练习题，与你的实验一起完成。
