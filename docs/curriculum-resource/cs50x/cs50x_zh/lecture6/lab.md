---
sidebar_position: 4
description: 第五讲 数据结构实验 | 实验
title: 实验
---

# 实验 5：继承 - CS50x 2023

模拟一个家庭中血型的遗传。

```
$ ./inheritance
Child (Generation 0): blood type OO
    Parent (Generation 1): blood type AO
        Grandparent (Generation 2): blood type OA
        Grandparent (Generation 2): blood type BO
    Parent (Generation 1): blood type OB
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type BO


```

## 背景

人的血型由两个等位基因（即基因的不同形式）决定。三种可能的等位基因是 A、B 和 O，每个人都有两个（可能相同，可能不同）。孩子的父母会各自随机将他们的一个血型等位基因传递给孩子。因此，可能的血型组合有：OO、OA、OB、AO、AA、AB、BO、BA 和 BB。

例如，如果父母一方的血型为 AO，另一方的血型为 BB，那么孩子的可能血型为 AB 和 OB，取决于从父母双方获得的等位基因。 类似地，如果父母一方的血型为 AO，另一方的血型为 OB，那么孩子的可能血型有 AO、OB、AB 和 OO。

## 开始

打开 [VS Code](https://cs50.dev/)。

首先点击终端窗口，然后单独执行 `cd`。您会发现提示符类似于以下内容。

单击该终端窗口内部，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/5/inheritance.zip

```

然后按回车键，以便在您的 codespace 中下载名为 `inheritance.zip` 的 ZIP 文件。 请注意不要忽略 `wget` 和 URL 之间的空格，以及任何其他字符！

现在执行

创建一个名为 `inheritance` 的文件夹。 您不再需要 ZIP 文件，因此可以执行

并在提示符下输入“y”，然后按回车键删除下载的 ZIP 文件。

现在输入

然后按回车键进入该目录。 现在您的提示符应该类似于以下内容。

如果遇到问题，请重复以上步骤，看看能否找到出错的地方！

## 理解

查看 `inheritance.c` 中的分发代码。

注意名为 `person` 的类型定义。 每个人都有一个包含两个 `parents` 的数组，每个 `parents` 都是指向另一个 `person` 结构体的指针。 每个人还有一个包含两个 `alleles` 的数组，每个 `alleles` 都是 `char` 类型（`'A'`、`'B'` 或 `'O'`）。

现在，看一下 `main` 函数。 该函数首先“播种”（即为随机数生成器提供初始输入），我们稍后将使用它来生成随机等位基因。 然后，`main` 函数调用 `create_family` 函数来模拟创建 3 代家庭（即一个人、其父母和祖父母）的 `person` 结构体。 然后我们调用 `print_family` 来打印出每个家庭成员及其血型。 最后，该函数调用 `free_family` 来释放之前使用 `malloc` 分配的内存。

`create_family` 和 `free_family` 函数留给您编写！

## 实现细节

完成 `inheritance.c` 的实现，使其能够创建一个指定代数的家庭，并将血型等位基因分配给每个家庭成员。 最老一代将随机分配等位基因。

-   `create_family` 函数接受一个整数 (`generations`) 作为输入，应该为该代数的家庭的每个成员分配（通过 `malloc`）一个 `person` 结构体，并返回指向最年轻一代 `person` 结构体的指针。
    -   例如，`create_family(3)` 应该返回一个指向拥有两个父母的 `person` 结构体的指针，其中每个父母也有两个父母。
    -   每个 `person` 结构体都应该分配有 `alleles`。 最老一代应该随机选择等位基因（通过调用 `random_allele` 函数），而年轻一代应该从父母双方各继承一个等位基因（随机选择）。
    -   最老一代应该将 `parents` 都设置为 `NULL`，而年轻一代的 `parents` 应该是一个包含两个指针的数组，每个指针分别指向其父母。

我们将 `create_family` 函数分解为几个 `TODO` 项，供您完成。

-   首先，您应该为新的 `person` 结构体分配内存。 回想一下，可以使用 `malloc` 来分配内存，并使用 `sizeof(person)` 来获取需要分配的字节数。
-   接下来，我们包含了一个条件来检查 `generations > 1`。
    -   如果 `generations > 1`，那么还有更多代需要分配。 我们已经通过递归调用 `create_family` 创建了两个新的 `parents`，分别是 `parent0` 和 `parent1`。 然后，您的 `create_family` 函数应该设置您创建的新 `person` 结构体的父指针。 最后，从父母双方随机选择一个等位基因来分配新 `person` 结构体的两个 `alleles`。
    -   否则（如果 `generations == 1`），那么该 `person` 结构体将没有父节点数据。 该 `person` 结构体的 `parents` 都应设置为 `NULL`，并且每个 `allele` 都应随机生成。
-   最后，您的函数应该返回已分配的 `person` 结构体的指针。

`free_family` 函数应该接受指向 `person` 结构体的指针作为输入，释放该结构体的内存，然后递归地释放其所有祖先的内存。
-   由于这是一个递归函数，您应该首先处理基本情况。如果函数的输入是 `NULL`，那么就没有任何内容需要释放，因此您的函数可以立即返回。
-   否则，在`free`这个子节点之前，您应该递归地`free`其父母节点。

### 演练

### 提示

-   您可以使用 `rand()` 函数来随机分配等位基因。此函数返回一个介于 `0` 和 `RAND_MAX`（即 `2147483647`）之间的整数。
    -   特别是，要生成一个伪随机数，该数是 `0` 或 `1`，您可以使用表达式 `rand() % 2`。
-   请记住，要为特定的人分配内存，我们可以使用 `malloc(n)`，它接受一个大小参数，并分配 `n` 字节的内存。
-   请记住，要通过指针访问变量，可以使用箭头符号。
    -   例如，如果 `p` 是指向某个人的指针，那么指向此人的第一个父节点的指针可以通过 `p->parents[0]` 访问。

不确定如何解决？

### 如何测试你的代码

运行 `./inheritance` 后，您的程序应遵守背景中描述的规则。孩子应该有两个等位基因，分别来自其父母。父母也应该各有两个等位基因，分别来自他们的父母。

例如，在下面的示例中，第 0 代的孩子从第 1 代的两位父母处分别获得一个 O 等位基因。第一位父母从两位祖父母处分别获得 A 和 O 等位基因。同样，第二位父母从两位祖父母处分别获得 O 和 B 等位基因。

```
$ ./inheritance
Child (Generation 0): blood type OO
    Parent (Generation 1): blood type AO
        Grandparent (Generation 2): blood type OA
        Grandparent (Generation 2): blood type BO
    Parent (Generation 1): blood type OB
        Grandparent (Generation 2): blood type AO
        Grandparent (Generation 2): blood type BO


```

执行以下命令以使用 `check50` 评估代码的正确性。但一定要自己编译和测试它！

```
check50 cs50/labs/2023/x/inheritance

```

执行以下命令以使用 `style50` 评估代码的风格。

## 如何提交

在您的终端中，执行以下命令以提交您的工作。

```
submit50 cs50/labs/2023/x/inheritance

```