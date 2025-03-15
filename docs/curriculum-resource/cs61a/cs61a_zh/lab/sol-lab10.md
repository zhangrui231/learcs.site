---
title: Lab 10 Solutions
---

# CS 61A 2024春季 Lab 10 实验解答

## Lab 10 实验解答

-   [lab10.zip](/resource/cs61a/lab10.zip)

## 解答文件

## 主题

如果你需要复习本次实验的内容，请参考本节。你可以直接跳到[问题](#required-questions)，如果遇到困难再回头查阅。

## 解释器

解释器是一种程序，它允许你使用特定的编程语言与计算机交互。它接收你编写的代码并进行解释，然后执行相应的操作，通常会使用更底层的语言与计算机硬件进行通信。

在Project 4中，你将使用Python开发Scheme编程语言的解释器。有趣的是，你在本课程中一直使用的Python解释器，其主要部分是用C编程语言编写的。在最底层，计算机通过解释机器代码来运行，机器代码是由一系列1和0组成的指令，用于指示计算机执行诸如算术运算和数据检索等基本任务。

当我们讨论解释器时，通常涉及两种语言：

1.  **被解释的编程语言：** 对于Project 4，这是Scheme语言。
2.  **实现所用的编程语言：** 这是用于创建解释器本身的语言，对于Project 4，将是Python。

**REPL**

解释器的一个常见特性是读取-求值-输出循环（REPL），它通过三个阶段以循环方式处理用户输入：

-   **读取：** 解释器首先读取用户提供的输入字符串。此输入经过一个解析过程，该过程涉及两个关键步骤：

    -   _词法分析_步骤将输入字符串分解为词法单元（token），词法单元是你正在解释的语言的基本组成元素，可以理解为“单词”。这些词法单元代表输入中最小的语义单位。
    -   _语法分析_步骤获取上一步产生的词法单元（token），并将它们组织成底层语言能够理解的数据结构。对于我们的Scheme解释器，我们会将这些词法单元组装成一个`Pair`对象（类似于`Link`），以此来表示原始调用表达式的结构。

        -   `Pair`中的第一个元素表示调用表达式的运算符，而后续的元素是操作数或参数，运算符会对这些操作数进行运算。请注意，这些操作数也可以是调用表达式本身（即嵌套表达式）。

下面是Scheme表达式输入的读取过程的摘要：

![](/img/cs61a/parser.png)

-   **求值：** 此步骤会对你用该编程语言编写的表达式进行求值，以得到一个结果。它主要涉及以下两个函数：

    -   `eval`接收一个表达式，并根据该编程语言的规则对其进行求值。如果该表达式是一个调用表达式，`eval`会使用`apply`函数来得到最终结果。它会按照顺序对运算符及其操作数进行求值。例如，在`(add 1 2)`这个表达式中，`eval`会将`add`识别为运算符，`1`和`2`识别为操作数。它会对`add`进行求值，以确保其为一个有效的函数；然后，它会对`1`和`2`进行求值，以确保它们是有效的参数。
    -   `apply`接收已经求值完毕的运算符（函数），并将其应用到已经求值完毕的操作数（参数）上。需要注意的是，在这个过程中，`apply`可能需要对更多的表达式进行求值（例如在函数体内部的表达式）。因此，`apply`可能会回调`eval`函数，这两个阶段是_相互递归的_。
-   **打印：** 显示对用户输入求值后得到的结果。

以下是所有部分如何组合在一起的：

![](/img/cs61a/repl.png)

## 必做题

## 入门指导视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 要观看这些视频，你需要登录你的berkeley.edu邮箱。

[YouTube链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdwIF0I28zXMYAvd-BQ2nWY)

## 计算器程序

解释器是一种可以执行其他程序的程序。今天，我们将扩展Calculator计算器程序的解释器。Calculator是一种简单的、专门设计的编程语言，是Scheme语言的一个子集。本次实验可以看作是Project 4的一个简化版本。

Calculator语言仅包括四个基本算术运算：`+`，`-`，`*`和`/`。这些操作可以嵌套，并且可以采用各种数量的参数，就像在Scheme中一样。下面展示了一些计算器表达式及其对应结果的示例。

```
 calc> (+ 2 2 2)
 6

 calc> (- 5)
 -5
```
```
calc> (* (+ 1 2) (+ 2 3 4))
 27
```

计算器表达式在 Python 中以对象的形式表示：

- 数字使用 Python 数字表示。
- 算术运算的符号使用 Python 字符串表示（例如 `'+'`）。
- 调用表达式使用下面的 `Pair` 类表示。

## Pair 类

为了在 Python 中表示 Scheme 列表，我们将使用 `Pair` 类（在本实验和 Scheme 项目中）。`Pair` 实例有两个属性：`first` 和 `rest`。`Pair` 实例化时总是需要两个参数。要创建一个列表，嵌套调用 `Pair` 并在最后一对的第二个参数中传入 `nil`。

- 是否觉得很熟悉？`Pair` 与我们用来表示链表的类 `Link` 非常相似。它们的 `str` 表示形式不同：打印 `Pair` 实例会使用 Scheme 语法显示列表。

> **注意** 在 Python 代码中，`nil` 绑定到一个用户定义的对象，该对象表示一个空的 Scheme 列表。类似地，在 Scheme 中，`nil` 代表一个空列表。

例如，一旦我们的解释器读入 Scheme 表达式 `(+ 2 3)`，它就被表示为 `Pair('+', Pair(2, Pair(3, nil)))`。

```
>>> p = Pair('+', Pair(2, Pair(3, nil)))
>>> p.first
'+'
>>> p.rest
Pair(2, Pair(3, nil))
>>> p.rest.first
2
>>> print(p)
(+ 2 3)
```

`Pair` 类有一个 `map` 方法，它接受一个单参数 Python 函数 `fn`。它返回将 `fn` 应用于 Scheme 列表的每个元素后所生成的新 Scheme 列表。

```
>>> p.rest.map(lambda x: 2 * x)
Pair(4, Pair(6, nil))
```

  

下面是 `Pair` 类和 `nil` 对象（未显示 `__str__` 和 `__repr__` 方法）。

```
class Pair:
    """Represents the built-in pair data structure in Scheme."""
    def __init__(self, first, rest):
        self.first = first
        self.rest = rest

    def map(self, fn):
        """Return a Scheme list after mapping Python function FN to SELF."""
        mapped = fn(self.first)
        if self.rest is nil or isinstance(self.rest, Pair):
            return Pair(mapped, self.rest.map(fn))
        else:
            raise TypeError('ill-formed list')
```

```
class nil:
    """The empty list"""

    def map(self, fn):
        return self

nil = nil() # Assignment hides the nil class; there is only one instance
```

  

### Q1: 使用 Pair

回答以下关于表示计算器表达式 `(+ (- 2 4) 6 8)` 的 `Pair` 实例的问题。

使用 Ok 来测试你的理解：

```
python3 ok -q using_pair -u
```

  

## 计算器表达式求值

对于问题 2（新过程）和问题 4（保存值），你需要更新下面的 `calc_eval` 函数，该函数用于求值计算器表达式。对于问题 2，你将确定 Scheme 调用表达式中 `operator` 和 `operands` 的含义，以及如何在 `calc_apply` 行中将过程应用于参数。对于问题 4，你将学习如何查找先前定义的符号的值。

```
def calc_eval(exp):
    """
    >>> calc_eval(Pair("define", Pair("a", Pair(1, nil))))
    'a'
    >>> calc_eval("a")
    1
    >>> calc_eval(Pair("+", Pair(1, Pair(2, nil))))
    3
    """
    if isinstance(exp, Pair):
        operator = exp.first        operands = exp.rest        if operator == 'and': # and expressions
            return eval_and(operands)
        elif operator == 'define': # define expressions
            return eval_define(operands)
        else: # Call expressions
return calc_apply(calc_eval(operator), operands.map(calc_eval))    elif exp in OPERATORS:   # Looking up procedures
        return OPERATORS[exp]
    elif isinstance(exp, int) or isinstance(exp, bool):   # Numbers and booleans
        return exp
elif exp in bindings:   # Looking up variables        return bindings[exp]
```

### Q2: 新过程
```为计算器添加 `//` 运算，它执行整除操作。`(// dividend divisor)` 将返回 `dividend` 除以 `divisor` 的整数部分，相当于 Python 中的 `dividend // divisor`。对于多个输入，其运算方式如下例所示：`(// dividend divisor1 divisor2 divisor3)` 的计算结果等同于 Python 代码 `(((dividend // divisor1) // divisor2) // divisor3)` 的结果。假设每次调用 `//` 至少有两个参数。

> _提示：_ 你需要修改 `calc_eval` 和 `floor_div` 方法来解决这个问题！

```
calc> (// 1 1)
1
calc> (// 5 2)
2
calc> (// 28 (+ 1 1) 1)
14
```

> _提示：_ 请确保 `Pair` 中的每个元素（包括运算符和所有操作数）都会经过 `calc_eval` 的计算，这样才能保证 Python 运算符正确地应用到操作数上。`Pair` 类的 `map` 方法在这里可能会很有帮助。

```
def floor_div(args):
    """
    >>> floor_div(Pair(100, Pair(10, nil)))
    10
    >>> floor_div(Pair(5, Pair(3, nil)))
    1
    >>> floor_div(Pair(1, Pair(1, nil)))
    1
    >>> floor_div(Pair(5, Pair(2, nil)))
    2
    >>> floor_div(Pair(23, Pair(2, Pair(5, nil))))
    2
    >>> calc_eval(Pair("//", Pair(4, Pair(2, nil))))
    2
    >>> calc_eval(Pair("//", Pair(100, Pair(2, Pair(2, Pair(2, Pair(2, Pair(2, nil))))))))
    3
    >>> calc_eval(Pair("//", Pair(100, Pair(Pair("+", Pair(2, Pair(3, nil))), nil))))
    20
    """
    result = args.first
    divisors = args.rest
    while divisors != nil:
        divisor = divisors.first
        result //= divisor
        divisors = divisors.rest
    return result
```

使用 Ok 来测试你的代码：

```
python3 ok -q floor_div
```

### Q3: 实现 and 表达式

本题将在计算器解释器中加入 `and` 表达式，并引入 Scheme 的布尔值 `#t` 和 `#f`，它们在 Python 中分别对应 `True` 和 `False`。（以下示例假设已经实现了条件运算符，如 `<`、`>`、`=` 等，但本题无需关注这些运算符。）

```
calc> (and (= 1 1) 3)
3
calc> (and (+ 1 0) (< 1 0) (/ 1 0))
#f
calc> (and #f (+ 1 0))
#f
calc> (and 0 1 (+ 5 1)) ; 0 在 Scheme 中是一个真值！
6
```

对于调用表达式，我们通常先计算运算符，再计算操作数，最后将运算符应用到操作数上（就像上一题的 `floor_div` 一样）。但是，`and` 是一种特殊形式，它会在遇到第一个假值参数时短路，因此不能直接套用计算调用表达式的方法。我们需要为这种并非总是计算所有子表达式的情况添加特殊处理逻辑。

> **重要提示**：要检查某个 `val` 在 Scheme 中是否为假值，请使用 `val is scheme_f` 而不是 `val == scheme_f`。

```
scheme_t = True   # Scheme 中的 #t
scheme_f = False  # Scheme 中的 #f

def eval_and(expressions):
    """
    >>> calc_eval(Pair("and", Pair(1, nil)))
    1
    >>> calc_eval(Pair("and", Pair(False, Pair("1", nil))))
    False
    >>> calc_eval(Pair("and", Pair(1, Pair(Pair("//", Pair(5, Pair(2, nil))), nil))))
    2
    >>> calc_eval(Pair("and", Pair(Pair('+', Pair(1, Pair(1, nil))), Pair(3, nil))))
    3
    >>> calc_eval(Pair("and", Pair(Pair('-', Pair(1, Pair(0, nil))), Pair(Pair('/', Pair(5, Pair(2, nil))), nil))))
    2.5
    >>> calc_eval(Pair("and", Pair(0, Pair(1, nil))))
    1
    >>> calc_eval(Pair("and", nil))
    True
    """
    curr, val = expressions, True
    while curr is not nil:
        val = calc_eval(curr.first)
        if val is scheme_f:
            return scheme_f
        curr = curr.rest
    return val
```

使用 Ok 测试你的代码：

```
python3 ok -q eval_and
```

### Q4: 保存值

实现一个 `define` 特殊形式，将值绑定到符号。这应该像 Scheme 中的 `define` 一样工作：`(define <symbol> <expression>)` 首先计算 `expression`，然后将 `symbol` 绑定到它的值。整个 `define` 表达式的计算结果为 `symbol`。

```
calc> (define a 1)
a
calc> a
1
```

这是一个更复杂的变化。以下是涉及的 4 个步骤：

1.  添加一个 `bindings` 字典，用于存储符号和对应的值（已为您完成）。
2.  确定何时将 define 形式提供给 `calc_eval`（已为您完成）。
3.  允许在 `calc_eval` 中查找绑定到值的符号。
4.  编写 `eval_define` 函数，该函数应将符号和值添加到 bindings 字典。

```
bindings = {}

def eval_define(expressions):
    """
    >>> eval_define(Pair("a", Pair(1, nil)))
    'a'
    >>> eval_define(Pair("b", Pair(3, nil)))
    'b'
    >>> eval_define(Pair("c", Pair("a", nil)))
    'c'
    >>> calc_eval("c")
    1
    >>> calc_eval(Pair("define", Pair("d", Pair("//", nil))))
    'd'
    >>> calc_eval(Pair("d", Pair(4, Pair(2, nil))))
    2
    """
    symbol, value = expressions.first, calc_eval(expressions.rest.first)
    bindings[symbol] = value
    return symbol
```

使用 Ok 测试你的代码：

```
python3 ok -q eval_define
```

## 在本地查看你的分数

你可以通过运行以下命令在本地查看你在此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，请将你编辑过的文件**上传至 Gradescope 对应的作业**以提交。

## 提交

[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生必须填写此[考勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了实验课。大型实验课的学生**无需**填写考勤表。
```