---
title: Homework 6 Solutions
---

# 作业6解答 | CS 61A Spring 2024

## 作业6解答

-   [hw06.zip](/resource/cs61a/hw06.zip)

## 解答文件

你可以在 [hw06.py](https://cs61a.org//hw/sol-hw06/hw06.py) 文件中找到解答。

## 必做题目

## 入门指导视频

这些视频可能对你解决本次作业中的编程问题有所帮助。

> 观看这些视频需要您登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcStdG8HQmwFTAo0VLra9IM)

## 期中调查

### Q1: 期中反馈

作为本次作业的一部分，请填写 [期中反馈](https://forms.gle/HPegZMaadytQg9NX6) 表格。

> **保密性**：您对调查的回复将被保密。只有授课老师才能看到未经匿名处理的数据。更多关于保密性的细节，请参考调查问卷本身。

完成调查后，您会获得一个密码（如果您错过了，可以在确认邮件底部找到）。请将此密码作为字符串，填入 Python 文件中 `passphrase = '*** PASSPHRASE HERE ***'` 这一行。

使用 Ok 测试你的代码:

```
python3 ok -q midsem_survey
```

## 面向对象编程 (OOP)

### Q2: 自动售货机

在这个问题中，你将创建一个[自动售货机](https://en.wikipedia.org/wiki/Vending_machine)，它出售单一产品并在需要时提供找零。

创建一个名为 `VendingMachine` 的类，用于模拟某种商品的自动售货机。`VendingMachine` 对象会返回字符串来描述其交互过程。请确保你的输出与 doctest 中的字符串完全一致，包括标点和空格！

> 你可能会发现 Python 的格式化字符串文字，或 [f-strings](https://docs.python.org/3/tutorial/inputoutput.html#fancier-output-formatting) 很有用。 一个简单的例子：
> 
> ```
> >>> feeling = 'love'
> >>> course = '61A!'
> >>> f'I {feeling} {course}'
> 'I love 61A!'
> ```

填写 `VendingMachine` 类，_根据需要添加属性和方法_，使其行为与以下 doctest 匹配：

```
class VendingMachine:
    """A vending machine that vends some product for some price.

    >>> v = VendingMachine('candy', 10)
    >>> v.vend()
    'Nothing left to vend. Please restock.'
    >>> v.add_funds(15)
    'Nothing left to vend. Please restock. Here is your $15.'
    >>> v.restock(2)
    'Current candy stock: 2'
    >>> v.vend()
    'Please add $10 more funds.'
    >>> v.add_funds(7)
    'Current balance: $7'
    >>> v.vend()
    'Please add $3 more funds.'
    >>> v.add_funds(5)
    'Current balance: $12'
    >>> v.vend()
    'Here is your candy and $2 change.'
    >>> v.add_funds(10)
    'Current balance: $10'
    >>> v.vend()
    'Here is your candy.'
    >>> v.add_funds(15)
    'Nothing left to vend. Please restock. Here is your $15.'

>>> w = VendingMachine('汽水', 2)
    >>> w.restock(3)
    '现有汽水库存：3'
    >>> w.restock(3)
    '现有汽水库存：6'
    >>> w.add_funds(2)
    '当前余额: $2'
    >>> w.vend()
    '这是你的汽水。'
    """
def __init__(self, product, price):
        self.product = product
        self.price = price
        self.stock = 0
        self.balance = 0

    def restock(self, n):
        self.stock += n
        return f'现有{self.product}库存：{self.stock}'

    def add_funds(self, n):
        if self.stock == 0:
            return f'已售罄，请稍后再来。这是退还您的${n}。'
            # Alternatively, we could have:
            # return self.vend() + f' Here is your ${n}.'
        self.balance += n
        return f'当前余额: ${self.balance}'

    def vend(self):
        if self.stock == 0:
            return '已售罄，请稍后再来。'
        difference = self.price - self.balance
        if difference > 0:
            return f'还差${difference}元。请继续投币。'
        message = f'这是你的{self.product}'
        if difference != 0:
            message += f'，找您${-difference}元'
        self.balance = 0
        self.stock -= 1
        return message + '。'
```

使用 Ok 来测试你的代码:

```
python3 ok -q VendingMachine
```

  

阅读这些 doctest，应该能清楚了解如何添加函数以确保自动售货机行为正确。

`__init__`

-   起初可能不太容易。`product` 和 `price` 似乎都很明显需要保留，但 `stock` 和 `balance` 只有在调用其他函数后才需要用到。

`restock`

-   即使 `v.restock(2)` 在 doctest 中只接受一个参数，也要记住 `self` 指的是调用 `restock` 方法的实例。因此，这个函数有两个参数。
-   在实现这个函数时，你可能会意识到你想在某个地方跟踪库存。虽然可以在这个函数中将库存设置为实例属性，但会丢失旧的库存。因此，自然的解决方案是在构造函数中初始化库存，然后在 `restock` 中更新它。

`add_funds`

-   这与 `restock` 的行为非常相似。请参阅上面的评论。
-   是的，这台自动售货机非常昂贵。

`vend`

-   这里最棘手的事情是确保我们处理所有情况。记录 doctest 中出现的错误可以帮助你理清思路。
    
    1.  没有库存
    2.  余额不足
    3.  购买后剩余余额（找零给顾客）
    4.  购买后没有剩余余额
-   我们在最后使用一些字符串连接来处理情况 3 和 4，以尝试减少代码量。 这不是必须的，你可以这样写：
    
    ```
    if difference != 0:
        return ...
    else:
        return ...
    ```
    
    当然，这需要事先减少余额和库存。
    

## 在本地检查你的分数

你可以通过运行以下命令在本地检查此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交
请提交本次作业，将你编辑过的文件上传**到 Gradescope 对应的作业页面。** [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 提供了详细的说明。

此外，所有**不在**大型实验课 (Mega Lab) 的学生都必须填写此[考勤表](https://go.cs61a.org/lab-att)。无论您是否参加实验课，即使因故缺席，也请每周提交此表格。大型实验课的学生不需要填写考勤表。

## 可选问题

### Q3: 存储数字

编写一个函数 `store_digits`，该函数接收一个整数 `n`，并返回一个链表，其中列表的每个元素都是 `n` 的一个数字。

> **重要提示**：请勿使用任何字符串操作函数，如 `str` 和 `reversed`。

```
def store_digits(n):
    """Stores the digits of a positive number n in a linked list.

    >>> s = store_digits(1)
    >>> s
    Link(1)
    >>> store_digits(2345)
    Link(2, Link(3, Link(4, Link(5))))
    >>> store_digits(876)
    Link(8, Link(7, Link(6)))
    >>> store_digits(2450)
    Link(2, Link(4, Link(5, Link(0))))
    >>> # a check for restricted functions
    >>> import inspect, re
    >>> cleaned = re.sub(r"#.*\\n", '', re.sub(r'"{3}[\s\S]*?"{3}', '', inspect.getsource(store_digits)))
    >>> print("Do not use str or reversed!") if any([r in cleaned for r in ["str", "reversed"]]) else None
    """
    result = Link.empty
    while n > 0:
        result = Link(n % 10, result)
        n //= 10
    return result
```

使用 Ok 测试你的代码：

```
python3 ok -q store_digits
```

### Q4: 可变映射

实现 `deep_map_mut(func, link)`，它将函数 `func` 应用于给定链表 `lnk` 中的所有元素。如果一个元素本身是一个链表，则将 `func` 应用于它的每个元素，依此类推。

你的实现应该改变原始链表。不要创建任何新的链表。

> **提示**：内置函数 `isinstance` 可能会很有用。
>
> ```
> >>> s = Link(1, Link(2, Link(3, Link(4))))
> >>> isinstance(s, Link)
> True
> >>> isinstance(s, int)
> False
> ```

> **构造检查**：此问题的最后一个 doctest 确保你没有创建新的链表。 如果你未能通过此 doctest，请检查你是否通过调用构造函数创建了新的链表，例如：
>
> ```
> s = Link(1)
> ```

```
def deep_map_mut(func, lnk):
    """Mutates a deep link lnk by replacing each item found with the
    result of calling func on the item. Does NOT create new Links (so
    no use of Link's constructor).

    Does not return the modified Link object.

>>> link1 = Link(3, Link(Link(4), Link(5, Link(6))))
    >>> print(link1)
    <3 <4> 5 6>
    >>> # 禁止在调用 `deep_map_mut` 函数之前创建新的 `Link` 对象
    >>> Link.__init__, hold = lambda *args: print("请不要创建任何新的 `Link` 对象。"), Link.__init__
    >>> try:
    ...     deep_map_mut(lambda x: x * x, link1)
    ... finally:
    ...     Link.__init__ = hold
    >>> print(link1)
    <9 <16> 25 36>
    """
if lnk is Link.empty:
        return
    elif isinstance(lnk.first, Link):
        deep_map_mut(func, lnk.first)
    else:
        lnk.first = func(lnk.first)
    deep_map_mut(func, lnk.rest)
```

使用 Ok 来测试你的代码:

```
python3 ok -q deep_map_mut
```

### Q5: Two List

实现一个函数 `two_list`，它接受两个列表并返回一个链表。第一个列表包含我们想要放入链表中的值，第二个列表包含每个对应值的数量。假设两个列表的大小相同，并且长度为 1 或更大。假设第二个列表中的所有元素都大于 0。

```
def two_list(vals, counts):
    """
    根据传入的两个列表返回一个链表。假设 vals 和 counts 的大小相同。vals 中的元素表示值，而 counts 中对应的元素表示最终链表中所需此值的数量。假设 counts 中的所有元素都大于 0。假设两个列表都至少有一个元素。
    >>> a = [1, 3]
    >>> b = [1, 1]
    >>> c = two_list(a, b)
    >>> c
    Link(1, Link(3))
    >>> a = [1, 3, 2]
    >>> b = [2, 2, 1]
    >>> c = two_list(a, b)
    >>> c
    Link(1, Link(1, Link(3, Link(3, Link(2)))))
    """
def helper(count, index):
        if count == 0:
            if index + 1 == len(vals):
                return Link.empty
            return Link(vals[index + 1], helper(counts[index + 1] - 1, index + 1))
        return Link(vals[index], helper(count - 1, index))
    return helper(counts[0], 0)

# 迭代法
def two_list_iterative(vals, counts):
    result = Link(None) 
    p = result
    for index in range(len(vals)):
        item = vals[index]
        for _ in range(counts[index]):
            p.rest = Link(item)
            p = p.rest
    return result.rest
```

使用 Ok 来测试你的代码:

```
python3 ok -q two_list
```

## 考试练习

本次作业还包含一些往年考题，供大家练习。这些问题没有提交组件；如果您想进行一些练习，请随意尝试！

面向对象编程

1.  2022 年春季 MT2 Q8：[CS61A：Hoop 游戏（面向对象编程）](https://cs61a.org/exam/sp22/mt2/61a-sp22-mt2.pdf#page=17)
2.  2020 年秋季 MT2 Q3：[稀疏列表](https://cs61a.org/exam/fa20/mt2/61a-fa20-mt2.pdf#page=9)
3.  2019 年秋季 MT2 Q7：[版本 2.0](https://cs61a.org/exam/fa19/mt2/61a-fa19-mt2.pdf#page=8)

链表
```1. 2020秋季期末考 Q3: [大学派对](https://cs61a.org/exam/fa20/final/61a-fa20-final.pdf#page=9)
2. 2018秋季期中考2 Q6: [弗兰肯链克医生](https://cs61a.org/exam/fa18/mt2/61a-fa18-mt2.pdf#page=6)
3. 2017春季期中考1 Q5: [插入](https://cs61a.org/exam/sp17/mt1/61a-sp17-mt1.pdf#page=7)
