---
title: "Writing a Good CLAUDE.md —— 如何写好 CLAUDE.md"
description: "CS146S Week 4 阅读材料翻译 | CLAUDE.md 的编写最佳实践"
---

# Writing a Good CLAUDE.md —— 如何写好 CLAUDE.md

> **原文链接**：[https://hlyr.dev/blog/writing-a-good-claude-md](https://hlyr.dev/blog/writing-a-good-claude-md)
>
> **作者**：hlyr
>
> **来源**：CS146S Week 4 Reading

---

## 原文（英文）

*请通过上方原文链接阅读完整英文原文。*

---

## 中文翻译

### 如何写好 CLAUDE.md

`CLAUDE.md` 是 Claude Code 在你的仓库中寻找的第一个文件。它就像是给 Agent 的入职手册——告诉它这个项目是什么、怎么工作、什么不能碰。一个好的 `CLAUDE.md` 可以让 Agent 的准确率显著提升，而一个差的只会浪费 token 和制造混乱。

#### 核心原则

**1. 每一行都要特定于这个仓库**

通用建议是填充物。一个称职的模型已经知道"写干净的代码"和"遵循最佳实践"。你仓库里的 `CLAUDE.md` 应该只包含**这个仓库特有**的信息——那些模型不可能从代码本身推断出来的东西。

**2. 确切的命令，不是描述**

```
# 不好
运行测试套件
运行 linter

# 好
pytest tests/ -v --tb=short
ruff check . && ruff format --check .
```

Agent 会直接执行你写的命令。模糊的描述导致猜测，猜测导致错误。

**3. 保持简洁**

`CLAUDE.md` 在每次交互时都加载到上下文中。它越长，每次调用的 token 成本就越高，模型对关键信息的注意力也越分散。目标是一页左右——如果需要更多，考虑拆分到子目录的 `CLAUDE.md` 或技能文件中。

**4. 不要重述 README**

README 是给人类看的。如果 README 里已经有构建说明，`CLAUDE.md` 不需要重复。可以直接引用："构建说明见 README 的 Quick Start 部分"。

#### 应该包含什么

**项目概述（2-3 句话）**

让 Agent 知道它在处理什么领域的项目。这不只是礼貌——它影响模型对代码意图的理解。

**架构速览**

关键目录和入口点。不需要完整的架构图——只需要 Agent 最可能需要操作的目录结构。

**命令清单**

| 操作 | 命令 |
|---|---|
| 安装依赖 | `poetry install` |
| 运行测试 | `pytest tests/ -v` |
| Lint | `ruff check .` |
| 格式化 | `ruff format .` |
| 本地运行 | `uvicorn app.main:app --reload` |

**约定**

- 测试文件以 `test_` 开头，与源文件镜像放置
- 所有 API 端点返回 Pydantic 模型，不返回裸 dict
- 数据库迁移用 Alembic，不手动改 SQL

**护栏**

- `app/migrations/versions/` 是自动生成的，不要手动编辑
- `static/` 下的文件由构建步骤生成，不直接修改
- 不要在代码中硬编码环境特定值，用 `.env` 文件

#### 不应该包含什么

**通用编程建议**

"遵循 SOLID 原则"、"写有意义的变量名"——这些模型已经知道了，不需要你说。

**完整的 API 文档**

API 文档应该在代码注释或独立的文档文件中，不是在 `CLAUDE.md` 里。如果 Agent 需要 API 信息，它会去读代码。

**长篇的背景故事**

项目的演变历史对 Agent 完成当前任务没有帮助。只说现在是什么，不说过去怎么来的。

**重复的规则**

如果同一规则在多处出现（如 lint 规则既在 `CLAUDE.md` 中又在 `ruff.toml` 中），以配置文件为准。`CLAUDE.md` 只说"遵循 ruff 配置"，不逐条复制规则。

#### 层级化策略

Claude Code 支持多级 `CLAUDE.md`：

```
project/
├── CLAUDE.md           # 全局：项目概述、通用命令
├── backend/
│   └── CLAUDE.md       # 后端特定：API 约定、数据库操作
├── frontend/
│   └── CLAUDE.md       # 前端特定：组件规范、构建流程
└── tests/
    └── CLAUDE.md       # 测试特定：测试约定、mock 策略
```

当你在一个子目录中工作时，Claude 会合并所有层级的 `CLAUDE.md`。这使得你可以保持根文件精简，把特定知识放在需要的地方。

#### 迭代改进

`CLAUDE.md` 不是一次写完的——它应该随着你使用 Claude Code 的经验迭代改进：

1. 注意 Claude 在哪些地方反复犯错
2. 在 `CLAUDE.md` 中添加针对性的指令
3. 验证指令是否生效
4. 删除不起作用的指令

一个好的 `CLAUDE.md` 是活的文档，反映的是你与 Agent 协作的真实经验。

#### 结论

写好 `CLAUDE.md` 不难，但需要你从 Agent 的视角思考：它需要知道什么？它会犯什么错？什么信息是它无法从代码本身推断的？回答这些问题，把答案写进去，你就有了一个好的 `CLAUDE.md`。

---

> 原文版权归原作者所有，翻译仅供学习交流。
