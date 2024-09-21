# 18.06 PSET 3 SOLUTIONS
FEBRUARY 22, 2010

## Problem 1. (§3.2, #18)
The plane $x - 3y - z = 12$ is parallel to the plane $x - 3y - z = 0$ in Problem 17. One particular point on this plane is $(12, 0, 0)$. All points on the plane have the form (fill in the first components)

$$

\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
=
\begin{bmatrix}
12 \\
0 \\
0
\end{bmatrix}
+
y
\begin{bmatrix}
3 \\
1 \\
0
\end{bmatrix}
+
z
\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
.

$$


### Solution. (4 points)
The equation $x = 12 + 3y + z$ says it all:

$$

\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}
\left(=
\begin{bmatrix}
12 + 3y + z \\
y \\
z
\end{bmatrix}
\right)
=
\begin{bmatrix}
12 \\
0 \\
0
\end{bmatrix}
+
y
\begin{bmatrix}
3 \\
1 \\
0
\end{bmatrix}
+
z
\begin{bmatrix}
0 \\
0 \\
1
\end{bmatrix}
.

$$


## Problem 2. (§3.2, #24)
(If possible...) Construct a matrix whose column space contains $(1, 1, 0)$ and $(0, 1, 1)$ and whose nullspace contains $(1, 0, 1)$ and $(0, 0, 1)$.

### Solution. (4 points)
Not possible: Such a matrix $A$ must be $3 \times 3$. Since the nullspace is supposed to contain two independent vectors, $A$ can have at most $3 - 2 = 1$ pivots. Since the column space is supposed to contain two independent vectors, $A$ must have at least 2 pivots. These conditions cannot both be met!

## Problem 3. (§3.2, #36)
How is the nullspace $\mathbf{N}(C)$ related to the spaces $\mathbf{N}(A)$ and $\mathbf{N}(B)$, if $C = \begin{bmatrix} A \\ B \end{bmatrix}$?

### Solution. (12 points)
$\mathbf{N}(C) = \mathbf{N}(A) \cap \mathbf{N}(B)$ just the intersection: Indeed,

$$

C\mathbf{x} = \begin{bmatrix} A\mathbf{x} \\ B\mathbf{x} \end{bmatrix}

$$

