---
sidebar_position: 4
description: cs50x 替换问题
title: 替换
---

# 替换 - CS50x 2023

对于这个问题，你将编写一个程序来实现替换密码，像下面这样。

```
$ ./substitution JTREKYAVOGDXPSNCUIZLFBMWHQ
plaintext:  HELLO
ciphertext: VKXXN

```

## [入门](#getting-started)

打开 [VS Code](https://cs50.dev/)。

首先点击你的终端窗口，然后单独执行 `cd`。 你会发现它的“提示符”类似于下面。

点击该终端窗口，然后执行

```
wget https://cdn.cs50.net/2022/fall/psets/2/substitution.zip

```

然后按 Enter 键，为了在你的 codespace 中下载一个名为 `substitution.zip` 的 ZIP 文件。 注意不要漏掉 `wget` 和 URL 之间的空格以及任何其他字符！

现在执行

来创建一个名为 `substitution` 的文件夹。 你不再需要 ZIP 文件，因此你可以执行

并在提示符下回复“y”，然后按 Enter 键来删除你下载的 ZIP 文件。

现在输入

然后按 Enter 键进入该目录。 你的提示符现在应类似于下面。

如果一切顺利，你应该执行

并看到一个名为 `substitution.c` 的文件。 执行 `code substitution.c` 应该会打开该文件，你将在其中键入此问题集的代码。 如果没有，回头检查一下，看看哪里错了！

## [背景](#background)

在替换密码中，我们通过将每个字母替换为另一个字母来“加密”（即，以可逆的方式隐藏）消息。 为此，我们使用一个_密钥_：在本例中，是将字母表中的每个字母映射到加密时应对应的字母。 要“解密”消息，消息的接收者需要知道密钥，以便他们可以反转该过程：将加密的文本（通常称为_密文_）转换回原始消息（通常称为_明文_）。

例如，密钥可以是字符串 `NQXPOMAFTRHLZGECYJIUWSKDVB`。 这个 26 个字符的密钥意味着 `A`（字母表的第一个字母）应该转换为 `N`（密钥的第一个字符），`B`（字母表的第二个字母）应该转换为 `Q`（密钥的第二个字符），等等。

然后，像 `HELLO` 这样的消息将被加密为 `FOLLE`，根据密钥确定的映射替换每个字母。

让我们编写一个名为 `substitution` 的程序，让你能够使用替换密码加密消息。 当用户运行程序时，他们应该通过提供命令行参数来决定在运行时提供的秘密消息中使用哪个密钥。

以下是该程序可能工作的一些示例。 例如，如果用户输入密钥 `YTNSHKVEFXRBAUQZCLWDMIPGJO` 和明文 `HELLO`：

```
$ ./substitution YTNSHKVEFXRBAUQZCLWDMIPGJO
plaintext:  HELLO
ciphertext: EHBBQ

```

如果用户提供密钥 `VCHPRZGJNTLSKFBDQWAXEUYMOI` 和明文 `hello, world`，程序的工作方式如下：

```
$ ./substitution VCHPRZGJNTLSKFBDQWAXEUYMOI
plaintext:  hello, world
ciphertext: jrssb, ybwsp

```

请注意，逗号和空格都没有被密码替换。 只替换字母字符！ 另请注意，原始消息的大小写已保留。 小写字母保持小写，大写字母保持大写。

密钥本身中的字符是大写还是小写并不重要。 密钥 `VCHPRZGJNTLSKFBDQWAXEUYMOI` 在功能上与密钥 `vchprzgjntlskfbdqwaxeuymoi` 相同（就像 `VcHpRzGjNtLsKfBdQwAxEuYmOi` 一样）。

如果用户没有提供有效的密钥怎么办？ 该程序应该用错误消息解释：

```
$ ./substitution ABC
Key must contain 26 characters.

```

或者真的不配合，根本没有提供任何命令行参数？ 该程序应该提醒用户如何使用它：

```
$ ./substitution
Usage: ./substitution key

```

或者真的，真的不配合，提供了太多的命令行参数？ 该程序还应该提醒用户如何使用它：

```
$ ./substitution 1 2 3
Usage: ./substitution key

```

观看视频

## [规范](#specification)

设计并实现一个程序 `substitution`，该程序使用替换密码加密消息。
-   请在名为 `substitution` 的目录下，创建一个名为 `substitution.c` 的文件来实现你的程序。
-   密钥本身应不区分大小写，即密钥中字符的大小写不应影响程序的行为。
-   如果程序在没有或多于一个命令行参数时执行，应使用 `printf` 打印自定义错误信息，并立即从 `main` 函数返回 `1` (表示错误)。
-   如果密钥无效（例如，长度不足 26 个字符、包含非字母字符或存在重复字母），应使用 `printf` 打印自定义错误信息，并立即从 `main` 函数返回 `1`。
-   程序必须先输出 `plaintext:` (不包含换行符)，然后使用 `get_string` 函数提示用户输入明文。
-   程序必须输出 `ciphertext:` (不包含换行符)，后跟根据密钥转换后的密文。明文字母字符应按密钥规则转换为相应的密文字符，非字母字符保持不变。
-   程序必须保持大小写：明文中的大写字母在密文中仍为大写，小写字母仍为小写。
-   输出密文后，程序应打印一个换行符，并通过从 `main` 函数返回 `0` 来结束运行。

你可能会发现 `ctype.h` 中定义的一些函数对解决问题很有帮助，详情请参考 [manual.cs50.io](https://manual.cs50.io/)。
