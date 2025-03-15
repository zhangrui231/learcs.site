---
title: Lab 7 Inheritance, Linked Lists
---

# Lab 7：继承，链表

_截止日期：3月13日，星期三 晚上 11:59_

## 起始文件

下载 [lab07.zip](/resource/cs61a/lab/lab07.zip)。压缩包中包含本次实验的起始文件，以及 Ok 自动评分器的副本。

## 必做练习

## 入门指导视频

这些视频可以帮助你更好地解决本次作业中的编程问题。

> 观看视频前，请先登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZf149ILKTCfQ11eVDRm8KS1)

## 继承

如果需要复习继承相关知识，请参考下拉菜单。可以直接开始做题，遇到困难时再回过头来看这部分内容。

为了避免在相似的类中重复定义属性和方法，我们可以创建一个 **基类**，然后让其他类 **继承** 这个基类。例如，我们可以编写一个名为 `Pet` 的类，并将 `Dog` 定义为 `Pet` 的 **子类**：

```
class Pet:

    def __init__(self, name, owner):
        self.is_alive = True    # It's alive!!!
        self.name = name
        self.owner = owner

    def eat(self, thing):
        print(self.name + " ate a " + str(thing) + "!")

    def talk(self):
        print(self.name)

class Dog(Pet):

    def talk(self):
        super().talk()
        print('This Dog says woof!')
```

继承描述的是类与类之间的层级关系，其中一个类是另一个类的具体化：例如，狗 **是** 宠物。（这里的“**是**”用来描述面向对象编程中的关系，而不是 Python 中的 `is` 运算符）。

因为 `Dog` 类继承了 `Pet` 类，所以 `Dog` 类也会自动获得 `Pet` 类的方法，无需重复定义 `__init__` 和 `eat` 方法。如果我们希望 `Dog` 类以其特有的方式实现 `talk` 方法，可以 **重写**（override）`talk` 方法。

我们可以使用 `super()` 来调用父类（超类）的方法，就像直接使用父类的实例一样。例如，在 `Dog` 类中使用 `super().talk()` 实际上是调用 `Pet` 类中的 `talk` 方法，并将 `Dog` 类的实例作为 `self` 参数传入。

### Q1: WWPD: 继承 ABCs

> **注意：** 对于所有 WWPD (What Would Python Display?) 问题，如果输出结果是 `<function...>`，请输入 `Function`；如果出现错误，请输入 `Error`；如果没有输出，请输入 `Nothing`。
>
> 使用 Ok 运行以下“Python 会显示什么？”问题，检验你的理解程度：
>
> ```
> python3 ok -q inheritance-abc -u
> ```
```
>>> class A:
...   x, y = 0, 0
...   def __init__(self):
...         return
>>> class B(A):
...   def __init__(self):
...         return
>>> class C(A):
...   def __init__(self):
...         return
>>> print(A.x, B.x, C.x)
____________
>>> B.x = 2
>>> print(A.x, B.x, C.x)
____________
>>> A.x += 1
>>> print(A.x, B.x, C.x)
____________
>>> obj = C()
>>> obj.y = 1
>>> C.y == obj.y
____________
>>> A.y = obj.y
>>> print(A.y, B.y, C.y, obj.y)
____________
```

## 类练习

假设我们要创建一个银行账户模型，它可以处理诸如存款或从现有资金中获取利息等操作。在接下来的问题中，我们将以 `Account` 类为基础进行开发。以下是该类的当前定义：

```
class Account:
    """账户包含余额和持有人信息。
    >>> a = Account('John')
    >>> a.deposit(10)
    10
    >>> a.balance
    10
    >>> a.interest
    0.02
    >>> a.time_to_retire(10.25)  # 10 -> 10.2 -> 10.404
    2
    >>> a.balance                # 调用 `time_to_retire` 方法不应改变账户余额
    10
    >>> a.time_to_retire(11)     # 10 -> 10.2 -> ... -> 11.040808032
    5
    >>> a.time_to_retire(100)
    117
    """
    max_withdrawal = 10
    interest = 0.02

    def __init__(self, account_holder):
        self.balance = 0
        self.holder = account_holder

    def deposit(self, amount):
        self.balance = self.balance + amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds"
        if amount > self.max_withdrawal:
            return "Can't withdraw that amount"
        self.balance = self.balance - amount
        return self.balance
```

