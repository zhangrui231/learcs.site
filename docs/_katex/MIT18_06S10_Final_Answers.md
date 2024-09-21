18.06 Final Exam
May 18, 2010
Professor Strang

1. (12 points) This question is about the matrix


$$
 A = \begin{bmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 4 \\ 3 & 6 & 3 & 9 \end{bmatrix} 
$$


(a) Find a lower triangular $L$ and an upper triangular $U$ so that $A = LU$.

Answer:


$$
 A = \begin{bmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 3 & 3 & 1 \end{bmatrix} \begin{bmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{bmatrix} 
$$


(b) Find the reduced row echelon form $R = rref(A)$. How many independent columns in $A$?

Answer: 2


$$
 R = \begin{bmatrix} 1 & 2 & 0 & 1 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 0 \end{bmatrix} = U \text{ in this example.} 
$$


(c) Find a basis for the nullspace of $A$.

Answer:


$$
 \begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \end{bmatrix}, \begin{bmatrix} 3 \\ -2 \\ 0 \\ 1 \end{bmatrix} 
$$


(d) If the vector $b$ is the sum of the four columns of $A$, write down the complete solution to $Ax = b$.

**Answer:**


$$
 x = \begin{bmatrix} 1 \\ 1 \\ 1 \\ 1 \end{bmatrix} + x_2 \begin{bmatrix} -2 \\ 1 \\ 0 \\ 0 \end{bmatrix} + x_4 \begin{bmatrix} 3 \\ -2 \\ 0 \\ 1 \end{bmatrix} 
$$


2. (11 points) This problem finds the curve $y = C + D \cdot 2^t$ which gives the best least squares fit to the points $(t, y) = (0, 6), (1, 4), (2, 0)$.

(a) Write down the 3 equations that would be satisfied if the curve went through all 3 points.

Answer:

$$

C + 1D = 6 \\
C + 2D = 4 \\
C + 4D = 0

$$


(b) Find the coefficients $C$ and $D$ of the best curve $y = C + D \cdot 2^t$.

Answer:

$$

A^T A = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 2 \\ 1 & 4 \end{bmatrix} = \begin{bmatrix} 3 & 7 \\ 7 & 21 \end{bmatrix}

$$


$$

A^T b = \begin{bmatrix} 1 & 1 & 1 \\ 1 & 2 & 4 \end{bmatrix} \begin{bmatrix} 6 \\ 4 \\ 0 \end{bmatrix} = \begin{bmatrix} 10 \\ 14 \end{bmatrix}

$$


Solve $A^T A \hat{x} = A^T b$:

$$

\begin{bmatrix} 3 & 7 \\ 7 & 21 \end{bmatrix} \begin{bmatrix} C \\ D \end{bmatrix} = \begin{bmatrix} 10 \\ 14 \end{bmatrix} \text{ gives } \begin{bmatrix} C \\ D \end{bmatrix} = \frac{1}{14} \begin{bmatrix} 21 & -7 \\ -7 & 3 \end{bmatrix} \begin{bmatrix} 10 \\ 14 \end{bmatrix} = \begin{bmatrix} 8 \\ -2 \end{bmatrix}.

$$


(c) What values should $y$ have at times $t = 0, 1, 2$ so that the best curve is $y = 0$?

Answer:
The projection is $p = (0, 0, 0)$ if $A^T b = 0$. In this case, $b = \text{values of } y = c(2, -3, 1)$.

3. (11 points) Suppose $Av_i = b_i$ for the vectors $v_1, \ldots, v_n$ and $b_1, \ldots, b_n$ in $R^n$. Put the $v$'s into the columns of $V$ and put the $b$'s into the columns of $B$.

(a) Write those equations $Av_i = b_i$ in matrix form. What condition on which vectors allows $A$ to be determined uniquely? Assuming this condition, find $A$ from $V$ and $B$.

Answer:

$$
 A [v_1 \cdots v_n] = [b_1 \cdots b_n] 
$$
 or $AV = B$. Then $A = BV^{-1}$ if the $v$'s are independent.

(b) Describe the column space of that matrix $A$ in terms of the given vectors.

Answer:
The column space of $A$ consists of all linear combinations of $b_1, \cdots, b_n$.

(c) What additional condition on which vectors makes $A$ an invertible matrix? Assuming this, find $A^{-1}$ from $V$ and $B$.

Answer:
If the $b$'s are independent, then $B$ is invertible and $A^{-1} = VB^{-1}$.

4. (11 points)

(a) Suppose $x_k$ is the fraction of MIT students who prefer calculus to linear algebra at year $k$. The remaining fraction $y_k = 1 - x_k$ prefers linear algebra.

At year $k + 1$, 1/5 of those who prefer calculus change their mind (possibly after taking 18.03). Also at year $k + 1$, 1/10 of those who prefer linear algebra change their mind (possibly because of this exam).

Create the matrix $A$ to give

$$

\begin{bmatrix}
x_{k+1} \\
y_{k+1}
\end{bmatrix}
= A
\begin{bmatrix}
x_k \\
y_k
\end{bmatrix}

$$

and find the limit of $A^k
\begin{bmatrix}
1 \\
0
\end{bmatrix}$ as $k \to \infty$.

**Answer:**


$$

A =
\begin{bmatrix}
.8 & .1 \\
.2 & .9
\end{bmatrix}

$$


The eigenvector with $\lambda = 1$ is

$$

\begin{bmatrix}
1/3 \\
2/3
\end{bmatrix}

$$


This is the steady state starting from

$$

\begin{bmatrix}
1 \\
0
\end{bmatrix}

$$


$\frac{2}{3}$ of all students prefer linear algebra! I agree.

(b) Solve these differential equations, starting from $x(0) = 1$, $y(0) = 0$:


$$

\frac{dx}{dt} = 3x - 4y \quad \frac{dy}{dt} = 2x - 3y

$$


**Answer:**


$$

A =
\begin{bmatrix}
3 & -4 \\
2 & -3
\end{bmatrix}

$$


has eigenvalues $\lambda_1 = 1$ and $\lambda_2 = -1$ with eigenvectors $x_1 = (2, 1)$ and $x_2 = (1, 1)$. The initial vector $(x(0), y(0)) = (1, 0)$ is $x_1 - x_2$.

So the solution is $(x(t), y(t)) = e^t (2, 1) + e^{-t} (1, 1)$.

(c) For what initial conditions $\begin{bmatrix} x(0) \\ y(0) \end{bmatrix}$ does the solution $\begin{bmatrix} x(t) \\ y(t) \end{bmatrix}$ to this differential equation lie on a single straight line in $R^2$ for all $t$?

**Answer:**

If the initial conditions are a multiple of either eigenvector $(2, 1)$ or $(1, 1)$, the solution is at all times a multiple of that eigenvector.

5. (11 points)

(a) Consider a $120^\circ$ rotation around the axis $x = y = z$. Show that the vector $i = (1, 0, 0)$ is rotated to the vector $j = (0, 1, 0)$. (Similarly $j$ is rotated to $k = (0, 0, 1)$ and $k$ is rotated to $i$.) How is $j - i$ related to the vector $(1, 1, 1)$ along the axis?

**Answer:**

$$
j - i = \begin{bmatrix} -1 \\ 1 \\ 0 \end{bmatrix}
$$

is orthogonal to the axis vector $\begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix}$.

So are $k - j$ and $i - k$. By symmetry the rotation takes $i$ to $j$, $j$ to $k$, $k$ to $i$.

(b) Find the matrix $A$ that produces this rotation (so $Av$ is the rotation of $v$). Explain why $A^3 = I$. What are the eigenvalues of $A$?

**Answer:**

$A^3 = I$ because this is three $120^\circ$ rotations (so $360^\circ$). The eigenvalues satisfy $\lambda^3 = 1$ so $\lambda = 1, e^{2\pi i/3}, e^{-2\pi i/3} = e^{4\pi i/3}$.

(c) If a 3 by 3 matrix $P$ projects every vector onto the plane $x + 2y + z = 0$, find three eigenvalues and three independent eigenvectors of $P$. No need to compute $P$.

**Answer:** The plane is perpendicular to the vector $(1, 2, 1)$. This is an eigenvector of $P$ with $\lambda = 0$. The vectors $(-2, 1, 0)$ and $(1, -1, 1)$ are eigenvectors with $\lambda = 0$.

6. (11 points) This problem is about the matrix


$$
 A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{bmatrix}. 
$$


(a) Find the eigenvalues of $A^T A$ and also of $A A^T$. For both matrices find a complete set of orthonormal eigenvectors.

**Answer:**


$$
 A^T A = \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{bmatrix} \begin{bmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{bmatrix} = \begin{bmatrix} 14 & 28 \\ 28 & 56 \end{bmatrix} 
$$


has $\lambda_1 = 70$ and $\lambda_2 = 0$ with eigenvectors $x_1 = \frac{1}{\sqrt{5}} \begin{bmatrix} 1 \\ 2 \end{bmatrix}$ and $x_2 = \frac{1}{\sqrt{5}} \begin{bmatrix} -2 \\ 1 \end{bmatrix}$.


$$
 A A^T = \begin{bmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{bmatrix} \begin{bmatrix} 1 & 2 & 3 \\ 2 & 4 & 6 \end{bmatrix} = \begin{bmatrix} 5 & 10 & 15 \\ 10 & 20 & 30 \\ 15 & 30 & 45 \end{bmatrix} 
$$


has $\lambda_1 = 70$, $\lambda_2 = 0$, $\lambda_3 = 0$ with


$$
 x_1 = \frac{1}{\sqrt{14}} \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix} 
$$
 and $x_2 = \frac{1}{\sqrt{5}} \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix}$ and $x_3 = \frac{1}{\sqrt{70}} \begin{bmatrix} 3 \\ 6 \\ -5 \end{bmatrix}$.

(b) If you apply the Gram-Schmidt process (orthonormalization) to the columns of this matrix $A$, what is the resulting output?

**Answer:**

Gram-Schmidt will find the unit vector


$$
 q_1 = \frac{1}{\sqrt{14}} \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}. 
$$


But the construction of $q_2$ fails because column 2 = 2 (column 1).

(c) If $A$ is any $m$ by $n$ matrix with $m > n$, tell me why $AA^T$ cannot be positive definite. Is $A^T A$ always positive definite? (If not, what is the test on $A$?)

**Answer**

$AA^T$ is $m$ by $m$ but its rank is not greater than $n$ (all columns of $AA^T$ are combinations of columns of $A$). Since $n < m$, $AA^T$ is singular.

$A^T A$ is positive definite if $A$ has full column rank $n$. (Not always true, $A$ can even be a zero matrix.)

7. (11 points) This problem is to find the determinants of


$$
 A = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} \quad B = \begin{bmatrix} 0 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} \quad C = \begin{bmatrix} x & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} 
