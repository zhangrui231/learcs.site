---
title: Discussion 7 Solutions
---

# 讨论 7 | CS 61A 2024 春季

## 讨论 7：面向对象编程

-   [disc07.pdf](/resource/cs61a/disc07.pdf)

请小组里选一个人[加入 Discord](https://cs61a.org/articles/discord)。多几个人加入也行，但一个人就够了。

现在切换到 Pensieve：

-   **所有人**：访问 [discuss.pensieve.co](http://discuss.pensieve.co/) 并使用你的 @berkeley.edu 邮箱登录，然后输入你的小组号码。（你的小组号码就是你们的 Discord 频道号码。）

进入 Pensieve 之后，就不用回到这个页面了；Pensieve 具有所有相同的内容（但功能更多）。 如果由于某种原因 Pensieve 无法工作，请返回此页面并继续讨论。

如果遇到问题，可以在 [Discord](https://cs61a.org/articles/discord/) 的 `#help` 频道里提问。

## 开始

先说说你的名字，除了 CS 61A 之外还在上的其他课，以及你练习过一段时间的东西，比如乐器、杂耍或者武术。你们小组的成员之间有什么共同的兴趣吗？

### Q1：抽牌

`draw` 函数接受一个列表 `hand` 和一个唯一的非负整数列表 `positions`，这些整数都小于 `hand` 的长度。 它会删除 `positions` 中每个 `p` 对应的 `hand[p]` 元素，并按照这些元素在 `hand` 中出现的顺序返回一个列表 (而非 `positions` 中的顺序)。

请用以下名称之一填空：`list`、`map`、`filter`、`reverse`、`reversed`、`sort`、`sorted`、`append`、`insert`、`index`、`remove`、`pop`、`zip` 或 `sum`。 有关这些操作的描述，请参阅[内置函数](https://docs.python.org/3/library/functions.html)和[列表方法](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)文档。

**讨论时间：**在开始编写代码之前，小组一起讨论一下，你们打算用什么方法来确保正确地删除和返回卡牌。 尽量避免盲目猜测和尝试！ 讨论的目的是让大家在没有解释器帮助的情况下，尝试解决问题。

**你的答案**

在 61A 代码中运行

**解决方案**

```
def draw(hand, positions):
    """Remove and return the items at positions from hand.

    >>> hand = ['A', 'K', 'Q', 'J', 10, 9]
    >>> draw(hand, [2, 1, 4])
    ['K', 'Q', 10]
    >>> hand
    ['A', 'J', 9]
    """
    return list(reversed( [hand.pop(i) for i in reversed(sorted(positions))] ))

```

对于列表 `s` 和整数 `i`，`s.pop(i)` 会返回并删除列表中第 `i` 个元素。 这会改变其后所有元素的位置 (索引)，但不会影响之前元素的位置。

_Aced_ it? 做得好！给自己鼓掌！

## 面向对象编程

定义新类的一个有效方法是，先确定每个对象应该有哪些实例属性，以及每个类应该有哪些类属性。 首先，描述每个属性的类型以及它将如何使用，然后尝试根据这些属性实现类的方法。

### Q2：键盘

**概述：**键盘为字母表的每个字母都有一个按钮。 当按下按钮时，它通过调用一个 `output` 函数（例如 `print`）来输出其字母。 字母是大写还是小写，取决于大写锁定键 (Caps Lock) 被按下的次数。

**首先**，实现 `Button` 类，该类接受一个小写 `letter`（一个字符串）和一个单参数 `output` 函数，例如 `Button('c', print)`。

`Button` 类的 `press` 方法会调用其 `output` 属性 (一个函数)，并将 `letter` 属性作为参数传入。 如果 `caps_lock` 键被按了奇数次，则传入大写字母，否则传入小写字母。 `press` 方法还会递增 `pressed` 并返回被按下的键。 _提示_：`'hi'.upper()` 的计算结果为 `'HI'`。

**其次**，实现 `Keyboard` 类。 `Keyboard` 有一个名为 `keys` 的字典，其中包含 `Button`（以其 `letter` 作为其键），用于 `LOWERCASE_LETTERS` 中的每个字母。 它还有一个字母列表 `typed`，它可能是大写和小写字母的混合。

`type` 方法接受一个仅包含小写字母的字符串 `word`。 对于 `word` 中的每个字母，它会调用 `keys` 字典中对应 `Button` 对象的 `press` 方法。 每次调用都会将一个字母 (大写或小写，取决于 `caps_lock` 的状态) 添加到 `Keyboard` 对象的 `typed` 列表中。 **重要提示：**不要在 `type` 的实现中使用 `upper` 或 `letter`； 只需调用 `press` 即可。

阅读 doctest 并讨论：

-   为什么可以连续使用 `.press().press().press()` 来重复按一个按钮。
-   为什么重复按一个按钮有时只在一行上打印，有时打印多行。
-   为什么最后 `bored.typed` 这个列表里会有 10 个元素。
**讨论环节**：在开始写代码之前，先讨论一下每个属性的类型和用途。`Button` 类的 `letter` 和 `output` 属性将如何使用？`Keyboard` 类的 `typed` 和 `keys` 属性将如何使用？每次按下 `keys` 里的 `Button`，新字母是如何添加到 `typed` 列表中的？不明白就问助教！一旦大家都理解了这些问题，你们就可以尝试一起编写代码了。

**你的答案**

在 61A 代码编辑器中运行

**解决方案**

```
LOWERCASE_LETTERS = 'abcdefghijklmnopqrstuvwxyz'

class CapsLock:
    def __init__(self):
        self.pressed = 0

    def press(self):
        self.pressed += 1

class Button:
    """A button on a keyboard.

    >>> f = lambda c: print(c, end='')  # The end='' argument avoids going to a new line
    >>> k, e, y = Button('k', f), Button('e', f), Button('y', f)
    >>> s = e.press().press().press()
    eee
    >>> caps = Button.caps_lock
    >>> t = [x.press() for x in [k, e, y, caps, e, e, k, caps, e, y, e, caps, y, e, e]]
    keyEEKeyeYEE
    >>> u = Button('a', print).press().press().press()
    A
    A
    A
    """
    caps_lock = CapsLock()

    def __init__(self, letter, output):
        assert letter in LOWERCASE_LETTERS
        self.letter = letter
        self.output = output
        self.pressed = 0

    def press(self):
        "Call output on letter (maybe uppercased), then return the button that was pressed."
        self.pressed += 1
        if self.caps_lock.pressed % 2 == 1:
            self.output(self.letter.upper())
        else:
            self.output(self.letter)
        return self

class Keyboard:
    """A keyboard.

    >>> Button.caps_lock.pressed = 0  # Reset the caps_lock key
    >>> bored = Keyboard()
    >>> bored.type('hello')
    >>> bored.typed
    ['h', 'e', 'l', 'l', 'o']
    >>> bored.keys['l'].pressed
    2

    >>> Button.caps_lock.press()
    >>> bored.type('hello')
    >>> bored.typed
    ['h', 'e', 'l', 'l', 'o', 'H', 'E', 'L', 'L', 'O']
    >>> bored.keys['l'].pressed
    4
    """
    def __init__(self):
        self.typed = []
        self.keys = {c: Button(c, self.typed.append) for c in LOWERCASE_LETTERS}

    def type(self, word):
        "Press the button for each letter in word."
        assert all([w in LOWERCASE_LETTERS for w in word]), 'word must be all lowercase'
        for w in word:
            self.keys[w].press()

```

先小组讨论，确定需要提示了再看。

因为 `self.letter` 总是小写，所以用 `self.letter.upper()` 来得到大写版本。

`caps_lock` 的按下次数可以用 `self.caps_lock.pressed` 或者 `Button.caps_lock.pressed` 来表示。

`output` 属性是一个可以被调用的函数，例如 `self.output(self.letter)` 或 `self.output(self.letter.upper())`。这里不需要返回结果，最后返回 `self` 是为了返回被按下的按钮对象。

可以用字典推导式来创建 `keys`：`self.keys = {c: Button(c, ...) for c in LETTERS}`。调用 `Button` 时，需要传入 `c` 和一个**能将输出附加到 `self.typed` 的函数**。这样，每次按下按键，就会将一个字母添加到 `Keyboard` 的 `self.typed` 列表中。

对于 `word` 里的每个字母 `w`，调用 `self.key[w]` 的 `press` 方法。请确保在调用 `press` 之前，`Button` 已经在 `Keyboard.__init__` 方法中被正确设置，能够将输出添加到 `Keyboard` 的 `typed` 列表里。

**展示环节**：不要只是阅读你的代码，而是说它做了什么（例如，“当键盘的按钮被按下时……”）。一句话就足以描述如何将新字母添加到 `typed`。准备好后，向 `#discuss-queue` 频道发送一条带有 `@discuss` 标签、你的讨论小组编号和消息“Put it on our tab!”的消息，课程工作人员将加入你的语音频道，听取你的描述并提供反馈。

### Q3: Bear

实现 `SleepyBear` 和 `WinkingBear` 类，以便调用它们的 `print` 方法与 doctest 匹配。使用尽可能少的代码，尽量不要重复 `Eye` 或 `Bear` 中的任何逻辑。每个空白处只能填写两行简短的代码。

在编写代码之前，讨论一下 `SleepyBear` 和 `Bear` 有什么不同。使用继承时，你只需要实现基类和子类之间的差异。然后，讨论一下 `WinkingBear` 和 `Bear` 有什么不同。你能想到一种让熊眨眼的方法，而无需重新实现 `print` 吗？

**你的答案**
在 61A 代码中执行

**答案**

```
class Eye:
    """An eye.

    >>> Eye().draw()
    '•'
    >>> print(Eye(False).draw(), Eye(True).draw())
    • -
    """
    def __init__(self, closed=False):
        self.closed = closed

    def draw(self):
        if self.closed:
            return '-'
        else:
            return '•'

class Bear:
    """A bear.

    >>> Bear().print()
    ʕ •ᴥ•ʔ
    """
    def __init__(self):
        self.nose_and_mouth = 'ᴥ'

    def next_eye(self):
        return Eye()

    def print(self):
        left, right = self.next_eye(), self.next_eye()
        print('ʕ ' + left.draw() + self.nose_and_mouth + right.draw() + 'ʔ')

class SleepyBear(Bear):
    """A bear with closed eyes.

    >>> SleepyBear().print()
    ʕ -ᴥ-ʔ
    """
    def next_eye(self):
        return Eye(True)

class WinkingBear(Bear):
    """A bear whose left eye is different from its right eye.

    >>> WinkingBear().print()
    ʕ -ᴥ•ʔ
    """
    def __init__(self):
        super().__init__()
        self.eye_calls = 0

    def next_eye(self):
        self.eye_calls += 1
        return Eye(self.eye_calls % 2)

```

实现一个 `next_eye` 方法，该方法返回一个关闭的 Eye 实例。

让熊眨眼的一种方法是使用新的实例属性来跟踪 `next_eye` 方法被调用的次数，如果 `next_eye` 被调用了偶数次，则返回一个关闭的眼睛。

## 登记出席

请大家填写[出勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。
