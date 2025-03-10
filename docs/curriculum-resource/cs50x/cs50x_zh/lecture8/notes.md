---
sidebar_position: 1
description: lecture7 SQL Notes | 课程笔记
title: 课程笔记
---

# 第七讲 - CS50x 2023

- [第七讲 - CS50x 2023](#第七讲---cs50x-2023)
  - [欢迎!](#欢迎)
  - [平面文件数据库](#平面文件数据库)
  - [关系数据库](#关系数据库)
  - [IMDb](#imdb)
  - [`JOIN`（连接）](#join连接)
  - [索引](#索引)
  - [在 Python 中使用 SQL](#在-python-中使用-sql)
  - [竞态条件](#竞态条件)
  - [SQL 注入攻击](#sql-注入攻击)
  - [总结](#总结)

## 欢迎!

-   在前几周，我们向您介绍了 Python，一种高级编程语言，它使用了我们在 C 语言中学到的相同构建块。
-   本周，我们将继续学习更多与 Python 相关的语法。
-   此外，我们将把这些知识与数据集成起来。
-   最后，我们将讨论 _SQL_ 或 _结构化查询语言_。
-   总的来说，本课程的目标之一是学习通用的编程思想，而不仅仅是如何使用本课程中涉及的语言进行编程。

## 平面文件数据库

-   正如您可能已经了解的那样，数据通常可以用列和表的结构来表示。
-   像 Microsoft Excel 和 Google Sheets 这样的电子表格软件可以将数据导出为 `csv`，即_逗号分隔值_文件。
-   查看 `csv` 文件时，你会发现它是一种平面文件，所有数据都存储在一个由文本文件构成的单表中。我们将这种形式的数据称为 _平面文件数据库_。
-   Python 原生支持 `csv` 文件。
-   在终端窗口中输入 `code favorites.py`，然后编写以下代码：

    ```
    # 使用 csv.reader 打印 CSV 中的所有收藏夹

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 reader
        reader = csv.reader(file)

        # 跳过标题行
        next(reader)

        # 迭代 CSV 文件，打印每个收藏夹
        for row in reader:
            print(row[1])

    ```

    注意，已经导入了 `csv` 库。我们创建了一个 `reader` 对象来存储 `csv.reader(file)` 的返回值。`csv.reader` 函数会逐行读取文件内容，并将结果保存在 `reader` 对象中。因此，`print(row[1])` 会输出 `favorites.csv` 文件中每行的第二列数据，即编程语言。

-   您可以如下优化代码：

    ```
    # 将收藏夹存储在变量中

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 reader
        reader = csv.reader(file)

        # 跳过标题行
        next(reader)

        # 迭代 CSV 文件，打印每个收藏夹
        for row in reader:
            favorite = row[1]
            print(favorite)

    ```

    注意，`favorite` 变量被赋值后随即输出。`next` 函数用于跳过 `reader` 对象的下一行，通常用于跳过表头。

-   Python 允许通过键来访问列表中的元素。请修改代码如下：

    ```
    # 使用 csv.DictReader 打印 CSV 中的所有收藏夹

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 迭代 CSV 文件，打印每个收藏夹
        for row in reader:
            print(row["language"])

    ```

    注意，此示例直接使用键 `language` 来访问并输出对应的值。

-   要统计 `csv` 文件中各种编程语言的偏好数量，可以采用以下方法：

    ```
    # 使用变量计算收藏夹

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        scratch, c, python = 0, 0, 0

        # 迭代 CSV 文件，计算收藏夹
        for row in reader:
            favorite = row["language"]
            if favorite == "Scratch":
                scratch += 1
            elif favorite == "C":
                c += 1
            elif favorite == "Python":
                python += 1

    # 打印计数
    print(f"Scratch: {scratch}")
    print(f"C: {c}")
    print(f"Python: {python}")

    ```

    注意，这里使用了`if`语句来统计每种语言的偏好数量。

-   Python 允许我们使用字典来统计每种语言的计数（`counts`）。考虑对以下代码的改进：

    ```
    # 使用字典计算收藏夹

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 迭代 CSV 文件，计算收藏夹
        for row in reader:
            favorite = row["language"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    # 打印计数
    for favorite in counts:
        print(f"{favorite}: {counts[favorite]}")

    ```

    注意，如果字典`counts`中已存在键`favorite`，则其对应的值会递增；否则，我们会将`counts[favorite]`的值设为1。此外，格式化字符串也进行了优化，可以直接显示`counts[favorite]`的值。

-   Python 还允许对 `counts` 进行排序。按以下方式改进代码：

    ```
    # 按键对收藏夹进行排序

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 迭代 CSV 文件，计算收藏夹
        for row in reader:
            favorite = row["language"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    # 打印计数
    for favorite in sorted(counts):
        print(f"{favorite}: {counts[favorite]}")

    ```

    注意代码底部的 `sorted(counts)` 函数。

-   如果您查看 Python 文档中 `sorted` 函数的参数，您会发现它有许多内置参数。您可以按以下方式使用这些内置参数：

    ```
    # 按值对收藏夹进行排序

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 迭代 CSV 文件，计算收藏夹
        for row in reader:
            favorite = row["language"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    def get_value(language):
        return counts[language]

    # 打印计数
    for favorite in sorted(counts, key=get_value, reverse=True):
        print(f"{favorite}: {counts[favorite]}")

    ```

    注意，这里创建了一个名为`get_value`的函数，并将其作为参数传递给`sorted`函数。`key`参数用于指定排序的依据。

-   Python 有一个我们之前没有提到过的特性：它允许使用匿名函数，也就是`lambda`函数。当您不想单独定义一个函数时，可以使用匿名函数。注意以下修改：

    ```
    # 使用 lambda 函数按值对收藏夹进行排序

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 迭代 CSV 文件，计算收藏夹
        for row in reader:
            favorite = row["language"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    # 打印计数
    for favorite in sorted(counts, key=lambda language: counts[language], reverse=True):
        print(f"{favorite}: {counts[favorite]}")

    ```

    相反，`lambda language: counts[language]` 这行代码实现了之前两行函数的功能。

-   我们可以修改代码，将关注点从最喜欢的语言转移到最喜欢的问题：

    ```
    # 最喜欢的问题而不是最喜欢的语言

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

    # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 遍历 CSV 文件，统计最喜爱的问题
        for row in reader:
            favorite = row["problem"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    # 打印计数
    for favorite in sorted(counts, key=lambda problem: counts[problem], reverse=True):
        print(f"{favorite}: {counts[favorite]}")

    ```

    注意，这里将 `language` 替换成了 `problem`。

-   如果想允许用户直接在终端输入，我们可以利用之前学过的用户输入知识来修改代码：

    ```
    # 最喜欢的问题而不是最喜欢的语言

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

        # 创建 DictReader
        reader = csv.DictReader(file)

        # 计数
        counts = {}

        # 遍历 CSV 文件，统计最喜爱的问题
        for row in reader:
            favorite = row["problem"]
            if favorite in counts:
                counts[favorite] += 1
            else:
                counts[favorite] = 1

    # 打印计数
    favorite = input("Favorite: ")
    if favorite in counts:
        print(f"{favorite}: {counts[favorite]}")

    ```

    注意，和 C 语言相比，Python 代码显得非常简洁。

## 关系数据库

-   Google、Twitter 和 Meta 都使用关系数据库来大规模存储他们的信息。
-   关系数据库以行和列的形式将数据存储在称为“表”的结构中。
-   SQL 支持四种类型的命令：

    ```
      Create
      Read
      Update
      Delete

    ```

-   这四个操作通常被称为 CRUD。
-   我们可以在终端通过输入 `sqlite3 favorites.db` 来创建一个 SQL 数据库。 在提示符出现后，按 `y` 确认创建 `favorites.db`。
-   你会看到不同的提示符，表示你现在已经进入了 `sqlite3` 程序。
-   输入 `.mode csv` 可以将 `sqlite3` 设置为 `csv` 模式。
-   然后，输入 `.import favorites.csv favorites` 从 `csv` 文件导入数据。 此时可能看起来没有任何变化！
-   我们可以输入 `.schema` 来查看数据库的结构。
-   可以使用 `SELECT columns FROM table` 语法从表中读取数据。
-   例如，输入 `SELECT * FROM favorites;` 会返回 `favorites` 表中的所有行。
-   使用 `SELECT language FROM favorites;` 命令可以获取 `language` 列的数据。
-   SQL 支持许多访问数据的命令，包括：

    ```
      AVG
      COUNT
      DISTINCT
      LOWER
      MAX
      MIN
      UPPER

    ```

-   例如，您可以输入 `SELECT COUNT(language) FROM favorites;`。 此外，输入 `SELECT DISTINCT(language) FROM favorites;` 可以获取数据库中所有不同的语言列表。 甚至可以输入 `SELECT COUNT(DISTINCT(language)) FROM favorites;` 来统计不同语言的种类数量。

    ```
    # 查询数据库中问题的受欢迎程度

    import csv

    from cs50 import SQL

    # 打开数据库
    db = SQL("sqlite:///favorites.db")

    # 提示用户输入他们最喜欢的问题
    favorite = input("Favorite: ")

    # 搜索标题
    rows = db.execute("SELECT COUNT(*) FROM favorites WHERE problem LIKE ?", "%" + favorite + "%")

    # 获取结果的第一行（也是唯一的一行）
    row = rows[0]

    # 打印查询结果
    print(row["COUNT(*)"])

    ```

-   SQL 提供了我们可以在查询中使用的其他命令：

    ```
      WHERE       -- 添加布尔表达式来过滤数据
      LIKE        -- 更灵活地过滤结果
      ORDER BY    -- 对结果进行排序
      LIMIT       -- 限制结果的数量
      GROUP BY    -- 将结果分组

    ```

    注意，`--` 在 SQL 中用于添加注释。

-   例如，我们可以执行 `SELECT COUNT(*) FROM favorites WHERE language = 'C';`。 会返回一个计数结果。
-   接下来，我们可以输入 `SELECT COUNT(*) FROM favorites WHERE language = 'C' AND problem = 'Mario';`。 请注意如何使用 `AND` 来缩小我们的结果范围。
-   类似地，我们可以执行 `SELECT language, COUNT(*) FROM favorites GROUP BY language;`。 这会生成一个临时表，显示每种语言的计数。
-   我们可以输入 `SELECT language, COUNT(*) FROM favorites GROUP BY language ORDER BY COUNT(*);` 来优化排序。
-   我们还可以使用 `INSERT` 将数据插入 SQL 数据库，格式如下：`INSERT INTO table (column...) VALUES(value, ...);`。
-   我们可以执行 `INSERT INTO favorites (language, problem) VALUES ('SQL', 'Fiftyville');`。
-   我们还可以使用 `UPDATE` 命令来更新您的数据。
-   例如，您可以执行 `UPDATE favorites SET language = 'C++' WHERE language = 'C';`。 这会将所有之前 'C' 作为首选语言的记录更新为 'C++'。
-   请注意这些查询功能强大。 因此，在实际环境中，您应该考虑谁有权执行某些命令。
-   `DELETE` 允许您删除数据的某些部分。 例如，您可以 `DELETE FROM favorites WHERE problem = 'Tideman';`。

## IMDb

-   IMDb 提供了一个人员、节目、编剧、明星、类型和评分的数据库。 图示展示了各个SQL表之间的关系，包括人员、节目、编剧、明星、类型和评分等。

    ![六个框代表各种 SQL 表，箭头绘制到每个框，显示它们彼此之间的许多关系](/img/cs50/cs50Week7Slide025.png "imdb 关系")

-   下载 [`shows.db`](https://github.com/cs50/lectures/blob/2022/fall/7/src7/imdb/shows.db) 后，您可以在终端窗口中执行 `sqlite3 shows.db`。
-   执行 `.schema` 后，您不仅会找到每个表，还会找到每个表中的各个字段。
-   如上图所示，`shows` 有一个 `id` 字段。 `genres` 表有一个 `show_id` 字段，该字段具有 `shows` 表之间共有的数据。
-   从图中可以看出，`show_id` 存在于所有表中。 在 `shows` 表中，它简称为 `id`。 所有字段之间的这个公共字段称为“键”。 主键用于标识表中的唯一记录。 外键用于通过指向另一个表中的主键来构建表之间的关系。
-   通过如上所述将数据存储在关系数据库中，可以更有效地存储数据。
-   在 _sqlite_ 中，我们有五种数据类型，包括：

    ```
      BLOB       -- 二进制大对象，由一系列1和0组成
      INTEGER    -- 整数
      NUMERIC    -- 用于特殊格式的数字，如日期
      REAL       -- 像浮点数
      TEXT       -- 用于字符串等

    ```

-   此外，可以设置列以添加特殊约束：

-   为了进一步说明这些表之间的关系，我们可以执行以下命令：`SELECT * FROM people LIMIT 10;`。 查看结果，我们可以执行 `SELECT * FROM shows LIMIT 10;`。 此外，我们可以执行 `SELECT * FROM stars LIMIT 10;`。 `show_id` 是此最终查询中的外键，因为 `show_id` 对应于 `shows` 中的唯一 `id` 字段。 `person_id` 对应于 `people` 列中的唯一 `id` 字段。
-   我们可以进一步使用这些数据来了解这些关系。 执行 `SELECT * FROM genres;`。 有很多类型！
-   我们可以通过执行 `SELECT * FROM genres WHERE genre = 'Comedy' LIMIT 10;` 来进一步限制这些数据。 从这个查询中，您可以看到有 10 个节目呈现出来。
-   您可以通过执行 `SELECT * FROM shows WHERE id = 626124;` 来发现这些节目是什么。
-   为了提高查询效率，我们可以执行以下操作

    ```
    SELECT title
    FROM shows
    WHERE id IN (
        SELECT show_id
        FROM genres
        WHERE genre = 'Comedy'
    )
    LIMIT 10;
    ```

    请注意，此查询将两个查询嵌套在一起。 内部查询由外部查询使用。

-   我们可以通过执行以下操作来进一步优化

    ```
    SELECT title
    FROM shows
    WHERE id IN (
        SELECT show_id
        FROM genres
        WHERE genre = 'Comedy'
    )
    ORDER BY title LIMIT 10;

    ```

-   如果想查找由史蒂夫·卡瑞尔主演的所有节目，该怎么办呢？可以执行`SELECT * FROM people WHERE name = 'Steve Carell';`，找到他的个人`id`。然后，利用这个`id`来查找他出演的许多`shows`。但是，逐一查找会很繁琐。如何通过嵌套查询来简化这个过程呢？请看下面的例子：

    ```
    SELECT title FROM shows WHERE id IN
      (SELECT show_id FROM stars WHERE person_id =
        (SELECT * FROM people WHERE name = 'Steve Carell'));

    ```

    请注意，这个较长的查询最终会产生一个结果，可以帮助我们找到问题的答案。

## `JOIN`（连接）

-   考虑以下两个表：

    ![两个框代表shows和genres表，箭头连接id和show id](/img/cs50/cs50Week7Slide030.png "主键和外键")

-   如何临时组合这些表呢？可以使用`JOIN`命令。
-   执行以下命令：

    ```
    SELECT * FROM shows
      JOIN ratings on shows.id = ratings.show_id
      WHERE title = 'The Office';

    ```

-   现在，可以看到所有名为《办公室》的剧集。
-   类似地，可以将`JOIN`应用到前面提到的史蒂夫·卡瑞尔查询，方法如下：

    ```
    SELECT title FROM people
      JOIN stars ON people.id = stars.person_id
      JOIN shows ON stars.show_id = shows.id
      WHERE name = `Steve Carell`;

    ```

    请注意，每个`JOIN`命令都指明了哪些列与哪些列相关联。

-   这也可以类似地实现如下：

    ```
    SELECT title FROM people, stars, shows
    WHERE people.id = stars.person_id
    AND stars.show_id = shows.id
    AND name = 'Steve Carell';

    ```

    请注意，这实现了相同的结果。

-   可以使用通配符`%`运算符查找所有名字以`Steve C`开头的人。例如，可以使用以下语法：`SELECT * FROM people WHERE name LIKE 'Steve C%';`

## 索引

-   虽然关系型数据库比使用`CSV`文件更快、更强大，但仍然可以使用_索引_来优化表中的数据。
-   索引可用于加速我们的查询。
-   我们可以通过在`sqlite3`中执行`.timer on`来跟踪查询的速度。
-   为了理解索引如何加速查询，请运行以下命令：`SELECT * FROM shows WHERE title = 'The Office';` 并注意查询执行后所显示的时间。
-   然后，我们可以使用语法`CREATE INDEX title_index on shows (title);`创建一个索引。这告诉`sqlite3`创建一个索引，并执行一些与此列`title`相关的特殊的底层优化。
-   这将创建一个名为_B树_的数据结构，它类似于二叉树。但与二叉树不同的是，它可以拥有超过两个子节点。

    ![顶部的一个节点，从中发出四个子节点，在它下面，有一个节点发出三个子节点，另一个节点发出两个子节点，另一个节点发出两个子节点，另一个节点发出三个子节点](/img/cs50/cs50Week7Slide039.png "b 树")

-   运行查询`SELECT * FROM shows WHERE title = 'The Office';`，你会注意到查询运行得更快了！
-   不幸的是，索引所有列会导致占用更多的存储空间。因此，为了提高速度，需要做出权衡。

## 在 Python 中使用 SQL

-   为了方便在本课程中使用 SQL，可以在代码中使用 CS50 库，如下所示：

-   与之前使用 CS50 库类似，该库可以帮助简化在 Python 代码中使用 SQL 的复杂步骤。
-   你可以在[文档](https://cs50.readthedocs.io/libraries/cs50/python/#cs50.SQL)中阅读更多关于 CS50 库的 SQL 功能。
-   回顾一下之前在`favorites.py`中编写的代码，它应该是这样的：

    ```
    # 收藏问题而不是收藏语言

    import csv

    # 打开 CSV 文件
    with open("favorites.csv", "r") as file:

    # 创建字典读取器
    reader = csv.DictReader(file)

    # 计数
    counts = {}

    # 遍历CSV文件，统计最爱项目
    for row in reader:
        favorite = row["problem"]
        if favorite in counts:
            counts[favorite] += 1
        else:
            counts[favorite] = 1

    # 打印统计结果
    favorite = input("Favorite: ")
    if favorite in counts:
        print(f"{favorite}: {counts[favorite]}")

    ```

-   请按照以下方式修改您的代码：

    ```
    # 搜索数据库中问题的热度

    import csv

    from cs50 import SQL

    # 打开数据库
    db = SQL("sqlite:///favorites.db")

    # 提示用户输入最爱项目
    favorite = input("Favorite: ")

    # 搜索标题
    rows = db.execute("SELECT COUNT(*) FROM favorites WHERE problem LIKE ?", "%" + favorite + "%")

    # 获取第一行
    row = rows[0]

    # 打印热度
    print(row["COUNT(*)"])

    ```

    请注意，`db = SQL("sqlite:///favorites.db")` 这行代码向 Python 提供数据库文件的位置。然后，以 `rows` 开头的这行代码使用 `db.execute` 执行 SQL 命令。实际上，这个命令会将引号内的 SQL 语法传递给 `db.execute` 函数。此外，请注意，`rows` 会以字典列表的形式返回。在这种情况下，只会返回一个结果，即一行数据，并以字典的形式存储在 `rows` 列表中。

## 竞态条件

-   使用 SQL 有时会导致一些问题。
-   您可以想象这样一种情况：多个用户可以同时访问同一个数据库并执行命令。
-   这可能会导致代码被其他人的操作中断而出现故障。这可能会导致数据丢失。
-   内置的 SQL 功能（如 `BEGIN TRANSACTION`、`COMMIT` 和 `ROLLBACK`）有助于避免其中一些竞态条件问题。

## SQL 注入攻击

-   现在，仍然考虑上面的代码，您可能想知道上面的 `?` 问号是做什么用的。在 SQL 的实际应用中，可能会出现一种问题，叫做_注入攻击_。注入攻击是指恶意行为者可以输入恶意 SQL 代码。
-   例如，考虑以下登录屏幕：

    ![包含用户名和密码输入框的哈佛 Key 登录界面](/img/cs50/cs50Week7Slide051.png "哈佛密钥登录屏幕")

-   如果没有在我们自己的代码中采取适当的保护措施，不良行为者可能会运行恶意代码。考虑以下事项：

    ```
    rows = db.execute("SELECT COUNT(*) FROM favorites WHERE problem LIKE ?", "%" + favorite + "%")

    ```

    请注意，由于 `?` 存在，因此可以在查询盲目接受 `favorite` 之前对其运行验证。

-   切记不要像上面那样在查询语句中使用格式化字符串，也不要盲目信任用户的输入。
-   使用 CS50 库，它会对输入进行_清理_，移除潜在的恶意字符。

## 总结

在本节课中，您学习了更多与 Python 相关的语法。此外，您还学习了如何将这些知识与平面文件和关系数据库形式的数据集成。最后，您学习了 _SQL_。具体来说，我们讨论了：...

-   平面文件数据库
-   关系数据库
-   SQL
-   `JOIN`
-   索引
-   在 Python 中使用 SQL
-   竞态条件
-   SQL 注入攻击

下节课见！
```