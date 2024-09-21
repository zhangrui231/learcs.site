# Linear algebra & Numerical Analysis

## Introduction to MATLAB

**Marta Jarošová**

http://home1.vsb.cz/~dom033/

# Outline

- What is it MATLAB?
- MATLAB Environment and MATLAB Help
- Variables, matrices and vectors
- Strings
- .m files: scripts and functions
- Flow control
- 2D, 3D graphics
- Guide

# What is it MATLAB?

- MATLAB = “MATrix LABoratory”
- a high-performance language for technical computing
  - computation, visualization, and programming environment
- a modern programming language environment
  - sophisticated data structures
  - built-in editing and debugging tools
  - support of object-oriented programming
- an excellent tool for teaching and research

# Matlab tools

- powerful **built-in routines** enable a very wide variety of computations
- easy to use **graphics commands** that make the visualization of results immediately available
- specific applications are collected in **toolboxes**:
  - signal processing
  - symbolic computation
  - control theory
  - simulation
  - optimization
  - parallel computing
  - and several other fields of applied science and engineering

# Real world problem: Mining industry

![Steel support](line.png)
**steel support**

![Clamp joint](line.png)
**clamp joint**

![Overlap](line.png)
**overlap**

![Von Mises stress](line.png)
**Von Mises stress [MPa]**

![MatSol logo](line.png)


Note: Replace `image_path/` with the actual file path for each image.

# MATLAB Environment

![MATLAB Environment](line.png)

# Command Window

- Use the Command Window to enter variables and to run MATLAB functions and scripts. MATLAB displays the results.

- Press the up arrow key ↑ to recall a statement you previously typed. Edit the statement as needed, and then press **Enter** to run it.

![Command Window](line.png)

# Command History

- Statements you enter in the Command Window are logged in the Command History.
- You can view and search for previously run statements, as well as copy and execute selected statements
- You can also create a file from selected statements.

![Command History](line.png)

# Current Folder

- MATLAB limits where it looks for files so it can locate them more quickly.
- The file must be in one of these locations:
  - MATLAB current folder
  - A folder that is on the MATLAB search path
- The Current Folder browser is a tool for managing files.

![Current Folder](line.png)

# Workspace

![Workspace](line.png)

- The Workspace consists of the set of variables stored in memory.
- You add variables to the workspace by using functions, running function and script files, and loading saved workspaces.

# Help and Documentation

- There are different ways to get help, depending on your needs.

# Help: Contents

- Look for getting started guides, code examples, demos, and more.

![Help Contents](line.png)

This matrix matches the numbers in the engraving. Once you have entered the matrix, it is automatically remembered in the MATLAB workspace. You can refer to it simply as A. Now that you have A in the workspace, take a look at what makes it so interesting. Why is it magic?

## Back to Top

### sum, transpose, and diag

You are probably already aware that the special properties of a magic square have to do with the various ways of summing its elements. If you take the sum along any row or column, or along either of the two main diagonals, you will always get the same number. Let us verify that using MATLAB. The first statement to try is

# Help: Search Results

- In the Help browser Search field, enter the words you want to look for.

![Help Browser Search Results](line.png)

# MATLAB Help

## From command window

# Matrices and vectors

## Run in MATLAB Command Window

# Useful matrix functions

- A' – transpose of matrix A. Also transpose(A).
- det(A) – determinant of A
- eig(A) – eigenvalues and eigenvectors
- inv(A) – inverse of A
- svd(A) – singular value decomposition
- norm(A) – matrix or vector norm
- find(A) – find indices of elements that are nonzero. Can also pass an expression to this function, e.g. find(A > 1) finds the indices of elements of A greater than 1.

# Useful matrices

A few other useful matrices are:

- zeros – create a matrix of zeros
- ones – create a matrix of ones
- rand – create a matrix of random numbers
- eye – create an identity matrix

# Sparse matrices

Sparse matrix have the large number of zero elements

![Sparse Matrix 1](line.png)
![Sparse Matrix 2](line.png)

The sparse attribute allows MATLAB to:
- Store only the nonzero elements of the matrix, together with their indices.
- Reduce computation time by eliminating operations on zero elements.

# Sparse matrices

## Example


$$

A = \begin{pmatrix}
1 & 0 & 0 & 2 \\
0 & 3 & 0 & 0 \\
0 & 4 & 5 & 0 \\
0 & 0 & 6 & 7
\end{pmatrix}

$$


i = [1 2 3 4 1 3]';  %indices of rows
j = [1 2 2 3 4 4];  %indices of columns
v = [1 3 4 6 2 7]'; %values

