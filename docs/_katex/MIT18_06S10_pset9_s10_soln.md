# 18.06 Pset 9 Solutions

## Problem 6.5, #25:
With positive pivots in $D$, the factorization $A = LDL^\top$ becomes $L\sqrt{D}\sqrt{D}L^\top$. (Square roots of the pivots give $D = \sqrt{D}\sqrt{D}$.) Then $C = \sqrt{D}L^\top$ yields the Cholesky factorization $A = C^\top C$ which is “symmetrized $LU$”.

From $C = \begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix}$ find $A$. From $A = \begin{bmatrix} 4 & 8 \\ 8 & 25 \end{bmatrix}$ find $C = \text{chol}(A)$.

**Solution** (4 points) From $C$, we obtain

$$
 A = C^\top C = \begin{bmatrix} 3 & 0 \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 3 & 1 \\ 0 & 2 \end{bmatrix} = \begin{bmatrix} 9 & 3 \\ 3 & 5 \end{bmatrix}. 
$$

Conversely, the given $A$ quickly diagonalizes to $\begin{bmatrix} 4 & 0 \\ 0 & 9 \end{bmatrix}$ via $L = \begin{bmatrix} 1 & 0 \\ 2 & 1 \end{bmatrix}$: thus

$$
 C = \text{chol}(A) = \sqrt{D}L^\top = \begin{bmatrix} 2 & 4 \\ 0 & 3 \end{bmatrix}. 
$$


## Problem 6.5, #26:
In the Cholesky factorization $A = C^\top C$, with $C^\top = L\sqrt{D}$, the square roots of the pivots are on the diagonal of $C$. Find $C$ (upper triangular) for

$$
 A = \begin{bmatrix} 9 & 0 & 0 \\ 0 & 1 & 2 \\ 0 & 2 & 8 \end{bmatrix} \quad \text{and} \quad A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 2 \\ 1 & 2 & 7 \end{bmatrix}. 
$$


**Solution** (4 points) For the first matrix $A$, we have

$$
 A = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 2 & 1 \end{bmatrix} \begin{bmatrix} 9 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 4 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{bmatrix} \Rightarrow C = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 2 & 2 \end{bmatrix} 
$$

while for the second matrix we have

$$
 A = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 5 \end{bmatrix} \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 1 \end{bmatrix} \Rightarrow C = \begin{bmatrix} 1 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & \sqrt{5} \end{bmatrix} 
$$


**Problem 6.5, #27:** The symmetric factorization $A = LDL^\top$ means that $\mathbf{x}^\top A \mathbf{x} = \mathbf{x}^\top LDL^\top \mathbf{x}$:

$$

\begin{bmatrix}
x & y
\end{bmatrix}
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}
=
\begin{bmatrix}
x & y
\end{bmatrix}
\begin{bmatrix}
1 & 0 \\
b/a & 1
\end{bmatrix}
\begin{bmatrix}
a & 0 \\
0 & (ac - b^2)/a
\end{bmatrix}
\begin{bmatrix}
1 & b/a \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
x \\
y
\end{bmatrix}

$$

The left side is $ax^2 + 2bxy + cy^2$. The right side is $a(x + \frac{b}{a}y)^2 + \_\_\_y^2$. The second pivot completes the square! Test with $a = 2, b = 4, c = 10$.

**Solution** (4 points) Evaluating out the right side gives $ax^2 + 2bxy + cy^2$, so the entry in the space given is $c - \frac{b^2}{a}$, i.e. the second pivot. For the given values, we have $2x^2 + 8xy + 10y^2 = 2(x + 2y)^2 + 2y^2$ as desired.

**Problem 6.5, #29:** For $F_1(x, y) = x^4/4 + x^2 + x^2y + y^2$ and $F_2(x, y) = x^3 + xy - x$, find the second-derivative matrices $H_1$ and $H_2$:

$$

