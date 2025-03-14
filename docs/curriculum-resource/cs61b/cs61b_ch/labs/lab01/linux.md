---
title: Linux/Unix
---

## A. 设置

在 Linux 上配置 61B 的环境非常简单，只需使用你的包管理器（如 apt、yum 等）安装 Java JDK、git 和 curl 即可。

在 Ubuntu 上安装和配置 Java JDK、git 和 curl 的方法如下：

```sh
sudo apt install openjdk-17-jdk git curl
```

如果成功安装了 Java，就可以跳过之后在实验中通过 IntelliJ 下载 Java 的步骤（[参见 Java 安装指南](index.md#installing-intellij)）。

你也可以使用以下命令安装 IntelliJ：
```shell
sudo snap install intellij-idea-community --classic
```

如果 IntelliJ 通过此命令成功安装且没有报错，请跳过主实验页面中关于 IntelliJ 安装的部分。
