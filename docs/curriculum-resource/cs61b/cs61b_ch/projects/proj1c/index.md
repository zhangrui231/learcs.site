---
title: Project 1C Deque61B Enhancements
description: Project 1C.
---

## 截止时间：2 月 20 日星期二晚上 11:59（太平洋时间）

## [常见问题解答](faq.md)

每个作业的顶部都会提供一个常见问题解答的链接。您也可以通过在网址末尾添加“/faq”来访问该页面。Project 1C 的常见问题解答位于[此处](faq.md)。

## 介绍

在 Project 1A 中，我们构建了 `LinkedListDeque61B`，在 Project 1B 中，我们构建了 `ArrayDeque61B`。现在我们将看到一个不同的实现：`MaxArrayDeque61B`！这部分项目将增强您之前实现的 `ArrayDeque61B` 和 `LinkedListDeque61B`，并将它们整合到一个新的数据结构应用中。

在 Project 1C 结束时，您将完成以下操作：

- 为 `LinkedListDeque61B.java` 和 `ArrayDeque61B.java` 编写 `iterator()`、`equals()` 和 `toString()` 方法。
- 实现 `MaxArrayDeque61B.java`。
- 完成 `GuitarHero` 任务。

:::warning
>本节假设您已经观看并完全理解了直到迭代器、对象方法讲座（第 11 讲）的所有讲座。
:::

### 风格

和 Project 1B 一样，我们仍然会严格检查代码风格。您必须遵循[风格指南](../guides/style)，否则您将在自动评分器上受到处罚。

您应该使用 CS 61B 插件在本地检查代码风格，而且这是允许的。如果您因为没有检查代码风格而受到速度限制，我们将不会解除该限制。

### 获取骨架文件

