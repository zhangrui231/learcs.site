# 1.3 Defining New Functions

We have identified in Python some of the elements that must appear in any powerful programming language:

1.  Numbers and arithmetic operations are _primitive_ built-in data values and functions.
2.  Nested function application provides a means of _combining_ operations.
3.  Binding names to values provides a limited means of _abstraction_.

Now we will learn about _function definitions_, a much more powerful abstraction technique by which a name can be bound to compound operation, which can then be referred to as a unit.

We begin by examining how to express the idea of _squaring_. We might say, "To square something, multiply it by itself." This is expressed in Python as

```
>>> def square(x):
        return mul(x, x)

```

which defines a new function that has been given the name square. This user-defined function is not built into the interpreter. It represents the compound operation of multiplying something by itself. The x in this definition is called a _formal parameter_, which provides a name for the thing to be multiplied. The definition creates this user-defined function and associates it with the name square.

**How to define a function.** Function definitions consist of a def statement that indicates a &lt;name&gt; and a comma-separated list of named &lt;formal parameters&gt;, then a return statement, called the function body, that specifies the &lt;return expression&gt; of the function, which is an expression to be evaluated whenever the function is applied:

```
def <name>(<formal parameters>):
    return <return expression>

```

The second line _must_ be indented — most programmers use four spaces to indent. The return expression is not evaluated right away; it is stored as part of the newly defined function and evaluated only when the function is eventually applied.

Having defined square, we can apply it with a call expression:

```
>>> square(21)
441
>>> square(add(2, 5))
49
>>> square(square(3))
81

```

We can also use square as a building block in defining other functions. For example, we can easily define a function sum\_squares that, given any two numbers as arguments, returns the sum of their squares:

```
>>> def sum_squares(x, y):
        return add(square(x), square(y))

```

User-defined functions are used in exactly the same way as built-in functions. Indeed, one cannot tell from the definition of sum\_squares whether square is built into the interpreter, imported from a module, or defined by the user.

Both def statements and assignment statements bind names to values, and any existing bindings are lost. For example, g below first refers to a function of no arguments, then a number, and then a different function of two arguments.

```
>>> def g():
        return 1
>>> g()
1
>>> g = 2
>>> g
2
>>> def g(h, i):
        return h + i
>>> g(1, 2)
3

```

### 1.3.1   Environments

Our subset of Python is now complex enough that the meaning of programs is non-obvious. What if a formal parameter has the same name as a built-in function? Can two functions share names without confusion? To resolve such questions, we must describe environments in more detail.

An environment in which an expression is evaluated consists of a sequence of _frames_, depicted as boxes. Each frame contains _bindings_, each of which associates a name with its corresponding value. There is a single _global_ frame. Assignment and import statements add entries to the first frame of the current environment. So far, our environment consists only of the global frame.

