---
title: Lab 03 Debugging (Part 2)
---

## 常见问题解答

Lab 03 的常见问题解答请[点击这里](faq.md)。

## 介绍
这是对上周调试工作的延续。本周的实验中，我们将继续使用上周的调试工具，并进一步实践调试技巧。本次实验的目标是深入了解以下内容：
- 阅读堆栈跟踪，并了解如何从中隔离错误。
- 了解我们可能遇到的不同类型的异常。
- 更加熟练地使用 IntelliJ 调试器。
- 异常断点、表达式与监视（可选）。

与往常一样，如果您对某些概念不确定，请随时查阅资料。特别是当堆栈跟踪中出现特定异常或错误时（我们将在本次实验中讲解）。这些提示旨在引导大家思考，我们鼓励大家在查看提示前，先尝试独立完成实验。

## `Adventure`

### 运行游戏和测试

首先，请运行`AdventureGame`中的`main`方法来启动游戏。 按照游戏运行后的指示操作。 这将帮助您了解所调试程序的功能。（遇到错误是正常现象。）

然后，在您运行游戏后，运行 `tests/adventure/AdventureGameTests` 中的测试。 测试应该会在`BeeCountingStage`处失败，这将引导您调试接下来的第一个错误（请注意，此时所有测试都会失败）。 要通过整个 `AdventureGameTests`，您需要修复所有单独的阶段测试（修复一个阶段将显示您已通过该单独阶段）。 **建议按照实验指导的顺序完成这些阶段。**

我们建议您在完成每个阶段后都运行游戏，以便了解各个阶段与游戏的关联。 不要忘记经常提交以保存您的进度！

### 阅读堆栈跟踪

当Java发生运行时错误时，堆栈跟踪会打印到控制台，提供错误发生的位置以及程序运行的步骤信息。 首次运行 `Adventure` 时，您的堆栈跟踪将如下所示：

![堆栈跟踪](/img/cs61b/adventure_stack_trace.png)

首先要注意的是发生了哪种类型的错误；这显示在堆栈跟踪的第一行。 在这种情况下，我们的代码抛出了一个 `NullPointerException`。

对于某些异常，包括 `NullPointerException`，Java 会给您一个解释。 在这里，`this.input` 是 `null`，所以我们不能在它上面调用（调用）一个方法。

其下列出的各行展示了程序运行至错误的方法调用序列：第一行是错误发生的位置，其下是调用该方法并抛出错误的代码行，以此类推。

您可以单击**`蓝色文本`**以导航到该文件和行。

:::info
要理解堆栈跟踪，通常从顶部开始阅读。 如前所述，堆栈跟踪中的第一行是错误发生的位置 - 换句话说，它是错误发生之前的最后一次方法调用，因此您可以使用它来隔离错误的位置。 根据程序的编写和设计，以及您所编写/贡献的代码，您可以找到堆栈跟踪中的相应行，点击**`蓝色文本`**跳转到该行并开始调试。
:::
---
:::warning
对于以下每个步骤，**请仅修改必要的代码**！除非另有说明，否则不应重写整个代码块。我们提供了修改行数作为参考，以便您了解大致的修改范围。
:::

:::info
如果您想验证代码的正确性，可以每次都运行冒险游戏，但这并非必须 - 您可以直接调试测试。对于您将要处理的每个文件，它都包含一个 `playStage` 方法，您可以在该方法中设置断点。从那里，您可以开始在 `AdventureGameTests` 中进行调试。
:::

### 调试 `BeeCountingStage`

请通过分析堆栈跟踪来修复 `BeeCountingStage` 中发生的 `NullPointerException` 异常。您可以忽略包含 `<XX internal lines>` 的行；这些行来自测试框架或库代码，通常对您查找错误没有帮助。<br/><br/> 预期修改行数：1

<details markdown="block">
<summary markdown="block">

**提示 1**

</summary>

仅仅因为错误发生在某一行，并不代表那行代码本身有问题——真正的原因可能隐藏在堆栈跟踪没有显示的地方！

</details>

<details markdown="block">
<summary markdown="block">

**提示 2**

</summary>

仔细检查构造函数。看看声明了哪些变量，以及它们是如何初始化的。

</details>

---

事实证明，这并不是 `BeeCountingStage` 中唯一的错误！


修复 `BeeCountingStage` 中出现的 `IndexOutOfBoundsError` 错误。

:::info
忽略堆栈跟踪顶部指向 `Objects.java` 和 `ArrayList.java` 的灰色链接。 错误可能是在那些代码中_抛出_的，但根本原因很可能在于_您编写的_代码。<br/><br/> 预期修改行数：1
:::
---

<details markdown="block">
<summary markdown="block">

**提示 1**

</summary>

别忘了，Java 是从 0 开始索引的！

</details>

### 调试 `SpeciesListStage`


如果您在堆栈跟踪顶端显示的、发生异常的方法内部找不到问题，通常可以查看堆栈跟踪的第二行，看看该方法是从哪里被调用的，以及调用时传递了哪些参数。<br/><br/> 预期修改行数：3-4

---

<details markdown="block">
<summary markdown="block">

