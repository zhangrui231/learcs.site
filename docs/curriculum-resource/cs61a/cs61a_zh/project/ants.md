---
title: Ants
sidebar_position: 3
---


# 项目 3: Ants Vs. SomeBees (蚂蚁大战蜜蜂)

![Ants vs. Somebees](/img/cs61a/splash.png)

> 蜜蜂来了！
>
> 创造更强的战士，
>
> 代代相传。

## 介绍

> **想要拿满分的话：**
>
> -   在 3 月 7 日（星期四）之前完成并提交第一阶段，可以获得 1 分。
> -   在 3 月 12 日（星期二）之前完成并提交第二阶段，可以获得 1 分。
> -   在 3 月 19 日（星期二）之前完成并提交所有阶段。
>
> 请按顺序解决这些问题，因为后面的问题会用到前面问题的知识。
>
> 你可以和你的小伙伴一起完成这个项目。
>
> 在 3 月 18 日（星期一）之前提交整个项目，你可以获得 1 个奖励积分。

在这个项目中，你将创建一个名为 Ants Vs. SomeBees (蚂蚁大战蜜蜂) 的 [塔防](https://secure.wikimedia.org/wikipedia/en/wiki/Tower_defense) 游戏。作为蚁后，你需要召集最勇敢的蚂蚁来守护你的家园。激怒蜜蜂，打败它们！如果不能有效阻止这些入侵的蜜蜂，你的蚁后就危险了！这个游戏的灵感来自 PopCap Games 的 [植物大战僵尸](https://www.ea.com/studios/popcap/plants-vs-zombies)。

本项目将运用面向对象编程的思想，相关知识可以参考 Composing Programs 的 [第 2.5 章](https://www.composingprograms.com/pages/25-object-oriented-programming.html)。本项目还涉及理解、扩展和测试大型程序。

## 下载入门文件

[ants.zip](/resource/cs61a/ants.zip) 存档包含多个文件，你需要修改的文件是 `ants.py`。

-   `ants.py`: 蚂蚁大战 SomeBees 的游戏逻辑
-   `ants_plans.py`: 每个难度级别的详细信息
-   `ucb.py`: CS 61A 的实用函数
-   `gui.py`: 图形用户界面 (GUI)，用于运行蚂蚁大战 SomeBees。
-   `ok`: 自动评分器
-   `proj3.ok`: `ok` 配置文件
-   `tests`: `ok` 使用的测试目录
-   `libs`: `gui.py` 使用的库目录
-   `static`: `gui.py` 使用的图像和文件目录
-   `templates`: `gui.py` 使用的 HTML 模板目录

## 说明

本项目总分 25 分，其中 23 分考察代码正确性，提前提交第一阶段和第二阶段分别可以获得 1 分。

在 3 月 18 日（星期一）之前提交整个项目，你可以获得 1 个 EC 积分。

你只需要提交 `ants.py` 这一个文件。

要提交项目，请在 Gradescope 上提交 `ants.py` 文件。

对于需要你完成的函数，我们可能会提供一些初始代码。你可以选择使用或者完全重写，也可以根据需要添加新的函数。

请不要修改 `ants.py` 之外的任何文件，也不要修改任何函数的定义（包括函数名、参数顺序和参数数量），否则你的代码可能无法通过自动评分器的测试。

在完成项目的过程中，请经常测试你的代码，这能帮助你快速定位问题。但也不要过于频繁地测试，留给自己充分的思考时间也很重要。

我们提供了一个名为 `ok` 的**自动评分器**来帮助你测试代码并记录你的进度。第一次使用时，你需要**通过浏览器登录你的 Ok 账号**。 每次运行 `ok`，你的代码都会自动备份到我们的服务器上。

`ok` 主要用于测试你代码的正确性。
如果您想以交互式地测试您的代码，可以运行

```
 python3 ok -q [问题编号] -i 
```

并填入对应的问题编号 (例如 `01`)。 这会运行该问题的测试，直到你遇到第一个失败的测试为止, 之后你可以交互式地测试你所编写的函数。

你也可以通过输入以下代码来使用OK的调试打印功能

```
 print("DEBUG:", x) 
```

这会在你的终端生成输出，而不会因为多余的输出导致OK测试失败。

## 游戏

蚂蚁大战蜜蜂是一个回合制游戏。每个回合，新的蜜蜂可能会入侵蚂蚁的领地。 接着，玩家放置新的蚂蚁来保卫家园。 最后，所有昆虫 (包括蚂蚁和蜜蜂) 都会执行各自的行动。蜜蜂要么试图向隧道的尽头移动，要么蛰伤阻挡其前进的蚂蚁。蚂蚁根据其类型执行不同的动作，例如收集更多食物或向蜜蜂扔树叶。当蜜蜂到达隧道尽头 (蚂蚁失败), 蜜蜂摧毁了 `QueenAnt` (如果存在), 蚂蚁就会失败，或者整个蜜蜂舰队被击溃（蚂蚁获胜）时，游戏结束。

![](/img/cs61a/screenshot.gif)

### 核心概念

**群落 (The Colony)**。这是游戏发生的地方。群落由几个 `Place` 组成，这些 `Place` 链接在一起形成蜜蜂穿行的隧道。群落中还有一定数量的食物，可以用来放置蚂蚁在隧道里。

**地点 (Places)**。每个地点都连接着另一个地点，从而形成隧道。玩家可以在每个地点放置一只蚂蚁。但是，一个地点可以有很多蜜蜂。

**蜂巢 (The Hive)**。这是蜜蜂起源的地方。蜜蜂离开蜂巢进入蚂蚁群。

**蚂蚁 (Ants)**。玩家可以通过在屏幕上方选择可用的蚂蚁类型，来将蚂蚁放置在群落中。每种蚂蚁都有不同的行动方式，并且需要消耗不同数量的食物才能被放置。两种最基本的蚂蚁类型是 `HarvesterAnt`，它在每个回合中为群落增加一种食物，还有`ThrowerAnt`，它会在每个回合向蜜蜂投掷叶子。 之后你还会实现更多种类的蚂蚁！

**蜜蜂 (Bees)**。每个回合，如果蜜蜂的路上没有蚂蚁，蜜蜂就会前进到隧道中的下一个地点，否则它会蛰伤阻挡其前进的蚂蚁。当至少有一只蜜蜂到达隧道尽头时，蜜蜂获胜。除了普通的橙色蜜蜂，还有能造成双倍伤害的黄色黄蜂，以及非常难对付的绿色Boss蜜蜂。

### 核心类

以上描述的每个概念都有一个对应的类来实现其逻辑。
-   **`GameState`**: 代表蚁群和关于游戏的一些状态信息，包括有多少食物可用，经过了多久，`AntHomeBase`在哪里，以及游戏中所有的`Place`。
-   **`Place`**: 代表一个可以容纳昆虫的地点。一个地点最多只能容纳一只`Ant`，但可以容纳多只`Bee`。`Place`对象有一个向左的`exit`和一个向右的`entrance`，它们也是地点。蜜蜂通过移动到当前`Place`的`exit`来在隧道中移动。
-   **`Hive`**: 代表`Bee`的起始位置（位于隧道的右侧）。
-   **`AntHomeBase`**: 代表`Ant`所防御的基地（位于隧道的左侧）。如果`Bee`到达这里，它们就赢了:(
-   **`Insect`**: `Ant`和`Bee`的基类。每种昆虫都有一个`health`属性，代表其剩余的生命值，以及一个`place`属性，代表其当前所在的`Place`。每回合，游戏中所有活跃的`Insect`都会执行其`action`。
-   **`Ant`**: 代表蚂蚁。每个`Ant`子类都有特殊的属性或特殊的`action`，使其有别于其他`Ant`类型。例如，`HarvesterAnt`为蚁群获取食物，而`ThrowerAnt`攻击`Bee`。每种蚂蚁类型还有一个`food_cost`属性，指示部署该类型的一只蚂蚁需要多少食物。
-   **`Bee`**: 代表蜜蜂。每回合，如果当前`Place`没有被`Ant`阻挡，蜜蜂会移动到其当前`Place`的`exit`，或者攻击占据同一`Place`的`Ant`。

**甲部分**：目前，放置任何类型的 `Ant` 都不需要消耗食物，因此游戏中没有任何挑战。基类 `Ant` 的 `food_cost` 为零。请根据下表中的“食物成本”列，重写 `HarvesterAnt` 和 `ThrowerAnt` 的这个类属性。
<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Harvester.gif"/><br/><code>HarvesterAnt</code></td><td>2</td><td>1</td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Thrower.gif"/><br/><code>ThrowerAnt</code></td><td>3</td><td>1</td></tr></tbody></table>

**乙部分**：既然放置 `Ant` 需要消耗食物了，我们需要能够收集更多的食物！为了解决这个问题，请实现 `HarvesterAnt` 类。`HarvesterAnt` 是一种 `Ant`，它会在每次 `action` 时向 `gamestate.food` 总量增加 1 个单位的食物。

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 01 -u
```

完成解锁后，开始实现您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 01
```

### 问题 2 (1 分)

在这个问题中，您将通过添加代码来完善 `Place.__init__`，使其能够追踪入口。目前，`Place` 类只追踪出口 (`exit`)。 为了完善这个类，您需要让它也追踪入口 (`entrance`)。每个 `Place` 只需要追踪一个入口。追踪入口的功能在 `Ant` 需要确定隧道前方有哪些 `Bee` 的时候会很有用。

但是，直接将入口传递给 `Place` 的构造函数可能会有问题。我们需要先同时拥有出口和入口才能创建 `Place`，这就像一个[先有鸡还是先有蛋](https://en.wikipedia.org/wiki/Chicken_or_the_egg)的问题。为了解决这个问题，我们将按照以下逻辑实现入口追踪：

-   新创建的 `Place` 对象的 `entrance` 属性初始值为 `None`。
-   如果 `Place` 对象存在 `exit`，那么该 `exit` 对象的 `entrance` 属性应该被设置为该 `Place` 对象。

> _提示：_ 请记住，在调用 `__init__` 方法时，第一个参数 `self` 会指向新创建的对象。

> _提示：_ 如果感到困惑，可以尝试将两个 `Place` 对象并排画出来。在 GUI 中，一个 place 的 `entrance` 在其右侧，而 `exit` 在其左侧。

> _提示：_ 请记住，`Place` 不存储在列表中，因此您**不能**像访问数组元素那样，使用 `colony[index + 1]` 来访问相邻的 `Place`。 那么，您应该_如何_从一个 `Place` 移动到另一个 `Place` 呢？

![](/img/cs61a/colony-drawing.png)

在编写任何代码之前，请解锁测试以验证您对问题的理解：

```
python3 ok -q 02 -u
```

完成解锁后，开始实现您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 02
```

### 问题 3 (2 分)

为了让 `ThrowerAnt` 投掷叶子，它需要知道攻击哪只蜜蜂。`ThrowerAnt` 类中 `nearest_bee` 方法的现有实现只允许 `ThrowerAnt` 攻击同一 `Place` 中的蜜蜂。您的任务是修改这个方法，使得 `ThrowerAnt` 可以 `throw_at` 位于其前方最近的、且**不在 `Hive` 中的**蜜蜂。 这也包括与 `ThrowerAnt` 位于同一 `Place` 的蜜蜂。
> _提示:_ 所有`Place`对象都有一个`is_hive`属性，当该地点是`Hive`时，该属性为`True`。

修改`nearest_bee`函数，使其从包含蜜蜂的最近的地点返回一个随机的`Bee`对象。你的代码实现应该遵循以下逻辑：

-   从 `ThrowerAnt` 的当前 `Place` 开始。
-   对于每个地点，如果有蜜蜂，则返回一个随机的蜜蜂对象；如果没有，则检查其入口（`entrance`属性）。
-   如果没有蜜蜂可以攻击，则返回 `None`。

> _提示_: `ants.py` 中提供的 `random_bee` 函数从蜜蜂列表中返回一个随机蜜蜂对象；如果列表为空，则返回 `None`。

> _提示_: 提醒一下，如果某个`Place`对象中没有蜜蜂，那么该对象的`bees`属性将是一个空列表。

> _提示_: 难以理解测试用例？尝试在纸上画出示意图！[游戏布局](#game-layout) 中提供的示例图展示了本题的第一个测试用例。

在编写任何代码之前，解锁测试以验证你对问题的理解：

```
python3 ok -q 03 -u
```

完成解锁后，开始实施你的解决方案。你可以使用以下命令检查你的正确性：

```
python3 ok -q 03
```

### 玩游戏

在实现了`nearest_bee`函数之后，`ThrowerAnt`应该能够`throw_at`不在`Hive`中的、它前面的`Bee`对象。

现在你可以尝试运行你编写的代码了。要启动图形游戏，请运行：

```
python3 gui.py
```

启动图形版本后，游戏（通常）可在 http://127.0.0.1:31415/ 上使用。

你可以通过运行`python3 gui.py --help`命令来查看该游戏的各项参数选项，这些选项将在整个项目开发过程中用到。

```
usage: gui.py [-h] [-d DIFFICULTY] [-w] [--food FOOD]

Play Ants vs. SomeBees

optional arguments:
  -h, --help     show this help message and exit
  -d DIFFICULTY  sets difficulty of game (test/easy/normal/hard/extra-hard)
  -w, --water    loads a full layout with water
  --food FOOD    number of food to start with when testing
```

你可以刷新网页以重新启动游戏，但如果你更改了代码，则需要终止 `gui.py` 并再次运行它。要终止 `gui.py`，你可以在终端上点击 `Ctrl + C`。

请勿同时打开多个 Ants GUI 页面，否则可能会导致程序出错。

### 提交你的第一阶段检查点

检查以确保你已完成第一阶段中的所有问题：

```
python3 ok --score
```

然后，在检查点截止日期之前，将 `ants.py` 提交到 **Gradescope** 上的 **Ants Checkpoint 1** 作业。

当你运行 `ok` 命令时，你仍然会看到某些测试被锁定，因为你尚未完成整个项目。如果你完成到目前为止的所有问题，你将获得检查点的全部学分。

恭喜！你已完成此项目的第一阶段！

## 第二阶段：更多蚂蚁！

> **若要获得满分：** 在 **3 月 12 日星期二** 之前提交完成的第二阶段（价值 1 分）。

现在你已经实现了两种基本蚂蚁的游戏机制，接下来让我们为蚂蚁攻击蜜蜂的方式增加一些趣味性。在这个问题及以后的问题中，你将实现几种具有不同攻击策略的不同 `Ant`。

**在这些部分中实现每个 `Ant` 子类之后，你需要将其 `implemented` 类属性设置为 `True`**，以便该类型的蚂蚁将显示在 GUI 中。 欢迎尝试使用新添加的蚂蚁进行游戏，以测试其功能！

从现在开始，对于所有后续的蚂蚁，尝试 `python3 gui.py` 以在多隧道布局中与完整的蜜蜂群对战，如果你想挑战更高的难度，可以尝试`-d hard`或`-d extra-hard`模式！如果蜜蜂数量过多难以战胜，不妨尝试创建一些新的蚂蚁类型。

### 问题 4 (2 分)

`ThrowerAnt` 是一种对蜜蜂的强大威胁，但其食物消耗量也较高。 在这个问题中，您将实现 `ThrowerAnt` 的两个子类，它们的成本较低，但对它们可以投掷的距离有限制：

-   `LongThrower` 只能攻击在经过至少 5 个 `entrance` 位置后发现的 `Bee`。 它无法攻击位于同一 `Place` 的 `Bee`，也无法攻击位于其前方 4 个 `Place` 之内的 `Bee`。 如果有两只 `Bee`，一只距离 `LongThrower` 过近，另一只在其攻击范围内，`LongThrower` 应该攻击较远的那只 `Bee`，因为它在攻击范围内，而不是攻击较近的 `Bee`。
-   `ShortThrower` 只能攻击在经过最多 3 个 `entrance` 位置后发现的 `Bee`。 它无法攻击距离超过 3 个 `Place` 的蜜蜂。

这两种特殊投掷者都无法攻击距离正好为 4 个 `Place` 的 `Bee`。

要实现这些新的投掷蚂蚁，您的 `ShortThrower` 和 `LongThrower` 类应该继承自基本 `ThrowerAnt` 类的 `nearest_bee` 方法。 选择攻击目标的逻辑相同，区别在于 `ShortThrower` 和 `LongThrower` 的攻击范围分别受到下限和上限的限制。

因此，需要修改 `nearest_bee` 方法，使其引用 `lower_bound` 和 `upper_bound` 属性，并且只返回位于攻击范围内的蜜蜂。

确保在 `ThrowerAnt` 类中为 `lower_bound` 和 `upper_bound` 属性设置合适的值，以保证 `ThrowerAnt` 的原有行为不受影响。 然后，实现具有适当约束范围的子类 `LongThrower` 和 `ShortThrower`。

您**不应该**在 `ThrowerAnt`、`ShortThrower` 和 `LongThrower` 之间重复任何代码。

> _提示：_ `float('inf')` 会返回一个用浮点数表示的正无穷值，可以与其他数值进行比较。

> _提示：_ `lower_bound` 和 `upper_bound` 应该定义一个闭区间范围。

> **重要：** 请确保您的类属性名称为 `upper_bound` 和 `lower_bound`。 测试会直接引用这些属性名，如果使用了其他名称，测试将会失败。

不要忘记将 `LongThrower` 和 `ShortThrower` 的 `implemented` 类属性设置为 `True`。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 04 -u
```

编写代码后，测试您的实现（重新运行 03 的测试以确保它们仍然有效）：

```
python3 ok -q 03
```

```
python3 ok -q 04
```

👩🏽‍💻👨🏿‍💻 [结对编程？](https://cs61a.org/articles/pair-programming) 记得轮换驾驶员和领航员的角色。驾驶员负责操作键盘，领航员负责观察、提问和提出建议。

### 问题 5 (3 分)

实现 `FireAnt`，这种蚂蚁在受到伤害时会反击。 具体来说，如果它受到 `amount` 点伤害，它会对同一位置的所有蜜蜂造成 `amount` 点伤害（这被称为_反弹伤害_）。 当它死亡时，还会造成额外的伤害，伤害数值由 `damage` 属性决定，该属性在 `FireAnt` 类中被定义，默认值为 `3`。

您需要重写 `reduce_health` 方法，并在重写的方法中调用从父类 (`Ant`) 继承的 `reduce_health` 方法（`Ant` 类又继承自 `Insect` 类），以减少当前 `FireAnt` 实例的生命值。 调用_继承的_ `reduce_health` 方法会使昆虫的 `health` 值减少 `amount`。如果 `health` 值降至零或更低，则该昆虫会从当前位置移除。

> _提示:_ 不要调用 `self.reduce_health`，否则你最终会陷入递归循环。（你能明白为什么吗？）

但是，你的方法还需要包含反射伤害的逻辑：

-   确定反射伤害量：首先从蚂蚁受到的 `amount` 开始计算，如果蚂蚁的生命值降至或低于 0，则再加上 `damage`。
-   对于该地点的每只蜜蜂，通过调用每只蜜蜂的相应 `reduce_health` 方法，用总伤害量对它们造成伤害。

> **重点：** 请记住，当任何 `Ant` 失去所有生命值时，它都会从其地点移除，因此请仔细注意 `reduce_health` 中逻辑的顺序。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Fire.gif"/><br/><code>FireAnt</code></td><td>5</td><td>3</td></tr></tbody></table>

> _提示:_ 伤害一只蜜蜂可能会导致它从它的地点移除。如果你迭代一个列表，但同时更改该列表的内容，你[可能无法访问所有元素](https://docs.python.org/3/tutorial/controlflow.html#for-statements)。这可以通过复制列表来防止。你可以使用列表切片，或者使用内置的 `list` 函数来确保我们不影响原始列表。

```
>>> s = [1,2,3,4]
>>> s[:]
[1, 2, 3, 4]
>>> list(s)
[1, 2, 3, 4]
>>> (s[:] is not s) and (list(s) is not s)
True
```

完成 `FireAnt` 的实现后，给它一个值为 `True` 的类属性 `implemented`。

> _注意:_ 即使你覆盖了超类的 `reduce_health` 函数 (`Ant.reduce_health`)，你仍然可以通过调用它在你的实现中使用此方法。

在编写任何代码之前，解锁测试以验证你对问题的理解：

```
python3 ok -q 05 -u
```

完成解锁后，开始实现你的解决方案。你可以使用以下命令检查你的正确性：

```
python3 ok -q 05
```

  

你也可以通过玩几局游戏来测试你的程序！ `FireAnt` 应该在被蜇时摧毁所有位于同一地点的 `Bee`。 要启动一个有十个食物的游戏（便于测试）：

```
python3 gui.py --food 10
```

### Problem 6 (1 pt)

我们将通过实现 `WallAnt` 来为我们光荣的基地增加一些保护，`WallAnt` 是一种每回合什么都不做的蚂蚁。 `WallAnt` 很有用，因为它具有很大的 `health` 值。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Wall.gif" /><br/><code>WallAnt</code></td><td>4</td><td>4</td></tr></tbody></table>

与之前的蚂蚁不同，这次我们没有提供类定义。 从头开始实现 `WallAnt` 类。 给它一个值为 `'Wall'` 的类属性 `name`（以便图形工作）和一个值为 `True` 的类属性 `implemented`（以便你可以在游戏中使用它）。

> _提示_: 确保你也实现了 `__init__` 方法，以便 `WallAnt` 拥有正确的初始生命值！

在编写任何代码之前，解锁测试以验证你对问题的理解：

```
python3 ok -q 06 -u
```

完成解锁后，开始实现你的解决方案。你可以使用以下命令检查你的正确性：

```
python3 ok -q 06
```

  

### Problem 7 (3 pt)
实现 `HungryAnt`，它会从所在位置 `place` 随机选择一只 `Bee`，对其造成相当于该 `Bee` 生命值的伤害，并将其吞噬。在吞噬一只 `Bee` 后，`HungryAnt` 必须花费 3 个回合进行咀嚼，然后才能再次进食。当 `HungryAnt` 正在咀嚼时，它无法进食任何 `Bee`。如果它的位置没有可供食用的蜜蜂，`HungryAnt` 将不会做任何事情。

我们没有提供类头。请从头开始实现 `HungryAnt` 类。为其添加类属性 `name`，赋值为 `'Hungry'` (用于图形显示)，以及类属性 `implemented`，赋值为 `True` (以便在游戏中使用)。

> _提示:_ 当一只 `Bee` 被吃掉时，其生命值应降为 0。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Hungry.gif" /><br/><code>HungryAnt</code></td><td>4</td><td>1</td></tr></tbody></table>

为 `HungryAnt` 添加一个 `chewing_turns` **类**属性，用于存储咀嚼所需的回合数（设置为 3）。此外，为每个 `HungryAnt` 添加一个 **实例** 属性 `turns_to_chew`，记录剩余咀嚼回合数，初始值为 0。`turns_to_chew` 也可以理解为 `HungryAnt` 再次进食前的剩余回合数。

实现 `HungryAnt` 的 `action` 方法：首先检查是否正在咀嚼；如果是，则减少 `turns_to_chew`。否则，将其所在位置 `place` 中的随机 `Bee` 的生命值降为 0，并吞噬它。务必在吞噬 `Bee` 后设置 `turns_to_chew`。

> _提示_：除了 `action` 方法，还要确保实现 `__init__` 方法，以便定义实例变量，并确保 `HungryAnt` 具有适当的初始生命值 `health`！

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 07 -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 07
```

👩🏽‍💻👨🏿‍💻 [结对编程？](https://cs61a.org/articles/pair-programming) 建议切换角色，以便双方都能从不同角色中获益。

### 问题 8：(3 分)

现在，我们的蚂蚁非常脆弱。我们想提供一种方法来帮助它们在蜜蜂的猛攻中存活更长时间。输入 `BodyguardAnt`。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img  style={{maxWidth: '80px'}} src="/img/cs61a/Bodyguard.gif" /><br/><code>BodyguardAnt</code></td><td>4</td><td>2</td></tr></tbody></table>

为了实现 `BodyguardAnt`，我们将把这个问题分解为 3 个子部分。在每个部分中，我们都将在 `ContainerAnt` 类、`Ant` 类或 `BodyguardAnt` 类中进行更改。

> _注意：_ 我们已将问题 8 分为三个不同的子部分。我们建议在为其编写任何代码之前，先完成每个子部分的解锁测试。您将通过每个子部分进行测试，并且每个子部分价值一分（整个问题总共三分）。

#### 问题 8a

`BodyguardAnt` 与普通蚂蚁的不同之处在于，它是一种 `ContainerAnt`，能够在一个 `Place` 中容纳并保护另一只蚂蚁。当 `Bee` 叮咬位于 `Place` 中的蚂蚁时，如果该位置存在容纳其他蚂蚁的容器蚂蚁，则只有容器蚂蚁会受到伤害。容器内的蚂蚁仍然可以执行其原有动作。如果容器死亡，被容纳的蚂蚁仍然留在该位置（并可能因此受到伤害）。

每个 `ContainerAnt` 都有一个实例属性 `ant_contained`，用于存储它所容纳的蚂蚁。`ant_contained` 最初的值为 `None`，表示尚未存储任何蚂蚁。实现 `store_ant` 方法，使其将传入的 `ant` 参数赋值给 `ContainerAnt` 的 `ant_contained` 实例属性。同时，实现 `ContainerAnt` 的 `action` 方法，以便在容器蚂蚁包含其他蚂蚁时，执行被包含蚂蚁的动作。

为了确保容器蚂蚁和被包含的蚂蚁能够同时占据一个位置（每个位置最多允许两只蚂蚁，且必须只有一只为容器蚂蚁），我们可以创建一个 `can_contain` 方法。

已经有一个 `Ant.can_contain` 方法，但它始终返回 `False`。重写 `ContainerAnt.can_contain` 方法，使其接受一个蚂蚁 `other` 作为参数，并在满足以下条件时返回 `True`：

- 此 `ContainerAnt` 尚未包含另一只蚂蚁。
- 另一只蚂蚁不是容器。

> _提示：_ 您可能会发现每个 `Ant` 都有的 `is_container` 属性对于检查特定 `Ant` 是否为容器很有用。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 08a -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 08a
```

#### 问题 8b

修改 `Ant.add_to` 以允许容器和非容器蚂蚁根据以下规则占据同一位置：

- 如果原位置的蚂蚁可以容纳新加入的蚂蚁，则两只蚂蚁共存，且原蚂蚁容纳新蚂蚁。
- 如果新加入的蚂蚁可以容纳原位置的蚂蚁，则两只蚂蚁共存，且新加入的（容器）蚂蚁容纳原蚂蚁。
- 如果两只蚂蚁都无法容纳对方，则抛出与之前相同的 `AssertionError` 异常（即初始代码中已有的异常）。
- **重要提示：** 如果一个 `Place` 中存在两只蚂蚁，则该 `Place` 实例的 `ant` 属性应指向容器蚂蚁，而容器蚂蚁则包含另一只蚂蚁。

> _提示：_ 您还应该利用您编写的 `can_contain` 方法，并避免重复代码。

> **注意：** 如果您通过 VSCode Pylance 扩展收到 `Ant.add_to` 的“无法访问的代码”警告，则可以忽略此特定警告，因为代码实际上已运行（_在这种情况下_ 警告不准确）。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 08b -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 08b
```

#### 问题 8c

添加一个 `BodyguardAnt.__init__`，用于设置蚂蚁的初始生命值。这里我们不需要创建 `action` 方法，因为 `BodyguardAnt` 类会从 `ContainerAnt` 类继承该方法。另请注意，`BodyguardAnt` 不会造成任何伤害。

完成 `BodyguardAnt` 的实现后，将其类属性 `implemented` 设置为 `True`。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 08c -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 08c
```

### 问题 9 (2 pt)
保镖蚂蚁提供了强大的防御，但正如俗话所说，最好的防御就是进攻。`TankAnt` 是一种容器蚂蚁，它不仅可以保护自己位置上的蚂蚁，还能在每个回合对该位置上的所有蜜蜂造成1点伤害。和所有容器蚂蚁一样，`TankAnt` 允许其包含的蚂蚁在每个回合执行它们的动作。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Tank.gif" /><br/><code>TankAnt</code></td><td>6</td><td>2</td></tr></tbody></table>

我们没有提供类头。请您自行实现 `TankAnt` 类。为其提供一个类属性 `name`，其值为 `'Tank'`（以便图形正常工作），并提供一个类属性 `implemented`，其值为 `True`（以便您可以在游戏中使用它）。

您应该不需要修改 `TankAnt` 类以外的任何代码。如果需要修改其他地方的代码，请尝试修改之前问题的代码，使其不仅适用于 `BodyguardAnt` 和 `TankAnt`，也适用于所有容器蚂蚁。

> 提示：您只需要重写 `TankAnt` 父类的 `__init__` 和 `action` 方法。

> 提示：和 `FireAnt` 类似，对蜜蜂造成伤害致死可能会导致它从当前位置移除。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 09 -u
```

解锁完成后，请开始实现您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 09
```

**提交您的第 2 阶段检查点**

检查以确保您已完成第 2 阶段中的所有问题：

```
python3 ok --score
```

然后，在检查点截止日期之前，将 `ants.py` 提交到 **Gradescope** 上的 **Ants Checkpoint 2** 作业。

当您运行 `ok` 命令时，您仍然会看到某些测试被锁定，因为您尚未完成整个项目。如果您完成到目前为止的所有问题，您将获得检查点的全部学分。

恭喜！您已完成此项目的第 2 阶段！

## 第 3 阶段：水与力量

在最后阶段，您将通过引入一种新型地点和能够占据该地点的新蚂蚁来为游戏添加最后一击。其中一只蚂蚁是所有蚂蚁中最重要的：蚁后！

### 问题 10 (1 分)

让我们给蚁穴添加一些水吧！目前只有两种类型的地点，`Hive` 和基本 `Place`。为了使事情更有趣，我们将创建一个名为 `Water` 的新型 `Place`。

为了确定 `Insect` 是否防水，请在 `Insect` 类中添加一个名为 `is_waterproof` 的类属性，并将其设置为 `False`。因为蜜蜂会飞，所以它们的 `is_waterproof` 属性应设为 `True`，覆盖继承的默认值。

现在，为 `Water` 实现 `add_insect` 方法。首先，无论昆虫是否防水，都将昆虫添加到该位置。然后，如果昆虫不防水，则将其健康值降低为 0。不要重复代码。而是使用已经定义的方法。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 10 -u
```

完成解锁后，开始实施您的解决方案。您可以使用以下命令检查您的正确性：

```
python3 ok -q 10
```

完成此问题后，不妨试试加了水的游戏！要访问包含水的 `wet_layout`，请在启动游戏时添加 `--water` 选项（或简写为 `-w`）。

```
python3 gui.py --water
```

👩🏽‍💻👨🏿‍💻 [结对编程？](https://cs61a.org/articles/pair-programming) 记得轮流担任驾驶员和领航员。驾驶员控制键盘，领航员负责观察、提问和提出建议。

### 第11题 (2 分)

目前还没有可以放置在 `Water` 上的蚂蚁。实现 `ScubaThrower`，它是 `ThrowerAnt` 的一个子类，这种蚂蚁造价更高，并且具有防水性，*除此之外，它和基类蚂蚁完全一样*。 `ScubaThrower` 不应在放置在 `Water` 中时失去生命值。

<table><tbody><tr><td><b>类</b></td><td><b>食物成本</b></td><td><b>初始生命值</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Scuba.gif" /><br/><code>ScubaThrower</code></td><td>6</td><td>1</td></tr></tbody></table>

我们没有为您提供类头。从头开始实现 `ScubaThrower` 类。为其提供一个类属性 `name`，其值为 `'Scuba'`（这样设置才能在图形界面中正常显示），并记住将类属性 `implemented` 设置为 `True`（以便您可以在游戏中使用它）。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 11 -u
```

完成解锁后，开始实现你的解决方案。您可以使用以下命令检查你的代码是否正确：

```
python3 ok -q 11
```

### 第12题 (2 分)

最后，实现 `QueenAnt`。女王是一个 `ThrowerAnt`，她通过自身的勇敢激励她的同伴蚂蚁。除了标准的 `ThrowerAnt` 动作外，`QueenAnt` 每次执行动作时都会使她身后的所有蚂蚁的伤害加倍。一旦蚂蚁的伤害加倍，*这个伤害值*就不能再次加倍了。

> 注意：`FireAnt` 的反射伤害不应加倍，只有当其生命值降至 0 时造成的额外伤害才应加倍。

<table><tbody><tr><td><b>类</b></td><td><b>食物成本</b></td><td><b>初始生命值</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Queen.gif" /><br/><code>QueenAnt</code></td><td>7</td><td>1</td></tr></tbody></table>

然而，强大的力量伴随着巨大的责任。如果女王的生命值降至 0，蚂蚁就会输。您将需要在 `QueenAnt` 中重写 `Insect.reduce_health` 方法，并在这种情况下调用 `ants_lose()`，通知模拟器游戏结束。 （如果任何蜜蜂到达隧道的尽头，蚂蚁仍然会输。）

> _提示：_ 为了使她身后的所有蚂蚁的伤害加倍，您可以填写 `Ant` 类中定义的 `double` 方法，然后从 `QueenAnt` 类中调用它。为了避免重复加倍蚂蚁的伤害，你需要用某种方法标记已经被加倍过的蚂蚁，确保这种标记在每次调用 `QueenAnt.action` 时都有效。

> _提示：_ 在使蚂蚁的伤害加倍时，请记住，一个 `Place` 中可能有多只蚂蚁，例如，如果一只蚂蚁正在守卫另一只蚂蚁。

> _提示：_ 请记住，`QueenAnt` 的 `reduce_health` 方法将调用 `ants_lose` 的额外任务添加到超类的 `reduce_health` 方法中。我们如何确保在不重复代码的情况下，仍然能够执行父类方法中的所有操作？

> _提示：_ 您可以通过从蚂蚁的 `place.exit` 开始，然后重复跟随其 `exit`，来找到 `QueenAnt` 身后隧道中的每个 `Place`。如果`Place`位于隧道尽头，它的`exit`属性是`None`。

在编写任何代码之前，解锁测试以验证您对问题的理解：

```
python3 ok -q 12 -u
```

完成解锁后，开始实现你的解决方案。您可以使用以下命令检查你的代码是否正确：

```
python3 ok -q 12
```

## 选做题
### 附加题 1

> 办公时间和项目辅导时段，助教将优先解答必做题。只有在[队列](https://oh.cs61a.org/)为空时，才会解答本题。

实现 `NinjaAnt`（忍者蚂蚁），它可以伤害所有经过的蜜蜂，且不会被蜇伤。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Ninja.gif" /><br/><code>NinjaAnt</code></td><td>5</td><td>1</td></tr></tbody></table>

`NinjaAnt` 不会阻碍蜜蜂的飞行路径。 要实现此特性，首先修改 `Ant` 类，添加类属性 `blocks_path` 并设为 `True`。然后在 `NinjaAnt` 类中，将其值覆盖为 `False`。

其次，修改 `Bee` 的 `blocked` 方法。如果 `Bee` 所在的 `place` 没有 `Ant`，或者有 `Ant` 但其 `blocks_path` 属性为 `False`，则返回 `False`。这样，蜜蜂就能直接飞过 `NinjaAnt`。

实现 `NinjaAnt` 的 `action` 方法，使其根据自身的 `damage` 属性，减少同一 `place` 中所有蜜蜂的生命值。与 `FireAnt` 类似，你需要遍历一个可能发生变化的蜜蜂列表。

> 提示：难以可视化测试用例？ 尝试在纸上绘制它们！ 请参阅[游戏布局](#game-layout)中的示例以获得帮助。

在编写任何代码之前，请解锁测试以验证你对问题的理解：

```
python3 ok -q optional1 -u
```

解锁完成后，开始编写你的解决方案。 你可以用以下命令检查代码是否正确：

```
python3 ok -q optional1
```

试试只用 `HarvesterAnt` 和 `NinjaAnt` 赢得游戏，挑战一下自己！

### 附加题 2

> 办公时间和项目辅导时段，助教将优先解答必做题。只有在[队列](https://oh.cs61a.org/)为空时，才会解答本题。

我们秘密开发这种蚂蚁很久了。 因为它太危险，我们不得不把它锁在CS61A的秘密地下金库里。现在，我们终于觉得它可以派上用场了。 在这个问题中，你要实现最后一种蚂蚁——`LaserAnt`（激光蚂蚁），它是 `ThrowerAnt` 的变种。

<table><tbody><tr><td><b>Class</b></td><td><b>Food Cost</b></td><td><b>Initial Health</b></td></tr><tr><td><img style={{maxWidth: '80px'}} src="/img/cs61a/Laser.gif" /><br/><code>LaserAnt</code></td><td>10</td><td>1</td></tr></tbody></table>

`LaserAnt` 会发射强力激光，伤害所有胆敢挡路者。 所有类型的蜜蜂和蚂蚁都有可能受到 `LaserAnt` 的伤害。 当 `LaserAnt` 行动时，它会伤害其所在 `place` 的所有 `Insect`（不包括自身，但包括其容器，如果存在），以及前方所有 `Place` 中的 `Insect`，但不包括 `Hive`（蜂巢）。
如果真是这样，`LaserAnt` 就太强了，我们没法限制它。`LaserAnt` 的基础伤害为 `2`。但是，`LaserAnt` 的激光有一些特性。激光每远离 `LaserAnt` 一个位置，威力就会减弱 `0.25`。此外，`LaserAnt` 的电池容量有限。每次 `LaserAnt` 实际对一个 `Insect` 造成伤害时，其激光的总伤害值就会减少 `0.0625` (1/16)。如果由于这些限制，`LaserAnt` 的伤害变为负数，则它只会造成 0 点伤害。

> 一个回合中，各个目标受到伤害的先后顺序是不确定的。

为了完成这种终极蚂蚁的实现，请通读 `LaserAnt` 类，适当地设置类属性，并实现以下两个函数：

1.  `insects_in_front` 是一个实例方法，由 `action` 方法调用，它返回一个字典，其中每个键是一个 `Insect`，每个对应的值是该 `Insect` 距离 `LaserAnt` 的距离（以位置为单位）。该字典应包含所有与 `LaserAnt` 位于同一位置或在其前方的 `Insect`，但不包括 `LaserAnt` 本身。
2.  `calculate_damage` 是一个实例方法，它接受 `distance`，即昆虫与 `LaserAnt` 实例的距离。它会根据以下因素计算 `LaserAnt` 实例造成的伤害值：
3.  与 `LaserAnt` 实例的距离 `distance`。
4.  此 `LaserAnt` 已经伤害的 `Insect` 数量，存储在 `insects_shot` 实例属性中。

除了实现上述方法之外，您可能还需要根据需要在 `LaserAnt` 类中修改、添加或使用类或实例属性。

> _注意：_ 此问题没有解锁测试。

您可以运行提供的测试，但它并不详尽：

```
python3 ok -q optional2
```

请务必测试你的代码！

## 项目提交

运行 `ok` 来检查所有题目，确保所有测试都已解锁并通过：

```
python3 ok
```

您还可以检查项目每个部分的得分：

```
python3 ok --score
```

满意后，通过将 `ants.py` 上传到 **Gradescope** 上的 **Ants** 作业来提交此作业。具体操作方法请参考 [Lab 00](https://cs61a.org/lab/lab00/#task-c-submitting-the_assignment)。

您可以通过单击提交内容右侧姓名下的 **+ 添加组成员**，将合作伙伴添加到您的 Gradescope 提交内容中。只需要一位合作者提交到 Gradescope。

你现在就完成了这个项目！ 如果您还没有，您应该尝试玩游戏！

```
python3 gui.py [-h] [-d DIFFICULTY] [-w] [--food FOOD]
```

**致谢：** Tom Magrino 和 Eric Tzeng 与 John DeNero 合作开发了这个项目。 Jessica Wan 贡献了原始艺术作品。 Joy Jeng 和 Mark Miyashita 发明了蚁后。 许多其他人也为该项目做出了贡献！

新的概念艺术作品由 Alana Tran、Andrew Huang、Emilee Chen、Jessie Salas、Jingyi Li、Katherine Xu、Meena Vempaty、Michelle Chang 和 Ryan Davis 绘制。
