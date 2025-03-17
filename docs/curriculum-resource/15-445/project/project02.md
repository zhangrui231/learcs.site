---
title: Project 01
---

Do not post your project on a public Github repository.

# Overview

This semester, you will build a _disk-oriented database management system_ (DBMS) called [BusTub](https://github.com/cmu-db/bustub). A disk-oriented architecture means that the DBMS's primary storage location is in persistent storage, like a hard drive (HDD) or flash storage (SSDs). This is different from an in-memory DBMS, where data is stored in volatile memory.

The first programming project is to implement the DBMS's **buffer pool manager.** The buffer pool is responsible for moving physical pages of data back and forth from buffers in main memory to persistent storage. It also behaves as a cache, keeping frequently used pages in memory for faster access, and evicting unused or cold pages back out to storage.

A _page_ in BusTub is 4096 bytes (4 KB) of data, meaning the buffer pool manages data in 4 KB units. Since pages in BusTub have a fixed size, the buffer pool manager stores these pages into fixed-size buffers called _frames_. The distinction between a page and a frame is somewhat subtle. A _page_ is 4 KB of logical (virtual) data, and can be stored in memory, on disk, or both in memory and on disk. A _frame_, on the other hand, is a fixed-length 4 KB block of memory (i.e., a pointer to this memory) that stores a single page of data. The analogy here is storing (logical) pages _inside_ (physical) fixed frames.

In addition to behaving as a cache, the buffer pool manager allows a DBMS to support databases that are larger than the amount of memory available to the system. Consider a computer with 1 GB of memory (RAM). If we want to manage a 2 GB database, a buffer pool manager gives us the ability to interact with this database _without_ needing to fit its entire contents in memory.

The I/O operations that the buffer pool executes are abstracted away from other parts of the DBMS. For example, when one of the DBMS's components (e.g., execution engine) asks the buffer pool manager for a page of data using its unique identifier ( `page_id_t`), that component does not need to know whether that page is already in memory or whether the system has to retrieve it from disk. Similarly, the buffer pool manager does not need to understand the contents of these pages, it only needs to know where the data is located.

### Implementation

**Your implementation of the buffer pool must be thread-safe.** Multiple threads will concurrently access the internal data structures of your buffer pool, and you must make sure that critical sections are protected with [latches](https://stackoverflow.com/a/42464336) (these are called "locks" in operating systems).

You must implement the following storage manager components:

- [**LRU-K Replacement Policy**](https://15445.courses.cs.cmu.edu/fall2024/project1/#lru-k-replacer)
- [**Disk Scheduler**](https://15445.courses.cs.cmu.edu/fall2024/project1/#disk-scheduler)
- [**Buffer Pool Manager**](https://15445.courses.cs.cmu.edu/fall2024/project1/#buffer-pool-manager)

**This is a single-person project that must be completed individually (i.e., no groups).**

- **Release Date:** Sep 09, 2024
- **Due Date:** Sep 29, 2024 @ 11:59pm

# Project Specification

Remember to pull latest code from the BusTub repository.

For each of the following components, we have provided stub classes that contain the API that you must implement. You should **not** modify the signatures for the pre-defined functions in these classes. If you modify the signatures, our grading test code will not work and you will not get credit for this project.

If a class already contains data members, you should not remove them. For example, the `BufferPoolManager` class contains `DiskScheduler` and `LRUKReplacer` members that are required to implement functionality needed by the rest of the system. **You may add data members and helper functions to these classes** to correctly implement the required functionality.

You may use any built-in [C++17 containers](http://en.cppreference.com/w/cpp/container) in your project unless specified otherwise. It is up to you to decide which ones you want to use. Be warned that these containers are not thread-safe, and you will need to use latches to protect access to them. **You may not use additional third-party libraries (e.g., [Boost](https://www.boost.org/)).**

## Task \#1 - LRU-K Replacement Policy

This component is responsible for tracking page usage in the buffer pool in order to determine candidate pages / frames to evict out of memory and back to disk.

You will implement a class called `LRUKReplacer` in [`src/include/buffer/lru_k_replacer.h`](https://github.com/cmu-db/bustub/blob/master/src/include/buffer/lru_k_replacer.h "View Source Code") and its corresponding implementation file in [`src/buffer/lru_k_replacer.cpp`](https://github.com/cmu-db/bustub/blob/master/src/buffer/lru_k_replacer.cpp "View Source Code"). Note that `LRUKReplacer` is a standalone class and is **not** related to any of the other `Replacer` classes. You are only expected to implement the LRU-K replacement policy, and you don't have to implement the LRU or Clock replacement policy (even though there is a corresponding file for it).

**The LRU-K algorithm evicts a frame whose backward _k-distance_ is the maximum of all frames in the replacer.** Backward k-distance is computed as the difference in time between the current timestamp and the timestamp of kth previous access. A frame with fewer than k historical accesses is given +inf as its backward k-distance. If multiple frames have +inf backward k-distance, the replacer evicts the frame with the earliest overall timestamp (i.e., the frame whose least-recent recorded access is the overall least recent access).

The maximum size of the `LRUKReplacer` is the same as the size of the buffer pool since it contains placeholders for all of the frames in the `BufferPoolManager`. However, not all frames in the replacer may be considered as evictable at any given time. The size of `LRUKReplacer` is represented by the number of _evictable_ frames. The `LRUKReplacer` is first initialized to have no frames in it. Only when a frame is marked as evictable will replacer's size will increase. Similarly, when a frame is pinned or not in use, the replacer's size will decrease.

You will need to implement the following methods for LRU-K as defined in the header file ( [`src/include/buffer/lru_k_replacer.h`](https://github.com/cmu-db/bustub/blob/master/src/include/buffer/lru_k_replacer.h "View Source Code")) and in the source file ( [`src/buffer/lru_k_replacer.cpp`](https://github.com/cmu-db/bustub/blob/master/src/buffer/lru_k_replacer.cpp "View Source Code")):

- `Evict() -> std::optional<frame_id_t>` : Evict the frame that has the largest backward k-distance compared to all other **evictable** frames being tracked by the `Replacer`. If there are no evictable frames, return `std::nullopt`.

- `RecordAccess(frame_id_t frame_id)` : Record that the given frame has been accessed at the current timestamp. This method should be called after a page has been pinned in the `BufferPoolManager`.

- `Remove(frame_id_t frame_id)` : Clear all access history associated with a frame. This method should be called only when a page is deleted in the `BufferPoolManager`.

- `SetEvictable(frame_id_t frame_id, bool set_evictable)` : This method controls whether a frame is evictable or not. It also controls the `LRUKReplacer`'s size. You'll know when to call this function when you implement the `BufferPoolManager`. To be specific, **when the pin count of a page hits 0, its corresponding frame should be marked as evictable.**
- `Size() -> size_t` : This method returns the number of evictable frames that are currently in the `LRUKReplacer`.


The implementation details are up to you. You are allowed to use built-in STL containers. You may assume that you will not run out of memory for these data structures ( **you cannot assume the same for the buffer pool in Task #3, you _will_ run out of available frames**). You must make sure that your implementation is thread-safe.

If you would like to read more about the LRU-K replacement algorithm, refer to this [paper](https://www.cs.cmu.edu/~natassa/courses/15-721/papers/p297-o_neil.pdf).

## Task \#2 - Disk Scheduler

This component is responsible for scheduling read and write operations on the `DiskManager`. You will implement a class called `DiskScheduler` in [`src/include/storage/disk/disk_scheduler.h`](https://github.com/cmu-db/bustub/blob/master/src/include/storage/disk/disk_scheduler.h "View Source Code") and its corresponding implementation file in [`src/storage/disk/disk_scheduler.cpp`](https://github.com/cmu-db/bustub/blob/master/src/storage/disk/disk_scheduler.cpp "View Source Code").

The disk scheduler can be used by other components (in this case, your `BufferPoolManager` in Task #3) to queue disk requests, represented by a `DiskRequest` struct (already defined in [`src/include/storage/disk/disk_scheduler.h`](https://github.com/cmu-db/bustub/blob/master/src/include/storage/disk/disk_scheduler.h "View Source Code")). The disk scheduler will maintain a background worker thread which is responsible for processing scheduled requests.

The disk scheduler will utilize a shared queue (channel) to schedule and process the `DiskRequest` s. One thread will add a request to the queue, and the disk scheduler's background worker will process the queued requests. We have provided a `Channel` class in [`src/include/common/channel.h`](https://github.com/cmu-db/bustub/blob/master/src/include/common/channel.h "View Source Code") to facilitate the thread-safe sharing of data between threads, but feel free to use your own implementation if you find it necessary.

The `DiskScheduler` constructor and destructor are already implemented and are responsible for creating and joining the background worker thread. You will only need to implement the following methods as defined in the header file ( [`src/include/storage/disk/disk_scheduler.h`](https://github.com/cmu-db/bustub/blob/master/src/include/storage/disk/disk_scheduler.h "View Source Code")) and in the source file ( [`src/storage/disk/disk_scheduler.cpp`](https://github.com/cmu-db/bustub/blob/master/src/storage/disk/disk_scheduler.cpp "View Source Code")):

- `Schedule(DiskRequest r)` : Schedules a request for the `DiskManager` to execute. The `DiskRequest` struct specifies whether the request is for a read or write, where the data should be read from / written into, and the page ID for the operation. The `DiskRequest` also includes a `std::promise` whose value should be set to true once the request is processed. See below for more information about `std::promise`.

- `StartWorkerThread()` : The startup method for the background worker thread which processes the scheduled requests. The worker thread is created in the `DiskScheduler` constructor and calls this method. This worker thread is responsible for receiving queued requests and dispatching them to the `DiskManager`. Remember to set the value correctly on the `DiskRequest`'s callback to signal to the request issuer that the request has been completed. This should not return until the `DiskScheduler`'s destructor is called.


We mentioned that one of the fields of a `DiskRequest` is a `std::promise`. If you are unfamiliar with C++ promises and futures, you can check out the documentation [here](https://en.cppreference.com/w/cpp/thread/promise). For the purposes of this project, they essentially provide a callback mechanism for a thread to know when their scheduled request is completed. To see an example of how they might be used, check out `disk_scheduler_test.cpp`.

Again, the implementation details are up to you. You must make sure that your implementation is thread-safe.

### Disk Manager

The header containing the `DiskManager` class is located at ( [`src/include/storage/disk/disk_manager.h`](https://github.com/cmu-db/bustub/blob/master/src/include/storage/disk/disk_manager.h "View Source Code")). It reads page data from disk and writes data to disk. Your disk scheduler will use `DiskManager::ReadPage()` and `DiskManager::WritePage()` while it is processing a read or write request.

## Task \#3 - Buffer Pool Manager

Finally, you must implement the buffer pool manager ( `BufferPoolManager`)! Echoing the beginning of this page, the `BufferPoolManager` is responsible for fetching database pages from disk with the `DiskScheduler` and storing them in memory. The `BufferPoolManager` can also schedule writes of dirty pages out to disk when it is either explicitly instructed to do so or when it needs to evict a page to make space for a new page.

Your `BufferPoolManager` implementation will use the `LRUKReplacer` and `DiskScheduler` classes that you created in the previous steps of this assignment. The `LRUKReplacer` will keep track of when pages are accessed so that it can decide which frame to evict when it must make room for a new page. The `DiskScheduler` will schedule writes and reads to disk on the `DiskManager`.

We have provided a helper class called `FrameHeader`, which helps manage the in-memory frames. All access to page data should be through `FrameHeader` s. `FrameHeader` has a method called `GetData` that returns a raw pointer to its frame's memory, and the `DiskScheduler` / `DiskManager` will use this pointer to copy the contents of a physical page on disk into memory.

As a reminder, the buffer pool manager does not need to understand the contents of these pages. The only information that the `BufferPoolManager` knows about pages are the page IDs ( `page_id_t`) and the `FrameHeader` s they are stored inside of. Also, the `BufferPoolManager` will reuse the same `FrameHeader` object to store data as it moves back and forth between disk and memory. In other words, all `FrameHeader` s will store many different pages throughout the lifetime of the system.

### Concurrency

When implementing a multi-threaded buffer pool manager, we must take care to synchronize data access. This means that we do not want multiple copies of the same page in different frames of the buffer pool. If we allowed this, we would encounter this scenario:

- Thread T1 loads page X1 from disk into a frame and starts modifying page X1, and let's call this new version page X2.
- Thread T2 loads page X1 from disk into a different frame and starts modifying this version of page X1, and let's call this other modified version page X3.
- Thread T2 finishes writing and writes X3 back to disk.
- Thread T1 finishes writing and writes X2 back to disk.
- Data race ☠️!

Thus, we keep only 1 version of a page in memory at a time to prevent data synchronization races. Additionally, to prevent us from evicting a page while threads are accessing it, we maintain a reference count / pin count on the frame that stores it. Finally, in order to keep track of which pages are stored in which frames, we also maintain a page table using a hash map that maps page IDs to frames.

The pin count of a frame is the number of threads that have access to the page's data. As long as the pin count on a frame is greater than 0 (implying there is at least 1 thread accessing the page's data), the buffer pool manager is not allowed to evict the page being stored. You can maintain the pin count using the atomic field `pin_count_` in the `FrameHeader` class. Keep in mind that `pin_count_` is separate from `LRUKReplacer::SetEvictable`, so you will need to make sure those are synced properly. You will also have to update the `is_dirty_` flag of the `FrameHeader` when you think it is necessary. If this flag is set when you want to evict a page, you will have to act accordingly to maintain data synchronization between memory and disk.

Last, but certainly not least, you will have to implement both `ReadPageGuard` and `WritePageGuard`. These classes are RAII objects that provide thread-safe read / write access to the underlying pages. See the implementation section below for more information. You will probably need to implement this in tandem with the `BufferPoolManager` methods `CheckedReadPage` and `CheckedWritePage`. However, if you want to make sure your page guard implementations are correct, you may choose to implement `BufferPoolManager::GetPinCount` first and then stitch together something that will pass the page guard tests.

### Implementation

You will need to implement the following page guard methods defined in the header file ( [`src/include/storage/page/page_guard.h`](https://github.com/cmu-db/bustub/blob/master/src/include/storage/page/page_guard.h "View Source Code")) and in the source file ( [`src/storage/page/page_guard.cpp`](https://github.com/cmu-db/bustub/blob/master/src/storage/page/page_guard.cpp "View Source Code")):

- `ReadPageGuard::ReadPageGuard()`
- `ReadPageGuard::ReadPageGuard(ReadPageGuard &&that)`
- `ReadPageGuard::operator=(ReadPageGuard &&that) -> ReadPageGuard &`
- `ReadPageGuard::Drop()`
- `WritePageGuard::WritePageGuard()`
- `WritePageGuard::WritePageGuard(WritePageGuard &&that)`
- `WritePageGuard::operator=(WritePageGuard &&that) -> WritePageGuard &`
- `WritePageGuard::Drop()`

**You _do not_ have to implement these methods _before_ the `BufferPoolManager` methods. You should probably work on them at the same time.**

These methods implement move semantics and RAII for the page guards. If you are unfamiliar with these things, please familiarize yourself with learning materials online. There are many great resources (including articles, Microsoft tutorials, YouTube videos) that explain this in depth. **You should not attempt to implement these methods without having a solid understanding of how RAII and move semantics work.**

There will likely be a lot of code duplication here (i.e. the two guards should be identical except for a handful of lines). If you want to derive these classes based on a class you create, you are welcome to do so. Just make sure that no interfaces and method signatures are changed!

You will also need to implement the following `BufferPoolManager` methods defined in the header file ( [`src/include/buffer/buffer_pool_manager.h`](https://github.com/cmu-db/bustub/blob/master/src/include/buffer/buffer_pool_manager.h "View Source Code")) and in the source file ( [`src/buffer/buffer_pool_manager.cpp`](https://github.com/cmu-db/bustub/blob/master/src/buffer/buffer_pool_manager.cpp "View Source Code")):

- `NewPage() -> page_id_t`
- `DeletePage(page_id_t page_id) -> bool`
- `CheckedWritePage(page_id_t page_id) -> std::optional<WritePageGuard>`
- `CheckedReadPage(page_id_t page_id) -> std::optional<ReadPageGuard>`
- `FlushPage(page_id_t page_id) -> bool`
- `FlushAllPages()`
- `GetPinCount(page_id_t page_id)`

**All of these methods have detailed documentation comments in the source file. Make sure to read all of these in their entirety! They will contain many useful hints.**

You do not need to make your buffer pool manager super efficient. For all of the public `BufferPoolManager` method, holding the buffer pool latch from beginning to end should be enough ( **except for when you need to release it early to prevent deadlocks**). However, you do need to ensure that your buffer pool manager has reasonable performance, otherwise there will be problems in future projects. You can compare your benchmark result (QPS.1 and QPS.2) with other students and see if your implementation is too slow.

Please refer to the source files ( [`src/storage/page/page_guard.cpp`](https://github.com/cmu-db/bustub/blob/master/src/storage/page/page_guard.cpp "View Source Code") and [`src/buffer/buffer_pool_manager.cpp`](https://github.com/cmu-db/bustub/blob/master/src/buffer/buffer_pool_manager.cpp "View Source Code")) for _significantly_ more detailed specifications and documentation.

## Leaderboard Task (Optional)

For this project's leaderboard challenge, we are doing a benchmark on your buffer pool manager with a special storage backend.

Optimizing for the leaderboard is optional (i.e., you can get a perfect score in the project after finishing all previous tasks).
However, your solution must finish the leaderboard test with a correct result and without deadlock and segfault.

The leaderboard test is compiled with the release profile:

```
mkdir cmake-build-relwithdebinfo
cd cmake-build-relwithdebinfo
cmake .. -DCMAKE_BUILD_TYPE=RelWithDebInfo
make -j `nproc` bpm-bench
# The command below is just for illustrating how the bpm-bench test works.
# We are NOT running tests with the same parameter for the leaderboard test.
./bin/bustub-bpm-bench --duration 5000 --latency 1

```

We strongly recommend you to checkpoint your code before optimizing for leaderboard tests, so that if these optimizations cause problems in future projects, you can always revert them.

In the leaderboard test, we will have multiple threads accessing the pages on the disk. There are two types of threads running in the benchmark:

1. Scan threads. Each scan thread will read pages on the disk sequentially. There will be 8 scan threads.
2. Get threads. Each get thread will randomly select and update a page using the [zipfian distribution](https://en.wikipedia.org/wiki/Zipf%27s_law).
    There will be 8 get threads.

We will run the benchmark three times on the in-memory storage backend, each time for 30 seconds. For the first and the second time, it will run directly with different buffer pool and replacer settings.
For the third time, we will add a 1-millisecond latency to each of the random read/write operation, and 0.1ms latency to sequential/local read/write
operations. See `DiskManagerUnlimitedMemory` class for more information.

The final score is computed as a weighted QPS of scan and get operations, with and without latency respectively:

```
scan_qps_large / 1000 + get_qps_large / 1000 + scan_qps_small / 1000 + get_qps_small / 1000 + scan_qps_1ms + get_qps_1ms

```

**Recommended Optimizations**

1. Better replacer algorithm. Given that get workload is skewed (i.e., some pages are more frequently accessed than others),
    you can design your LRU-k replacer to take page access type into consideration, so as to reduce page miss.
2. Parallel I/O operations. Instead of processing one request at a time in your disk scheduler, you can issue multiple requests
    to the disk manager at the same time. This optimization will be very useful in modern storage devices, where concurrent
    access to the disk can make better use of the disk bandwidth. You should handle the case that multiple operations to the same page
    are in the queue and the end result of these requests should be as if they are processed in order. In a single thread,
    they should have read-after-write consistency.
3. To achieve true parallelism in disk scheduler, you will also need to allow your buffer pool manager can handle multiple
    `ReadPage` and `WritePage` requests and evicting multiple pages at the same time. You might need to bring in a conditional variable in
    your buffer pool manager to manage free pages.
4. You can use our provided lock-free queue implementation in `third_party/readerwriterqueue` and
    create your own `promise` implementation that is compatible with `std::promise` so as to lower
    the overhead of inter-thread communication. Note that in this project, all requests must go
    through the `DiskScheduler`'s background thread.

### Leaderboard Policy

- Submissions _with leaderboard bonus_ are subject to manual review by TAs.
  - By saying "review", it means that TAs will manually look into your code, or if they are unsure whether an optimization is correct or not by looking, they will make simple modification to existing test cases to see if your leaderboard optimization _correctly_ handled the specific cases that you want to optimize.
  - One example of simple modification: change the buffer pool manager size for the benchmark.
- Your optimization should not affect correctness. You can optimize for specific cases, but it should work for all inputs in your optimized cases.
  - Disallowed: compare the plan with the leaderboard test and convert it to `ValueExecutor` with the output table in project 3. That’s because your optimization should work for all table contents. Hardcoding the answer will yield wrong result in some cases.
- You should not try detecting whether your submission is running leaderboard test by using side information.
  - Unless we allow you to do so.
  - Disallowed: use `#ifdef NDEBUG`, etc.
- Submissions with obvious correctness issues will not be assigned leaderboard bonus.
- You cannot use late days for leaderboard tests.
- If you are unsure about whether an optimization is reasonable, you should post on Piazza or visit any TA's office hour.

# Instructions

See the [Project #0 instructions](https://15445.courses.cs.cmu.edu/fall2024/project0/#instructions) on how to create your private repository and setup your development environment.

## Testing

You can test the individual components of this assigment using our testing framework. We use [GTest](https://github.com/google/googletest) for unit test cases. There are three separate files that contain tests for each component:

- `LRUKReplacer`: [`test/buffer/lru_k_replacer_test.cpp`](https://github.com/cmu-db/bustub/blob/master/test/buffer/lru_k_replacer_test.cpp "View Source Code")
- `DiskScheduler`: [`test/storage/disk_scheduler_test.cpp`](https://github.com/cmu-db/bustub/blob/master/test/storage/disk_scheduler_test.cpp "View Source Code")
- `PageGuard`: [`test/storage/page_guard_test.cpp`](https://github.com/cmu-db/bustub/blob/master/test/storage/page_guard_test.cpp "View Source Code")
- `BufferPoolManager`: [`test/buffer/buffer_pool_manager_test.cpp`](https://github.com/cmu-db/bustub/blob/master/test/buffer/buffer_pool_manager_test.cpp "View Source Code")

You can compile and run each test individually from the command-line:

```
$ make lru_k_replacer_test -j `nproc`
$ ./test/lru_k_replacer_test

```

You can also run `make check-tests` to run ALL of the test cases. Note that some tests are disabled as you have not implemented future projects. You can disable tests in GTest by adding a `DISABLED_` prefix to the test name.

**Important:** These tests are only a subset of the all the tests that we will use to evaluate and grade your project. You should write additional test cases on your own to check the complete functionality of your implementation.

## Formatting

Your code must follow the [Google C++ Style Guide](https://google.github.io/styleguide/cppguide.html). We use [Clang](https://clang.llvm.org/) to automatically check the quality of your source code. Your project grade will be **zero** if your submission fails any of these checks.

Execute the following commands to check your syntax. The `format` target will automatically correct your code. The `check-lint` and `check-clang-tidy-p1` targets will print errors and instruct you how to fix it to conform to our style guide.

```
$ make format
$ make check-clang-tidy-p1

```

## Memory Leaks

For this project, we use [LLVM Address Sanitizer (ASAN) and Leak Sanitizer (LSAN)](https://clang.llvm.org/docs/AddressSanitizer.html) to check for memory errors. To enable ASAN and LSAN, configure CMake in debug mode and run tests as you normally would. If there is memory error, you will see a memory error report. Note that macOS **only supports address sanitizer without leak sanitizer**.

In some cases, address sanitizer might affect the usability of the debugger. In this case, you might need to disable all sanitizers by configuring the CMake project with:

```
$ cmake -DCMAKE_BUILD_TYPE=Debug -DBUSTUB_SANITIZER= ..

```

## Development Hints

You can use `BUSTUB_ASSERT` for assertions in debug mode. Note that the statements within `BUSTUB_ASSERT` will NOT be executed in release mode.
If you have something to assert in all cases, use `BUSTUB_ENSURE` instead.

Post all of your questions about this project on Piazza. Do **not** email the TAs directly with questions.

We encourage you to use a graphical debugger to debug your project if you are having problems.

If you are having compilation problems, running `make clean` does not completely reset the compilation process. You will need to delete your build directory and run `cmake ..` again before you rerun `make`.

# Grading Rubric

Each project submission will be graded based on the following criteria:

1. Does the submission successfully execute all of the test cases and produce the correct answer?

2. Does the submission execute without any memory leaks?

3. Does the submission follow the code formatting and style policies?


Note that we will use additional test cases to grade your submission that are more complex than the sample test cases that we provide you.

# Late Policy

See the [late policy](https://15445.courses.cs.cmu.edu/fall2024/syllabus.html#late-policy) in the syllabus.

# Submission

After completing the assignment, you can submit your implementation to Gradescope:

- **[https://www.gradescope.com/courses/817456](https://www.gradescope.com/courses/817456)**

Running `make submit-p1` in your `build/` directory will generate a `zip` archive called `project1-submission.zip` under your project root directory that you can submit to Gradescope.

You can submit your answers as many times as you like and get immediate feedback.

## Notes on Gradescope and Autograder

1. If you are timing out on Gradescope, it's likely because you have a deadlock in your code or your code is too slow and does not run in 60 seconds. If your code is too slow it may be because your `LRUKReplacer` is not efficient enough.
2. The autograder will not work if you are printing too many logs in your submissions.
3. If the autograder did not work properly, make sure that your formatting commands work and that you are submitting the right files.
4. The leaderboard benchmark score will be calculated by stress testing your `buffer_pool_manager` implementation.

CMU students should use the Gradescope course code announced on Piazza.

# Collaboration Policy

- Every student has to work individually on this assignment.
- Students are allowed to discuss high-level details about the project with others.
- Students are **not** allowed to copy the contents of a white-board after a group meeting with other students.
- Students are **not** allowed to copy the solutions from another colleague.

**WARNING:** All of the code for this project must be your own. You may not copy source code from other students or other sources that you find on the web. Plagiarism **will not** be tolerated. See CMU's [Policy on Academic Integrity](https://www.cmu.edu/policies/student-and-student-life/academic-integrity.html) for additional information.