按照[作业工作流程指南](../guides/assignment-workflow#assignment-workflow)中的说明获取骨架代码并在 IntelliJ 中打开它。对于本项目，我们将在 **`proj1c`** 目录中工作。

您会在您的代码仓库中看到一个 `proj1c` 目录，目录结构如下所示:

```sh
 proj1c
├── src
│   ├── deque
│   │   ├── ArrayDeque61B.java
│   │   ├── Deque61B.java
│   │   └── LinkedListDeque61B.java
│   └──gh2
│       ├── GuitarHeroLite.java
│       ├── GuitarPlayer.java
│       ├── GuitarString.java
│       └── TTFAF.java
│
└── tests
    ├── MaxArrayDeque61BTest.java
    └── TestGuitarString.java
```

:::danger
>如果您遇到任何错误，请先停止操作，仔细阅读 [git WTFs](../guides/git/wtfs) 尝试自行解决，或者向助教 (OH) 或 Ed 寻求帮助。相比于盲目尝试 Git 命令，这样做能帮您避免很多麻烦。如果您发现自己想使用 Google 搜索到的命令（例如 `force push`），请务必避免!
>
>**即使 Stack Overflow 上的帖子 *强烈建议* 你使用 `force push`，也 *绝对不要* 这样做！**
:::

您还可以观看 Hug 教授的[演示](https://www.youtube.com/watch?v=tABtNcN5y0A)，了解如何入门，以及如果您遇到一些 git 问题，可以观看此[视频](https://www.youtube.com/watch?v=Squ8TmG5mX0)。

### 对象方法

**如果您愿意，您可以按照这个简短的 [视频指南](https://www.youtube.com/watch?v=slKsbcybrr8) 中的步骤来帮助您设置 Project 1C！**

为了实现以下方法，您应该首先将您在 Project 1A 和 Project 1B 中实现的 `LinkedListDeque61B` 和 `ArrayDeque61B` 复制并粘贴到 `proj1c` 目录中的相关文件中。

:::warning
请将 `package deque;` 放在两个文件的顶部。否则，您的代码将无法编译。
:::

#### `iterator()`

我们的 `Deque61B` 接口的一个不足之处是它不支持迭代。也就是说，以下代码无法通过编译，并提示 “foreach not applicable to type” 错误。

```java
  Deque61B<String> lld1 = new LinkedListDeque61B<>();

  lld1.addLast("front");
  lld1.addLast("middle");
  lld1.addLast("back");
  for (String s : lld1) {
      System.out.println(s);
  }
```

类似地，如果我们尝试编写测试来验证 `Deque61B` 是否包含特定元素，也会遇到编译错误，例如：“Cannot resolve method containsExactly in Subject”。

```java
public void addLastTestBasicWithoutToList() {
    Deque61B<String> lld1 = new LinkedListDeque61B<>();

    lld1.addLast("front"); // after this call we expect: ["front"]
    lld1.addLast("middle"); // after this call we expect: ["front", "middle"]
    lld1.addLast("back"); // after this call we expect: ["front", "middle", "back"]
    assertThat(lld1).containsExactly("front", "middle", "back");
}
```
同样的问题在于，我们的数据项无法被迭代。`Truth` 库通过迭代我们的对象来工作（如第一个例子所示），但我们的 `LinkedListDeque61B` 类不支持迭代。

为了解决这个问题，您应该首先修改 `Deque61B` 接口，修改后的声明应如下所示：

```java
public interface Deque61B<T> extends Iterable<T> {
```

接下来，请使用第 11 讲中介绍的技术来实现 `iterator()` 方法。


>**任务**：根据讲座内容，在 `LinkedListDeque61B` 类和 `ArrayDeque61B` 类中实现 `iterator()` 方法。

:::danger
在此*不*允许调用 `toList` 方法。
:::

#### `equals()`

考虑以下代码：

```java
    @Test
    public void testEqualDeques61B() {
        Deque61B<String> lld1 = new LinkedListDeque61B<>();
        Deque61B<String> lld2 = new LinkedListDeque61B<>();

        lld1.addLast("front");
        lld1.addLast("middle");
        lld1.addLast("back");

        lld2.addLast("front");
        lld2.addLast("middle");
        lld2.addLast("back");

        assertThat(lld1).isEqualTo(lld2);
    }
```

如果我们运行这段代码，我们会发现测试失败，并显示以下消息：

```
expected: [front, middle, back]
but was : (non-equal instance of same class with same string representation)
```

问题在于，`Truth` 库正在调用 `LinkedListDeque61B` 类的 `equals` 方法。默认实现如下面的代码所示（参见[链接](https://github.com/openjdk/jdk17/blob/master/src/java.base/share/classes/java/lang/Object.java#L162)）：

```java
    public boolean equals(Object obj) {
        return (this == obj);
    }
```

也就是说，`equals` 方法默认只是检查两个对象的内存地址是否相同。我们希望能够从元素和顺序的角度来判断两个 `Deque61B` 对象是否相等，因此需要重写 `equals` 方法。

请在 `ArrayDeque61B` 类和 `LinkedListDeque61B` 类中重写 `equals` 方法。有关编写 `equals` 方法的指导，请参考[讲座幻灯片](https://docs.google.com/presentation/d/1lIR4--P9NrBqRL9xqP_RQYyK1WJBrBEbriLVpatrRqk/edit#slide=id.g4f922fa56b_2_47)或[讲座代码仓库](https://github.com/Berkeley-CS61B/lectureCode-sp23/blob/main/lec12_inheritance4/ArraySet.java)。

:::info
>注意：您可能会问，为什么我们要在两个类中实现相同的方法，而不是在 `Deque61B` 接口中提供一个 `default` 方法。接口不允许提供覆盖 `Object` 方法的 `default` 方法。更多信息请参见 [https://stackoverflow.com/questions/24595266/why-is-it-not-allowed-add-tostring-to-interface-as-default-method](https://stackoverflow.com/questions/24595266/why-is-it-not-allowed-add-tostring-to-interface-as-default-method)。
>
>不过，一种变通方法是在 `Deque61B` 接口中提供一个 `default` 且*不是* `Object` 类的辅助方法，然后让实现类来调用它。
:::

在 `LinkedListDeque61B` 类和 `ArrayDeque61B` 类中重写 `equals()` 方法。


:::warning
>重要提示：您*不应该*使用 `getClass`，而且也*没有必要*在 `equals` 方法中进行任何类型转换。也就是说，不要使用 `(ArrayDeque61B) o` 这样的写法。这种 `equals` 方法既过时又过于复杂，请使用 `instanceof` 运算符来代替。
>
>注意：由于超出本课程范围的原因，`instanceof` 运算符在处理泛型类型时，行为会有些特殊。例如，如果要检查 `lst` 是否为 `List<Integer>` 的实例，应该使用 `lst instanceof List<?>`，而不是 `lst instanceof List<Integer>`。遗憾的是，这种方法无法检查元素的具体类型，但已经是我们能做到的最佳方案了。
:::

:::warning
重要提示：请务必在重写方法时使用 `@Override` 注解。学生代码中一个常见的错误是尝试重写 `equals(ArrayList<T> other)` 方法，而不是 `equals(Object other)` 方法。如果您犯了这个错误，可选的 `@Override` 注解可以防止代码通过编译。`@Override` 是一个很好的安全保障。
:::
:::danger
您不能在此处调用 `toList` 方法。
:::

#### `toString()`

请看下面的代码示例，它会打印出一个 `LinkedListDeque61B` 对象。

```java
Deque61B<String> lld1 = new LinkedListDeque61B<>();

lld1.addLast("front");
lld1.addLast("middle");
lld1.addLast("back");

System.out.println(lld1);
```
这段代码的输出类似于 `deque.proj1a.LinkedListDeque61B@1a04f701`。这是因为 `print` 语句会默认调用 `LinkedListDeque61B` 类的 `toString` 方法。因为你没有重写这个方法，所以会使用默认的实现，如下面的代码所示 (无需理解其具体原理)。

```java
    public String toString() {
        return getClass().getName() + "@" + Integer.toHexString(hashCode());
    }
```

相应地，由于你也没有重写 `hashCode` 方法，它会直接返回对象的内存地址，就像上面例子中的 `1a04f701` 一样。

**任务**：在 `LinkedListDeque61B` 和 `ArrayDeque61B` 类中重写 `toString()` 方法，使 `System.out.println(lld1)` 的输出结果为 `[front, middle, back]`。

:::warning
>提示：Java 的 `List` 接口的实现具有 `toString` 方法。
>
>提示：有一个单行解决方案（参见提示 1）。
>
>提示：您对 `LinkedListDeque61B` 和 `ArrayDeque61B` 的实现应该完全相同。
:::

#### 对象方法测试

虽然我们没有提供这三个对象方法的测试文件，但强烈建议你参考项目 1A 和 1B 中学到的测试技巧，自行编写测试用例。你可以自由地组织这些测试，因为我们不会对它们进行评判。一种可行 (也推荐) 的方式是在 `tests` 目录下创建 `LinkedListDeque61BTest` 和 `ArrayDeque61BTest` 两个文件，类似于 1A 和 1B 中的做法。

## MaxArrayDeque61B

在完成 `ArrayDeque61B` 的实现和测试后，接下来你需要实现 `MaxArrayDeque61B`。**`MaxArrayDeque61B` 具有 `ArrayDeque61B` 具有的所有方法**，但它还有 2 个附加方法和一个新的构造函数：

- `public MaxArrayDeque61B(Comparator<T> c)`：创建一个具有给定 `Comparator` 的 `MaxArrayDeque61B`。（您可以为此导入 `java.util.Comparator`。）
- `public T max()`：返回 deque 中的最大元素，该元素由之前提供的 `Comparator` 决定。如果 `MaxArrayDeque61B` 为空，则只需返回 `null`。
- `public T max(Comparator<T> c)`：返回 deque 中的最大元素，该元素由参数 `Comparator c` 管理。如果 `MaxArrayDeque61B` 为空，则只需返回 `null`。

`MaxArrayDeque61B` 可以通过使用构造函数中给定的 `Comparator<T>` 来告诉你自身中的最大元素，也可以使用与构造函数中给定的 `Comparator<T>` 不同的任意 `Comparator<T>`。

我们不关心这个类的 `equals(Object o)` 方法的具体实现，你可以根据自己的理解自由定义。我们不会对此方法进行测试。

对于测试，您可以在自己的测试文件中使用 `Comparator.naturalOrder()`。此 `Comparator` 使用 [naturalOrder()](https://docs.oracle.com/javase/8/docs/api/java/util/Comparator.html#naturalOrder--)。如果您的泛型类型是 `Integer`，您可以使用以下示例创建 `MaxArrayDeque61B`：

```java
MaxArrayDeque61B<Integer> m = new MaxArrayDeque61B<Integer>(Comparator.naturalOrder());
```

:::warning
>如果您发现自己首先在 `MaxArrayDeque61B` 文件中复制整个 `ArrayDeque61B` 实现，那么你的实现方式**可能与预期不符**。这是一个关于编写简洁代码的练习，而冗余是我们与复杂性作斗争时最糟糕的敌人之一！有关提示，请重新阅读上面本节的第二句话。
:::

**任务**：根据上面的 API 填写 `MaxArrayDeque61B.java` 文件。


对这些附加方法没有运行时要求，我们只关心答案的正确性。有时，`MaxArrayDeque61B` 中可能存在多个元素都相等，因此都是最大值：在这种情况下，您可以返回其中任何一个，它们将被认为是正确的。

强烈建议你为这部分也编写测试! 您可能会创建多个 `Comparator<T>` 类来测试您的代码：这就是重点！练习使用 `Comparator` 对象来做一些有用的事情（找到最大元素），并练习编写您自己的 `Comparator` 类。您不会提交这些测试，但我们仍然强烈建议您为了自己而制作它们。

你在这一部分实现的 `MaxArrayDeque61B` 不会在后续部分用到，这部分是一个独立的练习。

## 吉他英雄

在本项目的这一部分中，我们将创建另一个包，用于使用我们刚刚制作的 `deque` 包生成合成乐器。我们将有机会使用我们的数据结构来实现一种算法，该算法允许我们模拟拨动吉他弦。

### gh2 包

`gh2` 包只有一个您将编辑的主要组件：
- `GuitarString` 类，它使用 `Deque61B<Double>` 来实现 [Karplus-Strong 算法](http://en.wikipedia.org/wiki/Karplus%E2%80%93Strong_string_synthesis)，以合成吉他弦的声音。

我们已经为您提供了 `GuitarString` 的骨架代码，您可以在此代码中使用您在本项目第一部分创建的 `deque` 包。

### `GuitarString`

我们的目标是完成 `GuitarString` 文件的编写，该文件需要使用 `deque` 包来模拟拨动琴弦的声音。请注意，此文件中使用了 "buffer" 一词，在这里它与 "deque" 是同义词。

我们将使用 Karplus-Strong 算法，该算法很容易用 `Deque61B` 实现。它仅包含以下三个步骤：

1. 将 `Deque61B` 中的每个元素替换为随机噪声（范围在 -0.5 到 0.5 之间的 `double` 值）。
2. 播放 `Deque61B` 队首的 `double` 值。
3. 删除 `Deque61B` 队首的 `double` 值，并计算它与下一个 `double` 值（提示：使用 `removeFirst()` 和 `get()` 获取）的平均值，然后将该平均值乘以 0.996 的能量衰减因子（我们将这个结果称为 `newDouble`）。然后，将 `newDouble` 添加到 `Deque61B` 的后面。返回到步骤 2（并永远重复）。

举例来说，如果 `Deque61B` 如图所示，我们会播放 0.2，将其移除，然后将它与 0.4 结合，计算得到 0.2988，最后将 0.2988 添加回去。

![karplus-strong](/img/cs61b/karplus-strong.png)

您可以使用 `StdAudio.play` 方法播放 `double` 值。例如，`StdAudio.play(0.333)` 将告诉扬声器的振膜将其自身延伸到其总行程的 1/3，`StdAudio.play(-0.9)` 将告诉它将其小心脏向后拉伸到几乎可以达到的程度。扬声器振膜的运动会引起空气振动。如果您能制造出和谐的振动模式，这些振动就会被您的大脑感知为悦耳的声音，这要归功于数十亿年的进化。有关更多信息，请参见[此页面](http://electronics.howstuffworks.com/speaker6.htm)。如果您只是执行 `StdAudio.play(0.9)` 并且不再播放任何内容，则图像中显示的振膜将仅静止地位于向前 9/10 的位置。

请完成 `GuitarString.java` 的编写，使其能够实现 Karplus-Strong 算法。请注意，您需要在 `GuitarString` 构造函数中，用零值初始化 `Deque61B` 缓冲区。部分初始化过程将由 `GuitarString` 类的客户端来完成。您只需要完成标有 `TODO` 的任务。

:::danger
>不要在 `GuitarString.java` 中调用 `StdAudio.play`。这会导致自动评分器中断。`GuitarPlayer.java` 已经为您执行此操作。
:::

:::info
和往常一样，请确保添加必要的库文件，否则 IntelliJ 将无法识别 `StdAudio`。
:::

例如，提供的 `TestGuitarString` 类提供了一个示例测试 `testPluckTheAString`，该测试尝试在吉他弦上播放 A 音符。如果运行该测试，则在运行此测试时应该听到 A 音符。如果没有，则应尝试 `testTic` 方法并从那里进行调试。考虑向 `GuitarString.java` 添加 `print` 或 `toString` 方法，这将有助于您了解两次滴答之间发生的情况。

注意：虽然我们在这里提到了 `Deque61B`，但并未明确指定要使用的 `Deque61B` 具体实现。这是因为我们只需要 `addLast`、`removeFirst` 和 `get` 这些操作，而所有实现了 `Deque61B` 接口的类都支持这些操作。因此，您可以自由选择 `LinkedListDeque61B` 或 `ArrayDeque61B` 来作为具体的实现方案。强烈建议您思考一下选择 `LinkedListDeque61B` 和 `ArrayDeque61B` 各自的优缺点，并与朋友讨论哪种方案更合适，或者它们是否都能满足需求。

### 为什么它有效

Karplus-Strong 算法能够有效运作，主要归功于两个关键组成部分：环形缓冲区的反馈机制和平均运算。
- **环形缓冲区反馈机制**——环形缓冲区模拟了能量在其中来回传递的介质，即一根两端固定的弦。环形缓冲区的长度决定了所得声音的基频。从声音的角度来看，反馈机制只会增强基频及其谐波（频率为基频的整数倍）。能量衰减因子（本例中为 0.996）模拟了波在弦上来回传播时能量的轻微损耗。
- **平均运算**。平均运算相当于一个缓和的低通滤波器（它会滤除较高频率，同时允许较低频率通过，因此而得名）。正因其位于反馈路径中，它能逐渐衰减较高谐波，同时保留较低谐波，这与拨动吉他弦所发出的声音非常相似。

### `GuitarHeroLite`

现在，您也可以使用 `GuitarHeroLite` 类了。运行该类会提供一个图形界面，让用户（也就是您！）可以通过 `gh2` 包中的 `GuitarString` 类进行交互式声音播放。

### 提交

提交项目时，请先添加并提交您的文件，然后将其推送到远程仓库。之后，前往 Gradescope 上对应的作业页面进行提交。

此作业的自动评分器将具有以下速度限制方案：

- 从项目发布到截止日期期间，您将拥有 4 个令牌，每个令牌每 24 小时刷新一次。

### 评分

类似于 Project 0，此项目也分为多个独立的组成部分；您必须_完全正确地_实现每个部分，才能获得相应的分数。

1. **`LinkedListDeque61B` 对象方法 (20%)**：正确实现 `LinkedListDeque61B` 中的 `iterator`、`equals` 和 `toString` 方法。
2. **`ArrayDeque61B` 对象方法 (20%)**：正确实现 `ArrayDeque61B` 中的 `iterator`、`equals` 和 `toString` 方法。
3. **`MaxArrayDeque61B` 功能 (5%)**：确保您的 `MaxArrayDeque61B` 正确运行 `Deque61B` 接口中的所有方法。
4. **`MaxArrayDeque61B` Max (35%)**：在 `MaxArrayDeque61B` 中正确实现 `max`。
5. **`GuitarString` (20%)**：正确实现 `GuitarString` 客户端类。

总而言之，Project 1c 价值 10 分。

### 鸣谢

- 环形缓冲区图来自 [Wikipedia](http://en.wikipedia.org/wiki/Circular_buffer)。
- 本次作业改编自 Kevin Wayne 的 Guitar Heroine 作业，链接为 [http://nifty.stanford.edu/2012/wayne-guitar-heroine/]。
