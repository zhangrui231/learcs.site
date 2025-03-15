---
title: Lab 11 Solutions
---

# CS 61A 2024春季 Lab 11 答案

## Lab 11 答案

-   [lab11.zip](/resource/cs61a/lab11.zip)

## 解答文件

## 作业必做题

## 入门指导视频

这些视频可能会为解决此作业中的编码问题提供一些有用的指导。

> 观看视频前，请先登录您的 berkeley.edu 邮箱。

[YouTube 链接](https://youtu.be/playlist?list=PLx38hZJ5RLZedEBGt6V6vpbXpA8ItUVgy)

## 准引用 (也称作半引用)

如果需要复习半引用 (准引用) 的概念，请参考下拉菜单。可以直接开始做题，遇到困难时再回来查阅。

单引号 `'` 和反引号 `` ` `` 都可以用来引用表达式。但是，准引用表达式中可以使用逗号 `,` 进行*解引用* (unquote)。当准引用表达式中的某一项被*解引用*时，该项会被*求值*，而不是被当作字面量。这种机制有点类似于在 Python 中使用 _f-strings_，其中 `{}` 中的表达式会被求值并插入到字符串中。

```
scm> (define a 5)
a
scm> (define b 3)
b
scm> `(* a b)  ; 准引用表达式
(* a b)
scm> `(* a ,b)  ; 解引用 b，其值为 3
(* a 3)
scm> `(* ,(+ a b) b)  ; 解引用 (+ a b)，其值为 8
(* 8 b)
```

### Q1: WWSD: 准引用

> 使用 Ok 来测试你对以下“Scheme 会输出什么？” (What Would Scheme Display?) 问题的掌握程度。
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

如果需要复习“程序作为数据”的概念，请参考下拉菜单。可以直接开始做题，遇到困难时再回来查阅。

所有 Scheme 程序都由表达式组成。表达式有两种类型：_原始_（又名_原子_）表达式和_组合_。以下是每种类型的一些示例：

-   _原始/原子_表达式 (例如：`#f`、`1.7`、`+`)
-   _组合_：`(factorial 10)`、`(/ 8 3)`、`(not #f)`

Scheme 将组合表示为 Scheme 列表。因此，可以通过列表操作来构造组合。

例如，表达式 `(list '+ 2 2)` 的计算结果为列表 `(+ 2 2)`，它也是一个表达式。如果我们然后在这个列表上调用 `eval`，它将计算为 `4`。`eval` 过程接受一个参数 `expr` 并在当前环境中计算 `expr`。

```
scm> (define expr (list '+ 2 2))
expr
scm> expr
(+ 2 2)
scm> (eval expr)
4
```

此外，*准引用*对于构建表达式非常有用。请看下面的 `add-program` 函数。

```
scm> (define (add-program x y)
...>     `(+ ,x ,y))
add-program
scm> (add-program 3 6)
(+ 3 6)
```
`add-program` 接受两个输入 `x` 和 `y`，并返回一个表达式，求值后会得到 `x` 和 `y` 的和。在 `add-program` 内部，我们使用准引用来构建加法表达式 `(+ ...)`，并使用反引用来获取 `x` 和 `y` 在加法表达式中的求值结果。

### Q2: If 程序

在 Scheme 中，`if` 特殊形式允许我们基于一个谓词来求值两个表达式中的一个。`if-program` 接受以下参数：

1.  `predicate`：一个被引用的表达式，作为 `if` 表达式的条件。
2.  `if-true`：一个被引用的表达式，如果 `predicate` 为真（`#t`），则返回该表达式的值。
3.  `if-false`：一个被引用的表达式，如果 `predicate` 为假（`#f`），则返回该表达式的值。

该程序返回一个 Scheme 列表，表示形式为 `(if <predicate> <if-true> <if-false>)` 的 `if` 表达式。求值该表达式将返回 `if` 表达式的求值结果。

以下是一些 doctest 来展示这一点：

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
  `(if ,condition ,if-true ,if-false))
```

使用 Ok 来测试你的代码：

```
python3 ok -q if-program
```

### Q3: 指数运算

实现一个过程 `(pow-expr base exp)`，该过程返回一个表达式，求值后可计算 `base` 的 `exp` 次方 (exp 为非负整数)。`pow-expr` 的函数体不应包含任何乘法（或求幂）运算。相反，它应该仅构造一个包含 `square`、`*`、数字 `base` 和括号的表达式。该表达式的长度应该以对数方式随 `exp` 增长，而不是线性增长。

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

> _提示:_
>
> 1.  x^(2y) = (x^y)^2
> 2.  x^(2y+1) = x * (x^y)^2
>
> 例如，2^16 = (2^8)^2 且 2^17 = 2 * (2^8)^2。
>
> 你可以使用内置谓词 `even?` 和 `odd?`。此外，`square` 过程已为你定义。

这是[一个类似的家庭作业问题的解决方案](https://cs61a.org/hw/sol-hw07/#q1-pow)。

```
(define (square n) (* n n))
```
```
(define (pow-expr base exp)
    (cond ((= exp 0) 1)
        ((even? exp) `(square ,(pow-expr base (/ exp 2))))
        (else `(* ,base ,(pow-expr base (- exp 1))))))
```

使用 Ok 运行你的代码进行测试:

```
python3 ok -q pow
```

## 宏

宏是一种代码转换机制，通过 `define-macro` 定义，并通过调用表达式来使用。宏调用会按照以下步骤执行：

1. 将宏的参数绑定到宏调用中**未经求值**的参数表达式。
2. 执行宏的主体，它会返回一个表达式。
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

定义 `repeat`，一个在数字 `n` 和表达式 `expr` 上调用的宏。在一个局部作用域内，`expr` 会被执行 `n` 次，最终结果是最后一次执行的结果。 你会发现辅助函数 `repeated-call` 很有用。它接收一个数字 `n` 和一个无参数的函数 `f`，并将 `f` 调用 `n` 次。

例如，`(repeat (+ 2 3) (print 1))` 等价于：

`(repeated-call (+ 2 3) (lambda () (print 1)))`

因此，`(print 1)` 应该会被执行 5 次。

以下表达式应该打印 `four` 四次：

`(repeat 2 (repeat 2 (print 'four)))`

```
(define-macro (repeat n expr)
  `(repeated-call ,n (lambda () ,expr)))
; 调用零参数过程 f n 次并返回最终结果。
(define (repeated-call n f)
  (if (= n 1) (f) (begin (f) (repeated-call (- n 1) f))))
```

使用 Ok 运行你的代码进行测试:

```
python3 ok -q repeat-lambda
```

`repeated-call` 过程接受一个零参数过程，所以 `(lambda () ___)` 必须出现在空白处。lambda 函数体内的 `expr` 需要使用反引号。

使用 `(f)` 调用无参数的函数 `f`。如果 `n` 是 1，只需调用 `f`。如果 `n` 大于 1，先调用 `f`，再递归调用 `(repeated-call (- n 1) f)`。
```