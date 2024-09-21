# Starting with Two Matrices

Gilbert Strang, Massachusetts Institute of Technology

## 1. Introduction

The first sections of this paper represent an imaginary lecture, very near the beginning of a linear algebra course. We chose two matrices $A$ and $C$, on the principle that examples are amazingly powerful. The reader is requested to be exceptionally patient, suspending all prior experience—and suspending also any hunger for precision and proof. Please allow a partial understanding to be established first.

I believe there is value in naming these matrices. The words “difference matrix” and “sum matrix” tell how they act. It is the action of matrices, when we form $Ax$ and $Cx$ and $Sb$, that makes linear algebra such a dynamic and beautiful subject.

## 2. A first example

In the future I will begin my linear algebra class with these three vectors $a_1, a_2, a_3$:


$$
 a_1 = \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} \quad a_2 = \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix} \quad a_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix}. 
$$


The fundamental operation on vectors is to take linear combinations. Multiply these vectors $a_1, a_2, a_3$ by numbers $x_1, x_2, x_3$ and add. This produces the linear combination $x_1a_1 + x_2a_2 + x_3a_3 = b$:


$$
 x_1 \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} + x_2 \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix} + x_3 \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix}. 
$$


(I am omitting words that would be spoken while writing.) A key step is to rewrite that vector equation as a matrix equation $Ax = b$:

Put $a_1, a_2, a_3$ into the columns of a matrix and put $x_1, x_2, x_3$ into a vector.


$$
 \text{Matrix } A = \begin{bmatrix} a_1 & a_2 & a_3 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{bmatrix} \quad \text{Vector } x = \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} 
$$


Key point: $A$ times $x$ is exactly $x_1a_1 + x_2a_2 + x_3a_3$, a combination of the columns. This definition of $Ax$ brings a crucial change in viewpoint. At first, the $x$'s were multiplying the $a$'s. Now, the matrix $A$ is multiplying the vector $x$. The matrix acts on $x$ to produce a vector $b$:


$$
 Ax = b \quad Ax = \begin{bmatrix} 1 & 0 & 0 \\ -1 & 1 & 0 \\ 0 & -1 & 1 \end{bmatrix} \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix}. 
$$


When the $x$'s are known, the matrix $A$ takes their differences. We could imagine an unwritten $x_0 = 0$, and put in $x_1 - x_0$ to complete the pattern. $A$ is a difference matrix.

AMS Classification 15A09

Note 1 Multiplying a matrix times a vector is the crucial step. If students have seen $Ax$ before, it was row times column. In examples they are free to compute that way (as I do). “Dot product with rows” gives the same answer as “combination of columns”. When the vector $x_1 a_1 + x_2 a_2 + x_3 a_3$ is computed one component at a time, we are using the rows.

The example illustrates how the same $Ax$ arrives both ways. Differences like $x_2 - x_1$ come from row times column. Combining the columns of $A$ is probably new to the class: good. The relation of the rows to the columns is truly at the heart of linear algebra.

Note 2 (also for teachers) Three basic questions in linear algebra show why the column description of $Ax$ is so essential:

- When does a linear system $Ax = b$ have a solution?

  $Ax = b$ asks us to express $b$ as a combination of the columns of $A$. So there is a solution exactly when $b$ is in the column space of $A$.

- When are vectors $a_1, \ldots, a_n$ linearly independent?

  The equation $Ax = 0$ must have only the zero solution. The nullspace of $A$ must contain only the vector $x = 0$.

- How do you express $b$ as a combination of basis vectors?

  Put those basis vectors into the columns of $A$. Solve $Ax = b$.

Note 3 The reader may object that we have only answered questions by introducing new words. My response is, those ideas of column space and nullspace and basis are crucial definitions in this subject. The student moves up to a higher level—a subspace level—by understanding these words. This subject is constantly putting vectors into the columns of a matrix, then working with that matrix.

I don’t accept that inevitably “The fog rolls in” when linear independence is defined. The concrete way to dependence vs. independence is through $Ax = 0$: many solutions or only the solution $x = 0$. This comes immediately in returning to the example.

One more step gives a new viewpoint of $Ax = b$. Suppose the numbers $x_1, x_2, x_3$ are not known but $b_1, b_2, b_3$ are known. Then $Ax = b$ becomes an equation for $x$, not an equation for $b$. We start with the differences (the $b$’s) and ask which $x$’s have those differences. Linear algebra is always interested first in $b = 0$:


$$
 Ax = 0 \qquad Ax = \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \\ 0 \end{bmatrix}. \qquad \text{Then} \qquad x_1 = 0 \qquad x_2 = 0 \qquad x_3 = 0 
