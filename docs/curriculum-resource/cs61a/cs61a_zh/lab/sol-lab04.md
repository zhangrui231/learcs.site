---
title: Lab 4 Solutions
---

# CS 61A 2024春季 Lab 4 实验解答

## Lab 4 实验解答

-   [lab04.zip](https://cs61a.org/lab/sol-lab04/lab04.zip)

## 解答文件

## 必做题目

## 字典

如果需要复习字典相关知识，请参考下拉菜单。可以直接开始做题，遇到困难再回来查阅。

字典由键值对构成，可以使用方括号通过键来查找对应的值。每个键都必须是唯一的。

```
>>> d = {2: 4, 'two': ['four'], (1, 1): 4}
>>> d[2]
4
>>> d['two']
['four']
>>> d[(1, 1)]
4
```

可以通过 `.keys()`、`.values()` 或 `.items()` 方法来访问字典中的键、值或键值对序列。

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

您可以使用 `in` 检查字典是否包含某个键：

```
>>> 'two' in d
True
>>> 4 in d
False
```

字典推导式是一种表达式，它可以生成一个新的字典。

```
>>> {3*x: 3*x + 1 for x in range(2, 5)}
{6: 7, 9: 10, 12: 13}
```

### Q1: 字典相关练习

> 使用 Ok 来测试你对以下“Python会输出什么？”问题的理解程度：
> 
> ```
> python3 ok -q pokemon -u
> ```
> 
>   

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

### Q2: Divide 函数

实现 `divide` 函数，该函数接受两个正整数列表 `quotients` 和 `divisors`。它返回一个字典，其键是 `quotients` 的元素。对于每个键 `q`，其对应的值是可以被 `q` 整除的 `divisors` 的所有元素的列表。

> 提示：每个键对应的值应该是一个列表，因此可以考虑使用列表推导式。

```
def divide(quotients, divisors):
    """Return a dictonary in which each quotient q is a key for the list of
    divisors that it divides evenly.

    >>> divide([3, 4, 5], [8, 9, 10, 11, 12])
    {3: [9, 12], 4: [8, 12], 5: [10]}
    >>> divide(range(1, 5), range(20, 25))
    {1: [20, 21, 22, 23, 24], 2: [20, 22, 24], 3: [21, 24], 4: [20, 24]}
    """
return {q: [d for d in divisors if d % q == 0] for q in quotients}
```

使用 Ok 运行测试：

```
python3 ok -q divide
```
### Q3: 购买水果

实现函数 `buy`，它接受一个 `required_fruits` 列表（字符串），一个 `prices` 字典（字符串为键，正整数为值），以及一个 `total_amount` （整数）。它会打印出所有购买所需水果的方案，使得总价等于 `total_amount`。你必须至少购买 `required_fruits` 列表中的每一种水果，并且不能购买任何该列表之外的水果。

> `display` 函数会很有帮助。你可以对 `fruit` 和它的 `count` 调用 `display` 函数，来创建一个包含两者信息的字符串。
> 
> `fruits` 和 `amount` 分别代表什么？它们在递归函数中是如何使用的？

```
def buy(required_fruits, prices, total_amount):
    """Print ways to buy some of each fruit so that the sum of prices is amount.

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
            price = prices[fruit]for k in range(1, amount // price + 1):                add(fruits[1:], amount - price * k, cart + display(fruit, k))    add(required_fruits, total_amount, '')

def display(fruit, count):
    """Display a count of a fruit in square brackets.

    >>> display('apples', 3)
    '[3 apples]'
    >>> display('apples', 1)
    '[1 apple]'
    """
    assert count >= 1 and fruit[-1] == 's'
    if count == 1:
        fruit = fruit[:-1]  # get rid of the plural s
    return '[' + str(count) + ' ' + fruit + ']'
```

使用 Ok 测试你的代码：

```
python3 ok -q buy
```

## 数据抽象

如果你需要复习数据抽象，请查阅下拉菜单。可以直接跳到问题，如果遇到困难再回到这里参考。

_数据抽象_ 是一组用于组合和分解复合值（compound values）的函数。一个被称为_构造器_的函数将两个或多个部分组合成一个整体（例如有理数，也称作分数），而其他被称为_选择器_的函数则返回这个整体的各个组成部分（例如分子或分母）。

```
def rational(n, d):
    "Return a fraction n / d for integers n and d."

def numer(r):
    "Return the numerator of rational number r."

def denom(r):
    "Return the denominator of rational number r."
```

关键在于，人们可以在不知道这些函数具体实现方式的情况下使用数据抽象。例如，我们（人类）只需要知道 `rational`、`numer` 和 `denom` 的功能，而无需了解它们的具体实现，就能验证 `mul_rationals` 的实现是否正确。

```
def mul_rationals(r1, r2):
    "Return the rational number r1 * r2."
    return rational(numer(r1) * numer(r2), denom(r1) * denom(r2))
```
然而，为了让 Python 运行程序，了解实现的细节会打破抽象壁垒。抽象壁垒将程序中依赖于数据抽象实现的部分与不依赖于该实现的部分分隔开来。一个优秀的程序通常会尽量减少对具体实现代码的依赖，这样在将来修改底层实现时，就不需要大幅度地重写代码。

当使用已有的数据抽象时，编写程序时应保证即使数据抽象的实现发生变化，程序也能正确运行。

### 城市

假设我们有一个用于城市的数据抽象。一个城市有一个名称、一个纬度坐标和一个经度坐标。

我们的数据抽象有一个**构造函数**：

-   `make_city(name, lat, lon)`：创建一个具有给定名称、纬度和经度的城市对象。

我们还有以下**选择函数**，以便获取每个城市的信息：

-   `get_name(city)`：返回城市的名称
-   `get_lat(city)`：返回城市的纬度
-   `get_lon(city)`：返回城市的经度

以下是我们如何使用构造函数和选择函数来创建城市并提取它们的信息：

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

如果您想了解选择函数和构造函数的具体实现，可以在实验文件中找到相关代码。然而，数据抽象的重点是，在编写关于城市的程序时，我们不需要知道实现。

### Q4：距离

现在我们来实现 `distance` 函数，它用于计算两个城市对象之间的距离。回想一下，两个坐标对 `(x1, y1)` 和 `(x2, y2)` 之间的距离可以通过计算 `(x1 - x2)**2 + (y1 - y2)**2` 的 `sqrt` 来找到。为了方便起见，我们已经导入了 `sqrt` 函数。使用城市的纬度和经度作为其坐标；您需要使用选择函数来访问此信息！

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
    lat_1, lon_1 = get_lat(city_a), get_lon(city_a)
    lat_2, lon_2 = get_lat(city_b), get_lon(city_b)
    return sqrt((lat_1 - lat_2)**2 + (lon_1 - lon_2)**2)
```

使用 Ok 来测试你的代码：

```
python3 ok -q distance
```

### Q5：更近的城市

接下来，实现 `closer_city` 函数，该函数接受一个纬度、一个经度和两个城市，并返回离给定经纬度最近的城市的_名称_。

对于这个问题，您只能使用上面介绍的选择函数和构造函数，以及您刚刚定义的 `distance` 函数。

> **提示**：如何利用 `distance` 函数计算给定位置与每个城市之间的距离呢？

```
def closer_city(lat, lon, city_a, city_b):
    """
    返回 city_a 和 city_b 中，哪个城市距离坐标 (lat, lon) 最近，并返回该城市的名字。如果两座城市距离相同，则返回 city_b 的名字.

    >>> berkeley = make_city('Berkeley', 37.87, 112.26)
    >>> stanford = make_city('Stanford', 34.05, 118.25)
    >>> closer_city(38.33, 121.44, berkeley, stanford)
    'Stanford'
    >>> bucharest = make_city('Bucharest', 44.43, 26.10)
    >>> vienna = make_city('Vienna', 48.20, 16.37)
    >>> closer_city(41.29, 174.78, bucharest, vienna)
    'Bucharest'
    """
    new_city = make_city('arb', lat, lon)
    dist1 = distance(city_a, new_city)
    dist2 = distance(city_b, new_city)
    if dist1 < dist2:
         return get_name(city_a)
    return get_name(city_b)
```

用 Ok 测试你的代码:

```
python3 ok -q closer_city
```

### Q6: 不要违反抽象屏障!

> 注意: 这个问题没有代码编写部分 (如果你正确地实现了前两个问题)。

在编写使用数据抽象的函数时，我们应该尽可能使用构造函数和选择器，而不是假定数据抽象的实现。依赖于数据抽象的底层实现被称为 *违反抽象屏障*。

即使你违反了抽象屏障，也可能通过之前的 doctest 测试. 要检查是否违反了抽象屏障，请运行以下命令:

用 Ok 测试你的代码:

```
python3 ok -q check_city_abstraction
```

`check_city_abstraction` 函数仅用于 doctest，它会将原始抽象的实现替换为其他实现，运行前两个部分的测试，然后恢复原始抽象。

抽象屏障保证了，只要正确使用构造函数和选择器，更改数据抽象的实现就不会影响使用该抽象的程序.

确保你的函数能通过数据抽象的两种实现的测试，并且理解其原理，然后再继续.

## 在本地检查你的分数

你可以运行以下命令，在本地查看本次作业中每个问题的得分情况.

```
python3 ok --score
```

**这不会提交作业!** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过将你编辑的任何文件**上传到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生必须填写此[出勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。大型实验课的学生*无需*填写出勤表.
