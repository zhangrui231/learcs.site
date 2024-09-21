18.06 Quiz 1
March 1, 2010
Professor Strang

Your PRINTED name is: _________________________________ 1.
Your recitation number or instructor is _________________________________ 2.
3.
4.

1. Forward elimination changes $A\mathbf{x} = \mathbf{b}$ to a row reduced $R\mathbf{x} = \mathbf{d}$: the complete solution is


$$

\mathbf{x} = \begin{bmatrix} 4 \\ 0 \\ 0 \end{bmatrix} + \mathbf{c_1} \begin{bmatrix} 2 \\ 1 \\ 0 \end{bmatrix} + \mathbf{c_2} \begin{bmatrix} 5 \\ 0 \\ 1 \end{bmatrix}

$$


(a) (14 points) What is the 3 by 3 reduced row echelon matrix $R$ and what is $\mathbf{d}$?

Solution: First, since $R$ is in reduced row echelon form, we must have


$$

\mathbf{d} = \begin{bmatrix} 4 & 0 & 0 \end{bmatrix}^T

$$


The other two vectors provide special solutions for $R$, showing that $R$ has rank 1: again, since it is in reduced row echelon form, the bottom two rows must be all 0, and the top row is $\begin{bmatrix} 1 & -2 & -5 \end{bmatrix}^T$, i.e. $R = \begin{bmatrix} 1 & -2 & -5 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{bmatrix}$.

(b) (10 points) If the process of elimination subtracted 3 times row 1 from row 2 and then 5 times row 1 from row 3, what matrix connects $R$ and $\mathbf{d}$ to the original $A$ and $\mathbf{b}$? Use this matrix to find $A$ and $\mathbf{b}$.

Solution: The matrix connecting $R$ and $\mathbf{d}$ to the original $A$ and $\mathbf{b}$ is


$$

E = E_{31}E_{21} = \begin{bmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ -5 & 0 & 1 \end{bmatrix} \cdot \begin{bmatrix} 1 & 0 & 0 \\ -3 & 1 & 0 \\ 0 & 0 & 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ -3 & 1 & 0 \\ -5 & 0 & 1 \end{bmatrix}

$$


That is, $R = EA$ and $E\mathbf{b} = \mathbf{d}$. Thus, $A = E^{-1}R$ and $\mathbf{b} = E^{-1}\mathbf{d}$, giving


$$

A = \begin{bmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
5 & 0 & 1
\end{bmatrix} \cdot \begin{bmatrix}
1 & -2 & -5 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix} = \boxed{\begin{bmatrix}
1 & -2 & -5 \\
3 & -6 & -15 \\
5 & -10 & -25
\end{bmatrix}}

$$



$$

\mathbf{b} = \begin{bmatrix}
1 & 0 & 0 \\
3 & 1 & 0 \\
5 & 0 & 1
\end{bmatrix} \cdot \begin{bmatrix}
4 \\
0 \\
0
\end{bmatrix} = \boxed{\begin{bmatrix}
4 \\
12 \\
20
\end{bmatrix}}

$$


2. Suppose $A$ is the matrix


$$

A = \begin{bmatrix}
0 & 1 & 2 & 2 \\
0 & 3 & 8 & 7 \\
0 & 0 & 4 & 2
\end{bmatrix}.

$$


(a) (16 points) Find all special solutions to $A\mathbf{x} = \mathbf{0}$ and describe in words the whole nullspace of $A$.

Solution: First, by row reduction


$$

\begin{bmatrix}
0 & 1 & 2 & 2 \\
0 & 3 & 8 & 7 \\
0 & 0 & 4 & 2
\end{bmatrix} \to \begin{bmatrix}
0 & 1 & 2 & 2 \\
0 & 0 & 2 & 1 \\
0 & 0 & 4 & 2
\end{bmatrix} \to \begin{bmatrix}
0 & 1 & 0 & 1 \\
0 & 0 & 2 & 1 \\
0 & 0 & 0 & 0
\end{bmatrix} \to \begin{bmatrix}
0 & 1 & 0 & 1 \\
0 & 0 & 1 & \frac{1}{2} \\
0 & 0 & 0 & 0
\end{bmatrix}

$$


so the special solutions are


$$

s_1 = \boxed{\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix}}, s_2 = \boxed{\begin{bmatrix}
0 \\
-1 \\
-\frac{1}{2} \\
1
\end{bmatrix}}

