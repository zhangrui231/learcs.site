---
sidebar_position: 1
description: lecture9 Flask Notes | 第九讲 Flask 笔记
title: 笔记
---

# 第九讲 - CS50x 2023

- [第九讲 - CS50x 2023](#第九讲---cs50x-2023)
  - [欢迎！](#欢迎)
  - [从静态到动态](#从静态到动态)
  - [Flask](#flask)
  - [布局](#布局)
  - [POST](#post)
  - [Frosh IMs](#frosh-ims)
  - [Flask 和 SQL](#flask-和-sql)
  - [会话](#会话)
  - [商店](#商店)
  - [API](#api)
  - [JSON](#json)
  - [总结一下](#总结一下)

## 欢迎！

-   在过去的几周里，您学习了许多编程语言、技术和策略。
-   实际上，这门课与其说是 C 语言课或 Python 语言课，不如说是一门编程课。 这样，大家可以更好地掌握未来的技术趋势。
-   在过去的几周里，你已经学会了*如何学习*编程的方法。
-   今天，我们将从 HTML 和 CSS 转到结合 HTML、CSS、SQL、Python 和 JavaScript，以便您可以创建自己的 Web 应用程序。

## 从静态到动态

-   到目前为止，您看到的所有 HTML 都是预先编写的并且是静态的。
-   过去，当您访问一个页面时，浏览器会下载一个 HTML 页面，然后您就可以查看它。
-   动态页面指的是 Python 等语言能够实时生成 HTML 文件的能力，从而可以根据用户选择的选项来生成不同的网页。
-   之前大家用过`http-server`来托管网页。 今天，我们会使用一个新的服务器，它可以解析网址，并根据URL来执行相应的操作。

## Flask

-   _Flask_ 是一个第三方库，允许您使用 Python 中的 Flask 框架托管 Web 应用程序。
-   您可以通过执行 `flask run` 来运行 Flask。
-   为此，您需要一个名为 `app.py` 的文件和一个名为 `templates` 的文件夹。
-   要开始使用，请创建一个名为 `templates` 的文件夹，并创建一个名为 `index.html` 的文件，其中包含以下代码：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>hello</title>
        </head>
        <body>
            hello, {{ name }}
        </body>
    </html>

    ```

    注意双花括号`{{ name }}`，这是一个占位符，稍后会被Flask服务器替换成具体的内容。

-   然后，在与 `templates` 文件夹相同的文件夹中，创建一个名为 `app.py` 的文件，并添加以下代码：
    ```

    # 问候用户

    from flask import Flask, render_template, request

    app = Flask(__name__)
    @app.route("/")
    def index():
        return render_template("index.html", name=request.args.get("name", "world"))

    ```

    请注意，此代码将 `app` 定义为 Flask 应用程序。然后，它将 `app` 的 `/` 路由定义为返回 `index.html` 的内容，并带有 `name` 参数。默认情况下，`request.args.get` 函数会查找用户通过URL传递的`name`参数。 如果没有提供，则默认使用`world`。

-   最后，在与 `app.py` 相同的文件夹中添加一个名为 `requirements.txt` 的最终文件，该文件只有一行代码：

    请注意，此文件中只出现 `Flask`。

-   您可以通过在终端窗口中键入 `flask run` 来运行此文件。如果 Flask 没有运行，请确保您在上面的每个文件中语法正确。此外，如果 Flask 无法运行，请确保您的文件按以下方式组织：

    ```
    /templates
        index.html
    app.py
    requirements.txt

    ```

    一旦你让它运行起来，你会被提示点击一个链接。导航到该网页后，尝试在浏览器的 URL 栏中的基本 URL 中添加 `?name=[你的名字]`。

-   为了改善用户体验，我们知道大多数用户不会直接在地址栏里输入参数。 开发者通常会使用网页表单让用户填写信息。 因此，我们可以修改`index.html`文件如下:

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>hello</title>
        </head>
        <body>
            <form action="/greet" method="get">
                <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
                <button type="submit">Greet</button>
            </form>
        </body>
    </html>

    ```

    请注意，这里创建了一个表单，用于获取用户姓名，并将其提交到 `/greet` 路由。

-   接下来，我们可以这样修改 `app.py` 文件：

    ```
    # 添加一个表单，第二个路由

    from flask import Flask, render_template, request

    app = Flask(__name__)
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/greet")
    def greet():
        return render_template("greet.html", name=request.args.get("name", "world"))

    ```

    请注意，默认路径会显示一个表单，用户可以在其中输入姓名。`/greet` 路由会将输入的 `name` 值传递到相应的网页。

-   为了完成这个功能，您还需要创建另一个名为 `greet.html` 的模板文件，代码如下：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>hello</title>
        </head>
        <body>
            hello, {{ name }}
        </body>
    </html>

    ```

    请注意，这个路由现在会向用户显示包含问候语和用户姓名的页面。


## 布局

-   `index.html` 和 `greet.html` 这两个页面有很多重复的内容。如果能让页面的主体内容各不相同，而其他部分沿用相同的布局，岂不是更好？
-   首先，创建一个新的模板文件，命名为 `layout.html`，并添加以下代码：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>hello</title>
        </head>
        <body>
            {% block body %}{% endblock %}
        </body>
    </html>

    ```

    请注意，`{% block body %}{% endblock %}` 标签允许从其他 HTML 文件插入代码片段。

-   接下来，按照下面的方式修改 `index.html` 文件：

    ```
    {% extends "layout.html" %}

    {% block body %}

        <form action="/greet" method="get">
            <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
            <button type="submit">Greet</button>
        </form>

    {% endblock %}

    ```

    请注意，`{% extends "layout.html" %}` 这一行告诉服务器该页面应该继承 `layout.html` 的布局。而 `{% block body %}{% endblock %}` 则定义了要插入到 `layout.html` 文件中 `body` 区域的代码。

-   请注意，修改后的代码更加简洁。

## POST

-   可以想象，在某些情况下使用 `get` 方法是不安全的，因为用户名和密码可能会暴露在 URL 中。
-   我们可以使用 `post` 方法来解决这个问题。修改 `app.py` 文件如下：

    ```
    # 切换到 POST

    from flask import Flask, render_template, request

    app = Flask(__name__)
    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/greet", methods=["POST"])
    def greet():
        return render_template("greet.html", name=request.form.get("name", "world"))

    ```

    请注意，我们为 `/greet` 路由添加了 `POST` 方法，并且使用了 `request.form.get` 来获取表单数据，而不是 `request.args.get`。

-   这告诉服务器在虚拟信封的_更深层_去寻找数据，避免`post`请求中的信息直接显示在URL中。
-   不过，还可以通过将`get`和`post`请求合并到一个路由来进一步优化这段代码。为此，请按如下方式修改`app.py`：

    ```
    # 使用单个路由

    from flask import Flask, render_template, request

    app = Flask(__name__)
    @app.route("/", methods=["GET", "POST"])
    def index():
        if request.method == "POST":
            return render_template("greet.html", name=request.form.get("name", "world"))
        return render_template("index.html")

    ```

    请注意，`get`和`post`请求的处理都在同一个路由中完成。但是，`request.method`会根据用户请求类型进行正确的路由。

## Frosh IMs

-   Frosh IMs，也称为 _froshims_，是一个Web应用程序，允许学生注册参加大学内部的体育活动。
-   在终端窗口中输入命令 `mkdir froshims` 来创建一个名为 froshims 的文件夹。然后，键入 `cd froshims` 以浏览到此文件夹。在其中，通过键入 `mkdir templates` 创建一个名为 templates 的目录。最后，键入 `code app.py` 并编写如下代码：

    ```
    # 使用选择菜单实现注册表单

    from flask import Flask, render_template, request
    app = Flask(__name__)

    SPORTS = [
        "Basketball",
        "Soccer",
        "Ultimate Frisbee"
    ]

    @app.route("/")
    def index():
        return render_template("index.html", sports=SPORTS)

    @app.route("/register", methods=["POST"])
    def register():

        # 验证提交
        if not request.form.get("name") or request.form.get("sport") not in SPORTS:
            return render_template("failure.html")

        # 确认注册
        return render_template("success.html")

    ```

    请注意，如果 `name` 或 `sport` 字段未正确填写，程序会提供一个 `failure` 选项，向用户显示错误信息。

-   接下来，在 `templates` 文件夹中创建 `index.html` 文件 (通过输入命令 `code templates/index.html`)，并编写以下代码：

    ```
    {% extends "layout.html" %}

    {% block body %}
        <h1>Register</h1>
        <form action="/register" method="post">
            <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
            <select name="sport">
                <option disabled selected>Sport</option>
                {% for sport in sports %}
                    <option value="{{ sport }}">{{ sport }}</option>
                {% endfor %}
            </select>
            <button type="submit">Register</button>
        </form>
    {% endblock %}

    ```

-   接下来，通过键入 `code templates/layout.html` 创建一个名为 `layout.html` 的文件，并编写如下代码：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>froshims</title>
        </head>
        <body>
            {% block body %}{% endblock %}
        </body>
    </html>

    ```

-   第四，创建 `templates/success.html` 文件，内容如下：

    ```
    {% extends "layout.html" %}

    {% block body %}
        You are registered!
    {% endblock %}

    ```

-   最后，在 templates 中创建一个名为 `failure.html` 的文件，如下所示：

    ```
    {% extends "layout.html" %}

    {% block body %}
        You are not registered!
    {% endblock %}

    ```

-   您可以想象我们可能希望接受许多不同注册者的注册。我们可以按如下方式改进 `app.py`：

    ```
    # 实现注册表单，将注册者存储在字典中，并带有错误消息

    from flask import Flask, redirect, render_template, request

    app = Flask(__name__)
    REGISTRANTS = {}
    SPORTS = [
        "Basketball",
        "Soccer",
        "Ultimate Frisbee"
    ]

    @app.route("/")
    def index():
        return render_template("index.html", sports=SPORTS)

    @app.route("/register", methods=["POST"])
    def register():

    # 校验姓名
        name = request.form.get("name")
        if not name:
            return render_template("error.html", message="姓名未填写")

        # 校验运动项目
        sport = request.form.get("sport")
        if not sport:
            return render_template("error.html", message="运动项目未选择")
        if sport not in SPORTS:
            return render_template("error.html", message="无效的运动项目")

        # 保存注册者信息
        REGISTRANTS[name] = sport

        # 注册成功，正在跳转...
        return redirect("/registrants")

    @app.route("/registrants")
    def registrants():
        return render_template("registrants.html", registrants=REGISTRANTS)

    ```

    请注意，程序使用名为 `REGISTRANTS` 的字典来记录每位注册者选择的运动项目。同时，`registrants=REGISTRANTS` 将注册者信息字典传递给模板。

-   此外，创建一个名为 `registrants.html` 的新模板，如下所示：

    ```
    {% extends "layout.html" %}

    {% block body %}
        <h1>注册者</h1>
        <table>
            <thead>
                <tr>
                    <th>姓名</th>
                    <th>运动项目</th>
                </tr>
            </thead>
            <tbody>
                {% for name in registrants %}
                    <tr>
                        <td>{{ name }}</td>
                        <td>{{ registrants[name] }}</td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    {% endblock %}

    ```

    请注意，`{% for name in registrants %}...{% endfor %}` 将遍历每个注册者。这使得在动态网页上展示注册信息成为可能。

-   执行 `flask run` 并输入许多姓名和运动项目，您可以浏览到 `/registrants` 以查看已记录的数据。
-   现在，您已经创建了一个Web应用程序！ 但是，存在一些安全漏洞！ 因为一切都在客户端，所以攻击者可以修改HTML代码，从而入侵网站。 此外，如果服务器关闭，此数据将不会持久存在。 是否有某种方法可以使我们的数据即使在服务器重新启动后仍然存在？

## Flask 和 SQL

-   正如我们之前学习的，Python可以与SQL数据库交互，我们可以结合 Flask、Python 和 SQL 的强大功能来创建一个 Web 应用程序，其中数据将持久存在！
-   要实现这一点，您需要执行多个步骤。
-   首先，请按以下方式修改 `requirements.txt`：

-   请按以下方式修改 `index.html`：

    ```
    {% extends "layout.html" %}

    {% block body %}
        <h1>注册</h1>
        <form action="/register" method="post">
            <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
            {% for sport in sports %}
                <input name="sport" type="radio" value="{{ sport }}"> {{ sport }}
            {% endfor %}
            <button type="submit">注册</button>
        </form>
    {% endblock %}

    ```

-   请按以下方式修改 `layout.html`：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>froshims</title>
        </head>
        <body>
            {% block body %}{% endblock %}
        </body>
    </html>

    ```

-   确保 `failure.html` 显示如下：

    ```
    {% extends "layout.html" %}

    {% block body %}
        注册失败！
    {% endblock %}

    ```

-   修改 `registrants.html` 以显示如下：

    ```
    {% extends "layout.html" %}
   
    {% block body %}
            <h1>已注册用户</h1>
            <table>
                <thead>
                    <tr>
                        <th>姓名</th>
                        <th>运动</th>
                        <th>操作</th>
                    </tr>
                </thead>
            <tbody>
                {% for registrant in registrants %}
                    <tr>
                        <td>{{ registrant.name }}</td>
                        <td>{{ registrant.sport }}</td>
                        <td>
                            <form action="/deregister" method="post">
                                <input name="id" type="hidden" value="{{ registrant.id }}">
                                <button type="submit">取消注册</button>
                            </form>
                        </td>
                    </tr>
                {% endfor %}
            </tbody>
        </table>
    {% endblock %}

    ```

    注意，`registrant.id` 是一个隐藏值，可在 `app.py` 中使用。

-   接下来，修改 `app.py` 如下：

    ```
    # 实现一个注册表单，将注册者存储在 SQLite 数据库中，并支持取消注册

    from cs50 import SQL
    from flask import Flask, redirect, render_template, request

    app = Flask(__name__)

    db = SQL("sqlite:///froshims.db")

    SPORTS = [
        "Basketball",
        "Soccer",
        "Ultimate Frisbee"
    ]

    @app.route("/")
    def index():
        return render_template("index.html", sports=SPORTS)

    @app.route("/deregister", methods=["POST"])
    def deregister():

        # Forget registrant
        id = request.form.get("id")
        if id:
            db.execute("DELETE FROM registrants WHERE id = ?", id)
        return redirect("/registrants")

    @app.route("/register", methods=["POST"])
    def register():

        # Validate submission
        name = request.form.get("name")
        sport = request.form.get("sport")
        if not name or sport not in SPORTS:
            return render_template("failure.html")

        # Remember registrant
        db.execute("INSERT INTO registrants (name, sport) VALUES(?, ?)", name, sport)

        # Confirm registration
        return redirect("/registrants")

    @app.route("/registrants")
    def registrants():
        registrants = db.execute("SELECT * FROM registrants")
        return render_template("registrants.html", registrants=registrants)

    ```

    请注意，使用了 `cs50` 库。包含一个用于 `POST` 请求的 `register` 路由。此路由从注册表单获取姓名和运动，并执行 SQL 查询将它们添加到 `registrants` 表。`deregister` 路由到一个 SQL 查询，该查询获取用户 `id` 并用它来取消注册。

-   您可以在 [Flask 文档](https://flask.palletsprojects.com/) 中阅读更多内容。

## 会话

-   虽然上述代码对后台管理有用，允许管理员增删用户，但在公共服务器上实施并不安全。
-   恶意用户可能通过点击取消注册按钮，冒充其他用户并删除其注册信息。
-   像 Google 这样的 Web 服务使用登录凭据来确保用户只能访问正确的数据。
-   实际上，我们可以使用 Cookie 实现这一点。这样，您的计算机就能与服务器通信，表明“我是一个已登录的授权用户”。
-   以最简单的形式，我们可以通过创建一个名为 `login` 的文件夹，然后添加以下文件来实现这一点。
-   首先，创建一个名为 `requirements.txt` 的文件，其内容如下：

    请注意，除了 `Flask` 之外，我们还包括 `Flask-Session`，这是支持登录会话所必需的。

-   其次，在 `templates` 文件夹中，创建一个名为 `layout.html` 的文件，其内容如下：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>store</title>
        </head>
        <body>
            {% block body %}{% endblock %}
        </body>
    </html>

    ```

    注意，这是一个非常简单的布局，包含标题和正文。
-   第三，在 `templates` 文件夹中创建一个名为 `index.html` 的文件，内容如下：

    ```
    {% extends "layout.html" %}

    {% block body %}

        {% if session["name"] %}
            您已登录为 {{ session["name"] }}。<a href="/logout">退出</a>。
        {% else %}
            您尚未登录。<a href="/login">登录</a>。
        {% endif %}

    {% endblock %}

    ```

    请注意，此文件会检查是否存在 `session["name"]`。如果存在，则显示欢迎消息；否则，建议您前往登录页面。

-   第四，创建一个名为 `login.html` 的文件，并添加以下代码：

    ```
    {% extends "layout.html" %}

    {% block body %}

        <form action="/login" method="post">
            <input autocomplete="off" autofocus name="name" placeholder="Name" type="text">
            <button type="submit">Log In</button>
        </form>

    {% endblock %}

    ```

    请注意，这是个基本的登录页面布局。

-   最后，在 `login` 文件夹中创建一个名为 `app.py` 的文件，并编写以下代码：

    ```
    from flask import Flask, redirect, render_template, request, session
    from flask_session import Session

    # Configure app
    app = Flask(__name__)

    # Configure session
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"
    Session(app)

    @app.route("/")
    def index():
        if not session.get("name"):
            return redirect("/login")
        return render_template("index.html")

    @app.route("/login", methods=["GET", "POST"])
    def login():
        if request.method == "POST":
            session["name"] = request.form.get("name")
            return redirect("/")
        return render_template("login.html")

    @app.route("/logout")
    def logout():
        session["name"] = None
        return redirect("/")

    ```

    请注意文件顶部修改过的 `imports` 语句，包括 `session`，这将允许您支持会话。最重要的是，注意 `session["name"]` 在 `login` 和 `logout` 路由中的用法。`login` 路由会将用户提供的登录名赋值给 `session["name"]`，而在 `logout` 路由中，注销操作则是通过将 `session["name"]` 设置为 `None` 实现的。

-   您可以在 [Flask 文档](https://flask.palletsprojects.com/en/2.2.x/api/?highlight=session#flask.session) 中阅读有关会话的更多信息。

## 商店

-   接下来，我们来看最后一个利用 Flask 会话功能的例子。
-   我们来看一下 `app.py` 文件中关于 `store` 的代码。显示了以下代码：

    ```
    from cs50 import SQL
    from flask import Flask, redirect, render_template, request, session
    from flask_session import Session

    # Configure app
    app = Flask(__name__)

    # Connect to database
    db = SQL("sqlite:///store.db")

    # Configure session
    app.config["SESSION_PERMANENT"] = False
    app.config["SESSION_TYPE"] = "filesystem"
    Session(app)

    @app.route("/")
    def index():
        books = db.execute("SELECT * FROM books")
        return render_template("books.html", books=books)

    @app.route("/cart", methods=["GET", "POST"])
    def cart():
        # Ensure cart exists
        if "cart" not in session:
            session["cart"] = []

        # POST
        if request.method == "POST":
            id = request.form.get("id")
            if id:
                session["cart"].append(id)
            return redirect("/cart")

        # GET
        books = db.execute("SELECT * FROM books WHERE id IN (?)", session["cart"])
        return render_template("cart.html", books=books)

    ```

    请注意，`cart` 是使用列表实现的。用户可以通过 `books.html` 页面上的“添加到购物车”按钮将商品添加到购物车。点击这些按钮时，会触发 `post` 请求，将对应商品的 `id` 添加到购物车 `cart` 列表中。当用户查看购物车时，会触发 `get` 请求，执行 SQL 查询以显示购物车中的商品列表。


## API
-   一个_应用程式介面_ (API) 是一系列规范，允许您与其他服务进行交互。例如，我们可以利用 IMDB 的 API 与他们的数据库进行交互。我们甚至可以集成 API 来处理从服务器下载的特定类型的数据。
-   我们看了一个名为 `shows` 的例子。
-   在 `app.py` 文件中，我们看到如下代码:

    ```
    # 使用 Ajax 搜索节目

    from cs50 import SQL
    from flask import Flask, render_template, request

    app = Flask(__name__)

    db = SQL("sqlite:///shows.db")

    @app.route("/")
    def index():
        return render_template("index.html")

    @app.route("/search")
    def search():
        q = request.args.get("q")
        if q:
            shows = db.execute("SELECT * FROM shows WHERE title LIKE ? LIMIT 50", "%" + q + "%")
        else:
            shows = []
        return render_template("search.html", shows=shows)

    ```

    注意，`search` 路由会执行 SQL 查询。

-   查看 `search.html`，您会注意到它非常简单：

    ```
    {% for show in shows %}
        <li>{{ show["title"] }}</li>
    {% endfor %}

    ```

    注意，这里展示的是一个项目符号列表。

-   最后，在 `index.html` 文件中，可以看到 _AJAX_ 代码被用于实现搜索功能:

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>shows</title>
        </head>
        <body>

            <input autocomplete="off" autofocus placeholder="Query" type="search">

            <ul></ul>

            <script>

                let input = document.querySelector('input');
                input.addEventListener('input', async function() {
                    let response = await fetch('/search?q=' + input.value);
                    let shows = await response.text();
                    document.querySelector('ul').innerHTML = shows;
                });

            </script>

        </body>
    </html>

    ```

    这段代码会找到 HTML 中的 `ul` 标签，并用匹配结果更新该标签的内容。

-   您可以在 [AJAX 文档](https://api.jquery.com/category/ajax/) 中阅读更多内容。

## JSON

-   _JavaScript 对象表示法_ 或 _JSON_ 是包含键和值的字典的文本文件。 这是一种原始的、计算机友好的方式来获取大量数据。
-   JSON 是一种从服务器获取数据的高效方式。
-   您可以在我们一起检查的 `index.html` 中看到这一点：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <meta name="viewport" content="initial-scale=1, width=device-width">
            <title>shows</title>
        </head>
        <body>

            <input autocomplete="off" autofocus placeholder="Query" type="text">

            <ul></ul>

            <script>

                let input = document.querySelector('input');
                input.addEventListener('input', async function() {
                    let response = await fetch('/search?q=' + input.value);
                    let shows = await response.json();
                    let html = '';
                    for (let id in shows) {
                        let title = shows[id].title.replace('<', '&lt;').replace('&', '&amp;');
                        html += '<li>' + title + '</li>';
                    }
                    document.querySelector('ul').innerHTML = html;
                });

            </script>

        </body>
    </html>

    ```

    虽然上面的代码可能有些复杂，但它可以作为一个起点，帮助你了解如何在自己的 Web 应用中使用 JSON。

-   您可以在 [JSON 文档](https://www.json.org/json-en.html) 中阅读更多内容。

## 总结一下

在本课程中，您学习了如何利用 Python、SQL 和 Flask 创建 Web 应用程序。 具体来说，我们讨论了...

-   GET
-   POST
-   Flask
-   Session
-   AJAX
-   JSON

我们下节课再见，这将是最后一讲了！
