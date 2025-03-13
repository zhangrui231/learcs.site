---
title: Lab 5 Mutability, Iterators
---

# Lab 5：可变性，迭代器 | CS 61A 2024 春季

## Lab 5：可变性，迭代器

-   [lab05.zip](/resource/cs61a/lab/lab05.zip)

_截止日期：2月28日周三晚上11:59_

## 初始文件

下载 [lab05.zip](/resource/cs61a/lab/lab05.zip)。压缩包里包含了本次实验的初始文件，以及 Ok 自动评分器的副本。

## 必做题目

## 入门指导视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 观看视频前，请先登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcmlFtWRxO3ZvQyTRiyDZ6s)

如果需要复习可变性概念，请参考相关文档。可以直接开始做题，遇到问题再回来查阅。

Python 中，列表和字典等对象是**可变的**，即它们的内容和状态可以被修改。而数字类型、元组和字符串等对象是**不可变的**，一旦创建就无法修改。

列表最常用的修改操作是元素赋值和 `append` 方法。

```
>>> s = [1, 3, 4]
>>> t = s  # 同一个列表的另一个引用
>>> t[0] = 2  # 这会将列表的第一个元素修改为 2，`s` 和 `t` 都会受到影响
>>> s
[2, 3, 4]
>>> s.append(5)  # 这会将 5 追加到列表的末尾，影响 s 和 t
>>> t
[2, 3, 4, 5]
```

列表还有很多其他的修改方法：

-   `append(elem)`：将 `elem` 追加到列表末尾。返回 `None`。
-   `extend(s)`：将可迭代对象 `s` 中的所有元素追加到列表末尾。返回 `None`。
-   `insert(i, elem)`：在索引 `i` 处插入 `elem`。如果 `i` 大于或等于列表的长度，则将 `elem` 插入到末尾。这不会替换任何现有元素，只会添加新元素 `elem`。返回 `None`。
-   `remove(elem)`：移除列表中第一个出现的 `elem`。返回 `None`。如果 `elem` 不在列表中，则会报错。
-   `pop(i)`：删除并返回索引 `i` 处的元素。
-   `pop()`：删除并返回最后一个元素。

字典也支持元素赋值（常用）和 `pop` 方法（较少使用）。

```
>>> d = {2: 3, 4: 16}
>>> d[2] = 4
>>> d[3] = 9
>>> d
{2: 4, 4: 16, 3: 9}
>>> d.pop(4)
16
>>> d
{2: 4, 3: 9}
```

### Q1: WWPD：列表变异

> **注意：** 如果答案是 `<function...>`，请输入 `Function`；如果程序报错，请输入 `Error`；如果没有输出，请输入 `Nothing`。

> 使用 Ok 运行以下“Python 会显示什么？”问题，来检验你的理解：
>
> ```
> python3 ok -q list-mutation -u
> ```

```
>>> s = [6, 7, 8]
>>> print(s.append(6))
______None
>>> s
______[6, 7, 8, 6]
>>> s.insert(0, 9)
>>> s
______[9, 6, 7, 8, 6]
>>> x = s.pop(1)
>>> s
______[9, 7, 8, 6]
>>> s.remove(x)
>>> s
______[9, 7, 8]
>>> a, b = s, s[:]
>>> a is s
______True
>>> b == s
______True
>>> b is s
______False
>>> a.pop()
______8
>>> a + b
______[9, 7, 9, 7, 8]
>>> s = [3]
>>> s.extend([4, 5])
>>> s
______[3, 4, 5]
>>> a
______[9, 7]
>>> s.extend([s.append(9), s.append(10)])
>>> s
______[3, 4, 5, 9, 10, None, None]
```

### Q2：插入元素
编写一个函数，它接受一个列表 `s`，以及两个值 `before` 和 `after`。它将 `after` 插入到 `s` 中每个值为 `before` 的元素之后。它返回 `s`。

**重要提示:** 不允许创建或返回新的列表。

> **请注意：** 如果传入 `before` 和 `after` 的值相等，请确保在迭代时不会创建无限长的列表。如果代码运行时间过长（超过几秒），可能是因为函数进入了插入新值的无限循环。

