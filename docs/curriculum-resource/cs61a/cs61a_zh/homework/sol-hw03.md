---
title: Homework 3 Solutions
---

# CS 61A 2024 春季作业 3 答案

## Homework 3 答案

-   [hw03.zip](/resource/cs61a/hw03.zip)

## 答案文件

你可以在 [hw03.py](https://cs61a.org//hw/sol-hw03/hw03.py) 中找到答案。

## 题目

## 入门指导视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 观看这些视频需要登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZceh9L8HHuBvUjozvwJSC0i)

### Q1: Num Eights

编写一个递归函数 `num_eights`，该函数接受一个正整数 `n` 并返回数字 8 在 `n` 中出现的次数。

**重要提示：** 使用递归；如果您使用任何赋值语句或循环，测试将失败。（但是，如果您愿意，可以使用函数定义。）

```
def num_eights(n):
    """Returns the number of times 8 appears as a digit of n.

    >>> num_eights(3)
    0
    >>> num_eights(8)
    1
    >>> num_eights(88888888)
    8
    >>> num_eights(2638)
    1
    >>> num_eights(86380)
    2
    >>> num_eights(12345)
    0
    >>> num_eights(8782089)
    3
    >>> from construct_check import check
    >>> # ban all assignment statements
    >>> check(HW_SOURCE_FILE, 'num_eights',
    ...       ['Assign', 'AnnAssign', 'AugAssign', 'NamedExpr', 'For', 'While'])
    True
    """
if n % 10 == 8:
        return 1 + num_eights(n // 10)
    elif n < 10:
        return 0
    else:
        return num_eights(n // 10)
```

使用 Ok 测试你的代码:

```
python3 ok -q num_eights
```

这个问题的等价迭代版本可能如下所示:

```
total = 0
while n > 0:
    if n % 10 == 8:
        total = total + 1
    n = n // 10
return total
```

主要思路是检查每一位数字是否为 8。递归的解法类似，只是依赖递归调用来计算剩余数字中 8 出现的次数，然后将结果加到当前数字是否为8的判断上。

### Q2: Digit Distance

对于给定的整数，_digit distance_ 是连续数字之间绝对差的总和。例如：

-   `6` 的 digit distance 为 `0`。
-   `61` 的 digit distance 为 `5`，因为 `6 - 1` 的绝对值为 `5`。
-   `71253` 的 digit distance 为 `12` (`6 + 1 + 3 + 2`)。

编写一个函数来计算给定正整数的 digit distance。 必须使用递归方法，否则测试将会失败。

> **提示：** 解决这个问题的方法有很多！ 如果遇到困难，可以先写出迭代解法，再将其转换为递归解法。

```
def digit_distance(n):
    """Determines the digit distance of n.

>>> digit_distance(3)
    0
    >>> digit_distance(777)
    0
    >>> digit_distance(314)
    5
    >>> digit_distance(31415926535)
    32
    >>> digit_distance(3464660003)
    16
    >>> from construct_check import check
    >>> # ban all loops
    >>> check(HW_SOURCE_FILE, 'digit_distance',
    ...       ['For', 'While'])
    True
    """
如果 n < 10:
        return 0
    return abs(n % 10 - (n // 10) % 10) + digit_distance(n // 10)

# Alternate solution 1
def digit_distance_alt(n):
    def helper(prev, n):
        if n == 0:
            return 0
        dist = abs(prev - n % 10)
        return dist + helper(n % 10, n // 10)
    return helper(n % 10, n // 10)

# Alternate solution 2
def digit_distance_alt_2(n):
    def helper(dist, prev, n):
        if n == 0:
            return dist
        dist += abs(prev - n % 10)
        prev = n % 10
        n //= 10
        return helper(dist, prev, n)
    return helper(0, n % 10, n // 10)
```

使用 Ok 测试你的代码:

```
python3 ok -q digit_distance
```

这个问题的等效迭代版本可能如下所示：

```
def distance(n):
    dist = 0
    prev = n % 10
    n //= 10
    while n > 0:
        dist += abs(prev - n % 10)
        prev = n % 10
        n //= 10
    return dist
```

主要思路是，将迭代解法中的每个参数作为辅助函数的输入。递归解法与上述迭代主体类似，取数字的末两位，计算它们的差值，然后通过 `n // 10` 将数字截断一位。

当使用递归实现时，此框架可以简化（请参阅另一种解法），但重用上述迭代主体对于此问题来说已经足够。

### Q3: 交错求和

编写一个函数 `interleaved_sum`，它接收数字 `n` 和两个单参数函数 `odd_func` 和 `even_func`。它将 `odd_func` 应用于 1 到 `n` (包括 `n`) 之间的每个奇数，`even_func` 应用于每个偶数，并返回它们的总和。

例如，执行 `interleaved_sum(5, lambda x: x, lambda x: x * x)` 返回 `1 + 2*2 + 3 + 4*4 + 5 = 29`。

实现此函数，不使用循环或直接判断奇偶性 (禁用取模运算 `%`!)。无需判断奇偶，从奇数 1 开始即可。

> 提示：引入一个内部辅助函数，接收一个奇数 `k`，计算从 `k` 到 `n` (包括 `n`) 的交错和。

```
def interleaved_sum(n, odd_func, even_func):
    """计算总和 odd_func(1) + even_func(2) + odd_func(3) + ...，直到 n。

>>> identity = lambda x: x
    >>> square = lambda x: x * x
    >>> triple = lambda x: x * 3
    >>> interleaved_sum(5, identity, square) # 1   + 2*2 + 3   + 4*4 + 5
    29
    >>> interleaved_sum(5, square, identity) # 1*1 + 2   + 3*3 + 4   + 5*5
    41
    >>> interleaved_sum(4, triple, square)   # 1*3 + 2*2 + 3*3 + 4*4
    32
    >>> interleaved_sum(4, square, triple)   # 1*1 + 2*3 + 3*3 + 4*3
    28
    >>> from construct_check import check
    >>> check(HW_SOURCE_FILE, 'interleaved_sum', ['While', 'For', 'Mod']) # ban loops and %
    True
    """
def sum_from(k):
        if k > n:
            return 0
        elif k == n:
            return odd_func(k)
        else:
            return odd_func(k) + even_func(k+1) + sum_from(k + 2)
    return sum_from(1)
```

用 Ok 测试你的代码：

```
python3 ok -q interleaved_sum
```

  

### Q4：数硬币

给定一个正整数 `total`，如果一组硬币的面值之和为 `total`，则这组硬币可以兑换 `total`。 在这里，我们将使用标准的美国硬币面值：1、5、10、25。 例如，以下集合可以兑换 `15`：

- 15 个 1 美分硬币
- 10 个 1 美分硬币，1 个 5 美分硬币
- 5 个 1 美分硬币，2 个 5 美分硬币
- 5 个 1 美分硬币，1 个 10 美分硬币
- 3 个 5 美分硬币
- 1 个 5 美分硬币，1 个 10 美分硬币

因此，有 6 种方法可以兑换 `15`。 编写一个**递归**函数 `count_coins`，该函数接受一个正整数 `total`，并返回使用硬币兑换 `total` 的方法数。

您可以使用给定的任何一个函数：

- `next_larger_coin` 将返回下一个更大的硬币面额，即 `next_larger_coin(5)` 为 `10`。
- `next_smaller_coin` 将返回下一个更小的硬币面额，即 `next_smaller_coin(5)` 为 `1`。
- 如果下一个硬币值不存在，则任一函数将返回 `None`

解决此问题主要有两种方法。 一种方法使用 `next_larger_coin`，另一种方法使用 `next_smaller_coin`。

**重要提示：**使用递归； 如果您使用循环，测试将失败。

> **提示：**参考 `count_partitions` 的[实现](https://www.composingprograms.com/pages/17-recursive-functions.html#example-partitions)，了解如何计算使用较小部分求和到最终值的方法。 如果您需要在递归调用中跟踪多个值，请考虑编写一个辅助函数。

```
def next_larger_coin(coin):
    """按顺序返回下一个更大的硬币。
    >>> next_larger_coin(1)
    5
    >>> next_larger_coin(5)
    10
    >>> next_larger_coin(10)
    25
    >>> next_larger_coin(2) # 对于其他值，返回 None
    """
    if coin == 1:
        return 5
    elif coin == 5:
        return 10
    elif coin == 10:
        return 25

def next_smaller_coin(coin):
    """Returns the next smaller coin in order.
    >>> next_smaller_coin(25)
    10
    >>> next_smaller_coin(10)
    5
    >>> next_smaller_coin(5)
    1
    >>> next_smaller_coin(2) # Other values return None
    """
    if coin == 25:
        return 10
    elif coin == 10:
        return 5
    elif coin == 5:
        return 1

def count_coins(total):
    """Return the number of ways to make change using coins of value of 1, 5, 10, 25.
    >>> count_coins(15)
    6
    >>> count_coins(10)
    4
    >>> count_coins(20)
    9
    >>> count_coins(100) # How many ways to make change for a dollar?
    242
    >>> count_coins(200)
    1463
    >>> from construct_check import check
    >>> # ban iteration
    >>> check(HW_SOURCE_FILE, 'count_coins', ['While', 'For'])
    True
    """
def constrained_count(total, smallest_coin):
        if total == 0:
            return 1
        if total < 0:
            return 0
        if smallest_coin == None:
            return 0
        without_coin = constrained_count(total, next_larger_coin(smallest_coin))
        with_coin = constrained_count(total - smallest_coin, smallest_coin)
        return without_coin + with_coin
    return constrained_count(total, 1)

    # Alternate solution: using next_smaller_coin
    def constrained_count_small(total, largest_coin):
        if total == 0:
            return 1
        if total < 0:
            return 0
        if largest_coin == None:
            return 0
        without_coin = constrained_count_small(total, next_smaller_coin(largest_coin))
        with_coin = constrained_count_small(total - largest_coin, largest_coin)
        return without_coin + with_coin
    return constrained_count_small(total, 25)
```

使用 Ok 测试你的代码:

```
python3 ok -q count_coins
```

这和 `count_partitions` 问题很相似，只有一些细微差别：

-   因为没有给出最大分割大小，所以我们需要创建一个带两个参数的辅助函数，并且还需要一个辅助函数来查找最大硬币.
-   分割大小不是线性的；向上计数（从最小到最大硬币）时调用 `next_larger_coin`，向下计数时调用 `next_smaller_coin`。

## 在本地查看你的分数

你可以通过运行以下命令在本地查看你的分数

```
python3 ok --score
```

**这不会提交作业！** 当你对分数满意后，再将作业提交到 Gradescope 以获取学分.

## 提交

上传你编辑过的文件**到 Gradescope 对应的作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细的说明。

此外，所有**非**大型实验室的学生必须填写此[出勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验室，或者因为正当理由错过了它。大型实验室的学生不需要填写出勤表。

## 考试练习

家庭作业也会包含一些以往的考试题供你参考. 这些题目不做提交要求，如果你想挑战一下自己，可以随意尝试！
1. 2017年秋季 MT1 Q4a: [数码](https://inst.eecs.berkeley.edu/~cs61a/fa21/exam/fa17/mt1/61a-fa17-mt1.pdf#page=5)
2. 2018年夏季 MT1 Q5a: [你愿意做我的邻居吗？](https://inst.eecs.berkeley.edu/~cs61a/su18/assets/pdfs/61a-su18-mt.pdf#page=5)
3. 2019年秋季期末考试 Q6b: [回文](https://inst.eecs.berkeley.edu/~cs61a/sp21/exam/fa19/final/61a-fa19-final.pdf#page=6)

## 趣味题

以下问题超出了 61A 的范围。 如果您想迎接额外的挑战，可以尝试一下，但它们只是本课程不需要的难题。 几乎所有学生都会跳过它们，这没关系。 这些问题我们不会在Ed平台或答疑时间提供优先支持。

### Q5：汉诺塔

汉诺塔是一个经典的谜题，由三根杆和若干大小不同的圆盘组成，圆盘可以滑到任意杆上。 谜题开始时，`n` 个圆盘整齐地堆叠在 `start` 杆上，尺寸按升序排列，最小的在顶部，形成一个圆锥形。 ![汉诺塔](/img/cs61a/Tower_of_Hanoi.jpeg) 目标是将整个圆盘堆从`start`杆移动到`end`杆，需遵守以下规则:

-   一次只能移动一个圆盘。
-   每次移动包括从其中一个杆上取下顶部（最小的）圆盘，然后将其滑到另一个杆上，放在可能已经存在于该杆上的其他圆盘的顶部。
-   任何圆盘都不能放在较小圆盘的顶部。

完成 `move_stack` 的定义，它会打印出将 `n` 个圆盘从 `start` 杆移动到 `end` 杆所需的步骤，而不会违反规则。 提供的 `print_move` 函数将打印出将单个圆盘从给定的 `origin` 移动到给定的 `destination` 的步骤。

> **提示：** 在一张纸上画出几个具有不同 `n` 的游戏，并尝试找到适用于任何 `n` 的圆盘移动模式。 在您的解决方案中，每当您需要将小于 `n` 的任何数量的圆盘从一个杆移动到另一个杆时，都要采取递归的信仰飞跃。 如果您需要更多帮助，请参阅以下提示。

请参阅以下汉诺塔的动画，该动画由用户 [Trixx](https://commons.wikimedia.org/wiki/User:Trixx) 在 [Wikimedia](https://commons.wikimedia.org/wiki/File:Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif) 上找到。

![](/img/cs61a/Iterative_algorithm_solving_a_6_disks_Tower_of_Hanoi.gif)

汉诺塔中使用的策略是将除底部圆盘之外的所有圆盘移动到第二个桩上，然后将底部圆盘移动到第三个桩上，然后将除第二个圆盘之外的所有圆盘从第二个桩移动到第三个桩上。

您无需担心收集所有步骤。 只要确保按顺序打印移动，`print` 实际上会在终端中“收集”所有结果。

```
def print_move(origin, destination):
    """打印移动圆盘的步骤。"""
    print("将顶部圆盘从杆", origin, "移动到杆", destination)

def move_stack(n, start, end):
    """打印将n个圆盘从起始杆移动到结束杆，且符合汉诺塔规则的步骤。
n -- 盘子的数量
    start -- 起始杆，可以是 1、2 或 3
    end -- 目标杆，可以是 1、2 或 3

    总共有三根杆，且起始杆和目标杆必须不同。假设起始杆至少有 n 个大小递增的盘子，并且目标杆要么是空的，要么最上面的盘子比起始杆上最大的 n 个盘子还要大。

    >>> move_stack(1, 1, 3)
    Move the top disk from rod 1 to rod 3
    >>> move_stack(2, 1, 3)
    Move the top disk from rod 1 to rod 2
    Move the top disk from rod 1 to rod 3
    Move the top disk from rod 2 to rod 3
    >>> move_stack(3, 1, 3)
    Move the top disk from rod 1 to rod 3
    Move the top disk from rod 1 to rod 2
    Move the top disk from rod 3 to rod 2
    Move the top disk from rod 1 to rod 3
    Move the top disk from rod 2 to rod 1
    Move the top disk from rod 2 to rod 3
    Move the top disk from rod 1 to rod 3
    """
    assert 1 <= start <= 3 and 1 <= end <= 3 and start != end, "Bad start/end"
if n == 1:
        print_move(start, end)
    else:
        other = 6 - start - end
        move_stack(n-1, start, other)
        print_move(start, end)
        move_stack(n-1, other, end)
```
然而，这个实现依赖于`fact`这个函数名（这里不是双关），我们在`fact`函数体内部调用了它。通常，为了编写递归函数，我们会使用`def`语句或赋值语句为其指定一个名称，这样才能在函数体内部引用自身。现在，你的任务是挑战一下自己：不使用函数名，仅通过递归方式实现`fact`函数！

编写一个表达式，仅使用调用表达式、条件表达式和`lambda`表达式（没有赋值或`def`语句）来计算`n`的阶乘。

> **注意：** 你不能在你的返回表达式中使用`make_anonymous_factorial`。

`operator`模块中的`sub`和`mul`函数是解决这个问题所需的唯一内置函数。

```
from operator import sub, mul

def make_anonymous_factorial():
    """返回一个计算阶乘的表达式的值。

    >>> make_anonymous_factorial()(5)
    120
    >>> from construct_check import check
    >>> # 禁止任何赋值或递归
    >>> check(HW_SOURCE_FILE, 'make_anonymous_factorial',
    ...     ['Assign', 'AnnAssign', 'AugAssign', 'NamedExpr', 'FunctionDef', 'Recursion'])
    True
    """
return (lambda f: lambda k: f(f, k))(lambda f, k: k if k == 1 else mul(k, f(f, sub(k, 1))))
    # 另一种解法：
    #   return (lambda f: f(f))(lambda f: lambda x: 1 if x == 0 else x * f(f)(x - 1))
```

使用Ok测试你的代码：

```
python3 ok -q make_anonymous_factorial
```
