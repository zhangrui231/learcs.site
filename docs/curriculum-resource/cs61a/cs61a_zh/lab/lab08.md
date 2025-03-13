---
title: Lab 8 Mutable Trees
---

# Lab 8：可变树 | CS 61A 2024年春季

## Lab 8：可变树

-   [lab08.zip](/resource/cs61a/lab/lab08.zip)

_截止日期：3月20日 星期三 晚上11:59_

## 初始文件

下载 [lab08.zip](/resource/cs61a/lab/lab08.zip)。压缩包内包含本次实验的初始文件，以及Ok自动评分器的副本。

## 内容提要

如果你需要复习相关知识，请查阅本节。你也可以直接跳到[问题](#required-questions)，遇到困难时再返回查阅。

一个`Tree`实例包含两个实例属性：

-   `label` 是存储在树的根节点的值。
-   `branches` 是一个`Tree`实例的列表，包含了树中其他节点的标签。

`Tree` 类（省略了 `__repr__` 和 `__str__` 方法）定义如下：

```
class Tree:
    """
    >>> t = Tree(3, [Tree(2, [Tree(5)]), Tree(4)])
    >>> t.label
    3
    >>> t.branches[0].label
    2
    >>> t.branches[1].is_leaf()
    True
    """
    def __init__(self, label, branches=[]):
        for b in branches:
            assert isinstance(b, Tree)
        self.label = label
        self.branches = list(branches)

    def is_leaf(self):
        return not self.branches
```

要创建一个`Tree`实例，需要指定标签`x`（可以是任何值）和分支列表`bs`（`Tree`实例的列表）。如果想将该实例命名为`t`，可以这样写：`t = Tree(x, bs)`。

对于树 `t`：

-   根节点的标签可以是任何值，`t.label` 的值即为该标签。
-   它的分支始终是`Tree`实例，`t.branches` 的值是包含所有分支的**列表**。
-   当`t.branches`为空时，`t.is_leaf()` 返回 `True`；否则返回 `False`。
-   要构造一个标签为 `x` 的叶子节点，请编写 `Tree(x)`。

展示树 `t`：

-   `repr(t)` 返回一个Python表达式，其结果是一个等价的树。
-   `str(t)` 会为每个标签生成一行，相对于父节点缩进一级，子节点显示在父节点下方。

```
>>> t = Tree(3, [Tree(1, [Tree(4), Tree(1)]), Tree(5, [Tree(9)])])

>>> t         # displays the contents of repr(t)
Tree(3, [Tree(1, [Tree(4), Tree(1)]), Tree(5, [Tree(9)])])

>>> print(t)  # displays the contents of str(t)
3
  1
    4
    1
  5
    9
```

修改（也称为变异）树 `t`：

-   `t.label = y` 将`t`的根节点标签修改为`y`（可以是任何值）。
-   `t.branches = ns` 将`t`的分支修改为`ns`（一个包含`Tree`实例的列表）。
-   对`t.branches`进行变异操作会改变`t`本身。例如，`t.branches.append(Tree(y))` 会在最右侧添加一个标签为`y`的叶子节点。
-   对`t`的任何分支进行变异操作都会改变`t`本身。例如，`t.branches[0].label = y` 会将最左侧分支的根节点标签修改为`y`。

下表总结了函数式抽象实现的树数据结构与类实现的树数据结构之间的区别：

| \- | 树的构造和选择函数 | 树类 |
| --- | --- | --- |
| 构造树 | 给定`label`和`branches`列表，调用`tree(label, branches)`来构造树 | 给定`label`和`branches`列表，调用`Tree(label, branches)`（实际调用的是`Tree.__init__`方法）来构造树对象。 |
| 标签和分支 | 获取树`t`的标签或分支，分别调用`label(t)`或`branches(t)` | 获取树`t`的标签或分支，分别访问实例属性`t.label`或`t.branches`。 |
| 可变性 | 函数式树数据结构是不可变的（在不破坏抽象屏障的前提下），因为无法对函数调用表达式赋值 | `Tree`实例的`label`和`branches`属性可以被重新赋值，从而改变树本身。 |
| 检查是否为叶子节点 | 检查树`t`是否为叶子节点，调用函数`is_leaf(t)` | 检查树`t`是否为叶子节点，调用方法`t.is_leaf()`。该方法只能在`Tree`对象上调用。 |

## 必做练习

## 入门指导视频
这些视频或许能帮你更好地解决这次作业中的编程问题。

> 要观看这些视频，请先登录你的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZc8kuYZU6K1LgdeO_LSK8sL)

## 可变树结构

### Q1：WWPD：树

请阅读 `lab08.py` 文件中的 `Tree` 类的定义，并确保理解其中的 doctests (文档测试)。

> 使用 Ok 来测试你对以下“Python 会显示什么？”问题的掌握程度:
>
> ```
> python3 ok -q trees-wwpd -u
> ```
>
> 如果答案是 `<function ...>`，请输入 `Function`；如果报错，请输入 `Error`；如果没有任何显示，请输入 `Nothing`。 请注意，`Tree` 实例的显示形式与其构造方式一致。