$$


For this matrix, the only solution to $Ax = 0$ is $x = 0$. That may seem automatic but it’s not. A key word in linear algebra (we are foreshadowing its importance) describes this situation. These column vectors $a_1, a_2, a_3$ are independent. Their combination $x_1 a_1 + x_2 a_2 + x_3 a_3$ is $Ax = 0$ only when all the $x$’s are zero.

Move now to nonzero differences $b_1 = 1$, $b_2 = 3$, $b_3 = 5$. Is there a choice of $x_1$, $x_2$, $x_3$ that produces those differences 1, 3, 5? Solving the three equations in forward order, the $x$'s are 1, 4, 9:


$$
 A x = b \quad \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = \begin{bmatrix} 1 \\ 3 \\ 5 \end{bmatrix} \quad \text{leads to} \quad \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} 1 \\ 4 \\ 9 \end{bmatrix}. \tag{4} 
$$


This case $x = 1, 4, 9$ has special interest. When the $b$'s are the odd numbers in order, the $x$'s are the perfect squares in order. But linear algebra is not number theory—forget that special case! For any $b_1$, $b_2$, $b_3$ there is a neat formula for $x_1$, $x_2$, $x_3$:


$$
 \begin{bmatrix} x_1 \\ x_2 - x_1 \\ x_3 - x_2 \end{bmatrix} = \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix} \quad \text{leads to} \quad \begin{bmatrix} x_1 \\ x_2 \\ x_3 \end{bmatrix} = \begin{bmatrix} b_1 \\ b_1 + b_2 \\ b_1 + b_2 + b_3 \end{bmatrix}. \tag{5} 
$$


This general solution includes the examples with $b = 0, 0, 0$ (when $x = 0, 0, 0$) and $b = 1, 3, 5$ (when $x = 1, 4, 9$). One more insight will complete the example.

We started with a linear combination of $a_1$, $a_2$, $a_3$ to get $b$. Now $b$ is given and equation (5) goes back to find $x$. Write that solution with three new vectors whose combination gives $x$:


$$
 x = b_1 \begin{bmatrix} 1 \\ 1 \\ 1 \end{bmatrix} + b_2 \begin{bmatrix} 0 \\ 1 \\ 1 \end{bmatrix} + b_3 \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 1 & 0 & 0 \\ 1 & 1 & 0 \\ 1 & 1 & 1 \end{bmatrix} \begin{bmatrix} b_1 \\ b_2 \\ b_3 \end{bmatrix} = S b. \tag{6} 
$$


This is beautiful, to see a sum matrix $S$ in the formula for $x$. The equation $A x = b$ is solved by $x = S b$. The matrix $S$ is the “inverse” of the matrix $A$. The difference matrix is inverted by the sum matrix. Where $A$ took differences of the $x$'s, the new matrix $S$ takes sums of the $b$'s.

The linear algebra symbol for the inverse matrix is $A^{-1}$ (not $1/A$). Thus $S = A^{-1}$ finds $x$ from $b$. This example shows how linear algebra goes in parallel with calculus. Sums are the inverse of differences, and integration is the inverse of differentiation:


$$
 S = A^{-1} \quad A x = \frac{d x}{d t} = b(t) \quad \text{is solved by} \quad x(t) = S b = \int_0^t b. \tag{7} 
$$


Note 4 The student who notices that the integral starts at $x(0) = 0$, and connects this to the earlier suggestion that $x_0 = 0$, is all too likely to become a mathematician.

3. The second example. This example begins with almost the same three vectors—only one component is changed:


$$
 c_1 = \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} \quad c_2 = \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix} \quad c_3 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix}. 
$$


The combination $x_1c_1 + x_2c_2 + x_3c_3$ is again a matrix multiplication $Cx$:


$$

Cx = \begin{bmatrix}
c_1 & c_2 & c_3
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
1 & 0 & -1 \\
-1 & 1 & 0 \\
0 & -1 & 1
\end{bmatrix}
\begin{bmatrix}
x_1 \\
x_2 \\
x_3
\end{bmatrix}
=
\begin{bmatrix}
x_1 - x_3 \\
x_2 - x_1 \\
x_3 - x_2
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\
b_2 \\
b_3
\end{bmatrix}.

$$


With the new vector in the third column, $C$ is a “cyclic” difference matrix. Instead of $x_1 - 0$ we have $x_1 - x_3$. The differences of $x$’s “wrap around” to give the new $b$’s. The inverse direction begins with the $b$’s and asks for the $x$’s.