### Q2: 退休

在 `Account` 类中添加一个 `time_to_retire` 方法。该方法接受一个 `amount` 参数，并返回账户余额增长到至少 `amount` 所需的年数。假设银行每年底会将利息（按当前 `balance` 乘以 `interest` 利率计算）添加到账户余额中。

```
    def time_to_retire(self, amount):
        """返回账户余额增长到 amount 所需的年数。"""
        assert self.balance > 0 and amount > 0 and self.interest > 0
        "*** 在此处编写你的代码 ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q Account
```

### Q3: 免费支票账户类

实现 `FreeChecking` 类。该类与课堂上讲的 `Account` 类相似，区别在于，当取款次数超过 `free_withdrawals` 后，会收取 `withdraw_fee` 取款手续费。即使取款失败，也会计入免费取款次数，但不收取手续费。
```
class FreeChecking(Account):
    """一种银行账户，取款会收取费用，但前两次免费！
    >>> ch = FreeChecking('Jack')
    >>> ch.balance = 20
    >>> ch.withdraw(100)  # 第一次是免费的。即使取款不成功，仍然算作一次免费取款机会
    'Insufficient funds'
    >>> ch.withdraw(3)    # 第二次取款也是免费的
    17
    >>> ch.balance
    17
    >>> ch.withdraw(3)    # 好的，两次免费取款次数已经用完，因为 free_withdrawals 的值为 2
    13
    >>> ch.withdraw(3)
    9
    >>> ch2 = FreeChecking('John')
    >>> ch2.balance = 10
    >>> ch2.withdraw(3) # 免手续费
    7
    >>> ch.withdraw(3)  # ch 仍然会收取手续费
    5
    >>> ch.withdraw(5)  # 余额不足，无法支付手续费和取款金额
    'Insufficient funds'
    """
    withdraw_fee = 1
    free_withdrawals = 2

    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q FreeChecking
```

## 链表

如果需要复习链表，请参考下拉菜单。可以直接跳过，先做题目，遇到困难再回头参考。

链表是一种用于存储一系列数据的数据结构。对于某些操作，例如在长列表中间插入元素，它比Python内置列表更有效。链表不是内置的，因此我们定义一个名为 `Link` 的类来表示它们。链表要么是 `Link` 类的实例，要么是 `Link.empty`（表示空链表）。

`Link` 类的实例有两个属性，分别是 `first` 和 `rest`。

```
class Link:
    """一个链表。

    >>> s = Link(1)
    >>> s.first
    1
    >>> s.rest is Link.empty
    True
    >>> s = Link(2, Link(3, Link(4)))
    >>> s.first = 5
    >>> s.rest.first = 6
    >>> s.rest.rest = Link.empty
    >>> s                                    # 显示 `repr(s)` 的返回值
    Link(5, Link(6))
    >>> s.rest = Link(7, Link(Link(8, Link(9))))
    >>> s
    Link(5, Link(7, Link(Link(8, Link(9)))))
    >>> print(s)                             # 打印 `str(s)` 的返回值
    <5 7 <8 9>>
    """
    empty = ()

    def __init__(self, first, rest=empty):
        assert rest is Link.empty or isinstance(rest, Link)
        self.first = first
        self.rest = rest

    def __repr__(self):
        if self.rest is not Link.empty:
            rest_repr = ', ' + repr(self.rest)
        else:
            rest_repr = ''
        return 'Link(' + repr(self.first) + rest_repr + ')'

    def __str__(self):
        string = '<'
        while self.rest is not Link.empty:
            string += str(self.first) + ' '
            self = self.rest
        return string + str(self.first) + '>'
```

