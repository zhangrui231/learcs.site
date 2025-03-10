---
sidebar_position: 4
description: CS50x 练习：七日平均值
title: 七日平均值
---

# 七日平均值 - CS50x 2023

## [学习目标](#learning-goals)

-   处理实时数据流
-   练习使用 CSV 文件和 `csv.DictReader`
-   练习使用字典、列表和异常

![sevendaysavg](/img/cs50/seven-day-averages.png )

## [背景](#background)

追踪 COVID 病例的一个常用方法是使用 7 日平均值。有些州每周只记录一次病例，因此使用 7 日平均值比每日数字更准确。在这个程序中，你将使用[纽约时报的存储库](https://github.com/nytimes/covid-19-data)，其中包含实时的、累积的 COVID 数据，以计算每日新增病例、创建 7 日平均值，并将本周的平均值与上周的平均值进行比较。

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/6/seven-day-average.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `seven-day-average.zip` 的 zip 文件。请务必注意`wget`命令后URL之间的空格，以及其他任何字符错误！
4.  现在执行 `unzip seven-day-average.zip` 以创建一个名为 `seven-day-average` 的文件夹。
5.  你不再需要 ZIP 文件，因此你可以执行 `rm seven-day-average.zip`，并在提示符下回复“y”，然后按 Enter 键。

## [实现细节](#implementation-details)

本问题的初始代码使用 Python 的 `requests` 库来访问纽约时报在 GitHub 上的公开数据仓库。数据以 CSV 文件的形式存储。程序使用 `DictReader` 读取该文件，并创建一个 `states` 列表来指定需要计算的州。

你需要完成 `calculate` 和 `comparative_averages` 两个函数。

### [`calculate`](#calculate)

在 `calculate` 函数中，你需要创建一个名为 `new_cases` 的字典，用于记录每个州最近 14 天的新增 COVID 病例。字典的键为州名，值为对应的新增病例数。由于纽约时报提供的是累计数据，你需要通过相减计算每日新增病例。建议创建一个名为 `previous_cases` 的字典来保存每日计算结果。

-   提示

    -   你可以通过将每天的新增数据添加到列表末尾，并始终保持列表长度不超过 14 (移除最早的数据)，来存储每个州的数据。

你的 `calculate` 函数最终应返回 `new_cases` 字典。

### [`comparative_averages`](#comparative_averages)

由于 `new_cases` 字典会传递给此函数，你可以通过对列表中*最后* 7 个元素求和并除以 7，来计算本周的 7 日平均值。 类似地，对列表中*前* 7 个元素执行相同操作，即可得到上周的 7 日平均值。
-   提示
    
    -   不妨了解一下 Python 的列表切片功能，它可以让你轻松访问列表中的一部分元素。例如，`values[3:5]` 会返回列表 `values` 中索引为 3 和 4 的元素（注意：不包含索引为 5 的元素）。
    

然后，用这两个7天平均值的差除以上周的平均值，就能算出增长或减少的百分比了。

-   提示
    
    -   注意，可以用 `try` 和 `except` 语句来处理 `ZeroDivisionError` 错误，从而避免除以零的情况。例如：
    
    ```
    try:
        numerator / denominator
    except ZeroDivisionError:
        ...
    
    ```
    
    想了解更多关于 Python 异常处理的信息，可以参考 [CS50P](https://cs50.harvard.edu/python/2022/weeks/3/) 的第三周内容。
    

## [思考题](#thought-question)

为什么有些网站，比如[华盛顿邮报](https://www.washingtonpost.com/graphics/2020/national/coronavirus-us-cases-deaths/?state=US)，对于某些州发布的“每日新增病例平均值”和“过去 7 天每日平均病例变化”与你的程序结果不一致？但有些州的数据却又相同，这是为什么呢？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该像下面的例子这样跑起来。

```
seven-day-average/ $ python seven-day-average.py
Choose one or more states to view average COVID cases.
Press enter when done.

State: Massachusetts
State: New York
State: 

Seven-Day Averages
Massachusetts had a 7-day average of 1646 and an increase of 46%.
New York had a 7-day average of 7502 and a decrease of 1%.

```

```
seven-day-average/ $ python seven-day-average.py
Choose one or more states to view average COVID cases.
Press enter when done.

State: Maine
State: California
State: 

Seven-Day Averages
California had a 7-day average of 20461 and a decrease of 8%.
Maine had a 7-day average of 196 and a decrease of 10%.

```

请注意，由于您使用的数据每天都会更新，因此数字每天都会有所不同。

这个没有 `check50`！

想看看你的代码风格怎么样，可以在 `$` 提示符后面输入以下命令。

```
style50 seven-day-average.py

```

## [如何提交](#how-to-submit)

无需提交！这是一个练习题。
