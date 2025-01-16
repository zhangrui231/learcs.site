# 18.06 Problem Set 10 Solution

Total: 100 points

## Section 6.6. Problem 12

These Jordan matrices have eigenvalues 0, 0, 0, 0. They have two eigenvectors (one from each block). But the block sizes don’t match and they are not similar:


$$
 J = \left( \begin{array}{cc|cc}
0 & 1 & 0 & 0 \\
0 & 0 & 0 & 0 \\
\hline
0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0
\end{array} \right) \quad \text{and} \quad K = \left( \begin{array}{cc|cc}
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 0 \\
0 & 0 & 0 & 0 \\
\hline
0 & 0 & 0 & 0
\end{array} \right) 
$$


For any matrix $M$, compare $JM$ with $MK$. If they are equal show that $M$ is not invertible. Then $M^{-1}JM = K$ is impossible; $J$ is not similar to $K$.

**Solution** (4 points) Let $M = (m_{ij})$. Then


$$
 JM = \left( \begin{array}{cccc}
m_{21} & m_{22} & m_{23} & m_{24} \\
0 & 0 & 0 & 0 \\
m_{41} & m_{42} & m_{43} & m_{44} \\
0 & 0 & 0 & 0
\end{array} \right) \quad \text{and} \quad MK = \left( \begin{array}{cccc}
0 & m_{11} & m_{12} & 0 \\
0 & m_{21} & m_{22} & 0 \\
0 & m_{31} & m_{32} & 0 \\
0 & m_{41} & m_{42} & 0
\end{array} \right). 
$$


If $JM = MK$ then


$$
 m_{21} = m_{22} = m_{24} = m_{41} = m_{42} = m_{44} = 0, 
$$


which in particular means that the second row is either a multiple of the fourth row, or the fourth row is all 0’s. In either of these cases $M$ is not invertible.

Suppose that $J$ were similar to $K$. Then there would be some invertible matrix $M$ such that $K = M^{-1}JM$, which would mean that $MK = JM$. But we just showed that in this case $M$ is never invertible! Contradiction. Thus $J$ is not similar to $K$.

## Section 6.6. Problem 14

Prove that $A^T$ is always similar to $A$ (we know that the $\lambda$’s are the same):

1. For one Jordan block $J_i$: find $M_i$ so that $M_i^{-1}J_iM_i = J_i^T$ (see example 3).

2. For any $J$ with blocks $J_i$: build $M_0$ from blocks so that $M_0^{-1}JM_0 = J^T$.

3. For any $A = MJM^{-1}$: Show that $A^T$ is similar to $J^T$ and so to $J$ and so to $A$.

**Solution** (4 points)

1. Suppose that we have one Jordan block $J_i$. Then

$$
\begin{pmatrix} & 1 & & & \\ & & 1 & & \\ & & & \ddots & \\ & & & & 1\end{pmatrix}\begin{pmatrix}\lambda & 1 & 0 & \cdots & 0 \\ & \lambda & 1 & \cdots & 0 \\ & & \lambda & \cdots & 0 \\ & & & \ddots & \\ & & & & \lambda\end{pmatrix}\begin{pmatrix} & & & 1 & \\ & & 1 & & \\ & \ddots & & & \\1 & & & & \\ & & & &\end{pmatrix}=\begin{pmatrix}\lambda & 1 & & & \\1 & \lambda & 1 & & \\ & 0 & \lambda & 1 & \\ & & \ddots & \ddots & \\ & & & 0 & \lambda\end{pmatrix}
$$

so $J$ is similar to $J^T$.

2. Suppose that each $J_i$ satisfies $J_i^T = M_i^{-1} J_i M_i$. Let $M_0$ be the block-diagonal matrix consisting of the $M_i$'s along the diagonal. Then

$$
M_0^{-1} J M_0
= \begin{pmatrix}
M_1^{-1} & & & \\
 & M_2^{-1} & & \\
 & & \ddots & \\
 & & & M_n^{-1}
\end{pmatrix}
\begin{pmatrix}
J_1 & & & \\
 & J_2 & & \\
 & & \ddots & \\
 & & & J_n