`Link` 类的 `rest` 属性应该始终指向一个链表：要么是另一个 `Link` 类的实例，要么是 `Link.empty`。它不应该是 `None`。

要检查链表是否为空，请将其与 `Link.empty` 进行比较。由于只有一个空列表，我们可以使用 `is` 进行比较，但 `==` 也可以。

```
def is_empty(s):
    """返回链表 s 是否为空。"""
    return s is Link.empty:
```
### Q4: WWPD：链表

阅读 `Link` 类，确保你理解其 doctest 的内容和作用.

> 使用 Ok 来测试你对以下 "Python 会输出什么？" 问题的理解程度.
>
> ```
> python3 ok -q link -u
> ```
>
> 如果你认为答案是 `<function ...>`，请输入 `Function`；如果程序报错，请输入 `Error`；如果没有任何输出，请输入 `Nothing`。
>
> 如果你遇到困难，可以尝试在纸上画出链表的盒图和指针图，或者使用 `python3 -i lab08.py` 命令将 `Link` 类加载到 Python 解释器中。

```
>>> link = Link(1000)
>>> link.first
______1000
>>> link.rest is Link.empty
______True
>>> link = Link(1000, 2000)
______AssertionError
>>> link = Link(1000, Link())
______TypeError
```

```
>>> link = Link(1, Link(2, Link(3)))
>>> link.first
______1
>>> link.rest.first
______2
>>> link.rest.rest.rest is Link.empty
______True
>>> link.first = 9001
>>> link.first
______9001
>>> link.rest = link.rest.rest
>>> link.rest.first
______3
>>> link = Link(1)
>>> link.rest = link
>>> link.rest.rest is Link.empty
______False
>>> link.rest.rest.rest.rest.first
______1
>>> link = Link(2, Link(3, Link(4)))
>>> link2 = Link(1, link)
>>> link2.first
______1
>>> link2.rest.first
______2
```

```
>>> link = Link(5, Link(6, Link(7)))
>>> link                 # 查看 `Link` 类的 `__repr__` 方法
______Link(5, Link(6, Link(7)))
>>> print(link)          # 查看 `Link` 类的 `__str__` 方法
______<5 6 7>
```

### Q5: 链表复制

编写一个名为 `duplicate_link` 的函数，该函数接收一个链表 `s` 和一个值 `val` 作为参数。此函数会修改链表 `s`，将每个值为 `val` 的元素后都添加一个额外的 `val` (复制节点)。函数返回 `None`。

> 注意：为了在链表中插入链接，需要重新赋值 `first` 属性为 `val` 的 `Link` 实例的 `rest` 属性。 建议绘制一个 doctest 图示来帮助理解！

```
def duplicate_link(s, val):
    """Mutates s so that each element equal to val is followed by another val.

    >>> x = Link(5, Link(4, Link(5)))
    >>> duplicate_link(x, 5)
    >>> x
    Link(5, Link(5, Link(4, Link(5, Link(5)))))
    >>> y = Link(2, Link(4, Link(6, Link(8))))
    >>> duplicate_link(y, 10)
    >>> y
    Link(2, Link(4, Link(6, Link(8))))
    >>> z = Link(1, Link(2, (Link(2, Link(3)))))
    >>> duplicate_link(z, 2) # ensures that back to back links with val are both duplicated
    >>> z
    Link(1, Link(2, Link(2, Link(2, Link(2, Link(3))))))
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q duplicate_link
```

## 在本地检查你的分数

你可以通过运行以下命令在本地查看你在本次作业中每个问题的得分情况

```
python3 ok --score
```
**这*不*算提交作业！** 只有将作业提交到 Gradescope 才能获得学分。

## 提交

请将您编辑过的文件上传**到 Gradescope 上对应的作业**以提交作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 提供了详细的说明。

此外，*不是*参加大型辅导课的学生必须填写此[出勤表](https://go.cs61a.org/lab-att)。无论您是否参加实验课，每周都需要提交此表格。大型辅导课的学生不需要填写出勤表。
