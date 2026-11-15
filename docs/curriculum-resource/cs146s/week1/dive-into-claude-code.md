---
title: Dive into Claude Code —— 深入 Claude Code
description: CS146S Week 1 阅读材料翻译 | 深入分析 Claude Code 的架构与实现
---

# 深入 Claude Code：当今与未来 AI 智能体系统的设计空间

> 原文：https://arxiv.org/abs/2604.14228
> 作者 / 出处：Jiacheng Liu、Xiaohan Zhao、Xinyi Shang、Zhiqiang Shen（VILA Lab, Mohamed bin Zayed University of Artificial Intelligence；University College London）｜ arXiv:2604.14228v3 [cs.SE]｜ CC BY-NC-SA 4.0
> 原文语言：English　｜　本地化：简体中文

## 原文（英文）

### Title

Dive into Claude Code: The Design Space of Today’s and Future AI Agent Systems

### Authors

- Jiacheng Liu, Xiaohan Zhao, Xinyi Shang, Zhiqiang Shen
- Affiliations: VILA Lab, Mohamed bin Zayed University of Artificial Intelligence; University College London
- Corresponding author: Zhiqiang Shen (Zhiqiang.Shen@mbzuai.ac.ae)
- Article version: v2.1.88　｜　Code: https://github.com/VILA-Lab/Dive-into-Claude-Code

### Abstract

Claude Code is an agentic coding tool that can run shell commands, edit files, and call external services on behalf of the user.

This study describes its comprehensive architecture by analyzing the publicly available TypeScript source code and further comparing it with two independent open-source AI agent systems, OpenClaw and Hermes Agent, that answer many similar or even the same design questions from different deployment contexts.

Our analysis identifies five human values, philosophies, and needs that motivate the architecture: human decision authority, safety, security, and privacy, reliable execution, capability amplification, and contextual adaptability. We then trace them through thirteen design principles to specific implementation choices.

The core of the system is a simple while-loop that calls the model, runs tools, and repeats.

Most of the code, however, lives in the systems around this loop: a permission system with seven modes and an ML-based classifier, a five-layer compaction pipeline for context management, four extensibility mechanisms (MCP, plugins, skills, and hooks), a subagent delegation and orchestration mechanism, and append-oriented session storage.

Comparisons with OpenClaw (a multi-channel personal assistant gateway) and Hermes Agent (a single-process, multi-surface assistant) show that the same design questions produce different answers across three deployment contexts. Claude Code emphasizes per-action safety, OpenClaw emphasizes perimeter-level access, and Hermes renders per-action approvals across many surfaces. At the runtime layer, Claude Code uses a single CLI loop, OpenClaw embeds the runtime within a gateway control plane, and Hermes uses one process whose role is set by its entry point. At the context and extension layer, Claude Code extends the context window, OpenClaw registers gateway-wide capabilities, and Hermes provides pluggable memory and model backends. We finally identify six open design directions for future agent systems, grounded in recent empirical, architectural, and policy literature. Our GitHub is available at: https://github.com/VILA-Lab/Dive-into-Claude-Code.

### Section outline (level-1 / level-2 / level-3 headings, with each chapter’s opening paragraph)

**1 Introduction**


> AI-assisted software development has evolved from autocomplete-style tools such as GitHub Copilot (Chen et al., 2021), through IDE-integrated assistants like Cursor (Cursor, 2026), to fully agentic systems that autonomously plan multi-step modifications, execute shell commands, read and write files, and iterate on their own outputs. Claude Code (Anthropic, 2026c) is an agentic coding tool released by Anthropic (Anthropic, 2026a). Its official documentation describes an‘‘agentic loop’’ that plans and executes actions toward accomplishing a goal and can call tools, evaluate results, and continue until the task is done. This shift from suggestion to autonomous action introduces architectural requirements that have no counterpart in completion-based tools. These requirements define a design space, a set of recurring questions spanning topics such as safety, context management, extensibility, and delegation that every coding agent must navigate. This study uses source-level analysis of Claude Code to show how one production system answers these questions.

  - Running example.
  - Paper organization.
**2 Design Philosophies, Design Principles and Architectural Motivations**


> Production coding agents are built by humans, for humans, and the architectural decisions they embed reflect what their creators believe matters. This section identifies the human values that motivate Claude Code’s design, traces them through recurring design principles, and frames the design-space questions that organize the analysis in Sections 3, 4, 5, 6, 7, 8 and 9.

- **2.1 Five Values and Philosophies**
  - Human Decision Authority.
  - Safety, Security, and Privacy.
  - Reliable Execution.
  - Capability Amplification.
  - Contextual Adaptability.
- **2.2 Design Principles**
- **2.3 From Values to Architecture**
- **2.4 A Cross-Cutting Question: Long-term Developer Capability**
**3 Architecture Overview**


> Building a production coding agent requires answering several recurring design questions: where should reasoning live, how many execution engines are needed, what safety posture to adopt, and what resource to treat as the binding constraint. Claude Code’s architecture can be read as one set of answers to these questions. At the implementation level, the system has seven components connected by a main data flow: a user submits a prompt through one of several interfaces, which feeds into a shared agent loop. The agent loop assembles context, calls the Claude model, receives responses that may include tool-use requests, routes those requests through a permission system, and dispatches approved actions to concrete tools that interact with the execution environment. Throughout this process, state and persistence mechanisms record the conversation transcript, manage session identity, and support resume, fork, and rewind operations.

- **3.1 Design Questions and Running Example**
  - Where does reasoning live?
  - How many execution engines?
  - What is the default safety posture?
  - What is the binding resource constraint?
  - Running example.
- **3.2 High-Level System Structure**
- **3.3 Layered Subsystem Decomposition**
  - Surface layer (entry points and rendering).
  - Core layer (agent loop, compaction pipeline).
  - Safety/action layer (permission system, hooks, extensibility, tools, sandbox, subagents).
  - State layer (context assembly, runtime state, persistence, memory, sidechains).
  - Backend layer (execution backends, external resources).
- **3.4 QueryEngine: A Clarification**
- **3.5 Permission and Safety Layers**
- **3.6 Context as Bottleneck: Beyond Compaction**
**4 Turn Execution: The Agentic Query Loop**


> When the user submits “Fix the failing test in auth.test.ts,”the input enters a reactive loop, one of several possible orchestration patterns for coding agents. This section examines Claude Code’s choice of a simple while-loop architecture and traces one turn of that loop end-to-end, illustrating three design principles from Table 1: minimal scaffolding with maximal operational harness, context as scarce resource with progressive management, and graceful recovery and resilience.

- **4.1 The Query Pipeline**
- **4.2 Tool Dispatch and Streaming Execution**
- **4.3 Pre-Model Context Shapers**
  - Budget reduction.
  - Snip.
  - Microcompact.
  - Context collapse.
  - Auto-compact.
- **4.4 Recovery Mechanisms**
- **4.5 Stop Conditions**
**5 Tool Authorization and Control Boundaries**


> Production coding agents adopt different safety architectures: layered policy enforcement, OS-level sandboxing, or version-control-based rollback. Claude Code combines the first two, implementing four design principles from Table 1: deny-first with human escalation, graduated trust spectrum, defense in depth with layered mechanisms, and reversibility-weighted risk assessment.

- **5.1 Permission Modes and Rule Evaluation**
- **5.2 The Authorization Pipeline**
  - Pre-filtering.
  - PreToolUse hook.
  - Rule evaluation.
  - Permission handler.
- **5.3 Auto-Mode Classifier and Hook Lifecycle**
- **5.4 Shell Sandboxing**
**6 Extensibility: MCP, Plugins, Skills, and Hooks**


> A recurring design question for coding agents is how to structure the extension surface: a single unified mechanism, a small number of specialized mechanisms, or a layered stack with different context costs. The analysis here illustrates two design principles from Table 1: composable multi-mechanism extensibility and externalized programmable policy. Returning to the running example, once Claude is trying to repair auth.test.ts and the earlier npm test request has been mediated by the permission system (Section 5), the next question is what extension-enabled action surface is available for the repair. When a turn begins in Claude Code, the model sees not just built-in tools like BashTool and FileReadTool, but also database query tools from an MCP server, a custom lint skill from .claude/skills/, and tools contributed by an installed plugin. These arrive through four mechanisms that extend the agent at different points of the loop: MCP servers provide external tool integration, plugins package and distribute bundles of components, skills inject domain-specific instructions, and hooks intercept the tool execution lifecycle. Anthropic’s documentation (Anthropic, 2026g) presents a broader view that includes CLAUDE.md (Section 7) and subagents (Section 8) alongside the four mechanisms analyzed here. We treat CLAUDE.md and subagents in their own sections because they operate in different subsystems (context construction and delegation, respectively), but the context-cost ordering is architecturally significant: it reveals how each extension point trades off expressiveness against the bounded context window.

- **6.1 Four Extension Mechanisms**
  - MCP servers.
  - Plugins.
  - Skills.
  - Hooks.
- **6.2 Tool Pool Assembly**
- **6.3 Why Four Mechanisms?**
**7 Context Construction and Memory**


> How an agent manages its context window and persists user instructions is a central design choice, with different systems choosing between file-based transparency, database-backed retrieval, and opaque learned representations. The design choices here implement two principles from Table 1: context as scarce resource with progressive management and transparent file-based configuration and memory.

- **7.1 Context Window Assembly**
- **7.2 CLAUDE.md Hierarchy and Auto Memory**
- **7.3 Compaction Pipeline**
**8 Subagent Delegation and Orchestration**


> Multi-agent orchestration is a key design dimension for coding agents, with choices spanning parent-child hierarchies, peer-based conversation frameworks (Wu et al., 2024), and graph-structured workflow engines (LangChain, Inc., 2024). Claude Code’s delegation architecture implements the isolated subagent boundaries principle from Table 1, together with aspects of deny-first with human escalation (permission override) and reversibility-weighted risk assessment (subagent tool restrictions).

- **8.1 The Agent Tool and Delegation Criteria**
- **8.2 Isolation Architecture**
- **8.3 Sidechain Transcripts**
**9 Session Persistence and Recovery**


> Session persistence in coding agents involves a design choice between append-only logs, structured databases, checkpoint-based snapshots, and stateless architectures, each with different trade-offs in auditability, query power, and deployment complexity. Claude Code’s persistence design implements the append-only durable state principle from Table 1. Session-scoped permissions live in memory only and are not serialized to the transcript, so a new process started with --resume rebuilds the permission context from CLI args and disk settings; any request that the rebuilt context does not recognize falls back to deny-first prompting.

- **9.1 Transcript Model**
- **9.2 Resume, Fork, and Not Restoring Permissions**
**10 Comparative Analysis: Claude Code, OpenClaw, and Hermes Agent**


> The preceding sections documented Claude Code’s answers to recurring design questions about loop architecture, safety, extensibility, context management, delegation, and persistence. To situate these findings within the broader agent design space, this section compares Claude Code with two independent open-source AI agent systems that answer many of the same design questions from fundamentally different starting points. OpenClaw is a local-first WebSocket gateway that connects messaging surfaces (WhatsApp, Telegram, Slack, Discord, Signal, and others) to an embedded agent runtime, with companion apps on macOS, iOS, and Android (Steinberger and OpenClaw Contributors, 2026). Hermes Agent is a single Python process whose role is set by the entry point under which it was invoked, with one persistence layer and many surfaces fronting one runtime (Nous Research, 2026). The Hermes distribution exposes three console scripts: hermes for the CLI and gateway controller, hermes-agent for batch runs, and hermes-acp for the Agent Client Protocol adapter that lets external IDEs host Hermes the way Hermes’s own gateway can host other agents. Where Claude Code is a CLI coding harness bound to a single repository session, OpenClaw is a persistent control plane for multi-channel personal assistance, and Hermes is one process whose role and surface set are determined by which entry point launched it. The three systems occupy different regions of the agent design space. The value of the comparison lies in showing how the same recurring questions produce different architectural answers when the deployment context changes.

- **10.1 Six Comparison Dimensions**
  - System scope and deployment model.
  - Trust model and security architecture.
  - Agent runtime and tool orchestration.
  - Extension architecture.
  - Memory, context, and knowledge management.
  - Multi-agent architecture and routing.
- **10.2 Hermes Agent: Capabilities Beyond the Comparison Table**
- **10.3 What the Contrast Reveals**
**11 Related Work**

- **11.1 Coding Agent Taxonomy**

> AI coding tools can be organized by the degree of autonomous action they support (Table 4). Inline completion tools such as GitHub Copilot (Chen et al., 2021) suggest code fragments within the editor without autonomous action. Chat-integrated products including Cursor and Windsurf add conversational interaction and multi-file edits but remain coupled to the IDE environment. Agentic CLI tools, including Claude Code, OpenAI’s Codex CLI, and Aider (Gauthier, 2024), operate from the command line and can autonomously execute shell commands, read and write files, and iterate on outputs within a single request. Fully autonomous systems like Devin, SWE-Agent (Yang et al., 2024), and OpenHands (Wang et al., 2024b) aim for minimal human supervision, often in sandboxed cloud environments.

- **11.2 Agent Architecture Patterns**
  - Recent runtime mechanisms.
  - Context management.
  - Safety and permissions.
  - Protocols and extensibility.
  - Software architecture.
  - Positioning.
**12 Discussion**


> The analysis in the preceding sections documented how Claude Code answers recurring design questions about loop architecture, safety posture, extensibility, context management, delegation, and persistence. Each answer reflects a position in a design space with real alternatives and measurable trade-offs. This section examines what those answers reveal when read together: the design philosophy they reflect (Section 12.1), the value tensions they create (Section 12.2), the architectural trade-offs they entail (Section 12.3), the empirical predictions they generate (Section 12.4), and the cross-cutting commitments that recur across subsystems (Section 12.7). The five-value framework from Section 2.1 organizes the section.

- **12.1 Design Philosophy**
- **12.2 Value Tensions**
- **12.3 Architectural Trade-offs**
  - Safety vs. autonomy.
  - Permission model under adversarial conditions.
  - Context efficiency vs. transparency.
  - Simplicity vs. extensibility.
- **12.4 Empirical Predictions and Early Signals**
- **12.5 Limitations**
- **12.6 Emerging Directions**
  - Architectural decoupling.
  - Adapting models and harnesses.
  - Memory as a first-class subsystem.
  - Observability and silent failure.
  - Governance.
  - Proactive architectures.
- **12.7 Recurring Design Choices**
  - Graduated layering over monolithic mechanisms.
  - Append-only designs that favor auditability over query power.
  - Model judgment within a deterministic harness.
**13 Future Directions**


> Section 12 read the architecture documented in Sections 3, 4, 5, 6, 7, 8 and 9 as a coherent design point and surfaced the tensions, trade-offs, and near-horizon directions that design point implies. This section steps beyond the architecture itself to record six open questions that Section 12.6 partially names and that a growing external literature has sharpened enough to state concretely. These questions cover the paper’s five-value framework (Section 2.1) and the long-term developer-capability question introduced in Section 2.4. They concern governance constraints on the Authority hierarchy (Section 13.5), the observability-evaluation gap on the Safety side (Section 13.1), cross-session persistence on the Reliability side (Section 13.2), four extensions of the Capability frontier (Section 13.3), horizon scaling as a distinct axis of Reliable Execution (Section 13.4), and long-term developer capability reframed as a design question (Section 13.6). Consistent with Section 12.6’s framing, each question is posed in the form whether / how / which. Specific mechanism choices are named when the cited sources name them and left open otherwise.

- **13.1 Silent Failure and the Observability-Evaluation Gap**
- **13.2 Persistence: Memory and Longitudinal Colleague Relationships**
- **13.3 Harness Boundary Evolution: Where, When, What, and with Whom the Agent Acts**
  - Where.
  - When.
  - What.
  - With whom.
- **13.4 Horizon Scaling: From Session to Scientific Program**
- **13.5 Governance and Oversight at Scale**
- **13.6 Long-term Developer Capability**
**14 Conclusion**


> This paper shows that production coding agents can be understood as answers to a recurring set of design questions: where reasoning sits relative to the harness, how execution, safety, extensibility, context, delegation, and persistence are organized, and which trade-offs those choices encode. Claude Code occupies a clear design point within that space. It gives the model broad local autonomy while surrounding it with a dense deterministic harness for permissioning, tool routing, context compaction, extensibility, and session recovery. Read through the five values and thirteen design principles identified in Section 2, these choices are coherent rather than ad hoc: the system consistently prioritizes human decision authority, safety, reliable execution, capability amplification, and contextual adaptability.

**References**

**Evidence Base and Methodology**


> This appendix records the evidence sources, analytic procedure, and limits of the study.

- **Evidence Base and Evidence Tiers**
- **Design-Space Analytic Procedure**
- **Limitations**
**Package Structure**


> This part maps the main TypeScript package to runtime responsibilities.

- **Directory-to-Responsibility Map**
- **Conditional Tool Availability**
- **Cross-File Dependencies**
**Community Reimplementations**


> After the Claude Code TypeScript source became publicly readable, several community projects published independent reimplementations. This appendix lists a few representative examples.

- **Representative Projects**
**Companion Design-Space Resources**


> The project repository maintains companion notes that track new agent-system developments as they appear; these are not evidence for Claude Code’s implementation, which remains grounded in the evidence tiers above (VILA Lab, 2026).


> 说明：本节为对照用的结构化摘录（标题、作者、完整摘要、全部章节标题、各章开头段落）。其余正文、全部图表与注释见下方「中文译文」；参考文献条目按学术惯例保留原文不译。

---

## 中文译文

### 摘要

Claude Code 是一种智能体式编程工具，可以代表用户运行 shell 命令、编辑文件并调用外部服务。

本研究通过分析公开可得的 TypeScript 源代码来描述其完整架构，并进一步与两个独立的开源 AI 智能体系统——OpenClaw 与 Hermes Agent——进行比较；这两个系统从不同的部署形态出发，回答了许多相似甚至完全相同的设计问题。

我们的分析识别出驱动该架构的五项人类价值、哲学与需求：人类决策权、安全、安保与隐私、可靠执行、能力放大，以及情境适应性。随后我们把它们沿着十三条设计原则追溯到具体的实现选择。

系统的核心是一个简单的 while 循环：调用模型、运行工具、不断重复。

然而，绝大部分代码都位于这个循环周围的系统中：一套拥有七种模式与一个基于机器学习的分类器的权限系统、一条用于上下文管理的五层压缩（compaction）流水线、四种可扩展性机制（MCP、plugins、skills 与 hooks）、一套子智能体（subagent）委派与编排机制，以及面向追加的会话存储。

与 OpenClaw（一个多渠道个人助理网关）和 Hermes Agent（一个单进程、多界面的助理）的比较表明：同样的设计问题，在三种部署形态下会产生不同的答案。Claude Code 强调逐动作的安全，OpenClaw 强调边界层面的访问控制，Hermes 则在多个界面上呈现逐动作的审批。在运行时层，Claude Code 使用单一的 CLI 循环，OpenClaw 把运行时嵌入网关控制平面之中，Hermes 则是单个进程，其角色由入口点决定。在上下文与扩展层，Claude Code 扩展上下文窗口，OpenClaw 注册网关级能力，Hermes 提供可插拔（pluggable）的记忆与模型后端。最后，我们识别出面向未来智能体系统的六个开放设计方向，这些方向立足于近期的实证、架构与政策文献。本项目 GitHub 仓库：https://github.com/VILA-Lab/Dive-into-Claude-Code 。

### 1 引言

AI 辅助的软件开发，已经从 GitHub Copilot（Chen et al., 2021）这类自动补全工具，经由 Cursor（Cursor, 2026）这类 IDE 集成助手，发展到完全智能体化的系统——它们能够自主规划多步修改、执行 shell 命令、读写文件，并对自己的产出反复迭代。Claude Code（Anthropic, 2026c）是 Anthropic（Anthropic, 2026a）发布的智能体式编程工具。其官方文档描述了一个「智能体循环（agentic loop）」：为达成目标而规划并执行动作，可以调用工具、评估结果，并持续运行直到任务完成。这一从「给出建议」到「自主行动」的转变，带来了基于补全的工具所不具备的架构要求。这些要求定义出一个设计空间：一组反复出现、跨越安全、上下文管理、可扩展性与委派等主题的问题，每一个编程智能体都必须面对。本研究通过对 Claude Code 的源码级分析，展示一个生产级系统是如何回答这些问题的。

> 注释 1：https://code.claude.com/docs/en/how-claude-code-works 。

尽管采用率不断上升，Anthropic 只为 Claude Code 发布了面向用户的文档，而没有公开详细的架构描述。本研究通过源码分析来刻画其架构设计决策。Anthropic 内部对 132 名工程师与研究者的调查（Huang et al., 2025）报告：约 27% 的 Claude Code 辅助任务是「没有这个工具就根本不会去尝试」的工作，这说明该架构促成的是质变意义上的新工作流，而不仅仅是加速既有工作流。

本文首先识别出驱动该架构的五项人类价值／哲学与十三条设计原则（第 2 节），然后把分析组织为三个部分：

1. **设计空间分析。** 我们识别出反复出现的设计问题（推理放在何处、迭代循环如何组织、采取何种安全姿态、扩展面如何切分、上下文如何管理、工作如何在子智能体之间委派、会话如何持久化），并通过一个 7 组件的高层结构与 5 层的子系统架构分析 Claude Code 的答案，把每一处选择追溯到具体源码文件（第 3 节）。该分析旨在建立对系统机制的深入理解，目标是反过来启发更好、更强大的智能体系统的设计。
2. **与 OpenClaw、Hermes Agent 的架构对照。** 除了分析 Claude Code 本身，本文还在六个设计维度上，把它的设计哲学与两个开源智能体系统作比较：OpenClaw（Steinberger and OpenClaw Contributors, 2026，一个多渠道个人助理网关）与 Hermes Agent（Nous Research, 2026，一个单进程、多界面的助理），以展示同样的反复性问题在不同部署形态下如何产生不同答案（第 10 节），从而同时凸显商业软件与开源软件之间的共通原则与关键差异。这一比较有助于揭示：部署环境、产品目标、安全要求与用户假设如何以不同方式塑造架构选择。通过考察这些系统在哪里收敛、在哪里分歧，本研究希望为未来更强大的智能体系统的设计提供有用的指引与实践洞见。
3. **未来智能体系统的开放方向。** 在设计空间分析与 OpenClaw／Hermes 对照的基础上，第 13 节识别出六个开放方向，涵盖可观测性与评测之间的落差、跨会话持久化、智能体外壳边界演化、视界（horizon）扩展、治理，以及长期开发者能力；每个方向都借鉴了实证、架构与政策文献。长期能力问题还揭示出一项值得关注的隐忧：Claude Code 这套智能体系统虽然放大了程序员与终端用户的短期能力，但在明确支持人的长期成长、更深入的理解，以及代码库长期一致性方面，提供的机制相当有限。

核心的智能体循环是一个带状态管理的 while-true 循环。围绕它的安全、可扩展性、上下文管理、委派与持久化子系统，构成了实现的主体。源码级分析让我们能够直接从系统本身识别设计选择、子系统边界与实现权衡，而不是仅凭产品描述去推断。

> 注释 2：我们的分析主要以源码为依据，辅以 Anthropic 官方文档与精选的社区分析。附录详述了证据基础与方法论。

##### 运行示例

为了让架构保持具体，我们会追踪任务「修复 `auth.test.ts` 中失败的测试」在第 3、4、5、6、7、8、9 节中的完整流转。这个例子说明：一个看似简单的用户请求，会激活多个架构层，包括工具调用、权限检查、上下文选择、迭代式修复、委派与会话持久化。

