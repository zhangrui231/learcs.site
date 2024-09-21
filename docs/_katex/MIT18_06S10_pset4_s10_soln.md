# 18.06 Problem Set 4 Solution

Total: 100 points

## Section 3.5. Problem 2:
(Recommended) Find the largest possible number of independent vectors among


$$
 v_1 = \begin{bmatrix} 1 \\ -1 \\ 0 \\ 0 \end{bmatrix} \quad v_2 = \begin{bmatrix} 1 \\ 0 \\ -1 \\ 0 \end{bmatrix} \quad v_3 = \begin{bmatrix} 1 \\ 0 \\ 0 \\ -1 \end{bmatrix} \quad v_4 = \begin{bmatrix} 0 \\ 1 \\ -1 \\ 0 \end{bmatrix} \quad v_5 = \begin{bmatrix} 0 \\ 1 \\ 0 \\ -1 \end{bmatrix} \quad v_6 = \begin{bmatrix} 0 \\ 0 \\ 1 \\ -1 \end{bmatrix} 
$$


**Solution** (4 points): Since $v_4 = v_2 - v_1$, $v_5 = v_3 - v_1$, and $v_6 = v_3 - v_2$, there are at most three independent vectors among these: furthermore, applying row reduction to the matrix $[v_1 v_2 v_3]$ gives three pivots, showing that $v_1, v_2,$ and $v_3$ are independent.

## Section 3.5. Problem 20:
Find a basis for the plane $x - 2y + 3z = 0$ in $R^3$. Then find a basis for the intersection of that plane with the $xy$ plane. Then find a basis for all vectors perpendicular to the plane.

**Solution** (4 points): This plane is the nullspace of the matrix


$$
 A = \begin{bmatrix} 1 & -2 & 3 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} 
$$


The special solutions


$$
 v_1 = \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix} \quad v_2 = \begin{bmatrix} -3 \\ 0 \\ 1 \end{bmatrix} 
$$


give a basis for the nullspace, and thus for the plane. The intersection of this plane with the $xy$ plane is a line: since the first vector lies in the $xy$ plane, it must lie on the line and thus gives a basis for it. Finally, the vector


$$
 v_3 = \begin{bmatrix} 1 \\ -2 \\ 3 \end{bmatrix} 
$$


is obviously perpendicular to both vectors: since the space of vectors perpendicular to a plane in $\mathbb{R}^3$ is one-dimensional, it gives a basis.

## Section 3.5. Problem 37:
If $AS = SA$ for the shift matrix $S$, show that $A$ must have this special form:


$$
 \text{If } \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix} \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{bmatrix} \begin{bmatrix} a & b & c \\ d & e & f \\ g & h & i \end{bmatrix}, \text{ then } A = \begin{bmatrix} a & b & c \\ 0 & a & b \\ 0 & 0 & a \end{bmatrix} 
$$


"The subspace of matrices that commute with the shift $S$ has dimension __."

**Solution** (4 points): Multiplying out both sides gives

$$

\begin{bmatrix}
0 & a & b \\
0 & d & e \\
0 & g & h
\end{bmatrix}
=
\begin{bmatrix}
d & e & f \\
g & h & i \\
0 & 0 & 0
\end{bmatrix}

$$


Equating them gives $d = g = h = 0$, $e = i = a$, $f = b$, i.e. the matrix with the form above. Since there are three free variables, the subspace of these matrices has dimension 3.

**Section 3.5. Problem 41**: Write a 3 by 3 identity matrix as a combination of the other five permutation matrices. Then show that those five matrices are linearly independent. (Assume a combination gives $c_1P_1 + \cdots + c_5P_5 = 0$, and check entries to prove $c_i$ is zero.) The five permutation matrices are a basis for the subspace of 3 by 3 matrices with row and column sums all equal.

**Solution** (12 points): The other five permutation matrices are

$$

P_{21} = \begin{bmatrix}
1 &  &  \\
 & 1 &  \\
 &  & 1
\end{bmatrix}, P_{31} = \begin{bmatrix}
 & 1 &  \\
1 &  &  \\
 &  & 1
\end{bmatrix}, P_{32} = \begin{bmatrix}
1 &  &  \\
 & 1 &  \\
 &  & 1
\end{bmatrix}, P_{32}P_{21} = \begin{bmatrix}
 & 1 &  \\
1 &  &  \\
 &  & 1
