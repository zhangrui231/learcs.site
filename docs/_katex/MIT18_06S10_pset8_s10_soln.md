# 18.06 PSET 8 SOLUTIONS

APRIL 15, 2010

## Problem 1. (§6.3, #14)

The matrix in this question is skew-symmetric ($A^\top = -A$):


$$

\frac{d\mathbf{u}}{dt} = \begin{bmatrix}
0 & c & -b \\
-c & 0 & a \\
b & -a & 0
\end{bmatrix} \mathbf{u}
\quad \text{or} \quad
\begin{aligned}
u_1' &= cu_2 - bu_3 \\
u_2' &= au_3 - cu_1 \\
u_3' &= bu_1 - au_2
\end{aligned}

$$


(a) The derivative of $\|\mathbf{u}(t)\|^2 = u_1^2 + u_2^2 + u_3^2$ is $2u_1u_1' + 2u_2u_2' + 2u_3u_3'$. Substitute $u_1', u_2', u_3'$ to get zero. Then $\|\mathbf{u}(t)\|^2$ stays equal to $\|\mathbf{u}(0)\|^2$.

(b) When $A$ is skew-symmetric, $Q = e^{At}$ is orthogonal. Prove $Q^\top = e^{-At}$ from the series for $Q = e^{At}$. Then $Q^\top Q = I$.

### Solution. (4 points)

(a)

$$

2u_1u_1' + 2u_2u_2' + 2u_3u_3' = 2u_1(cu_2 - bu_3) + 2u_2(au_3 - cu_1) + 2u_3(bu_1 - au_2) = 0.

$$


(b) The important points are that $(A^n)^\top = (A^\top)^n = (-A)^n$, and that we can take transpose termwise in a sum:

$$

Q^\top = \left( \sum_{n=0}^\infty A^n \frac{t^n}{n!} \right)^\top = \sum_{n=0}^\infty (A^n)^\top \frac{t^n}{n!} = \sum_{n=0}^\infty (-A)^n \frac{t^n}{n!} = e^{-At}.

$$


Then,

$$

Q^\top Q = e^{-At} e^{At} = e^0 = I

$$


because $A$ and $-A$ commute (but I don’t think the problem intended for you to have to actually check this!).

## Problem 2. (§6.3, #24)

Write $A = \begin{bmatrix} 1 & 3 \\ 0 & 0 \end{bmatrix}$ as $S \Lambda S^{-1}$. Multiply $S e^{\Lambda t} S^{-1}$ to find the matrix exponential $e^{At}$. Check $e^{At}$ and the derivative of $e^{At}$ when $t = 0$.

### Solution. (4 points)


$$

\Lambda = \begin{bmatrix} 1 & 0 \\ 0 & 3 \end{bmatrix}
\quad \text{and} \quad
S = \begin{bmatrix} -\frac{1}{2} & \frac{1}{2} \\ 0 & 1 \end{bmatrix}.

$$


Then,

$$

S e^{\Lambda t} S^{-1} = \begin{bmatrix} e^t & \frac{e^{3t}}{2} - \frac{e^t}{2} \\ 0 & e^{3t} \end{bmatrix}

$$


This is the identity matrix when $t = 0$, as it should be.

The derivative matrix is

$$

\begin{bmatrix} e^t & 3/2 e^{3t} - 1/2 e^t \\ 0 & 3 e^{3t} \end{bmatrix}

$$


which is equal to $A$ when $t = 0$, as it should be.