We always start with $0, 0, 0$ as the $b$’s. You will see the change: nonzero $x$’s can have zero differences. As long as the $x$’s are equal, all their differences will be zero:


$$

Cx = 0 \quad
\begin{bmatrix}
x_1 - x_3 \\
x_2 - x_1 \\
x_3 - x_2
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
\quad \text{is solved by} \quad
x =
\begin{bmatrix}
x_1 \\
x_1 \\
x_1
\end{bmatrix}
=
x_1
\begin{bmatrix}
1 \\
1 \\
1
\end{bmatrix}.

$$


The zero solution $x = 0$ is included (when $x_1 = 0$). But $1, 1, 1$ and $2, 2, 2$ and $\pi, \pi, \pi$ are also solutions—all these constant vectors have zero differences and solve $Cx = 0$. The columns $c_1, c_2, c_3$ are **dependent** and not independent.

In the row-column description of $Ax$, we have found a vector $x = (1, 1, 1)$ that is perpendicular to every row of $A$. The columns combine to give $Ax = 0$ when $x$ is perpendicular to every row.

This misfortune produces a new difficulty, when we try to solve $Cx = b$:


$$

\begin{bmatrix}
x_1 - x_3 \\
x_2 - x_1 \\
x_3 - x_2
\end{bmatrix}
=
\begin{bmatrix}
b_1 \\
b_2 \\
b_3
\end{bmatrix}
\quad \text{cannot be solved unless} \quad
b_1 + b_2 + b_3 = 0.

$$


The three left sides add to zero, because $x_3$ is now cancelled by $-x_3$. So the $b$’s on the right side must add to zero. There is no solution like equation (5) for every $b_1, b_2, b_3$. There is no inverse matrix like $S$ to give $x = Sb$. The cyclic matrix $C$ is **not invertible**.

### 4. Summary

Both examples began by putting vectors into the columns of a matrix. Combinations of the columns (with multipliers $x$) became $Ax$ and $Cx$. Difference matrices $A$ and $C$ (non-cyclic and cyclic) multiplied $x$—that was an important switch in thinking. The details of those column vectors made $Ax = b$ solvable for all $b$, while $Cx = b$ is not always solvable. The words that express the contrast between $A$ and $C$ are a crucial part of the language of linear algebra:

- The vectors $a_1, a_2, a_3$ are independent.
- The nullspace for $Ax = 0$ contains only $x = 0$.
- The equation $Ax = b$ is solved by $x = Sb$.
- The square matrix $A$ has the inverse matrix $S = A^{-1}$.

- The vectors $c_1, c_2, c_3$ are dependent.
- The nullspace for $Cx = 0$ contains every “constant vector” $x_1, x_1, x_1$.
- The equation $Cx = b$ cannot be solved unless $b_1 + b_2 + b_3 = 0$.
- $C$ has no inverse matrix.

A picture of the three vectors, the $a$'s on the left and the $c$'s on the right, explains the difference in a useful way. On the left, the three directions are *independent*. The arrows to $a_1, a_2, a_3$ don't lie in a plane. The plane through the points at the ends of the arrows will not go through $(0, 0, 0)$. The combinations $x_1a_1 + x_2a_2 + x_3a_3$ produce every three-dimensional vector $b$. The good multipliers $x_1, x_2, x_3$ are given by $x = Sb$.


$$

\begin{array}{ccc}
a_1 = \begin{bmatrix} 1 \\ -1 \\ 0 \end{bmatrix} & a_2 = \begin{bmatrix} 0 \\ 1 \\ -1 \end{bmatrix} & a_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \end{bmatrix} \\
\begin{tikzpicture}[scale=0.5]
\draw[->, thick] (0,0) -- (1,0) node[right] {$1$};
\draw[->, thick] (0,0) -- (0,1) node[above] {$2$};
\draw[->, thick] (0,0) -- (0,2) node[above] {$3$};
\draw[->, thick] (0,0) -- (1,1) node[right] {$a_1$};
\draw[->, thick] (0,0) -- (-1,1) node[left] {$a_2$};
\draw[->, thick] (0,0) -- (0,3) node[above] {$a_3$};
\end{tikzpicture} & & \begin{tikzpicture}[scale=0.5]
\draw[->, thick] (0,0) -- (1,0) node[right] {$1$};
\draw[->, thick] (0,0) -- (0,1) node[above] {$2$};
\draw[->, thick] (0,0) -- (0,2) node[above] {$3$};
\draw[->, thick] (0,0) -- (1,1) node[right] {$c_1$};
\draw[->, thick] (0,0) -- (-1,1) node[left] {$c_2$};
\draw[->, thick] (0,0) -- (0,3) node[above] {$c_3$};
\end{tikzpicture} \\
& c_3 = \begin{bmatrix} -1 \\ 0 \\ 1 \end{bmatrix} &
\end{array}

