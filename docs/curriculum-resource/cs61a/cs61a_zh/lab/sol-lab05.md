---
title: Lab 5 Solutions
---

# CS 61A 2024 春季 Lab 5 实验解答

## Lab 5 答案

-   [lab05.zip](/resource/cs61a/lab05.zip)

## 解答文件

## 必做题目

## 入门指导视频

这些视频可以帮助你解决本次作业中的编程问题。

> 观看视频需要登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcmlFtWRxO3ZvQyTRiyDZ6s)

## 可变性

如果需要复习可变性概念，请参考下拉菜单。可以直接跳到题目，遇到问题再回头查阅。

Python中，列表和字典等对象是*可变的*，即其内容或状态可以修改。而数字、元组和字符串等对象是*不可变的*，一旦创建就无法更改。

列表最常见的两个修改操作是元素赋值和 `append` 方法。

```
>>> s = [1, 3, 4]
>>> t = s  # 同一个列表的另一个名字
>>> t[0] = 2  # 这会将列表的第一个元素修改为 2，`s` 和 `t` 都会受到影响
>>> s
[2, 3, 4]
>>> s.append(5)  # 这会将 5 添加到列表的末尾，`s` 和 `t` 都会受到影响
>>> t
[2, 3, 4, 5]
```

还有许多其他的列表修改方法：

-   `append(elem)`：将 `elem` 添加到列表的末尾。返回 `None`。
-   `extend(s)`：将可迭代对象 `s` 中的所有元素添加到列表末尾。返回 `None`。
-   `insert(i, elem)`：在索引 `i` 处插入 `elem`。如果 `i` 大于或等于列表的长度，则将 `elem` 插入到末尾。这不会替换任何现有元素，而只会添加新元素 `elem`。返回 `None`。
-   `remove(elem)`：删除列表中第一次出现的 `elem`。返回 `None`。如果列表中不存在 `elem`，则会报错。
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

### Q1: WWPD: 列表变异

> **注意：** 对于所有 WWPD (What Would Python Display?) 问题，如果答案是 `<function...>`，请填写 `Function`；如果报错，填写 `Error`；如果无输出，填写 `Nothing`。

> 使用 Ok 测试你对以下“Python 会显示什么？” (WWPD) 问题的理解：
> 
> ```
> python3 ok -q list-mutation -u
> ```
> 
>   

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

### Q2: 插入项

编写一个函数，输入一个列表 `s`，以及值 `before` 和 `after`。该函数将 `after` 插入到 `s` 中每个值为 `before` 的元素之后，并返回修改后的 `s`。

**注意：** 不要创建或返回新的列表。

> **注意：** 如果 `before` 和 `after` 的值相同，请注意避免在迭代时产生无限循环。如果代码运行时间过长，可能陷入了无限插入的循环。

```
def insert_items(s, before, after):
    """在列表 `s` 中，每次出现 `before` 值之后插入 `after` 值，并返回 `s`。

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
    index = 0
    while index < len(s):
        if s[index] == before:
            s.insert(index + 1, after)
            index += 1
        index += 1
    return s
```

使用 Ok 测试你的代码:

```
python3 ok -q insert_items
```

视频演示讲解:

[YouTube link](https://youtu.be/duHrRpS4TYo)

### Q3: Group By

编写一个函数，该函数接收一个列表 `s` 和一个函数 `fn`，并返回一个字典。

字典的值是来自 `s` 的元素的列表。列表中的每个元素 `e` 都应该被构造为使得 `fn(e)` 对于该列表中的所有元素都相同。每个值的键应该是 `fn(e)`。对于 `s` 中的每个元素 `e`，检查调用 `fn(e)` 返回的值，并将 `e` 添加到相应的组。

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
for x in s:        key = fn(x)        if key in grouped:
            grouped[key].append(x)        else:
            grouped[key] = [x]    return grouped
```

使用 Ok 测试你的代码:

```
python3 ok -q group_by
```

这是一个字典问题! 主要的难点在于理解键存在与否的两种情况。

一旦学生们完成了，告诉他们实际上你可能想使用 `collections.defaultdict(list)` 来解决这个问题，这可能会很有用。

## 迭代器

如果需要复习迭代器相关知识，可以查阅下拉菜单。可以直接跳到题目，遇到问题再回来参考。

**可迭代对象**是可以被迭代的任何值，或者一次一个元素地遍历。我们常用 `for` 循环来遍历可迭代对象:

```
for elem in iterable:
    # 做一些事情
```

通常，**可迭代对象**是指能够通过内置函数 `iter` 产生*迭代器*的对象。而**迭代器**则是指能够通过内置函数 `next` 逐个返回值（即迭代）的对象。

例如，列表是一个可迭代的值。

```
>>> s = [1, 2, 3, 4]
>>> next(s)       # s 是可迭代的，但不是一个迭代器
TypeError: 'list' object is not an iterator
>>> t = iter(s)   # 创建一个迭代器
>>> t
<list_iterator object ...>
>>> next(t)       # 在迭代器上调用 next
1
>>> next(t)       # 再次调用 `next`
2
>>> next(iter(t)) # 对迭代器调用 `iter` 会返回迭代器自身
3
>>> t2 = iter(s)
>>> next(t2)      # 第二个迭代器从 s 的开头开始
1
>>> next(t)       # 第一个迭代器不受第二个迭代器的影响
4
>>> next(t)       # 没有剩余的元素了！
StopIteration
>>> s             # 原始可迭代对象不受影响
[1, 2, 3, 4]
```

您也可以在 `for` 语句中使用迭代器，因为所有迭代器都是可迭代的。但请注意，由于迭代器会记录当前状态，因此通常只能对可迭代对象进行一次完整遍历:
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

> **重要提示：** 如果出现 `StopIteration` 异常，请输入 `StopIteration`**，**如果您认为出现不同的错误，请输入 `Error`**，**如果输出是迭代器对象，请输入 `Iterator`。

> 使用 Ok 来测试您对以下“Python 会显示什么？”问题的了解：
> 
> ```
> python3 ok -q iterators-wwpd -u
> ```
> 
> Python 的内置函数 `map`、`filter` 和 `zip` 返回**迭代器**，而不是列表。

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

### Q5: 统计出现次数

实现 `count_occurrences`，它接受一个迭代器 `t`、一个整数 `n` 和一个值 `x`。 它返回迭代器 `t` 的前 `n` 个元素中，值等于 `x` 的元素个数。

> **重要提示**：务必对 `t` 调用 `next` 函数 `n` 次。 假设 `t` 中至少有 `n` 个元素。

```
def count_occurrences(t, n, x):
    """Return the number of times that x is equal to one of the
    first n elements of iterator t.

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
    count = 0
    for _ in range(n):
        if next(t) == x:
            count += 1
    return count
```

使用 Ok 来测试您的代码：

```
python3 ok -q count_occurrences
```

### Q6: 重复

实现 `repeated`，它接受一个迭代器 `t` 和一个大于 1 的整数 `k`。 它返回迭代器 `t` 中第一个连续出现 `k` 次的值。
> **注意：** 只在必要时调用 `next` 函数。 假设迭代器 `t` 中至少有一个元素连续重复 `k` 次。
> 
> **提示：** 如果遇到 `StopIteration` 错误，说明 `repeated` 函数调用 `next` 的次数过多。

```
def repeated(t, k):
    """返回迭代器 `t` 中第一个连续出现 `k` 次的值，并尽可能减少 `next(t)` 的调用次数。

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
    count = 0
    last_item = None
    while True:
        item = next(t)
        if item == last_item:
            count += 1
        else:
            last_item = item
            count = 1
        if count == k:
            return item
```

使用 Ok 测试你的代码：

```
python3 ok -q repeated
```
在处理列表时，经常会遇到需要反转列表的情况。例如，反转列表 `[1, 2, 3, 4, 5]` 将得到 `[5, 4, 3, 2, 1]`。但有时，只反转列表的一部分，同时保持其他元素的顺序不变，会更有用。例如，将列表 `[1, 2, 3, 4, 5]` 从索引 2 到末尾进行部分反转，结果是 `[1, 2, 5, 4, 3]`。

实现函数 `partial_reverse`，该函数从 `start` 开始反转列表直到列表末尾。这种反转应该是原地反转的，这意味着原始列表会被直接修改。不要在函数内部创建新列表，即使不返回新列表。`partial_reverse` 函数返回 `None`。

> **提示：** 您可以使用多重赋值交换列表 `s` 中索引 `i` 和 `j` 处的元素：`s[i], s[j] = s[j], s[i]`

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
end = len(s) - 1
    while start < end:
        s[start], s[end] = s[end], s[start]
        start, end = start + 1, end - 1
```

你可以使用 Ok 来测试你的代码：

```
python3 ok -q partial_reverse
```