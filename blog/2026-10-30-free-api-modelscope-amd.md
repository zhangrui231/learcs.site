---
slug: free-llm-api-platforms
title: 10 个免费大模型 API 平台接入指南
authors: Learncs
tags: [免费API, LLM, ModelScope, AMD, NVIDIA, OrcaRouter, UnoRouter, Agnes, Token Harbor, 云知声, APInex]
description: OrcaRouter、Agnes AI、ModelScope、AMD Token Factory、NVIDIA、UnoRouter、Token Harbor、云知声、APInex 等 10 个免费大模型 API 平台的详细接入文档，包含 Base URL、认证方式、免费额度、模型列表、代码示例及稳定性分析。
---

# 10 个免费大模型 API 平台接入指南

:::info
本文整理了 10 个免费大模型 API 平台的接入方式，包含 Base URL、认证方式、免费额度、可用模型、代码示例及稳定性边界。各平台的 Base URL 直接写明应填的字符串，不使用"裸域名/裸主机"等行话。
:::

---

## 一、OrcaRouter

官网 / 文档：https://www.orcarouter.ai ｜ https://docs.orcarouter.ai

### Base URL

分两种情况，取决于你的客户端会不会自己拼接 `/v1/chat/completions`。

**情况 A：客户端会自动拼接路径**（如 Cherry Studio）

只填到域名，**不带 `/v1`**：

```text
https://api.orcarouter.ai
```

Cherry Studio 官方文档就是这么要求的，已实测通过。如果填成 `https://api.orcarouter.ai/v1`，客户端再拼一次 `/v1/chat/completions`，实际请求变成 `/v1/v1/chat/completions`，直接 404。

**情况 B：用 OpenAI SDK 或自己写代码发请求**

填完整的 `/v1` 前缀：

```text
https://api.orcarouter.ai/v1
```

因为 SDK 只会在你给的 `base_url` 后面拼 `/chat/completions`，不会自动补 `/v1`。

:::tip 判断方法
看客户端 Base URL 输入框旁边有没有"不要带 /v1"或"会自动补全路径"的提示。有提示就用情况 A，没有就用情况 B。Anthropic SDK 填 `https://api.orcarouter.ai`，同样不带 `/v1`。
:::

### 认证

请求头 `Authorization: Bearer sk-orca-...`。

### 免费模型识别

免费模型 ID 以 **`-free` 后缀**结尾。它们不是单独的"免费产品"，而是**价格标签为 $0 的普通目录模型**——权重和能力与对应的付费版本完全相同，调用不触碰钱包，**代价是换取较低的吞吐**。

:::warning 关键规则
`deepseek/deepseek-v4-flash` 和 `deepseek/deepseek-v4-flash-free` 是同一个模型的两个定价版本。**去掉 `-free` 不会报错，但会走付费计费。** 脚本判断时应检查 pricing 块（单次请求价格为 $0），而不是只看名字。
:::

### 可用模型介绍

OrcaRouter 追踪约 **91 个**模型，覆盖 OpenAI、Anthropic、Google、DeepSeek、Qwen、Zhipu AI、腾讯、Meta 等厂商。免费阵容**随容量动态换入换出**，官方不在文档页固定列举，当前可观察到的代表性免费模型包括：

- `z-ai/glm-5.3-flash` —— 输入/输出均为 $0，1.0M 上下文
- `deepseek/deepseek-v4-flash-free` —— DeepSeek V4 Flash 免费版，1.0M 上下文
- `qwen/qwen3.8-27b-free` —— Qwen3.8 27B 开放权重模型
- `tencent/hy4-preview`（限时免费）—— 腾讯 Hy4 预览版，1M 上下文
- `Union Alpha` —— 256K 上下文的 stealth 模型，2026 年 9 月起在免费层提供
- `orcarouter/free` —— 内置路由器，按请求难度在免费池中自动调度，不消耗付费额度

:::note
模型会更换。实时免费清单通过以下端点获取（**匿名可调，不需要 API Key**）：

```text
GET https://api.orcarouter.ai/api/free-package/public
```

返回当前免费 ID、对应付费模型，以及 `free_tier.tiers` 中的 RPM / RPD 分层数据。
:::

### 免费限制的结构

OrcaRouter 的免费限制是**分层且动态**的：RPM / RPD 在 `/api/free-package/public` 中实时公布；从未充值过的账户被故意分配较小的日额度，累计付费达到阈值后日预算显著放大（生涯累计，充值一次即永久停留在对应层级）；最低层级还存在**不公开的单请求 prompt token 上限**，长文档或完整对话历史可能超限。

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.orcarouter.ai/v1",
    api_key="sk-orca-你的密钥",
)