##### 论文组织

第 2 节识别出驱动架构的人类价值与设计原则。第 3 节介绍高层架构及其所回答的设计问题。第 4 至 9 节各自分析一个主要子系统的设计选择。第 10 节把分析与 OpenClaw、Hermes Agent 作对照，第 11 节把这项工作放到既有的智能体与软件工程文献中定位，第 12 节给出讨论，第 13 节考察未来智能体系统的开放问题，第 14 节作结。附录描述证据基础与方法论、包结构说明、社区复刻项目，以及一张把新型智能体系统信号映射到本文设计空间问题的对照图。

### 2 设计哲学、设计原则与架构动因

生产级编程智能体由人类构建、服务于人类，它们内嵌的架构决策反映了创作者认为重要的事情。本节识别出驱动 Claude Code 设计的人类价值，沿着反复出现的设计原则追溯这些价值，并给出组织第 3 至 9 节分析的设计空间问题框架。

Anthropic 的「安全智能体」框架提出了一个核心张力：「智能体必须能够自主工作；它们的独立运行恰恰是其价值所在。但人类应当保留对其目标如何被追求的控制权」（Anthropic, 2025b）。Claude 的《宪法》不是通过僵化的决策程序来解决这一点，而是通过培育「能够结合具体情境加以运用的良好判断与稳健价值观」（Anthropic, 2026e）。这些承诺，连同关于开发者实际如何使用该工具的实证发现（Huang et al., 2025；McCain et al., 2026），共同指向塑造该架构的五项人类价值。

#### 2.1 五项价值与哲学

##### 人类决策权

人类对系统行为保留最终决策权，并通过一条责任主体层级（先是 Anthropic，其次是运营者，最后是用户）加以组织，从而形式化地确定谁对什么拥有权威（Anthropic, 2026e）。系统的设计使人类能够实施知情控制：实时观察动作、批准或否决拟执行的操作、中断兼容的进行中操作，并在事后进行审计。当 Anthropic 发现用户对权限提示的批准率高达 93%（Hughes, 2026）时，其应对方式不是增加更多警告，而是重构问题：设定明确的边界（沙箱、auto 模式分类器），让智能体可以在其中自由工作，而不是依赖用户一旦形成习惯就不再审阅的逐动作审批（Dworken and Weller-Davies, 2025）。

##### 安全、安保与隐私

系统保护人类及其代码、数据与基础设施免受损害，即便人类本人疏忽或犯错。这与「人类决策权」不同：决策权关乎人类「选择的能力」，安全关乎系统「即便这种能力失效也仍须保护」的义务。Anthropic 的安全智能体框架另外把「保障智能体交互安全」与「在长期交互中保护隐私」列为核心承诺（Anthropic, 2025b）。auto 模式威胁模型（Hughes, 2026）明确针对四类风险：过度积极的行为、诚实的错误、提示注入，以及模型与目标错位。

##### 可靠执行

智能体去做人类真正想让它做的事，随时间保持连贯，并支持在宣布成功之前验证自身工作。这一价值同时涵盖单轮正确性（它是否忠实理解了请求？）与长程可依赖性（跨上下文窗口边界、会话恢复与多智能体委派时是否仍保持连贯？）。Anthropic 的产品文档（Anthropic, 2026g）描述了一个三阶段循环，智能体重复执行直到任务完成：收集上下文、采取行动、验证结果。智能体设计指南（Schluntz and Zhang, 2024）进一步强调，每一步都要用「来自环境的真值」来评估进展。智能体外壳（harness）设计指南（Rajasekaran, 2026）同样指出，「智能体往往以自信的口吻称赞工作成果」，即便质量平平——这正是把生成与评估分离的动因。

##### 能力放大

系统实质性地提升人类在单位努力与单位成本下所能完成的事。Anthropic 内部调查（Huang et al., 2025，第 1 节已述）表明，该架构促成的是质变意义上的新工作流，而不只是更快的既有工作流：约 27% 的任务属于「原本根本不会去尝试」的工作。其创造者把系统描述为「一件 Unix 工具，而不是传统产品」，它由最小的构件搭成，这些构件「有用、可理解、可扩展」（Cherny and Wu, 2025）。该架构把投资投向确定性基础设施（上下文管理、工具路由、恢复），而不是决策脚手架（显式规划器或状态图）——其前提是：能力日益增强的模型，从丰富的操作环境中获益，胜过从约束其选择的框架中获益。

##### 情境适应性

系统契合用户的具体情境（他们的项目、工具、约定与技能水平），且这种关系会随时间改善。扩展架构（`CLAUDE.md`、skills、MCP、hooks、plugins）在不同上下文成本层级上提供可配置性（第 6、7 节）。纵向数据（McCain et al., 2026）显示，人与智能体的关系会演化：自动批准率从少于 50 个会话时约 20% 上升到 750 个会话时超过 40%。这一被称为「由模型、用户与产品共同建构的」自主性模式，意味着系统是为信任轨迹而非固定信任状态而设计的。MCP 捐赠给 Linux 基金会旗下 Agentic AI 基金会（The Linux Foundation, 2025），体现了这一价值的生态维度。

#### 2.2 设计原则

这些价值通过十三条设计原则被操作化，每条原则都回答一个生产级编程智能体必须解决的反复性问题。表 1 汇总了这些原则；后续各节（第 3 至第 9 节）会把每条原则追溯到具体的实现选择。

| 原则 | 服务的价值 | 对应的设计问题 | 相关章节 |
| --- | --- | --- | --- |
| 先拒绝、可升级至人工（Deny-first with human escalation） | 决策权、安全 | 对于无法识别的动作，是允许、拦截，还是升级给人类？ | 5、8、9 |
| 分级的信任光谱（Graduated trust spectrum） | 决策权、适应性 | 固定的权限等级，还是用户随时间穿越的光谱？ | 5 |
| 分层机制的纵深防御（Defense in depth with layered mechanisms） | 安全、决策权、可靠性 | 单一安全边界，还是多个用不同技术交叠的边界？ | 3、5 |
| 外置的可编程策略（Externalized programmable policy） | 安全、决策权、适应性 | 硬编码策略，还是带生命周期钩子的外置配置？ | 5、6 |
| 把上下文当作稀缺资源并渐进式管理 | 可靠性、能力 | 约束性资源是什么、该如何管理：一次性截断，还是分层流水线？ | 4、6、7、8 |
| 仅追加的持久状态（Append-only durable state） | 可靠性、决策权 | 可变状态、检查点快照，还是仅追加日志？ | 4、9 |
| 最小脚手架、最大操作型智能体外壳 | 能力、可靠性 | 投入在脚手架侧的推理，还是投入在让模型自由推理的操作型基础设施？ | 3、4 |
| 价值优先于规则（Values over rules） | 能力、决策权 | 僵化的决策程序，还是有确定性护栏支撑的情境化判断？ | 3、5、7 |
| 可组合的多机制可扩展性 | 能力、适应性 | 单一统一的扩展 API，还是在不同上下文成本上的分层机制？ | 6 |
| 以可逆性加权的风险评估 | 能力、安全 | 所有动作一视同仁地监督，还是对可逆与只读动作放宽？ | 4、5、8 |
| 透明的、基于文件的配置与记忆 | 适应性、决策权 | 不透明的数据库、基于嵌入的检索，还是用户可见、可版本控制的文件？ | 7 |
| 隔离的子智能体边界 | 可靠性、安全、能力 | 子智能体与父级共享上下文与权限，还是隔离运行？ | 8 |
| 优雅的恢复与韧性 | 可靠性、能力 | 出错即硬失败，还是静默恢复、只把人的注意力留给不可恢复的情形？ | 4、5 |

这些原则可以对照三个主要的替代设计族来阅读。第一，**基于规则的编排**：LangGraph（LangChain, Inc., 2024）这类框架把决策逻辑编码为带类型边的显式状态图，选择脚手架而非最小智能体外壳。第二，**容器隔离的执行**：SWE-Agent 与 OpenHands（Yang et al., 2024；Wang et al., 2024b）依赖 Docker 隔离，而非分层策略执行。第三，**以版本控制为安全机制**：Aider（Gauthier, 2024）这类工具把 Git 回滚当作主要安全机制，而不是先拒绝式评估。Claude Code 这套原则的独特之处，在于把「最小决策脚手架」与「分层策略执行」、「基于价值的判断」与「先拒绝的默认」、「渐进式上下文管理」与「可组合的可扩展性」组合在了一起。

#### 2.3 从价值到架构

每项价值都沿着自己的原则追溯到具体的架构决策：

- **人类决策权**促使先拒绝式评估、分级的信任光谱、仅追加状态（可审计的历史）、外置的可编程策略，以及价值优先于规则（第 5、9、6、7 节）。
- **安全、安保与隐私**促使纵深防御、先拒绝默认值、以可逆性加权的评估、外置策略，以及隔离的子智能体边界（第 5、8 节）。
- **可靠执行**促使把上下文当作稀缺资源、仅追加的持久状态、优雅恢复、隔离的子智能体边界，以及纵深防御（第 4、7、8、9 节）。
- **能力放大**促使最小脚手架、可组合的可扩展性、以可逆性加权的风险、上下文管理，以及优雅恢复（第 4、6、5 节）。
- **情境适应性**促使透明的、基于文件的记忆、可组合的可扩展性、分级的信任光谱，以及外置的可编程策略（第 7、6、5 节）。

这些映射也揭示了架构「不做什么」：它不把显式的规划图强加给模型的推理，不提供单一统一的扩展机制，也不在恢复会话时还原全部会话作用域的信任相关状态。这些「缺席」与上述原则集合是一致的。

#### 2.4 一个横切性问题：长期开发者能力

上述五项价值描述了架构被设计来服务的目标。本文还提出第六个问题：该架构是否有助于开发者保住长期的理解与能力？这个隐忧是真实存在的：Anthropic 对 132 名工程师与研究者的自身研究（Huang et al., 2025）记录了一个「监督悖论」——对 AI 的过度依赖有可能使监督它所需的能力退化；而独立研究（Shen and Tamkin, 2026）发现，在 AI 辅助条件下，开发者理解测试得分低 17%。然而，这一隐忧并未在架构中、或在 Anthropic 所声明的设计价值中作为显著的设计驱动力体现出来。因此，我们不把它当作与其他价值并列的第六项价值，而是视为一个横切性关切：在第 12 节中贯穿全部五项价值追问的问题——短期放大是否以长期的人类理解、代码库一致性与开发者人才梯队为代价。

> 图 1：Claude Code 的高层系统结构。系统可分解为七个功能组件：用户、界面、智能体循环、权限系统、工具、状态与持久化，以及执行环境。所有入口界面都汇聚到同一个智能体循环。

### 3 架构概览

构建一个生产级编程智能体，需要回答若干反复出现的设计问题：推理应该放在哪里、需要多少个执行引擎、采取什么安全姿态，以及把什么资源视为约束性瓶颈。Claude Code 的架构可以被读作对这些问题的一组答案。在实现层面，系统由七个组件构成，由一条主数据流连接：用户通过若干界面之一提交提示词，进入一个共享的智能体循环；该循环组装上下文、调用 Claude 模型、接收可能包含工具调用请求的响应，把这些请求路由到权限系统，并将获批的动作分派给具体的工具，由工具与执行环境交互。在整个过程中，状态与持久化机制负责记录对话记录、管理会话身份，并支持恢复（resume）、分叉（fork）与回退（rewind）操作。

#### 3.1 设计问题与运行示例

本章围绕四个在生产级编程智能体中反复出现的设计问题展开，每一个问题都对应表 1 中一条或多条设计原则。这里先给出每个问题、Claude Code 的答案，以及对可能替代方案的说明，然后在第 4 至 9 节中逐步演示。

##### 推理放在哪里？

在 Claude Code 中，模型负责推理「该做什么」，智能体外壳（harness）负责执行动作。模型在响应中发出 `tool_use` 块，外壳负责解析它们、检查权限、分派给工具实现并收集结果（`query.ts`）。模型从不直接访问文件系统、运行 shell 命令或发起网络请求。这种分离带来一个安全后果：由于推理与执行处在不同的代码路径上，被攻陷或被对抗性操纵的模型无法覆盖外壳中实现的沙箱、权限检查或先拒绝规则。模型与外界的唯一接口是结构化的 `tool_use` 协议，而外壳会在执行前校验它。对所提取源码的社区分析估计，Claude Code 代码库中构成 AI 决策逻辑的仅约 1.6%，其余 98.4% 都是操作型基础设施——这一比例直观展示了核心智能体推理层有多薄。替代设计在脚手架侧的推理上投入更多：Devin 维护显式的规划与任务跟踪结构，而 LangGraph（LangChain, Inc., 2024）则把控制流路由经由开发者定义的状态图。

##### 需要多少个执行引擎？

Claude Code 使用单一的 `queryLoop()` 函数，无论用户是在交互式终端、无头 CLI 调用、Agent SDK 还是 IDE 集成中交互，它都负责执行（`query.ts`）。变化的只有渲染与用户交互层。其他系统使用按模式区分的引擎：例如 IDE 集成可能走与 CLI 工具不同的代码路径，用一致性换取针对特定界面的优化。

##### 默认的安全姿态是什么？

Claude Code 的默认安全姿态是「先拒绝并升级至人工」：拒绝规则优先于询问规则，询问规则优先于允许规则；无法识别的动作会被升级给用户，而不是被静默允许（`permissions.ts`）。多个彼此独立的安全层（权限规则、PreToolUse hooks、启用时的 auto 模式分类器，以及可选的 shell 沙箱）是叠加的，任何一层都可以拦截一个动作（第 5 节）。这结合了表 1 中的「先拒绝并升级至人工」与「分层机制的纵深防御」两条原则。替代方案则把信任边界挪到别处：SWE-Agent 与 OpenHands（Yang et al., 2024；Wang et al., 2024b）依赖基于容器的隔离来约束任意执行，而 Aider（Gauthier, 2024）以基于 git 的回滚作为主要安全网。

##### 约束性资源是什么？

在 Claude Code 中，上下文窗口（较旧模型为 200K，Claude 4.6 系列为 1M）是约束性资源。每次模型调用之前会执行五种不同的上下文削减策略（`query.ts`），此外还有若干其他子系统决策（指令的惰性加载、延迟加载的工具 schema、只返回摘要的子智能体）用于限制上下文消耗（第 7 节）。之所以要有五层流水线，是因为没有任何单一的压缩策略能应对所有类型的上下文压力：预算削减针对超出体积上限的单次工具输出；Snip 处理时间深度；Microcompact 应对缓存开销；Context collapse 管理极长的历史；Auto-compact 作为最后手段执行语义压缩。每一层对应不同的成本收益权衡，靠前且便宜的层先跑。第 7 节将详细展开。

##### 运行示例

为了让这些原则落地，我们把一个任务「修复 `auth.test.ts` 中失败的测试」贯穿第 3 至 9 节。在本节中，用户通过 Claude Code 的某个界面提交提示词；后续各节将追踪这一请求穿过查询循环、权限闸门、工具池、上下文窗口、子智能体委派与会话持久化的全过程。

#### 3.2 高层系统结构

> 图 2：运行时单轮流程，展示一次智能体轮次的端到端执行：用户提示词经上下文组装进入，模型被调用，工具请求穿过权限闸门，工具结果回流进循环，压缩机制负责管理上下文压力。

七组件模型（图 1）可以直接映射到源码文件：

1. **用户**：提交提示词、批准权限、审阅产出。
2. **界面**：交互式 CLI、无头 CLI（`claude -p`）、Agent SDK，以及 IDE／Desktop／Browser。所有界面都接入同一个循环。
3. **智能体循环**：模型调用、工具分派与结果收集构成的迭代循环，在 `query.ts` 中实现为 `queryLoop()` 异步生成器。
4. **权限系统**：先拒绝式规则评估（`permissions.ts`）、auto 模式机器学习分类器，以及基于 hook 的拦截（`types/hooks.ts`）。
5. **工具**：最多 54 个内置工具（19 个无条件提供，35 个取决于功能开关与用户类型），通过 `assembleToolPool()`（`tools.ts`）组装，并与 MCP 提供的工具合并。plugins 通过 MCP 服务器与 skill／命令注册表间接贡献工具。
6. **状态与持久化**：主要是仅追加的 JSONL 会话记录（`sessionStorage.ts`）、全局提示词历史（`history.ts`），以及子智能体 sidechain 文件。
7. **执行环境**：带可选沙箱的 shell 执行（`shouldUseSandbox.ts`）、文件系统操作、网页抓取、MCP 服务器连接，以及远程执行。

数据流沿一条自左向右的主干推进：用户通过界面提交请求，请求进入智能体循环；循环把动作提议交给权限系统；获批的动作抵达工具，工具与执行环境交互，并把 `tool_result` 消息返回给循环。状态与持久化位于循环旁边，记录对话记录并加载先前的会话数据。

应用入口 `main()` 位于 `main.tsx`，负责初始化安全设置（包括 `NoDefaultCurrentDirectoryInExePath`，用于阻止 Windows 上的 PATH 劫持）、注册优雅停机的信号处理器，并派发到相应的执行模式。

#### 3.3 分层的子系统分解

> 图 3：展开后的分层架构，展示五个子系统层：表层（交互式 CLI、无头 CLI、Agent SDK、IDE／Desktop／Browser、UI／渲染器）、核心层（智能体循环、压缩流水线）、安全／动作层（权限系统含 auto 模式分类器、hook 流水线、可扩展性、内置工具、MCP 工具、shell 沙箱、子智能体派生）、状态层（上下文组装、运行时状态、会话持久化、`CLAUDE.md` 与记忆、sidechain 记录），以及后端层（执行后端、外部资源）。

五层分解（图 3）把七组件模型展开成更细粒度的视角，把每一层映射到具体的源码目录。

##### 表层（入口与渲染）

`src/entrypoints/` 目录包含各条启动路径，其中包括 SDK 入口及其 `coreTypes.ts`、`controlSchemas.ts` 与 `coreSchemas.ts`。`src/screens/` 目录组合全屏布局，`src/components/` 通过 ink 框架提供终端 UI 构件。交互式 CLI 启动一个带实时流式输出、权限对话框与进度指示的终端 UI。无头 CLI（`claude -p`）创建一个 `QueryEngine` 实例——它是围绕共享查询路径（第 3.4 节）的一层很薄的会话封装，用于一次性处理。Agent SDK 则通过异步生成器发出类型化事件。

##### 核心层（智能体循环、压缩流水线）

`queryLoop()` 异步生成器（`query.ts`）实现迭代式智能体循环，消费来自状态层的已组装上下文，并把工具请求分派给安全／动作层。每次模型调用之前，由五个顺序执行的整形器构成的压缩流水线（`query.ts:365-453`）负责管理上下文压力：预算削减、snip、microcompact、context collapse 与 auto-compact（第 4.3、7.3 节）。

##### 安全／动作层（权限系统、hooks、可扩展性、工具、沙箱、子智能体）

权限系统（`permissions.ts`）实现先拒绝式规则评估，最多支持七种权限模式（若把仅内部的 bubble 与按功能开关启用的 auto 也算上）（`types/permissions.ts`），并集成了 auto 模式机器学习分类器（`yoloClassifier.ts`），后者提供两阶段的快速过滤与思维链式工具安全评估（第 5 节）。一条横跨 27 种事件类型的 hook 流水线（`coreTypes.ts`；输出 schema 见 `types/hooks.ts`）可以拦截、改写或批注工具请求；其中 5 种与安全相关，其余 22 种服务于生命周期与编排用途（第 6 节）。可扩展性子系统允许 plugins 与 skills 把工具与 hooks 注册进运行时。通过 `assembleToolPool()`（`tools.ts`）完成工具池组装，把内置工具与 MCP 工具合并。获批的 shell 命令会经过 shell 沙箱（`shouldUseSandbox.ts`），它在权限系统之外独立限制文件系统与网络访问。经由 `AgentTool`（`AgentTool.tsx`、`runAgent.ts`）的子智能体派生，与所有其他工具一样通过同一个 `buildTool()` 工厂分派，以隔离的上下文窗口重新进入 `queryLoop()`，只向父级返回摘要（第 8 节）。

##### 状态层（上下文组装、运行时状态、持久化、记忆、sidechain）

上下文组装是一个带记忆化的状态加载器，而非路由中枢：`getSystemContext()`（`context.ts`）计算会话级系统上下文（包含 git 状态），`getUserContext()`（`context.ts`）加载 `CLAUDE.md` 层级与当前日期。两者都被缓存以供复用：系统上下文被追加到系统提示词（system prompt），用户上下文则作为一条 user-context 消息加入。`src/state/` 目录管理运行时应用状态。会话记录以基本仅追加的 JSONL 文件形式存放在按项目区分的路径下（`sessionStorage.ts`）。`CLAUDE.md` 与记忆子系统提供四级指令层级（`claudemd.ts`），从托管设置一直到目录专属文件，另加 Claude 在对话过程中写下的自动记忆条目（第 7.2 节）。Sidechain 记录（`sessionStorage.ts:247`）把每个子智能体的对话存入独立文件，避免子智能体内容撑大父级上下文（第 8.3 节）。全局提示词历史维护在 `history.jsonl`（`history.ts`）中。恢复与分叉操作从对话记录中重建会话状态（`conversationRecovery.ts`）。

##### 后端层（执行后端、外部资源）

带可选沙箱的 shell 命令执行（`BashTool.tsx`、`PowerShellTool.tsx`）、远程执行支持（`src/remote/`）、跨多种传输变体的 MCP 服务器连接（含 stdio、SSE、HTTP、WebSocket、SDK 以及 IDE 专属适配器，`services/mcp/client.ts`），以及 `src/tools/` 下 42 个工具子目录，共同实现了具体的工具逻辑。

#### 3.4 QueryEngine：一处澄清

`QueryEngine.ts` 的类文档写道：「QueryEngine 拥有一次对话的查询生命周期与会话状态。它把 `ask()` 中的核心逻辑抽取为一个独立类，既可供无头／SDK 路径使用，也可（在未来的某个阶段）供 REPL 使用。」这个类是面向非交互界面的会话封装，而不是引擎本身。它的构造函数接受一个 `QueryEngineConfig`，其中包含初始消息、终止控制器、文件状态缓存以及其他按会话划分的状态。它的 `submitMessage()` 方法是一个异步生成器，负责编排单个轮次。共享的查询路径位于 `query()`（`query.ts`）中，后者包装了内部的 `queryLoop()`；`QueryEngine` 只是委派给 `query()`。

这一区分在架构上很重要：交互式 CLI 同样直接调用 `query()`，完全绕过 `QueryEngine`。共享的代码路径是那个循环函数，而不是引擎类。

#### 3.5 权限与安全层

「默认安全」原则通过七个彼此独立的层来实现。一个请求必须穿过所有适用的层，任何单独一层都能拦截它：

1. **工具预过滤（`tools.ts`）**：被整体拒绝的工具在任何调用之前就从模型的视野中移除，模型因此不会尝试调用它们。
2. **先拒绝式规则评估（`permissions.ts`）**：拒绝规则始终优先于允许规则，即便允许规则更为具体。
3. **权限模式约束（`types/permissions.ts`）**：当前生效的模式决定了那些不匹配任何显式规则的请求的基线处理方式。
4. **Auto 模式分类器**：在 auto 模式下，基于机器学习的分类器可以评估那些在规则评估与快速路径检查之后仍需审批的请求；那些本会绕过它的允许规则（例如 `Bash(*)`）在 auto 模式生效期间会被搁置一旁。
5. **Shell 沙箱（`shouldUseSandbox.ts`）**：获批的 shell 命令仍可能在限制文件系统与网络访问的沙箱中执行。
6. **恢复时不还原权限（`conversationRecovery.ts`）**：会话作用域的权限不写入对话记录，因此在新进程中恢复的会话从零开始，不带这些权限。
7. **基于 hook 的拦截（`types/hooks.ts`）**：PreToolUse hooks 可以修改权限决策；PermissionRequest hooks 可以与用户对话框并行（或在协调者模式下先于对话框）异步地解决决策。

