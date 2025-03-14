---
title: FAQ - Project 1A Linked List Deque 61B
description: Project 1A FAQ.
---

### 我收到一个“所需类型为 Deque61B，但提供的是...”的错误信息

这可能有两种情况。请确保您没有意外导入 java.util.\*（或 java.util.LinkedList 或 java.util.ArrayList）。另一个可能的问题是您的类签名存在问题。

### Intellij 提示我说“类型为 LinkedListDeque61B 的方法 ... 与类型为 Deque61B 的方法 ... 具有相同的擦除，但未覆盖它。”

您可能忘记在类签名的 implements 行中添加泛型 `T`（即，比如说，您写的是 `implements Deque61B` 而不是 `implements Deque61B<T>`）。如果使用 `T` 以外的其他内容作为泛型类型参数的话，请改用它。

### 问：如何让我的箭头指向数据结构的特定字段？

在您课堂上的图表中，箭头好像能指向数组的中间或节点的特定字段。

答：任何时候我在课堂上画一个指向对象的箭头，指针都指向整个对象，而不是对象的特定字段。事实上，在 Java 中，引用不可能指向对象的字段。

### 问：OOB 代表什么？

越界 (Out of bounds)。

### 问：我的测试在本地通过了，但 Gradescope 提示我“NullPointerException：无法调用 java.lang.Iterable.iterator()，因为 this.actual 为 null”

这可能是由于在您的 `toList` 方法中返回 null 引起的。确保 toList 也要始终返回一个 `ArrayList`，即使 Deque 为空。

### 问：我收到样式错误，提示：“类成员字段 'val' 不得为 public”

试试使用 `class ClassName` 而不是 `public class ClassName`

### 务必使用您自己的 `Deque61B` 接口，而不是 `java.util.Deque`。
