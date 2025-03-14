---

title: FAQ - Project 1B Array Deque 61B
description:  Project 1B FAQ.
---

### 我明明写了覆盖率测试，但评分器上怎么没显示通过呢？

用官方代码跑测试的时候，可能会遇到断言错误。请确保你的所有断言语句都输出了正确的结果！举个例子，如果你的代码里，对一个包含 1、2、3 的 `ArrayDeque61B` 调用 `get(0)`，并且错误地断言第 0 个元素应该是 2，那么在这个错误的测试之后的所有测试都不会被计入覆盖率。

### 当我在我的 `ArrayDeque61B` 上调用 `.get(0)` 时，我返回的是 `items[0]`，但没有得到我期望的项目。 发生了什么？

请记住，你的 Deque 的队首元素不一定位于位置 0。比如，在这些幻灯片（[项目 1 的建议方法](https://docs.google.com/presentation/d/1XBJOht0xWz1tEvLuvOL4lOIaY0NSfArXAvqgkrx0zpc/edit#slide=id.g1094ff4355_0_450)）里，我随便选了位置 4 作为 Deque 队首的起始位置。

### 我收到“`Required Type is Deque but provided is ...`”错误

可能存在两个问题。 确保您没有意外导入 `java.util.*`（或 `java.util.LinkedList` 或 `java.util.ArrayList`）。 另一个可能的问题与您的类签名有关。

### 我一直看到 Gradescope 上出现“`Cannot invoke java.lang.Integer.intValue() because the return value of ___ is null`”错误。

此 `NullPointerException` 可能是由您的 `addFirst` 或 `addLast` 方法引起的。 为了测试 `LinkedListDeque61B`，我们
为您提供了一个名为 `bigLLDeque61BTest()` 的测试，该测试执行 1,000,000 次 `addLast` 操作，然后执行 500,000 次 `removeFirst` 和 500,000 次 `removeLast`。 为了
找到此错误的原因，请尝试复制该测试并执行 1,000,000 次 `addFirst` 操作，以及复制
整个测试并编写一个相同的版本来测试 `ArrayDeque61B`。

### 我收到一个 API 错误，要求我删除或使我的 `isEmpty()` 方法私有。

目前，我们的评分器无法识别 `ArrayDeque61B` 或 `LinkedListDeque61B` 中的 `isEmpty` 实现。 请遵循
规范并在 `Deque61B.java` 文件中提供默认实现。

### 我无法让 Java 创建一个泛型对象数组！

使用奇怪的语法，即 `T[] a = (T[]) new Object[1000];`。 此处，`T` 是一种泛型类型，它是
其他对象类型（如“String”或“Integer”）的占位符。

### 我的 `get()` 方法应该在什么时候返回 null？
如果索引大于 `ArrayDeque61B` 的大小，而不是底层数组，则应返回 null。 例如，如果您的底层数组的大小为 8，但您的 `ArrayDeque61B` 仅调用了 `add` 三次，那么只有 3 个项目，并且超出 2 的任何索引都超出范围

### 当列表中没有任何内容时，`get()` 应该返回什么？

返回 null！

### 如何处理索引中的溢出？

考虑使用模运算符！

### 我的 `toList()` 方法应该做什么？

您的 `toList` 方法应该返回一个列表，其中包含 `ArrayDeque61B` 中的元素，并按照添加元素的顺序排列（即 Deque 的“概念版本”）。 提示一下，利用 `nextFirst` 和 `nextLast`！ 另外，请务必仅返回作为元素添加到 Deque 中的值（除非明确添加为元素，否则不要返回 null）

### 我在构造函数方面遇到问题。 我应该如何处理 `nextFirst` 和 `nextLast`？

请看这里（cs61b sp23 proj1B (ArrayDeque) 幻灯片）。 请记住，从大于 `nextFirst` 的 `nextLast` 开始是有用的，但您可以按照您选择的任何方式来实现它！

### 我在调整大小时遇到 `ExecutionTimeoutException`。 发生了什么？

确保您使用乘法因子而不是加法来调整大小！

### 尝试在 `ArrayDeque61B.java` 中 `@Override getRecursive()` 时出现错误。
你的 Deque61B.java 接口里不应该声明 `getRecursive()` 方法，这意味着所有实现了 `Deque61B.java` 的类都需要实现 `getRecursive()` 方法，这会产生误导。更准确地说，`Deque61B.java` 里面不应该有 `getRecursive()` 方法，并且移除 `LinkedListDeque61B` 实现中的 `@Override` 注解。
