---
title:  Lab 1 Functions, Control
---

# Lab 1: 函数、控制 | CS 61A 2024年春季

## Lab 1: 函数、控制

-   [lab01.zip](/resource/cs61a/lab/lab01.zip)

_截止日期：1月24日周三晚上11:59_

## 初始文件

下载 [lab01.zip](/resource/cs61a/lab/lab01.zip)。压缩包里包含了本次实验的初始文件，以及Ok自动评分器的副本。

## 必做题

## 入门指导视频

这些视频能帮助你更好地解决本次作业中的编程问题。

> 观看视频需要登录您的伯克利邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdIweNNPm4tZYMrVXd76H_l)

## 回顾

以下是几种常用的运行Python文件的方法。

1.  不带任何命令行参数运行Python文件，执行完毕后会返回到命令行界面。如果文件只包含函数定义，没有语法错误就不会有任何输出。
    
    ```
    python3 lab00.py
    ```
    
2.  **`-i`**: `-i` 选项会先运行文件中的代码，然后打开一个交互式Python会话 (显示 `>>>` 提示符)。 你可以执行表达式，比如调用你定义的函数。 输入`exit()` 可以退出。快捷键是Linux/Mac下的 `Ctrl-D` 和 Windows 下的 `Ctrl-Z Enter`。
    
    如果以交互模式运行Python文件时做了修改，需要先退出再重新启动解释器，修改才能生效。
    
    以下是如何以交互方式运行 `lab00.py`：
    
    ```
    python3 -i lab00.py
    ```
    
3.  **`-m doctest`**: `-m doctest`： 运行文件中的doctest。 Doctest是函数文档字符串里的示例代码。
    
    文件中的每个测试都包含 `>>>`，后跟一些 Python 代码和预期输出。
    
    以下是如何运行 `lab00.py` 中的 doctest：
    
    ```
     python3 -m doctest lab00.py
    ```
    
    如果所有doctest都通过，不会有任何输出。 否则会显示测试失败的信息。
    

  

在61A课程中，我们使用OK程序来自动评分实验、作业和项目。

要用OK测试函数，运行以下命令 (把 `FUNCTION` 替换成函数名):

```
python3 ok -q FUNCTION
```

如果你的函数里有以`"DEBUG:"`开头的`print`语句，OK会自动忽略这行。(否则多余的`print`语句可能会导致测试失败，因为它会产生额外的输出。)

```
print("DEBUG:", x)
```

