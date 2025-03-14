---
title: 数据结构作业 0B
---

## 作业设置

请按照[作业工作流指南](../../../guides/assignment-workflow/index.md)开始本作业。本作业为 `hw0b`。

## 语言结构

### 类型

Java 是一种*静态类型*语言，这意味着每个变量都有一个在编译时已知的类型，也就是说，你必须在代码中指定它。相比之下，Python 是一种*动态类型*语言，这意味着变量的类型通常只有在运行时才知道，也就是说，你不需要在代码中指定它们。

在 Java 中，有两种类型：基本类型和引用类型。基本类型是小写的，我们在[第一部分](../hw0a/index.md#types)中提到了我们关心的基本类型：`boolean`、`int`、`char`、`double`。几乎所有其他类型都是引用类型，例如 `String`。如果一个类型以大写字母开头，它很可能是一个引用类型。

你将在第 4 讲中了解更多关于基本类型和引用类型之间的区别，但在本作业中，你需要知道每个基本类型都有一个对应的引用类型（`Boolean`、`Integer`、`Character`、`Double`）。如果你使用“泛型”来声明一个数据结构，你*必须*使用引用类型。你通常可以在基本类型和其引用类型之间无缝转换。

### null

Java 还有 `null`，它是 `None` 的近似等价物。任何引用类型都可以赋值为 `null`。如果我们尝试从 `null` 值访问实例成员或调用实例方法，我们将看到一个称为 `NullPointerException` 的错误。

### 数组（固定大小）

Java 数组与 Python 列表非常相似。然而，Java 数组是*固定大小*的，因此我们不能添加或删除元素（即没有 `append`、`remove` 等）。

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
zeroedLst = [0, 0, 0]
lst = [4, 7, 10]
lst[0] = 5
print(lst[0])
print(lst)
print(len(lst))
```

</td>
<td markdown="block">

```java
int[] zeroedArray = new int[3];
int[] array = {4, 7, 10};
array[0] = 5;
System.out.println(array[0]);
System.out.println(Arrays.toString(array));
System.out.println(array.length);
```

</td>
</tr>
</table>

- 在 `new int[3]` 中，`int` 是数组中的类型；`3` 是长度。使用这种语法，所有元素都取其“默认值”。对于 `int`，这是 0。
- 数组不会打印得很好看，原因超出了 HW 0 的范围。要打印数组，可以调用 `Arrays.toString(array)`。
- 数组没有长度*方法*。它是一个*实例变量*，因此没有括号。
- Java **不**支持*负索引*或*切片*。

### 增强型 For 循环

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
lst = [1, 2, 3]
for i in lst:
    print(i)

```

</td>
<td markdown="block">

```java
int[] array = {1, 2, 3};
for (int i : array) {
    System.out.println(i);
}
```

</td>
</tr>
</table>

- 注意迭代变量的类型声明，以及使用 `:` 而不是 `in`。
- 我们也可以在某些其他类型上使用这种语法，例如 `List` 和 `Set`。

### 列表（可调整大小）

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
lst = []
lst.append("zero")
lst.append("one")
lst[0] = "zed"
print(l[0])
print(len(l))
if "one" in lst:
    print("one in lst")

for elem in lst:
    print(elem)

```

</td>
<td markdown="block">

```java
List<String> lst = new ArrayList<>();
lst.add("zero");
lst.add("one");
lst.set(0, "zed");
System.out.println(lst.get(0));
System.out.println(lst.size());
if (lst.contains("one")) {
    System.out.println("one in lst");
}
for (String elem : lst) {
    System.out.println(elem);
}
```

</td>
</tr>
</table>

- Java 有 `List` 接口。我们主要使用 [`ArrayList`][`ArrayList`] 实现。
- `List` 接口是通过它包含的类型进行*参数化*的，使用尖括号 `<` 和 `>`。
- `List` 同样不支持切片或负索引。

[`ArrayList`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/ArrayList.html

### 集合

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
s = set()
s.add(1)
s.add(1)
s.add(2)
s.remove(2)
print(len(s))
if 1 in s:
    print("1 in s")

for elem in s:
    print(elem)

```

</td>
<td markdown="block">

```java
Set<Integer> set = new HashSet<>();
set.add(1);
set.add(1);
set.add(2);
set.remove(2);
System.out.println(set.size());
if (set.contains(1)) {
    System.out.println("1 in set");
}
for (int elem : set) {
    System.out.println(elem);
}
```

</td>
</tr>
</table>

- Java 有 `Set` 接口。有两个主要实现：[`TreeSet`][] 和 [`HashSet`][]。`TreeSet` 保持其元素的“排序”顺序，并且很快。相比之下，`HashSet` 没有定义的“顺序”，但通常非常快。
  - 我们将在课程后面学习这些“快”的概念时，正式化这些概念。
- `Set` 不能包含重复项。如果我们尝试向集合中添加已经存在的项，什么也不会发生。

[`TreeSet`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeSet.html
[`HashSet`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashSet.html

### 字典 / 映射

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
d = {}
d["hello"] = "hi"
d["hello"] = "goodbye"
print(d["hello"])
print(len(d))
if "hello" in d:
    print("\"hello\" in d")

for key in d.keys():
    print(key)

```

</td>
<td markdown="block">

```java
Map<String, String> map = new HashMap<>();
map.put("hello", "hi");
map.put("hello", "goodbye");
System.out.println(map.get("hello"));
System.out.println(map.size());
if (map.containsKey("hello")) {
    System.out.println("\"hello\" in map");
}
for (String key : map.keySet()) {
    System.out.println(key);
}
```

</td>
</tr>
</table>

- Java 有 `Map` 接口。有两个主要实现：[`TreeMap`][] 和 [`HashMap`][]。类似于集合，`TreeMap` 保持其键的排序顺序，并且很快；`HashMap` 没有定义的顺序，并且（通常）非常快。
- `Map` 不能包含重复的键。如果我们尝试向映射中添加已经存在的键，值将被覆盖。
- 在尖括号中，我们首先有“键类型”，然后是“值类型”。
- `Map` 不能直接与 `:` 一起使用。通常，我们调用 `keySet` 来迭代一组键，并使用这些键来检索值。也可以迭代 `entrySet` 以同时获取键和值。

[`TreeMap`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/TreeMap.html
[`HashMap`]: https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/HashMap.html

### 类

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def distanceTo(self, other):
        return math.sqrt(
            (self.x - other.x) ** 2 +
            (self.y - other.y) ** 2
        )

    def translate(self, dx, dy):
        self.x += dx
        self.y += dy
```

</td>
<td markdown="block">

```java
public class Point {
    public int x;
    public int y;
    public Point(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public Point() {
        this(0, 0);
    }
    public double distanceTo(Point other) {
        return Math.sqrt(
            Math.pow(this.x - other.x, 2) +
            Math.pow(this.y - other.y, 2)
        )
    }
    public void translate(int dx, int dy) {
        this.x += dx;
        this.y += dy;
    }
}
```

</td>
</tr>
</table>

我们可以这样使用这些类：

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
p1 = Point(5, 9)
p2 = Point(-3, 3)
print(f"Point 1: ({p1.x}, {p1.y})")
print("Distance:", p1.distanceTo(p2))
p1.translate(2, 2)
print(f"Point 1: ({p1.x}, {p1.y})")
```

</td>
<td markdown="block">

```java
Point p1 = new Point(5, 9);
Point p2 = new Point(-3, 3);
System.out.println("Point 1: ( " + p1.x
    + ", " + p1.y + ")");
System.out.println("Distance: "
    + p1.distanceTo(p2));
p1.translate(2, 2);
System.out.println("Point 1: ( " + p1.x
    + ", " + p1.y + ")");
```

</td>
</tr>
</table>

### Main

Java 程序还可能有一个名为 `main` 的特殊方法。当你执行一个程序时，会调用 `main` 方法。`main` 方法运行其中的代码，这可能会调用程序中定义的其他方法。

我们使用签名 `public static void main(String[] args)` 定义 `main` 方法。你将在课程后面了解签名中每个部分的含义。现在，你可以将 `main` 视为你编写的代码的“播放按钮”。

要运行上面示例中的代码，我们可以在 `Point` 类中创建一个 `main` 方法，如下所示：

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
class Point:

    # other methods...
    # end of Point class

if __name__ == '__main__':
    p1 = Point(5, 9)
    p2 = Point(-3, 3)
    print(f"Point 1: ({p1.x}, {p1.y})")
    print("Distance:", p1.distanceTo(p2))
    p1.translate(2, 2)
    print(f"Point 1: ({p1.x}, {p1.y})")

```

</td>
<td markdown="block">

```java
public class Point {

    // other methods...

    public static void main(String[] args) {
        Point p1 = new Point(5, 9);
        Point p2 = new Point(-3, 3);
        System.out.println("Point 1: ( " + p1.x
            + ", " + p1.y + ")");
        System.out.println("Distance: "
            + p1.distanceTo(p2));
        p1.translate(2, 2);
        System.out.println("Point 1: ( " + p1.x
            + ", " + p1.y + ")");
    }

    // end of Point class
}
```

</td>
</tr>
</table>

注意，在 Java 中，`main` 方法是在类内部定义的。

如果你在 IntelliJ 中编写代码，你可以“播放”`main` 方法！IntelliJ 将在 `main` 方法的签名旁边显示一个绿色的播放按钮。点击它以运行其中的代码。

## 程序

让我们看一些使用数据结构和类的 Java 程序。以下是一些简单的程序，你可能会发现自己在忘记如何做某事时参考它们。

### 列表中数字的最小值索引

<table>
    <thead>
        <th>Python</th>
        <th>Java</th>
    </thead>
<tr>
<td markdown="block">

```python
def min_index(numbers):
    # Assume len(numbers) >= 1
    m = numbers[0]
    idx = 0
    for i in range(len(numbers)):
        if numbers[i] < m:
            m = numbers[i]
            idx = i
    return idx
```

</td>
<td markdown="block">

```java
public static int minIndex(int[] numbers) {
    // Assume numbers.length >= 1
    int m = numbers[0];
    int idx = 0;
    for (int i = 0; i < numbers.length; i++) {
        if (numbers[i] < m) {
            m = numbers[i];
            idx = i;
        }
    }
    return idx;
}
```

</td>
</tr>
</table>

<!-- TODO:
- Additional example programs
- Programming exercise spec
-->

## 异常

最后，让我们看看如何在 Java 中抛出异常，并与 Python 进行比较。

<table>
    <thead>
        <th>Python</th>
    </thead>
<tr>
<td markdown="block">

```python
def minIndex(numbers):
    if len(numbers) == 0:
        raise Exception("There are no elements in the list!")
    m = numbers[0]
    idx = 0

    ...

    return m
```

</td>
</tr>

<thead>
<th>Java</th>
</thead>
<tr>

<td markdown="block">

```java
public static int minIndex(int[] numbers) {
    if (numbers.length == 0) {
        throw new Exception("There are no elements in the array!");
    }
    int m = numbers[0];
    int idx = 0;

    ...

    return m;
}
```

</td>
</tr>
</table>

## 编程练习

为了让你更熟悉 Java 语法和测试，我们为你准备了一些练习题！完成函数后，我们为你提供了一些测试。虽然我们提供了测试，但你也可以自己编写测试。编写测试不仅是本课程的重要部分，也是最重要的技能之一。它加强了我们对特定方法应该做什么的理解，并让我们捕捉到边缘情况！你将在课程后面有更多的测试练习，但我们希望你能尽早接触。

请先完成**实验室 01**，并参考[这里](../../guides/assignment-workflow/)了解如何开始作业。

在完成作业时，你可能需要使用不同的数据结构，例如 `ArrayList` 和 `TreeMap`。要导入这些类，如果你将鼠标悬停在使用数据结构的地方，IntelliJ 会给你选择导入的选项，或者你可以手动添加：

```java
import java.util.ArrayList;
import java.util.TreeMap;
```

### 任务 1：JavaExercises

`JavaExercises.java` 有 4 个不同的方法供你完成：

- `makeDice`：该方法返回一个*新的*整数数组 `[1, 2, 3, 4, 5, 6]`。
- `takeOrder`：该方法接受一个 `String` 并返回一个*新的*数组，其中包含顾客的订单。如果顾客是 `Ergun`，你应该返回一个字符串数组 `["beyti", "pizza", "hamburger", "tea"]`，顺序如下。如果顾客是 `Erik`，你应该返回一个字符串数组 `["sushi", "pasta", "avocado", "coffee"]`。在其他情况下，返回一个大小为 3 的空字符串数组。
  :::info
  > **注意：**由于我们稍后会在课程中看到的原因，`==` 在 `String` 中表现异常。你应该使用 `s1.equals(s2)` 在 Java 中检查字符串 `s1` 和 `s2` 是否相等。
  :::
- `findMinMax`：该方法接受一个 `int[] array` 并返回给定数组的最大元素和最小元素之间的正差。你可以假设输入数组是非空的。
- `hailstone`：该方法接受一个 `int n` 作为输入，并返回其雹石序列作为整数列表。雹石序列的定义如下：选择一个正整数 n 作为起点。如果 n 是偶数，将 n 除以 2。如果 n 是奇数，将 n 乘以 3 并加 1。继续此过程，直到 n 为 1。
  - 你应该使用递归和提供的辅助方法 `hailstoneHelper` 来计算。

在这一部分，你可以导入 `List` 和 `ArrayList`。

### 任务 2：ListExercises

`ListExercises.java` 有 4 个不同的方法供你完成：

- `sum`：该方法接受一个列表 `List<Integer> L` 并返回该列表中元素的总和。如果列表为空，方法应返回 0。
- `evens`：该方法接受一个列表 `List<Integer> L` 并返回一个*新的*列表，其中包含给定列表中的偶数。如果没有偶数元素，它应返回一个空列表。
- `common`：该方法接受两个列表 `List<Integer> L1`、`List<Integer> L2` 并返回一个*新的*列表，其中包含两个给定列表中存在的项。如果没有公共项，它应返回一个空列表。
- `countOccurrencesOfC`：该方法接受一个列表和一个字符 `List<String> words`、`char c` 并返回字符在字符串列表中出现的次数。如果字符在任何单词中都没有出现，它应返回 0。

在这一部分，你可以导入 `ArrayList`。

### 任务 3：MapExercises

`MapExercises.java` 有 3 个不同的方法供你完成：

- `letterToNum`：该方法返回一个从每个小写字母到其在字母表中对应顺序的数字的映射，其中 'a' 对应 1，'z' 对应 26。
- `squares`：该方法接受一个列表 `List<Integer> nums` 并返回一个从列表中的整数到其平方的映射。如果给定的列表为空，它应返回一个空映射。
- `countWords`：该方法接受一个列表 `List<String> words` 并返回一个从列表中的单词到其出现次数的映射。如果给定的列表为空，它应返回一个空映射。

在这一部分，你可以导入 `TreeMap`。

### 任务 4：Dessert.java

:::info
与你之前的课程相比，61B 可能会在作业上给你很大的自由度。例如，这个练习没有框架代码 - 不要惊慌！
:::
创建一个名为 `Dessert` 的类（你需要创建一个新文件并**将其添加到 Git**），放在 `src/` 文件夹中。该类应具有以下特征：

- 两个实例变量：`int flavor` 和 `int price`。
- 一个构造函数，接受两个参数 `int flavor` 和 `int price`，并相应地设置实例变量。
- 一个静态变量 `int numDesserts`，用于跟踪到目前为止创建的甜点数量。
- 一个方法 `public void printDessert()`，打印甜点的风味和价格，以及到目前为止创建的甜点总数，用空格分隔。
  - 例如，如果我们创建一个风味为 1 和价格为 2 的甜点，然后调用其 `printDessert()` 方法，它应打印 `1 2 1`。
  - 如果我们然后创建一个风味为 3 和价格为 4 的甜点，然后调用其 `printDessert()` 方法，它应打印 `3 4 2`。
- 最后，一个方法 `public static void main(String[] args)`，当执行时只打印 `I love dessert!`。

确保按照上述要求准确实现，否则你可能无法通过测试！

当你完成 `Dessert.java` 后，取消注释 `tests/DessertTest` 中的相应行并运行测试。

<details markdown="block">
<summary>
如何在 IntelliJ 中创建一个新类
</summary>
<br/>

1. 右键点击屏幕左侧的 `src/` 文件夹，然后转到 `New` > `Java Class`。
   ![New Java Class](/img/cs61b/new-java-class.png)
2. 你应该会看到一个弹出窗口。在 `Name` 字段中输入 `Dessert`，然后按 Enter。
   ![New Java Class Popup](/img/cs61b/new-java-class-popup.png)
3. 如果你看到以下弹出窗口，要求你将文件添加到 Git，选择 `Add`。
   ![New Java Class Git](/img/cs61b/new-java-class-git.png)
4. 你现在应该在 `src/` 文件夹中看到一个名为 `Dessert.java` 的新文件。它应该如下所示，然后你可以修改它以满足上述规格：
   ![New Java Class File Contents](/img/cs61b/new-java-class-file-contents.png)

</details>

<details markdown="block">
<summary>
用 Python 实现的 `Dessert` 类
</summary>
<br/>

```python
class Dessert:
    numDesserts = 0

    def __init__(self, flavor, price):
        self.flavor = flavor
        self.price = price
        Dessert.numDesserts += 1

    def printDessert(self):
        print(self.flavor, self.price, Dessert.numDesserts)

if __name__ == "__main__":
    print("I love dessert!")
```

</details>

## 测试和调试

如果你在运行代码时遇到问题，请在询问课程人员之前阅读本节中的常见错误！

### 语法错误

如果你的代码包含语法错误，IntelliJ 将不会运行你的代码（`main` 方法旁边的绿色播放按钮将不会出现）。

如果你的代码有语法错误，你会在右上角看到一个红色的感叹号，并且你的代码中会有红色的波浪线。要查看语法错误的位置，你可以点击红色的感叹号。

![Syntax Errors](/img/cs61b/syntax-errors.png)

如果你在未修改的代码部分看到语法错误，你可能在代码的前面部分有语法错误（例如，不匹配的括号），这导致后面的代码无法编译。

例如，在上图中，`takeOrder` 方法在第 19 行缺少其结束括号。这导致第 23 行出现语法错误。

## 交付物

- `JavaExercises.java`
- `ListExercises.java`
- `MapExercises.java`
- `Dessert.java`

对于本作业，你需要完成 `JavaExercises`、`ListExercises` 和 `MapExercises` 中的方法。你还需要创建一个新文件 `Dessert.java` 并按照要求实现它。确保在提交到 Gradescope 之前测试你的代码。虽然我们对这个特定作业没有提交限制，但在将来建议你使用现有的测试并编写自己的测试，以查看你的方法是否有效，然后再将代码提交给自动评分系统，因为可能会有提交限制。

本作业**10 分**，截止日期为**1/22，23:59**。