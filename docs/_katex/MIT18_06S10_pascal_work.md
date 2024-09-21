# Pascal Matrices

**Alan Edelman and Gilbert Strang**

Department of Mathematics, Massachusetts Institute of Technology

Every polynomial of degree $n$ has $n$ roots; every continuous function on $[0, 1]$ attains its maximum; every real symmetric matrix has a complete set of orthonormal eigenvectors. “General theorems” are a big part of the mathematics we know. We can hardly resist the urge to generalize further! Remove hypotheses, make the theorem tighter and more difficult, include more functions, move into Hilbert space,... It’s in our nature.

The other extreme in mathematics might be called the “particular case”. One specific function or group or matrix becomes *special*. It obeys the general rules, like everyone else. At the same time it has some little twist that connects familiar objects in a neat way. This paper is about an extremely particular case. The familiar object is *Pascal’s triangle*.

The little twist begins by putting that triangle of binomial coefficients into a matrix. Three different matrices—*symmetric*, *lower triangular*, and *upper triangular*—can hold Pascal’s triangle in a convenient way. Truncation produces $n$ by $n$ matrices $S_n$ and $L_n$ and $U_n$—the pattern is visible for $n = 4$:


$$

S_4 = \begin{bmatrix}
1 & 1 & 1 & 1 \\
1 & 2 & 3 & 4 \\
1 & 3 & 6 & 10 \\
1 & 4 & 10 & 20
\end{bmatrix}
\quad
L_4 = \begin{bmatrix}
1 &  &  &  \\
1 & 1 &  &  \\
1 & 2 & 1 &  \\
1 & 3 & 3 & 1
\end{bmatrix}
\quad
U_4 = \begin{bmatrix}
1 & 1 & 1 & 1 \\
 & 1 & 2 & 3 \\
 &  & 1 & 3 \\
 &  &  & 1
\end{bmatrix}.

$$


We mention first a very specific fact: The determinant of every $S_n$ is 1. (If we emphasized $\det L_n = 1$ and $\det U_n = 1$, you would write to the Editor. *Too special!*) Determinants are often a surface reflection of a deeper property within the matrix. That is true here, and the connection between the three matrices is quickly revealed. It holds for every $n$:


$$

S \text{ equals } L \text{ times } U

$$


and then $(\det S) = (\det L)(\det U) = 1$.

This identity $S = LU$ is an instance of one of the four great matrix factorizations of linear algebra [10]:

1. **Triangular times triangular:** $A = LU$ from Gaussian elimination

2. **Orthogonal times triangular:** $A = QR$ from Gram-Schmidt

3. **Orthogonal times diagonal times orthogonal:** $A = U \Sigma V^\top$ with the singular values in $\Sigma$

4. **Diagonalization:** $A = S \Lambda S^{-1}$ with eigenvalues in $\Lambda$ and eigenvectors in $S$. Symmetric matrices allow $S^{-1} = S^\top$—orthonormal eigenvectors and real eigenvalues in the spectral theorem.

In $A = LU$, the triangular $U$ is the goal of elimination. The pivots lie on its diagonal (those are ratios $\det A_n / \det A_{n-1}$, so the pivots for Pascal are all 1’s). We reach $U$ by row operations that are recorded in $L$. Then $A \mathbf{x} = \mathbf{b}$ is solved by forward elimination and back substitution. In principle this is straightforward, but the cost adds up: billions a year for the most frequently used algorithm in scientific computing.

For a symmetric positive definite matrix, we can symmetrize $A = LU$ to $S = LL^\top$ (sometimes named after Cholesky). That is Pascal’s case with $U = L^\top$, as we want to prove.

This article will offer four proofs of $S = LU$. The first three are known, the fourth might be partly new. They come from thinking about different ways to approach Pascal’s triangle:

*First proof:* The binomial coefficients satisfy the right identity

*Second proof:* $S$, $L$, and $U$ count paths on a directed graph

*Third proof:* Pascal’s recursion generates all three matrices

*Fourth proof:* The coefficients of $(1 + x)^n$ have a functional meaning.

The binomial identity that equates $S_{ij}$ with $\sum L_{ik} U_{kj}$ naturally comes first—but it gives no hint of the “source” of $S = LU$. The path-counting proof (which multiplies matrices by gluing graphs!) is more appealing. The recursive proof uses elimination and induction. The functional proof is the shortest: *Verify $S \mathbf{v} = LU \mathbf{v}$ for the family of vectors $\mathbf{v} = (1, x, x^2, \ldots)$. This allows the “meaning” of Pascal’s triangle to come through.