**提示 1**

</summary>

考虑列表的可能性。代码是否考虑了所有可能性？代码是否无法处理任何边缘情况？

阅读方法上方的 Javadoc 注释，或许能帮助您更好地理解该方法的作用。

</details>

### 调试 `PalindromeStage`


有时，IntelliJ 会提示一些它认为可能存在问题的地方。将鼠标悬停在问题代码（`PalindromeStage` 类的 `digitsToIntList` 方法，您可以通过堆栈跟踪找到它）的黄色或橙色高亮显示区域，看看是否能获得什么有用的信息。
<br/><br/> 使用此功能来解决 `PalindromeStage` 中的错误。


:::info
如果调试器反应迟钝，通常是因为代码中存在死循环。 如果您设置了断点，但程序运行后从未触发该断点，那么可以断定死循环发生在断点之前！ 结合单步调试，您可以逐步缩小问题范围。
:::
:::warning
**这个部分有两个bug需要修复。先解决最明显的那个，再尝试找出并解决第二个bug。提示信息主要针对第二个bug。**
<br/><br/> 预计修改行数：3行
:::

<details markdown="block">
<summary markdown="block">

**提示 1（仅适用于第二个错误）**

</summary>

如果你还没阅读上面的内容，请先阅读。看看哪里调用了`digitsToIntList`方法。如果在该方法中设置断点并使用调试器运行，程序会跳出`while`循环吗？跳出`while`循环需要满足什么条件？这个条件满足了吗？可以尝试结合Java Visualizer，更直观地检查bug。

</details>

### 调试 MachineStage

`MachineStage`里的`sumOfElementwiseMax`方法接收两个数组，计算它们对应位置上的最大值，然后将这些最大值加起来。例如，对于数组`{2, 0, 10, 14}`和`{-5, 5, 20, 30}`，对应位置上的最大值是`{2, 5, 20, 30}`。第二个位置上，0和5中较大的是5。所以，最终的和是 $2 + 5 + 20 + 30 = 57$。

这个方法有两个不同的bug，导致结果不正确。可以假设`playStage`里的输入解析代码是没问题的。

为了找到这些bug，不要单步进入`mysteryMax`和`mysteryAdd`函数，甚至不需要理解它们的功能。也就是说，用![step over](/img/cs61b/step-over.png){: .inline } _只看结果_。这些函数是**_故意做了混淆的_**，非常**_神秘_**。如果不小心单步进入了，用![step out](/img/cs61b/step-out.png){: .inline } 按钮跳出去。

即使不单步进入这些函数，你也应该能判断出它们有没有bug。这就是抽象的妙处！就算我不懂鱼的分子结构，也能一眼看出它死了没死。


修复这两个bug，让`sumOfElementwiseMax`返回正确结果。如果在`mysteryMax`或`mysteryAdd`里发现bug，就直接重写整个方法，不要尝试去修。但是，别没事找事重写代码——先确定它真的有问题！<br/><br/> 预计修改行数：2-5行


---

<details markdown="block">
<summary markdown="block">

**提示：**

</summary>

- 理解 `sumOfElementwiseMax` 函数的作用是什么。当你向游戏输入数据时，尝试手动或使用计算器来计算结果。将计算结果与程序输出进行对比验证，你会发现输出可能不正确。
- 在调用 `sumOfElementwiseMax` 的代码行设置断点。运行调试器，单步进入 `sumOfElementwiseMax` 函数，然后使用 ![step over](/img/cs61b/step-over.png){: .inline } 查看 `arrayMax` 的返回值。`arrayMax` 的输出是否与你期望的一致？
- 如果你怀疑 `arrayMax` 有问题，可以单步进入 `arrayMax` 函数进行调试。但是，不要单步进入 `mysteryMax` 函数。只有当你确定它有错误时，才应该完全重写它。
- 对 `arraySum` 和 `mysteryAdd` 函数重复上述操作。

</details>

## 另一个调试难题？！ [可选]

本实验的其余部分是**可选的**。我们将介绍一些您可以在 IntelliJ 调试器中使用，并且可能会觉得有用的其他工具 - 异常断点以及表达式和监视。

:::danger
不要修改 `Puzzle.java`！
:::

:::warning
这些练习将涉及处理可能看起来非常神秘和不熟悉的代码。 强制执行抽象屏障，并尝试找到答案，而无需确切了解发生了什么！
:::

### 异常断点

调试时，您有时可能会遇到意外错误，从而难以找出代码的问题所在。 为了方便调试，IntelliJ 允许您针对异常设置断点。 这样，当代码抛出异常时，调试器会自动暂停，方便您检查程序状态。

请运行 `Puzzle` 类。你应该会看到如下输出：

![Puzzle output](/img/cs61b/puzzle-runtime-exception.png)

对于许多常见异常，IntelliJ 将在控制台输出中指示一个“创建断点”按钮（就在上面屏幕截图中的 `java.lang.RuntimeException` 的右侧），这将允许您访问高级断点窗口。 要打开高级断点窗口，如果没有这个按钮，可以 在任何行上创建一个断点（在以下屏幕截图中，我们在第 23 行上创建了一个断点），右键单击它，然后选择“更多”。

