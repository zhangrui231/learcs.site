---
slug: free-proxy
title: 常见的免费科学上网方案
authors: Learncs
tags: [科学上网, 免费代理]
description:  免费科学上网的方案，免费节点
---

# 常见的免费科学上网方案
:::info
很多小伙伴都在寻找到免费科学上网的方案，这里整理了一些常见的免费科学上网方案，方便大家使用。但请注意，免费的（甚至收费的）服务往往伴随着不稳定、速度慢、隐私泄露风险等问题。尽管如此，这里可以概述一些常见的方法，但请确保你在使用时了解所有潜在的风险，并做出明智的决定。
:::

## 从公共资源收集大量Shadowsocks、ShadowsocksR、Trojan和Vmess节点

从公共资源收集大量Shadowsocks、ShadowsocksR、Trojan和Vmess节点，实现原理是全网搜索聚集免费公开的节点，然后通过速度测试筛选可用节点。你不需要自己去收集节点，互联网上有很多好心人已经帮你收集好了。具体使用方法有
- 直接从免费节点收集项目获取节点，获取对应的格式添加到代理软件。
  - 优点：使用简单。
  - 缺点：更新节点需要手动更新。
  - 示例：[https://github.com/mahdibland/V2RayAggregator?tab=readme-ov-file](https://github.com/mahdibland/V2RayAggregator?tab=readme-ov-file)
- 通过cloudflare worker聚合免费节点源自建节点池（机场）
  使用 cloudflare worker 从多个免费节点收集源获取节点，然后通过订阅链接的形式供代理软件使用，优点是更新节点比较简单，一键更新订阅即可。详细使用教程[免费白嫖cloudflare内搭建众多机场节点](https://jdssl.top/index.php/2023/07/05/mfbpcloudfare/)
- 直接使用建好的免费节点池
  节点池就是将很多免费节点全放在一个订阅里面，直接导入到代理软件中即可。比如导入到clash中。通用订阅的转换为对应的客户端订阅就好。[机场订阅链接转换收集与教程，支持机场ss/ssr/v2ray订阅转clash\quantumultX订阅](https://github.com/hwanz/SSR-V2ray-Trojan-vpn/blob/main/%E6%9C%BA%E5%9C%BA%E8%AE%A2%E9%98%85%E9%93%BE%E6%8E%A5%E8%BD%AC%E6%8D%A2%E6%95%99%E7%A8%8B.html)

    ### 1) pmsub
    100多条线路，ss+trojan+vmess等

    通用订阅：https://sub.pmsub.me/base64   

    clash订阅地址(直接复制粘贴到clash订阅下载里面)： https://sub.pmsub.me/clash.yaml  


    ### 2) sharecentre

    12条，vmess
    https://sub.sharecentre.online/sub 


    https://git.io/emzclash

    https://raw.githubusercontent.com/chfchf0306/jeidian4.18/main/4.18


    ### 3) 橘子公益云订阅链接

    [https://sub.5112233.xyz/auto](https://sub.5112233.xyz/auto)

    已适配自适应订阅内容:v2rayN 、 clash.meta（Clash Nyanpasu，clash-verge，ClashX Meta）、 sing-box（SFI）

   
    ### 4) bocchi2b

    [https://links.bocchi2b.top/clash](https://links.bocchi2b.top/clash) :另外一个免费clash订阅，100+节点，有vless节点，需要clash meta内核的clash 比如clash verge rev、clash-nyanpasu

    ### 5) chromego_merge

    [一个分享免费订阅合集的项目](https://github.com/Misaka-blog/chromego_merge?tab=readme-ov-file)

## 使用cloudflare worker 使用通过cloudflare全球网络代理
cloudflare worker是一个云端服务，可以利用其网络代理功能，将你的请求转发到其他网络，从而实现对网络资源的访问。详细部署教程参见[最佳免费vpn方式](https://jdssl.top/index.php/2023/07/21/2023vpn/)