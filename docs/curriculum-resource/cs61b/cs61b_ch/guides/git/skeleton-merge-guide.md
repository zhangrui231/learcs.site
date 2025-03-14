---
title: "Git Pull Skeleton Merge Guide"
---

如果你在拉取最新的骨架代码，通常会遇到“合并”（merge）的情况，这在 Git 指南的高级部分有详细介绍。

系统会自动打开一个文本编辑器，让你填写一条关于本次合并原因的说明。

在文本编辑器的第一行，输入类似“我只是想拉取新的骨架代码”这样的说明，或者任何你想写的内容。你将输入的文本会出现在以下内容之上：

```
# Please enter the commit message for your changes. Lines starting
# with '#' will be ignored, and an empty message aborts the commit.
```

在文件顶部输入说明后，**保存并关闭文本编辑器**，合并操作就会完成。

根据你安装 Git 的方式，你可能会进入像 `nano` 或 `vim` 这样的_命令行_文本编辑器。如果遇到这种情况，并且你之前没用过命令行文本编辑器，别慌！Nano 相对来说比较容易上手。只需直接输入说明，然后按“ctrl-o”保存，再按“ctrl-x”退出即可。

如果你按照实验 1 的步骤正确配置，应该不会进入 `vim` 编辑器。但如果你还是进入了 vim，可以看看这个 [YouTube 上的教程](https://www.youtube.com/watch?v=ebZzVAZC7tc) 或者 [Stack Overflow 上的帖子](http://stackoverflow.com/questions/11828270/how-to-exit-the-vim-editor)，了解一下解决方法。

如果还是搞不定，就在 Ed 上发帖求助，肯定会有人帮忙的。

成功合并后，你应该能看到一个名为 proj0 的目录，里面包含了和[骨架代码仓库](https://github.com/Berkeley-CS61B/skeleton-sp19/tree/master/proj0)内容一致的文件。

如果提示有合并冲突，请参考 [Git WTFS 指南](wtfs.md)。

如果遇到任何错误，先停下来，仔细阅读 Git 指南，或者去 OH 或 Ed 上寻求帮助，解决问题。比起自己瞎试命令，这样能省去很多不必要的麻烦。如果在 Google 上看到有人建议用 `git push -f`，**千万别**用！ 这么做可能会给 Git 带来大麻烦。