![More breakpoint popup](/img/cs61b/more-breakpoint-popup.png)

高级断点窗口应如下所示：

![Advanced breakpoint window](/img/cs61b/advanced-breakpoint-window.png)

这里有很多选项，但你不需要了解全部。 单击左上角的加号，您应该会看到一个如下所示的弹出窗口：

![Exception breakpoint popup](/img/cs61b/add-exception-breakpoint-popup.png)

选择“Java 异常断点”，会弹出一个新窗口，你可以在其中指定需要暂停的异常类型。 控制台告诉我们我们正在获得 `java.lang.RuntimeException`，所以继续并选择它。

![Runtime Exception Breakpoint](/img/cs61b/runtime-exception-breakpoint.png)

现在你应该能看到高级断点窗口，其中会有一个名为 'java.lang.RuntimeException' 的异常断点 (如果你是通过控制台的 '创建断点' 按钮创建的，可能会看到两个，这没关系)。
您可以选择在已捕获或未捕获的异常处中断，或者两者都选择。这很有用，因为许多库代码会故意抛出和捕获大量异常。因此，如有必要，我们可以专注于处理那些未被捕获的异常。现在，请继续并选中这两个选项。

如果您此时调试程序，您的代码应在第 53 行暂停，并用一个小的闪电符号代替通常的红色圆圈。这表明断点是由异常触发的，而不是由普通断点触发的。

![Line 53 Exception breakpoint](/img/cs61b/line-53-exception-breakpoint.png)

由此，我们可以看到 IntelliJ 提示问题可能出在 `src/puzzle/answer.txt` 中。通过检查该文件、浏览 `Puzzle.java` 以及使用您在 Lab 02 和本实验中学到的其他调试技术，您能弄清楚发生了什么吗？


修复 `answer.txt`，使 `Puzzle` 不再抛出 `RuntimeException`。要是遇到困难，可以看看提示！


<details markdown="block">
<summary markdown="block">

**提示**

</summary>

问题是 `Puzzle.java` 解析 `answer.txt` 以获取整数猜测，但未找到任何整数，因此它抛出一个异常。要解决此问题，请将 `answer.txt` 的 TODO 行替换为任何整数。

</details>

修复错误后，再次运行 `Puzzle`。您现在应该看到以下输出：

![Puzzle out-of-bounds exception](/img/cs61b/puzzle-oob-exception.png)

阅读错误消息，看看您是否能找到答案！如果您正确理解了它，`Puzzle.java` 将不再出错，并且您应该通过 `tests/puzzle/PuzzleTest` 中的 `testPuzzle`。


替换 `answer.txt` 中的值，使 `Puzzle` 不再出错。


### 表达式和监视

调试时，您可能并不总是将要检查的值存储在变量中。幸运的是，IntelliJ 为我们提供了一个解决方案！在程序暂停于某行时，您可以使用“求值表达式”工具（图标是一个计算器）。您可以单击计算器图标以打开一个全新的窗口，但您也可以直接在调试器中键入表达式：

![Evaluate Expression Blank](/img/cs61b/eval-expr-add-watches.png)

您也可以将变量和方法调用与此工具一起使用！即使我们在以下示例中仅使用了 `Math` 库方法，您也可以调用任何您想要的内容。在这里，我们在 `Puzzle.java` 中使用该工具，初始 `answer` 猜测为 `973`：

![Evaluate Expression 973](/img/cs61b/evaluate-expression-973.png)

在您恢复程序后，`result` 将会丢失。如果您不想丢失它，您可以使用 Ctrl+Shift+Enter (Windows) 或 Cmd+Shift+Enter (Mac) 将其添加为*监视*。即使在您继续执行后，它也会保留下来。此外，监视将根据程序相应地更改值，就像普通变量一样！

即使停止并重新运行程序，监视仍然会保留，这使得它们在多次调试过程中非常有用。例如，我将之前的猜测改为 `1717` 并重新运行程序，调试器仍然能直接显示结果，无需重新求值表达式！

![Evaluate Expression 1717](/img/cs61b/evaluate-expression-1717.png)
虽然这部分没有配套的练习，但我们觉得了解一下还是很有帮助的！

---

恭喜！你已经完成了 Lab 03！

## 交付内容和评分

本实验满分 5 分。Gradescope 上没有隐藏的测试。如果你通过了 `Adventure` 的所有本地测试，你将获得该实验的全部学分（除非你修改了不应该修改的内容）。再次说明一下，“另一个调试难题？！” 对于本实验是可选的。最终的交付内容是：

*   `BeeCountingStage` (1.25 分)
*   `SpeciesListStage` (1.25 分)
*   `PalindromeStage` (1.25 分)
*   `MachineStage` (1.25 分)

## 提交

就像你之前的作业一样，添加、提交，然后将你的 Lab 03 代码推送到 GitHub。然后，提交到 Gradescope 以测试你的代码。如果你需要复习，请查看 [Lab 1 规范](../lab01/index.md) 和 [作业工作流程指南][workflow] 中的说明。

[workflow]: ../guides/assignment-workflow#opening-in-intellij
