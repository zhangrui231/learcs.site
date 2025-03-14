---
title: Homework 0A Java Syntax
---

## 语言构造

许多 Python 基础知识都有 Java 等价物，例如循环和 if 语句。本节将直接对比它们的语法。

### 变量声明

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
    <tr>
<td markdown="block">

```python
i = 0
```

</td>
<td markdown="block">

```java
int i = 0;
```

</td>
</tr>
</table>

- 和 Python 一样，Java 变量也有_类型_。在 Java 中，要声明一个变量，我们必须明确说明它的类型。变量声明后的类型就不能更改了。有关“静态类型”的更多信息，请参阅第 1 讲。
- 我们还必须在语句末尾加上分号。

### 类型

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD013 -->

| Python        | Java      | 含义                                                                            |
| ------------- | --------- | -------------------------------------------------------------------------------- |
| `bool`        | `boolean` | Python 使用 `True` 和 `False`；Java 使用 `true` 和 `false`。                    |
| `int`         | `int`     | Python 的 `int` 类型没有范围限制，而 Java 的 `int` 类型则有最大值和最小值（数值很大）。 |
| `float`       | `double`  | 表示小数。Java 的 `double` 类型也有范围限制。                                          |
| `str`         | `String`  | Java 的 `String` 使用双引号 (`"`)，并且可以是任何文本。                     |
| no equivalent | `char`    | Java 的 `char` 表示_单个_字符，并使用单引号 (`'`)。                       |

<!-- markdownlint-restore -->

### 注释

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
# This is a single line comment.
```

</td>
<td markdown="block">

```java
// This is a single line comment.
```

</td>
</tr>
</table>

Java 也有多行注释，使用 `/*` 开头，`*/` 结尾。

### `while` 循环

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
i = 0
while i < 10:
    print(i)
    i += 1

```

</td>
<td markdown="block">

```java
int i = 0;
while (i < 10) {
    System.out.println(i);
    i++;
}
```

</td>
</tr>
</table>

- 条件表达式必须用括号 `(` 和 `)` 包裹。
- 在 Java 中，通常使用 `++` 代替 `+= 1`。
- Java 里面确实是用 `System.out.println` 来打印输出的。没办法。
- 我们使用花括号 `{` 和 `}` 来包裹 while 循环中的代码，而不是缩进。Java 不需要缩进，但这是一个好的风格！

### `for` 循环（正向计数）

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
for i in range(10):
    print(i)

```

</td>
<td markdown="block">

```
for (int i = 0; i < 10; i ++) {
    System.out.println(i);
}
```

</td>
</tr>
</table>

在 Java 中，`for` 循环的语法是：

```java
for (initialization; termination; increment) {
    // 循环体
}
```

这和下面的 while 循环大致等价：

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
initialization
while termination:
    # loop body
    increment

```

</td>
<td markdown="block">

```java
initialization
while (termination) {
    // loop body
    increment
}
```
</td>
</tr>
</table>

当终止条件为假时，`while` 循环和 `for` 循环退出。比较表格中的 `for` 循环会运行直到 `i` 等于 10。

### `for` 循环（倒数）

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
for i in range(9, -1, -1):
  print(i)

```

</td>
<td markdown="block">

```java
for (int i = 9; i >= 0; i --) {
  System.out.println(i);
}
```

</td>
</tr>
</table>

- 请注意Java `for` 循环中“初始化”、“终止”和“递增”这些不同的部分。
- 类似于 `++`，`--` 也常用于替代 `-= 1`。
- 比较表格中的 `for` 循环会运行直到 `i` 小于 0。

### 条件语句

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
if i % 3 == 0 and i % 5 == 0:
    print("FizzBuzz")
elif i % 3 == 0:
    print("Fizz")
elif i % 5 == 0:
    print("Buzz")
else:
    print(i)

```

</td>
<td markdown="block">

```java
if (i % 3 == 0 && i % 5 == 0) {
    System.out.println("FizzBuzz");
} else if (i % 3 == 0) {
    System.out.println("Fizz");
} else if (i % 5 == 0) {
    System.out.println("Buzz");
} else {
    System.out.println(i);
}
```

</td>
</tr>
</table>

布尔运算符如下：

| Python | Java |
| ------ | ---- |
| `and`  | `&&` |
| `or`   | `||` |
| `not`  | `!`  |
| `==`   | `==` |

- 请注意 `elif` 和 `else if` 之间的区别。
- 注意：在 Java 中，`==` 用于比较引用，而 `.equals()` 用于比较相等性。对于原始类型，这意味着相同的事情，但对于引用类型，它可能不同。对于此作业，您无需了解差异；我们稍后会详细了解这一点。

### 指数运算

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
x = 2**10
```

</td>
<td markdown="block">

```java
int x = Math.pow(2, 10);
```

</td>
</tr>
</table>

请注意，Java 中的 `^` 是“异或”运算符，而不是指数运算。也就是说，`2 ^ 10` 是有效的代码，但它将返回 `8`，而不是 `1024`。

### 函数声明和使用

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
def greet(name):
    return "Hello, " + name

# Elsewhere...
print(greet("Josh"))
```

</td>
<td markdown="block">

```java
public static String greet(String name) {
    return "Hello, " + name;
}
// Elsewhere...
System.out.println(greet("Josh"));
```

</td>
</tr>
</table>

