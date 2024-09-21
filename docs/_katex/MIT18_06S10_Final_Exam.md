# 18.06 Final Exam
## May 18, 2010
### Professor Strang

Your PRINTED name is: _____________________________
Your recitation number is _____________________________

1. (12 points) This question is about the matrix


$$
 A = \begin{bmatrix} 1 & 2 & 0 & 1 \\ 2 & 4 & 1 & 4 \\ 3 & 6 & 3 & 9 \end{bmatrix}. 
$$


(a) Find a lower triangular $L$ and an upper triangular $U$ so that $A = LU$.

(b) Find the reduced row echelon form $R = rref(A)$. How many independent columns in $A$?

(c) Find a basis for the nullspace of $A$.

(d) If the vector $b$ is the sum of the four columns of $A$, write down the complete solution to $Ax = b$.

2. (11 points) This problem finds the curve $y = C + D \cdot 2^t$ which gives the best least squares fit to the points $(t, y) = (0, 6), (1, 4), (2, 0)$.

(a) Write down the 3 equations that would be satisfied if the curve went through all 3 points.

(b) Find the coefficients $C$ and $D$ of the best curve $y = C + D \cdot 2^t$.

(c) What values should $y$ have at times $t = 0, 1, 2$ so that the best curve is $y = 0$?

3. (11 points) Suppose $Av_i = b_i$ for the vectors $v_1, \ldots, v_n$ and $b_1, \ldots, b_n$ in $R^n$. Put the $v$'s into the columns of $V$ and put the $b$'s into the columns of $B$.

(a) Write those equations $Av_i = b_i$ in matrix form. What condition on which vectors allows $A$ to be determined uniquely? Assuming this condition, find $A$ from $V$ and $B$.

(b) Describe the column space of that matrix $A$ in terms of the given vectors.

(c) What additional condition on which vectors makes $A$ an invertible matrix? Assuming this, find $A^{-1}$ from $V$ and $B$.

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

(b) Solve these differential equations, starting from $x(0) = 1$, $y(0) = 0$:

$$

\frac{dx}{dt} = 3x - 4y \quad \frac{dy}{dt} = 2x - 3y \, .

$$


(c) For what initial conditions

$$

\begin{bmatrix}
x(0) \\
y(0)
\end{bmatrix}

$$

does the solution

$$

\begin{bmatrix}
x(t) \\
y(t)
\end{bmatrix}

$$

to this differential equation lie on a single straight line in $R^2$ for all $t$?

5. (11 points)

(a) Consider a $120^\circ$ rotation around the axis $x = y = z$. Show that the vector $i = (1, 0, 0)$ is rotated to the vector $j = (0, 1, 0)$. (Similarly $j$ is rotated to $k = (0, 0, 1)$ and $k$ is rotated to $i$.) How is $j - i$ related to the vector $(1, 1, 1)$ along the axis?

(b) Find the matrix $A$ that produces this rotation (so $Av$ is the rotation of $v$). Explain why $A^3 = I$. What are the eigenvalues of $A$?

(c) If a 3 by 3 matrix $P$ projects every vector onto the plane $x + 2y + z = 0$, find three eigenvalues and three independent eigenvectors of $P$. No need to compute $P$.

6. (11 points) This problem is about the matrix


$$
 A = \begin{bmatrix} 1 & 2 \\ 2 & 4 \\ 3 & 6 \end{bmatrix}. 
$$


(a) Find the eigenvalues of $A^T A$ and also of $A A^T$. For both matrices find a complete set of orthonormal eigenvectors.

(b) If you apply the Gram-Schmidt process (orthonormalization) to the columns of this matrix $A$, what is the resulting output?

(c) If $A$ is any $m$ by $n$ matrix with $m > n$, tell me why $A A^T$ cannot be positive definite. Is $A^T A$ always positive definite? (If not, what is the test on $A$?)

7. (11 points) This problem is to find the determinants of


$$
 A = \begin{bmatrix} 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} \quad B = \begin{bmatrix} 0 & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} \quad C = \begin{bmatrix} x & 1 & 1 & 1 \\ 1 & 1 & 1 & 1 \\ 1 & 1 & 1 & 0 \\ 1 & 1 & 0 & 0 \end{bmatrix} 
$$


(a) Find det $A$ and give a reason.

(b) Find the cofactor $C_{11}$ and then find det $B$. This is the volume of what region in $R^4$?

(c) Find det $C$ for any value of $x$. You could use linearity in row 1.

8. (11 points)

(a) When $A$ is similar to $B = M^{-1}AM$, prove this statement:

If $A^k \to 0$ when $k \to \infty$, then also $B^k \to 0$.

(b) Suppose $S$ is a fixed invertible 3 by 3 matrix.

This question is about all the matrices $A$ that are diagonalized by $S$, so that $S^{-1}AS$ is diagonal. Show that these matrices $A$ form a subspace of 3 by 3 matrix space. (Test the requirements for a subspace.)

(c) Give a basis for the space of 3 by 3 diagonal matrices. Find a basis for the space in part (b) — all the matrices $A$ that are diagonalized by $S$.

9. (11 points) This square network has 4 nodes and 6 edges. On each edge, the direction of positive current $w_i > 0$ is from lower node number to higher node number. The voltages at the nodes are $(v_1, v_2, v_3, v_4)$.

(a) Write down the incidence matrix $A$ for this network (so that $Av$ gives the 6 voltage differences like $v_2 - v_1$ across the 6 edges). What is the rank of $A$? What is the dimension of the nullspace of $A^T$?

(b) Compute the matrix $A^T A$. What is its rank? What is its nullspace?

(c) Suppose $v_1 = 1$ and $v_4 = 0$. If each edge contains a unit resistor, the currents $(w_1, w_2, w_3, w_4, w_5, w_6)$ on the 6 edges will be $w = -Av$ by Ohm's Law. Then Kirchhoff's Current Law (flow in = flow out at every node) gives $A^T w = 0$ which means $A^T A v = 0$. Solve $A^T A v = 0$ for the unknown voltages $v_2$ and $v_3$. Find all 6 currents $w_1$ to $w_6$. How much current enters node 4?

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

