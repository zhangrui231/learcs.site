---
title: 第一周作业报告
description: CS146S Week 1 作业报告 | Claude Code 会话追踪剖析
---

# 第一周作业报告

> **原文仓库**：[modern-software-dev-assignments/week1/writeup.md](https://github.com/mihail911/modern-software-dev-assignments/blob/main/week1/writeup.md)

## 第一部分：捕获

**环境设置**（足以让读者复现你的捕获）：
```
claude --version:  TODO
mitmproxy 版本:   TODO
代理命令:         TODO
设置文件:         TODO（路径 + env 块）
```

**会话描述。** 什么任务，针对什么仓库，产生了多少个 `POST /v1/messages` 请求？
> TODO

| 要求 | 证据 |
|---|---|
| 涉及 ≥ 2 个文件 | TODO |
| 至少失败一次 | TODO |
| 足够长以进行规划 | TODO |
| 你自己的仓库 | TODO |

**你从下面引用的摘录中脱敏了什么**，以及为什么：
> TODO


## 第二部分：系统提示词标注

**a. 结构。** 各主要章节按顺序，每章一行说明其作用，以及为什么是这个顺序。
> TODO

**b. 语气与冗长度。** 引用控制性指令，然后说明它们防范的失败模式。
```
TODO
```
> TODO

**c. 何时不行动。** 引用破坏性操作闸门、范围限制或拒绝条件，以及各自带来的好处。
```
TODO
```
> TODO

**d. 环境上下文。** Agent 被告知了关于机器/仓库/会话的什么，它位于请求的哪里（`system` 字段还是 `role: "system"` 消息）。
> TODO

**e. `<system-reminder>`。** 它们出现在哪里（引用一个示例），你能从证据中看出的两种不同用途，以及为什么在对话中间注入而不是在开头一次性说明。
```
TODO
```
> TODO


## 第三部分：工具设计标注

**清点。** 请求之间工具集是否变化？如果是，什么触发了变化？

| 内置 | MCP | 延迟 | **合计** | 会话中是否变化？ |
|---|---|---|---|---|
| TODO | TODO | TODO | **TODO** | TODO |

**两个工具。** 选择彼此有差异的工具。

| | 工具 1 | 工具 2 |
|---|---|---|
| 名称 | TODO | TODO |
| 关键 schema 字段 | TODO | TODO |
| 必需 vs 可选 vs 未暴露，以及原因 | TODO | TODO |
| 描述在防范……（引用 + 错误行为） | TODO | TODO |
| 故意*不做*……以及这暗示了什么 | TODO | TODO |

为什么选这两个？
> TODO


## 第四部分：行为分析

**每个答案必须标记 `[观察到的]` 或 `[推断的]` 并引用证据。未标记的答案不得分。**

**a. 错误恢复**：`TODO: 标记` · 证据：`TODO`

Agent 看到了什么，逐字引用：
```
TODO
```
它接下来尝试了什么，恢复花了几轮：
> TODO

**b. 规划**：`TODO: 标记` · 证据：`TODO`
> TODO

**c. 计划与任务状态**：`TODO: 标记` · 证据：`TODO` \
一个是如何创建和推进的？模型每轮看到关于任务状态的什么信息，它位于请求的哪里：
> TODO

**d. 子 Agent**：`TODO: 标记` · 证据：`TODO` \
Agent 何时委派，子 Agent 被告知了什么，返回了什么：
> TODO

**e. 上下文管理**：`TODO: 标记` · 证据：`TODO` \
随着会话增长，载荷中发生了什么变化：
> TODO


## 第五部分：反思

**两个你会借鉴的决策**，以及各自解决的问题：
1. TODO
2. TODO

**一个你会用不同方式做的**（认真讨论它可能存在的原因）：
> TODO

**这次追踪改变了你日常如何操控编码 Agent 的一件事**：
> TODO


## 提交
1. `Command (⌘) + F` 搜索 `TODO`。没有结果表示你完成了。
2. 确认引用的摘录中没有凭据或 `x-api-key` 头。
3. 将所有更改推送到你的远程仓库并通过 Gradescope 提交。
4. 别忘了从你的仓库 `.claude/settings.json` 中移除 `ANTHROPIC_BASE_URL`！
