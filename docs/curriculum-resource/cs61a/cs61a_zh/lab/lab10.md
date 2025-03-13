---
title: Lab 10 Interpreters
---

# Lab 10: 解释器 | CS 61A 2024年春季学期

## Lab 10: 解释器

-   [lab10.zip](/resource/cs61a/lab/lab10.zip)

_截止日期：4月10日周三晚上11:59_

## 入门文件

下载 [lab10.zip](/resource/cs61a/lab/lab10.zip)。在压缩包中，你将找到本次实验的起始文件，以及 [Ok](https://cs61a.org//lab/lab10/ok) 自动评分器的副本。

## 主题

如果你需要复习本次实验的内容，请参考本节。你可以直接跳到[问题](#required-questions)部分，遇到问题再回来查阅。

  

解释器是一个程序，允许你使用特定的语言与计算机交互。它接受你编写的代码，解释它，然后执行相应的操作，通常使用更基础的语言与计算机硬件通信。

在 Project 4 中，你将使用 Python 开发 Scheme 编程语言的解释器。有趣的是，这门课里你一直使用的 Python 解释器，其主要部分是用 C 语言编写的。从最底层来看，计算机通过解释机器码来运作。机器码由一系列 1 和 0 组成，指示计算机执行诸如算术运算和数据检索等基本任务。

提到解释器，通常涉及两种语言：

1.  **被解释的语言：** 对于 Project 4，这是 Scheme 语言。
2.  **实现语言：** 用于创建解释器本身的语言。在 Project 4 中，我们将使用 Python。

**REPL**

解释器的一个常见特性是读取-求值-打印循环 (REPL)，它通过三个阶段循环处理用户输入：

-   **读取：** 解释器首先读取用户提供的输入字符串。输入会经过一个解析过程，包含两个关键步骤：
    
    -   _词法分析_ 步骤将输入字符串分解成词法单元（tokens），它们是你所解释的语言的基本元素，可以看作是“单词”。这些词法单元代表输入中最小的语义单位。
    -   _语法分析_ 步骤则获取上一步产生的词法单元，并将它们组织成底层语言能够理解的数据结构。对于我们的 Scheme 解释器，我们将词法单元组装成一个 `Pair` 对象（类似于 `Link`），以表示原始调用表达式的结构。
        
        -   `Pair`中的第一个元素代表调用表达式的操作符，后续元素则是操作数或参数，操作符将作用于这些操作数或参数。注意，这些操作数本身也可以是调用表达式（即嵌套表达式）。
            

以下是 Scheme 表达式输入的读取过程的摘要：

![](/img/cs61a/parser.png)

-   **求值：** 这一步会评估你用该编程语言编写的表达式，从而得到一个值。它涉及以下两个函数：
    
    -   `eval` 接受一个表达式并根据该语言的规则对其求值。当表达式是调用表达式时，`eval` 使用 `apply` 函数来获得结果。它会按顺序评估操作符及其操作数。例如，在 `(add 1 2)` 中，`eval` 会将 `add` 识别为操作符，将 `1` 和 `2` 识别为操作数。它会评估 `add` 以确保它是一个有效的函数，然后评估 `1` 和 `2` 以确保它们是有效的参数。
    -   `apply` 接受已评估的操作符（函数）并将其应用于已评估的操作数（参数）。请注意，在此过程中，`apply` 可能需要评估更多表达式（例如函数体中找到的表达式）。这就是 `apply` 可能回调 `eval` 的地方，因此这两个阶段是_相互递归的_。
-   **打印：** 显示评估用户输入的结果。

下图展示了各个部分是如何组合在一起的：

![](/img/cs61a/repl.png)

## 必做题

## 入门视频

这些视频或许能为解决本次作业中的编程问题提供一些帮助。

> 要观看这些视频，你应该登录你的 berkeley.edu 电子邮件。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZdwIF0I28zXMYAvd-BQ2nWY)

## 计算器

解释器是执行程序的程序。今天，我们将扩展 Calculator 的解释器，Calculator 是一种简单的虚构语言，是 Scheme 的一个子集。本次实验相当于 Project 4 的一个简化版本。
计算器语言只包含四种基本算术运算：`+`、`-`、`*` 和 `/`。 这些运算和Scheme里一样，可以嵌套使用，参数数量也不限。 以下是一些计算器表达式及其对应值的例子。

```
 calc> (+ 2 2 2)
 6

 calc> (- 5)
 -5

 calc> (* (+ 1 2) (+ 2 3 4))
 27
```

计算器表达式用Python对象来表示:

-   数字使用 Python 数字表示。
-   算术运算的符号用 Python 字符串表示（例如 `'+'`）。
-   调用表达式用下面的 `Pair` 类来表示。

## Pair 类

为了用Python表示Scheme列表，我们将使用`Pair`类（本实验和Scheme项目都一样）。 `Pair` 实例有两个属性，分别是`first`和`rest`。 `Pair` 总是需要两个参数。 要创建一个列表，需要嵌套调用`Pair`，并且最后一个`Pair`的第二个参数要传入`nil`。

-   看起来很熟悉吗？`Pair` 与我们用来表示链表的类 `Link` 非常相似。 它们的`str`表示形式不同：打印`Pair`实例时，会使用Scheme语法来显示列表。

> **注意** 在Python代码中，`nil` 被绑定到一个用户自定义的对象，这个对象代表一个空的Scheme列表。 类似地，在Scheme中，`nil` 的值是一个空列表。

例如，当我们的解释器读取Scheme表达式 `(+ 2 3)` 时，它会被表示成 `Pair('+', Pair(2, Pair(3, nil)))`。

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

`Pair` 类有一个 `map` 方法，这个方法接受一个单参数的python函数`fn`。 它会返回一个新的Scheme列表，这个列表的每个元素都是将`fn`应用到原Scheme列表对应元素的结果。

```
>>> p.rest.map(lambda x: 2 * x)
Pair(4, Pair(6, nil))
```

  

这是 `Pair` 类和 `nil` 对象（未显示 `__str__` 和 `__repr__` 方法）。

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

  

## 计算器求值

对于问题2（新过程）和问题4（保存值），你需要修改下面的`calc_eval`函数，这个函数用来计算计算器表达式。 对于问题2，你需要确定Scheme中调用表达式的`operator`和`operands`分别是什么，以及如何在`calc_apply`这行代码中将过程应用到参数上。 对于问题4，你需要确定如何查找之前定义的符号所对应的值。
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
        operator = ____________ # UPDATE THIS FOR Q2
        operands = ____________ # UPDATE THIS FOR Q2
        if operator == 'and': # and expressions
            return eval_and(operands)
        elif operator == 'define': # define expressions
            return eval_define(operands)
        else: # Call expressions
            return calc_apply(___________, ___________) # UPDATE THIS FOR Q2
    elif exp in OPERATORS:   # Looking up procedures
        return OPERATORS[exp]
    elif isinstance(exp, int) or isinstance(exp, bool):   # Numbers and booleans
        return exp
    elif _________________: # CHANGE THIS CONDITION FOR Q4
        return _________________ # UPDATE THIS FOR Q4

```

### Q2: 新过程

向计算器添加 `//` 操作，这是一个向下取整除法过程，`(// dividend divisor)` 会返回 `dividend` 除以 `divisor` 的整数部分（相当于 Python 中的 `dividend // divisor`）。它可以处理多个输入，例如 `(// dividend divisor1 divisor2 divisor3)` 相当于 Python 中的 `(((dividend // divisor1) // divisor2) // divisor3)`。假设每次调用 `//` 至少需要两个参数。

> _提示：_ 你需要修改 `calc_eval` 和 `floor_div` 函数来实现这个功能！

```
calc> (// 1 1)
1
calc> (// 5 2)
2
calc> (// 28 (+ 1 1) 1)
14
```

> _提示：_ 确保 `Pair` 中的每个元素（运算符和所有操作数）都会被 `calc_eval` 函数求值一次，这样才能正确地将相应的 Python 运算符应用到操作数上！你可能会发现 `Pair` 类的 `map` 方法对解决这个问题很有帮助。

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
    "*** YOUR CODE HERE ***"

```

使用 Ok 测试你的代码。

### Q3: 新语法

在我们的计算器解释器中加入 `and` 表达式，并引入 Scheme 布尔值 `#t` 和 `#f`，它们分别对应 Python 中的 `True` 和 `False`。（以下示例假设已经实现了条件运算符，例如 `<`、`>`、`=` 等，但你不需要在本题中考虑它们。）

```
calc> (and (= 1 1) 3)
3
calc> (and (+ 1 0) (< 1 0) (/ 1 0))
#f
calc> (and #f (+ 1 0))
#f
calc> (and 0 1 (+ 5 1)) ; 0 is a true value in Scheme!
6
```

在调用表达式中，我们首先计算运算符，然后计算操作数，最后将过程应用于其参数（就像你在上一个问题中对 `floor_div` 所做的那样）。但是，由于 `and` 是一种特殊语法，它会在遇到第一个假值参数时短路，因此我们不能像计算普通函数调用那样计算 `and` 表达式。我们需要为不总是计算所有子表达式的语法添加特殊逻辑。

> **重要提示**：要判断某个 `val` 在 Scheme 中是否为假值，应该使用 `val is scheme_f`，而不是 `val == scheme_f`。

```
scheme_t = True   # Scheme's #t
scheme_f = False  # Scheme's #f
``````
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
    "*** YOUR CODE HERE ***"

```

使用 Ok 测试你的代码:

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

这是一个更复杂的变化，包含以下 4 个步骤：

1.  添加一个 `bindings` 字典，用于存储符号和对应的值（已为您完成）。
2.  确定何时将 `define` 形式传递给 `calc_eval`（已为您完成）。
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
    "*** YOUR CODE HERE ***"

```

使用 Ok 测试你的代码:

```
python3 ok -q eval_define
```

## 在本地检查你的分数

你可以运行以下命令在本地检查此作业的分数

```
python3 ok --score
```

**这不会提交作业！** 当你对分数满意时，将作业提交到 Gradescope 以获得学分。

## 提交

提交作业时，请将你编辑过的文件上传到 Gradescope 中对应的作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有不在大型实验课的学生都需要填写此[出勤表](https://go.cs61a.org/lab-att)。无论你是否参加实验课，或者因故缺席，每周都需要提交此表格。大型实验课的学生无需填写出勤表。
