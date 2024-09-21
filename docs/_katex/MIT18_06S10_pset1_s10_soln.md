# 18.06 Problem Set 1 Solutions

Total: 100 points

## Section 1.2. Problem 23:
The figure shows that $\cos(\alpha) = v_1 / \|v\|$ and $\sin(\alpha) = v_2 / \|v\|$. Similarly $\cos(\beta)$ is ______ and $\sin(\beta)$ is ______. The angle $\theta$ is $\beta - \alpha$. Substitute into the trigonometry formula $\cos(\alpha) \cos(\beta) + \sin(\beta) \sin(\alpha)$ for $\cos(\beta - \alpha)$ to find $\cos(\theta) = v \cdot w / \|v\| \|w\|$.

**Solution** (4 points)

First blank: $w_1 / \|w\|$. Second blank: $w_2 / \|w\|$. Substituting into the trigonometry formula yields


$$

\cos(\beta - \alpha) = (w_1 / \|w\|)(v_1 / \|v\|) + (w_2 / \|w\|)(v_2 / \|v\|) = v \cdot w / \|v\| \|w\|.

$$


## Section 1.2. Problem 28:
Can three vectors in the $xy$ plane have $u \cdot v < 0$ and $v \cdot w < 0$ and $u \cdot w < 0$?

**Solution** (12 points)

Yes. For instance take $u = (1, 0)$, $v = (-\frac{1}{2}, \frac{\sqrt{3}}{2})$, $w = (-\frac{1}{2}, -\frac{\sqrt{3}}{2})$. Notice $u \cdot v = v \cdot w = u \cdot w = -\frac{1}{2}$.

## Section 1.3. Problem 4:
Find a combination $x_1 w_1 + x_2 w_2 + x_3 w_3$ that gives the zero vector:


$$

w_1 = \begin{bmatrix} 1 \\ 2 \\ 3 \end{bmatrix}; \quad w_2 = \begin{bmatrix} 4 \\ 5 \\ 6 \end{bmatrix}; \quad w_3 = \begin{bmatrix} 7 \\ 8 \\ 9 \end{bmatrix}.

$$


Those vectors are (independent)(dependent). The three vectors lie in a ______. The matrix $W$ with those columns is *not invertible*.

**Solution** (4 points)

Observe $w_1 - 2w_2 + w_3 = 0$. The vectors are **dependent**. They lie in a **plane**.

## Section 1.3. Problem 13:
The very last words say that the 5 by 5 centered difference matrix *is not* invertible. Write down the 5 equations $Cx = b$. Find a

combination of left sides that gives zero. What combination of $b_1, b_2, b_3, b_4, b_5$ must be zero?

**Solution** (12 points)

The 5 by 5 centered difference matrix is


$$
 C = \begin{pmatrix}
0 & 1 & 0 & 0 & 0 \\
-1 & 0 & 1 & 0 & 0 \\
0 & -1 & 0 & 1 & 0 \\
0 & 0 & -1 & 0 & 1 \\
0 & 0 & 0 & -1 & 0
\end{pmatrix}. 
$$


The five equations $Cx = b$ are


$$
 x_2 = b_1, \ -x_1 + x_3 = b_2, \ -x_2 + x_4 = b_3, \ -x_3 + x_5 = b_4, \ -x_4 = b_5. 
$$


Observe that the sum of the first, third, and fifth equations is zero. Similarly, $b_1 + b_3 + b_5 = 0$.

**Section 2.1. Problem 29:** Start with the vector $u_0 = (1, 0)$. Multiply again and again by the same “Markov matrix” $A = \begin{bmatrix} .8 & .3 \\ .2 & .7 \end{bmatrix}$. The next three vectors are $u_1, u_2, u_3$:


$$
 u_1 = \begin{bmatrix} .8 & .3 \\ .2 & .7 \end{bmatrix} \begin{bmatrix} 1 \\ 0 \end{bmatrix} = \begin{bmatrix} .8 \\ .2 \end{bmatrix} \quad u_2 = Au_1 = \_\_\_\_\_\_ \quad u_3 = Au_2 = \_\_\_\_\_\_. 
$$


