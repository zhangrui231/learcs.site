---
title: Coverage Tests - Project 1B Array Deque 61B
description: Project 1B Coverage Tests.
---

### 用于添加测试的标志

- `add_first_from_empty`: 检查 `addFirst` 在空双端队列下的功能是否正常。
- `add_last_from_empty`: 检查 `addLast` 在空双端队列下的功能是否正常。
- `add_first_nonempty`: 检查 `addFirst` 在非空双端队列下的功能是否正常。
- `add_last_nonempty`: 检查 `addLast` 在非空双端队列下的功能是否正常。
- `add_first_trigger_resize`: 检查当底层数组已满时，调用 `addFirst` 是否会触发resize。
- `add_last_trigger_resize`: 检查当底层数组已满时，调用 `addLast` 是否会触发resize。

### 移除后添加测试的标志

- `add_first_after_remove_to_empty`: 先向双端队列添加一些元素，然后全部移除，再检查 `addFirst` 是否仍然可用。
- `add_last_after_remove_to_empty`: 先向双端队列添加一些元素，然后全部移除，再检查 `addLast` 是否仍然可用。

### 移除测试的标志

- `remove_first`: 检查 `removeFirst` 是否有效。
- `remove_last`: 检查 `removeLast` 是否有效。
- `remove_first_to_empty`: 先向双端队列添加一些元素，然后移除到只剩一个。检查使用 `removeFirst` 移除最后一个元素是否正常。
- `remove_last_to_empty`: 先向双端队列添加一些元素，然后移除到只剩一个。检查使用 `removeLast` 移除最后一个元素是否正常。
- `remove_first_to_one`: 先向双端队列添加一些元素，然后移除到只剩两个。检查使用 `removeFirst` 移除倒数第二个元素是否正常。
- `remove_last_to_one`: 先向双端队列添加一些元素，然后移除到只剩两个。检查使用 `removeLast` 移除倒数第二个元素是否正常。
- `remove_first_trigger_resize`: 当使用率低于等于25%且数组大小大于8时调用。检查数组是否能正确地调整大小。
- `remove_last_trigger_resize`: 当使用率低于等于25%且数组大小大于8时调用。检查数组是否能正确地调整大小。

### 获取测试的标志

- `get_valid`: 检查 `get` 方法在有效索引下是否正常工作。
- `get_oob_large`: 检查 `get` 方法在较大的越界索引下是否正常工作。
- `get_oob_neg`: 检查 `get` 方法在负索引下是否正常工作。

### 大小测试的标志

- `size`: 检查 size 是否有效。
- `size_after_remove_to_empty`: 先向双端队列添加一些元素，然后全部移除，再检查 size 是否仍然可用。
- `size_after_remove_from_empty`: 从双端队列中移除所有元素后，检查 `size` 方法是否仍然可用。

### isEmpty 测试的标志

- `is_empty_true`: 检查 `isEmpty` 方法在空双端队列上是否返回真。
- `is_empty_false`: 检查 `isEmpty` 方法在非空双端队列上是否返回真。

### toList 测试的标志

- `to_list_empty`: 检查 `toList` 在空 `ArrayDeque` 上是否有效。
- `to_list_nonempty`: 检查 `toList` 在非空 `ArrayDeque` 上是否有效。

### 高级调整大小测试的标志

- `resize_up_and_resize_down`: 在同一个测试用例中，先触发向上调整大小，再触发向下调整大小。
