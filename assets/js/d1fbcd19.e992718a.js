"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9581],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>f});var a=t(67294);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){c(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,c=function(e,r){if(null==e)return{};var t,a,c={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var s=a.createContext({}),l=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(s.Provider,{value:r},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},p=a.forwardRef((function(e,r){var t=e.components,c=e.mdxType,n=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=l(t),p=c,f=m["".concat(s,".").concat(p)]||m[p]||d[p]||n;return t?a.createElement(f,o(o({ref:r},u),{},{components:t})):a.createElement(f,o({ref:r},u))}));function f(e,r){var t=arguments,c=r&&r.mdxType;if("string"==typeof e||c){var n=t.length,o=new Array(n);o[0]=p;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[m]="string"==typeof e?e:c,o[1]=i;for(var l=2;l<n;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},52991:(e,r,t)=>{t.d(r,{Z:()=>b});var a=t(67294),c=t(86010),n=t(52802),o=t(39960),i=t(13919),s=t(95999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:r,children:t}=e;return a.createElement(o.Z,{href:r,className:(0,c.Z)("card padding--lg",l.cardContainer)},t)}function m(e){let{href:r,icon:t,title:n,description:o}=e;return a.createElement(u,{href:r},a.createElement("h2",{className:(0,c.Z)("text--truncate",l.cardTitle),title:n},t," ",n),o&&a.createElement("p",{className:(0,c.Z)("text--truncate",l.cardDescription),title:o},o))}function d(e){let{item:r}=e;const t=(0,n.Wl)(r);return t?a.createElement(m,{href:t,icon:"\ud83d\uddc3\ufe0f",title:r.label,description:r.description??(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:r.items.length})}):null}function p(e){let{item:r}=e;const t=(0,i.Z)(r.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,n.xz)(r.docId??void 0);return a.createElement(m,{href:r.href,icon:t,title:r.label,description:r.description??c?.description})}function f(e){let{item:r}=e;switch(r.type){case"link":return a.createElement(p,{item:r});case"category":return a.createElement(d,{item:r});default:throw new Error(`unknown item type ${JSON.stringify(r)}`)}}function g(e){let{className:r}=e;const t=(0,n.jA)();return a.createElement(b,{items:t.items,className:r})}function b(e){const{items:r,className:t}=e;if(!r)return a.createElement(g,e);const o=(0,n.MN)(r);return a.createElement("section",{className:(0,c.Z)("row",t)},o.map(((e,r)=>a.createElement("article",{key:r,className:"col col--6 margin-bottom--lg"},a.createElement(f,{item:e})))))}},26532:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=t(87462),c=(t(67294),t(3905)),n=t(52991);const o={sidebar_position:31,description:"cs61a Lecture 31 Programs as Data",title:"Lecture 31 Programs as Data"},i="Lecture 31 Programs as Data",s={unversionedId:"curriculum-resource/cs61a/lecture/Lecture 31 Programs as Data",id:"curriculum-resource/cs61a/lecture/Lecture 31 Programs as Data",title:"Lecture 31 Programs as Data",description:"cs61a Lecture 31 Programs as Data",source:"@site/docs/curriculum-resource/cs61a/lecture/Lecture 31 Programs as Data.md",sourceDirName:"curriculum-resource/cs61a/lecture",slug:"/curriculum-resource/cs61a/lecture/Lecture 31 Programs as Data",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 31 Programs as Data",draft:!1,tags:[],version:"current",sidebarPosition:31,frontMatter:{sidebar_position:31,description:"cs61a Lecture 31 Programs as Data",title:"Lecture 31 Programs as Data"},sidebar:"tutorialSidebar",previous:{title:"Lecture 30 Interpreters",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 30 Interpreters"},next:{title:"Lecture 32 Macros",permalink:"/docs/curriculum-resource/cs61a/lecture/Lecture 32 Macros"}},l={},u=[{value:"lecture Video",id:"lecture-video",level:2},{value:"Slider",id:"slider",level:2},{value:"Texbook",id:"texbook",level:2},{value:"Lab &amp; Discussion Links",id:"lab--discussion-links",level:2},{value:"Homework &amp; Project",id:"homework--project",level:2}],m={toc:u},d="wrapper";function p(e){let{components:r,...o}=e;return(0,c.kt)(d,(0,a.Z)({},m,o,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"lecture-31-programs-as-data"},"Lecture 31 Programs as Data"),(0,c.kt)("h2",{id:"lecture-video"},"lecture Video"),(0,c.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=277746636&bvid=BV17c411f78k&cid=1311465503&p=1&high_quality=1&danmaku=0",scrolling:"no",border:"0",frameborder:"no",framespacing:"0",allowfullscreen:"true",allowfullscreen:"allowfullscreen",width:"100%",height:"500",scrolling:"no",frameborder:"0",sandbox:"allow-top-navigation allow-same-origin allow-forms allow-scripts"}," "),(0,c.kt)("h2",{id:"slider"},"Slider"),(0,c.kt)("p",null,(0,c.kt)("a",{target:"_blank",href:t(36338).Z},"Slides (1pp)")),(0,c.kt)("h2",{id:"texbook"},"Texbook"),(0,c.kt)("h2",{id:"lab--discussion-links"},"Lab & Discussion Links"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/dis/disc10"},"Disc 10: Interpreters")," | ",(0,c.kt)("a",{parentName:"p",href:"/docs/curriculum-resource/cs61a/dis/sol-disc10"},"Solutions")," | "),(0,c.kt)("h2",{id:"homework--project"},"Homework & Project"),(0,c.kt)("p",null,"None"),(0,c.kt)(n.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0},36338:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/files/31-Programs_as_Data_1pp-59e89813aacb54afe04c38cb8a0a347d.pdf"}}]);