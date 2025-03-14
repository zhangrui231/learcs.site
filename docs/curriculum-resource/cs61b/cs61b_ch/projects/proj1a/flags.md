---
title: Coverage Tests - Project 1A Linked List Deque 61B
description: Project 1 Flags.

---

### 针对添加操作的测试标志

- "add_first_from_empty": 检查 `addFirst` 在空双端队列（一种数据结构）中是否能正常工作。
- "add_last_from_empty": 检查 `addLast` 在空双端队列中是否能正常工作。
- "add_first_nonempty": 检查 `addFirst` 在非空双端队列中是否能正常工作。
- "add_last_nonempty": 检查 `addLast` 在非空双端队列中是否能正常工作。

### 针对移除后添加操作的测试标志

- "add_first_after_remove_to_empty": 往双端队列里添加一些元素然后全部移除，然后检查 `addFirst` 是否仍然能正常工作。
- "add_last_after_remove_to_empty": 往双端队列里添加一些元素然后全部移除，然后检查 `addLast` 是否仍然能正常工作。

### 针对移除操作的测试标志

- "remove_first": 检查 `removeFirst` 是否能正常工作。
- "remove_last": 检查 `removeLast` 是否能正常工作。
- "remove_first_to_empty": 往双端队列里添加一些元素然后移除掉几乎所有元素。 检查用 `removeFirst` 移除最后一个元素是否能正常工作。
- "remove_last_to_empty": 往双端队列里添加一些元素然后移除掉几乎所有元素。 检查用 `removeLast` 移除最后一个元素是否能正常工作。
- "remove_first_to_one": 往双端队列里添加一些元素然后移除掉几乎所有元素。 检查用 `removeFirst` 移除倒数第二个元素是否能正常工作。
- "remove_last_to_one": 往双端队列里添加一些元素然后移除掉几乎所有元素。 检查用 `removeLast` 移除倒数第二个元素是否能正常工作。

### 针对获取操作的测试标志

- "get_valid": 检查 `get` 在有效索引下是否能正常工作。
- "get_oob_large": 检查 `get` 在过大的越界索引下是否能正常工作。
- "get_oob_neg": 检查 `get` 在负索引下是否能正常工作。
- "get_recursive_valid": 检查 `getRecursive` 在有效索引下是否能正常工作。
- "get_recursive_oob_large": 检查 `getRecursive` 在过大的越界索引下是否能正常工作。
- "get_recursive_oob_neg": 检查 `getRecursive` 在负索引下是否能正常工作。

### 针对大小操作的测试标志

- "size": 检查 `size` 是否能正常工作。
- "size_after_remove_to_empty": 往双端队列里添加一些元素然后全部移除，然后检查 `size` 是否仍然能正常工作。
- "size_after_remove_from_empty": 从一个空双端队列里移除元素，然后检查 `size` 是否仍然能正常工作。

### 针对判空操作的测试标志

- "is_empty_true": 检查 isEmpty 在空双端队列上是否能正常工作。
- "is_empty_false": 检查 isEmpty 在非空双端队列上是否能正常工作。

### 针对 toList 操作的测试标志

- "to_list_empty": 检查 toList 在空 LinkedListDeque61B 上是否能正常工作。
- "to_list_nonempty": 检查 toList 在非空 LinkedListDeque61B 上是否能正常工作。
