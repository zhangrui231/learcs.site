---
title: Discussion 11 Solutions
---

# 讨论 11 | CS 61A 2024 年春季学期

## 讨论 11：SQL

-   [disc11.pdf](/resource/cs61a/disc11.pdf)

**温馨提示：** 使用 Discord 与课程工作人员进行语音聊天。随时在 Discord 的 `#discuss-queue` 频道中向 `@discuss` 发送消息，课程工作人员会加入您小组的语音频道。

小组里派一个人[加入 Discord](https://cs61a.org/articles/discord)。多几个人加入也行，但一个人就够了。

接下来，请切换到 Pensieve：

-   **请大家前往** [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

进入 Pensieve 后就不用回到这个页面了，Pensieve 上有同样的内容（而且功能更多）。如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

遇到问题请在 Discord 的 `#help` 频道里提问.

**小贴士：** 你们中的任何人都可以在小组 Discord 频道里输入带有 `@discuss` 标签的问题，课程工作人员会做出回应。

## 开始之前

如果你们组只有一两个人，可以和房间里的其他组一起讨论.

大家轮流介绍一下自己，然后分享一下在学校附近你最喜欢的餐厅、咖啡馆或者奶茶店。（Kingpin Donuts 也算哦。）

## SELECT 语句

`SELECT` 语句描述了一个基于输入行的输出表。要写一个 SELECT 语句：

1.  使用 `FROM` 和 `WHERE` 子句描述**输入行**。
2.  使用 `SELECT` 和 `ORDER BY` 子句格式化和排序**输出行**和列。

`SELECT` _(步骤 2)_ `FROM` _(步骤 1)_ `WHERE` _(步骤 1)_ `ORDER BY` _(步骤 2)_;

第一步可能需要连接多个表（用逗号分隔），把现有表中两行或多行数据合并成输入行.

`WHERE` 和 `ORDER BY` 子句是可选的。

## 吃披萨啦

`pizzas` 表包含伯克利美味披萨店的名称、营业和结束时间。 `meals` 表包含典型的用餐时间。如果吃饭的时间在披萨店的营业时间内，那这家店就开着.

```
CREATE TABLE pizzas AS
  SELECT "Artichoke" AS name, 12 AS open, 15 AS close UNION
  SELECT "La Val's"         , 11        , 22          UNION
  SELECT "Sliver"           , 11        , 20          UNION
  SELECT "Cheeseboard"      , 16        , 23          UNION
  SELECT "Emilia's"         , 13        , 18;

CREATE TABLE meals AS
  SELECT "breakfast" AS meal, 11 AS time UNION
  SELECT "lunch"            , 13         UNION
  SELECT "dinner"           , 19         UNION
  SELECT "snack"            , 22;
```

### Q1：早点开门

你想在下午一点之前吃到披萨. 创建一个 `opening` 表，其中包含所有在 13 点之前 `open` 的披萨店的名称，并按*反*字母顺序排列。

**`opening`** 表：

| name |
| --- |
| Sliver |
| La Val's |
| Artichoke |

**你的答案**

在 61A 代码中运行

**解决方案**

```
-- 按反字母顺序排列的下午 1 点之前营业的披萨店
CREATE TABLE opening AS
  SELECT name FROM pizzas WHERE open < 13 ORDER BY name DESC;

```

要按反字母顺序排列 `name`，请编写 `ORDER BY name DESC`。

### Q2：学习一下

你打算从披萨店一开门就开始学习，一直到下午两点. 创建一个包含两列的 `study` 表，每家披萨店的 `name` 和您在那里学习的持续时间 `duration`（开门时间和 14 点之间的差值）。对于下午 2 点之前未营业的披萨店，`duration` 应为零。按持续时间降序排列行。

**提示：** 使用 `MAX(_, 0)` 形式的表达式来确保结果不低于 0。

**`study`** 表：

| name | duration |
| --- | --- |
| La Val's | 3 |
| Sliver | 3 |
| Artichoke | 2 |
| Emilia's | 1 |
| Cheeseboard | 0 |

**你的答案**

在 61A 代码中运行

**解决方案**

```
-- 披萨店和结束于 14 点的学习休息时间
CREATE TABLE study AS
  SELECT name, MAX(14 - open, 0) AS duration FROM pizzas ORDER BY duration DESC;

```

要按持续时间降序排列，首先使用 `SELECT ..., ... AS duration ...` 命名列，然后 `ORDER BY duration DESC`。

### Q3：夜宵

什么还在营业以供深夜 `snack`？创建一个叫 `late` 的表，表里有一列叫 `status`，用来描述每家在吃夜宵时间或者之后关门的披萨店的关门时间. **注意：** 不要在你的 SQL 查询里用数字！而是使用连接将每个餐厅的关闭时间与小吃时间进行比较。行可以以任何顺序出现。

**`late`** 表：

| status |
| --- |
| Cheeseboard closes at 23 |
| La Val's closes at 22 |

**你的答案**

在 61A 代码中运行

**解决方案**

```
-- 在夜宵时间还开着的披萨店，以及它们的关门时间
CREATE TABLE late AS
  SELECT name || " closes at " || close AS status FROM pizzas, meals WHERE meal="snack" AND time<=clos;

```为了比较披萨店的 `close` 时间与零食时间：

-   使用 `FROM pizzas, meals` 连接 `pizzas` 和 `meals` 表
-   仅采用 `meal` 等于 `"snack"` 的行
-   比较零食的 `time` 与披萨店的 `close` 时间。

使用 `name || " closes at " || close` 在结果表中生成状态信息。 `||` 运算符将值连接成字符串。

### Q4：双重披萨

如果两餐间隔超过 6 小时，那么在同一家披萨店吃两顿饭也未尝不可，对吧？ 创建一个包含三列的 `double` 表。 `first` 列是较早的一餐，`second` 列是较晚的一餐，`name` 列是披萨店的名称。 仅包含描述**间隔超过 6 小时**的两餐，且该披萨店两餐时段均营业的行。 行可以以任何顺序出现。

**`double`** 表：

| first     | second    | name      |
| --------- | --------- | --------- |
| breakfast | dinner    | La Val's  |
| breakfast | dinner    | Sliver    |
| breakfast | snack     | La Val's  |
| lunch     | snack     | La Val's  |

**你的答案**

在 61A 代码中运行

**解决方案**

```
-- 在同一地点吃两顿饭
CREATE TABLE double AS
  SELECT a.meal AS first, b.meal AS second, name
         FROM meals AS a, meals AS b, pizzas
         WHERE open <= a.time AND a.time <= close AND
               open <= b.time AND b.time <= close AND
               b.time > a.time + 6;

```

使用 `FROM meals AS a, meals AS b, pizzas` 语句，可以使每一行包含两餐以及一家披萨店的信息。 然后，您可以编写 `WHERE` 子句，将 `a.time` 和 `b.time` 分别与 `open` 和 `close` 进行比较，并确保 `a.time` 和 `b.time` 满足所有相关条件。

## 记录场合

请大家填写 [出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (每人每周提交一次)。

**重要提示：** 离开前请务必将房间内的家具恢复原位。 谢谢！

如果你们提前完成，也许可以一起去吃披萨...