这些层将在第 5 节详细展开。

#### 3.6 上下文即瓶颈：压缩之外

除了五层压缩流水线（第 7 节详述），还有若干其他子系统决策体现了「上下文即瓶颈」这一约束：

- **`CLAUDE.md` 惰性加载**：基础 `CLAUDE.md` 层级在会话启动时加载，但额外的嵌套目录指令文件与条件规则只在智能体读取这些目录中的文件时才加载，从而避免未被使用的指令白白消耗上下文。
- **延迟加载的工具 schema**：启用 ToolSearch 时，部分工具在初始上下文中只包含名称，完整 schema 按需加载。
- **子智能体只返回摘要**：子智能体只向父级返回摘要文本，而非完整对话历史（第 8 节）。
- **逐工具结果预算**：单条工具结果被限制在可配置的大小上限内，避免某个冗长输出占用与其重要性不相称的比例的上下文。

### 4 轮次执行：智能体式查询循环

当用户提交「修复 `auth.test.ts` 中失败的测试」时，输入进入一个反应式循环——这是编程智能体若干可能编排模式中的一种。本节考察 Claude Code 选择简单 while 循环架构的理由，并端到端追踪该循环的一个轮次，用以说明表 1 中的三条设计原则：最小脚手架与最大操作型智能体外壳、把上下文当作稀缺资源并渐进式管理，以及优雅恢复与韧性。

#### 4.1 查询流水线

每个轮次都遵循一个固定序列（图 2、`query.ts`）：

1. **设置解析**：`queryLoop()` 函数解构出不可变参数，包括系统提示词、用户上下文、权限回调与模型配置。
2. **可变状态初始化**：单个 `State` 对象存储跨迭代的全部可变状态，包括消息、工具上下文、压缩追踪与恢复计数器。循环中的七个 continue 点（所谓「continue sites」）每次都以整体对象赋值的方式覆盖这个对象，而不是逐字段修改。
3. **上下文组装**：函数 `getMessagesAfterCompactBoundary()` 从上一个压缩边界向前取回消息，确保被压缩的内容以其摘要而非原始消息的形式呈现。
4. **模型前上下文整形器**：五个整形器顺序执行（第 4.3 节）。
5. **模型调用**：对 `deps.callModel()` 的 `for await` 循环以流式方式读取模型响应，传入已组装的消息（前置用户上下文）、完整系统提示词、thinking 配置、可用工具集、终止信号、当前模型规格，以及包括快速模式设置、effort 值与回退模型在内的额外选项。
6. **工具调用分派**：若响应包含 `tool_use` 块，则流向工具编排层（第 4.2 节）。
7. **权限闸门**：每个工具请求都穿过权限系统（第 5 节）。
8. **工具执行与结果收集**：工具结果以 `tool_result` 消息的形式加入对话，循环继续。
9. **停止条件**：若响应不含 `tool_use` 块（仅有文本），本轮结束。

`queryLoop()` 函数被定义为一个 `AsyncGenerator`，在推进过程中产出 `StreamEvent`、`RequestStartEvent`、`Message`、`TombstoneMessage` 与 `ToolUseSummaryMessage` 事件。这种基于生成器的设计，使输出可以流式送达 UI 层，同时在循环内部保持单一的控制流。

Claude Code 的反应式循环遵循 ReAct 模式（Yao et al., 2022）：模型生成推理与工具调用，外壳执行动作，结果反馈给下一次迭代。替代的编排模式包括显式的、基于图的路由（LangChain, Inc., 2024，控制流被定义为带类型边的状态机），以及在落子前探索多条动作轨迹的树搜索方法（Zhou et al., 2023）。Anthropic 自己的文档（Schluntz and Zhang, 2024）区分出五种可组合的工作流模式（提示链、路由、并行化、编排者—工作者、评估者—优化者），其中 Claude Code 主要把编排者—工作者模式用于子智能体委派（第 8 节），而核心循环保持反应式。这种反应式设计以搜索完备性换取简单性与低延迟：每个轮次都只承诺一条动作序列，不做回溯。

#### 4.2 工具分派与流式执行

当模型响应包含 `tool_use` 块时，系统会在两条执行路径之间选择。主路径使用 `StreamingToolExecutor`，它在工具随模型响应流式到达时即开始执行，从而降低多工具响应的延迟。回退路径使用 `toolOrchestration.ts` 中的 `runTools()`，遍历 `partitionToolCalls()` 产生的分组。两条路径都会把工具归类为「可并发」或「独占」。只读操作可以并行执行，而诸如 shell 命令这类会修改状态的操作则被串行化。

`StreamingToolExecutor`（`StreamingToolExecutor.ts`）用两种协调机制管理并发执行：

- **同级终止控制器**：任一 Bash 工具报错时触发，立即终止其他正在执行中的子进程，而不是让它们跑完。
- **「结果就绪」信号**：当新输出就绪时，唤醒 `getRemainingResults()` 的消费者。

结果会被缓冲，因此不会越过仍在运行中的非并发安全工具提前发出；而并行运行的并发安全工具，其结果一旦完成即发出。这种「并发读、串行写」的执行模型，处在完全串行分派与更激进的推测式方法（如 PASTE，Sui et al., 2026，在模型仍在生成时就推测性地预执行预测的未来工具调用，用推测来掩盖工具延迟）之间的中间位置。

工具结果收集阶段会遍历来自流式执行器或批量 `runTools()` 异步生成器的更新。两者都是异步可迭代对象，由同一个 `for await` 循环消费；区别在于工具执行是在模型完成流式输出之前开始（流式），还是在按并发安全性分组之后开始（批量）。每次更新可能携带一个工具结果、一个附件或一个进度事件。一项特殊检查会识别 `hook_stopped_continuation` 附件：若某个 PostToolUse hook 表明本轮不应继续，则设置 `shouldPreventContinuation` 标志。结果经 `normalizeMessagesForAPI()` 为 Anthropic API 归一化，过滤后只保留 user 类型的消息。

#### 4.3 模型前上下文整形器

在 `query.ts` 中，每次模型调用之前会有五个上下文整形器顺序执行，每个都作用于 `messagesForQuery` 数组。五个整形器依次运行：靠前的步骤先施加较轻的削减，靠后的步骤再施加更宽泛的压缩。

##### 预算削减

（`applyToolResultBudget()`）。对工具结果强制施加逐消息的体积上限，把过大的输出替换为内容引用。豁免工具（即 `maxResultSizeChars` 非有限值的工具）保留完整输出。内容替换会被持久化到 agent 与 session 两类查询源，以便恢复时重建。预算削减在 microcompact 之前执行，因为 microcompact 纯粹按 `tool_use_id` 操作，从不检查内容；二者组合得很干净。

##### Snip

（`snipCompactIfNeeded()`，由 `HISTORY_SNIP` 开关控制）。一种轻量裁剪，移除较早的历史片段，返回 `{messages, tokensFreed, boundaryMessage}`。`snipTokensFreed` 的值被传给 auto-compact，因为主 token 计数器是从最近一条 assistant 消息的 `usage` 字段推导上下文大小的，而该消息在 snip 后依然存在并保留着 snip 之前的 `input_tokens`；因此除非显式传递，snip 的节省对计数器是不可见的。

##### Microcompact

细粒度压缩，始终运行一条基于时间的路径，并可选运行一条缓存感知的路径（由 `CACHED_MICROCOMPACT` 开关控制）。启用缓存路径时，边界消息会被推迟到 API 响应之后，以便使用真实的 `cache_deleted_input_tokens` 而非估算值。返回 `{messages, compactionInfo}`，其中 `compactionInfo` 可能包含 `pendingCacheEdits`。

##### Context collapse

由 `CONTEXT_COLLAPSE` 开关控制。这是对话历史之上的一次读取时投影。源码注释解释道：「不产出任何内容；折叠后的视图是对 REPL 完整历史的一次读取时投影。摘要消息存放在折叠存储中，而不在 REPL 数组里。正因如此，折叠才能跨轮次持续存在。」与其他整形器不同，context collapse 不修改 REPL 存储的历史；它通过 `applyCollapsesIfNeeded()` 把 `messagesForQuery` 数组替换为一份投影视图，于是模型看到的是折叠版本，而完整历史仍可用于重建。

##### Auto-compact

第五个整形器，通过 `compact.ts` 中的 `compactConversation()` 触发一次由模型生成的完整摘要。该函数执行 PreCompact hooks，用 `getCompactPrompt()` 构造摘要请求，并调用模型产出压缩后的摘要。结果进入 `buildPostCompactMessages()`（`compact.ts`）。只有当前四个整形器全部执行完毕后上下文仍超过压力阈值时，auto-compact 才会触发。

#### 4.4 恢复机制

查询循环为边界情形实现了若干恢复机制：

- **最大输出 token 升级**：当响应触及输出 token 上限时，系统可以在 GrowthBook 开关允许、且不存在既有覆盖或环境变量上限的情况下，用更高的上限重试。每个轮次最多允许三次恢复尝试（`MAX_OUTPUT_TOKENS_RECOVERY_LIMIT = 3`）。
- **反应式压缩（由 `REACTIVE_COMPACT` 控制）**：在出现「提示词过长」或「媒体过大」错误之后，循环可以尝试反应式压缩，并在恢复成功时重试请求。`hasAttemptedReactiveCompact` 标志确保它每轮至多触发一次。
- **提示词过长的处理**：若 API 返回 `prompt_too_long` 错误，循环会先尝试 context-collapse 溢出恢复与反应式压缩。只有这些都失败后，才会以 `reason: 'prompt_too_long'` 终止。
- **流式回退**：`onStreamingFallback` 回调处理流式 API 问题，允许循环换一种策略重试。
- **回退模型**：`fallbackModel` 参数允许在主模型失败时切换到替代模型。

#### 4.5 停止条件

多个条件可以终止循环：

1. **没有工具使用**：模型只产出文本内容（首要停止条件）。
2. **达到最大轮次**：可配置的 `maxTurns` 上限被触及。
3. **上下文溢出**：API 返回 `prompt_too_long`。
4. **Hook 干预**：某个 PostToolUse hook 设置了 `hook_stopped_continuation`。
5. **显式中止**：`abortController` 信号被触发。

轮次流水线决定了工具请求如何被编排与恢复。下一节考察那道闸门——它决定了每个请求究竟是否获准执行。

### 5 工具授权与控制边界

生产级编程智能体采用不同的安全架构：分层策略执行、操作系统级沙箱，或基于版本控制的回滚。Claude Code 结合了前两者，实现了表 1 中的四条设计原则：先拒绝并升级至人工、分级的信任光谱、分层机制的纵深防御，以及以可逆性加权的风险评估。

当 Claude 决定执行某个工具时（例如通过 `BashTool` 运行 `npm test` 以复现 auth 测试失败），该请求进入图 4 所示的权限流水线。除 bypass 模式外，工具调用都要穿过权限系统。在默认交互姿态下，超出只读访问的动作会请求审批而不是被静默执行；而更宽松的模式则把部分提示替换为有作用域的自动批准、拒绝，或由分类器中介的复核。这一默认值有其动机依据：一个有据可查的行为模式——Anthropic 的 auto 模式分析（Hughes, 2026）发现用户会批准大约 93% 的权限提示，说明「审批疲劳」使交互式确认作为唯一安全机制在行为上不可靠。由于用户习惯性地不细看就批准，系统必须独立于人的警觉性来维持安全。这促成了这样的架构承诺：先拒绝式评估、整体拒绝式预过滤，以及沙箱，三者作为彼此独立的分层运作，且不依赖用户是否专注。

| 原则 | 说明 |
| --- | --- |
| 渐进式信任（Progressive Trust） | 智能体以最小自主权起步；用户通过批准工具调用来扩张自主权，这些批准会成为永久规则。 |
| 先拒绝、默认询问（Deny-First, Ask-by-Default） | 即使在更宽松的模式下，拒绝规则也总是胜出。在 default 与手动审批模式下，未匹配到的有风险动作会询问用户而不是静默执行；可选的 auto 模式则把许多此类复核交由分类器中介的检查处理。 |
| 可组合的策略（Composable Policy） | 三种机制塑造策略：声明式规则、全局信任模式与可编程 hooks，每一种都可独立配置。 |

#### 5.1 权限模式与规则评估

类型定义中共存在七种权限模式（`types/permissions.ts` 中有 5 种外部模式；auto 按条件加入；bubble 存在于类型联合中）：

1. `plan`：模型必须先给出计划；只有获得用户批准后才继续执行。
2. `default`：标准交互式使用。大多数操作需要用户批准。
3. `acceptEdits`：工作目录内的编辑以及某些文件系统 shell 命令（`mkdir`、`rmdir`、`touch`、`rm`、`mv`、`cp`、`sed`）自动批准；其他 shell 命令需要批准。
4. `auto`：一个基于机器学习的分类器，用于评估未通过快速路径检查的请求（由 `TRANSCRIPT_CLASSIFIER` 开关控制）。
5. `dontAsk`：抑制提示，原本会触发提示的动作被自动拒绝；显式的允许与拒绝规则仍然生效。
6. `bypassPermissions`：跳过大多数权限提示，但安全关键检查与「不可绕过」规则仍然生效。
7. `bubble`：仅供内部使用的模式，用于把子智能体的权限升级到父级终端。

五种对外可见的模式（`acceptEdits`、`bypassPermissions`、`default`、`dontAsk`、`plan`）定义在 `EXTERNAL_PERMISSION_MODES` 数组中。`auto` 模式仅在 `TRANSCRIPT_CLASSIFIER` 功能开关启用时按条件加入。`bubble` 模式存在于类型联合中，但不在任何模式数组里；它在内部用于子智能体的权限升级（第 8 节）。

权限规则按先拒绝的顺序评估（`permissions.ts`）。`toolMatchesRule()` 函数先检查拒绝规则：拒绝规则始终优先于允许规则，即便允许规则更为具体。一条宽泛的拒绝（「拒绝所有 shell 命令」）不能被一条窄的允许（「允许 `npm test`」）覆盖。该规则系统支持工具级匹配（按工具名）与内容级匹配（匹配特定的工具输入模式，例如 `Bash(prefix:npm)`）。

这七种模式横跨一条分级的自主性光谱，从 `plan`（用户执行前批准所有计划），经 `default` 与 `acceptEdits`，一直到 `bypassPermissions`（提示最少）。这条梯度体现了一个反复出现的设计张力：随着自主性提升，系统必须从交互式审批转向自动化安全检查。其他智能体系统以不同方式化解这一张力。SWE-Agent 与 OpenHands（Yang et al., 2024；Wang et al., 2024b）使用 Docker 容器隔离，对智能体的整个执行环境做沙箱处理，而不是逐个评估工具调用。Aider（Gauthier, 2024）依赖 Git 作为安全网，使所有改动都可以通过版本控制回退。Claude Code 的做法是在一个可选的 shell 沙箱之上叠加多种策略执行机制（第 5.4 节），以简洁性换取对单个动作的细粒度控制。

#### 5.2 授权流水线

完整的授权流水线经过若干阶段：

##### 预过滤

在任何工具请求进入运行时评估之前，`filterToolsByDenyRules()`（`tools.ts`）会在工具池组装阶段就把被整体拒绝的工具彻底从模型视野中剥离。文档写道：「使用与运行时权限检查相同的匹配器，因此像 `mcp__server` 这样的 MCP 服务器前缀规则会在模型看到它们之前，剥离掉该服务器的全部工具。」这防止模型尝试调用被禁用的工具，从而不把调用浪费在它们身上。

##### PreToolUse hook

已注册的 hooks 作为权限流水线的一部分触发。PreToolUse hook 可以返回一个 `permissionDecision` 以拒绝或询问，或返回一个 `updatedInput` 以修改工具的输入参数（`types/hooks.ts`）。hook 的 allow 并不能绕过后续基于规则的拒绝或安全检查。在交互式路径中，用户对话框先入队，hooks 异步运行；协调者及类似的后台智能体路径则会先等待自动化检查完成，再显示对话框。

##### 规则评估

先拒绝式规则引擎对请求进行评估。MCP 工具按其全限定名 `mcp__server__tool` 匹配，服务器级规则匹配来自该服务器的全部工具。

##### 权限处理器

`useCanUseTool.tsx` 中的处理器会根据运行时上下文分流到四条路径之一：

1. **协调者（Coordinator）**：用于多智能体协调模式。先尝试自动化解决（分类器、hooks、规则），失败后再回退到用户交互。
2. **集群工作者（Swarm worker）**：处理多智能体集群中的工作者智能体，它们有自己的解决逻辑。
3. **推测性分类器（Speculative classifier）**：当 `BASH_CLASSIFIER` 启用且工具为 `BashTool` 时，推测性分类器让一个预先启动的分类结果与超时机制赛跑。若分类器高置信度返回，工具即刻获批，无需用户交互。
4. **交互式（Interactive）**：回退路径，通过终端 UI 呈现标准的用户审批对话框。

在协调者及某些后台路径中，自动化解决先于用户交互被尝试。在标准交互式路径中，对话框可以先出现，而 hooks 或分类器检查并行继续。当分类器或拒绝规则拦截一个动作时，系统把这次拒绝视为一个路由信号，而不是硬性终止：模型收到拒绝原因，修正自己的做法，并在下一次循环迭代中尝试更安全的替代方案。`PermissionDenied` hook 事件（第 6 节）让外部代码能够以编程方式观察并响应这些拒绝。这种面向恢复的设计意味着，权限执行会塑造智能体的行为，而不只是让它停下。

#### 5.3 Auto 模式分类器与 Hook 生命周期

auto 模式分类器（`yoloClassifier.ts`）在启用时参与权限决策。当 `TRANSCRIPT_CLASSIFIER` 启用时，分类器会加载三份提示词资源：

- 一份基础系统提示词。
- 一份外部权限模板。
- 对 Anthropic 内部用户，另有一份独立的内部模板。

分类器依据对话记录与权限模板评估拟议的工具调用，产出允许、拒绝或请求人工审批。函数 `isUsingExternalPermissions()` 会检查 `USER_TYPE` 与 `forceExternalPermissions` 配置开关，以选取合适的模板。

源码中定义的 27 种 hook 事件（`coreTypes.ts`）里，有 5 种直接参与权限流程，各自带一份由 Zod 校验的输出 schema（`types/hooks.ts`）：

- **PreToolUse**：可返回 `permissionDecision`（拒绝或询问，但 allow 不能绕过后续检查）、`permissionDecisionReason`，以及 `updatedInput`（修改参数）。
- **PostToolUse**：可注入 `additionalContext`；对 MCP 工具，还可返回 `updatedMCPToolOutput` 在结果进入上下文之前修改它们。
- **PostToolUseFailure**：可针对错误注入 `additionalContext` 作为针对性指引。
- **PermissionDenied**：可在 auto 模式拒绝之后提供重试指引。
- **PermissionRequest**：可返回 allow 或 deny 的决策。在协调者及类似路径中，它可以在用户对话框之前解决决策；在标准交互式路径中，它也可以与对话框并行运行。

对非 MCP 工具，`tool_result` 会在 PostToolUse hook 触发之前发出。对 MCP 工具，结果会推迟到 post hooks 运行之后才发出，从而使 `updatedMCPToolOutput` 能够生效。

#### 5.4 Shell 沙箱

Shell 沙箱为 Bash 与 PowerShell 命令提供了额外一层保护（`shouldUseSandbox.ts`）。`shouldUseSandbox()` 函数会检查：沙箱是否全局启用、此次调用是否选择退出、以及命令是否匹配任何排除模式。

沙箱生效时，它提供独立于应用层权限模型的文件系统与网络隔离。一条命令可能获得了权限批准但仍在沙箱中执行，也可能因权限被拒而根本没走到沙箱检查。这两套系统作用在不同的轴上：一个是授权，一个是隔离。

> 注释 3：独立安全研究报道，在所分析的时段内，这一网络约束存在一处解析器差异缺口：主机允许名单使用 JavaScript 后缀匹配，而名称解析会在嵌入的空字节处截断，因此一个精心构造的主机名可以既通过后缀检查，又解析到另一个被屏蔽的主机。所报告的受影响区间（v2.0.24–v2.1.89）包含此处分析的 v2.1.88 快照，且未分配 CVE（Cyber Security News, 2026）（C 级证据）。

这套分层安全架构建立在一个独立性假设之上：如果某一层失效，其他层会兜住这次违规。然而，若干层共享着相同的性能约束。安全研究者（Adversa.ai, 2026）记录：包含 50 个以上子命令的命令会退回到单一的通用审批提示，而不再逐子命令执行拒绝规则检查，因为逐子命令解析会导致界面冻结。这个例子表明，当各层共享失效模式时，纵深防御会退化——这是安全与性能之间的结构性张力，第 12.3 节将进一步分析。

权限流水线决定了工具请求是否执行。下一节考察究竟是什么决定了哪些工具存在：即组装模型动作面的可扩展性架构。

### 6 可扩展性：MCP、Plugins、Skills 与 Hooks

编程智能体的一个反复出现的设计问题，是如何组织扩展面：单一统一机制、少量专门机制，还是一个带不同上下文成本的分层栈。本节的分析说明了表 1 中的两条设计原则：可组合的多机制可扩展性，以及外置的可编程策略。回到运行示例：Claude 正在尝试修复 `auth.test.ts`，而此前那次 `npm test` 请求已被权限系统处理完毕（第 5 节），接下来的问题是：对于这次修复，有哪些「经扩展能力增强过的动作面」可用？当 Claude Code 中一个轮次开始时，模型看到的不只是 `BashTool`、`FileReadTool` 这类内置工具，还包括来自某个 MCP 服务器的数据库查询工具、来自 `.claude/skills/` 的自定义 lint skill，以及某个已安装 plugin 贡献的工具。它们通过四种在不同环节扩展智能体的机制抵达：MCP 服务器提供外部工具集成，plugins 打包并分发组件包，skills 注入领域专属指令，hooks 拦截工具执行生命周期。Anthropic 的文档（Anthropic, 2026g）给出了更宽的视角，把 `CLAUDE.md`（第 7 节）与子智能体（第 8 节）与这里分析的四种机制并列。本节把 `CLAUDE.md` 与子智能体放在各自章节单独讨论，因为它们运行在不同的子系统里（分别是上下文构建与委派），但这个上下文成本的排序在架构上是有意义的：它揭示了每个扩展点如何在表达力与有限的上下文窗口之间做权衡。

#### 6.1 四种扩展机制

> 图 5：Claude Code 的扩展机制接入智能体循环的位置。左侧伪代码是图 1 中「Agent Loop」块的放大。每个智能体循环都有三个注入点：`a assemble()` 决定模型看到什么，`b model()` 决定它能触达什么，`c execute()` 决定一个动作是否真的运行、以及如何运行。

**`a assemble()`：模型看到什么**

| 元素 | 作用 |
| --- | --- |
| `CLAUDE.md` 文件 | 被载入上下文；工作目录之上的文件在启动时加载，子目录文件按需加载 |
| Skill 描述 | 宣告 skills 的存在，使模型去调用 `SkillTool` |
| MCP 资源与 prompts | MCP 服务器推送的非工具类内容 |
| 输出风格（Output style） | 替换用于响应格式化的系统块 |
| UserPromptSubmit hook | 在每个用户轮次注入上下文，或直接阻断 |
| SessionStart hook | 会话启动时的一次性上下文注入 |

