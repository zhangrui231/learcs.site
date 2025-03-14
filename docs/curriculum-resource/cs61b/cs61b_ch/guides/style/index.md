---
title: Style Guide
description: 61B style guide.
---

:::danger
我们**不会因为代码风格不符合规范而恢复提交权限**。请提前规划并确保代码风格正确！ 已经警告过你了。
:::

关于本代码风格指南，有几点说明：我们力求使其尽可能贴近 IntelliJ 默认的代码风格检查器。此外，该检查器还包含一些 IntelliJ 本身不会检查的“代码质量”检查。

:::info
> 运行自动代码风格检查器可能是学习这些规则的更简单方法。你可以在 IntelliJ 中这样运行代码风格检查器：
> 在左侧边栏的文件上点击右键，然后选择“Check Style”。
> 这会在选定的文件中生成一份代码风格错误列表。
> 再次运行代码风格检查器之前，请确保保存或重新编译文件。
:::

![intellij 中打开右键菜单的屏幕截图](/img/cs61b/intellij_style_checker.png)

本代码风格指南可能并不完善。我已尽力使其尽可能全面，但可能遗漏了一些新添加规则的描述。

## 空格

1. 每个文件必须以换行符结尾。

2. 文件中不得包含水平制表符。仅使用空格进行缩进。

3. 不要放置空格：

   - 在泛型类型声明的 `<` 和 `>` 之间（例如，`List<Integer>`，而不是 `List <Integer>` 或 `List< Integer >`）。
   - 在前缀运算符 `!`、`--`、`++`、一元 `-` 或一元 `+` 之后。
   - 在分号 `;` 或后缀运算符 `--` 和 `++` 之前。
   - 在 `(` 之后或 `)` 之前。
   - 在 `.` 之后。

4. 应该添加空格：

   - 在分号 `;`、逗号 `,` 或类型转换之后（例如，`(String) x`，而不是 `(String)x`）。
   - 在二元运算符（例如，`*`、`+`）和比较运算符周围。
   - 在赋值运算符（例如，`=`、`+=`）周围。
   - 在三元条件运算符中的 `?` 和 `:` 周围（`x > 0 ? x : -x`）。
   - 在关键字 `assert`、`catch`、`do`、`else`、`finally`、`for`、`if`、`return`、`try` 和 `while` 周围。

5. 通常，如果需要使用多行来表示单个语句，请在运算符之前断行（插入换行符），如

   ```text
   ... + 20 * X
       + Y;
   ```

6. 不要用空格分隔方法名称和方法调用中的 `(`。 但是，如果行很长，你可以用换行符分隔它们，然后用空格缩进。

### 缩进

1. 基本缩进单位是 4 个空格。

2. 对于每个块级别，按基本缩进单位缩进代码（块通常用 `{` 和 `}` 括起来），如

   ```java
   if (x > 0) {
      r = -x;
   } else {
      r = x;
   }
   ```

3. 将 `case` 标签缩进到其封闭 `switch` 之外，如
switch (op) {
      case '+':
            addOpnds(x, y);
            break;
      default:
            ERROR();
   }
   
4. 续行按照基本缩进量进行缩进。

## 花括号

1. 所有 `if`、`while`、`do` 和 `for` 语句的代码块都应使用 `{` `}` 花括号括起来。

2. `}` 花括号应该和其后的 `else`、`finally` 或 `catch` 位于同一行，例如：

      if (x > 0) {
      y = -x;
   } else {
      y = x;
   }
   
3. 将代码块的起始花括号 `{` 放在行尾。 通常，它应该位于包含它的 `if`、`for`、`while`、`switch`、`do` 语句、方法头或类定义的末尾。 如果因为行长度限制必须换行，则 `{` 另起一行，且不缩进。

## 代码注释

<!--
   目前这实际上并未强制执行 -- 如果你想启用它，请查看
   https://checkstyle.sourceforge.io/config_javadoc.html
-->

1. 方法应该使用 Javadoc 注释来解释其行为、参数（使用 `@param` 标签等）以及返回值类型。

2. 对于返回非 `void` 值的方法，必须在 Javadoc 注释中使用 `@return` 标签，或者在注释文本中包含 “return”、“returning” 或 “returns” 等词语来描述返回值。