This _environment diagram_ shows the bindings of the current environment, along with the values to which names are bound. The environment diagrams in this text are interactive: you can step through the lines of the small program on the left to see the state of the environment evolve on the right. You can also click on the "Edit code in Online Python Tutor" link to load the example into the [Online Python Tutor](http://composingprograms.com/tutor.html), a tool created by [Philip Guo](http://www.pgbovine.net/) for generating these environment diagrams. You are encouraged to create examples yourself and study the resulting environment diagrams.

Functions appear in environment diagrams as well. An import statement binds a name to a built-in function. A def statement binds a name to a user-defined function created by the definition. The resulting environment after importing mul and defining square appears below:

Each function is a line that starts with func, followed by the function name and formal parameters. Built-in functions such as mul do not have formal parameter names, and so ... is always used instead.

The name of a function is repeated twice, once in the frame and again as part of the function itself. The name appearing in the function is called the _intrinsic name_. The name in a frame is a _bound name_. There is a difference between the two: different names may refer to the same function, but that function itself has only one intrinsic name.

The name bound to a function in a frame is the one used during evaluation. The intrinsic name of a function does not play a role in evaluation. Step through the example below using the _Forward_ button to see that once the name max is bound to the value 3, it can no longer be used as a function.

The error message TypeError: 'int' object is not callable is reporting that the name max (currently bound to the number 3) is an integer and not a function. Therefore, it cannot be used as the operator in a call expression.

**Function Signatures.** Functions differ in the number of arguments that they are allowed to take. To track these requirements, we draw each function in a way that shows the function name and its formal parameters. The user-defined function square takes only x; providing more or fewer arguments will result in an error. A description of the formal parameters of a function is called the function's signature.

The function max can take an arbitrary number of arguments. It is rendered as max(...). Regardless of the number of arguments taken, all built-in functions will be rendered as &lt;name&gt;(...), because these primitive functions were never explicitly defined.

### 1.3.2   Calling User-Defined Functions

To evaluate a call expression whose operator names a user-defined function, the Python interpreter follows a computational process. As with any call expression, the interpreter evaluates the operator and operand expressions, and then applies the named function to the resulting arguments.

Applying a user-defined function introduces a second _local_ frame, which is only accessible to that function. To apply a user-defined function to some arguments:

1.  Bind the arguments to the names of the function's formal parameters in a new _local_ frame.
2.  Execute the body of the function in the environment that starts with this frame.

The environment in which the body is evaluated consists of two frames: first the local frame that contains formal parameter bindings, then the global frame that contains everything else. Each instance of a function application has its own independent local frame.

To illustrate an example in detail, several steps of the environment diagram for the same example are depicted below. After executing the first import statement, only the name mul is bound in the global frame.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="4"><svg id="leftCodeGutterSVG" style="height: 86px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 5)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 27.78125)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v4__cod1">from&nbsp;operator&nbsp;import&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v4__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v4__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v4__cod4">square(-2)</td></tr></tbody></table></div><p><span id="curInstr">Step 2 of 5</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

First, the definition statement for the function square is executed. Notice that the entire def statement is processed in a single step. The body of a function is not executed until the function is called (not when it is defined).

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="4"><svg id="leftCodeGutterSVG" style="height: 86px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 27.78125)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 73.34375)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v5__cod1">from&nbsp;operator&nbsp;import&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v5__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v5__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v5__cod4">square(-2)</td></tr></tbody></table></div><p><span id="curInstr">Step 3 of 5</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Next, The square function is called with the argument \-2, and so a new frame is created with the formal parameter x bound to the value \-2.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="4"><svg id="leftCodeGutterSVG" style="height: 86px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 73.34375)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 50.5625)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v6__cod1">from&nbsp;operator&nbsp;import&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v6__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v6__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v6__cod4">square(-2)</td></tr></tbody></table></div><p><span id="curInstr">Step 4 of 5</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Then, the name x is looked up in the current environment, which consists of the two frames shown. In both occurrences, x evaluates to \-2, and so the square function returns 4.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="4"><svg id="leftCodeGutterSVG" style="height: 86px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 50.5625)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 61.5625)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v7__cod1">from&nbsp;operator&nbsp;import&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v7__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v7__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v7__cod4">square(-2)</td></tr></tbody></table></div><p><span id="curInstr">Step 5 of 5</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

The "Return value" in the square() frame is not a name binding; instead it indicates the value returned by the function call that created the frame.

Even in this simple example, two different environments are used. The top-level expression square(-2) is evaluated in the global environment, while the return expression mul(x, x) is evaluated in the environment created for by calling square. Both x and mul are bound in this environment, but in different frames.

The order of frames in an environment affects the value returned by looking up a name in an expression. We stated previously that a name is evaluated to the value associated with that name in the current environment. We can now be more precise:

**Name Evaluation.** A name evaluates to the value bound to that name in the earliest frame of the current environment in which that name is found.

Our conceptual framework of environments, names, and functions constitutes a _model of evaluation_; while some mechanical details are still unspecified (e.g., how a binding is implemented), our model does precisely and correctly describe how the interpreter evaluates call expressions. In Chapter 3 we will see how this model can serve as a blueprint for implementing a working interpreter for a programming language.

### 1.3.3   Example: Calling a User-Defined Function

Let us again consider our two simple function definitions and illustrate the process that evaluates a call expression for a user-defined function.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="8"><svg id="leftCodeGutterSVG" style="height: 174px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 94.5625)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 161.734375)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v8__cod1">from&nbsp;operator&nbsp;import&nbsp;add,&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v8__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v8__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v8__cod4"></td></tr><tr><td id="lineNo5">5</td><td id="v8__cod5">def&nbsp;sum_squares(x,&nbsp;y):</td></tr><tr><td id="lineNo6">6</td><td id="v8__cod6">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;add(square(x),&nbsp;square(y))</td></tr><tr><td id="lineNo7">7</td><td id="v8__cod7"></td></tr><tr><td id="lineNo8">8</td><td id="v8__cod8">result&nbsp;=&nbsp;sum_squares(5,&nbsp;12)</td></tr></tbody></table></div><p><span id="curInstr">Step 4 of 10</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Python first evaluates the name sum\_squares, which is bound to a user-defined function in the global frame. The primitive numeric expressions 5 and 12 evaluate to the numbers they represent.

