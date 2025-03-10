---
sidebar_position: 1
description: cs50x 练习题 重做
title: 重做
---

# CS50x 2023：Radio Shack 网站重构项目

## [学习目标](#learning-goals)

-   熟悉网页设计的历史，了解...
-   学习使用现代 Web 开发工具

## [背景](#background)

我们所知的万维网自 20 世纪 90 年代中期才出现。早期开发网站的工具非常有限：没有 CSS 或 JavaScript，并且 HTML 在不同的浏览器上的呈现方式也不同。最早的网站之一是 [amazon.com](https://amazon.com/)。

![amazon](/img/cs50/amazon.png )

和今天比起来，简直是天壤之别！

另一个早期的网站是 RadioShack。他们在 1996 年的第一个网站的外观与当时的网站非常相似。最热门的设计元素是笨重的按钮和重复的背景图案。

![RadioShack1996](/img/cs50/radio1996.png )

早期网站常见的功能是提供“纯文本版”链接。因为互联网连接速度非常慢，图像加载速度可能会非常慢！硕大的RadioShack标志和对应的按钮实际上是集成在一张图片里的：这些按钮通过HTML的`map`标签实现点击功能，这种技术现在已经很少用了。

```
<map name="rsmap">
<area shape="rect" coords="8,246,122,297" href="http://www.radioshack.com/rsstorelocator/rszip?1">
<area shape="rect" coords="123,246,240,297" href="http://www.radioshack.com/rsfuture.html">
<area shape="rect" coords="241,246,358,297" href="http://www.tandy.com/contacts/">
<area shape="rect" coords="359,246,475,297" href="http://www.tandy.com/press.html">
<area shape="rect" coords="476,246,599,297" href="http://www.radioshack.com/history/">
</map>

```

当时对字体控制很有限，设计师只能使用用户电脑上已有的字体。因此，Web 设计师必须小心仅使用非常常见、标准的字体。

到 1997 年，RadioShack 显着升级了其网站的外观，现在看起来像这样。注意那个3D旋转的“R”字，在当时可是很流行的设计！

![radio1997](/img/cs50/spinningR.gif )

为了实现这种行列布局，整个页面都是用HTML表格搭建的。当时还没有现在这么方便的布局方式，设计师们会用一个1x1像素的透明图片`dot_clear.gif`来控制页面元素的显示位置。虽然表格的本意不是用来布局，但在当时，设计师们也没什么别的选择。

```
<table border="0" cellspacing="0" cellpadding="0" width="969"><tr valign="top" align="left">
	<td colspan="1" width="10"><img src="dot_clear.gif" width="10" height="1" border="0"></td>
	<td colspan="1" width="2"><img src="dot_clear.gif" width="2" height="1" border="0"></td>
	<td colspan="1" width="35"><img src="dot_clear.gif" width="35" height="1" border="0"></td
 ...

```

因为字体选择很少，所以页面上除了标准的“Times Roman”字体以外，其他文字都是做成图片再放上去的。

[看看 90 年代的一些其他网站设计。](https://www.justinmind.com/blog/10-90s-websites-designs-you-wont-believe-existed/)

现在，请用现代Web开发工具重新设计RadioShack的网站（只改主页就行！）。记住，别再用表格布局、html map或者旋转logo了！

## [开始](#getting-started)

1.  使用您的 GitHub 帐户登录 [cs50.dev](https://cs50.dev/)。
2.  单击终端窗口内部并执行 `cd`。
3.  执行 `wget https://cdn.cs50.net/2022/fall/labs/8/redo.zip`，然后按 Enter 键，以便在您的 codespace 中下载一个名为 `redo.zip` 的 zip 文件。请务必注意`wget`命令和URL之间的空格，以及其他任何字符的输入！
4.  现在执行 `unzip redo.zip` 以创建一个名为 `redo` 的文件夹。
5.  您不再需要 ZIP 文件，因此您可以执行 `rm redo.zip` 并在提示符下回复“y”，然后按 Enter 键。

## [实现细节](#implementation_details)

请注意，您收到了三个文件夹 `radio1996/`、`radio1997/` 和 `radiotoday/`。您可以探索 Radio Shack 1996 年和 1997 年网站的实现，但最终您将在 `radiotoday/` 中创建自己的迭代。

目前最流行的前端 Web 开发工具之一是 [Bootstrap](https://getbootstrap.com/docs/)。它是免费的、开源的，旨在实现网站和 Web 应用程序的响应式开发。它构建在 CSS 和 JavaScript 之上，使开发人员能够快速创建网站，而无需重新创建常用功能，例如交互式按钮、导航系统、列和网格。

不妨先试试Bootstrap的[Navbar](https://getbootstrap.com/docs/5.2/components/navbar/)组件，用它来快速创建一个自定义导航栏，管理所有菜单选项。在Bootstrap文档里找到一个最简单的Navbar示例，然后把代码复制到`index.html`文件的`<body>`标签里。
```
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>
</nav>

```

当您运行 `http-server` 预览网页时，您会在顶部看到“Features”、“Pricing”等菜单项。把这些改成你 RadioShack 主页对应的菜单项。你不需要为这些菜单项创建额外的链接页面。如果需要，修改每个菜单项的 `href=#` 属性，指向相应的 HTML 页面即可。

接下来，看看其他的 bootstrap 功能。看看如何不用 90 年代那种表格的方式[创建列](https://getbootstrap.com/docs/5.2/layout/columns/)。

你可能还需要了解如何创建[响应式图像](https://getbootstrap.com/docs/5.2/content/images/)，让图片可以随着页面大小自动缩放，在各种设备上都能有最佳显示效果。

在考虑主页图片时，不妨看看如何创建[轮播](https://getbootstrap.com/docs/5.2/components/carousel/)，实现图片的自动循环播放。

你是设计师，设计全由你说了算。尽情发挥，看看你能做出什么好东西！如果您想使用，则包含一个更新的 RadioShack 标志。

## [思考题](#thought-question)

-   您认为为什么这么多设计师使用 Bootstrap，而不是创建自己的 CSS？

## [如何测试您的代码](#how-to-test-your-code)

此作业没有 `check50`！为了确保您页面上的代码有效，您可以使用此 [Markup Validation Service](https://validator.w3.org/#validate_by_input)，将您的 HTML 直接复制并粘贴到提供的文本框中。

## [如何提交](#how-to-submit)

无需提交！这是一个练习题。