The reader can guess that the last proof is our favorite. It leads toward larger ideas; transformations like $x \to 1 + x$ and $x \to 1 / (1 - x)$ are particular cases of $x \to (ax + b) / (cx + d)$. We are close to matrix representations of the

Möbius group. At the same time $S$, $L$, and $U$ arise in the *multipole method*—one of the “top ten algorithms of the 20th century,” which has tremendously speeded up the evaluation of sums $\sum a_k / (x - r_k)$.

You see that the urge to generalize is truly irresistible! We hereby promise not to let it overwhelm this short paper. Our purpose is only to look at Pascal’s triangle from four different directions—identities, graphs, recursions, and functions. Pascal matrices led to several Worked Examples in the new textbook [10], and this paper is on the course web page \texttt{web.mit.edu/18.06/}.

# Proof 1: Matrix Multiplication

The direct proof multiplies $LU$ to reach $S$. All three matrices start with row $i = 0$ and column $j = 0$. Then the $i, k$ entry of $L$ is $\binom{i}{k} = “i$ choose $k”$. Multiplying row $i$ of $L$ times column $j$ of $U = L^\top$, the goal is to verify that


$$

\sum L_{ik} U_{kj} = \sum_{k=0}^n \binom{i}{k} \binom{j}{k} = \binom{i + j}{i} = S_{ij}.

$$


Separate $i + j$ objects into two groups, containing $i$ objects and $j$ objects. If we select $i - k$ objects from the first group and $k$ from the second group, we have chosen $i$ objects out of $i + j$. The first selection can be made in $\binom{i}{i-k} = \binom{i}{k}$ ways and the second selection in $\binom{j}{k}$ ways. Any number $k$ from 0 to $\min(i, j)$ is admissible, so the total count agrees with equation (1):


$$

\sum_{k=0}^{\min(i,j)} \binom{i}{k} \binom{j}{k} = \binom{i + j}{i}.

$$


In this form the sum accounts for the triangularity of $L$ and $U$. The binomial coefficients are zero for $k > i$ and $k > j$.

A shorter proof is hard to imagine (though Proof 4 comes close). But the *discovery* of $LU = S$ would be unlikely this way. Binomial people would know the identity (1), the rest of us are conditioned to take their word for it. David Ingerman showed us how to multiply matrices by “gluing graphs”—and this gives a visual explanation [3, 7] of $LU = S$.

# Proof 2: Gluing Graphs

The first step is to identify $S_{ij}$ as the number of paths from $a_i$ to $b_j$ on the up-and-left directed graph in Figure 1.

Only one path goes directly up from $a_0$ to $b_j$, agreeing with $S_{0j} = 1$ in the top row of $S$. One path goes directly across from $a_i$ to $b_0$, agreeing with $S_{i0} = 1$. From that row and column the rest of $S$ is built recursively, based on Pascal’s rule $S_{i-1,j} + S_{i,j-1} = S_{ij}$. We show that path-counting gives the same rule (and thus the same matrix $S$).

\begin{figure}[h]
\centering
\includegraphics[width=0.5\textwidth]{path-counting-graph.png}
\caption{The directed graph for the path-counting matrix $S$.}
\end{figure}

A typical entry is $S_{22} = \binom{4}{2} = 6$. There are 6 paths from $a_2$ to $b_2$ (3 that start across and 3 that start upwards). The paths that start across then go from $a_{i-1}$ to $b_j$; by induction those are counted by $S_{i-1,j}$. The paths that start upward go to level 1 and from there to $b_j$. Those are counted by $S_{i,j-1}$ and Pascal’s rule is confirmed. (For this we imagine the whole graph shifted down one level, so we are actually going from $a_i$ to $b_{j-1}$ in $S_{i,j-1}$ ways.) We do not know who first connected the matrix $S$ with this graph.

Now cut the graph along the 45° line in Figure 2. We want to show that $L_{ik}$ counts the paths from $a_i$ to the $(k,k)$ point on that diagonal line. Then $U_{kj}$ counts paths from the 45° line to $b_j$.

The reasoning is again by induction. Start from $L_{i0} = 1$ for the single path across from $a_i$ to $(0,0)$. Also $L_{ii} = 1$ for the single path up to $(i,i)$. Pascal’s recursion is $L_{ik} = L_{i-1,k} + L_{i-1,k-1}$ when his triangle is placed into $L$.