$$


Thus, $N(A)$ is a plane in $\mathbb{R}^4$ given by all linear combinations of the special solutions.

(b) (10 points) Describe the column space of this particular matrix $A$. "All combinations of the four columns" is not a sufficient answer.

Solution: $C(A)$ is a plane in $\mathbb{R}^3$ given by all combinations of the pivot columns, namely


$$

c_1 \begin{bmatrix}
1 \\
3 \\
0
\end{bmatrix} + c_2 \begin{bmatrix}
2 \\
8 \\
4
\end{bmatrix}

$$


(c) (10 points) What is the reduced row echelon form $R^* = \text{rref}(B)$ when $B$ is the 6 by 8 block matrix

$$
 B = \begin{bmatrix} A & A \\ A & A \end{bmatrix} \text{ using the same } A? 
$$


Solution: Note that $B$ immediately reduces to

$$
 B = \begin{bmatrix} A & A \\ 0 & 0 \end{bmatrix} 
$$


We reduced $A$ above: the row reduced echelon form of of $B$ is thus

$$
 B = \begin{bmatrix} \text{rref}(A) & \text{rref}(A) \\ 0 & 0 \end{bmatrix}, \text{rref}(A) = \begin{bmatrix} 0 & 1 & 0 & 1 \\ 0 & 0 & 1 & \frac{1}{2} \\ 0 & 0 & 0 & 0 \end{bmatrix} 
$$


3. (16 points) Circle the words that correctly complete the following sentence:

(a) Suppose a 3 by 5 matrix $A$ has rank $r = 3$. Then the equation $Ax = b$
( always / sometimes but not always )
has ( a unique solution / many solutions / no solution ).

Solution: the equation $Ax = b$ always has many solutions.

(b) What is the column space of $A$? Describe the nullspace of $A$.

Solution: The column space is a 3-dimensional space inside a 3-dimensional space, i.e. it contains all the vectors, and the nullspace has dimension $5 - 3 = 2 > 0$ inside $\mathbb{R}^5$.

4. Suppose that $A$ is the matrix

$$
 A = \begin{bmatrix} 2 & 1 \\ 6 & 5 \\ 2 & 4 \end{bmatrix}. 
$$


(a) (10 points) Explain in words how knowing all solutions to $A\mathbf{x} = \mathbf{b}$ decides if a given vector $\mathbf{b}$ is in the column space of $A$.

Solution: The column space of $A$ contains all linear combinations of the columns of $A$, which are precisely vectors of the form $A\mathbf{x}$ for an arbitrary vector $\mathbf{x}$. Thus, $A\mathbf{x} = \mathbf{b}$ has a solution if and only if $\mathbf{b}$ is in the column space of $A$.

(b) (14 points) Is the vector $\mathbf{b} = \begin{bmatrix} 8 \\ 28 \\ 14 \end{bmatrix}$ in the column space of $A$?

Solution: Yes. Reducing the matrix combining $A$ and $\mathbf{b}$ gives

$$
 \begin{bmatrix} 2 & 1 & 8 \\ 6 & 5 & 28 \\ 2 & 4 & 14 \end{bmatrix} \rightarrow \begin{bmatrix} 2 & 1 & 8 \\ 0 & 2 & 4 \\ 0 & 3 & 6 \end{bmatrix} \rightarrow \begin{bmatrix} 2 & 1 & 8 \\ 0 & 2 & 4 \\ 0 & 0 & 0 \end{bmatrix} 
$$


Thus, $\mathbf{x} = \begin{bmatrix} 3 \\ 2 \end{bmatrix}$ is a solution to $A\mathbf{x} = \mathbf{b}$, and $\mathbf{b}$ is in the column space of $A$.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

# 18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

