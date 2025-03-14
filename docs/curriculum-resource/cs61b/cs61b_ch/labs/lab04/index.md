---
title: Lab 04 Git
---

## 常见问题解答

Lab 04 的常见问题解答[在此](faq.md)。

## 介绍

到目前为止，我们一直用 Git 和 Github 提交作业，但之前讲的都只是最基本的操作。这次实验，我们会复习之前学过的 git 命令，并介绍一些新命令，帮助大家更好地掌握 Git 和 Github。本次实验会包含一些练习，帮助大家巩固对 Git 的理解。

:::warning
遇到问题时，请不要跳过本实验的步骤，也不要直接复制网上找到的命令 (这可能会导致问题)。学习本实验时，请仔细阅读命令和说明，确保理解其含义！
:::

:::info
请务必从 `sp24-s***` 仓库拉取 (pull) 框架代码，获取所需文件。本次实验只需要用到一个文件：`magic_word.txt`。
:::

## Git vs Github

在学习 Git 命令之前，我们先来了解一下 Git 和 Github 的区别。

### Git

Git 是一个免费开源的版本控制系统 (也就是说，用户和开发者都可以使用其源代码)。作为一个版本控制系统，Git 可以帮助我们管理不同版本的代码，并追踪源代码的更改。如果有多个开发者同时开发一个项目，Git 就更有用了。如果没有版本控制系统，开发者之间的协作会变得困难，代码的修改也难以同步。

一般来说，Git 的数据模型是基于链表的。我们稍后会详细介绍这一点。 简单来说，每次要保存仓库的快照时，我们都会进行提交 (commit)，就像之前提交作业一样。这些提交就像链条一样连接在一起。 以下是它的可视化效果：

![git_structure](/img/cs61b/git_structure.png)

这个由提交构成的链表，记录了你所有的修改历史。最新的提交 (快照) 就是上图中的绿色圆圈。

### Github

Github 是一个在线的 Git 仓库托管平台。Git 仓库是一个中心化的位置，用于追踪和管理文件和目录的所有更改 (例如你的 `sp24-s***` 仓库)。仓库既可以创建在本地电脑上，也可以创建在 Github 上。

Github 让开发者之间的协作更加方便，可以轻松共享代码，并且可以将代码保存在远程服务器上。如果你的代码保存在本地，可以上传到 Github。 这样即使本地代码丢失，也还有一份备份。所以我们才建议大家经常提交，及时保存工作成果和进度！

## Git 命令

接下来，我们来介绍一些常用的 Git 命令。请注意，这里只列出了一部分常用的 Git 命令。开始吧！

### `init`

如果你想把一个目录变成 Git 仓库，可以在该目录下运行以下命令：

```shell
git init
```

这个命令会在当前目录下初始化一个 Git 仓库。

### `add`, `commit`

要保存 Git 仓库中的修改，首先需要选择要保存的更改：

```shell
git add some_file.txt
```

如果要选择所有修改，可以使用这个快捷命令：

```shell
git add .
```

注意，这些修改 *并没有真正保存*。`add` 命令会将文件或更改放入“暂存区”(staging area)，这个区域会记录哪些内容会被包含到下一次提交中。要真正保存修改，或者说为当前仓库创建一个快照，需要运行 `git commit -m` 命令，如下所示：

```shell
git commit -m "这里填写提交信息，描述你做了哪些修改。"
```
当我们提交任何更改时，最好添加描述性的提交信息——这样不仅方便自己日后回顾一段时间内的修改，也方便其他开发者理解你的工作。

### `status`

如果你想查看有哪些更改，可以在你的仓库中运行`git status`。输出结果可能和下面的例子略有不同，但会显示哪些文件被修改过。如果它们显示在“changes not staged for commit”下，说明尚未添加到暂存区。添加到暂存区后，这些文件会出现在“Changes to be committed”下。

