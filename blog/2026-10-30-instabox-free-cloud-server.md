---
slug: instabox-free-cloud-server
title: InstaBox 免费云服务器获取指南：4核8G 真白嫖
authors: Learncs
tags: [免费服务器, InstaBox, 云计算, microVM]
description: InstaBox 提供 4 vCPU / 8 GiB 内存的免费 Firecracker microVM 云服务器，本文介绍如何注册获取及使用限制。免费政策当前有效，不保证永久。
---

# InstaBox 免费云服务器获取指南：4核8G 真白嫖

:::info
InstaBox（instabox.sh）是 InsForge 团队（Y Combinator 孵化）推出的"AI Agent 云电脑"平台，底层使用 Firecracker microVM（AWS 同款虚拟化技术）。免费档提供 4 vCPU / 8 GiB 内存的云端 Linux 机器。**以下信息基于 2026 年 10 月官方文档核验，免费政策当前有效，不保证永久。**
:::

:::warning 重要提示
InstaBox 官方对免费档的描述是 "free until we figure it out"（目前免费，之后再说）。免费政策处于 beta 期，**随时可能调整或取消**，请按可随时收回的预期使用。本文信息截至 2026 年 10 月 25 日官方文档核验。
:::

---

## InstaBox 是什么

InstaBox 是一个面向 AI Agent 的云端 Linux 机器平台，2026 年 10 月 14 日上线。每台机器是独立的 Firecracker microVM，运行 Debian 13，配备 systemd、sudo root、内置 Docker——比函数型 Sandbox 更接近一台真正的 Linux 主机。

核心特点：

- **Firecracker microVM 虚拟化**（AWS 同款技术）
- **Debian 13 (trixie) amd64**，kernel 6.18.54
- **sudo root 权限**，可自由安装软件
- **内置 Docker + Compose**
- 支持 REST API、TypeScript SDK、CLI、SSH/Mosh 接入
- 任意端口可发布公网 HTTPS URL（每机 16 个）

---

## 免费档配置

| 配置项 | 免费档 |
|---|---|
| **CPU** | 4 vCPU |
| **内存** | 8 GiB（`free -m` 实际约 7.8 GiB） |
| **机器数量** | 1 台 |
| **存储** | 20 GiB 持久化 `/data` 盘 + 16 GiB 根盘 |
| **快照** | 5 个 |
| **出站流量** | 每月 100 GiB（入站永久免费） |
| **快照+文件合计上限** | 200 GB |
| **模板** | 仅 `agent-browser`（预装 Node.js 22/Bun/uv/Go/Rust/gcc、Docker、Claude Code、Codex、桌面环境 VNC+Xfce+Chromium） |
| **最大连续运行** | 480 分钟（约 8 小时） |
| **空闲暂停** | 30 分钟空闲自动暂停（固定不可改），恢复 <1 秒且内存状态保留 |

### 预装工具链

免费档 `agent-browser` 模板预装：

- **语言运行时**：Node.js 22、Bun、Python 3.13、Go、Rust、OpenJDK 21、gcc
- **容器**：Docker + Docker Compose
- **AI Agent 工具**：Claude Code、Codex
- **桌面环境**：VNC + Xfce + Chromium
- **其他**：uv（Python 包管理）、pip、venv

---

## 如何获取

### 第一步：注册账号

1. 访问 https://instabox.sh
2. 点击注册，填写邮箱
3. 上线初期采用**邀请码排队制**，社区反馈 1-3 天发码，注册后等待邮件通知

### 第二步：安装 CLI

收到邀请后，一条命令起步：

```bash
npx instabox@latest sh
```

这会安装 InstaBox CLI 并进入交互式 shell。

### 第三步：创建机器

```bash
# 创建一台免费档机器（默认使用 agent-browser 模板）
instabox create

# 查看机器状态
instabox ls

# SSH 连接到机器
instabox ssh <machine-id>

# 或直接进入 shell
npx instabox@latest sh
```

### 第四步：发布公网 URL

```bash
# 将机器上的端口发布为公网 HTTPS URL
instabox expose <machine-id> --port 3000
```

每台机器可发布最多 16 个公网 HTTPS URL。

---

## 关键限制

:::warning 这些限制决定了 InstaBox 能不能用于你的场景
:::

### 1. 无独立入站 IPv4

