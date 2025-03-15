---
title: Lab 6 Solutions
---

# 实验六 答案 | CS 61A 2024年春季

## 实验六 答案

-   [lab06.zip](/resource/cs61a/lab06.zip)

## 解答文件

## 必做题目

## 新手入门视频

这些视频可能对解决本次作业的编程问题有所帮助。

> 观看视频请使用您的 berkeley.edu 邮箱登录。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZcmlFtWRxO3ZvQyTRiyDZ6s)

## 面向对象编程

这里有一个关于面向对象编程的复习。 遇到问题时，可以直接跳到题目，稍后再返回此处参考。

**面向对象编程** (OOP) 是一种以对象和类为基础的程序设计方法。

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

-   **类**：对象的类型，它描述了其实例的行为。 上面的 `Car` 类描述了所有 `Car` 对象都具有的行为。
-   **实例**：“实例”一词与“对象”含义相同； 每个对象都是其类的一个实例。 在 Python 中，通过调用一个类来创建新的实例。
    
    ```
    >>> ferrari = Car('red')
    ```
    
    在这里，`ferrari` 是绑定到 `Car` 类的一个实例的名称。
    
-   **属性**：对象具有命名的属性，例如本例中的 `wheels` 和 `color`。 可以使用点表达式访问和修改它们。
    
    ```
    >>> ferrari.color
    'red'
    >>> ferrari.wheels
    4
    >>> ferrari.color = 'green'
    >>> ferrari.color
    'green'
    ```
    
-   **方法**：方法是类的属性，本质上是函数，并使用点表达式调用。 方法通常描述与对象关联的操作，例如 `drive` 一辆汽车。
    
    ```
    >>> ferrari = Car('red')
    >>> ferrari.drive()
    'red car goes vroom!'
    ```
    
-   **\_\_init\_\_ 特殊方法**：`__init__` 方法是一个特殊方法，在创建类的新实例时会被自动调用，用于初始化实例的属性。 表达式 `Car('red')` 调用 `Car` 类的 `__init__` 方法。
-   `self`：在 Python 中，`self` 是方法的第一个参数。 调用方法时，`self` 会自动绑定到调用该方法的实例。 例如：
    
    ```
    >>> ferrari = Car('red')
    >>> ferrari.drive()
    ```
    
    请注意，`drive` 方法将 `self` 作为参数，但看起来我们没有传入任何参数！ 这是因为点标记法会_隐式地_将 `ferrari` 作为 `self` 参数传入。 因此，在本例中，`self` 绑定到全局帧中名为 `ferrari` 的对象。
    

### Q1：银行账户

在课堂上 `Account` 类的基础上进行扩展，使得每个 `Account` 实例都包含一个 `transactions` 属性，该属性是一个 `Transaction` 实例的列表，每次调用 `deposit` 或 `withdraw` 方法时都会添加一个新的 `Transaction` 实例。 `Transaction` 实例记录每次调用 `deposit` 或 `withdraw` 之前的 `before` 和之后的 `after` 余额。 此外，每个 `Transaction` 实例都有一个 `id` 属性，表示该账户上 `deposit` 或 `withdraw` 方法被调用的次数。 `id` 仅在单个账户内唯一，并非所有交易的全局唯一标识符。

`Transaction` 有两种方法：

-   如果交易前后余额发生变化，`changed` 方法返回 `True`，否则返回 `False`。
-   `report` 返回一个描述交易的字符串。 它以 ID 开头，然后是一条消息。

