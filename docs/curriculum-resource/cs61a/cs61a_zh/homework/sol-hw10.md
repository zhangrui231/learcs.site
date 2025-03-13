---
title: Homework 10 Solutions
---

# CS 61A 2024春季作业10答案

## Homework 10 答案

-   [hw10.zip](/resource/cs61a/hw10.zip)

## 答案文件

你可以在 [hw10.sql](https://cs61a.org//hw/sol-hw10/hw10.sql) 文件中找到答案。

要检查你的进度，可以直接运行`sqlite3`：

```
python3 sqlite_shell.py --init hw10.sql
```

你也可以用`ok`来检查你的代码：

```
python3 ok
```

## 必做题目

## 入门视频

这些视频或许能帮你更好地解决本次作业中的编程问题。

> 观看视频需要登录你的berkeley.edu邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdu9gX9JS-nvtf4ELt9Vtnm)

## SQL

### 狗狗数据

下面的每个问题，都需要你基于给定的表格创建一个新的表格。

```
CREATE TABLE parents AS
  SELECT "abraham" AS parent, "barack" AS child UNION
  SELECT "abraham"          , "clinton"         UNION
  SELECT "delano"           , "herbert"         UNION
  SELECT "fillmore"         , "abraham"         UNION
  SELECT "fillmore"         , "delano"          UNION
  SELECT "fillmore"         , "grover"          UNION
  SELECT "eisenhower"       , "fillmore";

CREATE TABLE dogs AS
  SELECT "abraham" AS name, "long" AS fur, 26 AS height UNION
  SELECT "barack"         , "short"      , 52           UNION
  SELECT "clinton"        , "long"       , 47           UNION
  SELECT "delano"         , "long"       , 46           UNION
  SELECT "eisenhower"     , "short"      , 35           UNION
  SELECT "fillmore"       , "curly"      , 32           UNION
  SELECT "grover"         , "short"      , 28           UNION
  SELECT "herbert"        , "curly"      , 31;

CREATE TABLE sizes AS
  SELECT "toy" AS size, 24 AS min, 28 AS max UNION
  SELECT "mini"       , 28       , 35        UNION
  SELECT "medium"     , 35       , 45        UNION
  SELECT "standard"   , 45       , 60;
```

即使这些表格中的数据发生变化，你的代码也应该能正常运行。例如，如果题目要求你列出所有名字以'h'开头的狗狗，你应该这样写：

```
SELECT name FROM dogs WHERE "h" <= name AND name < "i";
```

而不是假设 `dogs` 表格只有上面的数据并编写

```
SELECT "herbert";
```

如果`grover`的名字改成`hoover`，或者新增一条名字是`harry`的记录，之前的查询语句依然有效。

### Q1：按父母身高

创建一个名为`by_parent_height`的表，其中包含所有有父母的狗狗的名字，并按照它们父母的身高从高到低排序。

```
-- 所有有父母的狗狗，按父母身高降序排列
CREATE TABLE by_parent_height AS
SELECT child FROM parents, dogs WHERE name = parent ORDER BY height desc;
```

例如，`fillmore`的父母`eisenhower`身高35，所以它应该排在父母是`fillmore`、身高32的`grover`前面。父母身高相同的狗狗，名字可以以任意顺序排列。比如，`barack`和`clinton`都应该排在最后，谁先谁后无所谓。

```
sqlite> select * from by_parent_height;
herbert
fillmore
abraham
delano
grover
barack
clinton
```

使用 Ok 来测试你的代码：

```
python3 ok -q by_parent_height
```

我们需要用到`parents`和`dogs`两张表的信息。 关键在于将狗狗和它们的父母对应起来。 最后，按照身高降序排列结果。

### Q2：狗狗体型

国际犬业联合会 (Fédération Cynologique Internationale) 将标准贵宾犬的身高范围定义为超过 45 厘米且不超过 60 厘米。`sizes` 表描述了这种分类和其他类似的分类，其中狗的身高必须超过 `min` 且小于等于 `max` 才能被归类为相应的 `size`。

创建一个名为 `size_of_dogs` 的表，该表包含两列，分别是每只狗的 `name` 和 `size`。

```
-- 每只狗的体型
CREATE TABLE size_of_dogs AS
SELECT name, size FROM dogs, sizes
    WHERE height > min AND height <= max;
```

输出应如下所示：

```
sqlite> select * from size_of_dogs;
abraham|toy
barack|standard
clinton|standard
delano|standard
eisenhower|mini
fillmore|mini
grover|toy
herbert|mini
```

使用 Ok 来测试你的代码：

```
python3 ok -q size_of_dogs
```

我们知道，至少需要 `dogs` 表和 `sizes` 表中的信息。最后，我们筛选出与狗的体型相符的记录。

### Q3: Sentences

有两对体型相同的兄弟姐妹。创建一个表，其中包含一行字符串，对应于每对兄弟姐妹。每个字符串都应该是一个描述这对兄弟姐妹体型的句子。