Next, Python applies sum\_squares, which introduces a local frame that binds x to 5 and y to 12.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="8"><svg id="leftCodeGutterSVG" style="height: 174px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 161.734375)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 116.953125)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v9__cod1">from&nbsp;operator&nbsp;import&nbsp;add,&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v9__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v9__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v9__cod4"></td></tr><tr><td id="lineNo5">5</td><td id="v9__cod5">def&nbsp;sum_squares(x,&nbsp;y):</td></tr><tr><td id="lineNo6">6</td><td id="v9__cod6">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;add(square(x),&nbsp;square(y))</td></tr><tr><td id="lineNo7">7</td><td id="v9__cod7"></td></tr><tr><td id="lineNo8">8</td><td id="v9__cod8">result&nbsp;=&nbsp;sum_squares(5,&nbsp;12)</td></tr></tbody></table></div><p><span id="curInstr">Step 5 of 10</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

The body of sum\_squares contains this call expression:

```
  add     (  square(x)  ,  square(y)  )
________     _________     _________
operator     operand 0     operand 1

```

All three subexpressions are evaluated in the current environment, which begins with the frame labeled sum\_squares(). The operator subexpression add is a name found in the global frame, bound to the built-in function for addition. The two operand subexpressions must be evaluated in turn, before addition is applied. Both operands are evaluated in the current environment beginning with the frame labeled sum\_squares.

In operand 0, square names a user-defined function in the global frame, while x names the number 5 in the local frame. Python applies square to 5 by introducing yet another local frame that binds x to 5.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="8"><svg id="leftCodeGutterSVG" style="height: 174px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 116.953125)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 49.78125)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v10__cod1">from&nbsp;operator&nbsp;import&nbsp;add,&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v10__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v10__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v10__cod4"></td></tr><tr><td id="lineNo5">5</td><td id="v10__cod5">def&nbsp;sum_squares(x,&nbsp;y):</td></tr><tr><td id="lineNo6">6</td><td id="v10__cod6">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;add(square(x),&nbsp;square(y))</td></tr><tr><td id="lineNo7">7</td><td id="v10__cod7"></td></tr><tr><td id="lineNo8">8</td><td id="v10__cod8">result&nbsp;=&nbsp;sum_squares(5,&nbsp;12)</td></tr></tbody></table></div><p><span id="curInstr">Step 6 of 10</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Using this environment, the expression mul(x, x) evaluates to 25.

