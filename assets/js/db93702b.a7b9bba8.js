"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[3097],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=o,h=d["".concat(s,".").concat(c)]||d[c]||m[c]||r;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},43529:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(87462),o=(n(67294),n(3905));const r={title:"Project 1B ArrayDeque61B",description:"Project 1B."},i=void 0,l={unversionedId:"curriculum-resource/cs61b/projects/proj1b/index",id:"curriculum-resource/cs61b/projects/proj1b/index",title:"Project 1B ArrayDeque61B",description:"Project 1B.",source:"@site/docs/curriculum-resource/cs61b/projects/proj1b/index.md",sourceDirName:"curriculum-resource/cs61b/projects/proj1b",slug:"/curriculum-resource/cs61b/projects/proj1b/",permalink:"/docs/curriculum-resource/cs61b/projects/proj1b/",draft:!1,tags:[],version:"current",frontMatter:{title:"Project 1B ArrayDeque61B",description:"Project 1B."},sidebar:"tutorialSidebar",previous:{title:"Coverage Tests - Project 1A Linked List Deque 61B",permalink:"/docs/curriculum-resource/cs61b/projects/proj1a/flags"},next:{title:"FAQ - Project 1B Array Deque 61B",permalink:"/docs/curriculum-resource/cs61b/projects/proj1b/faq"}},s={},p=[{value:"Due: Monday, February 12th, 11:59 PM PT",id:"due-monday-february-12th-1159-pm-pt",level:2},{value:"FAQ",id:"faq",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Style",id:"style",level:3},{value:"Getting the Skeleton Files",id:"getting-the-skeleton-files",level:3},{value:"Deque: ADT and API",id:"deque-adt-and-api",level:2},{value:"Creating the File",id:"creating-the-file",level:2},{value:"<code>ArrayDeque61B</code>",id:"arraydeque61b",level:2},{value:"Constructor",id:"constructor",level:3},{value:"Resizing Up",id:"resizing-up",level:4},{value:"<code>get</code>",id:"get",level:3},{value:"<code>isEmpty</code> and <code>size</code>",id:"isempty-and-size",level:3},{value:"<code>toList</code>",id:"tolist",level:3},{value:"<code>removeFirst</code> and <code>removeLast</code>",id:"removefirst-and-removelast",level:3},{value:"Resizing Down",id:"resizing-down",level:4},{value:"<code>getRecursive</code>",id:"getrecursive",level:3},{value:"Writing Tests",id:"writing-tests",level:3},{value:"Suggestions",id:"suggestions",level:3},{value:"Submit to the Autograder",id:"submit-to-the-autograder",level:3},{value:"Scoring",id:"scoring",level:3}],u={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"due-monday-february-12th-1159-pm-pt"},"Due: Monday, February 12th, 11:59 PM PT"),(0,o.kt)("h2",{id:"faq"},(0,o.kt)("a",{parentName:"h2",href:"/docs/curriculum-resource/cs61b/projects/proj1b/faq"},"FAQ")),(0,o.kt)("p",null,'Each assignment will have an FAQ linked at the top. You can also access it by adding "/faq" to the end of the URL. The\nFAQ for Project 1B is located\n',(0,o.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61b/projects/proj1b/faq"},"here"),"."),(0,o.kt)("p",null,"Note that this project has limited submission tokens. Please see ",(0,o.kt)("a",{parentName:"p",href:"#submit-to-the-autograder"},"Submit to the Autograder")," for more details."),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"In Project 1A, we built ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedListDeque61B"),". Now we'll see a different\nimplementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B")," interface that uses a ",(0,o.kt)("em",{parentName:"p"},"backing array"),", rather\nthan linked nodes."),(0,o.kt)("p",null,"By the end of Project 1B, you will..."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Gain an understanding of the implementation of a backing array in\ndata structures."),(0,o.kt)("li",{parentName:"ul"},"Have more experience using testing and test-driven development to verify\nthe correctness of these data structures.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466"},"Project 1B slides")," for some additional visually oriented tips.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://youtu.be/Ow2QH1mpN34"},"Getting Started Video")," for overview of spec.")),(0,o.kt)("p",null,"We will provide relatively little scaffolding. In other words, we'll say what\nyou should do, but not how."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"This section assumes you have watched and fully digested the lectures up till\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayList")," lecture, Lecture 7."))),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"For this project, you must work alone! Please carefully read the\n","[Policy on Collaboration and Cheating]","\nto see what this means exactly. In particular, do not look for solutions online.\n:::")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"It should (still) go without saying that you may not use any of the built-in\n",(0,o.kt)("inlineCode",{parentName:"p"},"java.util")," data structures in your implementation! The whole point is to build\nyour own versions! There are a few places where you may use specific data\nstructures outside of tests, and we will clearly say where."))),(0,o.kt)("h3",{id:"style"},"Style"),(0,o.kt)("p",null,"As in Project 1A, ",(0,o.kt)("strong",{parentName:"p"},"we will be enforcing style"),". You must follow the\n",(0,o.kt)("a",{parentName:"p",href:"../guides/style"},"style guide"),", or you will be penalized on the\nautograder."),(0,o.kt)("p",null,"You can and should check your style locally with the CS 61B plugin. ",(0,o.kt)("strong",{parentName:"p"},"We will\nnot remove the velocity limit for failing to check style.")),(0,o.kt)("h3",{id:"getting-the-skeleton-files"},"Getting the Skeleton Files"),(0,o.kt)("p",null,"Follow the instructions in the\n",(0,o.kt)("a",{parentName:"p",href:"../guides/assignment-workflow/#assignment-workflow"},"Assignment Workflow guide"),"\nto get the skeleton code and open it in IntelliJ. For this project, we will be\nworking in the ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"proj1b"))," directory."),(0,o.kt)("p",null,"You see a ",(0,o.kt)("inlineCode",{parentName:"p"},"proj1b")," directory appear in your repo with the following structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"}," proj1b\n\u251c\u2500\u2500 src\n\u2502   \u2514\u2500\u2500 Deque61B.java\n\u2514\u2500\u2500 tests\n    \u2514\u2500\u2500 ArrayDeque61BTest.java\n")),(0,o.kt)("p",null,"If you get some sort of error, STOP and either figure it out by carefully\nreading the ",(0,o.kt)("a",{parentName:"p",href:"../guides/git/wtfs"},"git WTFs")," or seek help at OH\nor Ed. You'll potentially save yourself a lot of trouble vs. guess-and-check\nwith git commands. If you find yourself trying to use commands recommended by\nGoogle like ",(0,o.kt)("inlineCode",{parentName:"p"},"force push"),",\n",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/heathercmiller/status/526770571728531456"},"don't"),".\n",(0,o.kt)("strong",{parentName:"p"},"Don't use force push, even if a post you found on Stack Overflow says to do it!")),(0,o.kt)("p",null,"You can also watch Professor Hug's ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=tABtNcN5y0A"},"demo"),"\nabout how to get started and this ",(0,o.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=Squ8TmG5mX0"},"video"),"\nif you encounter some git issues."),(0,o.kt)("h2",{id:"deque-adt-and-api"},"Deque: ADT and API"),(0,o.kt)("p",null,"If you need a refresher on ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B"),"s, refer to the\n",(0,o.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61b/projects/proj1a/#deque-adt-and-api"},"Project 1A spec"),"\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B.java")," file."),(0,o.kt)("h2",{id:"creating-the-file"},"Creating the File"),(0,o.kt)("p",null,"Start by creating a file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B"),". This file should be created\nin the ",(0,o.kt)("inlineCode",{parentName:"p"},"proj1b/src")," directory. To do this, right-click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"src"),' directory,\nnavigate to "New -> Java Class", and give it the name ',(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B"),"."),(0,o.kt)("p",null,"Just like you did in Project 1A We want our ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B")," to be able to hold several different types. To enable this, you should edit the declaration of your class so that it reads:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayDeque61B<T>\n")),(0,o.kt)("p",null,"Recall from lecture that it doesn't actually matter if we use ",(0,o.kt)("inlineCode",{parentName:"p"},"T")," or some other\nstring like ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B<Glerp>"),". However, we recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"<T>")," for\nconsistency with other Java code."),(0,o.kt)("p",null,"We also want to tell Java that every ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B"),", so that users can write code like ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B<String> lld1 = new ArrayDeque61B<>();"),". To enable this, change the declaration of your class so that it reads:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class ArrayDeque61B<T> implements Deque61B<T>\n")),(0,o.kt)("p",null,"Once you've done this step, you'll likely see a squiggly red line under the\nentire class declaration. This is because you said that your class implements\nan interface, but you haven't actually implemented any of the interface methods\nyet."),(0,o.kt)("p",null,'Hover over the red line with your mouse, and when the\nIntelliJ pop-up appears, click the "Implement methods" button. Ensure that all the\nmethods in the list are highlighted, and click "OK". Now, your class should\nbe filled with a bunch of empty method declarations. These are the methods that you\'ll\nneed to implement for this project!'),(0,o.kt)("p",null,"Lastly, you should create an empty constructor. To do this, add the following\ncode to your file, leaving the constructor blank for now."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public ArrayDeque61B() {\n}\n")),(0,o.kt)("p",null,'Note: You can also generate the constructor by clicking "Code", then "Generate"\nthen "Constructor", though I prefer the typing the code yourself approach.'),(0,o.kt)("p",null,"Now you're ready to get started!"),(0,o.kt)("h2",{id:"arraydeque61b"},(0,o.kt)("inlineCode",{parentName:"h2"},"ArrayDeque61B")),(0,o.kt)("p",null,"As your second deque implementation, you'll build the ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B")," class. This\ndeque ",(0,o.kt)("strong",{parentName:"p"},"must")," use a Java array as the backing data structure."),(0,o.kt)("p",null,"You may add any private helper classes or methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"ArrayDeque61B.java")," if you\ndeem it necessary."),(0,o.kt)("h3",{id:"constructor"},"Constructor"),(0,o.kt)("p",null,"You will need to somehow keep track of what array indices hold the deque's\nfront and back elements. We ",(0,o.kt)("strong",{parentName:"p"},"strongly recommend")," that you treat your array as\ncircular for this exercise. In other words, if your front item is at position\n",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", and you ",(0,o.kt)("inlineCode",{parentName:"p"},"addFirst"),", the new front should loop back around to the end of\nthe array (so the new front item in the deque will be the last item in the\nunderlying array). This will result in far fewer headaches than non-circular\napproaches."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"See the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1kjbO8X7-i63NwQ_9wIt4HXr6APp2qc9PkghD-GO7_is/edit#slide=id.g1094ff4355_0_466"},"Project 1B demo slides"),"\nfor more details. In particular, note that\nwhile the conceptual deque and the array contain the same elements, they do not\ncontain them in the same order."))),(0,o.kt)("p",null,"We recommend using the ",(0,o.kt)("inlineCode",{parentName:"p"},"floorMod(int a, int b)")," method from Java's built-in ",(0,o.kt)("inlineCode",{parentName:"p"},"Math")," class to assist you in\ndesigning a circular approach. Whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"a % b")," might return negative numbers when a is negative, ",(0,o.kt)("inlineCode",{parentName:"p"},"floorMod(int a, int b)")," always return non-negative numbers. In practice, this means that the output will have the same sign as the divisor. Here are a few examples\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"floorMod(int a, int b)")," method:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"    int value1 = Math.floorMod(16, 16); // value1 == 0\n    int value2 = Math.floorMod(-1, 16); // value2 == 15\n    int value3 = Math.floorMod(20, 16); // value3 == 4\n")),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"floorMod(int a, int b)")," method by adding the following import statement to the top of your file:\n",(0,o.kt)("inlineCode",{parentName:"p"},"import java.lang.Math;"),"."),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"You cannot create an array of generics (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"new T[1000]"),") in Java for ",(0,o.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/valhalla/"},"reasons beyond the scope of this course"),". You will instead need to use the syntax ",(0,o.kt)("inlineCode",{parentName:"p"},"(T[]) new Object[1000]"),".")),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Declare the necessary instance variables, and implement the constructor."),(0,o.kt)("p",{parentName:"blockquote"},"The starting size of your backing array ",(0,o.kt)("strong",{parentName:"p"},"must")," be ",(0,o.kt)("inlineCode",{parentName:"p"},"8"),".\n:::"),(0,o.kt)("h3",{parentName:"blockquote",id:"addfirst-and-addlast"},(0,o.kt)("inlineCode",{parentName:"h3"},"addFirst")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"addLast"))),(0,o.kt)("p",null,"As before, implement ",(0,o.kt)("inlineCode",{parentName:"p"},"addFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addLast"),". These two methods ",(0,o.kt)("strong",{parentName:"p"},"must not"),'\nuse looping or recursion. A single add operation must take "constant time,"\nthat is, adding an element should take approximately the same amount of time no\nmatter how large the deque is (with one exception). This means that you cannot\nuse loops that iterate through all / most elements of the deque.'),(0,o.kt)("h4",{id:"resizing-up"},"Resizing Up"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"We recommend you complete the other methods first, verify that they are working correctly without resizing, and come back to resizing later.")),(0,o.kt)("p",null,'The exception to the "constant time" requirement is when the array fills, and\nyou need to "resize" to have enough space to add the element. In this case, you\ncan take "linear time" to resize the array before adding the element.'),(0,o.kt)("p",null,"Correctly resizing your array is very tricky, and will require some deep\nthought. Try drawing out various approaches by hand. It may take you quite some\ntime to come up with the right approach, and we encourage you to debate the big\nideas with your fellow students or TAs. Make sure that your actual\nimplementation is ",(0,o.kt)("strong",{parentName:"p"},"by you alone"),"."),(0,o.kt)("p",null,"Make sure to resize by a geometric factor."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"We ",(0,o.kt)("strong",{parentName:"p"},"do not")," recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"arraycopy")," with a circular implementation. It\nwill work, but results in a significantly more complex (and harder to debug!)\nimplementation than necessary."),(0,o.kt)("p",{parentName:"blockquote"},"Instead, we suggest thinking forward to how you might implement ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," and using\na ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop in some way."))),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"addFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addLast"),", and write tests to verify that\nthey are correct. Make sure to add enough elements so that\nyour backing array resizes! For more info on resizing, check out ",(0,o.kt)("a",{parentName:"p",href:"https://docs.google.com/presentation/d/1AUaNTKX0f-nFqmqEWEEecLxIQh9hrpTDtz_lWVMl5Fw/edit#slide=id.g625dc7e36_0943"},"these slides"),".\n:::")),(0,o.kt)("h3",{id:"get"},(0,o.kt)("inlineCode",{parentName:"h3"},"get")),(0,o.kt)("p",null,"Unlike in ",(0,o.kt)("inlineCode",{parentName:"p"},"LinkedListDeque61B"),", this method must take ",(0,o.kt)("strong",{parentName:"p"},"constant time"),"."),(0,o.kt)("p",null,"As before, ",(0,o.kt)("inlineCode",{parentName:"p"},"get")," should return ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," when the index is invalid (too large or\nnegative). You should disregard the skeleton code comments for ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B.java"),"\nfor this case."),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"After you've written tests and verified that they fail"),", implement\n",(0,o.kt)("inlineCode",{parentName:"p"},"get"),".\n:::")),(0,o.kt)("h3",{id:"isempty-and-size"},(0,o.kt)("inlineCode",{parentName:"h3"},"isEmpty")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"size")),(0,o.kt)("p",null,"These two methods must take ",(0,o.kt)("strong",{parentName:"p"},"constant time"),". That is, the time it takes to for\neither method to finish execution should not depend on how many elements are in\nthe deque."),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Write tests")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"isEmpty")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"size")," methods, and check that\nthey fail. Then, implement the methods.\n:::")),(0,o.kt)("h3",{id:"tolist"},(0,o.kt)("inlineCode",{parentName:"h3"},"toList")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"toList")," will continue to be useful to test your ",(0,o.kt)("inlineCode",{parentName:"p"},"Deque61B"),"."),(0,o.kt)("p",null,"Write the ",(0,o.kt)("inlineCode",{parentName:"p"},"toList")," method. The first line of the method should be something\nlike ",(0,o.kt)("inlineCode",{parentName:"p"},"List<T> returnList = new ArrayList<>()"),". ",(0,o.kt)("strong",{parentName:"p"},"This is one location where you\nare allowed to use a Java data structure.")),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"Some later methods might seem easy if you use ",(0,o.kt)("inlineCode",{parentName:"p"},"toList"),".\n",(0,o.kt)("strong",{parentName:"p"},"You may not call ",(0,o.kt)("inlineCode",{parentName:"strong"},"toList")," inside ",(0,o.kt)("inlineCode",{parentName:"strong"},"ArrayDeque61B")),"; there is a test that\nchecks for this."))),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Hint")," One of the other methods may be helpful for implementing this method."))),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implement ",(0,o.kt)("inlineCode",{parentName:"p"},"toList"),". You are not given tests this time, so you will\nneed to write them!\n:::")),(0,o.kt)("p",null,"All that's left is to test and implement all the remaining methods. For the\nrest of this project, we'll describe our suggested steps at a high level. We\n",(0,o.kt)("strong",{parentName:"p"},"strongly encourage")," you to follow the remaining steps in the order given.\nIn particular, ",(0,o.kt)("strong",{parentName:"p"},"write tests before you implement the method's functionality."),'\nThis is called "test-driven development," and helps ensure that you know what\nyour methods are supposed to do before you do them.'),(0,o.kt)("h3",{id:"removefirst-and-removelast"},(0,o.kt)("inlineCode",{parentName:"h3"},"removeFirst")," and ",(0,o.kt)("inlineCode",{parentName:"h3"},"removeLast")),(0,o.kt)("p",null,"Lastly, write some tests that test the behavior of ",(0,o.kt)("inlineCode",{parentName:"p"},"removeFirst")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"removeLast"),", and again ensure that the tests fail."),(0,o.kt)("p",null,"Do not maintain references to items that are no longer in the deque."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"removeFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeLast")," ",(0,o.kt)("strong",{parentName:"p"},"may not")," use looping or recursion. Like ",(0,o.kt)("inlineCode",{parentName:"p"},"addFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addLast"),',\nthese operations must take \\"constant time.\\" Refer to the section on writing ',(0,o.kt)("inlineCode",{parentName:"p"},"addFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"addLast"),"\nfor more information on what this means."),(0,o.kt)("h4",{id:"resizing-down"},"Resizing Down"),(0,o.kt)("p",null,"The amount of memory that your program uses at any given time must be\nproportional to the number of items. For example, if you add 10,000 items to\nthe deque, and then remove 9,999 items, you shouldn't still be using an array\nthat can hold 10,000 items. For arrays of length 16 or more, your usage factor\nshould always be at least 25%. This means that before performing a remove\noperation, if the number of elements in the array is at or under 25% the\nlength of the array, you should resize the array down. For arrays\nlength 15 or less, your usage factor can be arbitrarily low."),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"We, again, ",(0,o.kt)("strong",{parentName:"p"},"do not")," recommend using ",(0,o.kt)("inlineCode",{parentName:"p"},"arraycopy")," with a circular\nimplementation. If you followed our advice above to use a ",(0,o.kt)("inlineCode",{parentName:"p"},"for")," loop to resize\nup, resizing down should look ",(0,o.kt)("strong",{parentName:"p"},"very similar")," to resizing up (perhaps a helper\nmethod?)."))),(0,o.kt)("p",null,":::task"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"After you've written tests and verified that they fail"),", implement\n",(0,o.kt)("inlineCode",{parentName:"p"},"removeFirst")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"removeLast"),".\n:::")),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("blockquote",{parentName:"admonition"},(0,o.kt)("p",{parentName:"blockquote"},"For the intended experience, follow these steps in order. If you do something\nelse and ask us for help, we will refer you back to these steps."))),(0,o.kt)("h3",{id:"getrecursive"},(0,o.kt)("inlineCode",{parentName:"h3"},"getRecursive")),(0,o.kt)("p",null,"Although we are not using a linked list anymore for this project, it is still required to implement this method to keep consistent with our interface.\nThis method technically shouldn't be in the interface, but it's here to make testing nice. You can just use this code block for it:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'    @Override\n    public T getRecursive(int index) {\n        throw new UnsupportedOperationException("No need to implement getRecursive for proj 1b");\n    }\n')),(0,o.kt)("p",null,':::task\n"Implement" ',(0,o.kt)("inlineCode",{parentName:"p"},"getRecursive"),".\n:::"),(0,o.kt)("h3",{id:"writing-tests"},"Writing Tests"),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61b/projects/proj1a/#writing-tests"},"Project 1A spec")," for\na review of how to write tests. Similar to Project 1A, you will be scored on\nthe coverage of your unit tests for Project 1B. You might find some of your\ntests from Project 1A to be reusable in this project; don't be afraid to\ncopy them over!"),(0,o.kt)("h3",{id:"suggestions"},"Suggestions"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Try to get everything working for a fixed-size array first. This would be good point to start to familiarize yourself."),(0,o.kt)("li",{parentName:"ul"},"Once you are confident working solution for a fixed-size array, try resizing - consider having a helper method for it!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"DO NOT")," modify ",(0,o.kt)("inlineCode",{parentName:"li"},"Deque61B")," interface")),(0,o.kt)("h3",{id:"submit-to-the-autograder"},"Submit to the Autograder"),(0,o.kt)("p",null,"Once you've written local tests and passed them, try submitting to the\nautograder. You may or may not pass everything."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you fail any of the coverage tests, it means that there is a case that\nyour local tests did not cover. The autograder test name and the test\ncoverage component will give you hints towards the missing case."),(0,o.kt)("li",{parentName:"ul"},"If you fail a correctness test, this means that there is a case that your\nlocal tests did not cover, despite having sufficient coverage for flags.\nThis is ",(0,o.kt)("strong",{parentName:"li"},"expected"),". Coverage flags are an approximation! They also do not\nprovide describe every single behavior that needs to be tested, nor do they\nguarantee that you assert everything. ",(0,o.kt)("a",{parentName:"li",href:"/docs/curriculum-resource/cs61b/projects/proj1b/flags"},"Here")," is a list of them!"),(0,o.kt)("li",{parentName:"ul"},"If you fail any of the timing tests, it means that your implementation does\nnot meet the timing constraints described above."),(0,o.kt)("li",{parentName:"ul"},"You will have a token limit of 4 tokens every 24 hours. ",(0,o.kt)("strong",{parentName:"li"},"We will not reinstate tokens for failing to add/commit/push your code, run style, etc.")),(0,o.kt)("li",{parentName:"ul"},"You may find messages in the autograder response that look something like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"WARNING: A terminally deprecated method in java.lang.System has been called"),". You can safely ignore any line tagged as a ",(0,o.kt)("inlineCode",{parentName:"li"},"WARNING"),".")),(0,o.kt)("h3",{id:"scoring"},"Scoring"),(0,o.kt)("p",null,"This project, similar to Project 0, is divided into individual components, each\nof which you must implement ",(0,o.kt)("em",{parentName:"p"},"completely correctly")," to receive credit."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Adding (25%)"),": Correctly implement ",(0,o.kt)("inlineCode",{parentName:"li"},"addFirst"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"addLast"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"toList"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"isEmpty"),", ",(0,o.kt)("inlineCode",{parentName:"strong"},"size")," (5%)"),": Correctly implement ",(0,o.kt)("inlineCode",{parentName:"li"},"isEmpty")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"size")," with\nadd methods working."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"get")," (10%)"),": Correctly implement ",(0,o.kt)("inlineCode",{parentName:"li"},"get"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Removing (30%)"),": Correctly implement ",(0,o.kt)("inlineCode",{parentName:"li"},"removeFirst")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"removeLast"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Memory (20%)"),": Correctly implement resizing so that you do not use\ntoo much memory.")),(0,o.kt)("p",null,"Additionally, there is a ",(0,o.kt)("strong",{parentName:"p"},"test coverage (10%)")," component. We will run your\ntests against a staff solution, and check how many scenarios and edge cases are\ntested. You can receive partial credit for this component. ",(0,o.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61b/projects/proj1b/flags"},"Here")," is a list of them!"))}m.isMDXComponent=!0}}]);