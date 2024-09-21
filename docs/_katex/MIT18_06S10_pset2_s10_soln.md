# 18.06 Problem Set 2 Solution

Total: 100 points

## Section 2.5. Problem 24:
Use Gauss-Jordan elimination on $[U \ I]$ to find the upper triangular $U^{-1}$:


$$
UU^{-1} = I \quad \begin{bmatrix} 1 & a & b \\ 0 & 1 & c \\ 0 & 0 & 1 \end{bmatrix} \begin{bmatrix} x_1 & x_2 & x_3 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix}.
$$


**Solution** (4 points): Row reduce $[U \ I]$ to get $[I \ U^{-1}]$ as follows (here $R_i$ stands for the $i$th row):


$$
\begin{bmatrix} 1 & a & b & 1 & 0 & 0 \\ 0 & 1 & c & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{bmatrix} \xrightarrow{(R_1 = R_1 - aR_2)} \begin{bmatrix} 1 & 0 & b - ac & 1 & -a & 0 \\ 0 & 1 & c & 0 & 1 & -c \\ 0 & 0 & 1 & 0 & 0 & 1 \end{bmatrix}
$$



$$
\xrightarrow{(R_1 = R_1 - (b - ac)R_3)} \begin{bmatrix} 1 & 0 & 0 & 1 & -a & ac - b \\ 0 & 1 & 0 & 0 & 1 & -c \\ 0 & 0 & 1 & 0 & 0 & 1 \end{bmatrix}.
$$


## Section 2.5. Problem 40:
(Recommended) $A$ is a 4 by 4 matrix with 1’s on the diagonal and $-a, -b, -c$ on the diagonal above. Find $A^{-1}$ for this bidiagonal matrix.

**Solution** (12 points): Row reduce $[A \ I]$ to get $[I \ A^{-1}]$ as follows (here $R_i$ stands for the $i$th row):


$$
\begin{bmatrix} 1 & -a & 0 & 0 & 1 & 0 & 0 & 0 \\ 0 & 1 & -b & 0 & 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & -c & 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \end{bmatrix}
$$



$$
\xrightarrow{\substack{(R_1 = R_1 + aR_2) \\ (R_2 = R_2 + bR_3) \\ (R_3 = R_3 + cR_4)}} \begin{bmatrix} 1 & 0 & -ab & 0 & 1 & a & 0 & 0 \\ 0 & 1 & 0 & -bc & 0 & 1 & b & 0 \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \end{bmatrix}
$$



$$
\xrightarrow{\substack{(R_1 = R_1 + abR_3) \\ (R_2 = R_2 + bcR_4)}} \begin{bmatrix} 1 & 0 & 0 & 0 & 1 & a & ab & abc \\ 0 & 1 & 0 & 0 & 0 & 1 & b & bc \\ 0 & 0 & 1 & 0 & 0 & 0 & 1 & c \\ 0 & 0 & 0 & 1 & 0 & 0 & 0 & 1 \end{bmatrix}.
$$


Alternatively, write $A = I - N$. Then $N$ has $a, b, c$ above the main diagonal, and all other entries equal to 0. Hence $A^{-1} = (I - N)^{-1} = I + N + N^2 + N^3$ as $N^4 = 0$.

## Section 2.6. Problem 13:
(Recommended) Compute $L$ and $U$ for the symmetric matrix


$$
A = \begin{bmatrix} a & a & a & a \\ a & b & b & b \\ a & b & c & c \\ a & b & c & d \end{bmatrix}.
$$


Find four conditions on $a, b, c, d$ to get $A = LU$ with four pivots.

\boxed{\text{Solution}} (4 points): Elimination subtracts row 1 from rows 2-4, then row 2 from rows 3-4, and finally row 3 from row 4; the result is U. All the multipliers $\ell_{ij}$ are equal to 1; so $L$ is the lower triangular matrix with 1's on the diagonal and below it.


$$

A \longrightarrow \begin{bmatrix}
a & a & a & a \\
0 & b-a & b-a & b-a \\
0 & b-a & c-a & c-a \\
0 & b-a & c-a & d-a
\end{bmatrix} \longrightarrow \begin{bmatrix}
a & a & a & a \\
0 & b-a & b-a & b-a \\
0 & 0 & c-b & c-b \\
0 & 0 & c-b & d-b
\end{bmatrix}