resp = client.chat.completions.create(
    model="deepseek/deepseek-v4-flash-free",  # 必须带 -free
    messages=[{"role": "user", "content": "Hello"}],
)
```

### 稳定性边界

免费池是**尽力而为的吞吐**，不是保证。适合原型验证和低频测试，不适合要求稳定响应的生产流量。

---

## 二、Agnes AI（国际站 + 中国站）

Agnes AI 的 Flash 系列文本、图像、视频模型目前免费，**不设总 Token 总量上限，只受 RPM 限制**。两个站点是**独立主机、独立 API Key，互不通用**——中国站 Key 调国际站主机返回 401。

### 2.1 国际站

- 官网：https://www.agnes-ai.com
- 平台（获取 Key）：https://platform.agnes-ai.com
- **Base URL**：`https://apihub.agnes-ai.com/v1`

### 2.2 中国站

- 官网 / 平台：https://agnes-ai.cn ｜ https://platform.agnes-ai.cn
- **Base URL**：`https://api.agnes-ai.cn/v1`

### 认证（两站一致）

`Authorization: Bearer YOUR_API_KEY`。

### 当前 RPM 限制

Agnes 官方 FAQ 确认，因运营策略调整，**免费 / 默认用户的文本模型 RPM 已统一下调 50%**，2026-09-23 生效。当前限额：

| 模型类型 | 免费 / 默认用户 RPM |
|---|---|
| **文本模型** | **10 RPM** |
| **图像模型** | 按分辨率分档，分辨率越高 RPM 越低 |
| **视频模型** | **1 RPM** |

免费用户**只受 RPM 限制**，没有 Token Plan 的订阅总量配额。

### 可用模型介绍

**所有 Flash 系列模型（文本 / 图像 / 视频）目前免费**，仅 Pro 推理系列和部分新版本视频模型为付费。

**文本**

- `agnes-2.0-flash` —— 兼容旧版，基础免费文本模型
- `agnes-2.5-flash`
- `agnes-3.0-flash`

**图像**

- `agnes-image-2.0-flash`
- `agnes-image-2.1-flash` —— 推荐免费图像生成版本
- `agnes-image-2.5-flash` —— 最新一代，当前免费

**视频**

- `agnes-video-v2.0` —— 基础免费视频模型
- `agnes-video-2.5-flash` —— 默认视频模型，限时免费

:::note
模型会更换：免费阵容以 Flash 系列为核心，Pro 系列和部分新版本视频模型已转为付费。免费模型列表可能随版本迭代调整，调用前建议通过对应站点的模型目录确认可用性。
:::

### 接口路径

- 文本：`/chat/completions`、`/responses`、`/messages`
- 图像：`/images/generations`
- 视频：`/videos`

### 最小示例（中国站）

```bash
curl https://api.agnes-ai.cn/v1/chat/completions \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "model": "agnes-2.5-flash",
    "messages": [{"role": "user", "content": "你好"}]
  }'
```

### 稳定性边界

文本 10 RPM、视频 1 RPM 的限制意味着只适合**低频验证**。多模态能力验证是它的主要价值，不适合任何需要吞吐的场景。

---

## 三、ModelScope（魔搭）

官网：https://modelscope.cn

### Base URL

OpenAI 兼容协议用：

```text
https://api-inference.modelscope.cn/v1
```

如果用 Anthropic 协议（`/v1/messages`），只填到域名，**不带 `/v1`**：

```text
https://api-inference.modelscope.cn
```

Anthropic SDK 会自己补 `/v1/messages`，多写一个 `/v1` 会变成 `/v1/v1/messages`，报 404。网上流传的 `/compatible-mode/v1/` 写法实测返回 404，不要用。

### 认证

1. 注册 / 登录，进入 `modelscope.cn/my/myaccesstoken` 创建访问令牌，格式 `ms-...`。
2. 请求头 `Authorization: Bearer ms-...`。
3. **必须绑定阿里云账号并完成实名认证**，否则接口直接报错。

### 免费策略（魔粒计费）

ModelScope 免费层采用**魔粒（magic-grain）计费**：

- **每日 250 魔粒**（注册登录 **+200** / 天，绑定阿里云 **+50** / 天）。
- **当天有效，用完只能等明天，不累积**。
- **主流模型约 2 魔粒 / 次**，因此**每日约 125 次调用**是更贴近实际的参考值。
- 不同模型单次消耗不同：轻量模型约 0.5 魔粒 / 次，旗舰 / 大模型更高，"大模型几把就花光"。

以 GLM-5.2 为例，一次调用扣 2 魔粒，DeepSeek、GLM、Kimi 等常用模型也基本是 2 魔粒 / 次。

### 可用模型介绍

API-Inference 当前有约 **50 个**可走 API 的开源模型，覆盖 Qwen、GLM、DeepSeek、Kimi、MiniMax 等主流国模，以及文生图、语音识别 / 合成、Embedding。

**文本 / 推理**

- `Qwen/Qwen3.5-397B-A17B` —— 262K 上下文，旗舰级 Qwen 模型
- `ZhipuAI/GLM-5.2` —— 1M 上下文，主力免费模型（2 魔粒 / 次）
- `deepseek-ai/DeepSeek-V4.1-Flash` —— 1M 上下文
- `MiniMax/MiniMax-M3` —— 1M 上下文
- `Kimi` 系列 —— 长上下文

**多模态 / 其他**

- `Qwen/Qwen3-VL-235B-A22B-Instruct` —— 视觉语言理解
- 文生图、语音识别、语音合成、Embedding 均有覆盖

