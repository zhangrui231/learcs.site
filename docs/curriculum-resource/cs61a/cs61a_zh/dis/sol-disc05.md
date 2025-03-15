---
title: Discussion 5 Solutions
---

# Discussion 5 | CS 61A 2024年春季学期

## Discussion 5: 树

-   [disc05.pdf](/resource/cs61a/disc05.pdf)

小组里派个人加入 Discord。可以多个人加入，但一个人就够了。

现在转到 Pensieve：

-   所有人 前往 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用你的 @berkeley.edu 邮箱登录，然后输入你的小组号码。（你的小组号码是你的Discord频道号码。）

进了 Pensieve 之后，就不用再回到这个页面了；Pensieve具有所有相同的内容（但具有更多功能）。 如果 Pensieve 出了问题，就回到这个页面继续讨论。

如果你遇到问题，请在[Discord](https://cs61a.org/articles/discord/)上的`#help`频道中发帖。

## 开始

大家轮流报一下名字，万一有人忘了。

**好玩的是：** 想一个至少三个音节的词，例如“solitary”、“conundrum”或“ominous”。 尝试在今天的讨论中尽量多用这个词，但别让人猜出来。 谁用这个词的次数最多（至少两次），而且没被组里的人猜到，谁就赢了。（你什么也赢不了；这只是一个游戏。）

**想找助教帮忙**，就往 `discuss-queue` 频道发消息，带上 @discuss 标签和你的小组号码。

如果你们组不到 4 个人，可以和房间里的其他组并一下。

上次讨论大家提得最多的建议是加一些提示，所以我们加了。 第二个建议是多讨论多合作。大家讨论起来，合作起来！

## 树

对于树 `t` 来说：

-   它的根节点标签可以是任何值，`label(t)` 会返回这个值。
-   它的分支是树，`branches(t)` 返回一个分支列表。
-   可以用 `tree(label(t), branches(t))` 来创建一个一模一样的树。
-   你可以调用将树作为参数的函数，例如 `is_leaf(t)`。
-   这就是操作树的方法。不要用 `t == x` 或者 `t[0]` 或者 `x in t` 或者 `list(t)` 这些。
-   没办法修改树（这样才不会破坏抽象屏障）。

这是一个示例树 `t1`，它的一个分支 `branches(t1)[1]` 是 `t2`。

```
t2 = tree(5, [tree(6), tree(7)])
t1 = tree(3, [tree(4), t2])
```

![示例树](/img/cs61a/example_tree_illustration.png)

路径是树的序列，序列中每个树都是它后面那棵树的父节点。

你不需要知道 `tree`、`label` 和 `branches` 是怎么实现的也能正确使用它们，下面是上课时讲的实现方法。

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

### 问题 1：预热

`result` 绑定的是什么值？

```
result = label(min(branches(max([t1, t2], key=label)), key=label))
```

**答案**

6：`max([t1, t2], key=label)` 的计算结果是 `t2` 树，因为它的标签 5 大于 `t1` 的标签 3。 在 `t2` 的分支（都是叶子）中，标签为 6 的左侧分支具有较小的标签。

真够绕的！（这算是个大词。）

这里快速回顾一下 `key` 函数如何与 `max` 和 `min` 一起使用，

`max(s, key=f)` 返回 `s` 中的项 `x`，其中 `f(x)` 最大。

```
>>> s = [-3, -5, -4, -1, -2]
>>> max(s)
-1
>>> max(s, key=abs)
-5
>>> max([abs(x) for x in s])
5
```

因此，`max([t1, t2], key=label)` 返回具有最大标签的树，在本例中为 `t2`。

如果您想知道，此表达式不违反抽象屏障。 `[t1, t2]` 和 `branches(t)` 都是列表（不是树），因此可以对它们调用 `min` 和 `max`。

### 问题 2：是否存在路径

实现 `has_path`，它接受一棵树 `t` 和一个列表 `p`。 它返回从 `t` 的根开始是否存在标签为 `p` 的路径。 例如，`t1` 有一条从其根开始的标签为 `[3, 5, 6]` 的路径，但没有 `[3, 4, 6]` 或 `[5, 6]` 的路径。

**注意**：在尝试实现此函数之前，请讨论讲座中关于树处理函数的递归调用的这些问题：

-   你会进行哪些递归调用？
-   它们返回什么类型的值？
-   可能的返回值意味着什么？
-   你如何使用这些返回值来完成你的实现？

如果您遇到困难，您可以单击下面的提示按钮查看我们对这些问题的解答，但_请_在您的整个小组都同意之前不要这样做。

**你会进行哪些递归调用？**

像往常一样，你将在每个分支 `b` 上调用 `has_path`。 你将在比较 `p[0]` 和 `label(t)` 之后进行此调用，因此 `has_path` 的第二个参数将是 `p` 的其余部分：`has_path(b, p[1:])`。

**它们返回什么类型的值？**

`has_path` 总是返回一个 `bool` 值：`True` 或 `False`。

**可能的返回值意味着什么？**

如果 `has_path(b, p[1:])` 返回 `True`，则存在一条通过分支 `b` 的路径，其中 `p[1:]` 是节点标签。

**你如何使用这些返回值来完成你的实现？**

如果你已经检查过 `label(t)` 等于 `p[0]`，则 `True` 返回值表示存在一条通过 `t` 的路径，该路径使用该分支 `b` 标记为 `p`。 `False` 值表示没有通过该分支的路径，但可能存在通过不同分支的路径。

**你的解答**

在 61A 代码中运行
**解法**

```
def has_path(t, p):
    """返回从树 t 的根节点开始，是否存在一条标签序列为 p 的路径。

    >>> t2 = tree(5, [tree(6), tree(7)])
    >>> t1 = tree(3, [tree(4), t2])
    >>> has_path(t1, [5, 6])        # 这条路径不是从 t1 的根节点开始的
    False
    >>> has_path(t2, [5, 6])        # 这条路径是从 t2 的根节点开始的
    True
    >>> has_path(t1, [3, 5])        # 这条路径没有到达叶节点，但这没关系
    True
    >>> has_path(t1, [3, 5, 6])     # 这条路径到达了叶节点
    True
    >>> has_path(t1, [3, 4, 5, 6])  # 不存在标签序列为这些值的路径
    False
    """
    if p == [label(t)]:
        return True
    elif label(t) != p[0]:
        return False
    else:
        return any([has_path(b, p[1:]) for b in branches(t)])

```

基本情况的表达式 `p == [label(t)]` 检查两件事：`p` 是否只包含一个元素，且该元素的值是否等于 `label(t)`。 即使使用更长的，不符合模板的表达式，也有效，例如 `if len(p) == 1 and p[0] == label(t)`。

递归情况说明，如果分支 `b` 上存在一条标签序列为 `p[1:]` 的路径，那么树 `t` 上就存在一条标签序列为 `p` 的路径。

如果你的小组需要一些指导，你可以点击下面的提示，但在阅读提示之前，请先与你的小组讨论。

第一个基本情况应该检查 `p` 是否为一个长度为 1 的列表，且该列表中唯一的元素是否为 `t` 的标签值。 第二个基本情况应该检查 `p` 的第一个元素的值是否与 `t` 的标签值相等。

进入递归情况时，你的代码应该已经验证了 `p[0]` 的值等于 `label(t)`，所以接下来要检查的是，是否存在一个分支，使得从该分支出发的路径包含标签序列 `p[1:]`。 一种方法是使用此模板：

```
for ____:
    if ____:
        return True
return False
```

**讨论时间！** `has_path` 的 `else` 分支可以用一行代码实现吗？ 为什么可以或不可以？ 你可以忽略函数运行的速度。 当你的小组有了答案后，向 discuss-queue 频道发送一条带有 @discuss 标签、你的讨论小组号码和消息 "Maybe?" 的消息，课程工作人员将加入你的语音频道，听取你的答案并提供反馈。

### Q3：查找路径

实现 `find_path`，它接受一个具有唯一标签的树 `t` 和一个值 `x`。 它返回一个列表，其中包含从 `t` 的根到标记为 `x` 的节点的路径上的节点标签。

如果 `x` 不是 `t` 中的标签，则返回 `None`。 假设 `t` 的标签是唯一的。

首先讨论你会如何进行和使用递归调用。 （自己尝试一下；不要只点击提示按钮。 这是你学习的方式。）

**你会进行哪些递归调用？**

对每个分支 `b` 调用 `find_path(b, x)`。

**它们会返回什么类型的值？**

每个递归调用将返回 `None` 或一个非空的节点标签列表。

**可能的返回值代表什么含义？**
如果 `find_path(b, x)` 返回 `None`，说明 `x` 不在 `b` 这棵子树里。如果 `find_path(b, x)` 返回一个列表，那么这个列表包含了从 `b` 的根节点到标签为 `x` 的节点的路径上的所有节点标签。

**你应该如何利用这些返回值来完成代码实现？**

如果返回一个列表，那么这个列表包含了路径上的所有标签，但是缺少了 `label(t)`，你需要把 `label(t)` 加到列表的最前面。

**你的答案**

在 61A 代码中运行

**解答**

```
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
    if label(t) == x:
        return [label(t)]
    for b in branches(t):
        path = find_path(b, x)
        if path:
            return [label(t)] + path
    return None
```

基本情况的返回值 `[label(t)]` 创建了一个只包含一个元素的列表，这个元素是从 `t` 的根节点开始并且结束于根节点的路径标签，因为此时根节点的标签等于 `x`。

赋值语句 `path = find_path(b, x)` 使得这个递归调用的返回值可以被使用两次：一次是检查它是否为 `None` (在 Python 中，`None` 会被当做假值)，另一次是用来构建更长的列表。

对于树 `t` 和列表 `path`，表达式 `[label(t)] + path` 会创建一个新的列表，这个新列表的第一个元素是 `t` 的根节点标签，后面跟着 `path` 列表中的所有元素。

请在与你的小组讨论过并且无法取得进展之前，不要查看提示。

如果 `x` 是 `t` 的标签，则返回一个包含 `t` 的标签的单元素列表。

将 `path` 赋值给递归调用 `find_path(b, x)` 的结果，这样你既可以检查它是否为 `None`，又可以在它是列表时扩展它。

对于列表 `path` 和值 `v`，表达式 `[v] + path` 创建一个更长的列表，该列表以 `v` 开头，然后包含 `path` 的元素。

**讨论时间！** 当你的小组完成此问题后，就可以描述为什么此函数没有使用 `is_leaf` 的基本情况了。作为一个小组提出一个解释，选择一个人来展示你的答案，然后向 discuss-queue 频道发送一条带有 @discuss 标签、你的讨论小组号码和消息 "Found it!" 的消息，课程工作人员将加入你的语音频道来听取你的描述并提供反馈。

## 记录时刻

对于每个人，小组的其他成员应该尝试猜测他们的 _关键词_（来自“入门”部分）。小组只有一次猜测机会。在他们猜测之后，揭示你的 _关键词_ 以及你在讨论中使用了多少次。

请大家填写 [出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。