**`b model()`：模型能触达什么**

| 元素 | 作用 |
| --- | --- |
| 内置工具 | 随 CLI 发布的 Read / Edit / Bash 等 |
| MCP 工具 | 来自任意 MCP 服务器的工具，处于同一个扁平工具池中 |
| SkillTool | 按名称启动某个 skill 的元工具 |
| AgentTool | 递归派生子智能体的元工具 |

**`c execute()`：动作是否以及如何运行**

| 元素 | 作用 |
| --- | --- |
| 权限规则 | 逐次调用的声明式 allow / deny / ask |
| PreToolUse hook | 批准 / 阻断 / 改写一次工具调用 |
| PostToolUse hook | 在调用之后修改输出或注入上下文 |
| Stop hook | 在模型停止时强制让循环继续 |
| SubagentStop hook | 同上，用于经 `AgentTool` 派生的子智能体 |
| Notification hook | 对用户通知产生的外部副作用 |

```text
# Claude Code 智能体循环的一轮
while not stopped:
    # a assemble：构建模型看到的内容
    context = assemble(
        system_prompt,     # 说明头部
        tool_schemas,      # 可调用的工具签名
        history,           # 先前轮次的消息
        hook_additions,    # 由 hooks 推入
    )
    # b model：选择下一个动作
    action = model(context, tools)   # 扁平工具池
    if action.is_text_only():
        stopped = run_stop_hooks(action)   # 可能否决
        continue
    # c execute：授权并运行工具调用
    action, hook_decision = run_pre_tool_hooks(action)
    if not permitted(action, hook_decision):
        continue
    result = execute(action)                # 工具在此运行
    result = run_post_tool_hooks(result)     # 修改 / 批注
    history.append(action, result)
```

这些机制实现在不同的源码目录中（图 5），服务于不同的集成模式：

##### MCP 服务器

Model Context Protocol 是主要的外部工具集成路径。MCP 服务器可从多个作用域配置：project、user、local 与 enterprise，另有 plugin 与 claude.ai 服务器在运行时合并进来（`services/mcp/config.ts`）。MCP 客户端（`services/mcp/client.ts`）支持多种传输类型：stdio、SSE、HTTP、WebSocket、SDK，以及 IDE 专属变体（`sse-ide`、`ws-ide`）和内部的 `claudeai-proxy`。每个已连接的服务器贡献若干 `MCPTool` 形式的工具定义。内置的专用工具 `ListMcpResourcesTool` 与 `ReadMcpResourceTool` 提供对 MCP 资源的访问。

##### Plugins

Plugins 承担双重角色：既是打包格式，也是分发机制。`PluginManifestSchema`（`utils/plugins/schemas.ts`）接受十种组件类型：commands、agents、skills、hooks、MCP 服务器、LSP 服务器、输出风格、channels、settings 与用户配置。plugin 加载器（`utils/plugins/pluginLoader.ts`）校验清单，并把各组件路由到各自的注册表：commands 与 skills 通过 `SkillTool` 元工具暴露，agents 出现在被 `AgentTool` 消费的定义中，hooks 合并进 hook 注册表，MCP 与 LSP 服务器并入各自的标准配置，输出风格则修改响应格式。因此单个 plugin 包可以同时在多个组件类型上扩展 Claude Code，这使 plugins 成为第三方扩展的主要分发载体。

##### Skills

每个 skill 由一个带 YAML frontmatter 的 `SKILL.md` 文件定义。`parseSkillFrontmatterFields()` 函数（`loadSkillsDir.ts`）解析 15 个以上字段，包括显示名、描述、允许的工具（授予该 skill 访问额外工具的能力）、参数提示、模型覆盖、执行上下文（`'fork'` 表示隔离执行）、关联的 agent 定义、effort 等级与 shell 配置。Skills 可以定义自己的 hooks，这些 hooks 在被调用时动态注册。内置 skills 在启动时于内存中注册。被调用时，`SkillTool` 元工具把该 skill 的指令注入上下文。

##### Hooks

源码中定义了 27 种 hook 事件，涵盖工具授权（`PreToolUse`、`PostToolUse`、`PostToolUseFailure`、`PermissionRequest`、`PermissionDenied`）、会话生命周期（`SessionStart`、`SessionEnd`、`Setup`、`Stop`、`StopFailure`）、用户交互（`UserPromptSubmit`、`Elicitation`、`ElicitationResult`）、子智能体协调（`SubagentStart`、`SubagentStop`、`TeammateIdle`、`TaskCreated`、`TaskCompleted`）、上下文管理（`PreCompact`、`PostCompact`、`InstructionsLoaded`、`ConfigChange`）、工作区事件（`CwdChanged`、`FileChanged`、`WorktreeCreate`、`WorktreeRemove`）与通知（`coreTypes.ts`、`coreSchemas.ts`）。其中 15 种拥有事件专属的输出 schema，字段丰富，支持权限决策、上下文注入、输入修改、MCP 结果转换与重试控制（`types/hooks.ts`）。通过 settings 与 plugins 配置的持久化 hook 命令有四种类型：shell 命令（`type: command`）、LLM 提示 hook（`type: prompt`）、HTTP hook（`type: http`）与智能体式验证者 hook（`type: agent`）（`schemas/hooks.ts`）。运行时另外支持不可持久化的回调 hook（`type: callback`），供 SDK 与内部探针使用（`types/hooks.ts`）。hook 来源包括启动时的 `settings.json`、plugins 与托管策略；skill 的 hooks 在被调用时动态注册（`utils/hooks.ts`）。五种与工具授权有关的事件在第 5.3 节已有详述。

#### 6.2 工具池组装

`tools.ts` 中的 `assembleToolPool()` 函数在源码注释中被描述为「把内置工具与 MCP 工具合并的唯一真相来源」。组装遵循五步流水线：

1. **基础工具枚举**。`getAllBaseTools()`（`tools.ts`）返回一个最多含 54 个工具的数组：19 个始终包含（如 `BashTool`、`FileReadTool`、`AgentTool`、`SkillTool`），另有 35 个依据功能开关、环境变量与用户类型按条件包含。Anthropic 内部用户会获得额外的内部工具。Worktree 模式启用 `EnterWorktreeTool` 与 `ExitWorktreeTool`。智能体集群启用团队工具。当 Bun 二进制中内置了搜索工具时，专用的 `GlobTool` 与 `GrepTool` 会被省略。
2. **模式过滤**。`getTools()`（`tools.ts`）施加按模式的过滤。在 `CLAUDE_CODE_SIMPLE` 模式下，只有 Bash、Read 与 Edit 可用（在 REPL 分支中则是 `REPLTool`；如适用还会加上协调者工具）。每个工具的 `isEnabled()` 方法会被调用以做运行时可用性检查。
3. **拒绝规则预过滤**。`filterToolsByDenyRules()`（`tools.ts`）在任何调用之前把被整体拒绝的工具从模型视野中剥离。
4. **MCP 工具集成**。来自 `appState.mcp.tools` 的 MCP 工具按拒绝规则过滤后，与内置工具合并。
5. **去重**。工具按名称去重，内置工具优先于 MCP 工具。

`REPL.tsx`（经由 `useMergedTools` hook）与 `AgentTool.tsx`（在构建工作者工具集时）都会调用这一函数，确保所有执行路径的组装保持一致。在请求时点，延迟工具可能对模型上下文隐藏，直到通过 `ToolSearch` 显式查询（`tools.ts`）。

基于 agent 的扩展（通过 `.claude/agents/*.md` 定义的自定义 agent，以及 plugin 贡献的 agents）放在第 8 节讨论，因为 agent 与上述四种机制有根本不同：它们创建的是新的、隔离的上下文窗口，而不是扩展当前窗口。

#### 6.3 为什么是四种机制？

既然每增加一种扩展机制都会扩大开发者必须学习的表面，一个自然的问题是：为什么 Claude Code 使用四种彼此独立的机制，而不是整合成一两种？答案在于这样一个观察：不同类型的可扩展性对上下文窗口施加的成本各不相同，而单一机制无法从「零上下文的生命周期 hook」一直覆盖到「schema 密集的工具服务器」，否则就会把不必要的权衡强加给扩展作者。

| 机制 | 独有能力 | 上下文成本 | 注入点 |
| --- | --- | --- | --- |
| MCP 服务器 | 外部服务集成（多传输） | 工具 schema 加载后为高 | `model()`：工具池 |
| Plugins | 多组件打包 + 分发 | 中（视情况而定） | 全部三个点 |
| Skills | 领域专属指令 + 元工具调用 | 调用前为低 | `assemble()`：上下文注入 |
| Hooks | 生命周期拦截 + 事件驱动自动化 | 默认为零 | `execute()`：工具前／后 |

如上表所示，每种机制都以不同的部署复杂度换取一种不同类型的可扩展性。MCP 服务器提供运行时工具集成（模型获得新的可调用工具），代价是服务器管理开销，以及工具 schema 消耗的上下文预算——这些 schema 默认只在某个工具被需要时才加载。Skills 在极低的上下文成本下塑造智能体的思考方式（不只是它拥有哪些工具），因为在 skill 被调用之前，只有 frontmatter 描述会留在提示词里。Hooks 以零上下文占用提供横切的生命周期控制（阻断、改写或批注工具调用），不过 hooks 可以选择注入额外上下文。Plugins 把其余三者任意组合打包成可分发的包，充当打包与分发层，而不是一种独立的运行时原语。这种分级的上下文成本排序（hooks 为零，skills 在调用前为低，plugins 为中，MCP 为高）意味着便宜的扩展可以大范围铺开而不耗尽上下文窗口，而昂贵的扩展则留给那些确实需要新工具面的场景。

有些智能体框架只提供单一扩展机制，通常是纯工具 API，所有定制都以额外可调用工具的形式到来。另一些采用两层结构，把工具与配置或指令注入分开。Claude Code 的四机制做法可以容纳更广的扩展模式，从零上下文的事件处理器到完整的外部服务集成，但也提高了开发者面对「某个集成任务该用哪种机制」时的学习曲线。

### 7 上下文构建与记忆

智能体如何管理自己的上下文窗口、如何持久化用户指令，是一项核心设计选择；不同系统会在基于文件的透明性、数据库支撑的检索，以及不透明的习得式表示之间取舍。这里的设计选择实现了表 1 中的两条原则：把上下文当作稀缺资源并渐进式管理，以及透明的、基于文件的配置与记忆。

到运行示例的这个阶段，任务已经积累了一些状态：最初的请求、`npm test` 的权限结果、第 6 节组装的工具池，以及迄今收集到的任何文件读取或命令输出。本节要问的是：在下一次模型调用之前，这些不断增长的状态如何被打包进 Claude Code 有界的上下文窗口。

在模型被调用之前，智能体循环从工具池（第 6 节）、`CLAUDE.md` 文件、自动记忆与对话历史中组装出上下文窗口。接下来的各小节将覆盖组装顺序、`CLAUDE.md` 层级，以及多步压缩流水线。

#### 7.1 上下文窗口组装

> 图 6：上下文构建与记忆层级。汇入上下文窗口的来源包括系统提示词、输出风格、环境信息、`CLAUDE.md` 层级（托管、用户、项目与本地）、自动记忆、按路径生效的规则、MCP 工具名、经 ToolSearch 延迟加载的工具定义、对话历史、文件读取、命令输出、工具结果、子智能体摘要，以及压缩摘要。

上下文窗口（图 6）由下列来源组装而成，其中一部分在初始组装时进入，另一些在轮次后期注入：

1. **系统提示词（system prompt）**，其中合并了输出风格的修改，以及 `--append-system-prompt` 标志传入的内容。
2. **环境信息**，经 `getSystemContext()`（`context.ts`）获取：git 状态（远程模式或禁用 git 指令时跳过），以及内部构建下可选的一次「打断缓存」注入（由 `BREAK_CACHE_COMMAND` 控制）。每会话记忆化一次。
3. **`CLAUDE.md` 层级**，经 `getUserContext()`（`context.ts`）获取：四级指令文件层级（第 7.2 节）。同样被记忆化。
4. **按路径生效的规则**：条件性的、按目录匹配的规则，在智能体读取匹配目录中的文件时才惰性加载。
5. **自动记忆**：异步预取的情境相关记忆条目。
6. **工具元数据**：skill 描述、MCP 工具名，以及延迟加载的工具定义（经 ToolSearch，按需获取）。
7. **对话历史**：向后延续，并受压缩约束。
8. **工具结果**：文件读取、命令输出、子智能体摘要。
9. **压缩摘要**：替代较早的历史片段。

`query.ts` 处的系统提示词组装通过 `asSystemPrompt(appendSystemContext(systemPrompt, systemContext))()` 把系统上下文与基础提示词合并。用户上下文（`CLAUDE.md` 与日期）则经 `prependUserContext()` 前置到消息数组。这种分离意味着 `CLAUDE.md` 内容在 API 请求中占据的结构位置不同于系统提示词，可能影响模型的注意力模式。

若干上下文来源是在主窗口构造完成之后才注入的：相关记忆预取（`query.ts`）、MCP 指令增量（仅新增或变更的服务器指令）、agent 列表增量，以及后台智能体任务通知。因此，上下文窗口在组装时并非静态的，它可以在轮次进行中继续增长。

#### 7.2 `CLAUDE.md` 层级与自动记忆

有一条设计原则塑造了记忆系统：存储的上下文应当可被用户检查与编辑。`CLAUDE.md` 文件是纯文本 Markdown，而不是结构化配置或不透明的数据库条目。这一透明度选择以表达力换取可审计性：用户可以直接检视并编辑自己掌控的记忆文件，项目级记忆也可以与代码库一起纳入版本控制（Anthropic, 2026h；MindStudio Team, 2026）。其他记忆架构说明了这一取舍。检索增强类方法用基于嵌入的查找来浮现相关的既有上下文，以可检查性为代价换来灵活性：用户很难看到或编辑检索系统认为相关的内容。数据库支撑的记忆提供结构化查询，但需要额外基础设施，且对版本控制不透明。Claude Code 基于文件的做法让这些记忆表面可读可编辑，尽管其他上下文来源仍然通过系统提示词、工具、hooks、MCP 服务器与运行时状态进入。系统在记忆检索上并不使用嵌入或向量相似度索引；相反，它用一次基于 LLM 的记忆文件头扫描，按需选出最多五个相关文件，并以文件为粒度而非条目为粒度呈现。基于嵌入的系统可以更有选择性地检索单个条目，代价则是可检查性以及维护索引所需的基础设施。

`CLAUDE.md` 文件遵循一个多级加载层级。源码头部（`claudemd.ts`）定义了四种记忆类型：

1. **托管记忆**（如 Linux 上的 `/etc/claude-code/CLAUDE.md`）：面向所有用户的操作系统级策略。
2. **用户记忆**（`~/.claude/CLAUDE.md`）：私有的全局指令。
3. **项目记忆**（项目根目录下的 `CLAUDE.md`、`.claude/CLAUDE.md` 以及 `.claude/rules/*.md`）：签入代码库的指令。
4. **本地记忆**（项目根目录下的 `CLAUDE.local.md`）：被 gitignore，用于私有的项目专属指令。

文件发现从当前目录向上遍历到根目录，在每个目录中检查所有的项目记忆与本地记忆文件。越靠近当前目录的文件优先级越高（越晚加载）。

文件按「优先级的反序」加载：越晚加载的文件获得越多的模型注意力。从根目录到当前工作目录之间的目录，其 `.claude/rules/*.md` 中的无条件规则会在启动时被主动加载。对于当前工作目录以下的嵌套目录，即使是无条件规则也会在智能体读取匹配目录中的文件时才惰性加载。这意味着随着代码库的新区域被探索，模型的指令集可以在对话过程中不断演化。

`CLAUDE.md` 内容是作为用户上下文（一条 user 消息）投递的，而不是作为系统提示词内容（`context.ts`）。这一架构选择有一个重要含义：因为 `CLAUDE.md` 内容以对话上下文而非系统级指令的形式投递，模型对这些指令的遵从是概率性的，而非有保证的。按先拒绝顺序评估的权限规则（第 5 节）提供了确定性的执行层。这就在「引导」（`CLAUDE.md`，概率性）与「执行」（权限规则，确定性）之间形成了一次有意的分工。函数调用 `setCachedClaudeMdContent()` 把已加载的内容缓存起来供 auto 模式分类器使用，以避免 `CLAUDE.md` 加载器与权限系统之间的导入循环。

记忆文件支持 `@include` 指令，用于模块化的指令集（`claudemd.ts` 中的 `processMemoryFile()`）。语法变体包括 `@path`、`@./relative`、`@~/home` 与 `@/absolute`。该指令只在叶子文本节点中生效（代码块内部无效）。在实现上，包含方文件先入栈，被包含的文件追加其后；通过记录已处理路径来防止循环引用；不存在的文件被静默忽略。

#### 7.3 压缩流水线

五层压缩流水线（第 4.3 节）通过渐进式压缩实现了「上下文即瓶颈」这一原则（`query.ts`）。Claude Code 没有采用单一策略，而是依次施加五层压缩，激进度逐层递增（其中三层由构建期功能开关控制，预算削减由运行时开关控制，auto-compact 则可由用户配置）。这种渐进做法与更简单的替代方案（如一次性截断，即丢弃最旧的消息，或单一摘要步骤）形成对比。渐进式设计体现的是一种惰性降级原则：先施加干扰最小的压缩，只在更廉价的策略被证明不足时才升级。这一做法的代价是复杂度。五层相互作用的压缩机制加上若干功能开关，会产生用户难以完全预测的行为。Auto-compact 会在记录中生成可见的摘要，microcompact 会发出一个边界标记，但 context collapse 的运行对用户不可见。更简单的一次性做法牺牲了信息，却更容易推理。

1. **预算削减**（运行时开关）：逐工具结果的体积上限。
2. **Snip**（`HISTORY_SNIP`）：对较早历史的轻量裁剪。
3. **Microcompact**（`CACHED_MICROCOMPACT`）：细粒度的缓存感知压缩。
4. **Context collapse**（`CONTEXT_COLLAPSE`）：在读取时对历史做虚拟投影。
5. **Auto-compact**（默认启用，可关闭）：由模型生成的完整摘要。

`buildPostCompactMessages()` 函数（`compact.ts`）返回如下压缩后结构：`[boundaryMarker, ...summaryMessages, ...messagesToKeep, ...attachments, ...hookResults]`。边界标记通过 `annotateBoundaryWithPreservedSegment()` 附加被保留片段的元数据，记录 `headUuid`、`anchorUuid` 与 `tailUuid`，从而支持在读取时对消息链做链式修补。这种以追加为主的设计意味着压缩从不修改或删除已写入的记录行，它只追加新的边界与摘要事件。

压缩函数 `compactConversation()`（`compact.ts`）包含若干设计选择。Pre-compact hooks 先触发，允许 hook 注入自定义指令。一个 GrowthBook 功能开关控制压缩路径是否复用主对话的提示词缓存（代码注释记录了一次 2026 年 1 月的实验：「false path is 98% cache miss, costs ∼ 0.76% of fleet cache_creation」）。压缩之后，附件构建器会从实时应用状态中重新宣告运行时状态（计划、skills 与异步 agents），因为压缩丢弃的是先前的附件消息，而不是底层状态。

当系统把工作委派给各自运行在独立有界上下文窗口中的子智能体时，上下文隔离变得更加关键。

### 8 子智能体委派与编排

多智能体编排是编程智能体的一项关键设计维度，其可选形态横跨父子层级、基于对话的框架（Wu et al., 2024），以及图结构的工作流引擎（LangChain, Inc., 2024）。Claude Code 的委派架构实现了表 1 中「隔离的子智能体边界」原则，同时兼有「先拒绝并升级至人工」（权限覆盖）与「以可逆性加权的风险评估」（子智能体工具限制）的若干方面。

当 Claude 判断修复 auth 测试需要先探索认证模块的结构时，它可以把这项探索委派给一个子智能体。委派机制是 Agent 工具（`AgentTool.tsx`），其中 `Task` 保留为旧别名。模型以结构化输入调用 Agent，其中包括委派提示词、可选的子智能体类型，以及隔离模式、权限覆盖与工作目录的配置。

#### 8.1 Agent 工具与委派判据

> 图 7：子智能体隔离与委派架构。Agent 工具分派到内置子智能体（Explore、Plan、general-purpose）或自定义子智能体，它们各自在隔离上下文中运行，拥有重建的权限上下文与独立的工具集。Agent 工具沿三个轴分派：路由（teammate）、隔离（remote、worktree）与生命周期（async、sync）。

Agent 工具的输入 schema（图 7）使用受功能开关控制的字段：当相应的后端功能被禁用时，省略可选参数。`isolation` 字段对内部用户提供 `['worktree', 'remote']`，对外部用户提供 `['worktree']`，在构建期确定。`cwd` 字段由功能开关控制。当后台任务被禁用或启用 fork 子智能体模式时，`run_in_background` 字段会被省略。

Claude Code 依功能开关与入口提供最多六种内置子智能体类型：

- **Explore**：以只读／检索为主的调查，其拒绝列表中包含写入与编辑工具。
- **Plan**：生成结构化计划；执行仍走标准权限模型。
- **General-purpose**：能力面较广，在被显式请求时使用（注意：省略类型会改为走 fork 子智能体路径，该路径复用父级对话上下文而非隔离它）。
- **Claude Code Guide**：新手引导与文档协助，拥有自己的 `permissionMode` 覆盖。
- **Verification**：执行校验检查（测试套件、lint）。
- **Statusline-setup**：专用于终端状态栏配置。

除内置之外，用户可通过 `.claude/agents/*.md` 文件定义自定义子智能体，plugins 则经 `loadPluginAgents.ts` 贡献 agent 定义。每个文件的 Markdown 正文充当该 agent 的系统提示词，YAML frontmatter 指定配置字段，包括 `description`、`tools`（允许列表）、`disallowedTools`、`model`、`effort`、`permissionMode`、`mcpServers`、`hooks`、`maxTurns`、`skills`、记忆作用域、后台标志与隔离模式。JSON 格式的 agent 定义支持相同字段，并额外把 `prompt` 作为显式字段（`loadAgentsDir.ts`）。这意味着一个自定义 agent 可以是一个配置完备、彼此隔离的子系统，拥有自己的工具、模型、权限、hooks、记忆作用域与隔离模式。`AgentTool` 与 `SkillTool` 并列位于基础工具池中，都是分派到这些定义的元工具，但两者有根本区别：`SkillTool` 通常把指令注入当前上下文窗口（另有一个可选的 `context: fork` 模式，会经同一套 `runAgent()` 机制派生出一个隔离的子智能体），而 `AgentTool` 总是派生出一个新的、隔离的智能体。代价在于，大多数子智能体调用都需要一个自包含的提示词，因为默认路径不继承父级的对话历史（fork 子智能体路径是例外）。共享完整对话历史的对话式框架免去了这一代价，但随着智能体数量增长，面临上下文爆炸的风险。

#### 8.2 隔离架构

子智能体隔离支持多种模式（`AgentTool.tsx`）：

- **Worktree**：创建一个临时 git worktree，让子智能体拥有自己的仓库副本可供修改，而不影响父级的工作树。
- **Remote**（仅内部）：在远程的 Claude Code Remote 环境中启动，始终在后台运行。
- **进程内（默认）**：与父级共享文件系统，但在隔离的对话上下文中运作。

