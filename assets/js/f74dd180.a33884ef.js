"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[6972],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},h=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),h=r,m=c["".concat(s,".").concat(h)]||c[h]||d[h]||a;return t?i.createElement(m,o(o({ref:n},p),{},{components:t})):i.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[c]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=t[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}h.displayName="MDXCreateElement"},25365:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var i=t(87462),r=(t(67294),t(3905));const a={title:"Lab 3 Solutions"},o="Lab 3 Solutions | CS 61A Spring 2024",l={unversionedId:"curriculum-resource/cs61a/lab/sol-lab03",id:"curriculum-resource/cs61a/lab/sol-lab03",title:"Lab 3 Solutions",description:"Lab 3 Solutions",source:"@site/docs/curriculum-resource/cs61a/lab/sol-lab03.md",sourceDirName:"curriculum-resource/cs61a/lab",slug:"/curriculum-resource/cs61a/lab/sol-lab03",permalink:"/docs/curriculum-resource/cs61a/lab/sol-lab03",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 3 Solutions"},sidebar:"tutorialSidebar",previous:{title:"Lab 2 Solutions",permalink:"/docs/curriculum-resource/cs61a/lab/sol-lab02"},next:{title:"Lab 4 Solutions",permalink:"/docs/curriculum-resource/cs61a/lab/sol-lab04"}},s={},u=[{value:"Lab 3 Solutions",id:"lab-3-solutions",level:2},{value:"Solution Files",id:"solution-files",level:2},{value:"Topics",id:"topics",level:2},{value:"Lists",id:"lists",level:2},{value:"List Comprehensions",id:"list-comprehensions",level:2},{value:"For Statements",id:"for-statements",level:2},{value:"Ranges",id:"ranges",level:2},{value:"Required Questions",id:"required-questions",level:2},{value:"Lists",id:"lists-1",level:2},{value:"Q1: WWPD: Lists &amp; Ranges",id:"q1-wwpd-lists--ranges",level:3},{value:"Q2: Print If",id:"q2-print-if",level:3},{value:"Q3: Close",id:"q3-close",level:3},{value:"List Comprehensions",id:"list-comprehensions-1",level:2},{value:"Q4: WWPD: List Comprehensions",id:"q4-wwpd-list-comprehensions",level:3},{value:"Q5: Close List",id:"q5-close-list",level:3},{value:"Q6: Squares Only",id:"q6-squares-only",level:3},{value:"Recursion",id:"recursion",level:2},{value:"Q7: Double Eights",id:"q7-double-eights",level:3},{value:"Q8: Making Onions",id:"q8-making-onions",level:3},{value:"Check Your Score Locally",id:"check-your-score-locally",level:2},{value:"Submit",id:"submit",level:2}],p={toc:u},c="wrapper";function d(e){let{components:n,...a}=e;return(0,r.kt)(c,(0,i.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lab-3-solutions--cs-61a-spring-2024"},"Lab 3 Solutions | CS 61A Spring 2024"),(0,r.kt)("h2",{id:"lab-3-solutions"},"Lab 3 Solutions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{target:"_blank",href:t(36394).Z},"lab03.zip"))),(0,r.kt)("h2",{id:"solution-files"},"Solution Files"),(0,r.kt)("h2",{id:"topics"},"Topics"),(0,r.kt)("p",null,"Consult this section if you need a refresher on the material for this lab. It's okay to skip directly to ",(0,r.kt)("a",{parentName:"p",href:"#required-questions"},"the questions")," and refer back here should you get stuck."),(0,r.kt)("h2",{id:"lists"},"Lists"),(0,r.kt)("p",null,"A list is a data structure that can hold an ordered collection of items. These items, known as elements, can be of any data type, including numbers, strings, or even other lists. A comma-separated list of expressions in square brackets creates a list:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> list_of_values = [2, 1, 3, True, 3]\n>>> nested_list = [2, [1, 3], [True, [3]]]\n")),(0,r.kt)("p",null,"Each position in a list has an index, with the left-most element indexed ",(0,r.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> list_of_values[0]\n2\n>>> nested_list[1]\n[1, 3]\n")),(0,r.kt)("p",null,"A negative index counts from the end, with the right-most element indexed ",(0,r.kt)("inlineCode",{parentName:"p"},"-1"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> nested_list[-1]\n[True, [3]]\n")),(0,r.kt)("p",null,"Adding lists creates a longer list containing the elements of the added lists."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [1, 2] + [3] + [4, 5]\n[1, 2, 3, 4, 5]\n")),(0,r.kt)("h2",{id:"list-comprehensions"},"List Comprehensions"),(0,r.kt)("p",null,"A list comprehension describes the elements in a list and evaluates to a new list containing those elements."),(0,r.kt)("p",null,"There are two forms:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[<expression> for <element> in <sequence>]\n[<expression> for <element> in <sequence> if <conditional>]\n")),(0,r.kt)("p",null,"Here's an example that starts with ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4]"),", picks out the even elements ",(0,r.kt)("inlineCode",{parentName:"p"},"2")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"4")," using ",(0,r.kt)("inlineCode",{parentName:"p"},"if i % 2 == 0"),", then squares each of these using ",(0,r.kt)("inlineCode",{parentName:"p"},"i*i"),". The purpose of ",(0,r.kt)("inlineCode",{parentName:"p"},"for i")," is to give a name to each element in ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4]"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [i*i for i in [1, 2, 3, 4] if i % 2 == 0]\n[4, 16]\n")),(0,r.kt)("p",null,"This list comprehension evaluates to a list of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The value of ",(0,r.kt)("inlineCode",{parentName:"li"},"i*i")),(0,r.kt)("li",{parentName:"ul"},"For each element ",(0,r.kt)("inlineCode",{parentName:"li"},"i")," in the sequence ",(0,r.kt)("inlineCode",{parentName:"li"},"[1, 2, 3, 4]")),(0,r.kt)("li",{parentName:"ul"},"For which ",(0,r.kt)("inlineCode",{parentName:"li"},"i % 2 == 0"))),(0,r.kt)("p",null,"In other words, this list comprehension will create a new list that contains the square of every even element of the original list ",(0,r.kt)("inlineCode",{parentName:"p"},"[1, 2, 3, 4]"),"."),(0,r.kt)("p",null,"We can also rewrite a list comprehension as an equivalent ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," statement, such as for the example above:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> result = []\n>>> for i in [1, 2, 3, 4]:\n...     if i % 2 == 0:\n...         result = result + [i*i]\n>>> result\n[4, 16]\n")),(0,r.kt)("h2",{id:"for-statements"},"For Statements"),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," statement executes code for each element of a sequence, such as a list or range. Each time the code is executed, the name right after ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," is bound to a different element of the sequence."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"for <name> in <expression>:\n    <suite>\n")),(0,r.kt)("p",null,"First, ",(0,r.kt)("inlineCode",{parentName:"p"},"<expression>")," is evaluated. It must evaluate to a sequence. Then, for each element in the sequence in order,"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<name>")," is bound to the element."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"<suite>")," is executed.")),(0,r.kt)("p",null,"Here is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'for x in [-1, 4, 2, 0, 5]:\n    print("Current elem:", x)\n')),(0,r.kt)("p",null,"This would display the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Current elem: -1\nCurrent elem: 4\nCurrent elem: 2\nCurrent elem: 0\nCurrent elem: 5\n")),(0,r.kt)("h2",{id:"ranges"},"Ranges"),(0,r.kt)("p",null,"A range is a data structure that holds integer sequences. A range can be created by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"range(stop)")," contains 0, 1, ..., ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," - 1"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"range(start, stop)")," contains ",(0,r.kt)("inlineCode",{parentName:"li"},"start"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"start")," + 1, ..., ",(0,r.kt)("inlineCode",{parentName:"li"},"stop")," - 1")),(0,r.kt)("p",null,"Notice how the range function doesn't include the ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," value; it generates numbers up to, but not including, the ",(0,r.kt)("inlineCode",{parentName:"p"},"stop")," value."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> for i in range(3):\n...     print(i)\n...\n0\n1\n2\n")),(0,r.kt)("p",null,"While ranges and lists are both ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikibooks.org/wiki/Python_Programming/Sequences"},"sequences"),", a range object is different from a list. A range can be converted to a list by calling ",(0,r.kt)("inlineCode",{parentName:"p"},"list()"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> range(3, 6)\nrange(3, 6)  # this is a range object\n>>> list(range(3, 6))\n[3, 4, 5]  # list() converts the range object to a list\n>>> list(range(5))\n[0, 1, 2, 3, 4]\n>>> list(range(1, 6))\n[1, 2, 3, 4, 5]\n")),(0,r.kt)("h2",{id:"required-questions"},"Required Questions"),(0,r.kt)("h2",{id:"lists-1"},"Lists"),(0,r.kt)("h3",{id:"q1-wwpd-lists--ranges"},"Q1: WWPD: Lists & Ranges"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Use Ok to test your knowledge with the following "What Would Python Display?" questions:'),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"python3 ok -q lists-wwpd -u\n"))),(0,r.kt)("p",null,"Predict what Python will display when you type the following into the interactive interpreter. Then try it to check your answers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> s = [7//3, 5, [4, 0, 1], 2]\n>>> s[0]\n______2\n>>> s[2]\n______[4, 0, 1]\n>>> s[-1]\n______2\n>>> len(s)\n______4\n>>> 4 in s\n______False\n>>> 4 in s[2]\n______True\n>>> s[2] + [3 + 2]\n______[4, 0, 1, 5]\n>>> 5 in s[2]\n______False\n>>> s[2] * 2\n______[4, 0, 1, 4, 0, 1]\n>>> list(range(3, 6))\n______[3, 4, 5]\n>>> range(3, 6)\n______range(3, 6)\n>>> r = range(3, 6)\n>>> [r[0], r[2]]\n______[3, 5]\n>>> range(4)[-1]\n______3\n")),(0,r.kt)("h3",{id:"q2-print-if"},"Q2: Print If"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"print_if"),", which takes a list ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and a one-argument function ",(0,r.kt)("inlineCode",{parentName:"p"},"f"),". It prints each element ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," for which ",(0,r.kt)("inlineCode",{parentName:"p"},"f(x)")," returns a true value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def print_if(s, f):\n    """Print each element of s for which f returns a true value.\n\n    >>> print_if([3, 4, 5, 6], lambda x: x > 4)\n    5\n    6\n    >>> result = print_if([3, 4, 5, 6], lambda x: x % 2 == 0)\n    4\n    6\n    >>> print(result)  # print_if should return None\n    None\n    """\n    for x in s:\nif f(x):\n            print(x)\n')),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q print_if\n")),(0,r.kt)("h3",{id:"q3-close"},"Q3: Close"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),", which takes a list of numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and a non-negative integer ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),". It returns how many of the elements of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," are within ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," of their index. That is, the absolute value of the difference between the element and its index is less than or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Remember that list is "zero-indexed"; the index of the first element is ',(0,r.kt)("inlineCode",{parentName:"p"},"0"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def close(s, k):\n    """Return how many elements of s that are within k of their index.\n\n    >>> t = [6, 2, 4, 3, 5]\n    >>> close(t, 0)  # Only 3 is equal to its index\n    1\n    >>> close(t, 1)  # 2, 3, and 5 are within 1 of their index\n    3\n    >>> close(t, 2)  # 2, 3, 4, and 5 are all within 2 of their index\n    4\n    >>> close(list(range(10)), 0)\n    10\n    """\n    count = 0\n    for i in range(len(s)):  # Use a range to loop over indices\nif abs(i - s[i]) <= k:\n            count += 1    return count\n')),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q close\n")),(0,r.kt)("h2",{id:"list-comprehensions-1"},"List Comprehensions"),(0,r.kt)("h3",{id:"q4-wwpd-list-comprehensions"},"Q4: WWPD: List Comprehensions"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Use Ok to test your knowledge with the following "What Would Python Display?" questions:'),(0,r.kt)("pre",{parentName:"blockquote"},(0,r.kt)("code",{parentName:"pre"},"python3 ok -q list-comprehensions-wwpd -u\n"))),(0,r.kt)("p",null,"Predict what Python will display when you type the following into the interactive interpreter. Then try it to check your answers."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},">>> [2 * x for x in range(4)]\n______[0, 2, 4, 6]\n>>> [y for y in [6, 1, 6, 1] if y > 2]\n______[6, 6]\n>>> [[1] + s for s in [[4], [5, 6]]]\n______[[1, 4], [1, 5, 6]]\n>>> [z + 1 for z in range(10) if z % 3 == 0]\n______[1, 4, 7, 10]\n")),(0,r.kt)("h3",{id:"q5-close-list"},"Q5: Close List"),(0,r.kt)("p",null,"Implement ",(0,r.kt)("inlineCode",{parentName:"p"},"close_list"),", which takes a list of numbers ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," and a non-negative integer ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),". It returns a list of the elements of ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," that are within ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," of their index. That is, the absolute value of the difference between the element and its index is less than or equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"k"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def close_list(s, k):\n    """Return a list of the elements of s that are within k of their index.\n\n    >>> t = [6, 2, 4, 3, 5]\n    >>> close_list(t, 0)  # Only 3 is equal to its index\n    [3]\n    >>> close_list(t, 1)  # 2, 3, and 5 are within 1 of their index\n    [2, 3, 5]\n    >>> close_list(t, 2)  # 2, 3, 4, and 5 are all within 2 of their index\n    [2, 4, 3, 5]\n    """\nreturn [s[i] for i in range(len(s)) if abs(i - s[i]) <= k]\n')),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q close_list\n")),(0,r.kt)("h3",{id:"q6-squares-only"},"Q6: Squares Only"),(0,r.kt)("p",null,"Implement the function ",(0,r.kt)("inlineCode",{parentName:"p"},"squares"),", which takes in a list of positive integers. It returns a list that contains the square roots of the elements of the original list that are perfect squares. Use a list comprehension."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"To find if ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," is a perfect square, you can check if ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt(x)")," equals ",(0,r.kt)("inlineCode",{parentName:"p"},"round(sqrt(x))"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'from math import sqrt\n\ndef squares(s):\n    """Returns a new list containing square roots of the elements of the\n    original list that are perfect squares.\n\n    >>> seq = [8, 49, 8, 9, 2, 1, 100, 102]\n    >>> squares(seq)\n    [7, 3, 1, 10]\n    >>> seq = [500, 30]\n    >>> squares(seq)\n    []\n    """\nreturn [round(n ** 0.5) for n in s if n == round(n ** 0.5) ** 2]\n')),(0,r.kt)("p",null,"It might be helpful to construct a skeleton list comprehension to begin with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[round(sqrt(x)) for x in s if is_perfect_square(x)]\n")),(0,r.kt)("p",null,"This is great, but it requires that we have an ",(0,r.kt)("inlineCode",{parentName:"p"},"is_perfect_square")," function. How might we check if something is a perfect square?"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the square root of a number is a whole number, then it is a perfect square. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt(61) = 7.81024...")," (not a perfect square) and ",(0,r.kt)("inlineCode",{parentName:"p"},"sqrt(49) = 7")," (perfect square).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Once we obtain the square root of the number, we just need to check if something is a whole number. The ",(0,r.kt)("inlineCode",{parentName:"p"},"is_perfect_square")," function might look like:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"def is_perfect_square(x):\n    return is_whole(sqrt(x))\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"One last piece of the puzzle: to check if a number is whole, we just need to see if it has a decimal or not. The way we've chosen to do it in the solution is to compare the original number to the round version (thus removing all decimals), but a technique employing floor division (",(0,r.kt)("inlineCode",{parentName:"p"},"//"),") or something else entirely could work too."))),(0,r.kt)("p",null,"We've written all these helper functions to solve this problem, but they are actually all very short. Therefore, we can just copy the body of each into the original list comprehension, arriving at the solution we finally present."),(0,r.kt)("p",null,"Video walkthrough:"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://youtu.be/YwLFB9paET0"},"YouTube link")),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q squares\n")),(0,r.kt)("h2",{id:"recursion"},"Recursion"),(0,r.kt)("h3",{id:"q7-double-eights"},"Q7: Double Eights"),(0,r.kt)("p",null,"Write a ",(0,r.kt)("strong",{parentName:"p"},"recursive")," function that takes in a positive integer ",(0,r.kt)("inlineCode",{parentName:"p"},"n")," and determines if its digits contain two adjacent ",(0,r.kt)("inlineCode",{parentName:"p"},"8"),"s. Do not use ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"while"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Hint:")," Start by coming up with a recursive plan: the digits of a number have double eights if either (think of something that is straightforward to check) or double eights appear in the rest of the digits.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"def double_eights(n):\n    \"\"\" Returns whether or not n has two digits in row that\n    are the number 8. Assume n has at least two digits in it.\n\n    >>> double_eights(1288)\n    True\n    >>> double_eights(880)\n    True\n    >>> double_eights(538835)\n    True\n    >>> double_eights(284682)\n    False\n    >>> double_eights(588138)\n    True\n    >>> double_eights(78)\n    False\n    >>> from construct_check import check\n    >>> # ban iteration\n    >>> check(LAB_SOURCE_FILE, 'double_eights', ['While', 'For'])\n    True\n    \"\"\"\n    last, second_last = n % 10, n // 10 % 10\n    if last == 8 and second_last == 8:\n        return True\n    elif n < 100:\n        return False\n    return double_eights(n // 10)\n\n    # Alternate solution\n    last, second_last = n % 10, n // 10 % 10\n    if n < 10:\n        return False\n    return (last == 8 and second_last == 8) or double_eights(n // 10)\n\n    # Alternate solution with helper function: \n    def helper(num, prev_eight):\n        if num == 0:\n            return False\n        if num % 10 == 8:\n            if prev_eight:\n                return True\n            return helper(num // 10, True)\n        return helper(num // 10, False)\n    return helper(n, False)\n")),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q double_eights\n")),(0,r.kt)("h3",{id:"q8-making-onions"},"Q8: Making Onions"),(0,r.kt)("p",null,"Write a function ",(0,r.kt)("inlineCode",{parentName:"p"},"make_onion")," that takes in two one-argument functions, ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),". It returns a function that takes in three arguments: ",(0,r.kt)("inlineCode",{parentName:"p"},"x"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"y"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"limit"),". The returned function returns ",(0,r.kt)("inlineCode",{parentName:"p"},"True")," if it is possible to reach ",(0,r.kt)("inlineCode",{parentName:"p"},"y")," from ",(0,r.kt)("inlineCode",{parentName:"p"},"x")," using up to ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," calls to ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"g"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"False")," otherwise."),(0,r.kt)("p",null,"For example, if ",(0,r.kt)("inlineCode",{parentName:"p"},"f")," adds 1 and ",(0,r.kt)("inlineCode",{parentName:"p"},"g")," doubles, then it is possible to reach 25 from 5 in four calls: ",(0,r.kt)("inlineCode",{parentName:"p"},"f(g(g(f(5))))"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'def make_onion(f, g):\n    """Return a function can_reach(x, y, limit) that returns\n    whether some call expression containing only f, g, and x with\n    up to limit calls will give the result y.\n\n    >>> up = lambda x: x + 1\n    >>> double = lambda y: y * 2\n    >>> can_reach = make_onion(up, double)\n    >>> can_reach(5, 25, 4)      # 25 = up(double(double(up(5))))\n    True\n    >>> can_reach(5, 25, 3)      # Not possible\n    False\n    >>> can_reach(1, 1, 0)      # 1 = 1\n    True\n    >>> add_ing = lambda x: x + "ing"\n    >>> add_end = lambda y: y + "end"\n    >>> can_reach_string = make_onion(add_ing, add_end)\n    >>> can_reach_string("cry", "crying", 1)      # "crying" = add_ing("cry")\n    True\n    >>> can_reach_string("un", "unending", 3)     # "unending" = add_ing(add_end("un"))\n    True\n    >>> can_reach_string("peach", "folding", 4)   # Not possible\n    False\n    """\n    def can_reach(x, y, limit):\n        if limit < 0:\n            return False        elif x == y:\n            return True        else:\n            return can_reach(f(x), y, limit - 1) or can_reach(g(x), y, limit - 1)    return can_reach\n')),(0,r.kt)("p",null,"Use Ok to test your code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok -q make_onion\n")),(0,r.kt)("h2",{id:"check-your-score-locally"},"Check Your Score Locally"),(0,r.kt)("p",null,"You can locally check your score on each question of this assignment by running"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 ok --score\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"This does NOT submit the assignment!")," When you are satisfied with your score, submit the assignment to Gradescope to receive credit for it."),(0,r.kt)("h2",{id:"submit"},"Submit"),(0,r.kt)("p",null,"Submit this assignment by uploading any files you've edited ",(0,r.kt)("strong",{parentName:"p"},"to the appropriate Gradescope assignment.")," ",(0,r.kt)("a",{parentName:"p",href:"https://cs61a.org/lab/lab00/#submit-with-gradescope"},"Lab 00")," has detailed instructions."),(0,r.kt)("p",null,"In addition, all students who are ",(0,r.kt)("strong",{parentName:"p"},"not")," in the mega lab must complete this ",(0,r.kt)("a",{parentName:"p",href:"https://go.cs61a.org/lab-att"},"attendance form"),". Submit this form each week, whether you attend lab or missed it for a good reason. The attendance form is not required for mega section students."))}d.isMDXComponent=!0},36394:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/files/lab03-793313a8f1f9e26f8591b73513f12a92.zip"}}]);