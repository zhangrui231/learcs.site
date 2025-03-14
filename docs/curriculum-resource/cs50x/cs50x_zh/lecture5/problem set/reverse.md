---
sidebar_position: 4
description: cs50x 练习题：reverse
title: reverse
---

# Reverse - CS50x 2023

请编写程序，按如下方式反转 WAV 文件：

```
./reverse input.wav output.wav

```

## [背景](#background)

在 Electric Light Orchestra 的 “Fire on High” 中，音乐的开头一分钟左右听起来有点不对劲。如果你仔细听，它听起来几乎像音频被反向播放。事实证明，如果你倒放这首歌的开头部分，你会听到以下内容：

_“The music is reversible. Time is not. Turn back, turn back!”_

是不是有点吓人？这是一种叫做“反向掩蔽”的技术，或者说是将信息隐藏在音乐中，只有在倒放歌曲时才能听到。许多艺术家都使用（或被怀疑使用）了这种技术在他们的歌曲中。为了方便我们进行反向掩蔽的研究，请你编写一个 WAV 文件反转程序！

与 MP3 音频文件不同，WAV 文件未经过压缩。这使得文件编辑和操作更加方便，对当前任务很有帮助。为了更多地了解 WAV 文件，我们需要仔细研究 WAV 文件格式。

## [开始](#getting-started)

