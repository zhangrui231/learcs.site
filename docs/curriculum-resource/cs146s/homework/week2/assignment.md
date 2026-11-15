---
title: 第二周作业：为第三方 API 构建 MCP 服务器
description: CS146S Week 2 作业 | 构建 MCP 服务器、OAuth 流程与 Agent 人机工程学
---

# 第二周：为第三方 API 构建 MCP 服务器

> **原文仓库**：[modern-software-dev-assignments/week2/assignment.md](https://github.com/mihail911/modern-software-dev-assignments/blob/main/week2/assignment.md)

## 作业概述

构建一个 MCP 服务器，将第三方 API 暴露给你的编码 Agent。API 的对接工作是简单的部分。评分重点是 **Agent 人机工程学**：模型能否选对工具、正确调用它、在出错时恢复。另外还需要一个可用的 **OAuth** 流程，因为大多数值得封装的 API 都不接受静态密钥。

### 学习目标

- **设计**面向一个只看得到你的 schema 和描述的消费者的工具接口。
- **实现**在长期运行的服务器中的 OAuth 令牌获取、缓存和刷新。
- **观察**你的设计选择如何改变 Agent 的实际行为。

## 参考资料

- **[FastMCP](https://github.com/jlowin/fastmcp)**：你将使用的构建工具。
- **[MCP 规范](https://modelcontextprotocol.io/)**：工具注解、传输方式、错误语义。
- **[参考 MCP 服务器](https://github.com/modelcontextprotocol/servers)**：在写你自己的之前先读一个。

## 第一部分：构建服务器（25 分）

选择一个使用 **OAuth 2.0** 的 API：GitHub、Google（Gmail/Calendar/Drive）、Notion、Linear、Slack、Spotify 和 Strava 都符合要求。选一个你实际在用的；你会更好地判断工具应该做什么。

要求：

- **至少 3 个工具**，且必须能**组合使用**：一个的输出喂给另一个（例如 `search_x` 返回 ID，`get_x(id)` 接受该 ID）。
- **至少一个写工具**，修改真实状态。
- 代码放在 `week2/` 中，通过 stdio 运行，用一条有文档的命令启动。

## 第二部分：Agent 人机工程学（30 分）

这就是作业的核心。下面每个选择都围绕一个事实：Agent 只看得到你的 schema 和 docstring，*别无其他*。

- **约束放在 schema 里，不是散文中。** `sort: Literal["stars", "forks"]` 胜过 `sort: str` 加一句 docstring。如果 schema 和 docstring 不一致，Agent 会得到无法解释的验证失败。
- **塑造你的输出。** 不要直接透传原始 API JSON。选择 Agent 需要的字段。原始载荷 token 消耗大，而且会把你的契约耦合到别人的 API。
- **错误是数据，不是 traceback。** 返回结构化的、可操作的内容，包含足够的细节让 Agent 区分*不要重试*（错误的 ID）和*应该重试*（限流、网络抖动）。一个 traceback 会结束 Agent 的回合；`{"error": "限流，42 秒后重试"}` 不会。
- **Docstring 就是契约。** 说明 ID 从哪里来（"来自 `list_templates` 的数字 ID"）以便工具链式调用。使用 `FastMCP(instructions=...)` 提供跨工具的工作流指导。
- **写工具需要刹车。** 使用工具注解（在读工具上用 `readOnlyHint`），给不可逆工具一个 `dry_run` 参数或"预览-再提交"的分离设计。

## 第三部分：OAuth（25 分）

一个真正的 OAuth 流程，不是粘贴的 bearer token。

- 完整的授权码交换，带有**缓存的**令牌和过期时的**静默刷新**。
- **最小权限范围。** 如果你只读取就申请只读权限，并在报告中说明每个 scope 的理由。
- **仓库中不含密钥。** 从第一个 commit 起就从环境变量读取。提交 `.mcp.json.example`；gitignore 真正的那个。
- **处理令牌在会话中途过期。** 长期运行的服务器不能在工具调用时尝试打开浏览器。返回一个可操作的错误。

## 第四部分：集成与演示（20 分）

- 将服务器注册到 Claude Code 或 Cursor，并提交配置（`.mcp.json.example`）。
- **展示一个端到端记录**，其中 Agent 链式调用了至少两个你的工具来回答一个真实提示：提示内容、哪些工具以什么参数被调用、以及结果。
- **展示一个失败**以及你的错误设计如何处理它。必要时可以故意触发（错误 ID、撤销令牌）。
- 至少一个通过 **MCP 协议**测试服务器的测试，而不仅仅是调用你的 Python 函数。

## 交付物

在 `week2/` 中：你的服务器代码、`.mcp.json.example`、测试和一份完成的 `writeup.md`。

## 评分标准（共 100 分）

| 部分 | 分值 | 什么可以获得满分 |
|---|---|---|
| 一、服务器 | 25 | 3+ 个可组合工具，一个写工具，用一条有文档的命令运行 |
| 二、Agent 人机工程学 | 30 | schema 级约束、塑造输出、结构化错误、链式 docstring、写工具上的刹车 |
| 三、OAuth | 25 | 可用的码交换含缓存和刷新；最小合理 scope；无提交的密钥；合理的会话中途过期处理 |
| 四、集成 | 20 | 提交的配置、真实的链式记录、演示的失败路径、一个协议级测试 |

对提交的密钥以及 docstring 与 schema 矛盾的工具会扣分。

## 提交说明

1. 确保所有更改已推送到你的远程仓库以供评分。
2. **确保你已在作业仓库中添加 `mihail911`、`isaackann` 和 `vdaita` 为协作者。**
3. 通过 Gradescope 提交。
4. **可选：完成后清理**：从你的 Agent 配置中移除服务器（`claude mcp remove <name>`，或删除本地 `.mcp.json` 条目），删除缓存的令牌文件，并从提供商的账户设置中撤销 OAuth 应用的访问权限。
