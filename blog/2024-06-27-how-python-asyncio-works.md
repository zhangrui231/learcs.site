---
slug: how-python-asyncio-works
title: 从零开始重建 Python Asyncio 并深入理解其工作原理
authors: Jacob
tags: [python, asyncio]
---

# 从零开始重建 Python Asyncio 并深入理解其工作原理

翻译：「科技文章翻译GTPS」
原文：[https://jacobpadilla.com/articles/recreating-asyncio](https://jacobpadilla.com/articles/recreating-asyncio)

目前，asyncio 是 Python 中一个非常热门的话题，这是有原因的——它是处理 I/O 密集型程序的好方法！当我学习 asyncio 时，花了很长时间才理解它的实际工作原理。后来，我发现它基本上只是 Python 生成器 (Generator) 之上的一个很好的抽象层。在本文中，我将使用 Python 生成器来创建一个简化版本的 asyncio。然后，我将通过 `__await__` 方法将示例重构为使用 `async` 和 `await` 关键字，最后再用真正的 asyncio 替换我的版本。通过构建一个简单版本的 asyncio，希望在本文结束时，你能更好地理解它的魔法！

## 生成器回顾

如果你已经熟悉生成器，可以跳过这一部分；但如果你不熟悉，它是 asyncio 的基础，所以理解它的工作原理非常重要。

首先，生成器存在的原因是它们可以使代码更具内存效率。想象一下，如果你有以下循环：

```
for i in range(100_000_000):
    print(i)
```

如果 `range` 不是生成器，而是一个返回列表的函数供你循环使用，那么像上面的代码会非常浪费内存，因为你将创建一个包含一亿个元素的列表……然而，由于 `range` 是一个生成器，至少在 Python 3+ 中，你只需按需生成数字，一个一个地生成，而无需在内存中存储整个序列。

有几种方法可以创建生成器，但我们将专注于生成器函数。这些生成器定义与其他函数一样，但使用 `yield` 语句来返回数据。这个语句将普通函数变成生成器，生成器可以暂停和恢复其状态，而不是一次性全部执行，通过调用 `next(iterator)` 来恢复。

例如，以下是一个生成器函数：

```
def generator():
   yield 'hello'
   yield 'world'

iterator = generator()
```

当你调用生成器时，Python 并不像通常那样运行函数内部的代码，而是看到 `yield` 关键字，因此返回一个生成器对象。一旦我们有了生成器对象，就可以调用 `next(iterator)` 来运行函数代码，直到第一个或下一个 `yield` 语句：

```
print(next(iterator))  # 输出：hello
print(next(iterator))  # 输出：world
```

如果我们再次尝试调用 `next(iterator)`，生成器将抛出

 `StopIteration` 异常，因为生成器函数中没有更多的 `yield` 语句了。

Python 生成器的另一个很酷的功能是 `yield from`，它允许生成器调用子生成器或可迭代对象，使你能够创建生成器链！

```
def generator():
   yield 'hello'

def another_generator():
   yield from generator()

iterable = another_generator()
print(next(iterable))  # 输出：hello
```

关于生成器还有更多的内容，例如生成器推导式 (generator comprehensions)，它们类似于列表推导式 (list comprehensions)，但用圆括号而不是方括号创建，以及使用 `iterator.send(value)` 向生成器发送数据的功能。然而，对于本文而言，重要的是记住生成器允许函数在保持其状态的同时启动和停止！

## 事件循环

事件循环负责运行和管理所有当前任务，是 asyncio 的核心，我们将首先用生成器重建它。虽然 asyncio 事件循环是用 C 编写的，但可以简单地将其视为一个包含所有当前任务的列表。暂时将这些任务视为生成器对象。事件循环管理器将遍历列表中的每个任务，并使用 `next(task)` 函数运行每个任务。然后，该任务将运行，当它进行 I/O 密集型工作（例如休眠）时，它将使用 `yield` 关键字暂停其执行并将控制权交还给事件循环，然后事件循环将继续运行列表中的下一个任务。

这是一个示例——我们有两个任务，它们都打印其任务编号，然后 `yield`，这会停止它们的执行。由于事件循环管理器是调用 `next()` 的，在任务 `yield` 后，它会收回控制权，然后继续运行循环中的下一个任务。

```
def task1():
   while True:
       print('Task 1')
       yield

def task2():
   while True:
       print('Task 2')
       yield

event_loop = [task1(), task2()]

while True:
   for task in event_loop:
       next(task)
```

因此，这段代码的输出将如下，并且由于两个生成器函数都没有结束（因为 `while True` 循环），它会永远继续下去。

```
Task 1
Task 2
Task 1
Task 2
…
```

## 休眠

如果我们采用上述代码，可以通过使用 `yield from` 向我们的任务添加子生成器。下面，我添加了一个休眠生成器，它将在指定时间到期前暂停任务的执行。这是因为 `sleep` 将继续 `yield`，直到经过一定的秒数，此时它将离开 `while` 循环。由于 `sleep` 中没有更多的 `yield` 语句，会引发 `StopIteration` 异常，通知任务函数中的 `yield from` 继续执行下一行代码。

```
import time

def sleep(seconds):
   start_time = time.time()
   while time.time() - start_time < seconds:
       yield

def task1():
   while True:
       print('Task 1')
       yield from sleep(1)

def task2():
   while True:
       print('Task 2')
       yield from sleep(5)

event_loop = [task1(), task2()]

while True:
   for task in event_loop:
       next(task)
```

输出：

```
Task 1
Task 2
Task 1
Task 1
Task 1
Task 1
Task 2
Task 1
…
```

## 从 Yield 到 Await

现在我们可以采用上述代码，并通过使用 `__await__` 方法和 `async` 关键字从 `yield` 过渡到 `await`。当一个类具有 `__await__` 方法时，我们可以在类的实例前使用 `await` 关键字来调用它。在 asyncio 中，你通常通过像 `asyncio.create_task` 这样的函数来处理 `Task` 对象。这些 `Task` 对象继承自 asyncio 的 `Future` 对象，后者具有 `__await__` 方法。我们也可以在协程 (coroutine) 前使用 `await`，协程是在调用带有 `async` 关键字的函数时创建的对象。协程类似于生成器函数，因为协程的执行也可以暂停和恢复。

你可以将 `await` 关键字视为 `yield from` 的同义词，但具有一些额外的验证规则。因此，当编写代码 `await object` 时，你基本上是在说要么从“对象”类实例中的 `__await__` 方法生成，要么“对象”可能是另一个协程（如子生成器）。

你实际上可以查看 Asyncio 的[源代码](https://github.com/python/cpython/blob/main/Lib/asyncio/futures.py)，看到 `Future` 对象内部的 `__await__` 方法基本上只是调用 `yield`，如果 future（或任务）尚未完成：

![Asyncio 源代码。Future 对象中的 __await__ 方法](/img/blog/yield-to-await-193740693.png)

要将我们在上述部分中编写的代码转换为使用 `async` 和 `await`，我们首先需要创建自己的 `Task` 类，因为函数不能有 `__await__` 方法。下面是我想出的一个简单版本：

```
from queue import Queue


event_loop = Queue()

class Task():
    def __init__(self, generator):
        self.iter = generator
        self.finished = False

    def done(self):
        return self.finished

    def __await__(self):
        while not self.finished:
            yield self


def create_task(generator):
    task = Task(generator)
    event_loop.put(task)

    return task
```

这次，我们不是使用 Python 列表来创建事件循环，而是使用队列，因为我们希望能够在常量时间内添加和删除循环中的任务。

对于我们的 `Task` 类，我们将生成器对象存储在 `self.iter` 中，并将 `self.finished` 设置为 `False`，这将跟踪生成器是否已完成运行（当引发 `StopIteration` 异常时，它完成运行）。我们的 `Task` 对象还具有 `__await__` 方法，它只会不断将控制权返回给事件循环，直到任务完成。最后，通过 `create_task` 帮助函数创建 `Task` 对象后，我们将其添加到事件循环中，以便运行它。

现在，让我们构建事件循环管理器，它将运行任务：

```
def run(main):
    event_loop.put(Task(main))

    while not event_loop.empty():
        task = event_loop.get()
        try:
            task.iter.send(None)
        except StopIteration:
            task.finished = True
        else:
            event_loop.put(task)
```

你可能会注意到这开始模仿实际的 asyncio API，因为要启动事件循环，我们需要调用 `run` 并传入一个初始函数。该函数首先将主函数包装在一个 `Task` 对象中并将其添加到事件循环中。然后 `while` 循环将运行，对于每个循环周期，将通过队列获取下一个任务来运行。我们现在需要使用 `task.iter.send(None)` 而不是 `next(task.iter)`，这是处理 async/await 关键字的一个奇怪之处，但它做的是相同的事情。我们还希望将此调用包装在 try-except 块中，因为如果抛出 `StopIteration` 异常，我们可以将 `task.finished` 设置为 `True`，但如果没有引发异常，代码将进入 `else` 语句，将任务重新添加到事件循环中以再次运行。

接下来，我们需要使休眠函数兼容 async。在此之前，我们使用生成器函数和一个 `yield` 的 while 循环来处理休眠。我喜欢这种方法，但你不能在生成器函数中结合使用 `await` 关键字——它需要是具有 `__await__` 方法的对象或协程函数。为了解决这个问题，我将代码移动到另一个函数中，现在实际的 `sleep` 函数创建一个任务对象，然后等待它。这个 `await` 将调用任务对象内部的 `__await__` 方法，然后 `yield`，让事件循环转到另一个任务。当事件循环到达新的 `_sleep` 任务时，它将检查时间，如果时间不够，则还会调用 `yield` 将控制权交还给事件循环。如果正在休眠的任务再次通过事件循环调用，就像生成器存储其状态一样，协程仍将等待 `sleep` 返回，并且由于 `sleep` 仍将等待 `_sleep` 任务完成，任务的 `__await__` 方法将再次被调用，并且由于任务未完成，方法中的 `yield` 将被调用。

```
import time

def _sleep(seconds):
    start_time = time.time()
    while time.time() - start_time < seconds:
        yield


async def sleep(seconds):
    task = create_task(_sleep(seconds))
    return await task
```

以下是所有代码：

```
from queue import Queue
import time


event_loop = Queue()


def _sleep(seconds):
    start_time = time.time()
    while time.time() - start_time < seconds:
        yield


async def sleep(seconds):
    task = create_task(_sleep(seconds))
    return await task


class Task():
    def __init__(self, generator):
        self.iter = generator
        self.finished = False



    def done(self):
        return self.finished

    def __await__(self):
        while not self.finished:
            yield self


def create_task(generator):
    task = Task(generator)
    event_loop.put(task)

    return task


def run(main):
    event_loop.put(Task(main))

    while not event_loop.empty():
        task = event_loop.get()
        try:
            task.iter.send(None)
        except StopIteration:
            task.finished = True
        else:
            event_loop.put(task)
```

现在我们已经构建了事件循环、创建任务的方法和休眠函数，我们可以导入该文件（称为 “jacobio.py”），然后将我们使用 `yield` 的代码替换为 `await`，并在使用 `await` 关键字的函数前添加 `async`，以表示这些函数可以被等待，然后创建一个主函数，就像在 asyncio 中一样，将任务添加到事件循环中：

```
import jacobio

async def task1():
    for _ in range(2):
        print('Task 1')
        await jacobio.sleep(1)

async def task2():
    for _ in range(3):
        print('Task 2')
        await jacobio.sleep(0)

async def main():
    one = jacobio.create_task(task1())
    two = jacobio.create_task(task2())

    await one
    await two
    
    print('done')


if __name__ == '__main__':
    jacobio.run(main())
```

输出：

```
Task 1
Task 2
Task 2
Task 2
Task 1
done
```

## 使用 AsyncIO 的 Await

现在我们可以将上面的代码中的所有 “jacobio” 替换为 “asyncio”，我们现在完全使用 asyncio 包了！

```
import asyncio

async def task1():
    for _ in range(2):
        print('Task 1')
        await asyncio.sleep(1)

async def task2():
    for _ in range(3):
        print('Task 2')
        await asyncio.sleep(0)

async def main():
    one = asyncio.create_task(task1())
    two = asyncio.create_task(task2())

    await one
    await two
    
    print('done')


if __name__ == '__main__':
    asyncio.run(main())
```

Asyncio 在幕后做了很多工作，但我们能够从基本生成器重建 asyncio 的核心部分！我试图使事件循环管理器尽可能简单，尽管这是 asyncio 的基本思想，但考虑到实际包的规模和复杂性，我的实现与实际源代码的流程略有不同。此外，现在我们拥有了真正的 asyncio 包的全部功能，我们不需要创建两个任务来等待它们；相反，我们可以使用 `asyncio.gather()` 这样的函数来处理多个任务。如果你对 asyncio 中管理任务的所有方式感兴趣，请查看我的文章 [handling asyncio tasks like a pro](https://jacobpadilla.com/articles/handling-asyncio-tasks)！