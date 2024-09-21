# 18.06 Quiz 2
## April 7, 2010
### Professor Strang

**Your PRINTED name is:** ________________________________ 1.

**Your recitation number or instructor is** ________________________________ 2.

3.

---

1. (33 points)

(a) Find the matrix $P$ that projects every vector $b$ in $R^3$ onto the line in the direction of $a = (2, 1, 3)$.

**Solution** The general formula for the orthogonal projection onto the column space of a matrix $\mathbf{A}$ is


$$
 P = \mathbf{A} (\mathbf{A}^T \mathbf{A})^{-1} \mathbf{A}^T. 
$$


Here,


$$
 \mathbf{A} = \begin{bmatrix} 2 \\ 1 \\ 3 \end{bmatrix} \quad \text{so that} \quad \boxed{P = \frac{1}{14} \begin{bmatrix} 4 & 2 & 6 \\ 2 & 1 & 3 \\ 6 & 3 & 9 \end{bmatrix}} 
$$


**Remarks:**
- Since we’re projecting onto a one-dimensional space, $\mathbf{A}^T \mathbf{A}$ is just a number and we can write things like $P = (\mathbf{A} \mathbf{A}^T) / (\mathbf{A}^T \mathbf{A})$. This won’t work in general.
- You don’t have to know the formula to do this. The $i$-th column of $\mathbf{P}$ is, pretty much by definition, the projection of $e_i$ ($e_1 = (1, 0, 0)$, $e_2 = (0, 1, 0)$, $e_3 = (0, 0, 1)$) onto the line in the direction of $a$. And this is something you should know how to do without a formula.

**RUBRIC:** There was some leniency for computational errors, but otherwise there weren’t many opportunities for partial credit.

(b) What are the column space and nullspace of $P$? Describe them geometrically and also give a basis for each space.

**Solution** The column space is the **line in $R^3$ in the direction of $a = (2, 1, 3)$**. One basis for it is


$$

\begin{bmatrix}
2 \\
1 \\
3
\end{bmatrix}

$$


and there’s not really much choice in giving this basis (you can rescale by a non-zero constant).

The nullspace is the **plane in $R^3$ that is perpendicular to $a = (2, 1, 3)$** (i.e., $2x + y + z = 0$). One basis for it is


$$

\begin{bmatrix}
3 \\
0 \\
-2
\end{bmatrix}, \quad
\begin{bmatrix}
-1 \\
2 \\
0
\end{bmatrix}

$$


though there are a lot of different looking choices for it (any two vectors that are perpendicular to $a$ and not in the same line will work).

RUBRIC: 6 points for giving a correct basis, and 4 points for giving the complete geometric description. Note that it is not correct to say e.g., $N(\mathbf{P}) = R^2$. It is correct to say that $N(\mathbf{P})$ is a (2-dimensional) plane in $R^3$, but this is not a complete geometric description unless you say (geometrically) **which** plane it is: the one perpendicular to $a$ / to the line through $a$.

(c) What are *all* the eigenvectors of $P$ and their corresponding eigenvalues? (You can use the geometry of projections, not a messy calculation.) The diagonal entries of $P$ add up to _______.

**Solution** The diagonal entries of $P$ add up to **1 = the sum of the eigenvalues**

Since $\mathbf{P}$ is a projection, it's only possible eigenvalues are $\lambda = 0$ (with multiplicity equal to the dimension of the nullspace, here 2) and $\lambda = 1$ (with multiplicity equal to the dimension of the column space, here 1). So, a complete list of eigenvectors and eigenvalues is:

- $\lambda = 0$ with multiplicity 2. The eigenvectors for $\lambda = 0$ are precisely the vectors in the null space. That is, all linear combinations of $\begin{bmatrix} 3 & 0 & -2 \end{bmatrix}^T$ and $\begin{bmatrix} -1 & 2 & 0 \end{bmatrix}^T$.
- $\lambda = 1$ with multiplicity 1. The eigenvectors for $\lambda = 1$ are precisely the vectors in the column space. That is, all multiples of $\begin{bmatrix} 2 & 1 & 3 \end{bmatrix}^T$.

RUBRIC: 2 points for the sum of eigenvalues, 4 points for a full list (with multiplicities) of eigenvalues, and 4 points for a complete description of all eigenvectors. In light of the emphasized “*all*,” you’d lose 1 point if you gave two eigenvectors for $\lambda = 0$ and didn’t say that all (at least non-zero) linear combinations were also eigenvectors for $\lambda = 0$.