```
class Transaction:
    def __init__(self, id, before, after):
        self.id = id
        self.before = before
        self.after = after

    def changed(self):
        """Return whether the transaction resulted in a changed balance."""
        return self.before != self.after
    def report(self):
        """返回描述交易的字符串。

>>> Transaction(3, 20, 10).report()
        '3: 减少了 20->10'
        >>> Transaction(4, 20, 50).report()
        '4: 增加了 20->50'
        >>> Transaction(5, 50, 50).report()
        '5: 无变化。'
        """
        msg = '无变化'
        if self.changed():
if self.after < self.before:
                verb = '减少了'
            else:
                verb = '增加了'
            msg = verb + ' ' + str(self.before) + '->' + str(self.after)        return str(self.id) + ': ' + msg

class Account:
    """一个银行账户，可以追踪其交易历史。

    >>> a = Account('Eric')
    >>> a.deposit(100)    # a 的第 0 笔交易。
    100
    >>> b = Account('Erica')
    >>> a.withdraw(30)    # a 的第 1 笔交易。
    70
    >>> a.deposit(10)     # a 的第 2 笔交易。
    80
    >>> b.deposit(50)     # b 的第 0 笔交易。
    50
    >>> b.withdraw(10)    # b 的第 1 笔交易。
    40
    >>> a.withdraw(100)   # a 的第 3 笔交易。
    'Insufficient funds'
    >>> len(a.transactions)
    4
    >>> len([t for t in a.transactions if t.changed()])
    3
    >>> for t in a.transactions:
    ...     print(t.report())
    0: 增加了 0->100
    1: 减少了 100->70
    2: 增加了 70->80
    3: 无变化
    >>> b.withdraw(100)   # b 的第 2 笔交易。
    'Insufficient funds'
    >>> b.withdraw(30)    # b 的第 3 笔交易。
    10
    >>> for t in b.transactions:
    ...     print(t.report())
    0: 增加了 0->50
    1: 减少了 50->40
    2: 无变化
    3: 减少了 40->10
    """

    # *** 你需要在该类中的几个地方进行修改 ***
def next_id(self):
        # 有很多实现这个计数器的方法，例如使用实例属性来跟踪下一个 ID。
        return len(self.transactions)
    def __init__(self, account_holder):
        self.balance = 0
        self.holder = account_holder
        self.transactions = []
    def deposit(self, amount):
        """将账户余额增加 amount，并将存款添加到交易历史中，然后返回新的余额。
        """
        self.transactions.append(Transaction(self.next_id(), self.balance, self.balance + amount))        self.balance = self.balance + amount
        return self.balance

    def withdraw(self, amount):
        """将账户余额减少 amount，并将取款添加到交易历史中，然后返回新的余额。
        """
        if amount > self.balance:
            self.transactions.append(Transaction(self.next_id(), self.balance, self.balance))            return 'Insufficient funds'
        self.transactions.append(Transaction(self.next_id(), self.balance, self.balance - amount))        self.balance = self.balance - amount
        return self.balance
```

使用 Ok 测试你的代码：

```
python3 ok -q Account
```

### Q2: 电子邮件

电子邮件系统包含三个类：`Email`、`Server` 和 `Client`。一个 `Client` 可以 `compose` 一封电子邮件，然后将其 `send` 给 `Server`。然后，`Server` 将其传递到另一个 `Client` 的 `inbox` 中。为了实现这一点，`Server` 有一个名为 `clients` 的字典，该字典将 `Email` 中的 `recipient_name` 与具有该名称的 `Client` 对象相匹配。

假设客户端永远不会更改它使用的服务器，并且它只使用该服务器编写电子邮件。

填写下面的定义以完成实现！ `Email` 类已经为你完成。

```
class Email:
    """一封电子邮件具有以下实例属性：

        msg (str)：消息的内容
        sender (Client)：发送电子邮件的客户端
        recipient_name (str)：收件人的姓名（另一个客户端）
    """
    def __init__(self, msg, sender, recipient_name):
        self.msg = msg
        self.sender = sender
        self.recipient_name = recipient_name

class Server:
    """每个 Server 都有一个名为 clients 的实例属性，它是一个将客户端名称映射到客户端对象的字典。
    """
    def __init__(self):
        self.clients = {}
    def send(self, email):
        """把邮件添加到收件人的邮箱里。"""
        self.clients[email.recipient_name].inbox.append(email)
    def register_client(self, client):
        """将客户端注册到服务器的客户端列表中。"""
        self.clients[client.name] = client
class Client:
    """客户端拥有一个服务器、一个名称（字符串）和一个收件箱（列表）。

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
        server.register_client(self)
    def compose(self, message, recipient_name):
        """向指定收件人发送邮件。"""
        email = Email(message, self, recipient_name)
        self.server.send(email)
```
> 提示：尝试用最小的硬币进行兑换。如果无法用最小硬币兑换，则尝试不用最小硬币兑换。
>
> 提示：最简单的解法不需要定义局部函数，但你可以根据需要定义额外的函数。

在没有阅读讲解之前，请务必尝试自己解决。如果实在遇到困难，再参考讲解。

`make_change(amount, coins)` 函数应执行以下步骤：

