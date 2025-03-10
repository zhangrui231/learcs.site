---
sidebar_position: 1
description: lecture2 Arrays Notes | 课程笔记
title: 课程笔记
---

# Lecture 2 - CS50x 2023

-   [欢迎!](#welcome)
-   [编译](#compiling)
-   [调试](#debugging)
-   [数组](#arrays)
-   [字符串](#strings)
-   [命令行参数](#command-line-arguments)
-   [退出状态](#exit-status)
-   [密码学](#cryptography)
-   [总结](#summing-up)

## 欢迎!

-   在上一次课程中，我们学习了 C，一种基于文本的编程语言。
-   本周，我们将深入探讨一些其他的构建模块，这些模块将帮助我们从底层开始更好地理解编程。
-   从根本上讲，除了编程的基础知识之外，本课程还关于解决问题。因此，我们将进一步关注如何处理计算机科学问题。

## 编译

-   _加密_ 是指将明文隐藏起来，防止他人窥视的行为。那么，_解密_ 则是将加密文本还原为人类可读形式的行为。
-   一段加密的文本可能看起来像这样：

    ![encryption](/img/cs50/cs50Week2Slide008.png "encryption")

-   回想一下，上周你学习了 _编译器_，这是一种专门的计算机程序，可以将 _源代码_ 转换为计算机可以理解的 _机器代码_。
-   例如，你可能有一个看起来像这样的计算机程序：

    ```
    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n");
    }

    ```

-   编译器会将上面的代码转换为以下机器代码：

    ![machine code](/img/cs50/cs50Week2Slide012.png "machine code")

-   _VS Code_，作为 CS50 学生提供给你的编程环境，使用一个名为 `clang` 或 _c 语言_ 的编译器。
-   如果你输入 `make hello`，它会运行一个命令，执行 clang 来创建一个你可以作为用户运行的输出文件。
-   VS Code 已经预先配置，`make` 命令会自动执行 clang，并附带许多常用的命令行参数，方便用户使用。
-   考虑以下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string name = get_string("What's your name? ");
        printf("hello, %s\n", name);
    }

    ```

-   你可以尝试在终端窗口中输入：`clang -o hello hello.c`。 你会遇到一个错误，表明 clang 不知道在哪里找到 `cs50.h` 库。
-   再次尝试编译此代码，在终端窗口中运行以下命令：`clang -o hello hello.c -lcs50`。 这将使编译器能够访问 `cs50.h` 库。
-   在终端窗口中运行 `./hello`，你的程序将按预期运行。
-   虽然以上是为了帮助你更深入地理解编译过程和概念，但在 CS50 课程中，推荐并且通常的做法是直接使用 `make` 命令。
-   编译涉及主要步骤，包括以下内容：

    -   首先，_预处理_ 阶段会将代码中以 `#` 开头的头文件（例如 `#include <cs50.h>`) 的内容，实际复制并粘贴到你的源文件中。 在此步骤中， `cs50.h` 中的代码会被复制到你的程序中。 类似地，如果你的代码中包含了 `#include <stdio.h>`，预处理器也会将你电脑上 `stdio.h` 文件的内容复制到你的程序中。 此步骤可以可视化如下：

        ```
        ...
        string get_string(string prompt);
        int printf(string format, ...);
        ...

        int main(void)
        {
            string name = get_string("What's your name? ");
            printf("hello, %s\n", name);
        }

        ```

    -   其次，_编译_ 是指你的程序被转换为汇编代码。 此步骤可以可视化如下：

        ![compiling](/img/cs50/cs50Week2Slide033.png "compiling")

    -   第三，_汇编_ 涉及编译器将你的汇编代码转换为机器代码。 此步骤可以可视化如下：

        ![assembling](/img/cs50/cs50Week2Slide038.png "assembling")
    -   最后，在_链接_（linking）步骤中，程序引用的库文件也会被转换为机器代码，并与您的代码合并，生成最终的可执行文件。

        ![linking](/img/cs50/cs50Week2Slide049.png  "linking")

## 调试

-   每个人在编写代码时都会犯错。
-   大家可以回顾一下上周的这张图片：

    ![mario](/img/cs50/cs50Week2Slide061.png  "mario")

-   接下来，请看一段故意添加了错误的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        for (int i = 0; i <= 3; i++)
        {
            printf("#\n");
        }
    }

    ```

-   请在终端输入`code buggy0.c`，然后将上述代码录入进去。
-   运行后，会出现四个砖块，而不是预期的三个。
-   `printf`是一种非常有用的调试代码的方法。您可以如下修改您的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        for (int i = 0; i <= 3; i++)
        {
            printf("i is %i\n", i);
            printf("#\n");
        }
    }

    ```

-   运行后，您会看到类似`i is 0`、`i is 1`、`i is 2`和`i is 3`这样的输出。通过这些输出，您应该能意识到需要如下修改代码：

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

    请注意，`<=`已被替换为`<`。

-   调试的第二个工具叫做_调试器_，这是一种由程序员创建的软件工具，用于帮助追踪代码中的错误。
-   在VS Code中，已经为您提供了一个预配置的调试器。
-   要使用这个调试器，首先通过单击代码行左侧（行号的左侧）来设置一个_断点_。点击后，会出现一个红点。可以把它想象成一个停止标志，要求编译器暂停，以便您可以考虑代码的这一部分发生了什么。

    ![break point](/img/cs50/cs50Week2Debugging.png  "break point")

-   其次，运行`debug50 ./buggy0`。您会注意到，在调试器启动后，您代码中的一行会以金色高亮显示。实际上，代码就在这行停止运行了。请注意，在左上角，所有局部变量都在显示，包括`i`，它的当前值为`0`。在窗口顶部，您可以单击“单步跳过”按钮，它将继续在您的代码中移动。请注意`i`的值是如何增加的。
-   虽然这个工具不会向您显示您的错误在哪里，但它会帮助您慢下来，并逐步查看您的代码是如何运行的。

-   为了说明第三种调试方法，请通过在终端窗口中运行`code buggy1.c`来启动一个新文件。然后编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int get_negative_int(void);

    int main(void)
    {
        int i = get_negative_int();
        printf("%i\n", i);
    }

    // Prompt user for positive integer
    int get_negative_int(void)
    {
        int n;
        do
        {
            n = get_int("Negative Integer: ");
        }
        while (n < 0);
        return n;
    }

    ```

    注意，`get_negative_int` 函数的目的是获取用户输入的负整数。

-   运行`make buggy1`，您会注意到它没有按预期工作。它接受正整数，并且似乎忽略了负整数。
-   像之前一样，在代码行设置断点。 建议在`int i = get_negative_int();`这行设置断点。 然后，运行`debug50 buggy1`。
-   与之前使用窗口顶部的“单步跳过”按钮不同，这次使用“单步进入”按钮。这将使调试器进入您的`get_negative_int`函数。请注意，这样做会向您显示您确实被困在`do while`循环中。
-   理解了这一点，您就能分析出为何程序会卡在这个循环里，并据此修改代码如下：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int get_negative_int(void);

    int main(void)
    {
        int i = get_negative_int();
        printf("%i\n", i);
    }

    // Prompt user for positive integer
    int get_negative_int(void)
    {
        int n;
        do
        {
            n = get_int("Negative Integer: ");
        }
        while (n >= 0);
        return n;
    }

    ```

    注意，`n < 0` 被改为了 `n >= 0`。

-   最后一种调试方法叫做“橡皮鸭调试法”。当你在代码方面遇到挑战时，可以考虑对着一只橡皮鸭（字面意义上的橡皮鸭）大声讲述你的代码问题。如果你不想和一只小塑料鸭子说话，你可以和附近的人说话！他们不一定需要懂编程，与他们交流能让你有机会梳理自己的代码思路。

    ![duck](/img/cs50/cs50Week2Slide070.png "duck")

## 数组

-   在第 0 周，我们讨论了_数据类型_：`bool`、`int`、`char`、`string` 等。
-   每种数据类型都需要一定数量的系统资源：
    -   `bool` 1 字节
    -   `int` 4 字节
    -   `long` 8 字节
    -   `float` 4 字节
    -   `double` 8 字节
    -   `char` 1 字节
    -   `string` 若干字节
-   在你的计算机内部，你拥有有限数量的可用内存。

    ![memory](/img/cs50/cs50Week2Slide084.png "memory")

-   从物理上讲，在计算机的内存中，你可以想象具体类型的数据是如何存储在你的计算机上的。你可以想象一个 `char`，它只需要 1 个字节的内存，可能看起来像这样：

    ![1 byte](/img/cs50/cs50Week2Slide087.png "1 byte")

-   类似地，一个 `int`，它需要 4 个字节，可能看起来像这样：

    ![4 bytes](/img/cs50/cs50Week2Slide088.png "4 bytes")

-   我们可以创建一个程序来探索这些概念。在你的终端中，输入 `code scores.c` 并编写如下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        // Scores
        int score1 = 72;
        int score2 = 73;
        int score3 = 33;

        // Print average
        printf("Average: %f\n", (score1 + score2 + score3) / 3.0);
    }

    ```

    请注意，右边的数字是浮点值 `3.0`，这样计算最终会得到一个浮点值。

-   运行 `make scores`，程序运行。
-   你可以想象这些变量是如何存储在内存中的：

    ![scores in memory](/img/cs50/cs50Week2Slide098.png "scores in memory")

-   _数组_是一种在内存中连续地存储数据的方式，以便可以轻松访问这些数据。
-   `int scores[3]` 是一种告诉编译器为你提供内存中三个连续的 `int` 大小的位置来存储三个 `scores` 的方法。考虑到我们的程序，你可以如下修改你的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Scores
        int scores[3];
        scores[0] = 72;
        scores[1] = 73;
        scores[2] = 33;

        // Print average
        printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / 3.0);
    }

    ```

    请注意，`score[0]` 通过索引 `scores` 数组的第 `0` 个位置来访问该内存位置的值。

-   你可以看到，虽然上面的代码能用，但仍然有机会改进我们的代码。如下修改你的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Get scores
        int scores[3];
        for (int i = 0; i < 3; i++)
        {
            scores[i] = get_int("Score: ");
        }

        // Print average
        printf("Average: %f\n", (scores[0] + scores[1] + scores[2]) / 3.0);
    }

    ```
注意，我们使用`scores[i]`来访问`scores`数组中的元素，其中索引`i`由`for`循环提供。

- 我们可以简化或抽象化平均值的计算。请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    // Constant
    const int N = 3;

    // Prototype
    float average(int length, int array[]);

    int main(void)
    {
        // Get scores
        int scores[N];
        for (int i = 0; i < N; i++)
        {
            scores[i] = get_int("Score: ");
        }

        // Print average
        printf("Average: %f\n", average(N, scores));
    }

    float average(int length, int array[])
    {
        // Calculate average
        int sum = 0;
        for (int i = 0; i < length; i++)
        {
            sum += array[i];
        }
        return sum / (float) length;
    }

    ```

    请注意，声明了一个名为 `average` 的新函数。此外，请注意声明了一个常量 `N`，它使用了 `const` 关键字。最重要的是，`average` 函数接受 `int array[]` 作为参数，这意味着编译器会将一个整数数组传递给该函数。

- 数组不仅可以作为数据容器，还可以在函数间传递。

## 字符串 (Strings)

- `string` 本质上是 `char` 类型的数组，也就是字符数组。
- 如下图所示，字符串是由字符组成的数组，以第一个字符开始，并以一个特殊的空字符 (`NUL character`) 结尾。

    ![hi with terminator](/img/cs50/cs50Week2Slide116.png "hi with terminator")

- 如果将这些字符用十进制数值表示，数组会呈现如下形式：

    ![hi with decimal](/img/cs50/cs50Week2Slide117.png "hi with decimal")

- 在您自己的代码中实现这一点，请在终端窗口中键入 `code hi.c` 并编写如下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        char c1 = 'H';
        char c2 = 'I';
        char c3 = '!';

        printf("%i %i %i\n", c1, c2, c3);
    }

    ```

    请注意，这会输出每个字符对应的十进制数值。

- 为了进一步理解 `string` 的工作原理，请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string s = "HI!";
        printf("%i %i %i\n", s[0], s[1], s[2]);
    }

    ```

    请注意，`printf` 语句输出了数组 `s` 中的三个元素。

- 让我们想象一下，我们既想说 `HI!` 又想说 `BYE!`。请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string s = "HI!";
        string t = "BYE!";

        printf("%s\n", s);
        printf("%s\n", t);
    }

    ```

    请注意，在此示例中声明并使用了两个字符串。

- 可以参考下图：

    ![hi and bye](/img/cs50/cs50Week2Slide126.png "hi and bye")

- 我们可以进一步改进此代码。请按如下方式修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string words[2];

        words[0] = "HI!";
        words[1] = "BYE!";

        printf("%s\n", words[0]);
        printf("%s\n", words[1]);
    }

    ```

    请注意，这两个字符串都被存储在一个 `string` 类型的数组中。

- 在编程中，尤其是在 C 语言中，一个常见的问题是如何获取数组的长度。我们如何在代码中实现这一点？在终端窗口中键入 `code length.c` 并编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Prompt for user's name
        string name = get_string("Name: ");

        // Count number of characters up until '\0' (aka NUL)
        int n = 0;
        while (name[n] != '\0')
        {
            n++;
        }
        printf("%i\n", n);
    }

    ```
请注意，此代码循环直到找到 `NUL` 字符。

- 由于这是一个编程中非常常见的问题，其他程序员已经在 `string.h` 库中创建了代码来获取字符串的长度。您可以通过如下修改代码来获取字符串的长度：

    ```
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        // Prompt for user's name
        string name = get_string("Name: ");
        int length = strlen(name);
        printf("%i\n", length);
    }

    ```

    请注意，此代码使用了在文件顶部声明的 `string.h` 库。此外，它使用了该库中名为 `strlen` 的函数来计算字符串的长度。

- `ctype.h` 是另一个非常有用的库。 假设我们要创建一个将所有小写字母转换为大写字母的程序。在终端窗口中键入 `code uppercase.c` 并编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string s = get_string("Before: ");
        printf("After:  ");
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            if (s[i] >= 'a' && s[i] <= 'z')
            {
                printf("%c", s[i] - 32);
            }
            else
            {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }

    ```

    请注意，此代码会_遍历_字符串中的每个字符。如果字符是小写字母，它会将其 ASCII 码值减去 32，从而转换为大写字母。

- 回顾上周的内容，你可能还记得这张 ASCII 码表：

    ![ascii](/img/cs50/cs50Week2Slide120.png "ascii")

- 当一个小写字母的 ASCII 码值减去 32 时，它会变成对应的大写字母。
- 虽然该程序可以实现我们想要的功能，但使用 `ctype.h` 库有一种更简单的方法。 如下修改您的程序：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string s = get_string("Before: ");
        printf("After:  ");
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            if (islower(s[i]))
            {
                printf("%c", toupper(s[i]));
            }
            else
            {
                printf("%c", s[i]);
            }
        }
        printf("\n");
    }

    ```

    请注意，该程序使用 `islower` 来检测每个字符是大写还是小写。 然后，将 `toupper` 函数传递给 `s[i]`。 每个字符（如果是小写）都会转换为大写。

- 同样，虽然此程序可以实现所需的功能，但仍有改进的机会。 正如 `ctype.h` 的文档所述，如果 `toupper` 函数接收到的已经是大写字母，它会自动忽略，不会进行转换。 因此，可以省略 `if` 语句。 您可以按如下方式简化此代码：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        string s = get_string("Before: ");
        printf("After:  ");
        for (int i = 0, n = strlen(s); i < n; i++)
        {
            printf("%c", toupper(s[i]));
        }
        printf("\n");
    }

    ```

    请注意，此代码已得到很大简化，删除了不必要的 `if` 语句。

