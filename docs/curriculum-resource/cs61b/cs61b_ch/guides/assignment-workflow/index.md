---
title: assignment workflow
---

## 实验/作业流程

本指南介绍了在 CS 61B 课程中如何配置实验/作业。

## 获取骨架代码

本指南的视频演示请见[此链接](https://www.youtube.com/watch?v=tABtNcN5y0A)。

`skeleton` 远程仓库包含所有作业的骨架代码。每当发布新的作业，或者我们需要更新作业时，你需要从 skeleton 仓库拉取代码。首先请确保你位于 `sp24-s***` 仓库目录下，然后：

```shell
git pull skeleton main
```

这条命令会从名为 `skeleton` 的远程仓库（地址为 `https://github.com/Berkeley-CS61B/skeleton-sp24.git`）获取所有文件，并将它们复制到当前目录下。

:::warning
> 如果遇到类似 `fatal: refusing to merge unrelated histories` 的错误，每次可以使用以下命令解决：
>
> ```shell
> git pull --no-rebase --allow-unrelated-histories skeleton main
> ```
:::

（如果你正在进行 Lab 1，请回到实验指导。）

## 在 IntelliJ 中打开

以下步骤适用于**所有**实验/作业。**每次从 `skeleton` 仓库拉取新的实验或项目文件后，都需要重新执行以下步骤。**

1.  启动 IntelliJ。**如果未打开任何项目**，请点击“Open”按钮。如果已经打开了项目，请点击 **“File --> Open”**。

2.  找到并选择当前实验/作业所在的目录。例如，对于 Lab 1，你将选择 `sp24-s***` 仓库中的 `lab01` 目录。

3.  点击 **"File -> Project Structure"** 菜单，并确保选中 **Project** 选项卡。将项目 SDK 设置为你已安装的 Java 版本。如果在下拉菜单中找不到 17 或更高版本，请确认你已完整下载并安装 Java。

    ![select-jdk](/img/cs61b/select_jdk.png)

4.  在 **Project** 选项卡中，将 Project Language Level 设置为 "17 - Sealed types, always-strict floating-point semantics"。

    此时，Project 选项卡应如下所示：

    ![project](/img/cs61b/project_structure_settings.png)
    -   SDK 设置为 Java 17 或更高版本
    -   语言级别至少为 17，最多为 SDK。
    -   编译器输出应已自动填写，并指向作业目录下的 `out` 文件夹

5.  仍在 Project Structure 中，转到 **Libraries** 选项卡。点击 "**+ -> Java**" 按钮，然后找到 `library-sp24` 文件夹，选中后点击“Ok”。

    ![select-libraries](/img/cs61b/select_libraries.png)

6.  单击“Ok”以应用你的设置并离开 Project Structure。

此时，如果配置正确：

-   每个 Java 文件名旁边都应该显示一个蓝色圆圈。
-   打开任何 Java 文件时，代码都不应显示红色。

## 提交到 Gradescope

1.  使用 `git add` 命令添加你的实验/作业目录。例如，对于 Lab 1，在你的仓库根目录 (`sp24-***`) 下，使用 `git add lab01` 命令。在实验/作业目录下，可以使用 `git add .` 命令。
2.  使用 `git commit -m "<commit message here>"` 命令提交你的代码。提交信息是必填的。例如，`git commit -m "Finished Lab 1"`。
3.  使用 `git push origin main` 命令将代码推送到远程仓库。
4.  在 Gradescope 网站上打开对应的实验/作业。选择 Github，然后选择你的 `sp24-s***` 仓库以及 `main` 分支，最后提交。你将收到确认邮件，并且自动评分器会自动运行。

Gradescope 将使用 Github 中你的代码的最新版本。**如果你认为 Gradescope 判分的代码不是最新的，请使用 `git status` 命令检查是否已正确执行添加、提交和推送操作。**

如果遇到无法推送代码的问题，请参考 [Git WTFS](../git/wtfs.md)。
