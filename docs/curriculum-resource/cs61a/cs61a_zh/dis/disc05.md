---
title: Discussion 5 Trees
---

# 讨论 5 | CS 61A 2024 年春季学期

## 讨论 5：树

-   [disc05.pdf](/resource/cs61a/disc/disc05.pdf)

选一个人加入你们小组的 Discord 频道。多个人加入也行，但一个人就够了。

现在转到 Pensieve：

-   **大家**：去 [discuss.pensieve.co](http://discuss.pensieve.co/)，用你的 @berkeley.edu 邮箱登录，然后输入小组号码（小组号码就是你们的 Discord 频道号码）。

进了 Pensieve 之后，就不用再回到这个页面了。Pensieve 上的内容和这里一样（而且功能更多）。要是 Pensieve 出了什么问题，再回来这个页面继续讨论。

有问题的话，在 Discord 的 `#help` 频道里发帖求助。

## 开始

大家轮流报一下名字，万一有人忘了。

**图个乐子：** 想一个至少三个音节的长单词，比如 "solitary"、"conundrum" 或者 "ominous"。 今天讨论的时候，尽量多用这个词，但别让人看出来。最后，大家猜猜你用的哪个词。谁用得最多（至少两次），又没被猜出来，谁就赢了（啥奖励也没有，就是个游戏）。

**需要助教帮忙的话**，就往 `discuss-queue` 频道发消息，带上 `@discuss` 标签和你们的小组号码。

如果你们组不到 4 个人，可以和房间里别的组并一下。

上次讨论大家提得最多的建议是加一些提示，所以我们加了。 还有就是多鼓励讨论和合作。 大家多讨论，多合作！

## 树

对于一棵树 `t` 来说：

-   它的根标签可以是任何值，`label(t)` 返回它。
-   它的分支是树，`branches(t)` 返回一个分支列表。
-   可以使用 `tree(label(t), branches(t))` 构造一棵相同的树。
-   你可以调用将树作为参数的函数，例如 `is_leaf(t)`。
-   用树就是这么用的。 别用 `t == x`，`t[0]`，`x in t`，`list(t)` 这些。
-   没有办法改变一棵树（这不会违反抽象屏障）。

这是一个示例树 `t1`，其分支 `branches(t1)[1]` 是 `t2`。

```
t2 = tree(5, [tree(6), tree(7)])
t1 = tree(3, [tree(4), t2])
```

![示例树](/img/cs61a/example_tree_illustration.png)

路径是树的序列，其中每个树都是下一个树的父节点。

你不需要知道 `tree`、`label` 和 `branches` 的具体实现，也能正确使用它们。 下面是上课时讲过的实现方式。

```
def tree(label, branches=[]):
    for branch in branches:
        assert is_tree(branch), 'branches must be trees'
    return [label] + list(branches)

def label(tree):
    return tree[0]

def branches(tree):
    return tree[1:]

def is_leaf(tree):
    return not branches(tree)

def is_tree(tree):
    if type(tree) != list or len(tree) < 1:
        return False
    for branch in branches(tree):
        if not is_tree(branch):
            return False
    return True
```

### Q1：热身

`result` 会是什么值？

```
result = label(min(branches(max([t1, t2], key=label)), key=label))
```

真够绕的！（这可是个大词。）

这是一个关于 `key` 函数如何与 `max` 和 `min` 一起使用的快速回顾，

`max(s, key=f)` 返回 `s` 中 `f(x)` 最大的项 `x`。

```
>>> s = [-3, -5, -4, -1, -2]
>>> max(s)
-1
>>> max(s, key=abs)
-5
>>> max([abs(x) for x in s])
5
```

所以，`max([t1, t2], key=label)` 会返回标签最大的那棵树，也就是 `t2`。

如果你好奇的话，这个表达式没有违反抽象屏障。 因为 `[t1, t2]` 和 `branches(t)` 都是列表（不是树），所以可以对它们用 `min` 和 `max`。

### Q2：Has Path

实现 `has_path` 函数，它接收一棵树 `t` 和一个列表 `p` 作为参数。 这个函数要返回的是：从树 `t` 的根节点开始，是否存在一条路径，其上的标签依次为列表 `p` 中的值。 举个例子，`t1` 有一条从根节点开始，标签为 `[3, 5, 6]` 的路径，但没有标签为 `[3, 4, 6]` 或者 `[5, 6]` 的路径。

**重点**：在写代码之前，先讨论一下上课时讲的关于树的递归函数，要考虑下面这些问题：
-   你会进行什么样的递归调用？
-   它们会返回什么类型的值？
-   返回值可能代表什么含义？
-   你该如何利用这些返回值完成代码实现？

如果遇到困难，可以点击下方的提示按钮查看答案，但请务必先和小组里的其他成员讨论后再看。
:::tip[**提示**]
**你会进行什么样的递归调用？**

像往常一样，你需要在每个分支 `b` 上调用 `has_path`。你需要在比较 `p[0]` 和 `label(t)` 之后进行这个调用。因此，`has_path` 的第二个参数会是 `p` 剩下的部分，即 `has_path(b, p[1:])`。

**它们会返回什么类型的值？**

`has_path` 函数总是会返回一个布尔值 (`bool`)：`True` 或者 `False`。

**返回值可能代表什么含义？**

如果 `has_path(b, p[1:])` 返回 `True`，就说明存在一条经过分支 `b` 的路径，这条路径上的节点标签是 `p[1:]`。

**你该如何利用这些返回值完成代码实现？**

如果你已经确认 `label(t)` 等于 `p[0]`，那么返回 `True` 就意味着存在一条经过 `t` 的路径，这条路径的标签是 `p`，并且经过分支 `b`。返回 `False` 则表示没有经过当前分支的路径，但有可能存在经过其他分支的路径。
:::

```python
def has_path(t, p):
    """Return whether tree t has a path from the root with labels p.

    >>> t2 = tree(5, [tree(6), tree(7)])
    >>> t1 = tree(3, [tree(4), t2])
    >>> has_path(t1, [5, 6])        # This path is not from the root of t1
    False
    >>> has_path(t2, [5, 6])        # This path is from the root of t2
    True
    >>> has_path(t1, [3, 5])        # This path does not go to a leaf, but that's ok
    True
    >>> has_path(t1, [3, 5, 6])     # This path goes to a leaf
    True
    >>> has_path(t1, [3, 4, 5, 6])  # There is no path with these labels
    False
    """
    if p == ____:  # when len(p) is 1
        return True
    elif label(t) != ____:
        return False
    else:
        "*** YOUR CODE HERE ***"
```
Run in 61A Code

如果你的小组需要一些指导，你可以点击下面的提示，但请先与你的小组讨论，然后再阅读提示。
:::tip[**提示**]
第一个基本情况应该检查 `p` 是否是一个长度为 1 的列表，其中 `t` 的标签作为其唯一元素。第二个基本情况应该检查 `p` 的第一个元素是否与 `t` 的标签匹配。

当进入递归情况时，你的代码应该已经检查了 `p[0]` 等于 `label(t)`，因此剩下要检查的只是 `p[1:]` 是否包含通过其中一个分支的路径中的标签。一种方法是使用此模板：

```
for ____:
    if ____:
        return True
return False
```
:::

**讨论时间！** `has_path` 的 `else` 情况可以用一行写完吗？为什么可以或不可以？你可以忽略函数运行的速度。当你的小组有答案时，请向 discuss-queue 频道发送一条消息，其中包含 @discuss 标签、你的讨论小组号码和消息“Maybe？”，课程工作人员将加入你的语音频道以听取你的答案并提供反馈。

### Q3：查找路径

实现 `find_path`，它接受一个带有唯一标签的树 `t` 和一个值 `x`。它返回一个列表，其中包含从 `t` 的根到标记为 `x` 的节点的路径上的节点标签。

如果 `x` 不是 `t` 中的标签，则返回 `None`。假设 `t` 的标签是唯一的。

首先讨论如何进行和使用递归调用。（自己尝试一下；不要只点击提示按钮。这就是你学习的方式。）
:::tip[**提示**]
**你会进行什么样的递归调用？**

在每个分支 `b` 上调用 `find_path(b, x)`。

**它们会返回什么类型的值？**

每个递归调用将返回 `None` 或一个非空的节点标签列表。

**返回值可能代表什么含义？**

如果 `find_path(b, x)` 返回 `None`，则 `x` 不出现在 `b` 中。如果 `find_path(b, x)` 返回一个列表，则它包含通过 `b` 的路径的节点标签，该路径以标记为 `x` 的节点结束。

**你该如何利用这些返回值完成代码实现？**

如果返回一个列表，则它包含路径中的所有标签，除了 `label(t)`，必须将其放在前面。
:::
def find_path(t, x):
    """
    >>> t2 = tree(5, [tree(6), tree(7)])
    >>> t1 = tree(3, [tree(4), t2])
    >>> find_path(t1, 5)
    [3, 5]
    >>> find_path(t1, 4)
    [3, 4]
    >>> find_path(t1, 6)
    [3, 5, 6]
    >>> find_path(t2, 6)
    [5, 6]
    >>> print(find_path(t1, 2))
    None
    """
    if ____:
        return ____
    ____:
        path = ____
        if path:
            return ____
    return None

在 61A 代码中运行此代码

请在与你的小组讨论过并且无法取得进展之后再查看提示。
提示：
如果 `x` 等于 `t` 的标签，则返回包含该标签的列表。

将 `find_path(b, x)` 的递归调用结果赋值给 `path`，以便检查其是否为 `None`，并在其为列表时进行扩展。

对于列表 `path` 和值 `v`，表达式 `[v] + path` 会创建一个新列表，以 `v` 开头，后接 `path` 中的元素。

讨论时间！当你的小组完成此问题后，请解释为什么此函数不需要使用 `is_leaf` 作为基本情况。小组讨论并提出解释。选出一位同学来展示答案，然后在 discuss-queue 频道发送带有 @discuss 标签和小组号码的消息“找到了！”。课程工作人员会加入语音频道，听取解释并提供反馈。

总结与分享

大家轮流让组员猜测你的“大词”（见“入门”部分）。每人只有一次机会。猜测完毕后，公布你的“大词”以及使用次数。

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一份）。