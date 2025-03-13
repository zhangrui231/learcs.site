---
title: Discussion 12 Final Review
---

# 讨论 12 | CS 61A 2024 年春季学期

## 讨论 12：期末复习

-   [disc12.pdf](/resource/cs61a/disc/disc12.pdf)

**提醒：** 使用 Discord 与课程工作人员进行语音聊天。随时在 Discord 的 `#discuss-queue` 频道中向 `@discuss` 发送消息，课程工作人员会加入您小组的语音频道。

小组里派一个人[加入 Discord](https://cs61a.org/articles/discord)就行。当然，多几个人加入也没问题，但一个人就够了。

现在转到 Pensieve:

-   **所有人**：请前往 [discuss.pensieve.co](http://discuss.pensieve.co/)，用你的 @berkeley.edu 邮箱登录，然后输入你们小组的号码（就是你们的 Discord 频道号）。

登录 Pensieve 之后，就不用再回到这个页面了。Pensieve 上的内容和这里一样（而且功能更多）。如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

有问题的话，可以在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道里提问。

**小提示：** 你们可以在小组的 Discord 频道文本框里输入问题，加上 `@discuss`，课程人员会回复。

## 开始

如果您的团队中只有 1 或 2 个人，您可以加入房间中的其他团队。

**破冰一下：** 大家轮流说一下自己的名字，还有下学期最期待的非 CS/EECS 课程。

## 列表

列表最常见的两个修改操作是项目赋值和 `append` 方法。

```
>>> s = [1, 3, 4]
>>> t = s  # 同一个列表的另一个名字
>>> t[0] = 2  # 这会把列表的第一个元素改成 2，s 和 t 都会受影响
>>> s
[2, 3, 4]
>>> s.append(5)  # 这会将 5 添加到列表的末尾，影响 s 和 t
>>> t
[2, 3, 4, 5]
```

还有许多其他的列表修改方法：

-   `append(elem)`：将 `elem` 添加到列表的末尾。返回 `None`。
-   `extend(s)`：将可迭代对象 `s` 中的所有元素添加到列表末尾。返回 `None`。
-   `insert(i, elem)`：在索引 `i` 处插入 `elem`。如果 `i` 大于或等于列表的长度，则将 `elem` 插入到末尾。这不会替换任何现有元素，只会添加新元素 `elem`。返回 `None`。
-   `remove(elem)`：删除列表中第一次出现的 `elem` 元素。返回 `None`。如果 `elem` 不在列表里，会报错。
-   `pop(i)`：删除并返回索引 `i` 处的元素。
-   `pop()`：删除并返回最后一个元素。

### Q1：单词绳索

**定义：** 在 Python 中，_绳索_是一个列表，其中只包含单字母的字符串，但最后一个元素可以是单字母字符串，也可以是另一个绳索。

实现 `word_rope`，一个 Python 函数，它接受一个非空字符串 `s`，该字符串仅包含字母和空格，并且不以空格开头或结尾。返回一个_绳索_，包含字符串 `s` 中的字母，并且每个单词都位于单独的列表中。

**重要：** 不能用字符串的切片、`split`、`find` 或者 `index` 方法。要用列表操作来解决。
**提示：** `s[-1]` 会返回序列 `s` 的最后一个元素。
```python
 def word_rope(s):
    """Return a rope of the words in string s.
    >>> word_rope('the last week')
    ['t', 'h', 'e', ['l', 'a', 's', 't', ['w', 'e', 'e', 'k']]]
    """
    assert s and s[0] != ' ' and s[-1] != [ ]
    result = []
    word = _____
    for x in s:
        if x == ' ':
            "*** YOUR CODE HERE ***"
        else:
            "*** YOUR CODE HERE ***"
    return result
 ```
在 61A 代码编辑器中运行

在这个实现中，`result` 代表一个绳索，`word` 则是绳索中正在构建的列表。当 `x` 是空格时，将一个空列表添加到 `word` 的末尾，然后将 `word` 指向这个新的空列表。否则，将 `x` 添加到 `word` 的末尾。

## 链表

链表是一个 `Link` 对象或者 `Link.empty`。

你可以通过以下两种方式修改 `Link` 对象 `s`：

-   使用 `s.first = ...` 改变第一个元素
-   使用 `s.rest = ...` 改变剩余的元素

你可以通过调用 `Link` 创建一个新的 `Link` 对象：

-   `Link(4)` 创建一个长度为 1，包含 4 的链表。
-   `Link(4, s)` 创建一个以 4 开头，后跟链表 `s` 的元素的链表。

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

### Q2: 线性子列表

**定义：** 链表 `s` 的一个 _子列表_ 是由 `s` 中的部分元素按照原顺序组成的链表。

**定义：** 对于数字链表 `s`，其 _线性子列表_ 指的是一个子列表，其中任意两个相邻数字的差值都相等。
实现 `linear` 函数, 该函数接收一个数字链表 `s` (可以是 `Link` 实例或 `Link.empty` 中的一种).  该函数返回 `s` 中最长的等差子链表. 如果存在两个长度相同的等差子链表, 返回任意一个即可.
```python
def linear(s):
    """
    Return the longest linear sublist of a linked list s.
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
            return ____
        elif ____ == d:
            return Link(____, complete(____, ____))
        else:
            return complete(first, rest.rest)
    
    if s is Link.empty:
        return s
    
    longest = Link(s.first)  # The longest linear sublist found so far
    while s is not Link.empty:
        t = s.rest
        while t is not Link.empty:
            d = t.first - s.first
            candidate = ____
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
Run in 61A Code

以下是三种情况:

- 如果 `rest` 为空，则返回一个仅包含 `first` 的单元素列表。
- 如果 `rest.first` 可以接在以 `first` 开头的等差子链表之后, 那么构建一个包含 `first` 和 `rest.first` 的列表.
- 否则，`complete(first, rest.rest)`。

这个 while 循环针对每两个可能的起始值 `s.first` 和 `t.first` 创建一个候选的等差子链表. 该子链表的剩余部分必须存在于 `t.rest` 中.

## Scheme

### Q3: Increasing Rope

**定义:** Scheme 中的 _rope_ (这里我们称之为“绳索列表”) 是一个非空列表，其中仅包含数字，但最后一个元素除外，该元素可以是数字或 rope。

实现 `up`，这是一个接受正整数 `n` 的 Scheme 过程。它返回一个包含 `n` 的数字的 rope，该 rope 是最短的 rope，其中同一列表中每对相邻的数字都按递增顺序排列。

**提醒**：`quotient` 过程执行向下取整除法，类似于 Python 中的 `//`。 `remainder` 过程类似于 Python 中的 `%`。
```scheme
(define (up n)
  (define (helper n result)
    (if (zero? n) result
        (helper (quotient n 10)
                (let ((first (remainder n 10)))
                  (cons first (if (null? result) '() (list result)))))))
  (helper (quotient n 10) '()))

(expect (up 314152667899) '(3 (1 4 (1 5 (2 6 (6 7 8 9 (9)))))))

```
Run in 61A Code

将 `first` 与 `(car result)` 进行比较，以决定是将值 `first` `cons` 到 `result` 上，还是形成一个包含 `first` 和 `result` 作为元素的新列表。

为了从 `up` 中正确调用 `helper`，需要构建一个仅包含 `n` 的最后一位数字的 rope，即 `(remainder n 10)`。

## SQL

`SELECT` 查询语句描述了基于输入行的输出表。要编写一个：
1.  使用 `FROM` 和 `WHERE` 子句来描述**输入行**。
2.  对这些行进行**分组**，并使用 `GROUP BY` 和 `HAVING` 子句来确定哪些分组应该作为输出行显示。
3.  使用 `SELECT` 和 `ORDER BY` 子句来格式化和排序**输出行**和列。

`SELECT` _(步骤 3)_ `FROM` _(步骤 1)_ `WHERE` _(步骤 1)_ `GROUP BY` _(步骤 2)_ `HAVING` _(步骤 2)_ `ORDER BY` _(步骤 3)_;

步骤 1 可能涉及连接多个表（使用逗号分隔），从而形成由现有表中两行或多行数据组成的输入行。

`WHERE`、`GROUP BY`、`HAVING` 和 `ORDER BY` 子句是可选的。

### Q4：一个秘密消息

替换密码用表中的另一个单词替换每个单词，以加密消息。 要解码加密消息，请将每个单词 `x` 替换为代码表中对应的 `y`。

编写一个 select 语句，使用 `code` 表解码 `original` 消息 _It's The End_。
```sql
 CREATE TABLE original AS
    SELECT 1 AS n, "It's" AS word UNION
    SELECT 2, "The" UNION
    SELECT 3 , "End";
 
 CREATE TABLE code AS
    SELECT "Up" AS x, "Down" AS y UNION
    SELECT "Now", "Home" UNION
    SELECT "It's" , "What" UNION
    SELECT "See", "Do" UNION
    SELECT "Can", "See" UNION
    SELECT "End", "Now" UNION
    SELECT "What" , "You" UNION
    SELECT "The", "Happens" UNION
    SELECT "Love" , "Scheme" UNION
    SELECT "Not", "Mess" UNION
    SELECT "Happens", "Go";
 SELECT "REPLACE THIS LINE WITH YOUR SOLUTION";
 ```
在 61A 代码环境中运行

连接 `original` 表和 `code` 表，并确保连接后的行中 `word` 和 `x` 的值相同。

现在会发生什么？ 编写另一个 select 语句，使用相同的 `code` 表解码此加密消息。
```sql
CREATE TABLE original AS
    SELECT 1 AS n, "It's" AS word UNION
    SELECT 2 , "The" UNION
    SELECT 3 , "End";

CREATE TABLE code AS
    SELECT "Up" AS x, "Down" AS y UNION
    SELECT "Now" , "Home" UNION
    SELECT "It's" , "What" UNION
    SELECT "See" , "Do" UNION
    SELECT "Can" , "See" UNION
    SELECT "End" , "Now" UNION
    SELECT "What" , "You" UNION
    SELECT "The" , "Happens" UNION
    SELECT "Love" , "Scheme" UNION
    SELECT "Not" , "Mess" UNION
    SELECT "Happens", "Go";

SELECT  "REPLACE THIS LINE WITH YOUR SOLUTION";
```
在 61A 代码环境中运行

将 `original` 表与 `code AS a` 和 `code AS b` 连接起来，会生成类似这样的六列数据行：`2|The|The|Happens|Happens|Go`，其中末尾的 _Go_ 就是解码后的消息片段。

**时间安排：** 这是最后一次讨论课了，不过大家可以约一下，下周和组员们一起复习备考。如果需要，你们平时的讨论室和时间在 RRR 周仍然可以使用。

## 记录这一时刻

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每周每人提交一份）。

**重要提示：** 离开前，请大家帮忙把房间里的家具恢复原位。 谢谢合作！
