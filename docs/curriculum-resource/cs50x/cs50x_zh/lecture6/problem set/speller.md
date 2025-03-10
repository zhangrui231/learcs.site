---
sidebar_position: 1
description: cs50x 问题集拼写检查器
title: 拼写检查器
---

# 拼写检查器 - CS50x 2023

对于这个问题，你将实现一个程序，使用哈希表来拼写检查文件，如下所示。

```
$ ./speller texts/lalaland.txt
错误拼写的单词

[...]
AHHHHHHHHHHHHHHHHHHHHHHHHHHHT
[...]
Shangri
[...]
fianc
[...]
Sebastian's
[...]

拼写错误单词数:
字典中的单词数:
文本中的单词数:
加载时间:
检查时间:
计算大小时间:
卸载时间:
总耗时:

```

## [入门](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击你的终端窗口，并单独执行 `cd`。你会看到终端提示符如下:

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/5/speller.zip

```

以下载名为`speller.zip`的ZIP文件到你的codespace中.

然后执行

来创建一个名为 `speller` 的文件夹。现在你可以执行

并在提示符下回复 “y”，然后按 Enter 键来删除你下载的 ZIP 文件。

现在输入

然后按回车键进入该目录. 你的提示符现在应该类似于下面这样。

单独执行 `ls`，你应该看到一些文件和文件夹：

```
dictionaries/  dictionary.c  dictionary.h  keys/  Makefile  speller.c  speller50  texts/

```

如果遇到问题，请重复以上步骤，检查哪里出错.

## [分发](#distribution)

### [理解](#understanding)

理论上，对于规模为_n_的输入，运行时间为_n_的算法，在_O_表示法中，与运行时间为_2n_的算法是“渐近等价的”. 实际上，在描述算法运行时间时，我们通常关注主导项（即影响最大的项），例如本例中的_n_，因为它可能远大于2. 但是，在现实世界中，事实是 _2n_ 感觉比 _n_ 慢两倍。

你面临的挑战是实现尽可能快的拼写检查器！这里的“快”指的是实际运行时间，而非渐近时间复杂度.

同时，字典的实现在`dictionary.c`文件中。（虽然也可以直接在`speller.c`中实现，但将复杂程序分解为多个文件通常更方便。）其中函数的原型定义在`dictionary.h`中，而非`dictionary.c`本身. 这样，`speller.c`和`dictionary.c`都可以`#include`这个文件. 不幸的是，我们还没有完全实现加载部分。 或者检查部分。 我们将两者（以及更多）留给你！ 但首先，先来了解一下。

#### [`dictionary.h`](#dictionaryh)

打开 `dictionary.h`，你将看到一些新的语法，包括一些提到 `DICTIONARY_H` 的行。 无需担心这些。如果好奇，这些代码行确保即使`dictionary.c`和`speller.c`（稍后会看到）都`#include`此文件，`clang`也只会编译一次.

接下来请注意我们如何 `#include` 一个名为 `stdbool.h` 的文件。 这是 `bool` 本身定义的文件。 你之前不需要它，因为CS50库已经为你`#include`了.

另请注意我们对 `#define` 的使用，这是一个“预处理器指令”，用于定义一个名为 `LENGTH` 的“常量”，其值为 `45`。 从某种意义上说，这是一个常量，你无法（意外地）在代码中修改它. 实际上，`clang`会将你代码中所有`LENGTH`替换为`45`. 也就是说，它不是变量，而是一种查找替换技巧.

最后，请注意五个函数的原型：`check`、`hash`、`load`、`size` 和 `unload`。 注意，以下三个函数使用指针作为参数，通过`*`表示:

```
bool check(const char *word);
unsigned int hash(const char *word);
bool load(const char *dictionary);

```
回想一下，`char *` 其实就是我们之前说的 `string` 类型。所以这三个原型本质上就是：

```
bool check(const string word);
unsigned int hash(const string word);
bool load(const string dictionary);

```

`const` 的意思是，这些字符串作为参数传入后，就不能被修改了，无论是故意还是不小心。

#### [`dictionary.c`](#dictionaryc)

现在打开 `dictionary.c`。注意，在文件顶部，我们定义了一个名为 `node` 的 `struct` 结构体，它代表哈希表中的一个节点。我们还声明了一个全局指针数组 `table`，它（很快）就会成为你用来跟踪字典中单词的哈希表。该数组包含 `N` 个节点指针，并且我们现在将 `N` 设置为 `26`，以与下面描述的默认 `hash` 函数匹配。你可能需要根据你实现的 `hash` 函数来调整这个值。

