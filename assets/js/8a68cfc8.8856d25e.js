"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9023],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},k=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),k=a,h=d["".concat(s,".").concat(k)]||d[k]||c[k]||r;return n?i.createElement(h,o(o({ref:t},u),{},{components:n})):i.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}k.displayName="MDXCreateElement"},63510:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Lab 1 Functions, Control"},o="Lab 1: Functions, Control | CS 61A Spring 2024",l={unversionedId:"curriculum-resource/cs61a/lab/lab01",id:"curriculum-resource/cs61a/lab/lab01",title:"Lab 1 Functions, Control",description:"Lab 1: Functions, Control",source:"@site/docs/curriculum-resource/cs61a/lab/lab01.md",sourceDirName:"curriculum-resource/cs61a/lab",slug:"/curriculum-resource/cs61a/lab/lab01",permalink:"/docs/curriculum-resource/cs61a/lab/lab01",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab 1 Functions, Control"},sidebar:"tutorialSidebar",previous:{title:"Lab 0 Getting Started",permalink:"/docs/curriculum-resource/cs61a/lab/lab00"},next:{title:"Higher-Order Functions, Lambda Expressions",permalink:"/docs/curriculum-resource/cs61a/lab/lab02"}},s={},p=[{value:"Lab 1: Functions, Control",id:"lab-1-functions-control",level:2},{value:"Starter Files",id:"starter-files",level:2},{value:"Required Questions",id:"required-questions",level:2},{value:"Getting Started Videos",id:"getting-started-videos",level:2},{value:"Review",id:"review",level:2},{value:"What Would Python Display? (WWPD)",id:"what-would-python-display-wwpd",level:2},{value:"Q1: WWPD: Control",id:"q1-wwpd-control",level:3},{value:"Q2: Debugging Quiz",id:"q2-debugging-quiz",level:3},{value:"Write Code",id:"write-code",level:2},{value:"Q3: Falling Factorial",id:"q3-falling-factorial",level:3},{value:"Q4: Divisible By k",id:"q4-divisible-by-k",level:3},{value:"Q5: Sum Digits",id:"q5-sum-digits",level:3},{value:"Syllabus Quiz",id:"syllabus-quiz",level:2},{value:"Q6: Syllabus Quiz",id:"q6-syllabus-quiz",level:3},{value:"Check Your Score Locally",id:"check-your-score-locally",level:2},{value:"Submit",id:"submit",level:2},{value:"Optional Questions",id:"optional-questions",level:2},{value:"Q7: WWPD: What If?",id:"q7-wwpd-what-if",level:3},{value:"Q8: Double Eights",id:"q8-double-eights",level:3}],u={toc:p},d="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(d,(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-1-functions-control--cs-61a-spring-2024"},"Lab 1: Functions, Control | CS 61A Spring 2024"),(0,a.kt)("h2",{id:"lab-1-functions-control"},"Lab 1: Functions, Control"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{target:"_blank",href:n(62593).Z},"lab01.zip"))),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Due by 11:59pm on Wednesday, January 24.")),(0,a.kt)("h2",{id:"starter-files"},"Starter Files"),(0,a.kt)("p",null,"Download ",(0,a.kt)("a",{target:"_blank",href:n(62593).Z},"lab01.zip"),". Inside the archive, you will find starter files for the questions in this lab, along with a copy of the ",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org//lab/lab01/ok"},"Ok")," autograder."),(0,a.kt)("h2",{id:"required-questions"},"Required Questions"),(0,a.kt)("h2",{id:"getting-started-videos"},"Getting Started Videos"),(0,a.kt)("p",null,"These videos may provide some helpful direction for tackling the coding problems on this assignment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"To see these videos, you should be logged into your berkeley.edu email.")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/playlist?list=PLx38hZJ5RLZdIweNNPm4tZYMrVXd76H_l"},"YouTube link")),(0,a.kt)("h2",{id:"review"},"Review"),(0,a.kt)("p",null,"Here are the most common ways to run Python on a file."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Using no command-line options will run the code in the file you provide and return you to the command line. If your file just contains function definitions, you'll see no output unless there is a syntax error."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"python3 lab00.py\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"-i")),": The ",(0,a.kt)("inlineCode",{parentName:"p"},"-i")," option runs the code in the file you provide, then opens an interactive session (with a ",(0,a.kt)("inlineCode",{parentName:"p"},">>>")," prompt). You can then evaluate expressions, for example calling functions you defined. To exit, type ",(0,a.kt)("inlineCode",{parentName:"p"},"exit()"),". You can also use the keyboard shortcut ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-D")," on Linux/Mac machines or ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl-Z Enter")," on Windows."),(0,a.kt)("p",{parentName:"li"},"If you edit the Python file while running it interactively, you will need to exit and restart the interpreter in order for those changes to take effect."),(0,a.kt)("p",{parentName:"li"},"Here's how we can run ",(0,a.kt)("inlineCode",{parentName:"p"},"lab00.py")," interactively:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"python3 -i lab00.py\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"-m doctest")),": Runs the doctests in a file, which are the examples in the docstrings of functions."),(0,a.kt)("p",{parentName:"li"},"Each test in the file consists of ",(0,a.kt)("inlineCode",{parentName:"p"},">>>")," followed by some Python code and the expected output."),(0,a.kt)("p",{parentName:"li"},"Here's how we can run the doctests in ",(0,a.kt)("inlineCode",{parentName:"p"},"lab00.py"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"}," python3 -m doctest lab00.py\n")),(0,a.kt)("p",{parentName:"li"},"When our code passes all of the doctests, no output is displayed. Otherwise, information about the tests that failed will be displayed."))),(0,a.kt)("p",null,"In 61A, we use a program called OK for autograding labs, homeworks, and projects."),(0,a.kt)("p",null,"To use Ok to test a function, run the following command (replacing ",(0,a.kt)("inlineCode",{parentName:"p"},"FUNCTION")," with the name of the function):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q FUNCTION\n")),(0,a.kt)("p",null,"If your function contains a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," that starts with ",(0,a.kt)("inlineCode",{parentName:"p"},'"DEBUG:"'),", then this line will be ignored by OK. (Otherwise, including extra ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," calls can cause tests to fail because of the additional output displayed.)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'print("DEBUG:", x)\n')),(0,a.kt)("p",null,"There are more features described on the ",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/using-ok"},"Using OK page"),". ",(0,a.kt)("strong",{parentName:"p"},"You can quickly generate most ok commands at ",(0,a.kt)("a",{parentName:"strong",href:"https://go.cs61a.org/ok-help"},"ok-help"),".")),(0,a.kt)("p",null,"Here are examples of the division-related operators in Python 3:"),(0,a.kt)("p",null,"| True Division: ",(0,a.kt)("inlineCode",{parentName:"p"},"/"),(0,a.kt)("br",{parentName:"p"}),"\n","(decimal division) | Floor Division: ",(0,a.kt)("inlineCode",{parentName:"p"},"//"),(0,a.kt)("br",{parentName:"p"}),"\n","(integer division) | Modulo: ",(0,a.kt)("inlineCode",{parentName:"p"},"%"),(0,a.kt)("br",{parentName:"p"}),"\n","(remainder) |\n| --- | --- | --- |\n| "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 1 / 5\n0.2\n>>> 25 / 4\n6.25\n\n>>> 4 / 2\n2.0\n\n>>> 5 / 0\nZeroDivisionError\n\n")),(0,a.kt)("p",null," | "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 1 // 5 # truncate result of true division\n0\n\n>>> 25 // 4\n6\n\n>>> 4 // 2\n2\n\n>>> 5 // 0\nZeroDivisionError\n\n")),(0,a.kt)("p",null," | "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> 1 % 5\n1\n\n>>> 25 % 4\n1\n\n>>> 4 % 2\n0\n\n>>> 5 % 0\nZeroDivisionError\n\n")),(0,a.kt)("p",null," |"),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"ZeroDivisionError")," occurs when dividing by 0."),(0,a.kt)("p",null,"One useful technique involving the ",(0,a.kt)("inlineCode",{parentName:"p"},"%")," operator is to check whether a number ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," is divisible by another number ",(0,a.kt)("inlineCode",{parentName:"p"},"y"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"x % y == 0\n")),(0,a.kt)("p",null,"For example, in order to check if ",(0,a.kt)("inlineCode",{parentName:"p"},"x")," is an even number: ",(0,a.kt)("inlineCode",{parentName:"p"},"x % 2 == 0")),(0,a.kt)("p",null,"Most functions that you define will contain a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement that provides the value of the call expression used to call the function."),(0,a.kt)("p",null,"When Python executes a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement, the function call terminates immediately. If Python reaches the end of the function body without executing a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement, the function returns ",(0,a.kt)("inlineCode",{parentName:"p"},"None"),"."),(0,a.kt)("p",null,"In contrast, the ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," function is used to display values. Unlike a ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," statement, when Python evaluates a call to ",(0,a.kt)("inlineCode",{parentName:"p"},"print"),", the function does ",(0,a.kt)("em",{parentName:"p"},"not")," terminate immediately."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"def what_prints():\n    print('Hello World!')\n    return 'Exiting this function.'\n    print('61A is awesome!')\n\n>>> what_prints()\nHello World!\n'Exiting this function.'\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Notice also that ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," will display text ",(0,a.kt)("strong",{parentName:"p"},"without the quotes"),", but ",(0,a.kt)("inlineCode",{parentName:"p"},"return")," will preserve the quotes.")),(0,a.kt)("h2",{id:"what-would-python-display-wwpd"},"What Would Python Display? (WWPD)"),(0,a.kt)("h3",{id:"q1-wwpd-control"},"Q1: WWPD: Control"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Use Ok to test your knowledge with the following "What Would Python Display?" questions:'),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"python3 ok -q control -u\n"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> def xk(c, d):\n...     if c == 4:\n...         return 6\n...     elif d >= 4:\n...         return 6 + 7 + c\n...     else:\n...         return 25\n>>> xk(10, 10)\n______23\n>>> xk(10, 6)\n______23\n>>> xk(4, 6)\n______6\n>>> xk(0, 0)\n______25\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> def how_big(x):\n...     if x > 10:\n...         print('huge')\n...     elif x > 5:\n...         return 'big'\n...     if x > 0:\n...         print('positive')\n...     else:\n...         print(0)\n>>> how_big(7)         # A returned string is displayed with single quotes\n______'big'\n>>> print(how_big(7))  # A printed string has no quotes\n______big\n>>> how_big(12)\n______huge\npositive\n>>> print(how_big(12))\n______huge\npositive\nNone\n>>> print(how_big(1), how_big(0))\n______positive\n0\nNone None\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> n = 3\n>>> while n >= 0:\n...     n -= 1\n...     print(n)\n______2\n1\n0\n-1\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> negative = -12\n>>> while negative:  # All numbers are true values except 0\n...    if negative + 6:\n...        print(negative)\n...    negative += 3\n______-12\n-9\n-3\n")),(0,a.kt)("h3",{id:"q2-debugging-quiz"},"Q2: Debugging Quiz"),(0,a.kt)("p",null,"The following is a quick quiz on different debugging techniques that will be helpful for you to use in this class. You can refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/debugging/"},"debugging article")," to answer the questions."),(0,a.kt)("p",null,"Use Ok to test your understanding:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q debugging-quiz -u\n")),(0,a.kt)("h2",{id:"write-code"},"Write Code"),(0,a.kt)("h3",{id:"q3-falling-factorial"},"Q3: Falling Factorial"),(0,a.kt)("p",null,"Let's write a function ",(0,a.kt)("inlineCode",{parentName:"p"},"falling"),', which is a "falling" factorial that takes two arguments, ',(0,a.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),", and returns the product of ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," consecutive numbers, starting from ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," and working downwards. When ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," is 0, the function should return 1."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def falling(n, k):\n    """Compute the falling factorial of n to depth k.\n\n    >>> falling(6, 3)  # 6 * 5 * 4\n    120\n    >>> falling(4, 3)  # 4 * 3 * 2\n    24\n    >>> falling(4, 1)  # 4\n    4\n    >>> falling(4, 0)\n    1\n    """\n    "*** YOUR CODE HERE ***"\n\n')),(0,a.kt)("p",null,"Use Ok to test your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q falling\n")),(0,a.kt)("h3",{id:"q4-divisible-by-k"},"Q4: Divisible By k"),(0,a.kt)("p",null,"Write a function ",(0,a.kt)("inlineCode",{parentName:"p"},"divisible_by_k")," that takes positive integers ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"k"),". It prints all positive integers less than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," that are divisible by ",(0,a.kt)("inlineCode",{parentName:"p"},"k")," from smallest to largest. Then, it returns how many numbers were printed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def divisible_by_k(n, k):\n    """\n    >>> a = divisible_by_k(10, 2)  # 2, 4, 6, 8, and 10 are divisible by 2\n    2\n    4\n    6\n    8\n    10\n    >>> a\n    5\n    >>> b = divisible_by_k(3, 1)  # 1, 2, and 3 are divisible by 1\n    1\n    2\n    3\n    >>> b\n    3\n    >>> c = divisible_by_k(6, 7)  # There are no integers up to 6 divisible by 7\n    >>> c\n    0\n    """\n    "*** YOUR CODE HERE ***"\n\n')),(0,a.kt)("p",null,"Use Ok to test your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q divisible_by_k\n")),(0,a.kt)("h3",{id:"q5-sum-digits"},"Q5: Sum Digits"),(0,a.kt)("p",null,"Write a function that takes in a nonnegative integer and sums its digits. (Using floor division and modulo might be helpful here!)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def sum_digits(y):\n    """Sum all the digits of y.\n\n    >>> sum_digits(10) # 1 + 0 = 1\n    1\n    >>> sum_digits(4224) # 4 + 2 + 2 + 4 = 12\n    12\n    >>> sum_digits(1234567890)\n    45\n    >>> a = sum_digits(123) # make sure that you are using return rather than print\n    >>> a\n    6\n    """\n    "*** YOUR CODE HERE ***"\n\n')),(0,a.kt)("p",null,"Use Ok to test your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q sum_digits\n")),(0,a.kt)("h2",{id:"syllabus-quiz"},"Syllabus Quiz"),(0,a.kt)("h3",{id:"q6-syllabus-quiz"},"Q6: Syllabus Quiz"),(0,a.kt)("p",null,"Please fill out the ",(0,a.kt)("a",{parentName:"p",href:"https://go.cs61a.org/syllabus-quiz"},"Syllabus Quiz"),", which confirms your understanding of CS 61A ",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org/articles/about/"},"course policies"),"."),(0,a.kt)("h2",{id:"check-your-score-locally"},"Check Your Score Locally"),(0,a.kt)("p",null,"You can locally check your score on each question of this assignment by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok --score\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This does NOT submit the assignment!")," When you are satisfied with your score, submit the assignment to Gradescope to receive credit for it."),(0,a.kt)("h2",{id:"submit"},"Submit"),(0,a.kt)("p",null,"Submit this assignment by uploading any files you've edited ",(0,a.kt)("strong",{parentName:"p"},"to the appropriate Gradescope assignment.")," ",(0,a.kt)("a",{parentName:"p",href:"https://cs61a.org/lab/lab00/#submit-with-gradescope"},"Lab 00")," has detailed instructions."),(0,a.kt)("p",null,"In addition, all students who are ",(0,a.kt)("strong",{parentName:"p"},"not")," in the mega lab must complete this ",(0,a.kt)("a",{parentName:"p",href:"https://go.cs61a.org/lab-att"},"attendance form"),". Submit this form each week, whether you attend lab or missed it for a good reason. The attendance form is not required for mega section students."),(0,a.kt)("h2",{id:"optional-questions"},"Optional Questions"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"These questions are optional. If you don't complete them, you will still receive credit for lab. They are great practice, so do them anyway!")),(0,a.kt)("h3",{id:"q7-wwpd-what-if"},"Q7: WWPD: What If?"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'Use Ok to test your knowledge with the following "What Would Python Display?" questions:'),(0,a.kt)("pre",{parentName:"blockquote"},(0,a.kt)("code",{parentName:"pre"},"python3 ok -q if-statements -u\n")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"Hint"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"print")," (unlike ",(0,a.kt)("inlineCode",{parentName:"p"},"return"),") does ",(0,a.kt)("em",{parentName:"p"},"not")," cause the function to exit.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> def ab(c, d):\n...     if c > 5:\n...         print(c)\n...     elif c > 7:\n...         print(d)\n...     print('foo')\n>>> ab(10, 20)\n______10\nfoo\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> def bake(cake, make):\n...     if cake == 0:\n...         cake = cake + 1\n...         print(cake)\n...     if cake == 1:\n...         print(make)\n...     else:\n...         return cake\n...     return make\n>>> bake(0, 29)\n______1\n29\n29\n>>> bake(1, \"mashed potatoes\")\n______mashed potatoes\n'mashed potatoes'\n")),(0,a.kt)("h3",{id:"q8-double-eights"},"Q8: Double Eights"),(0,a.kt)("p",null,"Write a function that takes in a number and determines if the digits contain two adjacent 8s."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'def double_eights(n):\n    """Return true if n has two eights in a row.\n    >>> double_eights(8)\n    False\n    >>> double_eights(88)\n    True\n    >>> double_eights(2882)\n    True\n    >>> double_eights(880088)\n    True\n    >>> double_eights(12345)\n    False\n    >>> double_eights(80808080)\n    False\n    """\n    "*** YOUR CODE HERE ***"\n\n')),(0,a.kt)("p",null,"Use Ok to test your code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 ok -q double_eights\n")))}c.isMDXComponent=!0},62593:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/files/lab01-a931ac14abc3de4d9162988666fd9c2f.zip"}}]);