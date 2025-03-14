---
title: Windows
---

## A. 安装 Git

1.  安装 git。访问
    [http://git-scm.com/download/](http://git-scm.com/download/)
    并下载 Git for Windows 安装程序。

    ![Windows Download Git 1](/img/cs61b/windows/win_download.png)

    ![Windows Download Git 2](/img/cs61b/windows/win_64.png)

2.  运行安装程序。你会看到很多选项。我们只需要在以下几个页面修改选项：

    - **选择组件**页面，在这里，我们将 Git bash 添加到 Windows 终端的配置文件中。

      ![Add git bash profile](/img/cs61b/windows/win_git_first.png)

    - **配置实验性选项**页面，在这里，我们添加对原生控制台程序的支持。

      ![Add native console programs support](/img/cs61b/windows/win_git_last.png)

3. 其他选项都保持不变。整个安装过程如下面的 gif 所示：

   ![Windows git install](/img/cs61b/windows/windows_git.gif)

## B. 安装 Windows 终端

所有最新版本的 Windows 10 和 11 都预装了终端应用程序。 如果能在开始菜单中搜索到终端应用，就可以跳过这部分，直接进行下一步了：

![Terminal app in the start menu](/img/cs61b/windows/win_start_terminal.png)

**注意：我们正在寻找屏幕截图中选择的终端应用程序，而不是命令提示符。**

如果没有，我们建议您从 [Microsoft Store](https://aka.ms/terminal) 安装终端应用程序，无需登录或付款。 也可以参考[这里](https://github.com/microsoft/terminal)的安装说明。

## C. 配置 Windows 终端

启动 Windows 终端后，你会看到 PowerShell 的提示符。 我们不使用基于 Windows 的 PowerShell。
相反，我们要用基于 Linux 的 bash shell，也就是 Git bash。
要进行设置：

1.  点击顶部加号“+”旁边的下拉箭头，打开设置。

    ![Terminal Setup 1](/img/cs61b/windows/win_settings.png)

2. 将默认配置文件设为 Git bash，默认终端应用设为 Windows 终端，然后保存。

    ![Terminal Setup 2](/img/cs61b/windows/win_default_profile.png)

3. 如果前面的步骤都正确完成，
    点击加号后，应该会看到 Git Bash 的窗口打开。

    ![Git Bash Setup Correctly](/img/cs61b/windows/git_bash_done.png)

    到这里就设置完成了！
    您现在可以继续完成实验 1 的其余部分。

## D. 关于 WSL2 的说明（实验性）

Windows 2020 年夏季更新包含一个名为 WSL2 的 Linux 内核。
本学期我们不会正式支持 WSL2。
如果你对电脑比较熟悉，可以尝试一下！
注意：你需要参考你所选发行版的 [Linux](linux) 安装说明，在 WSL2 里面重新安装 javac、java 和 git。