```shell
On branch main
Your branch is up to date with 'origin/main'.

Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
	modified:   proj1a/src/LinkedListDeque61B.java
	modified:   proj1b/src/ArrayDeque61B.java
	modified:   proj1b/tests/ArrayDeque61BTest.java
```

在这个例子中，`git status`显示我们修改了三个文件，这些文件尚未暂存以进行提交。执行`git add`后，`git status`的输出将会改变：

```shell
On branch main
Your branch is up to date with 'origin/main'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
	modified:   proj1a/src/LinkedListDeque61B.java
	modified:   proj1b/src/ArrayDeque61B.java
	modified:   proj1b/tests/ArrayDeque61BTest.java
```

无论“Changes not staged for commit”还是“Changes to be committed”，都表示这些文件已被**跟踪**，即之前已保存到版本库中。`git status`还会显示**未跟踪**的文件，即从未保存到版本库中的文件。

### `log`

在git仓库中运行`git log`会显示所有提交历史。例如，你会看到类似下面的信息：

```shell
$ git log

commit 8g955d88159fc8e4504d7220e33fad34f8f2c6bd
Author: Elana Ho <elana@Elana-MacBook-Air.local>
Date:   Tue Feb 7 19:06:48 2016 -0800

    Added common Git problems to lab04.
```

这意味着你可以查看所有提交的完整历史。还记得每次提交时添加的提交信息吗？它也会显示在`git log`中。例如，提交信息“Added common Git problems to lab04”表示我们当时执行了`git commit -m "Added common Git problems to lab04."`命令。

另一个**重要**信息是“commit”标题旁边的内容。它看起来像一串随机字符和数字，代表着**提交ID**，是Git分配的唯一标识符，用于标识该提交所做的具体更改。**请记住这一点，这在下一节中会用到。**

### `restore`

如果想恢复到程序的先前版本，可以使用`git restore`命令。有几种方法可以实现。

如果想将文件恢复到最近一次提交时的状态，可以直接运行`git restore`，无需指定提交ID：

```shell
git restore [文件路径]
```

如果想恢复到**特定**的提交，需要先找到该提交的ID，然后才能恢复文件。

```shell
git restore --source=[commitID] [文件路径]
```

## Git 练习 (第一部分 1.1)
现在你就可以开始使用 Git 了！接下来的任务是通过创建一个仓库并进行几次提交来熟悉 Git 的基本工作流程。完成之后，请填写 Beacon 上提供的链接中的表单，以便完成检查。

:::danger
请务必在**本地计算机上**完成此步骤，但**不要在 `SP24-s***` 仓库内操作**！请确保不要在 `SP24-s***` 仓库中初始化新的仓库。
:::

:::info
> 如果你需要创建目录、创建文件、更改目录等方面的帮助，请参考 [_如何使用终端_](./terminal.md)。
:::

1.  创建一个名为 `lab04-checkoff` 的目录。你可以将此目录放在你电脑上的任何位置**（但不要放在你的 `sp24-s***` 仓库中）**。
2.  进入 `lab04-checkoff` 目录，并初始化一个 git 仓库。
3.  用你喜欢的方式创建一个名为 `61b.txt` 的文件，并在文件中写入 "Created 61b.txt"。
4.  用你喜欢的方式创建另一个名为 `61boba.txt` 的文件，并在文件中写入 "Created 61boba.txt"。
5.  开始**仅**跟踪 `61b.txt`，并创建一个仅包含此文件的新提交，提交消息为：`Add 61b.txt`。
6.  通过将文件中的文本更改为："61b.txt changed to version 2"，对 `61b.txt` 进行修改。
7.  进行另一次提交，本次提交包含 `61b.txt` 和 `61boba.txt`。提交消息应为：`Updated 61b.txt and added 61boba.txt`。
8.  通过将文件中的文本更改为："61b.txt changed to final version"，再次修改 `61b.txt`。**不要提交此版本。**

    这时，如果你运行 `git status` 和 `git log` 命令，你应该会看到类似下面的输出结果：

    ![git_checkoff](/img/cs61b/git_checkoff.png)

