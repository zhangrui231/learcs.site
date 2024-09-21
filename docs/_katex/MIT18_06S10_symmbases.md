# A Basis for 3 by 3 Symmetric Matrices

The real 3 by 3 matrices form a vector space $M$. The symmetric matrices in $M$ form a subspace $S$. If you add two symmetric matrices, or multiply by real numbers, the result is still a symmetric matrix. **Problem: Find a basis for $S$.**

When I asked this question on an exam, I realized that a key point needs to be emphasized: **The basis “vectors” for $S$ must lie in the subspace.** They are 3 by 3 symmetric matrices! Then there are two requirements:

1. The basis vectors must be linearly independent.
2. Their combinations must produce every vector (matrix) in $S$.

Here is one possible basis (all symmetric) for this example:


$$

S_1 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad
S_2 = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad
S_3 = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}

$$



$$

S_4 = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad
S_5 = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 0 & 0 \\ 1 & 0 & 0 \end{bmatrix} \quad
S_6 = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 1 & 0 \end{bmatrix}

$$


Since this basis contains 6 vectors, the **dimension of $S$ is 6**.

---

**Question:** Find a basis for the subspace $AS$ of 3 by 3 antisymmetric matrices (with $A^T = -A$). What is its dimension?

---

Bases for $S$ and $AS$ together give a basis for the whole space $M$ (all 3 by 3 matrices). Write the upper triangular all-ones matrix $U$ as a symmetric matrix plus an antisymmetric matrix.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