$$


(a) Find det $A$ and give a reason.

Answer:
det $A = 0$ because two rows are equal.

(b) Find the cofactor $C_{11}$ and then find det $B$. This is the volume of what region in $R^4$?

Answer:
The cofactor $C_{11} = -1$. Then det $B = \text{det} A - C_{11} = 1$. This is the volume of a box in $R^4$ with edges = rows of $B$.

(c) Find det $C$ for any value of $x$. You could use linearity in row 1.

Answer:
det $C = xC_{11} + \text{det} B = -x + 1$. Check this answer (zero), for $x = 1$ when $C = A$.

8. (11 points)

(a) When $A$ is similar to $B = M^{-1}AM$, prove this statement:

If $A^k \to 0$ when $k \to \infty$, then also $B^k \to 0$.

**Answer:**

$A$ and $B$ have the same eigenvalues. If $A^k \to 0$ then all $|\lambda| < 1$. Therefore $B^k \to 0$.

(b) Suppose $S$ is a fixed invertible 3 by 3 matrix.

This question is about all the matrices $A$ that are diagonalized by $S$, so that $S^{-1}AS$ is diagonal. Show that these matrices $A$ form a subspace of 3 by 3 matrix space. (Test the requirements for a subspace.)

**Answer:**

If $A_1$ and $A_2$ are in the space, they are diagonalized by $S$. Then $S^{-1}(cA_1 + dA_2)S$ is diagonal + diagonal = diagonal.

