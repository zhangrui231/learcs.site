"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[7406],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),u=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return i.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1953:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(87462),a=(n(67294),n(3905));const o={title:"Lab09"},r="Lab 9",l={unversionedId:"curriculum-resource/cs61c/labs/lab09",id:"curriculum-resource/cs61c/labs/lab09",title:"Lab09",description:"Lab 09",source:"@site/docs/curriculum-resource/cs61c/labs/lab09.md",sourceDirName:"curriculum-resource/cs61c/labs",slug:"/curriculum-resource/cs61c/labs/lab09",permalink:"/docs/curriculum-resource/cs61c/labs/lab09",draft:!1,tags:[],version:"current",frontMatter:{title:"Lab09"},sidebar:"tutorialSidebar",previous:{title:"Lab08",permalink:"/docs/curriculum-resource/cs61c/labs/lab08"},next:{title:"Lab10",permalink:"/docs/curriculum-resource/cs61c/labs/lab10"}},s={},u=[{value:"Lab 09",id:"lab-09",level:2},{value:"Objectives:",id:"objectives",level:2},{value:"Setup",id:"setup",level:2},{value:"Disclaimer",id:"disclaimer",level:2},{value:"Exercise 1 - Familiarize Yourself with the SIMD Functions",id:"exercise-1---familiarize-yourself-with-the-simd-functions",level:2},{value:"Exercise 2 - Writing SIMD Code",id:"exercise-2---writing-simd-code",level:2},{value:"Common Mistakes",id:"common-mistakes",level:3},{value:"Task",id:"task",level:3},{value:"Exercise 3 - Loop Unrolling",id:"exercise-3---loop-unrolling",level:2},{value:"Task",id:"task-1",level:3},{value:"Checkoff",id:"checkoff",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-9"},"Lab 9"),(0,a.kt)("h2",{id:"lab-09"},"Lab 09"),(0,a.kt)("h2",{id:"objectives"},"Objectives:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"TSW learn about and use various SIMD functions to perform data level parallelism"),(0,a.kt)("li",{parentName:"ul"},"TSW write code to SIMD-ize certain functions"),(0,a.kt)("li",{parentName:"ul"},"TSW learn about loop-unrolling and why it works")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Pull Lab 09 files from the lab starter repository with"),(0,a.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"NOTE THAT ALL CODE USING SSE INSTRUCTIONS IS GUARANTEED TO WORK ON THE HIVE MACHINES AND IT MAY NOT WORK ELSEWHERE")),(0,a.kt)("p",null,"Many newer processors support SSE intrinsics, so it is certainly possible that your machine will be sufficient, but you may not see accurate speedups. Ideally, you should ssh into one of the hive machines to run this lab. Additionally, many of the performance characteristics asked about later on this lab are more likely to show up on the Hive."),(0,a.kt)("h2",{id:"exercise-1---familiarize-yourself-with-the-simd-functions"},"Exercise 1 - Familiarize Yourself with the SIMD Functions"),(0,a.kt)("p",null,"Given the large number of available SIMD intrinsics we want you to learn how to find the ones that you\u2019ll need in your application."),(0,a.kt)("p",null,"For this mini-exercise, we ask you to look at the ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20230923035841/https://software.intel.com/sites/landingpage/IntrinsicsGuide/"},"Intel Intrinsics Guide"),". Open this page and once there, click the checkboxes for everything that begins with \u201cSSE\u201d."),(0,a.kt)("p",null,"Look through the possible instructions and syntax structures, then try to find the 128-bit intrinsics for the following operations:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Four floating point divisions in single precision (i.e. float)"),(0,a.kt)("li",{parentName:"ul"},"Sixteen max operations over signed 8-bit integers (i.e. char)"),(0,a.kt)("li",{parentName:"ul"},"Arithmetic shift right of eight signed 16-bit integers (i.e. short)")),(0,a.kt)("p",null,"Hint: Things that say \u201cepi\u201d or \u201cpi\u201d deal with integers, and those that say \u201c",(0,a.kt)("strong",{parentName:"p"},"ps"),"\u201d or \u201c",(0,a.kt)("strong",{parentName:"p"},"pd"),"\u201d deal with ",(0,a.kt)("strong",{parentName:"p"},"s")," ingle ",(0,a.kt)("strong",{parentName:"p"},"p")," recision and ",(0,a.kt)("strong",{parentName:"p"},"d")," ouble ",(0,a.kt)("strong",{parentName:"p"},"p")," recision floats."),(0,a.kt)("p",null,"You can visualize how the vectors and the different functions work together by inputting your code into the code environment at this ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20230923035841/https://piotte13.github.io/SIMD-Visualiser/#/"},"link"),"! Another interesting tool that might help you understand the behavior of SIMD instructions is the ",(0,a.kt)("a",{parentName:"p",href:"https://web.archive.org/web/20230923035841/https://godbolt.org/z/J7HXBk"},"Compiler Explorer")," project. It can also provide a lot of insights when you need to optimize any code in the future."),(0,a.kt)("p",null,"General advice on working with SIMD instructions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Be ware of memory alignment. For example, ",(0,a.kt)("inlineCode",{parentName:"li"},"_m256d _mm256_load_pd (double const * mem_addr)")," would not work with unaligned data \u2013 you would need ",(0,a.kt)("inlineCode",{parentName:"li"},"_m256d _mm256_loadu_pd"),". Meanwhile, it is almost always desireable to keep your data aligned (can be achieved using special memory allocation APIs). In fact, when the data is aligned, aligned load/store will give identical performance to an aligned store. Aligned loads can be folded into other operations as a memory operand which reduces code size and throughput slightly. Modern CPUs have very good support for unaligned loads, but there\u2019s still a significant performance hit when a load crosses a cache-line boundary."),(0,a.kt)("li",{parentName:"ul"},"Recall various CPU pipeline hazards you have learned earlier this semester. Data hazards can drastically hurt performance. That being said, you may want to check data dependencies in adjacent SIMD operations if not getting the desired performance.")),(0,a.kt)("h2",{id:"exercise-2---writing-simd-code"},"Exercise 2 - Writing SIMD Code"),(0,a.kt)("h3",{id:"common-mistakes"},"Common Mistakes"),(0,a.kt)("p",null,"The following are bugs that the staff have noticed which were preventing students from passing the tests (bold text is what you should not do):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Trying to store your sum vector into a ",(0,a.kt)("inlineCode",{parentName:"strong"},"long long int")," array"),". Use an int array. ",(0,a.kt)("strong",{parentName:"li"},"Side note: why??")," The return value of this function is indeed a ",(0,a.kt)("inlineCode",{parentName:"li"},"long long int"),", but that\u2019s because an ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," isn\u2019t big enough to hold the sum of all the values across all iterations of the outer loop. However, it is big enough to hold the sum of all the values across a single iteration of the outer loop. This means you\u2019ll want to store your sum vector into an ",(0,a.kt)("inlineCode",{parentName:"li"},"int")," array after every iteration of the outer loop and add the total sum to the final result ",(0,a.kt)("inlineCode",{parentName:"li"},"result"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Re-initializing your sum vector"),". Make sure when you add to your running sum vector; ",(0,a.kt)("strong",{parentName:"li"},"you are not")," declaring a new sum vector!!"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Forgetting the CONDITIONAL in the tail case.")," What condition have we been checking before adding something to the sum?"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Adding to an UNINITIALIZED array.")," If you add stuff to your result array without initializing it, you are adding stuff to garbage, which makes the array still garbage! Using ",(0,a.kt)("inlineCode",{parentName:"li"},"storeu")," before adding stuff is okay though.")),(0,a.kt)("p",null,"We\u2019ve got one file ",(0,a.kt)("inlineCode",{parentName:"p"},"simd.c")," that has some code to sum the elements of a really big array. It\u2019s a minor detail that it randomly does this ",(0,a.kt)("inlineCode",{parentName:"p"},"1 << 16")," times\u2026 but you don\u2019t need to worry about that. We also pince the execution of the code between two timestamps (that\u2019s what the ",(0,a.kt)("inlineCode",{parentName:"p"},"clock()")," function does) to measure how fast it runs! The file ",(0,a.kt)("inlineCode",{parentName:"p"},"test_simd.c")," is the one which will have a ",(0,a.kt)("inlineCode",{parentName:"p"},"main")," function to run the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum")," functions."),(0,a.kt)("h3",{id:"task"},"Task"),(0,a.kt)("p",null,"We ask you to vectorize/SIMDize the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"simd.c")," to speed up the naive implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"sum()"),"."),(0,a.kt)("p",null,"You only need to vectorize the inner loop with SIMD! You will also need to use the following intrinsics:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__m128i _mm_setzero_si128()")," - returns a 128-bit zero vector"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__m128i _mm_loadu_si128(__m128i *p)")," - returns 128-bit vector stored at pointer p"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__m128i _mm_add_epi32(__m128i a, __m128i b)")," - returns vector (a","_","0 + b","_","0, a","_","1 + b","_","1, a","_","2 + b","_","2, a","_","3 + b","_","3)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"void _mm_storeu_si128(__m128i *p, __m128i a)")," - stores 128-bit vector a into pointer p"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__m128i _mm_cmpgt_epi32(__m128i a, __m128i b)")," - returns the vector (a","_","i > b","_","i ? ",(0,a.kt)("inlineCode",{parentName:"li"},"0xffffffff : 0x0")," for ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," from 0 to 3). AKA a 32-bit all-1s mask if a","_","i > b","_","i and a 32-bit all-0s mask otherwise"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"__m128i _mm_and_si128(__m128i a, __m128i b)")," - returns vector (a","_","0 & b","_","0, a","_","1 & b","_","1, a","_","2 & b","_","2, a","_","3 & b","_","3), where & represents the bit-wise and operator")),(0,a.kt)("p",null,"Start with the code in ",(0,a.kt)("inlineCode",{parentName:"p"},"sum()")," and use SSE intrinsics to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd()")," function."),(0,a.kt)("p",null,"How do I do this?"),(0,a.kt)("p",null,"Recall that the SSE intrinsics are basically functions which perform operations on multiple pieces of data in a vector in parallel. This turns out to be faster than running through a for loop and applying the operation once for each element in the vector."),(0,a.kt)("p",null,"In our sum function, we\u2019ve got a basic structure of iterating through an array. On every iteration, we add an array element to a running sum. To vectorize, you should add a few array elements to a sum vector in parallel and then consolidate the individual values of the sum vector into our desired sum at the end."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hint 1: ",(0,a.kt)("inlineCode",{parentName:"li"},"__m128i")," is the data type for Intel\u2019s special 128-bit vector. We\u2019ll be using them to encode 4 (four) 32-bit ints."),(0,a.kt)("li",{parentName:"ul"},"Hint 2: We\u2019ve left you a vector called ",(0,a.kt)("inlineCode",{parentName:"li"},"_127")," which contains four copies of the number 127. You should use this to compare with some stuff when you implement the condition within the sum loop."),(0,a.kt)("li",{parentName:"ul"},"Hint 3: DON\u2019T use the store function (",(0,a.kt)("inlineCode",{parentName:"li"},"_mm_storeu_si128"),") until after completing the inner loop! It turns out that storing is very costly and performing a store in every iteration will actually cause your code to slow down. However, if you wait until after the outer loop completes you may have overflow issues."),(0,a.kt)("li",{parentName:"ul"},"Hint 4: It\u2019s bad practice to index into the ",(0,a.kt)("inlineCode",{parentName:"li"},"__m128i")," vector like they are arrays. You should store them into arrays first with the ",(0,a.kt)("inlineCode",{parentName:"li"},"storeu")," function, and then access the integers elementwise by indexing into the array."),(0,a.kt)("li",{parentName:"ul"},"Hint 5: READ the function declarations in the above table carefully! You\u2019ll notice that the loadu and storeu take ",(0,a.kt)("inlineCode",{parentName:"li"},"__m128i*")," type arguments. You can just cast an int array to a ",(0,a.kt)("inlineCode",{parentName:"li"},"__m128i")," pointer. Alternatively, you could skip the typecast at the cost of a bunch of compiler warnings.")),(0,a.kt)("p",null,"To compile and run your code, run the following commands:"),(0,a.kt)("p",null,"Sanity check: The naive version runs at about 7 seconds on the hive machines, and your SIMDized version should run in about 1-2 seconds."),(0,a.kt)("h2",{id:"exercise-3---loop-unrolling"},"Exercise 3 - Loop Unrolling"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Concept Time!")," Another tactic used to increase performance is to unroll our for loops! By performing more operations per iteration of the for loop, we have to loop less and not have to waste as many cycles (think about why we would have to waste some cycles?). Theoretically, code would be faster if we didn\u2019t create loops and just copy pasted the loop ",(0,a.kt)("inlineCode",{parentName:"p"},"n")," times, but that\u2019s not a very pretty function."),(0,a.kt)("p",null,"For example, consider this very simple example that adds together the first n elements of an array ",(0,a.kt)("inlineCode",{parentName:"p"},"arr"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int total = 0;\nfor (int i = 0; i < n; i++) {\n    total += arr[i];\n}\n\n")),(0,a.kt)("p",null,"The corresponding assembly code might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"        add t0, x0, x0\n        add t1, x0, x0 // Initialize loop counter\nloop:   beq t0, a1, end // Assume register a1 contains the size n of the array\n        slli t2, t1, 2\n        add t2, t1, a0 // Assume register a0 contains a pointer to the beginning of the array\n        lw t3, 0(t2) // Load arr[i] into t3\n        add t0, t3, t0 // total += arr[i]\n        addi t1, t1, 1 // Increment the loop counter\n        jal x0, loop\nend:    ...\n\n")),(0,a.kt)("p",null,"If we unroll the loop 4 times, this would be our equivalent code, with a tail case for the situations where n is not a multiple of 4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"int total = 0;\nfor (int i = 0; i < n / 4 * 4; i+=4) {\n    total += arr[i];\n    total += arr[i + 1];\n    total += arr[i + 2];\n    total += arr[i + 3];\n}\n\nfor (i = n / 4 * 4; i < n; i++) {\n    total += arr[i];\n}\n\n")),(0,a.kt)("p",null,"For the unrolled code, the corresponding assembly code might look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"      add t0, x0, x0\n      add t1, a1, x0 // Assume register a1 contains the size n of the array\n      srli t1, t1, 2\n      slli t1, t1, 2 // Find largest of multiple 4 <= n\n      add t2, x0, x0 // Initialize loop counter\nloop: beq t2, t1, tail\n      slli t3, t2, 2\n      add t3, t3, a0 // Assume register a0 contains a pointer to the beginning of the array\n      lw t4, 0(t3) // Load arr[i] into t3\n      add t0, t4, t0 // total += arr[i]\n      lw t4, 4(t3) // Load arr[i + 1] into t3\n      add t0, t4, t0\n      lw t4, 8(t3), t0 // Load arr[i + 2] into t3\n      add t0, t4, t0\n      lw t4, 12(t3), // Load arr[i + 3] into t3\n      add t0, t4, t0\n      addi t2, t2, 4 // Increment the loop counter\n      jal x0, loop\ntail: beq t2, a1, end\n      slli t3, t2, 2\n      lw t4, 0(t3)\n      add t0, t4, t0\n      addi t2, t2, 1\nend: ...\n\n")),(0,a.kt)("p",null,"To obtain even more performance improvement, carefully unroll the SIMD vector sum code that you created in the previous exercise to create ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd_unrolled()"),". This should get you a little more increase in performance from ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd")," (a few fractions of a second). As an example of loop unrolling, consider the supplied function ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_unrolled()")),(0,a.kt)("h3",{id:"task-1"},"Task"),(0,a.kt)("p",null,"Within ",(0,a.kt)("inlineCode",{parentName:"p"},"simd.c"),", copy your ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd()")," code into ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd_unrolled()")," and unroll it 4 (four) times. Don\u2019t forget about your tail case!"),(0,a.kt)("p",null,"To compile and run your code, run the following commands:"),(0,a.kt)("h2",{id:"checkoff"},"Checkoff"),(0,a.kt)("p",null,"Please submit to the ",(0,a.kt)("strong",{parentName:"p"},"Lab Autorgrader")," assignment."),(0,a.kt)("p",null,"In your check-in, feel free to explain your implementation of ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sum_simd_unrolled()"),". How much faster did the SIMD code run over the naive implementation? How much of a performance boost did unrolling provide (and why did it increase performance)?"))}p.isMDXComponent=!0}}]);