接下来，注意我们已经实现了 `load`、`check`、`size` 和 `unload` 这几个函数，但只是简单实现，勉强能通过编译。还要注意，我们用了一个简单的算法来实现 `hash` 函数，这个算法基于单词的首字母。你的任务是尽可能巧妙地重新实现这些函数，让拼写检查器能够正常工作，而且速度要快！

#### [`speller.c`](#spellerc)

好的，接下来打开 `speller.c` 并花一些时间浏览其中的代码和注释。你不需要更改此文件中的任何内容，也不需要理解它的全部内容，但请尝试了解它的功能。注意，我们会使用 `getrusage` 函数来“基准测试”（也就是测量运行时间）你实现的 `check`、`load`、`size` 和 `unload` 函数。还要注意，我们会如何把待检查的文件的内容，一个词一个词地传递给 `check` 函数。最终，我们将报告该文件中的每个拼写错误以及一堆统计信息。

顺便提一下，请注意，我们已将 `speller` 的用法定义为

```
Usage: speller [dictionary] text

```

其中 `dictionary` 假定为一个包含小写单词列表的文件，每行一个单词，而 `text` 是要拼写检查的文件。方括号表示 `dictionary` 是可选参数；如果省略，`speller` 会默认使用 `dictionaries/large`。换句话说，运行

将等同于运行

```
./speller dictionaries/large text

```

其中 `text` 是你要拼写检查的文件。 显然，第一种方式更方便输入！ （当然，在你实现 `dictionary.c` 中的 `load` 之前，`speller` 将无法加载任何字典！在那之前，你将看到 `Could not load`。）

请注意，在默认字典中，有 143,091 个单词，所有这些单词都必须加载到内存中！ 建议你查看一下这个文件，了解它的结构和大小。 请注意，该文件中的每个单词都以小写形式出现（即使为了简单起见，专有名词和首字母缩写词也是如此）。 从上到下，该文件按字典顺序排序，每行只有一个单词（每个单词都以 `\n` 结尾）。 没有单词超过 45 个字符，并且没有单词出现多次。 在开发过程中，你可能会发现为你自己的 `speller` 提供一个包含更少单词的 `dictionary` 会有所帮助，以免你难以调试内存中一个庞大的结构。 在 `dictionaries/small` 中有一个这样的字典。 要使用它，请执行

```
./speller dictionaries/small text

```

其中 `text` 是你要拼写检查的文件。 务必确保你理解了 `speller` 的工作原理，再继续下一步！

很有可能，你没有花足够的时间来查看 `speller.c`。 回头再仔细看看 `speller.c`！

#### [`texts/`](#texts)

为了你可以测试你对 `speller` 的实现，我们还为你提供了一大堆文本，其中包括 _La La Land_ 的剧本、平价医疗法案的文本、托尔斯泰的三百万字节、_联邦党人文集_ 和莎士比亚的一些摘录等等。 为了让你心里有数，请打开并浏览这些文本文件，它们都位于 `pset5` 目录下的 `texts` 文件夹中。

现在，正如你应该从仔细阅读 `speller.c` 中了解到的那样，如果使用以下命令执行 `speller`，则 `speller` 的输出

```
./speller texts/lalaland.txt

```

最终输出结果会类似下面这样。

以下是一些你将看到的输出示例。为了便于理解，我们摘录了一些“拼写错误”的例子。为了不破坏乐趣，我们暂时省略了我们自己的统计数据。

```
MISSPELLED WORDS

[...]
AHHHHHHHHHHHHHHHHHHHHHHHHHHHT
[...]
Shangri
[...]
fianc
[...]
Sebastian's
[...]

WORDS MISSPELLED:
WORDS IN DICTIONARY:
WORDS IN TEXT:
TIME IN load:
TIME IN check:
TIME IN size:
TIME IN unload:
TIME IN TOTAL:

```

`TIME IN load` 代表 `speller` 执行你的 `load` 函数所花费的秒数。`TIME IN check` 代表 `speller` 执行你的 `check` 函数总共所花费的秒数。`TIME IN size` 代表 `speller` 执行你的 `size` 函数所花费的秒数。`TIME IN unload` 代表 `speller` 执行你的 `unload` 函数所花费的秒数。`TIME IN TOTAL` 是这四个测量值的总和。

