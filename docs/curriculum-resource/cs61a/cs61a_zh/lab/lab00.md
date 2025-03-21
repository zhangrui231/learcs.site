---
title: Lab 0 Getting Started
---

# Lab 0：入门 | CS 61A 2024 春季

## Lab 0：入门

-   [lab00.zip](/resource/cs61a/lab/lab00.zip)

_截止时间：1 月 24 日周三晚上 11:59。_

## 入门文件

下载 [lab00.zip](/resource/cs61a/lab/lab00.zip) 后，压缩包里包含了本次实验各个问题的起始文件，以及 Ok 自动评分器的副本。

**所有学生都必须完成这个实验，这会算入你的实验成绩。请尽量在第一次实验课之前在家完成。**

## 介绍

本实验会指导你如何设置电脑来完成作业，并介绍 Python 的一些基本知识。如果您在实验过程中需要任何帮助，欢迎随时参加答疑时间、在 Ed 上提问，或者参加你所分配的实验课。

以下是实验的概要：

-   **设置**：设置本课程所需的基本软件，包括以下几个组件：
    
    -   **安装命令行工具**：安装一个终端工具，以便您可以与本课程中的文件进行交互并运行 OK 命令。 如果您的计算机上有一个终端并且使用起来很舒服，则可以跳过此部分。
    -   **安装 Python 3**：将 Python 编程语言安装到您的计算机上。 如果您已经安装了 Python 3.7 或更高版本（最好是 Python 3.9），则可以跳过此部分。
    -   **安装代码编辑器**：安装用于编辑本课程的 `.py` 文件的软件（例如 VSCode、Atom 等）。 如果您已经有喜欢的文本编辑器，则可以跳过此部分。
-   **教程：使用终端**：本节会教你如何使用终端和 Python 解释器。 如果您已经对这两者都感到满意，则无需阅读本节。
-   **教程：组织你的文件**：请务必至少浏览一下本节，因为它包含本课程特有的重要信息。如果你已经熟悉使用终端进行目录导航，大部分内容对你来说应该不陌生。
-   **必须完成：完成作业**：您必须完成本节才能获得作业的分数。 在这里，你会练习在实验、作业和项目里会遇到的各种问题。 本作业的主要目的是让你熟悉我们的软件。
-   **必须完成：提交作业**：您必须完成本节才能获得作业的分数。 这会指导你完成上一节后如何提交作业，以及如何在 Gradescope 上确认提交成功。
-   **附录：有用的 Python 命令行选项**：这些命令在调试您的工作时很有用，但不是完成实验所必需的。 我们包含它们是因为我们认为它们可能在整个课程中对您有所帮助。

## 设置

> 要设置你的设备，请选择适合你操作系统的指南。

