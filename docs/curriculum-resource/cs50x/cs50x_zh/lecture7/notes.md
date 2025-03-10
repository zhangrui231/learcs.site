---
sidebar_position: 1
description: lecture6 python 笔记 | 课程笔记
title: 笔记
---

# 第六讲 - CS50x 2023

- [第六讲 - CS50x 2023](#第六讲---cs50x-2023)
  - [欢迎！](#欢迎)
  - [Python](#python)
  - [你好](#你好)
  - [类型](#类型)
  - [拼写检查](#拼写检查)
  - [图像识别](#图像识别)
  - [CS50 库](#cs50-库)
  - [条件判断](#条件判断)
  - [变量](#变量)
  - [循环](#循环)
  - [计算器](#计算器)
  - [比较](#比较)
  - [面向对象编程](#面向对象编程)
  - [Meow](#meow)
  - [Mario](#mario)
  - [分数](#分数)
  - [大写](#大写)
  - [问候](#问候)
  - [退出状态](#退出状态)
  - [搜索](#搜索)
  - [电话簿](#电话簿)
  - [比较](#比较-1)
  - [交换](#交换)
  - [CSV](#csv)
  - [语音](#语音)
  - [总结](#总结)

## 欢迎！

-   在之前的几周，你学习了编程的基本构建模块。
-   你学习了用一种叫做 C 的较低级编程语言进行编程。
-   今天，我们将使用一种叫做 _Python_ 的更高级编程语言。
-   当你学习这门新语言时，你会发现你能够更容易地自学新的编程语言。

## Python

-   几十年来，人类已经看到了之前的设计决策可以如何改进。
-   Python 是一种编程语言，它是在你已掌握的 C 语言知识基础上构建的。

## 你好

-   目前为止，代码是这样的：

    ```
    // 一个向世界问好的程序

    #include <stdio.h>

    int main(void)
    {
        printf("hello, world\n");
    }

    ```

-   今天，你会发现编写和编译代码的过程已经简化了。
-   例如，上面的代码在 Python 中会呈现为：

    ```
    # 一个向世界问好的程序

    print("hello, world")

    ```

    注意，分号已经没有了。

-   在 C 语言中，你可能还记得这段代码：

    ```
    // get_string 和 printf 与 %s

    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        string answer = get_string("What's your name? ");
        printf("hello, %s\n", answer);
    }

    ```

-   这段代码在 Python 中转换为：

    ```
    # get_string 和 print，使用连接

    from cs50 import get_string

    answer = get_string("What's your name? ")
    print("hello, " + answer)

    ```

    你可以通过在终端窗口中执行 `code hello.py` 来编写代码，然后运行 `python hello.py` 来执行它。注意 `+` 符号用于连接 `"hello, "` 和 `answer`。

-   类似地，你可以将上面的代码实现为：

    ```
    # get_string 和 print，使用格式化字符串

    from cs50 import get_string

    answer = get_string("What's your name? ")
    print(f"hello, {answer}")

    ```

    注意，花括号允许 `print` 函数将 `answer` 的值插入到字符串中。

## 类型

-   Python 中的数据类型不需要显式声明。 例如，你看到上面的 `answer` 是一个字符串，但我们不需要显式地告诉解释器，它能自动识别。
-   在 Python 中，常用的类型包括：

    注意，`long` 和 `double` 类型没有了。Python 会自动处理大数和小数的数据类型。

-   Python 中的其他一些数据类型包括：

    ```
      range
      list
      tuple
      dict
      set

    ```

-   这些数据类型都可以用 C 语言实现，但在 Python 中实现起来更简单。

## 拼写检查
-   为了展示这种简洁性，咱们在终端里输入 ‘code dictionary.py’，然后照着下面的代码写:

    ```
    # Words in dictionary
    words = set()
    def check(word):
        """Return true if word is in dictionary else false"""
        if word.lower() in words:
            return True
        else:
            return False

    def load(dictionary):
        """Load dictionary into memory, returning true if successful else false"""
        file = open(dictionary, "r")
        for line in file:
            word = line.rstrip()
            words.add(word)
        file.close()
        return True

    def size():
        """Returns number of words in dictionary if loaded else 0 if not yet loaded"""
        return len(words)

    def unload():
        """Unloads dictionary from memory, returning true if successful else false"""
        return True

    ```

注意，上面有四个函数。`check` 函数里，如果 `word` 在 `words` 里，就返回 `True`。这可比 C 语言简单多了！ 类似的，`load` 函数打开字典文件，然后把每一行加到 `words` 里。`rstrip` 用来移除行尾的换行符。`size` 直接返回 `words` 的长度 (`len`)。`unload` 只需要返回 `True`，因为 Python 自己管理内存。

-   这段代码就说明了为什么要有高级语言：为了简化，让你写代码更容易。
-   不过，速度上会有取舍。因为 C 允许程序员自己管理内存，所以可能比 Python 跑得快 -- 当然也看你的代码。C 只是执行你写的代码，但 Python 在你调用内置函数的时候，还会运行很多底层的代码。
-   想了解更多函数的信息，可以看看 Python 的官方文档：[Python文档](https://docs.python.org/3/library/functions.html)

## 图像识别

-   Python 有很多贡献者写了很多库。
-   你可以在你的代码里用这些库。
-   比如，你可以用 Python 的 `PIL` 库，很方便地实现面部识别。
-   David 演示了用 Python 和第三方库做面部识别。

## CS50 库

-   和 C 一样，CS50 库也能在 Python 里用。
-   下面这些函数会特别有用:

    ```
      get_float
      get_int
      get_string

    ```

-   你也可以只从 CS50 库导入特定的函数，像这样:

    ```
    from cs50 import get_float, get_int, get_string

    ```

## 条件判断

-   你可能还记得 C 语言里有这样的程序:

    ```
    // Conditionals, Boolean expressions, relational operators

    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // Prompt user for integers
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");

        // Compare integers
        if (x < y)
        {
            printf("x is less than y\n");
        }
        else if (x > y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }

    ```

-   在 Python 中，它会是这样:

    ```
    # Conditionals, Boolean expressions, relational operators

    from cs50 import get_int

    # Prompt user for integers
    x = get_int("What's x? ")
    y = get_int("What's y? ")

    # Compare integers
    if x < y:
        print("x is less than y")
    elif x > y:
        print("x is greater than y")
    else:
        print("x is equal to y")

    ```

    注意，没有大括号了，而是用缩进。另外，`if` 语句后面要加冒号。还有，`elif` 替代了 `else if`。`if` 和 `elif` 语句里也不用再写括号了。

## 变量

-   变量声明也更加简洁。在 C 语言中，你可能会这样写 `int counter = 1;`。而在 Python 中，可以直接写成 `counter = 1`。无需声明变量类型。
-   Python 推荐使用 `counter += 1` 来进行自增操作，不再支持 C 语言中的 `counter++` 写法。

## 循环

-   Python 中的循环与 C 语言非常相似。你可能还记得 C 语言中的以下代码：

    ```
    // 演示 while 循环

    #include <stdio.h>

    int main(void)
    {
        int i = 0;
        while (i < 3)
        {
            printf("meow\n");
            i++;
        }
    }

    ```

-   在 Python 中，这段代码如下所示：

    ```
    # 演示 while 循环

    i = 0
    while i < 3:
        print("meow")
        i += 1

    ```

-   `for` 循环在 Python 中可以这样实现：

    ```
    # 更好的设计

    for i in range(3):
        print("meow")

    ```

-   类似地，也可以这样表达上面的代码：

    ```
    # 通过参数化进行抽象

    def main():
        meow(3)

    # 喵喵叫若干次
    def meow(n):
        for i in range(n):
            print("meow")
    main()

    ```

    请注意，这里使用了一个函数来抽象"喵喵叫"这个行为。

## 计算器

-   我们可以像在 C 语言中一样实现一个简单的计算器。在终端窗口中输入 `code calculator.py`，然后编写如下代码：

    ```
    # 使用 int 进行加法 [使用 get_int]

    from cs50 import get_int

    # 提示用户输入 x
    x = get_int("x: ")

    # 提示用户输入 y
    y = get_int("y: ")

    # 执行加法
    print(x + y)

    ```

    请注意，这里导入了 CS50 库。接着，从用户处获取 `x` 和 `y` 的值。最后，打印计算结果。值得注意的是，C 语言程序中常见的 `main` 函数在这里并非必需。

-   可以尝试不使用 CS50 库。修改你的代码如下：

    ```
    # 使用 int 进行加法 [使用 input]

    # 提示用户输入 x
    x = input("x: ")

    # 提示用户输入 y
    y = input("y: ")

    # 执行加法
    print(x + y)

    ```

    请注意，执行上述代码可能会产生意料之外的结果。这是为什么呢？

-   你可能已经猜到，解释器将 `x` 和 `y` 识别为了字符串类型。你可以通过使用 `int` 函数来修复你的代码，如下所示：

    ```
    # 使用 int 进行加法 [使用 input]

    # 提示用户输入 x
    x = int(input("x: "))

    # 提示用户输入 y
    y = int(input("y: "))

    # 执行加法
    print(x + y)

    ```

    请注意，`x` 和 `y` 的输入值会被传递给 `int` 函数，该函数会将它们转换为整数类型。

-   我们可以扩展计算器的功能。修改你的代码如下：

    ```
    # 整数除法，演示缺乏截断

    # 提示用户输入 x
    x = int(input("x: "))

    # 提示用户输入 y
    y = int(input("y: "))

    # x 除以 y
    z = x / y
    print(z)

    ```

    请注意，执行这段代码会得到一个结果，但如果观察小数点后更多位数，你会发现存在_浮点数精度问题_。

-   我们可以通过稍微调整代码来展示这种精度上的差异：

    ```
    # 浮点数精度问题

    # 提示用户输入 x
    x = int(input("x: "))

    # 提示用户输入 y
    y = int(input("y: "))

    # x 除以 y
    z = x / y
    print(f"{z:.50f}")

    ```

    请注意，此代码揭示了不精确性。Python 仍然面临这个问题，就像 C 语言一样。

## 比较
-   在 C 语言中，比较两个值有时会遇到一些挑战。请看下面的代码：

    ```
    // 条件语句、布尔表达式、关系运算符

    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // 提示用户输入整数
        int x = get_int("What's x? ");
        int y = get_int("What's y? ");

        // 比较整数
        if (x < y)
        {
            printf("x is less than y\n");
        }
        else if (x > y)
        {
            printf("x is greater than y\n");
        }
        else
        {
            printf("x is equal to y\n");
        }
    }

    ```

-   在 Python 中，上述代码可以这样实现：

    ```
    # 条件语句、布尔表达式、关系运算符

    from cs50 import get_int

    # 提示用户输入整数
    x = get_int("What's x? ")
    y = get_int("What's y? ")

    # 比较整数
    if x < y:
        print("x is less than y")
    elif x > y:
        print("x is greater than y")
    else:
        print("x is equal to y")

    ```

    请注意，这里导入了 CS50 库。此外，`if` 语句有一些细微的差别。

-   再来看一个 C 语言的比较例子：

    ```
    // 逻辑运算符

    #include <cs50.h>
    #include <stdio.h>

    int main(void)
    {
        // 提示用户同意
        char c = get_char("Do you agree? ");

        // 检查是否同意
        if (c == 'Y' || c == 'y')
        {
            printf("Agreed.\n");
        }
        else if (c == 'N' || c == 'n')
        {
            printf("Not agreed.\n");
        }
    }

    ```

-   在 Python 中，这段代码可以这样写：

    ```
    # 逻辑运算符

    from cs50 import get_string

    # 提示用户同意
    s = get_string("Do you agree? ")

    # 检查是否同意
    if s == "Y" or s == "y":
        print("Agreed.")
    elif s == "N" or s == "n":
        print("Not agreed.")

    ```

    的确，Python 更易于阅读，因此更受欢迎。 注意，Python 中没有 `char` 类型，而是使用 `str`。

-   这段代码还可以这样实现：

    ```
    # 逻辑运算符，使用列表

    from cs50 import get_string

    # 提示用户同意
    s = get_string("Do you agree? ")

    # 检查是否同意
    if s in ["y", "yes"]:
        print("Agreed.")
    elif s in ["n", "no"]:
        print("Not agreed.")

    ```

    注意，这里展示了如何使用列表来处理多个关键字，例如 `y` 和 `yes`。

## 面向对象编程

-   到目前为止，我们编写的程序都是线性的，也就是顺序执行的。
-   某些类型的值不仅包含属性，还可以包含函数（或称方法）。
-   在 Python 中，这些值被称为“对象”。
-   在 C 语言中，我们可以使用 `struct` 将多个变量组合成一个自定义的数据类型。在 Python 中，我们可以这样做，并且还可以在自定义数据类型中包含函数。当函数属于某个特定的“对象”时，它被称为“方法”。
-   例如，Python 中的字符串（`str`）类型就内置了许多方法。因此，您可以如下修改您的代码：

    ```
    # 逻辑运算符，使用列表

    from cs50 import get_string

    # 提示用户同意
    s = get_string("Do you agree? ")

    # 检查是否同意
    if s.lower() in ["y", "yes"]:
        print("Agreed.")
    elif s.lower() in ["n", "no"]:
        print("Not agreed.")

    ```

    注意，这里展示了如何处理多个关键字（例如 `y` 和 `yes`），以及如何将用户输入转换为小写。

-   还可以进一步简化为：

    ```
    # 逻辑运算符，使用列表

    from cs50 import get_string
    
    # 提示用户是否同意
    s = get_string("你同意吗？(是/否) ")

    s = s.lower()

    # 检查是否同意
    if s in ["y", "yes"]:
        print("同意。")
    elif s in ["n", "no"]:
        print("不同意。")

    ```

    请注意，`s` 的原始值被 `s.lower()` 的结果所覆盖。

-   在本课程中，我们对 Python 的学习只是浅尝辄止。 因此，[Python 文档](https://docs.python.org/) 对于您的后续深入学习至关重要。
-   您可以在 [Python 文档](https://docs.python.org/3/library/stdtypes.html#string-methods) 中找到更多关于字符串方法的信息。

## Meow

-   回顾几周前我们学习的 `meow.c`，请看下面的代码：

    ```
    // 演示 while 循环

    #include <stdio.h>

    int main(void)
    {
        int i = 0;
        while (i < 3)
        {
            printf("meow\n");
            i++;
        }
    }

    ```

-   以上 C 代码可以用 Python 实现如下：

    ```
    # 演示 while 循环

    i = 0
    while i < 3:
        print("meow")
        i += 1

    ```

-   同样，使用 `for` 循环，我们可以这样编写代码：

    ```
    # 更好的设计

    for i in range(3):
        print("meow")

    ```

-   正如我们今天早些时候提到的，您可以使用函数进一步改进此代码。 修改您的代码如下：

    ```
    # 抽象

    def main():
        for i in range(3):
            meow()

    # 喵一次
    def meow():
        print("meow")

    main()

    ```

    请注意，`meow` 函数对 `print` 语句进行了抽象。 此外请注意，按照惯例，函数之间会空两行。

-   事实上，我们可以在函数之间传递变量，如下所示：

    ```
    # 带参数化的抽象

    def main():
        meow(3)

    # 喵若干次
    def meow(n):
        for i in range(n):
            print("meow")

    main()

    ```

    请注意，`meow` 现在接受一个变量 `n`。 在 `main` 函数中，您可以调用 `meow` 并将像 `3` 这样的值传递给它。 然后，`meow` 在 `for` 循环中使用 `n` 的值。

-   阅读上面的代码，请注意作为 C 程序员的您如何能够非常容易地理解上面的代码。 虽然有些约定不同，但您之前学到的构建块在这个新的编程语言中非常明显。

## Mario

-   回想几周前我们构建三个彼此堆叠的块的挑战，就像在 Mario 中一样。

    ![三个垂直块](/img/cs50/cs50Week6Slide073.png "mario blocks")

-   在 Python 中，我们可以实现类似于以下内容：

    ```
    # 使用循环打印一列 3 个砖块

    for i in range(3):
        print("#")

    ```

-   在 C 中，我们有 `do-while` 循环的优势。 但是，在 Python 中，按照惯例是使用 `while` 循环，因为 Python 没有 `do while` 循环。 您可以在名为 `mario.py` 的文件中编写如下代码：

    ```
    # 打印一列砖块，使用辅助函数获取输入
    from cs50 import get_int
    def main():
        height = get_height()
        for i in range(height):
            print("#")

    def get_height():
        while True:
            n = get_int("Height: ")
            if n > 0:
                return n
    main()

    ```

    请注意，一旦 `n` 被赋值，它在 `get_height` 函数的任何地方都有效。 此外请注意，按照惯例，函数之间会空两行。

-   我们可以不用 CS50 库，代码如下所示：

    ```
    def main():
            height = get_height()
            for i in range(height):
                print("#")
        def get_height():
            while True:
                try:
                    n = int(input("高度："))
                    if n > 0:
                        return n
                except ValueError:
                    print("不是整数")

    main()
    ```

    注意这里使用`try`语句尝试将`n`转换为整数，如果转换失败，会抛出异常。

-   考虑以下图片：

    ![四个水平的问号方块](/img/cs50/cs50Week6Slide075.png  "马里奥砖块")

-   在Python中，可以修改代码如下实现：

    ```
    # 打印一行使用循环的4个问号

    for i in range(4):
        print("?", end="")
    print()

    ```

    请注意，你可以通过修改`print`函数的`end`参数，使其输出不换行。

-   类似于之前的例子，我们可以进一步简化这个程序：

    ```
    # 打印一行 4 个不带循环的问号

    print("?" * 4)

    ```

    请注意，我们可以使用 `*` 来乘以打印语句，使其重复 `4` 次。

-   如果要打印一个大的砖块图案呢？

    ![三乘三的马里奥方块](/img/cs50/cs50Week6Slide078.png  "马里奥方块")

-   要实现这个图案，可以修改代码如下：

    ```
    # 打印一个带循环的 3x3 的砖块网格

    for i in range(3):
        for j in range(3):
            print("#", end="")
        print()

    ```

    注意，这里使用了嵌套循环。外层循环控制行数，内层循环控制每行的`#`数量。`print()`语句用于换行。

-   你可以在Python官方文档中找到关于`print`函数的更多信息：[Python 文档](https://docs.python.org/3/library/functions.html#print)

## 分数

-   `list`（列表）是Python中的一种数据结构。
-   `list` 具有内置的方法或函数。
-   例如，考虑以下代码：

    ```
    # 使用列表和循环计算三个数字的平均值

    from cs50 import get_int

    # 获取分数
    scores = []
    for i in range(3):
        score = get_int("分数：")
        scores.append(score)

    # 打印平均值
    average = sum(scores) / len(scores)
    print(f"平均值：{average}")

    ```

    注意，可以使用内置的`append()`方法将分数添加到列表末尾。

-   您甚至可以使用以下语法：

    ```
    # 使用列表和带 + 运算符的循环计算三个数字的平均值

    from cs50 import get_int

    # 获取分数
    scores = []
    for i in range(3):
        score = get_int("分数：")
        scores += [score]

    # 打印平均值
    average = sum(scores) / len(scores)
    print(f"平均值：{average}")

    ```

    这里需要将`score`放入方括号`[]`中，将其转换为包含单个元素的列表，才能使用`+`或`+=`运算符添加到`scores`列表中。

-   您可以在 [Python 文档](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range) 中了解更多关于列表的信息。
-   您还可以在 [Python 文档](https://docs.python.org/3/library/functions.html#len) 中了解更多关于 `len` 的信息。

## 大写

-   接下来，看下面的代码：

    ```
    # 逐个字符地将字符串转换为大写

    before = input("之前：")
    print("之后： ", end="")
    for c in before:
        print(c.upper(), end="")
    print()

    ```

    注意，这段代码逐个字符地将字符串转换为大写。

-   Python的字符串类型(`str`)内置了相应的方法。可以将代码修改为：
  
    ```
    # 一次性将字符串全部转换为大写
    before = input("之前：")
    after = before.upper()
    print(f"之后： {after}")
    ```

注意，`upper` 方法可以一次性将整个字符串转换为大写。

## 问候

- 与 C 语言一样，您也可以使用命令行参数。请看以下代码：

    ```
    # 打印命令行参数

    from sys import argv

    if len(argv) == 2:
        print(f"hello, {argv[1]}")
    else:
        print("hello, world")

    ```

    注意，`argv[1]` 是使用格式化字符串打印的，`print` 语句中存在 `f` 表示格式化字符串。 或者说，是使用 f-字符串 打印的。

- 您可以按如下方式打印 `argv` 中的所有参数：

    ```
    # 打印命令行参数，索引到 argv 中

    from sys import argv

    for i in range(len(argv)):
        print(argv[i])

    ```

    请注意，执行上述代码时，不会显示 'python' 关键字，第一个参数是您所运行的文件名。这类似于 C 语言中的 `./`。

- 您可以对列表进行切片操作。请看以下代码：

    ```
    # 使用切片打印命令行参数

    from sys import argv

    for arg in argv[1:]:
        print(arg)

    ```

    请注意，执行此代码会将您正在运行的文件名从参数列表中移除。

- 您可以在 [Python 文档](https://docs.python.org/3/library/sys.html) 中了解有关 `sys` 库的更多信息。

## 退出状态

- `sys` 库还具有内置方法。我们可以使用 `sys.exit(i)` 以特定的退出代码退出程序：

    ```
    # 使用显式值退出，导入 sys

    import sys

    if len(sys.argv) != 2:
        print("缺少命令行参数")
        sys.exit(1)

    print(f"hello, {sys.argv[1]}")
    sys.exit(0)

    ```

    请注意，这里使用点号（`.`）来调用 `sys` 库的内置函数。

## 搜索

- Python 也可以用于搜索。在您的终端窗口中，键入 `code names.py` 并编写如下代码：

    ```
    # 实现名称的线性搜索

    import sys

    # 名称列表
    names = ["Bill", "Charlie", "Fred", "George", "Ginny", "Percy", "Ron"]

    # 询问姓名
    name = input("Name: ")

    # 搜索名称
    for n in names:
        if n == name:
            print("Found")
            sys.exit(0)

    print("Not found")
    sys.exit(1)

    ```

    请注意，这段代码实现了线性搜索。

- 您可以按如下方式利用 Python 的内置功能：

    ```
    # 使用 `in` 实现名称的线性搜索

    import sys

    # 名称列表
    names = ["Bill", "Charlie", "Fred", "George", "Ginny", "Percy", "Ron"]

    # 询问姓名
    name = input("Name: ")

    # 搜索名称
    if name in names:
        print("Found")
        sys.exit(0)

    print("Not found")
    sys.exit(1)

    ```

    请注意，这里使用了 `in` 关键字。Python 会自动处理底层的线性搜索实现。

## 电话簿

- 回想一下，字典（`dict`）是键值对的集合。
- 您可以在 Python 中按如下方式实现字典：

    ```
    # 实现电话簿

    from cs50 import get_string

    people = {
        "Carter": "+1-617-495-1000",
        "David": "+1-949-468-2750"
    }

    # 搜索名称
    name = get_string("Name: ")
    if name in people:
        print(f"Number: {people[name]}")

    ```

    请注意，字典是使用花括号实现的。然后，语句 `if name in people` 搜索以查看 `name` 是否在 `people` 字典中。此外，在 `print` 语句中，我们可以使用 `name` 作为键来访问 `people` 字典中的值，非常方便！
-   Python 在其内置搜索中已尽力实现常数时间复杂度。

## 比较

-   我们可以用 Python 如下实现比较：

    ```
    # Compares two strings

    # Get two strings
    s = input("s: ")
    t = input("t: ")

    # Compare strings
    if s == t:
        print("Same")
    else:
        print("Different")

    ```

    请注意，Python 使用 `==` 比较变量，且允许直接比较字符串，无需像 C 语言那样使用指针逐字符检查。

## 交换

-   此外，我们可以实现一个像在 C 中那样交换值的程序。 考虑以下 Python 代码：

    ```
    # Swaps two integers

    x = 1
    y = 2

    print(f"x is {x}, y is {y}")
    x, y = y, x
    print(f"x is {x}, y is {y}")

    ```

    请注意，每个值都已交换，使用了很 Python 的语法 `x, y = y, x`。

## CSV

-   您还可以使用 Python 来处理 CSV 文件。 考虑以下名为 `phonebook.py` 的程序：

    ```
    # Saves names and numbers to a CSV file

    import csv

    # Get name and number
    name = input("姓名: ")
    number = input("电话号码: ")

    # Open CSV file
    with open("phonebook.csv", "a") as file:

        # Print to file
        writer = csv.writer(file)
        writer.writerow([name, number])

    ```

    请注意，使用 `with` 代码块能确保文件在使用完毕后自动关闭，无需手动调用 `close`。

-   通常，CSV 文件包含具有特定名称的列。可以使用 `DictWriter` 创建 CSV 文件，并为每列指定名称。 考虑对我们的代码进行以下修改：

    ```
    # Saves names and numbers to a CSV file using a DictWriter

    import csv

    # Get name and number
    name = input("姓名: ")
    number = input("电话号码: ")

    # Open CSV file
    with open("phonebook.csv", "a") as file:

        # Print to file
        writer = csv.DictWriter(file, fieldnames=["name", "number"])
        writer.writerow({"name": name, "number": number})

    ```

    请注意，`name` 和 `number` 列是在倒数第二行代码中定义的，并且值是在最后一行添加的。

-   您可以在 Python 文档中了解更多关于 CSV 文件的信息：[Python 文档](https://docs.python.org/3/library/csv.html)

## 语音

-   使用第三方库，Python 可以进行文本到语音的转换。

    ```
    # Says hello to someone

    import pyttsx3

    engine = pyttsx3.init()
    name = input("请问你叫什么名字？")
    engine.say(f"你好，{name}")
    engine.runAndWait()

    ```

-   此外，您可以运行以下代码：

    ```
    # Says "This was CS50"

    import pyttsx3

    engine = pyttsx3.init()
    engine.say("This was CS50")
    engine.runAndWait()

    ```

## 总结

在本课程中，您学习了如何用 Python 实现之前课程中的编程构建块。 此外，您还学习了 Python 如何允许更简化的代码。 此外，您还学习了如何使用各种 Python 库。 最后，您了解到您作为程序员的技能并不局限于单一编程语言。 通过本课程，您会发现一种新的学习方法，它不仅适用于任何编程语言，甚至适用于其他学习领域！ 具体来说，我们讨论了……

*   Python
*   变量
*   条件语句
*   循环
*   数据类型
*   库
*   字典
*   命令行参数
*   正则表达式

下节课见！