**请注意，这些时间可能会因 `speller` 的执行而略有不同，具体取决于你的代码空间 (codespace) 正在执行的其他操作，即使你没有更改代码。**

顺便一提，需要明确的是，我们所说的“拼写错误”仅仅是指某个单词不在提供的 `dictionary` 中。

#### [`Makefile`](#makefile)

最后，回想一下，`make` 可以自动编译你的代码，这样你就不必手动执行 `clang` 以及一大堆开关。然而，随着程序规模增大，`make` 无法再自动推断编译方式，你需要明确指定编译规则，特别是当它们涉及多个源文件（即 `.c` 文件）时，就像这个问题一样。因此，我们将使用 `Makefile`，这是一个配置文件，它告诉 `make` 应该做什么。打开 `Makefile`，你应该看到四行：

1.  第一行告诉 `make`，当你执行 `make speller` (或 `make`) 时，`make` 会执行后续的指令。
2.  第二行告诉 `make` 如何将 `speller.c` 编译成机器代码（即 `speller.o`）。
3.  第三行告诉 `make` 如何将 `dictionary.c` 编译成机器代码（即 `dictionary.o`）。
4.  第四行告诉 `make` 将 `speller.o` 和 `dictionary.o` 链接到一个名为 `speller` 的文件中。

**请务必通过执行 `make speller`（或仅执行 `make`）来编译 `speller`。执行 `make dictionary` 将不起作用！**

## [规范](#specification)

现在你面临的挑战是，如何使用哈希表，按顺序并尽可能高效地实现 `load`、`hash`、`size`、`check` 和 `unload`。目标是最小化 `TIME IN load`、`TIME IN check`、`TIME IN size` 和 `TIME IN unload` 的时间。最小化的具体含义可能并不明显，因为这些基准测试肯定会随着你为 `speller` 提供不同的 `dictionary` 和 `text` 值而变化。但这正是这个问题的挑战，或者说乐趣所在。这个问题是你进行设计的机会。虽然鼓励你尽量减少空间占用，但时间才是你最终的敌人。但在你深入研究之前，请先阅读我们的一些规范。
-   `speller.c` 和 `Makefile` 文件禁止修改。
-   `dictionary.c` 文件可以修改（实际上，为了实现 `load`、`hash`、`size`、`check` 和 `unload` 这些函数，你必须修改此文件）。但禁止修改这些函数的声明（即函数原型）。你可以在 `dictionary.c` 中添加新的函数以及局部或全局变量。
-   可以调整 `dictionary.c` 文件中 `N` 的数值，从而增加哈希表的桶的数量。
-   `dictionary.h` 文件可以修改，但禁止修改 `load`、`hash`、`size`、`check` 和 `unload` 这些函数的声明。
-   `check` 函数的实现必须忽略大小写。也就是说，如果字典中存在 `foo`，那么无论 `foo` 以何种大小写形式出现，`check` 函数都应返回 true。例如，`foo`、`foO`、`fOo`、`fOO`、`Foo` 等都应被视为拼写正确。
-   除了大小写之外，`check` 函数只应针对字典中实际存在的单词返回 `true`。避免硬编码常用词（例如 `the`），否则如果测试时提供的字典中不包含这些词，你的程序就会出错。此外，只有字典中实际存在的属格形式才被允许。也就是说，即使字典中包含 `foo`，但如果 `foo's` 不在字典中，`check` 函数也应对 `foo's` 返回 `false`。
-   假设传递给程序的字典文件都具有相同的结构：从上到下按字母顺序排列，每行一个单词，并以换行符 `\n` 结尾。同时，假设字典至少包含一个单词，所有单词的长度都不超过 `LENGTH`（在 `dictionary.h` 中定义），每个单词只出现一次，且仅包含小写字母和可能的撇号，并且没有单词以撇号开头。
-   假设传递给 `check` 函数的单词仅包含大小写字母和可能的撇号。
-   尽管你可能想要“预处理”默认字典，以获得一个“理想的哈希函数”，但禁止将预处理结果保存到磁盘，并在后续运行拼写检查器时重新加载到内存中，以此来获得性能优势。
-   拼写检查器不能存在内存泄漏。务必使用 `valgrind` 工具检查内存泄漏问题。
-   你所实现的哈希函数必须是你自己设计的，而不是从网上搜索得到的。
-   可以考虑使用基于 ASCII 码之和或单词长度的哈希函数。
-   优秀的哈希函数能够有效减少冲突，并在哈希表的各个桶之间实现较为均匀的分布。

