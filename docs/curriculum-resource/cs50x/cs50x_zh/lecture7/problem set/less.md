---
sidebar_position: 2
description: cs50x problem set less
title: less
---

# Mario - CS50x 2023

![马里奥跳跃金字塔的截屏](/img/cs50/pyramid.png )

实现一个程序，按照以下方式打印出指定高度的半金字塔。

```
$ python mario.py
Height: 4
   #
  ##
 ###
####

```

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击您的终端窗口，然后单独执行 `cd`。您应该发现您的终端窗口的提示符类似于以下内容：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-mario-less.zip

```

以便将 `sentimental-mario-less.zip` 下载到您的代码空间。

然后执行

```
unzip sentimental-mario-less.zip

```

以创建一个名为 `sentimental-mario-less` 的文件夹。您不再需要该 ZIP 文件，因此您可以执行

```
rm sentimental-mario-less.zip

```

并在提示符下回复“y”后按 Enter 键，以删除您下载的 ZIP 文件。

现在输入

```
cd sentimental-mario-less

```

然后按 Enter 键，进入该目录。您的提示符现在应类似于以下内容。

```
sentimental-mario-less/ $

```

单独执行 `ls`，您应该会看到一个 `mario.py`。如果您遇到任何问题，请再次按照相同的步骤操作，看看您是否可以确定出错的地方！

## [规范](#specification)

-   在一个名为 `mario.py` 的文件中编写一个程序，该程序使用井号 (`#`) 作为块来重新创建半金字塔，就像您在[问题集 1](https://cs50.harvard.edu/x/2023/psets/1/)中所做的那样，不同之处在于这次您的程序应该用 Python 编写。
-   为了使事情更有趣，首先使用 `get_int` 提示用户输入半金字塔的高度，这是一个介于 `1` 和 `8` 之间的正整数，包括 `1` 和 `8`。
-   如果用户未能提供不大于 `8` 的正整数，您应该重新提示用户输入。
-   然后，生成（在 `print` 和一个或多个循环的帮助下）所需的半金字塔。
-   注意让半金字塔的左下角与终端窗口的左边缘对齐。

## [用法](#usage)

您的程序应该像下面的例子一样运行。

```
$ python mario.py
Height: 4
   #
  ##
 ###
####

```

## [测试](#testing)

虽然可以使用 `check50` 检查此问题，但我们建议您首先自行测试以下各项。
-   运行 `python mario.py`，等待输入提示。输入 `-1` 并按回车。程序应拒绝无效输入，并重新提示输入。
-   运行 `python mario.py`，等待输入提示。输入 `0` 并按回车。程序应拒绝无效输入，并重新提示输入。
-   运行 `python mario.py`，等待输入提示。输入 `1` 并按回车。程序应生成以下输出。确保金字塔左对齐，且每行末尾无多余空格。

-   运行 `python mario.py`，等待输入提示。输入 `2` 并按回车。程序应生成以下输出。确保金字塔左对齐，且每行末尾无多余空格。

-   运行 `python mario.py`，等待输入提示。输入 `8` 并按回车。程序应生成以下输出。确保金字塔左对齐，且每行末尾无多余空格。

```
       #
      ##
     ###
    ####
   #####
  ######
 #######
########

```

-   运行 `python mario.py`，等待输入提示。输入 `9` 并按回车。程序应拒绝无效输入，并重新提示输入。然后，输入 `2` 并按回车。程序应生成以下输出。确保金字塔左对齐，且每行末尾无多余空格。

-   运行 `python mario.py`，等待输入提示。输入 `foo` 并按回车。程序应拒绝无效输入，并重新提示输入。
-   运行 `python mario.py`，等待输入提示。不输入任何内容，直接按回车。程序应拒绝无效输入，并重新提示输入。

执行以下命令，使用 `check50` 检查代码的正确性。但请务必自己编译并测试！

```
check50 cs50/problems/2023/x/sentimental/mario/less

```

执行以下命令，使用 `style50` 检查代码风格。

## [如何提交](#how-to-submit)

在你的终端中，执行以下命令来提交你的工作。

```
submit50 cs50/problems/2023/x/sentimental/mario/less

```