---
sidebar_position: 1
description: lecture8 HTML,CSS,JavaScript Notes | 课程笔记
title: 课程笔记
---

# 第八讲 - CS50x 2023

- [第八讲 - CS50x 2023](#第八讲---cs50x-2023)
  - [欢迎！](#欢迎)
  - [路由器](#路由器)
  - [DNS](#dns)
  - [HTTP](#http)
  - [HTML](#html)
  - [CSS](#css)
  - [框架（Frameworks）](#框架frameworks)
  - [JavaScript](#javascript)
  - [总结](#总结)

## 欢迎！

-   在前几周，我们向您介绍了 Python，一种高级编程语言，它利用了我们在 C 语言中学到的相同构建块。今天，我们将进一步扩展这些构建块，学习 HTML、CSS 和 JavaScript。
-   互联网是我们常用的技术。
-   利用之前几周学到的技能，我们可以构建自己的网页和应用。
-   _ARPANET_ 将互联网上的第一个点相互连接起来。
-   连接两点的节点可以被视为_路由器_。

## 路由器

-   要将数据从一个地方路由到另一个地方，我们需要进行_路由决策_。也就是说，需要编程实现数据如何从 A 点传输到 B 点。
-   可以想象，数据从 A 点到 B 点有多条路径，当某个路由器拥堵时，数据可以走其他路径。
-   _TCP/IP_ 是两种协议，允许计算机通过互联网在它们之间传输数据。
-   _IP_，即_互联网协议_，是计算机在互联网上相互识别的途径。每台计算机在互联网上都有一个唯一的地址。地址格式如下：

-   数字范围从 `0` 到 `255`。IP 地址是 32 位的，这意味着这些地址可以容纳超过 40 亿个地址。较新版本的 IP 地址可以容纳更多的计算机了！
-   在现实世界中，服务器为我们做了很多工作。
-   _TCP_，或传输控制协议，用于区分彼此之间的 Web 服务。例如，`80` 用于表示 HTTP，`443` 用于表示 HTTPS。这些数字是_端口号_。
-   当信息从一个位置发送到另一个位置时，会发送一个 IP 地址和 TCP 端口号。
-   这些协议还用于将大型文件分成多个部分，称为_数据包_。例如，一张大的猫的照片可以分成多个数据包发送。当数据包丢失时，TCP/IP 可以从原始服务器再次请求丢失的数据包。
-   当所有数据都已传输和接收时，TCP 会确认。

## DNS

-   如果需要记住地址号码才能访问网站，那就太麻烦了。
-   _DNS_，或_域名系统_，是互联网上服务器的集合，用于将网站地址（如 _harvard.edu_）路由到特定的 IP 地址。
-   DNS 只是保存一个表或数据库，将特定的、完全限定的域名链接到特定的 IP 地址。

## HTTP

-   _HTTP_ 或_超文本传输协议_是一种应用程序级协议，开发人员可以使用它来构建强大而有用的东西。
-   当您看到类似 `https://www.example.com` 的地址时，实际上是在隐式访问该地址的根目录（`/`）。
-   _路径_是斜杠后面的内容。例如，`https://www.example.com/folder/file.html` 访问 `example.com` 并浏览到 `folder` 文件夹，然后访问名为 `file.html` 的文件。
-   此地址中的 `https` 是用于连接到该 Web 地址的协议。这里的协议指的是 HTTP 使用 `GET` 或 `POST` _请求_向服务器请求信息。例如，您可以启动 Google Chrome，右键单击并单击“检查”。当您打开“开发者工具”并访问“网络”，选择“保留日志”时，您将看到“请求标头”。您会看到提及 `GET`。这在其他浏览器中也是可能的，只是使用的方法略有不同。
-   通常，在向服务器发出请求后，您将在“响应标头”中收到以下内容：

    ```
      HTTP/1.1 200 OK
      Content-Type: text/html

    ```

-   这种检查日志的方式可能比较复杂。您可以在 [cs50.dev](https://cs50.dev/) 上分析 HTTP 协议的工作原理。例如，在终端窗口中输入以下命令：

    ```
      curl -I https://www.harvard.edu

    ```

请注意，此命令的输出会显示服务器响应的所有标头信息。

- 同样地，请在您的终端窗口中执行以下命令：

    ```
      curl -I http://www.harvard.edu

    ```

    请注意，`https` 中的 `s` 被移除了。服务器的响应会显示状态码为 `301`，而不是 `100`，这表示该网站已永久重定向。

- 接下来，请在您的终端窗口中执行以下命令：

    ```
      curl -I https://harvard.edu

    ```

    请注意，您会看到同样的 `301` 响应，这会提示浏览器去哪里寻找正确的网站。

- 类似于 `301`，`404` 错误代码表示指定的 URL 未找到。还有许多其他的状态代码，例如：

    ```
      200 OK
      301 Moved Permanently
      302 Found
      304 Not Modified
      304 Temporary Redirect
      401 Unauthorized
      403 Forbidden
      404 Not Found
      418 I'm a Teapot
      500 Internal Server Error
      503 Service Unavailable

    ```

- 值得注意的是，`500` 错误通常是开发者自身的问题。 这对下周的 pset 作业，以及你的最终项目尤其重要！
- 我们可以向服务器发送更复杂的指令。 例如，可以尝试以下操作：

    ```
      GET /search?q=cats HTTP/1.1
      Host: www.google.com

    ```

    请注意，我们不仅指定了路径，还通过 `?` 标记传递了用户输入。 `q` 代表 _query_ 查询参数，并将 `cats` 作为其值传递。

- 如果您在 Web 浏览器的地址栏中手动输入 `google.com/search?=cats`，浏览器会向 Google 发起查询，以获取与 `cats` 相关的结果。

## HTML

- _HTML_，即 _超文本标记语言_，由各种 _标签_ 构成，每个标签可以包含一些 _属性_ 来描述它的特性。
- 在您的终端中，键入 `code hello.html` 并按如下方式编写代码：

    ```
    <!DOCTYPE html>

    <!-- Demonstrates HTML -->

    <html lang="en">
        <head>
            <title>hello, title</title>
        </head>
        <body>
            hello, body
        </body>
    </html>

    ```

    请注意，`html` 标签有开始和结束标签。 此外，`lang` 属性会影响 `html` 标签的行为。 另外，代码中包含了 `head` 和 `body` 标签。 缩进不是必须的，但能体现代码的层级结构。

- 你可以通过输入 `http-server` 命令来运行你的代码。 运行后，会得到一个很长的 URL。 点击这个 URL，你就可以用自己的代码来访问这个网站了。
- 标签的层级关系可以用下图表示：

    ![html 代码旁边是一个显示父节点和子节点的层次结构](/img/cs50/cs50Week8Slide065.png "DOM")

- 因为 HTML 会忽略空格，所以你需要使用 `<p>` 标签来定义段落的开始和结束。 例如：

    ```
    <!DOCTYPE html>

    <!-- Demonstrates paragraphs -->

    <html lang="en">
        <head>
            <title>paragraphs</title>
        </head>
        <body>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis scelerisque quam, vel hendrerit lectus viverra eu. Praesent posuere eget lectus ut faucibus. Etiam eu velit laoreet, gravida lorem in, viverra est. Cras ut purus neque. In porttitor non lorem id lobortis. Mauris gravida metus libero, quis maximus dui porta at. Donec lacinia felis consectetur venenatis scelerisque. Nulla eu nisl sollicitudin, varius velit sit amet, vehicula erat. Curabitur sollicitudin felis sit amet orci mattis, a tempus nulla pulvinar. Aliquam erat volutpat.
            </p>
            <p>
                Mauris ut dui in eros semper hendrerit. Morbi vel elit mi. Sed sit amet ex non quam dignissim dignissim et vel arcu. Pellentesque eget elementum orci. Morbi ac cursus ex. Pellentesque quis turpis blandit orci dapibus semper sed non nunc. Nulla et dolor nec lacus finibus volutpat. Sed non lorem diam. Donec feugiat interdum interdum. Vivamus et justo in enim blandit fermentum vel at elit. Phasellus eu ante vitae ligula varius aliquet. Etiam id posuere nibh.
            </p>
            <p>
                Aenean venenatis convallis ante a rhoncus. Nullam in metus vel diam vehicula tincidunt. Donec lacinia metus sem, sit amet egestas elit blandit sit amet. Nunc egestas sem quis nisl mattis semper. Pellentesque ut magna congue lorem eleifend sodales. Donec tortor tortor, aliquam vitae mollis sed, interdum ut lectus. Mauris non purus quis ipsum lacinia tincidunt.
            </p>
            <p>
                Integer at justo lacinia libero blandit aliquam ut ut dui. Quisque tincidunt facilisis venenatis. Nullam dictum odio quis lorem luctus, vel malesuada dolor luctus. Aenean placerat faucibus enim a facilisis. Maecenas eleifend quis massa sed eleifend. Ut ultricies, dui ac vulputate hendrerit, ex metus iaculis diam, vitae fermentum libero dui et ante. Phasellus suscipit, arcu ut consequat sagittis, massa urna accumsan massa, eu aliquet nulla lorem vitae arcu. Pellentesque rutrum felis et metus porta semper. Nam ac consectetur mauris.
            </p>
            <p>
                Suspendisse rutrum vestibulum odio, sed venenatis purus condimentum sed. Morbi ornare tincidunt augue eu auctor. Vivamus sagittis ac lectus at aliquet. Nulla urna mauris, interdum non nibh in, vehicula porta enim. Donec et posuere sapien. Pellentesque ultrices scelerisque ipsum, vel fermentum nibh tincidunt et. Proin gravida porta ipsum nec scelerisque. Vestibulum fringilla erat at turpis laoreet, nec hendrerit nisi scelerisque.
            </p>
            <p>
                Sed quis malesuada mi. Nam id purus quis augue sagittis pharetra. Nulla facilisi. Maecenas vel fringilla ante. Cras tristique, arcu sit amet blandit auctor, urna elit ultricies lacus, a malesuada eros dui id massa. Aliquam sem odio, pretium vel cursus eget, scelerisque at urna. Vestibulum posuere a turpis consectetur consectetur. Cras consequat, risus quis tempor egestas, nulla ipsum ornare erat, nec accumsan nibh lorem nec risus. Integer at iaculis lacus. Integer congue nunc massa, quis molestie felis pellentesque vestibulum. Nulla odio tortor, aliquam nec quam in, ornare aliquet sapien.
            </p>
        </body>
    </html>

    ```

请注意，段落内容包含在起始标签 `<p>` 和结束标签 `</p>` 之间。

-   HTML 允许使用标题：
```
    <!DOCTYPE html>

    <!-- 演示如何使用标题（例如章节、小节等） -->

    <html lang="en">

        <head>
            <title>标题示例</title>
        </head>

        <body>

            <h1>一级标题</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis scelerisque quam, vel hendrerit lectus viverra eu. Praesent posuere eget lectus ut faucibus. Etiam eu velit laoreet, gravida lorem in, viverra est. Cras ut purus neque. In porttitor non lorem id lobortis. Mauris gravida metus libero, quis maximus dui porta at. Donec lacinia felis consectetur venenatis scelerisque. Nulla eu nisl sollicitudin, varius velit sit amet, vehicula erat. Curabitur sollicitudin felis sit amet orci mattis, a tempus nulla pulvinar. Aliquam erat volutpat.
            </p>

            <h2>二级标题</h2>
            <p>
                Mauris ut dui in eros semper hendrerit. Morbi vel elit mi. Sed sit amet ex non quam dignissim dignissim et vel arcu. Pellentesque eget elementum orci. Morbi ac cursus ex. Pellentesque quis turpis blandit orci dapibus semper sed non nunc. Nulla et dolor nec lacus finibus volutpat. Sed non lorem diam. Donec feugiat interdum interdum. Vivamus et justo in enim blandit fermentum vel at elit. Phasellus eu ante vitae ligula varius aliquet. Etiam id posuere nibh.
            </p>

            <h3>三级标题</h3>
            <p>
                Aenean venenatis convallis ante a rhoncus. Nullam in metus vel diam vehicula tincidunt. Donec lacinia metus sem, sit amet egestas elit blandit sit amet. Nunc egestas sem quis nisl mattis semper. Pellentesque ut magna congue lorem eleifend sodales. Donec tortor tortor, aliquam vitae mollis sed, interdum ut lectus. Mauris non purus quis ipsum lacinia tincidunt.
            </p>

            <h4>四级标题</h4>
            <p>
                Integer at justo lacinia libero blandit aliquam ut ut dui. Quisque tincidunt facilisis venenatis. Nullam dictum odio quis lorem luctus, vel malesuada dolor luctus. Aenean placerat faucibus enim a facilisis. Maecenas eleifend quis massa sed eleifend. Ut ultricies, dui ac vulputate hendrerit, ex metus iaculis diam, vitae fermentum libero dui et ante. Phasellus suscipit, arcu ut consequat sagittis, massa urna accumsan massa, eu aliquet nulla lorem vitae arcu. Pellentesque rutrum felis et metus porta semper. Nam ac consectetur mauris.
            </p>

            <h5>五级标题</h5>
            <p>
                Suspendisse rutrum vestibulum odio, sed venenatis purus condimentum sed. Morbi ornare tincidunt augue eu auctor. Vivamus sagittis ac lectus at aliquet. Nulla urna mauris, interdum non nibh in, vehicula porta enim. Donec et posuere sapien. Pellentesque ultrices scelerisque ipsum, vel fermentum nibh tincidunt et. Proin gravida porta ipsum nec scelerisque. Vestibulum fringilla erat at turpis laoreet, nec hendrerit nisi scelerisque.
            </p>
            <h6>六号标题</h6>
            <p>
                示例文本，无实际意义。天地玄黄，宇宙洪荒。日月盈昃，辰宿列张。
            </p>

        </body>

    </html>
```


注意，`<h1>`、`<h2>` 和 `<h3>` 标签分别代表不同级别的标题。

-   我们也可以在 HTML 中创建带编号的列表：

    ```
    <!DOCTYPE html>

    <!-- 演示（带编号的）列表 -->

    <html lang="en">
        <head>
            <title>有序列表</title>
        </head>
        <body>
            <ol>
                <li>foo</li>
                <li>bar</li>
                <li>baz</li>
            </ol>
        </body>
    </html>

    ```

    注意，`<ol>` 标签用于创建一个包含三个项目的有序列表。

-   我们也可以在 HTML 中创建表格：

    ```
    <!DOCTYPE html>

    <!-- 演示表格 -->

    <html lang="en">
        <head>
            <title>HTML表格</title>
        </head>
        <body>
            <table>
                <tr>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>*</td>
                    <td>0</td>
                    <td>#</td>
                </tr>
            </table>
        </body>
    </html>

    ```

    表格中的每个元素都需要使用标签来定义其开始和结束。

-   图像也可以在 HTML 中使用：

    ```
    <!DOCTYPE html>

    <!-- 演示图像 -->

    <html lang="en">
        <head>
            <title>HTML图像</title>
        </head>
        <body>
            <!-- https://www.harvard.edu/ -->
            <img alt="哈佛大学" src="harvard.jpg">
        </body>
    </html>

    ```

    注意，`src="harvard.jpg"` 指定了图像文件的路径。

-   视频也可以包含在 HTML 中：

    ```
    <!DOCTYPE html>

    <!-- 演示视频 -->

    <html lang="en">
        <head>
            <title>HTML视频</title>
        </head>
        <body>
            <!-- https://www.harvard.edu/ -->
            <video autoplay loop muted playsinline width="1280">
                <source src="halloween.mp4" type="video/mp4">
            </video>
        </body>
    </html>

    ```

    注意，`width` 属性用于设置视频的宽度。

-   您也可以在不同的网页之间创建链接：

    ```
    <!DOCTYPE html>

    <!-- 演示链接 -->

    <html lang="en">
        <head>
            <title>链接</title>
        </head>
        <body>
           访问 <a href="image.html">哈佛</a>。
        </body>
    </html>

    ```

    注意，`<a>`，即链接标签，用于将“哈佛”设置为可点击的链接。

-   Meta 标签用于存储关于 HTML 文件的元数据。 例如，考虑以下示例：

    ```
    <!DOCTYPE html>

    <!-- 演示响应式设计 -->

    <html lang="en">
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width">
                <title>meta</title>
            </head>
            <body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus convallis scelerisque quam, vel hendrerit lectus viverra eu. Praesent posuere eget lectus ut faucibus. Etiam eu velit laoreet, gravida lorem in, viverra est. Cras ut purus neque. In porttitor non lorem id lobortis. Mauris gravida metus libero, quis maximus dui porta at. Donec lacinia felis consectetur venenatis scelerisque. Nulla eu nisl sollicitudin, varius velit sit amet, vehicula erat. Curabitur sollicitudin felis sit amet orci mattis, a tempus nulla pulvinar. Aliquam erat volutpat.
            </body>
    </html>

    ```

    请注意，这组 `meta` 属性让此页面更适合移动设备浏览。

-   您可以使用许多 `meta` 键值对。

    ```
    <!DOCTYPE html>

    <!-- Demonstrates Open Graph tags -->

    <html lang="en">
        <head>
            <meta property="og:title" content="CS50">
            <meta property="og:description" content="Introduction to the intellectual enterprises of computer science and the art of programming.">
            <meta property="og:image" content="cat.jpg">
            <title>meta</title>
        </head>
        <body>
            ...
        </body>
    </html>

    ```

    请注意，这些键值对与网页的标题 (`title`) 和描述 (`description`) 相关。

-   您还可以创建类似于 Google 搜索的表单：

    ```
    <!DOCTYPE html>

    <!-- Demonstrates form -->

    <html lang="en">
        <head>
            <title>search</title>
        </head>
        <body>
            <form action="https://www.google.com/search" method="get">
                <input name="q" type="search">
                <input type="submit" value="Google Search">
            </form>
        </body>
    </html>

    ```

    请注意，`form` 标签定义了表单的行为，`action` 属性指定了表单提交的地址。 `input` 字段用于输入信息，其中 `name` 属性设为 `q`，`type` 属性设为 `search`。

-   我们可以通过以下方式使此搜索更好：

    ```
    <!DOCTYPE html>

    <!-- Demonstrates additional form attributes -->

    <html lang="en">
        <head>
            <title>search</title>
        </head>
        <body>
            <form action="https://www.google.com/search" method="get">
                <input autocomplete="off" autofocus name="q" placeholder="Query" type="search">
                <button>Google Search</button>
            </form>
        </body>
    </html>

    ```

    请注意，`autocomplete` 属性被设置为关闭，`autofocus` 属性被启用。

-   如果您想在网站上添加我们还没讲到的元素（例如按钮、音频文件等），可以尝试在 Google 上搜索“HTML X”，查找相应的语法！

## CSS

-   `CSS`，即层叠样式表，是一种标记语言，允许您微调 HTML 文件的美观性。
-   在终端中输入 `code home.html`，然后编写如下代码：

    ```
    <!DOCTYPE html>

    <!-- Demonstrates inline CSS with P tags -->

    <html lang="en">
        <head>
            <title>css</title>
        </head>
        <body>
            <p style="font-size: large; text-align: center;">
                John Harvard
            </p>
            <p style="font-size: medium; text-align: center;">
                Welcome to my home page!
            </p>
            <p style="font-size: small; text-align: center;">
                Copyright &#169; John Harvard
            </p>
        </body>
    </html>

    ```

    请注意，`<p>` 标签中设置了一些 `style` 属性，例如 `font-size` （字体大小）被设置为 `large`、`medium` 或 `small`，`text-align` （文本对齐方式）被设置为居中。

-   虽然上述代码可以实现效果，但设计并不理想。我们可以通过修改代码来减少冗余：
    ```
        <!DOCTYPE html>

        <!-- 移除外部 `<div>` 标签 -->

        <html lang="en">
            <head>
                <title>css</title>
            </head>
            <body style="text-align: center">
                <div style="font-size: large">
                    John Harvard
                </div>
                <div style="font-size: medium">
                    欢迎来到我的主页！
                </div>
                <div style="font-size: small">
                    版权所有 &#169; John Harvard
                </div>
            </body>
        </html>

    ```

    请注意，`<div>` 标签用于将 HTML 文件划分为特定区域。`text-align: center` 样式被应用到了整个 HTML 文件的 `<body>` 标签上。

-   现在，HTML 中引入了一些新的语义化标签。我们可以如下修改代码：

    ```
    <!DOCTYPE html>

    <!-- 使用语义化标签代替 `<div>` 标签 -->

    <html lang="en">
        <head>
            <title>css</title>
        </head>
        <body style="text-align: center">
            <header style="font-size: large">
                John Harvard
            </header>
            <main style="font-size: medium">
                欢迎来到我的主页！
            </main>
            <footer style="font-size: small">
                版权所有 &#169; John Harvard
            </footer>
        </body>
    </html>

    ```

    请注意，`header` 和 `footer` 标签都被赋予了不同的样式。

-   将样式直接写在 HTML 标签里的做法并不推荐。 我们可以将样式元素移动到文件的顶部，如下所示：

    ```
    <!-- 演示 CSS 类选择器 -->

    <html lang="en">
        <head>
            <style>

                .centered
                {
                    text-align: center;
                }

                .large
                {
                    font-size: large;
                }

                .medium
                {
                    font-size: medium;
                }

                .small
                {
                    font-size: small;
                }

            </style>
            <title>css</title>
        </head>
        <body class="centered">
            <header class="large">
                John Harvard
            </header>
            <main class="medium">
                欢迎来到我的主页！
            </main>
            <footer class="small">
                版权所有 &#169; John Harvard
            </footer>
        </body>
    </html>

    ```

    另请注意，我们为 HTML 元素指定了 CSS 类名，例如 `centered`、`large`、`medium` 和 `small`。在 CSS 中，我们通过在类名前加一个点(`.`)来选择这些类，例如 `.centered`。

-   实际上，我们可以把所有的样式代码都放到一个单独的文件中，这个文件通常被称为 CSS 文件。 我们可以创建一个名为 `style.css` 的文件并将我们的类粘贴到那里：

    ```
    .centered
    {
        text-align: center;
    }

    .large
    {
        font-size: large;
    }

    .medium
    {
        font-size: medium;
    }

    .small
    {
        font-size: small;
    }

    ```

    请注意，这部分代码和之前 HTML 文件 `<style>` 标签里的内容是一样的。

-   接下来，我们需要告诉浏览器，去哪里寻找这个 HTML 文件对应的 CSS 样式：

    ```
    <!DOCTYPE html>

    <!-- 演示外部样式表 -->

    <html lang="en">
        <head>
            <link href="style.css" rel="stylesheet">
            <title>css</title>
        </head>
        <body class="centered">
            <header class="large">
                John Harvard
            </header>
            <main class="medium">
                欢迎来到我的主页！
            </main>
            <footer class="small">
                版权所有 &#169; John Harvard
            </footer>
        </body>
    </html>

    ```

    请注意，`style.css` 作为样式表链接到此 HTML 文件，告诉浏览器在哪里找到我们创建的样式。


## 框架（Frameworks）

-   类似于 Python 中的第三方库，在前端开发中，也有一些被称为“框架 (Frameworks)”的第三方库，可以方便地在 HTML 文件中使用。
-   Bootstrap 就是其中一种框架，它可以帮助我们美化 HTML 页面，更轻松地实现各种设计效果，从而提高页面的可读性。
-   要使用 Bootstrap，需要在 HTML 文件的 `<head>` 标签中添加如下的 `<link>` 标签：
    ```
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <title>favorites</title>
    </head>

    ```

-   您可以在 [Bootstrap 文档](https://getbootstrap.com/docs/4.1/getting-started/introduction/) 中找到更多相关信息。

## JavaScript

-   JavaScript 是另一种编程语言，它允许网页具有交互性。
-   JavaScript 支持条件语句。
-   JavaScript 也支持变量。
-   JavaScript 还可以进行递增操作。
-   循环语句和您在 C 语言中见过的非常相似。

    ```
    for (let i = 0; i < 3; i++)
    {

    }

    ```

-   JavaScript 允许您动态读取和修改加载到内存中的 HTML 文档，这样用户无需重新加载页面就能看到更改。
-   考虑以下 HTML：

    ```
    <!DOCTYPE html>

    <!-- 演示如何以编程方式更改样式 -->

    <html lang="en">
        <head>
            <title>background</title>
        </head>
        <body>
            <button id="red">R</button>
            <button id="green">G</button>
            <button id="blue">B</button>
            <script>

                let body = document.querySelector('body');
                document.querySelector('#red').addEventListener('click', function() {
                    body.style.backgroundColor = 'red';
                });
                document.querySelector('#green').addEventListener('click', function() {
                    body.style.backgroundColor = 'green';
                });
                document.querySelector('#blue').addEventListener('click', function() {
                    body.style.backgroundColor = 'blue';
                });

            </script>
        </body>
    </html>

    ```

    请注意，JavaScript 会监听特定按钮的点击事件。 一旦检测到点击，页面上的某些样式属性就会发生改变。`body` 被定义为页面的主体部分。 接着，事件监听器会等待其中一个按钮被点击。之后，`body.style.backgroundColor` 的值会被修改。

-   类似地，请看下面的例子：

    ```
    <!DOCTYPE html>

    <html lang="en">
        <head>
            <script>

                // 切换问候语的可见性
                function blink()
                {
                    let body = document.querySelector('body');
                    if (body.style.visibility == 'hidden')
                    {
                        body.style.visibility = 'visible';
                    }
                    else
                    {
                        body.style.visibility = 'hidden';
                    }
                }

                // 每 500 毫秒闪烁一次
                window.setInterval(blink, 500);

            </script>
            <title>blink</title>
        </head>
        <body>
            hello, world
        </body>
    </html>

    ```

    这个例子展示了如何以设定的时间间隔闪烁文本。 请注意，`window.setInterval` 接受两个参数：1) 需要调用的函数，以及 2) 函数每次调用之间的等待时间（以毫秒为单位）。

-   考虑以下情况：

    ```
    <!DOCTYPE html>

    <html lang="en">

        <head>
            <title>autocomplete</title>
        </head>

        <body>

            <input autocomplete="off" autofocus placeholder="Query" type="text">

            <ul></ul>

            <script src="large.js"></script>
            <script>

                let input = document.querySelector('input');
                input.addEventListener('keyup', function(event) {
                    let html = '';
                    if (input.value) {
                        for (word of WORDS) {
                            if (word.startsWith(input.value)) {
                                html += `<li>${word}</li>`;
                            }
                        }
                    }
                    document.querySelector('ul').innerHTML = html;
                });

            </script>

        </body>
    </html>

    ```

    这是自动完成的 JavaScript 实现。

- 值得一提的是，我们还可以使用 JavaScript 实现地理定位：

```

<!DOCTYPE html>

<html lang="en">
    <head>
        <title>geolocation</title>
    </head>
    <body>
        <script>

            navigator.geolocation.getCurrentPosition(function(position) {
                document.write(position.coords.latitude + ", " + position.coords.longitude);
            });

        </script>
    </body>
</html>

```
请注意，`navigator.geolocation` 被用于获取当前位置 (`getCurrentPosition`)。如果您的电脑或浏览器禁用了位置追踪功能，此操作将无法生效。

- JavaScript 功能强大，应用广泛，更多详情请参考 [JavaScript 文档](https://developer.mozilla.org/en-US/docs/Web/JavaScript)。

## 总结

在本课程中，您学习了如何创建自己的 HTML 文件、设置样式、利用第三方框架 (Frameworks) 以及使用 JavaScript。具体来说，我们讨论了……

- TCP/IP
- DNS
- HTML
- CSS
- 框架 (Frameworks)
- JavaScript

下节课再见！
