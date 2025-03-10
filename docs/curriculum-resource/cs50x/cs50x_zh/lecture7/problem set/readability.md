---
sidebar_position: 6
description: cs50x 问题集 可读性
title: 可读性
---

# 可读性 - CS50x 2023

实现一个程序，用于估算理解给定文本所需的阅读年级水平。

```
$ python readability.py
Text: Congratulations! Today is your day. You're off to Great Places! You're off and away!
Grade 3

```

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击你的终端窗口，并单独执行 `cd`。你应该会看到终端窗口的提示符类似于下面这样：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-readability.zip

```

以便将名为 `sentimental-readability.zip` 的 ZIP 文件下载到你的 codespace。

然后执行

```
unzip sentimental-readability.zip

```

以创建一个名为 `sentimental-readability` 的文件夹。你不再需要这个 ZIP 文件，所以可以执行

```
rm sentimental-readability.zip

```

并在提示符后输入“y”，然后按回车键删除下载的 ZIP 文件。

现在输入

```
cd sentimental-readability

```

然后按回车键进入（即打开）该目录。现在你的提示符应该看起来像这样。

```
sentimental-readability/ $

```

单独执行 `ls`，你应该看到 `readability.py`。如果遇到问题，请重复上述步骤，看看能否找到出错的地方！

## [规范](#specification)

-   请创建一个名为 `readability.py` 的 Python 程序。该程序应首先提示用户输入文本，然后根据 Coleman-Liau 公式计算并输出文本的阅读年级水平，就像你在[问题集 2](https://cs50.harvard.edu/x/2023/psets/2/) 中所做的那样。
    -   提醒一下，Coleman-Liau 指数的计算公式是 `0.0588 * L - 0.296 * S - 15.8`，其中 `L` 代表文本中每 100 个单词的平均字母数，`S` 代表文本中每 100 个单词的平均句子数。
-   使用 CS50 Library 中的 `get_string` 获取用户的输入，并使用 `print` 输出你的答案。
-   你的程序应该计算文本中的字母、单词和句子的数量。你可以假设字母是任何从 `a` 到 `z` 的小写字符或任何从 `A` 到 `Z` 的大写字符，任何由空格分隔的字符序列都应计为一个单词，并且句点、感叹号或问号的任何出现都表示句子的结尾。
-   程序应输出 `"Grade X"`，`X` 是通过 Coleman-Liau 公式计算出的阅读年级，四舍五入到最接近的整数。
-   如果计算出的阅读年级为 16 或更高（相当于或高于大学高年级水平），程序应输出 `"Grade 16+"`，而不是具体的年级数字。如果计算结果小于 1，则输出 `"Before Grade 1"`。

## [用法](#usage)

程序运行示例如下：

```
$ python readability.py
Text: Congratulations! Today is your day. You're off to Great Places! You're off and away!
Grade 3

```

## [测试](#testing)

虽然可以使用 `check50` 检查代码，但我们建议你先自行测试以下用例。
-   运行 `python readability.py` 程序，等待提示输入。输入 `One fish. Two fish. Red fish. Blue fish.`，然后按回车键。程序应输出 `Before Grade 1`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `Would you like them here or there? I would not like them here or there. I would not like them anywhere.`，然后按回车键。程序应输出 `Grade 2`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `Congratulations! Today is your day. You're off to Great Places! You're off and away!`，然后按回车键。程序应输出 `Grade 3`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.`，然后按回车键。程序应输出 `Grade 5`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.`，然后按回车键。程序应输出 `Grade 7`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book," thought Alice "without pictures or conversation?"`，然后按回车键。程序应输出 `Grade 8`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.`，然后按回车键。程序应输出 `Grade 8`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `There are more things in Heaven and Earth, Horatio, than are dreamt of in your philosophy.`，然后按回车键。程序应输出 `Grade 9`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.`，然后按回车键。程序应输出 `Grade 10`。
-   运行 `python readability.py` 程序，等待提示输入。输入 `A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains.`，然后按回车键。程序应输出 `Grade 16+`。

执行以下命令来使用 `check50` 评估你的代码的正确性。但别忘了先自行编译测试!

```
check50 cs50/problems/2023/x/sentimental/readability

```

执行以下命令来使用 `style50` 评估你的代码的风格。

## [如何提交](#how-to-submit)

在你的终端中，执行以下命令来提交你的工作。

```
submit50 cs50/problems/2023/x/sentimental/readability

```