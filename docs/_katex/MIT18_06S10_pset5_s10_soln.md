# 18.06 Problem Set 5 Solution

Total: points

## Section 4.1. Problem 7

Every system with no solution is like the one in problem 6. There are numbers $y_1, \ldots, y_m$ that multiply the $m$ equations so they add up to $0 = 1$. This is called Fredholm's Alternative:

Exactly one of these problems has a solution: $A\mathbf{x} = \mathbf{b}$ OR $A^T\mathbf{y} = 0$ with $\mathbf{y}^T\mathbf{b} = 1$.

If $\mathbf{b}$ is not in the column space of $A$ it is not orthogonal to the nullspace of $A^T$. Multiply the equations $x_1 - x_2 = 1$ and $x_2 - x_3 = 1$ and $x_1 - x_3 = 1$ by numbers $y_1, y_2, y_3$ chosen so that the equations add up to $0 = 1$.

**Solution** (4 points) Let $y_1 = 1$, $y_2 = 1$ and $y_3 = -1$. Then the left-hand side of the sum of the equations is


$$
 (x_1 - x_2) + (x_2 - x_3) - (x_1 - x_3) = x_1 - x_2 + x_2 - x_3 + x_3 - x_1 = 0 
$$


and the right-hand side is


$$
 1 + 1 - 1 = 1. 
$$


## Problem 9

If $A^TA\mathbf{x} = 0$ then $A\mathbf{x} = 0$. Reason: $A\mathbf{x}$ is in the nullspace of $A^T$ and also in the ________ of $A$ and those spaces are ________. Conclusion: $A^TA$ has the same nullspace as $A$. This key fact is repeated in the next section.

**Solution** (4 points) $A\mathbf{x}$ is in the nullspace of $A^T$ and also in the column space of $A$ and those spaces are orthogonal.

## Problem 31

The command `N=null(A)` will produce a basis for the nullspace of $A$. Then the command `B=null(N')` will produce a basis for the ________ of $A$.

**Solution** (12 points) The matrix $N$ will have as its columns a basis for the nullspace of $A$. Thus if a vector is in the nullspace of $N^T$ it must have dot product 0 with every vector in the basis of $N(A)$, thus it must be in the row space of $A$. Thus the command `null(N')` will produce a basis for the row space of $A$.



ans =

1.0e-13 *

Columns 1 through 6

0     0     0     0     0     0
0     0     0     0     0     0
0     0     0     0     0     0
0     0     0     0     0     0
0     0     0     0     0     0
0     0     0     0     0     0

Columns 6 through 12

-0.0389    0.0533   -0.0344   -0.0888   -0.2420   -0.2043
 0.0047   -0.0022    0.0044    0.0089    0.0289    0.0200
-0.1710    0.1843   -0.0999   -0.3020   -0.7816   -0.6395
 0.0153   -0.0089    0.0092    0.0205    0.0444    0.0333
 0.1155   -0.1377    0.0688    0.2132    0.5596    0.4796
 0.1488   -0.1643    0.0888    0.2709    0.6928    0.5684

Note that if $B$ has as its columns a basis for the row space of $A$ then the rows of $B^T$ will form a basis for the row space of $A$. Since the row reduced forms of $A$ and $B^T$ agree (up to 13 decimal places, but the numbers up there are just rounding error) their rows must span the same space, so the columns of $B$ are indeed a basis for the row space of $A$.

**Problem 32.** Suppose I give you four nonzero vectors $\mathbf{r}, \mathbf{n}, \mathbf{c}, \mathbf{l}$ in $\mathbb{R}^2$.

a. What are the conditions for those to be bases for the four fundamental subspaces $C(A^T), N(A), C(A), N(A^T)$ of a $2 \times 2$ matrix?

b. What is one possible matrix $A$?

**Solution** (12 points)

a. In order for $\mathbf{r}$ and $\mathbf{n}$ to be bases for $N(A)$ and $C(A^T)$ we must have $\mathbf{r} \cdot \mathbf{n} = 0$, as the row space and null space must be orthogonal. Similarly, in order

