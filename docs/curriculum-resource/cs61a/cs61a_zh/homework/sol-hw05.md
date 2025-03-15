---
title: Homework 5 Solutions
---

# CS 61A 2024春季 作业5答案

## 作业5解答

-   [hw05.zip](/resource/cs61a/hw05.zip)

## 解决方案文件

你可以在 [hw05.py](https://cs61a.org//hw/sol-hw05/hw05.py) 中找到解决方案。

## 必做题目

## 入门指导视频

这些视频能帮助你解决本次作业中的编程问题。

> 观看视频前，请先登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcg5Zd4EMdx9fctIYVfJvnd)

### Q1: 无限冰雹数列

编写一个生成器函数，从数字 `n` 开始生成冰雹数列。数列结束后，生成器应无限输出 1。

下面简单回顾一下冰雹数列的定义：

1.  选取一个正整数 `n` 作为起始值。
2.  如果 `n` 是偶数，则将其除以 2。
3.  如果 `n` 是奇数，则将其乘以 3 并加 1。
4.  继续此过程，直到 `n` 为 1。

尝试以递归方式编写此生成器函数。 如果遇到困难，可以先尝试用迭代方法实现，再考虑如何转换成递归实现。

> **提示：** 因为 `hailstone` 返回一个生成器，所以你可以使用 `yield from` 来调用 `hailstone`！

```
def hailstone(n):
    """Q1: Yields the elements of the hailstone sequence starting at n.
       At the end of the sequence, yield 1 infinitely.

    >>> hail_gen = hailstone(10)
    >>> [next(hail_gen) for _ in range(10)]
    [10, 5, 16, 8, 4, 2, 1, 1, 1, 1]
    >>> next(hail_gen)
    1
    """
yield n
    if n == 1:
        yield from hailstone(n)
    elif n % 2 == 0:
        yield from hailstone(n // 2)
    else:
        yield from hailstone(n * 3 + 1)
```

使用 Ok 测试你的代码：

```
python3 ok -q hailstone
```

### Q2: 归并

编写一个生成器函数 `merge`，它接收两个无限生成器 `a` 和 `b`。这两个生成器都按递增顺序排列，且不包含重复元素。`merge` 函数返回一个新的生成器，其中包含 `a` 和 `b` 的所有元素，同样按递增顺序排列，且没有重复项。

```
def merge(a, b):
    """Q2:
    >>> def sequence(start, step):
    ...     while True:
    ...         yield start
    ...         start += step
    >>> a = sequence(2, 3) # 2, 5, 8, 11, 14, ...
    >>> b = sequence(3, 2) # 3, 5, 7, 9, 11, 13, 15, ...
    >>> result = merge(a, b) # 2, 3, 5, 7, 8, 9, 11, 13, 14, 15
    >>> [next(result) for _ in range(10)]
    [2, 3, 5, 7, 8, 9, 11, 13, 14, 15]
    """
    first_a, first_b = next(a), next(b)
    while True:
        if first_a == first_b:
            yield first_a
            first_a, first_b = next(a), next(b)
        elif first_a < first_b:
            yield first_a
            first_a = next(a)
        else:
            yield first_b
            first_b = next(b)
```

使用 Ok 测试你的代码：

```
python3 ok -q merge
```

### Q3: 生成所有路径

定义一个生成器函数 `yield_paths`，它接收一个树 `t` 和一个值 `value`。该函数返回一个生成器对象，用于生成从 `t` 的根节点到所有标签为 `value` 的节点的路径。

每条路径应表示为树中从根节点到目标节点的标签列表。生成路径的顺序不限。

```
def yield_paths(t, value):
    """Q4: Yields all possible paths from the root of t to a node with the label
    value as a list.

    >>> t1 = tree(1, [tree(2, [tree(3), tree(4, [tree(6)]), tree(5)]), tree(5)])
    >>> print_tree(t1)
    1
      2
        3
        4
          6
        5
      5
    >>> next(yield_paths(t1, 6))
    [1, 2, 4, 6]
    >>> path_to_5 = yield_paths(t1, 5)
    >>> sorted(list(path_to_5))
    [[1, 2, 5], [1, 5]]

    >>> t2 = tree(0, [tree(2, [t1])])
    >>> print_tree(t2)
    0
      2
        1
          2
            3
            4
              6
            5
          5
    >>> path_to_2 = yield_paths(t2, 2)
    >>> sorted(list(path_to_2))
    [[0, 2], [0, 2, 1, 2]]
    """
    if label(t) == value:
yield [value]    for b in branches(t):
for path in yield_paths(b, value):yield [label(t)] + path
```

> 提示：如果觉得无从下手，可以先考虑如何用普通函数解决这个问题。递归调用应该是什么样的？如果是生成器函数，在函数体中进行“递归调用”又会发生什么？

> 提示：尝试自己设计一些简单的例子！当 `t` 是叶节点时，函数应该如何运行？

> 提示：记住，生成器也是迭代器，所以可以使用循环遍历生成器对象！

> 注意：本题要求**生成路径**，而不是返回路径列表！

使用 Ok 测试你的代码：

```
python3 ok -q yield_paths
```
如果当前标签等于 `value`，说明我们找到了一个从根节点到包含 `value` 节点的路径，该路径只包含当前标签，因此我们应该 yield 这个标签。接下来，我们会检查从当前节点的子节点出发，是否存在到达包含 `value` 节点的路径。如果我们找到了这些“部分路径”，只需将当前标签添加到这些路径的开头，就能得到从根节点开始的完整路径。

为此，我们为每个子节点创建一个生成器，用于 yield 这些“部分路径”。通过对每个子节点调用 `yield_paths` 函数，就能得到这样的生成器。然后，因为生成器也是可迭代对象，我们可以遍历这个生成器中的路径，并将当前标签添加到每条路径的开头后 yield。

## 在本地查看你的得分情况

你可以通过运行以下命令在本地查看此作业中每个问题的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对得分感到满意时，请将作业提交到 Gradescope 以获得学分。

## 提交

通过上传你编辑过的任何文件**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

## 考试练习

家庭作业还将包含以前的考试题供你尝试。这些问题没有提交部分；如果你想练习，请随意尝试！

1.  2018 年夏季期末考试 Q7a,b: [Streams and Jennyrators](https://inst.eecs.berkeley.edu/~cs61a/su18/assets/pdfs/61a-su18-final.pdf#page=9)
2.  2019 年春季期末考试 Q1: [Iterators are inevitable](https://cs61a.org/exam/sp19/final/61a-sp19-final.pdf#page=2)
3.  2021 年春季 MT2 Q8: [The Tree of L-I-F-E](https://cs61a.org/exam/sp21/mt2/61a-sp21-mt2.pdf#page=18)
4.  2016 年夏季期末考试 Q8: [Zhen-erators Produce Power](https://inst.eecs.berkeley.edu//~cs61a/su16/assets/pdfs/61a-su16-final.pdf#page=13)
5.  2018 年春季期末考试 Q4a: [Apply Yourself](https://inst.eecs.berkeley.edu/~cs61a/sp18/assets/pdfs/61a-sp18-final.pdf#page=5)