By induction, $L_{i-1,k}$ counts the paths that start to the left from $a_i$, and go from $a_{i-1}$ to $(k,k)$. The other paths to $(k,k)$ start upward from $a_i$. By shifting the graph down and left (along the 45° line) we imagine these

from the row beneath.

The elimination matrix $E$ has entries $E_{ii} = 1$ and $E_{i,i-1} = -1$. For 4 by 4 matrices you can see how the next smaller $L$ appears:


$$

EL_4 = \begin{bmatrix}
1 & & & \\
-1 & 1 & & \\
 & -1 & 1 & \\
 & & -1 & 1
\end{bmatrix}
\begin{bmatrix}
1 & & & \\
1 & 1 & & \\
1 & 2 & 1 & \\
1 & 3 & 3 & 1
\end{bmatrix}
= \begin{bmatrix}
1 & & & \\
0 & 1 & & \\
0 & 1 & 1 & \\
0 & 1 & 2 & 1
\end{bmatrix}
= \begin{bmatrix}
1 & 0 & & \\
0 & L_3 & &
\end{bmatrix}.
\tag{3}

$$


$E$ times $L$ gives the Pascal recursion $L_{ik} - L_{i-1,k} = L_{i-1,k-1}$, producing the smaller matrix $L_{n-1}$---shifted down as in (3).

This suggests a proof by induction. Assume that $L_{n-1} U_{n-1} = S_{n-1}$. Then equation (3) and its transpose give


$$

(EL_n)(U_n E^\text{T}) = \begin{bmatrix}
1 & 0 & & \\
0 & L_{n-1} & &
\end{bmatrix}
\begin{bmatrix}
1 & 0 & & \\
0 & U_{n-1} & &
\end{bmatrix}
= \begin{bmatrix}
1 & 0 & & \\
0 & S_{n-1} & &
\end{bmatrix}.
\tag{4}

$$


We hope that the last matrix agrees with $ES_n E^\text{T}$. Then we can premultiply by $E^{-1}$ and postmultiply by $(E^\text{T})^{-1}$, to conclude that $L_n U_n = S_n$.

Look at the $i,j$ entry of $ES_n E^\text{T}$:


$$

(ES_n)_{ij} = S_{ij} - S_{i-1,j} \quad \text{and}

$$


$$

(ES_n E^\text{T})_{ij} = (S_{ij} - S_{i-1,j}) - (S_{i,j-1} - S_{i-1,j-1}).

$$


In that last expression, the first three terms cancel to leave $S_{i-1,j-1}$. This is the $(i,j)$ entry for the smaller matrix $S_{n-1}$, shifted down as in (4). The induction is complete.

This “algorithmic” approach could have led to $LU = S$ without knowing that result in advance. On the graph, multiplying by $E$ is like removing all horizontal edges that reach the 45° line from the right. Then all paths must go upward to that line. In counting, we may take their last step for granted---leaving a triangular graph one size smaller (corresponding to $L_{n-1}$).

The complete elimination from $S$ to $U$ corresponds to removing all horizontal edges below the 45° line. Then $L = I$ since every path to that line goes straight up. Elimination usually clears out columns of $S$ (and columns of edges) but this does not leave a smaller $S_{n-1}$. The good elimination order multiplies by $E$ to remove horizontal edges a diagonal at a time. This gave the induction in Proof 3.

# Powers, Inverse, and Logarithm of $L$

In preparing for Proof 4, consider the "functional" meaning of $L$. Every Taylor series around zero is the inner product of a coefficient vector $\mathbf{a} = (a_0, a_1, a_2, \ldots)$ with the moment vector $\mathbf{v} = (1, x, x^2, \ldots)$. The Taylor series represents a function $f(x)$:


$$

\sum a_k x^k = \mathbf{a}^\top \mathbf{v} = \mathbf{a}^\top L^{-1} L \mathbf{v} \, .

$$


Here $L$ becomes an *infinite* triangular matrix, containing all of the Pascal triangle. Multiplying $L \mathbf{v}$ shows that (5) ends with a series in powers of $(1 + x)$:


$$

L \mathbf{v} = \begin{bmatrix} 1 \\ 1 & 1 \\ 1 & 2 & 1 \\ \cdot & \cdot & \cdot & \cdot \end{bmatrix} \begin{bmatrix} 1 \\ x \\ x^2 \\ \cdot \end{bmatrix} = \begin{bmatrix} 1 \\ 1 + x \\ (1 + x)^2 \\ \cdot \end{bmatrix}

$$


