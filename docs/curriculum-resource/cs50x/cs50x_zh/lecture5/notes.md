---
sidebar_position: 1
description: lecture4 Memory Notes | 课程笔记
title: Notes
---

# Lecture 4 - CS50x 2023

- [Lecture 4 - CS50x 2023](#lecture-4---cs50x-2023)
  - [欢迎!](#欢迎)
  - [内存](#内存)
  - [十六进制](#十六进制)
  - [地址](#地址)
  - [指针](#指针)
  - [字符串](#字符串)
  - [指针运算](#指针运算)
  - [比较字符串](#比较字符串)
  - [复制](#复制)
  - [Valgrind](#valgrind)
  - [垃圾值](#垃圾值)
  - [Binky 指针讲解视频](#binky-指针讲解视频)
  - [交换](#交换)
  - [溢出](#溢出)
  - [`scanf`](#scanf)
  - [文件](#文件)
  - [总结](#总结)

## 欢迎!

-   在之前的几周，我们讨论了图像是由称为像素的更小的构建块组成的。
-   今天，我们将更详细地介绍构成这些图像的 0 和 1。
-   此外，我们将讨论如何访问存储在计算机内存中的底层数据。

## 内存

-   你可以想象在犯罪剧中，图像被不断增强，但这在现实中并不完全准确。实际上，如果你一直放大图像，你最终会看到像素。

    ![模糊的照片](/img/cs50/cs50Week4Slide012.png "模糊")

-   你可以把图像想象成一个位图，其中0代表黑色，1代表白色。

    ![0 和 1 被转换为黑白笑脸](/img/cs50/cs50Week4Slide015.png "笑脸")

-   _RGB_，即_红、绿、蓝_，是表示每种颜色数量的数字。 在 Adobe Photoshop 中，你可以看到如下设置：

    ![带有 RGB 值和十六进制输入的 Photoshop 面板](/img/cs50/cs50Week4Slide016.png "Photoshop 中的十六进制")

    注意红色、绿色和蓝色的数值如何影响最终的颜色。

-   从上图可以看出，颜色不仅仅由三个数值表示。在窗口的底部，有一个由数字和字母组成的特殊数值。例如，`255` 被表示为 `FF`。这是为什么呢？

## 十六进制

-   _十六进制_ 是一种计数系统，具有 16 个计数数值。 它们如下：

    ```
      0 1 2 3 4 5 6 7 8 9 a b c d e f

    ```

    请注意，`F` 代表 `15`。

-   十六进制也被称为 _16进制_。
-   在十六进制中，每一位的权重都是16的幂。
-   数字 `0` 表示为 `00`。
-   数字 `1` 表示为 `01`。
-   数字 `9` 由 `09` 表示。
-   数字 `10` 表示为 `0A`。
-   数字 `15` 表示为 `0F`。
-   数字 `16` 表示为 `10`。
-   数字 `255` 表示为 `FF`，因为 16 x 15（或 `F`）是 240。再加 15 得到 255。这是使用两位十六进制系统可以计数的最高数字。
-   十六进制很有用，因为它可以使用更少的数字来表示。 十六进制允许我们更简洁地表示信息。

## 地址

-   你可能还记得前几周我们用艺术手法展现的并发内存块。 将十六进制编号应用于每个内存块，你可以按如下方式可视化它们：

    ![以十六进制编号的内存块](/img/cs50/cs50Week4Slide065.png "内存十六进制")

-   可以想象，上面的 `10` 既可以代表内存地址，也可以表示数值 `10`，这可能会造成混淆。 因此，按照惯例，所有的十六进制数通常会加上 `0x` 前缀，如下所示：
![使用0x标记的十六进制内存块](/img/cs50/cs50Week4Slide066.png "0x")

-   在终端窗口中输入 `code addresses.c`，然后编写以下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        int n = 50;
        printf("%i\n", n);
    }

    ```

    请注意，变量`n`在内存中存储的值是`50`。

-   程序存储这个值的过程可以用下图表示：

    ![值 50 以十六进制存储在内存位置](/img/cs50/cs50Week4Slide070.png "hex")

-   C语言提供了两个强大的内存操作符：

    ```
      & 用于获取变量在内存中的地址。
      * 用于访问内存中某个地址所存储的值。

    ```

-   我们可以通过修改代码来应用这些知识：

    ```
    #include <stdio.h>

    int main(void)
    {
        int n = 50;
        printf("%p\n", &n);
    }

    ```

    请注意，`%p` 格式化输出可以用来显示内存地址。`&n` 的含义是“取变量`n`的地址”。执行这段代码会返回一个以 `0x` 开头的内存地址。

## 指针

-   _指针_ 是用于存储变量地址的变量。简单来说，指针就是内存地址。
-   考虑以下代码：

    请注意，`p` 是一个指针，它存储了整数 `n` 的内存地址。

-   如下修改您的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        int n = 50;
        int *p = &n;
        printf("%p\n", p);
    }

    ```

    这段代码和之前的代码效果相同。我们只是运用了新学的 `&` 和 `*` 操作符。

-   可以通过下图来理解这段代码：

    ![相同的值 50 存储在内存位置，指针值存储在其他位置](/img/cs50/cs50Week4Slide078.png "pointer")

    注意指针的值看起来很大。实际上，指针变量通常占用8个字节的存储空间。

-   更准确地说，指针可以理解为一个指向另一个内存地址的地址：

    ![一个指针，作为箭头，从一个内存位置指向另一个内存位置](/img/cs50/cs50Week4Slide079.png "pointer")

-   为了演示 `*` 操作符的用法，请看下面的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        int n = 50;
        int *p = &n;
        printf("%i\n", *p);
    }

    ```

    请注意，`printf` 语句打印的是指针 `p` 所指向的内存地址中存储的整数值。

## 字符串

-   现在我们对指针有了一个基本的理解，我们可以进一步理解之前简化过的一些概念。
-   回顾一下，字符串本质上就是一个字符数组。例如，`string s = "HI!"` 可以表示如下：

    ![字符串 HI 带有一个存储在内存中的感叹号](/img/cs50/cs50Week4Slide085.png "hi")

-   可以想到，变量 `s` 也需要存储在内存中的某个位置。变量 `s` 和字符串的关系可以用下图表示：

    ![相同的字符串 HI，有一个指针指向它](/img/cs50/cs50Week4Slide086.png "hi pointer")

    注意，指针 `s` 存储的是字符串首字符的内存地址。

-   如下修改您的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string s = "HI!";
        printf("%p\n", s);
        printf("%p\n", &s[0]);
        printf("%p\n", &s[1]);
        printf("%p\n", &s[2]);
        printf("%p\n", &s[3]);
    }

    ```

    注意，以上代码会打印出字符串 `s` 中每个字符的内存地址。

-   同样地，你可以按如下方式修改你的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        char *s = "HI!";
        printf("%s\n", s);
    }

    ```

    注意这段代码会呈现从 `s` 的位置开始的字符串。

## 指针运算

-   你可以通过修改代码，用更长的形式来实现相同的功能，如下所示：

    ```
    #include <stdio.h>

    int main(void)
    {
        char *s = "HI!";
        printf("%c\n", s[0]);
        printf("%c\n", s[1]);
        printf("%c\n", s[2]);
    }

    ```

    注意，我们打印的是 `s` 指向的内存位置的字符。

-   此外，你可以如下修改你的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        char *s = "HI!";
        printf("%c\n", *s);
        printf("%c\n", *(s + 1));
        printf("%c\n", *(s + 2));
    }

    ```

    注意，打印的是 `s` 位置的第一个字符。然后，打印的是 `s + 1` 位置的字符，依此类推。

-   你能想象一下，如果你尝试访问 `s + 50` 这个内存地址会发生什么吗？黑客有时会试图访问他们不应该访问的内存区域。如果你尝试这样做，程序可能会出于安全考虑而退出。

## 比较字符串

-   字符串本质上是由其首字节地址标识的字符数组。
-   回想一下，上周我们提出我们不能使用 `==` 运算符比较两个字符串。
-   使用 `==` 运算符比较字符串时，实际比较的是字符串在内存中的地址，而不是字符串的内容。因此，我们建议使用 `strcmp`。
-   为了演示这一点，请创建名为 `compare.c` 的文件，并输入以下代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // 获取两个字符串
        char *s = get_string("s: ");
        char *t = get_string("t: ");

        // 比较字符串的地址
        if (s == t)
        {
            printf("Same\n");
        }
        else
        {
            printf("Different\n");
        }
    }

    ```

    注意到为两个字符串都输入 `HI!` 仍然会导致输出 `Different`。

-   为什么这两个字符串看似不同？可以通过以下方式来理解原因：

    ![两个字符串分别存储在内存中](/img/cs50/cs50Week4Slide115.png "两个字符串")

-   为了清楚起见，你可以看到下图说明了指向内存中两个单独位置的指针：

    ![两个字符串分别存储在内存中，并带有指向它们的单独指针](/img/cs50/cs50Week4Slide116.png "两个字符串")

-   如下修改你的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // 获取两个字符串
        char *s = get_string("s: ");
        char *t = get_string("t: ");

        // 打印字符串
        printf("%s\n", s);
        printf("%s\n", t);
    }

    ```

    请注意，我们现在有两个单独的字符串，可能存储在两个单独的位置。

-   通过稍作修改，你可以查看这两个字符串在内存中的存储地址：

    ```
    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // 获取两个字符串
        char *s = get_string("s: ");
        char *t = get_string("t: ");

        // 打印字符串的地址
        printf("%p\n", s);
        printf("%p\n", t);
    }

    ```

    注意，在打印语句中，`%s` 被改为了 `%p`。

## 复制

- 在编程中，一个常见的需求是将一个字符串复制到另一个字符串。
- 在您的终端窗口中，键入`code copy.c`并编写如下代码：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        // 获取一个字符串
        string s = get_string("s: ");

        // 复制字符串的地址
        string t = s;

        // 将字符串的第一个字母大写
        t[0] = toupper(t[0]);

        // 打印字符串两次
        printf("s: %s\n", s);
        printf("t: %s\n", t);
    }

    ```

    请注意，`string t = s`将`s`的地址复制到`t`。 这并没有达到我们想要的效果。 字符串没有被复制 - 只有地址被复制。

- 在解决这个问题之前，重要的是要确保我们的代码不会出现_段错误_。段错误通常发生在我们尝试将 `string s` 复制到 `string t` 时，而 `string t` 尚未被分配内存。 我们可以使用 `strlen` 函数来避免这个问题：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        // 获取一个字符串
        string s = get_string("s: ");

        // 复制字符串的地址
        string t = s;

        // 将字符串的第一个字母大写
        if (strlen(t) > 0)
        {
            t[0] = toupper(t[0]);
        }

        // 打印字符串两次
        printf("s: %s\n", s);
        printf("t: %s\n", t);
    }

    ```

    请注意，`strlen`用于确保`string t`存在。 如果 `string t` 不存在，则不会进行复制操作。

- 上面的代码可以用下图来表示：

    ![两个指针指向具有字符串的同一内存位置](/img/cs50/cs50Week4Slide124.png "两个字符串")

    请注意，`s`和`t`仍然指向相同的内存块。 这不是字符串的真实副本。 相反，这是两个指向同一字符串的指针。

- 为了能够制作字符串的真实副本，我们需要引入两个新的构建块。 首先，`malloc` 允许程序员分配指定大小的内存块。 其次，`free` 允许程序员释放之前通过 `malloc` 分配的内存块。

- 我们可以修改我们的代码以创建字符串的真实副本，如下所示：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>

    int main(void)
    {
        // 获取一个字符串
        char *s = get_string("s: ");

        // 为另一个字符串分配内存
        char *t = malloc(strlen(s) + 1);

        // 将字符串复制到内存中，包括'\0'
        for (int i = 0; i <= strlen(s); i++)
        {
            t[i] = s[i];
        }

        // 将副本大写
        t[0] = toupper(t[0]);

        // 打印字符串
        printf("s: %s\n", s);
        printf("t: %s\n", t);
    }

    ```

    请注意，`malloc(strlen(s) + 1)`创建一个内存块，其长度为字符串`s`的长度加一。 这确保了复制后的字符串包含空字符 `\0`。 然后，`for` 循环遍历字符串 `s`，并将每个字符复制到字符串 `t` 的相应位置。

-   实际上，我们的代码有个效率问题。请修改你的代码如下：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>

    int main(void)
    {
        // Get a string
        char *s = get_string("s: ");

        // Allocate memory for another string
        char *t = malloc(strlen(s) + 1);

        // Copy string into memory, including '\0'
        for (int i = 0, n = strlen(s); i <= n; i++)
        {
            t[i] = s[i];
        }

        // Capitalize copy
        t[0] = toupper(t[0]);

        // Print strings
        printf("s: %s\n", s);
        printf("t: %s\n", t);
    }

    ```

    注意，`n = strlen(s)` 现在在 `for` 循环的左边定义了。最好不要在`for`循环的条件判断部分调用不必要的函数，因为这样会重复执行。把 `n = strlen(s)` 移到左边后，`strlen` 函数就只会执行一次了。

-   C语言提供了一个内置的字符串复制函数，叫做 `strcpy`。它的用法如下：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>

    int main(void)
    {
        // Get a string
        char *s = get_string("s: ");

        // Allocate memory for another string
        char *t = malloc(strlen(s) + 1);

        // Copy string into memory
        strcpy(t, s);

        // Capitalize copy
        t[0] = toupper(t[0]);

        // Print strings
        printf("s: %s\n", s);
        printf("t: %s\n", t);
    }

    ```

    注意，`strcpy` 实现的功能和我们之前的 `for` 循环是一样的。

-   如果 `get_string` 或者 `malloc` 出现问题，它们会返回 `NULL`。`NULL` 在内存中是一个特殊的值。你可以通过以下代码来检查 `NULL` 的情况：

    ```
    #include <cs50.h>
    #include <ctype.h>
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>

    int main(void)
    {
        // Get a string
        char *s = get_string("s: ");
        if (s == NULL)
        {
            return 1;
        }

        // Allocate memory for another string
        char *t = malloc(strlen(s) + 1);
        if (t == NULL)
        {
            return 1;
        }

        // Copy string into memory
        strcpy(t, s);

        // Capitalize copy
        if (strlen(t) > 0)
        {
            t[0] = toupper(t[0]);
        }

        // Print strings
        printf("s: %s\n", s);
        printf("t: %s\n", t);

        // Free memory
        free(t);
        return 0;
    }

    ```

    请注意，如果获得的字符串长度为 `0` 或 `malloc` 失败，则返回 `NULL`。另外，`free(t)` 告诉计算机，你已经用完了通过 `malloc` 申请的这块内存，可以释放它了。

## Valgrind

-   `Valgrind` 是一个工具，用来检查使用了 `malloc` 的程序是否存在内存相关的问题。具体来说，它会检查你是否释放了所有通过 `malloc` 分配的内存。
-   考虑以下代码：

    ```
    #include <stdio.h>
    #include <stdlib.h>

    int main(void)
    {
        int *x = malloc(3 * sizeof(int));
        x[0] = 72;
        x[1] = 73;
        x[2] = 33;
    }

    ```
请注意，运行此程序不会导致任何错误。虽然 `malloc` 用于为数组分配足够的内存，但代码没有释放通过`malloc`分配的内存。

- 如果您执行 `make memory` 命令后再执行 `valgrind ./memory` 命令，Valgrind会生成报告，指出程序中发生内存泄漏的位置。
- 您可以这样修改代码：

    ```
    #include <stdio.h>
    #include <stdlib.h>

    int main(void)
    {
        int *x = malloc(3 * sizeof(int));
        x[0] = 72;
        x[1] = 73;
        x[2] = 33;
        free(x);
    }

    ```

    请注意，再次运行 valgrind 现在不会导致任何内存泄漏。

## 垃圾值

- 当您向编译器请求一块内存时，不能保证该内存是空的。
- 您所分配的内存块很可能之前被其他程序使用过，因此可能包含_垃圾数据_或_无意义的值_。这是因为您获得了一块内存但没有对其进行初始化。例如，考虑以下代码：

    ```
    #include <stdio.h>
    #include <stdlib.h>

    int main(void)
    {
        int scores[1024];
        for (int i = 0; i < 1024; i++)
        {
            printf("%i\n", scores[i]);
        }
    }

    ```

    请注意，运行此代码将为您的数组在内存中分配 `1024` 个位置，但 `for` 循环可能会显示并非所有值都是 `0`。当您不将内存块初始化为零或其他值时，始终最好注意垃圾值的可能性。

## Binky 指针讲解视频

- 我们观看了[斯坦福大学的视频](https://www.youtube.com/watch?v=5VnDaHBi8dM)，它帮助我们可视化和理解指针。

## 交换

- 在编程中，交换两个变量的值是很常见的需求。通常，这需要借助一个临时变量。 实践中，您可以输入 `code swap.c` 并编写如下代码来观察这一现象:

    ```
    #include <stdio.h>

    void swap(int a, int b);

    int main(void)
    {
        int x = 1;
        int y = 2;

        printf("x is %i, y is %i\n", x, y);
        swap(x, y);
        printf("x is %i, y is %i\n", x, y);
    }

    void swap(int a, int b)
    {
        int tmp = a;
        a = b;
        b = tmp;
    }

    ```

    请注意，虽然此代码可以运行，但它不起作用。 即使在发送到 `swap` 函数后，这些值也不会交换。 为什么？

- 当您将值传递给函数时，您只是提供副本。 在前几周，我们讨论了_作用域_的概念。 在 `main` 函数的大括号 `{}` 中定义的变量 `x` 和 `y`，其作用域仅限于 `main` 函数内部。 考虑下图：

    ![一个矩形，顶部是机器代码，然后是全局变量、堆和栈](/img/cs50/cs50Week4Slide163.png "栈和堆")

    请注意，我们在此课程中未使用的_全局_变量位于内存中的一个位置。 各个函数调用时所使用的栈内存位于内存的另一个区域。

- 现在，考虑下图：

    ![一个矩形，底部是 main 函数，正上方是 swap 函数](/img/cs50/cs50Week4Slide167.png "帧")

    请注意，`main` 函数和 `swap` 函数拥有各自独立的_栈帧_，这意味着无法简单地通过值传递的方式在函数间修改变量的值。

- 如下修改您的代码：

    ```
    #include <stdio.h>

    void swap(int *a, int *b);

    int main(void)
    {
        int x = 1;
        int y = 2;

        printf("x is %i, y is %i\n", x, y);
        swap(&x, &y);
        printf("x is %i, y is %i\n", x, y);
    }

    void swap(int *a, int *b)
    {
        int tmp = *a;
        *a = *b;
        *b = tmp;
    }

    ```

    请注意，变量不是按值传递，而是按引用传递的。也就是说，函数接收的是 `a` 和 `b` 的地址。因此，`swap` 函数就能知道如何修改 `main` 函数中 `a` 和 `b` 的值了。

-   你可以这样理解：

    ![a和b存储在main函数中，并通过引用传递给swap函数](/img/cs50/cs50Week4Slide173.png "按引用传递")

## 溢出

-   *堆溢出* 指的是程序尝试写入超出堆内存分配范围的数据，导致覆盖了不应该被覆盖的内存区域。
-   *栈溢出* 指的是函数调用层级过深，导致栈空间耗尽。
-   这两种情况都属于*缓冲区溢出*。

## `scanf`

-   在 CS50 中，我们创建了像 `get_int` 这样的函数来简化从用户获取输入的操作。
-   `scanf` 是一个内置函数，可以获取用户输入。
-   我们可以使用 `scanf` 轻松地重新实现 `get_int`，如下所示：

    ```
    #include <stdio.h>

    int main(void)
    {
        int x;
        printf("x: ");
        scanf("%i", &x);
        printf("x: %i\n", x);
    }

    ```

    请注意，`scanf("%i", &x)` 将用户输入的值存储到变量 `x` 的内存地址中。

-   但这个程序仍然无法正常运行，因为我们没有为字符串分配足够的内存空间。请考虑以下代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        char *s;
        printf("s: ");
        scanf("%s", s);
        printf("s: %s\n", s);
    }

    ```

    请注意，因为字符串是特殊的，所以不需要 `&`。

-   我们可以如下修改我们的代码：

    ```
    #include <stdio.h>

    int main(void)
    {
        char s[4];
        printf("s: ");
        scanf("%s", s);
        printf("s: %s\n", s);
    }

    ```

    请注意，如果预先分配一个大小为 4 的字符数组，输入 'cat' 程序就能正常运行。但是，大于此值的字符串会产生错误。

## 文件

-   您可以读取和操作文件。关于文件操作的更多内容将在后续课程中介绍。现在，请参考以下 `phonebook.c` 的代码：

    ```
    #include <cs50.h>
    #include <stdio.h>
    #include <string.h>

    int main(void)
    {
        // 打开 CSV 文件
        FILE *file = fopen("phonebook.csv", "a");

        // 获取姓名和号码
        char *name = get_string("Name: ");
        char *number = get_string("Number: ");

        // 打印到文件
        fprintf(file, "%s,%s\n", name, number);

        // 关闭文件
        fclose(file);
    }

    ```

    请注意，此代码使用指针来访问文件。

-   在运行代码前，请先创建名为 `phonebook.csv` 的文件。运行程序并输入姓名和电话号码后，这些信息将会被保存到 CSV 文件中。

## 总结

在本课程中，您学习了指针，指针使您能够访问和操作特定内存位置的数据。具体来说，我们深入研究了以下内容……
-   内存
-   十六进制
-   地址
-   指针
-   字符串
-   指针运算
-   字符串比较
-   复制
-   Valgrind
-   垃圾值
-   交换
-   溢出
-   `scanf`
- 存储器 (Memory)
- 十六进制数 (Hexadecimal)
- 地址 (Addresses)
- 指针 (Pointers)
- 字符串 (Strings)
- 指针运算 (Pointer Arithmetic)
- 字符串比较 (Comparing strings)
- 复制 (Copying)
- Valgrind
- 垃圾值 (Garbage values)
- 交换 (Swap)
- 溢出 (Overflow)
- `scanf`

下回见！
