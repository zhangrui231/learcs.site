---
title: Lab 1 Caesar Cipher (Old)
---

由于最初几周的结构调整，本实验已被替换。 相关文档在此保留。

### IntelliJ 测试

为了验证程序是否正常运行，请运行 `CaesarCipher` 类，如下所示：

![caesar main](/img/cs61b/run_main.png)

您会看到一个控制台窗口弹出，提示您“输入要加密的文本”：

![caesar prompt](/img/cs61b/caesar_prompt.png)

您可以点击红色方块来结束程序。

<!-- TODO: What if it didn't work? -->

## 编程练习：`CaesarCipher`

:::info
本练习会用到HW 0 中的部分内容。如果您以前没有编写过 Java，我们强烈建议您在学习本部分之前阅读 HW 0。我们鼓励您在实验期间寻求有关 HW 0 概念的帮助。
:::

### 背景

**密码**是一种_算法_，用于加密或解密文本。 通常，我们把未加密的文本叫做“明文”，加密后的文本叫做“密文”。

这是一个使用凯撒密码的文本示例（您将在本实验中实现）：


| 明文 | 移位 | 密文 |
| ------------ | ----- | ------------- |
| `java is fun` | +8 | `sjej rb odw` |

需要注意的是，原始文本是可读的，但加密后的文本则不然。

凯撒密码的计算方法是将文本的每个字母在英文字母表中向前“移动”一定数量的空格，并在末尾环绕，就好像它写在一个圆圈中一样。 例如，以下“环”表示凯撒密码的映射，其中每个外侧字母向前移动 4 个位置以获得内侧字母。

![caesar cipher circle](/img/cs61b/circle.png){: style="max-height: 325;" }

在本实验中，您将编辑 `CaesarCipher.java` 文件，该文件具有供您填写的空方法。 我们将为您提供这些方法的 Python 代码。 您可能会发现 HW 0 比较了 Python 和 Java 语法，这很有帮助。 建议在开始本次实验前完成HW 0。

我们的目标是接收一段文本和字母的偏移量，然后输出加密后的文本。 我们提供了一个小的 `main` 方法，它将从控制台获取输入。 但是，您不必了解它的工作原理。

:::info
在 Python 中，只有一种方法可以表示长度为 1 的字符串； 但是，在 Java 中，有两种。 首先，我们可以将它们表示为 `String`，类似于 Python `str`。 其次，有一种单独的类型称为 `char`。 这种区别在于，Java是强类型语言，能够明确指定单个字符类型会很有用。 与 Python 不同，Java 中的 `String` 必须使用双引号 (`\"`)，而 `char` 必须使用单引号 (`'`)。
:::

### 要实现的方法

您应该实现的第一个函数是 `findIndexInAlphabet`。


`public static int findIndexInAlphabet(char c)`

<div markdown="block">

你应该遍历`ALPHABET`，如果找到与输入字符`c`相等的字符，则返回其索引。 如果不存在这样的索引，则应返回 `-1`。

---

在 Python 中，此方法可能大致如下所示：

```python
def findIndexInAlphabet(c):
    for i in range(len(ALPHABET)):
        if ALPHABET[i] == c:
            return i
    return -1
```

</div>

在 Python 中，您不能有两个同名的方法。 但是，在 Java 中，我们可以！ 这称为**方法重载**，它的工作原理是因为**参数的类型**不同。 接下来，你需要实现两个`rotate`方法：一个用于旋转`char`（字符），另一个用于旋转字符串。

`public static int rotate(char c, int amount)`

<div markdown="block">

将输入的字符转换成对应的数字。然后，将旋转量加到该数字上，并进行环绕处理，使其结果保持在 `0` 到 `25` 之间，这是字母表的有效索引。然后，将其转换回字符。如果该字符未出现在字母表中，则直接返回该字符。

---

在 Python 中，此方法大致如下所示：

```python
def rot(c, amount):
    idx = findIndexInAlphabet(c)
    if idx == -1:
        return c
    newIdx = (idx + amount) % len(ALPHABET)
    return ALPHABET[newIdx]
```

</div>

`String` 版本是在 `main` 函数中被调用的。


`public static int rotate(String line, int amount)`

<div markdown="block">

将每个字符旋转 `amount` 个位置，并返回一个由旋转字符组成的新 `String`。

---

在 Python 中，此方法大致如下所示：

```python
def rot(line, amount):
    output = ""
    for c in line:
        output += rot(c, n)
    return output
```

</div>

### 测试你的代码

为了检查代码是否能正确运行，我们可以反复运行 `CaesarCipher` 文件。但是，每次都手动输入代码并检查输出会非常耗时。相反，我们使用**测试**。

打开 `CaesarCipherTests.java`，然后点击 `public class CaesarCipherTests` 这一行代码左侧的绿色三角形图标：

![caesar run rests](/img/cs61b/caesar_run_tests.png)

这将运行我们在本作业中提供的测试。如果函数实现正确，所有测试都会通过，并显示绿色的勾号：

![caesar passed tests](/img/cs61b/caesar_tests_passed.png)

如果您未通过某些测试，您将看到红色感叹号或黄色 `x`：

![caesar failed tests](/img/cs61b/caesar_tests_failed.png)

要进行调试，点击下拉菜单查看失败测试的输出信息。