:::note
模型会更换。API-Inference 的模型池是动态的，接口匿名可查，可用模型可在模型库 → 支持体验 → 勾选"推理 API-Inference"中查看。模型名**必须带组织前缀的完整名称**，不能只写 `GLM-5.2`。
:::

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api-inference.modelscope.cn/v1",
    api_key="ms-你的Token",
)

resp = client.chat.completions.create(
    model="ZhipuAI/GLM-5.2",
    messages=[{"role": "user", "content": "你好"}],
)

print(resp.choices[0].message.content)
```

### 稳定性边界

官方定位为**体验与原型验证**，没有并发和 SLA 承诺。250 魔粒 / 天对高频短请求消耗极快，适合个人学习、小项目调试、应急备选。

---

## 四、AMD Radeon Token Factory

入口：https://developer.amd.com.cn/radeon/tokenfactory

Token Factory 仅在中国站提供，底层跑在 AMD ROCm GPU 上。调用公共免费模型**不需要启动 GPU 实例**，返回的 points 仅用于追踪每日额度消耗，**不是账单收费**。

### Base URL

```text
https://developer.amd.com.cn/radeon/api/v1
```

同时支持 Anthropic 协议（`/v1/messages` + `x-api-key`）。**同一个 API Key 可调用所有免费模型**，切换只需改 `model` 字段。

### 认证

邮箱或手机号验证码登录（免绑卡、免海外号），验证后自动签发 **`rc-` 开头的 API Key**，请求头 `Authorization: Bearer rc-...`。

### 免费额度（存在账户分层，多数账户约 $1/天）

AMD 的免费额度**并非统一的 $10/天**，存在账户分层和口径差异：

- **多数账户当前约为 $1/天**。npm 包实测记录显示，当前账户示例为**每日 1.000000 pts、RPM 20**。
- **部分账户或早期口径为约 $10/天**。2026 年 9 月的公告仍写"每日约 10 美元"，社区也有"最早每天 10 刀，用的人太多了所以砍了"的反馈。$10 的来源确实存在，但**不能作为通用预期**。
- Dedicated Model APIs 使用自有 credits，与公共免费额度是两套体系。

免费额度**每日重置**。具体额度以 **Token Factory 控制台 → Model Usage** 实时显示为准。

### 限速

免费端点的速率约束以控制台实时显示为准。当前更保守、更常见的记录是**约 20 RPM**；社区另有 30 次/分钟/Key、并发 5–8 的记录，可能对应不同时期或不同层级。

### 可用模型介绍

当前 Public Free Model APIs 的核心免费模型包括：

| 模型 | 类型 | 上下文 | 说明 |
|---|---|---|---|
| **DeepSeek-V4.1-Flash** | VLM（文本 + 图像） | **1M** | 适合长文档、代码、推理 |
| **GLM-5.3-Flash** | LLM（文本） | 256K | 通用高性能 |
| **Qwen3.8-Flash-Next** | VLM（文本 + 图像） | 256K | MoE 架构 |
| **Qwen3.8-27B** | VLM（文本 + 图像） | 256K | 开放权重 |
| **MiniCPM5-2B** | LLM（文本） | 128K | 轻量 |
| **MinerU2.5-Pro** | Limited Free | 128K | OCR / 文档理解 |

:::note
模型会更换。`DeepSeek-V4-Flash-0731` 当前 API 返回 `model_not_found`，已从白名单移除，但 AMD 页面历史列表中可能仍显示该模型。部分带 Vision 能力的模型为**限时免费**，可能随时调整。调用前建议通过 `GET /v1/models` 确认当前可用的模型 ID。
:::

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://developer.amd.com.cn/radeon/api/v1",
    api_key="rc-你的密钥",
)

resp = client.chat.completions.create(
    model="DeepSeek-V4.1-Flash",
    messages=[{"role": "user", "content": "用一句话打个招呼。"}],
)

print(resp.choices[0].message.content)
```

### 稳定性边界

AMD 免费 API **适合测试，不适合要求稳定性的生产环境**。$1/天额度小，RPM 约 20，并发低。它的独特价值在于**百万级上下文（DeepSeek-V4.1-Flash 1M）的国内免费测试通道**，仅限验证和低频调用。

---

## 五、NVIDIA build.nvidia.com

平台：https://build.nvidia.com/models

### Base URL

```text
https://integrate.api.nvidia.com/v1
```

### 认证

1. 在 build.nvidia.com 注册 / 登录（无需信用卡）。
2. 头像 → API Keys → 生成，格式 `nvapi-...`。
3. 请求头 `Authorization: Bearer nvapi-...`。

### 免费政策（以速率限制为核心，无 per-token 计费）

build.nvidia.com 上**所有模型均可免费用于原型开发**。免费层的核心限制是**速率限制**，**大多数模型约 40 RPM**，且**不按 Token 数量计费**（"no per-token billing"）。速率限制按请求数计算，长提示词和长回答不会被额外惩罚。个人实际速率限制显示在控制台右上角。

