---
sidebar_position: 3
description: cs50x 凯撒密码练习
title: 凯撒密码
---

# 凯撒密码 - CS50x 2023

对于这个问题，你将实现一个程序，使用凯撒密码加密消息，如下所示。

```
$ ./caesar 13
plaintext:  HELLO
ciphertext: URYYB

```

## [开始](#getting-started)

打开 [VS Code](https://cs50.dev/)。

首先点击终端窗口，然后直接输入 `cd`。 你应该发现它的“提示符”类似于下面。

单击该终端窗口内部，然后执行

```
wget https://cdn.cs50.net/2022/fall/psets/2/caesar.zip

```

然后按 Enter 键，以便在你的 codespace 中下载一个名为 `caesar.zip` 的 ZIP 文件。 请务必注意 `wget` 和 URL 之间的空格，以及其他任何字符，不要遗漏！

现在执行

来创建一个名为 `caesar` 的文件夹。 现在你可以执行

并在提示符下回复“y”，然后按 Enter 键，以删除你下载的 ZIP 文件。

现在输入

然后按 Enter 键，进入该目录。 你的提示符现在应该类似于下面。

如果一切顺利，你应该执行

并看到一个名为 `caesar.c` 的文件。 执行 `code caesar.c` 应该会打开该文件，你将在其中键入此问题集的代码。 如果没有，请回溯你的步骤，看看你是否可以确定你哪里出错了！

## [背景](#background)

据说凯撒（没错，就是那位凯撒）过去常常通过将每个字母移动一定的位数来“加密”（也就是用可逆的方式隐藏）机密消息。 例如，他可能会将 A 写成 B，将 B 写成 C，将 C 写成 D，…，并且在字母表中回绕，将 Z 写成 A。因此，为了对某人说 HELLO，凯撒可能会写 IFMMP 代替。 收到凯撒的此类消息后，收件人必须通过将字母沿相反方向移动相同的位数来“解密”它们。

这种“密码系统”的秘密在于只有凯撒和收件人知道一个秘密，即凯撒移动他的字母的位数（例如，1）。 按照现代标准，这并不算特别安全。不过，如果你是世界上第一个这么做的人，那可就相当安全了！

未加密的文本通常称为 _plaintext_（明文 (原文 plaintext)）。 加密的文本通常称为 _ciphertext_（密文 (原文 ciphertext)）。 使用的密钥称为 _key_（密钥）。

为了清楚起见，以下是如何使用密钥 `1` 加密 `HELLO` 得到 `IFMMP`：

加载中，请稍候...

<table className="table table-bordered table-striped">
      <thead>
        <tr>
          <th data-field="0">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>plaintext</div>
            </div>
            <div className="fht-cell"></div>
          </th>
          <th data-field="1">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>
                <code className="language-plaintext highlighter-rouge">H</code>
              </div>
            </div>
            <div className="fht-cell"></div>
          </th>
          <th data-field="2">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>
                <code className="language-plaintext highlighter-rouge">E</code>
              </div>
            </div>
            <div className="fht-cell"></div>
          </th>
          <th data-field="3">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>
                <code className="language-plaintext highlighter-rouge">L</code>
              </div>
            </div>
            <div className="fht-cell"></div>
          </th>
          <th data-field="4">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>
                <code className="language-plaintext highlighter-rouge">L</code>
              </div>
            </div>
            <div className="fht-cell"></div>
          </th>
          <th data-field="5">
            <div className="th-inner">
              <div style={{ textAlign: 'left' }}>
                <code className="language-plaintext highlighter-rouge">O</code>
              </div>
            </div>
            <div className="fht-cell"></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr data-index="0">
          <td>+ key</td>
          <td>
            <span>1</span>
          </td>
          <td>
            <span>1</span>
          </td>
          <td>
            <span>1</span>
          </td>
          <td>
            <span>1</span>
          </td>
          <td>
            <span>1</span>
          </td>
        </tr>
        <tr data-index="1">
          <td>= ciphertext</td>
          <td>
            <code className="language-plaintext highlighter-rouge">I</code>
          </td>
          <td>
            <code className="language-plaintext highlighter-rouge">F</code>
          </td>
          <td>
            <code className="language-plaintext highlighter-rouge">M</code>
          </td>
          <td>
            <code className="language-plaintext highlighter-rouge">M</code>
          </td>
          <td>
            <code className="language-plaintext highlighter-rouge">P</code>
          </td>
        </tr>
      </tbody>
    </table>

更正式地说，凯撒算法（即密码）通过将每个字母“旋转”k 个位置来加密消息。 更正式地说，如果p 是某个明文（即未加密的消息），p<sub>i</sub> 是 p 中的字符，并且 k 是一个密钥（即非负整数），那么密文 c 中的每个字母 c<sub>i</sub>，计算公式为
这里的 意味着“对26取模”，也就是求除以26的余数。这个公式可能使密码看起来比实际更复杂，但它实际上只是精确表达算法的一种简洁方式。为了方便理解，我们可以把A（或 a）看作0，B（或 b）看作1，以此类推，Z（或 z）就是25。假设凯撒想用密钥3偷偷地告诉别人“Hi”。因此，如果他的明文是“Hi”，那么“H”（也就是7）会变成“K”，而“i”（也就是8）会变成“L”。明白了吗？

现在，我们来编写一个名为 `caesar` 的程序，它可以让你用凯撒密码加密信息。用户在运行程序时，需要通过命令行参数来指定密钥，这个密钥将用于加密运行时输入的秘密信息。我们不能假定用户输入的密钥一定是数字，但如果用户输入的是数字，我们可以假定它是一个正整数。

以下是该程序可能工作方式的一些示例。例如，如果用户输入密钥 `1` 和明文 `HELLO`：

```
$ ./caesar 1
plaintext:  HELLO
ciphertext: IFMMP

```

如果用户提供密钥 `13` 和明文 `hello, world`，则该程序的工作方式如下：

```
$ ./caesar 13
plaintext:  hello, world
ciphertext: uryyb, jbeyq

```

注意，逗号和空格不会被加密，只有字母会被旋转！

再来一个例子怎么样？如果用户再次提供密钥 `13`，并提供更复杂的明文，则该程序的工作方式如下：

```
$ ./caesar 13
plaintext:  be sure to drink your Ovaltine
ciphertext: or fher gb qevax lbhe Binygvar

```

为什么？

请注意，原始消息的大小写已保留。小写字母保持小写，大写字母保持大写。

如果用户输入了非数字的命令行参数会怎么样？该程序应提醒用户如何使用该程序：

```
$ ./caesar HELLO
Usage: ./caesar key

```

如果用户没有提供任何命令行参数呢？该程序应提醒用户如何使用该程序：

```
$ ./caesar
Usage: ./caesar key

```

如果用户提供了多个命令行参数呢？该程序应提醒用户如何使用该程序：

```
$ ./caesar 1 2 3
Usage: ./caesar key

```

观看视频

## [规范](#specification)

设计并实现一个名为 `caesar` 的程序，用于使用凯撒密码加密消息。
-   请在 `caesar` 目录下创建一个名为 `caesar.c` 的文件来实现你的程序。
-   你的程序必须接受一个单独的命令行参数，一个非负整数。我们姑且称之为 。
-   如果程序在没有命令行参数或多于一个命令行参数的情况下运行，应使用 `printf` 打印错误信息，并立即从 `main` 函数返回值 `1` (表示错误)。
-   如果命令行参数中包含非十进制数字的字符，程序应打印 `Usage: ./caesar key` 并从 `main` 函数返回值 `1`。
-   请勿假定  小于或等于 26。程序应能处理所有小于 的非负整数值。
-   也就是说，即使使用者输入的数值过大，超出 `int` 类型的范围（`int` 可能会溢出），你也不必担心程序会因此崩溃。
-   但是，即使 大于 ，程序输入和输出中的字母字符都应保持字母的性质。
-   例如，如果 为 ，即使根据 [asciitable.com](https://www.asciitable.com/)，反斜杠 `\` 在 ASCII 码表中距离 `A` 有 个位置，`A` 也不应变为 `\`，而应循环移位变为 `B`。
-   程序应输出 `plaintext:` (后接两个空格，无换行)，然后提示用户使用 `get_string` 函数输入明文。
-   程序应输出 `ciphertext:` (后接一个空格，无换行)，然后输出加密后的密文。明文中的每个字母字符都应“旋转” _k_ 个位置；非字母字符则保持不变。
-   你的程序必须保留大小写：大写字母，即使旋转，也必须保持大写字母；小写字母，即使旋转，也必须保持小写字母。
-   输出密文后，程序应打印一个换行符，并通过从 `main` 函数返回 `0` 来结束运行。

## [建议](#advice)

如何开始？ 让我们一步一步地解决这个问题。

### [伪代码](#pseudocode)

首先编写，尝试在 `caesar.c` 中编写一个 `main` 函数，该函数仅使用伪代码实现该程序，即使不（还！）确定如何用实际代码编写它。

提示

实现方法不止一种，所以这只是一种！

```
int main(void)
{
    // 确保程序只使用一个命令行参数运行

    // 确保 argv[1] 中的每个字符都是数字

    // 将 argv[1] 从 `string` 转换为 `int`

    // 提示用户输入明文

    // 对于明文中的每个字符：

        // 如果它是字母，则旋转该字符
}

```

在看到我们的伪代码后，可以编辑你自己的伪代码，但不要简单地将我们的伪代码复制/粘贴到你自己的代码中！

### [计算命令行参数](#counting-command-line-arguments)

无论你的伪代码是什么，让我们首先编写仅检查程序是否使用单个命令行参数运行的 C 代码，然后再添加其他功能。

具体来说，以这样一种方式修改 `caesar.c` 中的 `main`，如果用户没有提供任何命令行参数，或者提供了两个或更多，该函数将打印 `"Usage: ./caesar key\n"` 然后返回 `1`，从而有效地退出程序。 如果用户正好提供一个命令行参数，则该程序不应打印任何内容，而只需返回 `0`。 因此，该程序的行为应如下所示。

```
$ ./caesar
Usage: ./caesar key

```

```
$ ./caesar 1 2 3
Usage: ./caesar key

```

提示

-   回想一下，你可以使用 `printf` 进行打印。
-   回想一下，函数可以使用 `return` 返回一个值。
-   回想一下，`argc` 包含传递给程序的命令行参数的数量，加上程序本身的名称。

### [检查密钥](#checking-the-key)

现在你的程序（希望！）正在按规定接受输入，现在是下一步的时候了。

在 `caesar.c` 中的 `main` 下方添加一个函数，例如，`only_digits`，该函数接受一个 `string` 作为参数，如果该 `string` 仅包含数字 `0` 到 `9`，则返回 `true`，否则返回 `false`。 确保也在 `main` 上方添加该函数的原型。

提示
-   你很可能需要一个类似下面的原型：
    
    ```
    bool only_digits(string s);
    
    ```
    
    请务必在文件顶部包含 `cs50.h`，以便编译器能识别 `string` 和 `bool` 类型。
    
-   请记住，`string` 本质上是一个 `char` 类型的数组。
-   请记住，`strlen` 函数（在 `string.h` 中声明）用于计算 `string` 的长度。
-   你可能会发现 `isdigit`（在 `ctype.h` 中声明）很有用，请参考 [manual.cs50.io](https://manual.cs50.io/)。但请注意，它一次只能检查一个 `char`！

接下来，修改 `main` 函数，使其调用 `only_digits` 函数来处理 `argv[1]`。如果该函数返回 `false`，则 `main` 应该打印 `"Usage: ./caesar key\n"` 并返回 `1`。否则，`main` 应该只返回 `0`。程序应该表现得如下：

```
$ ./caesar banana
Usage: ./caesar key

```

### [使用密钥](#using-the-key)

现在，修改 `main` 函数，使其将 `argv[1]` 转换为 `int` 类型。你可能会发现 `atoi`（在 `stdlib.h` 中声明）很有用，请参考 [manual.cs50.io](https://manual.cs50.io/)。然后使用 `get_string` 函数提示用户输入明文，提示信息为 `"plaintext: "`。

然后，实现一个名为 `rotate` 的函数，该函数接受一个字符 `char` 和一个整数 `int` 作为输入。如果该字符是字母，则将其旋转相应的位数（必要时从 `Z` 绕回到 `A`，`z` 绕回到 `a`）；否则，返回原字符。

提示

-   你很可能需要一个类似下面的原型：
    
    ```
    char rotate(char c, int n);
    
    ```
    
    例如，调用 `rotate('A', 1)` 或者 `rotate('a', 1)` 应该返回 `'B'`。调用 `rotate('!', 1)` 应该返回 `'!'`。
    
-   请记住，你可以使用 `(int)` 将 `char` 显式“转换”为 `int`，并使用 `(char)` 将 `int` 转换为 `char`。或者你可以通过简单地将一个视为另一个来隐式地进行转换。
-   你可能需要从大写字母中减去 `'A'` 的 ASCII 值，使其以 0 为基准进行计算（`'A'` 为 0，`'B'` 为 1，以此类推），计算完成后再加回去。
-   类似地，你可能需要从小写字母中减去 `'a'` 的 ASCII 值，使其以 0 为基准进行计算（`'a'` 为 0，`'b'` 为 1，以此类推），计算完成后再加回去。
-   你可能会发现 `ctype.h` 中声明的其他一些函数很有用，请参考 [manual.cs50.io](https://manual.cs50.io/)。
-   当从像 `25` 这样的值“绕回”到 `0` 时，你可能会发现 `%` 很有用。

接下来，修改 `main` 函数，使其打印 `"ciphertext: "`，然后遍历用户输入的明文，对每个字符调用 `rotate` 函数，并打印其返回值。

提示

-   请记住，`printf` 可以使用 `%c` 打印一个 `char`。
-   如果你在调用 `printf` 时根本看不到任何输出，则很可能是因为你正在打印超出 0 到 127 的有效 ASCII 范围的字符。尝试将字符临时打印为数字（使用 `%i` 而不是 `%c`）以查看你正在打印的值！

## [示例演示](#walkthrough)

## [如何测试你的代码](#how-to-test-your-code)

执行以下命令以使用 `check50` 评估代码的正确性。但请务必自己编译并测试它！

```
check50 cs50/problems/2023/x/caesar

```

执行以下命令以使用 `style50` 评估代码的风格。

## [如何提交](#how-to-submit)

在你的终端中，执行以下命令以提交你的工作。

```
submit50 cs50/problems/2023/x/caesar

```
