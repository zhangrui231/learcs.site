---
slug: free-llm-api-platforms
title: 7 个免费大模型 API 平台接入指南
authors: Learncs
tags: [免费API, LLM, ModelScope, AMD, NVIDIA, OrcaRouter, UnoRouter, Agnes]
description: OrcaRouter、Agnes AI、ModelScope、AMD Token Factory、NVIDIA、UnoRouter 等 7 个免费大模型 API 平台的详细接入文档，包含 Base URL、认证方式、免费额度、模型列表、代码示例及稳定性分析。
---

# 7 个免费大模型 API 平台接入指南

:::info
本文整理了 7 个免费大模型 API 平台的接入方式，包含 Base URL、认证方式、免费额度、可用模型、代码示例及稳定性边界。各平台的 Base URL 直接写明应填的字符串，不使用"裸域名/裸主机"等行话。
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

## 七、免费 API 的稳定性边界（适用于全部平台）

以上所有平台的"免费"，本质是**用额度或速率上限换取零现金成本**，而不是用 SLA 承诺换取稳定服务。

### 1. 免费端点运行在共享硬件上，延迟不可控

免费层通常使用消费级硬件或共享池，负载一高直接体现为**长尾延迟**，而非干净利落的失败。实际监测数据显示，免费端点的平均首字节时间（TTFB）可达 **48–57 秒**，单次请求最大 TTFB 接近 **195 秒**。在默认 45 秒重试预算下，一个"活着但正在排队的"免费端点会被反复判定为失败——它并没有宕机，只是慢到被放弃。

### 2. 限流是常态，429 不是异常

免费层的速率限制远低于付费层，且**限额会被平台单方面调整**。NVIDIA 约 40 RPM、UnoRouter 约 1 RPM/模型、AMD 约 20 RPM、ModelScope 250 魔粒/天、Agnes 文本 10 RPM——这些数字**随时可能因运营策略调整而下调**（Agnes 已实际下调过一次，AMD 额度也经历过从 $10 到 $1 的调整）。免费层的可用性取决于平台的容量分配策略，不取决于你的代码质量。

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

:::tip "会自动拼接路径的客户端"
指 Cherry Studio、Claude Code、Gemini CLI 等工具。其余场景（OpenAI SDK、curl、自写代码）一律用左侧带 `/v1` 的写法。如果拿不准，先看客户端输入框有没有"不要带 /v1"的提示。
:::
