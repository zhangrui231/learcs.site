---
title: Lab 7 Solutions
---

# CS 61A 2024春季 Lab 7 答案

## Lab 7 答案

-   [lab07.zip](/resource/cs61a/lab07.zip)

## 解答文件

## 必做题目

## 入门指导视频

这些视频可能对解决本次作业的编程问题有所帮助。

> 观看视频请使用您的伯克利邮箱登录。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZf149ILKTCfQ11eVDRm8KS1)

## 继承

如果需要复习继承相关知识，请参考下拉菜单。可以直接跳过本节，在遇到问题时再回看。

为了避免在相似的类中重复定义属性和方法，我们可以创建一个**基类**，然后让其他类**继承**它。 例如，我们可以创建一个名为 `Pet` 的类，并将 `Dog` 定义为 `Pet` 的**子类**：

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

继承描述的是类与类之间的层级关系，即一个类是另一个类的具体化。例如，“狗是宠物” (Dog is a Pet)。这里的“is a”用来描述面向对象编程中的这种关系，而非Python中的`is`运算符。

因为`Dog`类继承自`Pet`类，所以它也继承了`Pet`类的方法，例如`__init__`和`eat`。 如果我们希望`Dog`类以其特有的方式实现`talk`方法，可以对其进行覆盖 (override)。

可以使用`super()`来调用父类（超类）的方法，就像在父类实例中调用一样。 例如，在`Dog`类中，`super().talk()`会调用`Pet`类的`talk`方法，并将`Dog`类的实例作为`self`传入。

### Q1: WWPD: 继承 ABCs

> **注意：** 对于所有 WWPD 问题，如果您认为答案是 `<function...>`，则键入 `Function`；如果出现错误，则键入 `Error`；如果没有显示任何内容，则键入 `Nothing`。
>
> 使用 Ok 来测试您对以下“Python 会显示什么？”问题的了解：
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

## 类实践

假设我们需要创建一个银行账户模型，它可以进行存款、利息计算等操作。 在接下来的练习中，我们将基于`Account`类进行开发。 以下是`Account`类的定义：

```
class Account:
    """An account has a balance and a holder.
    >>> a = Account('John')
    >>> a.deposit(10)
    10
    >>> a.balance
    10
    >>> a.interest
    0.02
    >>> a.time_to_retire(10.25)  # 10 -> 10.2 -> 10.404
    2
    >>> a.balance                # Calling time_to_retire method should not change the balance
    10
    >>> a.time_to_retire(11)     # 10 -> 10.2 -> ... -> 11.040808032
    5
    >>> a.time_to_retire(100)
    117
    """
    max_withdrawal = 10
    interest = 0.02
``````
def __init__(self, account_holder):
        self.balance = 0
        self.holder = account_holder

    def deposit(self, amount):
        self.balance = self.balance + amount
        return self.balance

    def withdraw(self, amount):
        if amount > self.balance:
            return "余额不足"
        if amount > self.max_withdrawal:
            return "超出最大提款额度"
        self.balance = self.balance - amount
        return self.balance

### Q2：退休

向 `Account` 类添加一个 `time_to_retire` 方法。此方法接受一个 `amount`，并返回持有者需要等待多少年才能使当前 `balance` 增长到至少 `amount`，假设银行每年将利息（计算为当前 `balance` 乘以 `interest` 利率）添加到 `balance` 中。

    ```
    def time_to_retire(self, amount):
        """Return the number of years until balance would grow to amount."""
        assert self.balance > 0 and amount > 0 and self.interest > 0
        future = self.balance
        years = 0
        while future < amount:
            future += self.interest * future
            years += 1
        return years
    ```

使用 Ok 来测试你的代码：

```
python3 ok -q Account
```

  

我们获取当前的余额，并模拟多年来利息的增长。一旦达到目标值，我们就停止。

请注意，解决问题的过程与非 OOP 问题没有太大区别。这里的主要区别是确保我们在计算未来余额的过程中不改变账户余额。因此，需要类似以下内容：

```
future = self.balance
```

视频讲解：

[YouTube link](https://youtu.be/fQzeZcI-4a0)

### Q3：免费支票 (FreeChecking)

实现 `FreeChecking` 类，它类似于讲座中的 `Account` 类，不同之处在于，在提取 `free_withdrawals` 次数后，它会收取提款费 `withdraw_fee`。如果提款不成功，它仍然会计入剩余的免费提款次数，但不会收取提款费。

```
class FreeChecking(Account):
    """A bank account that charges for withdrawals, but the first two are free!
    >>> ch = FreeChecking('Jack')
    >>> ch.balance = 20
    >>> ch.withdraw(100)  # First one's free. Still counts as a free withdrawal even though it was unsuccessful
    'Insufficient funds'
    >>> ch.withdraw(3)    # Second withdrawal is also free
    17
    >>> ch.balance
    17
    >>> ch.withdraw(3)    # Ok, two free withdrawals is enough, as free_withdrawals is only 2
    13
    >>> ch.withdraw(3)
    9
    >>> ch2 = FreeChecking('John')
    >>> ch2.balance = 10
    >>> ch2.withdraw(3) # No fee
    7
    >>> ch.withdraw(3)  # ch still charges a fee
    5
    >>> ch.withdraw(5)  # Not enough to cover fee + withdraw
    'Insufficient funds'
    """
    withdraw_fee = 1
    free_withdrawals = 2