\end{pmatrix}
\begin{pmatrix}
M_1 & & & \\
 & M_2 & & \\
 & & \ddots & \\
 & & & M_n
\end{pmatrix}
$$


$$
= \begin{pmatrix}
M_1^{-1} J_1 M_1 & & & \\
 & M_2^{-1} J_2 M_2 & & \\
 & & \ddots & \\
 & & & M_n^{-1} J_n M_n
\end{pmatrix}
$$


$$
= \begin{pmatrix}
J_1^T & & & \\
 & J_2^T & & \\
 & & \ddots & \\
 & & & J_n^T
\end{pmatrix}
= J^T
$$


3.

$$
A^T = (MJM^{-1})^T = (M^{-1})^T J^T M^T = (M^T)^{-1} J^T (M^T).
$$

So $A^T$ is similar to $J^T$, which is similar to $J$, which is similar to $A$. Thus any matrix is similar to its transpose.

**Section 6.6. Problem 20.** Why are these statements all true?

(a) If $A$ is similar to $B$ then $A^2$ is similar to $B^2$.

(b) $A^2$ and $B^2$ can be similar when $A$ and $B$ are not similar.

(c) $\begin{pmatrix} 3 & 0 \\ 0 & 4 \end{pmatrix}$ is similar to $\begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix}$.

(d) $\begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$ is not similar to $\begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$.

(e) If we exchange rows 1 and 2 of $A$, and then exchange columns 1 and 2 the eigenvalues stay the same. In this case $M = ?$

---

**Solution** (4 points)

(a) If $A$ is similar to $B$ then we can write $A = M^{-1}BM$ for some $M$. Then $A^2 = M^{-1}B^2M$, so $A^2$ is similar to $B^2$.

(b) Let

$$
 A = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix} \qquad B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}. 
$$

Then $A^2 = B^2$ (so they are obviously similar) but $A$ is not similar to $B$ because nothing but the zero matrix is similar to the zero matrix.

(c)

$$
 \begin{pmatrix} 3 & 0 \\ 0 & 4 \end{pmatrix} = \begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 3 & 1 \\ 0 & 4 \end{pmatrix} \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}. 
$$


(d) These are not similar because the first matrix has a plane of eigenvectors for the eigenvalue 3, while the second only has a line.

(e) In order to exchange two rows of $A$ we multiply on the left by

$$
 M = \begin{pmatrix} 0 & 1 & & \\ 1 & 0 & & \\ & & 1 & \\ & & & 1 \end{pmatrix}. 
$$

In order to exchange two columns we multiply on the right by the same $M$. As $M = M^{-1}$ we see that the new matrix is similar to the old one, so the eigenvalues stay the same.

## Section 6.6. Problem 22

If an $n \times n$ matrix $A$ has all eigenvalues $\lambda = 0$ prove that $A^n$ is the zero matrix.

**Solution** (12 points) Suppose that we have a Jordan block of size $i$ with eigenvalue 0. Then notice that $J^2$ will have a diagonal of 1's two diagonals above the main diagonal and zeroes elsewhere. $J^3$ will have a diagonal of 1's three diagonals above the main diagonal, and zeroes elsewhere. Therefore $J^i = 0$, since there is no diagonal $i$ diagonals above the main diagonal. If $A$ has all eigenvalues $\lambda = 0$ then then $A$ is similar to some matrix with Jordan blocks $J_1, \ldots, J_k$ with each $J_i$ of size $n_i$ and $\sum_{i=1}^k n_k = n$. Each Jordan block will have eigenvalue 0, so we know that $J_i^{n_i} = 0$, and thus $J_i^n = 0$.

As $A^n$ is similar to a block-diagonal matrix with blocks $J_1^n, J_2^n, \ldots, J_k^n$ and each of these is 0 we know that $A^n = 0$.

Another way to see this is to note that if $A$ has all eigenvalues 0 this means that the characteristic polynomial of $A$ must be $x^n$, as this is the only polynomial of degree $n$ all of whose roots are 0. Thus $A^n = 0$ by the Cayley-Hamilton theorem.

## Section 6.6. Problem 23

