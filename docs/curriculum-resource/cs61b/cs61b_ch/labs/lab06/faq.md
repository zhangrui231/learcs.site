---
title: FAQ
---

### 迭代器相关错误

如果您收到以下错误：

```
java: bstmap.BSTMap 不是抽象类型，并且没有覆盖 java.lang.Iterable 中的抽象 iterator() 方法
```

您需要在 BSTMap 中添加以下方法：

```
public Iterator<K> iterator() {
    throw new UnsupportedOperationException();
}
```

为什么 BSTMap 需要这个方法？ 这是因为 `Map61B` 接口继承自 `Iterable` 接口，所以任何实现了 `Map61B` 的类都必须实现 `Iterable` 接口中的方法.

### treeTest 中大小错误

如果 `treeTest` 中，你在这行代码报错了:

```
assertThat(b.size()).isEqualTo(5)
```

请记住，`put` 并不总是向树中添加新值。 如果用已存在的键调用 `put` 方法，它应该仅仅更新对应的值，而不会改变树的大小。