9.  **仅使用 git**，将 `61b.txt` 恢复到最近一次提交中的版本。
    <!-- markdownlint-disable MD030 -->
10. **仅使用 git**，将 `61b.txt` 恢复到第一次提交中的版本。

<!-- markdownlint-restore -->

请务必保存这个仓库和目录，直到你在 [Beacon]({{ site.links.beacon }}) 上填写完表格。

请按照上述步骤操作，并完成第一份 Google 表单。在获取“魔法词”之前，你需要填写第二份 Google 表单。


## Git 命令继续

让我们继续！接下来，我们将更深入地探讨远程仓库以及分支的概念。

### `remote add`

有时，我们需要从其他仓库拉取更改，尤其是那些托管在 GitHub 上的仓库。为此，我们可以将这些仓库添加为“远程仓库”。例如，在 Lab01 中，我们使用以下命令在我们的个人仓库中添加骨架仓库：

```shell
git remote add skeleton https://github.com/Berkeley-CS61B/skeleton-sp24.git
```

让我们来详细分析一下。添加远程仓库时，我们需要指定远程仓库的名称和 URL。例如，`skeleton` 是一个远程仓库的名称，其 URL 是 `https://github.com/Berkeley-CS61B/skeleton-sp24.git`。之后，当我们想要从该仓库 `pull` 或 `push` 代码时，就可以使用这个名称来引用它。

因此，要添加远程仓库，我们可以运行以下命令：

```shell
git remote add [remote-name] [remote-url]
```

:::info
你可以在你的仓库中运行 `git remote -v` 命令来查看已经添加的远程仓库列表。
:::

### `switch`
我们还没有过多地讨论 Git 的另一个特性，那就是分支（branches）！ 这门课上基本用不到（本次实验除外），但了解它还是很有用的。

大多数版本控制系统都有某种形式的分支系统。 当我们说“分支”时，意味着我们从“主（main）”分支“派生”出去。 分支允许我们同时跟踪多个版本的代码（可以把它想象成不同的版本）。 我们创建另一个分支的原因可能是，我们想要开发程序的另一个功能，但仍然想维护我们现有的版本。

让我们看一个可视化例子。

![cool_branch](/img/cs61b/on_cool_branch.png)

在上图中，有两个分支，`master` 和 `cool_branch`。 请注意，我们已经进行了多次提交。 在某个时候，我们最终从 `master` “派生”出去（在提交信息为“diverge commit”的提交处），并从该特定分支派生出去。 现在，如果我们想停止在当前分支（`cool_branch`）上工作，可以运行以下命令切换回 `master` 分支：

```shell
git switch [branch-name]
```

![master_branch](/img/cs61b/on_master_branch.png)

在这个例子中，我们将运行 `git switch master`。 请注意，HEAD 标签现在指向 `master` 上的最新提交。

:::info
我们不会在这里介绍如何创建分支，但你可以自行查阅相关资料。
:::

### 再次讨论 `restore` 命令

现在我们对远程仓库和分支有了初步的了解，让我们再次讨论一下 `restore` 命令。 在前面的章节中，我们讨论了如何使用 `restore` 命令，基于最近的提交或提交 ID 恢复到之前的版本。 此外，我们也可以使用该命令，基于远程仓库和指定分支来恢复更改。 如下所示：

```shell
git restore --source=[remote-name]/[branch-name] [file_name]
```

它会根据远程仓库指定分支的最新提交来恢复文件。

### `push`

如果我们要将本地计算机上所做的任何提交推送到远程仓库，我们可以使用 `git push`：

```shell
git push [remote-name] [branch]
```