在 Java 中，函数具有特定的返回类型，该类型位于函数名称之前，并且函数还需要指定其参数的类型。如果函数不返回任何内容，则其返回类型为 `void`。目前，我们所有的函数前面都有 `public static` 修饰符，这些修饰符的含义我们将在后续内容中进行讲解。调用函数的方式与 Python 中相同。

### 字符串
<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
s = "hello"
s += " world"
s += str(5)
s_length = len(s)
substr = s[1:5]
c = s[2]
if "hello" in s:
    print("\"hello\" in s")

for letter in s:
    print(letter)

```

</td>
<td markdown="block">

```
String s = "hello";
s += " world";
s += 5;
int sLength = s.length();
String substr = s.substring(1, 5);
char c = s.charAt(2);
if (s.indexOf("hello") != -1) {
    System.out.println("\"hello\" in s");
}
for (int i = 0; i < s.length(); i++) {
    char letter = s.charAt(i);
    System.out.println(letter);
}

```

</td>
</tr>
</table>

- 在 Java 中，`String` 字符串不能直接被迭代。我们可以通过索引迭代并使用 `charAt` 方法，或者将其转换为数组（这部分内容稍后会介绍）。
- 在 Java 里，你可以直接把任何类型的数据加到 `String` 字符串后面，Java 会自动把它变成字符串，不需要你手动转换。

## 程序

现在我们已经学习了一些基本的语言结构，接下来看看一些使用它们的 Java 程序例子。这里提供了一些简单的程序示例，如果你忘了某些操作的具体写法，可以参考一下这些例子。

### Hello World

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
print("Hello World")
```

</td>
<td markdown="block">

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello World");
    }
}
```
</td>
</tr>
</table>

- 所有 Java 代码都必须在一个 **类** 中。我们稍后会了解更多关于类的信息。
- 当 Java 程序运行时，程序会从 **`public static void main(String[] args)`** 方法开始执行。这和 Python 不一样，Python 代码可以直接在函数外面运行。

<!-- TODO: conditional example. Loop example.
- Collatz sequence (if, while)
- something with for and Strings
-->


## 练习

华盛顿大学 (UW) 有很多入门级的 Java 练习题，我们会借鉴其中的一部分。对于 HW 0，在
[Practice-It](https://practiceit.cs.washington.edu) 上创建一个帐户，并完成以下操作：

- [Self-Check 1.26: Confusing](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter1/s26%2DConfusing)
- [Exercise 2.5: `starTriangle`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter2/e5%2DstarTriangle)
- [Self-Check 2.25: `numberTotal`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter2/s25%2DnumberTotal)
- [Exercise 3.23: `printIndexed`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter3/e23%2DprintIndexed) or [Exercise 4.17: `stutter`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/e17%2Dstutter)
- [Self-Check 4.5: `ifElseMystery1`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/s5%2DifElseMystery1)
- [Exercise 4.19: `quadrant`](https://practiceit.cs.washington.edu/problem/view/bjp5/chapter4/e19%2Dquadrant)

请务必遵循练习页面上的说明，尤其是关于打印与返回的说明！

如果您在练习中遇到问题，一种策略可能是先用 Python 解决，然后再将其翻译成 Java。如果您在 Python 中解决问题时遇到困难，那没关系，这不是本练习的重点。如果您想参考 Python 解决方案，请参阅下面的下拉菜单。

<details markdown="block">
<summary markdown="block">

`starTriangle`

</summary>

```
for i in range(5):
    line = ""
    for j in range(i + 1):
        line += "*"
    print(line)
```

</details>

<details markdown="block">
<summary markdown="block">

`printIndexed`

</summary>

```
def printIndexed(s):
    output = ""
    for i in range(len(s)):
        output += s[i]
        output += str(len(s) - 1 - i)
    print(output)
```

</details>

<details markdown="block">
<summary markdown="block">

`stutter`

</summary>

```python
def stutter(s):
    output = ""
    for i in range(len(s)):
        output += s[i]
        output += s[i]
    return output
```
</details>

<details markdown="block">
<summary markdown="block">

`quadrant`

</summary>

```
def quadrant(x, y):
    if x == 0 or y == 0:
        return 0
    elif y > 0 and x > 0:
        return 1
    elif y > 0 and x < 0:
        return 2
    elif y < 0 and x < 0:
        return 3
    else:
        return 4
```

</details>


## 提交成果
完成这 6 个练习后，转到您的【已解决问题列表】（https://practiceit.cs.washington.edu/user/problems-solved），
截取表格的屏幕截图，并将截图提交至 Gradescope 上的 HW 0A。

**注意：**如果您在将屏幕截图转换为 Gradescope 要求的 PDF 格式时遇到问题，请尝试使用【此转换器】（https://png2pdf.com/）。

恭喜！您已为接下来的几节课做好准备，并已完成 HW 0。Lecture 2 之后，您就可以阅读 HW0B 了，但如果您愿意，现在就可以提前开始。

编程语言与口语并没有太大的区别——特别是，您编写的代码越多，就会变得越好。PracticeIt 网站提供了许多问题，您可以随意尝试更多。（尽管它们的进度与我们的不完全匹配——如果您看到 Scanner 或需要生成一个随机数，您可以跳过该问题。）

我们也推荐 https://codingbat.com/java/AP-1，其中包含更高级的 Java 问题。

此作业价值 5 分，截止日期为 1/19，晚上 11:59。