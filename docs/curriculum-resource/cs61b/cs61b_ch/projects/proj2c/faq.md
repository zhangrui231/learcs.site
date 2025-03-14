---
title: "FAQ - Project 2C"
description: Project 2C FAQ.
---

## 设置

### 我遇到了一个错误，提示 `spark failed to ignite`。

这可能表明其他进程正在使用 Spark 且尚未终止。重启电脑应该可以解决这个问题。

### 执行 `git pull` 命令后出现分支分歧错误。

运行 `git config pull.rebase false` 并再次拉取。

### 我收到“Cannot invoke "ngordnet.ngrams.TimeSeries.years()" because "ILILILILIILILIILILIILIL" is null”

重新拉取 `library-sp24` 中的库。

### 我尝试在 `library-sp24` 目录下运行 `git pull`，但仍然遇到上述异常。

确保在获取新的库文件后，已在 IntelliJ 中重新导入库。

### 无论我做什么，库仍然无法工作！

尝试完全删除 `library-sp24` 并重新克隆它。

### 运行 `Main.java` 时，提示 `Failed to bind to /0.0.0.0:4567` 错误。

保存你的代码并重启 IntelliJ。如果这不起作用，也尝试重启你的电脑。

## HyponymsHandler - k > 0

### 如何对具有相同计数的单词进行排序？

对于这个项目来说，这并不重要——任何行为都是可以接受的。这意味着你可以按字母顺序、随机地或根本不打破平局！

### 我应该如何存储单词的总流行度？

想想你在 Proj 2A 中是怎么做的。`TimeSeries` 的值是双精度浮点数 (double)，不是整数 (int)。如果存储整数计数，可能会发生整数溢出。

![image](/img/cs61b/cheesememe.png)
