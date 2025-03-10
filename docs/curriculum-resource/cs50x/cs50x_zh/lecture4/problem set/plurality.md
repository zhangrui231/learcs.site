---
sidebar_position: 1
description: cs50x 问题集：plurality
title: plurality
---

# Plurality - CS50x 2023

在这个程序中，你将会实现一个使用简单多数决的选举程序，具体如下所示。

```
$ ./plurality Alice Bob Charlie
Number of voters: 4
Vote: Alice
Vote: Bob
Vote: Charlie
Vote: Alice
Alice

```

## [背景](#background)

选举的形式和规模多种多样。在英国，[首相](https://www.parliament.uk/education/about-your-parliament/general-elections/)由君主正式任命，通常君主会选择在下议院赢得席位最多的政党领袖。美国采用一套多步骤的[选举人团](https://www.archives.gov/federal-register/electoral-college/about.html)制度，公民投票决定各州选举人票的归属，最终由选举人团选出总统。

不过，最简单的选举方式莫过于“简单多数投票制”（也称“领先者当选”或“赢者通吃”）。在简单多数投票制下，每位选民只能投票给一位候选人。选举结束后，得票最多的候选人即当选。

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击终端窗口，然后直接输入 `cd` 命令。你应该会看到终端窗口的提示符类似如下所示：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/3/plurality.zip

```

这样可以将名为 `plurality.zip` 的 ZIP 文件下载到你的 codespace。

然后执行

来创建一个名为 `plurality` 的文件夹。现在你不再需要这个 ZIP 文件了，可以执行

并在提示符后输入“y”，然后按回车键删除下载的 ZIP 文件。

现在输入

然后按回车键进入该目录。此时你的提示符应该类似这样。

如果一切顺利，执行以下命令

你应该能看到一个名为 `plurality.c` 的文件。执行 `code plurality.c` 命令会打开这个文件，你可以在其中编写代码。如果没看到，请检查之前的步骤，看看哪里出错了！

## [理解](#understanding)

让我们看一下 `plurality.c` 并阅读提供给你的分发代码。

`#define MAX 9` 这行代码定义了一个常量 `MAX`，它的值为 `9`，可以在整个程序中使用。在这里，它表示选举可以拥有的最大候选人数。

接着，代码定义了一个名为 `candidate` 的 `struct`（结构体）。每个 `candidate` 结构体包含两个成员：一个名为 `name` 的 `string`（字符串），表示候选人的姓名；以及一个名为 `votes` 的 `int`（整型），表示候选人获得的票数。然后，代码定义了一个全局数组 `candidates`，数组中的每个元素都是一个 `candidate` 结构体。

现在，来看一下 `main` 函数。看看你能不能找到程序中设置全局变量 `candidate_count` 的地方，这个变量代表了选举中候选人的数量。程序还会将命令行参数复制到 `candidates` 数组中，并提示用户输入选民人数。然后，程序允许每位选民输入他们所投票的候选人（注意实现方式！），并对每位被投票的候选人调用 `vote` 函数。最后，`main` 函数会调用 `print_winner` 函数来输出选举的获胜者（或并列获胜者）。

但是，如果你继续往下看，你会发现 `vote` 和 `print_winner` 这两个函数还是空的，需要你来完成！

## [规范](#specification)

你需要完成 `plurality.c` 文件的代码，使其能够模拟一个简单多数决选举。
-   实现 `vote` 函数。
    -   `vote` 接受一个参数，一个名为 `name` 的字符串，代表被投票的候选人的姓名。
    -   如果 `name` 与选举中某个候选人的姓名匹配，则更新该候选人的总票数。此时，`vote` 函数应返回 `true`，表示投票有效。
    -   如果 `name` 与任何候选人的姓名都不匹配，则不应更改任何投票总数，并且 `vote` 函数应返回 `false`，表示投票无效。
    -   假设没有候选人同名。
-   实现 `print_winner` 函数。
    -   该函数应打印得票最多的候选人姓名，并输出一个换行符。
    -   如果多位候选人得票数相同且最高，则可能出现平局。 此时，应在不同行上输出所有获胜候选人的姓名。

除了 `vote` 和 `print_winner` 函数的实现（以及包含其他头文件，如果您愿意）之外，您不应修改 `plurality.c` 中的任何其他内容。

## [用法](#usage)

您的程序应按照以下示例运行。

```
$ ./plurality Alice Bob
Number of voters: 3
Vote: Alice
Vote: Bob
Vote: Alice
Alice

```

```
$ ./plurality Alice Bob
Number of voters: 3
Vote: Alice
Vote: Charlie
Invalid vote.
Vote: Alice
Alice

```

```
$ ./plurality Alice Bob Charlie
Number of voters: 5
Vote: Alice
Vote: Charlie
Vote: Bob
Vote: Bob
Vote: Alice
Alice
Bob

```

## [演练](#walkthrough)

## [测试](#testing)

请务必测试您的代码，以确保它可以处理...

-   任何数量的候选人的选举（最多 `MAX` 的 `9`）
-   按姓名投票给候选人
-   对不在选票上的候选人的无效投票
-   如果只有一个获胜者，则打印选举的获胜者
-   如果有多个获胜者，则打印选举的获胜者

执行以下命令以使用 `check50` 评估代码的正确性。 但请务必自己编译并测试它！

```
check50 cs50/problems/2023/x/plurality

```

执行以下命令以使用 `style50` 评估代码的风格。

## [如何提交](#how-to-submit)

在您的终端中，执行以下命令以提交您的工作。

```
submit50 cs50/problems/2023/x/plurality

```
