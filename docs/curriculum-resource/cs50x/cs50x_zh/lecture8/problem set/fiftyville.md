---
sidebar_position: 2
description: cs50x problem set fiftyville
title: fiftyville
---

# Fiftyville - CS50x 2023

编写 SQL 查询来解决一个谜团。

## [Fiftyville 谜案](#a-mystery-in-fiftyville)

CS50 鸭子被盗了！Fiftyville 镇已请求您解决鸭子被盗之谜。当局认为，小偷偷走了鸭子，然后不久之后，在同伙的帮助下乘飞机离开了小镇。您的目标是确定：

-   谁是小偷，
-   小偷逃往哪个城市，以及
-   谁是帮助小偷逃脱的同伙

您只知道盗窃案**发生在 2021 年 7 月 28 日**，并且**发生在 Humphrey 街**。

您打算怎么解开这个谜团？Fiftyville 当局已从盗窃案发生前后收集了该镇的一些记录，并为您准备了一个 SQLite 数据库 `fiftyville.db`，其中包含来自该镇周围的数据表。您可以使用 SQL `SELECT` 查询来从该表中获取您感兴趣的数据。仅使用数据库中的信息，您的任务就是解开这个谜团。

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，单击您的终端窗口，然后单独执行 `cd`。您应该会看到终端窗口的提示符如下所示：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/7/fiftyville.zip

```

以便将名为 `fiftyville.zip` 的 ZIP 文件下载到您的 codespace 中。

然后执行

以创建一个名为 `fiftyville` 的文件夹。您不再需要 ZIP 文件，因此您可以执行

并在提示符下回复“y”，然后按 Enter 键以删除您下载的 ZIP 文件。

现在输入

然后按 Enter 键进入该目录。您的提示符现在应类似于以下内容。

单独执行 `ls`，您应该会看到一些文件：

```
answers.txt  fiftyville.db  log.sql

```

如果您遇到任何问题，请再次按照相同的步骤操作，看看能不能找到出错的地方！

## [规范](#specification)
对于这个问题，解谜的过程和解谜本身一样重要。在 `log.sql` 中，记录你在数据库上运行的所有 SQL 查询。在每个查询上方，用注释（SQL中以`--`开头的行）标明该查询的目的和期望获得的信息。你可以在日志文件中添加注释，记录你的解谜思路。最终，这个文件将是你用来证明如何找到窃贼的证据！

编写查询时，你可能会发现有些查询会变得很复杂。为了保证查询的可读性，请参考 [sqlstyle.guide](https://www.sqlstyle.guide/) 上的代码风格建议，特别是[缩进](https://www.sqlstyle.guide/#indentation)部分！

解开谜题后，请在 `answers.txt` 中填写窃贼姓名、逃往城市以及协助其逃脱的同伙姓名。（请勿修改或添加任何已有文本之外的内容！）

最终，你应该提交你的 `log.sql` 和 `answers.txt` 文件。

## [演练](#walkthrough)

## [提示](#hints)

-   执行 `sqlite3 fiftyville.db` 以开始在数据库上运行查询。
    -   在运行 `sqlite3` 时，执行 `.tables` 将列出数据库中的所有表。
    -   使用 `sqlite3` 时，执行 `.schema TABLE_NAME`，其中 `TABLE_NAME` 是数据库中表的名称，将显示用于创建表的 `CREATE TABLE` 命令。这对于了解要查询哪些列很有帮助！
-   你可能会发现从 `crime_scene_reports` （犯罪现场报告）表开始很有帮助。首先查找与犯罪日期和地点匹配的犯罪现场报告。
-   有关一些可能有用的 SQL 语法，请参阅 [此 SQL 关键字参考](https://www.w3schools.com/sql/sql_ref_keywords.asp)！

## [测试](#testing)

执行以下命令以使用 `check50` 评估代码的正确性。

```
check50 cs50/problems/2023/x/fiftyville

```

## [如何提交](#how-to-submit)

在你的终端中，执行以下命令以提交你的工作。

```
submit50 cs50/problems/2023/x/fiftyville

```

## [致谢](#acknowledgements)
本次灵感来源于 [SQL City](https://mystery.knightlab.com/) 的另一个案例。
