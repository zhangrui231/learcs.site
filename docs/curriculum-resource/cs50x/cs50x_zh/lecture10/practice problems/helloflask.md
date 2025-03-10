---
sidebar_position: 1
description: cs50x 实践项目：helloflask
title: helloflask
---

# 你好，Flask - CS50x 2023

## [学习目标](#learning-goals)

-   构建一个简单的 Flask 应用，理解框架的使用方法
-   熟悉 Jinja 模板引擎，它常与 Flask 搭配使用

![FlaskLogo](/img/cs50/flask-logo.png )

## [背景](#background)

[Flask](https://flask.palletsprojects.com/)，一个用于 Web 开发的[微框架](https://en.wikipedia.org/wiki/Microframework)，上手时可能会有些困惑。它包含多种不同类型的文件，并且这些文件必须位于特定的文件夹中。在这个问题中，我们将从最简单的形式开始——一个单独的 Python 文件。之后，我们将逐步创建一个功能完善的 Web 应用！

## [入门](#getting-started)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/9/helloflask.zip`，然后按 Enter 键，以便在您的 codespace 中下载一个名为 `helloflask.zip` 的 zip 文件。请务必注意 `wget` 命令后 URL 之间的空格以及其他字符的正确性！
4.  现在执行 `unzip helloflask.zip` 以创建一个名为 `helloflask` 的文件夹。
5.  现在可以删除 ZIP 文件，执行 `rm helloflask.zip` 命令，并在提示符后输入 `y` 并回车确认删除。

## [实现细节](#implementation-details)

最简单的 Flask 应用程序仅使用一个文件 `app.py`。这会创建一个 HTML 页面，显示 “Hello” 字样。将以下内容添加到 `app.py` 以开始。

```
from flask import Flask

app = Flask(__name__)


@app.route("/")
def index():
    return "Hello, World!"

```

这段代码首先从 `flask` 库导入 `Flask`。虽然我们不需要在这里深入研究，但 `Flask` 是程序员所说的“[类](https://cs50.harvard.edu/python/2022/notes/8/#classes)”。可以将其理解为我们将要构建的应用的蓝图。`app = Flask(__name__)` 这一行告诉 Python 从模板创建一个特定的应用程序，以后称为“app”。为了创建应用实例，我们将当前 Python 文件的名称（`__name__`）传递给 `Flask` 类，这样应用才能找到后续添加的文件。在这种情况下，为了保持一致性，文件名也为“app”。

你写的代码中，最让人费解的可能就是这一行：

这种函数称为装饰器。装饰器允许你扩展基本函数（例如 `app.route`）的功能，通过添加自定义的行为（即装饰器后定义的函数）。如果想深入了解装饰器，可以参考相关资料；或者，也可以先直接使用。

这行代码告诉 Flask，当收到对 “/” 的 HTTP 请求时，执行 `index` 函数。注意，如果将函数重命名为 `homepage`，这行代码就会指示 Flask：每次收到对 “/” 的 HTTP 请求时，执行 `homepage` 函数。
请注意，`index` 函数会返回一段文本，即“Hello, World!”。当用户请求访问“/”路由时，Flask 会将这段文本呈现给用户。返回的文本可以是（通常也确实是）整个 HTML 文件的内容，浏览器会对其进行相应渲染。但现在为了简单起见，我们先只返回一段文本。

要运行你的应用，请在终端中输入 `flask run`，你会得到一个链接，点击后即可访问应用，这和运行 `http-server` 类似。你已经编写了一个 Flask 应用！尝试返回不同的文本，例如 `<h1>Hello, World!</h1>`。你会看到什么变化呢？

### [模板](#templates)

为了更好地分离关注点，我们不直接在 Python 程序中编写 HTML 代码，而是将其放到单独的文件中。考虑到应用中可能包含多个相似的 HTML 文件，我们可以创建一个 `layout.html` 文件作为布局模板，供其他 HTML 文件“继承”。“继承” HTML 文件指的是保留其所有内容，并添加特定于页面的自定义内容。

按照 Flask 的惯例，所有 HTML 文件都应该放在 `templates` 文件夹中。在 `helloflask` 文件夹中，使用 `mkdir templates` 命令创建一个名为 `templates` 的文件夹，用于存放所有 HTML 文件。

在 `templates` 文件夹中，创建一个如下所示的 `layout.html` 文件：

```html
<!DOCTYPE html>

<html lang="en">
    <head>
        <title>Hello, Flask</title>
    </head>
    <body>
        <h1>Hello, Flask</h1>
        {% block body %}{% endblock %}
    </body>
</html>
```

`{% block body %}{% endblock %}` 语法来自 [Jinja](https://palletsprojects.com/p/jinja/)，它是 Python 的一个“模板引擎”。正因为有了 `{% block body %}{% endblock %}` 这一行，它才成为了一个布局文件。如果另一个 HTML 文件继承了 `layout.html`，并定义了一个名为“body”的块，那么该块的内容将会被插入到 `layout.html` 的相应位置。一个布局文件可以包含任意数量的块。只需给每个块一个不同的名称。

现在创建 `index.html`，使其继承模板 `layout.html`，如下所示：

```html
{% extends "layout.html" %}

{% block body %}
    <p>Next we'll put a form here and get some POST action!</p>
{% endblock %}
```

最后，让我们回到 `app.py`，看看这些修改会带来什么效果。在初始导入中，我们将需要来自 Flask 的更多函数（如下所示）。然后，将直接返回文本替换为调用 Flask 的 `render_template` 函数。`render_template` 函数的作用是对 `index.html` 进行预处理，使其包含从 `layout.html` “继承”的 HTML 内容，然后再将其发送给浏览器。

```python
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/")
def index():
    return render_template("index.html")
```

现在运行你的应用（输入 `flask run`！），你会发现应用的功能更丰富了。不过，它还不是真正意义上的互动应用！

### [表单](#forms)

HTML 表单允许用户在输入字段中输入数据，并将数据发送到服务器，通常使用 HTTP 协议的 POST 方法。你可以在[这里](https://www.w3schools.com/html/html_forms.asp)了解更多关于 HTML 表单的相关信息。

向 `index.html` 添加一个表单，使其看起来像这样：
```
{% extends "layout.html" %}

{% block body %}
    <form action="/" method="post">
        你最喜欢的颜色是什么？
        <select name="color">
            <option value="red">哈佛深红</option>
            <option value="blue">耶鲁蓝</option>
        </select>
        <button type="submit">提交</button>
    </form>
{% endblock %}

```

请注意，每个表单元素都有一个 _name_ 和一个 _value_。元素的 name 属性值是我们将用来引用该元素的名称。它的 value 属性值是表单提交时所传递的值。当表单提交时，这些 name 和 value 值会被传递到 `app.py` 中供我们使用。

运行你的应用程序，访问 `/` 路由，然后提交表单。糟糕！你可能会看到“Method not allowed”的错误提示。所以我们首先需要确保 Flask 允许在 `/` 上使用 POST 方法。

### [POST](#post)

在 `app.py` 中，我们需要调整我们的路由来处理 POST 请求。这是我们新的 `app.py` 的样子。

```
from flask import Flask, render_template, request

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "GET":
        return render_template("index.html")
    else:
        print("表单已提交！")
        color = request.form.get("color")
        return render_template("color.html", color=color)

```

这个例子中包含一些逻辑：如果用户提交 GET 请求，我们将向他们展示基本的 `index.html`，其中包含一个要提交的表单。但是，如果他们提交 POST 请求，我们将做几件不同的事情：

-   为了方便调试，我们可以在终端中 `print` 出“Form submitted!”。一旦确认程序运行正常，就可以删除这行代码。
-   通过 `color = request.form.get("color")` 将 “color” 输入的 _value_ 值存储在名为 `color` 的变量中。
-   渲染一个新的 HTML 文件 `color.html`，并将 `color` 变量的值以相同的名称 `color` 传递到该文件中。

让我们创建 `color.html` 以使我们的应用程序工作：

```
{% extends "layout.html" %}

{% block body %}
    <p style="color: {{ color }}">你最喜欢的颜色是 {{ color }}。</p>
{% endblock %}

```

请注意，我们如何可以将 `color` 的值插入到我们想要的 HTML 中的任何位置——无论是作为句子中的文本，还是作为某些 CSS 属性的值的占位符。

但是，我们可能希望添加一些额外的输入验证，而不是简单地信任我们的用户通过 POST 仅发送值“blue”或“red”。你可以添加哪些代码来验证用户提交的颜色是否有效？

## [如何测试你的代码](#how-to-test-your-code)

你的程序应该能达到上述示例中的效果。

本题不提供 `check50` 检查。

## [如何提交](#how-to-submit)

本题为练习题，无需提交。