\end{bmatrix}, P_{21}P_{32} = \begin{bmatrix}
1 &  &  \\
 & 1 &  \\
 &  & 1
\end{bmatrix}

$$


Since $P_{21} + P_{31} + P_{32}$ is the all 1s matrix and $P_{32}P_{21} + P_{21}P_{32}$ is the matrix with 0s on the diagonal and 1s elsewhere, $I = P_{21} + P_{31} + P_{32} - P_{32}P_{21} - P_{21}P_{32}$. For the second part, the combination above gives

$$

\begin{bmatrix}
c_3 & c_1 + c_4 & c_2 + c_5 \\
c_1 + c_5 & c_2 & c_3 + c_4 \\
c_2 + c_4 & c_3 + c_5 & c_1
\end{bmatrix} = 0

$$


Setting each element equal to 0 first gives $c_1 = c_2 = c_3 = 0$ along the diagonal, then $c_4 = c_5 = 0$ on the off-diagonal entries.

**Section 3.5. Problem 44**: (An aside in the text, followed by) *dimension of outputs + dimension of nullspace = dimension of inputs*. For an $m$ by $n$ matrix of rank $r$, what are those 3 dimensions? Outputs = column space. This question will be answered in Section 3.6, can you do it now?

**Solution** (12 points): You should think about the aside in the text, as well as problem 43: the actual question asked, here, however is quite simple. The dimension of inputs for an $m$ by $n$ matrix is $n$ (the matrix takes $n$-vectors to $m$-vectors), while the dimension of the nullspace is $n - r$ and the dimension of outputs = dimension of column space is $r$. Since $n - r + r = n$, we have the given relation.

**Section 3.6. Problem 11**: $A$ is an $m$ by $n$ matrix of rank $r$. Suppose there are right sides $\mathbf{b}$ for which $A\mathbf{x} = \mathbf{b}$ has *no solution*.

(a) What are all the inequalities (< or ≤) that must be true between $m$, $n$, and $r$?

(b) How do you know that $A^T\mathbf{y} = \mathbf{0}$ has solutions other than $\mathbf{y} = \mathbf{0}$?

**Solution** (4 points): (a) The rank of a matrix is always less than or equal to the number of rows and columns, so $r \leq m$ and $r \leq n$. Moreover, by the second statement, the column space is smaller than the space of possible output matrices, i.e. $r < m$.

(b) These solutions make up the left nullspace, which has dimension $m - r > 0$ (that is, there are nonzero vectors in it).

**Section 3.6. Problem 24**: $A^T\mathbf{y} = \mathbf{d}$ is solvable when $\mathbf{d}$ is in which of the four subspaces? The solution is unique when the _ contains only the zero vector.

\boxed{\text{Solution}} (4 points): It is solvable when $\mathbf{d}$ is in the row space, which consists of all vectors $A^T \mathbf{y}$, and is unique when the \underline{left nullspace} contains only the zero vector (as any two solutions differ by an element in the left nullspace).

\textbf{Section 3.6. Problem 28:} Find the ranks of the 8 by 8 checkerboard matrix $B$ and the chess matrix $C$:


$$
 B = \begin{bmatrix}
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 & 1 \\
1 & 0 & 1 & 0 & 1 & 0 & 1 & 0 \\
0 & 1 & 0 & 1 & 0 & 1 & 0 & 1
\end{bmatrix} \quad \text{and} \quad C = \begin{bmatrix}
r & n & b & q & k & b & n & r \\
p & p & p & p & p & p & p & p \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0 & 0 & 0 & 0 & 0 \\
p & p & p & p & p & p & p & p \\
r & n & b & q & k & b & n & r
\end{bmatrix} 
$$


The numbers $r, n, b, k, q, p$ are all different. Find bases for the row space and left nullspace of $B$ and $C$. Challenge problem: Find a basis for the nullspace of $C$.

\boxed{\text{Solution}} (4 points): In both cases, elimination kills all but the top two rows, so, if $p \neq 0$, both matrices have rank 2 as well as row space bases given by the top two rows (or course, if $p = 0$, $C$ has rank 1 with row space generated by the top row). $B$ is symmetric, so its left nullspace is the same as the nullspace, and the special solutions are:


$$
 v_1 = \begin{bmatrix} -1 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, v_2 = \begin{bmatrix} -1 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, v_3 = \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, v_4 = \begin{bmatrix} 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}, v_5 = \begin{bmatrix} 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}, v_6 = \begin{bmatrix} 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} 