$$


On the right, the three arrows do lie in a plane. The vectors $c_1, c_2, c_3$ are *dependent*. Each vector has components adding to $1 - 1 = 0$, so all combinations of these vectors will have $b_1 + b_2 + b_3 = 0$ (this is the equation for the plane). The differences $x_1 - x_3, x_2 - x_1, x_3 - x_2$ can never be $1, 1, 1$ because those differences add to zero.

**Note 5** Almost unconsciously, these two examples illustrate one way of teaching a new subject. The ideas and the words are used before they are fully defined. I believe we learn our own language this way—by hearing words, trying to use them, making mistakes, and eventually getting it right. A proper definition is certainly needed, it is not at all an afterthought. But maybe it is an afterword.

**Note 6** May I close these lecture ideas by returning to Note 1: $Ax$ is a combination of the columns of $A$. Extend that matrix-vector multiplication to *matrix-matrix*: If the columns of $B$ are $b_1, b_2, b_3$ then the columns of $AB$ are $Ab_1, Ab_2, Ab_3$.

*The crucial fact about matrix multiplication is $(AB)C = A(BC)$.* By the previous sentence we may prove this fact by considering one column vector $c$.

**Left side** $(AB)c = [Ab_1 \ Ab_2 \ Ab_3] \begin{bmatrix} c_1 \\ c_2 \\ c_3 \end{bmatrix} = c_1Ab_1 + c_2Ab_2 + c_3Ab_3$

**Right side** $A(BC) = A(c_1b_1 + c_2b_2 + c_3b_3)$.

In this way, $(AB)C = A(BC)$ brings out the even more fundamental fact that matrix multiplication is linear: (10) = (11).

Expressed differently, the multiplication $AB$ has been defined to produce the composition rule: $AB$ acting on $c$ equals $A$ acting on $Bc$. Columns are natural to work with.

Time after time, that highlighted law $(AB)C = A(BC)$ is the heart of short proofs. I will admit that these “proofs by parenthesis” are almost the only ones I present in class.

Here are examples at three key points in the course. (I don’t always use the ominous word *proof* in the video lectures on ocw.mit.edu, but the reader will see through this loss of courage.)

- If $AB = I$ and $BC = I$ then $C = A$.

  
$$

  \text{Right inverse} = \text{Left inverse} \qquad C = (AB)C = A(BC) = A
  
$$


- If $y^\top A = 0$ then $y$ is perpendicular to every $Ax$.

  
$$

  \text{Nullspace of } A^\top \perp \text{column space of } A \qquad y^\top (Ax) = (y^\top A)x = 0
  
$$


- If an invertible $B$ contains eigenvectors $b_1, b_2, b_3$ of $A$, then $B^{-1}AB$ is diagonal.

  
$$

  \text{Multiply } AB \text{ by columns} \qquad A[b_1 \ b_2 \ b_3] = [Ab_1 \ Ab_2 \ Ab_3] = [\lambda_1 b_1 \ \lambda_2 b_2 \ \lambda_3 b_3]
  
$$


  Then separate this $AB$ into $B$ times the eigenvalue matrix $\Lambda$:

  
$$

  AB = [\lambda_1 b_1 \ \lambda_2 b_2 \ \lambda_3 b_3] = [b_1 \ b_2 \ b_3] \begin{bmatrix} \lambda_1 & & \\ & \lambda_2 & \\ & & \lambda_3 \end{bmatrix} \quad \text{(again by columns!)}
  
$$


  
$$

  AB = B\Lambda \text{ gives the diagonalization } B^{-1}AB = \Lambda. \text{ Equivalently it produces the factorization } A = B\Lambda B^{-1}. \text{ Parentheses are not necessary in any of these triple factorizations:}
  
$$


  
$$

  \text{Spectral theorem for a symmetric matrix} \qquad A = Q\Lambda Q^\top
  
$$


  
$$

  \text{Elimination on a symmetric matrix} \qquad A = LDL^\top
  
$$


  
$$

  \text{Singular Value Decomposition of any matrix} \qquad A = U\Sigma V^\top
  
$$


  The matrices $Q, U, V$ have orthonormal columns—eigenvectors in $Q$, singular vectors in $U$ and $V$. Those columns are the perfect bases for the four fundamental subspaces. I think of the SVD as the ultimate goal, long after this early lecture...

## References

[1] G. Strang, Video lectures on web.mit.edu/18.06 and on ocw.mit.edu.

