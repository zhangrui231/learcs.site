---
title: FAQ - Project 2B
description: Project 2B FAQ.
---

## 设置

### 我收到一个错误，提示：`spark failed to ignite`。

这可能表明其他进程已经在运行 Spark 并且尚未终止。重启计算机应该可以解决这个问题。

### 运行 `git pull` 命令后，我遇到了分支发散错误。

运行 `git config pull.rebase false` 并再次拉取。

### 我收到如下错误信息：“Cannot invoke "ngordnet.ngrams.TimeSeries.years()" because "ILILILILIILILIILILIILIL" is null”

重新拉取 `library-sp24` 中的库。

### 我尝试从 `library-sp24` 运行 `git pull`，但仍然收到上述异常。

确保获取新的库文件后，已在 IntelliJ 中重新导入这些库。

### 无论我怎么做，库还是无法工作！

尝试完全删除 `library-sp24` 并重新克隆它。

### 运行 `Main.java` 时，我收到 `Failed to bind to /0.0.0.0:4567`。

保存您的代码并重启 IntelliJ。如果仍然不行，请尝试重启电脑。

## HyponymsHandler - 基本情况

### 我收到 `NullPointerException`，因为调用 `iterator()` 时对象为 `null`。

这是一个非常常见的问题。当您使用增强型 for 循环遍历对象时，例如：
`for (<Type> element : elements){...}`

如果 `elements` 为 null，您将收到此错误，因为我们无法在 `null` 上调用 `iterator()`。我们建议您在迭代之前检查 `elements` 以确保它不是 `null`。

### 我收到 `NullPointerException`，因为 `get` 的输出为 `null`。

请记住，如果在映射中找不到请求的键，则 `get` 将返回 `null`。 另一个可能的原因是访问了“sink”节点（即没有子节点的节点）。

## HyponymsHandler - 单词列表

### 60000 毫秒后我遇到超时问题，或者自动评分器告诉我应该确保我的代码在所有输入上终止。

请确保使用了合适的数据结构。我们需要输出重复的单词吗？ 尽可能使用 `Set` 代替 `List`，可以节省运行时间。 您应该考虑使用 `List` 和 `Set` 函数时的运行时间。 此外，确保能以常数时间复杂度访问给定单词的同义词集合。 不应该每次调用 `handle` 都重建图。

### 我的测试返回一个空列表。

如果使用 `List.of()` 创建列表，请确保逗号在引号外。
`List.of("one, two")` 是一个包含单词“one, two”的单元素列表。 `List.of("one", "two")` 是一个包含“one”和“two”两个元素的列表。