$$



$$

\longrightarrow \begin{bmatrix}
a & a & a & a \\
0 & b-a & b-a & b-a \\
0 & 0 & c-b & c-b \\
0 & 0 & 0 & d-c
\end{bmatrix} = U, \qquad L = \begin{bmatrix}
1 & 0 & 0 & 0 \\
1 & 1 & 0 & 0 \\
1 & 1 & 1 & 0 \\
1 & 1 & 1 & 1
\end{bmatrix}.

$$


The pivots are the nonzero entries on the diagonal of $U$. So there are four pivots when these four conditions are satisfied: $a \neq 0$, $b \neq a$, $c \neq b$, and $d \neq c$.

\textbf{Section 2.6. Problem 18:} If $A = LDU$ and also $A = L_1 D_1 U_1$ with all factors invertible, then $L = L_1$ and $D = D_1$ and $U = U_1$. “The three factors are unique.”

Derive the equation $L_1^{-1} L D = D_1 U_1 U^{-1}$. Are the two sides triangular or diagonal? Deduce $L = L_1$ and $U = U_1$ (they all have diagonal 1’s). Then $D = D_1$.

\boxed{\text{Solution}} (4 points): Notice that $LDU = L_1 D_1 U_1$. Multiply on the left by $L_1^{-1}$ and on the right by $U^{-1}$, getting


$$

L_1^{-1} L D U U^{-1} = L_1^{-1} L_1 D_1 U_1 U^{-1}.

$$


But $U U^{-1} = I$ and $L_1^{-1} L_1 = I$. Thus $L_1^{-1} L D = D_1 U_1 U^{-1}$, as desired.

The left side $L_1^{-1} L D$ is lower triangular, and the right side $D_1 U_1 U^{-1}$ is upper triangular. But they’re equal. So they’re both diagonal. Hence $L_1^{-1} L$ and $U_1 U^{-1}$ are diagonal too. But they have diagonal 1’s. So they’re both equal to $I$. Thus $L = L_1$ and $U = U_1$. Also $L_1^{-1} L D = D_1 U_1 U^{-1}$. Thus $D = D_1$.

\textbf{Section 2.6. Problem 25:} For the 6 by 6 second difference constant-diagonal matrix $K$, put the pivots and multipliers into $K = LU$. ($L$ and $U$ will have only two nonzero diagonals, because $K$ has three.) Find a formula for the $i, j$ entry of $L^{-1}$, by software like MATLAB using \texttt{inv(L)} or by looking for a nice pattern.


$$

-1, 2, -1 \text{ matrix} \quad K = \begin{bmatrix}
2 & -1 & & & & \\
-1 & 2 & -1 & & & \\
& -1 & 2 & -1 & & \\
& & -1 & 2 & -1 & \\
& & & -1 & 2 & -1 \\
& & & & -1 & 2
\end{bmatrix} = \text{toeplitz}([2 -1 0 0 0 0]).

$$


\boxed{\text{Solution}} (12 points): Here is the transcript of a session with the software \texttt{Octave}, which is the open-source GNU clone of MATLAB. The decomposition $K = LU$ is found using the teaching code \texttt{slu.m}, available from

