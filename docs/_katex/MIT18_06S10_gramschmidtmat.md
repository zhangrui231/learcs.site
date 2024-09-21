# Gram-Schmidt in 9 Lines of MATLAB

The Gram-Schmidt algorithm starts with $n$ independent vectors $a_1, \ldots, a_n$ (the columns of $A$). It produces $n$ orthonormal vectors $q_1, \ldots, q_n$ (the columns of $Q$). To find $q_j$, start with $a_j$ and subtract off its projections onto the previous $q$'s—and then divide by the length of that vector $v$ to produce a unit vector.

The inner products $q_i^\top a_j$ go into a square matrix $R$ that satisfies $A = QR$. This $R$ is upper triangular, because $q_i^\top a_j = 0$ when $i$ is larger than $j$ (later $q$'s are orthogonal to earlier $a$'s, that is the point of the algorithm).

Here is a 9-line MATLAB code to build $Q$ and $R$ from $A$. Start with $[m, n] = \text{size}(A); Q = \text{zeros}(m, n); R = \text{zeros}(n, n);$ to get the shapes correct.

EXAMPLE    A is 2 by 2. The columns of Q, normalized by $\frac{1}{5}$, are $q_1$ and $q_2$:


$$
 A = \begin{bmatrix} 4 & -2 \\ 3 & 1 \end{bmatrix} = \frac{1}{5} \begin{bmatrix} 4 & -3 \\ 3 & 4 \end{bmatrix} \begin{bmatrix} 5 & -1 \\ 0 & 2 \end{bmatrix} = QR. 
$$


Starting with the columns $a_1$ and $a_2$ of A, Gram-Schmidt normalizes $a_1$ to $q_1$ and subtracts from $a_2$ its projection in the direction of $q_1$. Here are the steps to the $q$'s:


$$
 a_1 = \begin{bmatrix} 4 \\ 3 \end{bmatrix} \quad q_1 = \frac{1}{5} \begin{bmatrix} 4 \\ 3 \end{bmatrix} \quad a_2 = \begin{bmatrix} -2 \\ 1 \end{bmatrix} \quad v = a_2 - (q_1^T a_2) q_1 = \frac{1}{5} \begin{bmatrix} -6 \\ 8 \end{bmatrix} \quad q_2 = \frac{1}{5} \begin{bmatrix} -3 \\ 4 \end{bmatrix} 
$$


Along the way, we divided by $\|a_1\| = 5$ and $\|v\| = 2$. Then 5 and 2 go on the diagonal of $R$, and $q_1^T a_2 = -1$ is $R(1,2)$. This figure shows every vector:


$$

\begin{tikzpicture}
\draw[->, thick] (0,0) -- (4,3) node[right] {$a_1 = \begin{bmatrix} 4 \\ 3 \end{bmatrix}$};
\draw[->, thick] (0,0) -- (-2,1) node[left] {$a_2 = \begin{bmatrix} -2 \\ 1 \end{bmatrix}$};
\draw[->, thick] (0,0) -- (0.8,0.6) node[above right] {$q_1 = \frac{1}{5} \begin{bmatrix} 4 \\ 3 \end{bmatrix}$};
\draw[->, thick] (0,0) -- (-0.6,0.8) node[above left] {$q_2 = \frac{1}{5} \begin{bmatrix} -3 \\ 4 \end{bmatrix}$};
\draw[->, dashed] (0,0) -- (1.2,0.9) node[below right] {$(a_2^T q_1) q_1$};
\draw[->, thick] (0,0) -- (1.2,0.9) node[above right] {$\frac{1}{5} \begin{bmatrix} -6 \\ 8 \end{bmatrix} = 2q_2$};
\end{tikzpicture}

$$


MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

