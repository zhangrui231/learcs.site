---
title: Discussion 12 Solutions
---

# 讨论 12 | CS 61A 2024 春季学期

## 讨论 12：期末复习

-   [disc12.pdf](/resource/cs61a/disc12.pdf)

**提醒：** 使用 Discord 与课程工作人员进行语音聊天。随时在 Discord 的 `#discuss-queue` 频道中向 `@discuss` 发送消息，课程工作人员会加入您小组的语音频道。

小组里派个人[加入 Discord](https://cs61a.org/articles/discord)。 多人加入也可以，但一个人就足够了。

现在切换到 Pensieve：

-   **所有人**：访问 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用您的 @berkeley.edu 电子邮件地址登录，然后输入您的小组号码。（您的小组号码是您的 Discord 频道号码。）

进入 Pensieve 后，就不用再回到这个页面了；Pensieve 具有所有相同的内容（但具有更多功能）。如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

如果您遇到问题，请在 [Discord](https://cs61a.org/articles/discord/) 上的 `#help` 频道中求助。

**小提示：** 你们中的任何人都可以在您小组的 Discord [频道文本聊天](https://support.discord.com/hc/en-us/articles/4412085582359-Text-Channels-Text-Chat-In-Voice-Channels#h_01FMJT412WBX1MR4HDYNR8E95X) 中输入问题，并带有 `@discuss` 标签，会有课上的 staff 来解答。

## 开始

如果您的团队中只有 1 或 2 个人，您可以加入房间里的其他团队。

**破冰游戏：** 大家轮流介绍一下自己，再说说下学期最期待的非 CS/EECS 的课。

## 列表

列表最常见的两个修改操作是项目赋值和 `append` 方法。

```
>>> s = [1, 3, 4]
>>> t = s  # 同一个列表的另一个名字
>>> t[0] = 2  # 这会将列表的第一个元素更改为 2，影响 s 和 t
>>> s
[2, 3, 4]
>>> s.append(5)  # 这会将 5 添加到列表的末尾，影响 s 和 t
>>> t
[2, 3, 4, 5]
```

还有很多其他的列表操作方法：

-   `append(elem)`：将 `elem` 添加到列表的末尾。返回 `None`。
-   `extend(s)`：将可迭代对象 `s` 的所有元素添加到列表的末尾。返回 `None`。
-   `insert(i, elem)`：在索引 `i` 处插入 `elem`。如果 `i` 大于或等于列表的长度，则将 `elem` 插入到末尾。这不会替换任何现有元素，而只会添加新元素 `elem`。返回 `None`。
-   `remove(elem)`：删除列表中 `elem` 的第一次出现。返回 `None`。如果 `elem` 不在列表中，则会出错。
-   `pop(i)`：删除并返回索引 `i` 处的元素。
-   `pop()`：删除并返回最后一个元素。

### Q1：单词绳索

**定义：** Python 中的_绳索_是一个仅包含单字母字符串的列表，但最后一个元素除外，最后一个元素可以是单字母字符串或绳索。

实现 `word_rope`，这是一个 Python 函数，它接受一个非空字符串 `s`，该字符串仅包含字母和空格，并且不以空格开头或结尾。它返回一个_绳索_，其中包含 `s` 的字母，其中每个单词都在一个单独的列表中。

**重要提示：** 不能用字符串的切片，也不能用 `split`、`find` 或者 `index` 这些方法。使用列表操作解决问题。

**提醒：** `s[-1]` 的计算结果为序列 `s` 的最后一个元素。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def word_rope(s):
    """返回字符串 s 中单词的绳索。
```
>>> word_rope('the last week')
    ['t', 'h', 'e', ['l', 'a', 's', 't', ['w', 'e', 'e', 'k']]]
    """
    assert s and s[0] != ' ' and s[-1] != [ ]
    result = []
    word = result
    for x in s:
        if x == ' ':
            word.append([])
            word = word[-1]
        else:
            word.append(x)
    return result
```

在这个实现中，`result` 代表一个绳索结构，而 `word` 则是在这个绳索结构中正在被构建的列表。当 `x` 为空格时，在 `word` 的末尾添加一个空列表，然后将 `word` 指向这个新的空列表。否则，将 `x` 添加至 `word` 的末尾。

## 链接列表

链接列表是一个 `Link` 对象或 `Link.empty`。

你可以通过以下两种方式修改 `Link` 对象 `s`：

-   使用 `s.first = ...` 改变第一个元素
-   使用 `s.rest = ...` 改变剩余的元素

你可以通过调用 `Link` 来创建一个新的 `Link` 对象：

-   `Link(4)` 创建一个长度为 1 且包含 4 的链接列表。
-   `Link(4, s)` 创建一个以 4 开头，后跟链接列表 `s` 的元素的链接列表。

```
class Link:
    """A linked list is either a Link object or Link.empty

    >>> s = Link(3, Link(4, Link(5)))
    >>> s.rest
    Link(4, Link(5))
    >>> s.rest.rest.rest is Link.empty
    True
    >>> s.rest.first * 2
    8
    >>> print(s)
    <3 4 5>
    """
    empty = ()

    def __init__(self, first, rest=empty):
        assert rest is Link.empty or isinstance(rest, Link)
        self.first = first
        self.rest = rest

    def __repr__(self):
        if self.rest:
            rest_repr = ', ' + repr(self.rest)
        else:
            rest_repr = ''
        return 'Link(' + repr(self.first) + rest_repr + ')'

    def __str__(self):
        string = '<'
        while self.rest is not Link.empty:
            string += str(self.first) + ' '
            self = self.rest
        return string + str(self.first) + '>'
```

### Q2：线性子列表

**定义：** 链接列表 `s` 的 *子列表* 是 `s` 中一些元素的有序链接列表。例如，`<3 6 2 5 1 7>` 具有子列表 `<3 2 1>` 和 `<6 2 7>`，但不具有 `<5 6 7>`。

**定义：** 数字链接列表 `s` 的 *线性子列表* 是相邻数字之间的差始终相同的子列表。例如，`<2 4 6 8>` 是 `<1 2 3 4 6 9 1 8 5>` 的线性子列表，因为每对相邻元素之间的差为 2。

实现 `linear`，它接受一个数字链接列表 `s`（`Link` 实例或 `Link.empty`）。它返回 `s` 的最长线性子列表。如果两个线性子列表的长度相同，则返回其中任何一个。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def linear(s):
    """返回链接列表 s 的最长线性子列表。
```
```
>>> s = Link(9, Link(4, Link(6, Link(7, Link(8, Link(10))))))
    >>> linear(s)
    Link(4, Link(6, Link(8, Link(10))))
    >>> linear(Link(4, Link(5, s)))
    Link(4, Link(5, Link(6, Link(7, Link(8)))))
    >>> linear(Link(4, Link(5, Link(4, Link(7, Link(3, Link(2, Link(8))))))))
    Link(5, Link(4, Link(3, Link(2))))
    """
    def complete(first, rest):
        "The longest linear sublist of Link(first, rest) with difference d."
        if rest is Link.empty:
            return Link(first, rest)
        elif rest.first - first == d:
            return Link(first, complete(rest.first, rest.rest))
        else:
            return complete(first, rest.rest)
    if s is Link.empty:
        return s
    longest = Link(s.first) # The longest linear sublist found so far
    while s is not Link.empty:
        t = s.rest
        while t is not Link.empty:
            d = t.first - s.first
            candidate = Link(s.first, complete(t.first, t.rest))
            if length(candidate) > length(longest):
                longest = candidate
            t = t.rest
        s = s.rest
    return longest

def length(s):
    if s is Link.empty:
        return 0
    else:
        return 1 + length(s.rest)
```

以下是三种情况：

- 如果 `rest` 为空，则返回仅包含 `first` 的单元素列表。
- 如果 `rest.first` 属于以 `first` 开头的线性子列表，则构建一个包含 `first` 和 `rest.first` 的列表。
- 否则，执行 `complete(first, rest.rest)`。

这个 while 循环会为每两个可能的起始值创建一个 `candidate` 线性子列表，即 `s.first` 和 `t.first`。线性子列表的其余部分必须在 `t.rest` 中。

## Scheme

### Q3: 递增绳

**定义：** Scheme 中的_绳_（rope）是一个非空列表，其中除了最后一个元素外，只包含数字，最后一个元素可以是数字或绳。*请注意，此处的“绳 (rope)”是一种特殊的、非常规的数据结构。*

实现 `up`，这是一个接受正整数 `n` 的 Scheme 过程。它返回一个包含 `n` 的数字的绳，该绳是最短的绳，其中同一列表中每对相邻的数字都按递增顺序排列。

**提醒：** `quotient` 过程执行向下取整除法，类似于 Python 中的 `//`。 `remainder` 过程类似于 Python 中的 `%`。

**你的答案**

在 61A 代码中运行

**解决方案**

```
(define (up n)
  (define (helper n result)
    (if (zero? n) result
      (helper
        (quotient n 10)
        (let ((first (remainder n 10)))
          (if (< first (car result))
              (cons first result)
              (list first result))
          ))))
  (helper
    (quotient n 10)
    (list (remainder n 10))
    ))

(expect (up 314152667899) '(3 (1 4 (1 5 (2 6 (6 7 8 9 (9)))))))
```

通过比较 `first` 和 `(car result)`，来决定是否将值 `first` `cons` 到 `result` 上，或者创建一个包含 `first` 和 `result` 的新列表。

为了从 `up` 中正确调用 `helper`，需要构建一个仅包含 `n` 的最后一位数字的绳，即 `(remainder n 10)`。

## SQL

`SELECT` 语句描述了一个基于输入行的输出表。 要编写一个：

1. 使用 `FROM` 和 `WHERE` 子句描述**输入行**。
2. **分组**这些行，并使用 `GROUP BY` 和 `HAVING` 子句确定哪些组应显示为输出行。
3. 使用 `SELECT` 和 `ORDER BY` 子句格式化和排序**输出行**和列。

`SELECT` _(步骤 3)_ `FROM` _(步骤 1)_ `WHERE` _(步骤 1)_ `GROUP BY` _(步骤 2)_ `HAVING` _(步骤 2)_ `ORDER BY` _(步骤 3)_;
步骤 1 可能包括使用逗号连接多个表，从而生成包含现有表中两行或多行数据的输入行。

`WHERE`、`GROUP BY`、`HAVING` 和 `ORDER BY` 子句是可选的。

### Q4：一条秘密消息

替换密码用表中的另一个单词替换每个单词，以加密消息。 要解码加密消息，请将每个单词 `x` 替换为代码表中相应的 `y`。

编写一个 select 语句，使用 `code` 表解码 `original` 消息 _It's The End_。

**你的答案**

在 61A 代码中运行

**解决方案**

```
CREATE TABLE original AS
  SELECT 1 AS n, "It's" AS word UNION
  SELECT 2     , "The"      UNION
  SELECT 3     , "End";

CREATE TABLE code AS
  SELECT "Up" AS x, "Down" AS y UNION
  SELECT "Now"    , "Home" UNION
  SELECT "It's"   , "What" UNION
  SELECT "See"    , "Do" UNION
  SELECT "Can"    , "See" UNION
  SELECT "End"    , "Now" UNION
  SELECT "What"   , "You" UNION
  SELECT "The"    , "Happens" UNION
  SELECT "Love"   , "Scheme" UNION
  SELECT "Not"    , "Mess" UNION
  SELECT "Happens", "Go";

SELECT y FROM original, code WHERE word=x ORDER BY n;

```

连接 `original` 表和 `code` 表，确保连接后的行中，`word` 列和 `x` 列的值相同。

接下来该怎么做？ 编写另一个 select 语句，使用相同的 `code` 表解码此加密消息。

**你的答案**

在 61A 代码中运行

**解决方案**

```
CREATE TABLE original AS
  SELECT 1 AS n, "It's" AS word UNION
  SELECT 2     , "The"      UNION
  SELECT 3     , "End";

CREATE TABLE code AS
  SELECT "Up" AS x, "Down" AS y UNION
  SELECT "Now"    , "Home" UNION
  SELECT "It's"   , "What" UNION
  SELECT "See"    , "Do" UNION
  SELECT "Can"    , "See" UNION
  SELECT "End"    , "Now" UNION
  SELECT "What"   , "You" UNION
  SELECT "The"    , "Happens" UNION
  SELECT "Love"   , "Scheme" UNION
  SELECT "Not"    , "Mess" UNION
  SELECT "Happens", "Go";

SELECT b.y
  FROM original, code AS a, code AS b
  WHERE word=a.x AND a.y=b.x
  ORDER BY n;

```

将 `original` 表与别名为 `a` 和 `b` 的 `code` 表连接起来，会生成类似这样的六列数据行：`2|The|The|Happens|Happens|Go`。其中，末尾的 _Go_ 是解码后的消息片段。

**时间安排：** 这是最后一次讨论，但你们可以安排下周与你们的小组会面，为考试做准备。 如果你们想用，RRR 周期间你们平时的讨论室和时间应该仍然可以使用。

## 记录这一时刻

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform) (每人每周提交一次).

**重要：** 请在离开前帮忙把房间里的家具放回原位。 谢谢！
