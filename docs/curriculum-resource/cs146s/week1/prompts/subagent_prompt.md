---
title: subagent_prompt.md 中文版
description: Claude Code 子智能体（subagent）任务书示例——一份完整的深度分析型任务提示词，规定分析范围、覆盖要点、禁止事项与交付格式。
---

# subagent_prompt.md 中文版

> 原文：raw/prompts/subagent_prompt.md ｜ 用途：Claude Code 的子智能体（subagent）任务书示例——一份完整的深度分析型任务提示词，规定分析范围、覆盖要点、禁止事项与交付格式。

## 原文（英文）

````markdown
Analyze the performance characteristics of a small todo app and return a findings report. Do NOT modify any file in the repo. Do NOT touch the real ~/.todo_tasks.json — for anything you run, use a temporary storage path (TaskStorage(Path(...)) accepts one) or set HOME to a temp dir. Put any benchmark scripts/data in this scratchpad: /private/tmp/claude-501/-Users-mihaileric-Documents-miscellaneous-claude-code-demystified/scratchpad/perf

Repo: /Users/mihaileric/Documents/miscellaneous/claude-code-demystified
- todo/models.py — Task dataclass (nested subtasks, recurrence), to_dict/from_dict, recursive get_subtask_by_id/remove_subtask with prefix-ID matching.
- todo/storage.py — TaskStorage: every operation does load_tasks() (read + json.loads + Task.from_dict for the whole file) then save_tasks() (serialize + write whole file, indent=2). No caching, no locking, non-atomic write_text. get_task_by_id etc. are linear scans.
- todo/cli.py — argparse CLI; each command constructs TaskStorage; some commands load the file more than once (e.g. cmd_done does get_task_by_id then complete_task; cmd_delete / cmd_add_subtask / cmd_done_subtask pre-lookup then mutate).
- api/main.py — FastAPI app with a module-level TaskStorage; async def handlers that call blocking file I/O; GET / loads all tasks and renders a Jinja2 template.
- web/src/app.ts, storage.ts — Express/TypeScript copy using fs.readFileSync/writeFileSync, same shared JSON file.

What to cover:
1. Algorithmic complexity of each operation (load/save per op, lookups, subtask recursion, filtering/sorting in list) — count file reads/writes per CLI command and per HTTP request.
2. Empirical measurements: benchmark representative ops (add, get_task_by_id, complete_task, list/filter, add_subtask) at e.g. 100 / 1k / 10k / 50k tasks, plus a nested-subtask case. Also measure CLI process startup (`python3 -m todo list` wall time vs. time in storage) and JSON file size growth. Keep total runtime reasonable (a few minutes max). Python only is fine; skip TS benchmarks unless cheap.
3. Concurrency & correctness under load: lost updates when the CLI, FastAPI, and Express write the same file concurrently (read-modify-write race), non-atomic writes / partial-file risk combined with load_tasks returning [] on JSONDecodeError (possible total data loss), blocking I/O inside async FastAPI handlers. Demonstrate the lost-update race with a small script if feasible.
4. Unbounded growth: completed tasks (including recurring-task history — each completion appends a new task) are never pruned.
5. Prioritized recommendations with estimated impact (e.g. atomic write via temp file + os.replace, file locking, single load per command, in-memory index/cache, compact JSON, archiving completed tasks, sync def handlers or threadpool in FastAPI, SQLite if scale matters). Note which matter at realistic personal-todo scale (<1k tasks) vs. only at large scale.

Return a concise markdown report: a summary table of key findings (severity, area, finding), a measurements table with actual numbers you observed (state machine/Python version), then detailed findings with file:line references, then prioritized recommendations. Clearly separate measured facts from inferences.
````

## 中文译文

````markdown
分析一个小型 todo 应用的性能特征，并返回一份发现报告。不要修改仓库中的任何文件。不要触碰真实的 ~/.todo_tasks.json——对于你要运行的一切，请使用临时存储路径（TaskStorage(Path(...)) 接受一个路径），或者把 HOME 设到一个临时目录。把任何基准测试脚本/数据放到这个 scratchpad 中：/private/tmp/claude-501/-Users-mihaileric-Documents-miscellaneous-claude-code-demystified/scratchpad/perf

仓库：/Users/mihaileric/Documents/miscellaneous/claude-code-demystified
- todo/models.py —— Task dataclass（嵌套子任务、重复规则）、to_dict/from_dict、带前缀 ID 匹配的递归 get_subtask_by_id/remove_subtask。
- todo/storage.py —— TaskStorage：每个操作都会先 load_tasks()（读取整个文件 + json.loads + 对全文件做 Task.from_dict），再 save_tasks()（序列化 + 以 indent=2 写回整个文件）。没有缓存、没有加锁，write_text 不是原子操作。get_task_by_id 等都是线性扫描。
- todo/cli.py —— 基于 argparse 的 CLI；每个命令都会构造 TaskStorage；有些命令会多次加载文件（例如 cmd_done 先调 get_task_by_id 再调 complete_task；cmd_delete / cmd_add_subtask / cmd_done_subtask 先查后改）。
- api/main.py —— FastAPI 应用，模块级持有一个 TaskStorage；用 async def 写的处理器却调用阻塞式文件 I/O；GET / 会加载全部任务并渲染一个 Jinja2 模板。
- web/src/app.ts、storage.ts —— Express/TypeScript 版本的实现，使用 fs.readFileSync/writeFileSync，与前面共用同一个 JSON 文件。

需要覆盖的内容：
1. 每个操作的算法复杂度（每次操作的 load/save、各类查找、子任务递归、list 中的过滤/排序）——统计每条 CLI 命令和每个 HTTP 请求各产生多少次文件读/写。
2. 实测数据：对代表性操作做基准测试（add、get_task_by_id、complete_task、list/filter、add_subtask），规模例如 100 / 1k / 10k / 50k 条任务，并额外覆盖一个嵌套子任务的场景。同时测量 CLI 进程启动开销（`python3 -m todo list` 的总耗时与花在 storage 上的耗时之比）以及 JSON 文件的体积增长。控制总运行时间在合理范围内（最多几分钟）。只用 Python 即可；除非成本极低，否则跳过 TS 基准测试。
3. 高负载下的并发性与正确性：CLI、FastAPI 和 Express 并发写同一个文件时的更新丢失（read-modify-write 竞态）、非原子写/文件残缺风险叠加 load_tasks 在 JSONDecodeError 时返回 []（可能导致数据全部丢失）、在 async FastAPI 处理器内部做阻塞式 I/O。如果可行，请用一个小脚本演示更新丢失的竞态。
4. 无界增长：已完成的任务（包括重复任务的历史——每完成一次就追加一条新任务）永远不会被清理。
5. 按优先级排列的改进建议，并给出预估影响（例如用临时文件 + os.replace 实现原子写、文件锁、每条命令只加载一次、内存索引/缓存、紧凑 JSON、归档已完成任务、在 FastAPI 中改用 sync def 处理器或线程池、如果规模真的重要则改用 SQLite）。请注明哪些建议在现实的个人 todo 规模（<1k 条任务）下就值得做，哪些只在大规模下才有意义。

返回一份简洁的 markdown 报告：先是关键发现的汇总表（严重程度、涉及领域、发现），然后是包含你实际观测到的数字的测量表（注明机器状态/Python 版本），再是带 file:line 引用的详细发现，最后是按优先级排列的建议。请把实测事实与推断明确区分开。
````