```
def insert_items(s, before, after):
    """Insert after into s after each occurrence of before and then return s.

    >>> test_s = [1, 5, 8, 5, 2, 3]
    >>> new_s = insert_items(test_s, 5, 7)
    >>> new_s
    [1, 5, 7, 8, 5, 7, 2, 3]
    >>> test_s
    [1, 5, 7, 8, 5, 7, 2, 3]
    >>> new_s is test_s
    True
    >>> double_s = [1, 2, 1, 2, 3, 3]
    >>> double_s = insert_items(double_s, 3, 4)
    >>> double_s
    [1, 2, 1, 2, 3, 4, 3, 4]
    >>> large_s = [1, 4, 8]
    >>> large_s2 = insert_items(large_s, 4, 4)
    >>> large_s2
    [1, 4, 4, 8]
    >>> large_s3 = insert_items(large_s2, 4, 6)
    >>> large_s3
    [1, 4, 6, 4, 6, 8]
    >>> large_s3 is large_s
    True
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q insert_items
```

### Q3: Group By

编写一个函数，它接受一个列表 `s` 和一个函数 `fn` 并返回一个字典。

字典的值是由 `s` 中元素组成的列表。列表中的每个元素 `e` 都应满足 `fn(e)` 的返回值对于该列表中的所有元素均相同。每个列表的键应为 `fn(e)` 的返回值。对于 `s` 中的每个元素 `e`，检查调用 `fn(e)` 返回的值，并将 `e` 添加到相应的组。

```
def group_by(s, fn):
    """Return a dictionary of lists that together contain the elements of s.
    The key for each list is the value that fn returns when called on any of the
    values of that list.

    >>> group_by([12, 23, 14, 45], lambda p: p // 10)
    {1: [12, 14], 2: [23], 4: [45]}
    >>> group_by(range(-3, 4), lambda x: x * x)
    {9: [-3, 3], 4: [-2, 2], 1: [-1, 1], 0: [0]}
    """
    grouped = {}
    for ____ in ____:
        key = ____
        if key in grouped:
            ____
        else:
            grouped[key] = ____
    return grouped
```

使用 Ok 来测试你的代码：

```
python3 ok -q group_by
```

## 迭代器

如果您需要回顾迭代器的相关知识，请参考下拉菜单。可以直接跳到问题部分，如果遇到困难再返回这里。

**可迭代对象**是指可以被迭代的任何值，即可以逐个访问其元素的值。我们用来迭代可迭代对象的一种结构是 for 语句：

```
for elem in iterable:
    # do something
```

通常，**可迭代对象**是指调用内置函数 `iter` 后能返回一个*迭代器*的对象。**迭代器**是一个对象，在其上调用内置函数 `next` 会返回下一个值。

例如，列表就是一种可迭代对象。
```
>>> s = [1, 2, 3, 4]
>>> next(s)       # s 是一个可迭代对象，但不是迭代器
TypeError: 'list' object is not an iterator
>>> t = iter(s)   # 创建一个迭代器
>>> t
<list_iterator object ...>
>>> next(t)       # 在迭代器上调用 next
1
>>> next(t)       # 在同一个迭代器上调用 next
2
>>> next(iter(t)) # 对迭代器调用 iter() 会返回迭代器自身
3
>>> t2 = iter(s)
>>> next(t2)      # 第二个迭代器从 s 的开头重新开始
1
>>> next(t)       # 第一个迭代器不受第二个迭代器的影响
4
>>> next(t)       # 没有剩余的元素了！
StopIteration
>>> s             # 原始的可迭代对象不受影响
[1, 2, 3, 4]
```

你也可以在 `for` 语句中使用迭代器，因为所有迭代器都是可迭代的。但请注意，由于迭代器会保持其状态，因此它们只适合迭代一次：

```
>>> t = iter([4, 3, 2, 1])
>>> for e in t:
...     print(e)
4
3
2
1
>>> for e in t:
...     print(e)
```

有一些内置函数会返回迭代器。