Our evaluation procedure now turns to operand 1, for which y names the number 12. Python evaluates the body of square again, this time introducing yet another local frame that binds x to 12. Hence, operand 1 evaluates to 144.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="8"><svg id="leftCodeGutterSVG" style="height: 174px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 49.78125)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 60.78125)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v11__cod1">from&nbsp;operator&nbsp;import&nbsp;add,&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v11__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v11__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v11__cod4"></td></tr><tr><td id="lineNo5">5</td><td id="v11__cod5">def&nbsp;sum_squares(x,&nbsp;y):</td></tr><tr><td id="lineNo6">6</td><td id="v11__cod6">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;add(square(x),&nbsp;square(y))</td></tr><tr><td id="lineNo7">7</td><td id="v11__cod7"></td></tr><tr><td id="lineNo8">8</td><td id="v11__cod8">result&nbsp;=&nbsp;sum_squares(5,&nbsp;12)</td></tr></tbody></table></div><p><span id="curInstr">Step 9 of 10</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Finally, applying addition to the arguments 25 and 144 yields a final return value for sum\_squares: 169.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="8"><svg id="leftCodeGutterSVG" style="height: 174px;">&lt;polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 127.953125)"&gt;&lt;/polygon&gt;&lt;polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 170.734375)"&gt;&lt;/polygon&gt;</svg></td><td id="lineNo1">1</td><td id="v12__cod1">from&nbsp;operator&nbsp;import&nbsp;add,&nbsp;mul</td></tr><tr><td id="lineNo2">2</td><td id="v12__cod2">def&nbsp;square(x):</td></tr><tr><td id="lineNo3">3</td><td id="v12__cod3">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;mul(x,&nbsp;x)</td></tr><tr><td id="lineNo4">4</td><td id="v12__cod4"></td></tr><tr><td id="lineNo5">5</td><td id="v12__cod5">def&nbsp;sum_squares(x,&nbsp;y):</td></tr><tr><td id="lineNo6">6</td><td id="v12__cod6">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;add(square(x),&nbsp;square(y))</td></tr><tr><td id="lineNo7">7</td><td id="v12__cod7"></td></tr><tr><td id="lineNo8">8</td><td id="v12__cod8">result&nbsp;=&nbsp;sum_squares(5,&nbsp;12)</td></tr></tbody></table></div><p><span id="curInstr">End</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#c9e6ca"&gt;&lt;/polygon&gt;</svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG">&lt;polygon points="0,0 6,5 0,10" fill="#e93f34"&gt;&lt;/polygon&gt;</svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"><div id="globals_area"><table id="v12__global_table"><tbody><tr id="v12__global__mul_tr"><td>mul</td><td><svg style="position:absolute;left:791.265625px;top:14459.796875px" width="158.53125" height="72.46874999999999" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml">&lt;path d="M 37.546875 50.390624999999986 C 69.265625 26.234374999999993 69.265625 26.234374999999993 120.984375 22.078124999999993" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"&gt;&lt;/path&gt;&lt;path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,22.078124999999993 L111.29782580505565,26.37006683254188 L115.50214706237531,22.519913229729394 L110.73554987630914,19.392685821019562 L120.984375,22.078124999999993" stroke="#005583" fill="#005583"&gt;&lt;/path&gt;</svg></td></tr><tr id="v12__global__add_tr"><td>add</td><td><svg style="position:absolute;left:791.265625px;top:14502.359375px" width="158.53125" height="52.96875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml">&lt;path d="M 37.546875 34.140625 C 69.265625 16.484375 69.265625 16.484375 120.984375 18.828125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"&gt;&lt;/path&gt;&lt;path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,18.828125 L111.15229872909457,14.880939141302882 L115.48996499839895,18.580216278276954 L110.8367785378107,21.873824597886035 L120.984375,18.828125" stroke="#005583" fill="#005583"&gt;&lt;/path&gt;</svg></td></tr><tr id="v12__global__square_tr"><td>square</td><td><svg style="position:absolute;left:791.265625px;top:14544.921875px" width="158.53125" height="33.46875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml">&lt;path d="M 37.546875 17.890625 C 69.265625 6.734375 69.265625 6.734375 120.984375 15.578125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"&gt;&lt;/path&gt;&lt;path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,15.578125 L111.7165180498143,10.444234900777523 L115.56290937264814,14.651998415000788 L110.53781148708804,17.34428206286171 L120.984375,15.578125" stroke="#005583" fill="#005583"&gt;&lt;/path&gt;</svg></td></tr><tr id="v12__global__sum_squares_tr"><td>sum_squares</td><td><svg style="position:absolute;left:791.265625px;top:14571.453125px" width="158.53125" height="46.03125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml">&lt;path d="M 37.546875 17.671875 C 89.265625 13.015625 89.265625 13.015625 120.984375 28.359375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"&gt;&lt;/path&gt;&lt;path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,28.359375 L113.50529075456133,20.855156263207267 L116.03287527454444,25.96507959867344 L110.45800569832754,27.15706500469616 L120.984375,28.359375" stroke="#005583" fill="#005583"&gt;&lt;/path&gt;</svg></td></tr><tr id="v12__global__result_tr"><td>result</td><td><span>169</span></td></tr></tbody></table></div></td><td id="heap_td"></td></tr></tbody></table></div></td></tr></tbody></table>

This example illustrates many of the fundamental ideas we have developed so far. Names are bound to values, which are distributed across many independent local frames, along with a single global frame that contains shared names. A new local frame is introduced every time a function is called, even if the same function is called twice.

All of this machinery exists to ensure that names resolve to the correct values at the correct times during program execution. This example illustrates why our model requires the complexity that we have introduced. All three local frames contain a binding for the name x, but that name is bound to different values in different frames. Local frames keep these names separate.

### 1.3.4   Local Names

One detail of a function's implementation that should not affect the function's behavior is the implementer's choice of names for the function's formal parameters. Thus, the following functions should provide the same behavior:

```
>>> def square(x):
        return mul(x, x)
>>> def square(y):
        return mul(y, y)

```

This principle -- that the meaning of a function should be independent of the parameter names chosen by its author -- has important consequences for programming languages. The simplest consequence is that the parameter names of a function must remain local to the body of the function.

If the parameters were not local to the bodies of their respective functions, then the parameter x in square could be confused with the parameter x in sum\_squares. Critically, this is not the case: the binding for x in different local frames are unrelated. The model of computation is carefully designed to ensure this independence.

We say that the _scope_ of a local name is limited to the body of the user-defined function that defines it. When a name is no longer accessible, it is out of scope. This scoping behavior isn't a new fact about our model; it is a consequence of the way environments work.