打开 [VS Code](https://cs50.dev/)。

首先单击终端窗口内部，然后单独执行 `cd`。 你会看到类似如下的“提示符”。

单击该终端窗口内部，然后执行

```
wget https://cdn.cs50.net/2022/fall/psets/4/reverse.zip

```

然后按 Enter 键，即可在你的 codespace 中下载名为 `reverse.zip` 的 ZIP 文件。 请注意 `wget` 和 URL 之间的空格，以及其他任何字符。

现在执行

创建一个名为 `reverse` 的文件夹。 你现在可以执行...，并在提示符后输入“y”，然后按 Enter 键删除已下载的 ZIP 文件。

现在输入

然后按 Enter 键进入该目录。 你的提示符现在应该类似于下面。

如果一切正常，执行...后，你应该能看到名为 `reverse.c` 的文件。 执行 `code reverse.c` 应该会打开该文件，你将在其中键入此问题集的代码。 如果没有，请回顾你的步骤，看看你是否可以确定你哪里出错了！

### [WAV 文件格式](#the-wav-file-format)

请注意，在下面的图中，WAV 文件被分成三个块。 每个块内部都有几个数据块。

第一个块包含有关文件类型的信息。 特别注意，第一个块中的“文件格式”区域，在第 8-11 字节处拼写为 'W' 'A' 'V' 'E'，表明这是一个 WAV 文件。
第二个数据块包含了关于接下来音频数据的信息，包括音频“通道”的数量以及每个音频“采样”的位数。单声道音频文件有1个通道；如果您戴上耳机，左右耳听到的声音是完全一样的。立体声音频文件则有2个通道。戴上耳机时，左右耳会听到略微不同的声音，从而产生一种空间感。采样是构成您所听到音频的最小单位，可以理解为一个个的“位块”。每个采样包含的位数越多，音频文件的清晰度就越高（但会占用更多的内存！）。

最后，第三个数据块包含音频数据本身——就是我们上面提到的那些采样。

音频数据之前的所有内容都被视为WAV文件的“头部”信息。请记住，文件头部信息仅仅是关于文件的一些元数据。在这种情况下，头部信息长度为 44 字节。

![WAV 标头](/img/cs50/WAV_header.png )

有关 WAV 标头的更技术性的解释可以在[此处](http://soundfile.sapp.org/doc/WaveFormat/)找到，该资源是此视觉效果的灵感来源。请注意，我们包含了一个文件 `wav.h`，它在一个名为 `WAVHEADER` 的结构中为您实现了所有这些细节。

## [规范](#specification)

让我们编写一个名为 `reverse` 的程序，它可以反转用户指定的WAV文件，并生成包含反向音频的新WAV文件。为了简单起见，我们将把处理的文件限制为 WAV 格式。用户在执行程序时，需要通过两个命令行参数分别指定：要读取并反转的输入文件名，以及用于保存反转后音频的输出文件名。成功执行的程序不应输出任何文本，而应创建一个用户指定名称的WAV文件，该文件会以相反的顺序播放输入WAV文件的音频。例如：

```
$ ./reverse input.wav output.wav

```

在 `reverse.c` 中，您会注意到包含了一些有用的库以及一个头文件 `wav.h`。在实现程序时，您可能会发现这些很有用。我们为您预留了八个 `TODO` 任务和两个辅助函数需要完成。建议您按照从1到8的顺序逐一解决。
-   在第一个 `TODO` 中，你需要确保程序能接收两个命令行参数：输入 WAV 文件名和输出 WAV 文件名。如果程序未能满足这些条件，你应该打印相应的错误信息并返回 `1`，结束程序。
    -   提示
        
        -   请记住，`argc` 变量（在程序执行时传递给 `main` 函数）存储了命令行参数的数量。
        -   记住 `argv[0]` 存储的是程序名，它是第一个命令行参数。
        
-   在第二个 `TODO` 中，你需要打开输入文件。我们需要以“只读”模式打开输入文件，因为程序只会从该文件读取数据。最好检查文件是否成功打开。否则，你应该打印相应的错误信息并返回 `1`，并退出程序。不过，在确认输入文件有效之前，我们应该暂缓打开输出文件，以避免提前创建新的 WAV 文件。
    -   提示
        
        -   如果第一个 `TODO` 已正确实现，可以安全地使用 `argv[1]` 来引用输入文件名。
        -   请记住，任何打开的文件都必须在使用完毕后关闭。
        
-   在第三个 `TODO` 中，你需要从输入文件中读取文件头。回想一下，在 `wav.h` 中，我们已经实现了一个可以存储 WAV 文件头的结构体。因为 `reverse.c` 文件顶部包含了 `#include "wav.h"`，所以你也可以使用 `WAVHEADER` 结构体。
    
-   在第四个 `TODO` 中，你需要完成 `check_format` 函数。该函数接收一个 `WAVHEADER` 类型的参数 `header`，它代表了输入文件的文件头。如果 `header` 表明文件是 WAV 格式，`check_format` 函数应返回 `true`；否则，返回 `false`。要检查文件是否是 WAV 格式，可以将输入文件的文件头信息与标准的 WAV 文件头信息进行比较。只需检查 `WAVHEADER` 结构体中 `format` 成员是否包含 “WAVE” 标识符即可（更多关于 WAV 文件头的细节请参考[背景](#background)部分）。
    
-   在第五个 `TODO` 中，你现在可以安全地打开输出文件以进行写入操作。仍然建议检查文件是否成功打开。
    -   提示
        
        -   如果第一个 `TODO` 已正确实现，可以安全地使用 `argv[2]` 来引用输出文件名。
        -   请记住，任何打开的文件都必须在使用完毕后关闭。
        

这可能是停止并测试你的程序是否按预期运行的好地方。如果实现正确，当使用正确的命令行参数执行程序时，应该会创建一个新文件。

如果需要删除文件，请在当前工作目录下执行以下命令。

如果不想在删除时收到确认提示，请执行以下命令。

请谨慎使用 `-f` 参数，因为它会强制删除文件且不会进行提示。
-   接下来，既然文件类型已经验证完毕，第六个 `TODO` 指出我们需要将文件头写入输出文件。由于反转后的 WAV 文件与输入文件具有相同的底层文件结构（例如大小、声道数和每样本位数），因此只需将第三个 `TODO` 中从输入文件读取的文件头复制到输出文件。

-   在第七个 `TODO` 中，您应该实现 `get_block_size` 函数。类似于 `check_format`，`get_block_size` 函数接收一个参数：类型为 `WAVHEADER`，名称为 `header`，它代表包含输入文件头信息的结构体。`get_block_size` 应该返回一个整数，表示给定 WAV 文件的**块大小**，以字节为单位。我们可以将一个*块*理解为一个音频数据单元。对于音频数据，每个块的大小通过以下公式计算：**声道数** x **每样本字节数**。请务必参考 [Background](#background) 部分，以深入了解这些值的含义和存储方式。另请参阅 `wav.h`，以确定 `WAVHEADER` 的哪些成员可能有用。
-   提示

    -   请注意，`WAVHEADER` 的一个成员是 `bitsPerSample`。但是要计算块大小，您需要每样本的**字节数**！

-   第八个也是最后一个 `TODO` 负责实际的音频反转操作。为此，我们需要从输入文件末尾开始，逆序读取每个音频数据块，并将它们按相反的顺序写入输出文件。首先，我们应该声明一个数组来存储我们读取的每个块。接下来，你需要遍历输入文件的音频数据。您需要确保读取所有音频，但要避免错误地复制文件头数据！此外，为了便于测试，我们需要保持每个音频块的声道顺序不变。例如，对于双声道（立体声）WAV 文件，要确保输入文件最后一个音频块的第一个声道，对应于输出文件第一个音频块的第一个声道。
-   提示

    -   以下几个函数（以及对它们用法的透彻理解）在完成本节时可能特别有用 - CS50 的参考手册可能会对你有所帮助：
        -   [`fread`](https://manual.cs50.io/3/fread)：从文件读取到缓冲区。在确定每次读取的数据大小和数量时，`get_block_size` 函数的返回值会很有帮助。
        -   [`fwrite`](https://manual.cs50.io/3/fwrite)：从缓冲区写入到文件。
        -   [`fseek`](https://manual.cs50.io/3/fseek)：将文件指针设置为给定的偏移量。尝试使用负偏移值向后移动文件指针可能很有用。
        -   [`ftell`](https://manual.cs50.io/3/ftell)：返回文件指针的当前位置。除了读取音频数据时 `ftell` 的返回值，检查在第三个 `TODO` 读取输入文件头后 `ftell` 的返回值也可能很有用。
- 需要注意的是，当使用 `fread` 读取一个数据块后，`input` 指针将指向读取结束的位置。也就是说，每次 `fread` 之后，可能需要将 `input` 指针向后移动两倍的块大小，一次是为了回到 `fread` 开始的位置，另一次是为了指向前一个未读取的块。

- 最后，切记关闭所有已打开的文件！
## [用法](#usage)

以下是一些程序运行示例。例如，如果用户省略了一个命令行参数：

```
$ ./reverse input.wav
Usage: ./reverse input.wav output.wav

```

或者，如果用户省略了所有命令行参数：

```
$ ./reverse
Usage: ./reverse input.wav output.wav

```

以下是用户提供的输入文件不是WAV文件时的程序运行示例：

```
$ ./reverse image.jpg output.wav
Input is not a WAV file.

```

可以假设用户会输入有效的输出文件名，例如 `output.wav`。

成功执行的程序不应输出任何文本，并会创建一个用户指定名称的WAV文件，该文件会以相反顺序播放输入的WAV音频。例如：

```
$ ./reverse input.wav output.wav

```

## [测试](#testing)

执行以下命令以使用 `check50` 评估代码的正确性。请务必自行编译并测试！

```
check50 cs50/problems/2023/x/reverse

```

执行以下命令以使用 `style50` 评估代码的风格。

## [如何提交](#how-to-submit)

请在终端中执行以下命令来提交你的代码。

```
submit50 cs50/problems/2023/x/reverse

```
