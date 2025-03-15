---
title: Lab 11 Programs as Data, Macros
---

# Lab 11: 程序作为数据，宏

_截止日期：4月17日周三晚11:59_

## 入门文件

下载 [lab11.zip](/resource/cs61a/lab/lab11.zip)。在压缩包中，你将找到本实验题目的起始文件，以及 [Ok](https://cs61a.org//lab/lab11/ok) 自动评测器的副本。

## 必做题

## 入门视频

这些视频可能对解决本次作业的编程问题有所帮助。

> 观看视频前，请先登录你的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZedEBGt6V6vpbXpA8ItUVgy)

## 准引用

如果你需要复习准引用的概念，请参考下拉菜单。可以直接跳过讲解，先尝试做题，遇到困难再回来看。

单引号 `'` 和反引号 `` ` `` 都可以用来引用表达式。准引用表达式中，可以使用“反引用”`,` (逗号) 来进行_反引用_。在准引用表达式中，被_反引用_的项会被_求值_，而不是作为字面文本处理。这种机制有点类似于在 Python 中使用 _f-strings_，其中 `{}` 中的表达式会被求值并插入到字符串中。

```
scm> (define a 5)
a
scm> (define b 3)
b
scm> `(* a b)  ; 准引用表达式
(* a b)
scm> `(* a ,b)  ; 反引用 b，结果为 3
(* a 3)
scm> `(* ,(+ a b) b)  ; 反引用 (+ a b)，结果为 8
(* 8 b)
```

### Q1: WWSD: 准引用

> 使用 Ok 运行以下“Scheme 会显示什么？”问题，来测试你的知识：
>
> ```
> python3 ok -q wwsd-quasiquote -u
> ```

```
scm> '(1 x 3)

scm> (define x 2)

scm> `(1 x 3)

scm> `(1 ,x 3)

scm> `(1 x ,3)

scm> `(1 (,x) 3)

scm> `(1 ,(+ x 2) 3)

scm> (define y 3)

scm> `(x ,(* y x) y)

scm> `(1 ,(cons x (list y 4)) 5)
```

## 程序作为数据

如果你需要复习程序作为数据，请参考下拉菜单。可以直接跳到问题，如果遇到困难再回来看。

所有 Scheme 程序都由表达式组成。表达式分为两种：_原始_ (也称_原子_) 表达式和_组合式_。以下是一些例子：

-   _原始/原子_表达式：`#f`、`1.7`、`+`
-   _组合式_：`(factorial 10)`、`(/ 8 3)`、`(not #f)`

Scheme 使用列表来表示组合式。因此，可以通过操作列表来构造组合式。

例如，表达式 `(list '+ 2 2)` 会生成列表 `(+ 2 2)`，而这本身也是一个表达式。然后，如果我们对这个列表执行 `eval`，结果会是 `4`。`eval` 函数接受一个参数 `expr`，并在当前环境中对其求值。

```
scm> (define expr (list '+ 2 2))
expr
scm> expr
(+ 2 2)
scm> (eval expr)
4
```

此外，_准引用_对于编写生成表达式的函数非常有用。看看下面的 `add-program` 函数：
```
scm> (define (add-program x y)
...>     `(+ ,x ,y))
add-program
scm> (add-program 3 6)
(+ 3 6)
```

`add-program` 接受两个输入 `x` 和 `y`，并返回一个表达式。这个表达式如果被求值，结果就是 `x` 和 `y` 的和。在 `add-program` 内部，我们使用准引用来构建加法表达式 `(+ ...)`，并通过取消引用 `x` 和 `y`，将它们的值插入到该表达式中。

### Q2：If 表达式

在 Scheme 语言里，`if` 这种特殊形式允许我们基于一个谓词来决定执行两个表达式中的哪一个。编写一个程序 `if-program`，它接受以下参数：

1.  `predicate`：一个带引号的表达式，它会被求值为 `if` 表达式的条件。
2.  `if-true`：一个带引号的表达式，当 `predicate` 的值为真 (`#t`) 时，该表达式的值会被返回。
3.  `if-false`：一个带引号的表达式，当 `predicate` 的值为假 (`#f`) 时，该表达式的值会被返回。

该程序返回一个 Scheme 列表，它代表一个 `if` 表达式，形式如下：`(if <predicate> <if-true> <if-false>)`。 对这个列表求值，就相当于对这个 `if` 表达式求值。

