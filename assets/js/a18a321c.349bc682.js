"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[4039],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=c,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:c,i[1]=a;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>g});var n=r(67294),c=r(86010),o=r(52802),i=r(39960),a=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(u,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:i},i))}function p(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},88818:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(87462),c=(r(67294),r(3905)),o=r(52991);const i={sidebar_position:2,description:"cs61a Lecture 2 Functions",title:"Lecture 2 Functions"},a="Lecture 2 Functions",l={unversionedId:"curriculum-resource/cs61a/lecture/Lecture 2 Functions",id:"curriculum-resource/cs61a/lecture/Lecture 2 Functions",title:"Lecture 2 Functions",description:"cs61a Lecture 2 Functions",source:"@site/docs/curriculum-resource/cs61a/lecture/Lecture 2 Functions.md",sourceDirName:"curriculum-resource/cs61a/lecture",slug:"/curriculum-resource/cs61a/lecture/Lecture 2 Functions",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 2 Functions",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"cs61a Lecture 2 Functions",title:"Lecture 2 Functions"},sidebar:"tutorialSidebar",previous:{title:"Lecture 1 Welcome",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 1 Welcome"},next:{title:"Lecture 3 Control",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 3 Control"}},s={},u=[{value:"lecture Video",id:"lecture-video",level:2},{value:"Slider",id:"slider",level:2},{value:"Texbook",id:"texbook",level:2},{value:"Lab &amp; Discussion Links",id:"lab--discussion-links",level:2},{value:"Homework &amp; Project",id:"homework--project",level:2}],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(p,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"lecture-2-functions"},"Lecture 2 Functions"),(0,c.kt)("h2",{id:"lecture-video"},"lecture Video"),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=277746636&bvid=BV17c411f78k&cid=1311465503&p=1&high_quality=1&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",allowfullscreen:"allowfullscreen",width:"100%",height:"500",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"}," "),(0,c.kt)("h2",{id:"slider"},"Slider"),(0,c.kt)("h2",{id:"texbook"},"Texbook"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"https://www.composingprograms.com/pages/11-getting-started.html"},"Ch. 1.1 11-getting-started")," | ",(0,c.kt)("a",{parentName:"p",href:"https://www.composingprograms.com/pages/12-elements-of-programming.html"},"Ch. 1.2 12-elements-of-programming")," | ",(0,c.kt)("a",{parentName:"p",href:"https://www.composingprograms.com/pages/13-defining-new-functions.html"},"Ch. 1.3 13-defining-new-functions")," | "),(0,c.kt)("h2",{id:"lab--discussion-links"},"Lab & Discussion Links"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/lab/lab00"},"Lab 00: Getting Started")," | ",(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/lab/sol-lab00"},"Solutions")," | "),(0,c.kt)("h2",{id:"homework--project"},"Homework & Project"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/homework/hw01"},"HW 01: Functions, Control")," | ",(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/homework/sol-hw01"},"Solutions")," | "),(0,c.kt)(o.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);