The simple multiplication (6) is very useful. A second multiplication by $L$ would give powers of $2 + x$. Multiplication by $L^p$ gives powers of $p + x$. The $i, j$ entry of $L^p$ must be $p^{i-j} \binom{i}{j}$, as earlier authors have observed (the 4 by 4 case is displayed):


$$

L^p = \begin{bmatrix} 1 \\ p & 1 \\ p^2 & 2p & 1 \\ p^3 & 3p^2 & 3p & 1 \end{bmatrix} \quad \text{and} \quad L^p L^q = L^{p+q} \, .

$$


For all matrix sizes $n = 1, 2, \ldots, \infty$ the powers $L^p$ are a representation of the groups $\mathbf{Z}$ and $\mathbf{R}$ (integer $p$ and real $p$). The inverse matrix $L^{-1}$ has the same form with $p = -1$. Call and Velleman [2] found $L^{-1}$ which is $D L D^{-1}$:


$$

L^{-1} = \begin{bmatrix} 1 \\ -1 & 1 \\ 1 & -2 & 1 \\ -1 & 3 & -3 & 1 \end{bmatrix} = \begin{bmatrix} 1 \\ -1 \\ 1 \\ -1 \end{bmatrix} \begin{bmatrix} 1 & 1 \\ 1 & 2 & 1 \\ 1 & 3 & 3 & 1 \end{bmatrix} \begin{bmatrix} 1 \\ -1 \\ 1 \\ -1 \end{bmatrix} \, .

$$


$L^p$ has the exponential form $e^{Ap}$ and we can compute $A = \log L$:


$$

A = \lim_{p \to 0} \frac{e^{Ap} - I}{p} = \lim_{p \to 0} \frac{L^p - I}{p} = \begin{bmatrix} 0 \\ 1 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 & 0 \end{bmatrix} \, .

$$


The series $L = e^A = I + A + A^2/2! + \cdots$ has only $n$ terms. It produces the binomial coefficients in $L$. This matrix $A$ has no negative subdeterminants. Then its exponential $L$ is also *totally positive* [8, page 115] and so is the product $S = LU$.

# Pascal Eigenvalues

A brief comment about eigenvalues can come before Proof 4 of $S = LU$. The eigenvalues of $L$ and $U$ are their diagonal entries, all 1’s. Transposing $L^{-1} = DLD^{-1}$ in equation (8) leads to $U^{-1} = DUD^{-1}$. So $L$ and $U$ are similar to their inverses (and matrices are always similar to their transposes).

It is more remarkable that $S^{-1}$ is similar to $S$. The eigenvalues of $S$ must come in *reciprocal pairs* $\lambda$ and $1/\lambda$, since similar matrices have the same eigenvalues:


$$

S^{-1} = U^{-1}L^{-1} = DUD^{-1}DLD^{-1}

$$


$$

= (DU)(LU)(U^{-1}D^{-1}) = (DU)S(DU)^{-1}.

$$


The eigenvalues of the 3 by 3 symmetric Pascal matrix are $\lambda_1 = 4 + \sqrt{15}$ and $\lambda_2 = 4 - \sqrt{15}$ and $\lambda_3 = 1$. Then $\lambda_1\lambda_2 = 1$ gives a reciprocal pair, and $\lambda_3 = 1$ is self-reciprocal. The references in Higham’s excellent book [5], and help pascal in MATLAB, lead to other properties of $S = \text{pascal}(n)$.

# Proof 4: Equality of Functions

If $S\boldsymbol{v} = LU\boldsymbol{v}$ is verified for enough vectors $\boldsymbol{v}$, we are justified in concluding that $S = LU$. Our fourth and favorite proof chooses the infinite vectors $\boldsymbol{v} = (1, x, x^2, \ldots)$. The top row of $S\boldsymbol{v}$ displays the geometric series $1 + x + x^2 + \cdots = 1/(1 - x)$. Multiply each row of $S\boldsymbol{v}$ by that top row to see the next row. The *functional meaning* of $S$ is in the binomial theorem.

We need $|x| < 1$ for convergence ($x$ could be a complex number):


$$

S\boldsymbol{v} = \begin{bmatrix}
1 & 1 & 1 & 1 & \cdot \\
1 & 2 & 3 & 4 & \cdot \\
1 & 3 & 6 & 10 & \cdot \\
1 & 4 & 10 & 20 & \cdot \\
\cdot & \cdot & \cdot & \cdot & \cdot
\end{bmatrix}
\begin{bmatrix}
1 \\
x \\
x^2 \\
x^3 \\
\cdot
\end{bmatrix}
= \begin{bmatrix}
1/(1 - x) \\
1/(1 - x)^2 \\
1/(1 - x)^3 \\
1/(1 - x)^4 \\
\cdot
\end{bmatrix}.

