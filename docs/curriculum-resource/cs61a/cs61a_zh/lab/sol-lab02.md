---
title: Lab 2 Solutions
---

# CS 61A 2024春 Lab 2 解答

## Lab 2 答案

-   [lab02.zip](/resource/cs61a/lab02.zip)

## 解答文件

## 主题

如果需要复习相关知识，请参考本节。你也可以直接跳到[问题](#required-questions)部分，遇到问题再回来查阅。

## 短路

你觉得在 Python 里输入下面这段代码会发生什么？

```
1 / 0
```

在 Python 里试试看！应该会看到 `ZeroDivisionError` 错误。那这个表达式呢？

```
True or 1 / 0
```

结果是 `True`，因为 Python 的 `and` 和 `or` 运算符会_短路_。也就是说，它们不一定会计算所有操作数。

| 运算符 | 检查条件： | 计算顺序（从左到右，直到）： | 示例 |
| --- | --- | --- | --- |
| AND | 所有值都为真 | 第一个假值 | `False and 1 / 0` 结果是 `False` |
| OR | 至少一个值为真 | 第一个真值 | `True or 1 / 0` 结果是 `True` |

当运算符遇到能确定表达式结果的操作数时，就会发生短路。例如，`and` 运算符遇到第一个假值时就会短路，因为它知道并非所有值都为真。

如果 `and` 和 `or` 不_短路_，它们会返回最后一个计算的值。另一种记忆方式是：`and` 和 `or` 总是返回它们计算的最后一个值，无论是否发生短路。注意，当操作数不是 `True` 或 `False` 时，`and` 和 `or` 不一定返回布尔值。

## 高阶函数

变量是绑定到值的名称。这些值可以是基本类型，比如 `3` 或者 `'Hello World'`，也可以是函数。因为函数可以接受任何类型的参数，所以也可以将其他函数作为参数传入。这就是高阶函数的基础。

高阶函数是指那些可以接受函数作为参数、或者返回函数、或者两者都具备的函数。它们可以用来操作其他函数。我们将在本次实验中介绍高阶函数的基本概念，并在下一次实验中探索其应用。

### 函数作为参数

在 Python 中，函数对象是可以传递的值。我们知道创建函数的一种方法是使用 `def` 语句：

```
def square(x):
    return x * x
```

上面的语句创建了一个函数对象，它的名字是 `square`，并且将它绑定到当前环境中的 `square` 这个名称上。现在我们尝试把它作为参数传递。

首先，让我们编写一个接受另一个函数作为参数的函数：

```
def scale(f, x, k):
    """ 返回 `f(x)` 乘以 `k` 的结果。 """
    return k * f(x)
```

我们现在可以对 `square` 和其他一些参数调用 `scale`：

```
>>> scale(square, 3, 2) # Double square(3)
18
>>> scale(square, 2, 5) # 5 times 2 squared
20
```

注意，在 `scale` 函数体中，函数对象 `square` 被绑定到参数 `f`。然后，我们通过调用 `f(x)` 来调用 `square` 函数。

正如我们在上面关于 `lambda` 表达式的部分中看到的，我们也可以将 `lambda` 表达式传递到函数调用中！

```
>>> scale(lambda x: x + 10, 5, 2)
30
```

在这个函数调用的帧里，名称 `f` 被绑定到 `lambda` 表达式 `lambda x: x + 10` 所创建的函数。

### 返回函数的函数

因为函数是值，所以它们可以作为返回值！这是一个例子：

```
def multiply_by(m):
    def multiply(n):
        return n * m
    return multiply
```
在这种特殊情况下，我们在 `multiply_by` 函数体内部定义了函数 `multiply`，然后将其返回。让我们来看一下实际效果：

```
>>> multiply_by(3)
<function multiply_by.<locals>.multiply at ...>
>>> multiply(4)
Traceback (most recent call last):
File "<stdin>", line 1, in <module>
NameError: name 'multiply' is not defined
```

正如预期，调用 `multiply_by` 会返回一个函数。但是，调用 `multiply` 会出错，即使这是我们给内部函数起的名字。这是因为 `multiply` 这个名称只存在于执行 `multiply_by` 函数体时的帧中。

那么，我们如何才能真正使用这个内部函数呢？这里有两种方法：

```
>>> times_three = multiply_by(3) # 将调用表达式的结果赋值给一个变量
>>> times_three(5) # 用新的变量名调用内部函数
15
>>> multiply_by(3)(10) # 连续调用两个函数
30
```

关键在于 `multiply_by` 返回一个函数，因此你可以像使用其他函数一样使用它的返回值。

## Lambda 表达式

Lambda 表达式是通过指定两个东西来定义值为函数的表达式：参数和返回语句。

```
lambda <参数>: <返回表达式>
```

虽然 `lambda` 表达式和 `def` 语句都创建函数对象，但它们之间存在一些显著的差异。`lambda` 表达式的工作方式与其他表达式类似；就像数学表达式只求值为一个数字而不改变当前环境一样，`lambda` 表达式求值为一个函数而不改变当前环境。让我们仔细看看。

|  | lambda | def |
| --- | --- | --- |
| 类型 | 值为值的_表达式_ | 改变环境的_语句_ |
| 执行结果 | 创建一个没有名称的匿名 lambda 函数。 | 创建一个具有固有名称的函数，并将其绑定到当前环境。 |
| 对环境的影响 | 执行 `lambda` 表达式_不会_创建或修改任何变量。 | 执行 `def` 语句会创建一个新的函数对象，并将其绑定到当前环境。 |
| 用法 | `lambda` 表达式可以用在任何需要表达式的地方，例如在赋值语句中，或者作为调用表达式的操作符或操作数。 | 执行 `def` 语句后，创建的函数将绑定到一个名称。您应该使用这个名称在任何需要函数的地方引用它。 |
| 示例 | 
```
# lambda 表达式本身不会改变环境
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
# 可以通过其固有名称引用
square(3)
```

 |

[YouTube 链接](https://youtu.be/vCeNq_P3akI?list=PLx38hZJ5RLZcUPWZ1-3HYsRPgZ8OCrvqz)

## 环境图

环境图是理解 `lambda` 表达式和高阶函数的最佳学习工具之一，因为您能够跟踪所有不同的名称、函数对象和函数参数。我们强烈建议绘制环境图或使用 [Python tutor](https://tutor.cs61a.org/)，如果您在做下面的 WWPD 问题时遇到困难。有关环境图应如何显示的示例，请尝试在 Python tutor 中运行一些代码。以下是规则：

### 赋值语句

1.  计算 `=` 符号右侧的表达式。
2.  如果 `=` 左侧的变量名在当前帧中不存在，则创建它。如果已存在，则删除之前的绑定。将步骤 1 中计算得到的_值_绑定到该变量名。
如果语句中包含多个名称或表达式，务必在进行任何绑定操作之前，按照从左到右的顺序依次计算它们的值。

### def 语句

1.  绘制函数对象，包括其内部名称、形式参数和父框架。函数的父框架是定义该函数的框架。
2.  如果当前框架中尚未存在该函数的内部名称，则添加该名称。如果已存在，则移除原有的绑定关系。将新创建的函数对象绑定到此名称。

### 函数调用

> 注意：对于像 `max` 或 `print` 这样的内置 Python 函数，您不必执行此过程。

1.  计算运算符，其值应为一个函数。
2.  从左到右计算操作数。
3.  打开一个新框架。用顺序框架号、函数的内部名称及其父框架标记它。
4.  将函数的形参绑定到步骤2中计算出的实参值。
5.  在新环境中执行函数体。

### Lambda 表达式

> *请注意：* 正如我们在上面的 `lambda` 表达式部分中看到的，`lambda` 函数没有内部名称。在环境图中绘制 `lambda` 函数时，它们用名称 `lambda` 或小写希腊字母 λ 标记。当环境图中出现多个 lambda 函数时，为了区分它们，可以对这些函数进行编号，或者在图中标注它们在代码中定义的行号。

1.  绘制 lambda 函数对象，并用 λ、其形式参数及其父框架标记它。函数的父框架是定义该函数的框架。

以上是绘制 Lambda 函数环境图的唯一步骤。我们包含此部分是为了强调 `lambda` 表达式和 `def` 语句之间的区别在于 `lambda` 表达式_不会_在环境中创建任何新绑定。

[YouTube 视频链接](https://youtu.be/IPec2A7j2bY?list=PLx38hZJ5RLZcUPWZ1-3HYsRPgZ8OCrvqz)

## 练习题

## 新手入门视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 要观看这些视频，您应该登录您的 berkeley.edu 电子邮件。

[YouTube 视频链接](https://youtu.be/playlist?list=PLx38hZJ5RLZeufgodzb9XzDT_9Sr-L4sJ)

## Python 输出结果是什么？

> **重要提示：** 对于所有“Python 输出结果是什么？”(WWPD) 的问题，如果输出结果是 `<function...>`，请填写 `Function`；如果代码报错，请填写 `Error`；如果没有输出，请填写 `Nothing`。

### Q1：WWPD：真相终将获胜

> 使用 Ok 来测试您对以下“Python 输出结果是什么？”问题的了解：
>
> ```
> python3 ok -q short-circuit -u
> ```
>
>

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

> 使用 Ok 来测试您对以下“Python 输出结果是什么？”问题的了解：
>
> ```
> python3 ok -q hof-wwpd -u
> ```
>
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
______<函数 at ...>
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
______<函数 at ...>
>>> snake(10, 20)()
______30
>>> cake = 'cake'
>>> snake(10, 20)
______30
```

### Q3: WWPD: Lambda

> 使用 Ok 来测试你对以下“Python 会显示什么？”问题的掌握程度：
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
______# print_lambda 返回 None，所以没有输出
```

## 代码练习

### Q4：复合恒等函数

编写一个函数，该函数接受两个单参数函数 `f` 和 `g`，并返回另一个**函数**，该函数具有一个参数 `x`。如果 `f(g(x))` 等于 `g(f(x))`，则返回的函数应返回 `True`，否则返回 `False`。您可以假设 `g(x)` 的结果可以作为 `f` 的有效输入，反之亦然。

```
def composite_identity(f, g):
    """
    返回一个带有一个参数 x 的函数，如果 f(g(x)) 等于 g(f(x))，则返回 True。您可以假设 g(x) 的结果可以作为 f 的有效输入，反之亦然。

    >>> add_one = lambda x: x + 1        # 将 x 加 1
    >>> square = lambda x: x**2          # 计算 x 的平方 [返回 x^2]
    >>> b1 = composite_identity(square, add_one)
    >>> b1(0)                            # (0 + 1) ** 2 == 0 ** 2 + 1
    True
    >>> b1(4)                            # (4 + 1) ** 2 != 4 ** 2 + 1
    False
    """
return lambda x: f(g(x)) == g(f(x))

    # 备用解决方案：
    def h(x):
        return f(g(x)) == g(f(x))
    return h
```
我们必须创建一个函数来接收 `x`，然后比较 `f(g(x))` 和 `g(f(x))` 的结果。

使用 Ok 来测试你的代码。

```
python3 ok -q composite_identity
```

### Q5: Count Cond

考虑以下`count_fives`和`count_primes`的实现。这些实现使用了之前作业中的`sum_digits`和`is_prime`函数。

```
def count_fives(n):
    """返回 1 到 n（含 n）之间，满足 `sum_digits(n * i)` 等于 5 的 i 的个数。
    >>> count_fives(10)  # 在 10, 20, 30, ..., 100 这些数中，只有 50 (10 * 5) 的各位数字之和为 5
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
    """返回小于等于 n 的质数个数。
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

这些实现非常相似！我们可以编写一个函数 `count_cond` 来概括它们的逻辑。`count_cond` 接收一个双参数谓词函数 `condition(n, i)`，并返回一个单参数函数。这个单参数函数接收 `n` 作为参数，计算从 1 到 `n` 之间所有满足 `condition(n, i)` 的数字的个数。

> **注意：** 这里“谓词函数” `condition` 指的是一个返回 `True` 或 `False` 的函数。

```
def sum_digits(y):
    """返回非负整数 y 的各位数字之和。"""
    total = 0
    while y > 0:
        total, y = total + y % 10, y // 10
    return total

def is_prime(n):
    """返回正整数 n 是否为质数。"""
    if n == 1:
        return False
    k = 2
    while k < n:
        if n % k == 0:
            return False
        k += 1
    return True

def count_cond(condition):
    """返回一个接收参数 N 的函数，该函数用于计算从 1 到 N 之间，满足双参数谓词函数 Condition 的所有数字的个数。Condition 的第一个参数是 N，第二个参数是从 1 到 N 的数字。

    >>> count_fives = count_cond(lambda n, i: sum_digits(n * i) == 5)
    >>> count_fives(10)   # 50 (10 * 5)
    1
    >>> count_fives(50)   # 50 (50 * 1), 500 (50 * 10), 1400 (50 * 28), 2300 (50 * 46)
    4
```>>> is_i_prime = lambda n, i: is_prime(i) # 需要传递一个接受两个参数的函数给 count_cond
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
def counter(n):
        i = 1
        count = 0
        while i <= n:
            if condition(n, i):
                count += 1
            i += 1
        return count
    return counter
```

一个值得思考的问题是：`count_fives` 和 `count_primes` 的逻辑在哪些方面相似，又在哪些方面不同？

第一个问题的答案告诉我们应该在`count_cond`函数中包含哪些逻辑。第二个问题的答案则指出了在`count_cond`中，我们希望在哪里观察到`count_fives`和`count_primes`行为上的差异。

此外，我们需要记住，我们希望`count_cond`返回的函数，在传入参数`n`时，其行为应与`count_fives`或`count_primes`相似。也就是说，`count_cond`是一个高阶函数，它返回的函数包含了`count_fives`和`count_primes`共有的逻辑。

使用 Ok 来测试你的代码：

```
python3 ok -q count_cond
```

## 在本地检查你的分数

你可以通过运行以下命令在本地检查此作业中每个问题的分数

```
python3 ok --score
```

**这不会提交作业！** 当你对你的分数感到满意时，将作业提交到 Gradescope 以获得学分。

## 提交

通过将你编辑过的任何文件上传**到相应的 Gradescope 作业**来提交此作业。[Lab 00](https://cs61a.org/lab/lab00/#submit-with-gradescope) 包含详细说明。

此外，所有**不在**大型班级的学生都必须填写此[考勤表](https://go.cs61a.org/lab-att)。每周提交此表格，无论你是否参加了实验课，或者因为正当理由错过了实验课。大型班级的学生不需要填写考勤表。

## 环境图练习

**此组件没有 Gradescope 提交。**

但是，我们仍然鼓励你在纸上完成此问题，以培养对环境图的熟悉程度，这可能会以另一种形式出现在考试中。要检查你的工作，你可以尝试将代码放入 PythonTutor 中。

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

> 这些问题是可选的。如果你没有完成它们，你仍然会收到实验课的学分。它们是非常好的练习，所以不妨尝试一下！

### Q7：倍数

编写一个函数，该函数接受两个数字，并返回既是两者倍数的最小数字。

```
def multiple(a, b):
    """返回既是 a 又是 b 的倍数的最小数字 n。
```
>>> multiple(3, 4)
    12
    >>> multiple(14, 21)
    42
    """
    n = 1
    while True:
        if n % a == 0 and n % b == 0:
            return n
        n += 1
```

使用 Ok 测试你的代码：

```
python3 ok -q multiple
```

### Q8: 我听说你很喜欢函数...

定义一个函数 `cycle`，它接受三个函数 `f1`、`f2` 和 `f3` 作为参数。`cycle` 会返回另一个函数 `g`，`g` 接受一个整数参数 `n`，并返回函数 `h`。最终函数 `h` 接受一个参数 `x`，并根据 `n` 的值，循环地将 `f1`、`f2` 和 `f3` 应用于 `x`。下面展示了最终函数 `h` 如何根据 `n` 的不同取值来处理 `x`：

-   `n = 0`，返回 `x`
-   `n = 1`，将 `f1` 应用于 `x`，或返回 `f1(x)`
-   `n = 2`，将 `f1` 应用于 `x`，然后将 `f2` 应用于该结果，或返回 `f2(f1(x))`
-   `n = 3`，将 `f1` 应用于 `x`，将 `f2` 应用于应用 `f1` 的结果，然后将 `f3` 应用于应用 `f2` 的结果，或 `f3(f2(f1(x)))`
-   `n = 4`，再次开始循环，先应用 `f1`，然后应用 `f2`，然后应用 `f3`，然后再次应用 `f1`，或 `f1(f3(f2(f1(x))))`
-   等等。

_提示_：大部分逻辑都在最内层的函数中。

```
def cycle(f1, f2, f3):
    """返回一个本身就是高阶函数的函数。

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
def g(n):
        def h(x):
            i = 0
            while i < n:
                if i % 3 == 0:
                    x = f1(x)
                elif i % 3 == 1:
                    x = f2(x)
                else:
                    x = f3(x)
                i += 1
            return x
        return h
    return g

    # 另一种递归的解决方案
    def g(n):
        def h(x):
            if n == 0:
                return x
            return cycle(f2, f3, f1)(n - 1)(f1(x))
        return h
    return g

```

为了计算出我们想要返回的值，我们需要三个主要的信息片段。

1.  即将循环使用的三个函数：`f1`、`f2` 和 `f3`。
2.  需要循环应用的次数，即 `n`。当 `n` 等于 0 时，我们希望函数表现得像恒等函数（即直接返回输入值，不对其应用任何函数）。
3.  初始输入值，即 `x`。
这些函数是传递给 `cycle` 函数的参数。我们希望 `cycle` 返回一个名为 `ret_fn` 的函数，该函数接受参数 `n`，并返回另一个名为 `ret` 的函数。`ret` 是一个接受 `x` 的函数，然后将循环地将这三个传入的函数应用到输入上，直到函数被应用 `n` 次。因此，大部分的逻辑都将在 `ret` 函数内部实现。

解决方案：

为了确定循环中下一步应该使用哪个函数，我们可以使用模运算 `%` 循环应用函数，直到对原始输入 `x` 完成 `n` 次操作。

用 Ok 测试你的代码：

```
python3 ok -q cycle
```
