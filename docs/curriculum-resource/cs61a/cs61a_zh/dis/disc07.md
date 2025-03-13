---
title: Discussion 7 OOP
---

# 讨论 7 | CS 61A 2024 年春季

## 讨论 7：面向对象编程

-   [disc07.pdf](/resource/cs61a/disc/disc07.pdf)

小组里派个人加入 [Discord] 吧 (https://cs61a.org/articles/discord)。多个人加入也行，但一个人就够了。

现在切换到 Pensieve：

-   **所有人**：前往 [discuss.pensieve.co]，用 @berkeley.edu 邮箱登录，然后输入组号 (就是你们的 Discord 频道号)。

进了 Pensieve 之后，就不用再回到这个页面了；Pensieve 上有同样的内容 (而且功能更多)。如果 Pensieve 出了什么问题，再回来这个页面继续讨论。

如果您遇到问题，请在 [Discord](https://cs61a.org/articles/discord/) 上的 `#help` 频道中发帖。

## 开始

先说说自己的名字，除了 CS 61A 还在上什么课，还有一直在练习的东西，比如乐器、杂耍、武术之类的。看看大家有没有什么共同爱好？

### Q1：抽牌

`draw` 函数接受一个列表 `hand` 和一个唯一的非负整数列表 `positions`，它们都小于 `hand` 的长度。对于 `positions` 里的每个 `p`，这个函数会移除 `hand[p]`，然后返回一个列表，列表里的元素是按照它们在 `hand` 中出现的顺序排列的 (而不是按照 `positions` 里的顺序)。

在每个空里填入以下名称之一：`list`, `map`, `filter` 等等。想了解这些函数的功能，可以参考[内置函数](https://docs.python.org/3/library/functions.html)和[列表方法](https://docs.python.org/3/tutorial/datastructures.html#more-on-lists)的文档。

**讨论时间：**在开始写代码之前，小组一起讨论一下，用什么方法来确保正确地移除并返回卡牌。尽量别用猜和试的方法！讨论的目的是让大家在没有解释器帮忙检查的情况下，尝试解决问题。
```python
def draw(hand, positions):
    """Remove and return the items at positions from hand.

    >>> hand = ['A', 'K', 'Q', 'J', 10, 9]
    >>> draw(hand, [2, 1, 4])
    ['K', 'Q', 10]
    >>> hand
    ['A', 'J', 9]
    """
    return _____(_____( [hand._____(i) for i in _____(_____(positions))] ))
```
在 61A 代码中运行

:::tip[**提示**:*]
对于列表 `s` 和整数 `i`，`s.pop(i)` 会返回并删除第 `i` 个元素。这会改变后面所有元素的位置（索引），但不会影响前面元素的位置。

对列表 `s` 调用 `reversed(s)` 会返回一个迭代器。 调用 `list(reversed(s))` 会返回一个列表，其中包含 `s` 中元素的相反顺序。
:::

搞定了？给自己鼓个掌！

## 面向对象编程

定义新类的一种有效方法是确定每个对象应该具有哪些实例属性，以及每个类应该具有哪些类属性。首先，描述一下每个属性的类型，以及它会怎么被用到。然后试着用这些属性来实现类的方法。

### Q2：键盘

**概述：** 键盘的每个字母都有一个按钮。当按下按钮时，它会通过调用 `output` 函数（例如 `print`）来输出其字母。字母是大写还是小写，取决于 _caps lock_ 键按了多少次。

**首先**，实现 `Button` 类，它接受一个小写 `letter`（一个字符串）和一个单参数 `output` 函数，例如 `Button('c', print)`。

Button 的 `press` 方法会调用它的 `output` 属性 (一个函数)，这个函数会作用于 `letter` 属性：如果 `caps_lock` 按了奇数次，就输出大写字母，否则输出小写字母。`press` 方法还会把 `pressed` 的值加一，并且返回按下的键。_提示_：`'hi'.upper()` 的计算结果为 `'HI'`。

**其次**，实现 `Keyboard` 类。`Keyboard` 有一个名为 `keys` 的字典，其中包含 `Button`（以其 `letter` 作为其键），用于 `LOWERCASE_LETTERS` 中的每个字母。它还有一个字母列表 `typed`，里面可能包含大写和小写字母。

`type` 方法接收一个字符串 `word`，这个字符串只包含小写字母。对于 `word` 里的每个字母，它会调用 `keys` 里对应 `Button` 的 `press` 方法。这会往 `Keyboard` 的 `typed` 列表里添加一个字母 (大写或小写，取决于 `caps_lock` 的状态)。 **注意：** 在实现 `type` 的时候，不要用 `upper` 或者 `letter`，直接调用 `press` 就行。

阅读 doctest 并讨论：
-   为什么可以连续使用 `.press().press().press()` 来多次按下同一个按钮？
-   为什么连续按按钮有时只在一行输出，有时却会输出多行？
-   为什么 `bored.typed` 最后有 10 个元素？

**讨论时间**：在任何人开始编写代码之前，先进行一次对话，描述每个属性的类型以及它将如何使用。从 `Button` 开始：`letter` 和 `output` 将如何使用？然后讨论 `Keyboard`：`typed` 和 `keys` 将如何使用？每次按下 `keys` 中的 `Button` 时，新的字母将如何添加到名为 `typed` 的列表中？如果不确定，请呼叫工作人员！一旦每个人都理解了这些问题的答案，你们就可以尝试一起编写代码了。
```python
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
        """Call output on letter (maybe uppercased), then return the button that was pressed."""
        self.pressed += 1
        "*** YOUR CODE HERE ***"
```

在 61A 代码中运行

在小组讨论并确认需要提示之前，请不要查看提示。
:::tip[**提示**:*]
因为 `self.letter` 总是小写，所以可以用 `self.letter.upper()` 得到大写版本。

`caps_lock` 键被按下的次数可以通过 `self.caps_lock.pressed` 或 `Button.caps_lock.pressed` 来获取。

你不需要返回任何结果，只需返回 `self` 即可，这样就能返回被按下的按钮。
:::

```python
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
        self.keys = ...  # Try a dictionary comprehension!

    def type(self, word):
        """Press the button for each letter in word."""
        assert all([w in LOWERCASE_LETTERS for w in word]), 'word must be all lowercase'
        "*** YOUR CODE HERE ***"
```
:::tip[**提示**:*]
可以使用字典推导式创建按键: `self.keys = {c: Button(c, ...) for c in LETTERS}`。对 `Button` 的调用应该接受 `c` 和 **一个将附加到 `self.typed` 的输出函数**，以便每次按下这些按钮之一时，它都会将一个字母附加到此 `Keyboard` 的 `self.typed`。

对于 `word` 中的每一个字母 `w`，调用 `self.keys[w]` 的 `press` 方法。理想情况下，在调用 `press` 方法时，`Button` 应该已经配置好（在 `Keyboard.__init__` 方法中），能够将输出添加到 `Keyboard` 对象的 `typed` 列表中。
:::

**演示时间**：描述每次按下 `keys` 中的 `Button` 时，如何将新字母添加到 `typed`。不要只是阅读你的代码，而是说它做了什么（例如，“当键盘的按钮被按下时……”）。一句话就足以描述如何将新字母添加到 `typed`。准备好后，向 `#discuss-queue` 频道发送一条消息，其中包含 `@discuss` 标签、你的讨论小组号码以及消息“Put it on our tab!”，课程工作人员将加入你的语音频道，听取你的描述并提供反馈。

### Q3: 熊

实现 `SleepyBear` 和 `WinkingBear` 类，以便调用它们的 `print` 方法与 doctest 匹配。使用尽可能少的代码，并尽量不要重复 `Eye` 或 `Bear` 中的任何逻辑。每个空白处只能填写两行简短的代码。
**讨论环节：** 在编写代码之前，讨论一下 `SleepyBear` 和 `Bear` 有什么不同。当使用继承时，你只需要实现子类与基类之间的差异。然后，讨论一下 `WinkingBear` 和 `Bear` 有什么不同。你们能想到不用重新实现 `print` 方法，也能让熊眨眼的方法吗？

```python
class Eye:
    """An eye.

    >>> Eye().draw()
    '0'
    >>> print(Eye(False).draw(), Eye(True).draw())
    0 -
    """
    def __init__(self, closed=False):
        self.closed = closed

    def draw(self):
        if self.closed:
            return '-'
        else:
            return '0'

class Bear:
    """A bear.

    >>> Bear().print()
    ? 0o0?
    """
    def __init__(self):
        self.nose_and_mouth = 'o'

    def next_eye(self):
        return Eye()

    def print(self):
        left, right = self.next_eye(), self.next_eye()
        print('? ' + left.draw() + self.nose_and_mouth + right.draw() + '?')

class SleepyBear(Bear):
    """A bear with closed eyes.

    >>> SleepyBear().print()
    ? -o-?
    """
    "*** YOUR CODE HERE ***"

class WinkingBear(Bear):
    """A bear whose left eye is different from its right eye.

    >>> WinkingBear().print()
    ? -o0?
    """
    def __init__(self):
        "*** YOUR CODE HERE ***"

    def next_eye(self):
        "*** YOUR CODE HERE ***"
```

在 61A 代码编辑器中运行

实现一个 `next_eye` 方法，该方法返回一个已关闭的 Eye 实例。

一种让熊眨眼的方法是，使用一个新的实例属性来记录 `next_eye` 方法被调用的次数，如果 `next_eye` 方法被调用了偶数次，就返回一个闭着的眼睛。

## 记录出勤情况

请大家填写[考勤表](https://docs.google.com/forms/d/e/1FAIpQLSeqlK8l6WkScGr-RHR-kM4p5bnR9cllYrG95fDqPJspSlll7A/viewform)（每人每周提交一次）。
