"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[9010],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var c=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,c)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,c,n=function(e,t){if(null==e)return{};var r,c,n={},i=Object.keys(e);for(c=0;c<i.length;c++)r=i[c],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(c=0;c<i.length;c++)r=i[c],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=c.createContext({}),s=function(e){var t=c.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return c.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.createElement(c.Fragment,{},t)}},d=c.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return r?c.createElement(f,o(o({ref:t},u),{},{components:r})):c.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[m]="string"==typeof e?e:n,o[1]=a;for(var s=2;s<i;s++)o[s]=r[s];return c.createElement.apply(null,o)}return c.createElement.apply(null,r)}d.displayName="MDXCreateElement"},52991:(e,t,r)=>{r.d(t,{Z:()=>y});var c=r(67294),n=r(86010),i=r(52802),o=r(39960),a=r(13919),l=r(95999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:r}=e;return c.createElement(o.Z,{href:t,className:(0,n.Z)("card padding--lg",s.cardContainer)},r)}function m(e){let{href:t,icon:r,title:i,description:o}=e;return c.createElement(u,{href:t},c.createElement("h2",{className:(0,n.Z)("text--truncate",s.cardTitle),title:i},r," ",i),o&&c.createElement("p",{className:(0,n.Z)("text--truncate",s.cardDescription),title:o},o))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?c.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.xz)(t.docId??void 0);return c.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return c.createElement(d,{item:t});case"category":return c.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,i.jA)();return c.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return c.createElement(b,e);const o=(0,i.MN)(t);return c.createElement("section",{className:(0,n.Z)("row",r)},o.map(((e,t)=>c.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},c.createElement(f,{item:e})))))}},50739:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var c=r(87462),n=(r(67294),r(3905)),i=r(52991);const o={title:"Practice Problem",description:"cs50x lecture5 Data Structures Practice Problem"},a="Week 5 Practice Problems - CS50x 2023",l={unversionedId:"curriculum-resource/cs50x/lecture6/practice problems/index",id:"curriculum-resource/cs50x/lecture6/practice problems/index",title:"Practice Problem",description:"cs50x lecture5 Data Structures Practice Problem",source:"@site/docs/curriculum-resource/cs50x/lecture6/practice problems/index.md",sourceDirName:"curriculum-resource/cs50x/lecture6/practice problems",slug:"/curriculum-resource/cs50x/lecture6/practice problems/",permalink:"/docs/curriculum-resource/cs50x/lecture6/practice problems/",draft:!1,tags:[],version:"current",frontMatter:{title:"Practice Problem",description:"cs50x lecture5 Data Structures Practice Problem"},sidebar:"tutorialSidebar",previous:{title:"speller",permalink:"/docs/curriculum-resource/cs50x/lecture6/problem set/speller"},next:{title:"trie",permalink:"/docs/curriculum-resource/cs50x/lecture6/practice problems/trie"}},s={},u=[],m={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,c.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"week-5-practice-problems---cs50x-2023"},"Week 5 Practice Problems - CS50x 2023"),(0,n.kt)("p",null,"In addition to this week\u2019s lab and problem set, you\u2019re welcome to try any of these (optional!) practice problems:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/curriculum-resource/cs50x/lecture6/practice%20problems/trie"},"Trie"),", for introducing more complex data structures and working with tries")),(0,n.kt)(i.Z,{mdxType:"DocCardList"}))}d.isMDXComponent=!0}}]);