---
title: Scheme Gallery
sidebar_position: 5
---

# 可选竞赛：Scheme 艺术 | CS 61A 2024 年春季

## 可选竞赛：Scheme 艺术

-   [scheme\_contest.zip](/resource/cs61a/scheme_contest.zip)

> 输出是艺术，
> 但它的源代码呢？
> 同样抽象。

## 说明

> 本次竞赛完全是可选的！

参赛作品的截止日期是**4月24日，星期三晚上11点59分**。

参赛步骤如下:

1.  下载 [scheme\_contest.zip](/resource/cs61a/scheme_contest.zip)。
2.  从[此链接](/resource/cs61a/abstract_turtle.zip)下载 `abstract_turtle.zip` 文件。然后将该文件解压至您的 `scheme_contest` 目录。解压后的文件夹应包含 `canvas.py`、`color_names.py` 等文件。或者，如果您倾向于使用 `pip` 命令安装，可以运行 `pip3 install abstract-turtle` 命令，无需下载此zip文件。
3.  完成 `contest.scm` 文件（您可以使用 `python3 scheme contest.scm --pillow-turtle --turtle-save-path output` 渲染您的绘图）。绘图步骤的详细说明请参考 [Scheme 内置图形参考](https://cs61a.org/articles/scheme-builtins/#turtle-graphics)。

    -   如果此命令不起作用，请尝试运行 `python3 scheme contest.scm --turtle-save-path output`。主要区别在于，此命令使用 `tkinter` 库，而前者使用 `pillow` 库。两者应生成相同的结果。
4.  上传上一步命令生成的 `output.png` 文件。

在 `contest.scm` 中，`draw` 过程应绘制您的参赛作品，然后在单击时退出。

所有参赛作品，包括源代码，都将分发给同学们进行投票。请勿在提交内容中包含个人信息。

> **重要提示：**当您准备提交时，请务必按照以下两个步骤操作：
>
> -   将您的 `contest.scm` 文件提交到 Gradescope 上的 **Scheme Contest** 作业。
> -   填写[竞赛表格](https://forms.gle/FtHnvNcx1jRvZLDS7)。请确保此处信息准确无误，因为我们将使用这些信息在 Scheme 艺术画廊中展示您的作品。
>
> **故障排除：**在渲染作品时，如果遇到 `name 'builtins' is not defined` 错误，如果是这样，请将以下行添加到 `scheme_builtins.py` 的顶部：`import builtins`。在渲染图像时，系统可能会提示您安装依赖项。安装完成后，应该可以正常生成图像。如果未出现此错误（通常只在部分 Windows 系统上出现），则无需添加该语句。

## 竞赛说明

使用 turtle graphics 创建您选择的迭代或递归过程的可视化。您的实现必须完全用 Scheme 编写，并使用您构建的解释器。所有计算都必须在 Scheme 中完成。

我们将有两个提交类别：

-   _轻量级 (Featherweight)_：少于 512 个 Scheme 记号 (包括括号)
-   _重量级 (Heavyweight)_：少于 4096 个 Scheme 记号 (包括括号)

**任何单个记号都不得包含超过 50 个字符。** 如果您的作品所需记号数量超过重量级限制，请联系课程组申请特殊许可。

您可以通过运行以下命令来检查 `contest.scm` Scheme 文件中的记号数量：

```
python3 scheme_tokens.py contest.scm
```

所有参赛作品（代码和图像）都将在网上公布，最终获奖者将由大众投票决定。每个类别的前三名参赛作品将在投票结束后在 Ed 上公布。

为了增加获奖几率，欢迎在作品注释中添加标题和描述性的[俳句](http://en.wikipedia.org/wiki/Haiku)，这些内容将在投票时一并展示。

## 竞赛规则

提交作品前，请务必确认符合以下准则：

-   作品中的每个记号不得超过 50 个字符，并且必须按照正确的类别（轻量级/重量级）提交。
-   条目不得包含任何政治内容。
-   条目不得包含任何冒犯性、性暗示或在道德上令人反感的内容。
-   条目不得包含任何个人信息。
-   作品内容必须与代码一致，即您提交的 Scheme 代码必须能够完全生成您提交的图形文件。
-   条目必须是静态图像（无动画）。我们鼓励您自己尝试动画，但您不得为本次比赛提交动画作品。

我们保留取消任何不遵守这些准则的参赛作品的资格的权利。

## 往届作品

您可以参考往届作品集，从中获取灵感。请注意，某些提交可能不符合当前的准则。
-   [2023年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa23/proj/scheme_gallery/)
-   [2023年夏季](http://inst.eecs.berkeley.edu/~cs61a/su23/proj/scheme_gallery/)
-   [2023年春季](http://inst.eecs.berkeley.edu/~cs61a/sp23/proj/scheme_gallery/)
-   [2022年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa22/proj/scheme_gallery/)
-   [2022年夏季](http://inst.eecs.berkeley.edu/~cs61a/su22/proj/scheme_gallery/)
-   [2022年春季](http://inst.eecs.berkeley.edu/~cs61a/sp22/proj/scheme_gallery/)
-   [2021年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa21/proj/scheme_gallery/)
-   [2021年夏季](http://inst.eecs.berkeley.edu/~cs61a/su21/proj/scheme_gallery/)
-   [2021年春季](http://inst.eecs.berkeley.edu/~cs61a/sp21/proj/scheme_gallery/)
-   [2020年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa20/proj/scheme_gallery/)
-   [2020年夏季](http://inst.eecs.berkeley.edu/~cs61a/su20/proj/scheme_gallery/)
-   [2020年春季](http://inst.eecs.berkeley.edu/~cs61a/sp20/proj/scheme_gallery/)
-   [2019年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa19/proj/scheme_gallery/)
-   [2019年夏季](http://inst.eecs.berkeley.edu/~cs61a/su19/proj/scheme_gallery/)
-   [2019年春季](http://inst.eecs.berkeley.edu/~cs61a/sp19/proj/scheme_gallery/)
-   [2018年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa18/proj/scheme_gallery/)
-   [2018年夏季](http://inst.eecs.berkeley.edu/~cs61a/su18/proj/scheme_gallery/)
-   [2018年春季](http://inst.eecs.berkeley.edu/~cs61a/sp18/proj/scheme_gallery/)
-   [2017年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa17/proj/scheme_gallery/)
-   [2017年夏季](http://inst.eecs.berkeley.edu/~cs61a/su17/proj/scheme_gallery/)
-   [2017年春季](http://inst.eecs.berkeley.edu/~cs61a/sp17/proj/scheme_gallery/)
-   [2016年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa16/proj/scheme_gallery/)
-   [2016年夏季](http://inst.eecs.berkeley.edu/~cs61a/su16/proj/scheme_gallery/)
-   [2016年春季](http://inst.eecs.berkeley.edu/~cs61a/sp16/proj/scheme_gallery/)
-   [2015年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa15/proj/scheme_gallery/)
-   [2015年春季](http://inst.eecs.berkeley.edu/~cs61a/sp15/proj/scheme-gallery/)
-   [2014年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa14/proj/scheme_gallery/)
-   [2014年春季](http://inst.eecs.berkeley.edu/~cs61a/sp14/proj/scheme_contest/scheme_contest.html)
-   [2013年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa13/proj/scheme_contest_gallery/scheme_contest_gallery.html)
-   [2013年春季](http://inst.eecs.berkeley.edu/~cs61a/sp13/projects/scheme_contest_gallery/scheme_contest.html)
-   [2012年秋季](http://inst.eecs.berkeley.edu/~cs61a/fa12/projects/scheme_contest.html)