1.  检查 `amount == smallest` 是否成立，如果成立，则返回一个仅包含 `smallest` 的单元素列表。
2.  否则，调用 `make_change(amount-smallest, rest)`，它会返回 `None` 或一个列表。
3.  如果步骤 2 中的调用返回一个列表，则返回一个更长的列表，其中包含位于最前面的 `smallest`。
4.  如果步骤 2 中的调用返回 `None`，则表示无法使用 `smallest` 硬币，因此只需 `make_change(amount, rest)`

使用 Ok 来测试你的代码：

```
python3 ok -q make_change
```

### Q4: 兑换机

完成 `ChangeMachine` 类的 `change` 方法。 `ChangeMachine` 实例拥有一定数量的硬币，初始状态都是便士。`change` 方法接收一个正整数 `coin`，将该硬币加入硬币中，并返回总额为 `coin` 的一个硬币列表。 机器倾向于优先返回更多可用的小额硬币，并按从小到大的顺序排列。`change` 方法返回的硬币会从机器的硬币中移除。

```
class ChangeMachine:
    """A change machine holds a certain number of coins, initially all pennies.
    The change method adds a single coin of some denomination X and returns a
    list of coins that sums to X. The machine prefers to return the smallest
    coins available. The total value in the machine never changes, and it can
    always make change for any coin (perhaps by returning the coin passed in).

    The coins attribute is a dictionary with keys that are positive integer
    denominations and values that are positive integer coin counts.

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

    >>> m = ChangeMachine(10) # 10 pennies
    >>> m.coins == {1: 10}
    True
    >>> m.change(5) # takes a nickel & returns 5 pennies
    [1, 1, 1, 1, 1]
    >>> m.coins == {1: 5, 5: 1} # 5 pennies & a nickel remain
    True
    >>> m.change(3)
    [1, 1, 1]
    >>> m.coins == {1: 2, 3: 1, 5: 1}
    True
    >>> m.change(2)
    [1, 1]
    >>> m.change(2) # not enough 1's remaining; return a 2
    [2]
    >>> m.coins == {2: 1, 3: 1, 5: 1}
    True
    >>> m.change(8) # cannot use the 2 to make 8, so use 3 & 5
    [3, 5]
    >>> m.coins == {2: 1, 8: 1}
    True
    >>> m.change(1) # return the penny passed in (it's the smallest)
    [1]
    >>> m.change(9) # return the 9 passed in (no change possible)
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
    >>> m.change(5) # 倾向于选择 [1, 1, 3] 而不是 [1, 2, 2] (因为更多 1 分硬币)
    [1, 1, 3]
    >>> m.change(7)
    [2, 5]
    >>> m.coins == {2: 1, 7: 1}
    True
    """
    def __init__(self, pennies):
        self.coins = {1: pennies}

    def change(self, coin):
        """返回找零，并将结果从 self.coins 中移除。"""
        self.coins[coin] = 1 + self.coins.get(coin, 0)  # 将硬币放入机器中
        result = make_change(coin, self.coins)
        for c in result:
            self.coins = remove_one(self.coins, c)
        return result
```

> 提示：调用 `make_change` 函数来计算 `change` 方法的结果，但在返回结果之前更新 `self.coins`。

一定要尝试在不阅读演练的情况下解决这个问题，但如果你真的卡住了，那就阅读演练。

`change(self, coin)` 的代码应该执行以下操作：

1.  将 `coin` 添加到机器中。 这样，您就可以直接找零，并且总能得到一些结果，即使结果是直接返回该硬币。 最简单的方法是使用 `get` 方法获取 `coin` 的数量（默认为 0），然后加 1：`self.coins[coin] = 1 + self.coins.get(coin, 0)`
2.  调用 `make_change(coin, self.coins)`，并将结果赋值给一个变量（例如 `result`）。 最后，您需要返回这个变量。
3.  在返回结果之前，减少您要返回的每种硬币的数量。 一种方法是，对于步骤 2 中调用 `make_change` 得到的 `result` 中的每种硬币 `c`，循环调用 `remove_one(self.coins, c)`。
4.  返回调用步骤 2 中的 `make_change` 的结果。

使用 Ok 测试您的代码：

```
python3 ok -q ChangeMachine
```

## 在本地查看您的得分

您可以通过运行以下命令在本地检查此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业！** 当您对您的分数感到满意时，请将作业提交到 Gradescope 以获得学分。

## 提交

通过将您编辑的任何文件**上传到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生都必须填写此[出勤表](https://go.cs61a.org/lab-att)。 每周提交此表格，无论您是否参加了实验课，或者因为正当理由错过了实验课。 大型实验课的学生不需要填写出勤表。
