---
sidebar_position: 1
description: cs50x 课程作业主页
title: 主页
---

# 主页 - CS50x 2023

使用 HTML、CSS 和 JavaScript 构建一个简单的主页。

## [背景](#background)

互联网实现了令人难以置信的事情：我们可以使用搜索引擎来研究任何可以想象的东西，与全球的朋友和家人交流，玩游戏，参加课程等等。但实际上，我们访问的绝大多数网页都是基于以下三种核心语言构建的：

1.  HTML，即_超文本标记语言_ (HyperText Markup Language)，用于描述网页内容；
2.  CSS，即_层叠样式表_ (Cascading Style Sheets)，用于定义网页的样式；以及
3.  JavaScript，则负责为网页增加互动性和动态效果。

创建一个简单的个人主页，介绍你自己、你喜欢的爱好、课外活动，或者任何你感兴趣的内容。

## [开始](#getting-started)

登录 [cs50.dev](https://cs50.dev/)，单击您的终端窗口，然后单独执行 `cd`。你应该会看到类似下面的终端提示符：

接下来执行

```
wget https://cdn.cs50.net/2022/fall/psets/8/homepage.zip

```

以便将名为 `homepage.zip` 的压缩包下载到你的 codespace。

然后执行

来创建一个名为 `homepage` 的文件夹。你现在可以删除这个压缩包，执行

并在提示符后输入 `y` 并回车，删除你下载的压缩包。

现在输入

然后回车，进入该目录。此时，你的终端提示符应该类似如下。

单独执行 `ls`，您应该会看到一些文件：

如果遇到问题，请重新按照上述步骤操作，看看能否找到出错的地方！你可以在终端中运行

立即启动服务器以查看你的网站。然后，按住 Command 键点击 (Mac) 或按住 Ctrl 键点击 (PC) 出现的第一个链接：

```
http-server running on LINK

```

其中 `LINK` 是你的服务器地址。

## [规范](#specification)

在你的 `homepage` 目录下创建一个网站，它需要满足以下条件：

-   其中必须包含一个名为 `index.html` 的文件 (作为网站首页)，并且网站上的任何页面都应该能通过超链接跳转到其他任何页面。
-   除了 `<html>`、`<head>`、`<body>` 和 `<title>` 这几个标签之外，至少还要使用十 (10) 个不同的 HTML 标签。即使重复使用某个标签 (例如 `<p>`)，也只算作一个！
-   Bootstrap 是一个流行的前端框架 (包含许多 CSS 类等)，可以用来美化你的网站。你可以参考 [Bootstrap 的官方文档](https://getbootstrap.com/docs/5.2/) 来了解如何使用。特别是，你可能会对 [Bootstrap 的组件](https://getbootstrap.com/docs/5.2/components/) 感兴趣。要将 Bootstrap 集成到你的网站中，只需在

    ```
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>

    ```

    在网页的 `<head>` 标签中，你还可以在下面添加

    ```
    <link href="styles.css" rel="stylesheet">

    ```

    来引入你自己的 CSS 样式。

-   你需要创建一个名为 `styles.css` 的样式表文件，并且至少使用五 (5) 种不同的 CSS 选择器 (例如标签选择器 `example`、类选择器 `.example` 或 ID 选择器 `#example`)，并使用至少五 (5) 种不同的 CSS 属性，例如 `font-size` 或 `margin`。
-   使用 JavaScript 为你的网站增加一些互动功能。例如，你可以使用 JavaScript 添加警告弹窗、设置定时效果，或者为按钮、下拉菜单和表单增加互动性。
-   确保你的网站在手机、笔记本电脑和台式机等不同设备上的浏览器中都能正常显示。

## [测试与预览](#testing)
如果你想在编写代码的同时预览网站效果，可以运行 `http-server`。在 Mac 上按住 Command 键，或在 PC 上按住 Control 键，点击 `http-server` 输出的第一个链接，即可在新标签页中打开你的网页。之后，刷新网页标签即可查看最新更改。

另外，你也可以通过 Google Chrome 的开发者工具来_模拟_在移动设备上访问你的页面。只需点击开发者工具窗口中 **Elements** 标签左侧的手机图标。或者，在开发者工具已打开的情况下，直接在 PC 上按 `Ctrl`+`Shift`+`M`，或在 Mac 上按 `Cmd`+`Shift`+`M`，无需单独使用移动设备访问。

## [评分标准](#assessment)

此作业没有 `check50`！相反，你的网站的正确性将根据你是否满足上述规范的要求以及你的 HTML 是否格式良好且有效来评估。为了确保你的页面符合要求，你可以使用此 [Markup Validation Service](https://validator.w3.org/#validate_by_input)，将你的 HTML 直接复制并粘贴到提供的文本框中。在提交之前，请注意消除验证器建议的任何警告或错误！

另请考虑：

- 你的网站是否美观易用，方便用户浏览；
- 你的 CSS 是否已分离到单独的 CSS 文件中；以及
- 你是否通过“层叠”父标签的样式属性来避免样式重复。

`style50` 不支持 HTML 文件，所以请注意规范地缩进和对齐 HTML 标签。另外请注意，你可以使用以下代码创建 HTML 注释：

```
<!-- Comment goes here -->

```

不过，HTML 代码的注释不像 C 或 Python 代码那样必要。你还可以使用以下代码在 CSS 文件中注释你的 CSS：

## [提示](#hints)

想更深入了解本作业中涉及的编程语言？请参考以下教程：

- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [JavaScript](https://www.w3schools.com/js/)

## [如何提交](#how-to-submit)

在你的终端中，执行以下命令来提交你的作品。

```
submit50 cs50/problems/2023/x/homepage

```