外部访问只能走 InstaBox 的 HTTPS 网关或 SSH 网关。**想绑自己的域名、跑 24/7 网站、做机器人节点，做不到。** 这是它与传统 VPS 最大的区别。

### 2. 30 分钟空闲暂停

空闲 30 分钟后机器自动暂停（免费档固定不可改）。恢复时间 <1 秒且内存状态保留，对 Agent 突发负载是特性（省成本），但对常驻服务是硬伤。

### 3. 共享 NAT 出口 IP

出口 IP 为美国 AWS 数据中心 IP，干净但明确是机房段。**邮件发送、风控敏感用途不适用。**

### 4. 最大连续运行约 8 小时

单次连续运行上限约 480 分钟（第三方观察，官方未在文档明示）。超时后机器会被暂停。

### 5. exec 并发限制

- 并发 32 路
- 单命令 10 分钟上限

### 6. 请求大小限制

免费账户单次请求上限 4 MB。

---

## 适合谁 / 不适合谁

### 适合

- **跑 AI Agent 的开发者**：Claude Code、Codex、自动化 Agent 的云端执行环境
- **需要云端浏览器**：桌面 + Chromium 做自动化测试、网页交互
- **临时构建环境**：Rust/Go/Node.js 工具链全齐，随时创建随时销毁
- **零成本体验 microVM**：想了解 Firecracker 虚拟化技术的折腾党
- **学习 Linux / Docker**：完整的 root 权限 + Docker 环境，学习成本为零

### 不适合

- **建站 / 24/7 常驻服务**：30 分钟暂停 + 无独立入站 IP，去买正经 VPS
- **需要独立 IP 发邮件 / 过风控**：共享 NAT 出口，不满足条件
- **数据主权敏感的生产负载**：YC 初创 + beta，条款可变
- **需要自定义内核 / 模块**：microVM 不支持内核级定制

---

## 与传统 VPS 的区别

| 维度 | InstaBox 免费档 | 传统 VPS |
|---|---|---|
| **虚拟化** | Firecracker microVM | KVM / Xen / LXC |
| **操作系统** | Debian 13（固定） | 可选多种 OS |
| **root 权限** | 有（sudo root） | 有 |
| **独立 IP** | 无（共享 NAT） | 有 |
| **入站连接** | 仅 HTTPS 网关 | 任意端口 |
| **持续运行** | 30 分钟暂停 / 8 小时上限 | 24/7 |
| **费用** | 免费 | 月付 / 年付 |
| **适用场景** | Agent 工作台、临时环境 | 建站、常驻服务 |

---

## 付费档参考

如果免费档不够用，InstaBox 提供付费方案：

| 方案 | 价格 | 机器数 | 单机最高规格 | 特点 |
|---|---|---|---|---|
| **Free** | $0 | 1 台 | 4C/8G | 30 分钟暂停固定，100 GiB 出站 |
| **Pro** | $20/月 + 用量 | 500 台（100 运行） | 8C/16G | 暂停可调 5-30 分钟或关闭，1 TiB 出站 |
| **Builder** | $100/月 + 用量 | 1,000 台（200 运行） | 16C/32G | 面向 CI/CD 场景 |
| **Team** | $500/月 + 用量 | 无限（500 运行） | 32C/64G | 50 TiB 出站 |
| **Enterprise** | 定制 | 定制 | 定制 | 99.9% SLA、SSO/SAML、审计日志 |

用量单价（按秒计费，暂停后只收存储）：

- vCPU：$0.004 / 核时
- 内存：$0.00225 / GiB 时
- 存储：$0.00011 / GiB 时
- 出站：$0.02 / GiB

---

## 总结

"免费 4 核 8G"是真的，且是目前对 AI Agent 场景最慷慨的免费算力之一。但它本质是 **Agent 工作台，不是免费 VPS**。

- 拿来跑 Agent、编译、测试、学习 Linux/Docker——**血赚**
- 拿来替代你的 $12/年小鸡建站——**会失望**

:::tip 免费政策时效提醒
免费档政策官方自述为 "free until we figure it out"（目前免费，之后再说），处于 beta 期。本文信息截至 2026 年 10 月 25 日官方文档核验，**政策随时可能调整**。如果你需要长期稳定使用，请关注官方最新公告，或考虑付费方案。
:::
