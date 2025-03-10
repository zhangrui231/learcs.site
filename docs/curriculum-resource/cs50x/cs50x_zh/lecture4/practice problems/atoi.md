---
sidebar_position: 1
description: cs50x atoi 实践练习
title: atoi
---

# 递归 atoi - CS50x 2023

## [学习目标](#learning-goals)

-   更深入地理解字符串
-   练习创建递归函数

## [背景](#background)

设想你回到了 20 世纪 70 年代，当时 `C` 编程语言刚刚被创造出来。你被聘为程序员，负责将 `string` 转换为 `int`。 （你可能在第 2 周使用过一个类似的函数，叫做 [`atoi`](https://manual.cs50.io/3/atoi)）。你希望在开发过程中精益求精。因此，你计划尝试几种方法，以找出最有效的一种。

在这个问题中，你将从一个简单的 `atoi` 实现开始，该实现使用循环处理正整数 `int`。你希望将其修改为使用递归的实现。递归函数可能消耗较多内存，并非总是最佳选择。但在某些情况下，递归能提供更简洁优雅的方案。

（请滚动到页面底部，查看 `atoi` 的一种实际实现。）

-   提示
    
    -   首先获取字符串中最后一个字符 `char` 的索引（即 `\0` 之前的字符）。
    -   将该字符 `char` 转换为数值。提示：可以尝试用该字符减去某个字符来实现。
    -   通过将空字符终止符向左移动一位，移除字符串中的最后一个字符 `char`。
    -   返回该值，再加上缩短后字符串的整数值的 10 倍。
    -   请记住，创建递归函数时需要设置基本情况（base case）。

## [演示](#demo)

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/3/atoi.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `atoi.zip` 的 zip 文件。请注意 `wget` 命令与 URL 之间的空格，以及任何其他字符的输入！
4.  现在执行 `unzip atoi.zip` 以创建一个名为 `atoi` 的文件夹。
5.  不再需要该 ZIP 文件后，可以执行 `rm atoi.zip` 命令，并在提示符后输入 “y” 并按回车键确认。

## [实现细节](#implementation-details)
在 `convert` 函数的递归实现中，从字符串的最后一个字符开始，将其转换为整数值。接着，缩短字符串，移除最后一个字符，然后递归调用 `convert` 函数，并将缩短后的字符串作为输入，以便处理下一个字符。

## [思考问题](#thought-question)

为什么在创建递归函数时需要一个基本情况？

## [如何测试你的代码](#how-to-test-your-code)

你的程序运行结果应该和下面的例子一致。

```
atoi/ $ ./atoi
Enter a positive integer: 3432
3432

```

```
atoi/ $ ./atoi
Enter a positive integer: 98765
98765

```

这次不提供 `check50` 检查！

要评估你的代码风格，请在命令行提示符 `$` 后输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个可选练习。

## [更全面的实现](#a-more-thorough-implementation)

`atoi` 的实际版本必须处理负数，以及前导空格和非数字字符。它可能看起来像这样：

```
#include <stdio.h>
 
// Iterative function to implement `atoi()` function in C
long atoi(const char S[])
{
    long num = 0;
    int i = 0, sign = 1;
 
    // skip white space characters
    while (S[i] == ' ' || S[i] == '\n' || S[i] == '\t') {
        i++;
    }
 
    // note sign of the number
    if (S[i] == '+' || S[i] == '-')
    {
        if (S[i] == '-') {
            sign = -1;
        }
        i++;
    }
 
    // run till the end of the string is reached, or the
    // current character is non-numeric
    while (S[i] && (S[i] >= '0' && S[i] <= '9'))
    {
        num = num * 10 + (S[i] - '0');
        i++;
    }
 
    return sign * num;
}
 
// Implement `atoi()` function in C
int main(void)
{
    char S[] = " -1234567890";
 
    printf("%ld ", atoi(S));
 
    return 0;
}

```

来自 [techiedelight.com/implement-atoi-function-c-iterative-recursive](https://www.techiedelight.com/implement-atoi-function-c-iterative-recursive/).
