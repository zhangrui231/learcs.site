---
title: "Stripe: From Slack Message to Review-Ready PR —— Stripe：从 Slack 消息到可审查的 PR"
description: "CS146S Week 8 阅读材料翻译 | Stripe Minions 后台 Agent 系统"
---

# Stripe: From Slack Message to Review-Ready PR —— Stripe：从 Slack 消息到可审查的 PR

> **原文链接**：[https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents](https://stripe.dev/blog/minions-stripes-one-shot-end-to-end-coding-agents)
>
> **来源**：Stripe Engineering Blog
>
> **来源**：CS146S Week 8 Reading

---

## 原文（英文）

*请通过上方原文链接阅读完整英文原文。*

---

## 中文翻译

### 从 Slack 消息到可审查的 PR

Stripe 的 Minions 系统让工程师可以在 Slack 中发一条消息，就启动一个后台 Agent 来完成端到端的编码任务——从理解需求到创建可审查的 PR。

#### Minions 是什么

Minions 是 Stripe 内部开发的一次性（one-shot）端到端编码 Agent。工作流程极其简单：

1. 工程师在 Slack 中描述任务
2. Minion 在后台启动，克隆代码仓库
3. Minion 分析需求、定位代码、实施修改、运行测试
4. 完成后创建一个 PR 并通知工程师
5. 工程师审查 PR，approve 或要求修改

整个过程对工程师来说是异步的——你发完消息就可以去做别的事，等 Minion 完成后再回来看 PR。

#### 设计理念

**一次性（One-shot）**

Minions 被设计为一次性的——每个 Minion 处理一个任务然后销毁。这与持续运行的 Agent 不同。一次性设计的好处是：
- 没有状态管理问题
- 每个任务从干净状态开始
- 失败不会影响其他任务
- 容易理解和调试

**端到端（End-to-end）**

Minions 不只是写代码——它们完成整个工作流：
- 理解需求（从 Slack 消息中提取任务描述）
- 探索代码库（找到需要修改的文件）
- 实施修改（写代码）
- 验证修改（运行测试和 lint）
- 创建 PR（写描述、关联 issue）

**可审查（Review-ready）**

Minions 的目标不是生成完美代码，而是生成"可审查"的 PR。PR 应该：
- 有清晰的描述说明做了什么和为什么
- 通过 CI
- 修改范围合理（不是 5000 行的巨型 PR）
- 足够好到人类审查者可以在几分钟内 approve 或给出反馈

#### 触发方式

Minions 的主要触发方式是 Slack：

```
@minion 在 payments/service.py 中添加一个重试机制，
        当 Stripe API 返回 429 时等待并重试最多 3 次。
```

Minion 会：
1. 解析这条消息提取任务
2. 在相关仓库中开始工作
3. 完成后在同一个 Slack 频道回复 PR 链接

除了 Slack，Minions 也可以从 Linear issue 和 GitHub issue 触发。

#### 质量保障

**沙箱环境**

每个 Minion 在隔离的沙箱中运行：
- 独立的代码克隆
- 不能访问生产环境
- 网络访问受限（只能访问内部 API 和文档）
- 资源限制（CPU、内存、运行时间）

**自动验证**

Minion 创建 PR 前必须通过：
- 单元测试
- 集成测试
- Lint 和类型检查
- Minion 自己的 diff 审查

如果任何一步失败，Minion 会尝试修复。如果修复失败，PR 会标注"需要人工介入"。

#### 结果与经验

自部署以来，Minions 已经处理了大量内部编码任务。关键经验：

1. **任务描述质量决定结果质量**：清晰、具体的任务描述（如"在 X 文件中添加 Y 功能"）比模糊的描述（如"改进支付系统"）效果好得多
2. **小任务比大任务好**：Minions 在处理 1-2 小时的任务时表现最好；超过半天的大任务成功率下降
3. **人类审查不可省略**：Minions 生成的代码大约 70% 可以直接 merge，但仍有 30% 需要修改——人类审查是必需的
4. **反馈循环很重要**：审查者给的反馈用于改进 Minion 的提示词和流程

#### 结论

Minions 证明了"从 Slack 消息到 PR"的工作流是可行的。关键不是让 Agent 完美——而是让它足够好到可以生成可审查的 PR，然后让人类做最终判断。这种模式将工程师的角色从"写代码"转变为"审查和指导 Agent 写代码"。

---

> 原文版权归原作者所有，翻译仅供学习交流。