so that $C\mathbf{x} = 0$ if and only if $A\mathbf{x} = 0$ and $B\mathbf{x} = 0$. (...and as a nitpick, it wouldn't be quite sloppy instead write "if and only if $A\mathbf{x} = B\mathbf{x} = 0$"—those are zero vectors of potentially different length, hardly equal).

## Problem 4. (§3.2, #37)
Kirchoff's Law says that $current in = current out$ at every node. This network has six currents $y_1, \ldots, y_6$ (the arrows show the positive direction, each $y_i$ could be positive or negative). Find the four equations $A\mathbf{y} = 0$ for Kirchoff's Law at the four nodes. Find three special solutions in the nullspace of $A$.

### Solution. (12 points)
The four equations are, in order by node,

$$

\begin{align*}
y_1 - y_3 + y_4 &= 0 \\
-y_1 + y_2 + y_5 &= 0 \\
-y_2 + y_3 + y_6 &= 0 \\
-y_4 - y_5 - y_6 &= 0
\end{align*}

$$


or in matrix form $A\mathbf{y} = 0$ for


$$

A = \boxed{
\begin{bmatrix}
1 & 0 & -1 & 1 & 0 & 0 \\
-1 & 1 & 0 & 0 & 1 & 0 \\
0 & -1 & 1 & 0 & 0 & 1 \\
0 & 0 & 0 & -1 & -1 & -1
\end{bmatrix}
}

$$


Adding the last three rows to the first eliminates it, and shows that we have three “pivot variables” $y_1, y_2, y_4$ and three “free variables” $y_3, y_5, y_6$. We find the special solutions by back-substitution from $(y_3, y_5, y_6) = (1, 0, 0), (0, 1, 0), (0, 0, 1)$:


$$

\boxed{
\begin{bmatrix}
y_1 \\
y_2 \\
y_3 \\
y_4 \\
y_5 \\
y_6
\end{bmatrix}
=
\begin{bmatrix}
1 \\
1 \\
1 \\
0 \\
0 \\
0
\end{bmatrix},
\begin{bmatrix}
1 \\
0 \\
0 \\
-1 \\
1 \\
0
\end{bmatrix},
\begin{bmatrix}
1 \\
1 \\
0 \\
-1 \\
0 \\
1
\end{bmatrix}
}

$$


---

**Problem 5.** (§3.3, #19) Suppose $A$ and $B$ are $n$ by $n$ matrices, and $AB = I$. Prove from $\text{rank}(AB) \leq \text{rank}(A)$ that the rank of $A$ is $n$. So $A$ is invertible and $B$ must be its two-sided inverse (Section 2.5). Therefore $BA = I$ (which is not so obvious!).

*Solution.* (4 points) Since $A$ is $n$ by $n$, $\text{rank}(A) \leq n$ and conversely


$$

n = \text{rank}(I_n) = \text{rank}(AB) \leq \text{rank}(A).

$$


The rest of the problem statement seems to be “commentary,” and not further things to do.

---

**Problem 6.** (§3.3, #25) *Neat fact* Every $m$ by $n$ matrix of rank $r$ reduces to $(m$ by $r)$ times $(r$ by $n)$:


$$

A = (\text{pivot columns of } A) (\text{first } r \text{ rows of } R)) = (\text{COL}) (\text{ROW}).

$$


Write the 3 by 4 matrix $A$ in equation (1) at the start of this section as the product of the 3 by 2 matrix from the pivot columns and the 2 by 4 matrix from $R$.

*Solution.* (4 points)


$$

A = \boxed{
\begin{bmatrix}
1 & 1 & 2 & 4 \\
1 & 2 & 2 & 5 \\
1 & 3 & 2 & 6
\end{bmatrix}
}
=
\boxed{
\begin{bmatrix}
1 & 1 \\
1 & 2 \\
1 & 3
\end{bmatrix}
}
\boxed{
\begin{bmatrix}
1 & 0 & 2 & 3 \\
0 & 1 & 0 & 1
\end{bmatrix}
}

$$


---

**Problem 7.** (§3.3, #27) Suppose $R$ is $m$ by $n$ of rank $r$, with pivot columns first:


$$

\boxed{
\begin{bmatrix}
I & F \\
0 & 0
\end{bmatrix}
}

$$


(a) What are the shapes of those four blocks?

(b) Find a *right-inverse* $B$ with $RB = I$ if $r = m$.

(c) Find a *left-inverse* $C$ with $CR = I$ if $r = n$.

(d) What is the reduced row echelon form of $R^T$ (with shapes)?

(e) What is the reduced row echelon form of $R^T R$ (with shapes)?

Prove that $R^T R$ has the same nullspace as $R$. Later we show that $A^T A$ always has the same nullspace as $A$ (a valuable fact).

*Solution.* (12 points)

(a)


$$

\boxed{
\begin{bmatrix}
r \times r & r \times (n - r) \\
(m - r) \times r & (m - r) \times (n - r)
\end{bmatrix}
}

$$


(b) In this case

$$
 R = \begin{bmatrix} I & F \end{bmatrix} \qquad \text{so we can take} \qquad \boxed{B = \begin{bmatrix} I_{r \times r} \\ 0_{(n-r) \times r} \end{bmatrix}} 
$$


(c) In this case

$$
 R = \begin{bmatrix} I & 0 \end{bmatrix} \qquad \text{so we can take} \qquad \boxed{C = \begin{bmatrix} I_{r \times r} & 0_{r \times (m-r)} \end{bmatrix}} 
$$


(d) Note that

$$
 R^T = \begin{bmatrix} I_{r \times r} & 0_{r \times (m-r)} \\ F^T & 0_{(n-r) \times (m-r)} \end{bmatrix} \qquad \text{so that} \qquad rref(R^T) = \boxed{\begin{bmatrix} I_{r \times r} & 0_{r \times (m-r)} \\ 0_{(n-r) \times r} & 0_{(n-r) \times (m-r)} \end{bmatrix}} 
$$


(e) Note that

$$
 R^T R = \begin{bmatrix} I_{r \times r} & F \\ F^T & 0 \end{bmatrix} \qquad \text{so that} \qquad rref(R^T R) = \boxed{\begin{bmatrix} I_{r \times r} & F_{r \times (n-r)} \\ 0_{(m-r) \times r} & 0_{(m-r) \times (n-r)} \end{bmatrix}} = R 
$$


Performing row operations doesn’t change the nullspace, so that $\mathbf{N}(A) = \mathbf{N}(rref(A))$ for any matrix $A$. So, $\mathbf{N}(A) = \mathbf{N}(R^T R)$ by (e). $\square$

---

**Problem 8.** (§3.3, #28) Suppose you allow elementary *column* operations on $A$ as well as elementary row operations (which get to $R$). What is the “row-and-column reduced form” for an $m$ by $n$ matrix of rank $r$?

*Solution.* (12 points) After getting to $R$ we can use the column operations to get rid of $F$, and get to

$$
 \boxed{\begin{pmatrix} I_{r \times r} & 0_{r \times (n-r)} \\ 0_{(m-r) \times r} & 0_{(m-r) \times (n-r)} \end{pmatrix}} 
$$
 $\square$

---

**Problem 9.** (§3.3, #17 – Optional)

(a) Suppose column $j$ of $B$ is a combination of previous columns of $B$. Show that column $j$ of $AB$ is the same combination of previous columns of $AB$. Then $AB$ cannot have new pivot columns, so $\text{rank}(AB) \leq \text{rank}(B)$.

(b) Find $A_1$ and $A_2$ so that $\text{rank}(A_1 B) = 1$ and $\text{rank}(A_2 B) = 0$ for $B = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix}$.

*Solution.* (Optional)

(a) That column $j$ of $B$ is a combination of previous columns of $B$ means precisely that there exist numbers $a_1, \ldots, a_{j-1}$ so that each row vector $\mathbf{x} = (x_i)$ of $B$ satisfies the linear relation

$$
 x_j = \sum_{i=1}^{j-1} a_i x_i = a_1 x_1 + \cdots + a_{j-1} x_{j-1} 
$$


The rows of the matrix $AB$ are all linear combinations of the rows of $B$, and so also satisfy this linear relation. So, column $j$ is the same combination of previous columns of $AB$, as desired. Since a column is pivot column precisely when it is not a combination of previous columns, this shows that $AB$ cannot have previous columns and the rank inequality.

(b) Take $A_1 = I_2$ and $A_2 = 0_2$ (or for a less trivial example $A_2 = \begin{bmatrix} 1 & -1 \\ 1 & -1 \end{bmatrix}$). $\square$

---

**Problem 10.** (§3.4, #13) Explain why these are all false:

(a) The complete solution is any linear combination of $\mathbf{x}_p$ and $\mathbf{x}_n$.

(b) A system $A\mathbf{x} = \mathbf{b}$ has at most one particular solution.

(c) The solution $\mathbf{x}_p$ with all free variables zero is the shortest solution (minimum length $\|\mathbf{x}\|$). Find a 2 by 2 counterexample.

(d) If $A$ is invertible there is no solution $\mathbf{x}_n$ in the nullspace.

**Solution. (4 points)**

(a) The coefficient of $\mathbf{x}_p$ must be one.

(b) If $\mathbf{x}_n \in \mathbf{N}(A)$ is in the nullspace of $A$ and $\mathbf{x}_p$ is one particular solution, then $\mathbf{x}_p + \mathbf{x}_n$ is also a particular solution.

(c) Lots of counterexamples are possible. Let’s talk about the 2 by 2 case geometrically: If $A$ is a 2 by 2 matrix of rank 1, then the solutions to $A\mathbf{x} = \mathbf{b}$ form a line parallel to the line that is the nullspace. We’re asking that this line’s closest point to the origin be somewhere not along an axis. The line $x + y = 1$ gives such an example.

Explicitly, let

$$
 A = \begin{bmatrix} 1 & 1 \\ 1 & 1 \end{bmatrix} \qquad \mathbf{b} = \begin{bmatrix} 1 \\ 1 \end{bmatrix} \qquad \text{and} \qquad \mathbf{x}_p = \begin{bmatrix} \frac{1}{2} & \frac{1}{2} \end{bmatrix} 
$$


Then, $\|\mathbf{x}_p\| = 1/\sqrt{2} < 1$ while the particular solutions having some coordinate equal to zero are $(1, 0)$ and $(0, 1)$ and they both have $\|\cdot\| = 1$.

(d) There’s always $\mathbf{x}_n = 0$. $\square$

---

**Problem 11. (§3.4, #25)** Write down all known relations between $r$ and $m$ and $n$ if $A\mathbf{x} = \mathbf{b}$ has

(a) no solution for some $\mathbf{b}$

(b) infinitely many solutions for every $\mathbf{b}$

(c) exactly one solution for some $\mathbf{b}$, no solution for other $\mathbf{b}$

(d) exactly one solution for every $\mathbf{b}$.

---

**Solution. (4 points)**

(a) The system has less than full row rank: $r < m$.

(b) The system has full row rank, and less than full column rank: $m = r < n$.

(c) The system has full column rank, and less than full row rank: $n = r < m$.

(d) The system has full row and column rank (i.e., is invertible): $n = r = m$. $\square$

---

**Problem 12. (§3.4, #28)** Apply Gauss-Jordan elimination to $U\mathbf{x} = 0$ and $U\mathbf{x} = \mathbf{c}$. Reach $R\mathbf{x} = 0$ and $R\mathbf{x} = \mathbf{d}$:

$$
 \begin{bmatrix} U & 0 \end{bmatrix} = \begin{bmatrix} 1 & 2 & 3 & 0 \\ 0 & 0 & 4 & 0 \end{bmatrix} \qquad \text{and} \qquad \begin{bmatrix} U & \mathbf{c} \end{bmatrix} = \begin{bmatrix} 1 & 2 & 3 & 5 \\ 0 & 0 & 4 & 8 \end{bmatrix}. 
$$

Solve $R\mathbf{x} = 0$ to find $\mathbf{x}_n$ (its free variable is $x_2 = 1$). Solve $R\mathbf{x} = \mathbf{d}$ to find $\mathbf{x}_p$ (its free variable is $x_2 = 0$).

---

**Solution. (4 points)** Let me just say to whoever’s reading: The problem statement is confusing as written!! In any case, I *think* the desired response is:

$$
 \begin{bmatrix} 1 & 2 & 0 & 0 \\ 0 & 0 & 1 & 0 \end{bmatrix} \qquad \text{and} \begin{bmatrix} 1 & 2 & 0 & -1 \\ 0 & 0 & 1 & 2 \end{bmatrix} 
$$

so that

$$
 R = \begin{bmatrix} 1 & 2 & 0 \\ 0 & 0 & 1 \end{bmatrix} \qquad \text{and} \qquad \mathbf{d} = \begin{bmatrix} -1 \\ 2 \end{bmatrix} 
$$

and

$$
 \mathbf{x}_n = \begin{bmatrix} -2 \\ 1 \\ 0 \end{bmatrix} \qquad \text{and} \qquad \mathbf{x}_p = \begin{bmatrix} -1 \\ 0 \\ 2 \end{bmatrix}. 
$$
 $\square$

---

**Problem 13. (§3.4, #35)** Suppose $K$ is the 9 by 9 second difference matrix (2’s on the diagonal, -1’s on the diagonal above and also below). Solve the equation $K\mathbf{x} = \mathbf{b} = (10, \ldots, 10)$. If you graph $x_1, \ldots, x_9$ above the points $1, \ldots, 9$ on the $x$ axis, I think the nine points fall on a parabola.

---

**Solution. (12 points)** Here’s some MATLAB code that should do this:

K = 2*eye(9) + diag(-1*ones(1,8),1) + diag(-1*ones(1,8),-1);
b = 10*ones(9,1);
x = K \ b

It gives back that


$$

\begin{bmatrix}
x_1 \\
x_2 \\
x_3 \\
x_4 \\
x_5 \\
x_6 \\
x_7 \\
x_8 \\
x_9
\end{bmatrix}
=
\begin{bmatrix}
45 \\
80 \\
105 \\
120 \\
125 \\
120 \\
105 \\
80 \\
45
\end{bmatrix}

$$


And for fun, the graph is indeed parabola-like:

![Graph](line.png)

$\square$

**Problem 14.** (\$3.4, \#36) Suppose $A\mathbf{x} = \mathbf{b}$ and $C\mathbf{x} = \mathbf{b}$ have the same (complete) solutions for every $\mathbf{b}$. Is it true that $A = C$?

*Solution.* **(12 points)** $\boxed{\text{Yes}}$. In order to check that $A = C$ as matrices, it’s enough to check that $A\mathbf{y} = C\mathbf{y}$ for all vectors $\mathbf{y}$ of the correct size (or just for the standard basis vectors, since multiplication by them “picks out the columns”). So let $\mathbf{y}$ be any vector of the correct size, and set $\mathbf{b} = A\mathbf{y}$. Then $\mathbf{y}$ is certainly a solution to $A\mathbf{x} = \mathbf{b}$, and so by our hypothesis must also be a solution to $C\mathbf{x} = \mathbf{b}$; in other words, $C\mathbf{y} = \mathbf{b} = A\mathbf{y}$. $\square$

MIT OpenCourseWare  
[http://ocw.mit.edu](http://ocw.mit.edu)

18.06 Linear Algebra  
Spring 2010

For information about citing these materials or our Terms of Use, visit: [http://ocw.mit.edu/terms](http://ocw.mit.edu/terms).

