---
title: Lab 3 Recursion, Python Lists
---

# Lab 3: 递归，Python 列表

_截止日期：2月14日周三晚上11:59 (美国太平洋时间)_

## 起始文件

下载 [lab03.zip](/resource/cs61a/lab/lab03.zip)。压缩包里包含本次实验的起始文件，以及Ok自动评分器。

## 主题

如果你需要复习本实验的内容，可以参考本节。可以直接跳到[问题](#required-questions)部分，遇到问题再回来参考这里。

## 列表

列表是一种数据结构，可以存储有序的元素集合。这些元素可以是任意数据类型，包括数字、字符串，甚至其他列表。用方括号括起来，用逗号分隔的一系列表达式，就构成了一个列表：

```
>>> list_of_values = [2, 1, 3, True, 3]
>>> nested_list = [2, [1, 3], [True, [3]]]
```

列表中的每个元素都有一个索引，最左边元素的索引是`0`。

```
>>> list_of_values[0]
2
>>> nested_list[1]
[1, 3]
```

负索引从列表末尾开始计数，最右边元素的索引是`-1`。

```
>>> nested_list[-1]
[True, [3]]
```

列表相加会生成一个包含所有列表元素的新列表。

```
>>> [1, 2] + [3] + [4, 5]
[1, 2, 3, 4, 5]
```

## 列表推导式

列表推导式是一种简洁的创建列表的方式，它通过描述列表中的元素来生成新的列表。

有两种形式：

```
[<表达式> for <元素> in <序列>]
[<表达式> for <元素> in <序列> if <条件>]
```

例如，对于列表`[1, 2, 3, 4]`，我们可以用`if i % 2 == 0`来筛选出偶数元素`2`和`4`，然后用`i*i`计算它们的平方。这里的`for i` 作用是遍历`[1, 2, 3, 4]`中的每一个元素。

```
>>> [i*i for i in [1, 2, 3, 4] if i % 2 == 0]
[4, 16]
```

这个列表推导式会生成一个新列表，列表中的元素满足以下条件：

- 元素的值是`i*i`
- `i`是序列`[1, 2, 3, 4]`中的元素
- `i`满足条件`i % 2 == 0`

换句话说，这个列表推导式将创建一个新列表，其中包含原始列表 `[1, 2, 3, 4]` 中每个偶数元素的平方。

我们还可以将列表推导式重写为等效的 `for` 语句，例如上面的示例：

```
>>> result = []
>>> for i in [1, 2, 3, 4]:
...     if i % 2 == 0:
...         result = result + [i*i]
>>> result
[4, 16]
```

## For 语句

`for` 循环会遍历序列（例如列表或range）中的每个元素，并执行相应的代码块。每次执行代码时，`for` 循环中的变量会依次绑定到序列中的每个元素。

```
for <名称> in <表达式>:
    <循环体>
```

首先，计算 `<表达式>`，其结果必须是一个序列。然后，`for` 循环会依次执行以下步骤：

1.  将 `<名称>` 绑定到序列中的当前元素。
2.  执行 `<循环体>`。

这是一个例子：

```
for x in [-1, 4, 2, 0, 5]:
    print("Current elem:", x)
```

这将显示以下内容：

```
Current elem: -1
Current elem: 4
Current elem: 2
Current elem: 0
Current elem: 5
```

## 范围

Range是一种用于生成整数序列的数据结构。可以通过以下方式创建范围：

-   `range(stop)` 包含 0, 1, ..., `stop` - 1
-   `range(start, stop)` 包含 `start`, `start` + 1, ..., `stop` - 1

注意，`range`函数生成的整数序列不包含`stop`值，即生成的数字小于`stop`。

例如：

```
>>> for i in range(3):
...     print(i)
...
0
1
2
```
虽然 range 和 list 都是[序列](https://en.wikibooks.org/wiki/Python_Programming/Sequences)，但 range 对象和 list 还是有区别的。可以通过 `list()` 函数把 range 转换成 list：

```
>>> range(3, 6)
range(3, 6)  # this is a range object
>>> list(range(3, 6))
[3, 4, 5]  # list() 函数将 range 对象转换成 list
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> list(range(1, 6))
[1, 2, 3, 4, 5]
```

## 必做题目

## 列表

### Q1: WWPD: 列表 & Range

> 用 Ok 来测试你对以下“Python 会显示什么？”的理解程度：
>
> ```
> python3 ok -q lists-wwpd -u
> ```
>
>

预测在交互式解释器中输入以下代码后 Python 的输出结果，并实际运行来验证你的答案。

```
>>> s = [7//3, 5, [4, 0, 1], 2]
>>> s[0]
______2
>>> s[2]
______[4, 0, 1]
>>> s[-1]
______2
>>> len(s)
______4
>>> 4 in s
______False
>>> 4 in s[2]
______True
>>> s[2] + [3 + 2]
______[4, 0, 1, 5]
>>> 5 in s[2]
______False
>>> s[2] * 2
______[4, 0, 1, 4, 0, 1]
>>> list(range(3, 6))
______[3, 4, 5]
>>> range(3, 6)
______range(3, 6)
>>> r = range(3, 6)
>>> [r[0], r[2]]
______[3, 5]
>>> range(4)[-1]
______3
```

### Q2: Print If

实现 `print_if`，它接受一个列表 `s` 和一个单参数函数 `f`。它会打印列表 `s` 中所有使得 `f(x)` 返回 True 的元素 `x`。

```
def print_if(s, f):
    """Print each element of s for which f returns a true value.

    >>> print_if([3, 4, 5, 6], lambda x: x > 4)
    5
    6
    >>> result = print_if([3, 4, 5, 6], lambda x: x % 2 == 0)
    4
    6
    >>> print(result)  # print_if should return None
    None
    """
    for x in s:
        "*** YOUR CODE HERE ***"

```

用 Ok 运行测试用例：

```
python3 ok -q print_if
```

### Q3: Close

实现 `close`，它接受一个数字列表 `s` 和一个非负整数 `k`。它会返回列表 `s` 中有多少个元素与它们的索引的差值小于等于 `k`。

> 注意列表的索引是从 0 开始的；也就是说，第一个元素的索引是 `0`。

```
def close(s, k):
    """Return how many elements of s that are within k of their index.

    >>> t = [6, 2, 4, 3, 5]
    >>> close(t, 0)  # Only 3 is equal to its index
    1
    >>> close(t, 1)  # 2, 3, and 5 are within 1 of their index
    3
    >>> close(t, 2)  # 2, 3, 4, and 5 are all within 2 of their index
    4
    >>> close(list(range(10)), 0)
    10
    """
    count = 0
    for i in range(len(s)):  # Use a range to loop over indices
        "*** YOUR CODE HERE ***"
    return count
```

用 Ok 运行测试用例：

```
python3 ok -q close
```

## 列表解析

### Q4: WWPD: 列表解析

> 用 Ok 来测试你对以下“Python 会显示什么？”的理解程度：
>
> ```
> python3 ok -q list-comprehensions-wwpd -u
> ```
>
>

预测在交互式解释器中输入以下代码后 Python 的输出结果，并实际运行来验证你的答案。
```
>>> [2 * x for x in range(4)]
______[0, 2, 4, 6]
>>> [y for y in [6, 1, 6, 1] if y > 2]
______[6, 6]
>>> [[1] + s for s in [[4], [5, 6]]]
______[[1, 4], [1, 5, 6]]
>>> [z + 1 for z in range(10) if z % 3 == 0]
______[1, 4, 7, 10]
```

### Q5：接近列表

实现函数 `close_list`，它接受一个数字列表 `s` 和一个非负整数 `k`。 它返回列表 `s` 中所有与它们的索引的差的绝对值小于等于 `k` 的元素。 也就是说，对于列表中的每个元素，它与该元素索引的差的绝对值小于等于 `k`。

```
def close_list(s, k):
    """返回 s 中与其索引相差在 k 以内的元素的列表。

    >>> t = [6, 2, 4, 3, 5]
    >>> close_list(t, 0)  # 只有 3 等于它的索引
    [3]
    >>> close_list(t, 1)  # 元素 2、3 和 5 与它们的索引的差的绝对值小于等于 1
    [2, 3, 5]
    >>> close_list(t, 2)  # 元素 2、3、4 和 5 与它们的索引的差的绝对值小于等于 2
    [2, 4, 3, 5]
    """
    return [___ for i in range(len(s)) if ___]

```

使用 Ok 来测试你的代码：

```
python3 ok -q close_list
```

### Q6：仅平方数

实现函数 `squares`，它接受一个正整数列表。 它返回一个新列表，该列表包含原列表中所有完全平方数的平方根。 使用列表推导式。

> 判断 `x` 是否为完全平方数，可以检查 `sqrt(x)` 的值是否等于 `round(sqrt(x))` 的值。

```
from math import sqrt

def squares(s):
    """返回一个新列表，其中包含原始列表中完全平方数的元素的平方根。

    >>> seq = [8, 49, 8, 9, 2, 1, 100, 102]
    >>> squares(seq)
    [7, 3, 1, 10]
    >>> seq = [500, 30]
    >>> squares(seq)
    []
    """
    return [___ for n in s if ___]

```

使用 Ok 来测试你的代码：

```
python3 ok -q squares
```

## 递归

### Q7：双重 8

编写一个**递归**函数，输入一个正整数 `n`，判断其各位数字中是否包含两个相邻的 `8`。 不要使用 `for` 或 `while`。

> **提示：** 可以采用递归的思路。如果该数的某两位是相邻的 8 （这是一个容易检查的条件），或者该数剩余的数字中存在相邻的 8，则该数包含双重 8。

```
def double_eights(n):
    """ 返回 n 是否有连续两个数字为 8。 假设 n 至少有两位数字。

    >>> double_eights(1288)
    True
    >>> double_eights(880)
    True
    >>> double_eights(538835)
    True
    >>> double_eights(284682)
    False
    >>> double_eights(588138)
    True
    >>> double_eights(78)
    False
    >>> from construct_check import check
    >>> # 禁止迭代
    >>> check(LAB_SOURCE_FILE, 'double_eights', ['While', 'For'])
    True
    """
    "*** 你的代码在这里 ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q double_eights
```

### Q8：制作洋葱

编写一个函数 `make_onion`，它接受两个单参数函数 `f` 和 `g`。 它返回一个函数，该函数接收三个参数 `x`、`y` 和 `limit`。如果通过最多 `limit` 次调用函数 `f` 和 `g`，能够从 `x` 得到 `y`，则返回的函数返回 `True`；否则返回 `False`。

例如，如果函数 `f` 的作用是加 1，函数 `g` 的作用是乘以 2，那么可以通过四次调用从 5 得到 25：`f(g(g(f(5))))`。
```
def make_onion(f, g):
    """返回一个名为 can_reach(x, y, limit) 的函数。该函数判断是否可以通过仅使用函数 f、g 和初始值 x，且最多调用 limit 次函数，来得到结果 y。

    >>> up = lambda x: x + 1
    >>> double = lambda y: y * 2
    >>> can_reach = make_onion(up, double)
    >>> can_reach(5, 25, 4)      # 25 = up(double(double(up(5))))
    True
    >>> can_reach(5, 25, 3)      # 做不到
    False
    >>> can_reach(1, 1, 0)      # 1 = 1
    True
    >>> add_ing = lambda x: x + "ing"
    >>> add_end = lambda y: y + "end"
    >>> can_reach_string = make_onion(add_ing, add_end)
    >>> can_reach_string("cry", "crying", 1)      # "crying" = add_ing("cry")
    True
    >>> can_reach_string("un", "unending", 3)     # "unending" = add_ing(add_end("un"))
    True
    >>> can_reach_string("peach", "folding", 4)   # 做不到
    False
    """
    def can_reach(x, y, limit):
        if limit < 0:
            return ____
        elif x == y:
            return ____
        else:
            return can_reach(____, ____, limit - 1) or can_reach(____, ____, limit - 1)
    return can_reach
```

用 Ok 测试你的代码:

```
python3 ok -q make_onion
```

## 在本地查看你的分数

你可以通过运行以下命令在本地检查此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业!** 当你对你的分数满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过上传你编辑过的任何文件**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细的说明。

此外，所有**不在**大班的学生必须填写此[考勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。大班的学生不需要填写考勤表。
