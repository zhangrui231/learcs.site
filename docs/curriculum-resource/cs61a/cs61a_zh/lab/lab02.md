---
title: Lab 2 Higher-Order Functions, Lambda Expressions
---

# Lab 2: 高阶函数，Lambda 表达式

_截止日期：1月31日星期三晚上11:59分_

## 起始文件

下载 [lab02.zip](/resource/cs61a/lab/lab02.zip)。 在压缩包中，您将找到此实验中问题的起始文件，以及 [Ok](https://cs61a.org//lab/lab02/ok) 自动评分器的副本。

## 主题

如果你需要复习本实验的内容，可以参考本节。也可以直接跳到[问题](#required-questions)，遇到问题再回来查阅。

## 短路

你觉得在Python里输入下面这段代码会发生什么？

```
1 / 0
```

在 Python 中尝试一下！您应该会看到一个 `ZeroDivisionError`。但是这个表达式呢？

```
True or 1 / 0
```

这是因为Python的`and`和`or`运算符具有_短路_特性，所以结果是`True`。也就是说，它们并非总是会计算所有的操作数。

| 运算符 | 检查是否： | 从左到右计算到： | 示例 |
| --- | --- | --- | --- |
| AND | 所有值都为真 | 第一个假值 | `False and 1 / 0` 的计算结果为 `False` |
| OR | 至少一个值为真 | 第一个真值 | `True or 1 / 0` 的计算结果为 `True` |

当运算符遇到一个操作数，通过这个操作数已经可以确定整个表达式的结果时，就会发生短路。例如，`and` 一旦到达第一个假值就会短路，因为它知道并非所有值都为真。

另一种理解方式是，`and`和`or`总是返回它们所计算的最后一个值，无论是否发生了短路。请记住，当使用 `True` 和 `False` 以外的值时，`and` 和 `or` 并不总是返回布尔值。

## 高阶函数

变量是名字到值的绑定，这些值可以是像`3`或者`'Hello World'`这样的基本数据类型，也可以是函数。因为函数可以接受任何类型的参数，所以也可以把函数作为参数传递给另一个函数。这是高阶函数的基础。

高阶函数是指那些能够接受函数作为参数，或者能够返回一个函数的函数，或者同时具有这两种特性的函数。我们将在本次实验中介绍高阶函数的基本概念，并在下一次实验中探索高阶函数的各种应用。

### 函数作为参数

在 Python 中，函数对象是可以传递的值。我们知道创建函数的一种方法是使用 `def` 语句：

```
def square(x):
    return x * x
```

上面的语句创建了一个函数对象，它的名字是`square`，并且将这个函数对象绑定到了当前环境中的名字`square`。现在让我们尝试将其作为参数传递。

首先，让我们编写一个接受另一个函数作为参数的函数：

```
def scale(f, x, k):
    """ 返回将f(x)的结果乘以k之后的值。 """
    return k * f(x)
```

我们现在可以对 `square` 和其他一些参数调用 `scale`：

```
>>> scale(square, 3, 2) # Double square(3)
18
>>> scale(square, 2, 5) # 5 times 2 squared
20
```

注意，在`scale`函数体内部，函数对象`square`被绑定到了参数`f`。然后，在`scale`函数体内部，我们通过调用`f(x)`来调用`square`函数。

正如我们在上面关于 `lambda` 表达式的部分中看到的，我们也可以将 `lambda` 表达式传递到调用表达式中！

```
>>> scale(lambda x: x + 10, 5, 2)
30
```

在这个函数调用所创建的帧中，名字`f`被绑定到了由lambda表达式`lambda x: x + 10`所创建的函数。

### 返回函数的函数

因为函数是值，所以它们作为返回值是有效的！这是一个例子：

```
def multiply_by(m):
    def multiply(n):
        return n * m
    return multiply
```

在这种特殊情况下，我们在 `multiply_by` 的主体中定义了函数 `multiply`，然后返回了它。 让我们来看一下实际的例子：
```
>>> multiply_by(3)
<function multiply_by.<locals>.multiply at ...>
>>> multiply(4)
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
NameError: name 'multiply' is not defined
```

正如预期，调用 `multiply_by` 后会返回一个函数。然而，即使我们将内部函数命名为 `multiply`，直接调用它仍然会报错。这是因为名称 `multiply` 仅存在于我们评估 `multiply_by` 主体的*作用域 (frame)* 中。

那么，我们该如何使用这个内部函数呢？这里提供两种方法：

```
>>> times_three = multiply_by(3) # 将调用表达式的结果赋值给变量
>>> times_three(5) # 使用其新名称调用内部函数
15
>>> multiply_by(3)(10) # 将两个调用表达式串联起来
30
```

总之，因为 `multiply_by` 返回的是一个函数，你可以像使用其他函数一样使用它的返回值。

## Lambda 表达式

Lambda 表达式是一种定义函数的方式，它通过指定两个要素：参数和返回表达式。

```
lambda <参数>: <返回表达式>
```

虽然 `lambda` 表达式和 `def` 语句都创建函数对象，但它们之间存在一些显着差异。`lambda` 表达式的工作方式与其他表达式类似；就像数学表达式求值得到一个数字而不改变当前环境一样，`lambda` 表达式求值得到一个函数，同样不改变当前环境。让我们仔细看看。

|  | lambda | def |
| --- | --- | --- |
| 类型 | 值为值的_表达式 (expression)_ | 改变环境的_语句 (statement)_ |
| 执行结果 | 创建一个没有名称的匿名 lambda 函数。 | 创建一个具有内在名称的函数，并将其绑定到当前环境中的该名称。 |
| 对环境的影响 | 评估 `lambda` 表达式_不会_创建或修改变量。 | 执行 `def` 语句既创建了一个新的函数对象，_又_将其绑定到当前环境中的一个名称。 |
| 用法 | `lambda` 表达式可以在任何需要表达式的地方使用，例如赋值语句、调用表达式的操作符或操作数。 | 执行 `def` 语句后，创建的函数将绑定到一个名称。你应该在任何需要表达式的地方使用这个名称来引用该函数。 |
| 示例 | 
```
# lambda 表达式本身不会改变
# 环境
lambda x: x * x
# 我们可以使用赋值语句将 lambda 函数赋值给一个变量
square = lambda x: x * x
square(3)

# Lambda 表达式可以用作操作符
# 或操作数
negate = lambda f, x: -f(x)
negate(lambda x: x * x, 3)
```

 | 
```
def square(x):
    return x * x

# 由 def 语句创建的函数
# 可以通过其内在名称引用
square(3)
```

 |

[视频链接](https://youtu.be/vCeNq_P3akI?list=PLx38hZJ5RLZcUPWZ1-3HYsRPgZ8OCrvqz)

## 环境图

环境图是理解 `lambda` 表达式和高阶函数的最佳工具之一，因为它可以帮助你跟踪所有名称、函数对象和函数参数。我们强烈建议绘制环境图或使用 [Python tutor](https://tutor.cs61a.org/)，如果你在解决下面的 WWPD 题目时遇到困难。有关环境图应如何显示的示例，请尝试在 Python tutor 中运行一些代码。以下是规则：

### 赋值语句

1.  评估 `=` 符号右侧的表达式。
2.  如果 `=` 左侧找到的名称在当前帧中尚不存在，请将其写入。如果存在，请擦除当前绑定。将步骤 1 中获得的值绑定到此名称。

如果语句中有多个名称/表达式，请先从左到右评估所有表达式，然后再进行任何绑定。

### def 语句

1.  绘制函数对象，包括其内在名称、形式参数和父帧。函数的父帧是定义该函数的帧。
2.  如果函数的内在名称在当前帧中尚不存在，请将其写入。如果存在，请擦除当前绑定。将新创建的函数对象绑定到此名称。

### 调用表达式

> 注意：对于 Python 内置函数，例如 `max` 或 `print`，则不需要执行此过程。

1. 计算运算符，其结果应该是一个函数。
2. 从左到右计算操作数。
3. 创建一个新框架。用递增的帧编号、函数的固有名称以及父框架标记该框架。
4. 将函数的形参绑定到步骤2中计算出的实参值。
5. 在新环境中执行函数体。

### Lambda 表达式

> 请注意：正如我们在前面关于 `lambda` 表达式的章节中看到的，`lambda` 函数没有名称。在环境图中绘制 `lambda` 函数时，它们用 λ 符号标记。当环境图中出现多个 lambda 函数时，为了区分它们，可以对它们编号，或者标明它们定义所在的行号。

1. 绘制 lambda 函数对象，用 λ 符号、形参列表和父框架来标记它。父框架是指该函数定义时所在的框架。

这是唯一需要做的步骤。我们在此强调 `lambda` 表达式与 `def` 语句的区别在于，`lambda` 表达式_不会_在当前环境中创建新的绑定关系。

[YouTube 链接](https://youtu.be/IPec2A7j2bY?list=PLx38hZJ5RLZcUPWZ1-3HYsRPgZ8OCrvqz)

## 必做题目

## 新手入门视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 要观看这些视频，您应该登录您的 berkeley.edu 电子邮件。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZeufgodzb9XzDT_9Sr-L4sJ)

## Python 会输出什么？

> **注意：** 对于所有“Python 会输出什么？”的问题，如果答案是 `<function...>`，请键入 `Function`；如果出现错误，请键入 `Error`；如果没有显示任何内容，请键入 `Nothing`。

### Q1：WWPD：真值判断

> 使用 Ok 通过以下“Python 会输出什么？”问题来测试您的知识：
>
> ```
> python3 ok -q short-circuit -u
> ```

```
>>> True and 13
______13
>>> False or 0
______0
>>> not 10
______False
>>> not None
______True
```

```
>>> True and 1 / 0
______Error (ZeroDivisionError)
>>> True or 1 / 0
______True
>>> -1 and 1 > 0
______True
>>> -1 or 5
______-1
>>> (1 + 1) and 1
______1
>>> print(3) or ""
______3
''
```

```
>>> def f(x):
...     if x == 0:
...         return "zero"
...     elif x > 0:
...         return "positive"
...     else:
...         return ""
>>> 0 or f(1)
______'positive'
>>> f(0) or f(-1)
______'zero'
>>> f(0) and f(-1)
______''
```

### Q2：WWPD：高阶函数

> 使用 Ok 通过以下“Python 会输出什么？”问题来测试您的知识：
>
> ```
> python3 ok -q hof-wwpd -u
> ```

```
>>> def cake():
...    print('beets')
...    def pie():
...        print('sweets')
...        return 'cake'
...    return pie
>>> chocolate = cake()
______beets
>>> chocolate
______Function
>>> chocolate()
______sweets
'cake'
>>> more_chocolate, more_cake = chocolate(), cake
______sweets
>>> more_chocolate
______'cake'
>>> def snake(x, y):
...    if cake == more_cake:
...        return chocolate
...    else:
...        return x + y
>>> snake(10, 20)
______Function
>>> snake(10, 20)()
______30
>>> cake = 'cake'
>>> snake(10, 20)
______30
```

### Q3：WWPD：Lambda

> 使用 Ok 通过以下“Python 会输出什么？”问题来测试您的知识：
>
> ```
> python3 ok -q lambda -u
> ```
>
> 作为提醒，以下两行代码在执行时不会在交互式 Python 解释器中显示任何输出：
>
> ```
> >>> x = None
> >>> x
> >>>
> ```


```
>>> lambda x: x  # A lambda expression with one parameter x
______<function <lambda> at ...>
>>> a = lambda x: x  # Assigning the lambda function to the name a
>>> a(5)
______5
>>> (lambda: 3)()  # Using a lambda expression as an operator in a call exp.
______3
>>> b = lambda x, y: lambda: x + y  # Lambdas can return other lambdas!
>>> c = b(8, 4)
>>> c
______<function <lambda> at ...
>>> c()
______12
>>> d = lambda f: f(4)  # They can have functions as arguments as well.
>>> def square(x):
...     return x * x
>>> d(square)
______16
```

```
>>> higher_order_lambda = lambda f: lambda x: f(x)
>>> g = lambda x: x * x
>>> higher_order_lambda(2)(g)  # Which argument belongs to which function call?
______Error
>>> higher_order_lambda(g)(2)
______4
>>> call_thrice = lambda f: lambda x: f(f(f(x)))
>>> call_thrice(lambda y: y + 1)(0)
______3
>>> print_lambda = lambda z: print(z)  # When is the return expression of a lambda expression executed?
>>> print_lambda
______Function
>>> one_thousand = print_lambda(1000)
______1000
>>> one_thousand # What did the call to print_lambda return?
______# print_lambda 返回了 None，所以没有输出
```

## 编码实践

### Q4：复合恒等函数

编写一个函数，该函数接受两个单参数函数 `f` 和 `g`，并返回另一个**函数**，该函数具有一个参数 `x`。该函数在 `f(g(x))` 等于 `g(f(x))` 时返回 True。您可以假设 `g(x)` 的结果是 `f` 的有效输入，反之亦然。

```
def composite_identity(f, g):
    """
    返回一个带有一个参数 x 的函数，该函数在 f(g(x)) 等于 g(f(x)) 时返回 True。您可以假设 g(x)` 的结果是 `f` 的有效输入，反之亦然。

    >>> add_one = lambda x: x + 1        # 将 x 加一
    >>> square = lambda x: x**2          # 对 x 求平方 [返回 x^2]
    >>> b1 = composite_identity(square, add_one)
    >>> b1(0)                            # (0 + 1) ** 2 == 0 ** 2 + 1
    True
    >>> b1(4)                            # (4 + 1) ** 2 != 4 ** 2 + 1
    False
    """
    "*** 你的代码写在这里 ***"

```

使用 Ok 测试你的代码：

```
python3 ok -q composite_identity
```

### Q5：Count Cond

考虑以下 `count_fives` 和 `count_primes` 的实现，它们使用了之前作业中的 `sum_digits` 和 `is_prime` 函数：

```
def count_fives(n):
    """返回从 1 到 n（包括 n）的整数 i 中，使得 sum_digits(n * i) 等于 5 的 i 的个数。
    >>> count_fives(10)  # 在 10、20、30、...、100 中，只有 50 (10 * 5) 的数字之和为 5
    1
    >>> count_fives(50)  # 50 (50 * 1), 500 (50 * 10), 1400 (50 * 28), 2300 (50 * 46)
    4
    """
    i = 1
    count = 0
    while i <= n:
        if sum_digits(n * i) == 5:
            count += 1
        i += 1
    return count

def count_primes(n):
    """返回小于等于 n 的素数的个数。
    >>> count_primes(6)   # 2, 3, 5
    3
    >>> count_primes(13)  # 2, 3, 5, 7, 11, 13
    6
    """
    i = 1
    count = 0
    while i <= n:
        if is_prime(i):
            count += 1
        i += 1
    return count
```
这些实现非常相似！为了概括这种逻辑，可以编写一个函数 `count_cond`，它接受一个双参数的谓词函数 `condition(n, i)`。`count_cond` 会返回另一个单参数函数，该函数接受参数 `n`，并计算从 1 到 `n` 之间所有满足 `condition` 函数的数值个数。

> **注意：** 此处的 `condition` 是一个谓词函数，即返回 `True` 或 `False` 的函数。

```
def sum_digits(y):
    """Return the sum of the digits of non-negative integer y."""
    total = 0
    while y > 0:
        total, y = total + y % 10, y // 10
    return total

def is_prime(n):
    """Return whether positive integer n is prime."""
    if n == 1:
        return False
    k = 2
    while k < n:
        if n % k == 0:
            return False
        k += 1
    return True

def count_cond(condition):
    """Returns a function with one parameter N that counts all the numbers from
    1 to N that satisfy the two-argument predicate function Condition, where
    the first argument for Condition is N and the second argument is the
    number from 1 to N.

    >>> count_fives = count_cond(lambda n, i: sum_digits(n * i) == 5)
    >>> count_fives(10)   # 50 (10 * 5)
    1
    >>> count_fives(50)   # 50 (50 * 1), 500 (50 * 10), 1400 (50 * 28), 2300 (50 * 46)
    4

    >>> is_i_prime = lambda n, i: is_prime(i) # need to pass 2-argument function into count_cond
    >>> count_primes = count_cond(is_i_prime)
    >>> count_primes(2)    # 2
    1
    >>> count_primes(3)    # 2, 3
    2
    >>> count_primes(4)    # 2, 3
    2
    >>> count_primes(5)    # 2, 3, 5
    3
    >>> count_primes(20)   # 2, 3, 5, 7, 11, 13, 17, 19
    8
    """
    "*** YOUR CODE HERE ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q count_cond
```

## 在本地查看你的分数

你可以通过运行以下命令，在本地查看你在本次作业中每个问题的得分情况：

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，请将你编辑过的文件上传**到 Gradescope 上对应的作业**以完成提交。

## 提交

请将你编辑过的文件上传**到 Gradescope 上对应的作业**以完成提交。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型实验课的学生都必须填写此[出勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了它。参加大型实验课的学生无需填写出勤表。

## 环境图练习

**此组件没有 Gradescope 提交。**

但是，我们仍然鼓励你在纸上完成此问题，以培养对环境图的熟悉程度，环境图可能会以另一种形式出现在考试中。要检查你的工作，你可以尝试将代码放入 PythonTutor 中。

### Q6：HOF 图练习

在纸上或白板上绘制执行以下代码产生的环境图。使用 [tutor.cs61a.org](https://tutor.cs61a.org/) 检查你的工作。

```
n = 7

def f(x):
    n = 8
    return x + 1

def g(x):
    n = 9
    def h():
        return x + 1
    return h

def f(f, x):
    return f(x + n)

f = f(g, n)
g = (lambda y: y())(f)
```

## 可选问题

> 这些问题是可选的。如果你没有完成它们，你仍然会收到实验课的学分。它们是很棒的练习，所以还是做做看吧！

### Q7：倍数

编写一个函数，该函数接受两个数字并返回作为两者倍数的最小数字。

```
def multiple(a, b):
    """Return the smallest number n that is a multiple of both a and b.
```
>>> multiple(3, 4)
    12
    >>> multiple(14, 21)
    42
    """
    "*** 请在此处填写你的代码 ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q multiple
```

### Q8：函数套函数...

定义一个函数 `cycle`，它接受三个函数 `f1`、`f2` 和 `f3` 作为参数。`cycle` 将返回另一个函数 `g`，该函数 `g` 接受一个整数参数 `n`，并返回另一个函数 `h`。最终函数 `h` 接受参数 `x`，它会根据 `n` 的值，循环地将 `f1`、`f2` 和 `f3` 应用于 `x`。以下是最终函数 `h` 应该对 `x` 执行的操作，针对 `n` 的几个值：

-   `n = 0`，返回 `x`
-   `n = 1`，将 `f1` 作用于 `x`，或返回 `f1(x)`
-   `n = 2`，先将 `f1` 作用于 `x`，再将 `f2` 作用于结果，或返回 `f2(f1(x))`
-   `n = 3`，将 `f1` 作用于 `x`，将 `f2` 作用于应用 `f1` 的结果，然后将 `f3` 作用于应用 `f2` 的结果，或 `f3(f2(f1(x)))`
-   `n = 4`，再次开始循环，应用 `f1`，然后 `f2`，然后 `f3`，然后再次 `f1`，或 `f1(f3(f2(f1(x))))`
-   等等。

_提示_：关键在于最内层的函数。

```
def cycle(f1, f2, f3):
    """返回一个本身是高阶函数的函数。

    >>> def add1(x):
    ...     return x + 1
    >>> def times2(x):
    ...     return x * 2
    >>> def add3(x):
    ...     return x + 3
    >>> my_cycle = cycle(add1, times2, add3)
    >>> identity = my_cycle(0)
    >>> identity(5)
    5
    >>> add_one_then_double = my_cycle(2)
    >>> add_one_then_double(1)
    4
    >>> do_all_functions = my_cycle(3)
    >>> do_all_functions(2)
    9
    >>> do_more_than_a_cycle = my_cycle(4)
    >>> do_more_than_a_cycle(2)
    10
    >>> do_two_cycles = my_cycle(6)
    >>> do_two_cycles(1)
    19
    """
    "*** 请在此处填写你的代码 ***"

```

使用 Ok 来测试你的代码：

```
python3 ok -q cycle
```