\texttt{http://web.mit.edu/18.06/www/Course-Info/Tcodes.html}

octave:1> K=toeplitz([2 -1 0 0 0 0]);
octave:2> [L,U]=slu(K);
octave:3> inv(L)
ans =
1.00000  0.00000  0.00000  0.00000  0.00000  0.00000
0.50000  1.00000  0.00000  0.00000  0.00000  0.00000
0.33333  0.66667  1.00000  0.00000  0.00000  0.00000
0.25000  0.50000  0.75000  1.00000  0.00000  0.00000
0.20000  0.40000  0.60000  0.80000  1.00000  0.00000
0.16667  0.33333  0.50000  0.66667  0.83333  1.00000

So the nice pattern is $(L^{-1})_{ij} = j/i$ for $j \leq i$ and $(L^{-1})_{ij} = 0$ for $j > i$.

**Section 2.6. Problem 26:** If you print $K^{-1}$, it doesn't look good. But if you print $7K^{-1}$ (when $K$ is 6 by 6), that matrix looks wonderful. Write down $7K^{-1}$ by hand, following this pattern:

1 Row 1 and column 1 are (6, 5, 4, 3, 2, 1).

2 On and above the main diagonal, row $i$ is $i$ times row 1.

3 On and below the main diagonal, column $j$ is $j$ times column 1.

Multiply $K$ times that $7K^{-1}$ to produce $7I$. Here is that pattern for $n = 3$:

**3 by 3 case**
The determinant of this $K$ is 4

$$

(K)(4K^{-1}) = \begin{bmatrix} 2 & -1 & 0 \\ -1 & 2 & -1 \\ 0 & -1 & 2 \end{bmatrix} \begin{bmatrix} 3 & 2 & 1 \\ 2 & 4 & 2 \\ 1 & 2 & 3 \end{bmatrix} = \begin{bmatrix} 4 & 4 & 4 \\ 4 & 4 & 4 \\ 4 & 4 & 4 \end{bmatrix}.

$$


**Solution** (12 points): For $n = 6$, following the pattern yields this matrix:

$$

\begin{bmatrix}
6 & 5 & 4 & 3 & 2 & 1 \\
5 & 10 & 8 & 6 & 4 & 2 \\
4 & 8 & 12 & 9 & 6 & 3 \\
3 & 6 & 9 & 12 & 8 & 4 \\
2 & 4 & 6 & 8 & 10 & 5 \\
1 & 2 & 3 & 4 & 5 & 6
\end{bmatrix}.

$$


Here is the transcript of an **Octave** session that multiplies $K$ times that $7K^{-1}$.

octave:1> K=toeplitz([2 -1 0 0 0 0]);
octave:2> M=[6 5 4 3 2 1;5 10 8 6 4 2;4 8 12 9 6 3;3 6 9 12 8 4;2 4 6 8 10 5;1 2 3 4 5 6];
octave:3> K*M
ans =
7  0  0  0  0  0
0  7  0  0  0  0
0  0  7  0  0  0
0  0  0  7  0  0
0  0  0  0  7  0
0  0  0  0  0  7

**Section 2.7. Problem 13:** (a) Find a 3 by 3 permutation matrix with $P^3 = I$ (but not $P = I$).

(b) Find a 4 by 4 permutation $\widehat{P}$ with $\widehat{P}^4 \neq I$.

**Solution** (4 points): (a) Let $P$ move the rows in a cycle: the first to the second, the second to the third, and the third to the first. So

$$

P = \begin{bmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{bmatrix}, \quad P^2 = \begin{bmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 0 \end{bmatrix}, \quad \text{and} \quad P^3 = I.

$$


(b) Let $\widehat{P}$ be the block diagonal matrix with 1 and $P$ on the diagonal: $\widehat{P} = \begin{pmatrix} 1 & 0 \\ 0 & P \end{pmatrix}$. Since $P^3 = I$, also $\widehat{P}^3 = I$. So $\widehat{P}^4 = \widehat{P} \neq I$.

**Section 2.7. Problem 36:** A *group* of matrices includes $AB$ and $A^{-1}$ if it includes $A$ and $B$. “Products and inverses stay in the group.” Which of these sets are groups? Lower triangular matrices $L$ with 1’s on the diagonal, symmetric matrices $S$, positive matrices $M$, diagonal invertible matrices $D$, permutation matrices $P$, matrices with $Q^{\top} = Q^{-1}$. *Invent two more matrix groups.*

**Solution** (4 points): Yes, the lower triangular matrices $L$ with 1’s on the diagonal form a group. Clearly, the product of two is a third. Further, the Gauss-Jordan method shows that the inverse of one is another.

No, the symmetric matrices do not form a group. For example, here are two symmetric matrices $A$ and $B$ whose product $AB$ is not symmetric.


$$
 A = \begin{bmatrix} 0 & 1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix}, \quad B = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 5 \\ 3 & 5 & 6 \end{bmatrix}, \quad AB = \begin{bmatrix} 2 & 4 & 5 \\ 1 & 2 & 3 \\ 3 & 5 & 6 \end{bmatrix}. 
$$


No, the positive matrices do not form a group. For example, $\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ is positive, but its inverse $\begin{pmatrix} 1 & -1 \\ 0 & 1 \end{pmatrix}$ is not.

Yes, clearly, the diagonal invertible matrices form a group.

Yes, clearly, the permutation matrices matrices form a group.

Yes, the matrices with $Q^{\top} = Q^{-1}$ form a group. Indeed, if $A$ and $B$ are two such matrices, then so are $AB$ and $A^{-1}$, as


$$
 (AB)^{\top} = B^{\top} A^{\top} = B^{-1} A^{-1} = (AB)^{-1} \quad \text{and} \quad (A^{-1})^{\top} = (A^{\top})^{-1} = A^{-1}. 
$$


There are many more matrix groups. For example, given two, the block matrices $\begin{pmatrix} A & 0 \\ 0 & B \end{pmatrix}$ form a third as $A$ ranges over the first group and $B$ ranges over the second. Another example is the set of all products $cP$ where $c$ is a nonzero scalar and $P$ is a permutation matrix of given size.

**Section 2.7. Problem 40:** Suppose $Q^{\top}$ equals $Q^{-1}$ (transpose equal inverse, so $Q^{\top} Q = I$).

(a) Show that the columns $q_1, \ldots, q_n$ are unit vectors: $\|q_i\|^2 = 1$.

(b) Show that every two distinct columns of $Q$ are perpendicular: $q_i^{\top} q_j = 0$ for $i \neq j$.

(c) Find a 2 by 2 example with first entry $q_{11} = \cos \theta$.

**Solution** (12 points): In any case, the $ij$ entry of $Q^{\top} Q$ is $q_i^{\top} q_j$. So $Q^{\top} Q = I$ leads to (a) $q_i^{\top} q_i = 1$ for all $i$ and to (b) $q_i^{\top} q_j = 0$ for $i \neq j$. As for (c), the rotation matrix $\begin{pmatrix} \cos \theta & -\sin \theta \\ \sin \theta & \cos \theta \end{pmatrix}$ works.

**Section 3.1. Problem 18:** True or false (check addition or give a counterexample):

(a) The symmetric matrices in $\mathbf{M}$ (with $A^{\top} = A$) form a subspace.

(b) The skew-symmetric matrices in $\mathbf{M}$ (with $A^{\top} = -A$) form a subspace.

(c) The unsymmetric matrices in $\mathbf{M}$ (with $A^{\top} \neq A$) form a subspace.

**Solution** (4 points): (a) True: $A^{\top} = A$ and $B^{\top} = B$ lead to $(A + B)^{\top} = A^{\top} + B^{\top} = A + B$.

(b) True: $A^{\top} = -A$ and $B^{\top} = -B$ lead to $(A + B)^{\top} = A^{\top} + B^{\top} = -A - B = -(A + B)$.

(c) False: $\begin{pmatrix} 1 & 1 \\ 0 & 0 \end{pmatrix} + \begin{pmatrix} 0 & 0 \\ 1 & 1 \end{pmatrix} = \begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}$.

# pset2-s10-soln: page 5

## Section 3.1. Problem 23: (Recommended)
If we add an extra column $b$ to a matrix $A$, then the column space gets larger unless ____. Give an example where the column space gets larger and an example where it doesn't. Why is $Ax = b$ solvable exactly when the column space doesn't get larger—it is the same for $A$ and $[A \, b]$?

**Solution** (4 points): The column space gets larger unless it contains $b$; that is, $b$ is a linear combination of the columns of $A$. For example, let $A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}$; then the column space gets larger if $b = \begin{pmatrix} 0 \\ 1 \end{pmatrix}$ and it doesn't if $b = \begin{pmatrix} 1 \\ 0 \end{pmatrix}$. The equation $Ax = b$ is solvable exactly when $b$ is a (nontrivial) linear combination of the columns of $A$ (with the components of $x$ as combining coefficients); so $Ax = b$ is solvable exactly when $b$ lies in the column space, so exactly when the column space doesn't get larger.

