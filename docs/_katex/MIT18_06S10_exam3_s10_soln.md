# 18.06 Quiz 3 Solutions
## May 8, 2010
### Professor Strang

**Your PRINTED name is: _________________**  
**Your recitation number is _________________**

1. **(40 points)** Suppose $u$ is a unit vector in $R^n$, so $u^T u = 1$. This problem is about the $n$ by $n$ symmetric matrix $H = I - 2u u^T$.

(a) Show directly that $H^2 = I$. Since $H = H^T$, we now know that $H$ is not only symmetric but also _________________.

**Solution** Explicitly, we find $H^2 = (I - 2uu^T)^2 = I^2 - 4uu^T + 4uuu^T uu^T$ (2 points): since $u^T u = 1$, $H^2 = I$ (3 points). Since $H = H^T$, we also have $H^T H = 1$, implying that $H$ is an orthogonal (or unitary) matrix.

(b) One eigenvector of $H$ is $u$ itself. Find the corresponding eigenvalue.

**Solution** Since $Hu = (I - 2uu^T)u = u - 2uu^T u = u - 2u = -u$, $\lambda = -1$.

(c) If $v$ is any vector perpendicular to $u$, show that $v$ is an eigenvector of $H$ and **find the eigenvalue**. With all these eigenvectors $v$, that eigenvalue must be repeated how many times? Is $H$ diagonalizable? Why or why not?

**Solution** For any vector $v$ orthogonal to $u$ (i.e. $u^T v = 0$), we have $Hv = (I - 2uu^T)v = v - 2uu^T v = v$, so the associated $\lambda$ is 1. The orthogonal complement to the space spanned by $u$ has dimension $n-1$, so there is a basis of $(n-1)$ orthonormal eigenvectors with this eigenvalue. Adding in the eigenvector $u$, we find that $H$ is diagonalizable.

(d) Find the diagonal entries $H_{11}$ and $H_{ii}$ in terms of $u_1, \ldots, u_n$. Add up $H_{11} + \ldots + H_{nn}$ and separately add up the eigenvalues of $H$.

**Solution** Since $i$th diagonal entry of $uu^T$ is $u_i^2$, the $i$ diagonal entry of $H$ is $H_{ii} = 1 - 2u_i^2$ (3 points). Summing these together gives $\sum_{i=1}^n H_{ii} = n - 2\sum_{i=1}^n u_i^2 = n - 2$ (3 points). Adding up the eigenvalues of $H$ also gives $\sum \lambda_i = (1) - 1 + (n-1)(1) = n - 2$ (4 points).

2. (30 points) Suppose $A$ is a positive definite symmetric $n$ by $n$ matrix.

(a) How do you know that $A^{-1}$ is also positive definite? (We know $A^{-1}$ is symmetric. I just had an e-mail from the International Monetary Fund with this question.)

**Solution** Since a matrix is positive-definite if and only if all its eigenvalues are positive (5 points), and since the eigenvalues of $A^{-1}$ are simply the inverses of the eigenvalues of $A$, $A^{-1}$ is also positive definite (the inverse of a positive number is positive) (5 points).

(b) Suppose $Q$ is any **orthogonal** $n$ by $n$ matrix. How do you know that $Q A Q^T = Q A Q^{-1}$ is positive definite? Write down which test you are using.

**Solution** Using the energy text ($x^T A x > 0$ for nonzero $x$), we find that $x^T Q A Q^T x = (Q^T x)^T A (Q^T x) > 0$ for all nonzero $x$ as well (since $Q$ is invertible). Using the positive eigenvalue test, since $A$ is similar to $Q A Q^{-1}$ and similar matrices have the same eigenvalues, $Q A Q^{-1}$ also has all positive eigenvalues. (5 points for test, 5 points for application)

(c) Show that the block matrix

$$
 B = \begin{bmatrix} A & A \\ A & A \end{bmatrix} 
$$

is positive **semidefinite**. How do you know $B$ is not positive definite?

**Solution** First, since $B$ is singular, it cannot be positive definite (it has eigenvalues of 0). However, the pivots of $B$ are the pivots of $A$ in the first $n$ rows followed by 0s in the remaining rows, so by the pivot test, $B$ is still semi-definite. Similarly, the first $n$ upper-left determinants of $B$ are the same as those of $A$, while the remaining ones are 0s, giving another proof. Finally, given a nonzero vector

$$
 u = \begin{bmatrix} x \\ y \end{bmatrix} 
$$

where $x$ and $y$ are vectors in $\mathbb{R}^n$, one has $u^T B u = (x + y)^T A (x + y)$ which is nonnegative (and zero when $x + y = 0$).

3. (30 points) This question is about the matrix


$$
 A = \begin{bmatrix} 0 & -1 \\ 4 & 0 \end{bmatrix} 
$$


(a) Find its eigenvalues and eigenvectors.

Write the vector $u(0) = \begin{bmatrix} 2 \\ 0 \end{bmatrix}$ as a combination of those eigenvectors.

**Solution** Since $\det(A - \lambda I) = \lambda^2 + 4$, the eigenvalues are $2i, -2i$ (4 points). Two associated eigenvectors are $[1 \quad -2i]^T, [1 \quad 2i]^T$, though there are many other choices (4 points). $u(0)$ is just the sum of these two vectors (2 points).

(b) Solve the equation $\frac{du}{dt} = Au$ starting with the same vector $u(0)$ at time $t = 0$.

In other words: the solution $u(t)$ is what combination of the eigenvectors of $A$?

**Solution** One simply adds in factors of $e^{\lambda t}$ to each term, giving


$$
 u(t) = e^{2it} \begin{bmatrix} 1 \\ -2i \end{bmatrix} + e^{-2it} \begin{bmatrix} 1 \\ 2i \end{bmatrix} 
$$


(c) Find the 3 matrices in the Singular Value Decomposition $A = U \Sigma V^T$ in two steps.

- First, compute $V$ and $\Sigma$ using the matrix $A^T A$.

- Second, find the (orthonormal) columns of $U$.

**Solution** Note that $A^T A = V \Sigma^T U^T U \Sigma V^T = V \Sigma^2 V^T$, so the diagonal entries of $\Sigma$ are simply the positive roots of the eigenvalues of


$$
 A^T A = \begin{bmatrix} 0 & 4 \\ -1 & 0 \end{bmatrix} \begin{bmatrix} 0 & -1 \\ 4 & 0 \end{bmatrix} = \begin{bmatrix} 16 & 0 \\ 0 & 1 \end{bmatrix} 
$$


i.e. $\sigma_1 = 4, \sigma_2 = 1$. Since $A^T A$ is already diagonal, $V$ is the identity matrix. The columns of $U$ should satisfy $Au_1 = \sigma_1 v_1, Au_2 = \sigma_2 v_2$: by inspection, one obtains


$$
 u_1 = \begin{bmatrix} 0 \\ 1 \end{bmatrix}, u_2 = \begin{bmatrix} -1 \\ 0 \end{bmatrix}, U = \begin{bmatrix} 0 & -1 \\ 1 & 0 \end{bmatrix} 
$$


MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

