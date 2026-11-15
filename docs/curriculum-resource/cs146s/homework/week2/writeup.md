---
title: 第二周作业报告
description: CS146S Week 2 作业报告 | MCP 服务器构建与 Agent 人机工程学
---

# 第二周作业报告

> **原文仓库**：[modern-software-dev-assignments/week2/writeup.md](https://github.com/mihail911/modern-software-dev-assignments/blob/main/week2/writeup.md)

## 第一部分：服务器

**选择的 API**，以及原因：
> TODO

**如何运行**（一条命令）：
```
TODO
```

| 工具 | 它做什么 | 读/写 | 与什么组合 |
|---|---|---|---|
| TODO | TODO | TODO | TODO |
| TODO | TODO | TODO | TODO |
| TODO | TODO | TODO | TODO |


## 第二部分：Agent 人机工程学

对每一项，指出代码位置（`文件:行号`）并说明它带来的好处。

| 决策 | 位置 | 原因 |
|---|---|---|
| schema 级约束 | TODO | TODO |
| 输出塑造（保留 vs 丢弃的字段） | TODO | TODO |
| 结构化错误（重试 vs 不重试） | TODO | TODO |
| 链接工具的 docstring | TODO | TODO |
| 写工具上的刹车 | TODO | TODO |

**在观察到 Agent 误用工具后你改变的一件事：**
> TODO


## 第三部分：OAuth

**流程**：令牌如何获取、缓存和刷新：
> TODO

**申请的权限范围**，以及为什么每个都是必要的：
> TODO

**密钥管理**：什么在环境变量中，什么被 gitignore：
> TODO

**令牌在会话中途过期**：Agent 看到什么：
> TODO


## 第四部分：集成

**注册配置**（`.mcp.json.example`）以及你使用的客户端：
> TODO

**端到端记录**：提示内容、被调用的工具及其参数、结果：
```
TODO
```

**一个被处理的失败**：你触发了什么，Agent 看到了什么，它接下来做了什么：
```
TODO
```

**协议级测试**：它覆盖了什么，如何运行：
> TODO


## 提交
1. `Command (⌘) + F` 搜索 `TODO`。没有结果表示你完成了。
2. 确认没有提交令牌、客户端密钥、缓存的令牌文件或真正的 `.mcp.json`。
3. 将所有更改推送到你的远程仓库并通过 Gradescope 提交。
4. 清理（可选）：从 Agent 配置中移除服务器，删除缓存的令牌，并撤销 OAuth 应用的访问权限。