What property do you notice for all four vectors $u_0, u_1, u_2, u_3$.

**Solution** (4 points)

Computing, we get


$$
 u_2 = \begin{bmatrix} .7 \\ .3 \end{bmatrix} \quad u_3 = \begin{bmatrix} .65 \\ .35 \end{bmatrix}. 
$$


All four vectors have components that sum to one.

**Section 2.1. Problem 30:** Continue Problem 29 from $u_0 = (1, 0)$ to $u_7$, and also from $v_0 = (0, 1)$ to $v_7$. What do you notice about $u_7$ and $v_7$? Here are two MATLAB codes, with while and for. They plot $u_0$ to $u_7$ and $v_0$ to $v_7$.

The $u$'s and the $v$'s are approaching a steady state vector $s$. Guess that vector and check that $As = s$. If you start with $s$, then you stay with $s$.

**Solution** (12 points)

Here is the code entered into MATLAB.

![Graph 1](line.png)

In this graph, we see that the sequence $v_1, v_2, \ldots, v_7$ is approaching $(.6, .4)$.

![Graph 2](line.png)

From the graphs, we guess that $s = (.6, .4)$ is a steady state vector. We verify this with the computation


$$
 As = \begin{bmatrix} .8 & .3 \\ .2 & .7 \end{bmatrix} \begin{bmatrix} .6 \\ .4 \end{bmatrix} = \begin{bmatrix} .6 \\ .4 \end{bmatrix}. 
$$


---

**Section 2.2. Problem 20:** Three planes can fail to have an intersection point, even if no planes are parallel. The system is singular if row 3 of $A$ is a ________ of the first two rows. Find a third equation that can't be solved together with $x + y + z = 0$ and $x - 2y - z = 1$.

**Solution** (4 points)

The system is singular if row 3 of $A$ is a **linear combination** of the first two rows. There are many possible choices of a third equation that cannot be solved together with the ones given. An example is $2x + 5y + 4z = 1$. Note that the left hand side of the third equation is the three times the left hand side of the first minus the left hand side of the second. However, the right hand side does not satisfy this relation.

---

**Section 2.2. Problem 32:** Start with 100 equations $Ax = 0$ for 100 unknowns $x = (x_1, \ldots, x_{100})$. Suppose elimination reduces the 100th equation to $0 = 0$, so the system is "singular".

(a) Elimination takes linear combinations of the rows. So this singular system has the singular property: Some linear combination of the 100 **rows** is ________.

(b) Singular systems $Ax = 0$ have infinitely many solutions. This means that some linear combination of the 100 **columns** is ________.

(c) Invent a 100 by 100 singular matrix with no zero entries.

(d) For your matrix, describe in words the row picture and the column picture of $Ax = 0$. Not necessary to draw 100-dimensional space.

**Solution** (12 points)

(a) Zero. (b) Zero. (c) There are many possible answers. For instance, the matrix for which every row is (1 2 3 $\cdots$ 100). (d) The row picture is 100 copies of the hyperplane in 100-space defined by the equation


$$
 x_1 + 2x_2 + 3x_3 + \cdots + 100x_{100} = 0. 
$$


The column picture is the 100 vectors proportional to (1 1 1 $\cdots$ 1) of lengths 10, 20, $\ldots$, 1000.

## Section 2.3. Problem 22:
The entries of $A$ and $x$ are $a_{ij}$ and $x_j$. So the first component of $Ax$ is $\sum a_{1j} x_j = a_{11} x_1 + \cdots + a_{1n} x_n$. If $E_{21}$ subtracts row 1 from row 2, write a formula for
(a) the third component of $Ax$
(b) the (2, 1) entry of $E_{21} A$
(c) the (2, 1) entry of $E_{21} (E_{21} A)$
(d) the first component of $E_{21} Ax$.

**Solution** (4 points)
(a) $\sum a_{3j} x_j$
(b) $a_{21} - a_{11}$
(c) $a_{21} - 2a_{11}$
(d) $\sum a_{1j} x_j$

## Section 2.3. Problem 29:
Find the triangular matrix $E$ that reduces “Pascal’s matrix” to a smaller Pascal:

$$
 E \begin{bmatrix} 1 & 0 & 0 & 0 \\ 1 & 1 & 0 & 0 \\ 1 & 2 & 1 & 0 \\ 1 & 3 & 3 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 1 & 1 & 0 \\ 0 & 1 & 2 & 1 \end{bmatrix} 
$$


Which matrix $M$ (multiplying several $E$'s) reduces Pascal all the way to $I$?

**Solution** (12 points)

$$
 E = \begin{bmatrix} 1 & 0 & 0 & 0 \\ -1 & 1 & 0 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} 
$$


One can eliminate the second column with the matrix

$$
 \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} 
$$


and the third column with the matrix

$$
 \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} 
$$


Multiplying these together, we get

$$
 M = \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} \begin{bmatrix} 1 & 0 & 0 & 0 \\ -1 & 1 & 0 & 0 \\ 0 & -1 & 1 & 0 \\ 0 & 0 & -1 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 & 0 \\ -1 & 1 & 0 & 0 \\ 1 & -2 & 1 & 0 \\ -1 & 3 & -3 & 1 \end{bmatrix}. 
$$


Section 2.4. Problem 32: Suppose you solve $Ax = b$ for three special right sides $b$:

$$
 Ax_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \end{bmatrix}; \quad Ax_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \end{bmatrix}; \quad Ax_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}. 
$$

If the three solutions $x_1, x_2, x_3$ are the columns of a matrix $X$, what is $A$ times $X$?

**Solution** (4 points)
The matrix $AX$ has columns $Ax_1, Ax_2,$ and $Ax_3$. Therefore, $AX = I$.

Section 2.4. Problem 36: Suppose $A$ is $m$ by $n$, $B$ is $n$ by $p$, and $C$ is $p$ by $q$. Then the multiplication count for $(AB)C$ is $mnp + mpq$. The multiplication count from $A$ times $BC$ with $mnq + npq$ separate multiplications.
(a) If $A$ is 2 by 4, $B$ is 4 by 7, and $C$ is 7 by 10, do you prefer $(AB)C$ or $A(BC)$?
(b) With $N$-component vectors, would you choose $(u^Tv)w^T$ or $u^T(vw^T)$?
(c) Divide by $mnpq$ to show that $(AB)C$ is faster when $n^{-1} + q^{-1} < m^{-1} + p^{-1}$.

**Solution** (12 points)
(a) Note that $(AB)C$ has $2 \cdot 4 \cdot 7 + 2 \cdot 7 \cdot 10 = 196$ multiplications and $A(BC)$ has $2 \cdot 4 \cdot 10 + 4 \cdot 7 \cdot 10 = 360$. Hence, we prefer $(AB)C$.
(b) We prefer $(u^Tv)w^T$; it requires $2N$ multiplications. On the other hand, the multiplication count for $u^T(vw^T)$ is $2N^2$.
(c) Note $(AB)C$ is faster when $mnp + mpq < mnq + npq$. Dividing by $mnpq$, we get $q^{-1} + n^{-1} < p^{-1} + m^{-1}$.

Section 2.5. Problem 7: If $A$ has row 1 + row 2 = row 3, show that $A$ is not invertible:
(a) Explain why $Ax = (1, 0, 0)$ cannot have a solution.
(b) Which right sides $(b_1, b_2, b_3)$ might allow a solution to $Ax = b$?
(c) What happens to row 3 in elimination?

**Solution** (4 points)

(a) Suppose $A$ has row vectors $A_1$, $A_2$, $A_3$, and $x$ is a solution to $Ax = (1, 0, 0)$. Then $A_1 \cdot x = 1$, $A_2 \cdot x = 0$, and $A_3 \cdot x = 0$. But $A_1 + A_2 = A_3$ means that $A_1 \cdot x + A_2 \cdot x = A_3 \cdot x$ and $1 + 0 = 0$, a contradiction.

(b) If $Ax = (b_1, b_2, b_3)$, then $A_1 \cdot x = b_1$, $A_2 \cdot x = b_2$, $A_3 \cdot x = b_3$. Since $A_1 + A_2 = A_3$, we deduce $b_1 + b_2 = b_3$.

(c) In the eliminated matrix, the third row will be zero.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

