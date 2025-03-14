---
title: FAQ
---

## 重新 pull 骨架代码后遇到合并冲突了

首先，添加并提交您的本地更改，这样可以确保 `git status` 显示你的工作目录是干净的。

然后，参考 [Git WTFs](../../guides/git/wtfs.md) 中关于解决合并冲突的部分。你需要合并本地的修改 (可能包括 `BombMain` 密码) 和骨架代码里的 bug 修复。

解决完文件里的冲突后，你需要重新 add 和 commit 这些文件，才能完成合并。

如果您不确定该怎么做，请来参加答疑或者实验课！

## 我的 IntelliJ 里一片红

首先，请确保您已正确导入库。如果忘了怎么操作，可以回头看看 [作业流程](../../guides/assignment-workflow/index.md#opening-in-intellij) 的第 5 步。

如果这不起作用，请确保 `src` 是蓝色，`tests` 是绿色。参考 [IntelliJ WTFS](../../guides/intellij/wtfs/index.md) 来正确设置 `src` 和 `tests` 文件夹。
