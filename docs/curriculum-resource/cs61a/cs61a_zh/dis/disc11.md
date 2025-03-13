---
title: Discussion 11 SQL
---

# 第 11 次讨论 | CS 61A 2024 年春季学期

## 第 11 次讨论：SQL

-   [disc11.pdf](/resource/cs61a/disc/disc11.pdf)

**提醒：** 使用 Discord 与课程工作人员进行语音聊天。随时在 Discord 的 `#discuss-queue` 频道中向 `@discuss` 发送消息，课程工作人员会加入您小组的语音频道。

推荐小组里选一个人[加入 Discord](https://cs61a.org/articles/discord)。当然，多几个人加入也行，但一个就够用了。

接下来，请切换到 Pensieve：

-   **所有人**：大家请前往 [discuss.pensieve.co](http://discuss.pensieve.co/)，用你们的 @berkeley.edu 邮箱登录，然后输入小组号码（就是你们的 Discord 频道号码）。

登录 Pensieve 之后，就不用再回到这个页面了。Pensieve 上的内容和这里一样（而且功能更多）。如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

如果遇到任何问题，可以在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道里发帖求助。

**小提示：** 大家可以在小组的 Discord 频道文本框里输入带有 `@discuss` 标签的问题，课程 staff 会及时回复。

## 开始

如果你们组只有一两个人，可以考虑和房间里的其他小组合并。

大家轮流介绍一下自己，然后分享一下在学校附近最喜欢的餐馆、咖啡馆或者奶茶店。（没错，Kingpin Donuts 也算餐馆。）

## SELECT 语句

SELECT 语句的作用是根据输入的数据行，生成一个输出表格。编写方法如下：

1.  用 `FROM` 和 `WHERE` 语句来确定**输入的数据行**。
2.  用 `SELECT` 和 `ORDER BY` 语句来格式化输出的**数据行**和数据列，并进行排序。

`SELECT` _(步骤 2)_ `FROM` _(步骤 1)_ `WHERE` _(步骤 1)_ `ORDER BY` _(步骤 2)_;

第一步可能会用到表连接（用逗号分隔），把多个表里的数据行合并成新的输入行。

`WHERE` 和 `ORDER BY` 子句是可选的。

## 披萨时间

`pizzas` 表包含伯克利美味披萨店的名称、营业和结束时间。 `meals` 表包含典型的用餐时间（针对大学生）。如果用餐时间在 `open` 和 `close` 时间之内或与之相同，则披萨店在该用餐时间营业。

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

### Q1：提早营业

你想在下午一点（13点）之前吃到披萨。创建一个名为 `opening` 的表格，包含所有下午一点（13点）之前开始营业的披萨店名称，并按照店名倒序排列。

**`opening`** 表：

| name |
| --- |
| Sliver |
| La Val's |
| Artichoke |

```sql
-- Pizza places that open before 1pm in alphabetical order
SELECT "REPLACE THIS LINE WITH YOUR SOLUTION";
```
在 61A 代码中运行
:::tip[**提示：***]
要按 `name` 的反字母顺序排序，请编写 `ORDER BY name DESC`。
:::

### Q2：学习时间

你打算从披萨店一开门就在那里学习，一直到下午两点（14点）。创建一个名为 `study` 的表格，包含两列：披萨店的 `name`，以及你在那家店学习的时长 `duration`（从开门到下午两点之间的时间差）。

如果披萨店下午两点之前不营业，那么 `duration` 就应该是零。按持续时间降序排列行。

**提示：** 使用 `MAX(_, 0)` 形式的表达式来确保结果不低于 0。

**`study`** 表：

| name | duration |
| --- | --- |
| La Val's | 3 |
| Sliver | 3 |
| Artichoke | 2 |
| Emilia's | 1 |
| Cheeseboard | 0 |

```sql
-- Pizza places and the duration of a study break that ends at 14 o'clock
SELECT "REPLACE THIS LINE WITH YOUR SOLUTION";
```

在 61A 代码中运行

:::tip[**提示：***]
要按持续时间降序排序，首先使用 `SELECT ..., ... AS duration ...` 命名该列，然后使用 `ORDER BY duration DESC`。
:::

### Q3：深夜小吃

哪些披萨店在深夜 `snack` 时间还开着？创建一个名为 `late` 的表格，包含一列 `status`，里面的内容是一句话，描述每家在 `snack` 时间或之后关门的披萨店的关门时间。

**重要提示：** SQL 查询里*不要*直接用数字！要通过表连接，比较每家店的关门时间和吃宵夜的时间。这些行可以以任何顺序出现。

**`late`** 表：

| status |
| --- |
| Cheeseboard closes at 23 |
| La Val's closes at 22 |
-- 夜宵时段还营业的披萨店，以及关门时间
  SELECT ____ || " closes at " || ____ AS status
  FROM ____
  WHERE ____;
在 61A 代码环境中运行
:::tip[**提示：***]
要比较披萨店的 `close` (关门)时间和宵夜的时间：

-   使用 `FROM pizzas, meals` 连接 `pizzas` 和 `meals` 表
-   仅选择 `meal` 列的值为 `"snack"` 的行
-   比较宵夜的 `time` (时间) 和披萨店的 `close` (关门)时间。

使用 `name || " closes at " || close` 在结果表中创建句子。 `||` 运算符将值连接成字符串。
:::

### Q4：双份披萨

如果两餐间隔超过 6 小时，在同一家披萨店吃两次也没什么问题吧？ 创建一个名为 `double` 的表，包含三列：`first` (较早的一餐), `second` (较晚的一餐) 和 `name` (披萨店名称)。 仅包含满足以下条件的行：两餐间隔超过 6 小时，且披萨店在两餐时段都营业。 行可以以任何顺序出现。

**`double`** 表：

| first | second | name |
| --- | --- | --- |
| breakfast | dinner | La Val's |
| breakfast | dinner | Sliver |
| breakfast | snack | La Val's |
| lunch | snack | La Val's |
sql
-- 同一地点吃两餐
  SELECT ____ AS first, ____ AS second, name
  FROM ____, ____, pizzas
  WHERE ____;
在 61A 代码环境中运行

:::tip[**提示：***]
使用 `FROM meals AS a, meals AS b, pizzas`，这样每行数据就包含了关于两餐和一家披萨店的信息。 然后，您可以编写一个 `WHERE` 子句，将 `a.time` 和 `b.time` 都与 `open` 和 `close` 进行比较，并相互比较，以确保满足所有相关条件。
:::

## 记录场合

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。

**重要提示：** 请在离开前帮忙把房间里的家具放回原位。 谢谢！

如果你们提前完成，也许可以一起去吃披萨...