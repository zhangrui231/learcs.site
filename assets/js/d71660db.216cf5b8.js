"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[1557],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var c=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},a=Object.keys(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)r=a[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=c.createContext({}),s=function(e){var t=c.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return c.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},m=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return r?c.createElement(f,o(o({ref:t},u),{},{components:r})):c.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<a;s++)o[s]=r[s];return c.createElement.apply(null,o)}return c.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>h});var c=r(67294),n=r(86010),a=r(52802),o=r(39960),i=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return c.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",s.cardContainer)},r)}function d(e){let{href:t,icon:r,title:a,description:o}=e;return c.createElement(u,{href:t},c.createElement("h2",{className:(0,n.Z)("text--truncate",s.cardTitle),title:a},r," ",a),o&&c.createElement("p",{className:(0,n.Z)("text--truncate",s.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,a.Wl)(t);return r?c.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.xz)(t.docId??void 0);return c.createElement(d,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(m,{item:t});case"category":return c.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,a.jA)();return c.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return c.createElement(b,e);const o=(0,a.MN)(t);return c.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(f,{item:e})))))}},37443:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var c=r(87462),n=(r(67294),r(3905)),a=r(52991);const o={sidebar_position:13,description:"cs61a Lecture 13 Data Abstraction",title:"Lecture 13 Data Abstraction"},i="Lecture 13 Data Abstraction",l={unversionedId:"curriculum-resource/cs61a/lecture/Lecture 13 Data Abstraction",id:"curriculum-resource/cs61a/lecture/Lecture 13 Data Abstraction",title:"Lecture 13 Data Abstraction",description:"cs61a Lecture 13 Data Abstraction",source:"@site/docs/curriculum-resource/cs61a/lecture/Lecture 13 Data Abstraction.md",sourceDirName:"curriculum-resource/cs61a/lecture",slug:"/curriculum-resource/cs61a/lecture/Lecture 13 Data Abstraction",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 13 Data Abstraction",draft:!1,tags:[],version:"current",sidebarPosition:13,frontMatter:{sidebar_position:13,description:"cs61a Lecture 13 Data Abstraction",title:"Lecture 13 Data Abstraction"},sidebar:"tutorialSidebar",previous:{title:"Lecture 12 Containers",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 12 Containers"},next:{title:"Lecture 14 Trees",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 14 Trees"}},s={},u=[{value:"lecture Video",id:"lecture-video",level:2},{value:"Slider",id:"slider",level:2},{value:"Texbook",id:"texbook",level:2},{value:"Lab &amp; Discussion Links",id:"lab--discussion-links",level:2},{value:"Homework &amp; Project",id:"homework--project",level:2}],d={toc:u},p="wrapper";function m(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,c.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lecture-13-data-abstraction"},"Lecture 13 Data Abstraction"),(0,n.kt)("h2",{id:"lecture-video"},"lecture Video"),(0,n.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=277746636&bvid=BV17c411f78k&cid=1311465503&p=1&high_quality=1&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",allowfullscreen:"allowfullscreen",width:"100%",height:"500",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"}," "),(0,n.kt)("h2",{id:"slider"},"Slider"),(0,n.kt)("p",null,(0,n.kt)("a",{target:"_blank",href:r(77907).Z},"Slides (1pp)")),(0,n.kt)("h2",{id:"texbook"},"Texbook"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.composingprograms.com/pages/22-data-abstraction.html"},"Ch. 2.2 22-data-abstraction")," | "),(0,n.kt)("h2",{id:"lab--discussion-links"},"Lab & Discussion Links"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/lab/lab04"},"Lab 04: Tree Recursion, Data Abstraction")," | ",(0,n.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/lab/sol-lab04"},"Solutions")," | "),(0,n.kt)("h2",{id:"homework--project"},"Homework & Project"),(0,n.kt)("p",null,"None"),(0,n.kt)(a.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0},77907:(e,t,r)=>{r.d(t,{Z:()=>c});const c=r.p+"assets/files/13-Data_Abstraction_1pp-48d7138c4ee3c2cf582d13e1fe9c902e.pdf"}}]);