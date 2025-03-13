---
title: Lab 1 Solutions
---

# CS 61A 2024春季 Lab 1 答案

## Lab 1 答案

-   [lab01.zip](/resource/cs61a/lab01.zip)

## 答案文件

## 必做题目

## 入门指导视频

这些视频可以帮助你解决本次作业中的编程问题。

> 观看视频需要登录你的berkeley.edu邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdIweNNPm4tZYMrVXd76H_l)

## 回顾

以下是几种常用的运行Python文件的方法。

1.  不使用命令行参数会直接运行你提供的代码文件，然后回到命令行界面。如果你的文件只包含函数定义，没有语法错误的话，运行后不会有任何输出。

    ```
    python3 lab00.py
    ```

2.  **`-i`**: `-i` 参数会先运行你的代码，然后开启一个交互式Python会话 (显示 `>>>` 提示符)。 这样你就可以执行命令，比如调用你定义的函数。 输入 `exit()` 可以退出。 快捷键是Linux/Mac下的 `Ctrl-D` 和 Windows 下的 `Ctrl-Z Enter`。

    如果你在交互模式下修改了Python文件，需要退出并重新运行才能使修改生效。

    下面是如何用交互模式运行 `lab00.py` 的例子:

    ```
    python3 -i lab00.py
    ```

3.  **`-m doctest`**: 运行文件中的doctest。 Doctest是函数文档字符串里的示例代码。

    每个测试都以 `>>>` 开头，后面是Python代码和期望的输出结果。

    下面是如何运行 `lab00.py` 中的 doctest：

    ```
     python3 -m doctest lab00.py
    ```

    如果所有doctest都通过了，不会有任何输出。 否则会显示测试失败的信息。

在 61A 中，我们使用一个名为 OK 的程序来自动评分实验、作业和项目。

要用OK测试函数，运行以下命令 (把 `FUNCTION` 替换成函数名):

```
python3 ok -q FUNCTION
```

如果你的函数里有以 `"DEBUG:"` 开头的 `print` 语句，OK会自动忽略。 (否则多余的 `print` 可能会导致测试失败)。

```
print("DEBUG:", x)
```

