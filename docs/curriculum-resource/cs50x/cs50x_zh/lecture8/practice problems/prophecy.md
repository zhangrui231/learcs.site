---
sidebar_position: 2
description: cs50x 实践项目：预言
title: 预言
---

# 预言厅 - CS50x 2023

## [学习目标](#learning-goals)

-   “重构”一个 `SQL` 数据库以消除冗余
-   使用 `SELECT`、`CREATE` 和 `INSERT` 语句来重组数据
-   编写 Python 代码来加载新的 `SQL` 表

![预言厅](/img/cs50/prophecy.jpg )

## [背景](#background)

预言厅的管理员，负责标记和更新记录，决定创建一个霍格沃茨学生的 SQL 数据库。不幸的是，这个数据库设计得很糟糕！数据库 `roster.db` 仅包含一个表 `students`，其中包含四个霍格沃茨学院中每个学院的名称和院长。

你偶然发现了这个数据库，并认为它可以被设计得更好。查看 `roster.db`，你会发现每个学院的名称和院长都在重复出现。一个更好的设计应该包含一个学生表（只包含学生信息）、一个学院表（只包含学院信息）以及一个记录学生和学院之间关系的表。这种改变数据库“模式”的过程，被称为[重构](https://en.wikipedia.org/wiki/Database_refactoring)。

-   提示
    
    -   你可以通过执行 `sqlite3 roster.db`，然后在 `sqlite3` 提示符下输入 `.schema` 来查看预言厅表中的数据。这会输出用于创建 `students` 表的 `CREATE TABLE` 语句。
    -   然后，你可以使用 `SELECT` 语句来查看表中的内容。
    

## [开始](#getting-started)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/7/prophecy.zip` 后，按回车键，即可在你的 codespace 中下载名为 `prophecy.zip` 的压缩包。注意不要漏掉 `wget` 命令和 URL 之间的空格，以及任何其他字符！
4.  现在执行 `unzip prophecy.zip` 以创建一个名为 `prophecy` 的文件夹。
5.  你不再需要这个 ZIP 文件了，所以可以执行 `rm prophecy.zip`，然后在提示符下输入 “y” 并按回车键。

## [实现细节](#implementation-details)

你将使用 `roster.db` 中的现有数据创建一个新数据库，该数据库包含一个学生表、一个社团表和一个社团分配表。你可以使用单独的 `SQL` 查询来完成此操作，但我们建议你最好编写自己的 Python 程序来自动化该过程！请注意，为了方便起见，我们以 CSV 格式 `students.csv` 提供了 `roster.db` 的 `students` 表中的数据。

### [设计模式](#developing-a-schema)

首先，让我们为数据库设计一个新的模式。在 `schema.sql` 中，记录创建三个新表所需的三个 `CREATE TABLE` 命令。

请记住，你希望每个表代表一个单独的实体：也就是说，学生表应该_只_包含学生信息，社团表应该_只_包含社团信息，社团分配表应该_只_包含社团分配信息。建议先考虑每个表需要存储哪些信息，再选择合适的 SQLite 数据类型。例如，以下是 `students` 的 `CREATE TABLE` 命令：

```
CREATE TABLE students (
    id INTEGER,
    student_name TEXT,
    house TEXT,
    head TEXT,
    PRIMARY KEY(id)
);

```

请记住，每个表都应该有一个主键：一个唯一标识表中每一行的列。某些表最好使用外键进行设计：引用另一个表的主键的列。

配置好新模式后，运行三个新的 `CREATE TABLE` 查询。键入 `.schema` 以查看结果。

### [插入数据](#inserting-data)

完成新模式配置后，就可以开始向新数据库中插入数据了。最好在此处编写一个 Python 程序，这可以省去编写许多 `INSERT` 查询的麻烦。请记住，你拥有 `students.csv`，其中包含先前数据库的 `students` 表中的数据。

## [思考题](#thought-question)

-   你认为为什么不为每个学生重复社团和院长等信息被认为是更好的设计？

## [如何测试你的代码](#how-to-test-your-code)

你可能会发现以下命令对于测试你的代码很有帮助：

-   `.schema` 用于检查数据库的模式
-   `SELECT * FROM table;` 其中 `table` 是你想查看数据的表的名称

这次就不用 `check50` 检查了！

## [如何提交](#how-to-submit)

无需提交。这是一个练习题！