在本课程中，我们使用 `git push origin main` 将本地仓库中的任何更改推送到我们的远程仓库。 `origin` 是代表我们托管在 Github 上的个人仓库的远程仓库，而 `main` 是我们工作的分支。

下图展示了尚未推送的一些本地提交。本地仓库在左侧，远程仓库在右侧。

![remote_push_before](/img/cs61b/remote_push_before.png)

推送后，我们的提交现在保存在我们的远程仓库中：

![remote_push_after](/img/cs61b/remote_push_after.png)

### `pull`

相反，如果我们要将远程仓库中的任何更改拉取到本地仓库，我们可以运行 `git pull`：

```shell
git pull [remote-name] [branch]
```

之前从骨架代码拉取时，我们已经用过 `git pull skeleton main` 命令。下图展示了尚未拉取的一些远程提交：

![remote_pull_before](/img/cs61b/remote_pull_before.png)

拉取后，我们的远程提交现在位于我们的本地仓库中：

![remote_pull_after](/img/cs61b/remote_pull_after.png)

## Git 常见问题
在本节中，我们将介绍一些您可能遇到的常见 Git 问题。 这并非涵盖所有可能的问题，您可以在我们的指南[此处](../guides/git)找到更多关于Git问题的信息等。

:::danger
虽然本节旨在帮助诊断 Git 问题并提供一些常见的解决思路，但如果您不太确定，请建议及时寻求帮助！
:::

### Fatal: refusing to merge unrelated histories (致命错误：拒绝合并无关历史记录/拒绝合并不相关的历史)

这通常发生在您拉取之后，有人更改了初始代码或框架代码中的文件时。 要解决此问题，请运行 `git pull <remote-repo> main --allow-unrelated-histories --no-rebase`，具体操作如下：。 这可能会强制产生合并冲突（更多信息见下文）。

### Merge Conflict (合并冲突)

合并冲突消息可能如下所示：

```shell
$ git pull origin main
From github.com:Berkeley-CS61B/course-materials-sp16
 * branch            main     -> FETCH_HEAD
Auto-merging proj/proj0/solution/canonical/Planet.java
CONFLICT (content): Merge conflict in proj/proj0/solution/canonical/Planet.java
Automatic merge failed; fix conflicts and then commit the result.
```

当同一文件的相同代码行被修改，且这些修改无法同时存在时，就会发生合并冲突。 Git 将指示哪些文件存在冲突； 要解决这些冲突，请在 IntelliJ 中打开这些文件并手动解决。 这些冲突在文件中显示如下：

```shell
    public Planet(Planet p) {
<<<<<<< HEAD
        this.xPos = p.xPos;
        this.yPos = p.yPos;
=======
        this.xxPos = p.xxPos;
        this.yyPos = p.yyPos;
>>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed
```

`<<<<<<< HEAD` 和 `=======` 之间是本地版本的内容，`=======` 和 `27ddd0c71515e5cfc7f58a43bcf0e2144c127aed` 之间是远程仓库的内容。 在这两个选项之间，选择您想要保留的修改。 解决所有冲突后，添加并提交您的更改，然后运行 git status 以检查您的仓库状态。