## Section 3.1. Problem 30:
Suppose $\mathbf{S}$ and $\mathbf{T}$ are two subspaces of a vector space $\mathbf{V}$.

(a) **Definition**: The sum $\mathbf{S} + \mathbf{T}$ contains all sums $\mathbf{s} + \mathbf{t}$ of a vector $\mathbf{s}$ in $\mathbf{S}$ and a vector $\mathbf{t}$ in $\mathbf{T}$. Show that $\mathbf{S} + \mathbf{T}$ satisfies the requirements (addition and scalar multiplication) for a vector space.

(b) If $\mathbf{S}$ and $\mathbf{T}$ are lines in $\mathbf{R}^m$, what is the difference between $\mathbf{S} + \mathbf{T}$ and $\mathbf{S} \cup \mathbf{T}$? That union contains all vectors from $\mathbf{S}$ and $\mathbf{T}$ or both. Explain this statement: *The span of $\mathbf{S} \cup \mathbf{T}$ is $\mathbf{S} + \mathbf{T}$.* (Section 3.5 returns to this word “span.”)

**Solution** (12 points): (a) Let $\mathbf{s}, \mathbf{s}'$ be vectors in $\mathbf{S}$, let $\mathbf{t}, \mathbf{t}'$ be vectors in $\mathbf{T}$, and let $c$ be a scalar. Then

