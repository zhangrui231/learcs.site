---
title: FAQ
---

### 环境配置常见问题

请查看[环境配置常见问题解答文档](https://docs.google.com/document/d/1xsSWgYAFNIiJQEFC3gxNpvZf5DhEphDocRiCuyHkoqY/edit?usp=sharing)，获取更多环境配置方面的帮助！

### 我找不到 IntelliJ 的插件！

你可能安装了旗舰版，而不是社区版。请确认你安装的是社区版！

### 当我尝试推送代码时，出现错误 "failed to push some refs"

如果提示信息显示 “Updates were rejected because the tip of your current branch was behind its remote counterpart”，请参考 [Git WTFS 的相关章节](../../guides/git/wtfs/#error-failed-to-push-some-refs)。

### 我为 GitHub 设置了 SSH，但出现错误 "Connection timed out"

SSH 仅适用于安全的（受密码保护的）网络。如果您连接到 CalVisitor 或其他不安全的网络，尝试与 GitHub 通信的 git 命令将会失败。

要解决此问题，请连接到 eduroam 或安全的 WiFi 网络。

### 有同学在克隆个人仓库时遇到了 "Support with password authentication was removed..." 的问题。

如果使用 `https` 方式克隆不起作用，请尝试使用 `ssh` 方式克隆：

```shell
git clone git@github.com:Berkeley-CS61B-Student/{{site.semester}}-s***.git
```

### curl: (35) schannel: next InitializeSecurityContext failed: Unknown error (0x80092012) - The revocation function was unable to check revocation for the certificate.

将 `--ssl-no-revoke` 标志添加到 curl 命令（例如，如果之前的命令是 `curl https://www.google.com`，将其更改为 `curl --ssl-no-revoke https://www.google.com`）。

### WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED

在错误的底部，应该显示 `Host key for [something] has changed...`。如果 `[something]` 是 `github.com` 或任何教学机器，请继续阅读本指南。否则，请在 Ed 上提出一个私密问题。

要修复此错误，请运行 `ssh-keygen -R [something]`，并将 `[something]` 替换为错误消息中包含的内容。这通常意味着远程机器已更改其主机密钥。如果您不信任该机器，请验证新的主机密钥是否正确（GitHub 主机密钥可在此处找到 (here)[https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints]）。

### 在 Gradescope 上，我缺少必需的文件

首先，请确保您已推送您的代码！您可以通过在 GitHub 上查看您的仓库来检查这一点。

其次，预期的文件结构是

```text
sp24-***
└── lab01
    ├── src
    │   └── Arithmetic.java
    └── tests
        └── ArithmeticTest.java
```

请注意，这些文件位于 `lab01` 目录中。如果文件不在 `lab01` 中，则自动评分器将无法找到它们。

如果您确定您已正确完成上述操作，则您可能拥有两个 `sp24-s*` 文件夹的副本（在您的计算机上位于不同的位置）。请确保您的终端和 IntelliJ 中的文件夹匹配，否则您的更改将不会被记录！您可以通过运行 `pwd` 来查看终端的当前工作目录。

### 我正在使用 Mac，并且出现 "Unable to load Java Runtime Environment"

运行 `brew reinstall java`，并查找以 `sudo ln` 开头的命令，该命令位于 "For the system wrappers to find this JDK..." 下方。复制粘贴并运行该命令。

之后，您新安装的 Java 应该会出现在 IntelliJ 中。

### 在 IntelliJ 中，当我打开 `Arithmetic.java` 时，顶部的 import 语句显示为灰色。

在某些情况下，您可能会得到类似这样的结果：

![Library Import Issue](/img/cs61b/import_algs4.png)

IntelliJ 可能非常奇怪 - 如果您已经确保您的 `library-sp24` 存在（导航到 File --> Project Structure --> Libraries 进行检查，确保一切正常），然后尝试删除该库，重新导入它并单击 "Apply"。请务必在退出窗口之前点击 "OK"。