:::note
NVIDIA 当前免费层的约束是速率（约 40 RPM），而不是一个需要精打细算的、会耗尽的点数池。以控制台显示的实时速率限制为准。
:::

### 可用模型介绍

NVIDIA NIM 提供 **100+ 模型**的免费 OpenAI 兼容 API，覆盖 Nemotron、Llama、Mistral、Qwen、DeepSeek 等主要 open-weight 系列。

**NVIDIA Nemotron 系列**

- `nvidia/nemotron-3.5-bolt-e4b` —— 轻量快速，支持思考模式
- `nvidia/nemotron-3.5-super-vl-120b-a12b` —— 视觉语言推理 + 工具调用
- `nvidia/nemotron-3-nano-30b-a3b` —— 更小、更快的 Nano 版本

**第三方 open-weight 模型**

- `mistralai/mistral-large-4` —— MoE 架构，支持文本 + 图像
- `deepseek-ai/deepseek-v4.1-flash` —— 552B MoE / 8B 激活，原生多模态
- `meta/muse-glimmer-30b` —— 多模态推理，原生工具调用

**其他模态**

- FLUX 3 Image Klein（图像生成 / 编辑）
- 多模态 Embedding / Reranking 模型

:::note
模型会更换。NVIDIA 的模型目录持续更新，页面上的 **"Free Endpoint" 标签**是判断免费可用性的直接依据，调用前以该标签为准。
:::

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://integrate.api.nvidia.com/v1",
    api_key="nvapi-你的密钥",
)

resp = client.chat.completions.create(
    model="nvidia/nemotron-3.5-bolt-e4b",
    messages=[{"role": "user", "content": "Hello"}],
    extra_body={"chat_template_kwargs": {"enable_thinking": True}},
)
```

### 稳定性边界

40 RPM 对个人原型验证足够，对生产流量远远不够。达到速率上限后应转向 partner endpoints 或本地 NIM 部署。

---

## 六、UnoRouter

平台：https://unorouter.com/en/models

### Base URL

OpenAI 兼容协议用：

```text
https://api.unorouter.com/v1
```

如果用 Claude Code 或 Gemini CLI 这类**会自动拼接完整路径的原生协议客户端**，只填到域名，**不带 `/v1`**：

```text
https://api.unorouter.com
```

这些客户端会自己拼 `/v1/messages` 或对应路径，多写 `/v1` 会导致路径重复。

### 认证

请求头 `Authorization: Bearer YOUR_API_KEY`。内置聊天功能在免费模型上可无 Key 使用，但 API 请求需要 Key。

### 免费模型识别

模型 ID 以 **`:free` 后缀**结尾的即为免费，费用为零。免费模型运行在**共享池**上，有**按模型计的轻量速率限制**。

### 可用模型介绍

UnoRouter 聚合了**约 50 个上游提供商、130+ 个免费模型**，来源包括 NVIDIA NIM、Cloudflare Workers AI、Gemini、Mistral、Z.ai、ModelScope 等，以及社区网络。代表性免费模型：

**GLM 系列**

- `glm-5.2:free` —— 1M 上下文
- `glm-5.2-search:free`、`glm-5.2-think-search:free` —— 带搜索 / 推理的变体
- `glm-5.3:free`

**DeepSeek 系列**

- `deepseek-v4-flash:free`
- `deepseek-v4-pro:free`

**Qwen 系列**

- `qwen3.5-397b-a17b:free`
- `qwen-3.8-27b:free`

**NVIDIA Nemotron**

- `nemotron-3-ultra-550b-a55b:free`

**其他**

- `gpt-oss-120b:free`、Gemini 系列、MiniMax 系列、Llama 系列，以及**免费图像和音频模型**

:::note
模型会更换。免费池是**尽力而为的吞吐**，"早上还能用的免费 Key，下午就可能被耗尽"。130+ 免费模型的存在意味着可以在多个 `:free` 模型之间轮换，但单个模型的可用性会动态变化。
:::

### 免费限制

**每个免费模型、每位用户约 1 次/分钟**。超出返回 **HTTP 429 + `Retry-After` 头**；池子耗尽时返回明确的 "all providers busy" 错误并自动恢复。这是 UnoRouter 自己加的限速，独立于上游的 429。

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.unorouter.com/v1",
    api_key="YOUR_API_KEY",
)

resp = client.chat.completions.create(
    model="gpt-oss-120b:free",
    messages=[{"role": "user", "content": "Hello!"}],
)
```

### 稳定性边界

1 RPM / 模型的限制极低，但 130+ 免费模型允许**在多个 `:free` 模型之间轮换**来摊薄单点限制。适合聚合广度的对比测试，不适合任何单模型吞吐场景。

---

## 八、Token Harbor

平台：https://tokenharbor.ai ｜ 文档：https://tokenharbor.ai/docs ｜ 免费模型目录：https://tokenharbor.ai/models?category=free

Token Harbor 是一个聚合网关，一个 API Key、一个余额即可路由到所有支持的模型。同时兼容 OpenAI 和 Anthropic 协议，支持 Claude Code、Cursor、Codex 等主流 Agent 工具一键接入。内置 **TH-Rudder** 免费聊天功能，无需 Key 即可在网页端使用。

