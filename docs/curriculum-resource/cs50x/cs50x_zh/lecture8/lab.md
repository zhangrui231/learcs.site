---
sidebar_position: 4
description: lecture7 SQL Lab | 实验
title: Lab
---

# 实验七：歌曲数据 - CS50x 2023

编写 SQL 查询来回答有关歌曲数据库的问题。

## 入门

打开 [VS Code](https://cs50.dev/)。

首先，在终端窗口中点击，然后单独执行 `cd`。您应该发现“提示符”类似于以下内容。

在该终端窗口中点击，然后执行

```
wget https://cdn.cs50.net/2022/fall/labs/7/songs.zip

```

然后按 Enter 键。这将在您的 codespace 中下载一个名为 `songs.zip` 的 ZIP 文件。请务必注意 `wget` 命令后与 URL 之间的空格，以及其他任何字符的正确性！

现在执行

来创建名为 `songs` 的文件夹。您不再需要该 ZIP 文件，因此您可以执行

在提示符下输入 'y' 并按 Enter 键，删除已下载的 ZIP 文件。

现在输入

然后按 Enter 键进入该目录。提示符现在应类似于以下内容。

如果一切顺利，您应该能看到 8 个 .sql 文件、`songs.db` 和 `answers.txt`。

如果遇到问题，请重新按照步骤操作，检查出错之处！

## 理解

您将获得一个名为 `songs.db` 的文件，这是一个 SQLite 数据库，存储了来自 [Spotify](https://developer.spotify.com/documentation/web-api/) 的歌曲及其艺术家数据。该数据集包含了 2018 年 Spotify 上播放量最高的 100 首歌曲。在终端窗口中，运行 `sqlite3 songs.db`，从而您可以开始对数据库执行查询。

当 `sqlite3` 提示输入查询时，键入 `.schema` 并按 Enter 键。它会输出用于创建数据库中每个表的 `CREATE TABLE` 语句。通过查看这些语句，您可以了解每个表中的列。

此外，每首歌曲都有 `name` 和 `artist_id` (对应歌曲艺术家的 `id`)。歌曲还包含舞曲性、能量、调性、响度、语音性 (口语占比)、效价、节奏和时长等属性 (时长以毫秒为单位)。

您的任务是编写 SQL 查询，从一个或多个表中选取数据，以回答各种问题。完成之后，请思考 Spotify 如何在其年度 [Spotify Wrapped](https://en.wikipedia.org/wiki/Spotify_Wrapped) 活动中使用这些数据来分析听众的习惯。

## 实现细节

对于以下每个问题，您需要编写一个 SQL 查询，输出题目要求的结果。您的答案必须是一个 SQL 查询语句，但您可以在其中嵌套其他查询。您**不应该**对任何歌曲或艺术家的 `id` 做任何预设。即使歌曲或艺术家的 `id` 发生变化，您的查询也应该能正确执行。最后，每个查询应该只返回回答问题所必需的数据。例如，如果问题只要求输出歌曲名称，那么查询结果就不应该包含歌曲的节奏。
1. 在 `1.sql` 中，编写一个 SQL 查询来列出数据库中所有歌曲的名称。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。
2. 在 `2.sql` 中，编写一个 SQL 查询来按节奏递增的顺序列出所有歌曲的名称。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。
3. 在 `3.sql` 中，编写一个 SQL 查询来列出前 5 首最长的歌曲，按长度降序排列。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。
4. 在 `4.sql` 中，编写一个 SQL 查询，列出舞动性 (danceability)、能量 (energy) 和价值 (valence) 均大于 0.75 的歌曲名称。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。
5. 在 `5.sql` 中，编写一个 SQL 查询，返回所有歌曲的平均能量值。
    - 你的查询应该输出一个表，其中包含一个列和一行，其中包含平均能量值。
6. 在 `6.sql` 中，编写一个 SQL 查询，列出由 Post Malone 演唱的歌曲名称。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。
    - 你不应该对 Post Malone 的 `artist_id` 做任何假设。
7. 在 `7.sql` 中，编写一个 SQL 查询，返回 Drake 演唱的歌曲的平均能量值。
    - 你的查询应该输出一个表，其中包含一个列和一行，其中包含平均能量值。
    - 你不应该对 Drake 的 `artist_id` 做任何假设。
8. 在 `8.sql` 中，编写一个 SQL 查询，列出与其他艺术家合作的歌曲名称。
    - 与其他艺术家合作的歌曲，其歌曲名称中会包含“feat.”。
    - 你的查询应该输出一个表，其中包含一个用于每首歌曲名称的列。

### 演练

## 用法

除了在 `sqlite3` 中运行查询之外，你还可以在 VS Code 终端中运行以下命令来测试你的查询：

```
$ cat filename.sql | sqlite3 songs.db

```

其中 `filename.sql` 是包含你的 SQL 查询的文件。

### 提示

- 请参考[此 SQL 关键字参考](https://www.w3schools.com/sql/sql_ref_keywords.asp)，了解一些可能有用的 SQL 语法！

不确定如何解决？

### Spotify Wrapped

[Spotify Wrapped](https://en.wikipedia.org/wiki/Spotify_Wrapped) 是一项功能，展示 Spotify 用户过去一年播放次数最多的 100 首歌曲。 2021 年，Spotify Wrapped 为每位用户计算了[“音频光环”](https://newsroom.spotify.com/2021-12-01/learn-more-about-the-audio-aura-in-your-spotify-2021-wrapped-with-aura-reader-mystic-michaela/)，即“根据[他们的]年度热门歌曲和艺术家所决定的[他们的]两种最突出的情绪的解读”。 假设 Spotify 通过分析用户过去一年播放量最高的 100 首歌曲的平均能量值、价值和舞动性来确定其音频光环。 在 `answers.txt` 中，反思以下问题：

- 如果 `songs.db` 包含一位听众 2018 年排名前 100 的歌曲，你将如何描述他们的音频光环？
- 假设一下，为什么你计算这种光环的方式可能_不能_很好地代表听众。 你会提出哪些更有效的计算这种光环的方法？

请务必提交 `answers.txt` 以及你的每个 `.sql` 文件！

### 测试

执行以下命令以使用 `check50` 评估你的代码的正确性。

```
check50 cs50/labs/2023/x/songs

```

## 如何提交

在你的终端中，执行以下命令以提交你的作品。

```
submit50 cs50/labs/2023/x/songs

```

## 致谢

数据集来自 [Kaggle](https://www.kaggle.com/nadintamer/top-spotify-tracks-of-2018)。
