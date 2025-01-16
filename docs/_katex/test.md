MIT OpenCourseWare  
http://ocw.mit.edu

18.01 Single Variable Calculus  
Fall 2006

For information about citing these materials or our Terms of Use, visit: http://ocw.mit.edu/terms.
<hr><hr>
# A. APPROXIMATIONS

In science and engineering, you often approximate complicated functions by simpler ones which are easier to calculate with, and which show the relations between the variables more clearly. Of course, the approximation must be close enough to give you reasonable accuracy. For this reason, approximation is a skill, one your other teachers will expect you to have. This is a good place to start acquiring it.

Throughout, we will use the symbol ≈ to mean "approximately equal to"; this is a bit vague, but making approximations in engineering is more art than science.

## 1. The linear approximation; linearizations.

The simplest way to approximate a function f(x) for values of x near a is to use a linear function. The linear function we shall use is the one whose graph is the tangent line to f(x) at x = a. This makes sense because the tangent line at (a, f(a)) gives a good approximation to the graph of f(x), if x is close to a. That is, for x ≈ a;

(1)  
**height of the graph of f(x) ≈ height of the tangent at (a, f(a))**

To turn (1) into calculus, we need the equation for the tangent line. Since the line goes through (a, f(a)) and has slope f'(a), its equation is

y = f(a) + f'(a)(x - a),

and therefore (1) can be expressed as

(2)  
f(x) ≈ f(a) + f'(a)(x - a), for x ≈ a.

This says that for x near a, the function f(x) can be approximated by the linear function on the right of (2). This function — the one whose graph is the tangent line — is called the linearization of f(x) at x = a.

The approximation (2) is often written in an equivalent form that you should become familiar with; it makes use of a dependent variable. Writing

(3)  
y = f(x), Δx = x - a, Δy = f(x) - f(a),

the approximation (2) takes the form

