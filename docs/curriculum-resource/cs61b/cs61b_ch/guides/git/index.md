---
title: Using Git
---

前言：本指南假设您已经对计算机命令行有一定的了解。如果您是命令行新手，可以参考[实验 1](../../labs/lab01/index.md#the-terminal)中关于“终端”的部分。

本指南主要用作 Git 的入门介绍和浅层参考资料。如果您遇到“糟糕，我的代码仓库出问题了！”之类的情况，并希望找到可能的解决方案，请参考 [61B git-WTFS](wtfs.md) (Git 疑难杂症) 。

## A. 版本控制系统简介

_版本控制系统_ 是一种用于追踪文件历史变更的工具。版本控制让您可以查看或恢复到文件的历史版本。版本控制的一些功能已经内置在常用应用中。例如，`撤销` 命令，或者查看 Google 文档的修订记录功能。

在编程中，版本控制系统可以追踪代码的修改历史，从当前状态追溯到最初版本。这使得用户可以参考旧版本，并与他人（例如其他开发者）分享代码变更。

版本控制已经成为软件开发和团队协作的基石。在本课程中，我们将使用 [Git](http://git-scm.com/)。 Git 拥有完善的[文档](http://git-scm.com/documentation)，我们鼓励感兴趣的读者深入了解，本指南后续内容将对其进行总结。

#### Git 简介

Git 是一种[分布式版本控制系统](http://en.wikipedia.org/wiki/Distributed_revision_control)，与集中式版本控制系统相对。这意味着每个开发者的电脑都会存储整个项目的完整历史（包括所有旧版本）。这与像 Dropbox 这样的工具不同，在 Dropbox 中，旧版本储存在他人拥有的远程服务器上。我们将整个项目的完整历史记录称为“代码仓库”。由于代码仓库储存在本地，即使没有网络连接，我们也能在自己的电脑上使用 Git。

实验室内电脑的命令行已经安装了 Git。[实验 1 设置](../../labs/lab01/index.md)指南也介绍了如何在自己的电脑上安装 Git。除了本指南将介绍的命令行界面，还有 [Git GUI (图形用户界面)](http://git-scm.com/downloads/guis)。但我们不提供对图形界面的官方支持。

## B. 本地存储库（叙述性介绍）

让我们通过一个例子来了解如何使用 Git。在这个例子中，我们会用到一些你可能不熟悉的术语和概念。有关此叙述性示例的视频版本，请参见[此视频](https://youtu.be/9kolXm8-EYU)。

假设我们想在电脑上保存各种食谱，并追踪修改历史。我们可以先创建存放面筋和豆腐食谱的文件夹，然后用 Sublime 编辑器创建食谱 (在我的电脑上，用 `subl` 命令启动 Sublime)。

我们假设你只是在阅读，而不是亲自尝试这些命令。如果你想跟着教程一步步操作，需要使用你电脑上安装的文本编辑器，而不是 `subl`。

```sh
$ cd /users/sandra
$ mkdir recipes
$ cd recipes
$ mkdir seitan
$ mkdir tofu
$ cd seitan
$ subl smoky_carrot_tahini_seitan_slaw.txt
$ subl boiled_seitan.txt
$ cd ../tofu
$ subl kung_pao_tofu.txt
$ subl basil_ginger_tofu.txt
```

现在我们有了四个食谱，豆腐和面筋各有两份。要设置 Git 代码仓库来保存食谱的修改历史，我们可以使用以下命令。

```sh
$ cd /users/sandra/recipes
$ git init
```

`git init` 命令的作用是告诉 Git，我们要追踪当前目录（即 `/users/sandra/recipes`）的历史。但此时，**代码仓库里还是空的**。这就像买了个保险箱，但还没往里放东西。

要将文件保存到代码仓库，首先需要 `add` 文件。例如，可以执行以下操作：

```sh
git add tofu/kung_pao_tofu.txt
```
接下来，Git 就要开始变得有点让人摸不着头脑了。即使在调用了 `add` 命令之后，我们_仍然_没有把食谱存进仓库（也就是保险箱）里。

实际上，我们只是把 `kung_pao_tofu.txt` 加进了待追踪的文件列表（也就是准备稍后放进保险箱的文件）。 这么做的原因是，你可能并不想追踪 `/users/sandra/recipes` 文件夹里的 *所有* 文件，`add` 命令就是用来告诉 Git 应该追踪哪些文件的。 我们可以通过 `git status` 命令来查看效果。

```sh
$ git status
```

在这种情况下，您会看到以下响应：

```sh
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

    new file:   tofu/kung_pao_tofu.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    seitan/
    tofu/basil_ginger_tofu.txt
```

输出信息中，“Changes to be committed” 部分列出了所有当前被追踪、且已准备好提交的文件（也就是准备好放进保险箱的文件）。 我们还能看到一些未被追踪的文件，包括 `seitan/` 文件夹和 `tofu/basil_ginger_tofu.txt` 文件。 这些文件未被跟踪，因为我们没有使用 `git add` 添加它们。

*注意：* 添加也称为*暂存*（`stage` 等同于 `add`）。

我们来试试添加 `tofu/basil_ginger_tofu.txt`，然后再次查看状态:

```sh
$ git add tofu/basil_ginger_tofu.txt
$ git status
On branch main

No commits yet

Changes to be committed:
  (use "git rm --cached <file>..." to unstage)

    new file:   tofu/basil_ginger_tofu.txt
    new file:   tofu/kung_pao_tofu.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    seitan/
```

可以看到，两种豆腐食谱现在都被追踪了，但海鲜酱的两种食谱还没有。 接下来，我们将用 `commit` 命令把豆腐食谱的副本存入仓库（也就是放进保险箱）。 具体操作如下，使用 `git commit` 命令:

```sh
$ git commit -m "add tofu recipes"
```

执行后，`commit` 命令会将所有 *已暂存* 的更改（这里指的是豆腐食谱）保存到仓库中。 因为我们没有对海鲜酱食谱使用 `git add`，所以它们没有包含在放入仓库的快照中。

现在，我们工作成果的这个快照就安全了（只要电脑硬盘没坏，或者我们没搞砸仓库文件）。 `-m` 标志允许我们向提交添加消息，以便我们可以记住此提交中最重要的内容（Git 实际上不允许您在没有消息的情况下提交）。 通常的惯例是使用动词的[祈使语气](https://en.wikipedia.org/wiki/Imperative_mood)，而不是过去时。 因此，例如，上面的提交消息说“add tofu recipes”，而不是“added tofu recipes”。

作为另一个类比，您可以将整个过程想象成用相机拍摄全景照片。 `add` 命令负责捕捉图像的各个部分，而 `commit` 命令则把所有“added”过的部分拼接成一张全景图，然后把这张图放进保险箱。 正如全景图仅包含您指向的事物（而不是您周围的整个 360 度圆圈）一样，`commit` 命令仅保护那些已使用 `add` 命令添加的文件（而不是 recipes 目录中的所有文件）。

提交后，您会注意到 `git status` 不再在“Changes to be committed”下列出文件。 这类似于您完成拍摄全景照片后，所有临时的小图像文件都会被丢弃。 此时 `git status` 的结果如下所示：

```sh
$ git status
On branch main
Untracked files:
  (use "git add <file>..." to include in what will be committed)

    seitan/

nothing added to commit but untracked files present (use "git add" to track)
```
正如你可能已经注意到的，`status` 对于查看仓库里现在是个什么状态非常有用。如果遇到什么不对劲的地方，首先就应该看看 `git status`！

如果你查看 `tofu/` 文件夹中的文件，你会发现提交过程并没有影响我们计算机上的原始文件。 这就像你拍全景照片，你的朋友不会真的被吸进手机里一样。

我们可以用 `git log` 命令来查看快照记录。

```sh
$ git log

commit 9f955d85359fc8e4504d7220f13fad34f8f2c62b
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:06:48 2016 -0800

    add tofu recipes
```

9f955d85359fc8e4504d7220f13fad34f8f2c62b 这一长串字符就是提交的 ID。 我们可以用 `git show` 命令来查看这次提交的内容。

```sh
$ git show 9f955d85359fc8e4504d7220f13fad34f8f2c62b

commit 9f955d85359fc8e4504d7220f13fad34f8f2c62b
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:06:48 2016 -0800

    add tofu recipes

diff --git a/tofu/basil_ginger_tofu.txt b/tofu/basil_ginger_tofu.txt
new file mode 100644
index 0000000..9a56e7a
--- /dev/null
+++ b/tofu/basil_ginger_tofu.txt
@@ -0,0 +1,3 @@
+basil
+ginger
+tofu
diff --git a/tofu/kung_pao_tofu.txt b/tofu/kung_pao_tofu.txt
new file mode 100644 index
0000000..dad9bd9
--- /dev/null
+++ b/tofu/kung_pao_tofu.txt
@@ -0,0 +1,3 @@
+szechuan peppers
+tofu
+peanuts
+kung
+pao
```

`git show` 命令能让我们直接看到提交的核心信息。 我们不指望你能完全理解里面的细节，但你应该能看出，提交就是文件名称和内容的一个快照。

*注意*：`show` 命令在实际应用或者 61B 课程中很少用到，但在这里可以帮助你更好地理解提交的概念。

假设我们现在想修改我们的宫保豆腐食谱，因为我们决定应该加入小白菜。
```sh
$ subl tofu/kung_pao_tofu.txt
```

我们刚刚对 `kung_pao_tofu.txt` 所做的更改没有保存在仓库中。 实际上，如果我们再运行 `git status`，会看到：

```sh
$ git status

On branch main
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)

    modified:   tofu/kung_pao_tofu.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

    seitan/
```

你可能会想“好吧，我会再次提交”。 但是，如果我们尝试提交，git 会说没有什么可做的：

```sh
$ git commit -m "add bok choy"

On branch main
Changes not staged for commit:
    modified:   tofu/kung_pao_tofu.txt

Untracked files:
    seitan/

no changes added to commit
```

这是因为即使 `kung_pao_tofu.txt` 正在被 *跟踪*，我们也没有 *暂存* 我们的更改以进行提交。 要将更改存入仓库，我们需要再次使用 `add` 命令来暂存这些更改（也就是说，我们需要给新的 `kung_pao_tofu.txt` 拍张照，才能把它放进保险箱里的全景图里）。

```sh
$ git add tofu/kung_pao_tofu.txt
$ git status

On branch main
要提交的变更：
  (使用 "git restore --staged <file>..." 来取消暂存)
    修改：   tofu/kung_pao_tofu.txt

未跟踪的文件：
  (使用 "git add <file>..." 将其添加到提交列表)   seitan/
```
我们看到，`kung_pao_tofu.txt` 的修改现在处于“待提交”状态（已暂存），这意味着下次提交将会包含此文件的修改。 我们像之前一样执行提交，并使用 `git log` 查看所有已创建的快照列表。
```sh
$ git commit -m "add bok choy"
$ git log

commit cfcc8cbd88a763712dec2d6bd541b2783fa1f23b
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:24:45 2016 -0800

    add bok choy

commit 9f955d85359fc8e4504d7220f13fad34f8f2c62b
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:06:48 2016 -0800

    add tofu recipes
```

现在我们看到有两个提交记录。我们可以再次使用 `show` 命令来查看提交ID为 cfcc8cbd88a763712dec2d6bd541b2783fa1f23b 的提交具体修改了什么，但本指南中不再赘述。

假设之后我们觉得白菜不好吃，想要把菜谱恢复到最初的版本。我们可以使用 `git restore` 命令来回滚文件，如下所示：
```sh
$ git restore --source=9f955d85359fc8e4504d7220f13fad34f8f2c62b tofu/kung_pao_tofu.txt
```

可以把 `restore` 命令想象成一个机器人，它会进入我们的保险箱，找到提交ID为 9f955d85359fc8e4504d7220f13fad34f8f2c62b 的版本中，宫保豆腐食谱的内容，然后将 `tofu/kung_pao_tofu.txt` 文件恢复成该版本的内容。 运行此命令后，如果我们查看 `kung_pao_tofu.txt` 的内容，会发现白菜已经没了（谢天谢地）！
```sh
$ cat tofu/kung_pao_tofu.txt
szechuan
peppers
tofu
peanuts
kung
pao
```

*重要提示：* `restore` *不会修改提交历史！* 换句话说，存放全景照片的保险箱不会受到 `restore` 命令的影响。 Git 的意义在于记录所有文件曾经发生过的变更。 换句话说，如果你在 2014 年和 2015 年拍摄了你房间的全景照片并将它们放在保险箱里，然后在 2016 年决定将它完全恢复到 2014 年的样子，你不会将 2015 年的全景照片烧掉。 也不会在 2016 年拍摄的照片神奇地出现在你的保险箱里。 如果你想记录 2016 年的样子，你需要再拍一张照片（带有适当的 `-m` 消息来记住你刚刚做了什么）。

如果我们想保存一份最新的宫保豆腐食谱（不含白菜）的快照，就必须进行提交。记住，要先暂存这次修改！
```sh
$ git add tofu/kung_pao_tofu.txt
$ git commit -m "restore the original recipe with no bok choy"
$ git log

commit 4be06747886d0a270bf1d618d58f3273f0219a69
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:32:37 2016 -0800

    restore the original recipe with no bok choy

commit cfcc8cbd88a763712dec2d6bd541b2783fa1f23b
Author: Sandra Upson <sandra@Sandras-MacBook-Air.local>
Date:   Sun Jan 17 19:24:45 2016 -0800

    add bok choy
commit 9f955d85359fc8e4504d7220f13fad34f8f2c62b
作者：Sandra Upson <sandra@Sandras-MacBook-Air.local>
日期：Sun Jan 17 19:06:48 2016 -0800

    add tofu recipes
```
我们可以使用 `show` 命令查看这个最新提交的内容。

```sh
$ git show 4be06747886d0a270bf1d618d58f3273f0219a69

commit 4be06747886d0a270bf1d618d58f3273f0219a69
作者：Sandra Upson <sandra@Sandras-MacBook-Air.local>
日期：Sun Jan 17 19:32:37 2016 -0800

   restore the original recipe with no bok choy

diff --git a/tofu/kung_pao_tofu.txt b/tofu/kung_pao_tofu.txt
index 35a9e71..dad9bd9 100644
--- a/tofu/kung_pao_tofu.txt
+++ b/tofu/kung_pao_tofu.txt
@@ -1,4 +1,3 @@
szechuan
peppers
tofu
peanuts
kung
pao
-bok choy
\ No newline at end of file
```

以上就是 Git 的基本原理。总结一下，用我们的照片类比：

 * `git init`: 创建一个盒子（仓库），永久存储全景照片（提交）。
 * `git add`: 拍摄临时照片（暂存），稍后组装成全景照片。
 * `git commit`: 将所有可用的临时照片（暂存的更改）组装成全景照片，并销毁所有临时照片。
 * `git log`: 列出我们拍摄过的所有全景照片。
 * `git show`: 检查特定全景照片的内容。
 * `git restore`: 将文件重新排列回给定全景照片中的样子。不会以任何方式影响您盒子中的全景照片。

关于 Git 还有更多内容，但在深入之前，让我们对刚才的操作进行更正式的说明。

## C. 本地仓库（技术概述）

#### 初始化本地仓库

让我们首先从_本地仓库_开始。如上所述，仓库存储文件以及这些文件的更改历史记录。为了开始，您必须通过在终端中键入以下命令来初始化 Git 仓库_同时位于您想要在本地仓库中存储其历史记录的目录中_。如果您使用的是 Windows，则应在使用 Git Bash 终端窗口时键入这些命令。提醒：如果您不确定如何使用终端窗口，请考虑查看[实验 1 设置](../../labs/lab01/index.md)的“学习使用终端”部分。

```sh
$ git init
```

小贴士：当您初始化 Git 仓库时，Git 会创建一个 `.git` 子目录。在此目录中，它将存储一堆元数据以及文件的旧实际快照。但是，您永远不需要实际打开此 .git 目录的内容，并且您绝对不应该直接更改其中的任何内容！

根据您的操作系统，您可能看不到该文件夹，因为名称以“.”开头的文件夹默认情况下不会被您的操作系统显示。UNIX 命令 `ls -la` 将列出所有文件和目录，包括您的 `.git` 目录，因此您可以使用此命令来检查您的 repo 是否已正确初始化。

#### 跟踪与未跟踪文件

Git 仓库一开始不跟踪任何文件。为了保存文件的修订历史记录，您需要跟踪它。Git 文档有一个关于[记录更改](http://git-scm.com/book/en/Git-Basics-Recording-Changes-to-the-Repository)的优秀章节。为了方便大家理解，这里放了该章节中的一张图片：

![文件状态生命周期](/img/cs61b/file-status.png)

如图所示，文件分为两大类：

1. _未跟踪_文件：这些文件要么从未被跟踪，要么已从跟踪中删除。Git 不会维护这些文件的历史记录。

2. _已跟踪_文件：这些文件已添加到 Git 仓库，可能处于以下修改状态：未修改、已修改或已暂存。

    1. 未修改的文件是指自上次将文件版本添加到 Git 仓库以来，没有任何新更改的文件。

    2. 已修改的文件是指与 Git 保存的最后一个文件不同的文件。

    3. 已暂存的文件是用户指定为将来提交一部分的文件（通常通过使用 git add 命令）。我们可以把这些文件想象成被灯光照亮的文件。


以下 Git 命令可以查看每个文件的状态，包括未跟踪 (untracked)、未修改 (unmodified)、已修改 (modified) 以及已暂存 (staged) 等状态。

```sh
$ git status
```

`git status` 命令对于确定存储库中每个文件的确切状态非常有用。如果您不确定哪些内容已更改以及需要提交哪些内容，该命令可以提醒您下一步的操作。

#### 暂存 (Staging) 与提交 (Committing)

_提交 (commit)_ 是工作目录在特定时间的特定快照。用户必须通过_暂存 (staging)_ 文件来明确快照中包含的具体内容。

`add` 命令允许您暂存文件（不带方括号）。

```sh
$ git add [file]
```

您还可以暂存整个文件夹，该操作会以递归方式暂存文件夹中的所有文件和子文件夹（许多 Git 命令都支持这种用法，只需将文件名替换为文件夹名即可）。暂存了所有要包含在快照中的文件后，您可以将它们作为一个整体提交，并附带一条消息。

```sh
$ git commit -m "your commit message here"
```

提交消息应具有描述性，清晰地说明本次提交对代码的修改内容。例如，您可以简要描述修复的 Bug、实现的类等等，方便日后查阅提交日志。

为了查看以前的提交，您可以使用 `log` 命令：

```sh
$ git log
```

Git 参考指南有一个关于[查看提交历史](http://git-scm.com/book/en/Git-Basics-Viewing-the-Commit-History)和在搜索特定提交时过滤日志结果的有用部分。您也可以尝试使用 `gitk`，这是一个通过命令行启动的图形用户界面 (GUI)。

从开发流程的角度来看，尽可能频繁地提交代码是一个不错的习惯。每当您对代码进行重大（甚至微小）更改时，请进行提交。如果您正在尝试一些您可能不会坚持的事情，请提交它（可能提交到不同的分支，这将在下面解释）。

**经验法则**：如果您提交 (commit)，您可以随时恢复旧代码或更改它。但是，如果您不提交 (commit)，您将无法找回旧版本。所以经常提交 (commit)！

#### 撤销更改

Git 参考有一个关于[撤消操作](http://git-scm.com/book/en/Git-Basics-Undoing-Things)的精彩部分。请注意，虽然 Git 围绕历史的概念展开，但如果使用不当，某些撤销命令可能会导致数据丢失。因此，请务必小心，并在撤销工作之前阅读有关更改效果的信息。

- 暂存尚未提交 (commit) 的文件：

    ```sh
    $ git restore --staged [file]
    ```

    这会将 `file` 的状态恢复为已修改，但保留所有更改。无需担心此命令会撤销任何已完成的工作。 这一操作类似于删除全景照片拍摄过程中拍摄的临时照片，并不会影响最终的全景图。

    为什么我们需要使用这个命令？ 假设您不小心开始跟踪您不想跟踪的文件（例如，一段不希望被追踪的个人视频）。或者，您可能对某个文件进行了一些修改，但暂时还不希望提交 (commit)。

- 修改最新提交 (commit)（更改提交消息或添加忘记的文件）：
    ```sh
    $ git add [forgotten-file]
    $ git commit --amend
    ```

    请注意，这个新的修改后的提交 (commit) 将替换之前的提交 (commit)。

- 将文件恢复到最近一次提交 (commit) 时的状态（**谨慎使用！**）：

    ```sh
    $ git restore [file]
    ```

    如果 `file` 已暂存 (staged)，您需要先取消暂存 (unstage)。

    如果您确实需要撤销之前的修改，此命令会很有用。 例如，如果您在上次提交 (commit) 后意外修改了某个文件，并希望将其恢复到提交 (commit) 时的状态。

    请务必谨慎使用此命令！ **自上次提交 (commit) 后，您对文件所做的任何修改都将丢失。** 为了安全起见，建议您先暂存 (stage) 并提交 (commit) 当前的修改，然后再使用其他命令恢复到之前的版本。

#### 获取文件的先前版本
假设你正在做一个实验，做到一半才发现方向错了，要是能回到初始的框架代码，重新开始就好了！

如果你还没有提交，可以使用之前的命令。但如果已经提交了一些更改，该怎么办呢？与其恢复最近一次提交的文件，不如试试更强大的命令：
```
git restore --source=[commit or branch] [file or folder]
```
它可以从任何时间点恢复文件。例如，假设你不小心删除了`lab1000/`目录，并且提交了这次删除操作。糟糕！要解决这个问题，可以使用以下命令来恢复框架代码：
```
git restore --source=skeleton/main lab1000/
```
这样你就可以从`lab1000`的框架代码重新开始了。

现在假设另一种情况：你在`lab1000/Cheese.txt`文件上已经有了一些进展，但你想恢复到之前几次提交的版本。你可以使用`git log`找到正确的提交，然后运行：
```
git restore --source=abcd1234efgh7890abcd1234c7ee5e7890c7ee5e lab1000/Cheese.txt
```
其中`abcd1234efgh7890abcd1234c7ee5e7890c7ee5e`是`git log`中包含我们要恢复的`lab1000/Cheese.txt`版本的提交ID。

记住，你需要重新暂存这个文件，这样在下次提交时，你的恢复操作才会被记录！

:::warning
> **如果你正在做lab 1，现在是时候回去做git练习了。**
:::

## D. 远程仓库

Git的一个特别方便的功能是能够将你的仓库副本存储在你的电脑以外的其他电脑上。回想一下，我们的快照都存储在我们的电脑上的一个秘密文件夹中。这意味着如果我们的电脑损坏或被毁，那么我们所有的快照也会丢失。

假设我们想将我们的豆腐和素肉食谱推送到另一台计算机，我们通常会使用以下命令。

```sh
$ git push origin main
```

但是，如果我们尝试这样做，我们只会收到以下消息：

```sh
fatal: 'origin' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

这是因为我们还没有告诉git将文件发送到哪里。碰巧的是，有一家名为GitHub的营利性私营公司，其业务是存储人们的仓库副本。

在61B中，我们将使用GitHub来存储我们的仓库。要在GitHub上创建一个仓库，你可能会使用他们的Web界面。但是，我们已经为你完成了此操作。

下面列出了最重要的远程仓库命令，以及一些可能还没有意义的技术描述。如果你正在做lab 1，请回到lab以了解有关这些命令的更多信息。

* `git clone [remote-repo-URL]`: 创建指定仓库的副本，但在你的本地计算机上。还会创建一个工作目录，该目录中的文件排列方式与下载仓库中的最新快照完全相同。还会记录远程仓库的URL，以进行后续的网络数据传输，并为其指定特殊的远程仓库名称“origin”。
* `git remote add [remote-repo-name] [remote-repo-URL]`: 记录网络数据传输的新位置。
* `git remote -v`: 列出所有网络数据传输的位置。
* `git pull [remote-repo-name] main`: 获取在`remote-repo-name`中看到的文件的最新副本。
* `git push [remote-repo-name] main`: 将文件的最新副本上传到`remote-repo-name`。

在本课程的大部分时间里，你将只有两个远程仓库：*origin*，它是用于保存和提交你的个人作业的远程仓库；以及*skeleton*，你将从中接收骨架代码的远程仓库。

## E. Git 分支 (高级 Git) (可选)

以下所有内容对于 61B 都是可选的。

**注意：** 在 2020 年，Git 将默认分支名称从 `master` 更改为 `main`。下面的图形尚未相应更新 - 目前，只需将 `master` 视为 `main` 的过时等效项。

![Simple Git](/img/cs61b/graph1.svg)

到目前为止，我们介绍的每个命令都适用于默认分支。此分支通常称为 `main` 分支。但是，在某些情况下，你可能需要在代码中创建分支。

分支能让你同时追踪多个不同版本的工作内容。你可以把分支想象成不同的平行宇宙。例如，一个分支是使用了链表的结果，另一个分支是使用了数组的结果。

![Git with feature branch](/img/cs61b/graph2.svg)

#### 分支的原因

以下是一些适合创建分支的场景：

- 你可能想对现有代码进行大刀阔斧的修改（也就是重构），但这可能会搞砸项目的其他部分。但你又希望能同时进行其他部分的开发，或者你还有合作伙伴，不想影响他们的工作。

- 你想开始开发项目的新功能，但不确定你的修改是否靠谱，最终能不能上线。

- 你正在和伙伴们一起开发，不想把你现在做的东西和他们搞混，即使以后你们要把这些东西合并到一起。

创建分支能让你追踪代码的多个不同版本，你可以轻松地在这些版本之间切换。等你完成某个功能模块的开发，想要把它合并到主代码里的时候，就可以把分支合并起来。

#### 示例场景

例如，假设你已经完成了项目的一半。 还有个难啃的骨头，你不知道该怎么下手。 这时候，从`main`分支拉出一个新分支，尝试你的第一个方案，也许是个好办法。

- 如果你的代码没问题，就可以把这个分支合并回主分支（`main`分支），然后提交你的项目。

- 如果你的代码跑不通，也不用担心要回滚代码，或者修改Git历史记录。 你可以简单地切换回`main`，它不会包含你的任何更改，创建另一个分支，然后尝试你的第二个想法。

这样你就可以不断尝试，直到找到最佳方案。最后，只需要把那些靠谱的分支合并回`main`就行了。

Git的官方文档里有专门介绍[分支和合并](http://git-scm.com/book/en/Git-Branching-Basic-Branching-and-Merging)的部分，里面有一些图示，解释了分支在Git底层数据结构里的组织方式。实际上，Git会把提交历史记录当成一个图来追踪，分支指针和提交记录就是图里的节点。（所以才会出现和“树”相关的术语。）

#### 创建、删除和切换分支

有个叫做`HEAD`的特殊指针，它指向你当前的工作分支。分支相关的操作会修改分支，并且改变`HEAD`的指向，这样你就能看到不同版本的文件了。

- 以下命令将从你当前的分支创建一个分支。

    ```sh
    $ git branch [new-branch-name]
    ```

- 此命令允许您通过更改 `HEAD` 指针引用的分支来从一个分支切换到另一个分支。

    ```sh
    $ git switch [destination-branch]
    ```

    默认情况下，你的初始分支会被命名为`main`。 建议你遵循这个约定。 当然，其他的分支你可以随便起名字。一般来说，最好给分支起个有意义的名字，比如`fixing-ai-heuristics`，这样方便你记住这个分支是用来做什么的。

- 您可以将前两个命令组合起来，该命令创建一个新分支，然后使用以下单个命令切换到该分支：

    ```sh
    $ git switch -c [new-branch-name]
    ```

- 您可以使用以下命令删除分支：

    ```sh
    $ git branch -d [branch-to-delete]
    ```

- 您可以使用以下命令轻松确定您所在的分支：

    ```sh
    $ git branch -v
    ```

    更具体地说，`-v` 标志还将列出每个分支上的最后一次提交。

#### 合并

很多时候，你需要把一个分支合并到另一个分支里。 举个例子，假设你对在`fixing-ai-heuristics`分支上做的工作很满意。 你的AI现在变得非常牛逼，你想把你在`fixing-ai-heuristics`分支上做的修改合并到`main`分支，并且删除`fixing-ai-heuristics`分支。

![Git with fixing-ai-heuristics branch](/img/cs61b/graph3.svg)

在这种情况下，您应该切换到`main`分支，然后将`fixing-ai-heuristics`分支合并到`main`分支。

```sh
$ git switch main
$ git merge fixing-ai-heuristics
```

这个 `merge` 命令会创建一个新的提交，将两个分支连接在一起，并更改每个分支的指针以指向这个新的提交。虽然大多数提交只有一个父提交，但这个新的合并提交有两个父提交。`main` 分支上的提交被称为它的 *第一父级提交*，而 `fixing-ai-heuristics` 分支上的提交被称为它的 *第二父级提交*。

![Git with fixing-ai-heuristics branch merged into master](/img/cs61b/graph4.svg)

#### 合并冲突

您尝试合并的两个分支可能存在冲突信息。如果两个分支上的提交更改了相同的文件，则可能发生这种情况。即使更改发生在同一文件的不同位置，Git也能足够智能地解决许多冲突。

但是，有时 Git 无法解决冲突，因为更改会影响相同的代码方法/行。在这种情况下，Git会将来自不同分支的冲突更改呈现给您，标示为*合并冲突*。

#### 解决合并冲突

Git 会告诉您哪些文件存在冲突。您需要打开存在冲突的文件并手动解决它们。完成此操作后，您必须提交以完成两个分支的合并。

具有冲突的文件将包含如下所示的片段：

```java
<<<<<<< HEAD
for (int i = 0; i < results.length; i++) {
    println(results[i]);
    println("FIX ME!");
}
=======
int[] final = int[results.length];
for (int i = 0; i < results.length - 1; i++) {
    final[i] = results[i] + 1;
    println(final[i]);
}
>>>>>>> fixing-ai-heuristics
```

基本上，您会看到两个具有相似代码片段的段落：

1. 顶部代码片段来自您运行`merge`命令时所在的分支。

2. 底部代码片段来自您试图合并进当前分支的分支。因此，该代码片段会标明来自`fixing-ai-heuristics`分支。

基本上，您需要浏览所有标记的部分，并选择您想要保留哪个代码片段。

在前面的例子中，我更喜欢底部的代码，因为我刚刚修复了 AI，而顶部的代码仍然打印 "FIX ME!"。因此，我将删除顶部段落以及多余的行，得到以下结果：

```java
int[] final = int[results.length];
for (int i = 0; i < results.length - 1; i++) {
    final[i] = results[i] + 1;
    println(final[i]);
}
```

题外话：我也不知道这段代码是怎么修复AI启发法的。别用它！没用的！真的！

对所有由冲突解决标记分隔的段落执行此操作即可解决您的冲突。对所有冲突文件执行此操作后，您可以提交。这将完成您的合并。

## F. 其他 Git 功能

还有很多其他很酷的 Git 命令。不幸的是，我们需要继续讨论远程存储库。因此，本节将只列出一些其他有趣的功能，鼓励您在自己的时间里探索：

- [储藏](http://git-scm.com/book/en/Git-Tools-Stashing)

    储藏功能允许您将更改暂时保存到一个堆栈中，而无需进行永久提交。这就像把手头的工作先搁置起来，以后再继续。与此同时，您的办公桌现在很干净。

    您为什么要使用它？

    - 您的文件可能处于混乱状态，您不想立即提交，但您也不想删除您的更改。

    - 您修改了多个文件，但您不喜欢您的更改，并且您只想将事情恢复到最近一次提交后的状态。然后，您可以 `stash` 您的代码，然后删除该储藏，而不是必须手动还原多个文件。（使用时请小心！）

    - 您可能不小心在错误的分支上修改了文件。这时，您可以`stash`您的更改，切换到目标分支，然后`unstash`这些更改，从而将它们应用到新的分支。

- [重写历史](http://git-scm.com/book/en/Git-Tools-Rewriting-History)

    假设你不仅想修改最近一次的提交，或者撤销最近提交之前的更改，还想做更复杂的操作，比如重写提交历史？你可以修改提交信息、拆分或重新排序提交。

- [变基](http://git-scm.com/book/en/Git-Branching-Rebasing)

    变基会修改特定提交的父提交，从而改变提交本身。

    `Rebase` 可以作为 `merge` 的替代方法，用于集成来自一个分支的更改到另一个分支。与 `merge` 不同，`merge` 会创建一个新的提交，该提交有两个父提交，即合并前的两个分支的最新提交。变基从一个分支中获取一组提交，并将它们全部放置在另一个分支的末尾。

    使用 `merge` 还是 `rebase` 取决于具体情况。其中一个原因是，在多人协作、分支众多的项目中，`rebase` 可以使提交历史更清晰。

- [Reset](http://git-scm.com/docs/git-reset.html)

    也许你决定希望事物恢复到一定数量的提交之前的状态。 如果你绝对确定不想要最近的几个提交，则可以使用 `reset`。 `Reset` 是一个非常细致的命令，因此在使用前请仔细阅读。

    - [Stack Overflow 上关于 `git reset` 的问答](http://stackoverflow.com/questions/2530060/can-you-explain-what-git-reset-does-in-plain-english)
    - [Reset 解密](http://git-scm.com/blog/2011/07/11/reset.html)

- [Revert](http://git-scm.com/docs/git-revert.html)

    `Revert` 允许你通过创建一个新的提交来撤销之前的提交，从而反转之前的更改。这比直接丢弃提交历史更安全，但同样请谨慎使用。

- [Cherry Pick](http://git-scm.com/docs/git-cherry-pick.html)

    `Cherry pick` 允许你选择性地应用某些提交的更改。例如，如果你有两个分支，当前分支缺少另一个分支中的一两个有用的提交，你可以使用 `cherry pick` 来获取这些提交，而无需合并整个分支。

这里没有提到更多的功能和命令。 随时探索更多并搜索答案。 几乎所有你能想到的操作都有对应的 Git 命令。

## G. 远程仓库（高级）

#### 私有仓库 vs. 公共仓库

默认情况下，GitHub 上的仓库是公共的，而不是私有的。 这意味着互联网上的任何人都可以查看公共仓库中的代码。 <u>对于所有课堂作业，你都必须使用私有仓库</u>。

在公共仓库中托管学校代码违反了本课程（以及大多数其他伯克利 EECS 课程）的学术诚信政策。 在使用 GitHub 等网站进行协作时，请牢记这一点。

截至 2019 年 1 月 7 日，[GitHub 正在提供免费的无限私有仓库](https://github.blog/2019-01-07-new-year-new-github/)，因此任何人都应该没有理由将他们的代码发布到公共仓库中。

#### 添加远程仓库

添加远程仓库是指告诉 Git 远程仓库的地址。你添加的远程仓库，不一定都有读写权限。后续会介绍如何访问和修改远程仓库中的文件，这需要先添加远程仓库。

```sh
$ git remote add [short-name] [remote-url]
```

如果你使用 HTTP，远程 URL 看起来像 `https://github.com/berkeley-cs61b/skeleton.git`，如果你使用 SSH，则看起来像 `git@github.com:berkeley-cs61b/skeleton.git`。

通常，主远程仓库的名称是 `origin`。因此，可以使用以下任一命令将 `berkeley-cs61b/skeleton` 添加为远程仓库。

```sh
$ git remote add origin https://github.com/berkeley-cs61b/skeleton.git
$ git remote add origin git@github.com:berkeley-cs61b/skeleton.git
```

添加远程仓库后，后续命令都使用其对应的短名称。

#### 重命名、删除和列出远程仓库

- 使用以下命令可以重命名远程仓库：
  
        $ git remote rename [旧名称] [新名称]
    
- 如果您不再使用某个远程仓库，可以将其删除：

        $ git remote rm [远程仓库名称]
    
- 要查看您有哪些远程仓库，可以列出它们。`-v` 标志不仅会显示远程仓库的名称，还会显示其 URL。

        $ git remote -v
    
您可以在 Pro Git 书籍中阅读更多关于[远程仓库的使用](http://git-scm.com/book/en/Git-Basics-Working-with-Remotes)的信息。

#### 克隆远程仓库

通常会有一些远程仓库包含您想要复制到本地电脑的代码。在这种情况下，您可以通过克隆远程仓库，轻松下载整个仓库及其提交历史：
```sh
$ git clone [远程仓库URL]
$ git clone [远程仓库URL] [目录名]
```
上面的命令会创建一个与远程仓库名称相同的目录。第二个命令允许您为复制的仓库指定一个不同的名称。

当您克隆一个远程仓库时，克隆的远程仓库会默认与您的本地仓库关联，并被命名为 `origin`。 这是因为克隆的远程仓库通常是您本地仓库的原始来源（`origin`）。

#### 推送提交

您可能希望将本地所做的提交推送到远程仓库，以更新其内容。您可以通过 `push` 命令来实现：
```sh
$ git push [远程仓库名称] [远程分支]
```
请注意，您将从 `HEAD` 指针当前指向的分支，推送到远程仓库的对应分支。例如，假设我克隆了一个仓库，然后在 `main` 分支上做了一些更改，我可以使用以下命令将本地更改推送到远程仓库：
```sh
$ git push origin main
```
#### 获取和拉取提交

有时，您可能需要从远程仓库获取一些本地仓库中没有的新提交。例如，您克隆了合作伙伴创建的远程仓库，并希望获取他们的最新更改。您可以通过从远程仓库执行 "fetch"（获取）或 "pull"（拉取）操作来获得这些更改。

- `fetch`：这类似于下载提交记录，但不会自动将这些更改合并到您的本地代码中。

        $ git fetch [远程仓库名称]
    
    为什么要使用 `fetch` 呢？ 您的合作伙伴可能进行了一些更改，您希望先查看这些更改，再决定是否合并到自己的代码中。`fetch` 操作只会更新远程仓库在您本地的引用，而不会自动合并这些更改。

    举个更具体的例子，假设您的合作伙伴在远程仓库上创建了一个名为 `fixing-ai-heuristics` 的新分支。 您可以通过以下步骤来查看该分支上的提交记录：
    ```shell
    $ git fetch origin
    $ git branch review-ai-fix origin/fixing-ai-heuristics
    $ git switch review-ai-fix
    ```
    第二个命令创建一个名为 `review-ai-fix` 的新分支，该分支_跟踪_ `origin` 远程仓库上的 `fixing-ai-heuristics` 分支。

- `pull`：这相当于执行 `fetch` 命令后再执行 `merge` 命令。`pull` 命令不仅会获取最新的更改，还会自动将这些更改合并到您当前的 `HEAD` 分支中。

        $ git pull [远程仓库名称] [远程分支名称]
    
    假设我的合作伙伴（老板）已经将一些提交推送到我们共享的远程仓库的 `main` 分支，这些提交修复了我们的 AI 启发式算法。 我确定这些更改不会破坏我的代码，因此可以直接使用 `pull` 命令将其拉取并合并到我自己的代码中。

        $ git pull origin main
    
## H. 远程仓库练习

对于此跟随示例，您将需要一个合作伙伴。您将与您的合作伙伴在一个远程仓库上工作，并且必须处理诸如合并冲突之类的事情。另请注意，你们都需要在同一服务（无论是 GitHub 还是 Bitbucket）上拥有帐户。

1. 合作伙伴 1 将在 GitHub 或 Bitbucket 上创建一个私有仓库，并将合作伙伴 2 添加为协作者。此仓库可以称为 `learning-git`。

    注意：申请 [GitHub Education](https://education.github.com/) 的折扣可能需要一段时间，因此仅在此练习中使用公共仓库是可以接受的。在所有其他作业中，您都必须使用私有仓库。

    此外，请勿将您的合作伙伴添加到 [Berkeley-CS61B](https://github.com/Berkeley-CS61B) 组织下的个人仓库中。
2. 合作者 2 将创建一个 `README` 文件，提交后推送到 `learning-git` 远程仓库。

    ![练习 2.2](/img/cs61b/Exercise2.2.png)

3. 合作者 2 还会添加合作者 1 创建的远程仓库地址，并推送这个新的提交。

    ![GitHub 远程 URL](/img/cs61b/github-remote-url.png)

    无论使用 GitHub 还是 Bitbucket，你都可以在仓库主页找到远程仓库的 URL。

    ![练习 2.3](/img/cs61b/Exercise2.3.png)

4. 合作者 1 现在将远程仓库克隆到自己的机器上，然后在 README 文件末尾添加一行。(注意：此时图片可能有些混乱，因为我同时扮演两个合作者的角色。)

    ![练习 2.4](/img/cs61b/Exercise2.4.png)

5. 合作者 1 将提交此更改，并推送到远程仓库。

    ![练习 2.5](/img/cs61b/Exercise2.5.png)

6. 合作者 2 也会类似地在 README 文件末尾添加一行，并提交此更改。

    ![练习 2.6](/img/cs61b/Exercise2.6.png)

7. 合作者 2 现在执行拉取操作，会发现存在合并冲突。

    ![练习 2.7](/img/cs61b/Exercise2.7.png)

8. 合作者 2 应该通过重新排列行来解决合并冲突。然后，合作者 2 应该暂存 `README` 文件，提交并推送以完成。

    ![练习 2.8](/img/cs61b/Exercise2.8.png)

9. 合作者 1 现在可以拉取，获得两个新的提交：添加的行和合并提交。现在，两个合作者都已同步到最新状态。

    ![练习 2.9](/img/cs61b/Exercise2.9.png)

## I. 结论

#### 远程仓库进阶

这些添加/删除远程仓库、推送提交以及获取/拉取更改的简单命令可以与您已学到的关于本地仓库的所有命令结合使用，从而为您提供一个强大的工具包，以便与他人协作。

GitHub 还有一些非常酷的功能，可以帮助项目开发：

- [Fork 一个仓库](https://help.github.com/articles/fork-a-repo)

- [同步一个 Fork](https://help.github.com/articles/syncing-a-fork)

- [使用 Pull Requests](https://help.github.com/articles/using-pull-requests)

- [使用 Issues](https://guides.github.com/features/issues/)

#### 额外阅读

对于那些发现这个主题有趣的人，请查看这些额外的资源！但请记住，学习有效使用 Git 的最佳方法是开始将其融入您自己的编码工作流程中！祝你好运，祝你有个章鱼般美好的一天！

1. [Git 文档](http://git-scm.com/doc) 确实非常好且清晰，并且 Scott Chacon 撰写了一本很棒的 Pro Git 书籍。

2. [Hacker's Guide to Git](http://wildlyinaccurate.com/a-hackers-guide-to-git) 是对 Git 工作原理的一个非常友好的介绍。它展示了提交和分支的结构，并解释了一些命令的工作原理。

3. [Learn Git Branching](http://pcottle.github.io/learnGitBranching/) 是一个有趣且互动的教程，可以将 Git 命令可视化。

## J. 高级 Git 功能

以下是一些更高级的功能，可能会让您的生活更轻松。一旦您掌握了 git 的基本功能，您就会开始注意到一些常见的任务有点繁琐。以下是一些您可以考虑使用的内置功能。

#### 变基 (Rebase)

Git 主要是关于协作编程的，所以通常你会发现自己需要处理合并冲突。在大多数情况下，您所做的更改与冲突的提交是分开的，因此您可以将您的提交放在所有新提交之上。但是，git 会合并这两个版本并添加一个额外的提交，让您知道您已合并。这非常烦人，并导致提交历史非常混乱。这就是 **变基** 的魔力发挥作用的地方。

当您将更改推送到 Github 并且远程副本已被修改时，系统会要求您拉取更改。这是您通常会遇到合并冲突的地方。相反，使用变基标志拉取：
```sh
$ git pull --rebase origin main
```

就这么简单！来自服务器的更改将应用于您的工作副本，并且您的提交将堆叠在顶部。

#### 压缩提交 (Squashing Commits)
你可能会遇到这样的情况：创建了很多小的提交，而这些提交包含的相关更改其实可以合并为一个。这时，你就可以用 `rebase` 命令来整理这些提交。假设你有四个想要合并的提交，你可以输入以下命令：
```sh
$ git rebase -i HEAD~4
```

接下来，系统会提示你选择一个提交作为基础，将其他提交合并到这个提交上，并选择需要合并的提交：

```sh
pick 01d1124 Adding license
pick 6340aaa Moving license into its own file
pick ebfd367 Jekyll has become self-aware.
pick 30e0ccb Changed the tagline in the binary, too.

# Rebase 60709da..30e0ccb onto 60709da
#
# Commands:
#  p, pick = use commit
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

最好选择最上面的那个提交，然后把其他的提交都合并进去。你可以通过修改文本文件，改成下面这样来实现：

```sh
pick 01d1124 Adding license
squash 6340aaa Moving license into its own file
squash ebfd367 Jekyll has become self-aware.
squash 30e0ccb Changed the tagline in the binary, too.

# Rebase 60709da..30e0ccb onto 60709da
#
# Commands:
#  p, pick = use commit
#  e, edit = use commit, but stop for amending
#
# If you remove a line here THAT COMMIT WILL BE LOST.
# However, if you remove everything, the rebase will be aborted.
#
```

这样一来，所有的小提交就合并成了一个，你的日志文件也更简洁了。

#### 最后的办法：克隆一个全新的仓库副本

如果所有方法都行不通，而你只想推送和提交代码，可以尝试：

1. 关闭 IntelliJ。
2. 重命名你的旧仓库文件夹（例如，将 sp23-s208 改为 sp23-s208-busted）。
3. 按照 Lab 1 的说明，克隆一个新的仓库副本（例如，sp23-s208）。
4. 将需要的文件从旧的（损坏的）副本复制到新的副本中。

[此视频](https://www.youtube.com/watch?v=Squ8TmG5mX0)中提供了此过程的视频演示。
