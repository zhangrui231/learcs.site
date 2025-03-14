---
title: How to Use the Terminal
---

## 终端使用指南

以下是在 CS61B 课程中你需要掌握的一些常用命令：

### `cd`: 更改你的工作目录

  ```shell 
  cd hw 
  ```                                                                                                       

这个命令会把当前目录切换到 `hw` 目录。

### `pwd`: 打印工作目录

  ```shell                                                                                                  
  pwd 
  ```                                                                                                       

  如果你不确定当前目录的位置，可以使用这个命令来显示完整的绝对路径。

### 简写命令

以下是一些常用的简写方式：

- `~`: 你的主目录的简写

- `.`: 你当前目录的简写

  ```shell                                                                                                  
  cd .       
  ```                                                                                                       

  这个命令会将当前目录切换到当前目录，实际上什么也不会发生。

- `..`: 你当前目录上一级父目录的简写

  ```shell                                                                                                  
  cd ..
  ```                                                                                                       

  这个命令会将当前目录切换到上一级目录。例如，如果当前目录是 `/workspace/day1/`，执行该命令后会进入 `/workspace/` 目录。

### `ls`: 列出目录中的文件/文件夹

  ```shell                                                                                                  
  ls
  ```                                                                                                       

  此命令将列出你当前目录中的所有文件和文件夹。 你也可以使用 `ls <目录名>` 来查看其他目录的内容。例如，试试 `ls ..`!

### `mkdir`: 创建一个目录

  ```shell                                                                                                  
  mkdir [dirname]
  ```                                                                                                       

  此命令将在当前目录中创建一个名为 `dirname` 的新目录。 你可以把目录想象成在你的电脑上创建一个新的文件夹。

### `touch`: 创建一个新文件

  ```shell                                                                                                  
  touch [filename]
  ```                                                                                                       

  此命令将在当前目录中创建一个名为 `filename` 的文件。 例如，要创建一个文本文件，可以运行 `touch filename.txt` 命令。

### `rm`: 移除（删除）一个文件

  ```shell                                                                                                  
  rm [file]
  ```                                                                                                       

  这个命令会删除当前目录下的 `file` 文件。如果 `file` 文件不存在，则会报错。

  ```shell                                                                                                  
  rm -r [dir]
  ```                                                                                                       

  这个命令会递归删除 `dir` 目录，也就是会删除 `dir` 目录下的所有文件和子目录，以及 `dir` 目录本身。请务必谨慎使用！

### `cat`: 显示文件的内容

  ```shell                                                                                                  
  cat [file]
  ```                                                                                                       

  对于较大的文件（可能会导致终端输出过多内容）或者非文本文件（可能会显示乱码），这个命令的用处不大。

### `cp`: 复制一个文件

  ```shell                                                                                                  
  cp lab1/original lab2/duplicate
  ```                                                                                                       

  这个命令会将 `lab1` 目录下的 `original` 文件复制到 `lab2` 目录下，并命名为 `duplicate`。

### `mv`: 移动或重命名一个文件

  ```shell                                                                                                  
  mv lab1/original lab2/original
  ```                                                                                                       

  这个命令会将 `lab1` 目录下的 `original` 文件移动到 `lab2` 目录下。与 `cp` 命令不同，`mv` 命令执行后，`lab1` 目录下将不再存在 `original` 文件。

  ```shell                                                                                                  
  mv lab1/original lab1/newname
  ```                                                                                                       

  这个命令不会移动文件，而是将 `original` 文件重命名为 `newname`。

<details markdown="block">                                                                                  
<summary markdown="block">                                                                                  

**以下是在终端中使用的一些小技巧，希望能帮助你提高效率。**

</summary>                                                                                                  

- 你可以使用 Tab 键来自动补全文件名和目录名。
- 你可以复制粘贴内容到终端。在 Mac 上可以直接使用快捷键，在 Windows 上则需要右键点击进行复制和粘贴。
- 你可以通过按键盘上的向上箭头键来查找之前执行过的命令。如果按过头了，可以使用向下箭头键返回。
- 你可以同时打开多个终端窗口，这在你需要同时运行多个任务时会很有帮助。

</details>
