---
sidebar_position: 2
description: cs50x 练习题 temps
title: temps
---

# 平均高温 - CS50x 2023

## [学习目标](#learning-goals)

-   练习使用 `struct`
-   练习应用排序算法

![Sun](/img/cs50/Sun.jpeg )

## [背景](#background)

我们似乎每年都在打破有史以来最高气温的记录。气候科学家不断追踪所谓的多年“新常态”，以便我们更好地预测和为近期的状况做好准备。官方常态值是基于统一的30年周期计算的，包括来自近15,000个美国气象站的温度、降水和其他气候变量的统计数据，涵盖年度/季节性、月度、每日和每小时的平均值。

七月是美国大多数大城市一年中最热的月份。几乎所有地区的白天温度都经常超过华氏 80 度。但太平洋沿岸的部分城市除外。

在这个问题中，您将按降序对 10 个城市的平均高温值进行排序。

-   提示
    
    -   当复制一个 `struct` 到另一个时，无需分配单个元素。整个 `struct` 可以在一个语句中赋值。
    -   即使 `void` 函数不能返回值，也可以使用 `return` 语句来提前结束函数。
    

## [演示](#demo)

## [开始](#getting-started)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/3/temps.zip` 后按回车键，即可在 codespace 中下载 `temps.zip` 文件。请注意 `wget` 命令后的空格和URL的正确性。
4.  然后执行 `unzip temps.zip` 来解压并创建 `temps` 文件夹。
5.  解压完成后，可以执行 `rm temps.zip` 删除该压缩包，并输入 `y` 确认删除。

## [实现细节](#implementation_details)

`main` 函数初始化 `temps` 数组，调用 `sort_cities` 函数并按排序后的顺序打印出数组。您将使用您选择的 O(n2) 排序算法（可能是冒泡排序、选择排序或插入排序）按温度降序对数组进行排序。

## [思考题](#thought-question)

-   您选择了哪种排序算法，为什么？

## [如何测试你的代码](#how-to-test-your-code)

您的程序应按照以下示例运行。

```
temps/ $ ./temps

各城市七月平均气温

Phoenix: 107
Las Vegas: 105
Austin: 97
Miami: 97
Denver: 90
Chicago: 85
New York: 85
Boston: 82
Los Angeles: 82
San Francisco: 66
temps/ $ 

```

这个没有 `check50`！

要检查代码风格，请在 `$` 提示符后输入以下命令。

## [如何提交](#how-to-submit)

无需提交！这是一个可选的练习题。