(c) Give a basis for the space of 3 by 3 diagonal matrices. Find a basis for the space in part (b) — all the matrices $A$ that are diagonalized by $S$.

**Answer:**

A basis for the diagonal matrices is


$$
 D_1 = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad D_2 = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 0 \end{bmatrix} \quad D_3 = \begin{bmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 1 \end{bmatrix} 
$$


Then $SD_1S^{-1}$, $SD_2S^{-1}$, $SD_3S^{-1}$ are all diagonalized by $S$: a basis for the subspace.

9. (11 points) This square network has 4 nodes and 6 edges. On each edge, the direction of positive current $w_i > 0$ is from lower node number to higher node number. The voltages at the nodes are $(v_1, v_2, v_3, v_4)$.

Answer:

![Network Diagram](line.png)

(a) Write down the incidence matrix $A$ for this network (so that $Av$ gives the 6 voltage differences like $v_2 - v_1$ across the 6 edges). What is the rank of $A$? What is the dimension of the nullspace of $A^T$?

Answer:


$$
 A = \begin{bmatrix}
-1 & 1 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
-1 & 0 & 0 & 1 \\
0 & -1 & 1 & 0 \\
0 & -1 & 0 & 1 \\
0 & 0 & -1 & 1
\end{bmatrix} 
$$


has rank $r = 3$. The nullspace of $A^T$ has dimension $6 - 3 = 3$.

(b) Compute the matrix $A^T A$. What is its rank? What is its nullspace?

**Answer:**


$$
 A^T A = \begin{bmatrix}
3 & -1 & -1 & -1 \\
-1 & 3 & -1 & -1 \\
-1 & -1 & 3 & -1 \\
-1 & -1 & -1 & 3
\end{bmatrix} 
$$


has rank 3 like $A$. The nullspace is the line through $(1, 1, 1, 1)$.

---

(c) Suppose $v_1 = 1$ and $v_4 = 0$. If each edge contains a unit resistor, the currents $(w_1, w_2, w_3, w_4, w_5, w_6)$ on the 6 edges will be $w = -Av$ by Ohm’s Law. Then Kirchhoff’s Current Law (flow in = flow out at every node) gives $A^T w = 0$ which means $A^T A v = 0$. Solve $A^T A v = 0$ for the unknown voltages $v_2$ and $v_3$. Find all 6 currents $w_1$ to $w_6$. How much current enters node 4?

**Answer:**

**Note:** As stated there is no solution (my apologies!). All solutions to $A^T A v = 0$ are multiples of $(1, 1, 1, 1)$ which rules out $v_1 = 1$ and $v_4 = 0$.

**Intended problem:** I meant to solve the reduced equations using $KCL$ only at nodes 2 and 3. In fact symmetry gives $v_2 = v_3 = \frac{1}{2}$. Then the currents are $w_1 = w_2 = w_5 = w_6 = \frac{1}{2}$ around the sides and $w_3 = 1$ and $w_4 = 0$ (symmetry). So $w_3 + w_5 + w_6 = \frac{1}{2}$ is the total current into node 4.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