子智能体的权限覆盖逻辑（`runAgent.ts`）涉及若干具体规则。当子智能体定义了 `permissionMode` 时，除非父级已处于 `bypassPermissions`、`acceptEdits` 或 `auto` 模式，否则该覆盖会被应用——因为这些模式总是优先，它们代表着用户就安全／自主性权衡做出的明确决定。对于异步智能体，系统通过一条级联判断是否避免提示：先看显式的 `canShowPermissionPrompts`，再看 bubble 模式（总是显示，因为它会升级到父级终端），最后是默认值（同步智能体显示提示，异步智能体不显示）。能够显示提示的后台智能体会设置 `awaitAutomatedChecksBeforeDialog: true`，确保分类器与 hooks 先完成解析再打断用户。

这些隔离模式位于设计空间中的不同位置。基于容器的隔离（SWE-Agent 与 OpenHands 采用，Yang et al., 2024；Wang et al., 2024b）提供了更强的资源边界，但需要容器基础设施。仅上下文隔离（AutoGen 这类对话式框架采用，Wu et al., 2024）共享文件系统但分离对话历史。Claude Code 基于 worktree 的隔离提供了工作区级的文件系统分离，而无需引入容器编排，借用了 Git 内建的机制。

当显式向 `runAgent()` 提供 `allowedTools` 时（`runAgent.ts`），会启用两层权限作用域模型。来自 `--allowedTools` 的 SDK 级权限会被保留：「来自 SDK 使用方、应当适用于所有智能体的显式权限。」但会话级规则会被子智能体声明的 `allowedTools` 替换。当未提供 `allowedTools` 时（`AgentTool` 的常见路径），父级的会话级规则会被继承而不被替换。

#### 8.3 Sidechain 记录

每个子智能体把自己的记录写成独立的 `.jsonl` 文件，并配一个 `.meta.json` 元数据文件（`sessionStorage.ts`、`runAgent.ts`）。这种 sidechain 设计意味着子智能体历史会被保留下来供调试与审计，却不会撑大父级的会话文件。只有子智能体最终的响应文本与元数据会回到父级的对话上下文；完整的子智能体历史从不进入父级的上下文窗口，这符合「上下文即瓶颈」原则。

只返回摘要这一模型是一项有意为之的上下文节省选择：共享完整对话历史的对话式框架，随着智能体数量增长会面临上下文爆炸的风险。即便是隔离上下文的并行也代价不菲。在计划模式下，Claude Code 的智能体团队消耗的 token 约为标准会话的 7 倍（Anthropic, 2025a），这使得当子智能体也处于隔离上下文中时，只返回摘要变得更加关键。

在智能体团队中做多实例协调时，外壳使用文件锁而非消息代理或分布式协调服务（Anthropic, 2025a）。每个队友都有自己的收件箱 JSON 文件（`utils/teammateMailbox.ts`）；任务分派与其他智能体间消息在每个收件箱独立的锁文件（`utils/lockfile.ts`）保护下被推入收件箱，文件存放在可预测的文件系统路径上。这一取舍用吞吐量换来了两项性质：零依赖部署（不需要外部基础设施）与完全可调试性（任何智能体的状态都可以通过读取纯文本 JSON 文件来检查）。

### 9 会话持久化与恢复

编程智能体中的会话持久化，涉及在仅追加日志、结构化数据库、基于检查点的快照，以及无状态架构之间的设计选择，每种选择，在可审计性、查询能力与部署复杂度上都有不同的权衡。Claude Code 的持久化设计实现了表 1 中「仅追加的持久状态」原则。会话作用域的权限只存在于内存中，不会被序列化进对话记录，因此用 `--resume` 启动的新进程会从命令行参数与磁盘设置重建权限上下文；重建后的上下文无法识别的任何请求，都会回退到先拒绝式的提示。

当 auth 测试任务推进到本节时，会话中已经包含最初的提示词、工具调用与结果、压缩边界，以及探索认证模块所得的子智能体摘要（第 8 节）。本节要问的是：这些产物中哪些被持久记录下来？哪些之后可以恢复，而不必把会话的旧授权一并带过来？

Claude Code 的持久化机制会在事件发生时把对话（消息、工具结果与压缩边界）写到磁盘。

#### 9.1 记录模型

> 图 8：会话持久化与上下文压缩。该图把实时会话状态（上下文窗口、压缩）与持久存储（会话记录、`history.jsonl`、子智能体 sidechain、检查点）区分开来。对话记录能恢复消息，但不恢复会话作用域的权限。

| 原则 | 说明 |
| --- | --- |
| 对话比上下文活得更久 | 一个会话的有用寿命不应被模型的上下文窗口封顶。磁盘上的对话记录保存持久的会话事件，因此压缩可以回收实时视图而不终结对话。 |
| 对话会长成不止一条路径 | 一个会话不应被困在单一线性轨迹上。仅追加的对话记录让用户可以回退、恢复或分叉出新分支，而不丢失先前的工作。 |

会话记录以基本仅追加的 JSONL 文件形式存放在按项目区分的路径下（显式的清理重写是例外）（图 8）。`getTranscriptPath()` 函数（`sessionStorage.ts`）将其计算为 `join(projectDir, ${getSessionId()}.jsonl)`，其中 `projectDir` 先由 `getSessionProjectDir()` 决定（恢复／分支时由 `switchSession()` 设置），否则回退到 `getProjectDir(getOriginalCwd())()`。

三条持久化通道各自独立运作：

1. **会话记录**：包含 user、assistant、attachment 与 system 消息的对话记录，外加压缩与其他元数据事件。按项目划分，每个会话一个文件。
2. **全局提示词历史**：只存用户提示词，存放在 Claude 配置主目录下的 `history.jsonl`（`history.ts`）。`makeHistoryReader()` 生成器经由 `readLinesReverse()` 以逆序产出条目，支持上方向键与 `ctrl+r` 导航。
3. **子智能体 sidechain**：每个子智能体独立的 `.jsonl` + `.meta.json` 文件（第 8.3 节）。

会话记录除简单消息外还存储若干类事件，包括压缩标记、文件历史快照、归因快照与内容替换记录。仅追加的 JSONL 格式是一项有意的选择，它以查询能力为代价，换取可审计性与简单性。每一条被记录的事件都人类可读、可纳入版本控制、无需专用工具即可检查。数据库支撑的替代方案可以对会话历史做更丰富的查询，但会引入部署依赖并降低透明度。

会话身份系统把 `sessionId` 与 `sessionProjectDir` 配对，二者在恢复或分支时一并设置。记录路径必须使用写入消息时那个生效的项目目录，以避免 hooks 在错误的目录里查找。

#### 9.2 恢复、分叉，以及「不还原权限」

`--resume` 标志通过重放对话记录来重建对话（`conversationRecovery.ts`）。分叉则从既有会话创建一个新会话（`commands/branch/branch.ts`）。然而，对话记录并不记录会话作用域的权限。用 `--resume` 恢复会启动一个不带这些权限的新进程，因此用户必须重新授予；而在正在运行的会话内部恢复或分叉，则会保留已经给出的授权。这是一项有意为之、偏保守的安全设计选择：信任决策不被带进对话记录。从对话记录中还原此前授予的权限固然能带来便利，却有把过期的信任决策带进已改变情境的风险。该架构宁可选择在新进程中重新授予，也不做隐式持久化，并接受由此带来的用户摩擦。

`compact_boundary` 标记经过精心设计，以配合持久化工作。`annotateBoundaryWithPreservedSegment()` 函数（`compact.ts`）在边界事件中记录 `headUuid`、`anchorUuid` 与 `tailUuid`。这些 UUID 让会话加载器能在读取时对消息链做修补：被保留的消息在磁盘上仍持有其原始 `parentUuid`，加载器借助边界元数据把它们正确地链接起来。这种以追加为主的设计意味着压缩不会修改或删除已写入的记录行。

Claude Code 中的「检查点」是用于 `--rewind-files` 的文件历史检查点，存放在 `~/.claude/file-history/<sessionId>/`。它们是用于回退文件系统改动的文件级快照，而不是一个通用的检查点存储。

前面各节已经记录了 Claude Code 对一系列反复出现的设计问题的答案。下一节将把这些设计选择与两个架构上相互独立的 AI 智能体系统作对照。

### 10 对比分析：Claude Code、OpenClaw 与 Hermes Agent

前面各节记录了 Claude Code 对循环架构、安全姿态、可扩展性、上下文管理、委派与持久化等反复出现设计问题的答案。为了把这些发现放到更广的智能体设计空间中定位，本节把 Claude Code 与两个独立的开源 AI 智能体系统作比较——它们从根本不同的出发点回答了许多相同的设计问题。OpenClaw 是一个本地优先的 WebSocket 网关，把消息界面（WhatsApp、Telegram、Slack、Discord、Signal 等）连接到内嵌的智能体运行时，并在 macOS、iOS 与 Android 上提供配套应用（Steinberger and OpenClaw Contributors, 2026）。Hermes Agent 是单个 Python 进程，其角色由启动它的入口点决定，只有一层持久化，却有许多界面承载同一个运行时（Nous Research, 2026）。Hermes 的发行版暴露三个 console 脚本：`hermes` 用于 CLI 与网关控制器，`hermes-agent` 用于批处理运行，`hermes-acp` 用于 Agent Client Protocol 适配器，使外部 IDE 能像 Hermes 自家网关承载其他智能体那样承载 Hermes。Claude Code 是一个绑定到单个仓库会话的 CLI 编程外壳；OpenClaw 是面向多渠道个人助理的持久控制平面；Hermes 则是单个进程，其角色与界面集合由启动它的入口点决定。三者处在智能体设计空间的不同区域。这一比较的价值，在于展示当部署形态改变时，同样的反复性问题会如何产生不同的架构答案。

> 注释 4：基于源码阅读 Hermes，发现项目自身文档有两处已经与实现脱节：`SECURITY.md` 记录的审批模式分类法是 on / auto / off，而 `tools/approval.py:721-750` 返回的是 manual / smart / off；`SECURITY.md` 与 `AGENTS.md` 都描述委派深度默认值为 2，而 `tools/delegate_tool.py:128` 设置的是 `MAX_DEPTH = 1`。本文以源码而非文档为准。

#### 10.1 六个比较维度

表 3 按六个维度总结了比较。每个维度都对应一个三套系统都必须回答的设计问题。落在这六个维度之外的 Hermes 能力，在第 10.2 节单独讨论。

| 维度 | Claude Code | OpenClaw | Hermes Agent |
| --- | --- | --- | --- |
| 系统范围 | CLI/IDE 编程外壳，按会话临时启动的进程 | 持久运行的 WS 网关守护进程，多渠道控制平面 | 单个 Python 进程，角色由入口点决定（`hermes` / `hermes-agent` / `hermes-acp`）；内置加 plugin 层级的消息界面；两个 SQLite 文件（`state.db`、`kanban.db`）用于持久化 |
| 信任模型 | 逐动作的先拒绝式规则评估，配合 hooks 与可选的机器学习分类器；7 种权限模式；分级的信任光谱 | 每个网关一个可信操作者；入站渠道使用 DM 配对与允许名单；可选沙箱，作用域可配置（按智能体、按会话或共享），支持多种后端 | 逐动作审批集中在一个文件（`tools/approval.py`）；3 种模式（`manual`、`smart`、`off`）外加无条件的 `HARDLINE_PATTERNS` 底线；同一套审批在 CLI、Telegram/Discord/QQBot 的网关键盘、ACP `request_permission` 与仅限 cron 的无人值守模式下渲染 |
| 智能体运行时 | 迭代式异步生成器（`queryLoop()`）作为系统中心 | 网关 RPC 分派内嵌 pi-coding-agent SDK 运行器；按会话队列串行化（可选全局通道） | `AIAgent.run_conversation`（`run_agent.py`）内的同步 while 循环；迭代次数默认 90，另有独立迭代预算，耗尽时做一次剥离工具的总结调用；工具文件经 `registry.register()` 自注册；并行工具调用并带回退的串行执行 |
| 扩展架构 | 4 种机制，分级上下文成本：MCP、plugins、skills、hooks | 清单优先的 plugin 系统，含 12 种能力类型与中央注册表；独立的 skills 层；经 `openclaw mcp` 内置的 MCP（服务器与出站客户端注册表） | 5 个扩展面：3 个与 Claude Code 同级（`plugins/<name>/` 带生命周期 hooks、内置 `skills/`、`config.yaml` 中配置的 MCP 服务器），另加 2 个可替换后端的扩展面（`plugins/memory/<name>/`、`plugins/model-providers/<name>/`）；hooks 为 Python 回调或外部 shell 命令 |
| 记忆与上下文 | `CLAUDE.md` 四级层级；五层压缩流水线；基于 LLM 的记忆扫描 | 工作区引导文件（`AGENTS.md`、`SOUL.md`、`TOOLS.md`、`IDENTITY.md`、`USER.md`，外加条件性的 `BOOTSTRAP.md`、`HEARTBEAT.md`、`MEMORY.md`）；独立的记忆系统（`MEMORY.md`、每日笔记、可选的 `DREAMS.md`）；带可插拔提供方的自动压缩；可选的混合检索（向量 + 关键词，取决于嵌入提供方）；用于长期晋升的实验性「做梦」 | 一个带 token 预算尾部保护的辅助 LLM 总结器，外加一次工具输出裁剪；摘要前置一段「仅供参考」的前言；注入前对上下文文件（`AGENTS.md`、`.cursorrules`、`SOUL.md`）扫描注入模式与不可见 Unicode；持久化的 `MEMORY.md`、`USER.md` 在压缩后仍是权威 |
| 多智能体与路由 | 任务委派型子智能体（如 Explore、Plan、general-purpose）；worktree 隔离；最终响应文本返回父级 | 分开两个关注点：(a) 多智能体路由——隔离的智能体、独立工作区、基于绑定的渠道分派；(b) 子智能体委派——可配置嵌套深度（最大 5，默认 1，建议 2）与线程绑定会话 | `delegate_task` 在线程池中派生子 `AIAgent`；默认并发上限 3 个子级，深度上限 1（钳制在 [1,3]）；叶子子级默认不能再委派；子级运行时禁用持久记忆；Kanban 子系统（SQLite 支撑的工作队列）带陈旧认领回收，用于多进程工作者协调 |

##### 系统范围与部署模型

Claude Code 以来自捆绑单个仓库的临时 CLI 进程运行。每个会话随终端的启动与结束而开始与终止。OpenClaw 作为一个持久守护进程运行（默认端口 18789，仅监听回环），它拥有全部消息界面连接，并通过带类型的 WebSocket 协议协调客户端、工具与设备节点。Hermes Agent 作为一个长驻的 Python 进程运行，其角色由启动它的入口点固定；它的 gateway 子命令通过两层适配器体系驱动消息界面（`gateway/platforms/` 下的内置适配器，加上 `plugins/platforms/` 下针对 Google Chat、IRC 与 Teams 的 plugin 层），并把会话与多智能体看板状态持久化到两个磁盘上的 SQLite 文件（`state.db` 与 `kanban.db`），而不是通过带类型的 WebSocket 协议。这让 Hermes 在信任拓扑上更接近 OpenClaw，而在进程拓扑上更接近 Claude Code；至于「代理该放在哪里」这个设计问题，Hermes 的答案是：干脆不放代理。系统范围上的这些差异是本次比较中最根本的架构分歧：它们决定了其他每一个设计问题被如何框定。三者之间还存在一种可组合关系：OpenClaw 可以通过其 ACP（Agent Client Protocol）集成，把 Claude Code、OpenAI Codex 与 Gemini CLI 作为外部编程外壳承载起来；而 Hermes Agent 处在 ACP 宿主／客人的分界两侧——它的网关承载平台适配器与工具服务器，它的 `hermes-acp` 适配器又让外部 IDE 承载 Hermes。这使得这些系统是可叠加的，而不只是互斥的替代选项。

##### 信任模型与安全架构

三套系统面对的是不同的威胁模型。Claude Code 假定模型不可信、而开发者机器可信：先拒绝式权限系统（第 5 节）评估每一次工具调用，机器学习分类器提供自动化安全评估，七种权限模式构成一条分级的自主性光谱。OpenClaw 假定每个网关实例只有一个可信操作者。它的安全架构从身份与访问控制（DM 配对码、发送方允许名单、网关认证）出发，而不是逐动作的安全分类。工具策略使用按智能体配置的允许／拒绝列表，而非集中式分类器。沙箱作为可选功能提供，支持多种后端（Docker、SSH 或 OpenShell）与可配置作用域（按智能体、按会话或共享）；非 main 模式在启用时可对所有非 main 会话做沙箱处理，不过沙箱默认并不启用。OpenClaw 的安全文档明确声明：在共享网关上针对敌对多租户的隔离并不属于受支持的安全边界。Hermes Agent 采取第三种立场。工具授权集中在单一文件（`tools/approval.py`），暴露三种模式（`manual`、`smart`、`off`）与一条无条件的 `HARDLINE_PATTERNS` 底线，无论处于何种模式，都会拦截 `rm -rf /`、`mkfs`、对块设备的裸 `dd`、fork 炸弹与关机命令。`smart` 模式会运行一次辅助 LLM 风险评估；源码中的一条注释点名 OpenAI Codex 的 smart approvals 是其设计灵感来源。由于 Hermes 运行在众多界面上，同一套审批流程被渲染了四次：CLI 提示、Telegram／Discord／QQBot 上的网关审批键盘、面向 IDE 客户端的 ACP `request_permission` 往返，以及仅限 cron 的无人值守模式。与 Claude Code 的七模式分类法及机器学习分类器驱动的 auto 模式相比，Hermes 的模式分类法更小，但具备同样的多层结构：无条件安全底线、默认的交互式提示，以及可选的辅助 LLM「智能」路径。架构层面的答案是相同的；区别在于界面的数量。三者在信任边界位置上的差异反映了这一点：Claude Code 把它放在模型与执行环境之间，OpenClaw 把它放在网关边界上，而 Hermes 居于两者之间——像 Claude Code 那样逐动作审批，却像 OpenClaw 那样通过众多界面呈现。

##### 智能体运行时与工具编排

三套系统都实现了智能体循环，但循环在各自架构中所处的位置不同。在 Claude Code 中，`queryLoop()` 异步生成器（第 4 节）是系统中心：所有界面都汇入其中，它直接管理上下文组装、模型调用、工具分派与恢复。在 OpenClaw 中，智能体运行时是内嵌的 pi-coding-agent 核心（来自 pi-mono 项目的外部 SDK，OpenClaw 将其集成进来），位于更大的网关分派层之内。网关的 agent RPC 校验参数、解析会话并立即返回；内嵌的运行器随后执行智能体循环，同时通过网关协议回传生命周期与流式事件。运行按会话队列与可选的全局通道串行化，防止多渠道界面上出现工具与会话竞争。在 Hermes Agent 中，循环是 `AIAgent.run_conversation`（`run_agent.py`）内的同步 while 循环，受迭代次数（默认 90）与独立迭代预算共同约束；当预算耗尽时，一次剥离工具的总结调用让智能体给出收尾消息，而不是在思考中途终止；每次迭代发送由 `model_tools.get_tool_definitions()` 收集的工具 schema，并把任何工具调用路由到 `model_tools.handle_function_call`，`tools/*.py` 中的工具文件在导入时自注册，因此新增一个工具只需一次 `registry.register()` 调用；一条 assistant 消息返回多个工具调用时会并行执行，并带回退的串行执行。三套系统都遵循 ReAct 模式（Yao et al., 2022）：OpenClaw 的循环是控制平面中的一个组件而非控制平面本身；Hermes 的循环在运行时层面与 Claude Code 处于对等地位，但在实现形态上不同——它是一个带线程管理并发的同步 Python 循环，而非一个会 yield 的异步生成器。

##### 扩展架构

Claude Code 的四种扩展机制（MCP、plugins、skills、hooks）按上下文成本组织（第 6 节）：hooks 占用零上下文，skills 占用低上下文，MCP 服务器在工具 schema 加载后占用高上下文。四者都扩展同一个智能体的上下文窗口与工具面。OpenClaw 使用清单优先的 plugin 系统，包含四个架构层（发现、启用、运行时加载、界面消费）与十二种能力类型，包括文本推理、语音、媒体理解、图像／音乐／视频生成、网页搜索与消息渠道。Plugins 把能力注册进中央注册表；网关读取该注册表以暴露工具、渠道、提供方配置、hooks、HTTP 路由、CLI 命令与服务。OpenClaw 还有一个独立的 skills 层，包含多个来源（工作区、项目级、个人、托管、内置与额外目录，其中工作区 skills 优先级最高），外加一个公共注册表（ClawHub），并通过内置的 `openclaw mcp` 命令支持 MCP（服务器与出站客户端注册表）。Hermes Agent 相对 Claude Code 的四种机制暴露出五个扩展面：三个与 Claude Code 同级（`plugins/<name>/` 下带生命周期 hooks 的一般 plugin、内置的 `skills/`、以及 `config.yaml` 中配置的 MCP 服务器），另两个扩展面则沿着不同的轴展开（`plugins/memory/<name>/` 下的可插拔记忆提供方与 `plugins/model-providers/<name>/` 下的可插拔模型提供方），它们让 Hermes 能够替换后端，而不是拦截事件。Hermes 中的 hooks 可以是进程内 Python 回调，也可以是由配置驱动的外部 shell 命令，两者都通过同一个 hook 管理器分派。当 Hermes 派生一个 stdio MCP 服务器时，子进程的环境会在启动前被限制为一小批允许的系统变量，`npx`／`uvx` 包名还会对照 OSV 恶意软件数据库进行筛查。三者在架构上的差异在于扩展作用的位置：Claude Code 的扩展修改的是单个智能体的动作面，OpenClaw 的 plugins 扩展的是网关在所有智能体上的能力面，Hermes 的扩展则是在 Claude Code 式「按智能体」的界面之上增加第二个轴，原地替换整个记忆与模型提供方后端，而不是围绕事件做拦截。

##### 记忆、上下文与知识管理

三套系统都使用透明的、基于文件的记忆，而不是不透明的数据库。Claude Code 加载四级 `CLAUDE.md` 层级，并通过五层压缩流水线管理上下文压力（第 7 节）。记忆检索采用对文件头部的基于 LLM 的扫描。OpenClaw 在会话启动时把工作区引导文件注入系统提示词：五个核心文件（`AGENTS.md`、`SOUL.md`、`TOOLS.md`、`IDENTITY.md`、`USER.md`），外加条件性的 `BOOTSTRAP.md`、`HEARTBEAT.md` 与 `MEMORY.md`，大文件会被截断。另外，记忆系统管理三类文件：`MEMORY.md` 保存长期持久事实、带日期的每日笔记（`memory/YYYY-MM-DD.md`），以及可选的 `DREAMS.md` 用于「做梦」扫描摘要。当配置了嵌入提供方时，记忆搜索使用把向量相似度与关键词匹配结合起来的混合检索。一套实验性的「做梦」系统执行后台整合，对候选条目评分，只把合格项从短期回忆晋升到长期记忆。压缩之前，OpenClaw 会自动提醒智能体把重要笔记保存到记忆文件，以避免上下文丢失。Hermes 的压缩由一个带 token 预算尾部保护的辅助 LLM 总结器完成，前面还有一次工具输出裁剪；摘要前置一段很长的「仅供参考」前言，告诉智能体这次压缩是背景上下文而非新指令，并且持久的记忆（`MEMORY.md`、`USER.md`）仍然权威。Claude Code 的 `CLAUDE.md` 层级是固定的，其压缩有五层；而 Hermes 的压缩层数更少，但增加了上下文文件的注入前扫描：`AGENTS.md`、`.cursorrules`、`SOUL.md` 等文件会针对一份注入模式清单与不可见 Unicode 字符进行检查，任何命中都会把文件内容替换为 `[BLOCKED: ...]` 标记。三者都认同「记忆对用户可见、可编辑」这一设计承诺，但对同一个上下文管理问题给出了不同答案：Claude Code 投入在分级的上下文压缩上（五层且具备缓存感知）；OpenClaw 投入在结构化的长期记忆晋升上（做梦、每日笔记、记忆搜索），外加可插拔的压缩提供方与会话裁剪，尽管它的压缩流水线不如 Claude Code 的五层系统那样分级；Hermes 投入在注入前的内容扫描，以及把持久记忆与被压缩历史在提示词层面隔离开来，而不是更深的压缩栈。