**2. (34 points)**

(a) $p = A\hat{x}$ is the vector in $C(A)$ nearest to a given vector $b$. If $A$ has independent columns, what equation determines $\hat{x}$ ? What are all the vectors perpendicular to the error $e = b - A\hat{x}$? What goes wrong if the columns of $A$ are dependent?

**Solution** $\hat{x}$ is determined by the equation $\hat{x} = (A^T A)^{-1} A^T b$ (since $A$ has independent columns, $A^T A$ is invertible whether or not $A$ is square). The vectors perpendicular to an arbitrary error vector are the elements of the column space of $A$. If the columns of $A$ are dependent, $A^T A$ is no longer invertible, and there is no unique nearest vector (i.e. there are multiple solutions).

RUBRIC: 4 points for the determining equation (1 point off for actually inverting $A^T A$ or saying that it was invertible), 3 points for identifying the column space, and three points for identifying the multiple solutions (1 point off if you just say that $A^T A$ is not invertible). Note that you cannot write $A^{-1} B$ as $\frac{B}{A}$: this only works for numbers because multiplication and division are commutative, which is not true for matrices.

(b) Suppose $A = QR$ where $Q$ has orthonormal columns and $R$ is upper triangular invertible. Find $\hat{x}$ and $p$ in terms of $Q$ and $R$ and $b$ (not $A$).

**Solution** Since $Q^T Q = I$ and $R$ is invertible, we obtain

$$

\hat{x} = (A^T A)^{-1} A^T b = ((QR)^T (QR))^{-1} (QR)^T b

$$


$$

= (R^T Q^T Q R)^{-1} R^T Q^T b = R^{-1} (R^T)^{-1} R^T Q^T b = R^{-1} Q^T b

$$


$$

p = (QR) \hat{x} = QQ^T b

$$

Note that $QQ^T$ is not the identity matrix in general.

RUBRIC: 6 points for finding $\hat{x}$, 4 points for $p$. One point off from each if the equations are not simplified, more points off for bad form, having variables other than $Q, R$ and $b$, etc.

(c) If $q_1$ and $q_2$ are any orthonormal vectors in $R^5$, give a formula for the projection $p$ of any vector $b$ onto the plane spanned by $q_1$ and $q_2$ (write $p$ as a combination of $q_1$ and $q_2$).

**Solution** $p = (q_1^T b) q_1 + (q_2^T b) q_2$.

RUBRIC: little partial credit. If you identified the difference between $b$ and $p$ instead, you may have gotten some points.

**3. (33 points)** This problem is about the $n$ by $n$ matrix $A_n$ that has zeros on its main diagonal and all other entries equal to $-1$. In MATLAB $A_n = \text{eye}(n) - \text{ones}(n)$.

(a) Find the determinant of $A_n$. Here is a suggested approach:

Start by adding all rows (except the last) to the last row, and then factoring out a constant. (You could check $n = 3$ to have a start on part b.)

**Solution** Following the hint, add all of the rows to the last row (which does not change the determinant). Thus the matrix becomes


$$

\begin{bmatrix}
0 & -1 & -1 & \cdots & -1 \\
-1 & 0 & -1 & \cdots & -1 \\
-1 & -1 & 0 & \cdots & -1 \\
\vdots & \vdots & \vdots & & \vdots \\
-(n-1) & -(n-1) & -(n-1) & \cdots & -(n-1)
\end{bmatrix}.

$$


Next, pull out the factor of $-(n-1)$ from the last row. As the determinant is linear in each row separately, we get


$$

\begin{vmatrix}
0 & -1 & -1 & \cdots & -1 \\
-1 & 0 & -1 & \cdots & -1 \\
-1 & -1 & 0 & \cdots & -1 \\
\vdots & \vdots & \vdots & & \vdots \\
-(n-1) & -(n-1) & -(n-1) & \cdots & -(n-1)
\end{vmatrix}
= (1-n)
\begin{vmatrix}
0 & -1 & -1 & \cdots & -1 \\
-1 & 0 & -1 & \cdots & -1 \\
-1 & -1 & 0 & \cdots & -1 \\
\vdots & \vdots & \vdots & & \vdots \\
1 & 1 & 1 & \cdots & 1
\end{vmatrix}.

