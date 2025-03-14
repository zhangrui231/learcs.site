---
title: Mac OS
---

## A. 准备工作

1.  通过终端运行以下命令来安装 Xcode 命令行工具
    （macOS 系统通常自带，可以尝试用搜索或 Finder 查找）：

    ```shell
    xcode-select --install
    ```

    :::warning
    这可能需要一段时间。 如果你的系统比较老旧的话，可能需要更新软件。 如果提示可用空间不足，请检查剩余存储空间（建议至少预留 40GB）。 你可能还需要重启电脑。
    :::

    :::warning
    您还可以参考 StackOverflow 上的这篇帖子
    [这里](http://stackoverflow.com/questions/9329243/xcode-4-4-and-later-install-command-line-tools)，如果
    是类似的问题。 **如果您仍然遇到问题，请寻求工作人员的帮助！**
    :::
2. 接下来，验证一下是否安装了 `git`，运行以下命令:

    ```shell
    git --version
    ```

    如果命令返回有效的版本号且没有报错，就说明 git 已经成功安装了。 如果安装没问题，跳过本指南的剩余部分，回到实验流程。

## B. Git 安装问题排查

如果在安装 Git 时遇到问题，请参考这个[链接](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)里的“在 macOS 上安装”部分。
如果您仍然遇到问题，请联系您的助教。
