---
title: Git WTFS
---

本文档旨在帮助您解决在 Git 中经常遇到的奇怪技术故障情况 (WTFS)。它会随着问题的出现而不断更新。

## fatal: refusing to merge unrelated histories (致命错误：拒绝合并不相关的历史分支)

通常，当您从主干代码（skeleton code）拉取更新后，如果其他人修改了主干代码，就会发生这种情况。使用 `--allow-unrelated-histories` 进行拉取，例如：

```console
$ git pull skeleton main --allow-unrelated-histories --no-rebase
```

您可能需要[解决一些由此产生的合并冲突](#what-are-all-these-symbols-in-my-code)。

或者，如果您从您自己的 s\*\*\* 学生仓库（例如，在不同的计算机上）拉取，

```console
$ git pull origin main --allow-unrelated-histories --no-rebase
```

## HEAD detached at [...] ?? (HEAD 处于分离状态 [...] ??)

**注意：** 从 FA23 课程开始，由于推荐使用 `git restore` 命令，此问题应该会大大减少。

```console
$ git status
HEAD detached at 1193e06
Untracked files:
  (use "git add <file>..." to include in what will be commited)

        ../seitan/

nothing added to commit but untracked files preset (use "git add" to track)
```

很可能，您可能使用了 `git checkout` 命令，但没有指定文件（或目录）。没关系！如果您没有进行任何更改，您可以使用命令 `git switch main` 来修复此问题。如果一切正常，您应该看到类似以下的消息：

```console
$ git switch main
Previous HEAD position was b405852... added tofu recipes
Switched to branch 'main'
```

如果您进行了一些更改（即使用命令 `git status` 告诉您您已修改了一些文件，如下图所示），则需要执行更多步骤。

```console
$ git status
HEAD detached at 1193e06
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)

        modified: kung_pao_tofu.txt

Untracked files:
  (use "git add <file>..." to include in what will be commited)

        ../seitan/

no changes added to commit (use "git add" and/or "git commit -a")
```

首先，使用命令 `git stash`。您的修改可能已经神奇地消失了！别担心 - 我们稍后会找回它们！

```console
$ git stash
Saved working directory and index state WIP on (no branch): 1193e06 added tofu
recipes HEAD is now at 1193e06 added tofu recipes

$ git status
HEAD detached at 1193e06
Untracked files:
  (use "git add <file>..." to include in what will be commited)

        ../seitan/

nothing added to commit but untracked files preset (use "git add" to track)
```

从这里开始，使用命令 `git switch main`。您应该会看到之前的正常提示信息：

```console
$ git switch main
Previous HEAD position was b405852... added tofu recipes
Switched to branch 'main'
```

快完成了！让我们去获取我们的更改。使用 `git stash pop`。等等，出现冲突了！（并非总是如此。如果没有冲突，就可以跳过以下步骤。）

```console
$ git stash pop
Auto-merging tofu/kung_pao_tofu.txt
CONFLICT (content): Merge conflict in tofu/kung_pao_tofu.txt

$ git status
On branch main
Unmerged paths:
  (use "git reset HEAD <file>..." to unstage)
  (use "git add <file>..." to mark resolution)

        both modified: kung_pao_tofu.txt

Untracked files:
  (use "git add <file>..." to include in what will be committed)

        ../seitan/

no changes added to commit (use "git add" and/or "git commit -a")
```

现在使用 `git stash drop`.
```console
$ git stash drop
Dropped refs/stash@{0} (57f0ac5c5480964cdf29a94ed6b87e38da823488)<Paste>
```
现在我们需要解决这个合并冲突了。要学习如何解决，请查看[这里](#what-are-all-these-symbols-in-my-code)！

## 错误：无法推送某些引用？

有时，当与他人协作时，推送时会看到如下消息：
```console
$ git push origin main
To https://github.com/gilbertghang/recipes.git
 ! [rejected]     main -> main (non-fast-forward)
error: failed to push some refs to 'https://github.com/gilbertghang/recipes.git"
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```
这里发生的情况是，您的远程仓库（也就是您在 GitHub 上的仓库）包含您的本地仓库没有的提交。幸运的是，Git 会很贴心地提示您如何修复这些错误：仔细阅读错误信息，您会发现它会提示您使用 `git pull` 命令。照着做，解决掉所有[合并冲突](#what-are-all-these-symbols-in-my-code)，然后推送。搞定！

## 我的代码里这些 >>>> 符号是干嘛的？

有时，当您从存储库中拉取时，您会在拉取时看到如下消息：
```console
$ git pull origin main
From github.com:Berkeley-CS61B/course-materials-sp16
 * branch            main     -> FETCH_HEAD
Auto-merging proj/proj0/solution/canonical/Planet.java
CONFLICT (content): Merge conflict in proj/proj0/solution/canonical/Planet.java
Automatic merge failed; fix conflicts and then commit the result.
```

这里的问题是，您电脑上的代码和您要拉取的远程仓库里的代码有冲突，Git搞不清楚怎么解决，所以拒绝覆盖您的本地代码。

但是，当您打开 Planet.java 时，您会看到一些疯狂的垃圾，例如：
```java
    public Planet(Planet p) {
<<<<<<< HEAD
        this.xPos = p.xPos;
        this.yPos = p.yPos;
=======
        this.xxPos = p.xxPos;
        this.yyPos = p.yyPos;
>>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed
```
这说明有冲突！`<<<<<<< HEAD` 和 `=======` 之间的内容是您电脑上的，`=======` 和 `>>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed` 之间的内容是远程服务器上的。

您需要做的就是找到这些标记，然后自己解决冲突。如果远程仓库的内容是正确的，就把 `<<<<<<< HEAD` 和 `=======` 之间的内容，以及 `>>>>>>> 27ddd0c71515e5cfc7f58a43bcf0e2144c127aed` 这个标记删掉，留下：
```java
public Planet(Planet p) {
    this.xxPos = p.xxPos;
    this.yyPos = p.yyPos;
```
解决完所有冲突后，把手动修改过的文件都添加并提交，像这样：
```console
git add Planet.java
git commit -m "resolved merge conflict"
git push origin main
```
## 错误：您还有未完成的合并 (MERGE_HEAD exists)。

如果您看到如下消息：
```
error: You have not concluded your merge (MERGE_HEAD exists).
hint: Please, commit your changes before merging.
fatal: Exiting because of unfinished merge.
```
先添加并提交您当前的修改，然后再拉取。

如果再次拉取后，终端提示类似“Please enter a commit message to explain why this merge is necessary”的信息，请参考后面的章节。

## 请填写提交信息，说明为何需要合并

如果您看到如下信息：

```
Merge branch 'main' of https://github.com/Berkeley-CS61B/skeleton-sp24
# Please enter a commit message to explain why this merge is necessary,
# especially if it merges an updated upstream into a topic branch.
#
# Lines starting with '#' will be ignored, and an empty message aborts
# the commit.
```

Git 已经打开了一个终端文本编辑器，让你填写提交信息。你可以直接用默认的提交信息，然后退出编辑器。

如果您在终端底部看到类似以下内容：

```
^G Get Help      ^O WriteOut      ^R Read File      ^Y Prev Pg      ^C Cur Pos
```

这说明你正在使用 Nano 文本编辑器。退出的话，按 Ctrl+X (同时按)。

如果终端左边出现一堆波浪线 (`~` 符号)，并且底部显示类似：

```
".git/COMMIT_EDITMSG" 9L, 273C      13,1      All
```

这说明你正在使用 Vim 文本编辑器。要保存并退出，输入 `:wq` (先按冒号，再按字母 w 和 q)。

## fatal: 'skeleton' 似乎不是一个 Git 仓库

如果您看到如下信息：

```
fatal: 'skeleton' does not appear to be a git repository
fatal: Could not read from remote repository.

Please make sure you have the correct access rights and the repository exists.
```

Git 可能找不到 skeleton 仓库。

尝试运行 `git remote -v`。如果你的仓库设置没问题，应该能看到：

```
origin  git@github.com:Berkeley-CS61B/sp24-s*** (fetch)
origin  git@github.com:Berkeley-CS61B/sp24-s*** (push)
skeleton  https://github.com/Berkeley-CS61B/skeleton-sp24.git (fetch)
skeleton  https://github.com/Berkeley-CS61B/skeleton-sp24.git (push)
```

如果只看到 `origin` 的两行，没看到 `skeleton` 的，说明 Git 找不到 skeleton 仓库。

要解决这个问题，运行：

```
git remote add skeleton https://github.com/Berkeley-CS61B/skeleton-sp24.git
```

然后再次运行 `git remote -v`，确认能看到 `origin` 和 `skeleton` 各自对应的两行。
