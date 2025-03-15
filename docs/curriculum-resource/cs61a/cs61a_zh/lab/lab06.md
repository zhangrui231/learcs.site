---
title: Lab 6 OOP
---

# Lab 6：面向对象编程 | CS 61A 2024年春季学期

## Lab 6：面向对象编程

-   [lab06.zip](/resource/cs61a/lab/lab06.zip)

_截止日期：3月6日周三晚上11:59_

## 入门文件

下载 [lab06.zip](/resource/cs61a/lab/lab06.zip)。你会找到本次实验题目的起始文件，以及 [Ok](https://cs61a.org//lab/lab06/ok) 自动评分器的副本。

## 必做题

## 入门视频

这些视频或许能帮你更好地解决本次作业中的编程问题。

> 要观看这些视频，你应该登录你的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcmlFtWRxO3ZvQyTRiyDZ6s)

## 面向对象编程

这里简单回顾一下面向对象编程。可以直接跳过本节，遇到问题再回来看。

**面向对象编程** (OOP) 是一种用对象和类组织程序的方法。

这是一个示例类：

```
class Car:
    num_wheels = 4

    def __init__(self, color):
        self.wheels = Car.num_wheels
        self.color = color

    def drive(self):
        if self.wheels <= Car.num_wheels:
            return self.color + ' car cannot drive!'
        return self.color + ' car goes vroom!'

    def pop_tire(self):
        if self.wheels > 0:
            self.wheels -= 1
```

以下是一些术语：

-   **类 (class)**：对象所属的类型，描述了该类型所有实例的行为。 上面的 `Car` 类描述了所有 `Car` 对象具有的行为。
-   **实例 (instance)**：术语“实例”和“对象”的意思一样；每个对象都是它所属类的一个实例。 在 Python 中，通过调用一个类来创建新的实例。
    
    ```
    >>> ferrari = Car('red')
    ```
    
    这里，`ferrari` 是绑定到 `Car` 类的一个实例的名称。
    
-   **属性 (attribute)**：对象具有命名的属性，例如本例中的 `wheels` 和 `color`。 可以通过点表达式访问，并用赋值语句修改。
    
    ```
    >>> ferrari.color
    'red'
    >>> ferrari.wheels
    4
    >>> ferrari.color = 'green'
    >>> ferrari.color
    'green'
    ```
    
-   **方法 (method)**：方法是类所拥有的函数，通过点表达式调用。 方法通常描述对象能做的操作，比如 `drive` 一辆汽车。
    
    ```
    >>> ferrari = Car('red')
    >>> ferrari.drive()
    'red car goes vroom!'
    ```
    
-   **\_\_init\_\_ 特殊方法**：名为 `__init__` 的方法很特殊，因为它会在创建新的类实例时自动调用；我们在这里初始化实例的属性。 表达式 `Car('red')` 调用 `Car` 类的 `__init__` 方法。
-   `self`：在 Python 中，`self` 是方法的第一个参数。调用方法时，`self` 会自动绑定到调用该方法的对象实例。 例如：
    
    ```
    >>> ferrari = Car('red')
    >>> ferrari.drive()
    ```
    
    请注意，`drive` 方法将 `self` 作为参数，但实际上我们并没有显式地传入参数！ 这是因为点表达式会 _隐式地_ 把 `ferrari` 作为 `self` 传入。 因此，在此示例中，`self` 绑定到全局帧中名为 `ferrari` 的对象。
    

### Q1：银行账户

请扩展课堂上讲的 `Account` 类，让每个 `Account` 实例都有一个 `transactions` 属性，该属性是一个 `Transaction` 实例的列表，每次调用 `deposit` 或 `withdraw` 方法时，都会创建一个 `Transaction` 实例。 `Transaction` 实例会记录每次调用 `deposit` 或 `withdraw` 方法前后账户的余额。 此外，每个 `Transaction` 都被分配一个 `id` 属性，该属性是该账户上先前调用 `deposit` 或 `withdraw` 的次数。 `id` 在每个账户中是唯一的，而不是所有交易通用的唯一标识符。

`Transaction` 有两个方法：
-   `changed` 方法：如果交易前后余额发生变化，则返回 `True`；否则，返回 `False`。
-   `report` 方法：返回描述该交易的字符串，格式为“ID: 消息”。

