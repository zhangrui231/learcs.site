---
title: "AGENTS.md (Factory Docs) —— AGENTS.md 文档"
description: "CS146S Week 4 阅读材料翻译 | AGENTS.md 格式规范与最佳实践"
---

# AGENTS.md (Factory Docs) —— AGENTS.md 文档

> **原文链接**：[https://docs.factory.com/harness/agents-md](https://docs.factory.com/harness/agents-md)
>
> **来源**：Factory 文档
>
> **来源**：CS146S Week 4 Reading

---

## 原文（英文）

*请通过上方原文链接阅读完整英文原文。*

---

## 中文翻译

### AGENTS.md 文档

`AGENTS.md` 是一个放在仓库根目录的配置文件，用于告诉 AI Agent 关于这个仓库的一切它需要知道的信息。它是 Agent 与代码仓库之间的"说明书"。

#### 什么是 AGENTS.md

`AGENTS.md` 是一个开放标准（见 [agents.md](https://agents.md/)），被越来越多的 AI 编码工具支持。它的作用是：

- 告诉 Agent 这个项目是什么
- 如何构建、测试、运行项目
- 代码遵循什么约定
- 哪些东西不应该碰

本质上，它是你写给 Agent 的"入职文档"——就像你会给一个新来的开发者写的那份一样。

#### 文件结构

一个好的 `AGENTS.md` 应该包含以下部分：

**1. 项目概述**

几句话说明项目是什么、做什么。让 Agent 知道它在处理的领域。

**2. 架构**

关键目录、入口点、各模块如何关联。不需要面面俱到，但要覆盖 Agent 最可能需要操作的部分。

**3. 命令**

构建、测试、lint、运行的**确切命令**。不要写"运行测试"，要写 `pixi run pytest tests/`。Agent 会直接复制粘贴这些命令。

**4. 约定**

测试范式（如用 pytest、测试文件放在 `tests/` 下）、代码风格规则、命名模式。这些是仓库中实际使用的约定，不是通用最佳实践。

**5. 护栏**

什么是生成的（不要手动编辑）、什么是 vendored 的、哪些命令看起来合理但会出问题。

#### 最佳实践

**每一行都要特定于这个仓库。** 通用建议（如"写干净的代码"）是填充物——一个称职的模型已经知道了。只有这个仓库特有的信息才有价值。

**保持简洁。** `AGENTS.md` 会加载到每次 Agent 交互的上下文中。太长会浪费 token 和注意力。目标是一页左右。

**不要重述 README。** README 是给人类看的，AGENTS.md 是给 Agent 看的。如果 README 里已经有了构建说明，AGENTS.md 里可以直接引用，不需要复制。

**使用确切的命令。** `npm run test:unit` 比"运行单元测试"好一万倍。Agent 会执行你写的命令，不要留歧义。

**标注禁区。** 如果有生成的文件、vendored 的依赖、或不应该手动编辑的目录，明确说出来。Agent 不知道哪些文件是自动生成的。

#### AGENTS.md vs CLAUDE.md

`AGENTS.md` 和 `CLAUDE.md` 服务于相同的目的，但：

- `AGENTS.md` 是开放标准，被多种 Agent 工具支持（Factory、Cursor 等）
- `CLAUDE.md` 是 Claude Code 特有的格式
- 两者在内容上基本相同，可以互相转换

建议：如果你只用 Claude Code，用 `CLAUDE.md`；如果你希望仓库对多种 Agent 工具友好，用 `AGENTS.md`。

#### 示例

```markdown
# AGENTS.md

## 项目概述
这是一个用 FastAPI + SQLite 构建的 TODO 应用。

## 架构
- `app/main.py` — 应用入口
- `app/models/` — 数据模型
- `app/routers/` — API 路由
- `tests/` — 测试文件

## 命令
- 构建：`pip install -e .`
- 测试：`pytest tests/ -v`
- Lint：`ruff check .`
- 运行：`uvicorn app.main:app --reload`

## 约定
- 测试文件以 `test_` 开头，放在 `tests/` 对应子目录
- 使用 ruff 做 lint，行宽 100
- API 路由用 APIRouter，不用 Flask 风格的装饰器

## 护栏
- `app/migrations/` 是自动生成的，不要手动编辑
- 不要修改 `pyproject.toml` 中的依赖版本，用 `poetry add`
```

#### 结论

`AGENTS.md` 是让代码仓库变为 "Agent 就绪" 的最简单有效的方式。一个好的配置文件可以让 Agent 的准确性和效率显著提升，而一个差的（或缺失的）配置文件会让 Agent 反复犯错、浪费时间在错误的路径上。

---

> 原文版权归原作者所有，翻译仅供学习交流。
