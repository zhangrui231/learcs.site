---
title: Lab 01 Setup
---



## 常见问题解答 (FAQ)

每个作业的顶部都会提供一个常见问题解答 (FAQ) 的链接。例如，实验 1 的 FAQ 位于[此处](faq.md)。FAQ，即常见问题解答，汇总了学生们经常遇到的问题和错误。在联系工作人员之前，请务必先查阅此页面。

## 欢迎来到 CS 61B！

我们很高兴能在这个学期与大家一起学习！开始之前，你需要准备一台能够完成作业的电脑。这门课会用到很多实际的工具，所以你可能会遇到一些实际的问题。这些问题很有挑战性，即使是软件工程师每天也会遇到！遇到困难不要灰心，一定要积极寻求帮助！

我们强烈建议大家参加实验课，并在课上积极寻求帮助。如果在实验课之外遇到问题，可以在 Ed 提问或者参加答疑。

:::danger
> 如果某些东西不起作用，**不要**一直尝试随机操作！相反，请寻求帮助。
> 你的实验助教会告诉你如何加入队列。他们可以选择使用白板队列
> 或[在线 OH 队列](https://oh.datastructur.es)。
>
> 一般来说，在您等待时，您应该**尽可能地继续执行作业的下一步**。
:::

### 合作伙伴

CS 61B 的实验需要独立完成，也就是说你需要自己编写和提交代码。特别是实验 1，你需要配置自己的电脑。但是，我们非常鼓励大家互相合作学习！线下的实验课是组队的好机会。

### 目标和工作流程

在这个实验中，我们会配置本课程需要用到的软件，包括终端、git、Java 和 IntelliJ 的基本使用。我们还会完成一个简单的 Java 程序，帮助大家熟悉 Java 语言。

:::info
> 这个实验会很长！**不要跳过任何步骤！**
:::
## 个人电脑设置

### 任务：安装 Git

<!-- Install Git Instructions Here and come back later to do -->

安装步骤会根据你的操作系统有所不同。

<!-- TODO: Rework these. Mac brew is *nasty*, just switch to the websites. -->
<!-- Hmm, Mac needs brew for git though. Blegh.  -->

- [Windows 说明](windows.md)
- [macOS 说明](mac.md)
- [Linux 说明](linux.md)

:::info
按照你操作系统的指南安装软件。
:::

## 终端

### 终端指南

在 CS61B，我们会大量使用终端来操作 git。终端还有很多其他命令可以用来管理文件夹和文件。我们已经整理了一份简要指南，请务必阅读：**[如何使用终端](terminal.md)**。

在终端中，你可以使用指南中指定的命令在不同的目录中移动、创建新文件、列出当前目录中的文件等。你将在整个实验中使用终端，并且很可能在未来的作业中使用，特别是对于作业提交。

:::info
请阅读终端指南，并熟悉这些命令！也可以将该页面添加为书签，以供将来参考。
:::

## GitHub 和 Beacon 帐户

### 概述

CS 61B 使用内部系统 Beacon 来统一管理大家的成绩和学生信息，而不是使用 bCourses。

在本节中，我们将设置你的 Beacon 帐户以及你的 CS 61B GitHub 仓库（“repo”），你需要使用它来提交所有编码作业。

### 任务：设置帐户

1.  在 [GitHub](https://github.com/) 上创建一个帐户。如果你已经有一个帐户，则无需创建新帐户。
2.  转到 [Beacon]({{ site.links.beacon }}) 并按照步骤完成你的 GitHub 仓库注册。你需要登录你的 Berkeley 账号才能完成 Google Form 上的课程大纲测验。
3.  完成所有步骤后，你应该会收到一封电子邮件，邀请你协作处理你的课程 GitHub 仓库。接受邮件中的邀请，就能获得你这门课的 GitHub 代码仓库的访问权限。这封邮件会发送到你注册 GitHub 账号时使用的邮箱，不一定是你的 Berkeley 邮箱。

:::warning
> 不要按照 GitHub 提供的默认指示操作，我们会在后面的实验步骤中提供更详细的说明。
:::

:::info
按照上面的步骤创建并关联你的 GitHub 和 Beacon 账号。
:::

### 你的存储库

您的仓库名称中会包含一个专属于您的数字。例如，如果您的仓库名为 "`sp24-s1`"，登录 GitHub 后，您可以通过 <https://github.com/Berkeley-CS61B-Student/sp24-s1> 访问您的私有仓库。**因为您的学号不是“1”，所以这个链接对您无效。请将链接中的“1”替换成您的学号，即可在 GitHub 上查看您的仓库。**

此外，**课程工作人员可以查看您的仓库。** 因此，当您在 Ed 或 Gitbugs 上提问需要私下调试时，请务必附上您的代码链接。其他学生将无法查看您的仓库。

:::danger
提醒一下，即使在完成本课程后，您也不得公开发布本课程的代码。这样做违反了我们的课程政策，您可能会受到纪律处分。
:::

## Git

### Git 基础

本课程要求使用 Git 版本控制系统，它在实际应用中几乎是通用的标准。Git 的抽象概念比较复杂，初次使用遇到困难是正常的，请不要担心。

:::info
在继续之前，请阅读[Git 使用指南](../../guides/git/index.md)中关于“远程仓库”的部分。您无需阅读超出该部分的内容。阅读此部分可以帮助您对 Git 有一个初步的了解。
:::

### 任务：设置 Git

在使用 Git 之前，我们需要用一些简单的命令进行配置。

首先，打开您的终端。它看起来像这样：


![empty_terminal](/img/cs61b/empty_terminal.png)

然后，使用以下两个命令设置 Git 将使用的名称和电子邮件：

```shell
git config --global user.name "<您的姓名>"
git config --global user.email "<您的电子邮件>"
```

设置 Git 的默认分支名称：

```shell
git config --global init.defaultBranch main
```

设置“合并策略”：

```shell
git config --global pull.rebase false
```

我们还将更改与 Git 关联的文本编辑器。有时，Git 在输入提交消息等内容时需要您的帮助，因此它会为您打开一个文本编辑器。默认编辑器是 `vim`，它以难以使用而闻名。我们建议在本课程中使用 `nano`，但您可以随意使用您喜欢的任何编辑器。

**请按照[此处](https://git-scm.com/book/en/v2/Appendix-C%3A-Git-Commands-Setup-and-Config)的说明进行操作**。这将配置 Git 的默认编辑器（请确保您按照适用于您操作系统的正确说明进行操作）。

:::info
按照上述说明配置 Git，并设置您喜欢的编辑器。
:::

### Git 和远程仓库

首先，阅读 **[Git 使用指南](../../guides/git/index.md#d-remote-repositories)** 的 **“远程仓库”** 部分。

在本课程中，您需要使用 Git 将您的代码提交到您在[帐户设置](#task-setting-up-accounts)中创建的课程 GitHub 仓库。原因如下：

- 为了避免您丢失文件的巨大痛苦。
- 提交您的作业以进行评分并从自动评分器获得结果。
- 为了避免您对文件进行未知更改而导致一切崩溃的巨大痛苦。
- 为了确保我们可以轻松访问您的代码，以便在您遇到困难时提供帮助。
- **为了劝阻您在公共 GitHub 仓库上发布您的解决方案**。这严重违反了课程政策！
- 为了让您接触到一种现实的工作流程，这种工作流程在您将来从事的每个主要项目中都很常见。

## 任务：Git 仓库和 Java 库

### Java 库

和 Python 类似，我们有时需要使用他人编写的库。Java 的依赖管理比较复杂，所以我们提供了一个 Git 仓库，包含了本课程需要的所有依赖。再次，请确保您的终端已打开。

导航到您想要存储库的文件夹。对于本实验，我们假设您将所有内容都放在一个名为 __cs61b__ 的文件夹中。您可以根据喜好选择不同的名称。这可能类似于导航到您想要的位置、创建 `cs61b` 目录并进入它之后的样子（在本例中为 `cd cs61b`）：


![terminal-directory](/img/cs61b/terminal_directory.png)

进入该文件夹后，运行：

```shell
git clone https://github.com/Berkeley-CS61B/library-sp24
```

以下是 `library-sp24` 的目录结构。请使用 `ls library-sp24` 命令查看该文件夹，并确认您能看到下面列出的 `.jar` 文件。虽然还有很多其他文件，但我们仅列出其中几个。如果您使用操作系统的文件资源管理器，文件名可能不显示 `.jar` 扩展名，这没关系。

```console
library-sp24
├── algs4.jar
├── animated-gif-lib-1.4.jar
├── antlr4-runtime-4.11.1.jar
├── apiguardian-api-1.1.2.jar
└── ...
```

:::info
按照上面的说明获取课程库。
:::

### 使用 GitHub 进行身份验证

首先，在终端中运行以下命令。该命令会打印出您已有的 SSH 密钥；如果没有，则会生成一个新的。

```shell
curl -sS https://sp24.datastructur.es/labs/lab01/get-ssh-key.sh | bash
```

:::info
如果您收到类似 `bash: line 1: syntax error near unexpected token 'newline'` 的错误消息，请尝试刷新此页面并运行更新后的命令。
:::

根据提供的路径，运行以下命令。请务必将 `<path_to_ssh_key>` 替换为 SSH 密钥的实际路径，**并加上 `.pub` 后缀**。

```shell
cat <path_to_ssh_key>.pub
```

运行上述命令的结果应产生类似于以下格式的内容：

```shell
ssh-ed25519 AAAAC3NzaC1lZDI1N6jpH3Bnbebi7Xz7wMr20LxZCKi3U8UQTE5AAAAIBTc2HwlbOi8T [some-comment-here]
```
接下来，复制终端的输出。`[some-comment-here]` 的内容会因系统而异。复制输出后，前往 [Github, Settings, SSH, GPG Keys, New SSH Key](https://github.com/settings/ssh/new) (或点击链接)，并将复制的内容粘贴到 Key 栏中。**为密钥命名，方便您记住它对应的设备或用途，并将密钥类型选择为 Authentication Key**。最后，将密钥添加到您的账户。

在您的终端中，运行以下命令以使用 SSH 连接到 Github：

```shell
ssh -T git@github.com
```

如果一切顺利，您应该看到类似以下内容：

```shell
Hi USERNAME! You've successfully authenticated, but GitHub does not provide shell access.
```

现在，您应该已经成功通过 GitHub 身份验证，可以继续下一步了！

### 配置个人仓库

现在可以克隆您的个人仓库了。和之前下载库文件一样，请先进入您希望存放仓库的目录。建议您将个人仓库和 Java 库放在同一个目录下（例如，`cs61b`）。

:::danger
请勿将您的仓库放置在 `library-sp24` 文件夹内，否则将来可能会出现问题。例如，您的仓库应该位于 `cs61b` 文件夹中，与 `library-sp24` 文件夹同级，而不是在其内部。
:::

**确保将 `***` 替换为您的课程仓库编号（您可以在 Beacon 上找到此仓库编号）。** 然后运行以下命令：

```shell
git clone git@github.com:Berkeley-CS61B-Student/{{site.semester}}-s***.git
```

:::info
克隆完成后，终端可能会显示 `warning: You appear to have cloned an empty repository.` 这并非错误，只是 Git 提示您该仓库目前是空的。
:::

进入您新创建的仓库！

```shell
cd sp24-s***
```

确认当前分支为 `main`：

```shell
git branch -M main
```

**接下来，添加 `skeleton` 远程仓库。** 我们将为每个作业提供的初始代码都放在 `skeleton` 仓库中，您需要从这里拉取代码。（请务必在您的个人仓库目录下运行此命令！）

```shell
git remote add skeleton https://github.com/Berkeley-CS61B/skeleton-sp24.git
```

现在，列出远程仓库时，应该会同时显示 `origin` 和 `skeleton`。

```shell
git remote -v
```

:::info
如果您看到类似 `fatal: not a git repository` 的错误，请检查您是否已使用 `cd` 命令进入 `sp24-s***` 目录。
:::
:::info
请按照上面的步骤，克隆并配置你的代码仓库。
:::

### 获取骨架代码

骨架代码远程仓库包含了所有作业的骨架代码。每次发布新作业或者我们需要更新作业时，都需要从骨架仓库拉取最新的代码。首先确保你位于 `sp24-s***` 仓库目录中。

接下来，运行以下命令来获取 Lab 1 的骨架代码：

```shell
git pull skeleton main
```

:::warning
此时，你应该能看到一个名为 `lab01` 的文件夹，里面包含 `src/Arithmetic.java` 和 `tests/ArithmeticTests.java` 这两个文件。**如果缺少任何文件**，请不要手动创建！ 务必从骨架仓库拉取代码，或者寻求助教的帮助。
:::

## 任务：IntelliJ 设置

IntelliJ 是一个集成开发环境（IDE）。IDE 是一个单独的程序，通常结合了源代码编辑器、编译和运行代码的工具以及调试器。一些 IDE（如 IntelliJ）包含更多功能，例如集成的终端和用于 git 命令的图形界面。最后，IDE 还具有代码完成等工具，可以帮助您更快地编写 Java 代码。

我们_强烈_建议使用 IntelliJ。我们的测试是为在 IntelliJ 中运行而编写的，我们将在以后的实验中明确使用其调试器。此外，IntelliJ 是一种行业标准工具，如果你将来再次使用 Java，几乎肯定会遇到它。

我们将假设你正在使用 IntelliJ，并且不会为其他编辑器（包括 VSCode）提供技术支持。

:::warning
IntelliJ 是一个真实的、工业级的软件开发应用程序。我们不会使用许多功能，并且你有时会遇到没有意义的情况。**如果你遇到困难或某些东西似乎已损坏，请寻求帮助！** 在 IntelliJ 中很难猜到正确的做法。查看 [IntelliJ WTFS 指南](../../guides/intellij/wtfs/index.md)，了解一些常见问题的解决方案。
:::

**在继续之前，请确保你已完成除 git 练习之外的所有上述任务：**

1. 你已经在你的电脑上成功创建了这门课的本地代码仓库，也就是之前创建的 `sp24-s***` 仓库。
2. 你已经从骨架仓库拉取了代码，并且拥有了 `lab01` 目录。

### 安装 IntelliJ

1. 从 [JetBrains](https://www.jetbrains.com/idea/download/) 网站下载 IntelliJ 的社区版。作为学生，你也可以申请 Ultimate 版本的学生授权，但本课程用不上那些额外的功能。**我们推荐并默认你使用社区版。** 点击链接后，你会首先看到 Ultimate 版本，请向下滚动找到社区版。

   :::info
   如果你有 M1 或 M2 Mac，请选择 ".dmg (Apple Silicon)"。否则，请选择 ".dmg (Intel)"。
   :::
2. 选择适合你操作系统的版本后，单击下载并等待几分钟，直到文件下载完成。
3. 运行安装程序。如果你有旧版本的 IntelliJ，则应此时卸载它，并用这个较新的版本替换它。

:::info
在 IntelliJ 下载时，你可以阅读/浏览我们的 [IntelliJ 使用指南](../../guides/intellij/index.md)。你无需阅读或内化所有这些内容即可完成实验。IntelliJ 很复杂，但是核心功能应该会让您觉得与你过去使用过的文本编辑器有些熟悉。
:::

### 安装插件

打开 IntelliJ。然后按照以下步骤操作。

**在继续之前，请确保你运行的是 IntelliJ 2021.2 或更高版本。** 这是因为我们将使用 Java 17 或更高版本。我们正在使用 **IntelliJ 2023.2**（在图像中），它具有更新的用户界面。请注意，此实验中可能存在 IntelliJ 的旧屏幕截图 - 这没关系，因为总体布局仍然相对一致。

1. 在_欢迎_窗口中，单击左侧菜单中的**“Plugins”**按钮。

    ![配置插件](/img/cs61b/plugin_setup1.png){: style="max-height: 325;" }

2. 在弹出的窗口中，点击 “Marketplace”，然后在顶部的搜索栏里输入 “CS 61B”。你应该能看到 CS 61B 插件。如果你点击了自动补全的建议，可能会看到一个略有不同的窗口，这没关系。

3. 单击绿色的**Install**按钮，然后等待插件下载并安装。

    ![搜索 CS 61B](/img/cs61b/plugin_setup2.png)

如果你之前安装过这个插件，请确保更新到最新版本。

1. 现在，搜索“Java Visualizer”，然后单击绿色的**安装**按钮来安装该插件。

    ![Search Java Visualizer](/img/cs61b/plugin_setup3.png)

2. 重新启动（关闭并重新打开）IntelliJ。

更多关于插件使用的信息，请参考[插件指南](../guides/intellij)。现在可以跳过不读。

### 安装 Java

:::warning
**这一步很重要！！**
:::

安装了 IntelliJ 和插件后，我们可以安装 JDK。请按照以下步骤操作：

1. 启动 IntelliJ。如果还没有打开项目，点击“打开”按钮。如果已经打开了项目，选择“文件 -> 打开”。
2. 找到并选择当前作业的目录。比如，Lab 1 对应的目录是 `sp24-s***` 里的 lab01。
3. 导航至“文件 -> 项目结构”菜单，并确保您位于“项目”选项卡中。然后，按照[设置项目 JDK](https://www.jetbrains.com/help/idea/sdk.html#set-up-jdk)中的说明下载您的 JDK 版本。**建议选择 17 或更高的版本！** 根据您选择的版本，请确保它与语言级别兼容（例如，如果您选择 SDK 18，请选择语言级别为 18）。

### 设置作业

按照[作业工作流程指南的 IntelliJ 中打开部分](../../guides/assignment-workflow/index.md#opening-in-intellij)中的说明打开 `lab01`（如果您没有从上一节退出，则可以从步骤 3 开始）。

**每次打开作业，都要确认项目结构已经设置好，并且添加了 `library-sp24` 这个包。**

### 创建项目

打开并设置好 `lab01` 后，您应该在左侧窗格中看到以下文件：

- `src/Arithmetic`，一个 Java 文件，包含您的第一个编程练习。
- `tests/ArithmeticTest`，另一个 Java 文件，用于检查 `Arithmetic` 是否已正确实现。

![arithmetic intellij](/img/cs61b/arithmetic_intellij.png)

打开 `Arithmetic` 和 `ArithmeticTest` 文件时，不应该看到任何红色文字或者红色波浪线。

### IntelliJ 测试

为了测试是否一切正常，打开文件，点击 `public class Arithmetic` 旁边的绿色三角形，然后选择“运行 'Arithmetic.main()'”来运行 `Arithmetic` 类。

![arithmetic_run_main](/img/cs61b/arithmetic_run_main.png)

<details markdown="block">
<summary markdown="block">

**还有其他运行 main 方法的方法。**

</summary>

![run_main_method](/img/cs61b/run_main_intellij.png)

假设该文件有一个 `main` 方法，您可以右键单击项目视图中的文件，然后导航到 `[filname].main()`。您也可以通过右上角的绿色箭头（红色框出）运行它。

</details>

您应该会看到一个控制台弹出，提示您输入一个数字：

![arithmetic prompt](/img/cs61b/arithmetic_prompt.png)

如果你按照提示操作，很可能会遇到一些问题！**先别急着解决。**

### 测试你的代码

虽然我们可以反复运行 `Arithmetic` 文件来检查代码是否正确，但每次都手动输入并检查输出太费时了。所以，我们使用**测试**。

打开 `ArithmeticTest`，然后单击 `public class ArithmeticTest` 旁边的绿色三角形。这将运行我们在本作业中提供的测试。此时，您将看到以下内容：


![arithmetic test failed](/img/cs61b/arithmetic_test_failed.png)

绿色复选标记 (![checkmark](/img/cs61b/testPassed.png){: .inline }) 表示您已通过的测试，而黄色 X (![failed](/img/cs61b/testFailed.png){: .inline }) 表示您未通过的测试。不要担心重复的输出；这是 IntelliJ 的一个奇怪的怪癖。

:::info
修改 `Arithmetic.java` 里的错误，让测试通过。
:::

## 任务：使用 Git 和 GitHub 保存你的代码


在你修改代码的时候，经常保存你的工作是个好习惯。我们之前已经简单介绍过这些命令，现在来详细讲解如何在实际操作中使用它们。如果你想回退到之前的代码版本，拥有更多回滚选项总是更好的。接下来，我们会讲解如何使用 Git 的提交 (commit) 功能来保存你的工作，它就像是文件系统的一个快照。

1.  当你对本地仓库的代码做出修改后，Git 会检测到这些改动。要查看本地仓库的当前状态，可以使用 `git status` 命令。运行这个命令，然后尝试理解输出结果。这些信息对你来说有意义吗？是否符合你的预期？养成在运行其他 Git 命令前先运行 `git status` 的习惯，可以帮助你了解当前的状态。

2.  要保存你对文件所做的更改，首先需要暂存 (stage) 文件，然后才能提交 (commit)。 使用 `git add` 命令来暂存文件。这个命令并不会直接保存文件，而是将文件标记为“待提交”状态，以便在下次提交时包含这些更改。下面的例子展示了如何在 Git 仓库中保存你的工作。在使用 `git add` 命令时，根据你当前所在的目录，你需要指定正确的文件路径（可以使用 `git status` 命令来查看）。

    `commit` 命令中的 `-m "Completed Arithmetic.java"` 部分是用来添加提交信息的，这条信息会附加到本次快照上。你应该始终编写清晰的提交信息，说明本次提交都做了哪些更改。作为一个工作流程示例：

    ```shell
    git add lab01/src/Arithmetic.java
    git commit -m "lab01: Completed Arithmetic.java"
    ```

    如果你运行 `git status` 命令，可能会看到 `Your branch is ahead of 'origin/main'` 这样的提示。 这表示你本地分支的提交领先于远程仓库，并且之前暂存的更改已经包含在提交中。如果自从上次暂存后你没有再修改任何文件，那么 `git status` 应该不会显示任何未暂存的更改。

3.  我们需要将这些更改推送到 GitHub 仓库，这样我们和 Gradescope 才能看到你的代码。如果你在其他地方或电脑上也初始化了相同的仓库，就可以使用 `pull` 命令来同步这些更改。

    ```shell
    git push origin main
    ```

    现在，`git status` 命令会显示 `Your branch is up to date with 'origin/main'`，表示你的本地分支已经和远程仓库同步。

:::warning
养成*经常*（比如每隔 15 分钟）保存文件并执行 `git commit` 的好习惯。这样做在你搞砸代码的时候会非常有用，因为你可以轻松地回退到之前的版本，并查看最近的修改记录。
:::

一般来说，每次开始工作前，先运行 `git pull` 命令，确保你使用的是最新的代码。在编写代码的过程中，经常进行提交。完成工作后，运行 `git push origin main` 命令，将所有更改上传到远程仓库，以便下次可以继续工作。

## 提交到 Gradescope

虽然我们使用 GitHub 来存储代码，但我们使用 **Gradescope** 来进行实际的评分。最后一步是在 [Gradescope]({{ site.links.gradescope_url }}) 上提交你的作业，我们会使用它来自动评判你的代码。

:::info
> 我们在实验课的第一天将所有人的 CalCentral 电子邮件添加到了 Gradescope。请确保使用 CalCentral 上列出的电子邮件地址登录。
>
> 如果您在访问 Gradescope 上的课程时遇到问题，或者想使用其他电子邮件地址，请咨询您的助教！
:::

如果你还没有完成，请确保你已经添加 (add)、提交 (commit) 和推送 (push) 了你的代码。 为了方便起见，下面重复列出这些步骤。

1.  使用 `git add` 命令来添加你的作业目录。 比如，对于 Lab 1，在你的仓库根目录 (`sp24-s***`) 下，你应该使用 `git add lab01` 命令。

2.  使用 `git commit -m "<提交信息>"` 命令来提交你的文件。 提交信息是必须的。 例如，`git commit -m "完成 Lab 1"`。

3.  使用 `git push origin main` 命令将你的代码推送到远程仓库。 你可以访问 GitHub 上的个人仓库，检查你的更改是否已经同步，以此来确认推送是否成功。

4.  在 Gradescope 上打开对应的作业页面。 选择 GitHub 作为提交方式，然后选择你的 `sp24-s***` 仓库和 `main` 分支，最后提交你的作业。提交后，你将会收到一封确认邮件，并且自动评分器会自动开始运行。 Gradescope 会使用你 GitHub 仓库中最新的代码版本进行评分。**如果你发现 Gradescope 评分的代码不是你期望的版本，请务必使用** `git status` **命令检查你是否已经正确地执行了添加、提交和推送操作。**


## 交付成果

请注意，本作业附带一个 [FAQ 页面](faq.md)。
需要提交的文件只有一个，都位于 `lab01` 目录下：

`Arithmetic.java`
: 你应该已经修复了 bug，确保测试能够通过。我们会使用自动评分器检查此文件！本实验中，自动评分器的测试内容与你电脑上的测试内容一致。

:::info
如果还没做，
请确保你已按照上述流程，将更改添加、提交并推送到 Github。如果你已通过 `ArithmeticTest.java` 中的所有测试，你就能获得该实验的满分。
:::

**恭喜你完成了你的第一个 CS 61B 实验！**

如果你需要复习如何提交作业，你可以参考 [作业流程指南](../../guides/assignment-workflow/index.md#opening-in-intellij)。

## 可选项：Josh Hug 的配色方案

正如 Josh Hug 所说：

> 我不太喜欢 IntelliJ 的默认颜色。
>
> **Sunburst**：如果你想要在大多数讲座视频中使用的配色方案，这是一个我制作的自定义配色方案，它非常接近 Sublime 的优秀 Sunburst 主题。要使用 Sunburst，请下载 [hug_sunburst](/resource/cs61b/hug_sunburst.jar)，并使用 IntelliJ 中的“文件 &rarr; 管理 IDE 设置 &rarr; 导入设置”选项导入它。你可能会得到很大的文本，这是我用来录制视频的。要调整 Intellij 中字体的大小，请参阅 [此链接](https://www.jetbrains.com/help/idea/configuring-colors-and-fonts.html)。
>
> **Mariana Pro**：在 2022 年，我切换到了 Mariana Pro。它不像 Sunburst 那样有身处森林的感觉，但它有更多的颜色深度。要获得 Mariana Pro，请转到你用来安装 CS 61B 插件的同一个插件商店，并搜索“Mariana Pro”。这个插件是由 Thibault Soulabaille 制作的。请注意，我更喜欢纯黑色背景，而 Mariana Pro 是深灰色。你可以使用 [这些说明](https://stackoverflow.com/questions/19411510/how-do-you-change-background-color-in-the-settings-of-jetbrains-ide) 更改背景颜色。