for $\mathbf{c}$ and $\mathbf{l}$ to form bases for $C(A)$ and $N(A^T)$ we need $\mathbf{c} \cdot \mathbf{l} = 0$, as the column space and the left nullspace are orthogonal. In addition, we need $\dim N(A) + \dim C(A^T) = n$ and $\dim N(A^T) + \dim C(A) = m$; however, in this case $n = m = 1$, and as the four vectors we are given are nonzero both of these equations reduce to $1 + 1 = 2$, which is automatically satisfied.

b. One possible such matrix is $A = \mathbf{c} \mathbf{r}^T$. Note that each column of $A$ will be a multiple of $\mathbf{c}$, so it will have the right column space. On the other hand, each row of $A$ will be a multiple of $\mathbf{r}$, so $A$ will have the right row space. The nullspaces don’t need to be checked, as any matrix with the correct row and column space will have the right nullspaces (as the nullspaces are just the orthogonal complements of the row and column spaces).

---

**Problem 33.** Suppose I give you four nonzero vectors $\mathbf{r}_1, \mathbf{r}_2, \mathbf{n}_1, \mathbf{n}_2, \mathbf{c}_1, \mathbf{c}_2, \mathbf{l}_1, \mathbf{l}_2$ in $\mathbb{R}^2$.

a. What are the conditions for those to be bases for the four fundamental subspaces $C(A^T), N(A), C(A), N(A^T)$ of a $2 \times 2$ matrix?

b. What is one possible matrix $A$?

---

**Solution** (12 points)

a. Firstly, by the same kind of dimension considerations as before we need the four sets $\{\mathbf{r}_1, \mathbf{r}_2\}$, $\{\mathbf{n}_1, \mathbf{n}_2\}$, $\{\mathbf{c}_1, \mathbf{c}_2\}$ and $\{\mathbf{l}_1, \mathbf{l}_2\}$ to each contain linearly independent vectors. (For example, if $\mathbf{r}_1$ and $\mathbf{r}_2$ are linearly dependent the $\dim C(A^T) = 1$ not 2, and then $\dim C(A^T) + \dim N(A) < 4$ which can’t happen.)

Secondly, for $i = 1, 2$ and $j = 1, 2$ we need $\mathbf{r}_i \cdot \mathbf{n}_j = 0$ and $\mathbf{c}_i \cdot \mathbf{l}_j = 0$. This will imply that the specified row space and nullspace are orthogonal, and that the specified column space and left nullspace are also orthogonal. (When we are given subspaces in terms of bases it suffices to check orthogonality on the basis.)

b. One possible such matrix is

$$
 A = \begin{pmatrix} \mathbf{c}_1 & \mathbf{c}_2 \end{pmatrix} \begin{pmatrix} \mathbf{r}_1 & \mathbf{r}_2 \end{pmatrix}^T. 
$$


Note that every column of $A$ is a linear combination of $\mathbf{c}_1$ and $\mathbf{c}_2$, so $C(A)$ is at least a subspace of the desired column space. On the other hand, as $\mathbf{r}_1$ and

r_2 are linearly independent we know that $\begin{pmatrix} r_1 & r_2 \end{pmatrix}^T$ has full row rank, so $A$ will have rank 2 and thus $A$ has the right column space.

On the other hand,

$$
 A^T = \begin{pmatrix} r_1 & r_2 \end{pmatrix} \begin{pmatrix} c_1 & c_2 \end{pmatrix}^T 
$$

so $C(A^T)$ is spanned by $r_1$ and $r_2$, as desired. Thus $A$ has the right row space and column space, and thus will have the right nullspace and left nullspace.

---

**Section 4.2. Problem 13.** Suppose $A$ is the $4 \times 4$ identity matrix with its last column removed. $A$ is $4 \times 3$. Project $\mathbf{b} = (1, 2, 3, 4)$ onto the column space of $A$. What shape is the projection matrix $P$ and what is $P$?

**Solution** (4 points) $P$ will be $4 \times 4$ since we take a 4-dimensional vector and project it to another 4-dimensional vector. We will have

$$
 P = \begin{pmatrix} 1 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}. 
$$

(This can be seen by direct computation, or by simply observing that the column space of $A$ is the $wxy$-space, so we just need to remove the $z$ coordinate to project.) The projection of $\mathbf{b}$ is $(1, 2, 3, 0)$.

---