For the shifted $QR$ method in the Worked Example 6.6 B, show that $A_2$ is similar to $A_1$. No change in eigenvalues, and the $A$'s quickly approach a diagonal matrix.

**Solution** (12 points) We are asked to show that $A_2 = R_1 Q_1 - cs^2 I$ is similar to $A_1 = Q_1 R_1 - cs^2 I$. Note that


$$
 Q_1 A_2 Q_1^{-1} = Q_1 (R_1 Q_1 - cs^2 I) Q_1^{-1} = Q_1 R_1 - Q_1 cs^2 I Q_1^{-1} = Q_1 R_1 - cs^2 I = A_1. 
$$


Thus $A_2$ is similar to $A_1$, and thus their eigenvalues are the same.

## Section 6.6. Problem 24

If $A$ is similar to $A^{-1}$, must all the eigenvalues equal 1 or -1?

**Solution** (12 points)

No. Consider:


$$
 \begin{pmatrix} 2 & 0 \\ 0 & \frac{1}{2} \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}^{-1} \begin{pmatrix} \frac{1}{2} & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}. 
$$


Thus $\begin{pmatrix} 2 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}$ is similar to $\begin{pmatrix} 2 & 0 \\ 0 & \frac{1}{2} \end{pmatrix}^{-1}$.

## Section 6.7. Problem 4.

Find the eigenvalues and unit eigenvectors of $A^T A$ and $A A^T$. Keep each $A v = \sigma u$ for the Fibonacci matrix $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$. Construct the singular value decomposition and verify that $A$ equal $s U \Sigma V^T$.

**Solution** (4 points)


$$
 A^T A = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix} \qquad A A^T = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}. 
$$


Note that these are the same. (This makes sense, as $A$ is symmetric.) The eigenvalues of this are the roots of $x^2 - 3x + 1$, which are $(3 \pm \sqrt{5})/2$. The unit eigenvectors of this will be

$$
 \begin{pmatrix} \sqrt{\frac{2}{5-\sqrt{5}}} \\ \sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} \end{pmatrix} \qquad \text{and} \qquad \begin{pmatrix} \sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} \\ -\sqrt{\frac{2}{5-\sqrt{5}}} \end{pmatrix}. 
$$


Then

$$
 U = \begin{pmatrix} \sqrt{\frac{2}{5-\sqrt{5}}} & -\sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} \\ \sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} & \sqrt{\frac{2}{5-\sqrt{5}}} \end{pmatrix} \qquad V = \begin{pmatrix} \sqrt{\frac{2}{5-\sqrt{5}}} & \sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} \\ \sqrt{\frac{3-\sqrt{5}}{5-\sqrt{5}}} & -\sqrt{\frac{2}{5-\sqrt{5}}} \end{pmatrix} 
$$


and

$$
 \Sigma = \begin{pmatrix} \frac{1+\sqrt{5}}{2} & \\ & \frac{\sqrt{5}-1}{2} \end{pmatrix}. 
$$


## Section 6.7. Problem 11.

Suppose $A$ has orthogonal columns $w_1, \ldots, w_n$ of lengths $\sigma_1, \ldots, \sigma_n$. What are $U, \Sigma$ and $V$ in the SVD?

**Solution** (4 points) We will first solve this assuming all of the $w_i$ are nonzero; at the end we will give a modification for the solution in the case that some are 0. As the columns of $A$ are orthogonal we know that $A^T A$ will be a diagonal matrix with diagonal entries $\sigma_1^2, \ldots, \sigma_n^2$. Thus $U = I$ and $\Sigma$ is the diagonal matrix with entries $\sigma_1, \ldots, \sigma_n$. Then if we define $V$ to be the matrix whose $i$-th row is the vector $w_i / \sigma_i$ we will have $A = U \Sigma V^T$, as desired.

Suppose that some of $w_i$ are zero. Take all of the $w$'s that are nonzero and complete them to an orthogonal basis $u_1, \ldots, u_n$ satisfying the conditions that if $w_i \neq 0$ then $u_i = w_i$, and if $w_i = 0$ then $|u_i| = 1$. Then let $U, \Sigma$ be as above, and $V$ be the matrix whose $i$-th row is $w_i / \sigma_i$ if $\sigma_i \neq 0$, and $u_i$ if $\sigma_i = 0$. Then $A = U \Sigma V^T$, as desired.