准备好了吗？

-   实现 `load`。
-   实现 `hash`。
-   实现 `size`。
-   实现 `check`。
-   实现 `unload`。

## [演练](#walkthroughs)

以下播放列表包含 6 个相关视频。

## [提示](#hints)

可以使用 `strings.h` 中声明的 `strcasecmp` 函数（[https://man.cs50.io/3/strcasecmp](https://man.cs50.io/3/strcasecmp)）来进行不区分大小写的字符串比较。同时，确保你的哈希函数也忽略大小写，使得 `foo` 和 `FOO` 具有相同的哈希值。

最后，务必在 `unload` 函数中释放你在 `load` 函数中分配的所有内存！ 记住，`valgrind` 是你的好帮手。 它会在程序运行时检测内存泄漏，因此如果想让 `valgrind` 分析 `speller` 在特定字典和/或文本下的运行情况，请提供相应的命令行参数。 建议使用较小的文本文件，否则 `valgrind` 的运行时间可能会很长。

如果不确定如何解读 `valgrind` 的输出结果，可以使用 `help50` 命令寻求帮助。

## [测试](#testing)
如何确认你的程序输出了正确的拼写错误的单词？你可以参考 `speller` 目录下的 `keys` 目录中的“参考答案”。例如，`keys/lalaland.txt` 包含了你的程序_应该_判定为拼写错误的全部单词。

因此，你可以在一个终端窗口中运行你的程序，如下所示。

```
./speller texts/lalaland.txt

```

然后，你可以在另一个终端窗口中运行官方提供的程序，如下所示。

```
./speller50 texts/lalaland.txt

```

然后你可以将这两个窗口并排比较。但这可能很快会变得繁琐。所以你也可以将程序的输出“重定向”到文件，如下所示。

```
./speller texts/lalaland.txt > student.txt
./speller50 texts/lalaland.txt > staff.txt

```

然后，你可以使用 `diff` 命令，在同一个终端窗口中并排比较这两个文件，如下所示。

```
diff -y student.txt staff.txt

```

或者，为了节省时间，你可以直接将程序的输出（假设已重定向到 `student.txt`）与参考答案之一进行比较，而无需运行官方提供的程序，如下所示。

```
diff -y student.txt keys/lalaland.txt

```

如果你的程序输出与官方提供的参考输出一致，`diff` 命令会输出两列，除了底部的运行时间之外，这两列应该完全相同。但是，如果这两列存在差异，你将会看到 `>` 或 `|` 符号，指示不同的地方。例如，如果你看到

```
MISSPELLED WORDS                                                MISSPELLED WORDS

TECHNO                                                          TECHNO
L                                                               L
                                                              > Thelonious
Prius                                                           Prius
                                                              > MIA
L                                                               L

```

这意味着你的程序（输出在左侧）没有将 `Thelonious` 或 `MIA` 判定为拼写错误，而官方提供的参考输出（在右侧）则认为它们是拼写错误。这可以从左侧一列缺少 `Thelonious`，而右侧一列存在 `Thelonious` 看出。

最后，请务必使用默认的大型词典和小型词典进行测试。请注意，即使你的程序能用大型词典成功运行，也不要认为它也能顺利处理小型词典。以下是如何使用小型词典进行测试：

```
./speller dictionaries/small texts/cat.txt 

```

### [`check50`](#check50)

你也可以通过以下命令，以更便捷的方式（尽管并非完全详尽）测试你的代码。

```
check50 cs50/problems/2023/x/speller

```

请注意，`check50` 还会检查内存泄漏问题，所以请务必运行 `valgrind` 进行检查。

### [style50](#style50)

执行以下命令以使用 `style50` 评估你的代码风格。

## [Staff’s Solution](#staffs-solution)

如何评估你的代码的运行速度和正确性？和往常一样，你可以参考官方提供的程序，并将其运行结果与你的程序进行比较。

```
./speller50 texts/lalaland.txt

```

## [How to Submit](#how-to-submit)

在你的终端中，执行以下命令以提交你的工作。

```
submit50 cs50/problems/2023/x/speller

```