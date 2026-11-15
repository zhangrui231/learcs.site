"""
Fall 2025 · Mon 9/29「Completed Exercise」参考实现 —— 中文注释版
=============================================================

这是第一周阅读材料 ① 配套视频《How to code Claude Code in ~200 lines of code》
的视频描述里给出的那份源码（Google Drive: 1YtpKFVG13DHyQ2i3HOtwyVJOV90nWeL2）。
原文保留在 ``../../raw/code/video-completed-exercise.py``。

它与 Fall 2026 周二 9/22 讲义的配套源码（``coding_agent_from_scratch.zh.py``）
是**同一主题的两份不同文件**：整体结构一致（工具注册表 → 注入提示词 →
解析工具调用 → agent loop），但 Fall 2025 这份更早、也更贴近视频里演示的版本，
差异主要有四处：

  1. 提示词占位符叫 ``{tool_list_repr}``（9/22 版是 ``{tool_list_str}``）；
  2. 用的是 Chat Completions 接口 ``chat.completions.create(model="gpt-5", ...)``，
     而不是 Responses 接口；
  3. 工具调用解析用 ``json.loads`` 要求整段 JSON 合法，9/22 版用
     ``raw_decode`` 允许 JSON 之后还有别的文字；
  4. ``resolve_abs_path`` 多了 ``file.py -> /Users/home/mihail/...`` 的示例注释，
     ``edit_file_tool`` 直接用 ``full_path`` 而不另建 ``Path`` 对象。

本文件在原版基础上补充中文注释与中文 docstring，**代码逻辑与原版逐句等价**，
仅有一处按兼容性要求调整（详见 ``get_full_system_prompt`` 处的注释）。

它演示了四个核心概念：

1. 工具注册表（TOOL_REGISTRY）
   把每个工具（函数）登记到一个 dict 里，键是工具名、值是函数对象。
   这张表既是"工具清单"的唯一来源，也是实际执行工具时的查表依据。

2. 函数签名注入提示词（get_tool_str_representation）
   不手写工具说明，而是用 inspect.signature() 自动把每个工具的函数签名拼进
   系统提示词，同时把工具的 docstring 当作它的描述（description）。
   于是新增一个工具只要往注册表里加一行，提示词会自动跟着更新——

3. 工具调用协议（extract_tool_invocations）
   模型不返回结构化的 tool_call，而是按约定输出单行文本：
       tool: TOOL_NAME({"arg": "value"})
   解析器把这种行还原成 (工具名, 参数 dict) 二元组，格式不合法的行直接忽略，
   不会中断整个循环。

4. 单循环 agent loop（run_coding_agent_loop）
   一个 while 循环：读用户输入 -> 调模型 -> 若模型请求了工具就执行工具、
   把结果以 tool_result(...) 的形式回灌进对话再调模型 -> 直到模型不再请求工具。
   "工具结果以 user 角色回灌对话"是这一版最关键的简化，也是一切编码智能体的
   通用做法：工具调用本身不进入对话历史，只有它的文本结果进入。

环境准备见本文件末尾的「使用说明」注释块。
"""

import inspect
import json
import os

from openai import OpenAI
from dotenv import load_dotenv
from pathlib import Path
from typing import Any, Dict, List, Tuple

# 从同目录（或当前目录）的 .env 文件加载环境变量，主要是 OPENAI_API_KEY。
load_dotenv()

openai_client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

# 系统提示词模板。{tool_list_repr} 是唯一需要替换的占位符，
# 由 get_full_system_prompt() 在运行时填入自动生成的工具清单。
# 注意 {{JSON_ARGS}} 里的双花括号：str.format() 会把它转义成 {JSON_ARGS}，
# 告诉模型"参数用 JSON 写"。
#
# 【译者注】原文此处写作 "Hear are the tools you can execute:"，
# "Hear" 疑为 "Here" 的笔误；为了与原版逐句等价，这里保留原样不作改动。
SYSTEM_PROMPT = """
You are a coding assistant whose goal it is to help us solve coding tasks. 
You have access to a series of tools you can execute. Hear are the tools you can execute:

{tool_list_repr}

When you want to use a tool, reply with exactly one line in the format: 'tool: TOOL_NAME({{JSON_ARGS}})' and nothing else.
Use compact single-line JSON with double quotes. After receiving a tool_result(...) message, continue the task.
If no tool is needed, respond normally.
"""

# 终端着色用的 ANSI 转义序列，让"你"和"助手"的发言在交互界面上区分开。
YOU_COLOR = "\u001b[94m"
ASSISTANT_COLOR = "\u001b[93m"
RESET_COLOR = "\u001b[0m"


