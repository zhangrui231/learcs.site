# 18.06 Problem Set 7 Solutions

Total: 100 points

## Prob. 16, Sec. 5.2, Pg. 265:
$F_n$ is the determinant of the 1, 1, -1 tridiagonal matrix of order $n$:


$$
 F_2 = \begin{vmatrix} 1 & -1 \\ 1 & 1 \end{vmatrix} = 2 \quad \quad F_3 = \begin{vmatrix} 1 & -1 & 0 \\ 1 & 1 & -1 \\ 0 & 1 & 1 \end{vmatrix} = 3 \quad \quad F_4 = \begin{vmatrix} 1 & -1 & 0 & 0 \\ 1 & 1 & -1 & 0 \\ 0 & 1 & 1 & -1 \\ 0 & 0 & 1 & 1 \end{vmatrix} \neq 4. 
$$


Expand in cofactors to show that $F_n = F_{n-1} + F_{n-2}$. These determinants are *Fibonacci numbers* 1, 2, 3, 5, 8, 13, .... The sequence usually starts 1, 1, 2, 3 (with two 1's) so our $F_n$ is the usual $F_{n+1}$.

**Solution** (see pg. 535, 4 pts.): The 1, 1 cofactor of the $n$ by $n$ matrix is $F_{n-1}$. The 1, 2 cofactor has a 1 in column 1, with cofactor $F_{n-2}$. Multiply by $(-1)^{1+2}$ and also $(-1)$ from the 1, 2 entry to find $F_n = F_{n-1} + F_{n-2}$ (so these determinants are Fibonacci numbers).

## Prob. 32, Sec. 5.2, Pg. 268:
Cofactors of the 1, 3, 1 matrices in Problem 21 give a recursion $S_n = 3S_{n-1} - S_{n-2}$. Amazingly that recursion produces every second Fibonacci number. Here is the challenge.

*Show that $S_n$ is the Fibonacci number $F_{2n+2}$ by proving $F_{2n+2} = 3F_{2n} - F_{2n-2}$. Keep using Fibonacci's rule $F_k = F_{k-1} + F_{k-2}$ starting with $k = 2n + 2$.*

**Solution** (see pg. 535, 12 pts.): To show that $F_{2n+2} = 3F_{2n} - F_{2n-2}$, keep using Fibonacci's rule:


$$
 F_{2n+2} = F_{2n+1} + F_{2n} = F_{2n} + F_{n-1} + F_{2n} = 2F_{2n} + (F_{2n} - F_{2n-2}) = 3F_{2n} - F_{2n-2}. 
$$


## Prob. 33, Sec. 5.2, Pg. 268:
The symmetric Pascal matrices have determinant 1. If I subtract 1 from the $n, n$ entry, why does the determinant become zero? (Use rule 3 or cofactors.)


$$
 \det \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{bmatrix} = 1 \text{ (known)} \quad \quad \det \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 19 \end{bmatrix} = 0 \text{ (to explain)}. 
$$


**Solution** (see pg. 535, 12 pts.): The difference from 20 to 19 multiplies its cofactor, which is the determinant of the 3 by 3 Pascal matrix, so equal to 1. Thus the det drops by 1.

## Prob. 8, Sec. 5.3, Pg. 279:
Find the cofactors of $A$ and multiply $AC^T$ to find $\det A$:


$$
 A = \begin{bmatrix} 1 & 1 & 4 \\ 1 & 2 & 2 \\ 1 & 2 & 5 \end{bmatrix} \quad \text{and} \quad C = \begin{bmatrix} 6 & -3 & 0 \\ \cdot & \cdot & \cdot \\ \cdot & \cdot & \cdot \end{bmatrix} \quad \text{and} \quad AC^T = \underline{\quad}. 
$$


If you change that 4 to 100, why is $\det A$ unchanged?

**Solution** (see pg. 536, 4 pts.): Straightforward computation yields $C$ and $\det A = 3$:


$$
 C = \begin{bmatrix} 6 & -3 & 0 \\ 3 & 1 & -1 \\ -6 & 2 & 1 \end{bmatrix} \text{ and } AC^\top = \begin{bmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 3 \end{bmatrix} . 
$$
 This is $(\det A)I$ and $\det A = 3$. The 1, 3 cofactor of $A$ is 0. Multiplying by 4 or by 100: no change.

**Prob. 28, Sec. 5.3, Pg. 281**: Spherical coordinates $\rho, \phi, \theta$ satisfy $x = \rho \sin \phi \cos \theta$ and $y = \rho \sin \phi \sin \theta$ and $z = \rho \cos \phi$. Find the 3 by 3 matrix of partial derivatives: $\partial x / \partial \rho$, $\partial x / \partial \phi$, $\partial x / \partial \theta$ in row 1. Simplify its determinant to $J = \rho^2 \sin \phi$. Then $dV$ in spherical coordinates is $\rho^2 \sin \phi \, d\rho \, d\phi \, d\theta$ the volume of an infinitesimal “coordinate box”.

**Solution** (4 pts.): The rows are formed by the partials of $x, y, z$ with respect to $\rho, \phi, \theta$:


$$
 \begin{bmatrix} \sin \phi \cos \theta & \rho \cos \phi \cos \theta & -\rho \sin \phi \sin \theta \\ \sin \phi \sin \theta & \rho \cos \phi \sin \theta & \rho \sin \phi \cos \theta \\ \cos \phi & -\rho \sin \phi & 0 \end{bmatrix} . 
$$


Expanding its determinant $J$ along the bottom row, we get


$$
 J = \cos \phi (\rho^2 \cos \phi \sin \phi) (\cos^2 \theta + \sin^2 \theta) + \rho^2 \sin^3 \phi (\cos^2 \theta + \sin^2 \theta) 
$$


$$
 = \rho^2 \sin \phi (\cos^2 \phi + \sin^2 \phi) = \rho^2 \sin \phi . 
$$


**Prob. 40, Sec. 5.3, Pg. 282**: Suppose $A$ is a 5 by 5 matrix. Its entries in row 1 multiply determinants (cofactors) in rows 2–5 to give the determinant. Can you guess a “Jacobi formula” for $\det A$ using 2 by 2 determinants from rows 1–2 *times* 3 by 3 determinants from rows 3–5? Test your formula on the $-1, 2, -1$ tridiagonal matrix that has determinant 6.

**Solution** (12 pts.): A good guess for $\det A$ is the sum, over all pairs $i, j$ with $i < j$, of $(-1)^{i+j+1}$ times the 2 by 2 determinant formed from rows 1–2 and columns $i, j$ times the 3 by 3 determinant formed from rows 3–5 and the complementary columns (this formula is more commonly named after Laplace than Jacobi). There are $\binom{5}{2}$ terms. In the given case, only the first two are nonzero:


$$
 \det A = \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} - \begin{vmatrix} 2 & -1 \\ -1 & 2 \end{vmatrix} \begin{vmatrix} -1 & -1 \\ 2 & -1 \end{vmatrix} = (3)(4) - (-2)(-3) = 6 . 
$$


**Prob. 41, Sec. 5.3, Pg. 282**: The 2 by 2 matrix $AB = (2 \text{ by } 3)(3 \text{ by } 2)$ has a “Cauchy–Binet formula” for $\det AB$:


$$
 \det AB = \text{ sum of (2 by 2 determinants in } A) \text{ (2 by 2 determinants in } B) . 
$$


(a) Guess which 2 by 2 determinants to use from $A$ and $B$.

(b) Test your formula when the rows of $A$ are 1, 2, 3 and 1, 4, 7 with $B = A^\top$.

**Solution** (12 pts.): (a) A good guess is the sum, over all pairs $i, j$ with $i < j$, of the product of the 2 by 2 determinants formed from columns $i, j$ of $A$ and rows $i, j$ of $B$.

(b) First, $AA^\top = \begin{bmatrix} 1 & 2 & 3 \\ 1 & 4 & 7 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 2 & 4 \\ 3 & 7 \end{bmatrix} = \begin{bmatrix} 14 & 30 \\ 30 & 66 \end{bmatrix} .$ So $\det AA^\top = 924 - 900 = 24$.

On the other hand, $\begin{vmatrix} 1 & 2 \\ 1 & 4 \end{vmatrix} \begin{vmatrix} 1 & 1 \\ 2 & 4 \end{vmatrix} + \begin{vmatrix} 1 & 3 \\ 1 & 7 \end{vmatrix} \begin{vmatrix} 1 & 1 \\ 3 & 7 \end{vmatrix} + \begin{vmatrix} 2 & 3 \\ 4 & 7 \end{vmatrix} \begin{vmatrix} 2 & 4 \\ 3 & 7 \end{vmatrix} = 4 + 16 + 4 = 24 .$

**Prob. 19, Sec. 6.1, Pg. 295:** A 3 by 3 matrix $B$ is known to have eigenvalues 0, 1, 2. This is information is enough to find three of these (give the answers where possible):

(a) the rank of $B$,
(b) the determinant of $B^\top B$,
(c) the eigenvalues of $B^\top B$,
(d) the eigenvalues of $(B^2 + I)^{-1}$.

**Solution** (4 pts.): (a) The rank is at most 2 since $B$ is singular as 0 is an eigenvalue. The rank is not 0 since $B$ is not 0 as $B$ has a nonzero eigenvalue. The rank is not 1 since a rank-1 matrix has only one nonzero eigenvalue as every eigenvector lies in the column space. Thus the rank is 2.

(b) We have $\det B^\top B = \det B^\top \det B = (\det B)^2 = 0 \cdot 1 \cdot 2 = 0$.

(c) There is not enough information to find the eigenvalues of $B^\top B$. For example,

if $B = \begin{bmatrix} 0 & 1 & 2 \end{bmatrix}$, then $B^\top B = \begin{bmatrix} 0 & 1 & 4 \end{bmatrix}$; if $B = \begin{bmatrix} 0 & 1 & 1 \\ 1 & 2 & 2 \end{bmatrix}$, then $B^\top B = \begin{bmatrix} 0 & 2 & 4 \end{bmatrix}$.

However, the eigenvalues of a triangular matrix are its diagonal entries.

(d) If $Ax = \lambda x$, then $x = \lambda A^{-1} x$; also, any polynomial $p(t)$ yields $p(A)x = p(\lambda)x$. Hence the eigenvalues of $(B^2 + I)^{-1}$ are $1/(0^2 + 1)$ and $1/(1^2 + 1)$ and $1/(2^2 + 1)$, or 1 and 1/2 and 1/5.

**Prob. 29, Sec. 6.1, Pg. 296:** (Review) Find the eigenvalues of $A$, $B$, and $C$:


$$
 A = \begin{bmatrix} 1 & 2 & 3 \\ 0 & 4 & 5 \\ 0 & 0 & 6 \end{bmatrix} \quad \text{and} \quad B = \begin{bmatrix} 0 & 0 & 1 \\ 0 & 2 & 0 \\ 3 & 0 & 0 \end{bmatrix} \quad \text{and} \quad C = \begin{bmatrix} 2 & 2 & 2 \\ 2 & 2 & 2 \\ 2 & 2 & 2 \end{bmatrix} 
$$


**Solution** (4 pts.): Since the eigenvalues of a triangular matrix are its diagonal entries, the eigenvalues of $A$ are 1, 4, 6. Since the characteristic polynomial of $B$ is


$$
 \det(B - \lambda I) = (-\lambda)(2 - \lambda)(-\lambda) - 1(2 - \lambda)3 = (2 - \lambda)(\lambda^2 - 3), 
$$


the eigenvalues of $B$ are 2, $\pm \sqrt{3}$. Since $C$ is 6 times the projection onto $(1, 1, 1)$, the eigenvalues of $C$ are 6, 0, 0.

**Prob. 6, Sec. 6.2, Pg. 308:** Describe all matrices $S$ that diagonalize this matrix $A$ (find all eigenvectors):


$$
 A = \begin{bmatrix} 4 & 0 \\ 1 & 2 \end{bmatrix}, 
$$


Then describe all matrices that diagonalize $A^{-1}$.

**Solution** (see pg. 537, 4 pts.): The columns of $S$ are nonzero multiples of $(2, 1)$ and $(0, 1)$: either order. Same for $A^{-1}$. Indeed, since the eigenvalues of a triangular matrix are its diagonal entries, the eigenvalues of $A$ are 4, 2. Further, $(2, 1)$ and $(0, 1)$ obviously span the nullspaces of


$$
 \begin{bmatrix} 0 & 0 \\ 1 & -2 \end{bmatrix} \quad \text{and} \quad \begin{bmatrix} 2 & 0 \\ -1 & 0 \end{bmatrix}. 
$$


**Prob. 16, Sec. 6.2, Pg. 309:** (Recommended) Find $\Lambda$ and $S$ to diagonalize $A_1$ in Problem 15:


$$
 A_1 = \begin{bmatrix} .6 & .9 \\ .4 & .1 \end{bmatrix}. 
$$


What is the limit of $\Lambda^k$ as $k \to \infty$? What is the limit of $S\Lambda^kS^{-1}$? In the columns of the matrix you see the ____.

**Solution** (4 pts.): The columns sum to 1; hence, $A_1 - I$ is singular, and so 1 is an eigenvalue. The two eigenvalues sum to 0.6+0.1; so the other one is -0.3. Further, the nullspaces of


$$

\begin{bmatrix}
-0.4 & 0.9 \\
0.4 & -0.9
\end{bmatrix}
\quad \text{and} \quad
\begin{bmatrix}
0.9 & 0.9 \\
0.4 & 0.4
\end{bmatrix}

$$


are obviously spanned by $(9, 4)$ and $(-1, 1)$. Therefore,


$$

\Lambda = \begin{bmatrix}
1 & \\
& -0.3
\end{bmatrix}
\quad \text{and} \quad
S = \begin{bmatrix}
9 & -1 \\
4 & 1
\end{bmatrix}
\quad \text{and} \quad
\Lambda^k \to \begin{bmatrix}
1 & \\
& 0
\end{bmatrix}
\quad \text{and}

$$



$$

S\Lambda^kS^{-1} \to \begin{bmatrix}
9 & -1 \\
4 & 1
\end{bmatrix} \begin{bmatrix}
1 & \\
& 0
\end{bmatrix} \frac{1}{9+4} \begin{bmatrix}
1 & 1 \\
-4 & 9
\end{bmatrix} = \frac{1}{13} \begin{bmatrix}
9 & 9 \\
4 & 4
\end{bmatrix}.

$$


In the columns of the last matrix you see the steady state vector.

**Prob. 37, Sec. 6.2, Pg. 311**: The transpose of $A = S\Lambda S^{-1}$ is $A^T = (S^{-1})^T \Lambda S^T$. The eigenvectors in $A^Ty = \lambda y$ are the columns of that matrix $(S^{-1})^T$. They are often called *left eigenvectors*. How do you multiply matrices to find this formula for $A$?

**Sum of rank-1 matrices** $A = S\Lambda S^{-1} = \lambda_1 x_1 y_1^T + \cdots + \lambda_n x_n y_n^T$.

**Solution** (see pg. 539, 12 pts.): Columns of $S$ times rows of $\Lambda S^{-1}$ will give $r$ rank-1 matrices ($r$ = rank of $A$).

**Challenge problem**: in MATLAB (and in GNU Octave), the command A=toepliz(v) produces a symmetric matrix in which each descending diagonal (from left to right) is constant and the first row is $v$. For instance, if $v = [0 \ 1 \ 0 \ 0 \ 0 \ 1]$, then toepliz(v) is the matrix with 1s on both sides of the main diagonal and on the far corners, and 0s elsewhere. More generally, let $v(n)$ be the vector in $\mathbb{R}^n$ with a 1 in the second and last places and 0s elsewhere, and let A(n)=toepliz(v(n)).

(a) Experiment with $n = 5, \ldots, 12$ in MATLAB to see the repeating pattern of det $A(n)$.

(b) Expand det $A(n)$ in terms of cofactors of the first row and in terms of cofactors of the first column. Use the known determinant $C_n$ of problem 5.2.13 to recover the pattern found in part (a).

**Solution** (12 pts.): (a) The output 2, -4, 2, 0, 2, -4, 2, 0 is returned by this line of code:

for n = 5:12; v=zeros(1,n); v(2)=1; v(n)=1; det(toeplitz(v)), endfor.

(b) Expand det $A(n)$ along the first row and then down both first columns to get


$$

\det A(n) = -C_{n-2} - (-1)^n + (-1)^{n+1} + (-1)^{n+1}(-1)^n C_{n-2} \quad \text{where} \ C_n = \begin{cases}
0, & n \text{ odd}; \\
(-1)^{n/2}, & n \text{ even}.
\end{cases}

$$


Thus $\det A(n) = 2(C_n - (-1)^n)$, which recovers the pattern found in part (a).

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

