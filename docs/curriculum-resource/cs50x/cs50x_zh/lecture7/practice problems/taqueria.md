---
sidebar_position: 5
description: cs50x 练习：墨西哥卷饼店
title: 墨西哥卷饼店
---

# Felipe’s Taqueria - CS50x 2023

![Felipe's Taqueria](/img/cs50/felipes-logo.png )

[哈佛广场](https://en.wikipedia.org/wiki/Harvard_Square)最受欢迎的餐馆之一是 [Felipe’s Taqueria](https://www.felipesboston.com/)，菜单包含以下主菜，以 `dict` 形式呈现：

```
{
    "Baja Taco": 4.25,
    "Burrito": 7.50,
    "Bowl": 8.50,
    "Nachos": 11.00,
    "Quesadilla": 8.50,
    "Super Burrito": 8.50,
    "Super Quesadilla": 9.50,
    "Taco": 3.00,
    "Tortilla Salad": 8.00
}

```

编写一个程序，允许用户点单。程序会逐行提示用户输入商品，直到用户输入 control-d（通常用于结束程序输入）。每次输入商品后，程序会显示目前为止所有商品的总价，以美元符号 (`$`) 开头，保留两位小数。用户输入不区分大小写。忽略任何不是商品的输入。假设菜单上的每个商品名称都采用[首字母大写](https://docs.python.org/3/library/stdtypes.html#str.title)格式。

提示
-   请注意，你可以通过捕获 `EOFError` 异常来检测用户是否输入了 control-d。示例代码如下：

    ```
    try:
        item = input()
    except EOFError:
        ...
    
    ```
    
    你可能需要打印一个新行，这样用户的光标（以及后续提示符）就不会和你的程序提示符显示在同一行。
    
-   输入 control-d 时，不需要同时按 Enter 键。因此，用户的光标（以及后续提示符）可能会停留在与你的程序提示符同一行。你可以通过打印 `\n` 来将用户的光标移到下一行！
-   请注意，`dict` (字典) 类型有很多内置方法，例如 `get`。 更多信息请参考 [docs.python.org/3/library/stdtypes.html#mapping-types-dict]。 `dict` 类型支持以下操作：
    
    和
    
    其中 `d` 是一个 `dict` (字典)，`key` 是一个 `str` (字符串)。
    
-   请务必避免或捕获 `KeyError` 异常。

## [演示](#demo)

## [开始之前](#before-you-begin)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/6/taqueria.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `taqueria.zip` 的 zip 文件。 注意不要忽略 `wget` 和以下 URL 之间的空格，或任何其他字符！
4.  现在执行 `unzip taqueria.zip` 以创建一个名为 `taqueria` 的文件夹。
5.  你不再需要 ZIP 文件，因此你可以执行 `rm taqueria.zip` 并在提示符下回复“y”，然后按 Enter 键。

## [如何测试](#how-to-test)

以下是如何手动测试你的代码：

-   使用 `python taqueria.py` 运行你的程序。 输入 `Taco` 并按 Enter，再次输入 `Taco` 并按 Enter。 程序应该输出：
    
    并继续提示用户，直到他们输入 control-d。
    
-   使用 `python taqueria.py` 运行你的程序。 输入 `Baja Taco` 并按 Enter，然后输入 `Tortilla Salad` 并按 Enter。 程序应该输出：
    
    并继续提示用户，直到他们输入 control-d。
    
-   使用 `python taqueria.py` 运行你的程序。 输入 `Burger` 并按 Enter。 你的程序应该重新提示用户。

请务必尝试其他食物并改变输入的大小写。 你的程序应按预期运行，不区分大小写。
你可以使用以下命令，通过 `check50` 检查你的代码。`check50` 是 CS50 在你提交代码时用来测试你代码的程序。但别忘了自己也测试一下！

```
check50 cs50/problems/2022/python/taqueria

```

绿色的笑脸表示你的程序通过了一项测试！红色的皱眉表示你的程序输出了不符合预期的结果。访问 `check50` 输出的 URL，查看 `check50` 传递给你程序的输入、期望的输出和你程序实际产生的输出。

## [如何提交](#how-to-submit)

无需提交！这只是一个练习题。
