---
title: tool_list.md 中文版
description: Claude Code 内置工具清单——按类别列出文件读写、Shell、搜索与代码智能体、Agent、计划与隔离、调度、Artifacts、MCP 资源、交互、设计与评审等工具。
---

# tool_list.md 中文版

> 原文：raw/prompts/tool_list.md ｜ 用途：Claude Code 内置工具清单——按类别列出文件读写、Shell、搜索与代码智能体、Agent、计划与隔离、调度、Artifacts、MCP 资源、交互、设计与评审等工具及其一句话说明。

## 原文（英文）

````markdown
# Built-in tools

## Files

- **Read** — Read a local file, image, or PDF.
- **Edit** — Replace an exact string in a file.
- **Write** — Create a file or fully overwrite an existing one.
- **NotebookEdit** — Replace, insert, or delete a cell in a Jupyter notebook.

## Shell

- **Bash** — Run a shell command and return its output.
- **Monitor** — Stream events from a long-running background script.

## Search and code intelligence

- **WebSearch** — Search the web and return result titles and URLs.
- **WebFetch** — Fetch a URL and answer a prompt against the page.
- **LSP** — Query a language server for definitions, references, hover info, and symbols.

## Agents

- **Agent** — Spawn a subagent for complex, parallel, or delegated work.
- **ListAgents** — List agents this session can message.
- **SendMessage** — Send a message to another agent.
- **TaskStop** — Stop a running background task or agent.
- **Workflow** — Run a multi-agent workflow script in the background.

## Planning and isolation

- **EnterPlanMode** — Switch into plan mode before a non-trivial implementation.
- **ExitPlanMode** — Submit the written plan for user approval.
- **EnterWorktree** — Create an isolated git worktree and switch the session into it.
- **ExitWorktree** — Leave the session worktree and return to the original directory.

## Scheduling

- **CronCreate** — Schedule a one-shot or recurring prompt.
- **CronDelete** — Cancel a cron job scheduled in this session.
- **CronList** — List cron jobs scheduled in this session.
- **ScheduleWakeup** — Schedule the next self-paced wakeup in `/loop` dynamic mode.
- **RemoteTrigger** — Create, update, run, and inspect claude.ai remote triggers.

## Artifacts

- **Artifact** — Publish an HTML page as a private claude.ai artifact.
- **ArtifactComments** — Read and reply to comment threads on a published artifact.
- **ArtifactData** — Read and write a published artifact’s shared database.

## MCP resources

- **ListMcpResourcesTool** — List resources exposed by configured MCP servers.
- **ReadMcpResourceTool** — Read one MCP resource by server name and URI.
- **ReadMcpResourceDirTool** — List the direct children of an MCP directory resource.

## Interaction

- **AskUserQuestion** — Ask the user a blocking decision with selectable options.
- **Skill** — Load a packaged skill’s instructions for the current task.
- **PushNotification** — Send a desktop notification, and a phone push if Remote Control is connected.
- **SendFeedback** — Draft feedback about a Claude Code product or model issue.
- **EndConversation** — Close the conversation after sustained abuse or an explicit demo request.

## Design and review

- **DesignSync** — Sync a local component library with a claude.ai design-system project.
- **ReportFindings** — Submit typed code-review findings for the host UI.
````

## 中文译文

````markdown
# 内置工具

## 文件

- **Read** — 读取本地文件、图片或 PDF。
- **Edit** — 替换文件中的某段精确文本。
- **Write** — 创建文件，或完全覆盖一个已存在的文件。
- **NotebookEdit** — 替换、插入或删除 Jupyter notebook 中的某个 cell。

## Shell

- **Bash** — 运行一条 shell 命令并返回其输出。
- **Monitor** — 流式获取长时间运行的后台脚本所产生的事件。

## 搜索与代码智能

- **WebSearch** — 搜索网络，返回结果的标题与 URL。
- **WebFetch** — 抓取一个 URL，并针对该页面回答一个提示词。
- **LSP** — 向语言服务器查询定义、引用、悬停信息与符号。

## Agents

- **Agent** — 派生一个子智能体（subagent），处理复杂、并行或可委派的工作。
- **ListAgents** — 列出本会话可以发消息的智能体。
- **SendMessage** — 向另一个智能体发送消息。
- **TaskStop** — 停止一个正在运行的后台任务或智能体。
- **Workflow** — 在后台运行一个多智能体工作流脚本。

## 计划与隔离

- **EnterPlanMode** — 在进行非平凡的实现工作之前切换到计划模式。
- **ExitPlanMode** — 提交写好的计划，等待用户批准。
- **EnterWorktree** — 创建一个隔离的 git worktree，并把会话切换进去。
- **ExitWorktree** — 离开当前会话的 worktree，返回原来的目录。

## 调度

- **CronCreate** — 调度一条一次性或周期性的提示词。
- **CronDelete** — 取消本会话中已调度的 cron 任务。
- **CronList** — 列出本会话中已调度的 cron 任务。
- **ScheduleWakeup** — 在 `/loop` 动态模式下安排下一次自发唤醒。
- **RemoteTrigger** — 创建、更新、运行并查看 claude.ai 的远程触发器。

## Artifacts

- **Artifact** — 把一个 HTML 页面发布为私有的 claude.ai artifact。
- **ArtifactComments** — 读取并回复已发布 artifact 上的评论会话。
- **ArtifactData** — 读写已发布 artifact 的共享数据库。

## MCP 资源

- **ListMcpResourcesTool** — 列出已配置的 MCP 服务器所暴露的资源。
- **ReadMcpResourceTool** — 按服务器名和 URI 读取单个 MCP 资源。
- **ReadMcpResourceDirTool** — 列出某个 MCP 目录资源的直接子项。

## 交互

- **AskUserQuestion** — 向用户提出一个会阻塞流程的决策，并给出可选项。
- **Skill** — 为当前任务加载某个打包 skill 的说明。
- **PushNotification** — 发送桌面通知；如果已连接 Remote Control，则同时发送手机推送。
- **SendFeedback** — 就 Claude Code 产品或模型问题起草反馈意见。
- **EndConversation** — 在持续滥用或用户明确要求演示结束后关闭对话。

## 设计与评审

- **DesignSync** — 把本地组件库与 claude.ai 设计系统项目同步。
- **ReportFindings** — 提交结构化的代码评审发现，供宿主 UI 展示。
````
