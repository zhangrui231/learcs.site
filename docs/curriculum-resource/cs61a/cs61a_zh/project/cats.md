---
title: Cats
sidebar_position: 2
---

# 项目 2：CS 61A 自动纠错打字软件

![](/img/cs61a/cats_typing_still.gif)

> 程序员的梦想是  
> 抽象、递归，以及  
> 快速打字。

## 介绍

> **重要提交事项：** 为了获得完整学分：
> 
> -   在**2月22日星期四**之前提交完成的第1阶段和第2阶段，占1分。
> -   在**2月27日星期二**之前提交完成的所有阶段。
> 
> 建议按顺序完成各个问题。因为后面的问题在实现上依赖于前面的问题，所以也依赖于 `ok` 测试的运行结果。
> 
> 你可以和你的伙伴一起完成整个项目。
> 
> 您可以在**2月26日星期一**之前提交整个项目，就能获得1个奖励积分。

在这个项目中，您将编写一个程序来测量打字速度。此外，您将实现打字自动纠错功能，该功能尝试在用户键入一个单词后纠正该单词的拼写。这个项目的灵感来源于 [typeracer](https://play.typeracer.com/)。

## 最终产品

你可以在 [cats.cs61a.org](https://cats.cs61a.org/) 上体验我们的项目示例。欢迎随时试用。完成这个项目后，你就能亲手实现它的很多重要功能了！

## 下载起始文件

你可以下载 [zip 压缩包](/resource/cs61a/cats.zip) 来获取所有项目代码。这个项目包含多个文件，你只需要修改 `cats.py`。压缩包中包含以下文件：

-   `cats.py`：打字测试逻辑。
-   `utils.py`：用于文件和字符串操作的实用函数。
-   `ucb.py`：CS 61A 项目的实用函数。
-   `data/sample_paragraphs.txt`：用于打字练习的文本示例。这些文本示例来源于维基百科上关于各种主题的文章，是通过[抓取](https://github.com/kavigupta/wikivideos/blob/626de521e04ca643751ed85d549faca6ea528b1d/get_corpus.py)获得的。
-   `data/common_words.txt`：按频率排序的常见 [英语单词](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english-usa-no-swears.txt)。
-   `data/words.txt`：更多按频率排序的 [英语单词](https://github.com/first20hours/google-10000-english/blob/master/google-10000-english-usa-no-swears.txt)。
-   `data/final_diff_words.txt`：更多英语单词！
-   `data/testcases.out`：Final Diff 扩展（可选）的测试用例。
-   `cats_gui.py`：基于 Web 的图形用户界面 (GUI) 服务器。
-   `gui_files`：图形用户界面 (GUI) 相关文件目录。
-   `multiplayer`：支持多人模式的相关文件目录。
-   `favicons`：图标目录。
-   `images`：图像目录。
-   `ok`、`proj02.ok`、`tests`：测试文件。
-   `score.py`：可选的 Final Diff 扩展的一部分。

## 后勤

这个项目总分20分，其中19分考察代码的正确性，1分奖励在检查点日期前提交第一阶段和第二阶段的同学。

你只需要修改并提交 `cats.py` 文件即可完成项目。要提交项目，请将 `cats.py` 文件提交到 Gradescope 上对应的作业。

对于需要你实现的函数，我们提供了一些初始代码。你可以选择直接使用，也可以删除后从头开始编写。你也可以根据需要添加新的函数定义。

**但是，请勿修改上述未列出的任何其他函数或文件。** 否则，您的代码可能无法通过自动评分器的测试。 此外，请勿更改任何函数签名（包括名称、参数顺序或参数数量）。

在整个项目中，您应该经常测试代码的正确性。 这是一个好习惯，有助于快速定位问题。 但也不应过于频繁地测试，给自己留出思考的时间。

我们提供了一个名为 `ok` 的**自动评分器**，以帮助您测试代码并跟踪进度。 首次运行自动评分器时，系统会提示您**通过 Web 浏览器登录您的 Ok 帐户**。 请按照提示操作。 每次运行 `ok`，它都会在我们的服务器上备份您的工作和进度。

`ok` 的主要作用是测试您的代码实现。

如果您想以交互模式测试您的代码，可以运行

```
 python3 ok -q [问题编号] -i 
```

并填入相应的问题编号（例如 `01`）。 这将运行该问题的测试，直到遇到第一个失败的测试为止，然后您就可以交互式地测试您编写的函数了。

您还可以通过编写以下代码，使用 OK 的调试打印功能：

```
 print("DEBUG:", x) 
```

这样会在终端中生成调试信息，而不会因为额外输出导致 OK 测试失败。

## 入门视频

> 观看这些视频需要您登录 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdGL_xs5FwpFDeAxfM7lBGw)

## 第 1 阶段：打字

### 问题 1 (1 分)

在整个项目中，我们将对 `cats.py` 中的函数进行更改。

实现 `pick` 函数。 此函数用于选择用户将要输入的段落。 它接受三个参数：

-   一个字符串列表，其中每个字符串代表一个段落，称为 `paragraphs`
-   一个 `select` 函数，它为可以被选择的段落返回 `True`
-   一个非负索引 `k`

`pick` 函数返回 `select` 返回 `True` 的第 `k` 个段落。 如果不存在这样的段落（因为 `k` 太大），则 `pick` 返回空字符串。

解锁完成后，开始编写代码实现您的解决方案。 您可以使用以下命令检查代码的正确性：

```
python3 ok -q 01 -u
```

您可以使用以下命令检查代码的正确性：

```
python3 ok -q 01
```

### 问题 2 (1 分)

实现 `about` 函数。 该函数接受一个 `subject` 单词列表，并返回一个函数。 返回的函数接受一个段落作为输入，并返回一个布尔值，指示该段落是否包含 `subject` 列表中的任何单词。

实现 `about` 函数后，我们就可以将返回的函数作为 `select` 参数传递给 `pick` 函数，这有助于我们继续完成打字测试的实现。

为了准确进行比较，您需要忽略大小写（即，将大写和小写字母视为相同）以及段落中的标点符号。 此外，只检查 `subject` 列表中单词的完全匹配，而不是子字符串匹配。 例如，“dogs”与“dog”不匹配。

> **提示**：使用 `utils.py` 中的 `split`、`lower` 和 `remove_punctuation` 函数。

解锁完成后，开始编写代码实现您的解决方案。 您可以使用以下命令检查代码的正确性：

```
python3 ok -q 02 -u
```

您可以使用以下命令检查代码的正确性：

```
python3 ok -q 02
```

### 问题 3 (2 分)
实现 `accuracy` 函数，该函数接受一个 `typed` 段落和一个 `source` 段落。它返回 `typed` 中与 `source` 中对应位置的单词完全匹配的百分比。大小写和标点符号也必须完全一致。“相应”指的是`typed`和`source`中相同位置的单词需要完全匹配，即第一个单词和第一个单词对应，第二个单词和第二个单词对应，以此类推。

在这里，“单词”指的是由空格分隔的连续字符序列，例如，"dog;" 会被当作一个单词。

如果 `typed` 比 `source` 长，那么多出的、在 `source` 中没有对应项的单词都被认为是错误的。

如果 `typed` 为空而 `source` 不为空，或者反之，准确率都为零。

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 03 -u
```

解锁完成后，即可开始编写代码。您可以使用以下命令检查您的正确性：

```
python3 ok -q 03
```

### 问题 4 (1 分)

实现 `wpm` 函数，该函数计算_每分钟字数_，这是一种衡量打字速度的指标，给定一个字符串 `typed` 和经过的 `elapsed` 时间（以**秒**为单位）。 虽然名为“每分钟字数”，但它并非基于实际键入的单词数量，而是以每 5 个字符为一组进行计算，这样可以避免因单词长度不同而造成的测试偏差。_每分钟字数_ 的公式是将键入的字符数（包括空格）除以 5（典型单词长度）与经过的时间（以**分钟**为单位）的比率。

例如，字符串 `"I am glad!"` 包含十个字符（不包括引号）。每分钟字数的计算使用 2 作为键入的字数（因为 10 / 5 = 2）。如果有人在 30 秒（半分钟）内键入此字符串，则他们的速度将为每分钟 4 个字。

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 04 -u
```

解锁完成后，即可开始编写代码。您可以使用以下命令检查您的正确性：

```
python3 ok -q 04
```

**是时候测试您的打字速度了！** 您可以使用命令行来测试您在关于特定主题的段落上的打字速度。例如，以下命令将加载关于猫或小猫的段落。如果您好奇，请参阅 `run_typing_test` 函数的实现（但它是为您定义的）。

```
python3 cats.py -t cats kittens
```

您可以使用以下命令体验网页版图形界面(GUI)。关闭浏览器标签页后，您可能需要在终端使用 `Ctrl+C` 或 `Cmd+C` 退出GUI。

```
python3 cats_gui.py
```

## 第 2 阶段：自动更正

在基于 Web 的 GUI 中，有一个自动更正按钮，但现在它没有任何作用。我们将实现自动纠正拼写错误的功能。当用户按下空格键时，如果最后一个单词不在字典中，但存在与之相近的单词，程序会自动用该相近单词替换用户输入。

### 问题 5 (2 分)

实现 `autocorrect` 函数，该函数接受 `typed_word`、`word_list`、`diff_function` 和 `limit`。`autocorrect` 的目标是返回 `word_list` 中与提供的 `typed_word` 最接近的单词。

具体来说，`autocorrect` 执行以下操作：

- 如果 `typed_word` 存在于 `word_list` 中，`autocorrect` 则返回该单词。
- 否则，`autocorrect` 根据 `diff_function` 返回 `word_list` 中与 `typed_word` 差异最小的单词。
- 但是，如果 `typed_word` 与 `word_list` 中任何单词的最小差异都大于 `limit`，则返回 `typed_word`。也就是说，`limit` 限制了可以被纠正的拼写错误的程度。

**注意**：假设 `typed_word` 和 `word_list` 的所有元素都是小写的，并且没有标点符号。

> **重要提示**：如果 `word_list` 中的多个字符串与 `typed_word` 的差异程度相同，则 `autocorrect` 应返回在 `word_list` 中最靠前的字符串。

diff 函数 (diff function) 接受三个参数。第一个是 `typed_word`，第二个是源单词（在本例中，是 `word_list` 中的一个单词），第三个参数是 `limit`。diff 函数的输出是一个数字，表示两个字符串之间的差异量。

以下是一个 diff 函数的示例，该函数计算 `1 + limit` 和两个输入字符串长度之差的最小值：

```
>>> def length_diff(w1, w2, limit):
...     return min(limit + 1, abs(len(w2) - len(w1)))
>>> length_diff('mellow', 'cello', 10)
1
>>> length_diff('hippo', 'hippopotamus', 5)
6
```

> **提示**：尝试将 `max` 或 `min` 与可选的 `key` 参数（接受单参数函数）一起使用。例如，`max([-7, 2, -1], key = abs)` 将返回 `-7`，因为 `abs(-7)` 大于 `abs(2)` 和 `abs(-1)`。

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 05 -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 05
```

### 问题 6 (3 分)

实现 `feline_fixes`，它是一个接受两个字符串的 diff 函数。它返回将 `typed` 单词转换为 `source` 单词所需更改的最小字符数。如果字符串的长度不相等，则将长度差添加到总数中。

以下是一些例子：

```
>>> big_limit = 10
>>> feline_fixes("nice", "rice", big_limit)    # Substitute: n -> r
1
>>> feline_fixes("range", "rungs", big_limit)  # Substitute: a -> u, e -> s
2
>>> feline_fixes("pill", "pillage", big_limit) # Don't substitute anything, length difference of 3.
3
>>> feline_fixes("goodbye", "good", big_limit) # Don't substitute anything, length difference of 3.
3
>>> feline_fixes("roses", "arose", big_limit)  # Substitute: r -> a, o -> r, s -> o, e -> s, s -> e
5
>>> feline_fixes("rose", "hello", big_limit)   # Substitute: r->h, o->e, s->l, e->l, length difference of 1.
5
```

> **重要提示**：您不得在实现中使用 `while`、`for` 或列表推导式。请使用递归。

如果必须更改的字符数大于 `limit`，则 `feline_fixes` 应返回任何大于 `limit` 的数字，并应在超出 `limit` 后，尽量减少额外的计算量。
> 为什么要有这个限制？我们知道，如果`typed_word`与`word_list`中任何单词的差异大于`limit`，`autocorrect`将会拒绝更正`typed_word`。差异超过`limit` 1 还是 100，结果都一样；`autocorrect`都会拒绝更正。因此，一旦确定差异会超过`limit`，即使返回的结果不完全精确，也应该尽量减少不必要的计算。

> 以下两个对 `feline_fixes` 的调用应该花费大致相同的时间来评估：
> 
> ```
> >>> limit = 4
> >>> feline_fixes("roses", "arose", limit) > limit
> True
> >>> feline_fixes("rosesabcdefghijklm", "arosenopqrstuvwxyz", limit) > limit
> True
> ```

为了确保您正确地最小化达到 `limit` 后执行的额外计算量，我们有一个自动评分器测试，它根据函数调用的次数来衡量您解决方案的性能。这个测试并非完美；即使你成功避免了额外的计算，使用辅助函数也可能导致测试失败。

在编写任何代码之前，请解锁测试以验证你对问题的理解：

```
python3 ok -q 06 -u
```

解锁完成后，开始编写你的代码。您可以使用以下命令检查你的代码是否正确：

```
python3 ok -q 06
```

尝试在 GUI 中打开自动更正。它能帮助你提高打字速度吗？更正是否准确？

### 问题 7 (3 分)

实现 `minimum_mewtations`，这是一个差异函数，它返回将 `typed` 单词转换为 `source` 单词所需的最少编辑操作步骤。

有三种编辑操作步骤，以下是一些示例：

1.  向 `typed` 添加一个字母。
    
    -   向 `"itten"` 添加 `"k"` 得到 `"kitten"`。
2.  从 `typed` 中删除一个字母。
    
    -   从 `"scat"` 中删除 `"s"` 得到 `"cat"`。
3.  将 `typed` 中的一个字母替换为另一个字母。
    
    -   将 `"zaguar"` 中的 `"z"` 替换为 `"j"` 得到 `"jaguar"`。

每个编辑操作步骤都会使两个单词之间的差异增加 1。

```
>>> big_limit = 10
>>> minimum_mewtations("cats", "scat", big_limit)       # cats -> scats -> scat
2
>>> minimum_mewtations("purng", "purring", big_limit)   # purng -> purrng -> purring
2
>>> minimum_mewtations("ckiteus", "kittens", big_limit) # ckiteus -> kiteus -> kitteus -> kittens
3
```

我们已经在`cats.py`中提供了一个代码模板。你可以修改或删除它，从头开始编写。

> **提示：** 这是一个具有三个递归调用的递归函数。其中一个递归调用将类似于 `feline_fixes` 中的递归调用。此外，您需要多个基本情况才能解决此问题。

如果所需的编辑次数大于 `limit`，则 `minimum_mewtations` 应返回任何大于 `limit` 的数字，并应尽量减少执行此操作所需的计算量。

> 以下两个对 `minimum_mewtations` 的调用应该花费大致相同的时间来评估：
> 
> ```
> >>> limit = 2
> >>> minimum_mewtations("ckiteus", "kittens", limit) > limit
> True
> >>> minimum_mewtations("ckiteusabcdefghijklm", "kittensnopqrstuvwxyz", limit) > limit
> True
> ```

为了确保您正确地最小化达到 `limit` 后执行的额外计算量，我们有一个自动评分器测试，它根据函数调用的次数来衡量您解决方案的性能。

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 07 -u
```

解锁完成后，开始编写你的代码。你可以使用以下命令来检查你的代码是否正确：

```
python3 ok -q 07
```

再试一次打字。看看自动更正有没有更准确？

```
python3 cats_gui.py
```

**提交你的第一阶段和第二阶段A的检查点**

请检查你是否完成了第一阶段和第二阶段A的所有问题：

```
python3 ok --score
```

然后，在检查点截止日期之前，把`cats.py`提交到Gradescope上名为 **Cats Checkpoint** 的作业。

如果你完成了到目前为止的所有题目，就能拿到检查点的全部学分。

### （可选）扩展：最终差异 (0 分)

你可以选择设计你自己的差异函数，称为 `final_diff`。这里有一些让自动更正更准确的建议：

- 考虑一下哪些添加或删除操作更有可能发生。例如，如果你不小心遗漏了一个字母，如果它连续出现两次，则更有可能。
- 如果两个相邻字母的位置颠倒了，算作一次修改，而不是两次。
- 尝试合并常见的拼写错误。

你还可以通过更改 `cats.py` 中变量 `FINAL_DIFF_LIMIT` 的值来设置你希望差异函数使用的限制。

您可以通过运行以下命令来检查 `final_diff` 的成功率：

```
 python3 score.py
```

如果你不知道从哪里开始，请尝试将 `feline_fixes` 和 `minimum_mewtations` 的代码复制粘贴到 `final_diff` 中并对其进行评分。看看它无意中修正的拼写错误，也许能给你一些启发！

## 第 3 阶段：多人游戏

和朋友联机比赛打字更有趣！接下来，你要实现多人游戏功能。这样，当你在电脑上运行`cats_gui.py`的时候，它就会连接到[cats.cs61a.org](https://cats.cs61a.org/)的服务器，寻找其他玩家一起比赛。

要和朋友联机比赛，需要同时运行五个程序：

- 你的GUI，负责处理网页浏览器里的文字颜色和显示。
- 你的`cats_gui.py`，是一个Web服务器，它使用你在`cats.py`里写的代码和你的GUI进行通讯。
- 你的对手的 `cats_gui.py`。
- 你的对手的 GUI。
- CS 61A 多人游戏服务器，它将玩家匹配在一起并传递消息。

当您键入时，您的 GUI 会将您键入的内容上传到您的 `cats_gui.py` 服务器，该服务器会计算您已取得的进展并返回进度更新。它还会将进度更新上传到多人游戏服务器，以便您对手的 GUI 可以显示它。

同时，您的 GUI 显示始终尝试通过从 `cats_gui.py` 请求进度更新来保持最新，而 `cats_gui.py` 又从多人游戏服务器请求该信息。

每个玩家都有一个 `id` 号，服务器使用该号码来跟踪打字进度。

### 问题 8（2 分）

实现 `report_progress`，每次用户完成键入一个单词时都会调用它。这个函数接收你输入的单词列表`typed`，原文的单词列表`source`，用户的`user_id`，以及一个`upload`函数，用来把进度报告上传到多人游戏服务器。`typed` 中的单词永远不会多于 `source` 中的单词。

你的进度是这样计算的：在`source`中，你正确输入的单词数量，直到第一个错误单词为止，然后用这个数量除以`source`中单词的总数。例如，在这个例子里，进度是`0.25`：

```
report_progress(["Hello", "ths", "is"], ["Hello", "this", "is", "wrong"], ...)
```
你的 `report_progress` 函数应该做两件事：向多人服务器上传消息，并返回 `user_id` 对应的玩家的进度。

你可以通过调用 `upload` 函数，并传入一个包含键 `'id'` 和 `'progress'` 的字典，来向多人服务器上传消息。然后你应该返回玩家的进度，也就是你计算出的正确单词比例。

> **提示：** 请参阅下面的字典，了解 `upload` 函数的潜在输入示例。此字典表示 `user_id` 为 1 且 `progress` 为 0.6 的玩家。
>
> `{'id': 1, 'progress': 0.6}`

在编写任何代码之前，请解锁测试以验证你对问题的理解：

```
python3 ok -q 08 -u
```

解锁完成后，就可以开始编写你的解决方案了。你可以使用以下命令检查你的正确性：

```
python3 ok -q 08
```

### 问题 9 (2 分值)

实现 `time_per_word`，它接受一个列表 `words` 和 `timestamps_per_player`，这是一个列表的列表，其中包含每个玩家的时间戳，指示每个玩家何时完成输入 `words` 中的每个单词。它返回一个包含了这些信息的 `match` 对象。

`match` 是一个 _数据抽象_，它表示多个玩家之间的打字“比赛”。具体来说，每个 `match` 对象都存储了实例变量 `words` 和 `times`。

- `times` 是一个列表的列表，存储了每个玩家输入每个单词所用的时间。
- 具体来说，`times[i][j]` 表示玩家 `i` 输入 `words[j]` 所花费的时间。

例如，假设 `words = ['Hello', 'world']` 并且 `times = [[5, 1], [4, 2]]`，那么 `[5, 1]` 对应于玩家 0 的时间列表，而 `[4, 2]` 对应于玩家 1 的时间列表。因此，玩家 0 花了 `5` 个时间单位输入单词 `'Hello'`。

> **重要提示：** 在返回 `match` 对象时，请确保使用 `match` 构造函数。测试会检查你是否使用了 `match` 数据抽象，而不是直接使用特定的数据格式。
>
> 有关更多信息，你可以阅读下面或 `cats.py` 中 `match` 构造函数的定义。但是，与任何数据抽象一样，我们更关心函数的功能，而不是具体的实现方式。

```
def match(words, times):
    """A data abstraction containing all words typed and their times.

    Arguments:
        words: A list of strings, each string representing a word typed.
        times: A list of lists for how long it took for each player to type
            each word.
            times[i][j] = time it took for player i to type words[j].

    Example input:
        words: ['Hello', 'world']
        times: [[5, 1], [4, 2]]
    """
    assert all([type(w) == str for w in words]), 'words should be a list of strings'
    assert all([type(t) == list for t in times]), 'times should be a list of lists'
    assert all([isinstance(i, (int, float)) for t in times for i in t]), 'times lists should contain numbers'
    assert all([len(t) == len(words) for t in times]), 'There should be one word per time.'
    return {"words": words, "times": times}

def get_word(match, word_index):
    """A utility function that gets the word with index word_index"""
    assert 0 <= word_index < len(get_all_words(match)), "word_index out of range of words"
    return get_all_words(match)[word_index]
``````
def time(match, player_num, word_index):
    """A utility function for the time it took player_num to type the word at word_index"""
    assert word_index < len(get_all_words(match)), "word_index out of range of words"
    assert player_num < len(get_all_times(match)), "player_num out of range of players"
    return get_all_times(match)[player_num][word_index]

def get_all_words(match):
    """A selector function for all the words in the match"""
    return match["words"]

def get_all_times(match):
    """A selector function for all typing times for all players"""
    return match["times"]

def match_string(match):
    """A helper function that takes in a match data abstraction and returns a string representation of it"""
    return f"match({get_all_words(match)}, {get_all_times(match)})"

时间戳是累积的，并且总是递增的。`times` 列表中的数值代表**每个玩家连续时间戳之间的差值**。

举例来说，如果 `timestamps_per_player = [[1, 3, 5], [2, 5, 6]]`，那么 `match` 对象中对应的 `times` 属性将会是 `[[2, 2], [3, 1]]`。这是因为第一个玩家的时间戳差值分别是 `(3-1)` 和 `(5-3)`，而第二个玩家的时间戳差值分别是 `(5-2)` 和 `(6-5)`。`timestamps_per_player` 中每个列表的第一个值表示每个玩家的初始开始时间。

解锁测试后，开始编写你的代码。你可以使用以下命令来检查代码的正确性：

python3 ok -q 09 -u

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

python3 ok -q 09

### 问题 10 (2 分)

实现 `fastest_words` 函数，该函数返回每个玩家打字速度最快的单词。此函数在所有玩家完成输入后调用。它接受一个 `match`。

更具体地说，`fastest_words` 函数返回一个列表，其中包含多个单词列表。每个子列表对应一个玩家，并包含该玩家打字速度最快的单词（与其他玩家相比）。如果出现平局，则认为在列表中排名最靠前的玩家（即玩家索引最小的玩家）打字速度最快。

例如，考虑以下包含单词 `'Just'`、`'have'` 和 `'fun'` 的比赛。玩家 0 输入 `'fun'` 最快（3 秒），玩家 1 输入 `'Just'` 最快（4 秒），他们在单词 `'have'` 上打成平手（都花了 1 秒），因此我们认为玩家 0 是最快的，因为他们是列表中最早的玩家。

>>> player_0 = [5, 1, 3]
>>> player_1 = [4, 1, 6]
>>> fastest_words(match(['Just', 'have', 'fun'], [player_0, player_1]))
[['have', 'fun'], ['Just']]

`match` 参数是一个 `match` 数据抽象，与我们在问题 9 中返回的类型相同。

你可以使用 `get_word` 选择器来访问 `match` 对象中的单词。该选择器接受一个 `match` 对象和一个 `word_index`（整数）作为参数。

此外，你可以使用 `time` 函数来获取玩家在特定索引位置输入某个单词所花费的时间。除了 `match` 对象和 `word_index` 之外，该函数还需要一个整数类型的 `player_num` 参数。

通过这两个函数和一个 `match` 对象，我们可以轻松地获取任何玩家输入任何单词所花费的时间！

>>> player_0 = [5, 1, 3]
>>> player_1 = [4, 1, 6]
>>> ex_match = match(['Just', 'have', 'fun'], [player_0, player_1])
>>> get_word(ex_match, 2)
'fun'
>>> time(ex_match, 0, 2)
3
```
> **重要提醒**：使用 `match` 数据结构时，请务必使用其对应的选择器。测试会检查你是否正确使用了 `match` 数据抽象，而不是直接使用某种特定的数据格式。
>
> 确保你的实现不会改变给定的玩家输入列表。对于上面的示例，在 `[player_0, player_1]` 上调用 `fastest_words` 不应改变 `player_0` 或 `player_1`。

在编写任何代码之前，请解锁测试以验证你对问题的理解：

```
python3 ok -q 10 -u
```

完成解锁后，开始编写你的代码。你可以使用以下命令来检查你的代码是否正确：

```
python3 ok -q 10
```

恭喜！现在你可以与课程中的其他学生对战了。在 `cats.py` 底部附近将 `enable_multiplayer` 设置为 `True`，然后快速打字！

```
python3 cats_gui.py
```

## 项目提交

运行 `ok` 以检查所有问题，确保所有测试都已解锁并通过：

```
python3 ok
```

你还可以检查项目每个部分的得分：

```
python3 ok --score
```

满意后，通过将 `cats.py` 上传到 **Gradescope** 上的 **Cats** 作业来提交此作业。有关如何执行此操作的复习，请参阅 [Lab 00](https://cs61a.org/lab/lab00/#task-c-submitting-the-assignment)。

您可以通过单击提交内容右侧姓名下的 **+ Add Group Member** 将合作伙伴添加到您的 Gradescope 提交内容中。只需要一个合作伙伴提交到 Gradescope。

