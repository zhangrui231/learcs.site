---
title: Project 1A LinkedListDeque61B
description: Project 1A Spec.
---

截止日期：2 月 5 日星期一 晚上 11:59 (太平洋时间)

## [常见问题解答](faq.md)

每个作业的顶部都会有一个常见问题解答的链接。您也可以通过在网址末尾添加“/faq”来访问。项目 1A 的常见问题解答位于[此处](faq.md)。

## 介绍

在项目 0 中，您实现了 2048 的游戏逻辑。在项目 1A 和 1B，以及后续的实验中，您将实现自己的数据结构！在项目 1 中，您将首先构建类似列表的数据结构：实现一种新的抽象数据类型，称为双端队列（deque，发音为“deck”）。

在项目 1A 结束时，您将...

- 理解链表在数据结构中的底层应用。
- 具备使用测试和测试驱动开发来验证数据结构正确性的经验。

对于项目 1A，我们将提供详细的指导，帮助你完成项目。在项目 1B 中，您将执行类似的任务，但指导会少得多。

:::info
>本节假设您已经学习并理解了第五讲，即关于 DLList 的内容。
:::

:::warning
>对于此项目，您必须单独工作！请仔细阅读[合作与作弊政策]，了解具体要求。特别是，不要在网上寻找解决方案。
>
>
>需要强调的是，您不能使用任何 `java.util` 包中自带的数据结构！关键在于构建您自己的数据结构！在测试之外，您可以在少数地方使用特定的数据结构，我们会清楚地说明在哪里。
:::

### 速度限制