```
class Transaction:
    def __init__(self, id, before, after):
        self.id = id
        self.before = before
        self.after = after

    def changed(self):
        """Return whether the transaction resulted in a changed balance."""
        "*** YOUR CODE HERE ***"

    def report(self):
        """Return a string describing the transaction.

        >>> Transaction(3, 20, 10).report()
        '3: decreased 20->10'
        >>> Transaction(4, 20, 50).report()
        '4: increased 20->50'
        >>> Transaction(5, 50, 50).report()
        '5: no change'
        """
        msg = 'no change'
        if self.changed():
            "*** YOUR CODE HERE ***"
        return str(self.id) + ': ' + msg

class Account:
    """A bank account that tracks its transaction history.

    >>> a = Account('Eric')
    >>> a.deposit(100)    # Transaction 0 for a
    100
    >>> b = Account('Erica')
    >>> a.withdraw(30)    # Transaction 1 for a
    70
    >>> a.deposit(10)     # Transaction 2 for a
    80
    >>> b.deposit(50)     # Transaction 0 for b
    50
    >>> b.withdraw(10)    # Transaction 1 for b
    40
    >>> a.withdraw(100)   # Transaction 3 for a
    'Insufficient funds'
    >>> len(a.transactions)
    4
    >>> len([t for t in a.transactions if t.changed()])
    3
    >>> for t in a.transactions:
    ...     print(t.report())
    0: increased 0->100
    1: decreased 100->70
    2: increased 70->80
    3: no change
    >>> b.withdraw(100)   # Transaction 2 for b
    'Insufficient funds'
    >>> b.withdraw(30)    # Transaction 3 for b
    10
    >>> for t in b.transactions:
    ...     print(t.report())
    0: increased 0->50
    1: decreased 50->40
    2: no change
    3: decreased 40->10
    """

    # *** YOU NEED TO MAKE CHANGES IN SEVERAL PLACES IN THIS CLASS ***

    def __init__(self, account_holder):
        self.balance = 0
        self.holder = account_holder

    def deposit(self, amount):
        """Increase the account balance by amount, add the deposit
        to the transaction history, and return the new balance.
        """
        self.balance = self.balance + amount
        return self.balance

    def withdraw(self, amount):
        """Decrease the account balance by amount, add the withdraw
        to the transaction history, and return the new balance.
        """
        if amount > self.balance:
            return 'Insufficient funds'
        self.balance = self.balance - amount
        return self.balance
```

Use Ok to test your code:

```
python3 ok -q Account
```

  

### Q2: Email

一个电子邮件系统有三个类：`Email`、`Server` 和 `Client`。 `Client` 可以 `compose` 一封电子邮件，然后将其 `send` 到 `Server`。 然后，`Server` 将其传送到另一个 `Client` 的 `inbox`。 为了实现这一点，`Server` 有一个名为 `clients` 的字典，它将 `Email` 中的 `recipient_name` 与具有该名称的 `Client` 对象相匹配。

假设客户端永远不会更改它使用的服务器，并且它只使用该服务器编写电子邮件。

填写以下定义以完成实现！ `Email` 类已为您完成。

```
class Email:
    """An email has the following instance attributes:

        msg (str): the contents of the message
        sender (Client): the client that sent the email
        recipient_name (str): the name of the recipient (another client)
    """
    def __init__(self, msg, sender, recipient_name):
        self.msg = msg
        self.sender = sender
        self.recipient_name = recipient_name

class Server:
    """Each Server has one instance attribute called clients that is a
    dictionary from client names to client objects.
    """
    def __init__(self):
        self.clients = {}

    def send(self, email):
        """将邮件添加到目标客户端的收件箱里。"""
        ____.inbox.append(email)

    def register_client(self, client):
        """将客户端注册到服务器的客户端列表中。"""
        ____[____] = ____

class Client:
    """客户端包含服务器、名称 (字符串) 和收件箱 (列表) 这些属性。

    >>> s = Server()
    >>> a = Client(s, 'Alice')
    >>> b = Client(s, 'Bob')
    >>> a.compose('Hello, World!', 'Bob')
    >>> b.inbox[0].msg
    'Hello, World!'
    >>> a.compose('CS 61A Rocks!', 'Bob')
    >>> len(b.inbox)
    2
    >>> b.inbox[1].msg
    'CS 61A Rocks!'
    >>> b.inbox[1].sender.name
    'Alice'
    """
    def __init__(self, server, name):
        self.inbox = []
        self.server = server
        self.name = name
        server.register_client(____)

    def compose(self, message, recipient_name):
        """向指定收件人发送邮件，内容为给定消息。"""
        email = Email(message, ____, ____)
        self.server.send(email)
```

> 提示：尝试用最小的硬币进行兑换。如果发现无法用最小的硬币兑换，则尝试不用最小的硬币进行兑换。
>
> 提示：最简单的解决方案不涉及定义任何局部函数，但如果需要，您可以定义其他函数。

强烈建议在不看答案的情况下尝试解决此问题。如果实在卡住了，再参考答案。

`make_change(amount, coins)` 的代码应该这样做：

1. 检查 `amount == smallest` 是否成立，如果成立，则返回一个仅包含 `smallest` 的单元素列表。
2. 否则，调用 `make_change(amount-smallest, rest)`，它将返回 `None` 或数字列表。
3. 如果第二步返回一个列表，则返回一个更长的列表，并在列表开头加上 `smallest`。
4. 如果第二步返回 `None`，说明无法使用 `smallest` 这个硬币，所以直接 `make_change(amount, rest)`。

