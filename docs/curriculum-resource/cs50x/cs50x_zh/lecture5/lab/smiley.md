---
sidebar_position: 1
description: cs50x lab4  smiley
title: smiley
---

# Lab 4: Smiley - CS50x 2023

## [学习目标](#learning-goals)

-   学习如何处理图像
-   练习操作像素

## [背景知识](#background)

![Smiley](/img/cs50/smiley_spec_image.png )

课堂上已经讲过图像在计算机中的存储方式。本次实验中，你将练习处理BMP文件，具体来说就是修改这张笑脸图片，将所有黑色像素替换为你选择的颜色。

但你将要处理的这张笑脸图片，并非仅由0和1或者黑白像素构成，而是由每像素24位色彩构成。它使用八位来表示红色值，八位表示绿色值，八位表示蓝色值。由于每种颜色使用八位或一个字节，我们可以使用 0 到 255 范围内的数字来表示其颜色值。在十六进制中，这表示为 `0x00` 到 `0xff`。通过混合这些红色、绿色和蓝色值，我们可以创建数百万种可能的颜色。

如果你查看分发代码中的辅助文件之一 `bmp.h`，你将看到每个 `RGB 三元组` 如何由一个 `struct` 表示，如下所示：

```
typedef struct
{
    BYTE rgbtBlue;
    BYTE rgbtGreen;
    BYTE rgbtRed;
}
RGBTRIPLE;

```

其中 `BYTE` 定义为 8 位整数。

你会发现，分发代码中提供了一些文件，用于处理图像文件的读写以及图像的元数据或“文件头”。你需要完成`helpers.c`文件中的`colorize`函数。该函数已经接收了图像的高度、宽度以及一个由`RGBTRIPLE`构成的二维数组作为输入参数，这个数组代表了图像本身。

-   提示
    
    -   如果我们将第一个像素保存为 `RGBTRIPLE pixel = image[0][0]`，那么我们可以将 `pixel` 的每种单独颜色作为 `pixel.rgbtBlue`、`pixel.rgbtGreen` 和 `pixel.rgbtRed` 访问。
    

## [演示](#demo)

## [开始](#getting-started)

打开 [VS Code](https://cs50.dev/)。

首先，点击终端窗口，然后输入`cd`命令。你应该会看到类似下面的“提示符”。

单击该终端窗口内，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/4/smiley.zip

```

然后按下回车键，你的codespace中就会下载一个名为`smiley.zip`的压缩文件。请注意`wget`命令和URL之间的空格，不要遗漏任何字符！

现在执行

来创建一个名为 `smiley` 的文件夹。下载完成后，你就不再需要这个压缩文件了。你可以输入命令，然后在提示符后输入“y”并按下回车键，删除这个压缩文件。

现在输入

然后按下回车键，进入该目录。你的提示符现在应该类似于下面。

如果一切顺利，你应该执行

你应该看到 `bmp.h`、`colorize.c`、`helpers.c`、`helpers.h`、`Makefile` 和 `smiley.bmp`。

如果遇到问题，请重复以上步骤，检查哪里出错。

## [实现细节](#implementation-details)
打开 `helpers.c` 文件，你会注意到 `colorize` 函数尚未完成。请注意，该函数的输入参数已被设定为图像的高度、宽度以及一个二维像素数组。你需要实现此函数，将图像中所有黑色像素更改为你所选的颜色。

你可以直接在 `$` 提示符下输入 `make` 来编译代码。

接下来，你可以通过输入以下命令来运行程序：

```
./colorize smiley.bmp outfile.bmp
```

其中 `outfile.bmp` 是你将要创建的新 bmp 文件的名称。

## [思考题](#thought-question)

-   你认为在使用 24 位颜色 BMP 文件时，如何表示黑色像素？
-   这与混合颜料来表示各种颜色相同还是不同？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该按照以下示例运行。

```
smiley/ $ ./colorize smiley.bmp smiley_out.bmp
```

当你的程序运行正确时，你应该能在 `smiley` 目录中看到一个名为 `smiley_out.bmp` 的新文件。打开它，检查一下黑色像素是否已变为你指定的颜色。

你可以使用 `check50` 来检查你的代码。`check50` 是 CS50 用于在你提交代码时测试代码的程序。只需在 `$` 提示符下输入以下命令即可。务必自行测试！

要评估你的代码风格（包括缩进和空格）是否符合规范，请在 `$` 提示符下输入以下命令。

## [如何提交](#how-to-submit)

在终端中，执行以下命令以提交你的作业。

```
submit50 cs50/labs/2023/x/smiley
```

想看看工作人员的解决方案吗？

```
#include "helpers.h"

void colorize(int height, int width, RGBTRIPLE image[height][width])
{
    for (int i = 0; i < height; i++)
    {
        for (int j = 0; j < width; j++)
        {
            // Make black pixels turn red
            if (image[i][j].rgbtRed == 0x00 && image[i][j].rgbtGreen == 0x00 && image[i][j].rgbtBlue == 0x00)
            {
                image[i][j].rgbtRed = 0xff;
            }
        }
    }
}

```
