---
sidebar_position: 1
description: cs50x problem set finance
title: finance
---

# CS50金融 - CS50x 2023

我们将实现一个网站，用户可以在此网站上“购买”和“出售”股票， 如下图所示。

![C$50 金融](/img/cs50/finance.png )

## [背景](#background)

如果您不确定股票（即公司股份）的买卖含义，请点击[此处](https://www.investopedia.com/articles/basics/06/invest1000.asp)查看教程。

您即将实现 CS50金融，这是一个Web应用程序，您可以用它来管理股票投资组合。这个工具不仅能让您查看真实股票的实时价格和投资组合价值，还能通过查询股票价格进行股票买卖（当然，是“模拟”买卖）。

实际上，有一些工具（例如IEX）允许您通过API（应用程序编程接口），使用类似下面的URL来下载股票报价：`https://api.iex.cloud/v1/data/core/quote/nflx?token=API_KEY`。注意，Netflix的股票代码(NFLX)就包含在这个URL里。IEX就是通过它来确定要返回哪个公司的数据。由于IEX需要API密钥，所以这个链接实际上不会返回任何数据。但如果一切正常，您会看到如下JSON（JavaScript对象表示法）格式的返回信息：

```
{
  "avgTotalVolume": 15918066,
  "calculationPrice": "close",
  "change": -8.27,
  "changePercent": -0.03074,
  "close": 260.79,
  "closeSource": "official",
  "closeTime": 1667592000924,
  "companyName": "Netflix Inc.",
  "currency": "USD",
  "delayedPrice": 260.81,
  "delayedPriceTime": 1667591988947,
  "extendedChange": 0.21,
  "extendedChangePercent": 0.00081,
  "extendedPrice": 261,
  "extendedPriceTime": 1667606392772,
  "high": 274.97,
  "highSource": "15 minute delayed price",
  "highTime": 1667592000831,
  "iexAskPrice": None,
  "iexAskSize": None,
  "iexBidPrice": None,
  "iexBidSize": None,
  "iexClose": 260.85,
  "iexCloseTime": 1667591999754,
  "iexLastUpdated": None,
  "iexMarketPercent": None,
  "iexOpen": 271.67,
  "iexOpenTime": 1667568602197,
  "iexRealtimePrice": None,
  "iexRealtimeSize": None,
  "iexVolume": None,
  "lastTradeTime": 1667591999820,
  "latestPrice": 260.79,
  "latestSource": "Close",
  "latestTime": "November 4, 2022",
  "latestUpdate": 1667592000924,
  "latestVolume": 11124694,
  "low": 255.32,
  "lowSource": "15 minute delayed price",
  "lowTime": 1667584872696,
  "marketCap": 115215720136,
  "oddLotDelayedPrice": 260.81,
  "oddLotDelayedPriceTime": 1667591988947,
  "open": 271.9,
  "openTime": 1667568601785,
  "openSource": "official",
  "peRatio": 23.39,
  "previousClose": 269.06,
  "previousVolume": 7057350,
  "primaryExchange": "NASDAQ",
  "symbol": "NFLX",
  "volume": 11124694,
  "week52High": 700.99,
  "week52Low": 162.71,
  "ytdChange": -0.5978504176349512,
  "isUSMarketOpen": False
}

```
请注意，花括号内包含一系列以逗号分隔的键值对，其中每个键和值之间使用冒号分隔。我们将用 Yahoo Finance 做非常类似的事情。

接下来，我们来看看如何获取这个问题的初始代码。

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，点击你的终端窗口，然后单独运行 `cd`。你应该发现你的终端窗口的提示符类似于下面这样：

接下来，运行

```
wget https://cdn.cs50.net/2022/fall/psets/9/finance.zip

```

以便将名为 `finance.zip` 的 ZIP 文件下载到你的 codespace。

然后，运行

来创建一个名为 `finance` 的文件夹。你不再需要该 ZIP 文件，可以运行

并在提示符后输入“y”，然后按回车键删除。

现在输入

然后按回车键进入该目录。此时，你的提示符应该类似如下：

单独运行 `ls`，你应该会看到一些文件和文件夹：

```
app.py  finance.db  helpers.py  requirements.txt  static/  templates/

```

如果遇到问题，请重新检查以上步骤，找出错误所在！

### [运行](#running)

启动 Flask 的内置 Web 服务器（在 `finance/` 目录下）：

访问 `flask` 输出的 URL 以查看初始代码的运行效果。不过，你还不能登录或注册！

在 `finance/` 目录下，运行 `sqlite3 finance.db` 以使用 `sqlite3` 打开 `finance.db`。如果你在 SQLite 提示符中运行 `.schema`，请注意 `finance.db` 附带一个名为 `users` 的表。查看其结构（schema）。请注意，默认情况下，新用户将收到 10,000 美元的现金。但是，如果你运行 `SELECT * FROM users;`，则其中还没有任何用户（即行）可以浏览。

查看 `finance.db` 的另一种方法是使用一个名为 phpLiteAdmin 的程序。在你的 codespace 的文件浏览器中单击 `finance.db`，然后单击文本 “Please visit the following link to authorize GitHub Preview” 下面显示的链接。你应该会看到关于数据库本身的信息，以及一个表 `users`，就像你在 `sqlite3` 提示符中使用 `.schema` 命令看到的那样。

### [理解](#understanding)

#### [`app.py`](#apppy)

打开 `app.py`。文件顶部引入了一系列模块，包括 CS50 的 SQL 模块和一些辅助函数。稍后会详细介绍这些。

在配置 [Flask](https://flask.pocoo.org/) 之后，请注意此文件如何禁用响应缓存（假设你处于调试模式，默认情况下你在 code50 的 codespace 环境中处于调试模式），这样可以避免你修改文件后，浏览器没有及时更新。它还使用 Jinja 的自定义过滤器 `usd` (定义在 `helpers.py` 中)，该过滤器能更方便地将数值格式化为美元 (USD)。然后，它进一步配置 Flask 以将 [sessions](https://flask.palletsprojects.com/en/1.1.x/quickstart/#sessions) 存储在本地文件系统（即磁盘）上，而不是将它们存储在（数字签名的）cookie 中，这是 Flask 的默认设置。然后，该文件配置 CS50 的 SQL 模块以使用 `finance.db`。
接下来有很多路由，但只有`login`和`logout`这两个路由是完整实现的。首先阅读 `login` 的实现。注意它是如何使用 CS50 库中的 `db.execute` 来查询 `finance.db` 的。并注意它是如何使用 `check_password_hash` 来比较用户密码的哈希值的。还要注意，`login` 是如何将用户的 `user_id` (整数类型) 存储在 `session` 中，以此记录用户已登录状态的。这样，该文件中的所有路由都可以检查是否有用户登录，以及是哪个用户登录的。同时，`logout` 只是清空 `session`，从而实现用户注销。

注意，大多数路由都使用了 `@login_required` 装饰器 (该装饰器在 `helpers.py` 中定义)。该装饰器确保，如果用户尝试访问这些路由，系统会首先将其重定向到 `login` 页面进行登录。

还要注意大多数路由都支持 GET 和 POST。即便如此，由于大多数路由尚未实现，所以目前只是返回一个“道歉”页面。

#### [`helpers.py`](#helperspy)

接下来看看 `helpers.py`。啊，这里是 `apology` 的实现。注意它是如何最终渲染一个模板 `apology.html` 的。它还恰好在自身内部定义了另一个函数 `escape`，它只是用于替换道歉中的特殊字符。通过在 `apology` 函数内部定义 `escape` 函数，我们将其作用域限定于 `apology` 函数内部；其他函数无法 (也无需) 调用它。

文件中接下来是 `login_required`。如果这部分代码比较难理解也不用担心，这里展示了一个函数如何返回另一个函数的例子!

接下来是 `lookup`，一个函数，给定一个 `symbol`（例如，NFLX），它以 `dict` 的形式返回一个公司的股票报价，其中包含三个键：`name`，其值是一个 `str`，即公司的名称；`price`，其值是一个 `float`；以及 `symbol`，其值是一个 `str`，即股票代码的规范化（大写）版本，无论该代码在传递到 `lookup` 时是如何大写的。

文件中的最后一个函数是 `usd`，它是一个简单的格式化函数，用于将浮点数 (float) 格式化为美元货币格式 (例如，将 `1234.56` 格式化为 `$1,234.56`)。

#### [`requirements.txt`](#requirementstxt)

接下来快速浏览一下 `requirements.txt`。该文件定义了此应用程序所依赖的软件包列表。

#### [`static/`](#static)

也请浏览 `static/` 目录，其中包含 `styles.css` 文件，用于存放初始的 CSS 样式。您可以根据自己的喜好修改这些样式。

#### [`templates/`](#templates)

现在看看 `templates/`。`login.html` 本质上是一个 HTML 表单，使用了 [Bootstrap](https://getbootstrap.com/) 样式库进行美化。同时，在 `apology.html` 中，是一个道歉的模板。请注意，`helpers.py` 中的 `apology` 函数接受两个参数：`message` 参数会作为 `bottom` 变量的值传递给 `render_template` 函数，而可选的 `code` 参数则会作为 `top` 变量的值传递给 `render_template` 函数。请注意在 `apology.html` 中这些值是如何最终被使用的！[这就是原因](https://github.com/jacebrowning/memegen) 0:-)

`layout.html` 文件相对较大，主要是因为它包含一个基于 Bootstrap 的、美观且对移动设备友好的导航栏 (navbar)。注意，该文件定义了一个名为 `main` 的代码块，其他模板文件 (包括 `apology.html` 和 `login.html`) 的内容将会被插入到该代码块中。该文件还支持 Flask 的 [消息闪现](https://flask.palletsprojects.com/en/1.1.x/quickstart/#message-flashing) 功能，允许您在不同的路由之间传递消息，以便用户查看。

## [规范](#specification)

### [`register`](#register)
完成 `register` 功能的实现，使用户能够通过表单注册账户。

- 要求用户输入用户名，实现为一个 `name` 属性设置为 `username` 的文本输入框。如果用户输入为空或用户名已存在，则给出错误提示。
- 要求用户输入密码，实现为一个 `name` 属性设置为 `password` 的文本输入框，然后再次输入相同的密码，实现为一个 `name` 属性设置为 `confirmation` 的文本输入框。如果任何一个输入为空或密码不匹配，则给出错误提示。
- 通过 `POST` 将用户输入提交到 `/register`。
- 将新用户信息 `INSERT` 到 `users` 表中，存储用户密码的哈希加密值，而不是密码本身。使用 [`generate_password_hash`](https://werkzeug.palletsprojects.com/en/2.3.x/utils/#werkzeug.security.generate_password_hash) 对用户密码进行哈希加密。您可能需要创建一个新模板 (例如 `register.html`)，它与 `login.html` 类似。

正确实现 `register` 后，您应该能够注册帐户并登录（因为 `login` 和 `logout` 已经可以工作）！之后，您应该能够通过 phpLiteAdmin 或 `sqlite3` 查看新添加的用户信息。

### [`quote`](#quote)

完成 `quote` 功能的实现，使用户能够查找股票的当前价格。

- 要求用户输入股票代码，实现为一个 `name` 属性设置为 `symbol` 的文本输入框。
- 通过 `POST` 将用户输入提交到 `/quote`。
- 您可能需要创建两个新模板（例如，`quote.html` 和 `quoted.html`）。当用户通过 GET 访问 `/quote` 时，渲染其中一个模板，其中应包含一个通过 POST 提交到 `/quote` 的 HTML 表单。对于 POST 请求，`quote` 可以渲染第二个模板，并将 `lookup` 函数返回的一个或多个值嵌入其中。

### [`buy`](#buy)

完成 `buy` 功能的实现，使其能够让用户购买股票。

- 要求用户输入股票代码，实现为一个 `name` 属性设置为 `symbol` 的文本输入框。如果输入为空或股票代码不存在（即 `lookup` 函数返回 `None`），则给出错误提示。
- 要求用户输入股票数量，实现为一个 `name` 属性设置为 `shares` 的文本输入框。如果输入不是正整数，则给出错误提示。
- 通过 `POST` 将用户输入提交到 `/buy`。
- 完成后，将用户重定向到主页。
- 您可能需要调用 `lookup` 来查找股票的当前价格。
- 您可能需要 `SELECT` 用户当前在 `users` 表中拥有的现金数量。
- 在 `finance.db` 中添加一个或多个新表来跟踪购买记录。存储足够的信息，以便您知道谁在什么时间以什么价格购买了什么。
    - 使用适当的 SQLite 类型。
    - 在任何应该唯一的字段上定义 `UNIQUE` 索引。
    - 在需要进行搜索的字段上（例如，在 `SELECT` 语句的 `WHERE` 子句中使用的字段），定义非唯一索引。
- 如果用户资金不足，无法购买所需数量的股票，则显示错误提示，且不执行购买操作。
- 您无需担心竞争条件（或使用事务）。

正确实现 `buy` 后，您应该能够通过 phpLiteAdmin 或 `sqlite3` 在您的新表中查看用户的购买情况。

### [`index`](#index)

完成 `index` 功能的实现，使其显示一个 HTML 表格，汇总当前登录用户的信息，包括：拥有的股票、股票数量、每只股票的当前价格、以及每只股票的总价值（股票数量乘以价格）。此外，还应显示用户当前的现金余额以及总资产（股票总价值加上现金）。
-   你可能需要执行多次 `SELECT` 语句。根据你如何设计你的数据表，你可能会发现 `GROUP BY`、`HAVING`、`SUM` 和/或 `WHERE` 子句对你有帮助。
-   你可能需要对每支股票调用 `lookup` 函数。

### [`sell`](#sell)

完成 `sell` 功能的实现，使其允许用户出售他们拥有的股票。

-   要求用户输入股票代码，通过一个 `select` 下拉菜单实现，该菜单的 `name` 属性为 `symbol`。如果用户没有选择任何股票，或者提交后发现用户实际上不持有该股票的任何股份，则显示错误提示信息。
-   要求用户输入股份数量，通过一个文本输入框实现，该输入框的 `name` 属性为 `shares`。如果输入的不是正整数，或者用户试图出售超过其拥有的股份数量，则显示错误提示信息。
-   通过 `POST` 将用户的输入提交到 `/sell`。
-   完成后，将用户重定向到主页。
-   你无需担心竞争条件（或使用事务）。

### [`history`](#history)

完成 `history` 功能的实现，使其显示一个 HTML 表格，汇总用户的所有交易记录，按行展示每次买入和卖出。

-   对于每一条记录，清晰地显示股票是买入还是卖出，并包含股票代码、交易价格、买入或卖出的股份数量，以及交易发生的具体日期和时间。
-   你可能需要修改为 `buy` 功能创建的数据表，或者添加额外的数据表来补充信息。尽量避免数据冗余。

### [个人特色](#personal-touch)

实现至少一项你选择的个性化功能：

-   允许用户更改密码。
-   允许用户向其帐户添加额外现金。
-   允许用户通过 `index` 本身购买更多股份或出售已拥有的股票股份，而无需手动输入股票代码。
-   要求用户的密码包含一定数量的字母、数字和/或符号。
-   实现一些其他具有可比范围的功能。

## [演练](#walkthrough)

## [测试](#testing)

请务必手动测试你的 Web 应用，例如：

-   注册一个新用户，并验证其投资组合页面是否能正确加载信息，
-   使用有效的股票代码请求报价，
-   多次购买一只股票，验证投资组合是否显示正确的总额，
-   出售全部或部分股票，再次验证投资组合，以及
-   验证你的历史记录页面是否显示已登录用户的所有交易。

还要测试一些意外的用法，例如：

-   在只需要数字的表单中输入字母字符串，
-   在只需要正数的表单中输入零或负数，
-   在只需要整数的表单中输入浮点值，
-   试图花费比用户拥有的现金更多的钱，
-   试图出售超过用户拥有的股份数量的股份，
-   输入无效的股票代码，以及
-   在 SQL 查询中包含潜在的危险字符，如 `'` 和 `;`。

一旦你确信应用程序的所有部分都正常工作，请通过执行以下命令使用 `check50` 测试你的代码。

```
check50 cs50/problems/2023/x/finance

```

## [样式](#style)

## [工作人员的解决方案](#staffs-solution)

你可以随意以不同的方式设计自己的应用程序，但以下是工作人员解决方案的样子！

[https://finance.cs50.net/](https://finance.cs50.net/)

请随意注册一个帐户并进行尝试。**不要**使用你在其他网站上使用的密码。

参考工作人员的 HTML 和 CSS 代码是**可以接受的**。

## [提示](#hints)
- 要将一个数值格式化为美元值（精确到小数点后两位），你可以在 Jinja 模板中使用 `usd` 过滤器（将值打印为 `{{ value | usd }}` 而不是 `{{ value }}`）。
- `cs50.SQL` 中有一个 `execute` 方法，它的第一个参数应该是一个 SQL 的 `str`。如果该 `str` 包含问号参数，需要绑定值，这些值可以作为额外的命名参数提供给 `execute`。例如，可以参考`login`的实现代码。`execute` 的返回值如下：
    - 如果 `str` 是一个 `SELECT`，那么 `execute` 返回一个包含零个或多个 `dict` 对象的 `list`，其中包含表示表字段和单元格的键和值。
    - 如果 `str` 是一个 `INSERT`，并且插入数据的表包含一个自增的 `PRIMARY KEY`，那么 `execute` 返回新插入行的主键值。
    - 如果 `str` 是一个 `DELETE` 或一个 `UPDATE`，那么 `execute` 返回由 `str` 删除或更新的行数。
- 请注意，`cs50.SQL`会将你通过`execute`执行的查询记录在终端窗口中，方便你确认查询是否正确。
- 使用CS50的`execute`方法时，务必使用问号绑定的参数 (即`named`的[paramstyle](https://www.python.org/dev/peps/pep-0249/#paramstyle))，例如`WHERE ?`。切勿使用f-strings、`format`或`+` (字符串连接)，以避免SQL注入攻击。
- 如果你已经熟悉SQL，欢迎使用 [SQLAlchemy Core](https://docs.sqlalchemy.org/en/latest/index.html) 或 [Flask-SQLAlchemy](https://flask-sqlalchemy.pocoo.org/)（即 [SQLAlchemy ORM](https://docs.sqlalchemy.org/en/latest/index.html)）来代替 `cs50.SQL`。
- 欢迎你向 `static/` 添加额外的静态文件。
- 在实现模板时，你可能需要查阅 [Jinja 的文档](https://jinja.palletsprojects.com/en/3.1.x/)。
- 让其他人尝试（并尝试触发错误）你的网站是**合理的**。
- 你可以通过以下方式来美化你的网站：
    - [bootswatch.com](https://bootswatch.com/)
    - [getbootstrap.com/docs/5.1/content](https://getbootstrap.com/docs/5.1/content/)
    - [getbootstrap.com/docs/5.1/components](https://getbootstrap.com/docs/5.1/components/) 和/或
    - [memegen.link](https://memegen.link/)
- 你可能会发现Flask和Jinja的文档对你很有帮助！

## [常见问题解答](#faqs)

### [ImportError: No module named ‘application’](#importerror-no-module-named-application)

默认情况下，`flask` 会在当前工作目录中查找名为 `app.py` 的文件（因为我们已将环境变量 `FLASK_APP` 的值配置为 `app.py`）。如果看到此错误，则很可能你在错误的目录中运行了 `flask`！

### [OSError: \[Errno 98\] Address already in use](#oserror-errno-98-address-already-in-use)

如果在运行`flask`时遇到此错误，很可能是因为你已经在另一个标签页运行了`flask`。请先使用Ctrl+C终止之前的进程，再重新启动`flask`。如果没有其他标签页，请执行`fuser -k 8080/tcp`命令来结束占用8080端口的进程。
## [如何提交](#how-to-submit)

在您的终端中，运行以下命令来提交您的代码。

```
submit50 cs50/problems/2023/x/finance
```