在这个项目中，您最多可以使用 4 个提交令牌提交到自动评分器，每个令牌的刷新率为 24 小时。与之前的作业不同，**并非所有测试都提供本地版本**，因此您需要编写测试来验证代码的正确性。有关更多详细信息，请参阅[编写测试](#writing-tests)部分。

:::danger

**如果未能理解令牌限制策略，我们将不批准延期。** 如有疑问，请随时提问！
:::

### 风格

在这个项目中，**我们将严格执行代码风格规范**。您必须遵循[风格指南](../guides/style)，否则您将在自动评分器上受到处罚。

您可以使用 CS 61B 插件在本地检查代码风格。**即使未检查代码风格，我们也不会取消速度限制。**

**我们不会对测试强制执行风格，因此您可以使用幻数！**

### 获取骨架文件

按照[作业工作流程指南](../guides/assignment-workflow#assignment-workflow)中的说明获取骨架代码并在 IntelliJ 中打开它。对于这个项目，我们将在 **`proj1a`** 目录中工作。

您会在您的 repo 中看到一个 `proj1a` 目录，其结构如下：

```text
proj1a
├── src
│   └── Deque61B.java
└── tests
    ├── LinkedListDeque61BTest.java
    └── PreconditionTest.java
```

如果遇到任何错误，请先停止操作，仔细阅读 [git WTFs] 或者向助教 (OH) 或 Ed 提问来解决。相比于盲目尝试 Git 命令，这样做能避免很多不必要的麻烦。如果您发现自己尝试使用 Google 推荐的命令（如 `force push`），请[不要](https://twitter.com/heathercmiller/status/526770571728531456)。**即使在 Stack Overflow 上看到相关建议，也请不要使用 force push！**

您还可以观看 Hug 教授关于如何开始的[演示](https://www.youtube.com/watch?v=tABtNcN5y0A)，以及如果您遇到一些 git 问题，可以观看此[视频](https://www.youtube.com/watch?v=Squ8TmG5mX0)。

## Deque61B：ADT 和 API
双端队列和我们在课堂上讲过的 SLList、AList 类很相似。以下是来自 [Java 标准库](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/Deque.html) 的定义。

> 一种线性集合，支持在两端插入和删除元素。名称 _deque_ 是“double ended queue”（双端队列）的缩写，通常发音为“deck”。大多数 `Deque` 实现对它们可能包含的元素数量没有固定的限制，但此接口既支持容量受限的 deque，也支持没有固定大小限制的 deque。

我们不需要 Java 的 `Deque` 中定义的所有方法，并且定义了我们自己的接口，可以在 `src/Deque61B.java` 中找到。

例如，`get` 方法的描述如下，在 Javadoc 中：

```java
/** ...
 * @param index 要获取的索引
 * @return deque 中 {@code index} 处的元素
 */
T get(int index);
```

在这里，`@param` 表示方法的参数，`@return` 表示方法的返回值。`@code` 标签用于格式化为代码。

如果将鼠标悬停在 IntelliJ 中的方法名称上，您将看到一个如下所示的弹出窗口，如果您想知道方法的作用，这将非常有用：

![get-javadoc](/img/cs61b/proj1a/get-javadoc.png)

>首先打开 `Deque61B.java` 文件并**阅读**其中的文档。我们**不会**在规范中重复接口文件中的信息——因此，在完成项目时，务必认真阅读文档，这是_您_的责任。


:::danger
**你不应该编辑 `Deque61B.java`。**
:::

**请务必自行阅读其他方法的描述。**

:::danger
>认真点。不要跳过这一步。跳过此步骤可能会让您困惑**数小时**。请节省您自己的时间和压力！
:::
## `LinkedListDeque61B`

### 作业理念

一个常见的初学者错误是编写大量的代码，并希望在完成后一切都能正常工作。这使得程序员的生活非常困难。想象一下，实现上述所有方法，提交给自动评测机，并收到一条消息，例如“对 `get` 的调用返回 9，预期为 7”。您不知道问题是 `get` 方法本身，还是其他一些必要的方法已损坏。

为了帮助鼓励更好的编程习惯，在 Project 1A 中，我们将手把手地指导您完成开发过程。您不必严格按照推荐步骤操作；如果您通过自动评测机，就能获得所有分数，但我们强烈建议您按照本规范的步骤进行。

:::info
>为了获得预期的体验，请按顺序执行这些步骤。如果您做了其他事情并向我们寻求帮助，我们将把您转回这些步骤。
:::

### 创建文件

首先创建一个名为 `LinkedListDeque61B` 的文件。该文件应在 `proj1a/src` 目录中创建。为此，请右键单击 `src` 目录，导航到“New -> Java Class”，并将其命名为 `LinkedListDeque61B`。

我们希望我们的 `LinkedListDeque61B` 能够容纳几种不同的类型。例如，`LinkedListDeque61B<String>` 包含 `String`，而 `LinkedListDeque61B<Integer>` 包含 `Integer`。要启用此功能，请将类的声明修改为如下所示：

```java
public class LinkedListDeque61B<T>
```

回想一下课程内容，使用 `T` 或是其他字符串（例如 `LinkedListDeque61B<Glerp>`）实际上没有区别。但是，我们建议使用 `<T>` 以与其他的 Java 代码保持一致。

我们还想告诉 Java，每个 `LinkedListDeque61B` 都是一个 `Deque61B`，以便用户可以编写如下代码：`Deque61B<String> lld1 = new LinkedListDeque61B<>();`。要启用此功能，请更改类的声明，使其如下所示：
```java
public class LinkedListDeque61B<T> implements Deque61B<T>
```
然而，这会产生一个错误。为了使`LinkedListDeque61B`类实现`Deque61B`接口，它需要实现`Deque61B`接口中的所有方法。将鼠标悬停在红色波浪线上，在弹出的错误提示框中点击“实现方法”按钮。IDE将会自动生成方法头。

下面的 GIF 动画演示了这些步骤：

![Proj 1A Setup](/img/cs61b/proj1a/proj1a-setup.gif)

最后，你应该创建一个无参构造函数。为此，请将以下代码添加到你的文件中，暂时不要在构造函数中添加任何代码。
```java
java
public LinkedListDeque61B() {
}
```
注意：你也可以通过点击“Code”，然后点击“Generate”，再点击“Constructor”来自动生成构造函数，但我们更推荐手动输入代码的方式。

现在你可以开始啦！

### JUnit 测试

#### LinkedListDeque61BTest

现在打开 `LinkedListDeque61BTest.java` 文件。你会看到每一行代码前面都有 `//` 注释。让我们删除除了最后一行之外的所有 `//` 注释。选中文件中所有以 `//` 开头的行，然后在顶部菜单栏点击“Code”，再点击“Comment with Line Comment”即可取消注释。你也可以使用快捷键 `Ctrl+/` (Windows / Linux) 或 `⌘ /` / `Cmd+/` (Mac)。

现在点击并运行所有测试。在你能够通过这些测试之前，还有很多工作要做，所以我们暂时跳过这些测试，稍后再来解决。

#### PreconditionTest

在此测试文件中，我们提供了一些测试用例，用于检查`LinkedListDeque61B`文件的代码结构是否符合规范。你不需要理解这些测试的原理，但你应该能够成功运行它们。

### 编写和验证构造函数

>本节假设你已经观看并完全理解了直到**包括** `DLList` 讲座（第 5 讲）的课程。

“拓扑结构”是一种可用于表示链表的数据结构。虽然在课程中讨论过多种选择，但本项目**强制要求**你实现一个带有哨兵节点的循环双向链表拓扑结构：

  空列表由指向自身的单个哨兵节点表示。有一个名为 `sentinel` 的单个实例变量指向此哨兵。
  [请参阅此幻灯片。](https://docs.google.com/presentation/d/10JSf8_Cut4kodFP3MxoPovUVjTGWZ6YFyIuT95NyqTk/edit#slide=id.g829fe3f43_0_376)

正如课程中提到的，虽然这种方法乍一看可能比较复杂，但最终会得到一个最简洁的实现。

实现 `LinkedListDeque61B` 的构造函数以匹配适当的拓扑结构。

:::info
>在此过程中，你可能需要创建一个 `Node` 类，并添加一个或多个实例变量。这可能需要花费你一些时间来完全理解。
:::

你的节点类应该是双向链表节点，并且只包含双向链表节点所必需的字段（实例变量）。此外，你只能定义一个节点类，并且这个节点类**必须**是 `LinkedListDeque61B` 类中的内部类或嵌套类。

:::danger
>`Node` 类的设计是一个**严格的要求**。如果你的 `Node` 类不符合上述规范（例如：嵌套类，包含双向链表节点所需的字段），你将无法通过自动评测。
:::

完成后，在 `addFirstTestBasic` 测试用例的第一行设置一个断点。以调试模式运行该测试，并使用单步调试 (![step-over](/img/cs61b/proj1a/step-over.png){: .inline}) 功能。使用 Java Visualizer 来验证你所创建的对象是否符合预期的拓扑结构。
>**任务**：实现构造函数。你的 `LinkedListDeque61B` 构造函数**必须**接受 0 个参数。实现一个节点类（Node class）。（你可能还需要一些实例变量。）
>
>---
>
>如果 `PreconditionTest` 失败，说明你的实现**存在不足**。该测试会提示你哪里出错了。一些常见的错误：
>
>- 你可能使用了不正确的拓扑结构（Topology）。（如果你遇到 `NullPointerException`，很可能就是这种情况。）
>- 节点类（Node class）可能定义在一个单独的文件中。
>- 节点类（Node class）可能使用了不正确的数据存储类型。请记住，`Deque61B` 是_泛型_的。
>- `LinkedListDeque61B` 可能有一个接受额外参数的构造函数。
>- 对于双向链表节点（doubly-linked list node），它可能具有太少或太多的字段（实例变量）。
>- 它可能具有非原始类型或非节点类型的字段。
>
>---
>
>在完成 `toList` 之前，其他测试可能无法工作。
:::

### 编写和验证 `addFirst` 和 `addLast`

`addFirst` 和 `addLast` **不能**使用循环或递归。单个添加操作必须花费“恒定时间”，也就是说，无论 deque 有多大，添加元素都应该花费大致相同的时间。这意味着你不能使用循环来迭代 deque 的所有/大多数元素。

填写 `addFirst` 和 `addLast` 方法。然后，调试 `addFirstAndAddLastTest`。由于你尚未编写 `toList`，此测试不会通过。不过，你可以使用调试器和可视化工具来验证你的代码是否正常工作。


>**任务**：实现 `addFirst` 和 `addLast`，并使用 `addFirstAndAddLastTest` 和 Java 可视化工具验证它们是否正确。
>
>---
>
>在完成下一节 `toList` 之前，测试将无法工作。


### 编写和验证 `toList`

你可能觉得使用调试器和可视化工具来验证 `addFirst` 和 `addLast` 方法的正确性有些繁琐。另外，这种手动验证在你更改代码后很快就会失效。 想象一下，你对 `addLast` 做了一些细微的修改。 为了确保没有引入错误，你必须重新执行整个验证过程。 真糟糕。

（另外，我们有将近 1500 名学生！ 我们不可能逐一这样做来给每个人的作业评分。）

但遗憾的是，如果 `addFirst` 和 `addLast` 是我们实现的仅有的两个方法，则很难验证它们的正确性。 也就是说，目前没有办法遍历我们的列表并获取它的值，从而确认它们是否正确。

因此，`toList` 方法就派上用场了。 调用此方法时，它会返回 `Deque61B` 的 `List` 形式。 例如，如果 `Deque61B` 已经调用了 `addLast(5)`、`addLast(9)`、`addLast(10)`，然后调用了 `addFirst(3)`，则 `toList()` 的结果应该是一个 `List`，其中 3 在最前面，然后是 5，然后是 9，然后是 10。 如果在 Java 中打印，它将显示为 `[3, 5, 9, 10]`。

编写 `toList` 方法。 该方法的第一行应该是 `List<T> returnList = new ArrayList<>()` 之类的语句。 **这是允许你使用 Java 数据结构的一个地方。** 你可以使用 IntelliJ 的自动导入或复制以下语句来导入 ArrayList：

```java
import java.util.ArrayList; // import the ArrayList class
```

要验证你的 `toList` 方法是否正常工作，可以运行 `LinkedListDeque61BTest` 中的测试。 如果你通过了所有测试，说明你已经打下了坚实的基础，可以继续进行该项目。 好耶！ 如果没有通过，请使用调试器仔细检查，找出 `toList` 方法的问题所在。 如果实在解决不了，请回头检查 `addFirst` 和 `addLast` 方法是否正常工作。
:::info
> 如果你使用 `toList`，一些后续方法可能看起来很简单。
>**你不得在 `LinkedListDeque61B` 内部调用 `toList`**；有一个测试会检查这一点。
:::


>**任务**：实现 `toList`，并使用 `LinkedListDeque61BTest` 中的测试验证其正确性。


### 测试组件

在 Project 0 中，我们为你提供了一整套单元测试，你可以使用它们在本地测试你的代码。 在本项目中，你将需要编写*你自己的*单元测试套件，该套件提供类似的覆盖率。 为了让你了解这是如何工作的，我们实际上会获取你的测试文件（`LinkedListDeque61BTest.java`）并使用它来“测试”我们的 `LinkedListDeque61B` 的官方解答。 通过自动评分器，我们可以确定你的测试用例覆盖了哪些边界情况，从而评估你的测试套件的“覆盖率”。 因此，为了在这个部分获得满分，你应该尽可能考虑到每种方法的所有极端情况！

我们的 staff 解决方案也只有一个接受 0 个参数的构造函数，这意味着你的测试应该只使用一个接受 0 个参数的构造函数。

:::danger
>分享测试用例属于**学术不端**和**作弊行为**。
>请不要这样做。 这是为了让你培养测试技能。
:::

### 编写测试

要编写测试，我们将使用 Google 的 [Truth](https://truth.dev/) 断言库。 我们选择这个库而不是 JUnit 断言的原因如下：

- 列表的错误消息更好。
- 测试代码更易读易写。
- 开箱即用的更大的断言库。

我们通常使用 Arrange-Act-Assert 模式来编写测试：

1.  **Arrange (准备)** 测试用例，例如实例化数据结构或用元素填充它。
2.  **Act (执行)** 通过执行你要测试的行为。
3.  **Assert (断言)** 在 (2) 中验证操作的结果。

我们通常会在单个测试方法中进行多个“act”和“assert”步骤，以减少样板（重复）代码的数量。

你应该在 `LinkedListDeque61BTest.java` 中编写你的测试。

:::info
>**注意**：你在此项目中编写的测试将检查它们涵盖的不同“场景”。 你需要覆盖足够多的场景，包括一些边界情况。
:::

:::warning
> **通过覆盖率检查器并不意味着你的测试是完美的**！ 仍然可能存在你遗漏的边界情况，因为我们不要求 100% 的覆盖率，而且我们无法测试所有情况。 我们建议你编写自己的测试用例，以便在代码出错时进行检查，而不仅仅依赖于覆盖率检查器。
:::

:::danger
>尽管覆盖率检查器可以检查你对 deque 进行了哪些操作，但它不会检查你对 deque 的结果进行了哪些断言。 如果你发现自己没有通过自动评分器中你认为已经覆盖的测试，那么下一步就是在你自己的测试用例中添加额外的断言。
:::

#### Truth 断言

Truth 断言采用以下格式：

```java
assertThat(actual).isEqualTo(expected);
```

要向断言添加消息，我们可以改为使用：

```java
assertWithMessage("actual is not expected")
    .that(actual)
    .isEqualTo(expected);
```

我们可以使用 `isEqualTo` 以外的东西，具体取决于 `actual` 的类型。 例如，如果 `actual` 是一个 `List`，我们可以执行以下操作来检查其内容，而无需构造新的 `List`：

```java
assertThat(actualList)
    .containsExactly(0, 1, 2, 3)
    .inOrder();
```

如果我们有一个 `List` 或其他引用对象，我们可以使用：

```java
assertThat(actualList)
    .containsExactlyElementsIn(expected)  // `expected` is a List
    .inOrder();
```

Truth 提供了许多断言方法，包括用于判断是否为空的 `isNull` 和 `isNotNull`，以及用于布尔类型的 `isTrue` 和 `isFalse`。IntelliJ 的代码自动补全功能会提示您可以使用的断言方法。

:::warning
> 如果您没有添加任何断言，即使代码实现有误，测试也可能会通过！ 例如，即使 `addFirst` 方法没有任何实际操作，以下测试仍然会通过：
>
> ```java
> @Test
> public void noAssertionTest() {
>     Deque61B<String> lld = new LinkedListDeque61B<>();
>     lld.addFirst("front");
> }
>  ```
>
> 请务必在断言布尔值时使用 `.isTrue()` 或 `.isFalse()`。 例如，即使 `isEmpty` 方法总是返回 `false`，下面的测试仍然会通过！
>
> ```java
> @Test
> public void isEmptyTest() {
>     Deque61B<String> lld = new LinkedListDeque61B<>();
>     assertThat(lld.isEmpty());
> }
> ```
>
> 上述测试的最后一行应改为 `assertThat(lld.isEmpty()).isTrue();`。
:::

#### 示例测试

让我们分解一下提供的 `addLastTestBasic`：

```java
@Test
/** 本测试仅使用了一个 assertThat 断言。 有时候，添加额外的断言语句比较繁琐，可能觉得不值得。 */
public void addLastTestBasic() {
    Deque61B<String> lld1 = new LinkedListDeque61B<>();

    lld1.addLast("front"); // 在此调用之后，我们期望：["front"]
    lld1.addLast("middle"); // 在此调用之后，我们期望：["front", "middle"]
    lld1.addLast("back"); // 在此调用之后，我们期望：["front", "middle", "back"]
    assertThat(lld1.toList()).containsExactly("front", "middle", "back").inOrder();
}
```

- `@Test` 告诉 Java 这是一个_测试_方法，应该在运行测试时运行。
- **安排 (Arrange)**：我们创建一个新的 `Deque61B` 实例，并使用 `addLast` 方法添加 3 个元素。
- **执行 (Act)**：我们调用 `Deque61B` 实例的 `toList` 方法。 这一步依赖于之前执行的 `addLast` 方法。
- **断言 (Assert)**：我们使用 Truth 断言来验证 `toList` 方法返回的列表是否包含特定顺序的元素。

### 其余方法

接下来需要做的是测试并实现剩余的所有方法。 在接下来的部分，我们将从宏观层面介绍推荐的步骤。 我们**强烈建议**您按照给定的顺序执行其余步骤。 特别是，**在实现之前编写测试。** 这称为“测试驱动开发”，有助于确保您在执行方法之前知道方法应该做什么。

#### `isEmpty` 和 `size`

这两个方法必须花费**恒定时间**。 也就是说，方法的执行时间不应该随着 deque 中元素数量的增加而增加。

为 `isEmpty` 和 `size` 编写一个或多个测试。 运行它们并验证它们是否失败。 **您的测试应验证多个有趣的案例，** 例如检查空列表和非空列表，或检查大小是否更改。

对于这些测试，您可以在 `assertThat` 语句中使用 `isTrue` 或 `isFalse` 方法。

您可以编写非常细化的测试，例如 `testIsEmpty`、`testSizeZero`、`testSizeOne`，也可以编写较为粗略的测试，例如 `testSizeAndIsEmpty`。 选择哪种粒度取决于您的个人偏好。

>**任务**：为 `isEmpty` 和 `size` 方法**编写测试**，并检查它们是否失败。 然后，实现这些方法。


#### `get`

为 `get` 方法编写一个测试。 请务必测试当 `get` 方法接收到无效参数的情况，例如，当 `Deque61B` 中只有一个元素时，调用 `get(28723)` 或者使用负数索引。 在这些情况下，`get` 应该返回 `null`。

`get` 必须使用迭代。

>**任务**：**在编写并通过测试，确认测试会失败后**，实现 `get`。


#### `getRecursive`

由于我们正在使用链表，因此编写一个递归的 get 方法 `getRecursive` 会很有趣。

复制并粘贴你的 `get` 方法的测试，使它们相同，只是它们调用 `getRecursive`。（虽然有一种方法可以避免复制和粘贴测试，但语法不值得介绍——在 Java 中传递函数比较繁琐。）

>**任务**：**在复制粘贴并通过测试，确认测试会失败后**，实现 `getRecursive`。


#### `removeFirst` 和 `removeLast`

最后，编写一些测试来测试 `removeFirst` 和 `removeLast` 的行为，并再次确保测试失败。**对于这些测试，你将需要使用 `toList`！** 使用 `addFirstAndAddLastTest` 作为指南。

不要维护对不再在 deque 中的项目的引用。你的程序在任何给定时间使用的内存量必须与条目的数量成正比。例如，如果你向 deque 添加 10,000 个条目，然后删除 9,999 个条目，则生成的内存使用量应相当于具有 1 个条目的 deque，而不是 10,000 个。请记住，当且仅当没有指向该对象的指针时，Java 垃圾收集器才会为我们“删除”东西。

如果 `Deque61B` 为空，则删除应返回 `null`。

`removeFirst` 和 `removeLast` **可能不**使用循环或递归。与 `addFirst` 和 `addLast` 一样，这些操作必须花费“恒定时间”。有关这意味着什么的更多信息，请参阅关于编写 `addFirst` 和 `addLast` 的部分。

>**任务**：**在编写并通过测试，确认测试会失败后**，实现 `removeFirst` 和 `removeLast`。


### 提交到 Autograder

一旦你编写了本地测试并通过了它们，请尝试提交到 autograder。你可能会或可能不会通过所有测试。

- 如果你未能通过任何覆盖率测试，则意味着你的本地测试未涵盖某种情况。[此处](./flags.md) 是你应该涵盖的测试用例列表。
- 如果你未能通过任何计时测试，则意味着你的实现不符合上述计时约束。
- 你将有每 24 小时 4 个令牌的限制。**对于未能添加/提交/推送你的代码、执行代码风格检查等，我们不会恢复令牌。**

### 评分

与 Project 0 类似，本项目分为各个组件，你必须**完全正确地**实现每个组件才能获得学分。

1.  **空列表 (5%)**：定义一个有效的 `Node` 类并正确实现构造函数。
2.  **添加 (25%)**：正确实现 `addFirst`、`addLast` 和 `toList`。
3.  **`isEmpty`、`size` (5%)**：在添加方法实现正确的前提下，正确实现 `isEmpty` 和 `size`。
4.  **`get` (10%)**：正确实现 `get`。
5.  **`getRecursive` (5%)**：正确实现 `getRecursive`。
6.  **删除 (30%)**：正确实现 `removeFirst` 和 `removeLast`。
7.  **集成 (10%)**：通过一个随机调用所有方法的集成测试套件。

此外，还有一个**测试覆盖率 (10%)** 组件。我们将针对官方提供的参考答案运行你的测试，并检查测试了多少场景和边缘情况。你可以获得此组件的部分学分。你可以在[此处](./flags.md)找到场景列表。