**Problem 16.** What linear combination of $(1, 2, -1)$ and $(1, 0, 1)$ is closest to $\mathbf{b} = (2, 1, 1)$?

**Solution** (4 points)

Note that

$$
 \frac{1}{2}(1, 2, -1) + \frac{3}{2}(1, 0, 1) = (2, 1, 1). 
$$

So this $\mathbf{b}$ is actually in the span of the two given vectors.

---

**Problem 17.** If $P^2 = P$ show that $(I - P)^2 = I - P$. When $P$ projects onto the column space of $A$, $I - P$ projects onto the ____________.

**Solution** (4 points)

$$
 (I - P)^2 = I^2 - IP - PI + P^2 = I - 2P + P^2 = I - 2P + P = I - P. 
$$


When $P$ projects onto the column space of $A$, $I - P$ projects onto the left nullspace of $A$.

## Problem 30.

a. Find the projection matrix $P_C$ onto the column space of $A$.


$$

\begin{pmatrix}
3 & 6 & 6 \\
4 & 8 & 8
\end{pmatrix}

$$


b. Find the $3 \times 3$ projection matrix $P_R$ onto the row space of $A$. Multiply $B = P_C A P_R$. Your answer $B$ should be a little surprising — can you explain it?

## Solution (12 points)

a. Note that as $A$ is rank 1 its column space is spanned by the vector $\mathbf{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix}$. Using this matrix we can compute


$$

P_C = \mathbf{a} (\mathbf{a}^T \mathbf{a})^{-1} \mathbf{a}^T = \frac{1}{25} \begin{pmatrix} 9 & 12 \\ 12 & 16 \end{pmatrix}

$$


b. The row space of $A$ is spanned by the vector $\mathbf{a} = \begin{pmatrix} 1 & 2 & 2 \end{pmatrix}^T$. Then we compute


$$

P_R = \mathbf{a} (\mathbf{a}^T \mathbf{a})^{-1} \mathbf{a}^T = \frac{1}{9} \begin{pmatrix} 1 & 2 & 2 \\ 2 & 4 & 4 \\ 2 & 4 & 4 \end{pmatrix}

$$


Then $B = P_C A P_R = A$. First, note that $P_C A = A$, as for every vector $\mathbf{x}$, $A \mathbf{x} \in C(A)$, so $P_C A \mathbf{x} = A \mathbf{x}$. Analogously, $A P_R = A$, as for every vector $\mathbf{x}$ we can write it uniquely as $\mathbf{x} = \mathbf{n} + \mathbf{r}$ with $\mathbf{n}$ in $N(A)$ and $\mathbf{r}$ in $C(A^T)$. Then $A \mathbf{x} = A \mathbf{n} + A \mathbf{r} = A \mathbf{r}$ by the definition of nullspace. But $P_R \mathbf{x} = P_R \mathbf{n} + P_R \mathbf{r} = P_R \mathbf{r}$, as the nullspace is orthogonal to the row space, so projecting onto the row space kills the nullspace. So $A P_R = A$. Thus $P_C A P_R = (P_C A) P_R = A P_R = A$, as desired.

## Problem 31. In $\mathbb{R}^m$, suppose I give you $\mathbf{b}$ and $\mathbf{p}$, and $n$ linearly independent vectors $\mathbf{a}_1, \ldots, \mathbf{a}_n$. How would you test to see if $\mathbf{p}$ is the projection of $\mathbf{b}$ onto the subspace spanned by the $\mathbf{a}$'s?

**Solution** (12 points)

The projection of $\mathbf{b}$ must lie in the span of the $\mathbf{a}$'s, and must also be the closest vector in this span, meaning that the error will be orthogonal to this span. Thus we need to check (a) that $\mathbf{p}$ is in the span of the $\mathbf{a}$'s, and (b) that $\mathbf{b} - \mathbf{p}$ is orthogonal to $\mathbf{a}_i$ for each $i = 1, \ldots, n$. Note that just checking (b) is not enough because if we set $\mathbf{p} = \mathbf{b}$ then (b) will be satisfied but (a) will not be if $\mathbf{b}$ is not in the span of the $\mathbf{a}$'s.

**Problem 34.** If $A$ has $r$ independent columns and $B$ has $r$ independent rows, $AB$ is invertible.

