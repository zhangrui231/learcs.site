---
sidebar_position: 4
description: lecture8 HTML,CSS,JavaScript Lab | 实验
title: Lab
---

# Lab 8: Trivia - CS50x 2023

编写一个网页，让用户回答问答题。

![问答题的截图](/img/cs50/questions.png )

## 准备工作

打开 [VS Code](https://cs50.dev/).

在终端窗口中，单独执行 `cd` 命令。 你会看到类似下面的提示符。

点击终端窗口内部，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/8/trivia.zip

```

然后按回车键，以便在你的 codespace 中下载一个名为 `trivia.zip` 的 ZIP 文件。注意`wget`命令后URL之间的空格，以及其他任何字符错误！

现在执行

来创建一个名为 `trivia` 的文件夹。现在可以删除ZIP文件，执行以下命令

在提示符后输入 `y` 并回车，删除下载的ZIP文件。

现在输入

然后按回车键，进入该目录。你的提示符现在应该类似于下面这样。

如果一切顺利，你应该执行

你应该能看到 `index.html` 和 `styles.css` 这两个文件。

如果你遇到任何问题，请再次按照这些相同的步骤操作，看看能否找到出错的地方！

## 具体实现

使用 HTML、CSS 和 JavaScript 设计一个网页，让用户回答问答题。

-   在 `index.html` 中，在“Part 1”下方添加一个你用HTML编写的选择题。
    -   你应该使用 `h3` 标题作为你问题的文本。
    -   每个选项都应该是一个 `button`。应该至少有三个答案选项，其中只有一个是正确的。
-   使用 JavaScript，添加JavaScript代码，实现点击按钮改变颜色的功能。
    -   如果用户单击带有错误答案的按钮，则该按钮应变为红色，并在问题下方显示“Incorrect”。
    -   如果用户单击带有正确答案的按钮，则该按钮应变为绿色，并在问题下方显示“Correct!”。
-   在 `index.html` 中，在“Part 2”下方添加一个你用HTML编写的文本输入题。
    -   你应该使用 `h3` 标题作为你问题的文本。
    -   使用 `input` 框让用户输入答案。
    -   你应该使用 `button` 让用户确认他们的答案。
-   使用 JavaScript，添加JavaScript代码，实现确认答案时改变文本框颜色的功能。
    -   如果用户键入错误的答案并按下确认按钮，则文本字段应变为红色，并在问题下方显示“Incorrect”。
    -   如果用户键入正确的答案并按下确认按钮，则输入字段应变为绿色，并在问题下方显示“Correct!”。

可选地，你也可以：

-   编辑 `styles.css` 以更改你网页的 CSS！
-   如果你愿意，可以向你的知识问答测验添加其他问答题！

### 示例

### 提示

-   使用 [`document.querySelector`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) 查询单个 HTML 元素。
-   使用 [`document.querySelectorAll`](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll) 查询与查询匹配的多个 HTML 元素。该函数返回所有匹配元素的数组。

不确定如何解决？

### 测试

由于题目各不相同，此lab没有 `check50` 检查！但是请务必测试每个问题的错误和正确的答案，以确保你的网页做出适当的响应。

在你的终端中，在你的 `lab8` 目录中运行 `http-server` 来运行你的网页。

## 如何提交

在终端中执行以下命令提交你的作业。

```
submit50 cs50/labs/2023/x/trivia

```