```
-- 填写此辅助表是可选的
CREATE TABLE siblings AS
SELECT a.child AS first, b.child AS second FROM parents AS a, parents AS b
    WHERE a.parent = b.parent AND a.child < b.child;
-- 关于具有相同体型的兄弟姐妹的句子
CREATE TABLE sentences AS
SELECT "The two siblings, " || first || " and " || second || ", have the same size: " || a.size
    FROM siblings, size_of_dogs AS a, size_of_dogs AS b
    WHERE a.size = b.size AND a.name = first AND b.name = second;
```

每对兄弟姐妹在输出中应仅出现一次，并且兄弟姐妹应按字母顺序排列（例如，`"barack and clinton..."` 而不是 `"clinton and barack..."`），如下所示：

```
sqlite> select * from sentences;
The two siblings, barack and clinton, have the same size: standard
The two siblings, abraham and grover, have the same size: toy
```

> **提示**: 首先，创建一个包含每对兄弟姐妹的辅助表。这将使在构建主表时更容易比较兄弟姐妹的体型。
> 
> **提示**: 如果你将一个表与其自身连接，请在 `FROM` 子句中使用 `AS` 为每个表指定一个别名。
> 
> **提示**: 为了将两个字符串连接成一个字符串，请使用 `||` 运算符。

使用 Ok 来测试你的代码：

```
python3 ok -q sentences
```

粗略地说，我们需要解决两个任务：

**找出哪些狗是兄弟姐妹**

兄弟姐妹是指有相同父母的狗。这可能涉及到 `parents` 表。

虽然可能想将此表与 `dogs` 表连接，但 `dogs` 表此时并不能提供任何额外信息。此外，我们仍然需要给定狗的兄弟姐妹信息，因为 `parents` 表只是将每只狗与其父母关联起来。

因此，下一步是将所有孩子与所有其他孩子进行匹配，方法是将 parents 表连接到自身。这里唯一有意义的行是代表兄弟姐妹关系的行，因为它们共享同一个父母。

请记住，我们要避免重复！如果狗 A 和 B 是兄弟姐妹，我们不希望 A/B 和 B/A 都出现在最终结果中。我们当然也不希望 A/A 这样的组合出现。强制执行兄弟姐妹名称的排序可确保我们不会遇到任何问题。

**根据兄弟姐妹信息构建句子**

在确定了兄弟姐妹之后，构建句子只需要我们获得每个兄弟姐妹的体型。我们可以像在之前的问题中那样连接 `dogs` 和 `sizes` 表，但没有必要重复这项工作。相反，我们将重用我们的 `size_of_dogs` 表来确定每对兄弟姐妹中每个兄弟姐妹的体型。

### Q4: Low Variance

我们想要创建一个表，包含拥有相同毛发类型的所有狗的身高范围（即最大身高和最小身高之差）。
例如，如果短毛犬的平均身高是 10 厘米，那么为了被包含在输出结果中，所有短毛犬的身高必须在 7 到 13 厘米之间。

为了达到这个目的，我们可以使用 `MIN`、`MAX` 和 `AVG` 函数。对于这个问题，我们需要计算平均身高，并且要保证：

-   所有身高都不能小于平均值的 0.7 倍。
-   所有身高都不能大于平均值的 1.3 倍。

输出结果应首先包含毛发类型，然后是满足条件的高度范围。

```
-- 每个毛发类型的高度范围，其中所有高度与平均高度的差异不超过 30%
CREATE TABLE low_variance AS
SELECT fur, MAX(height) - MIN(height) FROM dogs GROUP BY fur
      HAVING MIN(height) >= .7 * AVG(height) AND MAX(height) <= 1.3 * AVG(height);
-- 示例：
SELECT * FROM low_variance;
-- 预期输出：
-- curly|1
```

_说明_：长毛犬的平均身高是 39.7 厘米，因此，按照低方差标准，每只长毛犬的身高必须在 27.8 厘米到 51.6 厘米之间。但是，`abraham` 是一只长毛犬，身高为 26 厘米，超出了此范围。对于短毛犬，`barack` 的身高超出了有效范围（请检查！）。因此，输出结果中不会包含短毛犬和长毛犬。有两只卷毛犬：`fillmore` 身高 32 厘米，`herbert` 身高 31 厘米。这得到的高度范围是 1 厘米。

使用 Ok 来测试您的代码：

```
python3 ok -q low_variance
```

## 提交

请将您编辑过的文件上传**到 Gradescope 上对应的作业**以完成提交。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

请务必将 `hw10.sql` 提交给自动评分器！

## 考试练习

以下是之前学期的一些 SQL 考试题，您可能会发现它们作为额外的考试练习很有用。

1.  [2019 年秋季期末考试，问题 10：大型游戏](https://cs61a.org/exam/fa19/final/61a-fa19-final.pdf#page=11)
2.  [2019 年夏季期末考试，问题 8：大型 SQL](https://cs61a.org/exam/su19/final/61a-su19-final.pdf#page=11)
3.  [2018 年秋季期末考试，问题 7：SQL 课程](https://inst.eecs.berkeley.edu/~cs61a/fa18/assets/pdfs/61a-fa18-final.pdf#page=9)