H = \begin{pmatrix}
\frac{\partial^2 F}{\partial x^2} & \frac{\partial^2 F}{\partial x \partial y} \\
\frac{\partial^2 F}{\partial y \partial x} & \frac{\partial^2 F}{\partial y^2}
\end{pmatrix}.

$$

$H_1$ is positive-definite so $F_1$ is concave up (= convex). Find the minimum point of $F_1$ and the the saddle point of $F_2$ (look only where the first derivatives are zero).

**Solution** (4 points) For $F_1(x, y)$, we first solve for the stationary point

$$

\frac{\partial F_1}{\partial x} = x^3 + 2x + 2xy = 0, \frac{\partial F_1}{\partial y} = x^2 + 2y = 0

$$

From (2), we have $y = -x^2/2$. Plug this into (1), we have $2x = 0$ and hence the only critical point is $x = y = 0$. At this point,

$$

H_1 = \begin{pmatrix}
\frac{\partial^2 F}{\partial x^2} & \frac{\partial^2 F}{\partial x \partial y} \\
\frac{\partial^2 F}{\partial y \partial x} & \frac{\partial^2 F}{\partial y^2}
\end{pmatrix}
= \begin{pmatrix}
3x^2 + 2 + 2y & 2x \\
2x & 2
\end{pmatrix}
= \begin{pmatrix}
2 & 0 \\
0 & 2
\end{pmatrix}.

$$

It is positive definite and hence $(0, 0)$ is a minimal point of $F_1(x, y)$.

REMARK: The problem for $F_1 = x^4/4 + x^2y + y^2$ as originally stated, you get a curve of minima $x^2 + 2y = 0$, and $H_1$ is only positive semidefinite.

For $F_2(x, y)$, we first solve for the stationary point

$$

\frac{\partial F_2}{\partial x} = 3x^2 + y - 1 = 0, \frac{\partial F_2}{\partial y} = x = 0

$$

This implies that $y = 1$. At this point $(0, 1)$,

$$

H_2 = \begin{pmatrix}
\frac{\partial^2 F}{\partial x^2} & \frac{\partial^2 F}{\partial x \partial y} \\
\frac{\partial^2 F}{\partial y \partial x} & \frac{\partial^2 F}{\partial y^2}
\end{pmatrix}
= \begin{pmatrix}
6x & 1 \\
1 & 0
\end{pmatrix}
= \begin{pmatrix}
0 & 1 \\
1 & 0
\end{pmatrix}.

$$


The eigenvalues of $H_2$ at $(0, 1)$ is the solution to $\det(H_2 - \lambda I) = \lambda^2 - 1$, which are $\lambda_1 = 1$ and $\lambda_2 = -1$. They are with opposite signs and hence $(0, 1)$ is a saddle point of $F_2(x, y)$.

**Problem 6.5, #32:** A group of nonsingular matrices include $AB$ and $A^{-1}$ if it includes $A$ and $B$. “Products and inverses stay in the group.” Which of these are groups (as in 2.7.37)? Invent a “subgroup” of two of these groups (not $I$ by itself = the smallest group).

(a) Positive definite symmetric matrices $A$.

(b) Orthogonal matrices $Q$.

(c) All exponentials $e^{tA}$ of a fixed matrix $A$.

(d) Matrices $P$ with positive eigenvalues.

(e) Matrices $D$ with determinant 1.

**Solution** (12 points) First, note that all but the first and fourth are groups (assuming we are only referring to square matrices in (b)): on the other hand, $\begin{bmatrix} 1 & 2 \\ 2 & 3 \end{bmatrix}$ and $\begin{bmatrix} 1 & 2 \\ 2 & 4 \end{bmatrix}$ are both positive definite and symmetric, but their product is not symmetric. Intersections of these groups give the simplest examples of subgroups (for instance, orthogonal matrices with determinant 1, called the *special orthogonal matrices*), though there are many others.

