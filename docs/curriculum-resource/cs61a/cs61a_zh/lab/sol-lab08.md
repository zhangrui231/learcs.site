---
title: Lab 8 Solutions
---

# Lab 8 实验解答 – CS 61A 2024年春季

## Lab 8 实验解答

-   [lab08.zip](/resource/cs61a/lab08.zip)

## 解答文件

## 主题

如果需要复习本实验内容，请参考本节。可以直接跳至[问题](#required-questions)，遇到困难时再返回查阅。

## 可变树

一个 `Tree` 实例包含两个实例属性：

-   `label` 是存储在树的根节点的值。
-   `branches` 是 `Tree` 实例的列表，存储树中其他节点的值。

`Tree` 类（省略了其 `__repr__` 和 `__str__` 方法）定义如下：

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

要创建一个 `Tree` 实例，需要一个标签 `x` (可以是任何值) 和一个分支列表 `bs` (包含 `Tree` 实例)。如果想将该实例命名为 `t`，可以这样写：`t = Tree(x, bs)`。

对于树 `t`：

-   它的根节点标签可以是任何值，`t.label` 的值即为该标签。
-   它的分支均为 `Tree` 实例，`t.branches` 的值是一个包含所有分支的**列表**。
-   当 `t.branches` 为空时，`t.is_leaf()` 返回 `True`；否则返回 `False`。
-   要构造一个标签为 `x` 的叶子节点，请编写 `Tree(x)`。

显示树 `t`：

-   `repr(t)` 返回一个 Python 表达式，该表达式的计算结果为等效的树。
-   `str(t)` 为每个节点返回一行，每个节点的缩进都比其父节点多一级，子节点显示在其父节点下方。

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

修改 (也称为变异) 树 `t`：

-   `t.label = y` 将 `t` 的根标签更改为 `y`（任何值）。
-   `t.branches = ns` 将 `t` 的分支更改为 `ns`（`Tree` 实例的列表）。
-   `t.branches` 的变异将修改 `t`。例如，`t.branches.append(Tree(y))` 将添加一个标记为 `y` 的叶子节点作为最右边的分支。
-   `t` 中任何分支的变异都将修改 `t`。例如，`t.branches[0].label = y` 将把最左边分支的根标签更改为 `y`。

```
>>> t.label = 3.0
>>> t.branches[1].label = 5.0
>>> t.branches.append(Tree(2, [Tree(6)]))
>>> print(t)
3.0
  1
    4
    1
  5.0
    9
  2
    6
```

下表总结了函数式抽象和类实现的树数据结构之间的区别:

| \- | 树的构造函数和选择器 | 树类 |
| --- | --- | --- |
| 构造树 | 要构造一个包含标签 `label` 和分支列表 `branches` 的树，我们调用 `tree(label, branches)` | 要构造一个包含标签 `label` 和分支列表 `branches` 的树对象，我们调用 `Tree(label, branches)`（它调用 `Tree.__init__` 方法）。 |
| 标签和分支 | 要获取树 `t` 的标签和分支，我们分别调用 `label(t)` 和 `branches(t)` | 要获取树 `t` 的标签和分支，我们分别访问实例属性 `t.label` 和 `t.branches`。 |
| 可变性 | 函数式树数据结构是不可变的 (在不破坏抽象屏障的前提下)，因为无法对函数调用表达式赋值。 | 可以重新赋值 `Tree` 实例的 `label` 和 `branches` 属性，从而修改树。 |
| 检查树是否为叶子 | 要判断树 `t` 是否为叶节点，我们调用函数 `is_leaf(t)` | 要检查树 `t` 是否为叶节点，我们调用方法 `t.is_leaf()`。此方法只能用于 `Tree` 对象。 |

## 必做题

## 视频教程

这些视频将帮助你更好地完成本次实验的编程题。

> 观看视频需要登录你的 berkeley.edu 邮箱账号。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZc8kuYZU6K1LgdeO_LSK8sL)

## 可变树

### Q1: WWPD (What Would Python Display): 树
阅读`lab08.py`文件中的`Tree`类定义。确保你理解代码中的 doctest 示例。

> 使用 Ok 来测试你对以下“Python会显示什么？”（What Would Python Display?，简称WWPD）问题的掌握程度：
> 
> ```
> python3 ok -q trees-wwpd -u
> ```
> 
> 如果你认为答案是 `<function ...>`，请输入`Function`；如果程序报错，请输入`Error`；如果没有任何输出，请输入`Nothing`。请注意，`Tree`实例的显示形式与创建它们时所用的代码形式相同。

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

### Q2: 累积乘积 (Cumulative Mul)

编写一个名为`cumulative_mul`的函数，该函数会修改树`t`，将每个节点的标签替换为该节点及其所有子节点标签的乘积。

> 注意修改当前节点标签和处理其子树的先后顺序；应该先进行哪个操作？

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
for b in t.branches:
        cumulative_mul(b)
    total = t.label
    for b in t.branches:
        total *= b.label
    t.label = total

# Alternate solution using only one loop
def cumulative_mul(t):
    for b in t.branches:
        cumulative_mul(b)
        t.label *= b.label
```

使用 Ok 测试你的代码：

```
python3 ok -q cumulative_mul
```

### Q3: 修剪小树 (Prune Small)

从树中移除部分节点的操作被称为“修剪”树。

实现`prune_small`函数，该函数接收一个`Tree`类型的`t`和一个数字`n`作为输入。对于每个拥有超过`n`个分支的节点，仅保留标签值最小的`n`个分支，并“修剪”掉其余的分支。

> *提示*：`max`函数接受一个可迭代对象（`iterable`）以及一个可选的`key`参数（该参数是一个单参数函数）。例如，`max([-7, 2, -1], key=abs)`会返回`-7`，因为`abs(-7)`的值大于`abs(2)`和`abs(-1)`。

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
while len(t.branches) > n:        largest = max(t.branches, key=lambda x: x.label)        t.branches.remove(largest)for b in t.branches:        prune_small(b, n)
```

使用 Ok 测试你的代码：

```
python3 ok -q prune_small
```

你可以通过运行以下命令在本地查看你在本次作业中每个问题的得分

```
python3 ok --score
```

注意：这*不会*提交你的作业！当你对你的分数感到满意时，请将作业提交到 Gradescope 以获得学分。

请将你修改过的文件上传到 Gradescope 上对应的作业页面以完成提交。 [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有*不在*大型实验课中的学生都需要填写[出勤表](https://go.cs61a.org/lab-att)。无论你是否参加实验课，或者因故缺席，都请每周提交此表。大型实验课的学生*不需要*填写出勤表。

## 可选问题

### Q4：删除
实现 `delete(t, x)` 函数，该函数的功能是移除树 `t` 中所有标签值为 `x` 的非根节点。每个未被移除的节点的父节点，是它最近的未被移除的祖先节点。即使根节点的标签值是 `x`，根节点也*永远*不会被移除。

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
for b in t.branches:        delete(b, x)        if b.label == x:
            new_branches.extend(b.branches)        else:
            new_branches.append(b)    t.branches = new_branches
```

使用 Ok 来测试你的代码，看看是否能通过所有测试！
```
python3 ok -q delete
```