"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9041],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>b});var n=r(7294),o=r(6010),c=r(2802),a=r(9960),i=r(3919),l=r(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,o.Z)("card padding--lg",s.cardContainer)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,o.Z)("text--truncate",s.cardTitle),title:c},r," ",c),a&&n.createElement("p",{className:(0,o.Z)("text--truncate",s.cardDescription),title:a},a))}function m(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",o=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??o?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(b,{items:r.items,className:t})}function b(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,o.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},5191:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(7462),o=(r(7294),r(3905)),c=r(2991);const a={title:"Problem Set",description:"cs50x lecture8 HTML,CSS,JavaScript Problem Set"},i="Problem Set 8 - CS50x 2023",l={unversionedId:"curriculum-resource/cs50x/lecture9/problem set/index",id:"curriculum-resource/cs50x/lecture9/problem set/index",title:"Problem Set",description:"cs50x lecture8 HTML,CSS,JavaScript Problem Set",source:"@site/docs/curriculum-resource/cs50x/lecture9/problem set/index.md",sourceDirName:"curriculum-resource/cs50x/lecture9/problem set",slug:"/curriculum-resource/cs50x/lecture9/problem set/",permalink:"/docs/curriculum-resource/cs50x/lecture9/problem set/",draft:!1,tags:[],version:"current",frontMatter:{title:"Problem Set",description:"cs50x lecture8 HTML,CSS,JavaScript Problem Set"},sidebar:"tutorialSidebar",previous:{title:"Notes",permalink:"/docs/curriculum-resource/cs50x/lecture9/notes"},next:{title:"homepage",permalink:"/docs/curriculum-resource/cs50x/lecture9/problem set/homepage"}},s={},u=[{value:"What to Do",id:"what-to-do",level:2},{value:"When to Do It",id:"when-to-do-it",level:2}],p={toc:u},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"problem-set-8---cs50x-2023"},"Problem Set 8 - CS50x 2023"),(0,o.kt)("p",null,"Collaboration on problem sets is not permitted except to the extent that you may ask classmates and others for help so long as that help does not reduce to another doing your work for you, per the course\u2019s policy on ",(0,o.kt)("a",{parentName:"p",href:"https://cs50.harvard.edu/x/2023/psets/syllabus/#academic-honesty"},"academic honesty"),"."),(0,o.kt)("p",null,"The staff conducts random audits of submissions to CS50x. Students found to be in violation of this policy will be removed from the course. Students who have already completed CS50x, if found to be in violation, will have their CS50 Certificate permanently revoked."),(0,o.kt)("h2",{id:"what-to-do"},"What to Do"),(0,o.kt)("p",null,"Be sure you have completed ",(0,o.kt)("a",{parentName:"p",href:"https://cs50.harvard.edu/x/2023/psets/labs/8/"},"Lab 8")," before beginning this problem set."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Log into ",(0,o.kt)("a",{parentName:"li",href:"https://cs50.dev/"},"cs50.dev")," using your GitHub account"),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"update50")," in your codespace\u2019s terminal window to ensure your codespace is up-to-date and, when prompted, click ",(0,o.kt)("strong",{parentName:"li"},"Rebuild now")),(0,o.kt)("li",{parentName:"ol"},"Submit ",(0,o.kt)("a",{parentName:"li",href:"/docs/curriculum-resource/cs50x/lecture9/problem%20set/homepage"},"Homepage"))),(0,o.kt)("h2",{id:"when-to-do-it"},"When to Do It"),(0,o.kt)("p",null,"By ",(0,o.kt)("a",{parentName:"p",href:"https://time.cs50.io/20231231T235900-0500"},"2023-12-31T23:59:00-05:00"),"."),(0,o.kt)(c.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);