使用 Ok 来测试您的代码：

```
python3 ok -q make_change
```

### Q4: 找零机

完成 `ChangeMachine` 类的 `change` 方法。`ChangeMachine` 实例存储一些 `coins`，最初都是一美分硬币。`change` 方法接收一个正整数 `coin`，将这个硬币加入到 `coins` 中，然后返回一个总和等于 `coin` 的列表。机器会优先返回尽可能多的小额硬币，并按从小到大的顺序排列。`change` 方法返回的硬币会从机器的 `coins` 中扣除。

```
class ChangeMachine:
    """一个兑换机持有一定数量的硬币，最初都是便士。
    change 方法添加一个面值为 X 的硬币，并返回一个总价值为 X 的硬币列表。机器倾向于返回可用的小硬币。机器中的总价值永远不会改变，并且它始终可以兑换任何硬币（可能通过返回传入的硬币）。

    coins 属性是一个字典，其键是正整数面额，值是正整数硬币计数。

    >>> m = ChangeMachine(2)
    >>> m.coins == {1: 2}
    True
    >>> m.change(2)
    [1, 1]
    >>> m.coins == {2: 1}
    True
    >>> m.change(2)
    [2]
    >>> m.coins == {2: 1}
    True
    >>> m.change(3)
    [3]
    >>> m.coins == {2: 1}
    True

    >>> m = ChangeMachine(10) # 10 便士
    >>> m.coins == {1: 10}
    True
    >>> m.change(5) # 投入一个五美分硬币，并找回 5 个一美分硬币
    [1, 1, 1, 1, 1]
    >>> m.coins == {1: 5, 5: 1} # 剩余 5 个便士和一个镍币
    True
    >>> m.change(3)
    [1, 1, 1]
    >>> m.coins == {1: 2, 3: 1, 5: 1}
    True
    >>> m.change(2)
    [1, 1]
    >>> m.change(2) # 剩余的一美分硬币不够了，所以直接返回一个两美分硬币
    [2]
    >>> m.coins == {2: 1, 3: 1, 5: 1}
    True
    >>> m.change(8) # 没有足够的两美分硬币来凑出 8 美分，所以用一个 3 美分硬币和一个 5 美分硬币来代替。
    [3, 5]
    >>> m.coins == {2: 1, 8: 1}
    True
    >>> m.change(1) # 直接返回投入的一美分硬币（因为它是最小面值的）。
    [1]
    >>> m.change(9) # 直接返回投入的 9 美分硬币（因为没有其他硬币可以组合成 9 美分）。
    [9]
    >>> m.coins == {2: 1, 8: 1}
    True
    >>> m.change(10)
    [2, 8]
    >>> m.coins == {10: 1}
    True

>>> m = ChangeMachine(9)
    >>> [m.change(k) for k in [2, 2, 3]]
    [[1, 1], [1, 1], [1, 1, 1]]
    >>> m.coins == {1: 2, 2: 2, 3: 1}
    True
    >>> m.change(5) # 倾向于使用 [1, 1, 3] 而不是 [1, 2, 2] (因为有更多的 1 分硬币)
    [1, 1, 3]
    >>> m.change(7)
    [2, 5]
    >>> m.coins == {2: 1, 7: 1}
    True
    """
    def __init__(self, pennies):
        self.coins = {1: pennies}

    def change(self, coin):
        """返回找零, 并从 self.coins 中移除."""
        "*** YOUR CODE HERE ***"

```

> 提示：调用 `make_change` 函数来计算 `change` 的结果, 记得在返回结果前更新 `self.coins`。

务必在不阅读演练的情况下尝试解决此问题，但如果您确实遇到困难，请阅读演练。

`change(self, coin)` 的代码应执行以下操作：

1. 将 `coin` 添加到机器里。 这样，你就可以直接进行找零操作，而且总能得到结果，即使结果是把这枚硬币原封不动地退回。
2. 调用 `make_change(coin, self.coins)` 并将结果分配给一个名称（例如 `result`）。 您将在最后返回此值。
3. 在返回之前，减少您要返回的每枚硬币的计数。 一种方法是，对于步骤 2 中 `make_change` 返回的每枚硬币 `c`，重复调用 `remove_one(self.coins, c)`。
4. 返回调用 `make_change` 在步骤 2 中产生的结果。

使用 Ok 来测试你的代码：

```
python3 ok -q ChangeMachine
```

  

## 在本地检查你的分数

你可以通过运行以下命令在本地查看你在本次作业中每个问题的得分

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过上传你编辑过的文件到 Gradescope 上对应的作业来提交。 [Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有不在大型实验室的学生都需要填写此[出勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论您是参加了实验还是因正当理由错过了实验。 大型实验室的学生不需要填写出勤表。