A=[1 0 2 0 0; 0 1 0 0 1; 2 0 0 2 0; 3 1 2 0 0] %saved as full
B = sparse(A) % B saved as sparse
C = full(B) % C saved as full

# Sparse matrices

n=5; e=ones(n,1);     %vector of ones
A = spdiags([-e 2*e -e], -1:1, n, n); %sparse matrix nxn with
% 2's on diagonal and -1 on subdiagonale and superdiagonale

[I,J,V]=find(S); %returns a vector V containing the values
% that correspond to the row and column indices I and J.

I=[1 1 2 3]; J=[1 3 2 4]; V=[1 1.5 2 3.7]; m=5; n=6;
S=sparse(I,J,V,m,n); %generate mxn sparse matrix from I,J,V

spy(S)             %plots the sparsity pattern of the matrix S.
speye(5,4);        %sparse identity
nnz(S)             %number of nonzero elements

sprand, sprandn, sprandsym

# Strings

str = 'Dr. John Doe';  %create string

%join 2 strings
str1 = strcat(str, ',', '1970')  %ignore spaces
str2 = [str, ',', '1970']  %do not ignore the spaces

T=1323.56;
sprintf('Temperature T=%10.4fK', T)  %format data to string
ans =
Teperature T= 1323.5600K

strcmp('hello', 'Hello')  %compare 2 strings
ans =
0

# Scripts

- external files, have a filename extension of .m
- the simplest MATLAB programs, a sequence of statements and comments
- useful for automating blocks of MATLAB commands, such as computations you have to perform repeatedly from the command line
- operate on existing data in the workspace
- do not return output arguments – any variables that they create remain in the workspace

## goniom.m

# Editor

# Functions

- external files, have a filename extension of .m
- First line: function declaration with input and output arguments

# Functions

## Anonymous Functions

- a simple form of the MATLAB function that is defined within a single statement.
- You can define an anonymous function right at the command line, or within a function or script.

# Functions

## Primary and Subfunctions

- Any function (except anonymous) must be defined within a file.
- Each such function file contains a required *primary function* that appears first, and any number of *subfunctions* that may follow the primary.
- Primary functions can be called from outside of the file that defines them, while subfunctions cannot. Subfunctions are visible only to the primary function and other subfunctions within their own file.

### stat2.m

# Functions

## Nested Functions

- You can define functions within the body of another function. These are said to be *nested* within the outer function.
- A nested function has *access to the workspaces of all functions inside of which it is nested*. A variable that has a value assigned to it by the primary function can be read or overwritten by a function nested at any level within the primary.

# Flow Control: Conditional Control: if-else-elseif

# Conditional Control: switch

# Loop Control: for

- The `for` loop repeats a group of statements a fixed, predetermined number of times. A matching `end` delineates the statements.

# Loop Control: while

- The `while` loop repeats a group of statements an indefinite number of times under control of a logical condition. A matching end delineates the statements.

# 2D graphics: plot

# 3D graphics: mesh, surf

# Creating GUI with GUIDE

- GUIDE, the MATLAB Graphical User Interface Development Environment, provides a set of tools for creating graphical user interfaces (GUIs). These tools greatly simplify the process of laying out and programming GUIs

- When you open a GUI in GUIDE, it is displayed in the Layout Editor, which is the control panel for all of the GUIDE tools. The following figure shows the Layout Editor with a blank GUI template.

![Layout Editor with a blank GUI template](line.png)

# Creating GUI with GUIDE

![GUI Image](line.png)

# References

- **Matlab: Instructions to download:**
  - [http://homel.vsb.cz/~dom033/predmety/NMM/matlab_download](http://homel.vsb.cz/~dom033/predmety/NMM/matlab_download)

- **Introduction to MATLAB:**
  - [http://web.gps.caltech.edu/classes/ge11d/doc/matlab_Resource_Seminar.pdf](http://web.gps.caltech.edu/classes/ge11d/doc/matlab_Resource_Seminar.pdf)

- **David Houcque, INTRODUCTION TO MATLAB FOR ENGINEERING STUDENTS:**
  - [http://www.mccormick.northwestern.edu/docs/efirst/matlab.pdf](http://www.mccormick.northwestern.edu/docs/efirst/matlab.pdf)

- **Getting Started Guide:**
  - [http://www.mathworks.com/help/pdf_doc/matlab/getstart.pdf](http://www.mathworks.com/help/pdf_doc/matlab/getstart.pdf)

