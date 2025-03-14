---
title: Project 0 2048
---

**截止日期：1月29日，星期一，太平洋时间晚上11:59。**

## 常见问题解答

每个作业的顶部都会提供常见问题解答的链接。您也可以在网址末尾添加 `/faq` 来访问。Project 0 的常见问题解答位于[此处](./faq.md)。


请注意，本项目提交次数有限。有关更多详细信息，请参阅[提交和评分](#submission-and-grading)。

## 概述

先决条件：

- [Lab 1](../../labs/lab01/index.md) (设置所需)
- [HW0](../../homeworks/hw0/hw0b/index.md) (推荐，熟悉 Java 语法)
- 讲座 1-2
- [61B 风格指南](../guides/style) (自动评分器会检查代码风格！)
- Lab 2 (可选但推荐的先决条件 - 有助于调试)

[点击此处观看项目概述视频。](https://www.youtube.com/playlist?list=PL8FaHk7qbOD7WwTongMI3rfNbnkCE9NPb) 此视频来自项目的早期版本，因此存在一些细微差异。

<!-- 任何未来的资源（例如项目聚会或介绍部分录音）也可以链接在顶部，以便于访问。-->

在这个项目中，您将通过创建一个可玩的 2048 游戏来练习 Java。我们已经为您实现了图形和用户交互代码，因此您的工作是实现游戏的逻辑。

如果您不熟悉 2048，[您可以点击此链接试用演示](http://gabrielecirulli.github.io/2048)。

这个项目乍一看可能令人生畏！有很多您可能之前没有接触过的 Java 语法框架代码，但不用担心！在实际开发中，您经常需要处理不完全熟悉的代码库，并通过修改和实验来达到目标。别担心，当我们开始 Project 1 时，您将有机会从头开始。

### 使用 Git

请务必_经常_将代码提交到您的代码仓库。版本控制是一种强大的工具，可以在您出错或者代码丢失时提供帮助。但您必须经常使用才能发挥其作用。建议每 15 分钟提交一次；Git 只保存更改的内容，但会像拍摄整个项目的快照一样记录。

`git status` 命令会告诉您自上次提交以来您修改、删除或可能添加了哪些文件。它还会告诉您有多少尚未发送到您的 GitHub 存储库。

典型的命令如下所示：

```bash
git status                          # 查看需要添加或提交的文件。
git add <file or folder path>       # 添加或暂存修改的文件。
git commit -m "Commit message"      # 提交更改，并添加描述性的提交信息。
git push origin main                # 将本地更改推送到 GitHub，以便 Gradescope 可以访问。
```

然后您可以继续处理该项目，直到您准备好再次提交和推送，在这种情况下，您将重复上述操作。频繁提交并添加有意义的提交信息对您有益，这样在需要回退到旧版本时，操作会更加方便。我们建议您每次添加重要的代码部分或达到某个里程碑（例如，通过一项新测试）时都进行提交。

### 2048 规则：基本规则

2048 游戏在一个正方形网格上进行。每个正方形可以是空的，也可以包含一个带编号的方块。

玩家使用方向键来_滑动_棋盘：向上、向下、向左或向右。所有方块都会沿该方向滑动，直到遇到障碍或棋盘边缘。

滑动过程中，如果两个数字相同的方块相遇，就会_合并_。每次合并后，玩家会获得新方块上的数值作为得分。您需要在任务 4-10 中完成这部分逻辑。
游戏开始时，会随机生成一个值为2或4的图块（tile）。每次倾斜操作后，如果棋盘状态没有改变，就不会生成新的图块。反之，会在棋盘的空白位置随机添加一个新图块。你不需要编写任何代码来添加新图块，这部分我们已经帮你完成了。

当玩家无法进行任何有效移动（即，任何倾斜操作都无法改变棋盘状态），或者棋盘上出现值为2048的图块时，游戏结束。你将在任务1-3中实现游戏结束的判断逻辑。

## 设置

### 获取初始代码

请按照[作业工作流程指南](../guides/assignment-workflow)中的说明，获取初始代码并在IntelliJ中打开。本项目将在 `proj0/` 目录下进行。

:::danger
> 如果遇到任何错误，请先停止操作，仔细阅读 [git WTFs](../guides/git/wtfs) 尝试自行解决，或在OH (Office Hours) 或 Ed 论坛上寻求帮助。盲目尝试 Git 命令可能会导致更多问题，请避免这样做。特别是，请**不要使用 `git push -f` 命令！** 即使在Stack Overflow上看到相关建议，也请谨慎使用！
>
> 如果你无法使 Git 正常工作，请观看[此视频](https://www.youtube.com/watch?v=Squ8TmG5mX0) 作为提交作品的最后手段。
:::

### 文件结构

`proj0` 文件夹包含两个_包_：`game2048logic` 和 `game2048rendering`。虽然在61B课程中我们不会深入探讨包的概念，但你可以将包理解为一种组织代码的方式，类似于文件夹。例如，所有与图形界面相关的代码都位于 `game2048rendering` 包中，而所有与游戏逻辑相关的代码都位于 `game2048logic` 包中。目录结构如下所示：

```text
proj0
├── game2048logic
|   ├── Model.java
├── game2048rendering
    ├── Board.java
    ... (一些其他文件) ...
    ├── Main.java
    ├── Side.java
    ├── Tile.java
```

:::info
> 在整个项目中，你只需要修改 `game2048logic/Model.java` 这一个文件。修改其他文件不会被 Gradescope 识别。
>
> 但你需要阅读并使用其他文件中的一些方法（请勿修改这些文件！）。相关方法的说明文档会在本实验手册中提供。
:::

### 运行游戏

你可以通过运行 `game2048rendering` 包中的 `Main.java` 文件来启动游戏。右键点击该文件，然后选择“运行 'Main.main()'”即可运行。

![run-main](/img/cs61b/run-main.png)

如果一切设置正确，你应该会得到如下图像：

![2048-blank](/img/cs61b/2048-blank.png)

现在，你的游戏什么也不做，但到本项目结束时，你将拥有一个功能齐全的 2048 实现！

## 任务 1：空白格存在

在 `Model.java` 中，填写 `emptySpaceExists()` 方法。（不要修改任何其他文件。）

如果棋盘上有任何图块为 null，该方法应返回 true。

### 框架代码：棋盘坐标

本实现采用 xy 坐标系，原点 (0, 0) 位于棋盘的_左下角_：
![Board coordinates](/img/cs61b/board-coordinates.jpg)

### 框架代码：`Board` 类

`Board` 类代表棋盘。
`private` 关键字意味着您无法直接访问 `Board` 类的实例变量。您只能从 `Model` 类访问 `public` 方法和变量。（关于这些关键字及其作用的更多信息，将在本课程后续内容中介绍。）

在任务 1 中，要与 `Board` 对象交互，您需要使用 `size()` 和 `tile(int x, int y)` 方法。这些方法在 `Board.java` 中有详细的文档说明。

### 框架代码：`Tile` 类

Tile 类代表棋盘上的一个带编号的图块。

如果类型为 `Tile` 的变量是 `null`，则代表棋盘上的一个空图块。要检查 `Tile t` 是否为 `null`，可以使用表达式 `if (t == null) {...}`

要与 `Tile` 对象交互，您需要使用 `value()` 方法，该方法会返回给定图块的数值。

例如：如果 `t` 是一个 `Tile` 类型的变量，代表一个数值为 8 的图块，那么 `t.value()` 将返回 8。

:::warning
> 如果您尝试在一个 `null` 的 `Tile` 对象上调用 `value()`，将会抛出一个 `NullPointerException` 异常。您可以在调用 `value()` 方法之前，检查该图块是否为 `null` 来避免这个错误。
:::

### 测试和调试

要测试您的方法，请右键点击 `TestEmptySpace.java` 文件，然后选择“Run 'TestEmptySpace'”来运行测试：

![run-test-empty-space](/img/cs61b/run-test-empty-space.png)

（您也可以右键点击 `game2048logic` 文件夹，然后选择 “Run 'Tests in 'game2048logic''” 来运行该文件夹下的所有测试。）

或者，您可以打开 `TestEmptySpace.java` 文件，点击 `public class TestEmptySpace` 旁边的绿色箭头来运行测试（您的界面显示可能略有不同）：

![run-test-empty-space-2](/img/cs61b/run-test-empty-space-2.gif)

您都将以相同的方式运行所有测试。

`TestEmptySpace` 包含以下测试：

1. 完全空的棋盘 (`testCompletelyEmpty`)：在没有图块的棋盘上调用 `emptySpaceExists`
2. 顶部行为空 (`testEmptyTopRow`)：在顶部行中没有图块的棋盘上调用 `emptySpaceExists`
3. 底部行为空 (`testEmptyBottomRow`)：在底部行中没有图块的棋盘上调用 `emptySpaceExists`
4. 左侧列为空 (`testEmptyLeftCol`)：在左侧列中没有图块的棋盘上调用 `emptySpaceExists`
5. 右侧列为空 (`testEmptyRightCol`)：在右侧列中没有图块的棋盘上调用 `emptySpaceExists`
6. 一个空位 (`testAlmostFullBoard`)：在只有一个空位的棋盘上调用 `emptySpaceExists`
7. 具有有效合并的完整棋盘 (`testFullBoard`)：在没有空图块但存在合法移动的棋盘上调用 `emptySpaceExists`。检查 `emptySpaceExists` 是否仍然返回 false。
8. 完整棋盘 (`testFullBoardNoMerge`)：在没有空图块且不存在合法移动的棋盘上调用 `emptySpaceExists`。检查 `emptySpaceExists` 是否仍然返回 false。

如果您未能通过任何测试，错误信息将会如下所示：

![TestEmptySpace all fail](/img/cs61b/test-empty-space-all-fail.png)
在左侧，您会看到所有已执行测试的列表。黄色的叉号表示测试未通过，绿色的勾号表示测试已通过。在右侧，会显示一些有用的错误信息。要查看某个测试的详细错误信息，请点击左侧的相应测试项。例如，假设我们要查看 `testCompletelyEmpty` 测试。

![testCompletelyEmpty](/img/cs61b/test-completely-empty.png)

右侧现在是此测试的独立错误消息。顶行会显示一条消息：“Board is full of empty space”，后面是棋盘的字符串表示。很明显，棋盘是空的，但 `emptySpaceExists` 方法却返回 `false`，导致测试失败。如果测试失败，可以参考测试代码顶部的 javadoc 注释，其中包含一些有用的信息。点击蓝色下划线文字可以查看测试的具体内容。

## 任务 2：最大数值格存在

在 `Model.java` 中，填写 `maxTileExists()` 方法。（不要修改任何其他文件。）

如果棋盘上的任何数值格具有获胜值（默认为 2048），则此方法应返回 true。

注意：您应该使用变量 `MAX_PIECE`（已为您定义），而不是在代码中硬编码常量 2048。 例如，您应该编写 `if (x == MAX_PIECE)` 而不是 `if (x == 2048)`。

在代码中保留像 `2048` 这样的硬编码数字是一种糟糕的编程习惯，有时被称为“魔法数字”。 这种魔法数字的危险在于，如果您在代码的一部分中更改它们，但在另一部分中没有更改，您可能会得到意想不到的结果。 通过使用像 `MAX_PIECE` 这样的变量，您可以确保它们都一起更改。

### 测试和调试

要测试你的方法，请运行 `TestMaxTileExists.java` 中的测试。

`TestMaxTileExists` 包含以下测试：

1.  `maxTileExists` 方法在空棋盘上的测试 (`testEmptyBoard`)
2.  `maxTileExists` 方法在没有最大数值格的完整棋盘上的测试 (`testFullBoardNoMax`)
3.  `maxTileExists` 方法在具有单个最大数值格的完整棋盘上的测试 (`testFullBoardMax`)
4.  `maxTileExists` 方法在具有多个最大数值格的棋盘上的测试 (`testMultipleMax`)
5.  `maxTileExists` 方法在右上角具有最大数值格的棋盘上的测试 (`testTopRightCorner`)
6.  `maxTileExists` 方法在左上角具有最大数值格的棋盘上的测试 (`testTopLeftCorner`)
7.  `maxTileExists` 方法在左下角具有最大数值格的棋盘上的测试 (`testBottomLeftCorner`)
8.  `maxTileExists` 方法在右下角具有最大数值格的棋盘上的测试 (`testBottomRightCorner`)

如果你的实现是正确的，所有测试都应该通过。

## 任务 3：至少存在一个可行移动

在 `Model.java` 中，填写 `atLeastOneMoveExists()` 方法。（不要修改任何其他文件。）

如果存在任何可行移动，此方法应返回 true。 如果玩家可以按下某个按钮（上、下、左、右）导致至少一个数值格移动，则存在可行移动。

存在可行移动的两种情况：

1. 棋盘上至少有一个空格。
2. 有两个相邻（中间可以有空格）的具有相同值的数值格。

例如，对于下面的棋盘，我们应该返回 true，因为至少有一个空格。
```
|   2|    |   2|    |
|   4|   4|   2|   2|
|    |   4|    |    |
|   2|   4|   4|   8|
```
对于下面的棋盘，应该返回假 (false)。无论你在 2048 中按下什么按钮，都不会发生任何事情，也就是说，没有两个数值相同的相邻瓷砖。

```
|   2|   4|   2|   4|
|  16|   2|   4|   2|
|   2|   4|   2|   4|
|   4|   2|   4|   2|
```

对于下面的棋盘，我们将返回 true，因为向右或向左移动会合并两个 64 瓷砖，向上或向下移动也会合并 32 瓷砖。也就是说，至少存在两个数值相同的相邻瓷砖。
```
|   2|   4|  64|  64|
|  16|   2|   4|   8|
|   2|   4|   2|  32|
|   4|   2|   4|  32|
```
### 测试与调试

要测试你的方法，请运行 `TestAtLeastOneMoveExists.java` 中的测试。

`TestAtLeastOneMoveExists` 包含以下测试：

1. 存在空位 (`testEmptySpace`)：在有空位的棋盘上调用 `atLeastOneMoveExists`。
2. 存在有效倾斜 (`testAnyDir`)：在任意方向倾斜都有效的完整棋盘上调用 `atLeastOneMoveExists`。
3. 有效的向左/向右倾斜 (`testLeftOrRight`)：仅允许向左和向右倾斜的完整棋盘上调用 `atLeastOneMoveExists`。
4. 有效的向上/向下倾斜 (`testUpOrDown`)：仅允许向上和向下倾斜的完整棋盘上调用 `atLeastOneMoveExists`。
5. 存在最大数值瓷砖的有效倾斜 (`testMoveExistsMaxPiece`)：在存在有效移动且棋盘上存在最大数值瓷砖的棋盘上调用 `atLeastOneMoveExists`。虽然存在最大数值瓷砖意味着游戏结束，但此方法不应处理这种情况。
6. 无有效移动 (`testNoMoveExists1` 到 `testNoMoveExists5`)：在没有有效移动的棋盘上调用 `atLeastOneMoveExists`。

如果你的实现正确，则所有测试都应该通过。

由于 `atLeastOneMoveExists` 方法依赖于 `emptySpaceExists` 方法，因此在通过 `TestEmptySpace` 中的所有测试之前，你不应期望通过这些测试。

一旦你使 `maxTileExists` 和 `atLeastOneMoveExists` 正常工作，你也应该通过 `TestModel.java` 中的所有测试。

`TestModel` 包含以下测试：

1. 没有有效移动 (`testGameOverNoChange1`，`testGameOverNoChange2`)：在没有空位且任何方向都无法倾斜的棋盘上调用 `gameOver`。
2. 存在最大瓷砖 (`testGameOverMaxPiece`)：在包含最大数值瓷砖且没有其他瓷砖的棋盘上调用 `gameOver`。
3. 存在有效移动 (`testGameNotOver1`)：在任意方向倾斜都有效的完整棋盘上调用 `gameOver`。
4. 有效的向右和向下移动 (`testGameNotOver2`)：在只有一个空位的棋盘上调用 `gameOver`。

你可能遇到的一个常见错误是 `ArrayIndexOutOfBoundsException` 异常。以下是 `ArrayIndexOutOfBoundsException` 错误消息的样子：

![ArrayIndexOutOfBoundsException](/img/cs61b/index-oob-error.png)```
当尝试访问数组越界索引时，会发生`ArrayIndexOutOfBoundsException`。 例如，对于数组 `arr = [4, 2, 2, 4]`，其有效索引为 0、1、2 和 3。 尝试访问 `arr[4]` 或 `arr[-1]` 将抛出 `ArrayIndexOutOfBoundsException`。

我们可以通过检查测试输出中提供的堆栈跟踪，来评估代码中 `ArrayIndexOutOfBoundsException` 发生的位置。 让我们更仔细地看看前面的例子：

![StackTrace](/img/cs61b/stack-trace.png)

堆栈跟踪显示了导致错误的代码执行路径，最顶端的一行代表最近执行的代码。 `game2048rendering.Board.vtile(Board.java:53)` 这一行提供了关于错误的线索/信息。 首先，我们可以看到 `ArrayIndexOutOfBoundsException` 是在 `game2048rendering.Board` 类中的 `vtile` 方法中触发的。 `Board.java:53` 指定第 53 行触发了错误。 它是由 `tile` 方法的第 59 行调用的，以此类推。

堆栈跟踪是调试一个非常有用的起点。 您可以点击堆栈跟踪中带有蓝色下划线的部分，直接跳转到相应代码行。

## 任务 4：理解倾斜操作

现在，我们来实现棋盘倾斜的逻辑。 我们建议在进一步阅读规范之前完成任务 1-3！

[请在此处观看此任务的视频介绍。](https://www.youtube.com/watch?v=abFbbK1QY2k)

### 规则：倾斜

![2048 Examples](/img/cs61b/example-2048.gif)

上面的动画展示了一些倾斜操作。 以下是上图中显示的合并发生时的完整规则。

1. 两个相同值的图块_合并_为一个包含初始数字两倍的图块。

2. 在同一次倾斜操作中，已经合并过的图块不会再次合并。 例如，如果我们有 [X, 2, 2, 4]，其中 X 代表一个空格，并且我们将图块向左移动，我们最终应该得到 [4, 4, X, X]，而不是 [8, X, X, X]。 这是因为最左边的 4 已经参与了合并，因此不应再次合并。

3. 如果移动方向上有三个相邻且数值相同的图块，则前两个图块会合并，而第三个图块不参与合并。 例如，如果我们有 [X, 2, 2, 2] 并将图块向左移动，我们最终应该得到 [4, 2, X, X]，而不是 [2, 4, X, X]。

根据以上规则，如果移动方向上有四个数值相同的相邻图块，则会形成两组合并。 例如，如果我们有 [4, 4, 4, 4]，那么如果我们向左移动，我们最终会得到 [8, 8, X, X]。 这是因为前两个图块将由于规则 3 而合并，然后后两个图块将被合并，但由于规则 2，这些合并的图块（在我们的示例中为 8）不会在该倾斜操作中自行合并。

请多次观看上面的 GIF 动画，理解上述三条规则的应用。

### 倾斜规则测验

您的任务：完成此可选的 [Google 表单测验](https://forms.gle/xW74vQnK7dZAjS6eA) 以检查您对倾斜规则的理解。

此测验不属于您的 61B 课程成绩。<!--TODO: but you need to complete it in order to request help from staff on Ed or in office hours. (maybe?) -->

### 实现倾斜操作

实现倾斜功能比想象的更具挑战性。我们需要考虑得分更新、四个不同的方向、以及三种不同的合并规则等等。

计算机科学的本质在于：管理复杂性。为了实现这些复杂的功能，我们需要将问题分解成更小的模块，并逐个解决。

在以后的作业中，你需要自己思考如何将问题分解成更小的模块。对于这个项目，以下是我们解决倾斜问题的思路概要：

- **得分更新：** 一旦我们实现了移动所有图块的逻辑，得分更新就会变得更容易，所以我们先将其放到任务 10 中处理。

- **四个方向：** 不必 сразу 担心所有四个方向的倾斜，我们先从向上方向入手。稍后，在任务 9 中，我们将向您展示一个巧妙的技巧来概括您的代码，仅用两行额外的代码即可处理其他三个方向。

- **重要发现：** 向上倾斜棋盘时，每一列都可以独立处理。一列中的图块不会影响其他列中的图块。受到这个发现的启发，我们将编写一个辅助函数来倾斜一列。然后，为了在任务 8 中实现整个棋盘的向上倾斜，我们将调用辅助函数，逐列进行倾斜。

- **另一个重要发现：** 向上倾斜一列时，我们需要计算该列中每个图块的最终位置。我们可以用一个函数来实现，但这很快会变得非常复杂。相反，让我们编写另一个辅助函数来移动单个图块。然后，为了倾斜整个列（任务 7），我们将调用该辅助函数来逐个移动每个图块。

- **合并规则：** 在处理合并之前，让我们先尝试实现图块的向上倾斜。然后，一旦图块可以正确向上倾斜，我们就可以添加逻辑来实现合并（任务 6）。

## 任务 5：向上移动图块（不合并）

请在 `Model.java` 文件中，实现 `moveTileUpAsFarAsPossible(int x, int y)` 方法。（不要修改任何其他文件。）

此方法应该将位于 `(x, y)` 的图块，尽可能向上移动到该列的顶端。

请记住，图块可以穿过空格向上移动，直到到达顶行，或遇到上方有图块的空格为止。

对于此任务，暂时无需考虑合并。我们将在下一个任务中添加合并逻辑。

### 启动代码：Board 中的 `move` 方法

在 `Board` 类中，有一个方法 `move(int x, int y, Tile tile)`。此方法将给定的 `tile` 移动到棋盘上给定的 `(x, y)` 位置。

为了使图形流畅运行，您应该每次调用 `tilt` 时仅对给定的图块调用一次 `move`。也就是说，您对 `moveTileUpAsFarAsPossible` 的实现应该只调用 `move` 方法一次。

举例来说，假设您有下面的棋盘并按向上键。

```text
|    |    |    |    |
|    |    |    |    |
|    |    |    |    |
|    |    |    |   2|
```

一种实现方式如下：

```java
Tile t = board.tile(3, 0);
board.move(3, 1, t);
board.move(3, 2, t);
board.move(3, 3, t);
```

但是，图形代码会出错，因为同一个图块不应该多次移动。正确的做法是，通过一次调用 `move` 来完成整个移动，例如：

```java
Tile t = board.tile(3, 0);
board.move(3, 3, t);
```

如果 `(x, y)` 位置已经包含另一个具有相同值的图块，则 `move` 方法将合并这两个图块，并相应地更新该值。

举例来说，假设您有下面的棋盘并按向上键。
```
|    |    |    |   2|
|    |    |    |    |
|    |    |    |    |
|    |    |    |   2|
```
您可以使用以下代码来生成正确的棋盘结果，代码会将两个图块合并，从而创建一个数值为4的新图块。
```java
Tile t = board.tile(3, 0);
board.move(3, 3, t);
```
如果`(x, y)`的位置已经存在一个数值不同的图块，程序将会崩溃。您不能将一个图块移动到另一个包含不同数值图块的方格里。

### 移动规则小测验

为了测试您的理解，您应该完成此 [Google 表单测验](https://forms.gle/pubhRx4fxYnPTGNX8)。这个测验（以及之后的测验）是完全可选的（即不评分），但我们**强烈建议**您完成，因为它可以帮助您发现对游戏机制可能存在的理解偏差。您可以尝试多次参加此测验。

### 测试和调试

要测试无合并的图块移动，请运行 `TestMoveTileUp.java` 中的测试。

`TestMoveTileUp.java` 包含以下测试：

1.  空列单图块测试 (`testOneTile`)：对一个上方没有其他图块的图块调用`moveTileUpAsFarAsPossible`方法。
2.  双图块测试 (`testTwoTiles`)：对上方存在不同数值图块的图块调用`moveTileUpAsFarAsPossible`方法。
3.  双图块合并（无分数）测试 (`testTwoTilesMergeNoScore`)：对上方存在相同数值图块的图块调用`moveTileUpAsFarAsPossible`。本测试的通过不需要实现分数计算。
4.  双图块合并（更新分数）测试 (`testTwoTilesMergeScore`)：对上方存在相同数值图块的图块调用`moveTileUpAsFarAsPossible`。预期分数会相应更新。如果您按照任务1到10的顺序完成，本测试需要在完成任务10之后才能通过。

如果您的实现到目前为止是正确的，您应该期望通过 `testOneTile` 和 `testTwoTiles`。

如果您的代码崩溃并显示如下消息：
```
java.lang.NullPointerException: Cannot invoke "game2048rendering.Tile.value()" because the return value of "game2048logic.Model.tile(int, int)" is null
```
这可能意味着您尝试对一个空图块调用了`move`方法。您无法移动一个并不存在的图块，因此程序会崩溃。以下是一个尝试移动不存在图块的例子（请勿模仿）：
```
java
Tile t = null;
board.move(2, 3, t);
```
您可以使用堆栈跟踪来确定哪一行代码导致程序崩溃。

## 任务 6：合并图块

修改`moveTileUpAsFarAsPossible`方法，使其能够处理图块合并的情况。

请记住，图块可以穿过空格向上移动。当图块遇到一个非空的方格时，如果该方格中包含另一个数值相同的图块，且该图块在此次移动中尚未发生过合并，那么这两个图块应该合并。

### 启动代码：Tile 中的 `wasMerged` 方法

合并的一个棘手问题是规则 2：

因合并而产生的图块，在此次移动中不会再次发生合并。例如，如果我们有 `[X, 2, 2, 4]`，其中 X 表示一个空格，并且我们将图块向左移动，我们应该得到 `[4, 4, X, X]`，而不是 `[8, X, X, X]`。这是因为最左边的 4 已经参与了合并，因此不应再次合并。
```java
Tile t = board.tile(0, 0);
board.move(1, 0, t); // This should NOT cause a merge.
```
如果在倾斜操作进行到一半时，棋盘状态为 [4, X, X, 4]，并且我们想调用 `moveTileUpAsFarAsPossible` 将最右边的 4 方块向上移动，该怎么办？ 我们必须知道最左边的 4 方块是否先前已在此倾斜操作中合并（就像这里的情况一样），或者最左边的 4 方块是否仍然有资格进行合并（在这种情况下，两个 4 会合并成一个 8）。

为了跟踪方块是否已在此倾斜操作中合并，您可以使用 Tile 类的 `wasMerged` 方法。 不用担心，如果合并成功，`move` 方法会自动更新方块的值。

### 测试和调试

如果您的实现到目前为止是正确的，那么您现在应该可以通过 `TestMoveTileUp.java` 中的“两个方块合并无分数”(`testTwoTilesMergeNoScore`) 测试。

## 任务 7：倾斜列

现在我们有了一个_辅助函数_，可以将单个方块移动到其正确的位置（包括合并），那么倾斜整个列的函数将会简单得多！

在 `Model.java` 中，填写 `tiltColumn(int x)` 方法。（不要修改任何其他文件。）

此函数应将坐标 `x` 处的列向上倾斜，将该列中的所有方块移动到正确位置，并合并需要合并的方块。

请记住使用 `moveTileUpAsFarAsPossible` 辅助函数来简化操作！ 考虑：您应该在哪些方块上调用此辅助函数，以及以什么顺序调用？

### 测试和调试

要测试 `tiltColumn(int x)` 函数的实现，请运行 `TestTiltColumn.java` 中的测试。

`TestTiltColumn.java` 包含以下测试：

1. 无合并 (`testNoMergeColumn`)：在一个包含两个不同值的方块的列上调用 `tiltColumn` 函数。
2. 合并，无分数 (`testMergingColumn`)：在一个包含两个相同值的方块的列上调用 `tiltColumn` 函数。 此测试不需要实现分数计算也能通过。
3. 合并和分数 (`testMergingColumnWithScore`)：在一个包含两个相同值的方块的列上调用 `tiltColumn` 函数。 预计分数会相应更新。

如果您的实现到目前为止是正确的，那么您应该可以通过 `testNoMergeColumn` 和 `testMergingColumn`。

## 任务 8：向上倾斜

同样，前一个任务的辅助函数应该使此任务简单得多。 这就是将这个大问题分解为更小的辅助函数的力量！

在 `Model.java` 中，填写 `tilt(Side side)` 方法。（不要修改任何其他文件。）

此函数应向上倾斜整个棋盘，将所有列中的所有方块移动到正确位置，并合并任何需要合并的方块。

在此任务中，您可以忽略 `side` 参数。 我们将在下一个任务中使用它来处理另外三个倾斜方向。

### 测试和调试

要测试仅向上倾斜，请运行 `TestUpOnly.java` 中的测试。

`TestUpOnly` 包含以下测试：

1. 向上倾斜 (`testUpNoMerge`)：在一个不同列包含两个方块的棋盘上，向上调用 `tilt` 函数。 这些方块应移动到空白区域（不合并）。
2. 向上合并 (`testUpBasicMerge`)：在一个同一列包含两个相同值的方块的棋盘上，向上调用 `tilt` 函数。 这些方块应合并。
3. 三重合并 (`testUpTripleMerge`)：在一个同一列包含三个相同值的方块的棋盘上，向上调用 `tilt` 函数。 顶部两个方块应合并，但底部方块不应合并。
4. 限制合并 (`testUpTrickyMerge`)：在一个同一列包含三个方块的棋盘上，向上调用 `tilt` 函数。 顶部两个方块具有相同的值，应该合并。 底部方块与合并后的方块具有相同的值，但仍不应合并。
如果你的代码实现正确，应该只有 `testUpNoMerge` 测试可以通过。其他测试暂时不用担心，在分数更新功能实现后，它们也会通过。

## 任务 9：向四个方向倾斜

既然我们已经实现了向上倾斜的功能，接下来需要对其他三个方向进行同样的处理。

一种可能的方法是将我们的代码复制粘贴四次，并稍微修改几行来处理其他三个方向。这会导致代码混乱、难以阅读，并且有充足的机会引入晦涩的错误。如果你在一个副本中修复了某些东西，但没有在其他三个副本中修复，该怎么办？

对于这个问题，我们已经提供了一个简洁的解决方案。这将允许你仅用两行额外的代码来处理其他三个方向！

### 框架代码：`Side`

`Side` 类是一种特殊的类，称为 `Enum`（枚举）。枚举只能采用有限的一组值中的一个。在本例中，我们有四个边的值：`NORTH`、`SOUTH`、`EAST` 和 `WEST`。你不需要使用此类的任何方法，也不需要操作实例变量。

可以使用类似 `Side s = Side.NORTH` 的语法来为枚举赋值。请注意，这里直接将 `Side` 变量赋值为四个预定义值之一，而不需要使用 `new` 关键字创建新的对象。类似地，对于 `public static void printSide(Side s)` 这样的函数，我们可以通过 `printSide(Side.NORTH)` 这样的方式调用，将 `NORTH` 值传递给它。

如果你有兴趣了解更多关于 Java 枚举的信息，请参阅 [https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)。

### 框架代码：`setViewingPerspective` 方法在 Board 类中

具体来说，`Board` 类中的 `setViewingPerspective(Side s)` 函数会改变 `tile` 和 `move` 方法的行为，使其_表现得如同指定方向是 NORTH_ 一样。

例如，考虑下面的棋盘：

```text
|    |    |    |    |
|  16|    |  16|    |
|    |    |    |    |
|    |    |    |   2|
```

如果我们调用 `board.tile(0, 2)`，我们将得到 `16`，因为 16 在第 0 列，第 2 行。如果我们调用 `board.setViewingPerspective(s)`，其中 `s` 是 `WEST`，那么棋盘的行为就好像 WEST 是 NORTH，也就是说，你把头向左转了 90 度，如下所示：

```text
|    |    |  16|    |
|    |    |    |    |
|    |    |  16|    |
|   2|    |    |    |
```

也就是说，原本位于 `(0, 2)` 的 `16` 现在会出现在 `board.tile(2, 3)` 的位置。如果我们用正确实现的 `tilt` 调用 `board.tilt(Side.NORTH)`，棋盘将变为：

```text
|   2|    |  32|    |
|    |    |    |    |
|    |    |    |    |
|    |    |    |    |
```

要让棋盘回到原始视角，我们只需调用 `board.setViewingPerspective(Side.NORTH)`，这将使棋盘表现得好像 `NORTH` 是 `NORTH`。 如果我们这样做，棋盘现在的行为就好像它是：

```text
|    |    |    |    |
|  32|    |    |    |
|    |    |    |    |
|   2|    |    |    |
```

可以观察到，这相当于从 WEST 方向观察原始棋盘的滑动效果。

重要提示：在 `tilt` 方法调用结束前，务必使用 `board.setViewingPerspective(Side.NORTH)` 将视角恢复为 `NORTH`，否则可能会出现意料之外的结果。
为了检验你对规则的理解程度，不妨试试这第三个，也是最后一个谷歌表单小测验：[Google Form quiz](https://forms.gle/AGrhEFbwfMJ7qwaB6)。你可以随意多次尝试这个小测验。

### 测试与调试

<!--(Note: moved to make the testing make a little more sense, but it still doesn't fit perfectly).-->
<!--(Start of section).-->
要测试在所有方向上，没有合并操作时的倾斜效果，请运行 `TestTiltNoMerge.java` 中的测试。

这些测试的报错信息各不相同，我们来看一个例子。假设我们运行了所有测试，发现未能通过“限制合并”(`testUpTrickyMerge`)测试。点击该测试后，你会看到如下信息：

![testUpTrickyMerge Error Message](/img/cs61b/test-up-error-msg.png)

第一行会显示倾斜的方向（在本例中始终是北方），接着是倾斜操作前棋盘的状态、期望的棋盘状态，以及实际的棋盘状态。

你会发现，在一次倾斜操作中，某个图块被合并了两次，导致最终只有一个数值为 8 的图块，而不是两个数值为 4 的图块。因此，正如你在棋盘状态的底部看到的那样，`score`（分数）也是不正确的。

如果在其他测试中，你无法立即看出预期棋盘和实际棋盘之间的差异，可以点击报错信息底部的蓝色“Click to see difference”链接，在新窗口中并排查看预期棋盘（位于左侧）和实际棋盘（位于右侧）。 这是此测试的样子：

![testUpTrickyMerge Comparison](/img/cs61b/comparison.png)

调试这些测试可能有些棘手，因为不容易确定出错的地方。首先，你需要确定违反了前面提到的三条规则中的哪一条。在这个例子中，可以看到违反的是规则 2，因为某个图块被合并了多次。这些方法对应的Javadoc注释提供了有用的信息，因为它们明确说明了所测试的规则和配置。此外，你也可以通过比较倾斜操作前后棋盘的状态，来判断违反了哪条规则。接下来，比较棘手的部分是：重构现有代码，以确保其正确地遵循该规则。建议你在纸上写下代码的执行步骤，以便理解棋盘状态变化的原因，并制定相应的修复方案。这些测试只会调用一次 `tilt` 方法，因此你无需考虑多次调用 `tilt` 时的调试问题。

建议使用提供的测试用例来调试代码，当然，你也可以直接运行 `Main.java` 进行调试。你还可以修改 `Main.java` 文件中的 `CUSTOM_START` 和 `USE_CUSTOM_START` 变量，从指定的棋盘状态开始游戏，这有助于调试特定的测试用例。

<!--(End of section: moved to make the testing make sense).-->
<!--(Moved TestMultipleMoves debugging section since these tests will not pass until score updates are implemented).-->

## 任务 10：更新分数

至此，你的游戏应该能够在所有四个方向上倾斜棋盘，并考虑到合并。我们必须实现的最后一件事是分数更新。

### 规则：分数

当两个值为 `v` 的图块合并形成一个值为 `2v` 的单个图块时，玩家的分数增加 `2v`。

例如，如果我们有以下棋盘：

```text
|   2|    |   2|    |
|   4|   4|   2|   2|
|    |   4|    |    |
|   2|   4|   4|   8|
```

然后按向上键，游戏的状态现在是：
|   2|   8|   4|   2|
|   4|   4|   4|   8|
|   2|    |    |    |
|    |    |    |    |

因为合并了两个4得到一个8，合并了两个2得到一个4，所以总分应该增加 8 + 4 = 12，即12分。

### 初始代码：Model中的`score`实例变量

`Model`类包含一个名为`score`的实例变量，用于记录玩家的得分。更新游戏得分时，请修改此变量。

### 测试与调试

至此，你的2048实现应该已经完成！现在你应该能够通过每个测试文件中的所有测试。

`TestMultipleMoves`和`TestNbyN`等测试文件，会测试你所编写代码的协同工作情况。这类测试被称为_集成测试（综合测试）_，对于测试至关重要。与单元测试的独立运行不同，集成测试会将所有模块组合运行，旨在发现因不同函数交互而产生的潜在问题。请务必先通过其他测试，再尝试调试`TestMultipleMoves`或`TestNbyN`！

如果你未能通过以下测试（点击每个测试以查看输入和错误输出）：

<details markdown="block">
<summary>
<code>TestNbyN</code>中的“N = 1、2、3的非合并倾斜”
</summary>
输入：text
|   4|    |   4|
|   2|  16|   2|
|    |    |   8|

错误输出：text
|    |    |   8|
|   4|    |   4|
|   2|  16|   8|
</details>

<details markdown="block">
<summary>
TestMultipleMoves中的“多次移动”
</summary>
输入：text
|    |    |    |   4|
|    |    |    |   2|
|    |    |    |   2|
|    |    |   4|    |

错误输出：text
|    |    |   4|   4|
|    |    |    |   4|
|    |    |    |   4|
|    |    |    |    |
</details>

<details markdown="block">
<summary>
TestMultipleMoves中的“多次移动2”
</summary>
输入：text
|    |   4|   4|   4|
|    |    |    |   8|
|    |    |    |  16|
|   4|    |    |    |

错误输出：text
|   4|   4|   4|   4|
|    |    |    |  16|
|    |    |    |  32|
|    |    |    |    |
</details>

这很可能意味着你正在对一个不需要移动的方块调用`move`方法。也就是说，你试图将方块移动到它当前所在的位置。以下是一个将方块移动到其当前位置的错误示例（请勿这样做）：
```
Tile t = board.tile(2, 3);
board.move(2, 3, t);
```
这会导致`move`方法误认为需要将该方块与其自身合并，从而产生一个数值翻倍的方块。（这就是为什么错误输出中，部分方块的位置正确，但数值却翻倍了。）

为了修复这个错误，请确保只有在方块需要移动时，你的代码才调用`move`方法。例如，你可以在每次调用`move`方法之前添加一个if语句，检查是否尝试将方块移动到其当前位置。

## 风格规范
从这个项目开始，**我们将严格执行代码规范**。你必须遵守[代码规范](../guides/style)，否则自动评分器会进行扣分。

建议使用 CS 61B 插件在本地检查代码规范。**如果没有检查代码规范而导致不通过，我们不会取消速度限制。**

## 提交和评分

:::danger
如果因为没有添加、提交或推送正确的文件而导致不通过，我们**不会取消速度限制**。 已经提醒过你了。
:::

### 速度限制

这个项目我们限制了提交代码到自动评分器的次数。 你有 4 个提交 "令牌"，每个令牌会在 24 小时后恢复。

### 评分概述

你的代码会根据是否通过我们提供的测试来评分。没有隐藏测试；你在 Gradescope 上看到的分数就是这个项目的最终分数。

Gradescope 只会评判你的 `Model.java` 文件。如果你修改了其他文件，修改不会被识别，所以请不要修改其他文件。

测试是 "要么全对，要么全错" 的。 如果你在某个测试类别里有一个子测试没通过，即使你通过了其他测试用例，你也无法获得这个类别的分数。 比如，你在 Gradescope 的 `TestModel` 类别中会看到 5 个子测试。

下面是根据项目完成度划分的得分比例：

1. `TestEmptySpace`: 10%
2. `TestMaxTileExists`: 10%
3. `TestAtLeastOneMoveExists`: 15%
4. `TestUpOnly`: 10%
5. `TestModel`: 5%
6. `TestTiltMerge`: 10%
7. `TestTiltNoMerge`: 10%
8. `TestMultipleMoves`: 15%
9. `TestNbyN`: 15%

注意，`TestMoveTileUp` 和 `TestTiltColumn` 不计入总分。 这些测试是为了检查你的辅助方法是否正确。

一旦你把代码推送到 GitHub (也就是运行 `git push`)， 就可以去 Gradescope 找到 `proj0` 这个作业并提交代码。 记住，Gradescope 使用的是你最后一次推送的代码， 所以在 Gradescope 提交之前， 确保你运行了 `git push`， 否则测试的会是旧代码。

没有隐藏的测试。 你在 Gradescope 上看到的分数就是你本项目的分数。
