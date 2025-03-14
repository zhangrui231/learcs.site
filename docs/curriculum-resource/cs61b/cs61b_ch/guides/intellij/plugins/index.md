---
layout: page
title: Installing and Using the IntelliJ Plugins
author: Eli Lipsitz
parent: IntelliJ
grand_parent: Guides
has_children: false
has_toc: false
has_right_toc: true
description: >-
  IntelliJ Plugins
released: true
---

本文档将指导你安装和使用 CS 61B 的 IntelliJ 插件。本指南假定你已经安装了 IntelliJ，并且安装了 Lab 1 的插件，同时已将这些插件更新到最新版本。

## 使用插件 ##

### 样式检查 ###

这门课里，你们最终需要确保代码符合官方的代码风格指南。这个插件自带一个很有用的代码风格检查工具，它可以检查你的代码，并且告诉你哪里有代码风格错误。

要运行代码风格检查，只需右键点击想要检查的文件或文件夹，然后在弹出的菜单里选择“**Check Style**”：
![Check Style Menu](/img/cs61b/plugin-checkstyle-button.png)

然后会弹出一个工具窗口，里面会显示代码风格检查的结果，以及所有错误的列表。点击链接就能直接跳转到出错的代码行：
![Check Style Results Tool Window](/img/cs61b/plugin-checkstyle-results.png)

### Java 可视化工具 ###

“Java Visualizer”插件包含一个类似于你可能在 CS 61A 中使用过的 Python Visualizer 的工具。这个工具可以帮助你调试和理解代码，它已经集成到了 IntelliJ 的 Java 调试器里。

要使用内置的可视化工具，请调试你的代码，并根据需要设置断点。当你的代码停下来的时候，你就可以点击 Java Visualizer 标签页了。
![Java Visualizer Button](/img/cs61b/plugin-visualizer-tab.png)

Java Visualizer 就会显示出来，展示当前暂停的程序的堆栈信息。
![Java Visualizer In Action](/img/cs61b/plugin-visualizer-view.png)

当你继续单步调试并暂停代码时，可视化工具会同步更新，展示程序内部的运行状态。
