---
title: Lab 4 Tree Recursion, Data Abstraction
---

# 第四次实验：树递归，数据抽象

_截止日期：2月21日周三晚上11:59_

## 起始文件

下载 [lab04.zip](/resource/cs61a/lab/lab04.zip)。压缩包内包含本次实验的起始文件，以及[Ok](https://cs61a.org/lab/lab04/ok)自动评分器的副本。

## 必做题目

## 字典

如果需要复习字典相关知识，可以参考下拉菜单。可以直接跳过本节，在遇到问题时再回过头来查阅。

字典由键值对构成，可以通过键（key）来查找对应的值（value），键必须是唯一的。

```
>>> d = {2: 4, 'two': ['four'], (1, 1): 4}
>>> d[2]
4
>>> d['two']
['four']
>>> d[(1, 1)]
4
```

可以使用 `.keys()`、`.values()` 或 `.items()` 访问键、值或键值对的序列。

```
>>> for k in d.keys():
...     print(k)
...
2
two
(1, 1)
>>> for v in d.values():
...     print(v)
...
4
['four']
4
>>> for k, v in d.items():
...     print(k, v)
...
2 4
two ['four']
(1, 1) 4
```

可以使用 `in` 关键字来检查字典中是否包含某个键：

```
>>> 'two' in d
True
>>> 4 in d
False
```

字典推导式是一种可以快速创建字典的表达式。

```
>>> {3*x: 3*x + 1 for x in range(2, 5)}
{6: 7, 9: 10, 12: 13}
```

### Q1：字典

> 使用 Ok 来测试你对以下“Python 会显示什么？”问题的掌握程度：
>
> ```
> python3 ok -q pokemon -u
> ```

```
>>> pokemon = {'pikachu': 25, 'dragonair': 148, 'mew': 151}
>>> pokemon['pikachu']
______25
>>> len(pokemon)
______3
>>> 'mewtwo' in pokemon
______False
>>> 'pikachu' in pokemon
______True
>>> 25 in pokemon
______False
>>> 148 in pokemon.values()
______True
>>> 151 in pokemon.keys()
______False
>>> 'mew' in pokemon.keys()
______True
```

### Q2：除法

实现 `divide` 函数，该函数接收两个正整数列表 `quotients` 和 `divisors` 作为输入。 函数返回一个字典，字典的键为 `quotients` 列表中的元素。 对于每一个键 `q`，其对应的值为一个列表，该列表包含 `divisors` 列表中所有能被 `q` 整除的元素。

> 提示：每个键的值需要是一个列表，因此列表推导式可能在这里很有用。

```
def divide(quotients, divisors):
    """返回一个字典，字典中每个键 q 对应的值是一个列表，该列表包含了所有能被 q 整除的除数。

    >>> divide([3, 4, 5], [8, 9, 10, 11, 12])
    {3: [9, 12], 4: [8, 12], 5: [10]}
    >>> divide(range(1, 5), range(20, 25))
    {1: [20, 21, 22, 23, 24], 2: [20, 22, 24], 3: [21, 24], 4: [20, 24]}
    """
    return {____: ____ for ____ in ____}

```

用 Ok 运行你的代码：

```
python3 ok -q divide
```

### Q3：购买水果

实现 `buy` 函数，它接受一个 `required_fruits` 列表（字符串）、一个 `prices` 字典（字符串作为键，正整数作为值）和一个 `total_amount` （整数）。它会打印出所有购买方案，每种 `required_fruits` 中的水果至少购买一个，且总价等于 `total_amount`。你必须包含 `required_fruits` 中的每种水果至少一个，并且不能包含任何不在 `required_fruits` 中的其他水果。

> `display` 函数会很有用。你可以对一个 `fruit` 及其 `count` 调用 `display` 来创建一个包含两者的字符串。
>
> `fruits` 和 `amount` 代表什么？它们在递归中是如何使用的？

```
def buy(required_fruits, prices, total_amount):
    """打印所有总价为 amount 的购买方案，每种水果至少购买一个。

    >>> prices = {'oranges': 4, 'apples': 3, 'bananas': 2, 'kiwis': 9}
    >>> buy(['apples', 'oranges', 'bananas'], prices, 12)
    [2 apples][1 orange][1 banana]
    >>> buy(['apples', 'oranges', 'bananas'], prices, 16)
    [2 apples][1 orange][3 bananas]
    [2 apples][2 oranges][1 banana]
    >>> buy(['apples', 'kiwis'], prices, 36)
    [3 apples][3 kiwis]
    [6 apples][2 kiwis]
    [9 apples][1 kiwi]
    """
    def add(fruits, amount, cart):
        if fruits == [] and amount == 0:
            print(cart)
        elif fruits and amount > 0:
            fruit = fruits[0]
            price = ____
            for k in ____:
                add(____, ____, ____)
    add(required_fruits, total_amount, '')

def display(fruit, count):
    """以方括号显示水果的计数。

    >>> display('apples', 3)
    '[3 apples]'
    >>> display('apples', 1)
    '[1 apple]'
    """
    assert count >= 1 and fruit[-1] == 's'
    if count == 1:
        fruit = fruit[:-1]  # 去掉末尾的 's' (变为单数形式)
    return '[' + str(count) + ' ' + fruit + ']'
```

用 Ok 运行你的代码：

```
python3 ok -q buy
```

## 数据抽象

如果需要复习数据抽象的概念，请参考下拉菜单中的内容。你可以先尝试做题，遇到困难再回过头来查阅。
_数据抽象_ 是一组用于组合和分解复合值的函数。一个叫做*构造器*（constructor）的函数将两个或多个部分组合成一个整体（例如有理数，也叫做分数），而另一些叫做*选择器*（selectors）的函数则返回这个整体的各个部分（例如分子或分母）。

```
def rational(n, d):
    "Return a fraction n / d for integers n and d."

def numer(r):
    "Return the numerator of rational number r."

def denom(r):
    "Return the denominator of rational number r."
```

关键在于，人们可以在不知道这些函数具体实现方式的情况下使用数据抽象。例如，我们（人类）只需要知道 `rational`、`numer` 和 `denom` 这几个函数的功能，而不需要知道它们的具体实现，就可以验证 `mul_rationals` 的实现是否正确。

```
def mul_rationals(r1, r2):
    "Return the rational number r1 * r2."
    return rational(numer(r1) * numer(r2), denom(r1) * denom(r2))
```

但是，为了让 Python 运行程序，数据抽象需要一个实现。了解其实现方式会打破抽象屏障，这个屏障将程序中依赖于数据抽象实现的部分和不依赖于实现的部分隔离开来。一个设计良好的程序通常会尽量减少依赖于具体实现的代码量，这样以后即使修改实现，也不需要重写太多代码。

当使用已经提供的数据抽象时，编写程序时应该保证即使数据抽象的实现发生改变，程序依然能够正确运行。

### 城市

假设我们有一个城市的数据抽象。一个城市有一个名称、一个纬度坐标和一个经度坐标。

我们的数据抽象有一个**构造器**：

-   `make_city(name, lat, lon)`：创建一个具有给定名称、纬度和经度的城市对象。

我们还有以下**选择器**，以便获取每个城市的信息：

-   `get_name(city)`：返回城市的名称
-   `get_lat(city)`：返回城市的纬度
-   `get_lon(city)`：返回城市的经度

以下是我们如何使用构造器和选择器来创建城市并提取其信息：

```
>>> berkeley = make_city('Berkeley', 122, 37)
>>> get_name(berkeley)
'Berkeley'
>>> get_lat(berkeley)
122
>>> new_york = make_city('New York City', 74, 40)
>>> get_lon(new_york)
40
```

如果你对选择器和构造器函数的具体实现方式感到好奇，可以在实验文件中找到它们。但是，数据抽象的重点是，在编写关于城市的程序时，我们不需要知道实现。

### Q4: 距离

我们现在将实现函数 `distance`，该函数计算两个城市对象之间的距离。回想一下，两个坐标对 `(x1, y1)` 和 `(x2, y2)` 之间的距离可以通过计算 `(x1 - x2)**2 + (y1 - y2)**2` 的 `sqrt` 来找到。为了方便大家，我们已经导入了 `sqrt` 函数。使用城市的纬度和经度作为坐标，你需要使用选择器来获取这些信息！
```
from math import sqrt
def distance(city_a, city_b):
    """
    >>> city_a = make_city('city_a', 0, 1)
    >>> city_b = make_city('city_b', 0, 2)
    >>> distance(city_a, city_b)
    1.0
    >>> city_c = make_city('city_c', 6.5, 12)
    >>> city_d = make_city('city_d', 2.5, 15)
    >>> distance(city_c, city_d)
    5.0
    """
    "*** YOUR CODE HERE ***"

```

用 Ok 跑一下你的代码试试看：

```
python3 ok -q distance
```

### Q5：哪个城市更近

接下来，实现 `closer_city` 函数，该函数接受一个纬度、一个经度和两个城市，并返回离给定经纬度最近的城市的名字。

你只能使用前面介绍的选择器、构造器和你定义的 `distance` 函数。

> **提示**：你如何使用你的 `distance` 函数来查找给定位置与每个给定城市之间的距离？

```
def closer_city(lat, lon, city_a, city_b):
    """
    返回 city_a 或 city_b 的名称，以最接近坐标 (lat, lon) 的城市为准。如果两个城市与坐标的距离相同，则认为 city_b 是更近的城市。

    >>> berkeley = make_city('Berkeley', 37.87, 112.26)
    >>> stanford = make_city('Stanford', 34.05, 118.25)
    >>> closer_city(38.33, 121.44, berkeley, stanford)
    'Stanford'
    >>> bucharest = make_city('Bucharest', 44.43, 26.10)
    >>> vienna = make_city('Vienna', 48.20, 16.37)
    >>> closer_city(41.29, 174.78, bucharest, vienna)
    'Bucharest'
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q closer_city
```

### Q6：不要违反抽象壁垒！

> 注意：这个问题没有代码编写部分（如果你正确地实现了前两个问题）。

在编写使用数据抽象的函数时，我们应该尽可能使用构造函数和选择器，而不是假设数据抽象的实现。依赖于数据抽象的底层实现被称为_违反抽象壁垒_。

即使你违反了抽象屏障，你也仍然可能通过前几个问题的 doctest。想知道你有没有违反抽象屏障？跑一下这个命令看看：

使用 Ok 来测试你的代码：

```
python3 ok -q check_city_abstraction
```

`check_city_abstraction` 函数仅用于 doctest，它将原始抽象的实现替换为其他内容，运行前两个部分的测试，然后恢复原始抽象。

抽象壁垒保证了，只要你正确使用了构造函数和选择器，即使改变数据抽象的实现方式，也不会影响程序的正常功能。

如果你通过了前几个问题的 Ok 测试，但没有通过这个问题，那修复起来也很简单！把违反抽象壁垒的代码替换成对应的构造函数或选择器就行了。
请确保你的函数能够通过使用数据抽象的两种不同实现的测试，并且在继续下一步之前，理解为什么它们在两种实现下都能正确工作。

## 在本地查看你的得分

你可以通过运行以下命令来查看你在本次作业中每个问题的得分:

```
python3 ok --score
```

**这不会真的提交作业！** 当你对你的得分感到满意时，请将作业提交到 Gradescope 以获取学分。

## 提交

请将你编辑过的文件上传**到 Gradescope 上对应的作业页面**来提交。 [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细的说明。

此外，所有**不在大型实验班**的学生都必须填写此[考勤表](https://go.cs61a.org/lab-att)。无论你是否参加了实验课，或者因为正当理由错过了实验课，每周都要提交此表格。参加大型实验课的学生不需要填写考勤表。