```
>>> m = map(lambda x: x * x, [3, 4, 5])
>>> next(m)
9
>>> next(m)
16
>>> f = filter(lambda x: x > 3, [3, 4, 5])
>>> next(f)
4
>>> next(f)
5
>>> z = zip([30, 40, 50], [3, 4, 5])
>>> next(z)
(30, 3)
>>> next(z)
(40, 4)
```

### Q4: WWPD: 迭代器

> **重要:** 如果发生 `StopIteration` 异常，请输入 `StopIteration`；如果您认为发生不同的错误，请输入 `Error`；如果输出是迭代器对象，请输入 `Iterator`。

> 使用 Ok 来测试您对以下“Python 会显示什么？”问题的了解：
> 
> ```
> python3 ok -q iterators-wwpd -u
> ```
> 
> Python 的内置 `map`、`filter` 和 `zip` 函数返回**迭代器**，而不是列表。

```
>>> s = [1, 2, 3, 4]
>>> t = iter(s)
>>> next(s)
______Error
>>> next(t)
______1
>>> next(t)
______2
>>> next(iter(s))
______1
>>> next(iter(s))
______1
>>> u = t
>>> next(u)
______3
>>> next(t)
______4
```

```
>>> r = range(6)
>>> r_iter = iter(r)
>>> next(r_iter)
______0
>>> [x + 1 for x in r]
______[1, 2, 3, 4, 5, 6]
>>> [x + 1 for x in r_iter]
______[2, 3, 4, 5, 6]
>>> next(r_iter)
______StopIteration
```

```
>>> map_iter = map(lambda x : x + 10, range(5))
>>> next(map_iter)
______10
>>> next(map_iter)
______11
>>> list(map_iter)
______[12, 13, 14]
>>> for e in filter(lambda x : x % 4 == 0, range(1000, 1008)):
...     print(e)
______1000
1004
>>> [x + y for x, y in zip([1, 2, 3], [4, 5, 6])]
______[5, 7, 9]
```

### Q5: 计数出现次数

实现 `count_occurrences`，它接受一个迭代器 `t`、一个整数 `n` 和一个值 `x`。它返回 `t` 的前 `n` 个元素中等于 `x` 的元素数量。

> **重要提示**：对 `t` 调用 `next` 恰好 `n` 次。假设 `t` 中至少有 `n` 个元素。

```
def count_occurrences(t, n, x):
    """返回迭代器 t 的前 n 个元素中 x 等于其中一个元素的次数。
``````
>>> s = iter([10, 9, 10, 9, 9, 10, 8, 8, 8, 7])
    >>> count_occurrences(s, 10, 9)
    3
    >>> t = iter([10, 9, 10, 9, 9, 10, 8, 8, 8, 7])
    >>> count_occurrences(t, 3, 10)
    2
    >>> u = iter([3, 2, 2, 2, 1, 2, 1, 4, 4, 5, 5, 5])
    >>> count_occurrences(u, 1, 3)  # Only iterate over 3
    1
    >>> count_occurrences(u, 3, 2)  # Only iterate over 2, 2, 2
    3
    >>> list(u)                     # Ensure that the iterator has advanced the right amount
    [1, 2, 1, 4, 4, 5, 5, 5]
    >>> v = iter([4, 1, 6, 6, 7, 7, 6, 6, 2, 2, 2, 5])
    >>> count_occurrences(v, 6, 6)
    2
    """
    "***请在此处填写您的代码***"

```

用 Ok 测试你的代码:

```
python3 ok -q count_occurrences
```

  

### Q6: Repeated

实现 `repeated` 函数，它接受一个迭代器 `t` 和一个大于 1 的整数 `k`。 它返回迭代器`t`中，第一个连续出现 `k` 次的值。

> **注意：** 只调用最少次数的`next(t)`。 假设迭代器`t`中，至少存在一个元素连续重复`k`次。
>
> **小提示**：如果您收到 `StopIteration` 异常，则您的 `repeated` 函数调用 `next` 的次数过多。