以下是一些 doctest 示例，用于说明这一点：

```
scm> (define x 1)
scm> (if-program '(= 0 0) '(+ x 1) 'x)
(if (= 0 0) (+ x 1) x)
scm> (eval (if-program '(= 0 0) '(+ x 1) 'x))
2
scm> (if-program '(= 1 0) '(print 3) '(print 5))
(if (= 1 0) (print 3) (print 5))
scm> (eval (if-program '(= 1 0) '(print 3) '(print 5)))
5
```

  
```
(define (if-program condition if-true if-false)
  'YOUR-CODE-HERE
)
```

使用 Ok 来测试你的代码：

```
python3 ok -q if-program
```

### Q3：求幂表达式

实现一个函数 `(pow-expr base exp)`，它返回一个表达式。当这个表达式被求值时，会计算 `base` 的 `exp` 次方 (其中 `exp` 是一个非负整数)。`pow-expr` 函数内部不应该直接进行乘法或求幂运算。相反，它应该构建一个表达式，这个表达式只能包含 `square` 和 `*` 这两个符号，以及数字 `base` 和括号。这个表达式的长度应该以对数级别随 `exp` 增长，而不是线性增长。

例子：

```
scm> (pow-expr 2 0)
1
scm> (pow-expr 2 1)
(* 2 1)
scm> (pow-expr 2 5)
(* 2 (square (square (* 2 1))))
scm> (pow-expr 2 15)
(* 2 (square (* 2 (square (* 2 (square (* 2 1)))))))
scm> (pow-expr 2 16)
(square (square (square (square (* 2 1)))))
scm> (eval (pow-expr 2 16))
65536
```
:::tip[**小提示：**]
_Hint:_

- $x^{2y} = (x^y)^2$

- $x^{2y+1} = x \cdot (x^y)^2$


例如， $2^{16} = (2^8)^2$ 并且 $2^{17} = 2 \times (2^8)^2$
你可以使用内置的谓词 `even?` 和 `odd?`。此外，`square` 过程已为你定义。
:::
这里提供了一个[类似作业题目的解答](https://cs61a.org/hw/sol-hw07/#q1-pow)。

```
(define (square n) (* n n))

(define (pow-expr base exp)
    'YOUR-CODE-HERE
)
```

使用 Ok 来测试你的代码：

```
python3 ok -q pow
```

## 宏

宏是一种代码转换机制，通过 `define-macro` 定义，并通过调用表达式来使用。

宏调用按以下步骤进行求值：

1. 将宏的形式参数绑定到宏调用中**未经求值**的运算对象表达式。
2. 评估宏的主体，它返回一个表达式。
3. 在原始宏调用的框架中评估宏返回的表达式。

```
scm> (define-macro (twice expr) (list 'begin expr expr))
twice
scm> (twice (+ 2 2))  ; evaluates (begin (+ 2 2) (+ 2 2))
4
scm> (twice (print (+ 2 2)))  ; evaluates (begin (print (+ 2 2)) (print (+ 2 2)))
4
4
```

### Q4: 重复

定义 `repeat`，一个在数字 `n` 和表达式 `expr` 上调用的宏。调用它会在本地框架中评估 `expr` `n` 次，并且它的值是最终结果。 你会发现辅助函数 `repeated-call` 很有用，它接受一个数字 `n` 和一个无参数的过程 `f`，并将 `f` 调用 `n` 次。

例如，`(repeat (+ 2 3) (print 1))` 等价于：

`(repeated-call (+ 2 3) (lambda () (print 1)))`

并且应该重复评估 `(print 1)` 5 次。

以下表达式应该打印 `four` 四次：

`(repeat 2 (repeat 2 (print 'four)))`

```
(define-macro (repeat n expr)
  `(repeated-call ,n ___))

; 将无参数的过程 f 调用 n 次，并返回最终结果。
(define (repeated-call n f)
  (if (= n 1) ___ (begin ___ ___)))

```

使用 Ok 来测试你的代码：

```
python3 ok -q repeat-lambda
```

`repeated-call` 过程接受一个零参数过程，所以 `(lambda () ___)` 必须出现在空白处。lambda 表达式的主体是 `expr`，需要对其进行解引用（unquote）。

使用 `(f)` 调用 `f` （不带任何参数）。如果 `n` 是 1，只需调用 `f`。如果 `n` 大于 1，首先调用 `f`，然后调用 `(repeated-call (- n 1) f)`。