3. 每个 Javadoc 注释都必须以一个格式正确的句子开头，首字母大写，句尾使用句号。

## 命名规范

1. 静态 `final` 常量的名称必须全部使用大写字母（例如：`RED`、`DEFAULT_NAME`）。

2. 参数、局部变量和方法的名称必须以小写字母开头，或者仅由一个大写字母构成。

3. 类型（包括泛型类型参数）的名称必须以大写字母开头。

4. 包的名称必须以小写字母开头。

5. 实例变量和非 `final` 类变量（静态变量）的名称必须以小写字母或下划线 `_` 开头。

## 导入语句

<!-- 1. 不要使用 'import PACKAGE.*'，除非包是 java.lang.Math、
   java.lang.Double 或 org.junit.Assert。 'import static CLASS.*' 可以。 -->
<!-- IntelliJ 会自动更改为星号 -->

1. 不要重复导入同一个类或静态成员。

2. 不要导入未使用的类或成员。

## Java 编码风格的其他约定

1. 声明数组类型时，`[]` 应该位于元素类型名称之后，而不是声明符之后。 编写 "String[] names"，而不是 "String names[]"。

2. 方法、类或字段的修饰符应该按照以下顺序书写：

   1. public、protected 或 private。
   2. abstract 或 static。
   3. final、transient 或 volatile。
   4. synchronized。
   5. native。
   6. strictfp。

3. 如果修饰符是多余的，则不要显式地添加：1. 接口或注解中的方法，请勿显式声明为 `public` 或 `abstract`。
2. 接口或注解中的字段，请勿显式声明为 `static`、`public` 或 `final`。
3. `final` 类中的方法，请勿显式声明为 `final`。
4. 嵌套接口请勿声明为 `static`。

5. 控制语句中避免使用空代码块（即 `{}` 内部仅包含空格或注释）。有一个例外：`catch` 代码块可以仅包含以下形式的注释：

   ```java
   /* Ignore EXCEPTIONNAME. */
   ```

6. 避免在代码中使用“魔法数字”，应使用具有实际意义的常量代替，例如：

   ```java
   public static final int MAX_SIZE = 100;
   ```

   例外情况是数字 -1、0、1、2、3、4、5、6、7、8、9、0.25、0.5。

7. 使用 `b` 代替 `b == true`，使用 `!b` 代替 `b == false`。

8. 将

   ```java
   if (condition) {
      return true;
   } else {
      return false;
   }
   ```

   替换为

   ```java
   return condition;
   ```

9. 只有类的静态 `final` 成员变量才可以是 `public` 的。其他成员变量必须是 `private` 或 `protected` 的。这也适用于嵌套类。

10. 仅包含静态方法和字段的类，不应提供 `public`（或默认）构造函数。

11. 仅包含私有构造函数的类，必须声明为 `final`。

## 避免潜在错误

1. 如果一个类重写了 `equals` 方法，它也必须重写 `hashCode` 方法。这将在我们学习 `hashCode` 之后应用。

2. 局部变量和参数不应与类成员变量同名，避免产生歧义。对于简单的 getter/setter 方法，推荐的做法是在成员变量名前添加下划线 `_`，例如：

   ```java
   public double getWidth() {
      return _width;
   }

   public void setWidth(double width) {
      _width = width;
   }
   ```

3. 避免使用嵌套赋值，例如 `if ((x = next()) != null) ...`。虽然在 C 语言中可能比较常见，但在 Java 中通常不推荐。

4. 在每个 `switch` 语句中包含一个 `default` 分支。

5. `switch` 语句的每个 `case` 分支，都应以 `break` 语句或 `/* fall through */` 注释结尾。

6. 字符串字面量比较应使用 `equals()` 方法，而非 `==`。例如：

   ```java
   if (x.equals("something"))
   ```

   而不是

   ```java
   if (x == "something")
   ```

   某些特殊情况下，可能需要使用 `==` 进行比较，但在本课程中不太会遇到。

## 限制

1. 任何文件都不能超过 2000 行。

2. 任何行都不能超过 120 个字符。

3. 任何方法都不能超过 80 行。

4. 任何方法都不能超过 8 个参数。
5. 每个文件有且仅有一个外部类（嵌套类没问题）。