$$
 (\mathbf{s} + \mathbf{t}) + (\mathbf{s}' + \mathbf{t}') = (\mathbf{s} + \mathbf{s}') + (\mathbf{t} + \mathbf{t}') \quad \text{and} \quad c(\mathbf{s} + \mathbf{t}) = c\mathbf{s} + c\mathbf{t}. 
$$

Thus $\mathbf{S} + \mathbf{T}$ is closed under addition and scalar multiplication; in other words, it satisfies the two requirements for a vector space.

(b) If $\mathbf{S}$ and $\mathbf{T}$ are distinct lines, then $\mathbf{S} + \mathbf{T}$ is a plane, whereas $\mathbf{S} \cup \mathbf{T}$ is not even closed under addition. The span of $\mathbf{S} \cup \mathbf{T}$ is the set of all combinations of vectors in this union. In particular, it contains all sums $\mathbf{s} + \mathbf{t}$ of a vector $\mathbf{s}$ in $\mathbf{S}$ and a vector $\mathbf{t}$ in $\mathbf{T}$, and these sums form $\mathbf{S} + \mathbf{T}$. On the other hand, $\mathbf{S} + \mathbf{T}$ contains both $\mathbf{S}$ and $\mathbf{T}$; so it contains $\mathbf{S} \cup \mathbf{T}$. Further, $\mathbf{S} + \mathbf{T}$ is a vector space. So it contains all combinations of vectors in itself; in particular, it contains the span of $\mathbf{S} \cup \mathbf{T}$. Thus the span of $\mathbf{S} \cup \mathbf{T}$ is $\mathbf{S} + \mathbf{T}$.

## Section 3.1. Problem 32:
Show that the matrices $A$ and $[A \, AB]$ (with extra columns) have the same column space. But find a square matrix with $\mathbf{C}(A^2)$ smaller than $\mathbf{C}(A)$. Important point: An $n$ by $n$ matrix has $\mathbf{C}(A) = \mathbf{R}^n$ exactly when $A$ is an ____ matrix.

**Solution** (12 points): Each column of $AB$ is a combination of the columns of $A$ (the combining coefficients are the entries in the corresponding column of $B$). So any combination of the columns of $[A \, AB]$ is a combination of the columns of $A$ alone. Thus $A$ and $[A \, AB]$ have the same column space.

Let $A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$. Then $A^2 = 0$, so $\mathbf{C}(A^2) = \mathbf{Z}$. But $\mathbf{C}(A)$ is the line through $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

An $n$ by $n$ matrix has $\mathbf{C}(A) = \mathbf{R}^n$ exactly when $A$ is an invertible matrix, because $Ax = b$ is solvable for any given $b$ exactly when $A$ is invertible.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

