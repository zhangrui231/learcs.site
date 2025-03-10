---
sidebar_position: 4
description: lecture6 python Lab | 实验
title: Lab
---

# Lab 6: 世界杯 - CS50x 2023

编写一个程序来模拟 FIFA 世界杯。

```
$ python tournament.py 2018m.csv
比利时: 20.9% 的胜率
巴西: 20.3% 的胜率
葡萄牙: 14.5% 的胜率
西班牙: 13.6% 的胜率
瑞士: 10.5% 的胜率
阿根廷: 6.5% 的胜率
英格兰: 3.7% 的胜率
法国: 3.3% 的胜率
丹麦: 2.2% 的胜率
克罗地亚: 2.0% 的胜率
哥伦比亚: 1.8% 的胜率
瑞典: 0.5% 的胜率
乌拉圭: 0.1% 的胜率
墨西哥: 0.1% 的胜率

```

## 背景

世界杯足球赛的淘汰赛阶段由 16 支球队组成。每一轮，两支球队捉对厮杀，败者淘汰。胜者即为冠军。

在足球运动中，球队拥有 [FIFA 排名](https://en.wikipedia.org/wiki/FIFA_World_Rankings#Current_calculation_method)，这些排名是代表每支球队相对技能水平的数值。较高的 FIFA 排名表明之前比赛结果更好，根据两支球队的 FIFA 排名，可以估算出各自的胜率。[2018 年 5 月男子 FIFA 排名](https://www.fifa.com/fifa-world-ranking/ranking-table/men/rank/id12189/) 和 [2019 年 3 月女子 FIFA 排名](https://www.fifa.com/fifa-world-ranking/ranking-table/women/rank/ranking_20190329/) 提供了之前两届世界杯的 FIFA 排名。

有了这些信息，我们可以通过不断模拟比赛，直到决出冠军。如果想评估某支球队夺冠的可能性，可以进行多次模拟（例如 1000 次），统计每支球队的夺冠次数。1000 次模拟似乎很多，但凭借当今的计算能力，我们可以在几毫秒内完成这些模拟。在本次实验中，我们将探讨在考虑运行时间的情况下，增加模拟次数的价值。

你的任务是使用 Python 实现这个模拟！

## 开始

打开 [VS Code](https://cs50.dev/)。

首先，点击终端窗口，然后执行 `cd` 命令。你应该会看到类似下面的提示符。

点击该终端窗口，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/6/world-cup.zip

```

然后按回车键，下载名为 `world-cup.zip` 的压缩包到你的 codespace。请注意 `wget` 命令和 URL 之间的空格，以及其他任何字符的正确性！

现在执行

来创建一个名为 `world-cup` 的文件夹。下载完成后，你可以执行

在提示符后输入 `y` 并按回车键，删除下载的压缩包。

现在输入

然后按回车键进入该目录。你的提示符现在应该类似于下面。

如果一切顺利，你应该执行

你应该看到以下文件：

```
answers.txt  2018m.csv  2019w.csv  tournament.py

```

如果遇到问题，请重复以上步骤，检查是否有遗漏或错误！

## 理解
首先，查看 `2018m.csv` 文件。此文件包含 2018 年男子世界杯淘汰赛中的 16 支球队以及每支球队的评分。注意，CSV文件包含两列，分别是`team`（代表球队名称）和`rating`（代表球队的评分）。

球队的排列顺序决定了每轮比赛的对阵情况 (例如，在第一轮比赛中，乌拉圭将对阵葡萄牙，法国将对阵阿根廷；在下一轮比赛中，乌拉圭-葡萄牙比赛的胜者将对阵法国-阿根廷比赛的胜者)。所以，千万不要修改这个文件中球队的排列顺序！

最后，在Python中，我们可以用一个包含两个值的字典来表示每支球队：球队名称和评分。例如，乌拉圭在 Python 中可以表示为 `{"team": "Uruguay", "rating": 976}`。

接下来，看看`2019w.csv`，它包含了2019年女子世界杯的类似数据。

现在，打开 `tournament.py`，你会发现我们已经预先写好了一些代码。顶部的变量`N`代表世界杯模拟的运行次数，这里设置为1000次。

`simulate_game` 函数接受两支球队作为输入（记住，每支球队都是一个包含球队名称和评分的字典），并模拟它们之间的一场比赛。如果第一支球队获胜，该函数返回 `True`；否则，该函数返回 `False`。

`simulate_round` 函数接受一个球队列表（在一个名为 `teams` 的变量中）作为输入，并模拟每对球队之间的比赛。然后，该函数返回一个包含所有赢得该轮比赛的球队的列表。

在 `main` 函数中，请注意我们首先确保 `len(sys.argv)`（命令行参数的数量）为 2。我们将使用命令行参数来告诉 Python 使用哪个球队 CSV 文件来运行锦标赛模拟。然后，我们定义了一个名为 `teams` 的列表（最终将是一个球队列表）和一个名为 `counts` 的字典（它将球队名称与该球队赢得模拟锦标赛的次数相关联）。现在它们都是空的，剩下的就靠你了！

最后，在 `main` 的末尾，根据`counts`中记录的模拟比赛获胜次数，对球队进行降序排列，并打印每支球队赢得世界杯的估计概率。

填充 `teams` 和 `counts` 以及编写 `simulate_tournament` 函数的任务就交给你了！

## 实现细节

完成 `tournament.py` 的实现，使其模拟多次锦标赛并输出每支球队的获胜概率。

首先，在 `main` 中，从 CSV 文件中读取球队数据到程序的内存中，并将每支球队添加到列表 `teams` 中。

-   要使用的文件名会通过命令行参数传入，你可以用`sys.argv[1]`来获取。
-   记住，你可以使用`open(filename)`来打开文件，这里的`filename`是文件名变量。
-   拿到文件对象`f`后，你可以使用`csv.DictReader(f)`创建一个读取器，它可以逐行读取CSV文件，并将每行数据解析为一个字典。
-   注意，从文件中读取的值默认是字符串类型，所以需要先把球队的`rating`用`int()`函数转换成整数。
-   最后，使用`teams.append(x)`将每支球队的字典添加到`teams`列表中。
-   记住，每支球队都应该是一个包含 `team` 名称和 `rating` 的字典。

接下来，实现 `simulate_tournament` 函数。这个函数接收一个队伍列表作为输入，并重复模拟比赛，直到只剩下一支队伍。然后，返回这支队伍的名称。

-   你可以调用 `simulate_round` 函数来模拟单轮比赛。这个函数接收一个队伍列表作为输入，并返回所有获胜队伍的列表。
-   记住，如果 `x` 是一个列表，你可以使用 `len(x)` 来获取列表的长度。
-   你不应该假设比赛队伍的数量，但可以假设队伍数量是2的幂。

最后，回到 `main` 函数中，运行 `N` 次比赛模拟，并记录每个队伍在 `counts` 字典中的获胜次数。

-   举例来说，如果乌拉圭赢了 2 次，葡萄牙赢了 3 次，那么你的 `counts` 字典应该会是 `{"Uruguay": 2, "Portugal": 3}`。
-   你应该使用 `simulate_tournament` 函数来模拟每场比赛，并确定获胜队伍。
-   记住，如果 `counts` 是一个字典，那么 `counts[team_name] = x` 这样的语法会将 `team_name` 这个键对应的值设为 `x`。
-   你可以使用 Python 的 `in` 关键字来检查字典是否已经包含某个键。例如，`if "Portugal" in counts:` 会检查 `counts` 字典里是否已经有 `"Portugal"` 这个键。

### 演示

### 提示

-   在读取文件时，你可能会发现以下语法很有用，其中 `filename` 是你的文件名，`file` 是一个变量。

    ```
      with open(filename) as file:
          reader = csv.DictReader(file)

    ```

-   在 Python 中，要附加到列表的末尾，请使用 `.append()` 函数。

不知道怎么做？

### 测试

你的程序应按照以下示例运行。由于模拟具有各自的随机性，因此你的输出可能与以下示例并不完全匹配。

```
$ python tournament.py 2018m.csv
Belgium: 20.9% chance of winning
Brazil: 20.3% chance of winning
Portugal: 14.5% chance of winning
Spain: 13.6% chance of winning
Switzerland: 10.5% chance of winning
Argentina: 6.5% chance of winning
England: 3.7% chance of winning
France: 3.3% chance of winning
Denmark: 2.2% chance of winning
Croatia: 2.0% chance of winning
Colombia: 1.8% chance of winning
Sweden: 0.5% chance of winning
Uruguay: 0.1% chance of winning
Mexico: 0.1% chance of winning

```

```
$ python tournament.py 2019w.csv
Germany: 17.1% chance of winning
United States: 14.8% chance of winning
England: 14.0% chance of winning
France: 9.2% chance of winning
Canada: 8.5% chance of winning
Japan: 7.1% chance of winning
Australia: 6.8% chance of winning
Netherlands: 5.4% chance of winning
Sweden: 3.9% chance of winning
Italy: 3.0% chance of winning
Norway: 2.9% chance of winning
Brazil: 2.9% chance of winning
Spain: 2.2% chance of winning
China PR: 2.1% chance of winning
Nigeria: 0.1% chance of winning

```
-   你可能*好奇*2018年和2019年世界杯的实际结果是什么！男子组是法国队夺冠，决赛击败了克罗地亚队。比利时队战胜英格兰队，获得第三名。女子组则是美国队夺冠，决赛击败荷兰队。英格兰队击败瑞典队，名列第三。

## 模拟次数

确认代码无误后，我们来调整文件顶部的常量 `N`，以改变模拟运行的次数。增加模拟次数能提高预测的准确性（原因是什么呢？），但同时也会增加运行时间。

我们可以使用 `time` 命令来测量程序的运行时间。例如，将 `N` 设置为 1000（默认值），执行

```
time python tournament.py 2018m.csv

```

或者

```
time python tournament.py 2019w.csv

```

应该输出类似以下内容：

```
real    0m0.037s
user    0m0.028s
sys     0m0.008s

```

虽然你自己的时间可能会有所不同。

注意 **real** 指标，它表示 `tournament.py` 运行的*实际*总时间。请注意，给出的时间单位是分钟和秒，精确到千分之一秒。

在 `answers.txt` 中，记录 `tournament.py` 模拟以下次数所花费的时间：

-   10 (十) 次
-   100 (一百) 次
-   1000 (一千) 次
-   10000 (一万) 次
-   100000 (十万) 次
-   1000000 (一百万) 次

每次调整 `N` 时，使用相同的 `0m0.000s` 格式，将 **real** 时间记录在 `answers.txt` 中相应的 TODO 中。在对每种情况进行计时后，通过覆盖给定的 TODO 来回答以下两个后续问题：

-   当你增加模拟次数时，哪些预测（如果有）被证明是不正确的？
-   假设程序运行时间按秒收费，你认为模拟多少次后，预测结果就“足够好”了？

查看格式正确的 `answers.txt`

```
Times:

10 simulations: 0m0.028s
100 simulations: 0m0.030s
1000 simulations: 0m0.041s
10000 simulations: 0m0.139s
100000 simulations: 0m1.031s
1000000 simulations: 0m11.961s

Questions:

Which predictions, if any, proved incorrect as you increased the number of simulations?:

在少量模拟次数下...

Suppose you're charged a fee for each second of compute time your program uses.
After how many simulations would you call the predictions "good enough"?:

看起来大约在...次模拟后，预测结果趋于稳定。

```

## 如何测试你的代码

执行以下命令，使用 `check50` 评估你的代码的正确性。但请务必自己编译并测试它！

```
check50 cs50/labs/2023/x/worldcup

```

执行以下命令，使用 `style50` 评估你的代码的风格。

## 如何提交

在你的终端中，执行以下命令来提交你的工作。

```
submit50 cs50/labs/2023/x/worldcup

```