(2')  
Δy ≈ f'(a) Δx, for Δx ≈ 0.

In this form, the quantity on the right represents the change in height of the tangent line, while the left measures the change in height of the graph.

Here are some examples of linear approximations. In all of them, we are taking a = 0, this being the most important case. All can be found by using (2) above and calculating the derivative. You should verify each of them, and memorize the approximation.

1
<hr><hr>
## A. APPROXIMATIONS

### Basic Linear Approximations

(4)  
\[
\frac{1}{1-x} \approx 1 + x, \quad \text{for } x \approx 0;
\]
(5)  
\[
(1 + x)^r \approx 1 + rx, \quad \text{for } x \approx 0; \quad r \text{ is any real number}
\]
(6)  
\[
\sin x \approx x, \quad \text{for } x \approx 0.
\]

Note that (4) becomes a special case of (5) if we take \( r = -1 \) and replace \( x \) by \(-x\); nonetheless, learn (4) separately since it is very common. As an example of verification, let us check (5):

\[
f(x) = (1 + x)^r \Rightarrow f'(x) = r(1 + x)^{r-1}, \quad \text{for any real } r;
\]
\[
\Rightarrow f'(0) = r.
\]

Therefore, (2) becomes

\[
(1 + x)^r \approx f(0) + f'(0)x
\]
\[
\approx 1 + rx, \quad \text{which is (5).}
\]

### 2. The algebraic viewpoint; examples

Though the three basic approximations given above can be derived by using differentiation, many people remember them better by relating them to high school algebra and geometry. We show how.

The approximation (4) can be thought of as coming from the formula for the sum of a geometric series (memorize this too, if you have forgotten it):

\[
\frac{1}{1-x} = 1 + x + x^2 + \ldots + x^n + \ldots, \quad |x| < 1.
\]

If \( x \) is small, then the terms \( x^2, x^3, \ldots \) on the right are all negligible compared with the term \( x \), so they can be ignored, and we get (4).

Similarly, the approximation (5) can be thought of as coming from the binomial theorem, if \( r \) is a positive integer:

\[
(1 + x)^r = 1 + rx + \frac{r(r-1)}{2} x^2 + \ldots + x^r.
\]

As before, if \( x \) is small, we can neglect the terms in \( x^2, x^3, \ldots \), and we get the approximation (5). Even if \( r \) is not an integer, you will learn when you study infinite series that the binomial theorem is still formally true. Though it gives an infinite sum on the right, instead of a finite sum, the coefficients are still calculated by the same formulas.

Finally, the linear approximation (6) for \(\sin x\) should make sense if you think of the trigonometric definition of \(\sin x\). Referring to the picture, it says that a small arc \(2x\) of the unit circle is approximately equal in length to the chord \(2 \sin x\) it subtends.
<hr><hr>
### A. APPROXIMATIONS

Continuing this algebraic viewpoint, many other linear approximation formulas can be derived from the basic ones above by using algebra, rather than by going back to (2) and calculating derivatives. Here are some examples of this.

**Example 1.** In each of the following, we want a linear approximation valid for x ≈ 0. Observe in the first two how the variable is divided by a number (or "scaled", as one says, since it amounts to a change of scale or change of units for the variable). The purpose is to put the expression in a form where one of the basic approximations can be used.

(a)  
\[
\frac{1}{2+x} = \frac{1/2}{1+x/2} \approx \frac{1}{2} \left( 1 - \frac{x}{2} \right)
\]
by scaling and using (4);

(b)  
\[
\sqrt{9+t} = \sqrt{9} \sqrt{1+t/9} = 3(1+t/9)^{1/2},
\]
by scaling;  
\[
\approx 3(1+t/18) = 3+t/6,
\]
for t ≈ 0, by using (5).

Example (b) above is just as easy to do by using (2)', since
\[
\frac{d}{dt} \sqrt{9+t} \bigg|_{t=0} = \frac{1}{6}.
\]
In example (c) below, however, using (2) would definitely require more work.

(c)  
\[
\frac{2+x}{\sqrt{1+x}} \approx \frac{2+x}{1+x/2} \approx (2+x)(1-x/2),
\]
using (5), then (4);  
\[
\approx 2,
\]
multiplying out and neglecting terms in x².

*Notice that in this example, the linearization 2+0x turns out to be a constant function.*

**Approximations for x ≈ a, where a ≠ 0.**

Though it is most common to work near a = 0, sometimes one wants another value of a. Either one can use the formula (2), or else one can make a change of variable: h, Δx, ε are all common choices, related to x by

(7)  
\[ 
x = a + h, \quad x = a + \Delta x, \quad x = a + \epsilon.
\]

The new variable is then close to 0 when x is close to a. Here is an example.

**Example 2.** Approximate 3 + x⁴ for x ≈ 1.

**Solution.** Either use (2), or change variable; doing the latter, we put x = 1 + h. Then

3 + x⁴ = 3 + (1 + h)⁴,  
≈ 3 + (1 + 4h), h ≈ 0, using (5);  
≈ 4 + 4(x - 1), for x ≈ 1.

**Applications.** Here are a few typical uses of the linearization.

**Example 3.** In the theory of special relativity, the mass m of a body moving with speed v is given by:

\[
m = \frac{m_0 c}{\sqrt{c^2 - v^2}}, \quad m_0 = \text{mass at rest}, \quad c = \text{velocity of light}
\]

What speed produces a 1% increase in mass?
<hr><hr>
4

A. APPROXIMATIONS

Solution. We could crank out the answer, using the formula for m, but in practice a simplifying approximation would be used. To begin with, scale m and v, i.e., divide them by suitable constants to make them dimensionless: m/m₀ and v/c; this turns the above formula into (dividing top and bottom by c):

m/m₀ = 1/√(1 - v²/c²) = 1/(1 - u²)¹/²,

where we have set v/c = u; when u is small compared with c, then u ≈ 0. We get, using (5) with r = 1/2,

1/(1 - u²)¹/² ≈ 1 - (1/2)u² ≈ 1 + u²/2, u ≈ 0,

where the second approximation used (4), with x = u²/2.

This approximation shows that to make m/m₀ = 1.01 (this represents a 1% increase in the mass), we want

u²/2 = .01, i.e., u = √.02 ≈ 1/7.

The corresponding velocity is (remember that u = v/c):

v ≈ c/7 ≈ (186,000/7) mi/sec ≈ 27,000 mi/sec.

Example 4. Give a useful approximate formula, valid for relatively small heights, showing how the weight of a body decreases as it rises above the earth, and use your formula to determine how high it must rise to experience a 1% loss in weight.

Solution. Let R be the radius of the earth. The force between two masses m₁ and M₂ with centers of mass separated by a distance d is

F = Gm₁m₂/d²,

so if the earth weight is M and our body has weight m,

weight at surface = GMm/R²
weight at height h above surface = GMm/(R + h)², so that
weight at height h/weight at surface = R²/(R + h)² = 1/(1 + h/R)²,

where in this last step we made the variable dimensionless by dividing numerator and denominator by R²; this scaling also makes the expression simpler. We continue with approximations:

≈ (1 - h/R)², using (4);
≈ 1 - 2h/R, using (5).

The approximation is valid if h/R ≈ 0, i.e., if h is very small compared to R.
<hr><hr>
A. APPROXIMATIONS 5

Using our approximation, we see that to make the ratio of the weights ≈ .99, we want

\[
\frac{2h}{R} \approx .01, \quad \text{i.e.,} \quad h = \frac{.01R}{2} = \frac{.01 \cdot 4,000}{2} = 20 \text{ miles.}
\]

4. Quadratic approximations.

To get greater accuracy, sometimes one wants to include higher-order terms in the approximating function. If we include second-order terms — that is, terms in \((x-a)^2\), we get what is called a quadratic approximation for \(x \approx a\). It looks like

(8) \[ f(x) \approx A + B(x-a) + C(x-a)^2, \quad x \approx a. \]

There is a general formula for the coefficients \(A, B, C\) using calculus, but let's work algebraically first, and consider the basic approximations.

**Basic Quadratic Approximations**

(9) \[ \frac{1}{1-x} \approx 1 + x + x^2, \quad \text{for } x \approx 0; \]

(10) \[ (1 + x)^r \approx 1 + rx + \frac{r(r-1)}{2} x^2, \quad \text{for } x \approx 0; \quad r \text{ is any real number} \]

(11) \[ \sin x \approx x, \quad \text{for } x \approx 0. \]

(12) \[ \cos x \approx 1 - \frac{x^2}{2}, \quad \text{for } x \approx 0. \]

**Discussion**

Formula (9) comes as before from the sum of the geometric series.

Formula (10) is the beginning of the binomial theorem, if \(r\) is an integer.

Formula (11) looks like our earlier linear approximation, but the assertion here is that it is also the best quadratic approximation — that is, the term in \(x^2\) has 0 for its coefficient. This is so because \(\sin x\) is an odd function, so the approximating polynomial should be odd also, which means it cannot have any \(x^2\) term.

Formula (12) is derived from (11) and the identity \(\sin^2 x + \cos^2 x = 1\); this is one of the exercises.

Using these basic quadratic approximations, we can by algebra get quadratic approximations to more involved expressions. Examples are given below. In studying the examples, notice that during the course of the calculation, **all approximations must be quadratic.** If one of the approximations you use is only linear, then that contaminates the final result, which probably will not have the correct \(x^2\) term. This is the same principle you meet in adding numbers: if one of the numbers is only good to one decimal place, then no matter how accurate all the other numbers are, the sum will only be good to one decimal place.
<hr><hr>
6 A. APPROXIMATIONS

**Example 5.** By using the basic approximations, give quadratic approximations valid for x ≈ 0 for each of the following:

(a) sec x (b) √1 + 3x (c) √1 + x + x² (d) cos x / 1 - x

**Solution.**

(a) sec x = 1 / cos x ≈ 1 / 1 - x²/2 ≈ 1 + x² / 2, by (12) and (4).

(b) √1 + 3x = (1 + 3x)^1/2 ≈ 1 + 1/2 (3x) - 1/8 (3x)², by (10);

≈ 1 + 3/2 x - 9/8 x².

(c) √1 + x + x² = (1 + (x + x²))^1/2

≈ 1 + 1/2 (x + x²) - 1/8 (x + x²)² ≈ 1 + 1/2 x + 3/8 x², by (10).

(d) cos x / 1 - x ≈ (1 - x²/2) (1 + x + x²) ≈ 1 + x + x² / 2.

To illustrate what happens if you don't keep enough terms during the calculation, observe that if in (d) above we only used 1 + x in the right-hand factor, the answer would have been 1 + x - x²/2, whose x² term is incorrect.

6. The quadratic approximation formula.

(13) f(x) ≈ f(a) + f'(a)(x - a) + f''(a) / 2 (x - a)², for x ≈ a.

**Example 6.** Check formulas (10) and (11) by using (13).

**Solution.** Since the first two terms of (13) are the linearization, we can build on our earlier work, and have only to calculate the quadratic coefficient f''(0)/2. We get

(a) sin x ≈ 0 + x + 0x², since sin''(x) = -sin x ⇒ sin''(0) = 0.

(b) f(x) = (1 + x)^r ⇒ f'(x) = r(1 - x)^r-2 ⇒ f''(0) / 2 = r(r - 1) / 2, as in (10).

The usefulness of (13) is tempered by the fact that it requires calculation of second derivatives. This can get rather tedious — function (d) in Example 5 is a good illustration — so that using the algebraic techniques is often better.
<hr><hr>
### A. APPROXIMATIONS

The quadratic approximation formula (13) may be "derived" as follow. We are looking for the right choice of coefficients in

(14)  
f(x) ≈ A + B(x - a) + C(x - a)², x ≈ a.

Let us denote by Q(x) the polynomial on the right of (14). Then it makes sense to choose the coefficients A, B, C so that f(x) and Q(x) have the same value and the same first and second derivatives at a, i.e., so that

(15)  
f(a) = Q(a), f'(a) = Q'(a), f''(a) = Q''(a).

Since Q'(x) = B + 2C(x - a) and Q''(x) = 2C, equations (15) say that

(16)  
f(a) = A, f'(a) = B, f''(a) = 2C;

these values for A, B, C turn (14) into (13), as promised. Note that the first two terms on the right of (13) give the linearization at x = a; thus the quadratic approximation refines the linear approximation by adding a quadratic term to it.

**Exercises: Section 2A**