##### 多智能体架构与路由

这个维度揭示出最鲜明的架构差异。Claude Code 的多智能体模型是任务委派：父级派生子智能体（Explore、Plan、general-purpose 及自定义类型），它们在隔离的上下文窗口中运行，拥有受限的工具集，并只返回摘要（第 8 节）。Worktree 隔离提供文件系统级的分离。OpenClaw 把两个不同的关注点分开。第一，多智能体路由：单个网关可以承载多个完全隔离的智能体，每个都有自己的工作区、认证配置、会话存储与模型配置，并通过确定性的绑定规则路由到特定渠道或发送者。第二，子智能体委派：在单个智能体内部，可以派生后台运行，嵌套深度可配置（最大 5，默认 1，建议 2），在受支持的渠道上使用线程绑定会话，并可按深度配置工具策略。OpenClaw 的项目愿景明确拒绝把智能体层级框架作为默认架构。Hermes Agent 沿又一条不同的接缝来切分这个问题。每轮委派经由 `delegate_task` 工具，在线程池中派生子 `AIAgent` 实例；父级阻塞直到子级返回摘要；并发默认上限为三个子级，深度上限为 1（钳制在 [1, 3] 区间）；叶子子级默认不能再委派（嵌套委派需通过 orchestrator 子级与更高的派生深度设置显式开启）；子级始终在禁用持久记忆的情况下运行，因而无法读写父级的笔记。在每轮委派之外，v0.13 的 Kanban 子系统是一个 SQLite 支撑的工作队列，多个 Hermes 工作者配置档在其中认领、发送心跳并完成任务，带陈旧认领回收，并在连续两次失败尝试后自动阻塞。三者的这一区别之所以重要，是因为 Claude Code 的子智能体是一个用户编程会话中的下级工作者，OpenClaw 的多智能体路由创造出真正独立的智能体实例，通过不同渠道服务不同用户或不同目的，而 Hermes 把严格的逐轮委派默认值与一个独立的 Kanban 层结合起来，让多个智能体进程能在一块持久的共享看板上协同——这是 Claude Code 与 OpenClaw 都不会以同样形式提出的问题。

#### 10.2 Hermes Agent：比较表之外的能力

Hermes 中的会话持久化使用一个 WAL 模式的 SQLite 数据库，支持对所有会话消息做全文检索，并维护一条记录压缩触发切分的父会话链。相比 Claude Code 按项目把会话持久化为 JSONL 文件（第 9 节），Hermes 的选择开箱即用地提供了跨会话检索与并发读取支持。当网关在对话中途重启时，会话会在下一条消息到达时自动恢复，其驱动机制是基于对话记录时间戳新鲜度的逻辑，默认窗口为一小时。内置的 cron 调度器与 webhook 订阅系统让智能体可以按计划表达式或外部 HTTP 事件无人值守地运行；cron 会话在禁用持久记忆的情况下运行，并有一个可配置的非活跃超时，默认 600 秒。发行版中还包括一个后台「策展人」循环，用于审查智能体创建的 skills、归档陈旧的 skills，但从不删除；该循环被限制只作用于具备智能体来源的 skills，因此内置与从 hub 安装的 skills 不在其作用域内。这些能力无法干净地映射到主表所用的六个比较维度，这正是它们在此作为 Hermes 专属补充出现、而不是作为表 3 中的单元格的原因。OpenClaw 的特色能力（扩展架构下的 ClawHub plugin 注册表，以及记忆与上下文下的「做梦」记忆子系统）已经占据了这些维度中的单元格，因此不需要另设平行补充。本小节中的 Hermes 增量，都源于它的持久进程这一范围特性——这是 Hermes 与 OpenClaw 共有、而 Claude Code 的按会话 CLI 模型所不具备的部署形态属性。

#### 10.3 对照揭示了什么

这次比较浮现出关于 AI 智能体系统设计空间的三点观察。

第一，第 3.1 节识别出的反复出现的设计问题（推理放在哪里、采取何种安全姿态、如何管理上下文、如何组织可扩展性）并不限于编程智能体。OpenClaw 从「多渠道个人助理」而非「绑定仓库的编程工具」这一出发点回答了其中每一个问题；Hermes Agent 则从「单进程、多界面」的部署形态而非 CLI 外壳或多渠道网关出发作答。问题是稳定的；答案随部署形态而变。

第二，三套系统在若干维度上押注不同。Claude Code 投入在分级的逐动作安全评估上；OpenClaw 投入在边界层面的身份与访问控制上；Hermes 居于两者之间——像 Claude Code 那样逐动作审批，又像 OpenClaw 那样在众多界面上呈现。Claude Code 把智能体循环当作架构中心；OpenClaw 把网关控制平面当作中心，并把智能体循环内嵌为一个组件；Hermes 的循环在运行时层面与 Claude Code 对等，占据相同的架构位置，而不是坐在某个网关分派层之内。Claude Code 的扩展修改的是单个上下文窗口；OpenClaw 的 plugins 扩展的是共享的网关界面；Hermes 则在 Claude Code 式「按智能体」的界面之上增加了第二个轴，原地替换记忆与模型后端而非拦截事件。这些差异并非随意：它们源自三套系统不同的信任模型与部署拓扑。

第三，三者之间的可组合关系在架构上意义重大。OpenClaw 可以通过 ACP 把 Claude Code 作为外部外壳承载起来，而 Hermes Agent 处在宿主／客人的分界两侧：它的网关承载平台适配器与工具服务器，它的 `hermes-acp` 适配器让外部 IDE 承载 Hermes。这些系统是可组合的，而不是互斥的替代选项——这表明 AI 智能体的设计空间不是一个扁平的分类法，而是一个分层的空间：网关级系统与任务级外壳可以在多个位置上相互组合。

### 11 相关工作

#### 11.1 编程智能体分类

AI 编程工具可以按其支持的自主行动程度来组织（表 4）。GitHub Copilot（Chen et al., 2021）这类内联补全工具在编辑器内建议代码片段，不含自主行动。Cursor 与 Windsurf 等聊天集成产品增加了对话交互与多文件编辑，但仍与 IDE 环境耦合。包括 Claude Code、OpenAI 的 Codex CLI 与 Aider（Gauthier, 2024）在内的智能体式 CLI 工具从命令行运行，能在单个请求内自主执行 shell 命令、读写文件并对产出迭代。Devin、SWE-Agent（Yang et al., 2024）与 OpenHands（Wang et al., 2024b）等完全自主的系统则以最少的人工监督为目标，通常运行在沙箱化的云环境中。

| 类别 | 示例 | 形态 |
| --- | --- | --- |
| 内联补全 | Copilot、Tabnine | 编辑器插件 |
| 聊天集成 | Cursor、Windsurf、Cody | 与 IDE 耦合的产品 |
| 智能体式 CLI | Claude Code、Codex CLI、Aider | 工具调用循环 |
| 完全自主 | Devin、SWE-Agent、OpenHands | 沙箱 + 规划 |

Claude Code 与更高自主性的智能体共享一些特性（auto 模式分类器、后台智能体执行、远程环境），但默认仍保留交互式审批。SWE-Bench（Jimenez et al., 2023）与 HumanEval（Chen et al., 2021）等评测基准推动了学界对编程智能体的大量关注。本文则从源码出发考察 Claude Code 的内部架构。

#### 11.2 智能体架构模式

Claude Code 的核心循环遵循 ReAct 模式（Yao et al., 2022）：模型生成推理与工具调用，外壳执行动作，结果反馈给下一次迭代。Toolformer（Schick et al., 2023）证明了语言模型可以学会使用工具。Claude Code 最多使用 54 个内置工具与一套分层权限系统。更广的设计空间已被若干综述梳理。Weng（2023）给出了如今已成标准的「规划、记忆、工具使用」三分法，Wang et al.（2024a）编目了早期的自主智能体工作。Xu（2026）把该领域框定为围绕三个反复出现的权衡（自主性对可控性、延迟对准确性、能力对可靠性），这些权衡在我们全文的分析中反复出现；Hu et al.（2024）则把智能体设计本身视为在组件、算法与评估函数上的搜索问题。本文刻画的是这一空间中的某一个具体点。

近期一篇关于「代码即智能体外壳」的综述把代码不仅视为模型输出，还视为推理、行动、环境建模与基于执行的验证的基质（Ning et al., 2026）。这一框架与本文聚焦于「模型周围的外壳」而非仅仅聚焦于基准分数的取向一致。

##### 近期运行时机制

近期的综述与系统把若干外壳选择摆到了明面上。图工程（Graph Engineering）把任务依赖、智能体通信与执行状态分离（Feng et al., 2026），自进化编程智能体综述则按目标、时机与反馈来源组织持久化改动（Zhou et al., 2026）。LoopsBench 与 LoopArena 评估前置条件、保留的回归检查以及控制器「检查或停止」的决策如何塑造一个编程循环（Li et al., 2026；Wang et al., 2026a），Symphony 则把问题调度与编程智能体自身的循环分离开来（OpenAI, 2026c）。在恢复方面，Resume Means Resume 依据工作流框架自述的语义，检验其检查点与恢复行为（Khan, 2026）；Temporal 的 Deep Agents 集成把每次模型调用与每次 I/O 工具调用都作为 Temporal activity 运行，而控制循环在工作流内部重放（Temporal Technologies, 2026）。Living-Harness 在情节之间更新情节记忆与状态图，而模型与工具保持固定（Du et al., 2026）。Graphiti 与 Cognee 把实体关系存入知识图谱（Zep, 2026；Cognee, 2026）。APPA 在把工具结果纳入智能体上下文之前先检查它，把「调用某个工具的许可」与「接纳它返回的数据」分离开来（Kravchenko et al., 2026）。在协议层面，2026-07-28 的 MCP 修订版移除了协议级会话，并允许一次工具操作跨越多个请求（Model Context Protocol, 2026a；Model Context Protocol, 2026b）；Agent Host Protocol 让多个客户端共享宿主拥有的会话（Lourens et al., 2026）；A2A 则连接彼此独立的智能体系统（A2A Project, 2026）。Cursor 报告了通过共享设计文档来协调智能体集群的做法（Lin, 2026）。

AutoGen（Wu et al., 2024）、LangChain（LangChain, 2026b）与 CrewAI（CrewAI, 2026）等多智能体编排框架提供基于对话的智能体协调。Claude Code 的子智能体委派（第 8 节）包含权限覆盖优先级、两层权限作用域，以及每个子智能体独立的记录文件。LATS（Zhou et al., 2023）在树搜索框架中统一了推理、行动与规划。Claude Code 的 plan 权限模式实现的是更简单的「先规划后执行」路径。

从业者的 writings 已经收敛到若干反复出现的模式，而 Claude Code 的架构把它们实例化了。Anthropic 自己的《构建高效智能体》（Schluntz and Zhang, 2024）区分了智能体与工作流，并主张用简单可组合的模式而非重型框架。Martin（2026）综合了生产系统中观察到的七种模式，其中包括把文件系统与 shell 访问作为通用动作层交给智能体，以及按需发现动作而不是预先加载每个工具的 schema。Chase（2025）指出 Claude Code 的规划工具「基本上是个空操作」，其价值在于让智能体保持在轨道上，而不在于执行任何外部计算。Wang（2025）认为权威性是学术框架最常遗漏的要素，把信任称为生产级智能体设计中最被忽视的元素，而第 5 节的权限分析正试图弥合这一缺口。Huyen（2025）把复合误差的隐忧具体化：在每步准确率 95% 的情况下，一个 100 步的任务只有 0.6% 的概率成功，这促使我们追踪第 4 节与第 5 节中的逐步验证模式。OpenAI 在其关于外壳工程的自有论述中提出类似观点，把外壳本身的设计视为一项核心工程任务（OpenAI, 2026b）。近期还出现了一个称为「循环工程」的新概念：开发者不是每轮都去提示智能体，而是构建一个能发现工作、分派工作、检查结果并决定下一步的循环，它由本文记录的那些同样的原语（skills、MCP 服务器、子智能体等）搭成（Osmani, 2026）。它让单个开发者能自主指挥多得多的工作，并引起了包括 Claude Code 团队在内的关注；但减少人的逐轮参与，同时也使第 14 节将要回到的长期开发者能力隐忧更加突出。

##### 上下文管理

表 5 给出了上下文管理方法的设计空间分类。Claude Code 的五层压缩流水线在升级之前，先以不同粒度施加多种策略，并带有缓存感知的压缩与「读取时虚拟视图」语义。Zhang et al.（2025a）刻画了该设计所缓解的两种失效模式（摘要丢失领域细节，以及迭代式上下文重写造成的细节丢失），转而提出把上下文当作一份随时间积累策略的「演进中的作战手册」。Claude Code 的做法与这一框架一致，因为 `CLAUDE.md` 层级是累积结构化指令，而非反复对其做摘要。Hu et al.（2025）区分了上下文工程与智能体记忆：上下文工程处理临时性的组装，而记忆覆盖持久的事实性知识与经验痕迹。Claude Code 的架构以同样方式把两者分开：把压缩流水线与基于文件的记忆层级配对。

| 方法 | 机制 | 粒度 |
| --- | --- | --- |
| 简单截断 | 丢弃最旧的消息 | 粗 |
| 滑动窗口 | 固定大小的近期历史 | 中 |
| RAG | 检索相关片段 | 细 |
| 单一摘要 | 一次性压缩 | 粗 |
| 渐进式压缩 | 多层流水线 | 极细 |

##### 安全与权限

生产级编程智能体采用的安全架构沿三个轴变化：审批模型（逐动作提示、分类器中介的自动化，或无提示加事后审查）、隔离边界（操作系统级容器、文件系统沙箱、权限作用域工具池，或无隔离）、恢复机制（版本控制回滚、会话作用域权限重置，或基于检查点的回退）。SWE-Agent 与 OpenHands（Yang et al., 2024；Wang et al., 2024b）主要依赖 Docker 容器隔离，提供环境级沙箱，约束所有智能体动作。Codex CLI 支持沙箱模式与针对 shell 命令的审批策略。OpenCode 与 Cline 也提供工具审批控制（Anomaly, 2026；Cline, 2026）。Aider（Gauthier, 2024）把 Git 作为其主要安全机制，使所有改动都可以通过版本控制回退。Claude Code 把逐动作的先拒绝规则、用于自动批准的基于机器学习的分类器、可选的 shell 沙箱，以及「不还原会话作用域权限」结合起来，叠加多层机制而不是依赖单一隔离边界。

沙箱方面的报告让这一边界变得具体。E2B 与 OpenSandbox 通过 API 暴露隔离的执行环境（E2B, 2026；OpenSandbox, 2026）。OpenAI 关于 Windows 沙箱的讨论描述了把写访问限定在工作目录与配置的可写根目录之内，并对这些根目录内选定的只读路径设置显式拒绝规则（OpenAI, 2026a）。Cursor 的云端智能体报告补充了同一问题的云侧：网络策略、密钥脱敏与凭证管理都成为智能体环境的一部分（Ma, 2026）。这些细节说明安全边界是一条执行边界，而不仅仅是一个审批提示。

##### 协议与可扩展性

Claude Code 用作主要外部工具集成的 Model Context Protocol，已经成为事实标准，拥有可观的生态与相应的攻击面。Hou et al.（2025）编目了分散在 26 个主要目录中的数千个社区开发的 MCP 服务器，并把 MCP 特有的威胁整理为四类攻击者与十六种情形，包括工具投毒、rug pull 与跨服务器遮蔽。第 5 节分析的权限与拒绝规则机制，以及第 6.2 节的预过滤步骤，都可以被读作那篇综述所呼吁的缓解措施在运行时的对应物。

同样的道理也适用于更高层的工具设计。NSA 指南把 MCP 安全视为一个贯穿协议设计、运行时调度、与外部服务集成以及长期监控的生命周期议题（National Security Agency, 2026）。一项面向智能体的工具设计提案主张，面向智能体的 API 应当提供 search、resolve、preview、execute、verify 与 recover 等阶段，而不只是面向人类的 CRUD 端点（Pan, 2026）。这样读来，MCP 服务器、plugins、skills、SDK 与智能体间协议构成了一条工具供应链：它们扩展了智能体能做的事，但同时也需要身份、允许名单、版本管理、审计日志与吊销机制。

##### 软件架构

分层架构模式（Garlan et al., 1993）为我们的五层分解提供了启发。基于角色的访问控制模型（Sandhu et al., 2002）为权限模式系统提供了理论。浏览器沙箱（Reis and Gribble, 2009）是一种类似的按进程隔离方法。多智能体系统理论（Wooldridge, 2009）有助于解释子智能体委派。

##### 定位

此前关于编程智能体的工作聚焦于基准（智能体解决问题做得如何）、框架（如何组合智能体）与产品（用户能做什么）。本文的贡献是对一个生产级编程智能体的、基于源码的设计空间分析：用源码级分析与架构对照来呈现设计选择与权衡。它借鉴软件架构案例研究的传统（Garlan et al., 1993），但把它应用于基于 LLM 的智能体：系统地识别设计问题、绘制备选方案，并把 Claude Code 的选择与 OpenClaw、Hermes Agent 这两个从不同部署形态出发的独立 AI 智能体系统作对照。

### 12 讨论

前面各节的分析记录了 Claude Code 如何回答循环架构、安全姿态、可扩展性、上下文管理、委派与持久化等反复出现的设计问题。每个答案都体现了一个设计空间中的立场，而该空间中存在真实的替代方案与可度量的权衡。本节考察把这些答案放在一起读会揭示什么：它们所反映的设计哲学（第 12.1 节）、它们造成的价值张力（第 12.2 节）、它们蕴含的架构权衡（第 12.3 节）、它们产生的实证预测（第 12.4 节），以及在各子系统中反复出现的横切承诺（第 12.7 节）。第 2.1 节的五价值框架是本节的组织线索。

#### 12.1 设计哲学

第 2 节引入的价值与设计原则预示了一种投入操作型基础设施而非决策脚手架的架构。实现证实了这一点：第 3 至 9 节记录的架构压倒性地是确定性基础设施（权限闸门、工具路由、上下文管理、恢复逻辑），LLM 则被当作一个无状态的补全端点来调用。据估计，代码库中约 1.6% 构成决策逻辑，其余 98.4% 是操作型智能体外壳。这一比例并非偶然。

第 2.2 节记录的设计原则支撑着这一做法：外壳创造的是模型能够做好决策的条件，而不是约束它的选择。

这种设计与智能体工程中的主流模式相反——像 LangGraph 这样的框架把模型输出路由经由带类型边的显式图节点，而像 Devin 这样的系统则把多步规划器与厚重的操作型基础设施配对。Claude Code 恰恰相反：它在丰富的操作型外壳之内给模型最大的决策自由度。工程复杂度存在不是为了约束模型的决策，而是为了让这些决策成为可能。这种「模型负责推理、外壳负责执行」的分层架构，引出了一个有意思的问题：智能体式编程工具是否正在收敛到类似操作系统的抽象——核心循环充当内核，其余一切充当 OS。

随着前沿模型在编程任务的实用能力上趋于收敛，这一设计获得了额外的重要意义：周围操作型外壳的质量成为主要区分因素，这印证了「投资基础设施而非决策脚手架」的架构取向。对智能体构建者而言，其含义是：把投资放在上下文管理、安全分层、恢复机制这类确定性基础设施上，可能比在日益强大的模型周围叠加规划脚手架带来更大的可靠性收益。近期针对原生运行时的基准测试为这一论断提供了直接的经验支持：在固定模型、只更换周围外壳时，单个模型在长程任务上的得分最多可变动 18 分，被测试的外壳中就包括 Claude Code 与 OpenClaw（Ding et al., 2026）。

（C 级证据）随着模型能力增强，对于像 Fable 5 这样能够独立阅读并修复代码库的模型，外壳还有必要吗？外壳服务于第 2.1 节的五项价值，而其中只有一项——能力放大——主要与模型有多强有关。在这一项内部，更强的模型所影响的是决策脚手架，比如某些框架为了引导与约束模型而包裹在它外面的规划与控制逻辑。在模型本已强大的领域（如代码与数学），它能自行抵达成功解，因此引导与约束就不那么必要。

另外四项价值主要与模型有多强无关，因此服务于它们的外壳会保留下来。可靠执行是部分例外：更强的模型能更准确地理解请求，也稍微更善于纠正自己的错误。但上下文窗口仍然是有限的，会话仍然需要恢复，模型仍然倾向于每次运行都换一种方式重建同样的东西，因此上下文管理与恢复依然必要。安全、安保与隐私则完全不依赖能力。先拒绝规则、沙箱、auto 模式分类器与审计日志的重要性和以前一样，而更强的模型是更危险而非更安全：Fable 5 本身在更高风险领域就受到安全分类器的限制（Anthropic, 2026d）。人类决策权关乎的是人做决定的权利，而非模型的能力，因此审批、中断与记录的作用不变。情境适应性也类似：强模型依然是通用模型，并没见过你的代码，所以 `CLAUDE.md`、skills 与 MCP 依然在把它适配到你的项目上。约束全部五项价值的 token 经济性同样不会放松，因为更好的模型不会让 token 变免费。

即便对最强的模型，研究也印证了这一点：仅仅外壳的选择，就能让 Fable 5 的功能与安全通过率变动十分或更多（Compagna, 2026）。随着模型能力增长，外壳不会变得无用；改变的只是决策脚手架，而且只在模型本已强大的地方改变，外壳做的其他一切仍和以前一样重要。

总而言之，前面各节表明生产级编程智能体面临一组反复出现的设计选择：推理相对于外壳处于何处、迭代循环如何组织、默认采取何种安全姿态、扩展面如何切分、上下文如何组装与压缩、子智能体如何被委派与编排，以及会话如何跨越边界持久化。Claude Code 对这些问题的答案构成了一个连贯的设计立场——在丰富的操作型外壳之内优先保障模型的自主性。

这一哲学假设：丰富的确定性基础设施足以支撑不受约束的模型判断。接下来几节考察这一假设在哪里受到检验。

#### 12.2 价值张力

第 2.1 节识别出的五项价值会产生张力：追求其中一项会限制另一项（表 6）。这些张力不是设计失败，而是同时追求多项价值的结构性后果。本文报告的是支撑证据最强的张力，而非全部组合。

| 价值对 | 张力 | 证据 |
| --- | --- | --- |
| 决策权 × 安全 | 审批疲劳 vs. 保护 | 93% 的批准率削弱了人的警觉（Hughes, 2026）；安全必须靠分类器与沙箱来补偿 |
| 安全 × 能力 | 性能 vs. 防御深度 | 因解析开销，> 50 个子命令时会退回通用提示，跳过逐子命令的拒绝检查（Adversa.ai, 2026）；各安全层共享性能约束 |
| 适应性 × 安全 | 可扩展性 vs. 攻击面 | 多个（已修补）CVE 利用了「信任建立前」的 MCP 服务器初始化，以及设置环境变量的应用（Donenfeld and Vanunu, 2026） |
| 能力 × 适应性 | 主动性 vs. 打扰 | 任务完成率提升 12% 至 18%，但在高频率下偏好度下降（Chen et al., 2025） |
| 能力 × 可靠性 | 速度 vs. 一致性 | 有界上下文使智能体无法通览整个代码库（第 7 节）；子智能体隔离限制了跨智能体的一致性（第 8 节）；相邻工具中观察到的复杂度上升（He et al., 2025） |

