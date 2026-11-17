---
title: "Steering Claude Code: Skills, Hooks, Rules, Subagents, and More —— 操控 Claude Code：技能、Hooks、规则、子 Agent 等"
description: "CS146S Week 4 阅读材料翻译 | Claude Code 的多种操控机制"
---

# Steering Claude Code: Skills, Hooks, Rules, Subagents, and More —— 操控 Claude Code

> **原文链接**：[https://claude.com/resources/articles/steering-claude-code-skills-hooks-rules-subagents-and-more](https://claude.com/resources/articles/steering-claude-code-skills-hooks-rules-subagents-and-more)
>
> **来源**：Claude 官方资源
>
> **来源**：CS146S Week 4 Reading

---

## 原文（英文）

*请通过上方原文链接阅读完整英文原文。*

---

## 中文翻译

### 操控 Claude Code：技能、Hooks、规则、子 Agent 等

Claude Code 提供了多种机制来定制和操控 Agent 的行为。理解这些机制以及它们各自适合的场景，是高效使用 Claude Code 的关键。

#### 1. CLAUDE.md（项目记忆）

`CLAUDE.md` 是 Claude Code 的项目级配置文件，放在仓库根目录。它告诉 Claude 关于这个仓库需要知道的一切：

- 项目是什么、如何构建、如何测试
- 代码约定和风格规则
- 不应该碰的文件和目录

`CLAUDE.md` 在每次会话开始时自动加载到上下文中，是影响 Claude 行为的最基础方式。

**层级结构**：Claude Code 支持多级 `CLAUDE.md`——根目录的适用于整个项目，子目录的适用于该目录下的操作。这使得你可以为不同模块提供不同的指令。

#### 2. Skills（技能）

技能是可复用工作流的载体。一个技能是一个 `SKILL.md` 文件加可选的支撑文件，放在 `.claude/skills/` 目录下。

技能的核心机制是**渐进式披露**：

- 技能的描述（description）始终在上下文中
- 但技能的正文（body）只有在触发时才加载
- 这使得你可以拥有几十个技能而不会撑爆上下文

技能适合编码工作流，如"如何审查 PR"、"如何调试测试失败"、"如何添加新的 API 端点"。

#### 3. Hooks（钩子）

Hooks 是在 Agent 操作的生命周期中自动执行的脚本。它们让你可以在关键时刻注入自定义逻辑：

- **PreToolUse**：在工具执行前运行，可以阻止危险操作（如删除文件）
- **PostToolUse**：在工具执行后运行，可以自动运行 lint 或格式化
- **Notification**：在 Claude 发送通知时运行

Hooks 的典型用途：

- 每次编辑文件后自动运行 `ruff format`
- 阻止对 `main` 分支的直接推送
- 在测试失败时发送 Slack 通知

#### 4. Rules（规则）

规则是写在 `CLAUDE.md` 或技能中的行为指令。它们不像 Hooks 那样强制执行，而是作为提示词的一部分影响模型的行为。

好的规则应该是：

- **具体的**：不要写"写好代码"，要写"所有公共函数必须有类型注解和 docstring"
- **可执行的**：规则应该可以被验证（通过 lint、测试或人工审查）
- **有理由的**：说为什么这样规定，帮助模型在边缘情况下做出正确判断

#### 5. Subagents（子 Agent）

子 Agent 是一种委派模式：主 Agent 可以启动一个子 Agent 来处理特定任务，子 Agent 在独立的上下文中工作，完成后将结果返回给主 Agent。

子 Agent 的核心价值是**上下文隔离**：

- 子 Agent 的中间步骤不会进入主 Agent 的上下文
- 只有最终结果被注入回主上下文
- 这使得主 Agent 可以保持精简的上下文，同时处理复杂任务

典型模式：

- **规划器 / 实现器**：规划器制定计划，实现器逐步执行
- **审查器**：在 PR 创建后，启动一个审查子 Agent 检查代码质量
- **研究员**：启动一个子 Agent 专门探索代码库，返回相关文件列表和摘要

#### 6. 权限模式

Claude Code 提供了三种权限模式来控制 Agent 的自主程度：

- **询问模式**：每个操作都需要用户确认
- **自动接受模式**：自动接受文件编辑，但 shell 命令仍需确认
- **全自主模式**：所有操作自动执行（危险，仅在受控环境中使用）

选择哪种模式取决于任务的复杂度和你的信任程度。好的做法是从询问模式开始，随着对 Agent 行为的信任增加，逐步放宽权限。

#### 各机制的适用场景

| 机制 | 适合什么 | 不适合什么 |
|---|---|---|
| CLAUDE.md | 仓库知识、构建命令、约定 | 复杂的多步工作流 |
| Skills | 可复用的编码工作流 | 一次性任务 |
| Hooks | 强制执行的操作（lint、格式化） | 需要模型判断的事情 |
| Rules | 行为指导 | 需要保证执行的操作 |
| Subagents | 上下文密集的子任务 | 简单的直接操作 |

#### 结论

Claude Code 的操控不是单一机制——它是一个工具箱。理解每个工具的作用和局限，根据场景组合使用，才能最大化 Agent 的效率同时保持对质量的控制。

---

> 原文版权归原作者所有，翻译仅供学习交流。