## Section 6.7. Problem 17.

The $1, -1$ first difference matrix $A$ has $A^T A$ the second difference matrix. The singular vectors of $A$ are sine vectors $V$ and cosine vectors $u$. Then $Av = \sigma u$ is the discrete form of $d/dx (\sin cx) = c (\cos cx)$. This is the best SVD I have seen.

$$
A = \begin{pmatrix}
1 & 0 & 0 \\
-1 & 1 & 0 \\
0 & -1 & 1 \\
0 & 0 & -1
\end{pmatrix}
\quad
A^T A = \begin{pmatrix}
2 & -1 & 0 \\
-1 & 2 & -1 \\
0 & -1 & 2
\end{pmatrix}.
$$

Then the orthogonal sine matrix is

$$
V = \frac{1}{\sqrt{2}} \begin{pmatrix}
\sin \pi/4 & \sin 2\pi/4 & \sin 3\pi/4 \\
\sin 2\pi/4 & \sin 4\pi/4 & \sin 6\pi/4 \\
\sin 3\pi/4 & \sin 6\pi/4 & \sin 9\pi/4
\end{pmatrix}.
$$

(a) Put numbers in $V$: The unit eigenvectors of $A^T A$ are singular vectors of $A$. Show that the columns of $V$ have $A^T A v = \lambda v$ with $\lambda = 2 - \sqrt{2}, 2, 2 + \sqrt{2}$.

(b) Multiply $AV$ and verify that its columns are orthogonal. They are $\sigma_1 u_1$ and $\sigma_2 u_2$ and $\sigma_3 u_3$. The first columns of the cosine matrix $U$ are $u_1, u_2, u_3$.

(c) Since $A$ is $4 \times 3$ we need a fourth orthogonal vector $u_4$. It comes from the nullspace of $A^T$. What is $u_4$?

---

**Solution** (12 points)

(a) We are asked to show that the columns of $V$ are eigenvectors of $A^T A$. The characteristic polynomial of $A^T A$ is $x^3 - 6x^2 + 10x - 4$, which can be factored as $(x - 2)(x^2 - 4x + 2)$. By the quadratic formula the roots of this are exactly the eigenvalues specified.

Note that

$$
V = \begin{pmatrix}
1/2 & 1/\sqrt{2} & 1/2 \\
1/\sqrt{2} & 0 & -1/\sqrt{2} \\
1/2 & -1/\sqrt{2} & 1/2
\end{pmatrix}.
$$

Then note that the three vectors $\begin{pmatrix} 1 \\ \sqrt{2} \\ 1 \end{pmatrix}$, $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$, $\begin{pmatrix} 1 \\ -\sqrt{2} \\ 1 \end{pmatrix}$ are scalar multiples of the columns of $V$, and it is easy to check that they are indeed eigenvectors of $A^T A$ with the right eigenvalues.

(b)

$$

AV = \frac{1}{2} \begin{pmatrix}
1 & \sqrt{2} & 1 \\
\sqrt{2} - 1 & -\sqrt{2} & -\sqrt{2} - 1 \\
1 - \sqrt{2} & -\sqrt{2} & 1 + \sqrt{2} \\
-1 & \sqrt{2} & -1
\end{pmatrix}.

$$


It is easy to check that these columns are orthogonal.

(c) Note that $A^T = \begin{pmatrix}
1 & -1 & 0 & 0 \\
0 & 1 & -1 & 0 \\
0 & 0 & 1 & -1
\end{pmatrix}$. The nullspace of this is generated by

$$
\begin{pmatrix}
1 \\
1 \\
1 \\
1
\end{pmatrix}.
$$


Section 8.5. Problem 4. The first three Legendre polynomials are $1, x, x^2 - 1/3$. Choose $c$ so that the fourth polynomial $x^3 - cx$ is orthogonal to the first three. All integrals go from $-1$ to $1$.

$\boxed{\text{Solution}}$ (4 points) We compute

