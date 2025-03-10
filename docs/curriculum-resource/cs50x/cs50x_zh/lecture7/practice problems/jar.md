---
sidebar_position: 3
description: cs50x 练习题 jar
title: jar
---

# Cookie Jar - CS50x 2023

![Cookie Monster](/img/cs50/giphy1.gif )

出自：《芝麻街》

假设你想实现一个饼干罐 ([cookie jar]) 来存储饼干。在一个名为 `jar.py` 的文件中，实现一个名为 `Jar` 的 `class`，包含以下方法：

-   `__init__` 应该使用给定的 `capacity` 初始化一个 cookie jar，`capacity` 代表饼干罐的最大容量（可容纳的饼干数量）。但是，如果 `capacity` 不是一个非负 `int`，`__init__` 应该引发一个 `ValueError` (通过 `raise ValueError`)。
-   `__str__` 应该返回一个 `str`，其中包含 `![🍪](/img/cs50/1f36a.png )`，其中 是 cookie jar 中的饼干数量。例如，如果 cookie jar 中有 3 个饼干，那么 `str` 应该返回 `"![🍪](/img/cs50/1f36a.png )![🍪](/img/cs50/1f36a.png )![🍪](/img/cs50/1f36a.png )"`
-   `deposit` 应该向 cookie jar 中添加 `n` 个饼干。但是，如果添加这么多饼干会超过 cookie jar 的容量，`deposit` 应该引发一个 `ValueError`。
-   `withdraw` 应该从 cookie jar 中移除 `n` 个饼干。但是，如果 cookie jar 中没有那么多饼干，`withdraw` 应该引发一个 `ValueError`。
-   `capacity` 应该返回 cookie jar 的容量。
-   `size` 应该返回 cookie jar 中实际的饼干数量。

请按照以下结构定义你的 `class`。 你不能更改这些方法的参数，但你可以添加你自己的方法。

```
class Jar:
    def __init__(self, capacity=12):
        ...

    def __str__(self):
        ...

    def deposit(self, n):
        ...

    def withdraw(self, n):
        ...

    @property
    def capacity(self):
        ...

    @property
    def size(self):
        ...

```

## [演示](#demo)

你可以选择实现一个 `main` 函数来测试你的类，但这不是必须的。因此，我们只能演示这些内容！

![Cookie Monster](/img/cs50/giphy2.gif )

出自：《芝麻街》

## [开始之前](#before-you-begin)

1.  使用你的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/6/jar.zip`，然后按 Enter 键，以便在你的 codespace 中下载一个名为 `jar.zip` 的 zip 文件。 请务必注意 `wget` 命令与 URL 之间的空格，以及URL本身是否正确！
4.  然后执行 `unzip jar.zip` 命令，解压得到名为 `jar` 的文件夹。
5.  删除 ZIP 文件：执行 `rm jar.zip` 命令，并在提示符下输入 `y` 确认删除。

## [如何测试](#how-to-test)

以下是如何手动测试你的代码：

-   在你的 `jar.py` 文件中定义一个 `main` 函数，在其中创建一个新的 `Jar` 实例，如 `jar = Jar()`。 通过执行 `print(str(jar.capacity))` 语句，检查 `jar` 实例的容量是否正确。 请确保在 `jar.py` 文件的末尾调用 `main()` 函数。
-   通过调用 `print(str(jar))` 测试你的 `__str__` 函数是否按预期工作。
-   尝试调用 `jar.deposit(2)` 方法，向饼干罐中放入两个饼干。 此时，再次执行 `print(str(jar))` 语句，应该会显示你放入的饼干数量。
-   尝试调用 `jar.withdraw(1)` 方法，从饼干罐中取出一个饼干。 现在调用 `print(str(jar))` 应该显示比你之前拥有的饼干少一个。
-   测试能否取出超过饼干罐现有数量的饼干，以及能否放入超过饼干罐容量的饼干。

这个没有 `check50`！

## [如何提交](#how-to-submit)

无需提交！ 这是一个练习题。