**Problem 6.5, #33:** When $A$ and $B$ are symmetric positive definite, $AB$ might not even be symmetric. But its eigenvalues are still positive. Start from $AB\mathbf{x} = \lambda \mathbf{x}$ and take dot products with $B\mathbf{x}$. Then prove $\lambda > 0$.

**Solution** (12 points) Taking dot products, we get $(AB\mathbf{x})^T B\mathbf{x} = (B\mathbf{x})^T A(B\mathbf{x})$ on the left and $(\lambda \mathbf{x})^T B\mathbf{x} = \lambda \mathbf{x}^T B\mathbf{x}$. Since $B$ is positive definite, $\mathbf{x}^T B\mathbf{x} > 0$, and since $A$ is positive definite, $(B\mathbf{x})^T A(B\mathbf{x})$ is too ($B\mathbf{x}$ is just another vector). Thus, $\lambda$ must be positive as well.

**Problem 6.5, #34:** Write down the 5 by 5 sine matrix $S$ from Worked Example 6.5 D, containing the eigenvectors of $K$ when $n = 5$ and $h = 1/6$. Multiply $K$ times $S$ to see the five positive eigenvalues.

Their sum should equal the trace 10. Their product should be $\det K = 6$.

**Solution** (12 points) $S$ is the matrix


$$

S = \begin{bmatrix}
1/2 & \sqrt{3}/2 & 1 & \sqrt{3}/2 & 1/2 \\
\sqrt{3}/2 & \sqrt{3}/2 & 0 & -\sqrt{3}/2 & -\sqrt{3}/2 \\
1 & 0 & -1 & 0 & 1 \\
\sqrt{3}/2 & -\sqrt{3}/2 & \sqrt{3}/2 & -\sqrt{3}/2 & \sqrt{3}/2 \\
1/2 & -\sqrt{3}/2 & 1 & -\sqrt{3}/2 & 1/2
\end{bmatrix}

$$


The five eigenvalues (corresponding to the columns) are $2 - \sqrt{3}, 1, 2, 3,$ and $2 + \sqrt{3}$, which add up to 10 and multiply to 6 as desired.

**Problem 6.5, #35:** If $A$ has full column rank, and $C$ is positive-definite, show that $A^\top C A$ is positive definite.

**Solution** (12 points) Since $C$ is positive-definite, $y^\top C y > 0$ for any $y \neq 0$ in $\mathbb{R}^n$. Now, we need to show that $z^\top A^\top C A z > 0$ for any $z \neq 0$ in $\mathbb{R}^n$. We can rewrite it as $z^\top A^\top C A z = (Az)^\top C (Az)$. Since $A$ has full column rank, $N(A) = \{0\}$ and in particular, $Az \neq 0$ in $\mathbb{R}^n$. Therefore, we have $(Az)^\top C (Az) > 0$. This implies that $A^\top C A$ is positive definite.

**Problem 8.1, #3:** In the free-free case when $A^\top C A$ in equation (9) is singular, add the three equations $A^\top C A \mathbf{u} = \mathbf{f}$ to show that we need $f_1 + f_2 + f_3 = 0$. Find a solution to $A^\top C A \mathbf{u} = \mathbf{f}$ when the forces $\mathbf{f} = (-1, 0, 1)$ balance themselves. Find all solutions!

**Solution** (4 points) Dot producing our formula with $(1, 1, 1)$ gives


$$

\begin{bmatrix}
1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
c_2 & -c_2 & 0 \\
-c_2 & c_2 + c_3 & -c_3 \\
0 & -c_3 & c_3
\end{bmatrix}
\begin{bmatrix}
u_1 \\
u_2 \\
u_3
\end{bmatrix}
=
\begin{bmatrix}
1 & 1 & 1
\end{bmatrix}
\begin{bmatrix}
f_1 \\
f_2 \\
f_3
\end{bmatrix}

$$



$$

0 = f_1 + f_2 + f_3

$$