更多关于OK的功能请参考[使用 OK 页面](https://cs61a.org/articles/using-ok)。** 你可以在[ok-help](https://go.cs61a.org/ok-help) 快速生成大部分OK命令。**

  

以下是 Python 3 中与除法相关的运算符的示例：

| 真除 `/` (结果为浮点数) | 地板除 `//` (结果为整数) | 取模 `%` (求余数) |
| --- | --- | --- |
| 
```
>>> 1 / 5
0.2
>>> 25 / 4
6.25

>>> 4 / 2
2.0

>>> 5 / 0
ZeroDivisionError

```

 | 
```
>>> 1 // 5 # 对真除的结果向下取整
0

>>> 25 // 4
6

>>> 4 // 2
2

>>> 5 // 0
ZeroDivisionError

```

 | 
```
>>> 1 % 5
1

>>> 25 % 4
1

>>> 4 % 2
0

>>> 5 % 0
ZeroDivisionError

```

 |

除数为0时会产生`ZeroDivisionError`错误。

使用`%`运算符的一个技巧是检查数字`x`是否能被`y`整除:

```
x % y == 0
```

例如，为了检查 `x` 是否为偶数：`x % 2 == 0`

  

你定义的大部分函数都会包含`return`语句，用于返回函数的结果。

当Python执行到`return`语句时，函数会立刻结束。 如果执行到函数结尾都没有遇到`return`语句，函数会返回`None`。

相反，`print`函数用于打印输出。 和`return`语句不同，`print`函数不会立刻结束函数的执行。

```
def what_prints():
    print('Hello World!')
    return 'Exiting this function.'
    print('61A is awesome!')

>>> what_prints()
Hello World!
'Exiting this function.'
```

> 注意，`print`打印的内容**不带引号**，而`return`返回的字符串会保留引号。

## Python会输出什么？ (WWPD)

### Q1: WWPD: 控制

> 使用Ok来测试你对以下“Python会输出什么？”问题的掌握程度:
> 
> ```
> python3 ok -q control -u
> ```
> 
>
```
>>> def xk(c, d):
...     if c == 4:
...         return 6
...     elif d >= 4:
...         return 6 + 7 + c
...     else:
...         return 25
>>> xk(10, 10)
______23
>>> xk(10, 6)
______23
>>> xk(4, 6)
______6
>>> xk(0, 0)
______25
```

```
>>> def how_big(x):
...     if x > 10:
...         print('huge')
...     elif x > 5:
...         return 'big'
...     if x > 0:
...         print('positive')
...     else:
...         print(0)
>>> how_big(7)         # A returned string is displayed with single quotes
______'big'
>>> print(how_big(7))  # A printed string has no quotes
______big
>>> how_big(12)
______huge
positive
>>> print(how_big(12))
______huge
positive
None
>>> print(how_big(1), how_big(0))
______positive
0
None None
```

```
>>> n = 3
>>> while n >= 0:
...     n -= 1
...     print(n)
______2
1
0
-1
```

```
>>> negative = -12
>>> while negative:  # All numbers are true values except 0
...    if negative + 6:
...        print(negative)
...    negative += 3
______-12
-9
-3
```

### Q2: 调试小测验

以下是一个关于不同调试技巧的快速测验，这些技巧将对您在本课程中使用有所帮助。您可以参考[调试文章](https://cs61a.org/articles/debugging/)来回答问题。

使用 Ok 来测试您的理解：

```
python3 ok -q debugging-quiz -u
```

## 编写代码

### Q3: 递降阶乘

让我们编写一个函数 `falling`，它是一个“递降”阶乘，接受两个参数 `n` 和 `k`，并返回从 `n` 开始向下数的 `k` 个连续数字的乘积。当 `k` 为 0 时，该函数应返回 1。

```
def falling(n, k):
    """Compute the falling factorial of n to depth k.

    >>> falling(6, 3)  # 6 * 5 * 4
    120
    >>> falling(4, 3)  # 4 * 3 * 2
    24
    >>> falling(4, 1)  # 4
    4
    >>> falling(4, 0)
    1
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试您的代码：

```
python3 ok -q falling
```

### Q4: 能被 k 整除

编写一个函数 `divisible_by_k`，它接受正整数 `n` 和 `k`。它打印所有小于或等于 `n` 且能被 `k` 整除的正整数，从最小到最大。然后，它返回打印了多少个数字。

```
def divisible_by_k(n, k):
    """
    >>> a = divisible_by_k(10, 2)  # 2, 4, 6, 8, and 10 are divisible by 2
    2
    4
    6
    8
    10
    >>> a
    5
    >>> b = divisible_by_k(3, 1)  # 1, 2, and 3 are divisible by 1
    1
    2
    3
    >>> b
    3
    >>> c = divisible_by_k(6, 7)  # There are no integers up to 6 divisible by 7
    >>> c
    0
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试您的代码：

```
python3 ok -q divisible_by_k
```

### Q5: 数字求和

编写一个函数，该函数接受一个非负整数并对其数字求和。（在这里使用向下取整除法和模运算可能会有所帮助！）

```
def sum_digits(y):
    """Sum all the digits of y.

    >>> sum_digits(10) # 1 + 0 = 1
    1
    >>> sum_digits(4224) # 4 + 2 + 2 + 4 = 12
    12
    >>> sum_digits(1234567890)
    45
    >>> a = sum_digits(123) # make sure that you are using return rather than print
    >>> a
    6
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试您的代码：

```
python3 ok -q sum_digits
```

## 课程大纲测验

### Q6: 课程大纲测验

请填写[课程大纲测验](https://go.cs61a.org/syllabus-quiz)，以确认您对 CS 61A [课程政策](https://cs61a.org/articles/about/)的理解。

## 在本地检查您的分数

您可以通过运行以下命令在本地检查您在此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业！** 当您对自己的分数感到满意时，请将作业提交到 Gradescope 以获得学分。

## 提交

通过将您编辑过的任何文件上传**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。
```此外，**未**参加大型实验课的所有学生都需要填写此[考勤表](https://go.cs61a.org/lab-att)。无论您是否参加实验课，**都**请每周提交此表格，即使您因故缺席。参加大型实验课的学生则无需填写考勤表。

## 可选问题

这些问题是选做的。即使不做，您也能获得实验课的学分。不过，它们是很好的练习机会，所以还是建议大家尝试！

### Q7: WWPD：如果...会怎样？

使用 Ok 来检验你对以下“Python 会输出什么？”问题的理解程度:

```
python3 ok -q if-statements -u
```

**提示**：`print`（与 `return` 不同）_不会_导致函数退出。

```
>>> def ab(c, d):
...     if c > 5:
...         print(c)
...     elif c > 7:
...         print(d)
...     print('foo')
>>> ab(10, 20)
______10
foo
```

```
>>> def bake(cake, make):
...     if cake == 0:
...         cake = cake + 1
...         print(cake)
...     if cake == 1:
...         print(make)
...     else:
...         return cake
...     return make
>>> bake(0, 29)
______1
29
29
>>> bake(1, "mashed potatoes")
______mashed potatoes
'mashed potatoes'
```

### Q8: 双八

编写一个函数，输入一个数字，判断该数字中是否包含两个相邻的 8。

```
def double_eights(n):
    """如果 n 包含两个连续的 8，则返回 True。
    >>> double_eights(8)
    False
    >>> double_eights(88)
    True
    >>> double_eights(2882)
    True
    >>> double_eights(880088)
    True
    >>> double_eights(12345)
    False
    >>> double_eights(80808080)
    False
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码:

```
python3 ok -q double_eights
```