$$


Next, add the last row back to each of the other rows (which again keeps the determinant the same). So now we want to find


$$

(1-n)
\begin{vmatrix}
1 & 0 & 0 & \cdots & 0 \\
0 & 1 & 0 & \cdots & 0 \\
0 & 0 & 1 & \cdots & 0 \\
\vdots & \vdots & \vdots & & \vdots \\
1 & 1 & 1 & \cdots & 1
\end{vmatrix}.

$$


This matrix is lower triangular. So its determinant is the product of the entries on its diagonal. Thus the above quantity is $(1-n)$.

Alternately, one can find the determinant of the matrix by finding all its eigenvalues. As $A_n = I - \text{ones}(n)$, we know that $N(A_n - I) = N(-\text{ones}(n))$. The latter nullspace has dimension $n - 1$. Thus 1 is an eigenvalue of multiplicity $n - 1$, and the corresponding eigenvectors are all the nonzero vectors whose entries add up to 0.

In addition, all of the rows of $A_n$ add up to $1 - n$. So $1 - n$ is an eigenvalue with eigenvector $(1, 1, \ldots, 1)$. Thus we have found all of the eigenvectors and eigenvalues. The determinant is the product of the eigenvalues, so it is $1^{n-1} \cdot (1 - n)$ or $1 - n$.

RUBRIC: 2 points for following the hint, 2 points for pulling out the factor of $(1 - n)$ correctly, 2 points for adding the last row to the other rows, 2 points for the correct answer.

(b) For any invertible matrix $A$, the $(1, 1)$ entry of $A^{-1}$ is the ratio of _______________.

So the $(1, 1)$ entry of $A_4^{-1}$ is _______________.

**Solution** Cramer's rule gives $A^{-1} = \frac{1}{|A|} C^T$ where $C$ is the cofactor matrix, whose $(i, j)$ entry is $(-1)^{i+j} |M_{ij}|$ where $M_{ij}$ is the submatrix obtained by deleting row $i$ and column $j$ of the (arbitrary) invertible matrix $A$. Thus the entry with $i = j = 1$ is $|M_{11}| / |A|$.

In the case where $A = A_n$, the submatrix $M_{11}$ is $A_{n-1}$; so the desired formula is $|A_{n-1}| / |A_n|$. Now, $|A_n| = 1 - n$ by part (a). So $|A_4| = -3$ and $|A_3| = -2$. Thus the $(1, 1)$ entry of $A_4^{-1}$ is $2/3$.

RUBRIC: 5 points for the correct ratio, 5 points for the correct application to the current problem. If the wrong ratio was given, then no credit was given for applying it.

(c) Find two orthogonal eigenvectors with $A_3 x = x$. (So $\lambda = 1$ is a double eigenvalue.)

**Solution** In solution 2 of part (a) above, we saw that the eigenvectors are all the nonzero vectors whose entries add up to 0. Two obvious such vectors are $(1, -1, 0)$ and $(0, 1, -1)$, but there are many more linearly independent pairs.

However, $(1, -1, 0)$ and $(0, 1, -1)$ are not orthogonal! So we must find another pair. We can use the Gram-Schmidt process to get orthogonal vectors, or we can just try to guess two orthogonal vectors whose entries add up to 1. For example, $(1, -1, 0)$ and $(1, 1, -2)$ work. (Note that the vectors are not required to have unit length.)

RUBRIC: up to 5 points for a correct method, 2 points for finding linearly independent vectors, 3 points for orthogonality.

(d) What is the third eigenvalue of $A_3$ and a corresponding eigenvector?

**Solution** In solution 2 of part (a) above, we saw that the third eigenvalue is $-2$ and a corresponding eigenvector is $(1, 1, 1)$.

Another way to proceed is to notice that the trace of $A_3$ is 0. However, the trace is the sum of the eigenvalues, and two of them are 1. So the third must be $-2$. Alternatively, in part (a), we saw that $|A_3| = -2$. However, the determinant is the product of the eigenvalues, and two of them are 1. So the third must be $-2$.

A third way to proceed is to find the characteristic polynomial of $A_3$, which is $\lambda^3 - 3\lambda + 2$. Since 1 is a double root, we can find the third root by dividing twice by $\lambda - 1$.

RUBRIC: 5 points for the eigenvalue, 5 points for a corresponding eigenvector.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

