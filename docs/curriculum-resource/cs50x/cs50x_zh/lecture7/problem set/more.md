---
sidebar_position: 3
description: cs50x problem set more
title: more
---

# Mario - CS50x 2023

![马里奥跳跃金字塔的屏幕截图](/img/cs50/pyramids.png )

请编写一个程序，按照下面的格式打印出指定高度的双半金字塔。

```
$ python mario.py
Height: 4
   #  #
  ##  ##
 ###  ###
####  ####

```

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击你的终端窗口，并单独执行 `cd`。你的终端提示符应该类似下面这样：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-mario-more.zip

```

从而将 `sentimental-mario-more.zip` 下载到你的 codespace。

然后执行

```
unzip sentimental-mario-more.zip

```

以创建一个名为 `sentimental-mario-more` 的文件夹。你不再需要这个 ZIP 文件了，所以可以执行

```
rm sentimental-mario-more.zip

```

并在提示符后输入 'y'，然后按回车键删除下载的 ZIP 文件。

现在输入

```
cd sentimental-mario-more

```

然后按回车键进入该目录。现在你的提示符应该像这样。

```
sentimental-mario-more/ $

```

单独执行 `ls`，你应该看到 `mario.py`。如果遇到问题，请重复以上步骤，检查哪里出错了！

## [规范](#specification)

-   在 `mario.py` 文件中，编写一个程序，用井号 (`#`) 重新创建这些半金字塔，就像你在[问题集 1](https://cs50.harvard.edu/x/2023/psets/1/)中所做的那样，不同之处在于这次你的程序应该用 Python 编写。
-   为了增加趣味性，首先用 `get_int` 提示用户输入半金字塔的高度，这是一个介于 `1` 和 `8` 之间的正整数（包括 `1` 和 `8`）。(如上图所示，半金字塔的高度是 `4`，宽度也是 `4`，两个金字塔之间的间隔是 `2` 个空格)。
-   如果用户输入的不是小于等于 `8` 的正整数，则需要重新提示。
-   然后，使用 `print` 和循环生成所需的半金字塔。
-   注意将金字塔左下角与终端窗口左边缘对齐。确保两个金字塔之间有两个空格，并且每行井号后没有多余的空格。

## [用法](#usage)

你的程序应该像下面的例子一样运行。

```
$ python mario.py
Height: 4
   #  #
  ##  ##
 ###  ###
####  ####

```

## [测试](#testing)

虽然可以使用 `check50` 检查代码，但我们更鼓励你先自行测试以下情况。
-   运行 `python mario.py` 并等待提示符。输入 `-1` 并回车。程序应判定输入无效，并重新提示用户输入。
-   运行 `python mario.py` 并等待提示符。输入 `0` 并回车。程序应判定输入无效，并重新提示用户输入。
-   运行 `python mario.py` 并等待提示符。输入 `1` 并回车。程序应生成以下输出。请确保金字塔左下角与终端对齐，且每行末尾无多余空格。

-   运行 `python mario.py` 并等待提示符。输入 `2` 并回车。程序应生成以下输出。请确保金字塔左下角与终端对齐，且每行末尾无多余空格。

-   运行 `python mario.py` 并等待提示符。输入 `8` 并回车。程序应生成以下输出。请确保金字塔左下角与终端对齐，且每行末尾无多余空格。

```
       #  #
      ##  ##
     ###  ###
    ####  ####
   #####  #####
  ######  ######
 #######  #######
########  ########

```

-   运行 `python mario.py` 并等待提示符。输入 `9` 并回车。程序应判定输入无效，并重新提示用户输入。然后输入 `2` 并回车。程序应生成以下输出。请确保金字塔左下角与终端对齐，且每行末尾无多余空格。

-   运行 `python mario.py` 并等待提示符。输入 `foo` 并回车。程序应判定输入无效，并重新提示用户输入。
-   运行 `python mario.py` 并等待提示符。直接回车。程序应判定输入无效，并重新提示用户输入。

执行 `check50` 命令以评估代码的正确性。不过，别忘了自己编译测试一下！

```
check50 cs50/problems/2023/x/sentimental/mario/more

```

执行 `style50` 命令以评估代码的风格。

## [如何提交](#how-to-submit)

在终端中，执行以下命令以提交您的工作。

```
submit50 cs50/problems/2023/x/sentimental/mario/more

```
