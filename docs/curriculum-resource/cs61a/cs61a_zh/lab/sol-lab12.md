---
title: Lab 12 Solutions
---

# Lab 12 答案 | CS 61A 2024年春季

## Lab 12 答案

-   [lab12.zip](/resource/cs61a/lab12.zip)

## 解决方案文件

## 必做题目

## SQL

`SELECT` 语句用于描述基于输入行的输出表。要编写一个语句：

1.  使用 `FROM` 和 `WHERE` 子句描述**输入行**。
2.  对这些行进行分组，并使用 `GROUP BY` 和 `HAVING` 子句来确定哪些组作为输出行。
3.  使用 `SELECT` 和 `ORDER BY` 子句格式化和排序**输出行**和列。

`SELECT` _(步骤 3)_ `FROM` _(步骤 1)_ `WHERE` _(步骤 1)_ `GROUP BY` _(步骤 2)_ `HAVING` _(步骤 2)_ `ORDER BY` _(步骤 3)_;

步骤 1 可能需要连接多个表（使用逗号），从而形成包含现有表中两行或多行的输入行。

`WHERE`、`GROUP BY`、`HAVING` 和 `ORDER BY` 子句是可选的。

参考下拉菜单中的SQL复习内容。你可以直接跳到题目，遇到问题再回来参考。

## SQL 基础

### 创建表

您可以从头开始或从现有表创建 SQL 表。

以下语句通过指定列名和值创建表，无需引用其他表。每个 `SELECT` 子句指定一行数据，`UNION` 用于合并这些行。`AS` 子句用于为每列指定名称；在定义第一行后，后续行可以省略列名。

```
CREATE TABLE [table_name] AS
  SELECT [val1] AS [column1], [val2] AS [column2], ... UNION
  SELECT [val3]             , [val4]             , ... UNION
  SELECT [val5]             , [val6]             , ...;
```

假设我们需要创建一张名为 `big_game` 的表，用于记录每年 Big Game 的比分。此表有三列：`berkeley`、`stanford` 和 `year`。

![](/img/cs61a/big-game.png)

我们可以使用以下 `CREATE TABLE` 语句来做到这一点：

```
CREATE TABLE big_game AS
  SELECT 30 AS berkeley, 7 AS stanford, 2002 AS year UNION
  SELECT 28,             16,            2003         UNION
  SELECT 17,             38,            2014;
```

### 从表中选择

通常，我们会使用 `SELECT` 语句从现有表中选择需要的列来创建新表，如下所示：

```
SELECT [columns] FROM [tables] WHERE [condition] ORDER BY [columns] LIMIT [limit];
```

让我们分解一下这个语句：

-   `SELECT [columns]` 告诉 SQL 我们希望在输出表中包含哪些列；`[columns]` 是以逗号分隔的列名列表，可以使用 `*` 选择所有列。
-   `FROM [table]` 告诉 SQL 我们要选择的列来自哪个表；关于如何从多个表选择，请参考连接部分。
-   `WHERE [condition]` 用于过滤输出表，只包含满足给定条件（布尔表达式）的行。
-   `ORDER BY [columns]` 按照给定的列名列表对输出表中的行进行排序。
-   `LIMIT [limit]` 用于限制输出表中行的数量，`[limit]` 为整数。

这里有一些例子：

从 `big_game` 表中选择伯克利在2002年之后的所有得分。

```
sqlite> SELECT berkeley FROM big_game WHERE year > 2002;
28
17
```

选择伯克利获胜的年份，并列出两所学校的得分。

```
sqlite> SELECT berkeley, stanford FROM big_game WHERE berkeley > stanford;
30|7
28|16
```

选择斯坦福得分超过15分的年份。

```
sqlite> SELECT year FROM big_game WHERE stanford > 15;
2003
2014
```

### SQL 运算符

`SELECT`、`WHERE` 和 `ORDER BY` 子句中的表达式可以包含以下一个或多个运算符：
-   比较运算符：`=`, `>`, `<`, `<=`, `>=`, `<>` 或 `!=`（“不等于”）
-   布尔运算符：`AND`, `OR`
-   算术运算符：`+`, `-`, `*`, `/`
-   字符串连接运算符：`||`

以下是一些示例：

计算并输出伯克利和斯坦福每年得分的比率：

```
sqlite> select berkeley * 1.0 / stanford from big_game;
0.447368421052632
1.75
4.28571428571429
```

