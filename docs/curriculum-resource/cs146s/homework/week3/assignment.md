---
title: 第三周作业：编写一个技能
description: CS146S Week 3 作业 | 编写 Agent 技能并验证其触发与执行
---

# 第三周：编写一个技能

> **原文仓库**：[modern-software-dev-assignments/week3/assignment.md](https://github.com/mihail911/modern-software-dev-assignments/blob/main/week3/assignment.md)

## 作业概述

技能是可重复流程的载体：那些你本来每次都要粘贴到聊天中的检查清单。本周你将编写一个技能，将它指向一个真实的开源仓库，并验证它是否该触发时触发、运行时是否经得起考验。

### 学习目标

- **识别**一个值得编码化而非反复解释的工作流。
- **编写**一个描述能可靠触发、正文编码了判断力而非仅仅是步骤的技能。
- **验证**它该触发时触发，运行时经得起考验。

## 参考资料

- **[agentskills.io](https://agentskills.io)**：开放标准，目前大多数 Agent 都支持。
- **[Claude Code 技能文档](https://code.claude.com/docs/en/skills)**：一种实现，对文件布局和 frontmatter 有参考价值。
- **[示例技能](https://github.com/mattpocock/skills)**：在写你自己的之前先读几个。

## 目标仓库

选择一个作为目标，或使用你自己的。

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

## 第一部分：选择工作流（15 分）

选择一个你会**不止一次**运行的东西，其中至少有一个真正的决策点。一个固定的单条命令是 shell 别名，不是技能。

建议，如果你不想自己发明：

| 技能 | 它做什么 |
|---|---|
| Issue 转实现计划 | 阅读一个 issue，检查相关代码，浮现模糊点，产出分步计划 |
| PR 审查 | 按固定评分标准审查 diff，引用精确文件和行号，区分阻碍项和建议项 |
| Bug 复现 | 构建最小复现，形成假设，运行有针对性的测试，然后才提出修复 |
| 测试编写 | 决定哪些行为需要测试，匹配仓库的约定，编写并运行测试 |
| 仓库上手 | 给定一个任务如"添加认证"，为新开发者指引方向：架构、命令、可能的修改点 |
| 代码库迁移 | 为类似 Pydantic v1 到 v2 的情况编码检测规则和安全转换步骤 |
| 依赖升级 | 阅读 changelog，识别破坏性变更，应用并验证 |
| 截图转实现 | 使用仓库现有组件从截图实现 UI，然后视觉验证 |
| 性能调查 | 建立基线，在修改前先 profile，做一个有针对性的修复，对比 |
| 安全审查 | 对新代码进行一个聚焦类别的检查，要求证据而非推测性警告 |

先手动运行一次。你无法编码一个你没做过的流程。

## 第二部分：编写技能（60 分）

编写一个遵循 Agent 技能标准的 `SKILL.md`，放在你的 Agent 发现技能的目录中。Claude Code、Cursor 等都读取相同格式；查看你的 Agent 文档了解它查找的目录。得分要点：

- **能触发的描述。** 必须说明技能做什么*以及何时使用*，用人们实际会输入的话来说。大多数技能失败的原因是从不触发。
- **判断力，不只是步骤。** 说明在模糊情况下如何决定，以及不要做什么。工具文档的重述教不了任何东西。
- **精确命令**用于确定性部分。
- **精简的正文。** 正文在技能每次触发时都会加载到上下文中，所以把长参考材料推到技能目录下的支撑文件中并引用它们，而不是全部内联。

## 第三部分：测试（25 分）

- **触发测试**：三个应该触发它的提示，以及一个不应触发的近似未命中。报告实际发生了什么。如果近似未命中触发了它，说明你的描述太宽泛了。
- **运行测试**：在你选择的仓库上端到端使用它并展示结果。

## 交付物

在 `week3/` 中：你的技能目录（`SKILL.md` 加任何支撑文件）和一份完成的 `writeup.md`。

## 评分标准（共 100 分）

| 部分 | 分值 | 什么可以获得满分 |
|---|---|---|
| 一、工作流 | 15 | 确实可重复，有真正的决策点，先手动运行过 |
| 二、技能 | 60 | 能触发的描述、编码的判断力、精确命令、精简正文并在适当时有支撑文件 |
| 三、测试 | 25 | 包含近似未命中的触发测试，加上一次端到端运行 |

## 提交说明

1. 确保所有更改已推送到你的远程仓库以供评分。
2. **确保你已在作业仓库中添加 `mihail911`、`isaackann` 和 `vdaita` 为协作者。**
3. 通过 Gradescope 提交。
