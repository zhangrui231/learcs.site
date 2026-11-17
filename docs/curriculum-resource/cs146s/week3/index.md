---
title: "第三周：Agent 技能与命令行"
description: "CS146S Week 3 — Agent Skills and CLI | 技能体系、网页技能与命令行工作流"
---

import DocCardList from '@theme/DocCardList';

## 本周主题

**Agent Skills and CLI —— Agent 技能与命令行**

本周深入 Agent 技能（Skills）体系——如何用 `SKILL.md` 和脚本编码可复用的工作流，以及如何高效地从命令行与 Agent 协作。

### 核心议题

- 技能（Skills）是什么，`SKILL.md` 与脚本如何编码一套工作流
- 网页技能，以及如何把 Agent 能力扩展到仓库之外
- 如何高效使用命令行（CLI）

---

## 课程安排

### 第一讲（Tue 10/6）：关于 Agent 技能的一切

- **主题**：关于 Agent 技能的一切（含网页技能）
- **幻灯片**：[Google Slides](https://docs.google.com/presentation/d/15bPu5c-i8D8McTh6l7SpUPk2n9M_Y-CdDQLfyzL8RD8/edit?usp=sharing)

### 第二讲（Thu 10/8）：客座讲者 Lee Robinson

- **主题**：客座讲者 Lee Robinson（Model Behavior @ SpaceX）
- **幻灯片**：[Google Drive](https://drive.google.com/file/d/1b8WiBk_lcB3ue-jZMLijSUMLj6SDiF6Z/view?usp=drive_link)

---

## 阅读材料

本周 3 篇阅读材料均为项目/工具，不做翻译，直接访问原文：

### 项目/工具类

1. **[pstack](https://github.com/cursor/plugins/tree/main/pstack)** —— Cursor 的插件系统中的一个技能集合，展示了如何通过 `SKILL.md` 编码复杂的工作流。包含 37 个技能，覆盖代码审查、测试编写、调试等多种场景。

2. **[Matt Pocock's Skills](https://github.com/mattpocock/skills)** —— TypeScript 专家 Matt Pocock 维护的 Agent 技能集合，展示了技能编写的最佳实践，包括描述如何触发、正文如何编码判断力、支撑文件如何组织。

3. **[browse.sh](https://browse.sh)** —— 一个让 Agent 能够浏览网页的技能/工具，展示了如何将 Agent 的能力扩展到本地仓库之外，实现"网页技能"的概念。

<DocCardList />