Substituting $\mathbf{f} = (-1, 0, 1)$ gives the two equations $c_2 (u_1 - u_2) = -1$, $c_3 (u_3 - u_2) = 1$ (the middle equation is redundant), with a solution $(-c_2^{-1}, 0, c_3^{-1})$. All other solutions are given by adding multiples of $(1, 1, 1)$, which spans the nullspace.

**Problem 8.1, #5:** In the fixed-free problem, the matrix $A$ is square and invertible. We can solve $A^\top \mathbf{y} = \mathbf{f}$ separately from $A \mathbf{u} = \mathbf{e}$. Do the same for the differential equation:

Solve $-\frac{dy}{dx} = f(x)$ with $y(1) = 0$. Graph $y(x)$ if $f(x) = 1$.

**Solution** (4 points) $y(x) = -\int_1^x f(x) dx$ and if $f(x) = 1$ then $y(x) = 1 - x$. You can graph this.

**Problem 8.1, #7:** For five springs and four masses with both ends fixed, what are the matrices $A$ and $C$ and $K$? With $C = I$ solve $K \mathbf{u} = \text{ones}(4)$.

**Solution** (4 points) The matrices are

$$
 A = \begin{bmatrix} 1 & 0 & 0 & 0 \\ -1 & 1 & 0 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & 0 & -1 \end{bmatrix}, C = \begin{bmatrix} c_1 & & & \\ & c_2 & & \\ & & c_3 & \\ & & & c_4 \\ & & & & c_5 \end{bmatrix}, 
$$


$$
 K = \begin{bmatrix} c_1 + c_2 & -c_2 & 0 & 0 \\ -c_2 & c_2 + c_3 & -c_3 & 0 \\ 0 & -c_3 & c_3 + c_4 & -c_4 \\ 0 & 0 & -c_4 & c_4 + c_5 \end{bmatrix} 
$$


Inverting $K$ for $c_1 = \cdots = c_5 = 1$ gives

$$
 K^{-1} = \frac{1}{5} \begin{bmatrix} 4 & 3 & 2 & 1 \\ 3 & 6 & 4 & 2 \\ 2 & 4 & 6 & 3 \\ 1 & 2 & 3 & 4 \end{bmatrix} 
$$


Multiplying by $(1, 1, 1, 1)$ gives $(2, 3, 3, 2)$.

**Problem 8.1, #10:** (MATLAB) Find the displacements $u(1), \ldots, u(100)$ of 100 masses connected by springs all with $c = 1$. Each force is $f(i) = 0.01$. Print graphs of $\mathbf{u}$ with fixed-fixed and fixed-free ends. Note that $\text{diag}(\text{ones}(n, 1), d)$ is a matrix with $n$ ones along the diagonal $d$. This print command will graph a vector $u$:

# Figure 1. Fixed-fixed

![Fixed-fixed](line.png)

## Problem 8.1, #11: (MATLAB)
Chemical engineering has a first derivative of $\frac{du}{dx}$ from fluid velocity as well as $\frac{d^2u}{dx^2}$ from diffusion. Replace $\frac{du}{dx}$ by a forward difference, then a centered difference, then a backward difference, with $\nabla x = \frac{1}{8}$. Graph your numerical solutions of


$$

-\frac{d^2u}{dx^2} + 10\frac{du}{dx} = 1 \text{ with } u(0) = u(1) = 0.

$$


## Solution (12 points)

# Figure 2. Fixed-free

![Fixed-free](line.png)

8

>> backward = (K-D)\\ones(7,1)

backward =

    0.0431
    0.0554
    0.0539
    0.0462
    0.0359
    0.0244
    0.0123

>> centered = (K+D/2-D'/2)\\ones(7,1)

centered =

    0.0125
    0.0250
    0.0374
    0.0497
    0.0613
    0.0697
    0.0644

>> plot(n,forward(n),n,backward(n),n,centered(n))

# Figure 3. Overlayed numerical solutions

![Overlayed numerical solutions](line.png)

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

