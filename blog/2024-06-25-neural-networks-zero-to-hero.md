---
slug: neural-networks-zero-to-hero
title: 神经网络——从零到英雄
authors:
  name: Andrej Karpathy
  title: Andrej Karpathy是人工智能和深度学习领域的知名专家。斯坦福大学计算机科学博士，师从著名AI研究者李飞飞。曾在特斯拉担任人工智能高级总监，负责自动驾驶AI。在OpenAI担任过研究科学家。目前是自由职业者，专注于AI教育和研究。
  url: https://github.com/karpathy
  image_url: https://avatars.githubusercontent.com/u/241138?v=4
tags: [Andrej, AI课程]
---

# 神经网络：从零到英雄
:::info
这是Andrej Karpathy讲授的一门课程，内容是从头开始用代码构建神经网络。

我们将从反向传播的基础知识开始，逐步构建现代深度神经网络，如GPT。在我看来，即使你的目标是最终进入其他领域（如计算机视觉），语言模型也是学习深度学习的绝佳起点，因为你学到的大部分知识都是可以直接转移的。这就是为什么我们深入研究并专注于语言模型。
:::


## 先决条件
- 熟练的Python编程能力
- 基础数学知识（如导数、高斯分布）

## 课程大纲

| 课程章节 | 内容简介                                                                                                     | 时长     | 视频链接                                                   |
|----------|-------------------------------------------------------------------------------------------------------------|----------|------------------------------------------------------------|
| **1.神经网络与反向传播详解：构建micrograd **      | 这是对反向传播和神经网络训练最逐步详细的解释。只需具备基本的Python知识和对高中微积分的模糊记忆即可。                                                                           | 2h 25m   | [观看视频](https://youtu.be/VMj-3S1tku0) |
| **2.语言模型入门详解：构建makemore**        | 我们实现了一个二元字符级语言模型，在后续视频中我们会将其复杂化为现代的Transformer语言模型，如GPT。在这个视频中，重点是介绍torch.Tensor及其细微之处和在高效评估神经网络中的使用，以及语言建模的总体框架，包括模型训练、采样和损失评估（例如分类的负对数似然）。                                                                                 | 1h 57m   | [观看视频](https://youtu.be/PaCmpygFfXo)     |
| **3.构建makemore第二部分：MLP**       | 我们实现了一个多层感知器（MLP）字符级语言模型。在这个视频中，我们还介绍了许多机器学习的基础知识（例如模型训练、学习率调整、超参数、评估、训练/验证/测试拆分、欠拟合/过拟合等）。                                                                        | 1h 15m   | [观看视频](https://youtu.be/TCH_1BHY58I)       |
| **4.构建makemore第三部分：Activations & Gradients, BatchNorm**       | 我们深入研究了多层MLP的一些内部结构，并审查了前向传递激活、后向传递梯度的统计数据，以及当它们缩放不当时的一些陷阱。我们还查看了理解深度网络健康状况所需的典型诊断工具和可视化方法。我们了解到训练深度神经网络可能会很脆弱，并介绍了第一个使这一过程变得更容易的现代创新：批量归一化。残差连接和Adam优化器将在后续视频中介绍。                                                                                | 1h 55m   | [观看视频](https://youtu.be/P6sfmUTpUmc)   |
| **5.构建makemore第四部分：Becoming a Backprop Ninja**       | 我们从前一个视频中的2层MLP（带批量归一化）开始，通过手动方式进行反向传播，而不使用PyTorch的autograd的loss.backward()函数：通过交叉熵损失、第二层线性层、tanh、批量归一化、第一层线性层和嵌入表。在此过程中，我们对梯度如何在计算图中向后流动以及在高效的Tensors级别而不仅仅是单个标量级别上有了强烈的直观理解。这有助于建立对如何优化神经网络的能力和直觉，使你能够更自信地创新和调试现代神经网络。                                                                    | 56m      | [观看视频](https://youtu.be/q8SA3rM6ckI) |
| **6.构建makemore第五部分：Building a WaveNet**        | 我们从前一个视频中的2层MLP开始，使用树状结构将其加深，形成类似于DeepMind的WaveNet（2016）中的卷积神经网络架构。在WaveNet论文中，相同的层次结构使用因果扩张卷积更有效地实现（尚未涵盖）。在此过程中，我们更好地理解了torch.nn及其工作原理，以及典型的深度学习开发过程（大量阅读文档，跟踪多维Tensor形状，在jupyter notebook和仓库代码之间移动，等等）。                                                                            | 56m      | [观看视频](https://youtu.be/t3YJ5hKiMQ0)                                                       |
| **7.手把手从零开始用代码构建GPT**        | 我们构建了一个生成预训练Transformer (GPT)，遵循论文“Attention is All You Need”和OpenAI的GPT-2/GPT-3。我们讨论了与ChatGPT的联系，后者已风靡全球。我们观看了GitHub Copilot（它本身就是一个GPT）帮助我们编写GPT（元：D！）。我建议大家观看之前的makemore视频，以熟悉自回归语言建模框架和Tensors及PyTorch nn的基础知识，这些我们在本视频中都已默认掌握。                                                            | 1h 56m   |[观看视频](https://www.youtube.com/watch?v=kCc8FmEb1nY)                                                      |
| **8.GPT状态** (本视频是微软Build 2023大会众多会议中的一场)       |了解GPT助手如ChatGPT的训练流程，从分词到预训练、监督式微调，再到基于人类反馈的强化学习（RLHF）。深入探讨有效使用这些模型的实用技巧和思维模式，包括提示策略、微调方法、快速发展的工具生态系统及其未来扩展。  | 43m   | [观看视频](https://www.youtube.com/watch?v=bZQun8Y4L2A&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=8)                                                       |
| **9.构建GPT分词器**        | Tokenizer是大语言模型（LLMs）的一个必要且无处不在的组件，它在字符串和tokens（文本块）之间进行转换。Tokenizer是LLM流水线中完全独立的阶段：它们有自己的训练集、训练算法（字节对编码），训练后实现两项基本功能：从字符串编码（encode()）到tokens，以及从tokens解码（decode()）回字符串。在本讲座中，我们从头开始构建OpenAI的GPT系列中使用的Tokenizer。在此过程中，我们会看到，LLMs的许多奇怪行为和问题实际上都可以追溯到tokenization。我们将讨论这些问题的原因，为什么tokenization是罪魁祸首，以及为什么理想情况下应该有办法完全删除这个阶段。                                                                                 | 2h 13m   | [观看视频](https://youtu.be/zduSFxRajkE)                                                       |
| **10.让我们重现GPT-2（124M）**        | 我们从零开始复现GPT-2（1.24亿参数版）。本视频详细记录了整个过程：首先构建GPT-2网络，接着对其训练过程进行优化以实现极速训练，随后依据GPT-2与GPT-3论文及其超参数配置启动训练任务，执行后次日早晨查看成果，并欣赏模型生成的一些有趣内容。请注意，部分环节该视频基于“从零到英雄”播放列表中早期视频的知识基础（详见我的频道）。你也可以将此视为对我的nanoGPT仓库的构建过程展示，最终版本与原始模型相似度高达约90%。| 4h 2m   | [观看视频](https://www.youtube.com/watch?v=l8pRSuU81PU&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ&index=10)                                                       |

**持续更新中**

## 课程代码仓库
[neural networks zero to hero:](https://github.com/karpathy/nn-zero-to-hero)
[build-nanogpt GitHub仓库，包含本视频中所有变更的独立提交记录:](https://github.com/karpathy/build-nanogpt)
[nanoGPT:](https://github.com/karpathy/nanoGPT)
[llm.c repo:](https://github.com/karpathy/llm.c)
