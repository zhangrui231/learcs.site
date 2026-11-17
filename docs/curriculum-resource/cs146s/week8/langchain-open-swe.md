---
title: "LangChain: Inside an Open-Source Software Factory —— LangChain：开源软件工厂内幕"
description: "CS146S Week 8 阅读材料翻译 | Open-SWE 开源软件工厂架构"
---

# LangChain: Inside an Open-Source Software Factory —— LangChain：开源软件工厂内幕

> **原文链接**：[https://github.com/langchain-ai/open-swe](https://github.com/langchain-ai/open-swe)
>
> **来源**：LangChain Open-SWE
>
> **来源**：CS146S Week 8 Reading

---

## 原文（英文）

*请通过上方原文链接阅读完整英文原文（GitHub 仓库）。*

---

## 中文翻译

### 开源软件工厂内幕

Open-SWE 是 LangChain 开发的开源软件工厂（Software Factory）框架。它将多 Agent 协作、工具集成和自动化工作流组合为一个完整的软件开发系统。

#### 什么是软件工厂

软件工厂是一个将软件开发流程系统化的架构模式。就像制造业的工厂将生产流程标准化一样，软件工厂将编码、测试、审查和部署流程标准化：

- **输入**：需求（issue、任务描述、规格说明）
- **流水线**：规划 → 编码 → 测试 → 审查 → 部署
- **输出**：可部署的代码变更

每个环节由专门的 Agent 负责，Agent 之间通过结构化的协议通信。

#### Open-SWE 架构

**1. 规划 Agent（Planner）**

接收需求后，规划 Agent：
- 分析需求，拆解为子任务
- 为每个子任务制定实现步骤
- 识别依赖关系和执行顺序
- 输出一份结构化的计划文档

**2. 实现 Agent（Implementer）**

根据计划，实现 Agent：
- 按步骤执行代码修改
- 在每步后运行相关测试
- 如果遇到问题，可以请求规划 Agent 调整计划
- 完成后通知审查 Agent

**3. 审查 Agent（Reviewer）**

审查 Agent：
- 审查实现 Agent 的 diff
- 检查是否遵循了计划
- 检查代码质量和测试覆盖
- 如果发现问题，退回给实现 Agent 修改

**4. 协调器（Orchestrator）**

协调器管理整个流水线：
- 在 Agent 之间传递消息
- 处理 Agent 之间的冲突（如规划 Agent 和实现 Agent 对方案有分歧）
- 管理超时和重试
- 向用户报告进度

#### 关键设计

**Agent 间的上下文传递**

每个 Agent 在自己的上下文中工作，但需要将关键信息传递给下一个 Agent。Open-SWE 使用结构化的消息格式：

- 规划 Agent 传递计划文档（不是完整的推理过程）
- 实现 Agent 传递 diff 和测试结果（不是完整的工具调用历史）
- 审查 Agent 传递审查意见（不是完整的审查推理）

这种"摘要式传递"保持了每个 Agent 上下文的精简。

**人机协作点**

Open-SWE 在关键节点设置人机协作点：
- 计划审批：规划 Agent 的计划需要人类 approve 后才能执行
- PR 审查：最终 PR 需要人类审查
- 冲突升级：当 Agent 之间无法达成一致时，升级给人类

**工具集成**

Open-SWE 集成了多种工具：
- 代码操作工具（read、write、edit、bash）
- 搜索工具（grep、语义搜索）
- MCP 服务器（外部 API 访问）
- 测试框架集成
- CI/CD 集成

#### 多 Agent vs 单 Agent

为什么用多个专门 Agent 而不是一个强大的 Agent？

| 维度 | 单 Agent | 多 Agent (Open-SWE) |
|---|---|---|
| 上下文管理 | 所有信息在一个上下文中，容易溢出 | 每个 Agent 有独立上下文，精简高效 |
| 专业化 | 一个 Agent 做所有事，深度有限 | 每个 Agent 专注一个领域，可以更深入 |
| 可调试性 | 难以定位问题出在哪一步 | 可以精确定位是哪个 Agent 出了问题 |
| 可扩展性 | 添加新能力需要修改唯一的 Agent | 可以添加新的专门 Agent |
| 协调成本 | 无需协调 | 需要协调器管理 Agent 间通信 |

多 Agent 的代价是协调复杂性——但在复杂软件任务中，这个代价是值得的。

#### 结论

Open-SWE 展示了一个完整的开源软件工厂架构。它的核心洞察是：软件开发不是单一任务，而是一个需要多种专门技能的流程。通过将流程拆分为规划、实现、审查三个阶段，并让专门的 Agent 负责每个阶段，软件工厂可以在保持质量的同时大幅提高吞吐量。

---

> 原文版权归原作者所有，翻译仅供学习交流。