**Problem 3.** (§6.3, #28) Centering $y'' = -y$ in Example 3 will produce $Y_{n+1} - 2Y_n + Y_{n-1} = -(\Delta t)^2 Y_n$. This can be written as a one-step difference equation for $\mathbf{U} = (Y, Z)$:

$$

\begin{aligned}
Y_{n+1} &= Y_n + \Delta t Z_n \\
Z_{n+1} &= Z_n - \Delta t Y_{n+1}
\end{aligned}

$$


$$

\begin{bmatrix}
1 & 0 \\
\Delta t & 1
\end{bmatrix}
\begin{bmatrix}
Y_{n+1} \\
Z_{n+1}
\end{bmatrix}
=
\begin{bmatrix}
1 & \Delta t \\
0 & 1
\end{bmatrix}
\begin{bmatrix}
Y_n \\
Z_n
\end{bmatrix}.

$$

Invert the matrix on the left side to write this as $\mathbf{U}_{n+1} = A \mathbf{U}_n$. Show that $\det A = 1$. Choose the large time step $\Delta t = 1$ and find the eigenvalues $\lambda_1$ and $\lambda_2 = \overline{\lambda_1}$ of $A$:

$$

A = \begin{bmatrix}
1 & 1 \\
-1 & 0
\end{bmatrix}
\quad \text{has} \quad |\lambda_1| = |\lambda_2| = 1. \text{ Show that } A^6 \text{ is exactly } I.

$$

After 6 steps to $t = 6$, $\mathbf{U}_6$ equals $\mathbf{U}_0$. The exact $y = \cos t$ returns to 1 at $t = 2\pi$.

**Solution. (12 points)** We have

$$

\begin{bmatrix}
1 & 0 \\
\Delta t & 1
\end{bmatrix}^{-1}
=
\begin{bmatrix}
1 & 0 \\
-\Delta t & 1
\end{bmatrix}
\quad \text{and so} \quad
A = \begin{bmatrix}
1 & 0 \\
-\Delta t & 1
\end{bmatrix}
\begin{bmatrix}
1 & \Delta t \\
0 & 1
\end{bmatrix}
=
\begin{bmatrix}
1 & \Delta t \\
-\Delta t & 1 - (\Delta t)^2
\end{bmatrix}

$$

Clearly $\det A = 1$: it is the product of two matrices that are triangular with ones on the diagonal, and so each have determinant 1.

For $\Delta t = 1$, the matrix becomes

$$

\begin{bmatrix}
1 & 1 \\
-1 & 0
\end{bmatrix}.

$$

The eigenvalues are the roots of the polynomial $\lambda^2 - \lambda + 1 = 0$:

$$

\lambda_1 = \frac{1 + i\sqrt{3}}{2}
\quad \text{and} \quad
\lambda_2 = \frac{1 - i\sqrt{3}}{2} = \overline{\lambda_1}.

$$


These numbers are actually pretty special: Since $\lambda^2 = \lambda - 1$, they satisfy $\lambda^3 = \lambda^2 - \lambda = -1$ and so $\lambda^6 = 1$. Since $\lambda_1 \neq \lambda_2$, there is a basis $v_1, v_2$ consisting of eigenvectors for $A$. So to check that $A^6 = I$, it is enough to check this on the basis $v_1$ and $v_2$. But, $A^6 v_1 = \lambda_1^6 v_1 = v_1$ and $A^6 v_2 = \lambda_2^6 v_2 = v_2$!

(I don’t think there was a question in the last sentence…)

**Problem 4.** (§6.3, #29) The centered choice (leapfrog method) in Problem 28 is very successful for small time steps $\Delta t$. But find the eigenvalues of $A$ for $\Delta t = \sqrt{2}$ and 2:

$$

A = \begin{bmatrix}
1 & \sqrt{2} \\
-\sqrt{2} & -1
\end{bmatrix}
\quad \text{and} \quad
A = \begin{bmatrix}
1 & 2 \\
-2 & -3
\end{bmatrix}

$$

Both matrices have $|\lambda| = 1$. Compute $A^4$ in both cases and find the eigenvectors of $A$. That value $\Delta t = 2$ is at the border of instability. Time steps $\Delta t > 2$ will lead to $|\lambda| > 1$, and the powers in $\mathbf{U}_n = A^n \mathbf{U}_0$ will explode.

Note You might say that nobody would compute with $\Delta t > 2$. But if an atom vibrates with $y'' = -1000000y$, then $\Delta t > .0002$ will give instability. Leapfrog has a very strict stability limit. $Y_{n+1} = Y_n + 3Z_n$ and $Z_{n+1} = Z_n - 3Y_{n+1}$ will explode because $\Delta t = 3$ is too large.

**Solution. (12 points)** For $\Delta t = \sqrt{2}$, the eigenvalues are the roots of $\lambda^2 + 1 = 0$, that is $\boxed{\pm i}$. For $\Delta t = 2$, the eigenvalues are the roots of $\lambda^2 + 2\lambda + 1 = 0$, that is $\boxed{-1}$ (with algebraic multiplicity two).

In the first case, $A^4 = I$ (for the same reason as in the previous problem, or just multiply it out). The eigenvectors of $A$ (for $i, -i$ respectively) are (multiples of)

$$

v_1 = \begin{bmatrix}
1 + i \\
-\sqrt{2}i
\end{bmatrix}
\quad \text{and} \quad
v_2 = \begin{bmatrix}
1 - i \\
\sqrt{2}i
\end{bmatrix}.

$$


In the second case, we don’t get distinct eigenvectors and have to multiply it out:

$$

A^4 = \begin{bmatrix}
-7 & -8 \\
8 & 9
\end{bmatrix}.

$$

The eigenvectors of $A$ for $\lambda = -1$ are (multiples of)

$$

\begin{bmatrix}
1 \\
-1
\end{bmatrix}

$$


(Note that the algebraic multiplicity of $\lambda = 0$ is *two*, while the geometric multiplicity is *one*: That is, there is a one-dimensional space of eigenvectors.)

---

**Problem 5.** (§6.3, #30) Another good idea for $y'' = -y$ is the trapezoidal method (half forward/half back): This may be the best way to keep $(Y_n, Z_n)$ exactly on a circle.


$$

\text{Trapezoidal} \quad
\begin{bmatrix}
1 & -\Delta t/2 \\
\Delta t/2 & 1
\end{bmatrix}
\begin{bmatrix}
Y_{n+1} \\
Z_{n+1}
\end{bmatrix}
=
\begin{bmatrix}
1 & \Delta t/2 \\
-\Delta t/2 & 1
\end{bmatrix}
\begin{bmatrix}
Y_n \\
Z_n
\end{bmatrix}

$$


(a) Invert the left matrix to write this equation as $\mathbf{U}_{n+1} = A\mathbf{U}_n$. Show that $A$ is an orthogonal matrix: $A^\top A = I$. These points $\mathbf{U}_n$ never leave the circle. $A = (I - B)^{-1}(I + B)$ is always an orthogonal matrix if $B^\top = -B$.

(b) (Optional MATLAB) Take 32 steps from $\mathbf{U}_0 = (1, 0)$ to $\mathbf{U}_{32}$ with $\Delta t = 2\pi/32$. Is $\mathbf{U}_{32} = \mathbf{U}_0$? I think there is a small error.

---

*Solution.* (12 points)

(a) I get


$$

\begin{bmatrix}
1 & -\Delta t/2 \\
\Delta t/2 & 1
\end{bmatrix}^{-1}
=
\begin{bmatrix}
\frac{4}{(\Delta t)^2 + 4} & \frac{2\Delta t}{(\Delta t)^2 + 4} \\
-\frac{2\Delta t}{(\Delta t)^2 + 4} & \frac{4}{(\Delta t)^2 + 4}
\end{bmatrix}
\quad \text{and} \quad
A =
\begin{bmatrix}
\frac{4 - (\Delta t)^2}{(\Delta t)^2 + 4} & \frac{4\Delta t}{(\Delta t)^2 + 4} \\
-\frac{4\Delta t}{(\Delta t)^2 + 4} & \frac{4 - (\Delta t)^2}{(\Delta t)^2 + 4}
\end{bmatrix}

$$


It’s an annoying computation to check directly that $A^\top A = I$, but it works.

(b) It’s pretty close (approx. $(0.9992, 0.0401)$)...

---

**Problem 6.** (§6.4, #7)

(a) Find a symmetric matrix $\begin{bmatrix} 1 & b \\ b & 1 \end{bmatrix}$ that has a negative eigenvalue.

(b) How do you know it must have a negative pivot?

(c) How do you know it can’t have two negative eigenvalues?

---

*Solution.* (4 points)

(a) The eigenvalues of that matrix are $1 \pm b$. So take any $b > 1$ (or $b < -1$). In this case, the determinant is $1 - b^2 < 0$.

(b) We saw in the book that the signs of the pivots coincide with the signs of the eigenvalues. (Alternatively, the product of the pivots is the determinant, which is negative in this case. So, precisely one of the two pivots must be negative.)

(c) The product of the eigenvalues equals the determinant, which is negative in this case. Two negative numbers cannot have a negative product!

---

**Problem 7.** (§6.4, #10) Here is a quick “proof” that the eigenvalues of all real matrices are real:


$$

\text{False proof} \quad A\mathbf{x} = \lambda\mathbf{x} \text{ gives } \mathbf{x}^\top A\mathbf{x} = \lambda\mathbf{x}^\top\mathbf{x} \text{ so } \lambda = \frac{\mathbf{x}^\top A\mathbf{x}}{\mathbf{x}^\top\mathbf{x}} \text{ is real.}

$$


Find the flaw in this reasoning—a hidden assumption that is not justified. You could test those steps on the 90-degree rotation matrix $\begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix}$ with $\lambda = i$ and $\mathbf{x} = (i, 1)$.

---

*Solution.* (4 points) The vector $\mathbf{x}$ doesn’t have real components. So, $\mathbf{x}^\top\mathbf{x}$ can be zero and neither numerator nor denominator is obviously real...

---

**Problem 8.** (§6.4, #23) Which of these classes of matrices do $A$ and $B$ belong to: Invertible, orthogonal, projection, permutation, diagonalizable, Markov?


$$

A = \begin{bmatrix}
0 & 0 & 1 \\
0 & 1 & 0 \\
1 & 0 & 0
\end{bmatrix}
\quad
B = \frac{1}{3} \begin{bmatrix}
1 & 1 & 1 \\
1 & 1 & 1 \\
1 & 1 & 1
\end{bmatrix}.

$$


Which of these factorizations are possible for $A$ and $B$: $LU$, $QR$, $S\Lambda S^{-1}$, $Q\Lambda Q^\top$?

**Solution. (4 points)** One at a time:

(a) Matrix $A$ is invertible, orthogonal, a permutation matrix, diagonalizable, and Markov! (So everything but a projection…)

Let’s see why: $A$ satisfies $A^2 = I$ and $A = A^\top$, and so also $AA^\top = I$. This means it is invertible, symmetric, and orthogonal. Since it is symmetric, it is diagonalizable (with real eigenvalues!). It is a permutation matrix by just looking at it. It is Markov since the columns add to 1 (just by looking at it), or alternatively because every permutation matrix is. It is not a projection since $A^2 = I \neq A$.

All of the factorizations are possible for it: $LU$ and $QR$ are always possible, $SAS^{-1}$ is possible since it is diagonalizable, and $Q \Lambda Q^T$ is possible since it is symmetric.

(b) Matrix $B$ is a projection, diagonalizable, and Markov. It is not invertible, not orthogonal, and not a permutation.

Let’s see why: $B$ is a projection since $B^2 = B$, it is symmetric and thus diagonalizable, and it’s Markov since the columns add to 1. It is not invertible since the columns are visibly linearly dependent, it is not orthogonal since the columns are far from orthonormal, and it’s clearly not a permutation.

All the factorizations are possible for it: $LU$ and $QR$ are always possible, $SAS^{-1}$ is possible since it is diagonalizable, and $Q \Lambda Q^T$ is possible since it is symmetric.

$\square$

---

**Problem 9. (§6.4, #28)** For complex matrices, the symmetry $A^\top = A$ that produces real eigenvalues changes to $\overline{A}^\top = A$. From $\det(A - \lambda I) = 0$, find the eigenvalues of the 2 by 2 “Hermitian” matrix

$$
 A = \begin{bmatrix} 4 & 2 + i \\ 2 - i & 0 \end{bmatrix} = \overline{A}^\top 
$$


To see why eigenvalues are real when $\overline{A}^\top = A$, adjust equation (1) of the text to $\overline{A} \overline{\mathbf{x}} = \overline{\lambda} \overline{\mathbf{x}}$.

**Transpose to $\overline{\mathbf{x}}^\top \overline{A}^\top = \overline{\mathbf{x}}^\top \overline{\lambda}$. With $\overline{A}^\top = A$, reach equation (2): $\lambda = \overline{\lambda}$.**

---

**Solution. (12 points)** We solve $\lambda^2 - 4\lambda - 5 = 0$ to find $\lambda = -1$ or $\lambda = 5$.

Now let’s do the proof:

$$
 \lambda \overline{\mathbf{x}}^T \mathbf{x} = \left( \overline{\mathbf{x}}^T A \mathbf{x} \right)^T = \mathbf{x}^T A^T \overline{\mathbf{x}} = \mathbf{x}^T \overline{A} \overline{\mathbf{x}} = \overline{\lambda} \mathbf{x}^T \overline{\mathbf{x}}. 
$$


But now, $\mathbf{x}^T \overline{\mathbf{x}}$ is the complex conjugate of $\overline{\mathbf{x}}^T \mathbf{x}$. Since $\overline{\mathbf{x}}^T \mathbf{x} = \sum_i |x_i|^2$ is a non-negative real number, it is its own complex conjugate (and non-zero). Dividing the previous displayed equation by this non-zero number, we get $\lambda = \overline{\lambda}$.

$\square$

---

**Problem 10. (§6.4, #30)** If $\lambda_{max}$ is the largest eigenvalue of a symmetric matrix $A$, no diagonal entry can be larger than $\lambda_{max}$. What is the first entry $a_{11}$ of $A = Q \Lambda Q^T$? Show why $a_{11} \leq \lambda_{max}$.

---

**Solution. (12 points)** Set $\mathbf{e}_1 = (1, 0, 0, \ldots)^T$ and $\mathbf{v} = Q^T \mathbf{e}_1 = (v_1, \ldots, v_n)$. Then,

$$
 a_{11} = \mathbf{e}_1^T A \mathbf{e}_1 = \mathbf{e}_1^T Q \Lambda Q^T \mathbf{e}_1 = (Q^T \mathbf{e}_1)^T \Lambda (Q^T \mathbf{e}_1) = \mathbf{v}^T \Lambda \mathbf{v} = \sum_{i=1}^n \lambda_i v_i^2. 
$$


Since $Q^T$ is orthogonal,

$$
 \| \mathbf{v} \| = \| Q^T \mathbf{e}_1 \| = \| \mathbf{e}_1 \| = 1 
$$


and so

$$
 a_{11} \leq \lambda_{max} \sum_{i=1}^n v_i^2 = \lambda_{max} \| \mathbf{v} \|^2 = \lambda_{max}. 
$$


$\square$

---

**Problem 11. (§8.3, #9)** Prove that the square of a Markov matrix is also a Markov matrix.

**Solution. (4 points)** A matrix $A$ is matrix precisely if the sum of the components of $A\mathbf{x}$ is equal to the sum of the components of $\mathbf{x}$, i.e. $\sum x_i = \sum (A\mathbf{x})_i$. (In other words, if the “transition probabilities” given by $A$ keep the total probability the same.) But if $A$ doesn’t change the sum of the components, then certainly $A^2$ doesn’t either.

---

**Problem 12.** (§8.3, #12) A Markov differential equation is not $d\mathbf{u}/dt = A\mathbf{u}$ but $d\mathbf{u}/dt = (A - I)\mathbf{u}$. The diagonal is negative, the rest of $A - I$ is positive. The columns add to zero.

Find the eigenvalues of $B = A - I = \begin{bmatrix} -.2 & .3 \\ .2 & -.3 \end{bmatrix}$. Why does $A - I$ have $\lambda = 0$?

When $e^{\lambda_1 t}$ and $e^{\lambda_2 t}$ multiply $\mathbf{x}_1$ and $\mathbf{x}_2$, what is the steady state as $t \to \infty$?

---

**Solution. (4 points)** The eigenvalues are the roots of $\lambda^2 + 1/2\lambda$, that is $\boxed{0, -1/2}$. This has $\lambda = 0$ as an eigenvalue since $A$ has $\lambda = 1$ as an eigenvalue (since it is Markov).

For $\lambda_1 = 0$, $e^{\lambda_1 t} \mathbf{x}_1 = \mathbf{x}_1$ is already the steady state.

For $\lambda_2 = -1/2$, $e^{\lambda_2 t} \mathbf{x}_2 = e^{-1/2t} \mathbf{x}_2$ goes to the steady state $(0, 0)$ as $t \to \infty$.

---

**Problem 13.** (§8.3, #16) (Markov again) This matrix has zero determinant. What are its eigenvalues?


$$
 A = \begin{bmatrix} .4 & .2 & .3 \\ .2 & .4 & .3 \\ .4 & .4 & .4 \end{bmatrix} 
$$


Find the limits of $A^k \mathbf{u}_0$ starting from $\mathbf{u}_0 = (1, 0, 0)$ and then $\mathbf{u}_0 = (100, 0, 0)$.

---

**Solution. (12 points)** The eigenvalues are the roots of $\lambda^3 - 6/5\lambda^2 + 1/5\lambda = 0$, which are $\boxed{0, 1/5, 1}$.

We can find corresponding eigenvectors:
- For $\lambda = 0$: $(1, 1, -2)$.
- For $\lambda = 1/5$: $(1, -1, 0)$.
- For $\lambda = 1$: $(3, 3, 4)$ (for $\lambda = 1$).

(And in fact, we only care about the last one since the others have $|\lambda| < 1$)

So, $\lim_{k \to \infty} A^k$ is a (non-orthogonal) projection onto the line spanned by $(3, 3, 4)$. Since $A$ is Markov, $\lim_{k \to \infty} A^k$ is as well and its columns are vectors parallel to $(3, 3, 4)$ whose components sum to 1. This tells us right away what this limit must be:


$$
 \lim_{k \to \infty} A^k = \begin{bmatrix} .3 & .3 & .3 \\ .4 & .4 & .4 \\ .4 & .4 & .4 \end{bmatrix} 
$$


The limits we wanted are


$$
 \lim A^k \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} .3 \\ .3 \\ .4 \end{bmatrix} \quad \text{and} \quad \lim A^k \begin{bmatrix} 100 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 30 \\ 30 \\ 40 \end{bmatrix} 
$$


Note that we knew ahead of time that the second answer would just be 100 times the first by linearity. I have no idea why the book would ask such a silly thing.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

