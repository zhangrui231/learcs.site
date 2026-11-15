---
title: 第四周作业：让混乱的仓库变为 Agent 就绪
description: CS146S Week 4 作业 | 编写 AGENTS.md 或 CLAUDE.md 配置文件
---

# 第四周：让混乱的仓库变为 Agent 就绪

> **原文仓库**：[modern-software-dev-assignments/week4/assignment.md](https://github.com/mihail911/modern-software-dev-assignments/blob/main/week4/assignment.md)

## 作业概述

选择一个你不熟悉的开源仓库，编写它缺少的 Agent 配置文件：`AGENTS.md` 或 `CLAUDE.md`，你选哪个都行。重点是练习一个好的配置文件的**结构和内容**：什么该放进去，什么不该放，以及它需要多具体才能真正有用。

### 学习目标

- **熟悉**一个不熟悉的代码库，足以准确描述它。
- **编码**那些知识为持久的、可执行的仓库上下文。
- **判断**什么属于 Agent 配置文件，什么是噪音。

## 参考资料

- **[AGENTS.md 格式](https://agents.md/)**
- **[写好 CLAUDE.md](https://www.hlyr.dev/blog/writing-a-good-claude-md)**
- **[Claude Code 最佳实践](https://code.claude.com/docs/en/best-practices)**

## 示例仓库

| 仓库 |
|---|
| [bigskysoftware/htmx](https://github.com/bigskysoftware/htmx) |
| [iamkun/dayjs](https://github.com/iamkun/dayjs) |
| [slidevjs/slidev](https://github.com/slidevjs/slidev) |
| [pixijs/pixijs](https://github.com/pixijs/pixijs) |
| [yt-dlp/yt-dlp](https://github.com/yt-dlp/yt-dlp) |
| [AUTOMATIC1111/stable-diffusion-webui](https://github.com/AUTOMATIC1111/stable-diffusion-webui) |
| [TheAlgorithms/Python](https://github.com/TheAlgorithms/Python) |
| [vuejs/vue](https://github.com/vuejs/vue) |
| [react/react](https://github.com/react/react) |

你也可以用自己的，只要不是你自己写的仓库。

## 第一部分：探索仓库（20 分）

先 Fork 它，然后弄清它实际是怎么运作的：

- 它如何构建、测试、lint 和运行？拿到**确切的**命令。
- 主要的目录和入口点是什么？
- 代码遵循了哪些没有明说的约定？
- 什么是生成的、vendored 的或不应该手动编辑的？

用 Agent 帮你探索。这是最快的方式。

## 第二部分：编写文件（55 分）

在你的 fork 根目录下编写 `AGENTS.md` 或 `CLAUDE.md`。至少覆盖：

- **项目是什么**：几句话，让 Agent 知道领域。
- **架构**：关键目录、入口点、各部分如何关联。
- **命令**：构建、测试、lint、运行。确切且可直接复制粘贴：`pixi run pytest tests/`，不是"运行测试"。
- **约定**：测试范式、风格规则、仓库实际使用的命名模式。
- **护栏**：不要碰什么，以及值得警告的看似合理但错误的命令或目录。

质量标准：每一行都应该**特定于这个仓库**。一个称职的模型已经遵循的通用建议是填充物，README 的重述也是。这个文件会加载到每个上下文中，所以长度是有成本的。控制在一页左右。

## 第三部分：试用（25 分）

在配置文件就位的情况下，对该仓库运行两个小任务，比如运行测试套件和做一个小改动。

报告你看到的：Agent 是否使用了你的命令并遵循了你的约定？然后说出**基于观察你会改变的一件事**。

## 交付物

在 `week4/` 中：你的 `AGENTS.md` 或 `CLAUDE.md`、一份完成的 `writeup.md`，以及你的 fork 链接。

## 评分标准（共 100 分）

| 部分 | 分值 | 什么可以获得满分 |
|---|---|---|
| 一、探索 | 20 | 准确记录构建/测试/lint 命令、结构和约定 |
| 二、文件 | 55 | 五个方面全覆盖、特定于仓库、确切命令、简洁 |
| 三、试用 | 25 | 两个任务运行并如实报告，加上一个有依据的改进 |

## 提交说明

1. 确保所有更改已推送到你的远程仓库以供评分。
2. **确保你已在作业仓库中添加 `mihail911`、`isaackann` 和 `vdaita` 为协作者。**
3. 通过 Gradescope 提交。