更多关于OK的使用方法请参考 [使用 OK 页面](https://cs61a.org/articles/using-ok)。 **您可以在 [ok-help](https://go.cs61a.org/ok-help) 快速生成大多数 ok 命令。**

以下是Python 3中和除法相关的运算符示例:

| 真除法：`/`  
(小数除法) | 地板除法：`//`  
(整数除法) | 取模：%  
(余数) |
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
>>> 1 // 5 # 向下取整除法的结果
0

>>> 25 // 4
6
``````
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

当除数为零时，会发生 `ZeroDivisionError` 错误。

使用 `%` 运算符的一个技巧是检查数字 `x` 是否可以被 `y` 整除：

```
x % y == 0
```

例如，为了检查 `x` 是否为偶数：`x % 2 == 0`

您定义的大多数函数都会包含 `return` 语句，用于返回函数调用的结果。

当 Python 执行 `return` 语句时，函数会立即结束。 如果函数执行到末尾而没有遇到 `return` 语句，则会返回 `None`。

相比之下，`print` 函数用于显示数值。 与 `return` 语句不同，Python 执行 `print` 语句时，函数_不会_立即结束。

```
def what_prints():
    print('Hello World!')
    return 'Exiting this function.'
    print('61A is awesome!')

>>> what_prints()
Hello World!
'Exiting this function.'
```

> 还要注意，`print` 显示文本时**不包含引号**，而 `return` 返回的值会保留引号。

## Python 会输出什么？(WWPD)

### Q1: WWPD: 控制

> 使用 Ok 来测试你对以下“Python 会输出什么？”问题的理解:
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
>>> how_big(7)         # 返回的字符串会用单引号显示
______'big'
>>> print(how_big(7))  # 打印的字符串不带引号
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
>>> while negative:  # 除了 0 以外，所有非零数字都是真值
...    if negative + 6:
...        print(negative)
...    negative += 3
______-12
-9
-3
```

### Q2: 调试测验
```以下是一个关于调试技巧的小测验，这些技巧对本课程的学习很有帮助。您可以参考[调试文章](https://cs61a.org/articles/debugging/)来检验你的理解程度：

```
python3 ok -q debugging-quiz -u
```

## 编写代码

### Q3: 递降阶乘

我们来编写一个名为 `falling` 的函数，它实现“递降阶乘”的功能。该函数接受两个参数 `n` 和 `k`，返回从 `n` 开始递减的 `k` 个连续整数的乘积。当 `k` 等于 0 时，函数返回 1。

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
    total, stop = 1, n-k
    while n > stop:
        total, n = total*n, n-1
    return total
```

使用 Ok 来测试您的代码：

```
python3 ok -q falling
```

### Q4: 能被 k 整除

编写一个函数 `divisible_by_k`，该函数接受两个正整数 `n` 和 `k` 作为参数。函数的功能是打印所有小于等于 `n` 且能被 `k` 整除的正整数，并按照从小到大的顺序输出。最后，函数返回打印出的数字个数。

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
    count = 0
    i = 1
    while i <= n:
        if i % k == 0:
            print(i)
            count += 1
        i += 1
    return count
```

使用 Ok 来测试您的代码：

```
python3 ok -q divisible_by_k
```

### Q5: 数字求和

编写一个函数，该函数接收一个非负整数作为输入，并计算其各位数字之和。（提示：向下取整除法和求模运算可能会有帮助！）

```
def sum_digits(y):
    """Sum all the digits of y.
```
>>> sum_digits(10) # 1 + 0 = 1
    1
    >>> sum_digits(4224) # 4 + 2 + 2 + 4 = 12
    12
    >>> sum_digits(1234567890)
    45
    >>> a = sum_digits(123) # 确保你用的是 return，而不是 print
    >>> a
    6
    """
    total = 0
    while y > 0:
        total, y = total + y % 10, y // 10
    return total
```

用 Ok 来测试你的代码:

```
python3 ok -q sum_digits
```

## 教学大纲测验

### Q6: 教学大纲测验

请填写[教学大纲测验](https://go.cs61a.org/syllabus-quiz)，确认你已理解 CS 61A 的[课程政策](https://cs61a.org/articles/about/)。

## 在本地查看你的分数

你可以通过运行以下命令在本地查看你在本次作业中每个题目的得分

```
python3 ok --score
```

**这不会提交作业！** 当你对得分满意时，将作业提交到 Gradescope 以获取学分。

## 提交

提交作业时，请将你编辑过的文件上传**到 Gradescope 上对应的作业页面**。 [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生都需要填写[考勤表](https://go.cs61a.org/lab-att)。无论是否参加实验课，或者因故缺席，都需要每周提交此表格。大型实验课的学生不需要填写考勤表。

## 可选问题

> 这些题目是选做的。即使没有完成，你仍然可以获得实验课的学分。这些题目是很好的练习，建议尝试完成！

### Q7: WWPD: 如果？

> 使用 Ok 来测试你对以下“Python 会输出什么？”问题的掌握程度：
> 
> ```
> python3 ok -q if-statements -u
> ```
> 
> **提示**：`print`（与 `return` 不同）不会导致函数退出。

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

编写一个函数，判断一个数字中是否包含两个相邻的 8。
``````
def double_eights(n):
    """如果数字 n 中存在两个连续的 8，则返回 True。
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
    prev_eight = False
    while n > 0:
        last_digit = n % 10
        if last_digit == 8 and prev_eight:
            return True
        elif last_digit == 8:
            prev_eight = True
        else:
            prev_eight = False
        n = n // 10
    return False

# 另一种解法
def double_eights_alt(n):
    while n:
        if n % 10 == 8 and n // 10 % 10 == 8:
            return True
        n //= 10
    return False
```

用 Ok 运行你的代码测试一下：

```
python3 ok -q double_eights
```
