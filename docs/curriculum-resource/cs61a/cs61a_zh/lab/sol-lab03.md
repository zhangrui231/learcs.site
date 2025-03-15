---
title: Lab 3 Solutions
---

# CS 61A 2024 春季学期 Lab 3 实验解答

## Lab 3 解决方案

-   [lab03.zip](/resource/cs61a/lab03.zip)

## 解答文件

## 主题

如果需要复习相关知识，请参考本节。也可以直接跳到[问题](#required-questions)，遇到问题再返回查阅。

## 列表

列表是一种数据结构，用于存储有序的元素集合。这些元素可以是任何数据类型，包括数字、字符串，甚至是列表。使用方括号 `[]` 包裹，并用逗号分隔的表达式，即可创建一个列表。

```
>>> list_of_values = [2, 1, 3, True, 3]
>>> nested_list = [2, [1, 3], [True, [3]]]
```

列表中的每个元素都有对应的索引，最左边元素的索引从 `0` 开始。

```
>>> list_of_values[0]
2
>>> nested_list[1]
[1, 3]
```

负索引表示从列表末尾开始倒数，最右边元素的索引为 `-1`。

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

列表推导式用于描述列表中的元素，并生成一个新的列表。

有两种形式：

```
[<表达式> for <元素> in <序列>]
[<表达式> for <元素> in <序列> if <条件>]
```

例如，对于列表 `[1, 2, 3, 4]`，使用 `if i % 2 == 0` 筛选出偶数元素 `2` 和 `4`，然后通过 `i*i` 计算它们的平方。`for i` 的作用是遍历列表 `[1, 2, 3, 4]` 中的每个元素。

```
>>> [i*i for i in [1, 2, 3, 4] if i % 2 == 0]
[4, 16]
```

该列表推导式会生成一个新列表，其中包含序列 `[1, 2, 3, 4]` 中所有偶数元素的平方值。

我们还可以将列表推导式重写为等效的 `for` 语句，例如上面的示例：

```
>>> result = []
>>> for i in [1, 2, 3, 4]:
...     if i % 2 == 0:
...         result = result + [i*i]
>>> result
[4, 16]
```

## `for` 循环

`for` 循环用于遍历序列（例如列表或范围）中的每个元素。每次循环时，`for` 关键字后面的变量名都会绑定到序列中的当前元素。

```
for <名称> in <表达式>:
    <代码块>
```

首先，计算 `<表达式>`，其结果必须是一个序列。然后，对于序列中的每个元素，依次执行以下操作：

1.  将 `<名称>` 绑定到当前元素。
2.  执行 `<代码块>`。

这是一个例子：

```
for x in [-1, 4, 2, 0, 5]:
    print("Current elem:", x)
```
```
当前元素: -1
当前元素: 4
当前元素: 2
当前元素: 0
当前元素: 5
```

## 区间

区间是一种包含整数序列的数据结构。可以通过以下方式创建区间：

-   `range(stop)` 包含 0, 1, ..., `stop` - 1
-   `range(start, stop)` 包含 `start`, `start` + 1, ..., `stop` - 1

注意，`range` 函数不包含 `stop` 值，它生成的数字范围是直到 `stop`，但不包括 `stop`。

例如：

```
>>> for i in range(3):
...     print(i)
...
0
1
2
```

区间和列表虽然都属于[序列](https://en.wikibooks.org/wiki/Python_Programming/Sequences)，但区间对象与列表有所不同。可以使用 `list()` 将区间转换为列表：

```
>>> range(3, 6)
range(3, 6)  # 这是一个 range 对象
>>> list(range(3, 6))
[3, 4, 5]  # list() 将 range 对象转换为列表
>>> list(range(5))
[0, 1, 2, 3, 4]
>>> list(range(1, 6))
[1, 2, 3, 4, 5]
```

## 必做题

## 列表

### Q1: WWPD: 列表 & 区间

> 使用 Ok 测试你对以下“Python 会显示什么？”问题的理解程度：
>
> ```
> python3 ok -q lists-wwpd -u
> ```

预测当你将以下内容键入交互式解释器时，Python 将显示什么。然后尝试一下以检查你的答案。

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

实现 `print_if` 函数，该函数接受列表 `s` 和单参数函数 `f`，并打印 `s` 中使 `f(x)` 返回 `True` 的每个元素 `x`。

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
if f(x):
            print(x)
```

使用 Ok 来测试你的代码：

```
python3 ok -q print_if
```

### Q3: Close
```实现 `close` 函数，该函数接收一个数字列表 `s` 和一个非负整数 `k`。该函数返回列表 `s` 中有多少个元素与它们的索引的差值在 `k` 以内。也就是说，对于列表中的每个元素，其值与索引之差的绝对值小于或等于 `k`。

> 请记住，列表的索引是从 0 开始的；也就是说，第一个元素的索引是 `0`。

```
def close(s, k):
    """返回 s 中有多少个元素在其索引的 k 范围内。

    >>> t = [6, 2, 4, 3, 5]
    >>> close(t, 0)  # 只有 3 等于其索引
    1
    >>> close(t, 1)  # 2、3 和 5 在其索引的 1 范围内
    3
    >>> close(t, 2)  # 2、3、4 和 5 都在其索引的 2 范围内
    4
    >>> close(list(range(10)), 0)
    10
    """
    count = 0
    for i in range(len(s)):  # 使用 range 函数遍历索引
if abs(i - s[i]) <= k:
            count += 1    return count
```

使用 Ok 测试你的代码：

```
python3 ok -q close
```

## 列表解析

### Q4: WWPD: 列表解析

> 使用 Ok 来测试你对以下“Python 会显示什么？”问题的了解：
> 
> ```
> python3 ok -q list-comprehensions-wwpd -u
> ```
> 
>   

预测当你将以下内容输入到交互式解释器时，Python 将显示什么。然后尝试一下以检查你的答案。

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

### Q5: Close List

实现 `close_list` 函数，该函数接收一个数字列表 `s` 和一个非负整数 `k`。该函数返回一个新列表，其中包含 `s` 中所有与它们的索引的差值在 `k` 以内的元素。也就是说，对于返回列表中的每个元素，其值与索引之差的绝对值小于或等于 `k`。

```
def close_list(s, k):
    """返回 s 中在其索引的 k 范围内的元素的列表。

    >>> t = [6, 2, 4, 3, 5]
    >>> close_list(t, 0)  # 只有 3 等于其索引
    [3]
    >>> close_list(t, 1)  # 2、3 和 5 在其索引的 1 范围内
    [2, 3, 5]
    >>> close_list(t, 2)  # 2、3、4 和 5 都在其索引的 2 范围内
    [2, 4, 3, 5]
    """
return [s[i] for i in range(len(s)) if abs(i - s[i]) <= k]
```

使用 Ok 测试你的代码：

```
python3 ok -q close_list
```

### Q6: 完全平方数
实现函数 `squares`，该函数接收一个正整数列表。它返回一个列表，包含原列表中所有完全平方数的平方根。使用列表推导式。

> 要查找 `x` 是否为完全平方数，您可以检查 `sqrt(x)` 是否等于 `round(sqrt(x))`。

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
return [round(n ** 0.5) for n in s if n == round(n ** 0.5) ** 2]
```

可以先从一个列表推导式的框架开始：

```
[round(sqrt(x)) for x in s if is_perfect_square(x)]
```

这很好，但它要求我们有一个 `is_perfect_square` 函数。我们如何检查某个东西是否是完全平方数？

-   如果一个数的平方根是一个整数，那么它就是一个完全平方数。例如，`sqrt(61) = 7.81024...`（不是完全平方数）和 `sqrt(49) = 7`（完全平方数）。
-   一旦我们获得了数字的平方根，我们只需要检查它是否是整数。 `is_perfect_square` 函数可能如下所示：
    
    ```
    def is_perfect_square(x):
        return is_whole(sqrt(x))
    ```
    
-   最后一个难题：要检查一个数字是否为整数，我们只需要看看它是否有小数。我们在解决方案中选择的方法是将原始数字与四舍五入的版本进行比较（从而删除所有小数），但是采用地板除法 (`//`) 或其他完全不同的技术也可以。

虽然我们为了解决这个问题编写了这些辅助函数，但它们实际上都非常简短。因此，我们可以直接将这些辅助函数的内容复制到列表推导式中，得到最终的解决方案。

视频讲解：

[YouTube link](https://youtu.be/YwLFB9paET0)

使用 Ok 来测试你的代码：

```
python3 ok -q squares
```

## 递归

### Q7：双重八

编写一个**递归**函数，该函数接收一个正整数 `n`，并确定其数字是否包含两个相邻的 `8`。 不要使用 `for` 或 `while`。

> **提示：** 可以尝试递归的思路：一个数字包含两个相邻的8，如果（想想一个容易直接判断的情况）或者剩余的数字部分包含两个相邻的8。

```
def double_eights(n):
    """ 返回`n`是否包含两个连续的数字 `8`。 假定`n`至少包含两位数。

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
    >>> # ban iteration
    >>> check(LAB_SOURCE_FILE, 'double_eights', ['While', 'For'])
    True
    """
    last, second_last = n % 10, n // 10 % 10
    if last == 8 and second_last == 8:
        return True
    elif n < 100:
        return False
    return double_eights(n // 10)

    # Alternate solution
    last, second_last = n % 10, n // 10 % 10
    if n < 10:
        return False
    return (last == 8 and second_last == 8) or double_eights(n // 10)

    # Alternate solution with helper function: 
    def helper(num, prev_eight):
        if num == 0:
            return False
        if num % 10 == 8:
            if prev_eight:
                return True
            return helper(num // 10, True)
        return helper(num // 10, False)
    return helper(n, False)
```

用 Ok 测试你的代码：

```
python3 ok -q double_eights
```

### Q8：制作洋葱

编写一个函数 `make_onion`，它接受两个单参数函数 `f` 和 `g`。它返回一个函数，该函数接受三个参数：`x`、`y` 和 `limit`。如果可以通过最多 `limit` 次调用 `f` 和 `g` 从 `x` 到达 `y`，则返回的函数返回 `True`，否则返回 `False`。

例如，如果 `f` 加 1 并且 `g` 加倍，则可以在四次调用中从 5 到达 25：`f(g(g(f(5))))`。

```
def make_onion(f, g):
    """返回一个函数 can_reach(x, y, limit)，判断是否可以通过最多 limit 次调用函数 f 和 g，从 x 得到 y。

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
            return False
        elif x == y:
            return True
        else:
            return can_reach(f(x), y, limit - 1) or can_reach(g(x), y, limit - 1)
    return can_reach
```

用 Ok 测试你的代码：
```
python3 ok -q make_onion
```

## 本地查看你的成绩

你可以通过运行以下命令，在本地查看本次作业中每个题目的得分情况：

```
python3 ok --score
```

**注意：这不会提交你的作业！** 当你对你的成绩感到满意时，请将作业提交到 Gradescope 以获取学分。

## 提交

请上传你修改过的文件到 Gradescope 上对应的作业提交。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有非大型实验课的学生都需要填写[考勤表](https://go.cs61a.org/lab-att)。请每周提交，无论你是否参加了实验课，即使因故缺席也请提交。大型实验课的学生则无需填写。
```