### Base URL

**情况 A：客户端会自动拼接路径**（如 Claude Code、Cherry Studio）

只填到域名，**不带 `/v1`**：

```text
https://tokenharbor.ai
```

Anthropic SDK 同样填 `https://tokenharbor.ai`，SDK 会自行拼接 `/v1/messages`。

**情况 B：用 OpenAI SDK 或自己写代码发请求**

填完整的 `/v1` 前缀：

```text
https://tokenharbor.ai/v1
```

### 认证

1. 注册 / 登录 Token Harbor，进入 Dashboard → API Keys 创建 Key。
2. Key 格式为 `thk_live_...`。
3. 请求头：`Authorization: Bearer thk_live_...`（Anthropic 协议也可用 `x-api-key`）。

### 免费模型识别

免费模型 ID 以 **`:free` 后缀**结尾，价格为 $0。当前免费模型包括：

- `mimo-v2.6-flash:free` —— Xiaomi MiMo V2.6 Flash，1.05M 上下文（128K 输出）
- `deepseek-v4.1-flash:free` —— DeepSeek V4.1 Flash，1.05M 上下文（128K 输出）

:::note
模型会更换。实时免费清单通过 https://tokenharbor.ai/models?category=free 查看。免费模型没有额外的单模型限速，只受账户级限制约束。
:::

### 免费限制

免费账户的速率约束：

| 限制维度 | 免费账户 |
|---|---|
| **请求速率** | **60 次/分钟**，1,800 次/小时（每账户） |
| **IP 级速率** | 100 次/分钟，3,000 次/小时 |
| **图像生成** | 10 次/分钟，150 次/小时 |
| **请求大小** | **4 MB**（付费账户 100 MB） |
| **并发** | 无限制 |

超出返回 HTTP `429` + `Retry-After` 头。充值或订阅 Pass 后，**请求速率限制完全解除**。

### 付费与奖励机制

Token Harbor 采用**按 Token 计费**模式，不设订阅总量配额。免费模型价格为 $0；付费模型按 per-token 实时定价。充值后可解锁更高请求大小上限（100 MB）和无限速率。

### 最小示例

<Tabs>
<TabItem value="openai" label="OpenAI 兼容" default>

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://tokenharbor.ai/v1",
    api_key="thk_live_你的密钥",
)

resp = client.chat.completions.create(
    model="deepseek-v4.1-flash:free",
    messages=[{"role": "user", "content": "Hello"}],
)

print(resp.choices[0].message.content)
```

</TabItem>
<TabItem value="anthropic" label="Anthropic 兼容">

```python
from anthropic import Anthropic

client = Anthropic(
    api_key="thk_live_你的密钥",
    base_url="https://tokenharbor.ai",
)

message = client.messages.create(
    model="deepseek-v4.1-flash:free",
    max_tokens=1024,
    messages=[{"role": "user", "content": "Hi"}],
)

print(message.content[0].text)
```

</TabItem>
</Tabs>

### 稳定性边界

免费账户 60 RPM 对个人原型验证足够，请求大小限制在 4 MB 可能影响长对话 Agent 场景。免费模型数量目前较少（2 个），但上下文窗口大（1.05M），适合长文档处理测试。充值后速率限制解除，适合从免费层平滑迁移到生产使用。

---

## 九、云知声 Unisound（U Plan）

平台：https://maas.unisound.com ｜ 文档：https://maas.unisound.com/docs/token-plan/overview

云知声（Unisound）推出的 **U Plan** 是一个订阅制的 AI 模型服务平台，涵盖文本、医疗、语音、文档等多模态模型，采用统一的点数额度体系。免费档（Free）提供每周 2500 点 + 每 5 小时动态 500 点，以及多项赠送额度。支持 OpenAI 和 Anthropic 兼容协议，可接入 Claude Code、Cursor、Codex 等 AI 编码工具。

### Base URL

```text
https://maas-api.unisound.com/v1
```

Anthropic 兼容协议同样支持。同时兼容 OpenAI 和 Anthropic 两种 API 格式。

### 认证

1. 注册 / 登录云知声平台，访问 [U Plan 订阅页](https://maas.unisound.com/token-plan)。
2. **免费档需手动点击「立即领取」**，不会自动生效。
3. 领取成功后，进入 **控制台 > 订阅管理 > U Plan** 获取专属 API Key 和 Base URL。
4. API Key 为计划专属，与按量付费的 Key **不通用**。Key 在计划有效期内有效，自动分配，不可手动创建或删除。

### 免费策略（点数计费）

U Plan 采用**点数（Points）计费**模式，免费档额度如下：

| 额度类型 | 免费档（Free） |
|---|---|
| **每周点数** | 2,500 点 |
| **5 小时动态窗口点数** | 500 点 |
| **U2-RadiMed 赠送额度** | 475,000 Token |
| **U2-ASR 赠送额度** | 8 小时 |
| **U2-TTS 赠送额度** | 40,000 字符 |
| **U2-OCR 赠送额度** | 7,375,000 Token |
| **U2-OCR-Med 赠送额度** | 7,375,000 Token |

### 点数刷新规则

- **5 小时点数**：动态刷新——点数在请求消耗开始后 5 小时重置。
- **每周点数**：从计划领取/购买时间起每 7 天刷新。
- **未用完的点数不滚动**到下一个窗口或计费周期。
- **赠送额度**不受 5 小时窗口或每周点数限制，在当前计划周期内用完即止。

### 点数消耗规则

点数消耗 = (输入 tokens × 输入系数 + 缓存命中 tokens × 缓存系数 + 输出 tokens × 输出系数) / 10000

| 模型 | 输入系数 | 缓存输入系数 | 输出系数 |
|---|---|---|---|
| **U2-Flash** | 1 | 0.2 | 2 |
| **U2-Med** | 2 | 0.5 | 7 |

**积分与 Token 换算示例（U2-Flash）**：

假设一次调用：输入 1000 tokens（无缓存命中），输出 500 tokens。

```
点数消耗 = (1000 × 1 + 0 × 0.2 + 500 × 2) / 10000
         = (1000 + 0 + 1000) / 10000
         = 2000 / 10000
         = 0.2 点
