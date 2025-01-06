---
title: cs144
description: Stanford CS144| 斯坦福 计算机网络 | 计算机科学自学
---

import DocCardList from '@theme/DocCardList';

## 概述
CS144是一门计算机网络入门课程。你将学习计算机网络的基本原理，例如分组交换、分层、封装和协议；同时你还将学习诸如万维网、视频流媒体（如Netflix和Hulu）、视频会议（如Zoom和Skype）以及BitTorrent等应用程序如何使用网络进行通信。你将花费大量时间学习互联网工作的具体原理 - 这是迄今为止建立的最大的计算机网络。你将学习应用程序如何通过不可靠的互联网进行可靠通信。而且你将自己构建部分互联网！事实上，我们相信在CS144中，你构建的互联网基础设施部分比其他任何本科网络课程都要多。看到各个部分如何工作真的很有趣：你将构建一个互联网路由器和可靠的数据传输服务，然后用它与远程服务器通信。除了常规讲座外，我们还将邀请外部讲师进行一些课堂客座讲座。所有客座讲师都是优秀的演讲者，在大规模网络运作方面拥有多年经验。我们还将在常规讲课时间进行一次或多次课堂练习，这些练习旨在让你获得实验所需工具的实践经验。

## 课程版本
尽管不同年份的 CS144 课程内容基本保持一致，但从 2023 年春季开始，实验 (labs) 所使用的项目框架已从旧版的 Sponge 替换为 Minnow。 Minnow 和 Sponge 的核心目标相同，都是为了教学目的而提供简化的 TCP 协议实现，帮助学生理解 TCP 的运作原理。 主要区别在于，Minnow 在继承了 Sponge 教学目标的基础上进行了改进，旨在提供更清晰、易于理解且更符合现代 C++ 代码规范的框架。同时，Minnow 也适当降低了实验难度。为了方便查阅，社区会分别镜像保留这两个版本的详细资料。

## 课程视频
官方现在没有公开课程视频，社区采用的是YouTube 观看最多的cs144课程视频，并按章节将小段视频合并到一起,具体年份不详。在学习过程中，您可以根据个人喜好选择完成相应版本的labs。

## 课程网站
这门课程的网站可以通过以下链接访问：[https://cs144.stanford.edu](https://cs144.stanford.edu),课程结束时官网可能关闭。

## 先决条件
CS144的正式先修课程是CS110/CS111。CS144是一门基于实验的系统课程：成绩的45%来自C++编程实验，这意味着你需要非常熟悉C++和标准调试工具的使用（如果你正在阅读数千行printf输出，那说明你的方法有问题）。这个是课程官方网站上要求的先决条件，不必拘泥于CS110/CS111，有一定的计算机系统基础和相当的C++编程经验即可。


## 教材
课程没有指定教材，提供了可选的阅读材料
- [Kaashoek & Saltzer, “Principles of Computer System Design,” Chapters 7–8 (Networks & Fault Tolerance)](https://ocw.mit.edu/courses/res-6-004-principles-of-computer-system-design-an-introduction-spring-2009/pages/online-textbook/)
- [Kurose & Ross, “Computer Networking: A Top-Down Approach” 中文译本《自顶向下方法》](https://github.com/TimorYang/Computer-Networking-Keith-Ross/blob/main/book/%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C-%E8%87%AA%E9%A1%B6%E5%90%91%E4%B8%8B%E6%96%B9%E6%B3%95%E7%AC%AC%E4%B8%83%E7%89%88.pdf)
- [Peterson & Davie, “Computer Networks: A Systems Approach](https://book.systemsapproach.org/)
**强烈推荐 配合《自顶向下方法》学习**

## 相关资源
由于官方已经关闭了labs 的代码骨架，所以社区提供了两个其他人从官网fork的版本，以供学习。
- [Minnow](https://github.com/flukehn/minnow) 采用的C++20 标准
- [Sponge](https://github.com/gene1974/sponge) 采用的C++17 标准
- [自顶向下方法 编程作业和代码](https://github.com/moranzcw/Computer-Networking-A-Top-Down-Approach-NOTES)

<DocCardList />