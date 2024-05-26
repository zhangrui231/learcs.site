# 1.6 Higher-Order Functions

We have seen that functions are a method of abstraction that describe compound operations independent of the particular values of their arguments. That is, in square,

```
>>> def square(x):
        return x * x

```

we are not talking about the square of a particular number, but rather about a method for obtaining the square of any number. Of course, we could get along without ever defining this function, by always writing expressions such as

and never mentioning square explicitly. This practice would suffice for simple computations such as square, but would become arduous for more complex examples such as abs or fib. In general, lacking function definition would put us at the disadvantage of forcing us to work always at the level of the particular operations that happen to be primitives in the language (multiplication, in this case) rather than in terms of higher-level operations. Our programs would be able to compute squares, but our language would lack the ability to express the concept of squaring.

One of the things we should demand from a powerful programming language is the ability to build abstractions by assigning names to common patterns and then to work in terms of the names directly. Functions provide this ability. As we will see in the following examples, there are common programming patterns that recur in code, but are used with a number of different functions. These patterns can also be abstracted, by giving them names.

To express certain general patterns as named concepts, we will need to construct functions that can accept other functions as arguments or return functions as values. Functions that manipulate functions are called higher-order functions. This section shows how higher-order functions can serve as powerful abstraction mechanisms, vastly increasing the expressive power of our language.

### 1.6.1   Functions as Arguments

Consider the following three functions, which all compute summations. The first, sum\_naturals, computes the sum of natural numbers up to n:

```
>>> def sum_naturals(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + k, k + 1
        return total

```

```
>>> sum_naturals(100)
5050

```

The second, sum\_cubes, computes the sum of the cubes of natural numbers up to n.

```
>>> def sum_cubes(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + k*k*k, k + 1
        return total

```

```
>>> sum_cubes(100)
25502500

```

The third, pi\_sum, computes the sum of terms in the series

![](/img/cs61a/pi_sum.png)

which converges to pi very slowly.

```
>>> def pi_sum(n):
        total, k = 0, 1
        while k <= n:
            total, k = total + 8 / ((4*k-3) * (4*k-1)), k + 1
        return total

```

```
>>> pi_sum(100)
3.1365926848388144

```

These three functions clearly share a common underlying pattern. They are for the most part identical, differing only in name and the function of k used to compute the term to be added. We could generate each of the functions by filling in slots in the same template:

```
def <name>(n):
    total, k = 0, 1
    while k <= n:
        total, k = total + <term>(k), k + 1
    return total

```

The presence of such a common pattern is strong evidence that there is a useful abstraction waiting to be brought to the surface. Each of these functions is a summation of terms. As program designers, we would like our language to be powerful enough so that we can write a function that expresses the concept of summation itself rather than only functions that compute particular sums. We can do so readily in Python by taking the common template shown above and transforming the "slots" into formal parameters:

In the example below, summation takes as its two arguments the upper bound n together with the function term that computes the kth term. We can use summation just as we would any function, and it expresses summations succinctly. Take the time to step through this example, and notice how binding cube to the local names term ensures that the result 1\*1\*1 + 2\*2\*2 + 3\*3\*3 = 36 is computed correctly. In this example, frames which are no longer needed are removed to save space.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="13"><svg id="leftCodeGutterSVG" style="height: 284px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 205.109375)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 271.8125)"></polygon></svg></td><td id="lineNo1">1</td><td id="v1__cod1">def&nbsp;summation(n,&nbsp;term):</td></tr><tr><td id="lineNo2">2</td><td id="v1__cod2">&nbsp;&nbsp;&nbsp;&nbsp;total,&nbsp;k&nbsp;=&nbsp;0,&nbsp;1</td></tr><tr><td id="lineNo3">3</td><td id="v1__cod3">&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;k&nbsp;&lt;=&nbsp;n:</td></tr><tr><td id="lineNo4">4</td><td id="v1__cod4">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;total,&nbsp;k&nbsp;=&nbsp;total&nbsp;+&nbsp;term(k),&nbsp;k&nbsp;+&nbsp;1</td></tr><tr><td id="lineNo5">5</td><td id="v1__cod5">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;total</td></tr><tr><td id="lineNo6">6</td><td id="v1__cod6"></td></tr><tr><td id="lineNo7">7</td><td id="v1__cod7">def&nbsp;cube(x):</td></tr><tr><td id="lineNo8">8</td><td id="v1__cod8">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;x*x*x</td></tr><tr><td id="lineNo9">9</td><td id="v1__cod9"></td></tr><tr><td id="lineNo10">10</td><td id="v1__cod10">def&nbsp;sum_cubes(n):</td></tr><tr><td id="lineNo11">11</td><td id="v1__cod11">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;summation(n,&nbsp;cube)</td></tr><tr><td id="lineNo12">12</td><td id="v1__cod12"></td></tr><tr><td id="lineNo13">13</td><td id="v1__cod13">result&nbsp;=&nbsp;sum_cubes(3)</td></tr></tbody></table></div><p><span id="curInstr">Step 4 of 22</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"></td></tr></tbody></table>

Using an identity function that returns its argument, we can also sum natural numbers using exactly the same summation function.

```
>>> def summation(n, term):
        total, k = 0, 1
        while k <= n:
            total, k = total + term(k), k + 1
        return total

```

```
>>> def identity(x):
        return x

```

```
>>> def sum_naturals(n):
        return summation(n, identity)

```

The summation function can also be called directly, without definining another function for a specific sequence.

```
>>> summation(10, square)
385

```

We can define pi\_sum using our summation abstraction by defining a function pi\_term to compute each term. We pass the argument 1e6, a shorthand for 1 \* 10^6 = 1000000, to generate a close approximation to pi.

```
>>> def pi_term(x):
        return 8 / ((4*x-3) * (4*x-1))

```

```
>>> def pi_sum(n):
        return summation(n, pi_term)

```

```
>>> pi_sum(1e6)
3.141592153589902

```

### 1.6.2   Functions as General Methods

We introduced user-defined functions as a mechanism for abstracting patterns of numerical operations so as to make them independent of the particular numbers involved. With higher-order functions, we begin to see a more powerful kind of abstraction: some functions express general methods of computation, independent of the particular functions they call.

Despite this conceptual extension of what a function means, our environment model of how to evaluate a call expression extends gracefully to the case of higher-order functions, without change. When a user-defined function is applied to some arguments, the formal parameters are bound to the values of those arguments (which may be functions) in a new local frame.