```
def repeated(t, k):
    """Return the first value in iterator t that appears k times in a row,
    calling next on t as few times as possible.

    >>> s = iter([10, 9, 10, 9, 9, 10, 8, 8, 8, 7])
    >>> repeated(s, 2)
    9
    >>> t = iter([10, 9, 10, 9, 9, 10, 8, 8, 8, 7])
    >>> repeated(t, 3)
    8
    >>> u = iter([3, 2, 2, 2, 1, 2, 1, 4, 4, 5, 5, 5])
    >>> repeated(u, 3)
    2
    >>> repeated(u, 3)
    5
    >>> v = iter([4, 1, 6, 6, 7, 7, 8, 8, 2, 2, 2, 5])
    >>> repeated(v, 3)
    2
    """
    assert k > 1
    "***请在此处填写您的代码***"

```

用 Ok 测试你的代码:

```
python3 ok -q repeated
```

  

## Check Your Score Locally

You can locally check your score on each question of this assignment by running

```
python3 ok --score
```

**This does NOT submit the assignment!** When you are satisfied with your score, submit the assignment to Gradescope to receive credit for it.

## Submit

Submit this assignment by uploading any files you've edited **to the appropriate Gradescope assignment.** [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) has detailed instructions.

In addition, all students who are **not** in the mega lab must complete this [attendance form](https://go.cs61a.org/lab-att). Submit this form each week, whether you attend lab or missed it for a good reason. The attendance form is not required for mega section students.

## Optional Questions

> These questions are optional. If you don't complete them, you will still receive credit for lab. They are great practice, so do them anyway!

### Q7: Sprout Leaves

Define a function `sprout_leaves` that takes in a tree, `t`, and a list of leaves, `leaves`. It produces a new tree that is identical to `t`, but where each old leaf node has new branches, one for each leaf in `leaves`.

For example, say we have the tree `t = tree(1, [tree(2), tree(3, [tree(4)])])`:

```
  1
 / \
2   3
    |
    4
```
如果我们调用 `sprout_leaves(t, [5, 6])`，得到的结果将会是如下的树：

```
       1
     /   \
    2     3
   / \    |
  5   6   4
         / \
        5   6
```

```
def sprout_leaves(t, leaves):
    """Sprout new leaves containing the labels in leaves at each leaf of
    the original tree t and return the resulting tree.

    >>> t1 = tree(1, [tree(2), tree(3)])
    >>> print_tree(t1)
    1
      2
      3
    >>> new1 = sprout_leaves(t1, [4, 5])
    >>> print_tree(new1)
    1
      2
        4
        5
      3
        4
        5

    >>> t2 = tree(1, [tree(2, [tree(3)])])
    >>> print_tree(t2)
    1
      2
        3
    >>> new2 = sprout_leaves(t2, [6, 1, 2])
    >>> print_tree(new2)
    1
      2
        3
          6
          1
          2
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 检查你的代码：

```
python3 ok -q sprout_leaves
```

### Q8: 部分逆序

在处理列表时，列表反转通常很有用。例如，反转列表 `[1, 2, 3, 4, 5]`，将得到 `[5, 4, 3, 2, 1]`。然而，在某些情况下，只反转列表的一部分，同时保持其他元素的顺序不变，可能更有用。例如，从索引 2 开始到列表末尾部分反转列表 `[1, 2, 3, 4, 5]` 将得到 `[1, 2, 5, 4, 3]`。

实现函数 `partial_reverse`，它从索引 `start` 开始反转列表，直到列表末尾。这种反转应该是_原地_操作，这意味着直接修改原始列表。即使不返回新列表，也不要在函数内部创建新的列表。`partial_reverse` 函数返回 `None`。

> **提示：** 你可以使用多重赋值来交换列表 `s` 中索引 `i` 和 `j` 的元素：`s[i], s[j] = s[j], s[i]`

```
def partial_reverse(s, start):
    """Reverse part of a list in-place, starting with start up to the end of
    the list.

    >>> a = [1, 2, 3, 4, 5, 6, 7]
    >>> partial_reverse(a, 2)
    >>> a
    [1, 2, 7, 6, 5, 4, 3]
    >>> partial_reverse(a, 5)
    >>> a
    [1, 2, 7, 6, 5, 3, 4]
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 检查你的代码：

```
python3 ok -q partial_reverse
```