$$


The same result should come from $LU \boldsymbol{v}$. The first step $U \boldsymbol{v}$ has extra powers of $x$ because the rows have been shifted:


$$

U \boldsymbol{v} = \begin{bmatrix}
1 & 1 & 1 & 1 & \cdot \\
0 & 1 & 2 & 3 & \cdot \\
0 & 0 & 1 & 3 & \cdot \\
0 & 0 & 0 & 1 & \cdot \\
\cdot & \cdot & \cdot & \cdot & \cdot
\end{bmatrix}
\begin{bmatrix}
1 \\
x \\
x^2 \\
x^3 \\
\cdot
\end{bmatrix}
= \begin{bmatrix}
1/(1 - x) \\
x/(1 - x)^2 \\
x^2/(1 - x)^3 \\
x^3/(1 - x)^4 \\
\cdot
\end{bmatrix}.

$$


Factoring out $1/(1 - x)$, the components of $U \boldsymbol{v}$ are the powers of $a = x/(1 - x)$. Now multiply by $L$, with no problem of convergence because all sums are finite. The $n$-th row of $L$ contains the binomial coefficients for $(1 + a)^n = (1 + \frac{x}{1 - x})^n = (\frac{1}{1 - x})^n$:


$$

L (U \boldsymbol{v}) = \frac{1}{1 - x} \begin{bmatrix}
1 & 0 & 0 & 0 & \cdot \\
1 & 1 & 0 & 0 & \cdot \\
1 & 2 & 1 & 0 & \cdot \\
1 & 3 & 3 & 1 & \cdot \\
\cdot & \cdot & \cdot & \cdot & \cdot
\end{bmatrix}
\begin{bmatrix}
1 \\
a \\
a^2 \\
a^3 \\
\cdot
\end{bmatrix}
= \begin{bmatrix}
1/(1 - x) \\
1/(1 - x)^2 \\
1/(1 - x)^3 \\
1/(1 - x)^4 \\
\cdot
\end{bmatrix}.

$$


Thus $S \boldsymbol{v} = LU \boldsymbol{v}$ for the vectors $\boldsymbol{v} = (1, x, x^2, \ldots)$. Does it follow that $S = LU$? The choice $x = 0$ gives the coordinate vector $\boldsymbol{v}_0 = (1, 0, 0, \ldots)$. Then $S \boldsymbol{v}_0 = LU \boldsymbol{v}_0$ gives agreement between the first columns of $S$ and $LU$ (which are all ones). If we can construct the other coordinate vectors from the $\boldsymbol{v}$'s, then all the columns of $S$ and $LU$ must agree.

The quickest way to reach $(0, 1, 0, \ldots)$ is to differentiate $\boldsymbol{v}$ at $x = 0$. Introduce $\boldsymbol{v}_\Delta = (1, \Delta, \Delta^2, \ldots)$ and form a linear combination of $\boldsymbol{v}_\Delta$ and $\boldsymbol{v}_0$:


$$

S \left( \frac{\boldsymbol{v}_\Delta - \boldsymbol{v}_0}{\Delta} \right) = LU \left( \frac{\boldsymbol{v}_\Delta - \boldsymbol{v}_0}{\Delta} \right).

$$


Let $\Delta \to 0$. Every series is uniformly convergent, every function is analytic, every derivative is legitimate. Higher derivatives give the other coordinate vectors, and the columns of $S$ and $LU$ are identical. By working with infinite matrices, $S = LU$ is confirmed for all orders $n$ at the same time.

An alternative is to see the coordinate vectors as linear combinations of (a continuum of) $\boldsymbol{v}$'s, using Cauchy's integral theorem around $x = z = 0$.

These functional proofs need an analyst somewhere, since an algebraist working alone might apply $S$ to $S \boldsymbol{v}$. The powers of this positive matrix are

suddenly negative from $\sum_{1}^{\infty} (1 - x)^{-n} = -1/x$. Even worse if you multiply again by $S$ to discover $S^3 \boldsymbol{v} = -\boldsymbol{v}$:

\begin{equation}
S^2 \boldsymbol{v} = \begin{bmatrix}
-1/x \\
-(x - 1)/x^2 \\
-(x - 1)^2/x^3 \\
\cdot
\end{bmatrix}
\quad \text{and} \quad
S^3 \boldsymbol{v} = \begin{bmatrix}
-1 \\
-x \\
-x^2 \\
\cdot
\end{bmatrix} = -\boldsymbol{v} \, .
\end{equation}