另一个问题是：短期收益是否会削弱开发者的长期能力（第 2.4 节）。一项覆盖 16 名资深开发者、246 个任务的随机对照试验（Becker et al., 2025）发现，AI 工具让开发者慢了 19%，尽管他们主观感觉快了 20%。一项覆盖 807 个仓库的 Cursor 采用因果分析（He et al., 2025）发现代码复杂度上升了 40.7%。一项 54 名参与者参与的 EEG 研究（Kosmyna et al., 2025）发现 LLM 使用者出现了神经连接减弱，且在移除 AI 后依然持续。研究者还提出了测量 AI 辅助编程中「认知卸载」的协议，其动因在于担心使用 AI 的学生产出的应用程序并不理解底层逻辑（Aiersilan, 2026）。这些发现，加上 2023 至 2024 年初级技术岗位招聘下降 25%（Rak, 2025），表明能力放大与长期可持续性之间的张力超出了个人生产力的范畴，延伸到更广的开发者人才梯队。这些证据促成了长期能力问题的提出，但并未专门针对 Claude Code 的架构。它们与依赖有界上下文、工具调用循环和本地生成决策的智能体系统最为相关。

#### 12.3 架构权衡

表 6 中的张力在四个方面表现为具体的架构权衡。上文记录的长期可持续性隐忧，则在第 12.4 节的实证预测中显现。

##### 安全 vs. 自主性

权限模式（五种始终存在，加上分类器功能开关启用时的 auto，以及内部的 bubble 模式）构成一条梯度：从 `plan`（用户批准所有计划），经 `default`、`acceptEdits`、`auto`（机器学习分类器），一直到 `bypassPermissions`（跳过大多数提示，但安全关键检查仍在）。这一递进代表着一条单调递减的安全梯度与递增的自主性。不从对话记录中还原会话作用域的权限，反映出一种有意偏向安全的取舍：新进程在没有旧会话授权的情况下启动。

安全—自主性梯度不仅由架构设计塑造，也由用户行为塑造。Anthropic 的 auto 模式分析（Hughes, 2026）发现用户会批准大约 93% 的权限提示，说明审批疲劳使交互式确认在行为上不可靠。纵向使用数据（McCain et al., 2026）显示，自动批准率从少于 50 个会话时约 20% 上升到 750 个会话时超过 40%，会话时长也显著增加。这些模式提示：这条梯度并不是靠有意识地选择模式来穿越的，而是靠逐步习惯化。沙箱据估计把权限提示的频率降低了 84%（Dworken and Weller-Davies, 2025），这把问题重新框定为一个人因问题：对不可靠的人工审批，架构层面的回应是减少人必须做的决策数量。

更根本地说，第 5 节描述的纵深防御架构建立在一个独立性假设之上：如果某个安全层失效，其他层会兜住违规。但 Claude Code 的安全层共享着相同的性能与经济约束。auto 模式分类器是一次独立的 LLM 调用，有直接的 token 成本。`bashSecurity.ts` 模块执行顺序的基于 AST 的检查，存在解析延迟。先拒绝式规则评估作用于命令结构。当性能压力促使削减这些成本时，各层可能同时退化。安全研究者（Adversa.ai, 2026）记录：包含 50 个以上子命令的命令会退回单一通用审批提示，而不再逐子命令执行拒绝规则检查，因为逐子命令解析会导致界面冻结——这证明了当独立性假设被违反时，纵深防御就会失效。

这一张力是结构性的。任何用模型自身来做安全评估的、基于 LLM 的智能体系统都会面对它。相关的评判标准不是「某单独一层能否被绕过」，而是「必须同时失效多少个彼此独立的层」以及「它们是否共享失效模式」。

##### 对抗条件下的权限模型

独立安全研究为权限架构提供了经验验证，尤其是揭示了图 4 未刻画的一项时间顺序属性。两个经独立验证的漏洞共享同一个「信任建立前」的初始化顺序根因：在早期版本中，项目初始化期间执行的代码（MCP 服务器连接与设置环境变量的应用）在用户接受交互式信任对话框之前就已运行。这一「信任建立前」的执行窗口落在先拒绝式评估流水线（`permissions.ts`）之外，形成了一个结构上享有特权的阶段——此时第 5 节记录的安全保证尚不适用。在所分析的快照中，标准的交互式启动路径要求先接受信任，然后才执行 hooks、连接项目 MCP 服务器，以及应用超出安全允许名单范围的项目作用域设置环境变量（`hooks.ts`、`main.tsx`、`managedEnv.ts`）。

> 注释 5：这两个「信任建立前」的顺序漏洞分别是 CVE-2025-59536（CVSS 8.7）与 CVE-2026-21852（CVSS 5.3）（Donenfeld and Vanunu, 2026），由 Check Point Research 发现。CVE-2025-54794 与 CVE-2025-54795（Beber, 2025）则分别利用了权限流水线中别处的路径校验与命令解析缺陷。四个漏洞都在披露后数周内得到修补。

这一模式揭示出：权限流水线刻画的是安全检查的**空间**顺序，却没有刻画**时间**维度——具体而言，各机制在会话初始化的哪个时刻开始生效。修补前的初始化序列（MCP 服务器执行 → 接受信任 → 权限执行）造成了一个窗口，其中可扩展性架构（第 6 节）先于安全架构（第 5 节）完全生效。这一发现为「可扩展性 vs. 简洁性」的张力补充了安全维度：可扩展性不仅通过组合复杂度制造攻击面，也通过初始化顺序制造攻击面。

##### 上下文效率 vs. 透明度

五层压缩流水线实现了有效的上下文管理，但压缩对用户基本是不可见的。当预算削减把一段冗长的工具输出替换为引用时，当 context collapse 用摘要替换消息时（源码中描述为「对 REPL 完整历史的一次读取时投影」），当 snip 裁剪较早的历史时，用户都没有便捷的方式去检视究竟丢失了什么。Microcompact 的缓存感知行为进一步加深了这种不透明性，因为压缩决策受到提示词缓存的影响，而用户看不到这些。外部关于基于摘要的压缩的研究记录了两项源码视角无法体现的额外代价：摘要步骤是一次阻塞式的推理停顿，且具有非确定性——在相同输入下，不同运行之间保留的内容会有波动（Cim et al., 2026）。

##### 简洁性 vs. 可扩展性

四种扩展机制带来了丰富的定制能力，但也造成了组合式的交互：一个 plugin 贡献的 PreToolUse hook 会修改工具输入。auto 模式分类器读取缓存的 `CLAUDE.md` 内容。按路径生效的规则在读取新目录时惰性加载，可能在对话中途改变分类器的行为。权限处理器的四个分支在多个点上与 hook 流水线交互。这些横切关注点产生了难以从任何单一配置文件中预测的涌现行为。

#### 12.4 实证预测与早期信号

本文记录的架构属性产生了一些关于代码质量结果的可检验预测，这些预测无法仅从源码推导。有界的上下文窗口（第 7 节）使智能体无法同时通晓整个代码库：五层压缩流水线保留了有用信息，但在每一层都引入了有损压缩。这在架构上预示：由智能体生成的代码，会比在拥有完整代码库可见性时产出的代码，表现出更高的模式重复率与规范违反率。子智能体隔离（第 8 节）——每个子智能体在各自的上下文窗口中运行、拥有独立组装的工具池——会加剧这一效应：并行智能体可能各自重新实现别处已经存在的方案。第 12.1 节的设计哲学信任模型做出良好的局部决策，但在模型缺乏全局上下文时，良好的局部决策可能产生糟糕的全局结果。

针对架构相近工具的已发表实证工作，提供了与这些预测一致的数据。一项覆盖 807 个仓库的 Cursor 采用因果分析（He et al., 2025）发现代码复杂度有统计显著性的上升，并伴随一个初始的速度激增，到第三个月消散回基线。复杂度上升与后续开发速度的等比例下降相关联，提示短期收益可能被后期维护成本抵消。一项覆盖 6,275 个仓库、304,000 次 AI 撰写提交的大规模审计（Liu et al., 2026）发现了可度量的技术债，其中约四分之一的 AI 引入问题一直延续到最新修订版，而与安全相关的问题延续率显著更高。虽然这些研究针对的是相邻系统，但架构上的相似之处（有界上下文、工具调用循环、本地生成决策）使它们成为此处所分析设计的有意义的对照点。一项直接在 Claude Code 上进行的受控最小配对研究，锐化了这些效应可被测量的位置：代码整洁度并不改变任务通过率，但更整洁的输入使 token 用量降低 7% 至 8%、文件重访次数降低 34%（Trivedi and Schmitt, 2026），这表明外壳对上下文的处理最明显地体现在操作足迹（成本与导航）上，而非原始成功率上。

> 注释 6：复杂度 +40.7%（p < 0.001），第一个月速度激增 +281%，第三个月回归基线表现。

Claude Code 的上下文管理流水线正是为缓解这些效应而设计：分级压缩保留最近且最相关的上下文，缓存感知的压缩避免在压缩过程中让提示词缓存失效，读取时投影在向模型呈现压缩视图的同时保留完整历史以便重建，而子智能体的摘要隔离则防止探索噪声在父级上下文中累积。这些机制是否足以克服有界上下文的结构性局限，是一个可以直接度量的实证问题，而本文的源码级分析无法给出答案。

#### 12.5 局限性

除附录中描述的方法论局限之外，还有若干分析上的约束。带记忆化的上下文组装函数（`getSystemContext()` 与 `getUserContext()` 在 `context.ts` 中都使用 lodash 的 `memoize`）意味着 git 状态与 `CLAUDE.md` 内容是被缓存的，而不是每轮重新计算。对话期间的动态变化可能不会立即反映，不过压缩可以清空缓存，惰性加载的按路径规则则提供了一种部分反向机制。

功能开关带来了构建期的可变性。在 `TRANSCRIPT_CLASSIFIER` 为 false 的构建中，整个 auto 模式分类器被消除。受功能开关控制的模块使用动态 `require()` 而非静态 import（例如 `query.ts` 中的 context collapse），因为受 bun:bundle 摇树优化的约束，`feature()` 只能在 if／三元表达式中使用。不同的构建目标可能产出功能上不同的应用。

#### 12.6 新兴方向

实现中的若干方面与更广义的设计问题相关。更长的上下文窗口会减轻压缩压力，可能让分级流水线得以简化。多模态工具（截图、图表、UI 预览）会扩展工具面并带来新的上下文挑战。Claude Code Desktop 已经在朝这个方向走：在其 Browser 面板中，Claude 通过截图、检查页面元素并与运行中的应用交互来检查 UI 改动（Anthropic, 2026f）。对权限属性做形式化验证（例如证明拒绝规则总是优先、证明沙箱中的命令无法逃逸隔离、证明恢复的会话无法继承过期权限）将提供更强的安全保证。

##### 架构解耦

这里分析的紧密耦合的本地架构，只是这个正在演化中的光谱上的一个点。Anthropic 自己的 Managed Agents 工作（Martin et al., 2026）描述了把智能体的各个组件（会话、外壳、沙箱）虚拟化，使「每一个都变成一个对彼此很少做假设、并且可以独立失败或被替换的接口」，并明确类比了操作系统如何把硬件虚拟化为进程与文件。《Harness Design》一文（Rajasekaran, 2026）从另一个角度提出类似观点，主张更好的模型是移动了「有用的外壳组合」这个空间，而不是消灭它。因此，本文记录的架构应当被读作一个共同演化中的系统的一个快照，而不是某个固定的最优点。

云端智能体的报告在不依赖操作系统类比的前提下把这一点讲得更具体。Cursor 把智能体循环、机器状态与会话状态分离，并把 VM 检查点、网络策略、密钥处理与凭证管理当作智能体产品的一部分（Ma, 2026）。LangChain 的 Managed Deep Agents 采取了类似做法，把持久线程、检查点、流式、上下文、可观测性与人在环工作流都放进托管运行时（LangChain, 2026c）。Google 的 Antigravity 给人们提供计划、截图、录像等产物来检查智能体的工作（Google, 2025）。DeepSeek Harness 让运行时组件（包括智能体循环与会话日志）可通过插件配置替换（DeepSeek-AI, 2026）。因此，真正有用的设计问题是运行时的归属：哪一层拥有循环、状态、沙箱、策略与恢复路径？

##### 适配模型与外壳

自动化适配可以改变外壳、模型，或两者兼有。Yang et al.（2026b）保持模型权重固定，用失败轨迹来修订指令、工具、hooks 与上下文管理。Yu et al.（2026）更进一步：由一个专家模型纠正较小模型自身轨迹中的失败轮次，这些纠正成为后续微调数据，而该模型随后在演化后的外壳上被评估。

##### 记忆作为一等子系统

Hu et al.（2025）的记忆综述主张，智能体记忆正在成为独立的认知基质，而不是上下文窗口管理的副产品，并把自动化记忆管理、强化学习驱动的记忆，以及可信记忆（隐私、可解释性与抗幻觉能力）列为开放前沿。Claude Code 如今暴露了事实层（`CLAUDE.md`、自动记忆）与工作层（对话窗口）。经验层（从过往会话中习得、由系统自动策展累积的策略手册）是自然的下一步，而上下文工程文献（Zhang et al., 2025a）已经开始为这种累积提供机制。

Context Hub 让这一边界变得可见。LangSmith Context Hub 把 `AGENTS.md` 文件、skills、策略、示例及相关素材视为可版本化、可评审的产物，并提供跨环境部署的标签（LangChain, 2026a）。这与 Claude Code 的文件层级是不同的设计点，但它指认了同一个问题：上下文需要的是生命周期，而不仅是 token 预算。Skills 带来一个相关的维护问题，因为对某个 skill 的一次更新可能影响到其他 skill。Yang et al.（2026a）用图表示 skills 之间的依赖、联合使用与冲突，共同修订相关 skill，并通过重放相关用例来检验每一处组合改动。

##### 可观测性与静默失败

行业调查表明，已部署智能体的主要失效模式不是崩溃，而是静默的错误。Bessemer 2026 年的基础设施报告（Wade et al., 2026）估计「78% 的 AI 失效是不可见的」，而 LangChain 针对 1,340 名受访者的智能体工程现状调查（LangChain, 2026d）把质量（而非成本）列为投入生产的首要障碍，并发现可观测性（采用率近 89%）与离线评测（52.4%）之间存在巨大落差。此处分析的架构为运维人员提供了对工具调用、hooks 与会话记录的可见性。弥合这一评测落差，很可能需要额外的脚手架（生成器—评估器分离、sprint 契约，以及 Rajasekaran（2026）所讨论的那类事后检查），而不能只靠模型改进。

OpenAI 的智能体改进循环把这一点操作化：轨迹与反馈变成 evals，由此产生的证据成为交给 Codex 的、外壳改动的交接单（Pasfield, 2026）。在这个循环里，遥测很重要，因为它会转化为可复用的测试或具体的改动请求。

##### 治理

随着智能体愈发自主，更广义的治理趋势将约束这个设计空间。《国际 AI 安全报告》（Bengio et al., 2026）警告「AI 智能体带来更高的风险，因为它们自主行动，使人更难在失效造成伤害之前介入」，而 MIT AI Agent Index（Staufer et al., 2026）发现只有 13.3% 被收录的智能体系统发布了智能体专属的安全卡。新兴的监管努力——包括《欧盟 AI 法案》以及围绕 AI 生成代码演变的版权争论——可能对日志记录、透明度、风险管理与人监督施加外部约束，从而影响编程智能体架构的演化方式。

##### 主动式架构

受功能开关控制的 KAIROS 系统展示了这一架构如何可能演化到反应式工具使用之外。KAIROS 实现了一个带基于 tick 心跳的持久后台智能体：当没有待处理的用户消息时，系统注入周期性的 `<tick>` 提示，由模型决定是行动还是休眠。这一设计回应了某项关于主动式 AI 助理的研究中记录的一个张力：任务完成率提升 12% 至 18%，而在高频率下用户偏好度下降（Chen et al., 2025）。KAIROS 试图通过「终端焦点感知」（用户不在时最大化自主行动，用户在场时增加协作）与经由 `SleepTool` 的经济性节流（每次唤醒都要花费一次 API 调用，而提示词缓存在五分钟不活动后过期，使睡眠／唤醒成为一项显式的成本优化）来解决这一点。把主动性同时绑定到用户在场状态与 token 经济性，这一点值得注意，尽管无法确认 KAIROS 在生产构建中处于启用状态。

#### 12.7 反复出现的设计选择

把六项子系统分析放在一起阅读，会浮现出三项横切的设计承诺，它们在原本彼此独立的组件中反复出现。

##### 渐进分层优于单体式机制

安全、上下文管理与可扩展性都用的是彼此独立机制的渐进堆叠，而不是单一的集成式方案。权限架构叠加了第 3.5 节列举的七个独立阶段：工具预过滤、先拒绝式规则评估、权限模式约束、auto 模式分类器、shell 沙箱、不从记录中还原会话权限，以及 hook 拦截。上下文管理叠加了五个压缩阶段、惰性加载的 `CLAUDE.md` 文件、延迟加载的工具 schema，以及只返回摘要的子智能体。可扩展性叠加了四种处于不同上下文成本的机制（MCP 服务器、plugins、skills、hooks）（第 6 节）。在每一种情形下，设计都拿简洁性与可调试性换取纵深防御，并接受「层与层之间的交互可能产生难以从任何单一配置中预测的涌现行为」这一代价。第 10 节中 OpenClaw 与 Hermes Agent 的对照显示，渐进分层在部署形态迥异的系统中反复出现，这提示分层模式反映的是共通的设计问题，而非 Claude Code 特有的实现选择。

##### 以可审计性优先于查询能力的仅追加设计

会话记录是仅追加的 JSONL 文件，并配有读取时的链式修补。会话作用域的权限不存储在记录中。上下文压缩施加的是对完整历史的读取时投影，而不是破坏性编辑。这一承诺之所以反复出现，是因为它保留了恢复、分叉与审计会话的能力，而不必修改先前写入的状态。代价是，更丰富的结构化查询（「把所有跨会话修改过文件 X 的工具调用都列出来」）需要事后重建，而不是直接查找。

##### 确定性外壳中的模型判断

在所有子系统中，架构都在丰富的确定性外壳之内信任模型的判断，而不是约束它的选择。约 1.6% 的决策逻辑比例定量地捕捉了这一点：外壳创造了模型能够做好决策的条件（工具路由、权限执行、上下文组装、恢复逻辑）。分层权限在智能体边界之间维持着安全不变量，`assembleToolPool()` 把内置工具与 MCP 工具合并成单一统一接口，但模型仍完全自由决定调用哪些工具、以什么顺序调用。这一权衡在于：当有界上下文阻碍全局认知时，良好的局部决策可能产生糟糕的全局结果，正如第 12.4 节的实证预测所记录的那样。

### 13 未来方向

第 12 节把第 3 至 9 节记录的架构当作一个连贯的设计立场来阅读，并浮现出该立场所蕴含的张力、权衡与近程方向。本节则越过架构本身，记录六个开放问题——第 12.6 节已部分点出，而不断增长的外部文献已使它们足够清晰、可以被具体陈述。这些问题覆盖本文的五价值框架（第 2.1 节）与第 2.4 节引入的长期开发者能力问题。它们涉及：对决策权层级的治理约束（第 13.5 节）、安全一侧的可观测性—评测落差（第 13.1 节）、可靠执行一侧的跨会话持久化（第 13.2 节）、能力前沿的四项扩展（第 13.3 节）、作为可靠执行一条独立轴的视界扩展（第 13.4 节），以及被重新框定为设计问题的长期开发者能力（第 13.6 节）。与第 12.6 节的框定一致，每个问题都以「是否／如何／哪一个」的形式提出。所引来源点名了具体机制选择时即予点名，否则留白。

#### 13.1 静默失败与可观测性—评测落差

第 12.6 节所报告的可观测性—评测落差，可能反映缺失的工具层、外壳内部缺失的评测接口，或模型能力的天花板。那里的来源并未对此作出裁决。因此，该段提到的「静默错误」这一失效模式应如何被暴露出来，对外壳而言是一个架构问题，而非对模型的能力问题。近期实证工作在多个分辨率上刻画了这一落差。Cemri et al.（2025）编目了十四种失效模式，涵盖系统设计问题、智能体间失配与任务验证。Pathak et al.（2025）构建了一个专门用于轨迹中异常检测的智能体轨迹基准。Yao et al.（2024）通过 `pass^k` 指标（k 次独立试验全部成功的概率）揭示一致性的差距。Kapoor et al.（2024）则论证当前的智能体基准缺少留出集与成本控制，限制了可观测性实际能诊断什么。

那些会自我更新的外壳也需要公平的比较。Wang et al.（2026b）在反馈与推理预算匹配的条件下比较外壳演化与对任务解的搜索，Le et al.（2026）则在训练时留出外壳的前提下测试经过训练的模型。

对照第 4、5 节分析的权限流水线与工具编排层，仍有两个架构问题悬而未决。第一，本文引用 Rajasekaran（2026）的脚手架（生成器—评估器分离、sprint 契约、事后检查，并建立在 Madaan et al.（2023）的 self-refine 模式之上）究竟应当位于外壳之内（例如作为第 6 节所述 27 种之外的额外 hook 事件），还是位于外壳之外作为独立的评测层，所引来源并未定论。第二，第 6 节现有的 hook 流水线能否在其当前上下文成本预算之内承载这类脚手架，是另一个开放问题。「弥合这一落差『很可能需要额外的脚手架……而非仅靠模型改进』」这一观察（第 12.6 节），把开放的工作定位在外壳层。

#### 13.2 持久化：记忆与长期同事关系

智能体状态与人—智能体的工作关系是否应当跨会话持久化、以何种形式持久化，本文今天在两个不同层次上处理。第 7 节记录了四级 `CLAUDE.md` 层级与自动记忆。第 9 节记录了基本仅追加的 JSONL 记录，带显式的清理重写；会话作用域的权限不存储其中。位于这两层之间的东西是一个开放的设计问题：既非静态指令、也非单个会话记录的持久状态。Hu et al.（2025）与 Zhang et al.（2025a）（已在第 12.6 节引用）为这样一个累积层提供了动因。Packer et al.（2023）把 LLM 重新框定为带有分页内存的操作系统。Chhikara et al.（2025）构建了一个可跨重启存活、面向生产的记忆存储，而 Xu et al.（2025）提出了一种研究性的智能体记忆设计。Wang et al.（2024c）捕捉可复用的程序性轨迹。Shinn et al.（2023）通过跨尝试的言语化强化累积自我反思轨迹。Zhang et al.（2025b）与 Huang et al.（2026）的综述梳理了候选机制。

MemGym 让记忆问题更具体。它评估的是跨工具使用对话、深度研究、编程与计算机使用中的动态记忆形成，而不只是聊天中个人事实的保留（Xu et al., 2026）。这把问题从「笔记应该存在哪里？」推进到「哪些被记住的状态能帮助智能体持续正确地工作？」

持久记忆还需要一种从有害条目中恢复的手段。MemSecBench 测试已存储的信息是否会影响后续动作，以及修复过程是否能保持指定的合法记忆完好（Chen et al., 2026）。