### 1.3.5   Choosing Names

The interchangeability of names does not imply that formal parameter names do not matter at all. On the contrary, well-chosen function and parameter names are essential for the human interpretability of function definitions!

The following guidelines are adapted from the [style guide for Python code](http://www.python.org/dev/peps/pep-0008), which serves as a guide for all (non-rebellious) Python programmers. A shared set of conventions smooths communication among members of a developer community. As a side effect of following these conventions, you will find that your code becomes more internally consistent.

1.  Function names are lowercase, with words separated by underscores. Descriptive names are encouraged.
2.  Function names typically evoke operations applied to arguments by the interpreter (e.g., print, add, square) or the name of the quantity that results (e.g., max, abs, sum).
3.  Parameter names are lowercase, with words separated by underscores. Single-word names are preferred.
4.  Parameter names should evoke the role of the parameter in the function, not just the kind of argument that is allowed.
5.  Single letter parameter names are acceptable when their role is obvious, but avoid "l" (lowercase ell), "O" (capital oh), or "I" (capital i) to avoid confusion with numerals.

There are many exceptions to these guidelines, even in the Python standard library. Like the vocabulary of the English language, Python has inherited words from a variety of contributors, and the result is not always consistent.

### 1.3.6   Functions as Abstractions

Though it is very simple, sum\_squares exemplifies the most powerful property of user-defined functions. The function sum\_squares is defined in terms of the function square, but relies only on the relationship that square defines between its input arguments and its output values.

We can write sum\_squares without concerning ourselves with _how_ to square a number. The details of how the square is computed can be suppressed, to be considered at a later time. Indeed, as far as sum\_squares is concerned, square is not a particular function body, but rather an abstraction of a function, a so-called functional abstraction. At this level of abstraction, any function that computes the square is equally good.

Thus, considering only the values they return, the following two functions for squaring a number should be indistinguishable. Each takes a numerical argument and produces the square of that number as the value.

```
>>> def square(x):
        return mul(x, x)
>>> def square(x):
        return mul(x, x-1) + x

```

In other words, a function definition should be able to suppress details. The users of the function may not have written the function themselves, but may have obtained it from another programmer as a "black box". A programmer should not need to know how the function is implemented in order to use it. The Python Library has this property. Many developers use the functions defined there, but few ever inspect their implementation.

**Aspects of a functional abstraction.** To master the use of a functional abstraction, it is often useful to consider its three core attributes. The _domain_ of a function is the set of arguments it can take. The _range_ of a function is the set of values it can return. The _intent_ of a function is the relationship it computes between inputs and output (as well as any side effects it might generate). Understanding functional abstractions via their domain, range, and intent is critical to using them correctly in a complex program.

For example, any square function that we use to implement sum\_squares should have these attributes:

-   The _domain_ is any single real number.
-   The _range_ is any non-negative real number.
-   The _intent_ is that the output is the square of the input.

These attributes do not specify how the intent is carried out; that detail is abstracted away.

### 1.3.7   Operators

Mathematical operators (such as + and \-) provided our first example of a method of combination, but we have yet to define an evaluation procedure for expressions that contain these operators.

Python expressions with infix operators each have their own evaluation procedures, but you can often think of them as short-hand for call expressions. When you see

simply consider it to be short-hand for

Infix notation can be nested, just like call expressions. Python applies the normal mathematical rules of operator precedence, which dictate how to interpret a compound expression with multiple operators.

evaluates to the same result as

```
>>> add(add(2, mul(3, 4)), 5)
19

```

The nesting in the call expression is more explicit than the operator version, but also harder to read. Python also allows subexpression grouping with parentheses, to override the normal precedence rules or make the nested structure of an expression more explicit.

evaluates to the same result as

```
>>> mul(add(2, 3), add(4, 5))
45

```

When it comes to division, Python provides two infix operators: / and //. The former is normal division, so that it results in a _floating point_, or decimal value, even if the divisor evenly divides the dividend:

```
>>> 5 / 4
1.25
>>> 8 / 4
2.0

```

The // operator, on the other hand, rounds the result down to an integer:

```
>>> 5 // 4
1
>>> -5 // 4
-2

```

These two operators are shorthand for the truediv and floordiv functions.

```
>>> from operator import truediv, floordiv
>>> truediv(5, 4)
1.25
>>> floordiv(5, 4)
1

```

You should feel free to use infix operators and parentheses in your programs. Idiomatic Python prefers operators over call expressions for simple mathematical operations.