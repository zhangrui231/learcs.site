---
sidebar_position: 1
description: cs50x problem set hello
title: hello
---

# Hello - CS50x 2023

## [入门](#getting-started)

大家可能还记得，Visual Studio Code（又名 VS Code）是一个流行的“集成开发环境”（IDE），您可以通过它编写代码。为了省去您下载、安装和配置 VS Code 的麻烦，我们将使用一个基于云的版本，该版本已预先安装了您需要的一切。

使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。一旦您的“codespace”加载完毕，您应该会看到，默认情况下，VS Code 分为三个区域。VS Code 的顶部是您的“文本编辑器”，您将在其中编写所有程序。底部是一个“终端窗口”，这是一个命令行界面 (CLI)，方便您浏览 codespace 中的文件和目录 (也就是文件夹)、编译代码和运行程序。左侧是您的文件“资源管理器”，这是一个图形用户界面 (GUI)，您也可以通过它浏览 codespace 中的文件和目录。

首先单击终端窗口内部，然后直接输入 `cd`。您应该发现它的“提示符”类似于下面的内容。

单击该终端窗口内部，然后键入

然后按 Enter 键，以便在您的 codespace 中创建一个名为 `hello` 的目录。请务必注意 `mkdir` 和 `hello` 之间的空格，以及其他任何字符的正确性！

之后，执行命令就意味着在终端窗口中输入命令并按下回车键。命令区分大小写，请注意大小写是否正确。

现在执行

将您自己移动（即打开）到该目录中。您的提示符现在应该类似于下面的内容。

如果不是，请回顾您的步骤，看看您是否可以确定您哪里出错了！

我们是否应该让您编写您的第一个程序？执行

创建一个名为 `hello.c` 的新文件，该文件应在您的 codespace 的文本编辑器中自动打开。一旦您使用 command-S（在 macOS 上）或 control-S（在 Windows 上）保存该文件，它也应该出现在您的 codespace 的资源管理器中。

继续编写您的第一个程序，方法是将以下行精确地键入到 `hello.c` 中：

```
#include <stdio.h>

int main(void)
{
    printf("hello, world\n");
}

```

请注意，当您键入时，VS Code 如何添加“语法高亮”（即颜色），尽管 VS Code 的颜色选择可能与此问题集的不同。这些颜色实际上并未保存在文件本身中；它们只是由 VS Code 添加的，以使某些语法突出显示。如果您从一开始就没有将文件另存为 `hello.c`，VS Code 将不知道（根据文件名的扩展名）您正在编写 C 代码，在这种情况下，这些颜色将不存在。

## [列出文件](#listing-files)

接下来，在您的终端窗口中，紧靠提示符 (`hello/ $`) 的右侧，执行

您应该只看到 `hello.c` 吗？那是因为您刚刚列出了 `hello` 文件夹中的文件。特别是，您执行了一个名为 `ls` 的命令，它是“list”的缩写。（它是一个如此常用的命令，以至于它的作者将其称为 `ls` 以节省击键次数。）明白了吗？

## [编译程序](#compiling-programs)

现在，在我们执行 `hello.c` 程序之前，请记住我们必须使用_编译器_对其进行_编译_，将其从_源代码_转换为_机器代码_（即零和一）。执行以下命令来执行此操作：

然后再次执行这条命令：

这次，您应该不仅看到 `hello.c`，还看到 `hello` 也被列出了吗？您现在已将 `hello.c` 中的源代码转换为 `hello` 中的机器代码。

现在通过执行以下命令来执行程序本身。

Hello, world，的确如此！

## [获取用户输入](#getting-user-input)

很明显，无论你怎么编译或运行这个程序，它都只会打印 `hello, world`。让我们稍微个性化一下，就像我们在课堂上做的那样。

修改程序，使其先提示用户输入姓名，然后打印 `hello, [用户姓名]`。

和以前一样，请务必使用以下命令编译您的程序：
并且请务必执行您的程序，用不同的输入多次测试。

### [演练](#walkthrough)

如果你想对这个题目有个大致了解，可以看看这个“演练”（即，导览）。

### [提示](#hints)

#### [忘记怎么提示用户输入名字了？](#dont-recall-how-to-prompt-the-user-for-their-name)

回想一下，你可以这样使用`get_string`，把它的_返回值_存到一个类型为`string`，名叫`name`的变量里。

```
string name = get_string("What's your name? ");

```

#### [忘记怎么把用户的名字和问候语连起来了？](#dont-recall-how-to-format-a-string)

回想一下，`printf` 不仅可以用来打印，还可以格式化字符串 (这就是 `printf` 中 `f` 的含义)，就像下面这样，这里的 `name` 是一个 `string`。

```
printf("hello, %s\n", name);

```

#### [看到下面的错误信息了吗？](#use-of-undeclared-identifier)

看到下面的错误信息了吗？可能还有其他错误。

```
error: use of undeclared identifier 'string'; did you mean 'stdin'?

```

回想一下，要使用 `get_string`，需要在文件顶部引入 `cs50.h` 头文件 (其中_声明_了 `get_string`)，就像这样：

### [如何测试你的代码](#how-to-test-your-code)

执行下面的命令，用 `check50` 评估代码的正确性。`check50` 是一个命令行程序，如果你的代码通过了 CS50 的自动测试，它会显示笑脸；如果没有通过，则显示悲伤的脸！ 别忘了自己编译并测试一下！

```
check50 cs50/problems/2023/x/hello

```

执行下面的命令，用 `style50` 评估代码风格。`style50` 是一个命令行程序，它会显示你应该在程序中添加（绿色）和删除（红色）的部分，以改进代码风格。 如果你看不清这些颜色，`style50` 也支持其他[模式](https://cs50.readthedocs.io/style50/)！

## [如何提交](#how-to-submit)

在您的终端中，执行以下命令以提交您的工作。

```
submit50 cs50/problems/2023/x/hello

```