def resolve_abs_path(path_str: str) -> Path:
    """把用户给的路径解析成绝对路径。

    :param path_str: 用户输入的路径（可能是相对路径或 ~ 开头的路径）。
    :return: 解析后的绝对 Path 对象。
    """
    # 原文的示例注释：file.py -> /Users/home/mihail/modern-software-dev-lectures/file.py
    path = Path(path_str).expanduser()
    if not path.is_absolute():
        path = (Path.cwd() / path).resolve()
    return path


def read_file_tool(filename: str) -> Dict[str, Any]:
    """
    获取用户提供文件的完整内容。
    :param filename: 要读取的文件名。
    :return: 包含文件完整内容的字典。
    """
    full_path = resolve_abs_path(filename)
    print(full_path)
    with open(str(full_path), "r") as f:
        content = f.read()
    return {
        "file_path": str(full_path),
        "content": content
    }


def list_files_tool(path: str) -> Dict[str, Any]:
    """
    列出用户提供目录下的文件。
    :param path: 要列出文件的目录路径。
    :return: 包含该目录下文件列表的字典。
    """
    full_path = resolve_abs_path(path)
    all_files = []
    for item in full_path.iterdir():
        all_files.append({
            "filename": item.name,
            "type": "file" if item.is_file() else "dir"
        })
    return {
        "path": str(full_path),
        "files": all_files
    }


def edit_file_tool(path: str, old_str: str, new_str: str) -> Dict[str, Any]:
    """
    把文件中 old_str 的第一次出现替换为 new_str；若 old_str 为空，则创建/覆盖该文件并写入 new_str。
    :param path: 要编辑的文件路径。
    :param old_str: 被替换掉的字符串。
    :param new_str: 用于替换的新字符串。
    :return: 包含文件路径与所执行操作的字典。
    """
    full_path = resolve_abs_path(path)
    if old_str == "":
        full_path.write_text(new_str, encoding="utf-8")
        return {
            "path": str(full_path),
            "action": "created_file"
        }
    original = full_path.read_text(encoding="utf-8")
    if original.find(old_str) == -1:
        return {
            "path": str(full_path),
            "action": "old_str not found"
        }
    edited = original.replace(old_str, new_str, 1)
    full_path.write_text(edited, encoding="utf-8")
    return {
        "path": str(full_path),
        "action": "edited"
    }


# 工具注册表：工具名 -> 工具函数。
# 它同时扮演两个角色：(1) 提示词里"工具清单"的数据源；(2) 运行时执行工具的查表依据。
TOOL_REGISTRY = {
    "read_file": read_file_tool,
    "list_files": list_files_tool,
    "edit_file": edit_file_tool
}


def get_tool_str_representation(tool_name: str) -> str:
    """把单个工具渲染成提示词里的一段文本描述。

    三段信息分别是：工具名、工具描述（取自 docstring）、函数签名（取自
    inspect.signature）。模型靠这三样东西才知道"该调用哪个工具、传什么参数"。

    :param tool_name: 注册表中的工具名。
    :return: 该工具的文本表示。
    """
    tool = TOOL_REGISTRY[tool_name]
    return f"""
    Name: {tool_name}
    Description: {tool.__doc__}
    Signature: {inspect.signature(tool)}
    """


def get_full_system_prompt():
    """拼装最终的系统提示词：SYSTEM_PROMPT 模板 + 自动生成的工具清单。

    遍历注册表里的每个工具，拼出 "TOOL\\n===..." 形式的条目，再用分隔线隔开，
    最后填进 SYSTEM_PROMPT 的 {tool_list_repr} 占位符。

    :return: 完整的系统提示词字符串。
    """
    tool_str_repr = ""
    for tool_name in TOOL_REGISTRY:
        tool_str_repr += "TOOL\n===" + get_tool_str_representation(tool_name)
        # 兼容 Python 3.9：原写法 f"\n{"="*15}\n" 在 f-string 的表达式部分用了
        # 与外层相同的双引号，而 PEP 701（Python 3.12）之前不允许复用引号，
        # Python 3.9 会直接报 SyntaxError: f-string: expecting '}'。
        # 这里改用单引号包裹外层字符串，输出结果与原版完全一致。
        tool_str_repr += f'\n{"="*15}\n'
    return SYSTEM_PROMPT.format(tool_list_repr=tool_str_repr)