We seem to have proved that $S^3 = -I$. There may be some slight issue of convergence. This didn’t bother Cauchy (on his good days), and we must be seeing a matrix generalization of his geometric series for $1/(1 - 2)$:

\begin{equation}
1 + 2 + 4 + 8 + \cdots = -1 \, .
\end{equation}

## Möbius Matrices

A true algebraist would look for matrices of Pascal type in a group representation. Suppose the infinite matrices $S$ and $U$ and $L$ represent the Möbius transformations $x \to 1/(1 - x)$ and $x/(1 - x)$ and $x + 1$ that we met in Proof 4. Then $LU = S$ would have an even shorter Proof 5, by composing $y = x/(1 - x)$ and $z = y + 1$ from $L$ and $U$:


$$
 z = \frac{x}{1 - x} + 1 = \frac{1}{1 - x} \, . 
$$


We hope to study a larger class of “Möbius matrices” for $(ax + b)/(cx + d)$. A \emph{finite-dimensional} representation leads to $M^3 = I$ for the rotated matrix with alternating signs known to MATLAB as $M = \text{pascal}(n, 2)$. Here is $n = 3$:


$$
 M^3 = \begin{bmatrix}
1 & 1 & 1 \\
-2 & -1 & 0 \\
1 & 0 & 0
\end{bmatrix}^3 = I \quad \text{because} \quad \frac{1}{1 - \frac{1}{1 - \frac{1}{1 - x}}} = x \, . 
$$


Waterhouse [11] applied that idea (mod $p$) to prove a theorem of Strauss: If $n$ is a power of $p$, then $S^3 = I$ (mod $p$). It seems quite possible that digital transforms based on Pascal matrices might be waiting for discovery. That would be ironic and wonderful, if Pascal’s triangle turned out to be applied mathematics.

# Conclusion: Two Opinions of Pascal’s Triangle

Pascal was not the first to create his triangle! Edwards [4] describes the gradual discovery of its entries, in Persia (Omar Khayyam himself) and in China and Europe and India. The *proofs* were Pascal’s (including a proof by induction that became a model for future mathematicians). We very much appreciated the sentiments of James Bernoulli, who completed the connection with powers by computing $1^p + \cdots + N^p$:

“This Table has truly exceptional and admirable properties; for besides concealing within itself the mysteries of Combinatorics, it is known by those expert in the higher parts of Mathematics also to hold the foremost secrets of the whole of the rest of the subject.”

No one could say better than that. But a genius of our own day expressed a different thought, which our friendly readers would surely never share [9]:

“There are so many relations present that when someone finds a new identity, there aren’t many people who get excited about it any more, except the discoverer!”

# References

[1] Robert Brawer and Magnus Pirovino, The Linear Algebra of the Pascal Matrix, *Linear Algebra and Its Applications* **174** (1992) 13–23.

[2] Gregory Call and Daniel Velleman, Pascal’s Matrices, *American Math. Monthly* **100** (1993).

[3] E.B. Curtis, David Ingerman and J.A. Morrow, Circular planar graphs and resistor networks, *Linear Algebra and Its Applications* **283** (1998) 115–150.

[4] A.W.F. Edwards, *Pascal’s Arithmetical Triangle: The Story of a Mathematical Idea*, Charles Griffin, 1987 and Johns Hopkins University Press, 2002.

[5] N.J. Higham, Accuracy and Stability in Numerical Algorithms, *SIAM* (1996).

[6] Peter Hilton and Jean Pederson, Looking into Pascal’s Triangle: Combinatorics, Arithmetic, and Geometry, Math. Magazine **60** (1987) 305–316.

[7] David Ingerman, *Discrete and continuous inverse boundary problems on a disc*, Ph.D. Thesis, University of Washington, 1997.

[8] Samuel Karlin, *Total Positivity, Vol. 1*, Stanford University Press, 1968.

[9] Donald Knuth, *Fundamental Algorithms: Vol. I, The Art of Computer Programming*, Addison-Wesley, 1973.

[10] Gilbert Strang, *Introduction to Linear Algebra, 3rd edition*, Wellesley-Cambridge Press, 2003.

[11] W.C. Waterhouse, The map behind a binomial coefficient matrix over **Z**/p**Z**, Linear Algebra and Its Applications **105** (1988) 195–198.

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