计算并输出两队得分均超过10分的年份的总分：

```
sqlite> select berkeley + stanford from big_game where berkeley > 10 and stanford > 10;
55
44
```

输出一个包含单列和单行的表，其中包含值“hello world”：

```
sqlite> SELECT "hello" || " " || "world";
hello world
```

## 连接

要从多个表选取数据，可以使用连接操作。连接操作有多种类型，但本节仅关注内连接。 执行两个或多个表的内连接时，只需在 `SELECT` 语句的 `FROM` 子句中列出这些表：

```
SELECT [columns] FROM [table1], [table2], ... WHERE [condition] ORDER BY [columns] LIMIT [limit];
```

我们可以从多个不同的表或从同一个表多次选择。

以下是一个示例表，记录了自2002年以来加州大学伯克利分校的历任足球主教练姓名：

```
CREATE TABLE coaches AS
  SELECT "Jeff Tedford" AS name, 2002 as start, 2012 as end UNION
  SELECT "Sonny Dykes"         , 2013         , 2016        UNION
  SELECT "Justin Wilcox"       , 2017         , null;
```

当我们连接两个或多个表时，默认输出是[笛卡尔积](https://en.wikipedia.org/wiki/Cartesian_product)。 例如，如果我们连接 `big_game` 和 `coaches`，我们会得到以下结果：

![](/img/cs61a/joins.png)

若要将每场比赛与对应赛季的教练进行匹配，需要在 `WHERE` 子句中比较两个表的列：

```
sqlite> SELECT * FROM big_game, coaches WHERE year >= start AND year <= end;
17|38|2014|Sonny Dykes|2013|2016
28|16|2003|Jeff Tedford|2002|2012
30|7|2002|Jeff Tedford|2002|2012
```

以下查询输出 `big_game` 中记录的每场 Big Game 胜利的教练和年份：

```
sqlite> SELECT name, year FROM big_game, coaches
...>        WHERE berkeley > stanford AND year >= start AND year <= end;
Jeff Tedford|2003
Jeff Tedford|2002
```

在上述查询中，所有列名都清晰明确。 例如，`name` 列显然来自 `coaches` 表，因为 `big_game` 表中不存在同名列。 但是，如果多个被连接的表存在同名列，或者表与自身连接，则必须使用别名来区分这些列。

例如，要计算 `big_game` 中每支球队在某场比赛与之前比赛的得分差... 由于该表的每一行代表一场比赛，要比较两场比赛，需要将 `big_game` 表与自身连接：

```
sqlite> SELECT b.Berkeley - a.Berkeley, b.Stanford - a.Stanford, a.Year, b.Year
...>        FROM big_game AS a, big_game AS b WHERE a.Year < b.Year;
-11|22|2003|2014
-13|21|2002|2014
-2|9|2002|2003
```

在上述查询中，我们分别将别名 `a` 和 `b` 赋予第一个和第二个 `big_game` 表。 然后，可以使用带别名的点标记法引用每个表的列，例如 `a.Berkeley`、`a.Stanford` 和 `a.Year` 从第一个表中选取数据。

## SQL 聚合函数
之前，我们一直在处理一次处理一行数据的查询。当我们进行连接（join）操作时，会得到所有行的笛卡尔积。当我们使用 `WHERE` 时，我们会根据条件过滤掉某些行。或者，可以使用[聚合函数](http://www.sqlite.org/lang_aggfunc.html)，例如 `MAX(column)`，将多行数据的值聚合起来。

默认情况下，会对_整个_表的数据进行聚合。例如，如果我们想计算 `flights` 表中航班的数量，我们可以使用：

```
sqlite> SELECT COUNT(*) from FLIGHTS;
13
```

如果想将相似的行分组，并在每个组内进行聚合操作呢？我们可以使用 `GROUP BY` 子句。

例如，对于每个唯一的出发地，将所有相同出发机场的行归为一组。然后，选择 `price` 列，使用 `MIN` 聚合函数找出该组中最便宜的出发价格。最终得到一个包含出发机场及其对应最便宜航班价格的表。

```
sqlite> SELECT departure, MIN(price) FROM flights GROUP BY departure;
AUH|932
LAS|50
LAX|89
SEA|32
SFO|40
SLC|42
```

就像可以使用 `WHERE` 过滤行一样，也可以使用 `HAVING` 过滤分组后的结果。通常，`HAVING` 子句应该使用聚合函数。假设我们想查看所有至少有两个出发航班的机场：

```
sqlite> SELECT departure FROM flights GROUP BY departure HAVING COUNT(*) >= 2;
LAX
SFO
SLC
```

注意，`COUNT(*)` 聚合函数用于计算每个组内的行数。如果想计算_不同_出发机场的数量，那么，我们可以使用以下查询：

```
sqlite> SELECT COUNT(DISTINCT departure) FROM flights;
6
```

这样就能列出 `flights` 表中所有不同的出发机场，例如 SFO、LAX、AUH、SLC、SEA 和 LAS。

## 用法

首先，检查名为 `sqlite_shell.py` 的文件是否与作业文件一起存在。 如果您没有看到它，或者遇到问题，请向下滚动到“故障排除”部分，以了解如何在继续之前下载官方预编译的 SQLite 二进制文件。

可以通过以下命令在终端或 Git Bash 中启动交互式 SQLite 会话：

```
python3 sqlite_shell.py
```

当解释器运行时，可以键入 `.help` 来查看可以运行的一些命令。

要退出 SQLite 解释器，请键入 `.exit` 或 `.quit` 或按 `Ctrl-C`。请记住，如果在按 Enter 键后看到 `...>`，您可能忘记了 `;`。

您还可以通过执行以下操作来运行 `.sql` 文件中的所有语句：（这里我们使用 `lab13.sql` 文件作为示例。）

1.  运行代码后立即退出 SQLite。

    ```
    python3 sqlite_shell.py < lab13.sql
    ```

2.  运行代码后，会打开一个交互式 SQLite 会话，类似于 Python 中使用 `-i` 标志。

    ```
    python3 sqlite_shell.py --init lab13.sql
    ```

## 期末考试教室

`finals` 表包含 `hall` (教室名称，字符串) 和 `course` (课程名称，字符串) 两列，记录了每门课程期末考试所在的教室。

`sizes` 表包含 `room` (教室名称，字符串) 和 `seats` (座位数，数字) 两列，记录了校园内每个教室的座位数。所有讲堂都属于教室。
```
CREATE TABLE finals AS
  SELECT "RSF" AS hall, "61A" as course UNION
  SELECT "Wheeler"    , "61A"           UNION
  SELECT "Pimentel"   , "61A"           UNION
  SELECT "Li Ka Shing", "61A"           UNION
  SELECT "Stanley"    , "61A"           UNION
  SELECT "RSF"        , "61B"           UNION
  SELECT "Wheeler"    , "61B"           UNION
  SELECT "Morgan"     , "61B"           UNION
  SELECT "Wheeler"    , "61C"           UNION
  SELECT "Pimentel"   , "61C"           UNION
  SELECT "Soda 310"   , "61C"           UNION
  SELECT "Soda 306"   , "10"            UNION
  SELECT "RSF"        , "70";

CREATE TABLE sizes AS
  SELECT "RSF" AS room, 900 as seats    UNION
  SELECT "Wheeler"    , 700             UNION
  SELECT "Pimentel"   , 500             UNION
  SELECT "Li Ka Shing", 300             UNION
  SELECT "Stanley"    , 300             UNION
  SELECT "Morgan"     , 100             UNION
  SELECT "Soda 306"   , 80              UNION
  SELECT "Soda 310"   , 40              UNION
  SELECT "Soda 320"   , 30;
```

### Q1：大型课程

创建一个名为 `big` 的表格，包含一个名为 `course` 的列（字符串类型），用于存储期末考试座位数至少为1000的课程名称，每行代表一个课程。

您的查询应该能正确处理 `finals` 和 `sizes` 表中可能出现的任何数据。对于上述示例，预期结果为：

```
61A
61B
61C
```

```
SELECT _____ FROM _____ WHERE _____ GROUP BY _____ HAVING _____;
```

1.  使用 `FROM` 和 `WHERE` 组合 `finals` 和 `sizes` 表中的信息。
2.  使用 `GROUP BY` 和 `HAVING` 为每个至少有 1,000 个座位的课程创建一个组。
3.  使用 `SELECT` 将课程名称放入输出中。

```
CREATE TABLE big AS
SELECT course FROM finals, sizes WHERE hall=room GROUP BY course HAVING SUM(seats) >= 1000;
```

使用 Ok 测试你的代码:

```
python3 ok -q big
```

### Q2：剩余座位

创建一个名为 `remaining` 的表格，其中包含两列 `course`（字符串）和 `remaining`（数字），每门课程对应一行。每行包含课程名称，以及该课程所有考场座位总数，*去除*座位数最多的考场。

您的查询应该能正确处理 `finals` 和 `sizes` 表中可能出现的任何数据。对于上述示例，预期结果为：

```
10|0
61A|1800
61B|800
61C|540
70|0
```

```
SELECT course, _____ AS remaining
  FROM _____ WHERE _____ GROUP BY _____;
```

1.  使用 `FROM` 和 `WHERE` 组合 `finals` 和 `sizes` 表中的信息。
2.  使用 `GROUP BY` 为每门课程创建一个组。
3.  使用 `SELECT` 计算该课程所有期末考场中的座位总数，但不包括最大的考场。

```
CREATE TABLE remaining AS
SELECT course, SUM(seats) - MAX(seats) AS remaining
    FROM finals, sizes WHERE hall=room GROUP BY course;
```

使用 Ok 测试你的代码:

```
python3 ok -q remaining
```

### Q3：考场共享

创建一个名为 `sharing` 的表格，其中包含两列 `course`（字符串）和 `shared`（数字），**对于每门至少使用一个与其他课程共用考场的课程**，表格中都应包含一行。每行包含课程名称，以及该课程与其他课程共享的考场数量。

**注意**：`COUNT(DISTINCT x)` 返回组中 `x` 列的不同值的数量。

您的查询应该能正确处理 `finals` 和 `sizes` 表中可能出现的任何数据。对于上面的示例，结果应该是：
``````
61A|3
61B|2
61C|2
70|1
```

```
SELECT course, COUNT(DISTINCT _____) AS shared
  FROM finals AS a, finals AS b
  WHERE _____ GROUP BY _____;
```

1.  使用 `FROM` 和 `WHERE` 从 `finals` 表中找出所有两个课程共享同一考场的记录。
2.  使用 `GROUP BY` 为每个课程创建一个组。
3.  使用 `SELECT` 计算该课程与其他课程共享的考场数量。

```
CREATE TABLE sharing AS
SELECT a.course, COUNT(DISTINCT a.hall) AS shared
    FROM finals AS a, finals AS b WHERE a.hall = b.hall AND a.course != b.course
    GROUP BY a.course;
```

使用 Ok 来测试你的代码：

```
python3 ok -q sharing
```

### Q4：两个房间

创建一个名为 `pairs` 的表，其中包含一列 `rooms`（字符串），其中包含描述总座位数至少为1000的两个考场的句子，以及它们的座位数。 考场名称应按字母顺序排列。 行应按考场对的总座位数降序排列。

你的查询应该适用于 `finals` 和 `sizes` 表中可能出现的任何数据。对于上述示例，预期结果应为：

**提示：** 当添加数字并将结果包含在字符串中时，请在算术运算周围加上括号：`"1 + 2 = " || (1 + 2)`

```
RSF and Wheeler together have 1600 seats
Pimentel and RSF together have 1400 seats
Li Ka Shing and RSF together have 1200 seats
Pimentel and Wheeler together have 1200 seats
RSF and Stanley together have 1200 seats
Li Ka Shing and Wheeler together have 1000 seats
Morgan and RSF together have 1000 seats
Stanley and Wheeler together have 1000 seats
```

```
  SELECT _____ || " and " || _____ || " together have " || (_____) || " seats" AS rooms
    FROM sizes AS a, sizes AS b WHERE _____
    ORDER BY _____ DESC;
```

1.  使用 `FROM` 和 `WHERE` 找出所有总座位数至少为 1,000 的不同考场组合（按字母顺序排列）。
2.  无需分组
3.  没有分组是必需的

```
CREATE TABLE pairs AS
SELECT a.room || " and " || b.room || " together have " || (a.seats + b.seats) || " seats" AS rooms
    FROM sizes AS a, sizes AS b WHERE a.room < b.room AND a.seats + b.seats >= 1000
    ORDER BY a.seats + b.seats DESC;
```

使用 Ok 来测试你的代码：

```
python3 ok -q pairs
```

## 在本地检查你的分数

你可以运行以下命令在本地检查每个问题的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，请将作业提交到 Gradescope 以获得学分。

## 提交

通过将你编辑的任何文件**上传到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**非**大型实验室的学生都需要填写[考勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了实验课。 大型实验室的学生不需要填写考勤表。
```