$$
\int_{-1}^1 x^3 - cx \, dx = 0 \quad \int_{-1}^1 (x^3 - cx)x \, dx = \frac{2}{5} - \frac{2}{3}c \quad \int_{-1}^1 (x^3 - cx)(x^2 - \frac{1}{3}) \, dx = 0.
$$

Thus in order for $x^3 - cx$ to be orthogonal to the other three we need $c = 3/5$.

Section 8.5. Problem 5. For the square wave $f(x)$ in Example 3 show that

$$
\int_0^{2\pi} f(x) \cos x \, dx = 0 \quad \int_0^{2\pi} f(x) \sin x \, dx = 4 \quad \int_0^{2\pi} f(x) \sin 2x \, dx = 0.
$$

Which three Fourier coefficients come from those integrals?

$\boxed{\text{Solution}}$ (4 points) By definition, coefficients that come from these are $a_1, b_1, b_2$, respectively. We compute

$$
\int_0^{2\pi} f(x) \cos x \, dx = \int_0^\pi \cos x \, dx - \int_\pi^{2\pi} \cos x \, dx = 0
$$


$$
\int_0^{2\pi} f(x) \sin x \, dx = \int_0^\pi \sin x \, dx - \int_\pi^{2\pi} \sin x \, dx = 4
$$


$$
\int_0^{2\pi} f(x) \sin 2x \, dx = \int_0^\pi \sin 2x \, dx - \int_\pi^{2\pi} \sin 2x \, dx = 0.
$$


## Section 8.5. Problem 12.

The functions $1, \cos x, \sin x, \cos 2x, \sin 2x, \ldots$ are a basis for a Hilberts space. Write the derivatives of those first five functions as combinations of the same five functions. What is the $5 \times 5$ “differentiation matrix” for those functions?

**Solution** (12 points)

We know that $1' = 0$, and that

$(\cos x)' = -\sin x \quad (\sin x)' = \cos x \quad (\cos 2x)' = -2\sin 2x \quad (\sin 2x)' = 2\cos 2x.$

Thus the “differentiation matrix” is


$$
\begin{pmatrix}
0 & 0 & 0 & 0 & 0 \\
0 & 0 & -1 & 0 & 0 \\
0 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & -2 \\
0 & 0 & 0 & 2 & 0
\end{pmatrix}.
$$


## Section 8.5. Problem 13.

Find the Fourier coefficients $a_k$ and $b_k$ of the square pulse $F(x)$ centered at $x = 0$: $f(x) = 1/h$ for $|x| \leq h/2$ and $F(x) = 0$ for $h/2 < |x| \leq \pi$. As $h \to 0$, this $F(x)$ approaches a delta function. Find the limits of $a_k$ and $b_k$.

**Solution** (12 points) We compute


$$
\begin{aligned}
a_0 &= \frac{1}{\pi} \int_{-\pi}^{\pi} F(x) \, dx = \frac{1}{h\pi} \int_{-h/2}^{h/2} 1 \, dx = \frac{1}{\pi}. \\
a_k &= \frac{1}{\pi} \int_{-\pi}^{\pi} F(x) \cos kx \, dx = \frac{1}{\pi h} \int_{-h/2}^{h/2} \cos kx \, dx = \frac{1}{\pi h k} \sin kx \bigg|_{-h/2}^{h/2} = \frac{2}{\pi h k} \sin \frac{kh}{2}. \\
b_k &= \frac{1}{\pi} \int_{-\pi}^{\pi} F(x) \sin kx \, dx = \frac{1}{\pi h} \int_{-h/2}^{h/2} \sin kx \, dx = \frac{1}{\pi k} \cos kx \bigg|_{-h/2}^{h/2} = 0.
\end{aligned}
$$


Thus as $h \to 0$ we see that $a_0 \to 1/\pi$ and $b_k \to 0$. We also compute


$$

\lim_{h \to 0} a_k = \lim_{h \to 0} \frac{1}{\pi} \frac{2}{h k} \sin \frac{hk}{2} = \frac{1}{\pi} \lim_{x \to 0} \frac{\sin x}{x} = \frac{1}{\pi}

$$


where we set $x = hk/2$.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