def __init__(self, account_holder):
        super().__init__(account_holder)
        self.withdrawals = 0

    def withdraw(self, amount):
        self.withdrawals += 1
        fee = 0
        if self.withdrawals > self.free_withdrawals:
            fee = self.withdraw_fee
        return super().withdraw(amount + fee)

    # Alternative solution where you don't need to include init.
    # Check out the video solution for more.
    def withdraw(self, amount):
        self.free_withdrawals -= 1
        if self.free_withdrawals >= 0:
            return super().withdraw(amount)
        return super().withdraw(amount + self.withdraw_fee)
```

使用 Ok 来测试你的代码：

```
python3 ok -q FreeChecking
```

  

我们可以利用继承机制，仅对 `withdraw` 方法进行必要的修改。

-   首先，带有费用的提款与原始提款金额加上费用金额相同。因此，我们可以将 `FreeChecking` 提款表示为以这种方式进行的“常规” `Account` 提款。
-   此外，我们需要记录免费提款的次数，以确保在免费次数用完之前不收取额外费用。

视频讲解：
```[YouTube 链接](https://youtu.be/flIMJC2lY3M)

## 链表

如果需要复习链表相关知识，请参考下拉菜单。可以直接跳过本节，先尝试解决问题；如果遇到困难，再回过头来查阅。

链表是一种用于存储一系列值的数据结构。对于某些操作，例如在长列表中间插入元素，它比 Python 内置的列表类型效率更高。链表不是内置类型，因此我们定义一个名为 `Link` 的类来表示链表。链表可以是 `Link` 类的实例，也可以是 `Link.empty`（表示空链表）。

`Link` 类的每个实例都包含两个属性：`first` 和 `rest`。

```
class Link:
    """A linked list.

    >>> s = Link(1)
    >>> s.first
    1
    >>> s.rest is Link.empty
    True
    >>> s = Link(2, Link(3, Link(4)))
    >>> s.first = 5
    >>> s.rest.first = 6
    >>> s.rest.rest = Link.empty
    >>> s                                    # Displays the contents of repr(s)
    Link(5, Link(6))
    >>> s.rest = Link(7, Link(Link(8, Link(9))))
    >>> s
    Link(5, Link(7, Link(Link(8, Link(9)))))
    >>> print(s)                             # Prints str(s)
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

`Link` 实例的 `rest` 属性必须是另一个 `Link` 实例或者 `Link.empty`，不能是 `None`。

要判断链表是否为空，应将其与 `Link.empty` 进行比较。因为 `Link.empty` 是唯一的空链表实例，所以可以使用 `is` 或 `==` 进行比较。

```
def is_empty(s):
    """Return whether linked list s is empty."""
    return s is Link.empty:
```

### Q4：WWPD：链表

阅读 `Link` 类。确保你理解 doctest。

> 使用 Ok 来测试你对以下“Python 会输出什么？”问题的掌握程度：
>
> ```
> python3 ok -q link -u
> ```
>
> 如果答案是 `<function ...>`，请输入 `Function`；如果程序报错，请输入 `Error`；如果没有输出，请输入 `Nothing`。
>
> 如果你遇到困难，请尝试在一张纸上画出链表的盒子和指针图，或者使用 `python3 -i lab08.py` 将 `Link` 类加载到解释器中。

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
>>> link                 # Look at the __repr__ method of Link
______Link(5, Link(6, Link(7)))
>>> print(link)          # Look at the __str__ method of Link
______<5 6 7>
```

### Q5：链表元素复制
请编写一个名为 `duplicate_link` 的函数，该函数接受一个链表 `s` 和一个数值 `val`。它的作用是修改链表 `s`，使每个数值等于 `val` 的元素之后都跟随一个相同的 `val` 值 (即，复制该值)。它返回 `None`。

> **注意**：为了在链表中插入链接，需要重新赋值 `Link` 实例的 `rest` 属性，这些实例的 `first` 属性值等于 `val`。建议画一个 doctest 来进行可视化，这会有助于理解！

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
if s is Link.empty:
        return
    elif s.first == val:
        remaining = s.rest
        s.rest = Link(val, remaining)
        duplicate_link(remaining, val)
    else:
        duplicate_link(s.rest, val)
```

使用 Ok 测试工具来测试你的代码：

```
python3 ok -q duplicate_link
```

## 在本地检查你的分数

你可以通过运行以下命令在本地查看本次作业中每个题目的得分情况

```
python3 ok --score
```

请注意，这 *不会* 提交你的作业！ 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过将你编辑过的任何文件上传**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生都必须填写此[考勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因正当理由错过了实验课。大型实验课的学生不需要填写考勤表。
