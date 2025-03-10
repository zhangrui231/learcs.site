---
sidebar_position: 4
description: lecture2 Arrays Lab | 实验
title: Lab
---

# 实验 2：CS50x 2023 - Scrabble 拼字游戏

判断两个 Scrabble 单词哪个得分更高。

```
$ ./scrabble
Player 1: COMPUTER
Player 2: science
Player 1 wins!

```

## 开始

打开 [VS Code](https://cs50.dev/)。

首先，点击终端窗口，然后直接输入 `cd` 命令并执行。你应该会看到类似下面的提示符。

点击该终端窗口，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/2/scrabble.zip

```

然后按 Enter 键，下载名为 `scrabble.zip` 的 ZIP 文件到你的 codespace。请务必注意 `wget` 命令和 URL 之间的空格，以及其他任何字符，不要遗漏！

现在执行

来创建一个名为 `scrabble` 的文件夹。创建完成后，你就不再需要 `scrabble.zip` 文件了，可以执行以下命令删除它：

并在提示符后输入 `y`，然后按 Enter 键删除下载的 ZIP 文件。

现在输入

然后按 Enter 键，进入该目录。你的提示符现在应该看起来像下面这样。

如果一切顺利，您应该执行

您应该看到一个名为 `scrabble.c` 的文件。 通过执行以下命令打开该文件：

如果你遇到任何问题，请重新按照上述步骤操作，看看能不能找到出错的地方！

## 背景

在 [Scrabble](https://scrabble.hasbro.com/en-us/rules) 拼字游戏中，玩家通过拼写单词来获得分数，总分是单词中每个字母分值之和。

| A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | 3 | 3 | 2 | 1 | 4 | 2 | 4 | 1 | 8 | 5 | 1 | 3 | 1 | 1 | 3 | 10 | 1 | 1 | 1 | 1 | 4 | 4 | 8 | 4 | 10 |

例如，要计算单词 `Code` 的得分，根据 Scrabble 规则，`C` 是 3 分，`o` 是 1 分，`d` 是 2 分，`e` 是 1 分。总分是 3 + 1 + 2 + 1 = 7 分。

## 实现细节

完成 `scrabble.c` 的代码编写，使其能够判断一个简化版 Scrabble 游戏中谁是赢家。在这个游戏中，两名玩家分别输入一个单词，得分高者胜出。
-   请注意，我们已将字母表中每个字母对应的分值存储在名为 `POINTS` 的整数数组中。
    -   例如，`A` 或 `a` 的分值为 1 分（对应 `POINTS[0]`），`B` 或 `b` 的分值为 3 分（对应 `POINTS[1]`），以此类推。
-   请注意，这个原型声明是必需的，它让 C 语言编译器知道 `compute_score()` 函数会在稍后的程序中定义。当我们需要计算某个单词的分值时，可以调用此函数。
-   在 `main()` 中，程序使用 `get_string()` 函数提示两个玩家输入他们的单词。这些值存储在名为 `word1` 和 `word2` 的变量中。
-   在 `compute_score()` 函数中，程序应使用 `POINTS` 数组计算并返回字符串的分数。非字母字符的分值为零，大小写字母的分值相同。
    -   例如，`!` 的分值为 `0` 分，而 `A` 和 `a` 的分值均为 `1` 分。
    -   虽然通常的拼字游戏规则要求单词必须存在于字典中，但本题无需进行此项检查。
-   在 `main()` 中，您的程序应根据玩家的分数打印 `Player 1 wins!`、`Player 2 wins!` 或 `Tie!`。

### 演练

### 提示

-   您可能会发现 `isupper()` 和 `islower()` 这两个函数很有用。这些函数接受一个字符作为参数并返回一个布尔值。

-   要获取名为 `arr` 的数组中索引为 `n` 的元素值，可以使用 `arr[n]`。 字符串也可以看作是字符数组，因此同样适用。

-   回想一下，计算机使用 [ASCII](https://asciitable.com/) 表示字符，这是一种将每个字符表示为一个数字的标准。

没有思路？

### 如何测试你的代码

您的程序应按照以下示例运行。

```
$ ./scrabble
Player 1: Question?
Player 2: Question!
Tie!

```

```
$ ./scrabble
Player 1: Oh,
Player 2: hai!
Player 2 wins!

```

```
$ ./scrabble
Player 1: COMPUTER
Player 2: science
Player 1 wins!

```

```
$ ./scrabble
Player 1: Scrabble
Player 2: wiNNeR
Player 1 wins!

```

请执行以下命令，使用 `check50` 评估代码的正确性。 同时，请务必自行编译并测试代码！

```
check50 cs50/labs/2023/x/scrabble

```

执行以下命令以使用 `style50` 评估代码的风格。

## 如何提交

在您的终端中，执行以下命令以提交您的工作。

```
submit50 cs50/labs/2023/x/scrabble

```