同一个持久化问题在人这一侧也反复出现。第 12.6 节已经引用了 Huang et al.（2025）与 McCain et al.（2026）的纵向自主性证据。Dell'Acqua et al.（2025）对 776 名宝洁专业人士所做的实地实验，连同关于 Copilot 推广的纵向与组织研究（Stray et al., 2025）以及 AI 团队协作轨迹研究（Xiao et al., 2025），报告了人—AI 工作动态随协作累积而发生的变化。Wang et al.（2023）展示了一个跨任务累积技能库的具身智能体。Mollick（2024）把人—AI 工作关系框定为协同智能（co-intelligence）。

单一基质能否同时承载用户个人的指令层级与共享的组织上下文，同时保住第 7 节所记录 `CLAUDE.md` 的基于文件的透明度，是一个开放的架构问题。会话作用域的权限如何与这样的基质交互、又不重新引入第 9 节作为有意安全选择所封闭的「恢复时还原权限」隐忧，是另一个开放问题。Claude Code 的 Projects 测试版是朝这个方向的一次产品推进：独立的云会话共享一个项目记忆，该记忆在会话之间承载决策（Anthropic, 2026l）。OpenClaw 的记忆子系统（做梦、每日笔记、混合检索）与 Hermes Agent 带 WAL 模式、具备全文检索的 SQLite 会话存储（第 10 节与第 10.2 节均有记录），为一个持久基质如何位于静态指令层级与单会话记录之间提供了两个具体参照点。

#### 13.3 外壳边界的演化：智能体在哪里、何时、对什么、与谁一起行动

第 12.6 节引用了 Rajasekaran（2026）的论点：更好的模型是移动了「有用的外壳组合」这个空间，而不是消灭它。这种移动最显著地体现在外壳在哪里运行、何时行动、对什么行动，还是与谁协调上——第 3 至 9 节的源码级分析并未给出答案。这四者各自都有活跃的研究文献，本文只是顺带触及。

##### 在哪里

Martin et al.（2026）的 Managed Agents 设计把会话、外壳与沙箱虚拟化为可独立替换的接口。这延伸了 Packer et al.（2023）应用于上下文窗口管理的虚拟内存类比，而 Karpathy（2023）则更广泛地推广了这一类比。Khattab et al.（2023）把外壳本身视为一个编译目标。

##### 何时

第 12.6 节已经引入 KAIROS 作为一个受功能开关控制的示例，其动因来自 Chen et al.（2025）报告的 +12% 至 +18% 的任务通过率增益，以及仅限于高频 Persistent Suggest 变体的明显偏好惩罚（47% 对 80%–90%）。Claude Code 的 routines 使用的是更简单的触发方式：当配置的计划、API 调用或 GitHub 事件触发时，开启一个新的云会话（Anthropic, 2026b）；而 KAIROS 唤醒一个后台智能体，让它在每个 tick 上自行决定是否行动。Liu et al.（2025）、Pu et al.（2025）与 Lee et al.（2025）在编程与周围界面两类场景中扩展了主动性的设计空间。Pasternak et al.（2025）与 Sun et al.（2025）引入了旨在锐化它的基准与训练方案，Deng et al.（2025）则调研了更广的文献。

##### 对什么

视觉—语言—动作研究把外壳扩展到文本工具返回之外。Brohan et al.（2023）与 Black et al.（2024）训练执行物理动作的 VLA 策略，Ahn et al.（2022）把计划落地到机器人的可供性（affordance）上。Figure AI（2025）与 Bjorck et al.（2025）等产业系统把类似想法推进到人形控制。这些系统面对「以可逆性加权的风险」原则（表 1），其成本不对称性是原则已经点名、却未对非文本动作给出量化的。

##### 与谁

角色分化的多智能体系统（Hong et al., 2023；Li et al., 2023；Chen et al., 2023；Qian et al., 2024）组合出职责各异的智能体。多智能体辩论（Du et al., 2024；Liang et al., 2024）与图结构工作流（Zhuge et al., 2024）探索了第 8 节父级／子智能体模式之外的替代方案。Guo et al.（2024）调研了这一空间。

单一外壳架构能否横跨这四项扩展，还是 Rajasekaran（2026）所说的「外壳组合」会碎片化为专门化的技术栈，仍是一个开放的设计问题。「何时」这一扩展直接延续了表 6 中能力对适应性的张力。「与谁」这一扩展部分对应能力对可靠性，但提出了表 6 本身未涵盖的跨智能体一致性隐忧。「在哪里」与「对什么」这两项扩展提出了本文当前子系统边界未覆盖的更多问题：当外壳组件变成托管服务时会附带哪些治理义务（第 13.5 节），以及以可逆性加权的风险（表 1）如何扩展到物理影响而非文本影响。这些扩展如何跨轴组合，而不是在单一轴内组合，也不是本文的单子系统分析所能解决的。

#### 13.4 视界扩展：从会话到科研计划

第 2.1 节把可靠执行定义为同时涵盖「单轮正确性与长程可依赖性」。当自主工作延伸到单个会话之外时，第 3、4、7、8、9 节记录的架构如何继续支撑长程可依赖性，仍是一个开放问题。它的基本单位是轮次、会话与子智能体。不断增长的文献正瞄准这一范围。Lu et al.（2024）给出一条端到端的自主研究流水线，可产出论文初稿。Beel et al.（2025）为该流水线提供了独立的 SIGIR Forum 评估，刻画了「自主研究」目前能交付什么、又在哪些地方不足。Gottweis et al.（2025）开发了一个跨天而非跨轮次运行的多智能体假设生成系统，Novikov et al.（2025）则在过去需要人类专家数周才能完成的时间尺度上推进算法发现。Kwa et al. 的 METR 研究测量了前沿智能体在固定可靠性下能够成功的任务时长，为这一扩展问题提供了经验框架。

Quantitative Goal Persistence 基准指出了一个更窄的失效模式：智能体可以做出合理的局部工具调用，却仍在验证者确认足够有效工作单元之前就停下（Cai et al., 2026）。对长程编程智能体而言，进展需要一个外部的「完成」定义，而不只是流畅的最终消息。

SWE Refactor Bench 把同样的思路用于仓库迁移：它把迁移需求与固定的行为测试分开检查，于是「未完成的迁移」与「破坏了必需行为的迁移」会表现为不同的失败（Hong et al., 2026）。

对照本文的分析，长程部署检验的是：第 7 节的上下文管理流水线、第 8 节「返回最后一段 assistant 文本」的策略，以及第 9 节的仅追加持久化，在会话组合成多会话计划时是否仍然足够。第 12.4 节已经把这一点框定为「一个可以直接度量的实证问题」，而源码级分析无法给出答案。视界扩展把这个问题在数周的尺度上重述：仅靠外壳层能否弥合这一差距，是否需要一个跨会话的记忆基质（第 13.2 节），还是视界规模的工作需要会话、子智能体与记忆之外的协调原语——这些都不是本文以会话为单位的分析所能裁定的。

（A 级证据）本文分析的 v2.1.88 快照之后的一次开发进展让这个问题变得具体。Claude Code v2.1.154 引入了动态工作流（dynamic workflows）：由模型编写一段 JavaScript 编排脚本，交由一个后台运行时执行，扇出到众多子智能体（单次运行上限为一千个），而中间结果存放在脚本变量中、位于模型上下文窗口之外，不再穿过上下文（Anthropic, 2026k）。它与 Claude Opus 4.8（Anthropic, 2026i）一同发布，这恰恰是一种超出本文所分析的会话、子智能体与记忆单位之外的协调原语：它把编排逻辑本身搬出了对话，从而把「把上下文当作稀缺资源」与「隔离的子智能体边界」两条原则（表 1）从单个子智能体扩展到了编排层。编排即代码（orchestration-as-code）是否会成为主导性的长程原语，以及它的 token 成本与运行中人工监督的减少如何与其可靠性收益相权衡，是本文以会话为单位的分析无法裁定的开放问题。

#### 13.5 规模化的治理与监督

新兴的 AI 监管为实现第 2.1 节所记录的「Anthropic—运营者—用户」决策权层级的架构，增加了一层外部约束。在这种外部约束下，编程智能体架构应当暴露哪些日志记录、透明度与人工监督机制，仍是一个开放的设计问题。欧盟委员会的 GPAI 行为准则（European Commission, 2025a）及其实施指南（European Commission, 2025b）展示了通用人工智能治理正如何走向对文档化、风险管理、透明度与监督更为明确的期待。MIT AI Agent Index（Staufer et al., 2026）与《国际 AI 安全报告》（Bengio et al., 2026）（已在第 12.6 节引用）为这一约束的披露与监督侧提供了动因。Bartz v. Anthropic 判决（2025）则在训练数据来源这一输入侧增加了约束，这与新兴案件所处理的、关于 AI 生成代码的输出侧版权问题是两回事。OECD 关于 AI 治理框架的报告（OECD, 2025）与 Nannini et al.（2026）对智能体提供方合规义务的早期分析，勾勒了面向监管者的接口可能是什么样，而未作具体规定。

（A 级证据）监管也可以作用于模型的可获得性，而不只是作用于架构必须披露什么。2026 年 6 月，一项美国出口管制令禁止外国公民访问 Anthropic 的 Fable 5 与 Mythos 5 模型；发布后数日内，Anthropic 就在全球范围内对所有用户禁用了这两个模型（Anthropic, 2026n）。Anthropic 报告称管制于 6 月 30 日解除；Fable 5 于 7 月 1 日在全球恢复，而 Mythos 5 的访问只对一组美国机构恢复（Anthropic, 2026m）。这类政府政策可以直接决定模型在何时、向谁可用。

智能体安全基准也把安全对象从文本移向环境状态。Boiling the Frog 评估多轮工作区编辑在渐进式攻击下是否会变得不安全（Bisconti et al., 2026）。这对编程智能体很重要，因为有风险的对象可能是被修改的仓库，而不是最终答案文本。

对照第 5 节分析的权限流水线，当前架构有两项属性在这一约束下仍是开放的。第一，本文所记录的先拒绝式评估可以通过会话记录（第 9 节）在内部审计，而 Claude Code 能通过 OpenTelemetry 导出工具权限决策事件（Anthropic, 2026j）。这些记录如何在 GPAI 行为准则（European Commission, 2025a）等新兴框架下支撑外部审计，仍是一个开放问题。第二，「价值优先于规则」这一原则——本文把它与确定性护栏配对——是否容许合规审查可能要求的、那种明确的规则表达，是另一个开放问题。这两项属性都位于外壳而非模型之内，而未来架构可能需要在这些地方暴露新的接口。

#### 13.6 长期开发者能力

第 2.4 节把长期开发者能力作为横切问题而非并列的设计价值引入。第 12.2 节与第 12.4 节用外部证据扩展了这个问题，包括感知到的与实测的生产力之间的落差、理解力的流失、复杂度的累积、技术债的延续、神经连接性的延续，以及初级职业招聘的下降。从业者说的是同样的话：Karpathy（2026）反思自己转向智能体驱动的编程时警告，「你可以把思考外包出去，但无法把理解外包出去。」第 14 节随之转折：「未来的系统可以把这种可持续性落差当作一等的设计问题，而不是下游的评测指标。」这种转折是否可能，以及一等化处理需要哪些架构机制，是本节记录的最后一个开放问题。

这也与过程监督相呼应。人—LLM 协同规划的工作主张，用户需要的是过程级控制，而不只是结果级审查，并按模式、范围与编辑层级来组织引导（He et al., 2026）。对编程智能体而言，类似的问题是：当工作仍在展开时，用户能检视并改变什么。

有两个子问题把度量落差与设计落差区分开来。第一，促动该问题的那些经验性论断，能否在会话粒度上被度量。现有引用的操作尺度在会话到数月之间（Becker et al., 2025 的 16 人 RCT、Shen and Tamkin, 2026 的理解测试对比、Kosmyna et al., 2025 的 EEG 研究、He et al., 2025 的 807 仓库因果分析、Liu et al., 2026 的 304,000 次提交审计、Rak, 2025 的招聘序列），但第 3、4、7 节记录的外壳并未暴露任何关于理解力或规范漂移的逐会话信号。关于程序员交互模式（Barke et al., 2023）与 AI 诱发的代码安全回归（Perry et al., 2023）的相关工作勾勒了会话粒度的度量方式，Aiersilan（2026）则提出了一套会话级认知卸载探测协议。第二，一旦这类度量存在，架构能否对其作出响应（把生成器—评估器分离（Rajasekaran, 2026）类比地应用到人的循环上、保持理解的界面，或尚未命名的机制），就是第 14 节提出的设计落差问题。本文对哪一类机制合适不持立场。它也没有裁定：此处记录的外壳是否是采取该行动的恰当所在，而不是 IDE、组织或人的开发循环。第 11 节调研的相关工作与第 14 节的可持续性转折，标明了本文留下这个问题的位置。

### 14 结论

本文表明，生产级编程智能体可以被理解为对一组反复出现的设计问题的回答：推理相对于外壳处于何处，执行、安全、可扩展性、上下文、委派与持久化如何组织，以及这些选择编码了哪些权衡。Claude Code 在这个空间中占据了一个清晰的设计立场。它给模型广泛的局部自主性，同时用一个密集的确定性外壳来提供权限管理、工具路由、上下文压缩、可扩展性与会话恢复。若通过第 2 节识别出的五项价值与十三条设计原则来阅读，这些选择是连贯的而非拼凑的：系统始终优先考虑人类决策权、安全、可靠执行、能力放大与情境适应性。

与 OpenClaw 和 Hermes Agent 的比较表明，同样的设计问题在不同智能体系统中反复出现，却产生不同的答案。Claude Code 在 CLI 外壳内投资于逐动作的安全分类与分级的上下文压缩，OpenClaw 在多渠道网关中投资于边界层面的访问控制与结构化的长期记忆，而 Hermes Agent 从单个进程出发，把逐动作的审批渲染到众多界面上，并配以可插拔的记忆与模型后端。三套系统通过 ACP 在多个位置上组合：OpenClaw 可以通过 ACP 把 Claude Code 作为外部外壳承载起来，而 Hermes Agent 处在宿主／客人的分界两侧。因此，对智能体构建者而言，最具后果的开放问题不是如何加入更多自主性，而是如何随时间保住人的能力。总而言之，第 2.4 节引入的长期能力问题、第 12 节的分析，以及第 13 节考察的开放问题都表明：该架构在明确保住长期的人类理解、代码库一致性或开发者人才梯队方面，提供的机制相当有限。未来的系统可以把这种可持续性落差当作一等的设计问题，而不是下游的评测指标。

---

### 附录

### 证据基础与方法论

本附录记录证据来源、分析流程与本研究的局限。

#### 证据基础与证据分级

本文的论断建立在三个证据分级之上：

- **A 级（产品文档）**：取自 Anthropic 官方文档与工程出版物的论断。它们确立了产品意图，但未必反映内部实现。
- **B 级（代码验证）**：引用所提取 TypeScript 代码库（v2.1.88，来自一个公开可得的 npm 包提取）中具体文件与函数的论断。这是最强的证据分级。
- **C 级（重构推断）**：来自社区分析、OpenClaw 或 Hermes Agent 结构对照，或从代码模式推断而来的论断。这些论断均以留有余地的措辞表述。

源语料库包含约 1,884 个文件、合计约 512K 行 TypeScript，取自 `original-source-code/src` 目录的 commit `53faa8b216`。OpenClaw 与 Hermes Agent 被用作比较参照点，而非事实标准。所分析的快照分别是 commit `462d8e3bc0` 与 `f1f42a7b9f`。

#### 设计空间分析流程

设计问题的识别方式，是逐个检视各子系统中那些「在其他生产级智能体里存在替代设计」的选择点。Claude Code 对每个问题的答案，沿着具体源码文件与函数实现被追溯（B 级证据）。五价值框架（人类决策权、安全、安保与隐私、可靠执行、能力放大、情境适应性）从官方文档与创造者陈述中识别（A 级），再沿着十三条设计原则追溯到架构决策。长期能力保持被单独当作横切问题而非设计价值，因为它并未在架构中、也未在 Anthropic 所声明的价值中作为显著设计驱动力体现（第 2.4 节）。Token 经济性则作为一项横切约束，同时界定全部五项价值，揭示出在共同资源压力下各个子系统的选择如何相互作用。

#### 局限

- **静态快照。** 分析反映的是一个版本（v2.1.88）。功能开关（如 `TRANSCRIPT_CLASSIFIER`、`CONTEXT_COLLAPSE`）造成构建期可变性。不同的构建目标可能产出功能上不同的应用。
- **逆向工程认识论。** 源码揭示了已实现的结构、控制流、依赖关系与功能开关。它无法确认设计意图、已启用的生产标志、运行时的普遍程度，或尚未发布的行为。
- **单系统分析。** 研究发现描述的是 Claude Code 的设计空间，而非编程智能体的整个设计空间。外推是有边界的。
- **对照系统的快照。** OpenClaw 与 Hermes Agent 的分析各自反映一个特定的开发状态，未必代表它们当前的能力。

### 包结构

本部分把主要的 TypeScript 包映射到运行时职责。

#### 目录到职责的映射

> 图 9：所提取的包结构映射到运行时职责。左列：TypeScript 源码目录与关键文件。右列：推断出的运行时角色。本附录属于重构分析（C 级证据），并非 Anthropic 官方文档。

该包围绕 `src/` 目录组织（图 9）。表 7 列出构成主要子系统的关键文件。

| 文件 | 体积 | 职责 |
| --- | --- | --- |
| `main.tsx` | 804KB | 入口点、模式分派、初始化 |
| `query.ts` | 68KB | 核心智能体循环、5 个上下文整形器 |
| `QueryEngine.ts` | 47KB | SDK／无头会话封装 |
| `Tool.ts` | 30KB | 工具接口、类型、工具函数 |
| `history.ts` | 14KB | 全局提示词历史 |
| `mcp/client.ts` | Large | MCP 客户端（8 种以上传输变体） |
| `compact.ts` | Large | 压缩引擎 |
| `AgentTool.tsx` | Large | Agent 工具、子智能体分派 |
| `runAgent.ts` | Large | Agent 生命周期与协调 |

`tools/` 目录包含约 42 个实现工具的子目录，各自带有对应的 schema、描述、权限要求与执行逻辑。`commands/` 目录包含约 86 个斜杠命令子目录。

主要服务目录包括 `services/tools/`（`StreamingToolExecutor`、`toolOrchestration`、`toolExecution`）、`services/compact/`（压缩引擎）与 `services/mcp/`（MCP 客户端与配置）。权限基础设施横跨 `utils/permissions/`（规则评估、分类器）、`hooks/useCanUseTool.tsx`（权限处理器）、`types/permissions.ts`（模式定义）与 `types/hooks.ts`（事件 schema）。

一个结构性怪癖：`query.ts`（文件）与 `query/`（目录）并存。文件包含主查询循环，目录则容纳循环配置与上下文组装的辅助模块。

#### 条件性工具可用性

`getAllBaseTools()` 函数（`tools.ts`）依据模式、构建、环境与功能开关构造不同的工具集（表 8）。模型在简单模式下可能只看到 3 个工具（Bash、Read、Edit），在功能全开的完整内部构建中则最多可看到 54 个工具（19 个无条件 + 35 个条件性）。

| 类别 | 示例 |
| --- | --- |
| 始终包含 | `AgentTool`、`BashTool`、`FileReadTool`、`FileEditTool`、`FileWriteTool`、`SkillTool`、`WebFetchTool`、`WebSearchTool` |
| 环境相关 | `GlobTool`／`GrepTool`（除非已内嵌）、`ConfigTool`（仅 ant）、`PowerShellTool`（Windows） |
| 功能开关 | `TaskCreate`／`Get`／`Update`／`List`（`todoV2`）、`EnterWorktreeTool`（`worktree`）、`TeamTools`（`swarms`）、`ToolSearchTool` |
| 空值检查 | `SuggestBackgroundPRTool`、`WebBrowserTool`、`RemoteTriggerTool`、`MonitorTool`、`SleepTool` |

#### 跨文件依赖

导入图包含如下依赖结构。`QueryEngine.ts` 把轮次执行委派给 `query.ts`。`query.ts` 从 `services/tools/`（`StreamingToolExecutor`、`runTools`）与 `services/compact/`（`autoCompact`、`buildPostCompactMessages`）导入。`QueryEngine.ts` 从 `memdir/` 导入记忆与提示词组装。代码明确避免循环导入：`types/permissions.ts` 被抽出以打破导入环，而 `context.ts` 中的 `setCachedClaudeMdContent()` 避免了经由权限／文件系统路径形成的环。

### 社区复刻实现

在 Claude Code 的 TypeScript 源码变得可公开阅读之后，若干社区项目发布了独立的复刻实现。本附录列出几个有代表性的例子。

#### 代表性项目

表 9 列出截至 2026 年从公开生态中识别出的五个复刻实现。每个项目都是一个可运行的 CLI 智能体，而不是被动的源码转储或批注稿。这批项目横跨四种运行时目标（Python、Rust、TypeScript + Bun、经 npm 的 JavaScript）与三种复建方法论（基于观察到的行为独立重写、从 TypeScript 快照分叉并重建构建、以及自动化反编译流水线）。

| 项目 | 运行时 | 引用 | 方法论 |
| --- | --- | --- | --- |
| ClawCodex | Python | (agentforce314, 2026) | 移植 + 多提供方模型层 |
| Claw Code | Rust | (ultraworkers, 2026) | 独立的 Rust 重写 |
| claude-code-working | TypeScript / Bun | (777genius, 2026) | 逆向工程，可运行 |
| Claude Code Source: Buildable Research Fork | TypeScript | (T-Lab-CUHKSZ, 2026) | 从快照重建构建系统 |
| Open Claude Code | JavaScript / npm | (ruvnet, 2026) | 每夜自动反编译流水线 |

### 配套的设计空间资源

项目仓库维护着一组配套笔记，用于追踪新出现的智能体系统进展；它们并非 Claude Code 实现的证据，后者的依据仍是上文各证据分级（VILA Lab, 2026）。

---

### 参考文献

原文共列出 177 条参考文献（References 节）。按学术惯例，参考文献条目一律保留英文原文不译；文中所有形如 `(Author, Year)` 的引用标记均已随正文一并保留。

### 翻译与对照说明

- **翻译范围**：摘要为 100% 逐句完整翻译；正文第 1 至 14 节及全部附录为逐段完整翻译，所有一级（`###`）、二级（`####`）与三级（`#####`）章节标题均 100% 翻译；正文中的 6 条脚注（注释 1–6）与全部 11 张表格均已翻译，表格中的数值、代码标识符、文件路径与命令保持原样。
- **保留原文的部分**：参考文献（177 条）按学术惯例保留英文原文不译；代码伪代码块（图 5 的智能体循环）保留原样，仅对注释行做了中文化。
- **「英文原文」部分**为对照用的结构化摘录：标题、作者与机构、完整摘要、全部章节标题（含各章开头段落），非全文。
- 本地化说明：术语按统一术语表处理；`harness`、`action space`、`tool calling`、`context window`、`compaction`、`subagent`、`system prompt`、`permission system`、`classifier`、`pluggable`、`deployment context` 分别统一译为智能体外壳（harness）、动作空间（action space）、工具调用（Tool Calling）、上下文窗口、压缩（compaction）、子智能体（subagent）、系统提示词（system prompt）、权限系统、分类器、可插拔、部署形态；Claude Code、Anthropic、Claude、Opus、MCP、skills、hooks、plugins、OpenClaw、Hermes Agent、API、CLI、JSON、LLM 以及内部文件名（`settings.json`、`CLAUDE.md` 等）一律保留英文。
