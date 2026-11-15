---
title: config_files.md 中文版
description: Claude Code 注入项目级配置文件的提示词——把 CLAUDE.md 等项目说明作为“代码库与用户指引”喉给模型。
---

# config_files.md 中文版

> 原文：raw/prompts/config_files.md ｜ 用途：Claude Code 注入项目级配置文件的提示词——把 CLAUDE.md 等项目说明作为"代码库与用户指引"喂给模型；此处示例是一份 todo 应用的项目说明文件。

## 原文（英文）

````markdown

Codebase and user instructions are shown below. Be sure to adhere to these instructions. IMPORTANT: These instructions OVERRIDE any default behavior and you MUST follow them exactly as written.

Contents of /Users/mihaileric/Documents/miscellaneous/claude-code-demystified/CLAUDE.md (project instructions, checked into the codebase):

# CLAUDE.md

## Project Overview

This is a simple todo/task tracker. The core is a Python CLI that lets users add, list, complete, and delete tasks (with priorities, due dates, and subtasks), with data persisted to a local JSON file. There are also web frontends: a FastAPI app (`api/`) and a TypeScript/Express app (`web/`).

## Project Structure

```
todo/
  cli.py      - Command-line interface and argument parsing
  models.py   - Task dataclass and Priority enum
  storage.py  - JSON file persistence layer
api/
  main.py     - FastAPI web app (Jinja2 templates) using the todo package
web/
  src/        - TypeScript Express app (EJS views in web/views)
```

## Running the Application

```bash
python -m todo add "Task title" [--due 2024-12-31] [--priority low|medium|high]
python -m todo list [--status all|pending|completed] [--priority ...] [--sort priority|created]
python -m todo done <task_id>
python -m todo delete <task_id> [--force]
python -m todo add-subtask <parent_id> "Subtask title"
python -m todo done-subtask <subtask_id>
python -m todo delete-subtask <subtask_id> [--force]
```

## Code Style

- Use type hints for function parameters and return values
- Use dataclasses for data models
- Keep functions focused and single-purpose
````

## 中文译文

````markdown

下面给出的是代码库说明与用户指引。务必遵守这些指引。重要：这些指引会 OVERRIDE（覆盖）任何默认行为，你 MUST（必须）严格按字面遵循。

/Users/mihaileric/Documents/miscellaneous/claude-code-demystified/CLAUDE.md 的内容（项目指引，已纳入代码库版本管理）：

# CLAUDE.md

## 项目概览

这是一个简单的 todo/任务追踪器。核心是一个 Python CLI，允许用户添加、列出、完成和删除任务（支持优先级、截止日期和子任务），数据持久化在一个本地 JSON 文件中。此外还有两个 Web 前端：一个 FastAPI 应用（`api/`）和一个 TypeScript/Express 应用（`web/`）。

## 项目结构

```
todo/
  cli.py      - 命令行界面与参数解析
  models.py   - Task dataclass 与 Priority 枚举
  storage.py  - JSON 文件持久化层
api/
  main.py     - FastAPI Web 应用（Jinja2 模板），使用 todo 包
web/
  src/        - TypeScript Express 应用（EJS 视图位于 web/views）
```

## 运行应用

```bash
python -m todo add "Task title" [--due 2024-12-31] [--priority low|medium|high]
python -m todo list [--status all|pending|completed] [--priority ...] [--sort priority|created]
python -m todo done <task_id>
python -m todo delete <task_id> [--force]
python -m todo add-subtask <parent_id> "Subtask title"
python -m todo done-subtask <subtask_id>
python -m todo delete-subtask <subtask_id> [--force]
```

## 代码风格

- 为函数的参数和返回值使用类型标注
- 数据模型使用 dataclass
- 保持函数职责聚焦、单一
````
