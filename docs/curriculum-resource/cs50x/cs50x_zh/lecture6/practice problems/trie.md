---
sidebar_position: 1
description: cs50x 练习题 - trie
title: trie
---

# Trie - CS50x 2023

## [学习目标](#learning-goals)

-   进一步了解数据结构
-   使用 Trie

![puppies](/img/cs50/puppies.jpeg )

## [背景](#background)

假设你刚领养了一只小狗，正在想给它取什么名字。你在网上找到一个文件，其中包含大约 150 个最受欢迎的狗名！你想看看你考虑的名字是不是在列表里。因为Trie很适合用来查找数据，我们已经在`trie.c`里给你准备好了一部分代码 (就差一点点啦!)。其中有个`check`函数还没写完。你的任务就是把这个函数写完。

## [演示](#demo)

## [开始](#getting-started)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  在终端里输入`cd`命令。
3.  输入命令 `wget https://cdn.cs50.net/2022/fall/labs/5/trie.zip`，然后按回车键，就可以在你的 codespace 里下载一个叫 `trie.zip` 的压缩包。注意 `wget` 后面要空一格，URL 也别输错了哦！
4.  然后输入 `unzip trie.zip` 来解压出一个叫 `trie` 的文件夹。
5.  现在可以输入 `rm trie.zip` 删除压缩包了，它会问你 `y/n`，输入 `y` 然后按回车就行。

## [实现细节](#implementation-details)

注意，Trie是用几个叫做 `node` 的 `struct` 结构体巧妙实现的。每个 `node` 都有一个大小为26的数组，可以存放子节点，每个字母都对应一个子节点！往Trie里加单词的时候，每个字母都会对应一个新的 `node` 子节点，第一个字母的父节点是 `root`，后面的字母的父节点就是前一个字母。在单词的最后一个字母对应的 `node` 里，我们会把 `is_word` 设为 `true`。现在，要查一个单词在不在Trie里，只需要顺着Trie把这个单词的每个字母都走一遍就行了。如果走到最后一个字母，发现 `is_word` 是 `true`，那就说明这个名字在Trie里！

-   提示
    
    -   你可以先定义一个 `node` 类型的指针 `cursor`，让它指向Trie的 `root`。
    -   遍历 `word` 里的每个字母，找到它对应的数组下标。
    -   你可以通过字母的下标来检查 `children[index]` 是不是 `NULL`，如果是，就说明Trie里没有这个词。
    -   如果 `children[index]` 不是 `NULL`，就把 `cursor` 指向它，然后继续找下一个字母。
    -   记住，查找的时候不用区分大小写。 比如 `A` 和 `a` 都对应 0，`B` 和 `b` 都对应 1，以此类推。
    

## [思考题](#thought-question)

-   什么时候你会考虑用Trie这种数据结构？ 又有什么时候不该用它呢？

## [如何测试你的代码](#how-to-test-your-code)

你的程序运行结果应该像下面这样。

```
trie/ $ ./trie dog_names.txt
Check word: Molly
Found!

```

```
trie/ $ ./trie dog_names.txt
Check word: Lucy
Found!

```

```
trie/ $ ./trie dog_names.txt
Check word: Prudence
Not Found.

```

这次没有 `check50`！

想检查一下你的代码风格对不对？ 在 `$` 提示符后面输入下面的命令。

## [如何提交](#how-to-submit)

不用提交！ 随便练练手。
