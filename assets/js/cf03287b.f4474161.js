"use strict";(self.webpackChunklearncs_set=self.webpackChunklearncs_set||[]).push([[1437],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>b});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=u(t),f=o,b=m["".concat(s,".").concat(f)]||m[f]||p[f]||a;return t?n.createElement(b,i(i({ref:r},l),{},{components:t})):n.createElement(b,i({ref:r},l))}));function b(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c[m]="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},92443:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=t(87462),o=(t(67294),t(3905));const a={title:"FAQ"},i=void 0,c={unversionedId:"curriculum-resource/cs61b/labs/lab05/faq",id:"curriculum-resource/cs61b/labs/lab05/faq",title:"FAQ",description:"I'm running into StackOverFlowError, OutOfMemoryError or seeing that my assessment timed out",source:"@site/docs/curriculum-resource/cs61b/labs/lab05/faq.md",sourceDirName:"curriculum-resource/cs61b/labs/lab05",slug:"/curriculum-resource/cs61b/labs/lab05/faq",permalink:"/docs/curriculum-resource/cs61b/labs/lab05/faq",draft:!1,tags:[],version:"current",frontMatter:{title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Lab 05 Disjoint Sets",permalink:"/docs/curriculum-resource/cs61b/labs/lab05/"},next:{title:"Lab 06 BSTMap",permalink:"/docs/curriculum-resource/cs61b/labs/lab06/"}},s={},u=[{value:"I&#39;m running into <code>StackOverFlowError</code>, <code>OutOfMemoryError</code> or seeing that my assessment timed out",id:"im-running-into-stackoverflowerror-outofmemoryerror-or-seeing-that-my-assessment-timed-out",level:3}],l={toc:u},m="wrapper";function p(e){let{components:r,...t}=e;return(0,o.kt)(m,(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"im-running-into-stackoverflowerror-outofmemoryerror-or-seeing-that-my-assessment-timed-out"},"I'm running into ",(0,o.kt)("inlineCode",{parentName:"h3"},"StackOverFlowError"),", ",(0,o.kt)("inlineCode",{parentName:"h3"},"OutOfMemoryError")," or seeing that my assessment timed out"),(0,o.kt)("p",null,"on one of the tests. "),(0,o.kt)("p",null,"If you're receiving a ",(0,o.kt)("inlineCode",{parentName:"p"},"StackOverFlowError"),", it might imply that there is an infinite\nrecursion happening somewhere in your implementation. Double check that you're accounting\nfor different cases ",(0,o.kt)("strong",{parentName:"p"},"correctly")," - for example, what should happen if you try to ",(0,o.kt)("inlineCode",{parentName:"p"},"union"),"\ntwo vertices within the same set?"))}p.isMDXComponent=!0}}]);