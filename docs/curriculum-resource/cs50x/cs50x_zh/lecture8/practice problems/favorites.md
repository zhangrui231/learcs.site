---
sidebar_position: 1
description: cs50x 练习题 - 收藏夹
title: 收藏夹
---

# 收藏夹 - CS50x 2023

## [学习目标](#learning-goals)

-   熟悉 SQL
-   练习使用 `SELECT` 和 `UPDATE` 操作

## [背景](#background)

在 2021 年第 7 周的讲座中，我们创建了一个 SQL 数据库 `favorites.db`，其中包含一个 CS50 学生最喜欢的电视节目的表格。然而，与导入原始数据时经常发生的情况一样，我们需要处理一些不一致和拼写错误（否则查询会变得笨拙，结果也会不准确！）。

你的任务是使用 SQL `UPDATE` 关键字来清理这个数据库，以便更有效地用于分析。

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/7/favorites.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `favorites.zip` 的 zip 文件。注意`wget`命令后URL前的空格，以及其他任何字符错误！
4.  现在执行 `unzip favorites.zip` 以创建一个名为 `favorites` 的文件夹。
5.  你不再需要 ZIP 文件，因此你可以执行 `rm favorites.zip` 并在提示符下回复“y”，然后按 Enter 键。

## [实现细节](#implementation-details)

让我们首先看一下数据。回想一下，你需要使用 [SQLite](https://www.sqlite.org/index.html)（一个轻量级的“数据库引擎”）来打开 `favorites.db`。我们将使用 SQLite 的第三个（也是最新的）版本。然后，你可以通过执行以下命令打开 `favorites.db`：

前提是你的终端当前目录与 `favorites.db` 所在的目录一致。

在你的 `sqlite3` 提示符下，尝试执行

查看用于在此数据库中创建两个表 `shows` 和 `genres` 的命令。

现在尝试通过执行以下命令查看 `shows` 内部的数据

向上滚动，请注意 `shows` 中的第一个标题看起来可能已经存在问题。我们需要将“How i met your mother”更正为首字母大写的形式！让我们通过执行以下命令 `UPDATE` 此标题

```
UPDATE shows SET title = "How I Met Your Mother" WHERE title = "How i met your mother";

```

虽然你可以手动重新输入每个错误的节目名称，但更有效率的做法是找出同一节目的不同错误版本，然后统一`UPDATE`更正。或许`LIKE`关键字能帮上忙！有很多标题需要清理，包括以下所有标题：

-   Adventure Time
-   Arrow
-   Avatar: The Last Airbender
-   Brooklyn Nine-Nine
-   Community
-   Family Guy
-   Friends
-   Game of Thrones
-   Gilmore Girls
-   Grey’s Anatomy
-   How I Met Your Mother
-   It’s Always Sunny in Philadelphia
-   Parks and Recreation
-   Sherlock
-   Squid Game
-   The Bachelorette
-   The Crown
-   The Office
-   The Queen’s Gambit
-   The Untamed

如果时间紧迫，一些更有趣的清理工作涉及以下节目：

-   Brooklyn Nine-Nine
-   Game of Thrones
-   Grey’s Anatomy
-   It’s Always Sunny in Philadelphia
-   Parks and Recreation
-   The Office

请务必将每个 SQL 语句保存到新文件 `favorites.sql` 中。

## [思考题](#thought-question)

-   你认为为什么在使用 SQL `LIKE` 语句时仍然需要“清理”数据？

## [如何测试你的代码](#how-to-test-your-code)

完成所有数据库`UPDATE`操作后，建议`SELECT`所有标题并按字母顺序排列，以检查是否全部正确。

这个没有 `check50`！

## [如何提交](#how-to-submit)

无需提交。这是一个练习题！
