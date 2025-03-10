---
sidebar_position: 5
description: cs50x 问题集 credit
title: credit
---

# Credit - CS50x 2023

编写一个程序来验证提供的信用卡号是否符合Luhn算法。

```
$ python credit.py
Number: 378282246310005
AMEX

```

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击您的终端窗口，然后单独执行 `cd`。您终端窗口的提示符应该类似如下：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/6/sentimental-credit.zip

```

以便将名为 `sentimental-credit.zip` 的 ZIP 文件下载到您的代码空间。

然后执行

```
unzip sentimental-credit.zip

```

以创建一个名为 `sentimental-credit` 的文件夹。您不再需要该 ZIP 文件，因此您可以执行

```
rm sentimental-credit.zip

```

并在提示符下输入“y”后按 Enter 键，以删除您下载的 ZIP 文件。

现在输入

然后按回车键进入该目录。您的提示符现在应类似于以下内容。

单独执行 `ls`，您应该看到 `credit.py`。如果遇到问题，请重复上述步骤，检查哪里出错！

## [规范](#specification)

-   在 `credit.py` 中，编写一个程序，提示用户输入信用卡号码，然后通过 `print` 报告该卡号是否为有效的美国运通卡、万事达卡或维萨卡，就像您在[问题集 1](https://cs50.harvard.edu/x/2023/psets/1/)中所做的那样，只不过这次您的程序应该用 Python 编写。
-   为了方便自动化代码测试，请确保程序最后一行输出为 `AMEX\n`、`MASTERCARD\n`、`VISA\n` 或 `INVALID\n`，不多不少。
-   为简单起见，假设用户输入均为数字（不包含连字符，如同实体卡上的卡号）。
-   建议使用 CS50 库中的 `get_int` 或 `get_string` 函数来获取用户输入，具体取决于您的实现方式。

## [用法](#usage)
您的程序应该像下面的例子一样运行。

```
$ python credit.py
Number: 378282246310005
AMEX

```

## [提示](#hints)

-   可以使用正则表达式来验证用户输入。例如，您可以使用 Python 的 `re` 模块来验证用户输入是否为指定长度的数字序列。

## [测试](#testing)

虽然 `check50` 可用于此问题，但我们鼓励您首先自行测试您的代码，针对以下每种情况：

-   执行 `python credit.py` 并等待提示输入。输入 `378282246310005`，然后按回车。程序应该输出 `AMEX`。
-   执行 `python credit.py` 并等待提示输入。输入 `371449635398431`，然后按回车。程序应该输出 `AMEX`。
-   执行 `python credit.py` 并等待提示输入。输入 `5555555555554444`，然后按回车。程序应该输出 `MASTERCARD`。
-   执行 `python credit.py` 并等待提示输入。输入 `5105105105105100`，然后按回车。程序应该输出 `MASTERCARD`。
-   执行 `python credit.py` 并等待提示输入。输入 `4111111111111111`，然后按回车。程序应该输出 `VISA`。
-   执行 `python credit.py` 并等待提示输入。输入 `4012888888881881`，然后按回车。程序应该输出 `VISA`。
-   执行 `python credit.py` 并等待提示输入。输入 `1234567890`，然后按回车。程序应该输出 `INVALID`。

执行以下命令以使用 `check50` 评估您的代码的正确性，**但强烈建议您先自行编译并测试！**

```
check50 cs50/problems/2023/x/sentimental/credit

```

执行以下命令以使用 `style50` 评估您的代码风格。

## [如何提交](#how-to-submit)

在您的终端中，执行以下命令以提交您的作品。

```
submit50 cs50/problems/2023/x/sentimental/credit

```
