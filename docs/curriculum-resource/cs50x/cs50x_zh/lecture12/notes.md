---
sidebar_position: 1
description: lecture11 Cybersecurity Notes | 课程
title: Notes
---

# 网络安全 - CS50x 2023

- [网络安全 - CS50x 2023](#cybersecurity---cs50x-2023)
  - [网络安全](#cybersecurity)
  - [密码](#passwords)
  - [手机安全](#phone-security)
  - [双重身份验证](#two-factor-authentication)
  - [密码管理器](#password-managers)
  - [加密](#encryption)
  - [隐身模式](#incognito-mode)
  - [总结](#summing-up)

## [网络安全](#cybersecurity-1)

- 今天我们会简单介绍CS50课程中涉及的一些网络安全主题。

## [密码](#passwords)

- 密码是保护在线数据的一种手段。
- 以下是人们常用的密码：

    ```
    1. 123456
    2. 123456789
    3. 12345
    4. qwerty
    5. password
    6. 12345678
    7. 11111
    8. 123123
    9. 1234567890
    10. 1234567
    
    ```

- 如果你用的是上面这些密码，很可能已经有数百万人和你一样了！
- 攻击者通常会从这个列表开始入手。
- 坏人也很容易猜到你给密码加特殊符号的习惯。
- 你的密码可能比你想象的更不安全。

## [手机安全](#phone-security)
- 很多手机都用四位数的密码保护。
- 最简单的攻击方式就是“暴力破解”，也就是穷举所有可能的密码。
- 四位数的密码总共有 10,000 种可能。
- 如果每秒尝试一次，破解密码需要 10,000 秒。
- 然而，如果程序员创建一个程序来生成所有可能的代码，所需的时间将非常短。 考虑以下 Python 代码：

    ```
    from string import digits
    from itertools import product
    
    for passcode in product(digits, repeat=4):
        print(*passcode)
    
    ```

- 这段代码最多只需几秒就能破解你的密码，想想是不是有点可怕？
- 我们可以通过改用四位字母密码来提高安全性。 这样就能产生 7,311,616 种可能的密码组合。
- 如果包含大小写字母，可能性将超过 7800 万种。
- 想想看，我们该如何修改代码来破解这些密码呢？

    ```
    from string import ascii_letters
    from itertools import product
    
    for passcode in product(ascii_letters, repeat=4):
        print(*passcode)
    
    ```

- 我们甚至可以扩展到包含字母、数字和标点符号的四位密码。

    ```
    from string import ascii_letters, digits, punctuation
    from itertools import product
    
    for passcode in product(ascii_letters + digits + punctuation, repeat=4):
        print(*passcode)
    
    ```

- 如果扩展到八位，包含大小写字母、数字和符号，就会有 6,095,689,385,410,816 种可能的组合。
- 下面的代码展示了如何穷举所有可能性：

    ```
    from string import ascii_letters, digits, punctuation
    from itertools import product
    
    for passcode in product(ascii_letters + digits + punctuation, repeat=8):
        print(*passcode)
    
    ```

- 在数字世界里，你的密码只要比别人的更难破解，就能降低自己被攻击的风险，因为攻击者会优先选择更容易的目标。
- 使用这么长的密码，缺点就是难记。
- 所以，还可以采取其他防御措施来拖延攻击者。 比如，有些手机厂商会锁定多次输错密码的用户。
- 安全就是在增强安全性和保持便利性之间找到一个平衡点。

## [Two-factor Authentication](#two-factor-authentication)

- 增加额外的验证方式可以提高安全性。 但这也增加了成本，比如你可能无法随时使用第二重验证。
- 安全策略始终需要在安全性和用户便利性之间取得平衡。

## [Password Managers](#password-managers)

- 密码管理器可以帮你创建并记住非常复杂的密码。
- 密码管理器保护的密码，被破解的可能性极低。
- 当然，你肯定希望密码管理器本身是安全的。 但是，如果有人获得对你的密码管理器的访问权限，他们将可以访问你的所有密码。
- 总的来说，你更可能受到网络上其他人的威胁，而不是和你住在一起的人。
- 就像之前提到的，你需要在安全性和便利性之间权衡。

## [Encryption](#encryption)
-   加密是一种对数据进行模糊处理的技术，使得只有发送者和预定的接收者才能读取这些数据。
-   在本课程的早期，我们学习过一种简单的算法，通过“位移”一个或多个字符来实现基本的加密。
-   端到端加密是指加密和解密过程均在同一系统上完成，无需中间环节。 这样可以防止中间人或恶意行为者窥探您的数据。
-   全盘加密是指只有输入密码才能访问设备上的所有内容。 强烈建议您在电脑上启用此功能（但千万别忘了密码！）。
-   勒索软件是一种恶意攻击，攻击者会对您的数据进行加密。 实际上，他们会挟持您的数据，以此勒索赎金。

## [隐身模式](#incognito-mode)

-   在 Chrome 浏览器中，隐身模式可以防止电脑记录您的浏览历史，并清除与这些网站相关的本地存储信息。 Cookie 这种用于跟踪网站访问的小文件，也会在隐身模式下被清除。

## [总结](#summing-up)

-   使用密码管理器软件。
-   使用双重身份验证。
-   使用（端到端）加密。
