"use strict";(self.webpackChunkrio_docs=self.webpackChunkrio_docs||[]).push([[1959],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=o,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||i;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:o,a[1]=l;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},5715:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={title:"Terminfo",language:"en"},a=void 0,l={unversionedId:"install/terminfo",id:"install/terminfo",title:"Terminfo",description:'To make sure Rio works correctly, the "rio" terminfo must be used. The rio terminfo will be picked up automatically if it is installed.',source:"@site/docs/install/terminfo.md",sourceDirName:"install",slug:"/install/terminfo",permalink:"/rio/docs/install/terminfo",draft:!1,editUrl:"https://github.com/raphamorim/rio/tree/main/docs/docs/install/terminfo.md",tags:[],version:"current",frontMatter:{title:"Terminfo",language:"en"},sidebar:"tutorialSidebar",previous:{title:"MacOS",permalink:"/rio/docs/install/macos"},next:{title:"Using cargo",permalink:"/rio/docs/install/using-cargo"}},c={},s=[],u={toc:s},m="wrapper";function p(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'To make sure Rio works correctly, the "rio" terminfo must be used. The rio terminfo will be picked up automatically if it is installed.'),(0,o.kt)("p",null,"If the following command returns without any errors, the rio terminfo is already installed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"infocmp rio\n")),(0,o.kt)("p",null,"If it is not present already, you can install it globally with the following command:"),(0,o.kt)("p",null,"When cloned locally, from the root of the repository run ",(0,o.kt)("inlineCode",{parentName:"p"},"sudo tic -xe rio misc/rio.terminfo")),(0,o.kt)("p",null,"If the source code has not been cloned locally:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -o rio.terminfo https://raw.githubusercontent.com/raphamorim/rio/main/misc/rio.terminfo\nsudo tic -xe rio rio.terminfo\nrm rio.terminfo\n")))}p.isMDXComponent=!0}}]);