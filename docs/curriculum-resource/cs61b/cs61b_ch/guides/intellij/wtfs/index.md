---
title: IntelliJ WTFS
description: IntelliJ Weird Technical Failure Scenarios
---

本文档旨在帮助您应对在使用 IntelliJ 时经常遇到的奇怪技术故障情况 (WTFS)。我们会根据大家遇到的问题不断更新它。

## 我无法运行我的 Java 文件/文件未显示为 Java 文件

![IntelliJ 导入错误](/img/cs61b/intellij-import-error.png)

如果您的文件看起来像这样，那就说明您没有正确导入项目。要解决此问题，您只需右键单击最外层的文件夹（即您的作业文件夹，在本例中为 `proj2ab`），然后找到“Mark directory as ...”，然后点击“Sources Root”。它看起来像这样：

![IntelliJ 标记目录为](/img/cs61b/intellij-mark-dir-as.png)

对于大多数作业，您也可能需要对 `src` 文件夹执行此操作，并将 `tests` 文件夹标记为 **Test Sources Root**。您的 `src` 文件夹应为蓝色，而 `tests` 文件夹应为绿色。

有关导入新项目的其他说明，请参阅 [Assignment Workflow](../assignment-workflow)。

## JUnit 相关内容在 IntelliJ 中显示为红色

![IntelliJ 缺少 Javalib](/img/cs61b/intellij-missing-javalib.png)

这意味着您忘记了将 CS 61B `javalib` 添加为此项目的库！ IntelliJ 找不到 JUnit 特定的内容，例如 `@Test` 或 `assertEquals`，因为您忘记导入它们。

每次开始新的作业时（不幸的是，每次都是如此），您都不得不重新添加 `javalib`。为此，只需转到“File”->“Project Structure”->找到“Libraries”，然后在您的 repo 中添加 javalib。 有关添加 Java 库的其他说明，请参阅 [Lab 2 Setup]。

## package org.junit 不存在

![IntelliJ package org.junit 不存在](/img/cs61b/intellij-junit-dnt-exist.png)

有时，即使您明明已添加了正确的库，IntelliJ 也会发生这种情况，但无法运行代码。 要解决此问题，您需要将库作为直接依赖项添加到模块。 为此，请转到“File”->“Project Structure”->“Modules”->“Dependencies”，然后点击左下角的“+”图标并选择“JARs or directories”。 现在，选中 `javalib` 文件夹中的每个 `.jar` 文件并添加它们。 这些是您添加 JAR 之前设置应有的样子：

![IntelliJ 添加依赖项](/img/cs61b/intellij-adding-deps.png)

## 未指定输出路径

![IntelliJ 未指定输出路径](/img/cs61b/intellij-out-not-specified.png)

IntelliJ 将所有已编译的 Java `.class` 文件放在一个名为 `out` 的特殊文件夹中。 您可能以前见过它。 通常，IntelliJ 就能够确定将 `out` 文件夹放在哪里，但有时它无法确定，需要您的帮助。 要指定将 out 文件夹放在哪里，请转到：

“File”>“Project Structure”>“Project”>“Project compiler output”并简单地添加输出路径。 输出路径应采用 `path/to/assignment/out` 的形式，其中前缀取决于您的作业路径（hw、lab、proj 等），后缀必须为 `/out`。 家庭作业 2 的示例：

![IntelliJ 未指定输出路径](/img/cs61b/intellij-specifying-out.png)

## 一切看起来都正确，但就是无法工作！
有时候最简单的办法就是重头再来。即使你觉得自己所有步骤都做对了，重新开始往往就能解决问题。首先关闭项目（“File” -> “Close Project”），退出 IntelliJ 应用程序，然后从头开始重新导入项目。

## 如果一切都乱套了，什么都不管用！

有时候，最简单的办法就是把所有步骤都彻底重做一遍。具体来说，我们需要让 IntelliJ 彻底忘记这个项目，清除它的记忆。

IntelliJ 将项目信息存储为 `.idea` 文件夹和 `.iml` 文件。为了让它忘记我们的项目，我们将删除这些文件：

1.  关闭项目（“File” -> “Close Project”）
2.  退出 IntelliJ
3.  在文件资源管理器 (Windows) 或者访达 (Finder) 中，找到你的项目文件夹
4.  现在，你需要显示隐藏文件，才能看到 `.idea` 和 `.iml` 文件：
    - Windows 10 及以下版本：
      [指南](https://support.microsoft.com/en-us/windows/show-hidden-files-0320fe58-0117-fd59-6851-9b7f9840fdb2)
    - Windows 11：[指南](https://pureinfotech.com/show-hidden-files-windows-11-file-explorer/)
    - Mac：按 Command + Shift + .（句点）
      [指南](https://www.pcmag.com/how-to/how-to-access-your-macs-hidden-files)
5.  删除所有你看到的 `.idea` 文件夹和 `.iml` 文件
6.  在 IntelliJ 中重新打开项目

这时候，项目应该看起来就像第一次打开一样 (如果需要，你得重新导入库)。但是，如果问题依旧，你可能需要试试下面的方法：

{:start="7"}

7.  打开项目结构（“File” -> “Project Structure”）
8.  在“Project”选项卡中：
    - 设置 SDK 和语言级别
    - 设置编译器输出路径为 `<path>/<to>/<project>/out`。你可能需要手动创建这个文件夹
9.  在“Modules (模块)”选项卡中：删除所有模块 (如果有)。然后，用默认设置新建一个模块
10. 在“Libraries (库)”选项卡中：重新导入项目所需的库。
    - 这时，回头检查一下所有设置是否正确。确认没问题后，关闭项目结构
11. 在左侧的项目侧边栏，右键单击根目录，选择“Mark Directory as” -> “Sources Root”，将其标记为源目录