```

即 **每 1000 输入 + 500 输出约消耗 0.2 点**。免费档每周 2500 点，按此口径约可调用 **12,500 次**类似规模的请求。

如果命中缓存（缓存系数 0.2），同样 1000 输入（其中 800 命中缓存）+ 500 输出：

```
点数消耗 = (200 × 1 + 800 × 0.2 + 500 × 2) / 10000
         = (200 + 160 + 1000) / 10000
         = 1360 / 10000
         = 0.136 点
```

缓存命中后单次消耗降低约 32%，**在 90%+ 缓存命中率下，免费档每周约可使用 ~60.68M Token**（每月约 ~264M Token）。

:::note
高峰时段消耗倍率为基础倍率的 2 倍，但**高峰加倍目前限时豁免**，所有时段均按基础倍率计算。具体规则以平台公告为准。
:::

### 可用模型

所有档位均可使用 U-Model 系列模型：

**文本 / 推理**

- `u2-flash` —— 通用大模型，支持推理、Coding、长文档处理、Agent 能力
- `u2` —— 通用知识推理、Agent 交互、代码操作、长文本处理
- `u2-med` —— 医疗行业大模型，擅长医保、药学、临床知识
- `u2-decision` —— 企业决策模型，毫秒级延迟输出结构化判断

**多模态 / 语音**

- `u2-asr` —— 语音识别（实时流式 + 异步长音频，支持多方言，90%+ 准确率）
- `u2-tts` —— 语音合成（高拟人化，支持克隆/设计音色）
- `u2-ocr` —— 视觉理解 / 文档识别
- `u2-ocr-med` —— 医疗影像识别
- `u2-radimed` —— 医疗影像报告生成、病灶定位、临床推理

:::note
模型会更换。云知声的模型目录持续更新，调用前建议通过平台模型库确认可用性。模型 ID 使用小写格式，如 `u2-flash`。
:::

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://maas-api.unisound.com/v1",
    api_key="你的U-Plan专属API-Key",
)

resp = client.chat.completions.create(
    model="u2-flash",
    messages=[{"role": "user", "content": "你好"}],
)

print(resp.choices[0].message.content)
```

### 稳定性边界

免费档每周 2500 点 + 5 小时 500 点的额度对个人学习和原型验证足够，尤其是赠送的医疗影像和语音额度非常慷慨。U2-Flash 在高缓存命中率下周 Token 量可达 60M+，适合长文档处理和 Agent 编码场景。但点数不滚转，高峰加倍随时可能恢复，且平台处于推广期，政策可能调整。适合个人学习、医疗 AI 原型验证、语音多模态测试。

---

## 十、APInex

平台：https://apinex.bond ｜ 模型目录：https://apinex.bond/models?provider=Free ｜ API 文档：https://apinex.bond/developers

APInex 是一个聚合型 AI 模型网关，一个 API Key、一个 Base URL 即可调用全部 46 款模型。同时兼容 OpenAI（`/v1/chat/completions`）和 Anthropic（`/v1/messages`）协议，支持 Claude Code、Cursor、Codex 等主流 Agent 工具接入。免费层提供每日 20M Token 额度，覆盖 21 款 `free/` 前缀模型，国内直连免翻墙。

### Base URL

OpenAI 兼容协议用：

```text
https://api.apinex.bond/v1
```

如果用 Anthropic SDK 或 Claude Code 等原生协议客户端，同样填到 `/v1`：

```text
https://api.apinex.bond/v1
```

:::tip
APInex 的 Base URL 统一带 `/v1`，无论是 OpenAI SDK 还是 Anthropic SDK。接口格式与标准 OpenAI SDK 100% 一致。
:::

### 认证

1. 在 https://apinex.bond/register 通过 **Google 账号登录**注册（目前仅支持 Google 登录这一种方式，免绑卡）。
2. 登录后进入 Dashboard → API Keys 页面，**手动点击创建** API Key，格式为 `sk-apx-...`。
3. 请求头：`Authorization: Bearer sk-apx-...`。

