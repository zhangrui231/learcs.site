# Fourier Sine Series Examples

## 16th November 2007

The Fourier sine series for a function $f(x)$ defined on $x \in [0, 1]$ writes $f(x)$ as


$$
 f(x) = \sum_{n=1}^{\infty} b_n \sin(n \pi x) 
$$


for some coefficients $b_n$. Because of orthogonality, we can compute the $b_n$ very simply: for any given $m$, we integrate both sides against $\sin(m \pi x)$. In the summation, this gives zero for $n \neq m$, and $\int_0^1 \sin^2(m \pi x) = 1/2$ for $n = m$, resulting in the equation


$$
 b_m = 2 \int_0^1 f(x) \sin(m \pi x) \, dx. 
$$


Fourier claimed (without proof) in 1822 that any function $f(x)$ can be expanded in terms of sines in this way, even discontinuous function. This turned out to be false for various badly behaved $f(x)$, and controversy over the exact conditions for convergence of the Fourier series lasted for well over a century, until the question was finally settled by Carleson (1966) and Hunt (1968): any function $f(x)$ where $\int |f(x)|^p \, dx$ is finite for some $p > 1$ has a Fourier series that converges almost everywhere to $f(x)$ [except at isolated points]. At points where $f(x)$ has a jump discontinuity, the Fourier series converges to the midpoint of the jump. So, as long as one does not care about crazy divergent functions or the function value exactly at points of discontinuity (which usually has no physical significance), Fourier's remarkable claim is essentially true.

To illustrate the convergence of the sine series, let's consider a couple of examples. First, consider the function $f(x) = 1$, which seems impossible to expand in sines because it is not zero at the endpoints, but nevertheless it works...if you don't care about the value exactly at $x = 0$ or $x = 1$. From the formula above, we obtain


$$
 b_m = 2 \int_0^1 \sin(n \pi x) \, dx = -\frac{2}{n \pi} \cos(n \pi x) \bigg|_0^1 = \left\{ \begin{array}{cc} \frac{4}{n \pi} & n \text{ odd} \\ 0 & n \text{ even} \end{array} \right., 
$$


and thus


$$
 f(x) = 1 = \frac{4}{\pi} \sin(\pi x) + \frac{4}{3 \pi} \sin(3 \pi x) + \frac{4}{5 \pi} \sin(5 \pi x) + \cdots. 
$$


This is plotted for 1, 2, 4, 8, 16, and 32 terms in figure. 1, showing that it does indeed approach $f(x) = 1$ almost everywhere. There is some oscillation at the point of discontinuity, which is known as a Gibb's phenomenon.

![Fourier sine series for $f(x) = 1$, truncated to a finite number of terms (from 1 to 32), showing that the series indeed converges everywhere to $f(x)$, except exactly at the endpoints, as the number of terms is increased.](line.png)

Figure 1: Fourier sine series for $f(x) = 1$, truncated to a finite number of terms (from 1 to 32), showing that the series indeed converges everywhere to $f(x)$, except exactly at the endpoints, as the number of terms is increased.

Note that the $n$ even coefficients were zero. The reason for this is simple: for even $n$, the $\sin(n\pi x)$ function is odd around the midpoint $x = 1/2$, whereas $f(x) = 1$ is even around the midpoint, so the integral of their product is zero.

Now, let's try another example, one for which the endpoints are zero and there are no discontinuities, but there is a discontinuous slope: $f(x) = \frac{1}{2} - |x - \frac{1}{2}|$, which looks like a triangle when plotted. Again, this function is even around the mid-point $x = 1/2$, so only the odd- $n$ coefficients will be non-zero. For these coefficients (since the integrand is symmetric around $x = 1/2$), we only need to do the integral over half the region:


$$
 b_m \text{ odd} = 2 \int_0^1 f(x) \sin(m\pi x) \, dx = 4 \int_0^{1/2} x \sin(m\pi x) \, dx = \frac{4}{(m\pi)^2} (-1)^{\frac{m-1}{2}}, 
$$


where for the last step one must do some tedious integration by parts, and thus


$$
 f(x) = \frac{4}{\pi^2} \sin(\pi x) - \frac{4}{(3\pi)^2} \sin(3\pi x) + \frac{4}{(5\pi)^2} \sin(5\pi x) + \cdots. 
$$


This is plotted in figure. 2 for 1 to 8 terms—it converges faster than for $f(x) = 1$ because there are no discontinuities in the function to match, only discontinuities in the derivative.

![Fourier sine series for the triangle function](line.png)

Figure 2: Fourier sine series (blue lines) for the triangle function $f(x) = \frac{1}{2} - |x - \frac{1}{2}|$ (dashed black lines), truncated to a finite number of terms (from 1 to 32), showing that the series indeed converges everywhere to $f(x)$.

