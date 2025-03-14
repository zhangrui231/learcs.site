---
title: Lab 02 Debugging (Part 1)
---

## 常见问题解答

每个作业的顶部都会提供一个常见问题解答的链接。您也可以通过在网址末尾添加“/faq”来访问。Lab 02 的常见问题解答位于[此处](./faq.md)。

## 介绍

要调试程序，您必须首先知道哪里出错了。在本实验中，您将获得使用调试器查看程序状态的一些经验。当您遇到错误时，该错误会伴随一个“堆栈跟踪”，详细说明导致错误的函数调用过程。我们不会在本实验中介绍如何查看堆栈跟踪，但我们将在以后的实验中详细讨论它。

### 设置

请按照[作业流程](../guides/assignment-workflow#opening-in-intellij)获取作业，并在 IntelliJ 中打开。

### 目标和成果

在本实验中，您将通过解除一个（程序化的）炸弹来提高代码调试能力。我们将引导您完成此过程，目的是使其成为一次贴近实际的调试体验。

通过本实验，您将能够…

- 使用调试器和可视化工具来检查程序状态。
- 解释测试失败消息。
- 更好地进行代码调试。

:::info
对于本实验和整个课程，我们都强烈建议您先自行尝试，包括查阅您不确定的内容。例如，本实验中，如果遇到不清楚的错误信息或异常，不妨用谷歌搜索一下！
:::

## `Bomb`

`BombMain` 类会调用 `Bomb` 类的各个 `phase` 方法。在本实验中，我们将通过 `BombTest.java` 中的测试来运行实验。如果您运行 `BombTest`（在 testing 文件夹中），您会注意到存在一些错误 - 这是因为 `BombMain` 中 phase 方法的当前输入不是正确的密码！您的任务是_使用 IntelliJ 调试器_来找出每个 phase 的密码。

:::danger
**警告**：代码的编写方式使您无法仅通过阅读来找到密码。对于本实验，**禁止**您编辑 `Bomb` 和 `BombTest` 代码，无论是添加打印语句还是以其他方式修改它。本练习旨在让您熟悉这些工具，它们将在您未来的学习道路上提供很大的帮助。请务必认真对待！**如果您修改这些文件，您将无法通过自动评分器的测试！**
:::

如前所述，您将在 testing 文件夹中的 `BombTest.java` 中运行您的代码，并且您可以使用这些测试来帮助您调试，就像在其他作业中一样，您最终将编写自己的测试来帮助您修复错误！您**唯一**需要修改的文件是 `BombMain.java`

**`BombTest.java` 是您运行程序的地方。`Bomb.java` 和 `BombMain.java` 将没有绿色的运行按钮，因为它不包含 `static void main(String[] args)`，因此请确保通过 `BombTest.java` 运行程序！**

### 交互式调试

到目前为止，您可能已经练习过使用打印语句来调试，以查看程序运行时某些变量的值。如果放置得当，打印的输出可能有助于更清晰地发现错误，或缩小错误的范围。这种方法称为**打印调试**。虽然打印调试非常有用，但它有一些缺点：

- 它要求您修改代码，并在之后进行清理。
- 确定并编写您想要打印的内容非常繁琐。
- 打印的格式并不总是很好。

在本实验中，我们将向您介绍一种新技术，即**交互式调试**——通过交互式工具或调试器进行调试。我们将重点关注 IntelliJ 的内置调试器。

### 调试器概述

#### 断点
在开始使用 IntelliJ 调试器之前，建议您先设置几个**断点**。断点用于标记代码中的特定位置，在调试过程中，程序会在这些位置_暂停_执行，以便您检查程序的状态。设置断点后，这样做的好处是：

- 您无需修改代码或在之后清理代码，因为断点在正常执行中会被忽略。
- 您可以查看_所有_变量，而无需添加额外的打印语句。
- IntelliJ 可以以结构化的方式显示所有内容。

请打开 `Bomb.java` 文件，并设置一个断点。要设置断点，请在您想要暂停执行的代码行左侧的行号旁点击。

![代码断点](/img/cs61b/code_breakpoints.png)

在您点击的位置会出现一个红色的圆圈或菱形标记。如果未出现任何标记，请确认您点击的是包含代码的行。当调试器执行到断点所在的代码行时，会在**执行该行代码之前**暂停。再次单击断点将删除它。

#### 运行调试器

现在，让我们设置几个断点 - 您可以在 `Bomb.java` 或 `BombMain.java` 中执行此操作。完成以上设置后，就可以开始调试会话了！请勿直接点击绿色三角形运行程序，而是点击
![调试](/img/cs61b/debug.png)调试选项：

![运行调试器](/img/cs61b/run_debugger.png)

所选程序应该运行直到它到达它的第一个断点。调试器窗口也应该出现在界面的底部，即之前的控制台区域。

![调试器会话](/img/cs61b/debugger_session.png)

在左侧的调用堆栈中，您可以看到当前所有的方法调用。在右侧的变量窗口中，您可以查看程序当前状态下所有已实例化变量的值（它们也会以灰色文本显示在编辑器中）。对于类的实例，您可以单击下拉菜单来展开它们并查看它们的字段。

在调试器中，您有几个选项：

- 通过观察显示的值，找出问题所在并修复错误！单击 ![停止](/img/cs61b/stop.png)停止调试会话。
- 单击 ![恢复](/img/cs61b/resume.png)恢复程序（直到它到达另一个断点或终止）。
- 单击 ![单步跳过](/img/cs61b/step-over.png)将程序执行到下一行代码。
  - ![单步进入](/img/cs61b/step-into.png)功能类似，但它将单步进入当前行中调用的任何方法，而 ![单步跳过](/img/cs61b/step-over.png)将跳过它。
  - ![单步跳出](/img/cs61b/step-out.png)将程序执行到从当前方法返回的位置。
- 如果您不小心单步执行过头，想要重新开始调试会话，请单击 ![重新运行](/img/cs61b/rerun.png){: .inline }（至少现在，没有一个好的方法可以直接后退）。

### `Bomb` 介绍（阶段 0）

:::info
在本实验中，如果您需要对调试方法或阶段进行概览，我们将提供方法分解说明。
:::


在 `phase0` 函数处设置一个断点，并使用调试器找到 `phase0` 的密码，然后在 `bomb/BombMain.java` 中相应地替换 `phase0` 参数。你可以通过运行 `tests/bomb/BombTest.java` 里的 `testBombPhase0` 来启动程序。

找到正确的密码后，运行代码（不在调试模式下）应该输出 `You passed phase 0 with the password \<password\>!` 而不是 `Phase 0 went BOOM!`

<details markdown="block">
<summary markdown="block">

**`phase0` 方法详解**

</summary>

`phase0` 方法首先生成一个秘密字符串 `correctPassword`（您不需要理解 `shufflePassword` 的工作原理）。然后将从 `BombMain` 传入的 `password` 与 `correctPassword` 进行比较。此阶段的目标是使用调试器找到 `correctPassword` 的值，并传入与该值匹配的 `password`！

</details>

### 可视化工具（Phase 1）

在本实验的这一部分，我们将使用 `IntList`。如果您需要快速回顾，请参考本周的相关讲座幻灯片。

在 `IntList` 的实现中，我们添加了两个可能没有被提及的方法：`print` 和 `of`。 `of` 方法使创建 `IntList` 更加方便。 这是一个简短的演示，说明它是如何工作的。 考虑以下代码：

```shell
IntList lst = new IntList(1, new IntList(2, new IntList(3, null)));
```

仅仅为了创建一个包含1、2和3的列表，就需要输入这么多代码，确实有些繁琐！ `IntList.of` 方法解决了这个问题。 要创建一个包含元素 1、2 和 3 的 IntList，您可以简单地输入：

```shell
IntList lst = IntList.of(1, 2, 3);
```

另一个方法 `print` 返回 IntList 的 `String` 表示形式。

```shell
IntList lst = IntList.of(1, 2, 3);
System.out.println(lst.print())
// Output: 1 -> 2 -> 3
```

回到调试 - 虽然能够看到变量值很棒，但有时我们拥有的数据并不容易检查。 例如，要查看长的 `IntList`，我们需要单击很多下拉菜单。 Java Visualizer 会以图形化的方式展示程序中变量的内存结构，更适合用来观察 `IntList` 这种链表结构。 要使用可视化工具，请运行调试器直到您在断点处停止，然后单击“Java Visualizer”选项卡。 该选项卡在下面以红色突出显示。

![Java Visualizer Tab](/img/cs61b/java_visualizer.png)

**phase 1 的密码是一个 `IntList`，而不是一个 `String`。 您可能会发现 `IntList.of` 方法很有用。**


在 `phase1` 处设置断点，并使用 Java Visualizer 找到 `phase1` 的密码，然后在 `bomb/BombMain.java` 中相应地替换 `phase1` 参数。你可以通过运行 `tests/bomb/BombTest.java` 里的 `testBombPhase1` 来启动程序。


<details markdown="block">
<summary markdown="block">

**`phase1` 方法详解**

</summary>

`phase1` 方法生成一个名为 `correctIntListPassword` 的秘密 `IntList`（类似于前一阶段，您不需要理解 `shufflePasswordIntList` 的工作原理）。 然后将从 `BombMain` 传入的、类型为 `IntList` 的 `password` 与 `correctIntListPassword` 进行比较，判断它们是否相等。 此阶段的目标是使用调试器的 Java Visualizer 找到 `correctIntListPassword` 的结构和值，并传入与之匹配的密码！

</details>

### 条件断点（Phase 2）

假设有一个循环 5000 次的程序，如果每次都单步调试来查找错误，效率会很低。相反，你可能希望程序在某个特定的迭代次数暂停，比如最后一次。也就是说，你希望程序在满足特定条件时暂停。为此，在你想设置断点的代码行旁点击创建断点，然后右键点击断点图标，选择“编辑断点”菜单。在弹出的窗口中，你可以输入一个布尔表达式作为条件。只有当这个条件为真时，程序才会在这个断点暂停。它看起来像这样：

![条件断点](/img/cs61b/conditional_breakpoint.png)

另一种方法是为Java异常设置断点。如果程序发生崩溃，你可以让调试器在抛出异常的位置暂停，并显示程序当时的运行状态。为此，请单击调试器窗口中的
![view breakpoint](/img/cs61b/view-breakpoints.png){: .inline }
，然后按加号图标以创建“Java 异常断点”。在弹出的窗口中，输入程序抛出的异常类型。


在 `phase2` 处设置一个断点，并使用调试器找到 `phase2` 的密码，然后在 `bomb/BombMain.java` 中相应地替换 `phase2` 参数。请注意，不要修改 `Bomb.java`！您可以从 `tests/bomb/BombTest.java` 中的 `testBombPhase2` 启动程序。


:::info
**注意**：密码不像之前的阶段那样明确给出。相反，你需要利用条件断点来“找到”这个密码。
:::

<details markdown="block">
<summary markdown="block">

**`phase2` 方法分解**

</summary>

`phase2` 方法从 `BombMain` 中获取你的 `password`。

这个方法会把十万个随机整数添加到一个名为 `numbers` 的 `Set` 集合中。然后，它会使用 for-each 循环遍历这些整数，并在每次循环时递增变量 `i`。在第 1338 次迭代时（因为 Java 的索引是从 0 开始的，所以此时 `i` 的值是 1337），程序会检查你输入的密码是否等于当前循环到的 `number`。

</details>

---

此时，您应该能够运行 `tests/bomb/BombTest.java` 中的测试，并且所有测试都应该通过，并显示绿色复选标记。

## 交付物和评分

:::warning
**请确保你没有编辑 `Bomb.java` 或 `BombTest.java`。** 自动评测系统会检查你是否修改了这些文件。如果文件内容有任何改动（包括添加注释），你将无法通过评测。**本地测试会阻止你编辑 `Bomb.java`，但不会阻止你编辑 `BombTest.java`（这仅在自动评分器上），因此请勿触碰这些文件！**
:::

该实验满分为 5 分。

- 找到 `BombMain.java` 中所有关卡的密码，并在提交到 Gradescope 之前，确保所有本地测试都已通过。

## 提交

就像在 Lab 1 中所做的那样，添加、提交，然后将您的 Lab 2 代码推送到 GitHub。然后，提交到 Gradescope 以测试您的代码。如果您需要复习，请查看
[Lab 1 规范](../lab01/index.md#submitting-to-gradescope) 和
[作业工作流程指南](../../guides/assignment-workflow)中的说明。

[workflow:](../../guides/assignment-workflow)

## 致谢

此作业改编自 Adam Blank。