- 您可以在 [Manual Pages](https://manual.cs50.io/#ctype.h) 上阅读有关 `ctype` 库的所有功能。

## 命令行参数

- 命令行参数是指在命令行中传递给程序的参数。 例如，您在 `clang` 之后键入的所有语句都被视为命令行参数。 您可以在自己的程序中使用这些参数！
- 在终端窗口中，键入 `code greet.c` 并编写如下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string name = get_string("What's your name? ");
        printf("hello, %s\n", name);
    }

    ```

    请注意，这段代码会向用户输出 `hello`。
-   那么，如果能在程序运行前就接收参数，岂不是更好？请修改你的代码如下：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(int argc, string argv[])
    {
        if (argc == 2)
        {
            printf("hello, %s\n", argv[1]);
        }
        else
        {
            printf("hello, world\n");
        }
    }

    ```

    请注意，此程序可以获取 `argc` (命令行参数的个数) 和 `argv` (包含命令行参数的字符串数组)。

-   因此，如果按照此程序的语法执行 `./greet David`，程序将会输出 `hello, David`。

## 退出状态

-   程序结束时，会向操作系统返回一个特殊的退出代码。
-   当程序正常退出时，会向操作系统返回状态码 `0`。通常，如果发生错误导致程序退出，操作系统会返回状态码 `1`。
-   你可以通过编写以下程序来演示这一点：在终端输入 `code status.c`，然后输入以下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(int argc, string argv[])
    {
        if (argc != 2)
        {
            printf("Missing command-line argument\n");
            return 1;
        }
        printf("hello, %s\n", argv[1]);
        return 0;
    }

    ```

    请注意，如果你没有提供参数 `./status David`，程序会返回退出状态 `1`。但是，如果你提供了参数 `./status David`，程序会返回退出状态 `0`。

-   你可以借鉴上述程序的部分代码，来检查用户是否输入了正确数量的命令行参数。

## 密码学

-   密码学是研究如何对信息进行加密和解密的学科。
-   将`明文`和`密钥`输入`密码`算法后，会生成加密后的文本。

    ![cryptography](/img/cs50/cs50Week2Slide153.png "cryptography")

-   密钥是与明文一起传递给密码算法的特殊参数。密码算法会利用密钥来决定如何进行加密。

## 总结

在本节课中，你学习了更多关于编译原理以及数据在计算机中存储方式的细节。具体来说，你学习了...

-   编译器的基本工作原理。
-   四种调试代码的方法。
-   如何在代码中使用数组。
-   数组在内存中是如何以连续的方式存储数据的。
-   字符串本质上是由字符组成的数组。
-   如何在代码中使用数组。
-   如何将命令行参数传递给你的程序。
-   密码学的基本构建块。

下节课见！
