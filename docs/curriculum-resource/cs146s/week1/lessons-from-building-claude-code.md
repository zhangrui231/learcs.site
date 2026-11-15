---
title: Lessons from Building Claude Code —— 构建 Claude Code 的经验教训
description: CS146S Week 1 阅读材料翻译 | 构建 Claude Code 的经验教训
---

# Lessons from Building Claude Code —— 构建 Claude Code 的经验

> **原文链接**：[https://x.com/trq212/status/2027463795355095314](https://x.com/trq212/status/2027463795355095314)
>
> **作者**：Thariq（@trq212，原 Claude Code 团队，Anthropic）｜ **发布于** 2026-02-27 ｜ X Article（长文）
>
> **来源**：CS146S Week 1 Reading

---

## 原文（英文）

One of the hardest parts of building an agent harness is constructing its action space.

Claude acts through Tool Calling, but there are a number of ways tools can be constructed in the Claude API with primitives like bash, skills and recently code execution (read more about programmatic tool calling on the Claude API in [@RLanceMartin's new article](https://x.com/RLanceMartin/status/2027450018513490419)).

Given all these options, how do you design the tools of your agent? Do you need just one tool like code execution or bash? What if you had 50 tools, one for each use case your agent might run into?

To put myself in the mind of the model I like to imagine being given a difficult math problem. What tools would you want in order to solve it? It would depend on your own skills!

Paper would be the minimum, but you'd be limited by manual calculations. A calculator would be better, but you would need to know how to operate the more advanced options. The fastest and most powerful option would be a computer, but you would have to know how to use it to write and execute code.

This is a useful framework for designing your agent. You want to give it tools that are shaped to its own abilities. But how do you know what those abilities are? You pay attention, read its outputs, experiment. You learn to see like an agent.

Here are some lessons we've learned from paying attention to Claude while building Claude Code.

### Improving Elicitation & the AskUserQuestion tool

![Finding the sweet spot: no structure (modified markdown output, model free but messy, hard to format) — AskUserQuestion tool (structured + composable, clear UI surface) — too rigid (ExitPlanTool parameter, plan already formed, questions come too late)](https://pbs.twimg.com/media/HCLxg2JbsAA3Ag_.jpg)

When building the AskUserQuestion tool, our goal was to improve Claude's ability to ask questions (often called elicitation).

While Claude could just ask questions in plain text, we found answering those questions felt like they took an unnecessary amount of time. How could we lower this friction and increase the bandwidth of communication between the user and Claude?

#### Attempt #1 - Editing the ExitPlanTool

The first thing we tried was adding a parameter to the ExitPlanTool to have an array of questions alongside the plan. This was the easiest thing to implement, but it confused Claude because we were simultaneously asking for a plan and a set of questions about the plan. What if the user's answers conflicted with what the plan said? Would Claude need to call the ExitPlanTool twice? We needed another approach.

(you can read more about why we made an ExitPlanTool in [our post on prompt caching](https://x.com/trq212/status/2024574133011673516))

#### Attempt #2 - Changing Output Format

Next we tried modifying Claude's output instructions to serve a slightly modified markdown format that it could use to ask questions. For example, we could ask it to output a list of bullet point questions with alternatives in brackets. We could then parse and format that question as UI for the user.

While this was the most general change we could make and Claude even seemed to be okay at outputting this, it was not guaranteed. Claude would append extra sentences, omit options, or use a different format altogether.

#### Attempt #3 - The AskUserQuestion Tool

![AskUserQuestion tool UI: a multi-tab prompt asking "Which programming paradigm do you prefer for this project?" with options Functional, Object-Oriented, Procedural, Mixed, Type something, and Chat about this](https://pbs.twimg.com/media/HCL0gcObkAA4tKt.jpg)

Finally, we landed on creating a tool that Claude could call at any point, but it was particularly prompted to do so during plan mode. When the tool triggered we would show a modal to display the questions and block the agent's loop until the user answered.

This tool allowed us to prompt Claude for a structured output and it helped us ensure that Claude gave the user multiple options. It also gave users ways to compose this functionality, for example calling it in the Agent SDK or using referring to it in skills.

Most importantly, Claude seemed to like calling this tool and we found its outputs worked well. Even the best designed tool doesn't work if Claude doesn't understand how to call it.

Is this the final form of elicitation in Claude Code? We're not sure. As you'll see in the next example, what works for one model may not be the best for another.

### Updating with Capabilities - Tasks & Todos

![From Todos to Tasks: a single agent with a checked-off todo list becomes two agents (Agent A, Agent B) sharing a dependency graph of Tasks](https://pbs.twimg.com/media/HCLxrfXbEAUXwRV.jpg)

When we first launched Claude Code, we realized that the model needed a Todo list to keep it on track. Todos could be written at the start and checked off as the model did work. To do this we gave Claude the TodoWrite tool, which would write or update Todos and display them to the user.

But even then we often saw Claude forgetting what it had to do. To adapt, we inserted system reminders every 5 turns that reminded Claude of its goal.

But as models improved, they not only did not need to be reminded of the Todo List but could find it limiting. Being sent reminders of the todo list made Claude think that it had to stick to the list instead of modifying it. We also saw Opus 4.5 also get much better at using subagents, but how could subagents coordinate on a shared Todo List?

Seeing this, we replaced TodoWrite with the Task Tool ([read more on Tasks here](https://x.com/trq212/status/2014480496013803643)). Whereas Todos were about keeping the model on track, Tasks were more about helping agents communicate with each other. Tasks could include dependencies, share updates across subagents and the model could alter and delete them.

As model capabilities increase, the tools that your models once needed might now be constraining them. It's important to constantly revisit previous assumptions on what tools are needed. This is also why it's useful to stick to a small set of models to support that have a fairly similar capabilities profile.

### Designing a Search Interface

A particularly important set of tools for Claude are the search tools that can be used to build its own context.

When Claude Code first came out, we used a RAG vector database to find context for Claude. While RAG was powerful and fast it required indexing and setup and could be fragile across a host of different environments. More importantly, Claude was given this context instead of finding the context itself.

But if Claude could search on the web, why not search your codebase? By giving Claude a Grep tool, we could let it search for files and build context itself.

This is a pattern we've seen as Claude gets smarter, it becomes increasingly good at building its context if it's given the right tools.

When we introduced Agent Skills we formalized the idea of progressive disclosure, which allows agents to incrementally discover relevant context through exploration.

Claude could read skill files and those files could then reference other files that the model could read recursively. In fact, a common use of skills is to add more search capabilities to Claude like giving it instructions on how to use an API or query a database.

Over the course of a year Claude went from not really being able to build its own context, to being able to do nested search across several layers of files to find the exact context it needed.

Progressive disclosure is now a common technique we use to add new functionality without adding a tool.

### Progressive Disclosure - The Claude Code Guide Agent

Claude Code currently has ~20 tools, and we are constantly asking ourselves if we need all of them. The bar to add a new tool is high, because this gives the model one more option to think about.

For example, we noticed that Claude did not know enough about how to use Claude Code. If you asked it how to add a MCP or what a slash command did, it would not be able to reply.

We could have put all of this information in the system prompt, but given that users rarely asked about this, it would have added context rot and interfered with Claude Code's main job: writing code.

Instead, we tried a form of progressive disclosure. We gave Claude a link to its docs which it could then load to search for more information. This worked but we found that Claude would load a lot of results into context to find the right answer when really all you needed was the answer.

So we built the Claude Code Guide subagent which Claude is prompted to call when you ask about itself, the subagent has extensive instructions on how to search docs well and what to return.

While this isn't perfect, Claude can still get confused when you ask it about how to set itself up, it is much better than it used to be! We were able to add things to Claude's action space without adding a tool.

#### An Art, not a Science

If you were hoping for a set of rigid rules on how to build your tools, unfortunately that is not this guide. Designing the tools for your models is as much an art as it is a science. It depends heavily on the model you're using, the goal of the agent and the environment it's operating in.

Experiment often, read your outputs, try new things. See like an agent.

---

## 中文译文

构建一个智能体外壳（harness）最难的部分之一，就是构造它的动作空间（action space）。

Claude 通过工具调用（Tool Calling）来行动，但在 Claude API 中，工具可以用 bash、skills，以及近期的代码执行等原语构造出很多种方式（关于 Claude API 上的程序化工具调用，可阅读 [@RLanceMartin 的新文章](https://x.com/RLanceMartin/status/2027450018513490419)）。

面对所有这些选项，你该如何为自己的智能体设计工具？你只需要一个像代码执行或 bash 这样的工具吗？如果你有 50 个工具，每个对应智能体可能遇到的一种使用场景呢？

为了让自己进入模型的心智，我习惯这样想象：有人丢给你一道很难的数学题。为了解出它，你会想要哪些工具？这取决于你自己的技能水平！

纸笔是最基本的，但你会被限制在手工计算里。用计算器更好，但你得知道怎么操作那些更高级的选项。最快、最有力的选择是一台计算机，但你必须知道怎么用它来编写并执行代码。

这是一个用于设计智能体的有用框架。你想给它的工具，应当贴合它自身的能力。但你怎么知道它的能力是什么？靠观察，读它的输出，做实验。你学会像智能体一样看。

以下是我们一边构建 Claude Code、一边观察 Claude 所学到的一些经验。

### 改进引导式提问与 AskUserQuestion 工具

![寻找最佳平衡点：没有结构（修改后的 markdown 输出，模型自由但杂乱，难以格式化）—— AskUserQuestion 工具（结构化且可组合，界面清晰）—— 过于僵化（ExitPlanTool 参数，计划已经成形，提问来得太晚）](https://pbs.twimg.com/media/HCLxg2JbsAA3Ag_.jpg)

在构建 AskUserQuestion 工具时，我们的目标是提升 Claude 提问的能力（通常称为引导式提问，elicitation）。

虽然 Claude 完全可以直接用纯文本提问，但我们发现回答这些问题似乎要多花不少时间。我们该如何降低这种摩擦，并提高用户与 Claude 之间沟通的带宽？

#### 尝试 #1 —— 修改 ExitPlanTool

我们最先尝试的做法，是给 ExitPlanTool 加一个参数，让它在计划之外还能带上一组问题。这是最容易实现的方案，却让 Claude 感到困惑——我们同时向它要一份计划，以及一组关于该计划的问题。如果用户的答案与计划所说的相冲突怎么办？Claude 是不是需要调用两次 ExitPlanTool？我们需要另一种思路。

（关于我们为什么要做 ExitPlanTool，可以读[那篇关于提示词缓存（prompt caching）的文章](https://x.com/trq212/status/2024574133011673516)）

#### 尝试 #2 —— 改变输出格式

接下来我们尝试修改 Claude 的输出指令，让它输出一份略作调整的 markdown 格式，专门用来提问。例如，我们可以要求它输出一系列以项目符号列出的问题，并把备选项放在方括号里。然后我们再把这些问题解析出来，渲染成给用户看的界面。

这是我们能做的一般性最强的改动，Claude 看起来也还算乐意按这种格式输出，但它并不稳定：Claude 会追加多余的句子、漏掉备选项，或者干脆换用另一种完全不同的格式。

#### 尝试 #3 —— AskUserQuestion 工具

![AskUserQuestion 工具的界面：一个多标签提示，询问「这个项目你偏好哪种编程范式？」，选项包括函数式、面向对象、过程式、混合式、自行输入，以及就此展开讨论](https://pbs.twimg.com/media/HCL0gcObkAA4tKt.jpg)

最终，我们落地为一个工具：Claude 可以在任何时刻调用它，但在 plan mode 下会特别提示它去调用。当这个工具被触发时，我们弹出一个模态框来展示问题，并在用户回答之前阻塞智能体的循环。

这个工具让我们能够向 Claude 索取结构化输出，也帮助我们确保 Claude 会给用户提供多个选项。它还给了用户组合这一功能的方式，例如在 Agent SDK 中调用它，或者在 skills 中引用它。

最重要的是，Claude 似乎很喜欢调用这个工具，我们发现它的输出效果也不错。再怎么精心设计的工具，如果 Claude 不理解该如何调用它，也是不管用的。

这是 Claude Code 中引导式提问的最终形态吗？我们不确定。正如下一个例子所示，对某个模型有效的东西，未必对另一个模型也是最优的。

### 随能力升级而更新 —— Tasks 与 Todos

![从 Todos 到 Tasks：一个带有已完成待办清单的单智能体，变成两个智能体（Agent A、Agent B）共享一张带依赖关系的任务图](https://pbs.twimg.com/media/HCLxrfXbEAUXwRV.jpg)

Claude Code 最初发布时，我们意识到模型需要一个 Todo 清单来让它保持在轨道上。Todos 可以在开始时写好，随着模型推进工作逐项勾选。为此我们给了 Claude 一个 TodoWrite 工具，它负责写入或更新 Todos，并把它们展示给用户。

但即便如此，我们也常常看到 Claude 忘记自己该做什么。为了应对这一点，我们每 5 轮插入一次系统提醒（system reminders），提醒 Claude 它的目标。

然而随着模型变强，它们不仅不再需要被提醒去看 Todo 清单，反而会觉得这是一种束缚。不断收到 Todo 清单的提醒，会让 Claude 以为自己必须严格照着清单走，而不是去修改它。我们还观察到 Opus 4.5 使用子智能体（subagent）的能力也大幅提升，但子智能体之间要如何就一份共享的 Todo 清单进行协调呢？

看到这些，我们用 Task 工具取代了 TodoWrite（[这里可以读到更多关于 Tasks 的内容](https://x.com/trq212/status/2014480496013803643)）。Todos 关乎的是让模型保持在轨道上，而 Tasks 更多是为了帮助智能体彼此沟通。Tasks 可以包含依赖关系，可以在子智能体之间共享进展，模型也可以修改和删除它们。

随着模型能力提升，那些曾经必需的模型工具，现在可能反而在束缚它们。不断重新审视「究竟需要哪些工具」这一既往假设，是很重要的。这也是为什么，只支持一小批能力画像比较接近的模型，会是有用的做法。

### 设计一套搜索接口

对 Claude 而言，有一组格外重要的工具，就是那些可以用来自己搭建上下文的搜索工具。

Claude Code 刚推出时，我们用的是一个 RAG 向量数据库来为 Claude 寻找上下文。RAG 固然强大又快速，但它需要建索引和做配置，而且在各种环境下都可能很脆弱。更重要的是，Claude 是被「给予」这些上下文的，而不是自己去找到它。

但如果 Claude 能在网上搜索，为什么不能搜你的代码库呢？给 Claude 一个 Grep 工具，我们就能让它自己搜索文件、自己搭建上下文。

这是一个我们见过的规律：随着 Claude 变聪明，只要给它合适的工具，它搭自己上下文的能力就越来越好。

在引入 Agent Skills 的时候，我们把「渐进式披露（progressive disclosure）」这个想法形式化了——它让智能体通过逐步探索来增量地发现相关上下文。

Claude 可以读取 skill 文件，而这些文件又可以引用其他文件，模型可以递归地读取它们。事实上，skills 的一个常见用途就是为 Claude 增加更多搜索能力，比如告诉它如何使用某个 API 或查询某个数据库。

在一年时间里，Claude 从「基本没法自己搭建上下文」，变成了「能够跨多层文件做嵌套搜索，找到它恰好需要的那部分上下文」。

渐进式披露如今已成为我们「不新增工具也能增加新功能」的常用手法。

### 渐进式披露 —— Claude Code Guide 子智能体

Claude Code 目前有大约 20 个工具，我们不断在问自己：真的都需要它们吗？新增一个工具的门槛很高，因为那等于给模型多一个需要考虑的选项。

举个例子，我们注意到 Claude 对「怎么用 Claude Code」了解得不够。如果问它「怎么加一个 MCP」或者「某个斜杠命令是干什么的」，它答不上来。

我们当然可以把所有这些信息塞进系统提示词（system prompt），但考虑到用户很少问这些，它会徒增上下文腐化（context rot），还会干扰 Claude Code 的本职工作：写代码。

于是我们尝试了一种渐进式披露的形式。我们给 Claude 一个指向其文档的链接，让它自己去加载并搜索更多信息。这确实有效，但我们发现 Claude 会把大量结果都装进上下文里，只为找到那个答案——而其实你需要的只是答案本身。

所以我们构建了 Claude Code Guide 子智能体：当用户询问 Claude Code 自身时，会提示 Claude 去调用它；这个子智能体配备了详尽的指令，告诉它如何高效地搜索文档、以及该返回什么。

虽然这还不完美，当你问 Claude 如何给自己做配置时，它仍然会犯迷糊，但已经比以前好得多了！我们得以在不新增工具的前提下，往 Claude 的动作空间（action space）里塞进更多东西。

#### 这是一门艺术，而非科学

如果你本来期待这里给出一套关于「如何构建工具」的僵硬规则，那很遗憾，这篇文章不是那个。给你的模型设计工具，既是科学也是艺术。这高度取决于你使用的模型、智能体的目标，以及它所处的环境。

多动手实验，读自己的输出，尝试新东西。像智能体一样看。

---

> 原文版权归原作者所有，翻译仅供学习交流。