:::warning 注册限制
**每个 IP 只能注册一个账号。** 使用 VPN 时可能因 IP 共享或频繁切换导致注册失败，建议使用稳定网络环境注册。
:::

### 免费策略（每日 20M Token 额度池）

APInex 的免费层采用**独立的每日免费额度池（Allowance）**机制：

- **每日 20M Token 免费额度**，所有 `free/` 前缀模型共享此额度池。
- 免费模型调用从独立额度池中按**权重（Weight）**扣减，**绝不触碰美元充值余额**。
- 基础免费层提供 **15 RPM** 并发限制。
- 额度**每日重置**，未用完的不累积。

| 限制维度 | 免费层 |
|---|---|
| **每日 Token 额度** | 20M Token |
| **并发速率** | 15 RPM |
| **上下文窗口** | 最大 1M Token |
| **充值余额** | 独立，不被免费调用扣减 |

### 免费模型识别

免费模型 ID 以 **`free/` 前缀**开头，价格为 $0.00/1M。当前免费层覆盖 21 款模型：

**Claude 系列**

- `free/claude-opus-4-6` —— Claude 4.6 Opus，免费
- `free/claude-sonnet-4-6` —— Claude 4.6 Sonnet，免费

**DeepSeek 系列**

- `free/deepseek-v4-1-flash` —— DeepSeek V4.1 Flash 1017，1M 上下文
- `free/deepseek-v4-flash-0731` —— DeepSeek V4 Flash
- `free/deepseek-v4-pro-0813` —— DeepSeek V4 Pro

**Gemini 系列**

- `free/gemini-3-1-pro` —— Gemini 3.1 Pro
- `free/gemini-3-8-flash` —— Gemini 3.8 Flash

**GLM 系列**

- `free/glm-5-3-flash` —— GLM-5.3 Flash
- `free/glm-5-3-flashx` —— GLM 5.3 FlashX
- `free/glm-5-3` —— GLM 5.3

**Qwen 系列**

- `free/qwen-3-8-max` —— Qwen 3.8 MAX

**Kimi 系列**

- `free/kimi-k2-8` —— Kimi K2.8
- `free/kimi-k3` —— Kimi K3

**MiniMax 系列**

- `free/minimax-m3-1-flash` —— MiniMax M3.1 Flash
- `free/minimax-m3` —— MiniMax M3

**其他**

- `free/gpt-6-luna` —— GPT 6 Luna
- `free/mimo-v2-6-flash` —— MiMo V2.6 Flash
- `free/mimo-v2-6-pro` —— MiMo V2.6 Pro
- `free/muse-spark-1-3` —— Muse Spark 1.3
- `free/hy4` —— HY 4
- `free/jev-1-13` —— Jev 1.13

:::note
模型会更换。免费模型阵容可能随容量动态调整，实时免费清单通过 https://apinex.bond/models?provider=Free 查看。所有免费模型均支持完整的上下文窗口、SSE 流式输出及工具调用。
:::

### 最小示例

```python
from openai import OpenAI

client = OpenAI(
    base_url="https://api.apinex.bond/v1",
    api_key="sk-apx-你的密钥",
)

resp = client.chat.completions.create(
    model="free/deepseek-v4-1-flash",
    messages=[{"role": "user", "content": "Hello"}],
)

print(resp.choices[0].message.content)
```

### 稳定性边界

每日 20M Token 额度对个人学习和原型验证充足，15 RPM 并发适合中低频调用。免费层覆盖 21 款模型（含 Claude、DeepSeek、Gemini、GLM、Qwen、Kimi 等），模型丰富度是亮点。但需注意：

- **每个 IP 只能注册一个账号**，VPN 用户可能注册失败。
- 免费池是共享吞吐，延迟不可控。
- 如需更高并发（15–30 RPM），需订阅 $4/月起的轻量计划或切换至按量付费模型。

适合多模型对比测试、个人 Agent 编码场景，不适合高并发生产环境。

---

## 十一、免费 API 的稳定性边界（适用于全部平台）

以上所有平台的"免费"，本质是**用额度或速率上限换取零现金成本**，而不是用 SLA 承诺换取稳定服务。

### 1. 免费端点运行在共享硬件上，延迟不可控

免费层通常使用消费级硬件或共享池，负载一高直接体现为**长尾延迟**，而非干净利落的失败。实际监测数据显示，免费端点的平均首字节时间（TTFB）可达 **48–57 秒**，单次请求最大 TTFB 接近 **195 秒**。在默认 45 秒重试预算下，一个"活着但正在排队的"免费端点会被反复判定为失败——它并没有宕机，只是慢到被放弃。

### 2. 限流是常态，429 不是异常

