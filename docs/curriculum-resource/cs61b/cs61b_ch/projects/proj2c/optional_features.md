---
title: Project 2B/C Optional Features
description: Project 2B/C optional features.
---

## 入门

本作业的剩余部分为可选内容，但我们强烈建议您完成。

这部分项目结合了 `NGramMap`（项目 2a）和 `WordNet`（项目 2b）的功能。首先，将项目 2a 中的 `HistoryHandler`、`HistoryTextHandler`、`NGramMap` 和 `TimeSeries` 复制到项目 2b 中。您还应调整 `Main.java`，注册这三个处理程序。

## 添加新按钮

获取下位词列表固然有趣，但绘制它们的相对频率有时会更有意思。例如，如果用户输入单词“food, cake”，startYear = 1900，endYear = 2020，k = 8 并单击“Hypohist”，他们将能够看到 1900 年到 2020 年期间，作为 food 和 cake 的下位词的 8 个最流行单词的相对频率。

在这部分中，您将编辑三种不同类型的文件：

- HTML
- JavaScript
- Java

我们假设您以前不熟悉 HTML 或 JavaScript。在实际项目中，必须修改您不熟悉的代码，甚至可能是您从未见过的编程语言，这非常常见。

### 添加 Hypohist 按钮

打开 `ngordnet.html` 文件。找到创建现有按钮（例如 `History` 和 `Hyponyms`）的代码。根据已有的代码，复制并粘贴您认为创建两个新按钮（分别显示“Hypohist”和“Hypohist (text)”）所需的代码片段。

完成后，尝试单击 Hypohist 按钮，但不会发生任何事情。

### 创建 Hypohist 处理程序

在 `Ngordnet.main.Main` 中，注册一个新的 Handler，命名为 `HypohistHandler`。它应该注册到字符串 `hypohist`。此处理程序应仅返回文本“hello i am hypohist”。运行您的 Java 服务器，它现在已准备好侦听 Hypohist 点击。

在服务器运行的情况下，尝试单击 Hypohist 按钮，但...仍然不会发生任何事情！

### JavaScript 回调

即使我们的服务器正在侦听 Hypohist 点击，并且我们正在单击 Hypohist 按钮，但什么也没有发生！

也就是说，您的浏览器甚至没有尝试将查询发送到您的 Java 文件。这是因为 HTML 代码本身功能有限，主要负责指定网站的外观。

虽然名为 JavaScript，但它与 Java 没有任何关系。人们普遍认为，这在很大程度上是一种营销策略（请参阅[此页面](https://www.webucator.com/article/why-javascript-is-called-javascript/)或 [JavaScript 的创建者 Brendan Eich 的此视频](https://www.youtube.com/watch?v=XOmhtfTrRxc&t=125s)），发生在 20 世纪 90 年代中期，当时 Java 是一种新兴且很酷的技术，而 JavaScript 才刚刚出现。

让我们来了解一下前端 JavaScript 编程。打开“ngordnet.js”。此代码充当浏览器中可视用户界面和您的 Java 代码之间的中间人。请注意，此项目的 HTML 和 Javascript 文件未达到专业标准，我只是快速地将它们拼凑在一起，并尽可能地保持简单，以便您至少可以稍微舒服地使用它们。

您的艰巨任务：尝试修改代码，以便当您单击“Hypohist”按钮时，您成功地获得 `HypohistHandler` 输出的文本，如果您使用我上面的确切建议，则该文本应为“hello i am hypohist”。

这种摸索着完成快速编程任务的方式，在过去被称为“hacking”。虽然这个词现在有很多不同的含义。

提示：

- 仔细进行模式匹配！
- 随意编辑、测试和实验。您不会永久破坏任何东西。
- 如果您破坏了某些东西，请使用 git checkout 获取 JS 文件的原始版本。
- 不要通过直接询问别人该怎么做来作弊。当您进行原型设计和拼凑代码时，这种编辑和试验您不理解的代码的技能非常重要。
- 在现实世界中，不应发布通过这种 hacking 过程创建的生产代码。但是，它对于原型设计非常有用！

### Hypohist

接下来，完善 Hypohist 按钮的处理程序，使其能够按预期工作，即返回 Hyponyms 提供的下位词在指定时间段内的相对频率图。
也就是说，我们将按照上面的说明做：例如，如果用户输入单词“food, cake”，设置`startYear=1900`，`endYear=2020`和`k=8`，然后点击“Hypohist”按钮，他们就能看到1900到2020年间，'food'和'cake'的8个最常见的下位词 (hyponyms) 的相对频率。

注意：当Hypohist的k值大于0时，程序行为是比较直接明了的。如果k=0，那具体该怎么做就不太清楚了。也许你可以发挥一下，搞点新花样。

<!--
### 可选：K 为 0 的 Hypohist

如果 K 为 0，则不绘制 k 个最流行的下位词，而应绘制作为给定单词的下位词的所有单词的总权重历史记录。例如，如果用户输入“food, cake”，startYear = 1900，endYear = 2020，k = 8，那么我们将看到“cat”和“dog”的图，其中 cat 代表 cat 的所有下位词的总权重，而“dog”代表 dog 的所有下位词的总权重。

请注意，如果缺少该值，Web 前端会将 k 设置为零。
-->

<!--
### Hypohist（文本）

这有点不太有趣，但您可能会发现返回以下内容很有趣

最后，修改 HTML、javascript 和 Java 代码，以便有一个新的 Hypohist（文本）按钮。此按钮应返回类似于 History（文本）的文本显示，但用于上一节中描述的 hypohist。
-->

<!--
## 发现有趣的东西

最后，一旦您正确实现了此作业的所有功能，您应该使用 `history`、`hyponyms` 或 `hypohist` 按钮来发现一些有趣的东西。如果你发现了什么有趣的，请通过这个 Google 表单 (即将推出) 提交你的发现。

-->

## 添加更多功能 (可选): 你还可以给你的工具添加更多功能。以下是一些建议：

- 添加一些额外的按钮，用一些有创意的方式来使用一个或多个数据集。例如，您可以绘制给定年份中所有单词的平均长度。或者您可以创建所有单词的下位词的可视化。或者您可能有一个功能可以打印两个单词之间的最短路径。
- 下位词搜索会查找所有下位词，无论与源的距离有多远。例如，“dog”有很多下位词。添加一个新字段 d，该字段仅查找与给定单词的距离小于或等于 d 的单词。
- 可以使用 '!' 运算符。例如，如果用户输入 '!person, leader'，程序会找出所有非人类的领导者。
