---
sidebar_position: 4
description: lecture9 Flask Lab | 实验
title: Lab
---

# Lab 9：生日管理 - CS50x 2023

创建一个Web应用来记录朋友们的生日信息。

![生日网站截图](/img/cs50/birthdays.png )

## 入门

打开 [VS Code](https://cs50.dev/)。

首先，点击终端窗口，然后单独执行 `cd` 命令。你应该会看到类似如下的提示符。

点击该终端窗口，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/9/birthdays.zip

```

然后按 Enter 键，以便在你的 codespace 中下载一个名为 `birthdays.zip` 的 ZIP 文件。请注意`wget`命令与URL之间的空格，以及其他任何字符错误！

现在执行

来创建一个名为 `birthdays` 的文件夹。现在你可以删除该ZIP文件，执行命令如下：

并在提示符后输入`y`并回车，删除已下载的ZIP文件。

现在输入

然后按 Enter 键，进入该目录。你的提示符现在应该类似于下面的内容。

如果一切顺利，你应该执行

你应该看到以下文件和文件夹：

```
app.py  birthdays.db  static/  templates/

```

如果你遇到任何问题，请再次按照相同的步骤操作，看看是否可以确定你出错的地方！

## 理解

在 `app.py` 中，你将找到一个 Flask Web 应用程序的开头。该应用有一个路由(`/`)，可以处理`POST` (对应`if`语句) 和 `GET` (对应`else`语句) 请求。目前，当通过 `GET` 请求 `/` 路由时，将呈现 `index.html` 模板。当通过 `POST` 请求 `/` 路由时，用户将通过 `GET` 重定向回 `/`。

`birthdays.db` 是一个 SQLite 数据库，其中包含一个表 `birthdays`，该表有四列：`id`、`name`、`month` 和 `day`。表中已经存在一些数据行，最终你需要实现向该表插入数据的功能。

在 `static` 目录中，有一个 `styles.css` 文件，其中包含此 Web 应用程序的 CSS 代码。无需编辑此文件，但如果你愿意，也可以编辑！

在 `templates` 目录中，有一个 `index.html` 文件，当用户查看你的 Web 应用程序时，将呈现该文件。

## 实现细节

完成Web应用的开发，实现用户存储和管理生日信息的功能。
-   当通过`GET`方法请求`/`路由时，您的Web应用程序应该在一个表格中展示数据库中所有人的姓名和生日。
    -   首先，在`app.py`中，在`GET`请求的处理逻辑中添加代码，以查询`birthdays.db`数据库中的所有生日。将所有数据传递给`index.html`模板。
    -   然后，在`index.html`中，添加逻辑，将每个生日渲染成表格中的一行。每行应包含两列：一列显示姓名，另一列显示生日。
-   当通过`POST`方法请求`/`路由时，您的Web应用程序应该向数据库添加新的生日信息，然后重新渲染索引页面。
    -   首先，在`index.html`中，添加一个HTML表单。该表单应允许用户输入姓名、生日月份和生日日期。确保表单通过`POST`方法提交到`/` (其`action`属性)。
    -   然后，在`app.py`中，在`POST`请求的处理逻辑中添加代码，根据用户提供的数据，将新的数据行`INSERT`到`birthdays`表中。

可选地，您还可以：

-   添加删除、编辑生日条目的功能。
-   添加您选择的任何其他功能！

### 演练

### 提示

-   请记住，您可以调用 `db.execute` 以在 `app.py` 中执行 SQL 查询。
    -   如果您调用 `db.execute` 来运行 `SELECT` 查询，请记住该函数将返回一个字典列表，其中每个字典代表查询返回的一行。
-   您可能会发现，在`index`函数中，将更多数据传递给`render_template()`会很有帮助，
    以便在`index.html`模板中访问生日数据。
-   请记住，`tr`标签用于创建表格行，`td`标签用于创建表格单元格。
-   请记住，使用 Jinja，您可以在 `index.html` 文件中创建一个 [`for` 循环](https://jinja.palletsprojects.com/en/2.11.x/templates/#for)。
-   在 `app.py` 中，您可以通过 `request.form.get(field)` 获取用户表单提交的 `POST` 数据，其中 `field` 是一个字符串，表示表单中 `input` 的 `name` 属性。
    -   例如，如果在 `index.html` 中，您有一个 `<input name="foo" type="text">`，您可以在 `app.py` 中使用 `request.form.get("foo")` 来提取用户的输入。

不知道如何解决？

### 测试

这个实验没有`check50`检查! 但请务必通过添加一些生日并确保数据按预期显示在您的表格中来测试您的 Web 应用程序。

在终端中，进入`birthdays`目录并运行`flask run`，启动Web服务器来运行您的Flask应用.

## 如何提交

在您的终端中，执行以下命令以提交您的工作。

```
submit50 cs50/labs/2023/x/birthdays

```