$$


Finally, the nullspace of $C^T$ is given by


$$
 w_1 = \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}, w_2 = \begin{bmatrix} 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}, w_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_4 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_5 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_6 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix} 
$$


if $p \neq 0$, and


$$
 w_1 = \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}, w_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_4 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_5 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, w_6 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}, w_7 = \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix} 
$$


if $p = 0$.

**Solution** (12 points): (Challenge subpart) There are three obvious special solutions of $C$:


$$

u_1 = \begin{bmatrix} -1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix}, u_2 = \begin{bmatrix} 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}, u_3 = \begin{bmatrix} 0 \\ 0 \\ -1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}

$$


If $p = 0$, the other solutions are similarly straightforward:


$$

u_4 = \begin{bmatrix} -\frac{n}{r} \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, u_5 = \begin{bmatrix} -\frac{b}{r} \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix}, u_6 = \begin{bmatrix} -\frac{k}{r} \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, u_7 = \begin{bmatrix} -\frac{q}{r} \\ 0 \\ 0 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}

$$


Otherwise, simultaneously solving $c_1 r + c_2 n + b = 0$ and $(c_1 + c_2 + 1) p = 0$ (and similarly for $q$ and $k$ instead of $b$), we get


$$

u_4 = \begin{bmatrix} \frac{n-b}{r-n} \\ \frac{r-n}{r-n} \\ \frac{b-r}{r-n} \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix}, u_5 = \begin{bmatrix} \frac{n-q}{r-n} \\ \frac{r-n}{r-n} \\ \frac{q-r}{r-n} \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix}, u_6 = \begin{bmatrix} \frac{n-k}{r-n} \\ \frac{r-n}{r-n} \\ \frac{k-r}{r-n} \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix}

$$


**Section 3.6. Problem 30**: If $A = \mathbf{u} \mathbf{v}^T$ is a 2 by 2 matrix of rank 1, redraw Figure 3.5 to show clearly the Four Fundamental Subspaces. If $B$ produces those same four subspaces, what is the exact relation of $B$ to $A$?

**Solution** (12 points): One draws the same diagram as in the book, but now each space has dimension 1, the column space is the set of multiples of $\mathbf{u}$, the row space is the set of multiples of $\mathbf{v}^T$, the nullspace is the plane perpendicular to $\mathbf{v}$, and the left nullspace is the plane perpendicular to $\mathbf{u}$. If $B = \mathbf{u}' \mathbf{v}'^T$ produces the same four subspaces, $\mathbf{u}'$ is a multiple of $\mathbf{u}$ and $\mathbf{v}'$ is a multiple of $\mathbf{v}$, i.e. $B$ is a multiple of $A$.

**Section 3.6. Problem 31**: $\mathbf{M}$ is the space of 3 by 3 matrices. Multiply each matrix $X$ in $\mathbf{M}$ by


$$

A = \begin{bmatrix} 1 & 0 & -1 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{bmatrix}. \text{ Notice: } A \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}.

$$


(a) Which matrices $X$ lead to $AX = 0$?

(b) Which matrices have the form $AX$ for some matrix $X$?

(a) finds the “nullspace” of that operation $AX$ and (b) finds the “column space”. What are the dimensions of those two subspaces of $\mathbf{M}$? Why do the dimensions add to $(n - r) + r = 9$?

**Solution** (12 points): (a) $A$ clearly has rank 2, with nullspace having the basis $[111]^T$. $AX = 0$ precisely when the columns of $X$ are in the nullspace of $A$, i.e. when they are multiples of the all 1s vector.


$$
 X = \begin{bmatrix} a & b & c \\ a & b & c \\ a & b & c \end{bmatrix} 
$$


(b) On the other hand, the columns of any matrix of the form $AX$ are linear combinations of the columns of $A$. That is, they are vectors whose components all sum to 0, so a matrix has the form $AX$ if and only if all of its columns individually sum to 0.


$$
 AX = B \) if and only if \( B = \begin{bmatrix} a & b & c \\ d & e & f \\ -a - d & -b - e & -c - f \end{bmatrix} 
$$


The dimension of the “nullspace” is 3, while the dimension of the “column space” is 6. They add up to 9, which is the dimension of the space of “inputs” of this matrix, when treated as a linear map on matrices.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

