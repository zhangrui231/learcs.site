"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9913],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var n=o(67294);function i(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){i(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,i=function(e,t){if(null==e)return{};var o,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(i[o]=e[o]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},h=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),g=l(o),c=i,p=g["".concat(u,".").concat(c)]||g[c]||d[c]||r;return o?n.createElement(p,a(a({ref:t},h),{},{components:o})):n.createElement(p,a({ref:t},h))}));function p(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=o.length,a=new Array(r);a[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[g]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=o[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},48507:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(87462),i=(o(67294),o(3905));const r={title:"Gitbugs"},a=void 0,s={unversionedId:"curriculum-resource/cs61b/guides/gitbug/index",id:"curriculum-resource/cs61b/guides/gitbug/index",title:"Gitbugs",description:"Gitbugs are your way to get debugging help on your assignments (labs, homeworks,",source:"@site/docs/curriculum-resource/cs61b/guides/gitbug/index.md",sourceDirName:"curriculum-resource/cs61b/guides/gitbug",slug:"/curriculum-resource/cs61b/guides/gitbug/",permalink:"/docs/curriculum-resource/cs61b/guides/gitbug/",draft:!1,tags:[],version:"current",frontMatter:{title:"Gitbugs"},sidebar:"tutorialSidebar",previous:{title:"Git WTFS",permalink:"/docs/curriculum-resource/cs61b/guides/git/wtfs"},next:{title:"IntelliJ",permalink:"/docs/curriculum-resource/cs61b/guides/intellij/"}},u={},l=[{value:"When to make a Gitbug",id:"when-to-make-a-gitbug",level:2},{value:"Making a Gitbug",id:"making-a-gitbug",level:2}],h={toc:l},g="wrapper";function d(e){let{components:t,...r}=e;return(0,i.kt)(g,(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gitbugs are your way to get debugging help on your assignments (labs, homeworks,\nprojects). Submitting a Gitbug is as simple as you creating a private Ed post,\nfollowing a particular template, and then waiting to get a response. After you\nsubmit your Gitbug, all staff members will see it and we can clone your GitHub\nrepository on our own computers, look for the bug, and then give you a\nhint/explain where you should be looking. We try to get a 24 hour turnaround,\nbut please be patient with us the day before or the day of a deadline as we get\na huge influx during those times."),(0,i.kt)("h2",{id:"when-to-make-a-gitbug"},"When to make a Gitbug"),(0,i.kt)("p",null,"A Gitbug should be the last resort for you. The\nassumption is that you\u2019ve tried to debug your code and even after this you\ncouldn\u2019t find the bug. For example, if you\u2019re completing a method in a project\nand failing the provided/graded test for it, do not immediately submit a Gitbug!\nDeveloping debugging skills is an official part of the course, so we do expect\nyou to run into bugs and solve them on your own. On the other side of things, we\ndon\u2019t want you to be stuck on a bug for 10 hours, so we have Gitbugs to help you\nget unstuck. We trust that you can make the decision for yourself as to whether\nyou\u2019ve put in honest effort looking for the bug, but be warned that if it is\nobvious you haven\u2019t tried debugging your own code, we will reject the Gitbug."),(0,i.kt)("h2",{id:"making-a-gitbug"},"Making a Gitbug"),(0,i.kt)("p",null,"When making a Gitbug, please follow ",(0,i.kt)("strong",{parentName:"p"},"these exact")," steps to\nkeep everything organized for us and make sure we don\u2019t reject your Gitbug:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Select the big blue \u2018New Thread\u2019 button in the top left corner"),(0,i.kt)("li",{parentName:"ol"},"Select \u2018Question\u2019 as your type of post"),(0,i.kt)("li",{parentName:"ol"},"Give a useful title to your Gitbug post, for example: \u201cProject 1: Array\nupsizing works, but downsizing throws ArrayIndexOutOfBoundException errors\u201d"),(0,i.kt)("li",{parentName:"ol"},"Select the Category as Gitbug and the Subcategory as whichever assignment\nthis is"),(0,i.kt)("li",{parentName:"ol"},"Choosing the Gitbug category on Ed should show you a template for the\nquestion asking you important questions to help us debug your code. If you don\u2019t\nsee it, you didn\u2019t do step 2. It should look like the below screenshot."),(0,i.kt)("li",{parentName:"ol"},"Fill out the questions in ",(0,i.kt)("strong",{parentName:"li"},"full sentences")," and if the questions tell you to\ndo something then make sure you do it (i.e. ensuring you\u2019ve pushed your code to\nGitHub). We will automatically reject Gitbugs without thorough explanations."),(0,i.kt)("li",{parentName:"ol"},"Make sure you\u2019ve made your post ",(0,i.kt)("strong",{parentName:"li"},"private")),(0,i.kt)("li",{parentName:"ol"},"Post your Gitbug!")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Example templpate",src:o(89700).Z,width:"709",height:"908"})),(0,i.kt)("p",null,"It\u2019s important that you fill out the Gitbug template exactly and put in\nreasonable effort here, otherwise we won\u2019t have all the important information to\nhelp you solve the problem. ",(0,i.kt)("strong",{parentName:"p"},"We will not be helping with low effort Gitbugs and\nwill reject them.")," You should be spending anywhere from 5-10 minutes creating\nyour Gitbug to ensure it is of high quality. The better your Gitbug is, the\nfaster we can solve it and we can reciprocate with a high quality answer too\nsince we have all the details neccessary to see tell what errors you\nmade/misconceptions you have."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"It\u2019s highly unlikely that a screenshot will make your Gitbug better, so please\ndon\u2019t add any screenshots unless you truly think it\u2019s useful.")," Remember that\nwe\u2019ll be able to see your code when we pull your GitHub repository, so no need\nto screenshot IntelliJ or something like that. If you had an error message that\nyou think is important to the bug, please copy and paste that error message into\nthe post so that it\u2019s easily searchable."),(0,i.kt)("p",null,"It's really important that you have a good description of what the bug is and\nwhat you've done to try and solve it so far. Here is an example of Omar doing a\nbad job:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Bad Gitbug",src:o(30857).Z,width:"767",height:"323"})),(0,i.kt)("p",null,"Notice how Omar doesn't even address the question. He should add to his response\nthe specific test that failed (i.e. number) and maybe even what the error\nmessage is. Also, it's clear that Omar didn't try to debug since he said he just\nlooked at the code. Maybe he did try and debug but just didn't include it: even\nif he thinks his debugging was useless, he should still include it as it can\ngive really good insight/hints into what is going on, and it'll save the TA a\nton of time. Sorry for Omar, but this Gitbug gets rejected."),(0,i.kt)("p",null,"Now let's look at what a good Gitbug looks like:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Good Gitbug",src:o(69524).Z,width:"954",height:"854"})),(0,i.kt)("p",null,"Omar did a great job here! There is a clear test that he is failing and he has\neven provided the error message for us. There is also ample evidence that he has\ntried to debug the code and even some hypothesis that he has plus things he\nalready tried. Omar has also provided specific lines he has placed breakpoints\nat as well as what they saw when they debugged. This saves the TA time and Omar\nwill get a very clear response on what the bug is since his question is so\nspecific. Great job Omar!"),(0,i.kt)("p",null,"After submitting your Gitbug you just sit tight and continue working on\nsomething else in the meanwhile."),(0,i.kt)("p",null,"Additionally, if you submit a Gitbug and were able to resolve it before we\nresponded, update the post by leaving a comment that the bug is resolved. We\nwill not process any of your future Gitbugs if we clone you code and see that\nyou have already resolved a bug without updating your Gitbug post."),(0,i.kt)("p",null,"Once your Gitbug has been answered, do not reply. We won\u2019t be doing any back and\nforth on Gitbugs. If you still have another bug, you should instead make a new\nGitbug. The one exception is if you want to say \u201cthank you\u201d or something like\nthat :)"))}d.isMDXComponent=!0},30857:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/bad-gitbug-9349ca52a80e7b019ed5a3a5b94f1aa9.png"},89700:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/gitbug-template-e1b9b0cf30018263c1b41ee8e70e81de.png"},69524:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/good-gitbug-ac353ff8b102d9fe83138539676c2aa3.png"}}]);