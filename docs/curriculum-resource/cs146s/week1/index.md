---
title: 第一周：编码 Agent 的内部机制
description: CS146S Week 1 — The Internals of Coding Agents | LLM 基础与 Agent 循环
---

import DocCardList from '@theme/DocCardList';

## 本周主题

**The Internals of Coding Agents —— 编码 Agent 的内部机制**

本周将深入编码 Agent 的内部工作原理，从 LLM 的本质出发，理解 Agent 循环（agent loop）的底层机制。

### 核心议题

- LLM 究竟是什么，Agent 循环在底层是如何运作的
- 核心工具集（read、write、edit、bash）以及任务如何在这些工具间流转
- 生产级编码 Agent 如何组织其系统提示词和工具定义

---

## 课程安排

### 第一讲：课程介绍 + 200 行代码构建 Claude Code

- **主题**：课程导论，从零开始用约 200 行代码构建一个编码 Agent
- **幻灯片**：[Google Slides](https://docs.google.com/presentation/d/1uztIhjHAG6O_9QOD1N_3wdhwhABml1fANXEN2dGwdbg/edit?usp=drive_link)
- **完整代码**：[Google Drive](https://drive.google.com/file/d/1DxKa_autBOu9s8DvItodgUAwH_pBg7aR/view?usp=drive_link)

### 第二讲：最先进的编码 Agent 是如何设计的

- **主题**：深入探讨定义 Agent 行为的系统提示词（system prompts），拆解最先进的编码 Agent 设计
- **幻灯片**：[Google Slides](https://docs.google.com/presentation/d/1RZu-p18Qybbgm8WVP2RH04ESc4Bn377B-T9j5-TBFdQ/edit?usp=drive_link)
- **提示词文件**：[Google Drive](https://drive.google.com/drive/folders/1c6_atVW0RrqEBWsNIscG2KNwCiuPxWQG?usp=drive_link)
- **课程记录**：[9-24-26-transcript.txt](/materials/9-24-26-transcript.txt)

---

## 阅读材料

本周共有 3 篇阅读材料，翻译版见下方链接：

1. [Building a Coding Agent —— 构建编码 Agent](./building-a-coding-agent)（[原文视频](https://youtube.com/watch?v=s7ZzkdvCMDY)）
2. [Lessons from Building Claude Code —— 构建 Claude Code 的经验教训](./lessons-from-building-claude-code)（[原文](https://x.com/trq212/status/2027463795355095314?s=20)）
3. [Dive into Claude Code —— 深入 Claude Code](./dive-into-claude-code)（[原文论文](https://arxiv.org/pdf/2604.14228)）

<DocCardList />
