---
title: Lab 06 BSTMap
---

## 常见问题解答

本实验的常见问题解答可以在[这里](faq.md)找到。

## 介绍

在本实验中，你将创建 `BSTMap`，这是一个基于 BST 的 `Map61B` 接口的实现，它代表一个基本的基于树的映射。 你将完全从头开始创建它，使用提供的接口作为你的指南。

完成实现后，你将把你的实现的性能与基于列表的 `Map` 实现 `ULLMap` 以及内置的 Java `TreeMap` 类（它使用一种称为_红黑树_的 BST 变体）进行比较。

## 从框架代码拉取

要获取作业，请从你的个人存储库中的 `skeleton` 拉取：

```shell
git pull skeleton main
```

此作业是 `lab06`。

## `BSTMap`

在本实验（以及未来的实验）中，我们可能不会像过去那样提供那么多的框架代码。 如果你在开始时遇到问题，请来实验室寻求帮助，或者查阅我们提供的资源！

创建一个名为 `BSTMap` 的类，该类使用 BST（二叉搜索树）作为其核心数据结构，来实现 `Map61B` 接口。 在你创建 `BSTMap` 类，并实现 `Map61B` 接口中的所有方法之后，你的代码才能成功编译。 你可以一次实现一个方法，先编写所有必需的方法签名，对于尚未实现的，可以先抛出 `UnsupportedOperationException` 异常。 请参阅[#exercise-bstmap]部分，了解如何抛出异常。

在你的实现中，你应该确保 `BSTMap<K,V>` 中的泛型键 `K` 实现了 [Comparable](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Comparable.html)。 这被称为[_有界类型参数_](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)。(也称为限定类型参数)

[语法](https://docs.oracle.com/javase/tutorial/java/generics/bounded.html)有点棘手，但我们在下面给出了一个例子。 在这里，我们正在为 `Comparable` 对象创建一个 `BSTSet`。 我们包含了一个可能看起来有些奇怪的 `compareRoots` 方法，这主要是为了教学目的（有关 `compareTo` 的复习，请参阅此[文档](<https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/lang/Comparable.html#compareTo(T)>)）：

```java
public class BSTSet<K extends Comparable<K>> implements Set61B<K> {
    private class BSTNode {
        K item;
        // ...
    }

    private BSTNode root;

    /* Returns whether this BSTSet's root is greater than, equal to, or less
     * than the other BSTSet's root, following the usual `compareTo`
     * convention. */
    public int compareRoots(BSTSet other) {
        /* We are able to safely invoke `compareTo` on `n1.item` because we
         * know that `K` extends `Comparable<K>`, so `K` is a `Comparable`, and
         *`Comparable`s must implement `compareTo`. */
        return this.root.item.compareTo(other.root.item);
    }

    // ...
}

```
:::info
您可能已经注意到，即使 `Comparable` 是一个接口 (interface)，有界类型参数的语法仍然使用了 `extends` 关键字。在有界类型参数的语境下，`extends` 既可以表示继承 (extends)，也可以表示实现 (implements)。至于为什么这样设计，我们也不得而知。<br/><br/>
（这种语法也暗示您可以“扩展”诸如 `Integer` 之类的 `final` 类，这是不可能的。Java 这一点确实让人摸不着头脑！）
:::

:::warning
请注意，上面的代码片段演示的是 `Set` 的用法，而您需要实现的是 `Map`。我们建议您在 `BSTMap` 的实现中采用类似的逻辑，并使用嵌套的节点类来辅助实现。您的 `BSTMap` 应该有两个泛型参数 `K` 和 `V`，分别代表 `BSTMap` 中键和值的泛型类型。
:::

IntelliJ 提供了一个便捷的功能，可以自动生成方法签名。如果您正在实现一个接口并且尚未实现所有方法，将鼠标悬停在红色高亮显示的类签名上，您应该能够看到并选择“Implement methods”选项。在弹出的窗口中，请确保勾选了“Copy JavaDoc”和“Insert @Override”这两个选项。单击“OK”，IntelliJ 应该会使用所需的方法签名（但它们不会起作用！）填充该类，并复制注释。

效果应该如下图所示（**请注意，您需要实现的是 `Map61B`，而非示例中的 `Set61B`！**）：

![实现方法](/img/cs61b/implement-methods.png)

![选择要实现的方法](/img/cs61b/select-methods-to-implement.png)

按照上述步骤操作后，您应该就能获得 `Map61B` 接口所需的所有方法签名。（您也可以根据需要，选择性地生成部分方法签名。）

### 练习：`BSTMap`

如前所述，您需要创建一个类 `BSTMap`，它实现 `Map61B` 接口。请务必在 `BSTMap.java` 文件中编写代码，否则自动评测系统可能无法正确运行您的程序！以下方法是必需的：
- `void put(K key, V value)`：将指定的 `key` 与 `value` 关联。
- `V get(K key)`：返回与 `key` 关联的值。
- `boolean containsKey(K key)`：如果此映射包含指定 `key` 的键值对，则返回 true。
- `int size()`：返回键值映射的数量。
- `void clear()`：从此映射中删除每个映射。

请务必仔细阅读 `Map61B` 接口中每个方法的注释，以便充分理解其具体要求。以上描述不一定是全面的。

为了方便调试，建议您在 `BSTMap` 中添加一个额外的 `printInOrder()` 方法（该方法并非 `Map61B` 接口的一部分），用于按键 (Key) 的升序打印 `BSTMap` 的内容。**我们不会测试此方法的结果，但您可能会发现这对测试您的实现很有帮助！**


实现 `BSTMap` 类，该类实现 `Map61B` 接口以及相关的、非可选的方法。您应该使用有界类型参数来确保 `BSTMap` 中的键实现 `Comparable` 接口。<br/><br/>
我们_强烈建议_您创建辅助方法来简化实现过程，尤其推荐使用递归辅助方法。

:::info
遗憾的是，大多数需要您实现的方法都相互依赖进行测试（例如，`get` 方法依赖于 `put` 方法）。因此，在您实现 `put` 方法之前，测试其他方法会比较困难。我们建议您按照 `Map61B` 中指定的顺序实现这些方法。<br/><br/> 您可以使用 `TestBSTMap.java` 测试您的实现。
:::

**`BSTMap` 有一个可选部分。以下方法是可选的：`iterator`、`remove`、`keySet`。** 这些方法不是计时测试所必需的，相关内容请参考[节](#so-how-fast-is-it)。

如前所述，如果您选择不实现可选部分，请抛出一个 `UnsupportedOperationException` 异常，如下所示：

```
throw new UnsupportedOperationException(); 
```

如果您要完成可选部分，请参阅本[节](#more-ungraded-exercises-for-bstmap)和 `Map61B` 中的注释以获取更详细的描述。

### 资源

以下资源可能会对您有所帮助：

- 第 16 讲 [幻灯片](https://docs.google.com/presentation/d/1tAXgjwVKsnH7AR-iCvkDM-rQFwrg4OnKVZzqPixZWI8/edit?usp=sharing)。
- `ULLMap.java`（在 `src/` 中给出），一个基于无序链表的 `Map61B` 实现。
- 为了帮助您快速上手，您可以参考[此处](https://www.youtube.com/watch?v=P3_Luw2M8X4)提供的关于 `put` 和 `get` 方法的算法指导。

## 那么...它有多快？

`InsertRandomSpeedTest.java` 中提供了一个交互式速度测试。在您完成 `BSTMap` 之前，请勿尝试运行此测试。准备就绪后，您可以在 IntelliJ 中运行测试。

该测试首先会要求用户输入待插入字符串的期望长度以及插入规模（即插入操作的次数）。然后，程序会生成指定长度的若干字符串，并将它们以 `<String, Integer>` 键值对的形式插入到各个映射中。

您可以尝试运行该测试，观察您的数据结构在插入操作次数增加时，性能表现与简单实现以及工业级实现相比如何。请注意，渐近分析在小规模数据上可能不具代表性。如果输入规模足够大，但结果仍然不符合预期，请尝试调整输入规模（但也要注意，过大的输入可能会导致程序溢出）。请将测试结果记录在名为 `speedTestResults.txt` 的文件中。
:::task
运行速度测试，并将结果记录在 `speedTestResults.txt` 文件中。结果的格式不作硬性要求，但至少需要包含您执行的操作和观察到的现象。
:::

## 评分

本实验总分为 5 分。 Gradescope 上没有隐藏的测试环节，也就是说，您在 Gradescope 上看到的分数即为最终成绩。但是，有一个测试不在本地提供，该测试会检查您提交的 `speedTestResults.txt` 文件。通过本地测试 `TestBSTMap.java` 意味着您在 `BSTMap.java` 部分可以获得满分，但这并不保证您在 `speedTestResults.txt` 部分也能获得满分。**因此，在本实验中，只要您通过了相关的本地测试 (`TestBSTMap.java`)，并完整地填写了 `speedTestResults.txt` 文件，您就能在 Gradescope 上获得满分。**

## 更多（未评分）`BSTMap` 练习

这些将不被评分，但您仍然可以使用本地测试（特别是 `TestBSTMapExtra.java`）和自动评分器获得反馈。

在您的 `BSTMap` 类中实现 `iterator()`、`keySet()` 和 `remove(K key)` 方法。在实现 `iterator` 方法时，您需要返回一个按照_排序后顺序_遍历所有_键_的迭代器。`remove()` 方法的实现颇具挑战性，您需要实现 Hibbard 删除算法。

对于 `remove` 方法，如果参数 `key` 在 `BSTMap` 中不存在，则应返回 `null`。否则，删除该键值对 (`key`, `value`) 并返回对应的值 (`value`)。

## 提交

像之前的作业一样，请添加、提交并将您的 Lab 06 代码推送到 GitHub。然后，提交到 Gradescope 以测试您的代码。

## 可选：渐近性问题

这部分内容为可选，我们将其包含在此处，以便您进行额外的渐近性分析练习。请对照[答案](asymptotics-soln.md)检查您的解答！

给定一个具有 `N` 个键值对的 `BSTMap` `B`，以及一个随机键值对 `(K, V)`，回答以下问题。

除非另有说明，“大 O”界限（例如 $\mathcal{O}(N)$）和“大 Theta”界限（例如 $\Theta(N)$）指的是给定方法调用中的**比较次数**。

对于问题 1-7，说明该陈述是真还是假。对于问题 8，给出运行时间界限。

1. `B.put(K, V)` $\in \mathcal{O}(\log N)$
2. `B.put(K, V)` $\in \Theta(\log N)$
3. `B.put(K, V)` $\in \Theta(N)$
4. `B.put(K, V)` $\in \mathcal{O}(N)$
5. `B.put(K, V)` $\in \mathcal{O}(N^2)$
6. 对于一个固定的键 `C`，且 `C` 不等于 `K`，`B.containsKey(C)` 和 `B.containsKey(K)` 的运行时间均为 $\Omega(\log N)$。
7. （这个问题相当难。）假设 `b` 是 `BSTMap` 中的一个 `Node` 节点，并且有两个子树，以 `root` 为根节点，分别称为 `left` 子树和 `right` 子树。此外，假设 `numberOfNodes(Node p)` 方法返回以 `p` 为根的子树的节点数 ($M$)，其运行时间为 $\Theta(M)$。在 `1 <= z < numberOfNodes(b.root)` 的前提下，`mystery(b.root, z)` 在最坏和最好情况下的运行时间分别是多少？

提示：首先看看你能不能弄清楚 `mystery` 是做什么的，然后看看它是如何完成的。

```java
public Key mystery(Node b, int z) {
    int numLeft = numberOfNodes(b.left);
    if (numLeft == z - 1) {
        return b.key;
    } else if (numLeft > z) {
        return mystery(b.left, z);
    } else {
        return mystery(b.right, z - numLeft - 1);
    }
}
```