-   **[Windows 指南](https://cs61a.org/articles/setup-windows)**
-   **[Mac & Linux 指南](https://cs61a.org/articles/setup-mac)**

### 替代方案
如果您在安装Python解释器、文本编辑器和终端时遇到困难，或者您使用的设备（比如iPad）不允许安装软件，您可以暂时采取以下措施来完成作业，同时寻找更合适的硬件。

#### Soda实验室的电脑

您需要一个教学账号，才能登录并使用Soda实验室的任何电脑。您可以通过以下链接查看您现有的教学账号，并为适用的课程创建新的教学账号：[https://inst.eecs.berkeley.edu/connecting.html](https://inst.eecs.berkeley.edu/connecting.html)。

您可以通过您的 CalNet ID 登录该网站。要为这门课创建一个教学账号，请点击目标为“cs61a”的那一行中的“Get a new account”。

创建账号后，您就可以用它登录Soda实验室的电脑，并在上面完成课程作业。

#### 使用在线编辑器作为备选方案

> **重要提示：** 以下列出的两种替代方案都不是本课程的首选。我们建议您尽量使用自己的本地环境，或者Soda实验室的电脑（可以使用您的课程教学账号登录）。

**61A Code：**

您可以使用 [61A Code](https://code.cs61a.org/)，这是一个在线编程环境，您可以在其中编辑、运行、调试程序，进行可视化操作，并与助教们分享您的代码。 61A Code 的相关文档请参考：[61A Code 文档](https://cs61a.org/articles/61a-code-docs/)。

> **注意：** 您无法在 61A Code 中运行 `ok` 命令。您需要使用这些命令来解锁测试、运行测试和提交作业。

在 61A Code 上完成此作业的步骤：

1.  访问 [61A Code](https://code.cs61a.org/)。
2.  打开一个现有文件：进入您的 `cs61a` 文件夹，然后进入作业文件夹 (`lab00`)，您可以在其中找到此作业的文件。
3.  系统会提示您授权编辑器，点击“Confirm”即可。之后返回编辑器，您就可以打开并编辑文件了。
4.  点击“Console”即可打开终端。
5.  您可以在编辑器里编写代码，然后在控制台中运行。

**Datahub：**

另一种本地运行代码的替代方案是使用 UC Berkeley 提供的 Datahub。

在 Datahub 上完成此作业的步骤：

1.  访问 [Datahub](https://datahub.berkeley.edu/)。
2.  将作业的 zip 文件上传到 Datahub。
3.  点击左上角的“New”，然后选择“终端”即可打开终端。
4.  找到 zip 文件所在的目录，然后运行 `unzip lab00.zip` 命令。
5.  打开代码文件 (`lab00.py`)，在里面输入代码并保存。
6.  现在，您就可以提交这个实验了。

## 您的第一个实验

> 在进行实验时，请确保终端的工作目录是正确的（通常是您解压缩实验文件的位置）。

### 1) Python 会做什么？ (WWPD)

实验的一个环节是预测 Python 解释器的行为。
> 请在您的终端中输入以下内容以开始本节：
> 
> ```
> python3 ok -q python-basics -u
> ```
> 
> 系统会提示你输入各种语句和表达式的结果。你必须正确输入才能继续，答错了也没关系。
> 
> 第一次运行 Ok 的时候，会提示你输入你的 bCourses 邮箱。请按照[这些说明](https://cs61a.org/articles/using-ok/#signing-in-with-ok)操作。我们会用这个信息在评分的时候把你的代码和你关联起来。

```
>>> x = 20
>>> x + 2
______22
>>> x
______20
>>> y = 5
>>> y = y + 3
>>> y * 2
______16
>>> y + x
______28
```

### 2) 实现函数

实验通常会要求您实现函数。在您的文本编辑器中打开 `lab00.py`。您应该会看到一个名为 `twenty_twenty_four` 的函数，它有一个空白的 `return` 语句。那个空白是您唯一应该更改的部分。将其替换为计算结果为 2024 的表达式。你能想出最具创意的表达方式吗？

> 不要忘记在编辑后保存您的作业！ 最好打开自动保存功能（在 VS Code 的文件菜单里）。

### 3) 运行测试

在 CS 61A 中，我们将使用一个名为 `ok` 的程序来测试我们的代码。 `ok` 将包含在本课程的每个作业中。

回到终端，确保你在之前创建的 `lab00` 目录里（记住，`cd` 命令可以[更改目录](#changing-directories)）。

在这个目录里，你可以输入 `ls` 来确认有以下四个文件：

-   `lab00.py`：您刚刚编辑的起始文件
-   `ok`：我们的测试程序
-   `lab00.ok`：Ok 的配置文件

现在来测试一下代码，确保没问题。你可以用这个命令运行 `ok`：

```
python3 ok
```

> 如果你用的是 Windows，`python3` 命令不好使，就试试 `python` 或者 `py`。 更多信息请参考[安装 Python 3](#install-python-3)部分，有问题随时来问！

如果您正确编写了代码并且完成了测试解锁，您应该会看到一个成功的测试：

```
=====================================================================
Assignment: Lab 0
=====================================================================

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Running tests

---------------------------------------------------------------------
Test summary
    2 test cases passed! No cases failed.
```

如果你没通过测试，`ok` 会显示下面这样的内容：

```
---------------------------------------------------------------------
Doctests for twenty_twenty_four

>>> from lab00 import *
>>> twenty_twenty_four()
0

# Error: expected
#     2024
# but got
#     0

---------------------------------------------------------------------
Test summary
    0 test cases passed before encountering first failed test case
```

在文本编辑器里改代码，直到测试通过。
> 每次运行 Ok，Ok 都会尝试备份你的工作。如果出现“连接超时”的提示，不用担心，这不会影响你的成绩。
>
> 虽然 `ok` 是 CS 61A 的主要作业“自动评分器”，但你也可以尝试自己编写一些测试，例如使用 [doctests](#understanding-problems)。之后，你可以使用 `-m doctest` 这个 [Python 选项](#appendix-useful-python-command-line-options) 来运行这些测试。

任务 C: 提交作业

现在你已经完成了你的第一个 CS 61A 作业，是时候提交它了。你可以按照以下步骤提交你的作业并获得分数。

### 使用 Gradescope 提交

1. 使用你的 CalNet ID，通过**学校凭据**登录 [Gradescope](https://www.gradescope.com/)。登录后，你将进入你的**控制面板**。

    ![](/img/cs61a/gradescope-loginscreen.png) ![](/img/cs61a/gradescope-login.png)

2. 在你的**控制面板**上，选择 CS61A 课程。如果你还没有被添加到 Gradescope，请在 Ed 上发帖询问。
3. 出现对话框后，点击显示“拖放”字样的灰色区域，选择你为本次作业编辑过的代码文件 `lab00.py`。

    ![gradescope submit](/img/cs61a/gradescope-submit.png)

4. 选择文件后，点击**上传**按钮。上传成功后，屏幕上会显示确认信息，并且你会收到一封电子邮件。

    ![gradescope upload](/img/cs61a/gradescope-upload.png)

5. 接下来，请耐心等待几分钟，让自动评分器对你的代码文件进行评分。你的最终得分会显示在右侧，应该与你在本地测试的结果一致。你可以在右上角找到你提交的代码，通过标有“代码”的标签页查看。如果发现任何错误，你可以编辑 `lab00.py` 文件，然后点击屏幕底部的“重新提交”按钮。

    ![gradescope results](/img/cs61a/gradescope-results.png)

截止日期前，你可以根据需要多次重新提交作业。你对 WWPD 问题的回答不会提交给 Gradescope，也不需要提交。实验学分基于代码编写问题。

**恭喜**，你刚刚提交了你的第一个 CS 61A 作业！

## 附录：有用的 Python 命令行选项

下面介绍几种常用的 Python 文件运行方式。
1.  不使用任何命令行选项会直接运行指定文件中的代码，然后返回到命令行界面。如果文件只包含函数定义，且没有语法错误，则不会产生任何输出。

    ```
    python3 lab00.py
    ```

2.  **`-i`**: `-i` 选项运行指定文件中的代码，接着会开启一个交互式会话 (显示 `>>>` 提示符)。之后，你就可以执行各种表达式，例如调用你定义的函数。要退出，请输入 `exit()`。您也可以使用键盘快捷键 `Ctrl-D` (Linux/Mac) 或 `Ctrl-Z Enter` (Windows)。

    如果在交互模式下编辑了Python文件，需要退出并重新启动解释器，修改才会生效。

    以下是如何以交互方式运行 `lab00.py`：

    ```
    python3 -i lab00.py
    ```

3.  **`-m doctest`**: 运行文件中的 doctest，这些 doctest 是函数文档注释中的示例。

    每个测试用例都以 `>>>` 开头，后面跟着Python代码和期望的输出结果。

    以下是如何运行 `lab00.py` 中的 doctest：

    ```
     python3 -m doctest lab00.py
    ```

    如果所有doctest都通过，则不会有任何输出信息。否则，会显示关于失败测试的详细信息。