更多关于合并冲突的信息，请参考[这里](../guides/git#merging) 和 [这里](../guides/git/wtfs#error-you-have-not-concluded-your-merge-merge_head-exists)。

### Your branch is ahead of 'origin/main' by X commits. (您的本地分支领先于远程仓库'origin/main'分支X个提交。)
当本地仓库与其远程仓库不再同步时，会发生这种情况。 如果您想保留文件的本地版本，请使用 `git push`。 如果您想用远程仓库中的版本覆盖您的本地更改，请使用 `git reset --hard origin/main`。

## Git 练习（第 1.2 部分）

和第1.1部分一样，导航到 [Beacon]({{ site.links.beacon }}) 并完成第二个表单。

完成两个 Google 表单（在第 1.1 部分和 1.2 部分中）并获得全部学分后，您应该能够获得一个**魔法词**。 将此魔法词放在 `magic_word.txt` 的**第一行**。

## Git 练习（第 2 部分）

在这个练习中，你需要克隆一个Git仓库，并且您将使用您学到的一些命令来查找隐藏在仓库中的密码。 复制并粘贴以下命令来克隆您的仓库，**在您的 `sp24-s***` 仓库之外**。 具体位置由您决定，只要它不在另一个仓库中就行。

:::danger
在运行命令之前，**请仔细检查您是否不在您的个人仓库中。** 如果您在，会提示错误信息，阻止您在 `sp24-s***` 仓库中克隆该仓库。
:::

```shell
curl -sS https://sp24.datastructur.es/labs/lab04/lab04.sh | bash
```
确认出现了名为 `git-exercise-sp24` 的仓库后，用 `cd` 命令进入该目录，然后在 IntelliJ 中打开 `git-exercise-sp24` 工程，就可以开始练习了！

### 2.1 小节

打开仓库后，您会注意到一个 `password.txt` 文件。第一个任务的密码就在这里。当前版本似乎没有密码，但可能藏在之前的提交里。尝试使用学过的命令找到包含密码的提交，可能需要用方向键来浏览提交历史。

找到任务 1 的密码。找到后，您可以将密码存储在 lab04 目录下的 `magic_word.txt` 文件的**第二行**。记得在继续下一步之前，把文件恢复到最新的提交状态。

### 2.2 小节

完成任务 1 后，让我们尝试找出第二个密码的位置。您克隆的仓库有多个分支，但名为 `erik` 的分支可能包含我们想要的内容。让我们尝试切换到该分支，看看密码是否在那里。

找到任务 2 的密码。你可以通过查看当前提交的提交信息来确认密码是否正确。找到后，您可以将密码存储在 lab04 目录下的 `magic_word.txt` 文件的**第三行**。找到密码后，**切换回 `main` 分支。**

### 2.3 小节

第三个密码似乎不在这个仓库中，而是在另一个仓库中！密码在这个仓库中（请注意，这不是命令，而是 ssh url）：

```shell
git@github.com:Berkeley-CS61B/git-exercise-remote.git
```

为了从该仓库抓取代码，首先需要将其添加为 `git-exercise-sp24` 仓库的远程仓库。您可以为远程仓库指定一个您选择的名称。添加后，运行以下命令（不带远程仓库名称周围的方括号）：

```shell
git pull [remote-name] main --allow-unrelated-histories --no-rebase
```

添加 `--allow-unrelated-histories` 和 `--no-rebase` 标志是因为这两个仓库没有共同的历史，我们需要强制合并这两个分支（本地分支和远程分支）。

:::danger
如果您不确定是否应该使用这些标志，请不要添加它们。如果您在不需要的情况下使用了该标志，你可能会误入交互式 rebase 流程，导致代码丢失或损坏。在大多数情况下（如果不是全部），从您的个人仓库中的骨架拉取时，不应添加此标志，并且运行 `git pull skeleton main` 就足够了。
:::

拉取后，您将看到 Git 尝试合并分支。继续合并它，最终密码应该会显示在您的 IntelliJ 中。您可以将密码存储在 `magic_word.txt` 的**第四行**。

### 提交

现在，你应该已经按照之前的练习说明，将四个密码分别填入 `magic_word.txt` 文件的每一行。确保它们按照提到的特定顺序排列，并且末尾没有多余的空格。你的 `magic_word.txt` 文件内容应该类似如下：

```shell
git_exercise_1_password
git_exercise_2.1_password
git_exercise_2.2_password
git_exercise_2.3_password
```

密码应放置在 `magic_word.txt` 的前 4 行。准备好后，请提交到 Gradescope。

如果您想玩转我们用来制作本实验中某些图像的可视化工具，您可以在[这里](https://git-school.github.io/visualizing-git/#free-remote)找到它。