def extract_tool_invocations(text: str) -> List[Tuple[str, Dict[str, Any]]]:
    """返回文本中 'tool: name({...})' 形式所请求的 (工具名, 参数) 列表。

    解析器要求 JSON 是单行的紧凑格式，并放在圆括号内。
    格式不合法的行会被静默跳过，不会打断主循环。

    :param text: 模型返回的原始文本。
    :return: (工具名, 参数字典) 组成的列表。
    """
    invocations = []
    for raw_line in text.splitlines():
        line = raw_line.strip()
        if not line.startswith("tool:"):
            continue
        # 约定的格式：tool: NAME(JSON)
        # 去掉 "tool:" 前缀后，先按第一个 "(" 切开工具名与参数部分，
        # 再把末尾的 ")" 去掉，剩下的整段必须是合法 JSON。
        try:
            after = line[len("tool:"):].strip()
            name, rest = after.split("(", 1)
            name = name.strip()
            if not rest.endswith(")"):
                continue
            json_str = rest[:-1].strip()
            args = json.loads(json_str)
            invocations.append((name, args))
        except Exception:
            # Ignore malformed tool requests
            continue
    return invocations


def execute_llm_call(conversation: List[Dict[str, str]]):
    """调用模型，返回助手这一轮的文本输出。

    :param conversation: 当前完整对话历史（包含系统/用户提示词）。
    :return: 模型返回的文本。
    """
    response = openai_client.chat.completions.create(
        model="gpt-5",
        messages=conversation,
        max_completion_tokens=2000
    )
    return response.choices[0].message.content


def run_coding_agent_loop():
    """主循环：一个人机交互的 agent loop。

    外层循环负责收用户输入；内层循环负责"调模型 -> 若有工具调用则执行工具 ->
    把结果回灌对话 -> 再调模型"，直到模型不再请求工具、给出最终答复为止。
    """
    # 对话历史的第一条是 system 角色的系统提示词（含工具清单）。
    conversation = [{
        "role": "system",
        "content": get_full_system_prompt()
    }]
    while True:
        try:
            user_input = input(f"{YOU_COLOR}You:{RESET_COLOR}:")
        except (KeyboardInterrupt, EOFError):
            break
        conversation.append({
            "role": "user",
            "content": user_input.strip()
        })
        # 内层 agent loop：模型还可以连续请求多次工具。
        while True:
            assistant_response = execute_llm_call(conversation)
            # 用协议解析器检查这一轮里有没有 "tool: NAME(JSON)" 请求。
            tool_invocations = extract_tool_invocations(assistant_response)
            if not tool_invocations:
                # 没有工具调用 => 这是模型的最终答复，打印并结束本轮。
                print(f"{ASSISTANT_COLOR}Assistant:{RESET_COLOR}: {assistant_response}")
                conversation.append({
                    "role": "assistant",
                    "content": assistant_response
                })
                break
            for name, args in tool_invocations:
                # 从注册表里取出工具函数，按工具名分派不同的参数顺序。
                tool = TOOL_REGISTRY[name]
                resp = ""
                print(name, args)
                if name == "read_file":
                    resp = tool(args.get("filename", "."))
                elif name == "list_files":
                    resp = tool(args.get("path", "."))
                elif name == "edit_file":
                    resp = tool(args.get("path", "."),
                                args.get("old_str", ""),
                                args.get("new_str", ""))
                # 工具结果以 user 角色回灌对话，格式为 tool_result(<JSON>)。
                # 模型下一轮就会读到这条消息，从而知道工具执行出了什么结果。
                conversation.append({
                    "role": "user",
                    "content": f"tool_result({json.dumps(resp)})"
                })


if __name__ == "__main__":
    run_coding_agent_loop()


# ============================================================================
# 使用说明
# ============================================================================
# 1. 安装依赖：
#        pip install openai python-dotenv
#
# 2. 配置 API Key（在项目根目录建一个 .env 文件，或直接导出环境变量）：
#        OPENAI_API_KEY=sk-...
#    本脚本用 python-dotenv 的 load_dotenv() 读取 .env，因此 .env 需与脚本
#    放在同一目录下最稳妥。
#
# 3. 运行：
#        python video_completed_exercise.zh.py
#
# 4. 交互方式：
#    - 直接输入自然语言需求，回车发送。
#    - 模型需要用工具时，会输出 "tool: 工具名({...})" 这样的单行协议，
#      脚本会自动解析、执行工具，并把 tool_result(...) 回灌给模型，
#      你在终端上看到的就是模型这一轮的完整回复。
#    - 结束程序：Ctrl+C 或 Ctrl+D（EOF）。
#
# 5. 注意：
#    - 模型名硬编码在 execute_llm_call() 里（model="gpt-5"，Chat Completions 接口），
#      如需换成别的模型请自行修改该行。
#    - 这是教学用最小实现，工具只有 read_file / list_files / edit_file 三个，
#      没有权限控制、没有沙箱、没有重试与错误处理，请勿在重要目录上直接使用。
# ============================================================================
