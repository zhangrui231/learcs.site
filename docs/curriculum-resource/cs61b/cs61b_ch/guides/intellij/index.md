---
title: IntelliJ
---

## 使用 IntelliJ ##

### IntelliJ 文档 ###

正如我们之前提到的，IntelliJ 是一款在业界广泛使用的 IDE，对大家来说各有优缺点。这意味着你将学习使用一款真正的工具，一款你毕业后可能还会长期使用的工具。IntelliJ 功能也非常强大，能让你体验到以前课程中可能从未见过的编程方式。由于其广泛的应用，JetBrains 投入了大量资源维护其文档。完整指南请见此处：[intellij-guide]，他们也有许多有用的视频教程：[intellij-videos]。

[intellij-guide]: https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html
[intellij-videos]: https://www.jetbrains.com/idea/documentation/

通过这些链接可以看出，IntelliJ 的一个缺点是功能和可配置项繁多，可能会让人感到无所适从。他们的文档和视频中可能会提到一些你没听过的概念，但这并不影响你在这门课上高效使用 IntelliJ。我们会尽力简化这个过程，帮助大家提高编程效率。

我们从官方指南和教学视频中整理了以下页面/视频，帮助大家快速上手 IntelliJ 开发。除了完成本次实验的其他内容外，完整看完这个列表可能需要较长时间。我们将其作为参考资料放在这里，供大家自行学习，并将其分为“立即阅读”和“稍后观看”两部分。如果时间允许，建议继续探索这些资源，并尝试找到适合自己的工作流程。

#### 入门 ####

* [用户界面概述](https://www.jetbrains.com/help/idea/guided-tour-around-the-user-interface.html)：这是一个高度概括的介绍，解释了 IntelliJ 中各种窗口及其名称。理解这些内容将有助于你理解其他参考资料。
* [探索 IntelliJ IDEA](https://www.jetbrains.com/help/idea/discover-intellij-idea.html)：本指南内容更详尽，介绍了 IDE 的一些重要功能以及常用的键盘快捷键。现在可以先大致浏览一下，如果遇到不熟悉的词汇也没关系。本指南的部分内容涉及我们不会用到的功能。如果觉得其他文档内容过多，可以参考这里，它涵盖了本学期会用到的大部分功能。

#### 进阶功能 ####
* 这个视频展示了如何通过尽可能少地使用鼠标/触控板来高效地操作 IDE。视频中介绍的很多功能并非使用编辑器的必需，但能帮助你更快地完成任务。如果时间允许，可以尝试观看并跟随视频操作。即使只是了解这些功能的存在，将来也可能会有所帮助。

<div style={{position: "relative", width: "100%", paddingTop: "56.25%"}}><iframe style={{position: "absolute", top: "0px",left: "0px", bottom: "0px", right: "0px",height: "100p%", width: "100%", margin: "auto"}} src="https://www.youtube.com/embed/1UHsJyCq1SU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

* 这个视频展示了 IntelliJ 中代码生成的功能。同样，这里展示的功能比本课程所需更高级，观看时可以尝试学习并应用到你的 IDE 使用中。

<div style={{position: "relative", width: "100%", paddingTop: "56.25%"}}><iframe style={{position: "absolute", top: "0px", left: "0px", bottom: "0px", right: "0px", height: "100%", width: "100%", margin: "auto"}} src="https://www.youtube.com/embed/sx7_SS8y-_o" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

* 最后，这个视频讲解了 Git (或其他版本控制工具) 与 IntelliJ IDE 的集成。本课程要求大家理解 Git CLI (命令行界面)，但有时使用 GUI (图形用户界面) 来可视化 Git 仓库的更改也会很有帮助。同样，我们不建议大家主要使用 GUI 进行 Git 交互，但了解其存在是有益的。
<div style={{position: "relative", width: "100%", paddingTop: "56.25%"}}><iframe style={{position: "absolute", top:" 0px", left: "0px",bottom: "0px", right: "0px", height: "100%", width:" 100%", margin: "auto"}} src="https://www.youtube.com/embed/MaQnpCaiop0"
 frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

## 使用 CS 61B 插件 ##

### Java 可视化工具 ###

此插件包含 Java 可视化工具的内置版本，该工具类似于您可能在 CS 61A 或其他先前课程中使用过的 Python Tutor。此工具旨在帮助您调试和理解您的代码，并已集成到 IntelliJ 的 Java 调试器中。同学们通常觉得这能帮助他们更好地适应在 IntelliJ 中进行调试。不过，这学期后面，有些代码可能会变得比较复杂，超出这个可视化工具的处理能力。

要使用内置的可视化工具，您必须调试您的代码，因此您可以按照上面的步骤再次启动调试器。当您的代码在断点处停止时，您可以单击 Java 可视化工具图标：

![java-viz-1](/img/cs61b/java-viz-1.png "启动 Java 可视化工具")

单击此按钮后，将出现 Java 可视化工具，显示当前暂停的程序的堆栈以及不同变量的图表。

![java-viz-2](/img/cs61b/java-viz-2.png "Java 可视化工具运行界面")

当您继续单步执行并暂停您的代码时，可视化工具显示将相应地更新，以向您显示程序中发生的情况。在实验的编码部分，尝试使用可视化工具来检查您的理解。

### 样式检查 ###

在本课程中，您最终需要确保您的代码符合[官方样式指南][../style/index.md]。 CS61B 插件包含一个有用的代码风格检查器，它将检查您的代码并通知您任何样式错误及其位置。这样你就能在本地改好代码风格，避免以后被扣分。_注意：样式检查器不会为此作业运行，所以这次作业不用担心代码风格问题。_

要运行代码风格检查器，只需右键单击要检查的任何文件或目录，然后在出现的菜单中选择**代码风格检查**

![check-style-1](/img/cs61b/check-style-1.png "代码风格检查")

点击后，就会开始检查代码风格。工具窗口会显示检查结果和所有错误。点击链接可以直接跳转到出错的代码行：

![check-style-2](/img/cs61b/check-style-2.png "代码风格检查结果")
