---
title: FAQ
---

### 我遇到了 `StackOverFlowError`、`OutOfMemoryError`，或者看到我的测试在某个用例上超时了。

如果遇到 `StackOverFlowError` 错误，很可能是你的代码里出现了无限递归。仔细检查一下你是不是**正确地**处理了各种情况 - 比如，如果 `union` 的两个顶点已经在同一个集合里了，应该怎么处理？