```
>>> t = Tree(1, Tree(2))
______Error
>>> t = Tree(1, [Tree(2)])
>>> t.label
______1
>>> t.branches[0]
______Tree(2)
>>> t.branches[0].label
______2
>>> t.label = t.branches[0].label
>>> t
______Tree(2, [Tree(2)])
>>> t.branches.append(Tree(4, [Tree(8)]))
>>> len(t.branches)
______2
>>> t.branches[0]
______Tree(2)
>>> t.branches[1]
______Tree(4, [Tree(8)])
```

### Q2：累积乘积

编写一个名为 `cumulative_mul` 的函数，该函数会修改树 `t`，将每个节点的标签替换为该节点及其所有子节点标签的乘积。

> **提示**：注意修改节点标签和处理子树的顺序，哪个应该放在前面？

```
def cumulative_mul(t):
    """Mutates t so that each node's label becomes the product of its own
    label and all labels in the corresponding subtree rooted at t.

    >>> t = Tree(1, [Tree(3, [Tree(5)]), Tree(7)])
    >>> cumulative_mul(t)
    >>> t
    Tree(105, [Tree(15, [Tree(5)]), Tree(7)])
    >>> otherTree = Tree(2, [Tree(1, [Tree(3), Tree(4), Tree(5)]), Tree(6, [Tree(7)])])
    >>> cumulative_mul(otherTree)
    >>> otherTree
    Tree(5040, [Tree(60, [Tree(3), Tree(4), Tree(5)]), Tree(42, [Tree(7)])])
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 测试你的代码：

```
python3 ok -q cumulative_mul
```

### Q3：修剪小树

从树中删除一些节点称为_修剪_树。

完成函数 `prune_small`，它接受一个树 `t` 和一个数字 `n` 作为参数。 对于每个拥有超过 `n` 个分支的节点，仅保留标签最小的 `n` 个分支，并删除（_修剪_）其余分支。

> **提示**：`max` 函数可以接受一个可迭代对象 `iterable` 和一个可选的 `key` 参数（该参数是一个单参数函数）。 例如，`max([-7, 2, -1], key=abs)` 会返回 `-7`，因为 `abs(-7)` 的值最大。

```
def prune_small(t, n):
    """Prune the tree mutatively, keeping only the n branches
    of each node with the smallest labels.

    >>> t1 = Tree(6)
    >>> prune_small(t1, 2)
    >>> t1
    Tree(6)
    >>> t2 = Tree(6, [Tree(3), Tree(4)])
    >>> prune_small(t2, 1)
    >>> t2
    Tree(6, [Tree(3)])
    >>> t3 = Tree(6, [Tree(1), Tree(3, [Tree(1), Tree(2), Tree(3)]), Tree(5, [Tree(3), Tree(4)])])
    >>> prune_small(t3, 2)
    >>> t3
    Tree(6, [Tree(1), Tree(3, [Tree(1), Tree(2)])])
    """
    while ___________________________:
        largest = max(_______________, key=____________________)
        _________________________
    for __ in _____________:
        ___________________

```

使用 Ok 测试你的代码：

```
python3 ok -q prune_small
```

## 在本地查看你的分数

你可以通过运行以下命令在本地查看本次作业中每个题目的得分情况

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

请将你修改过的文件上传到 Gradescope 上对应的作业提交。 [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验室的学生都必须填写此[出勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论你是否参加了实验室，或者因为正当理由错过了它。 大型实验室的学生不需要填写出勤表。

## 可选问题
### Q4: 删除

实现一个名为 `delete` 的函数，该函数接收一棵树 `t` 作为输入，并移除其中所有值为 `x` 的非根节点。每个未被移除的节点的父节点，是它最近的未被删除的祖先节点。根节点永远不会被移除，即使它的值是 `x`。

```
def delete(t, x):
    """Remove all nodes labeled x below the root within Tree t. When a non-leaf
    node is deleted, the deleted node's children become children of its parent.

    The root node will never be removed.

    >>> t = Tree(3, [Tree(2, [Tree(2), Tree(2)]), Tree(2), Tree(2, [Tree(2, [Tree(2), Tree(2)])])])
    >>> delete(t, 2)
    >>> t
    Tree(3)
    >>> t = Tree(1, [Tree(2, [Tree(4, [Tree(2)]), Tree(5)]), Tree(3, [Tree(6), Tree(2)]), Tree(4)])
    >>> delete(t, 2)
    >>> t
    Tree(1, [Tree(4), Tree(5), Tree(3, [Tree(6)]), Tree(4)])
    >>> t = Tree(1, [Tree(2, [Tree(4), Tree(5)]), Tree(3, [Tree(6), Tree(2)]), Tree(2, [Tree(6),  Tree(2), Tree(7), Tree(8)]), Tree(4)])
    >>> delete(t, 2)
    >>> t
    Tree(1, [Tree(4), Tree(5), Tree(3, [Tree(6)]), Tree(6), Tree(7), Tree(8), Tree(4)])
    """
    new_branches = []
    for _________ in ________________:
        _______________________
        if b.label == x:
            __________________________________
        else:
            __________________________________
    t.branches = ___________________

```

使用 Ok 运行测试来检查你的代码
```
python3 ok -q delete
```