免费层的速率限制远低于付费层，且**限额会被平台单方面调整**。NVIDIA 约 40 RPM、UnoRouter 约 1 RPM/模型、AMD 约 20 RPM、ModelScope 250 魔粒/天、Agnes 文本 10 RPM、Token Harbor 60 RPM、云知声 2500 点/周、APInex 20M Token/天 + 15 RPM——这些数字**随时可能因运营策略调整而下调**（Agnes 已实际下调过一次，AMD 额度也经历过从 $10 到 $1 的调整）。免费层的可用性取决于平台的容量分配策略，不取决于你的代码质量。

### 3. 模型可能被静默下线

免费模型目录的变动不需要通知。AMD 的 `DeepSeek-V4-Flash-0731` 已返回 `model_not_found` 但仍出现在页面历史中；OrcaRouter 免费阵容随容量动态换入换出；UnoRouter 的免费池"下午就可能被耗尽"。今天可用的 ID，明天可能 404。

### 4. 结论

**免费 API 适合：** 原型验证、个人学习、低频测试、付费通道的应急 fallback、在多个免费模型之间轮换以摊薄单点风险。

**免费 API 不适合：** 任何要求稳定响应的生产环境、面向终端用户的产品功能、有 SLA 或可观测性要求的系统、高并发或低延迟场景。

进入生产前应迁移到对应的付费层或其他有 SLA 的商业 API。免费额度真正的价值在于**零成本验证可行性**，而不是零成本承载流量。

---

## 横向对比表

| 平台 | Base URL（OpenAI SDK / curl / 自写代码） | Base URL（会自动拼接路径的客户端） | 免费模型规模 | 代表模型 | 模型动态性 |
|---|---|---|---|---|---|
| **OrcaRouter** | `https://api.orcarouter.ai/v1` | `https://api.orcarouter.ai` | 约 91 个追踪模型，免费阵容动态换入换出 | `glm-5.3-flash`、`deepseek-v4-flash-free`、`qwen3.8-27b-free`、`orcarouter/free` | 实时 API 查询：`/api/free-package/public` |
| **Agnes AI 中国站** | `https://api.agnes-ai.cn/v1` | 同左 | Flash 系列免费（文本 3 + 图像 3 + 视频 2） | `agnes-2.5-flash`、`agnes-image-2.1-flash`、`agnes-video-v2.0` | 版本迭代，Pro 系列已付费 |
| **Agnes AI 国际站** | `https://apihub.agnes-ai.com/v1` | 同左 | 同上，Key 独立 | 同上 | 同上 |
| **ModelScope** | `https://api-inference.modelscope.cn/v1` | `https://api-inference.modelscope.cn` | 约 50 个可走 API 的模型 | `Qwen3.5-397B`、`GLM-5.2`、`DeepSeek-V4.1-Flash`、`MiniMax-M3` | 模型池动态，接口匿名可查 |
| **AMD Token Factory** | `https://developer.amd.com.cn/radeon/api/v1` | 同左 | 6 个核心免费模型 | `DeepSeek-V4.1-Flash`（1M）、`GLM-5.3-Flash`（256K）、`Qwen3.8-Flash-Next`（256K）、`MiniCPM5-2B`（128K） | 有模型已 `model_not_found`，调用前查 `/v1/models` |
| **NVIDIA** | `https://integrate.api.nvidia.com/v1` | 同左 | 100+ 模型，以 "Free Endpoint" 标签为准 | Nemotron 系列、Mistral Large 4、DeepSeek-V4.1-Flash、FLUX 3 Image Klein | 持续更新，以 Free Endpoint 标签为准 |
| **UnoRouter** | `https://api.unorouter.com/v1` | `https://api.unorouter.com` | 130+ 个 `:free` 模型，约 50 个上游 | `glm-5.2:free`、`deepseek-v4-pro:free`、`qwen3.5-397b-a17b:free`、`nemotron-3-ultra-550b-a55b:free` | 尽力而为，单模型可能随时耗尽 |
| **Token Harbor** | `https://tokenharbor.ai/v1` | `https://tokenharbor.ai` | 当前 2 个 `:free` 模型，1.05M 上下文 | `deepseek-v4.1-flash:free`、`mimo-v2.6-flash:free` | 免费模型少但上下文大，充值后速率无限制 |
| **APInex** | `https://api.apinex.bond/v1` | 同左 | 21 款 `free/` 前缀模型，每日 20M Token | `free/claude-sonnet-4-6`、`free/deepseek-v4-1-flash`、`free/gemini-3-1-pro`、`free/glm-5-3`、`free/qwen-3-8-max` | 每日 20M Token 额度池，15 RPM，每 IP 限注册一个账号 |
| **云知声 U Plan** | `https://maas-api.unisound.com/v1` | 同左 | 文本+医疗+语音+OCR 多模态，免费档每周 2500 点 | `u2-flash`、`u2-med`、`u2-asr`、`u2-tts`、`u2-ocr` | 模型持续更新，点数不滚转，高峰加倍限时豁免 |

:::tip "会自动拼接路径的客户端"
指 Cherry Studio、Claude Code、Gemini CLI 等工具。其余场景（OpenAI SDK、curl、自写代码）一律用左侧带 `/v1` 的写法。如果拿不准，先看客户端输入框有没有"不要带 /v1"的提示。
:::