Consider the following example, which implements a general method for iterative improvement and uses it to compute the [golden ratio](http://www.geom.uiuc.edu/~demo5337/s97b/art.htm). The golden ratio, often called "phi", is a number near 1.6 that appears frequently in nature, art, and architecture.

An iterative improvement algorithm begins with a guess of a solution to an equation. It repeatedly applies an update function to improve that guess, and applies a close comparison to check whether the current guess is "close enough" to be considered correct.

```
>>> def improve(update, close, guess=1):
        while not close(guess):
            guess = update(guess)
        return guess

```

This improve function is a general expression of repetitive refinement. It doesn't specify what problem is being solved: those details are left to the update and close functions passed in as arguments.

Among the well-known properties of the golden ratio are that it can be computed by repeatedly summing the inverse of any positive number with 1, and that it is one less than its square. We can express these properties as functions to be used with improve.

```
>>> def golden_update(guess):
        return 1/guess + 1

```

```
>>> def square_close_to_successor(guess):
        return approx_eq(guess * guess, guess + 1)

```

Above, we introduce a call to approx\_eq that is meant to return True if its arguments are approximately equal to each other. To implement, approx\_eq, we can compare the absolute value of the difference between two numbers to a small tolerance value.

```
>>> def approx_eq(x, y, tolerance=1e-15):
        return abs(x - y) < tolerance

```

Calling improve with the arguments golden\_update and square\_close\_to\_successor will compute a finite approximation to the golden ratio.

```
>>> improve(golden_update, square_close_to_successor)
1.6180339887498951

```

By tracing through the steps of evaluation, we can see how this result is computed. First, a local frame for improve is constructed with bindings for update, close, and guess. In the body of improve, the name close is bound to square\_close\_to\_successor, which is called on the initial value of guess. Trace through the rest of the steps to see the computational process that evolves to compute the golden ratio.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="17"><svg id="leftCodeGutterSVG" style="height: 371px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 359)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 27.125)"></polygon></svg></td><td id="lineNo1">1</td><td id="v2__cod1">def&nbsp;improve(update,&nbsp;close,&nbsp;guess=1):</td></tr><tr><td id="lineNo2">2</td><td id="v2__cod2">&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;not&nbsp;close(guess):</td></tr><tr><td id="lineNo3">3</td><td id="v2__cod3">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guess&nbsp;=&nbsp;update(guess)</td></tr><tr><td id="lineNo4">4</td><td id="v2__cod4">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;guess</td></tr><tr><td id="lineNo5">5</td><td id="v2__cod5"></td></tr><tr><td id="lineNo6">6</td><td id="v2__cod6">def&nbsp;golden_update(guess):</td></tr><tr><td id="lineNo7">7</td><td id="v2__cod7">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;1/guess&nbsp;+&nbsp;1</td></tr><tr><td id="lineNo8">8</td><td id="v2__cod8"></td></tr><tr><td id="lineNo9">9</td><td id="v2__cod9">def&nbsp;square_close_to_successor(guess):</td></tr><tr><td id="lineNo10">10</td><td id="v2__cod10">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;approx_eq(guess&nbsp;*&nbsp;guess,</td></tr><tr><td id="lineNo11">11</td><td id="v2__cod11">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guess&nbsp;+&nbsp;1)</td></tr><tr><td id="lineNo12">12</td><td id="v2__cod12"></td></tr><tr><td id="lineNo13">13</td><td id="v2__cod13">def&nbsp;approx_eq(x,&nbsp;y,&nbsp;tolerance=1e-3):</td></tr><tr><td id="lineNo14">14</td><td id="v2__cod14">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;abs(x&nbsp;-&nbsp;y)&nbsp;&lt;&nbsp;tolerance</td></tr><tr><td id="lineNo15">15</td><td id="v2__cod15"></td></tr><tr><td id="lineNo16">16</td><td id="v2__cod16">phi&nbsp;=&nbsp;improve(golden_update,</td></tr><tr><td id="lineNo17">17</td><td id="v2__cod17">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;square_close_to_successor)</td></tr></tbody></table></div><p><span id="curInstr">Step 7 of 86</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"><div id="globals_area"><table id="v2__global_table"><tbody><tr id="v2__global__improve_tr"><td>improve</td><td><svg style="position:absolute;left:961.05625px;top:8609.078125px" width="157.10625" height="72.46874999999999" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 50.390624999999986 C 68.553125 26.234374999999993 68.553125 26.234374999999993 119.896875 22.078124999999993" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,22.078124999999993 L110.21283768941586,26.375731469561227 L114.41490638867545,22.523119544295078 L109.64648099667667,19.398680509693616 L119.896875,22.078124999999993" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v2__global__golden_update_tr"><td>golden_update</td><td><svg style="position:absolute;left:961.05625px;top:8651.640625px" width="157.10625" height="52.96875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 34.140625 C 68.553125 16.484375 68.553125 16.484375 119.896875 18.828125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,18.828125 L110.06609764325118,14.87770520432829 L114.40254684242436,18.57840896753203 L109.74827723829195,21.87048649578819 L119.896875,18.828125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v2__global__square_close_to_successor_tr"><td>square_close_to_successor</td><td><svg style="position:absolute;left:961.05625px;top:8694.203125px" width="157.10625" height="33.46875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.890625 C 68.553125 6.734375 68.553125 6.734375 119.896875 15.578125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,15.578125 L110.63524860729751,10.43300337247779 L114.4765360874972,14.645426724238764 L109.44817807451048,17.331616533844986 L119.896875,15.578125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v2__global__approx_eq_tr"><td>approx_eq</td><td><svg style="position:absolute;left:961.05625px;top:8720.734375px" width="157.10625" height="46.03125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.671875 C 88.553125 13.015625 88.553125 13.015625 119.896875 28.359375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,28.359375 L112.45298949509082,20.82023920139529 L114.95663386954881,25.941934706425325 L109.3762473032685,27.107818821969524 L119.896875,28.359375" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr></tbody></table></div></td><td id="heap_td"><div id="heap"><div id="toplevel_heap_object_1"><p>func improve(update,&nbsp;close,&nbsp;guess)</p></div><div id="toplevel_heap_object_2"><p>func golden_update(guess)</p></div><div id="toplevel_heap_object_3"><p>func square_close_to_successor(guess)</p></div><div id="toplevel_heap_object_4"><p>func approx_eq(x,&nbsp;y,&nbsp;tolerance)</p></div></div></td></tr></tbody></table></div></td></tr></tbody></table>

This example illustrates two related big ideas in computer science. First, naming and functions allow us to abstract away a vast amount of complexity. While each function definition has been trivial, the computational process set in motion by our evaluation procedure is quite intricate. Second, it is only by virtue of the fact that we have an extremely general evaluation procedure for the Python language that small components can be composed into complex processes. Understanding the procedure of interpreting programs allows us to validate and inspect the process we have created.

As always, our new general method improve needs a test to check its correctness. The golden ratio can provide such a test, because it also has an exact closed-form solution, which we can compare to this iterative result.

```
>>> from math import sqrt
>>> phi = 1/2 + sqrt(5)/2
>>> def improve_test():
        approx_phi = improve(golden_update, square_close_to_successor)
        assert approx_eq(phi, approx_phi), 'phi differs from its approximation'

```

For this test, no news is good news: improve\_test returns None after its assert statement is executed successfully.

### 1.6.3   Defining Functions III: Nested Definitions

The above examples demonstrate how the ability to pass functions as arguments significantly enhances the expressive power of our programming language. Each general concept or equation maps onto its own short function. One negative consequence of this approach is that the global frame becomes cluttered with names of small functions, which must all be unique. Another problem is that we are constrained by particular function signatures: the update argument to improve must take exactly one argument. Nested function definitions address both of these problems, but require us to enrich our environment model.

Let's consider a new problem: computing the square root of a number. In programming languages, "square root" is often abbreviated as sqrt. Repeated application of the following update converges to the square root of a:

```
>>> def average(x, y):
        return (x + y)/2

```

```
>>> def sqrt_update(x, a):
        return average(x, a/x)

```

This two-argument update function is incompatible with improve (it takes two arguments, not one), and it provides only a single update, while we really care about taking square roots by repeated updates. The solution to both of these issues is to place function definitions inside the body of other definitions.

```
>>> def sqrt(a):
        def sqrt_update(x):
            return average(x, a/x)
        def sqrt_close(x):
            return approx_eq(x * x, a)
        return improve(sqrt_update, sqrt_close)

```

Like local assignment, local def statements only affect the current local frame. These functions are only in scope while sqrt is being evaluated. Consistent with our evaluation procedure, these local def statements don't even get evaluated until sqrt is called.

**Lexical scope.** Locally defined functions also have access to the name bindings in the scope in which they are defined. In this example, sqrt\_update refers to the name a, which is a formal parameter of its enclosing function sqrt. This discipline of sharing names among nested definitions is called _lexical scoping_. Critically, the inner functions have access to the names in the environment where they are defined (not where they are called).

We require two extensions to our environment model to enable lexical scoping.

1.  Each user-defined function has a parent environment: the environment in which it was defined.
2.  When a user-defined function is called, its local frame extends its parent environment.

Previous to sqrt, all functions were defined in the global environment, and so they all had the same parent: the global environment. By contrast, when Python evaluates the first two clauses of sqrt, it create functions that are associated with a local environment. In the call

the environment first adds a local frame for sqrt and evaluates the def statements for sqrt\_update and sqrt\_close.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="19"><svg id="leftCodeGutterSVG" style="height: 415px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 314.53125)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 358.75)"></polygon></svg></td><td id="lineNo1">1</td><td id="v3__cod1">def&nbsp;average(x,&nbsp;y):</td></tr><tr><td id="lineNo2">2</td><td id="v3__cod2">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(x&nbsp;+&nbsp;y)/2</td></tr><tr><td id="lineNo3">3</td><td id="v3__cod3"></td></tr><tr><td id="lineNo4">4</td><td id="v3__cod4">def&nbsp;improve(update,&nbsp;close,&nbsp;guess=1):</td></tr><tr><td id="lineNo5">5</td><td id="v3__cod5">&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;not&nbsp;close(guess):</td></tr><tr><td id="lineNo6">6</td><td id="v3__cod6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guess&nbsp;=&nbsp;update(guess)</td></tr><tr><td id="lineNo7">7</td><td id="v3__cod7">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;guess</td></tr><tr><td id="lineNo8">8</td><td id="v3__cod8"></td></tr><tr><td id="lineNo9">9</td><td id="v3__cod9">def&nbsp;approx_eq(x,&nbsp;y,&nbsp;tolerance=1e-3):</td></tr><tr><td id="lineNo10">10</td><td id="v3__cod10">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;abs(x&nbsp;-&nbsp;y)&nbsp;&lt;&nbsp;tolerance</td></tr><tr><td id="lineNo11">11</td><td id="v3__cod11"></td></tr><tr><td id="lineNo12">12</td><td id="v3__cod12">def&nbsp;sqrt(a):</td></tr><tr><td id="lineNo13">13</td><td id="v3__cod13">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;sqrt_update(x):</td></tr><tr><td id="lineNo14">14</td><td id="v3__cod14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;average(x,&nbsp;a/x)</td></tr><tr><td id="lineNo15">15</td><td id="v3__cod15">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;sqrt_close(x):</td></tr><tr><td id="lineNo16">16</td><td id="v3__cod16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;approx_eq(x&nbsp;*&nbsp;x,&nbsp;a)</td></tr><tr><td id="lineNo17">17</td><td id="v3__cod17">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;improve(sqrt_update,&nbsp;sqrt_close)</td></tr><tr><td id="lineNo18">18</td><td id="v3__cod18"></td></tr><tr><td id="lineNo19">19</td><td id="v3__cod19">result&nbsp;=&nbsp;sqrt(256)</td></tr></tbody></table></div><p><span id="curInstr">Step 8 of 86</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"><div id="globals_area"><table id="v3__global_table"><tbody><tr id="v3__global__average_tr"><td>average</td><td><svg style="position:absolute;left:889.821875px;top:13046.625px" width="157.10625" height="72.46874999999999" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 50.390624999999986 C 68.553125 26.234374999999993 68.553125 26.234374999999993 119.896875 22.078124999999993" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,22.078124999999993 L110.21283768941586,26.375731469561227 L114.41490638867545,22.523119544295078 L109.64648099667667,19.398680509693616 L119.896875,22.078124999999993" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v3__global__improve_tr"><td>improve</td><td><svg style="position:absolute;left:889.821875px;top:13089.1875px" width="157.10625" height="52.96875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 34.140625 C 68.553125 16.484375 68.553125 16.484375 119.896875 18.828125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,18.828125 L110.06609764325118,14.87770520432829 L114.40254684242436,18.57840896753203 L109.74827723829195,21.87048649578819 L119.896875,18.828125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v3__global__approx_eq_tr"><td>approx_eq</td><td><svg style="position:absolute;left:889.821875px;top:13131.75px" width="157.10625" height="33.46875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.890625 C 68.553125 6.734375 68.553125 6.734375 119.896875 15.578125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,15.578125 L110.63524860729751,10.43300337247779 L114.4765360874972,14.645426724238764 L109.44817807451048,17.331616533844986 L119.896875,15.578125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v3__global__sqrt_tr"><td>sqrt</td><td><svg style="position:absolute;left:889.821875px;top:13158.28125px" width="157.10625" height="46.03125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.671875 C 88.553125 13.015625 88.553125 13.015625 119.896875 28.359375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,28.359375 L112.45298949509082,20.82023920139529 L114.95663386954881,25.941934706425325 L109.3762473032685,27.107818821969524 L119.896875,28.359375" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr></tbody></table></div><div id="stack" data-frame_id="1"><table><tbody><tr id="v3__sqrt_f1_p__a_tr"><td>a</td><td><span>256</span></td></tr><tr id="v3__sqrt_f1_p__sqrt_update_tr"><td>sqrt_update</td><td><svg style="position:absolute;left:888.734375px;top:13197.71875px" width="158.53125" height="109.40624999999997" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 81.17187499999997 C 69.265625 44.703124999999986 69.265625 44.703124999999986 120.984375 28.23437499999999" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,28.23437499999999 L112.51933311003609,34.60564377483252 L115.74407007471233,29.904466102307197 L110.39376261619054,27.936164779011843 L120.984375,28.23437499999999" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v3__sqrt_f1_p__sqrt_close_tr"><td>sqrt_close</td><td><svg style="position:absolute;left:888.734375px;top:13240.28125px" width="158.53125" height="89.90625" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 64.921875 C 69.265625 34.953125 69.265625 34.953125 120.984375 24.984375000000004" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,24.984375000000004 L111.82880990319629,30.315943977157616 L115.58402949323396,26.026617010068573 L110.50232007219992,23.442776968546283 L120.984375,24.984375000000004" stroke="#005583" fill="#005583"></path></svg></td></tr></tbody></table></div></td><td id="heap_td"><div id="heap"><div id="toplevel_heap_object_1"><p>func average(x,&nbsp;y) [parent=Global]</p></div><div id="toplevel_heap_object_2"><p>func improve(update,&nbsp;close,&nbsp;guess) [parent=Global]</p></div><div id="toplevel_heap_object_3"><p>func approx_eq(x,&nbsp;y,&nbsp;tolerance) [parent=Global]</p></div><div id="toplevel_heap_object_4"><p>func sqrt(a) [parent=Global]</p></div><div id="toplevel_heap_object_5"><p>func sqrt_update(x) [parent=f1]</p></div><div id="toplevel_heap_object_6"><p>func sqrt_close(x) [parent=f1]</p></div></div></td></tr></tbody></table></div></td></tr></tbody></table>

Function values each have a new annotation that we will include in environment diagrams from now on, a _parent_. The parent of a function value is the first frame of the environment in which that function was defined. Functions without parent annotations were defined in the global environment. When a user-defined function is called, the frame created has the same parent as that function.

Subsequently, the name sqrt\_update resolves to this newly defined function, which is passed as an argument to improve. Within the body of improve, we must apply our update function (bound to sqrt\_update) to the initial guess x of 1. This final application creates an environment for sqrt\_update that begins with a local frame containing only x, but with the parent frame sqrt still containing a binding for a.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="19"><svg id="leftCodeGutterSVG" style="height: 415px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 115.546875)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 292.421875)"></polygon></svg></td><td id="lineNo1">1</td><td id="v4__cod1">def&nbsp;average(x,&nbsp;y):</td></tr><tr><td id="lineNo2">2</td><td id="v4__cod2">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;(x&nbsp;+&nbsp;y)/2</td></tr><tr><td id="lineNo3">3</td><td id="v4__cod3"></td></tr><tr><td id="lineNo4">4</td><td id="v4__cod4">def&nbsp;improve(update,&nbsp;close,&nbsp;guess=1):</td></tr><tr><td id="lineNo5">5</td><td id="v4__cod5">&nbsp;&nbsp;&nbsp;&nbsp;while&nbsp;not&nbsp;close(guess):</td></tr><tr><td id="lineNo6">6</td><td id="v4__cod6">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;guess&nbsp;=&nbsp;update(guess)</td></tr><tr><td id="lineNo7">7</td><td id="v4__cod7">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;guess</td></tr><tr><td id="lineNo8">8</td><td id="v4__cod8"></td></tr><tr><td id="lineNo9">9</td><td id="v4__cod9">def&nbsp;approx_eq(x,&nbsp;y,&nbsp;tolerance=1e-3):</td></tr><tr><td id="lineNo10">10</td><td id="v4__cod10">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;abs(x&nbsp;-&nbsp;y)&nbsp;&lt;&nbsp;tolerance</td></tr><tr><td id="lineNo11">11</td><td id="v4__cod11"></td></tr><tr><td id="lineNo12">12</td><td id="v4__cod12">def&nbsp;sqrt(a):</td></tr><tr><td id="lineNo13">13</td><td id="v4__cod13">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;sqrt_update(x):</td></tr><tr><td id="lineNo14">14</td><td id="v4__cod14">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;average(x,&nbsp;a/x)</td></tr><tr><td id="lineNo15">15</td><td id="v4__cod15">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;sqrt_close(x):</td></tr><tr><td id="lineNo16">16</td><td id="v4__cod16">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;approx_eq(x&nbsp;*&nbsp;x,&nbsp;a)</td></tr><tr><td id="lineNo17">17</td><td id="v4__cod17">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;improve(sqrt_update,&nbsp;sqrt_close)</td></tr><tr><td id="lineNo18">18</td><td id="v4__cod18"></td></tr><tr><td id="lineNo19">19</td><td id="v4__cod19">result&nbsp;=&nbsp;sqrt(256)</td></tr></tbody></table></div><p><span id="curInstr">Step 15 of 86</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"><div id="globals_area"><table id="v4__global_table"><tbody><tr id="v4__global__average_tr"><td>average</td><td><svg style="position:absolute;left:910.821875px;top:14389.65625px" width="157.10625" height="72.46874999999999" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 50.390624999999986 C 68.553125 26.234374999999993 68.553125 26.234374999999993 119.896875 22.078124999999993" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,22.078124999999993 L110.21283768941586,26.375731469561227 L114.41490638867545,22.523119544295078 L109.64648099667667,19.398680509693616 L119.896875,22.078124999999993" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v4__global__improve_tr"><td>improve</td><td><svg style="position:absolute;left:910.821875px;top:14432.21875px" width="157.10625" height="52.96875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 34.140625 C 68.553125 16.484375 68.553125 16.484375 119.896875 18.828125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,18.828125 L110.06609764325118,14.87770520432829 L114.40254684242436,18.57840896753203 L109.74827723829195,21.87048649578819 L119.896875,18.828125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v4__global__approx_eq_tr"><td>approx_eq</td><td><svg style="position:absolute;left:910.821875px;top:14474.78125px" width="157.10625" height="33.46875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.890625 C 68.553125 6.734375 68.553125 6.734375 119.896875 15.578125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,15.578125 L110.63524860729751,10.43300337247779 L114.4765360874972,14.645426724238764 L109.44817807451048,17.331616533844986 L119.896875,15.578125" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v4__global__sqrt_tr"><td>sqrt</td><td><svg style="position:absolute;left:910.821875px;top:14501.3125px" width="157.10625" height="46.03125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.209375 17.671875 C 88.553125 13.015625 88.553125 13.015625 119.896875 28.359375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M119.896875,28.359375 L112.45298949509082,20.82023920139529 L114.95663386954881,25.941934706425325 L109.3762473032685,27.107818821969524 L119.896875,28.359375" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr></tbody></table></div><div id="stack" data-frame_id="1"><table><tbody><tr id="v4__sqrt_f1_p__a_tr"><td>a</td><td><span>256</span></td></tr><tr id="v4__sqrt_f1_p__sqrt_update_tr"><td>sqrt_update</td><td><svg style="position:absolute;left:909.734375px;top:14540.75px" width="158.53125" height="109.40624999999997" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 81.17187499999997 C 69.265625 44.703124999999986 69.265625 44.703124999999986 120.984375 28.23437499999999" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,28.23437499999999 L112.51933311003609,34.60564377483252 L115.74407007471233,29.904466102307197 L110.39376261619054,27.936164779011843 L120.984375,28.23437499999999" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr><tr id="v4__sqrt_f1_p__sqrt_close_tr"><td>sqrt_close</td><td><svg style="position:absolute;left:909.734375px;top:14583.3125px" width="158.53125" height="89.90625" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 64.921875 C 69.265625 34.953125 69.265625 34.953125 120.984375 24.984375000000004" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#cccccc" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,24.984375000000004 L111.82880990319629,30.315943977157616 L115.58402949323396,26.026617010068573 L110.50232007219992,23.442776968546283 L120.984375,24.984375000000004" stroke="#cccccc" fill="#cccccc"></path></svg></td></tr></tbody></table></div></td><td id="heap_td"><div id="heap"><div id="toplevel_heap_object_1"><p>func average(x,&nbsp;y) [parent=Global]</p></div><div id="toplevel_heap_object_2"><p>func improve(update,&nbsp;close,&nbsp;guess) [parent=Global]</p></div><div id="toplevel_heap_object_3"><p>func approx_eq(x,&nbsp;y,&nbsp;tolerance) [parent=Global]</p></div><div id="toplevel_heap_object_4"><p>func sqrt(a) [parent=Global]</p></div><div id="toplevel_heap_object_5"><p>func sqrt_update(x) [parent=f1]</p></div><div id="toplevel_heap_object_6"><p>func sqrt_close(x) [parent=f1]</p></div></div></td></tr></tbody></table></div></td></tr></tbody></table>

The most critical part of this evaluation procedure is the transfer of the parent for sqrt\_update to the frame created by calling sqrt\_update. This frame is also annotated with \[parent=f1\].

**Extended Environments**. An environment can consist of an arbitrarily long chain of frames, which always concludes with the global frame. Previous to this sqrt example, environments had at most two frames: a local frame and the global frame. By calling functions that were defined within other functions, via nested def statements, we can create longer chains. The environment for this call to sqrt\_update consists of three frames: the local sqrt\_update frame, the sqrt frame in which sqrt\_update was defined (labeled f1), and the global frame.

The return expression in the body of sqrt\_update can resolve a value for a by following this chain of frames. Looking up a name finds the first value bound to that name in the current environment. Python checks first in the sqrt\_update frame -- no a exists. Python checks next in the parent frame, f1, and finds a binding for a to 256.

Hence, we realize two key advantages of lexical scoping in Python.

-   The names of a local function do not interfere with names external to the function in which it is defined, because the local function name will be bound in the current local environment in which it was defined, rather than the global environment.
-   A local function can access the environment of the enclosing function, because the body of the local function is evaluated in an environment that extends the evaluation environment in which it was defined.

The sqrt\_update function carries with it some data: the value for a referenced in the environment in which it was defined. Because they "enclose" information in this way, locally defined functions are often called _closures_.

### 1.6.4   Functions as Returned Values

We can achieve even more expressive power in our programs by creating functions whose returned values are themselves functions. An important feature of lexically scoped programming languages is that locally defined functions maintain their parent environment when they are returned. The following example illustrates the utility of this feature.

Once many simple functions are defined, function _composition_ is a natural method of combination to include in our programming language. That is, given two functions f(x) and g(x), we might want to define h(x) = f(g(x)). We can define function composition using our existing tools:

```
>>> def compose1(f, g):
        def h(x):
            return f(g(x))
        return h

```

The environment diagram for this example shows how the names f and g are resolved correctly, even in the presence of conflicting names.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="17"><svg id="leftCodeGutterSVG" style="height: 371px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 193)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 368)"></polygon></svg></td><td id="lineNo1">1</td><td id="v5__cod1">def&nbsp;square(x):</td></tr><tr><td id="lineNo2">2</td><td id="v5__cod2">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;x&nbsp;*&nbsp;x</td></tr><tr><td id="lineNo3">3</td><td id="v5__cod3"></td></tr><tr><td id="lineNo4">4</td><td id="v5__cod4">def&nbsp;successor(x):</td></tr><tr><td id="lineNo5">5</td><td id="v5__cod5">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;x&nbsp;+&nbsp;1</td></tr><tr><td id="lineNo6">6</td><td id="v5__cod6"></td></tr><tr><td id="lineNo7">7</td><td id="v5__cod7">def&nbsp;compose1(f,&nbsp;g):</td></tr><tr><td id="lineNo8">8</td><td id="v5__cod8">&nbsp;&nbsp;&nbsp;&nbsp;def&nbsp;h(x):</td></tr><tr><td id="lineNo9">9</td><td id="v5__cod9">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;f(g(x))</td></tr><tr><td id="lineNo10">10</td><td id="v5__cod10">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;h</td></tr><tr><td id="lineNo11">11</td><td id="v5__cod11"></td></tr><tr><td id="lineNo12">12</td><td id="v5__cod12">def&nbsp;f(x):</td></tr><tr><td id="lineNo13">13</td><td id="v5__cod13">&nbsp;&nbsp;&nbsp;&nbsp;"""Never&nbsp;called."""</td></tr><tr><td id="lineNo14">14</td><td id="v5__cod14">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;-x</td></tr><tr><td id="lineNo15">15</td><td id="v5__cod15"></td></tr><tr><td id="lineNo16">16</td><td id="v5__cod16">square_successor&nbsp;=&nbsp;compose1(square,&nbsp;successor)</td></tr><tr><td id="lineNo17">17</td><td id="v5__cod17">result&nbsp;=&nbsp;square_successor(12)</td></tr></tbody></table></div><p><span id="curInstr">End</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"><div id="globals_area"><table id="v5__global_table"><tbody><tr id="v5__global__square_tr"><td>square</td><td><svg style="position:absolute;left:926.734375px;top:17606.75px" width="158.53125" height="72.46874999999999" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 50.390624999999986 C 69.265625 26.234374999999993 69.265625 26.234374999999993 120.984375 22.078124999999993" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,22.078124999999993 L111.29782580505565,26.37006683254188 L115.50214706237531,22.519913229729394 L110.73554987630914,19.392685821019562 L120.984375,22.078124999999993" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v5__global__successor_tr"><td>successor</td><td><svg style="position:absolute;left:926.734375px;top:17649.3125px" width="158.53125" height="52.96875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 34.140625 C 69.265625 16.484375 69.265625 16.484375 120.984375 18.828125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,18.828125 L111.15229872909457,14.880939141302882 L115.48996499839895,18.580216278276954 L110.8367785378107,21.873824597886035 L120.984375,18.828125" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v5__global__compose1_tr"><td>compose1</td><td><svg style="position:absolute;left:926.734375px;top:17691.875px" width="158.53125" height="33.46875" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 17.890625 C 69.265625 6.734375 69.265625 6.734375 120.984375 15.578125" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,15.578125 L111.7165180498143,10.444234900777523 L115.56290937264814,14.651998415000788 L110.53781148708804,17.34428206286171 L120.984375,15.578125" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v5__global__f_tr"><td>f</td><td><svg style="position:absolute;left:926.734375px;top:17718.40625px" width="158.53125" height="46.03125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 17.671875 C 89.265625 13.015625 89.265625 13.015625 120.984375 28.359375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,28.359375 L113.50529075456133,20.855156263207267 L116.03287527454444,25.96507959867344 L110.45800569832754,27.15706500469616 L120.984375,28.359375" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v5__global__square_successor_tr"><td>square_successor</td><td><svg style="position:absolute;left:926.734375px;top:17741.46875px" width="158.53125" height="65.53125" pointer-events="none" position="absolute" version="1.1" xmlns="http://www.w3.org/1999/xhtml"><path d="M 37.546875 20.921875 C 89.265625 22.765624999999996 89.265625 22.765624999999996 120.984375 44.609375" pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" style="" fill="none" stroke="#005583" stroke-width="1"></path><path pointer-events="all" version="1.1" xmlns="http://www.w3.org/1999/xhtml" d="M120.984375,44.609375 L114.73281923651247,36.05554249427452 L116.45433631200865,41.49028066264796 L110.76306280715532,41.82104627899079 L120.984375,44.609375" stroke="#005583" fill="#005583"></path></svg></td></tr><tr id="v5__global__result_tr"><td>result</td><td><span>169</span></td></tr></tbody></table></div></td><td id="heap_td"><div id="heap"><div id="toplevel_heap_object_1"><p>func square(x) [parent=Global]</p></div><div id="toplevel_heap_object_2"><p>func successor(x) [parent=Global]</p></div><div id="toplevel_heap_object_3"><p>func compose1(f,&nbsp;g) [parent=Global]</p></div><div id="toplevel_heap_object_4"><p>func f(x) [parent=Global]</p></div></div></td></tr></tbody></table></div></td></tr></tbody></table>

The 1 in compose1 is meant to signify that the composed functions all take a single argument. This naming convention is not enforced by the interpreter; the 1 is just part of the function name.

At this point, we begin to observe the benefits of our effort to define precisely the environment model of computation. No modification to our environment model is required to explain our ability to return functions in this way.

### 1.6.5   Example: Newton's Method

This extended example shows how function return values and local definitions can work together to express general ideas concisely. We will implement an algorithm that is used broadly in machine learning, scientific computing, hardware design, and optimization.

Newton's method is a classic iterative approach to finding the arguments of a mathematical function that yield a return value of 0. These values are called the _zeros_ of the function. Finding a zero of a function is often equivalent to solving some other problem of interest, such as computing a square root.

A motivating comment before we proceed: it is easy to take for granted the fact that we know how to compute square roots. Not just Python, but your phone, web browser, or pocket calculator can do so for you. However, part of learning computer science is understanding how quantities like these can be computed, and the general approach presented here is applicable to solving a large class of equations beyond those built into Python.

Newton's method is an iterative improvement algorithm: it improves a guess of the zero for any function that is _differentiable_, which means that it can be approximated by a straight line at any point. Newton's method follows these linear approximations to find function zeros.

Imagine a line through the point (x,f(x)) that has the same slope as the curve for function f(x) at that point. Such a line is called the _tangent_, and its slope is called the _derivative_ of f at x.

This line's slope is the ratio of the change in function value to the change in function argument. Hence, translating x by f(x) divided by the slope will give the argument value at which this tangent line touches 0.

![](/img/cs61a/newton.png)

A newton\_update expresses the computational process of following this tangent line to 0, for a function f and its derivative df.

```
>>> def newton_update(f, df):
        def update(x):
            return x - f(x) / df(x)
        return update

```

Finally, we can define the find\_root function in terms of newton\_update, our improve algorithm, and a comparison to see if f(x) is near 0.

```
>>> def find_zero(f, df):
        def near_zero(x):
            return approx_eq(f(x), 0)
        return improve(newton_update(f, df), near_zero)

```

**Computing Roots.** Using Newton's method, we can compute roots of arbitrary degree n. The degree n root of a is x such that x⋅x⋅x…x\=a with x repeated n times. For example,

-   The square (second) root of 64 is 8, because 8⋅8\=64.
-   The cube (third) root of 64 is 4, because 4⋅4⋅4\=64.
-   The sixth root of 64 is 2, because 2⋅2⋅2⋅2⋅2⋅2\=64.

We can compute roots using Newton's method with the following observations:

-   The square root of 64 (written 64) is the value x such that x2−64\=0
-   More generally, the degree n root of a (written an) is the value x such that xn−a\=0

If we can find a zero of this last equation, then we can compute degree n roots. By plotting the curves for n equal to 2, 3, and 6 and a equal to 64, we can visualize this relationship.

![](/img/cs61a/curves.png)

We first implement square\_root by defining f and its derivative df. We use from calculus the fact that the derivative of f(x)\=x2−a is the linear function df(x)\=2x.

```
>>> def square_root_newton(a):
        def f(x):
            return x * x - a
        def df(x):
            return 2 * x
        return find_zero(f, df)

```

```
>>> square_root_newton(64)
8.0

```

Generalizing to roots of arbitrary degree n, we compute f(x)\=xn−a and its derivative df(x)\=n⋅xn−1.

```
>>> def power(x, n):
        """Return x * x * x * ... * x for x repeated n times."""
        product, k = 1, 0
        while k < n:
            product, k = product * x, k + 1
        return product

```

```
>>> def nth_root_of_a(n, a):
        def f(x):
            return power(x, n) - a
        def df(x):
            return n * power(x, n-1)
        return find_zero(f, df)

```

```
>>> nth_root_of_a(2, 64)
8.0
>>> nth_root_of_a(3, 64)
4.0
>>> nth_root_of_a(6, 64)
2.0

```

The approximation error in all of these computations can be reduced by changing the tolerance in approx\_eq to a smaller number.

As you experiment with Newton's method, be aware that it will not always converge. The initial guess of improve must be sufficiently close to the zero, and various conditions about the function must be met. Despite this shortcoming, Newton's method is a powerful general computational method for solving differentiable equations. Very fast algorithms for logarithms and large integer division employ variants of the technique in modern computers.

### 1.6.6   Currying

We can use higher-order functions to convert a function that takes multiple arguments into a chain of functions that each take a single argument. More specifically, given a function f(x, y), we can define a function g such that g(x)(y) is equivalent to f(x, y). Here, g is a higher-order function that takes in a single argument x and returns another function that takes in a single argument y. This transformation is called _currying_.

As an example, we can define a curried version of the pow function:

```
>>> def curried_pow(x):
        def h(y):
            return pow(x, y)
        return h

```

Some programming languages, such as Haskell, only allow functions that take a single argument, so the programmer must curry all multi-argument procedures. In more general languages such as Python, currying is useful when we require a function that takes in only a single argument. For example, the _map_ pattern applies a single-argument function to a sequence of values. In later chapters, we will see more general examples of the map pattern, but for now, we can implement the pattern in a function:

```
>>> def map_to_range(start, end, f):
        while start < end:
            print(f(start))
            start = start + 1

```

We can use map\_to\_range and curried\_pow to compute the first ten powers of two, rather than specifically writing a function to do so:

```
>>> map_to_range(0, 10, curried_pow(2))
1
2
4
8
16
32
64
128
256
512

```

We can similarly use the same two functions to compute powers of other numbers. Currying allows us to do so without writing a specific function for each number whose powers we wish to compute.

In the above examples, we manually performed the currying transformation on the pow function to obtain curried\_pow. Instead, we can define functions to automate currying, as well as the inverse _uncurrying_ transformation:

```
>>> def curry2(f):
        """Return a curried version of the given two-argument function."""
        def g(x):
            def h(y):
                return f(x, y)
            return h
        return g

```

```
>>> def uncurry2(g):
        """Return a two-argument version of the given curried function."""
        def f(x, y):
            return g(x)(y)
        return f

```

```
>>> pow_curried = curry2(pow)
>>> pow_curried(2)(5)
32
>>> map_to_range(0, 10, pow_curried(2))
1
2
4
8
16
32
64
128
256
512

```

The curry2 function takes in a two-argument function f and returns a single-argument function g. When g is applied to an argument x, it returns a single-argument function h. When h is applied to y, it calls f(x, y). Thus, curry2(f)(x)(y) is equivalent to f(x, y). The uncurry2 function reverses the currying transformation, so that uncurry2(curry2(f)) is equivalent to f.

```
>>> uncurry2(pow_curried)(2, 5)
32

```

### 1.6.7   Lambda Expressions

So far, each time we have wanted to define a new function, we needed to give it a name. But for other types of expressions, we don't need to associate intermediate values with a name. That is, we can compute a\*b + c\*d without having to name the subexpressions a\*b or c\*d, or the full expression. In Python, we can create function values on the fly using lambda expressions, which evaluate to unnamed functions. A lambda expression evaluates to a function that has a single return expression as its body. Assignment and control statements are not allowed.

```
>>> def compose1(f, g):
        return lambda x: f(g(x))

```

We can understand the structure of a lambda expression by constructing a corresponding English sentence:

```
     lambda            x            :          f(g(x))
"A function that    takes x    and returns     f(g(x))"

```

The result of a lambda expression is called a lambda function. It has no intrinsic name (and so Python prints <lambda> for the name), but otherwise it behaves like any other function.

```
>>> s = lambda x: x * x
>>> s
<function <lambda> at 0xf3f490>
>>> s(12)
144

```

In an environment diagram, the result of a lambda expression is a function as well, named with the greek letter λ (lambda). Our compose example can be expressed quite compactly with lambda expressions.

<table><tbody><tr><td id="vizLayoutTdFirst"><div id="codeDisplayDiv"><div id="pyCodeOutputDiv"><table id="pyCodeOutput"><tbody><tr><td id="gutterTD" rowspan="6"><svg id="leftCodeGutterSVG" style="height: 130px;"><polygon id="prevLineArrow" points="0,0 6,5 0,10" fill="#c9e6ca" transform="translate(0, 38.515625)"></polygon><polygon id="curLineArrow" points="0,0 6,5 0,10" fill="#e93f34" transform="translate(0, 126.578125)"></polygon></svg></td><td id="lineNo1">1</td><td id="v6__cod1">def&nbsp;compose1(f,&nbsp;g):</td></tr><tr><td id="lineNo2">2</td><td id="v6__cod2">&nbsp;&nbsp;&nbsp;&nbsp;return&nbsp;lambda&nbsp;x:&nbsp;f(g(x))</td></tr><tr><td id="lineNo3">3</td><td id="v6__cod3"></td></tr><tr><td id="lineNo4">4</td><td id="v6__cod4">f&nbsp;=&nbsp;compose1(lambda&nbsp;x:&nbsp;x&nbsp;*&nbsp;x,</td></tr><tr><td id="lineNo5">5</td><td id="v6__cod5">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;lambda&nbsp;y:&nbsp;y&nbsp;+&nbsp;1)</td></tr><tr><td id="lineNo6">6</td><td id="v6__cod6">result&nbsp;=&nbsp;f(12)</td></tr></tbody></table></div><p><span id="curInstr">End</span></p><div id="legendDiv"><svg id="prevLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#c9e6ca"></polygon></svg><p>line that has just executed</p><p><svg id="curLegendArrowSVG"><polygon points="0,0 6,5 0,10" fill="#e93f34"></polygon></svg>next line to execute</p></div></div></td><td id="vizLayoutTdSecond"><div id="dataViz"><table id="stackHeapTable"><tbody><tr><td id="stack_td"></td><td id="heap_td"><div id="heap"><div id="toplevel_heap_object_1"><p>func compose1(f,&nbsp;g) [parent=Global]</p></div><div id="toplevel_heap_object_2"><p>func λ(x)&nbsp;&lt;line&nbsp;4&gt; [parent=Global]</p></div><div id="toplevel_heap_object_3"><p>func λ(y)&nbsp;&lt;line&nbsp;5&gt; [parent=Global]</p></div><div id="toplevel_heap_object_4"><p>func λ(x)&nbsp;&lt;line&nbsp;2&gt; [parent=f1]</p></div></div></td></tr></tbody></table></div></td></tr></tbody></table>

Some programmers find that using unnamed functions from lambda expressions to be shorter and more direct. However, compound lambda expressions are notoriously illegible, despite their brevity. The following definition is correct, but many programmers have trouble understanding it quickly.

```
>>> compose1 = lambda f,g: lambda x: f(g(x))

```

In general, Python style prefers explicit def statements to lambda expressions, but allows them in cases where a simple function is needed as an argument or return value.

Such stylistic rules are merely guidelines; you can program any way you wish. However, as you write programs, think about the audience of people who might read your program one day. When you can make your program easier to understand, you do those people a favor.

The term _lambda_ is a historical accident resulting from the incompatibility of written mathematical notation and the constraints of early type-setting systems.

> It may seem perverse to use lambda to introduce a procedure/function. The notation goes back to Alonzo Church, who in the 1930's started with a "hat" symbol; he wrote the square function as "ŷ . y × y". But frustrated typographers moved the hat to the left of the parameter and changed it to a capital lambda: "Λy . y × y"; from there the capital lambda was changed to lowercase, and now we see "λy . y × y" in math books and (lambda (y) (\* y y)) in Lisp.
> 
> —Peter Norvig (norvig.com/lispy2.html)

Despite their unusual etymology, lambda expressions and the corresponding formal language for function application, the _lambda calculus_, are fundamental computer science concepts shared far beyond the Python programming community. We will revisit this topic when we study the design of interpreters in Chapter 3.

### 1.6.8   Abstractions and First-Class Functions

We began this section with the observation that user-defined functions are a crucial abstraction mechanism, because they permit us to express general methods of computing as explicit elements in our programming language. Now we've seen how higher-order functions permit us to manipulate these general methods to create further abstractions.

As programmers, we should be alert to opportunities to identify the underlying abstractions in our programs, build upon them, and generalize them to create more powerful abstractions. This is not to say that one should always write programs in the most abstract way possible; expert programmers know how to choose the level of abstraction appropriate to their task. But it is important to be able to think in terms of these abstractions, so that we can be ready to apply them in new contexts. The significance of higher-order functions is that they enable us to represent these abstractions explicitly as elements in our programming language, so that they can be handled just like other computational elements.

In general, programming languages impose restrictions on the ways in which computational elements can be manipulated. Elements with the fewest restrictions are said to have first-class status. Some of the "rights and privileges" of first-class elements are:

1.  They may be bound to names.
2.  They may be passed as arguments to functions.
3.  They may be returned as the results of functions.
4.  They may be included in data structures.

Python awards functions full first-class status, and the resulting gain in expressive power is enormous.

### 1.6.9   Function Decorators

Python provides special syntax to apply higher-order functions as part of executing a def statement, called a decorator. Perhaps the most common example is a trace.

```
>>> def trace(fn):
        def wrapped(x):
            print('-> ', fn, '(', x, ')')
            return fn(x)
        return wrapped

```

```
>>> @trace
    def triple(x):
        return 3 * x

```

```
>>> triple(12)
->  <function triple at 0x102a39848> ( 12 )
36

```

In this example, A higher-order function trace is defined, which returns a function that precedes a call to its argument with a print statement that outputs the argument. The def statement for triple has an annotation, @trace, which affects the execution rule for def. As usual, the function triple is created. However, the name triple is not bound to this function. Instead, the name triple is bound to the returned function value of calling trace on the newly defined triple function. In code, this decorator is equivalent to:

```
>>> def triple(x):
        return 3 * x

```

```
>>> triple = trace(triple)

```

In the projects associated with this text, decorators are used for tracing, as well as selecting which functions to call when a program is run from the command line.

**Extra for experts.** The decorator symbol @ may also be followed by a call expression. The expression following @ is evaluated first (just as the name trace was evaluated above), the def statement second, and finally the result of evaluating the decorator expression is applied to the newly defined function, and the result is bound to the name in the def statement. A [short tutorial on decorators](http://programmingbits.pythonblogs.com/27_programmingbits/archive/50_function_decorators.html) by Ariel Ortiz gives further examples for interested students.