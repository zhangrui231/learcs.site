---
sidebar_position: 1
description: C语言第一讲 课程笔记 | 课程笔记
title: 课程笔记
---

# 第一讲 - CS50x 2023

-   [欢迎！](#welcome)
-   [Hello World](#hello-world)
-   [函数](#functions)
-   [变量](#variables)
-   [条件判断](#conditionals)
-   [循环](#loops)
-   [Linux 和命令行](#linux-and-the-command_line)
-   [马里奥](#mario)
-   [注释](#comments)
-   [抽象](#abstraction)
-   [运算符和类型](#operators-and-types)
-   [总结](#summing-up)

## 欢迎！

-   在之前的课程中，我们学习了 Scratch，一种可视化编程语言。
-   事实上，你在 Scratch 中学到的基本编程概念，适用于任何编程语言的学习。
-   回顾一下，机器只能理解二进制代码。人类编写的_源代码_，是计算机可读的指令列表。而机器理解的是我们常说的_机器码_，它是由一系列 1 和 0 组成的、能产生特定效果的模式。
-   实际上，我们可以使用一种特殊的软件，即_编译器_，将_源代码_转换为 `machine code`。今天，我们将介绍一款编译器，它可以将 _C_ 语言的源代码编译成机器码。
-   今天，除了学习如何编写代码之外，您还将学习如何编写好的代码。
-   代码可以从三个方面评估：首先是_正确性_，即代码是否能按预期运行；其次是_设计_，即代码的设计质量；最后是_风格_，即代码在美观性和一致性上表现如何。

## Hello World

-   本课程使用 _Visual Studio Code_ 编译器，通常也称为 VS Code。您可以通过提供的链接访问。
-   我们使用 VS Code 的主要原因是它预装了本课程所需的所有软件。本课程的设计和说明均基于 VS Code，建议使用 VS Code 完成作业。
-   您可以在 [cs50.dev](https://cs50.dev/) 上打开 VS Code。
-   编译器可以分为多个区域：

    ![IDE](/img/cs50/cs50Week1Slide017.png "IDE") 左侧是_文件浏览器_，用于查找文件；中间是_文本编辑器_，用于编辑程序；还有一个`命令行界面`，也称为 _CLI_、_命令行_或_终端窗口_，用于向云端计算机发送指令。

-   我们可以在终端窗口输入 `code hello.c` 来创建第一个 C 程序。请注意，文件名全部小写，并包含 `.c` 扩展名。然后在文本编辑器中输入以下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n");
    }

    ```

    注意，以上每个字符都有作用，输错程序就无法运行。
-   返回终端窗口，您可以通过执行`make hello`来编译您的代码。注意，这里省略了`.c`后缀。 `make`是一个编译器，它会查找我们的`hello.c`文件，并将其转换为名为`hello`的程序。如果执行此命令没有产生任何错误，您可以继续。否则，请仔细检查代码，确保与上述一致。
-   现在输入`./hello`运行程序，将会输出`hello, world`。
-   你会发现现在既有`hello.c`文件，也有`hello`文件。 `hello.c`可以被编译器读取：它是存储代码的地方。 `hello`是一个可执行文件，您可以运行它，但不能被编译器读取。
-   让我们更仔细地看看我们的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n");
    }

    ```

    注意，代码有语法高亮。

## 函数

-   在Scratch中，我们使用`say`块在屏幕上显示任何文本。 C语言中也有一个名为`printf`的函数，作用相同。
-   请注意，我们的代码已经调用了这个函数：

    ```
    printf("hello, world\n");

    ```

    请注意，printf函数被调用。传递给printf的参数是“hello, world\n”。代码语句以`;`结束。

-   C编程中一个常见的错误是省略分号。 修改您的代码如下：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n")
    }

    ```

    请注意，分号现在不见了。

-   在您的终端窗口中，运行`make hello`。此时会出现很多错误！ 将分号恢复后再次运行`make hello`，错误就会消失。
-   另请注意代码中的特殊符号`\n`。 尝试删除这些字符，然后执行`make hello`重新编译程序。 在终端输入`./hello`，程序会有什么变化？
-   将您的程序恢复为以下内容：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n");
    }

    ```

    请注意，分号和`\n`已恢复。

-   代码开头的`#include <stdio.h>`是一个特殊指令，告诉编译器你需要使用`stdio.h`库中的功能。 这使您可以利用`printf`函数以及许多其他功能。 您可以在[手册页](https://manual.cs50.io/)上阅读有关此库的所有功能。
-   事实证明，CS50有自己的库，名为`cs50.h`。 让我们在您的程序中使用这个库。

## 变量

-   回忆一下，在Scratch中，我们可以询问用户“你叫什么名字？”，然后将用户的名字附加到“hello”之后输出。
-   在C语言中，我们可以做同样的事情。 修改您的代码如下：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string answer = get_string("What's your name? ");
        printf("hello, %s\n", answer);
    }

    ```

    注意，代码顶部添加了`#include <cs50.h>`。`get_string`函数用于获取用户输入的字符串，并将其赋值给变量`answer`。`printf`函数中的`%s`表示此处需要输出一个字符串。
-   `answer` 是一个特殊的存储位置，我们称之为_变量_。`answer` 的类型是 `string`，可以存储任何字符串。 有许多_数据类型_，例如 `int`、`bool`、`char` 等等。
-   再次在终端窗口中运行 `make hello`，现在程序会提示你输入姓名，然后向你问好。

## 条件语句 (条件判断)

-   你在 Scratch 中用到的另一个基本模块就是_条件判断_。 比如，如果 x 大于 y，你想执行某个操作。反之，如果条件不成立，则执行另一个操作。
-   在终端窗口中，键入 `code compare.c` 并编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");

        if (x < y)
        {
            printf("x is less than y\n");
        }
    }

    ```

    注意，我们创建了两个变量，`x` 和 `y`，它们的类型都是 `int` (整数)。我们使用 `get_int` 函数来获取这两个变量的值。

-   您可以通过在终端窗口中执行 `make compare`，然后执行 `./compare` 来运行您的代码。 如果您收到任何错误消息，请检查您的代码是否存在错误。
-   我们可以通过如下编码来改进您的程序：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");

        if (x < y)
        {
            printf("x is less than y\n");
        }
        else if (x > y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }

    ```

    请注意，现在已考虑所有潜在的结果。

-   你可以重新编译并运行你的程序，然后测试一下。
-   考虑到另一种称为 `char` 的数据类型，我们可以通过在终端窗口中键入 `code agree.c` 来启动一个新程序。 在文本编辑器中，编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Prompt user to agree
        char c = get_char("Do you agree? ");

        // Check whether agreed
        if (c == 'Y' || c == 'y')
        {
            printf("Agreed.\n");
        }
        else if (c == 'N' || c == 'n')
        {
            printf("Not agreed.\n");
        }
    }

    ```

    另外，`==` 用于判断两个值是否_相等_，而单个 `=` 在 C 语言中是赋值运算符，功能完全不同。最后，`||` 表示_或_。

-   您可以通过在终端窗口中键入 `make agree`，然后键入 `./agree` 来测试您的代码。

## 循环

-   我们还可以在 C 程序中使用 Scratch 中的循环构建块。
-   在终端窗口中，键入 `code meow.c` 并编写如下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("meow\n");
        printf("meow\n");
        printf("meow\n");
    }

    ```

    这段代码能够实现预期功能，但设计上还有改进空间。

-   我们可以通过修改您的代码来改进我们的程序，如下所示：

    ```
    #include <stdio.h>

    int main(void)
    {
        int i = 0;
        while (i < 3)
        {
            printf("meow\n");
            i++;
        }
    }

    ```
注意，我们创建了一个 `int` 类型的变量 `i` 并赋值为 `0`。接着，我们创建了一个 `while` 循环，当 `i < 3` 时循环会一直执行。每次循环执行时，`i++` 语句会将 `i` 的值加 1。

- 类似地，我们可以通过修改代码来实现一个倒计时效果：

    ```
    #include <stdio.h>

    int main(void)
    {
        int i = 3;
        while (i > 0)
        {
            printf("meow\n");
            i--;
        }
    }

    ```

    请注意，计数器 `i` 的初始值为 `3`。每次循环执行时，它的值会减 1。当计数器的值小于等于 0 时，循环结束。

- 我们可以使用 `for` 循环来进一步优化代码结构。请修改代码如下：

    ```
    #include <stdio.h>

    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            printf("meow\n");
        }
    }

    ```

    请注意，`for` 循环包含三个部分。第一部分 `int i = 0` 用于初始化计数器，将其初始值设为零。第二部分 `i < 3` 是循环执行的条件。最后，`i++` 表示每次循环结束后，计数器的值增加 1。

- 注意，由于 `true` 始终为真，这段代码会无限循环执行。运行这段代码可能会导致终端失去响应。你可以通过按下 `Ctrl+C` 组合键来终止程序的运行。

## Linux 和命令行

- Linux 是一种操作系统，可以通过 VS Code 终端中的命令行界面进行访问。
- 以下是一些常用的命令行参数：
    -   `cd`，用于更改当前目录（文件夹）
    -   `cp`，用于复制文件和目录
    -   `ls`，用于列出目录中的文件
    -   `mkdir`，用于创建目录
    -   `mv`，用于移动（重命名）文件和目录
    -   `rm`，用于删除文件
    -   `rmdir`，用于删除目录
- 最常用的命令是 `ls`，它可以列出当前目录下的所有文件。请在终端中输入 `ls` 并按下回车键，你将会看到当前目录中的文件列表。
- 另一个有用的命令是 `mv`，它可以用来移动或重命名文件。例如，输入 `mv Hello.c hello.c` 可以将 `Hello.c` (注意大小写) 重命名为 `hello.c`。
- 您还可以创建文件夹。您可以键入 `mkdir pset1` 来创建一个名为 `pset1` 的目录。
- 然后，您可以使用 `cd pset1` 将当前目录更改为 `pset1`。

## 马里奥

- 我们今天讨论的所有内容都集中在您作为程序员的工作的各种构建块上。
- 接下来，我们将讨论如何解决计算机科学中的问题，这能帮助你更好地完成本课程的作业。
- 假设我们要模拟超级马里奥兄弟游戏中的视觉效果，特别是图中的四个问号方块，我们该如何编写代码来大致呈现这四个水平排列的方块呢？

    ![马里奥问号](/img/cs50/cs50Week1Slide123.png  "马里奥问号")

- 在终端窗口中，键入 `code mario.c` 并编写如下代码：

    ```
    #include <stdio.h>
``````
    int main(void)
    {
        for (int i = 0; i < 4; i++)
        {
            printf("?");
        }
        printf("\n");
    }

    ```

    请注意，这里通过循环打印出了四个问号。

-   类似地，我们也可以用同样的逻辑来创建三个垂直的方块。

    ![Mario Blocks](/img/cs50/cs50Week1Slide125.png  "Mario Blocks")

-   为了实现这一点，请按如下方式修改您的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            printf("#\n");
        }
    }

    ```

    请注意，这里通过循环打印出了三个垂直的砖块。

-   如果我们想把这些想法结合起来，创建一个三乘三的方块组合呢？

    ![Mario Grid](/img/cs50/cs50Week1Slide127.png  "Mario Grid")

-   我们可以遵循上面的逻辑，结合相同的想法。请按如下方式修改您的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        for (int i = 0; i < 3; i++)
        {
            for (int j = 0; j < 3; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }

    ```

    请注意，这里用到了循环嵌套。第一个循环定义了要打印的行数。每一行会打印三个方块。每打印完一行，就换行。

-   如果我们想让方块的数量成为_常量_，也就是固定不变的呢？请按如下方式修改您的代码：

    ```
    int main(void)
    {
        const int n = 3;
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }

    ```

    请注意，`n` 现在是一个常量。它的值是不可变的。

-   正如前面讲到的，我们可以让程序提示用户输入网格大小。请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        int n = get_int("Size: ");

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }

    ```

    请注意，`get_int` 用于提示用户。

-   编程中一个常见的建议是，永远不要完全信任用户。他们很可能会行为不端，在不应该输入的地方输入不正确的值。我们可以通过检查以确保用户的输入满足我们的需求来保护我们的程序免受不良行为的影响。请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        int n;
        do
        {
            n = get_int("Size: ");
        }
        while (n < 1);

        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }

    ```

    请注意，程序会不断提示用户输入大小，直到输入值大于等于1。
```-   注释是计算机程序的重要组成部分，用于为自己和合作者提供代码解释。
-   本课程的所有代码都必须包含详尽的注释。
-   通常，每个注释包含数个词语，以便读者理解特定代码块的功能。这些注释也能在日后修改代码时提供参考。
-   添加注释的方法是在代码中使用`//`符号，其后书写注释内容。
-   请按照以下方式修改代码，添加注释：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Get size of grid
        int n;
        do
        {
            n = get_int("Size: ");
        }
        while (n < 1);

        // Print grid of bricks
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }

    ```

    注意，所有注释都以`//`开头。

## 抽象

-   _抽象_是一种简化代码的技巧，将复杂问题分解为更小的子问题。
-   观察代码，可以发现两个核心任务：_获取网格大小_和_打印砖块网格_。
-   我们可以将这两个任务分别抽象成独立的函数。请按照以下方式修改代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int get_size(void);
    void print_grid(int n);

    int main(void)
    {
        int n = get_size();
        print_grid(n);
    }

    int get_size(void)
    {
        int n;
        do
        {
            n = get_int("Size: ");
        }
        while (n < 1);
        return n;
    }

    void print_grid(int n)
    {
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < n; j++)
            {
                printf("#");
            }
            printf("\n");
        }
    }

    ```

    注意，现在有三个函数：`main`函数，以及它调用的`get_size`和`print_grid`函数。`get_size`函数包含了之前用于获取网格大小的代码，而`print_grid`函数则负责打印网格。通过抽象这些核心任务，`main`函数变得非常简洁。

## 运算符和类型

-   _运算符_指的是编译器所支持的数学运算。在 C 中，这些数学运算符包括：

    -   `+` 用于加法
    -   `-` 用于减法
    -   `*` 用于乘法
    -   `/` 用于除法
    -   `%` 用于求余
-   类型指的是变量可以存储的数据种类。
-   类型非常重要，因为每种类型都有特定的限制。例如，由于内存的限制，`int`类型能表示的最大值是`4294967296`。
-   您在本课程中可能与之交互的类型包括：

    -   `bool`，一个布尔表达式，可以是 true 或 false
    -   `char`，一个像 a 或 2 这样的单个字符
    -   `double`，一种比 float 精度更高的浮点数
    -   `float`，一个浮点值，或带有小数位的实数
    -   `int`，达到一定大小的整数，或位数
    -   `long`，具有更多位的整数，因此它们可以比 int 计数更高
    -   `string`，一个字符串
-   你可以用 C 语言实现一个计算器。在终端中输入`code calculator.c`，然后编写以下代码：
```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Prompt user for x
        int x = get_int("x: ");

        // Prompt user for y
        int y = get_int("y: ");

        // Perform addition
        printf("%i\n", x + y);
    }

    ```

    请注意，这里使用了`get_int` 函数两次，用于获取用户输入的整数。`x` 和 `y` 这两个 `int` 变量分别存储了用户输入的整数。然后，`printf` 函数使用 `%i` 符号来显示 `x + y` 的计算结果。

-   编写代码时，请注意变量类型，避免潜在问题。

## 总结

在本课程中，您学习了如何将您在 Scratch 中学到的构建块应用于 C 编程语言。您学习了...

-   如何在 C 中创建您的第一个程序。
-   C 语言自带的预定义函数，以及如何实现自定义函数。
-   如何使用变量、条件和循环。
-   如何使用 Linux 命令行。
-   如何运用计算机科学的思维解决问题。
-   如何将注释集成到您的代码中。
-   如何使用抽象来简化和改进您的代码。
-   如何利用类型和运算符。

下节课见！
```