Proof: When $A$ is $m$ by $r$ with independent columns, we know that $A^T A$ is invertible. If $B$ is $r$ by $n$ with independent rows, show that $BB^T$ is invertible. (Take $A = B^T$.)

Now show that $AB$ has rank $r$.

**Solution** (12 points) Let $A = B^T$. As $B$ has independent rows, $A$ has independent columns, so $A^T A$ is invertible. But $A^T A = (B^T)^T B^T = BB^T$, so $BB^T$ is invertible, as desired.

Note that $A^T A$ is $r \times r$ and is invertible, and $BB^T$ is $r \times r$ and is invertible, so $A^T ABB^T$ is $r \times r$ and invertible, so in particular has rank $r$. Thus we have that $A^T (AB) B^T$ has rank $r$. We know that multiplying $AB$ by any matrix on the left or on the right cannot increase rank, but can only decrease it. Thus we see that $AB$ has rank at least $r$. However, $AB$ is $r \times r$, so it has rank $r$ and is therefore invertible.

**Section 8.2. Problem 13.** With conductances $c_1 = c_2 = 2$ and $c_3 = c_4 = c_5 = 3$, multiply the matrices $A^T C A$. Find a solution to $A^T C A \mathbf{x} = \mathbf{f} = (1, 0, 0, -1)$. Where these potentials $\mathbf{x}$ and currents $\mathbf{y} = -CA \mathbf{x}$ on the nodes and edges of the square graph.

**Solution** (4 points) For this graph the incidence matrix is


$$
 A = \begin{pmatrix}
-1 & 1 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
0 & -1 & 1 & 0 \\
0 & -1 & 0 & 1 \\
0 & 0 & -1 & 1
\end{pmatrix}. 
$$


We are told that the conductance matrix has diagonal entries $(2, 2, 3, 3, 3)$. Then


$$
 A^T C A = \begin{pmatrix}
4 & -2 & -2 & 0 \\
-2 & 8 & -3 & -3 \\
-2 & -3 & 8 & -3 \\
0 & -3 & -3 & 6
\end{pmatrix}. 
$$


A solution to the given equation is $\mathbf{x} = (5/12, 1/6, 1/6, 0)$; then $\mathbf{y} = (1/2, 1/2, 0, 1/2, 1/2)$. The picture associated to this solution is


$$

\begin{tikzpicture}
\node (A) at (0,0) {$\bullet$};
\node (B) at (2,0) {$\bullet$};
\node (C) at (0,-2) {$\bullet$};
\node (D) at (2,-2) {$\bullet$};

\draw[->] (A) -- (B) node[midway, above] {$1/2$};
\draw[->] (A) -- (C) node[midway, left] {$1/2$};
\draw[->] (B) -- (D) node[midway, right] {$1/2$};
\draw[->] (C) -- (D) node[midway, below] {$1/2$};
\draw[->] (D) -- (A) node[midway, below left] {$0$};

\node[above=0.5cm] at (A) {$5/12$};
\node[above=0.5cm] at (B) {$1/6$};
\node[left=0.5cm] at (C) {$1/6$};
\node[right=0.5cm] at (D) {$0$};
\end{tikzpicture}

$$


**Problem 17.** Suppose $A$ is a $12 \times 9$ incidence matrix from a connected (but unknown) graph.

a. How many columns of $A$ are independent?

b. What condition on $\mathbf{f}$ makes it possible to solve $A^T \mathbf{y} = \mathbf{f}$?

c. The diagonal entries of $A^T A$ give the number of edges into each node. What is the sum of those diagonal entries?

**Solution** (12 points)

a. Note that as $A$ is $12 \times 9$ it is a graph with 9 nodes and 12 edges. As it is connected elimination will produce a tree with 8 edges, so the rank of $A$ is 8, and so it has 8 independent columns.

b. In order to solve $A^T \mathbf{y}$ we need the entries of $\mathbf{f}$ to add up to 0, as $\mathbf{f}$ needs to be in $C(A^T)$, which is orthogonal to $N(A)$ and is generated by $(1, 1, \ldots, 1)$.

c. The sum of the entries of $A^T A$ is the sum of the degrees of all of the nodes. As each edge hits exactly two nodes it will be counted twice, so the sum of the diagonal entries is 24.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

