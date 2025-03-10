---
sidebar_position: 1
description: cs50x 问题集 可读性
title: 可读性
---

# 可读性 - CS50x 2023

在这个问题中，你需要编写一个程序，根据以下方法估算理解一段文本所需的年级水平。

```
$ ./readability
Text: Congratulations! Today is your day. You're off to Great Places! You're off and away!
Grade 3

```

## [入门](#getting-started)

打开 [VS Code](https://cs50.dev/)。

首先，点击终端窗口，然后输入 `cd` 并执行。你应该会看到类似下面的“提示符”。

点击该终端窗口，然后执行

```
wget https://cdn.cs50.net/2022/fall/psets/2/readability.zip

```

然后按回车键，下载名为 `readability.zip` 的 ZIP 文件到你的 codespace。请注意 `wget` 命令后URL前的空格，以及其他任何字符的正确性！

现在执行

来创建一个名为 `readability` 的文件夹。下载完成后，你可以执行

在提示符后输入 'y' 并按回车键，删除已下载的 ZIP 文件。

现在输入

然后按回车键进入该目录。现在你的提示符应该类似这样：

如果一切正常，执行

并看到一个名为 `readability.c` 的文件。执行 `code readability.c` 应该会打开该文件，你将在其中键入此问题集的代码。如果不是，请回顾你的步骤，看看哪里出错了！

## [背景](#background)

根据 [Scholastic](https://www.scholastic.com/teachers/teaching-tools/collections/guided-reading-book-lists-for-every-level.html)，E.B. White 的 _Charlotte’s Web_ 适合小学二到四年级阅读，Lois Lowry 的 _The Giver_ 适合小学八到十二年级阅读。但是，一本书达到特定阅读水平意味着什么呢？

嗯，在许多情况下，人类专家可能会阅读一本书，并决定他们认为该书最适合哪个年级（即学校的年份）。但算法也能做到！

那么，较高阅读水平通常有什么特点呢？嗯，较长的单词可能与较高的阅读水平相关。同样，较长的句子也可能与较高的阅读水平相关。

多年来，人们开发了许多“可读性测试”，这些测试定义了用于计算文本阅读水平的公式。其中一种可读性测试方法是 _Coleman-Liau 指数_。Coleman-Liau 指数旨在衡量理解一段文本所需的年级水平。该公式为

```
index = 0.0588 * L - 0.296 * S - 15.8

```

其中 `L` 是文本中每 100 个单词的平均字母数，`S` 是文本中每 100 个单词的平均句子数。

我们来编写一个名为 `readability` 的程序，它可以分析一段文本并给出其阅读水平。例如，如果用户输入一行 Dr. Seuss 的文本，则该程序的行为应如下所示：

```
$ ./readability
Text: Congratulations! Today is your day. You're off to Great Places! You're off and away!
Grade 3

```

这段文本包含 65 个字母、4 个句子和 14 个单词。计算可知，平均每 100 个单词包含 464.29 个字母 (65 / 14 \* 100 = 464.29)。平均每 100 个单词包含 28.57 个句子 (4 / 14 \* 100 = 28.57)。将这些数值代入 Coleman-Liau 公式，四舍五入后得到 3，因此这段文字的阅读水平为三年级。

让我们尝试另一个：

```
$ ./readability
Text: Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.
Grade 5

```

此文本有 214 个字母、4 个句子和 56 个单词。计算得出，平均每 100 个单词约有 382.14 个字母和 7.14 个句子。代入 Coleman-Liau 公式，我们得到五年级的阅读水平。

随着句子中平均字母数和单词数的增加，Coleman-Liau 指数会给出更高的阅读等级。例如，如果使用这段文字（其单词和句子比前两个例子更长），该公式会得出12年级的阅读水平。

```
$ ./readability
Text: As the average number of letters and words per sentence increases, the Coleman-Liau index gives the text a higher reading level. If you were to take this paragraph, for instance, which has longer words and sentences than either of the prior two examples, the formula would give the text an twelfth-grade reading level.
Grade 12

```

观看视频

## [规范](#specification)

设计并实现一个程序 `readability`，用于计算文本的 Coleman-Liau 指数。

-   在 `readability` 目录下的 `readability.c` 文件中实现你的程序。
-   你的程序必须使用 `get_string` 提示用户输入文本。
-   你的程序应该计算文本中的字母、单词和句子的数量。你可以假设字母是 a-z 或 A-Z 之间的字符，任何由空格分隔的字符序列都应被视为一个单词，句号、感叹号或问号都表示句子结束。
-   你的程序应输出 `"Grade X"`，其中 `X` 是由 Coleman-Liau 公式计算出的等级，四舍五入到最接近的整数。
-   如果计算结果为 16 或更高（相当于大学高年级及以上水平），程序应输出 `"Grade 16+"`，而不是具体的数值。如果索引号小于 1，你的程序应输出 `"Before Grade 1"`。

### [获取用户输入](#getting-user-input)

我们首先编写 C 代码，从用户获取文本输入并打印出来。具体来说，在 `readability.c` 中实现一个 `main` 函数，该函数使用 `get_string` 提示用户输入 `"Text: "`，然后使用 `printf` 打印相同的文本。请记住，在完成此程序时，如果你使用任何库函数，请务必 `#include` 任何相应的头文件。

该程序的行为应如下所示。

```
$ ./readability
Text: In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.
In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.

```

### [字母](#letters)

现在你已经从用户那里收集了输入，让我们首先通过计算文本中的字母数来分析该输入。将字母视为大写或小写字母字符，而不是标点符号、数字或其他符号。

在 `readability.c` 中，于 `main` 函数下添加一个名为 `count_letters` 的函数，该函数接受一个参数，即一段 `string` 文本，并返回一个 `int`，即该文本中的字母数。请务必在文件顶部声明该函数原型，以便 `main` 函数可以调用它。原型很可能类似于以下内容：

```
int count_letters(string text)

```

然后在 `main` 函数中调用该函数，使程序打印字母数，而不是文本内容。

该程序的行为现在应如下所示。

```
$ ./readability
Text: Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book," thought Alice "without pictures or conversation?"
235 letters

```

提示

`ctype.h` 中声明了一个有用的函数，详见 [manual.cs50.io](https://manual.cs50.io/)。如果你使用它，请务必在你的代码顶部包含该头文件！

### [单词](#words)

Coleman-Liau 指数不仅关心字母的数量，还关心句子中的单词数量。在此，我们将任何由空格分隔的字符序列都视为一个单词（因此，像 `"sister-in-law"` 这样的连字符单词应被视为一个单词，而不是三个单词）。

在 `readability.c` 中，于 `main` 函数下添加一个名为 `count_words` 的函数，该函数接受一个参数，即一段 `string` 文本，并返回一个 `int`，即该文本中的单词数。请务必在文件顶部添加该函数的原型，以便 `main` 知道如何调用它。（我们将其原型留给你！）

然后在 `main` 函数中调用该函数，以便你的程序也打印文本中的单词数。

你可以假设一个句子：

-   将包含至少一个单词；
-   不会以空格开头或结尾。
-   不会有多个连续的空格。

当然，我们也欢迎您尝试编写能够处理单词间存在多个空格，甚至没有单词的解决方案！

程序现在的运行结果应该如下所示。

```
$ ./readability
Text: It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.
250 letters
55 words

```

### [句子](#sentences)

除了字母和单词的数量之外，科尔曼-廖指数还关注的最后一个信息是句子的数量。确定句子的数量可能非常棘手。您可能首先认为句子只是以句点结尾的任何字符序列，但当然句子也可以以感叹号或问号结尾。但当然，并非所有的句点都一定意味着句子的结束。例如，考虑下面的句子。

```
Mr. and Mrs. Dursley, of number four Privet Drive, were proud to say that they were perfectly normal, thank you very much.

```

这只是一个句子，但有三个句点！对于这个问题，我们将要求您忽略这种微妙之处：您应该将以 `.` 或 `!` 或 `?` 结尾的任何字符序列都视为一个句子（因此对于上面的“句子”，您应该将其计为三个句子）。在实践中，句子边界检测需要更智能一些才能处理这些情况，但我们现在不考虑这一点。

在 `readability.c` 中，在 `main` 函数下方，添加一个名为 `count_sentences` 的函数，该函数接受一个参数，即文本的 `string`，并返回一个 `int`，即该文本中句子的数量。 请务必在文件顶部添加函数原型，以便`main`函数可以正确调用。（函数原型请自行完成！）

然后在 `main` 函数中调用该函数，以便您的程序也打印文本中句子的数量。

程序现在的运行结果应该如下所示。

```
$ ./readability
Text: When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.
295 letters
70 words
3 sentences

```

### [综合应用](#putting-it-all-together)

现在是时候将所有部分整合在一起了！回想一下，科尔曼-廖指数是使用以下公式计算的：

```
index = 0.0588 * L - 0.296 * S - 15.8

```

其中 `L` 是文本中每 100 个单词的平均字母数，`S` 是文本中每 100 个单词的平均句子数。

修改 `readability.c` 中的 `main` 函数，使其不再输出字母、单词和句子的数量，而是（仅）输出由科尔曼-廖指数定义的年级水平（例如 `"Grade 2"` 或 `"Grade 8"` 等）。 请务必将计算出的索引值四舍五入为最接近的整数！

提示

-   请注意，`round` 函数声明于 `math.h` 头文件中，详情请参考 [manual.cs50.io](https://manual.cs50.io/)！
-   请注意，C语言中整数除法的结果仍然是整数，小数部分会被舍弃。 因此，在计算 `L` 和 `S` 时，建议将相关数值转换为浮点数类型。

如果结果索引数字为 16 或更高（相当于或高于大学本科阅读水平），您的程序应输出 `"Grade 16+"`，而不是输出确切的索引数字。 如果索引数字小于 1，您的程序应输出 `"Before Grade 1"`。

## [示例演示](#walkthrough)

## [如何测试代码](#how-to-test-your-code)

尝试在以下文本上运行您的程序，以确保您看到指定的年级水平。 务必只复制文本，不要复制额外的空格。
-   `One fish. Two fish. Red fish. Blue fish.` (一年级以下水平)
-   `Would you like them here or there? I would not like them here or there. I would not like them anywhere.` (二年级水平)
-   `Congratulations! Today is your day. You're off to Great Places! You're off and away!` (三年级水平)
-   `Harry Potter was a highly unusual boy in many ways. For one thing, he hated the summer holidays more than any other time of year. For another, he really wanted to do his homework, but was forced to do it in secret, in the dead of the night. And he also happened to be a wizard.` (五年级水平)
-   `In my younger and more vulnerable years my father gave me some advice that I've been turning over in my mind ever since.` (七年级水平)
-   `Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice she had peeped into the book her sister was reading, but it had no pictures or conversations in it, "and what is the use of a book," thought Alice "without pictures or conversation?"` (八年级水平)
-   `When he was nearly thirteen, my brother Jem got his arm badly broken at the elbow. When it healed, and Jem's fears of never being able to play football were assuaged, he was seldom self-conscious about his injury. His left arm was somewhat shorter than his right; when he stood or walked, the back of his hand was at right angles to his body, his thumb parallel to his thigh.` (八年级水平)
-   `There are more things in Heaven and Earth, Horatio, than are dreamt of in your philosophy.` (九年级水平)
-   `It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.` (十年级水平)
-   `A large class of computational problems involve the determination of properties of graphs, digraphs, integers, arrays of integers, finite families of finite sets, boolean formulas and elements of other countable domains.` (高中以上水平)

请使用 `check50` 命令进一步评估代码的正确性，并请务必自行编译测试！

```
check50 cs50/problems/2023/x/readability

```

请使用 `style50` 命令评估代码风格。

## [如何提交](#how-to-submit)

请在终端中执行以下命令以提交作品。

```
submit50 cs50/problems/2023/x/readability

```
