"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8140],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),d=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,g=p["".concat(l,".").concat(u)]||p[u]||m[u]||r;return n?o.createElement(g,s(s({ref:t},c),{},{components:n})):o.createElement(g,s({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),a=n(7294),r=n(9493);function s(e){const t=(0,a.useRef)(null),[n,o]=(0,a.useState)(e.className||""),[s,i]=(0,a.useState)(e.style||{}),[l,d]=(0,a.useState)(e.height),[c,p]=(0,a.useState)(),[m,u]=(0,a.useState)(JSON.stringify(e.config||"")),[g,f]=(0,a.useState)("");return(0,a.useEffect)((()=>{if(!t.current)return;const{className:n,style:a,height:s,sdkReady:l,config:h,...v}=e;if(o(n||""),i(a||{}),d(s),c&&g===JSON.stringify(v)){if(m===JSON.stringify(h))return;u(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{c?.setConfig(e)})):h&&c.setConfig(h)}else f(JSON.stringify(v)),c?.destroy(),(0,r.T)(t.current,{config:h,...v}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,a.useEffect)((()=>()=>{c?.destroy()}),[]),a.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),d=n(814),c=n(4866),p=n(5162),m=n(2134),u=n(420);function g(e){const[t,n]=(0,a.useState)(e.js),[o,r]=(0,a.useState)(e.ts),[s,i]=(0,a.useState)(e.react),[g,f]=(0,a.useState)(e.vue),[h,v]=(0,a.useState)(e.svelte),y="3.7rem",[k,b]=(0,a.useState)(!0),[w,x]=(0,a.useState)(y),S=(0,a.useRef)(null),N=()=>{setTimeout((()=>{x(`calc(${S.current.offsetHeight}px + ${y})`)}),5),setTimeout((()=>{x(`calc(${S.current.offsetHeight}px + ${y})`)}),255)};return(0,a.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),r(e(o,"ts")),i(e(s,"jsx")),f(e(g,"html")),v(e(h,"html"))}}),[]),a.createElement("details",{className:`alert alert--info ${m.Z.details} ${u.Z.details}`,"data-collapsed":k,style:{height:k?y:w,overflow:"hidden",willChange:"height",transition:`height ${k?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},a.createElement("summary",{onClick:()=>{b(!k),N()}},"show code"),a.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},a.createElement("div",{className:m.Z.collapsibleContent},a.createElement(c.Z,{groupId:"sdk-code"},a.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:N}},a.createElement(d.Z,{language:"js"},t)),a.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:N}},a.createElement(d.Z,{language:"ts"},o)),a.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:N}},a.createElement(d.Z,{language:"jsx"},s)),a.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:N}},a.createElement(d.Z,{language:"html"},g)),a.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:N}},a.createElement(d.Z,{language:"html"},h))))))}const f="container_Egsj";function h(e){const{className:t,style:n,showCode:r,height:l,...d}=e,c=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${c(d)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${c(d)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${c(d)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${c(d)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,v=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${c(d)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return a.createElement(a.Fragment,null,a.createElement(s,(0,o.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&a.createElement(g,{js:p,ts:m,react:u,vue:h,svelte:v}))}},1818:(e,t,n)=>{n.d(t,{Z:()=>d});var o=n(7294),a=n(2389);function r(e){let{children:t,fallback:n}=e;return(0,a.Z)()?o.createElement(o.Fragment,null,t?.()):n??null}var s=n(814),i=n(9493),l=n(1446);function d(e){const{params:t,config:n,code:a,language:d="js",codeTitle:c="",showLineNumbers:p=!1,formatCode:m=!0,linkText:u="Run in LiveCodes",style:g={},className:f=""}=e,h=(0,i.r)({appUrl:l.G,params:t,config:n});return o.createElement("div",{style:{marginBottom:"30px",...g},className:f},a&&o.createElement(r,null,(()=>{return o.createElement(s.Z,{language:d,title:c,showLineNumbers:p},m?(e=a,void 0===(t=d)&&(t="js"),window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})):a);var e,t})),o.createElement("a",{href:h,target:"_blank",rel:"noreferrer"},u,o.createElement("svg",{width:"12",height:"12","aria-hidden":"true",viewBox:"0 0 24 24",className:"iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module",style:{marginLeft:"4px"}},o.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))))}},9493:(e,t,n)=>{n.d(t,{T:()=>a,r:()=>r});var o=n(7728);async function a(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:o={},config:a={},import:r,lite:s,loading:i="lazy",template:l,view:d="split"}=t,c="headless"===d;let p,m=null;if("string"==typeof e)m=document.querySelector(e);else if(e instanceof HTMLElement)m=e;else if(!c||"object"!=typeof e)throw new Error("A valid container element is required.");if(!m){if(!c)throw new Error(`Cannot find element: "${e}"`);m=document.createElement("div"),N(m),document.body.appendChild(m)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const u=p.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{p.searchParams.set(e,String(o[e]))})),"string"==typeof a)try{new URL(a),p.searchParams.set("config",a)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof a)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(a).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),r&&p.searchParams.set("x",r),s&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",c?"eager":i),p.searchParams.set("view",d);let g=!1;const f="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!m)return;const t=m.dataset.height||m.style.height;if(t&&!c){const e=isNaN(Number(t))?t:t+"px";m.style.height=e}"false"===m.dataset.defaultStyles||c||(m.style.backgroundColor||="#fff",m.style.border||="1px solid black",m.style.borderRadius||="5px",m.style.boxSizing||="border-box",m.style.padding||="0",m.style.width||="100%",m.style.height||=m.style.height||"300px",m.style.minHeight="200px",m.style.flexGrow="1",m.style.overflow||="hidden",m.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";n.setAttribute("loading",o),n.classList.add("livecodes"),c?N(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=m.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===u&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:a},u))})),n.onload=()=>{e(n)},n.src=p.href,m.appendChild(n)})),v=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===u&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),v.settled=!0)}))})),y=()=>g?Promise.reject(f):new Promise((async e=>{v.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},u),await v,e()})),k=(e,t)=>new Promise((async(n,o)=>{if(g)return o(f);await y();const a=C();addEventListener("message",(function t(r){if(r.source===h.contentWindow&&r.origin===u&&"livecodes-api-response"===r.data?.type&&r.data?.id===a&&r.data.method===e){removeEventListener("message",t);const e=r.data.payload;e?.error?o(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:a,args:t},u)})),b={},w=["load","ready","code","console","tests","destroy"],x=(e,t)=>{if(g)throw new Error(f);return w.includes(e)?(k("watch",[e]),b[e]||(b[e]=[]),b[e]?.push(t),{remove:()=>{b[e]=b[e]?.filter((e=>e!==t)),0===b[e]?.length&&k("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==u||!t||!b[t])return;const n=e.data?.payload;b[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(b).forEach((e=>{e.length=0})),h?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await y(),t.unobserve(m))}))}),{rootMargin:"150px"}).observe(m)}function N(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const C=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>y(),run:()=>k("run"),format:e=>k("format",[e]),getShareUrl:e=>k("getShareUrl",[e]),getConfig:e=>k("getConfig",[e]),setConfig:e=>k("setConfig",[e]),getCode:()=>k("getCode"),show:(e,t)=>k("show",[e,t]),runTests:()=>k("runTests"),onChange:e=>x("code",e),watch:x,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return k("exec",[e,...n])},destroy:()=>v.settled?k("destroy").then(S):g?Promise.reject(f):(S(),Promise.resolve())}}function r(e){void 0===e&&(e={});const{appUrl:t,params:n,config:a,import:r,...s}=e,i="string"==typeof a?{config:a}:"object"==typeof a?{x:"code/"+(0,o.compressToEncodedURIComponent)(JSON.stringify(a))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:r,...i}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let o;const r=e.dataset.config||e.dataset.prefill;if(r)try{o=JSON.parse(r)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",a(e,{import:"dom/"+s,...t,...o?{config:o}:{}})}))}))},5833:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,basicJsxDemo:()=>m,contentTitle:()=>l,cssModulesDemo:()=>k,default:()=>N,disableAutoRenderDemo:()=>f,exportsDemo:()=>v,frontMatter:()=>i,importsDemo:()=>h,metadata:()=>d,preactDemo:()=>x,reactDomDemo:()=>u,rootDemo:()=>g,styledComponentsDemo:()=>w,stylesDemo:()=>y,tailwindcssDemo:()=>b,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(325),s=n(1818);const i={},l="JSX",d={unversionedId:"languages/jsx",id:"languages/jsx",title:"JSX",description:"JSX is a syntax extension for JavaScript that allows writing HTML-like markup inside JavaScript.",source:"@site/docs/languages/jsx.md",sourceDirName:"languages",slug:"/languages/jsx",permalink:"/livecodes/docs/languages/jsx",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/languages/jsx.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"JavaScript",permalink:"/livecodes/docs/languages/javascript"},next:{title:"Julia",permalink:"/livecodes/docs/languages/julia"}},c={},p=[{value:"Demo:",id:"demo",level:2},{value:"Usage",id:"usage",level:2},{value:"Auto-rendering",id:"auto-rendering",level:3},{value:"Root Element",id:"root-element",level:4},{value:"Disabling Auto-rendering",id:"disabling-auto-rendering",level:4},{value:"Importing Modules",id:"importing-modules",level:3},{value:"Types for Imported Modules",id:"types-for-imported-modules",level:4},{value:"Exports",id:"exports",level:3},{value:"Styles",id:"styles",level:3},{value:"Style Editor",id:"style-editor",level:4},{value:"Importing Stylesheets",id:"importing-stylesheets",level:4},{value:"CSS Modules",id:"css-modules",level:4},{value:"CSS Frameworks",id:"css-frameworks",level:4},{value:"CSS-in-JS",id:"css-in-js",level:4},{value:"Custom JSX Runtimes",id:"custom-jsx-runtimes",level:3},{value:"Language Info",id:"language-info",level:2},{value:"Name",id:"name",level:3},{value:"Extension",id:"extension",level:3},{value:"Editor",id:"editor",level:3},{value:"Compiler",id:"compiler",level:2},{value:"Code Formatting",id:"code-formatting",level:2},{value:"Custom Settings",id:"custom-settings",level:2},{value:"Starter Template",id:"starter-template",level:2},{value:"Links",id:"links",level:2}],m={jsx:"export default function App() {\n  return <h1>Hello World!</h1>;\n}"},u={jsx:'import { createRoot } from "react-dom/client";\n\nfunction App() {\n  return <h1>Hello World!</h1>;\n}\n\nconst root = createRoot(document.querySelector("#root"));\nroot.render(<App />);',html:'<div id="root"></div>'},g={html:'<div id="livecodes-app">Loading...</div>',jsx:"export default function App() {\n  return <h1>Hello World!</h1>;\n}"},f={markup:{language:"html",content:"JSX auto-rendering is disabled. Set from app menu \u2192 Custom Settings."},script:{language:"jsx",content:"export default function App() {\n  return <h1>Hello World!</h1>;\n}"},customSettings:{jsx:{disableAutoRender:!0}}},h={jsx:'import { useState, useEffect } from "react";\nimport confetti from "canvas-confetti";\nimport "bootstrap/dist/css/bootstrap.css";\n\nexport default function App() {\n  const [count, setCount] = useState(0);\n\n  useEffect(() => {\n    if (count > 0) {\n      confetti();\n    }\n  }, [count]);\n\n  return (\n    <div className="m-5 text-center">\n      <p>You clicked {count} times.</p>\n      <button onClick={() => setCount(count + 1)}>Click me</button>\n    </div>\n  );\n}\n'},v={mdx:'import Greeting from "./script";\n\n<Greeting name="MDX" />\n',jsx:"export default function(props) {\n  return <h1>Greeting from {props.name}!</h1>;\n}\n"},y={jsx:'import "bootstrap/dist/css/bootstrap.css";\n\nexport default () => <h1 className="m-5 text-center">Hello World!</h1>;\n'},k={activeEditor:"script",style:{language:"css",content:".title {\n  color: green;\n  font-family: sans-serif;\n}\n"},script:{language:"jsx",content:"import classes from './style.module.css';\n\nexport default function() {\n  return <h1 className={classes.title}>Hello, CSS Modules!</h1>;\n}\n"},processors:["cssmodules"]},b={activeEditor:"script",style:{language:"css",content:"@tailwind base;\n@tailwind components;\n@tailwind utilities;\n"},script:{language:"jsx",content:'export default function() {\n  return <h1 className="text-3xl font-bold text-gray-500 text-center m-4">Hello, Tailwind CSS!</h1>;\n}\n'},processors:["tailwindcss"]},w={jsx:"import styled from 'styled-components';\n\nconst Title = styled.h1`\n text-align: center;\n font-family: sans-serif;\n color: palevioletred;\n`;\n\nexport default function () {\n return <Title>Hello, styled-components!</Title>;\n}\n"},x={jsx:"/** @jsx h */\nimport { h, render } from 'preact';\n\nconst App = (props) => <h1>Hello, {props.name}</h1>;\n\nrender(<App name=\"Preact\" />, document.body);\n"},S={toc:p,basicJsxDemo:m,reactDomDemo:u,rootDemo:g,disableAutoRenderDemo:f,importsDemo:h,exportsDemo:v,stylesDemo:y,cssModulesDemo:k,tailwindcssDemo:b,styledComponentsDemo:w,preactDemo:x};function N(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},S,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"jsx"},"JSX"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX")," is a syntax extension for JavaScript that allows writing HTML-like markup inside JavaScript.\nIt has been popularized by ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/"},"React"),", and then adopted by many other libraries/frameworks."),(0,a.kt)("p",null,"By default, when running JSX in LiveCodes, ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/"},"React")," runtime is used.\nHowever, other libraries like ",(0,a.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact"),", ",(0,a.kt)("a",{parentName:"p",href:"https://nanojsx.io/"},"nano JSX")," and others can be used as well (see ",(0,a.kt)("a",{parentName:"p",href:"#custom-jsx-runtimes"},"Custom JSX Runtimes"),")."),(0,a.kt)("p",null,"Please note that TSX is also supported in LiveCodes and is ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/tsx"},"documented here"),"."),(0,a.kt)("h2",{id:"demo"},"Demo:"),(0,a.kt)(r.Z,{template:"react",height:"400px",mdxType:"LiveCodes"}),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,"The easiest way is to ",(0,a.kt)("a",{parentName:"p",href:"#auto-rendering"},"auto-render")," a component by exporting it as the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export#using_the_default_export"},"default export"),":"),(0,a.kt)(s.Z,{params:m,code:m.jsx,language:"jsx",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("p",null,"You may, however, be more explicit and render the component yourself using ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/client"},"React DOM"),":"),(0,a.kt)(s.Z,{params:u,code:u.jsx,language:"jsx",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"React's ",(0,a.kt)("a",{parentName:"p",href:"https://legacy.reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html"},"new JSX transform")," is utilized. So there is no need to import React."),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"// this is not needed:\n// import React from 'react';\n\nexport default function App() {\n  return <h1>Hello World!</h1>;\n}\n"))),(0,a.kt)("h3",{id:"auto-rendering"},"Auto-rendering"),(0,a.kt)("p",null,"A component is rendered automatically as a React component (without having to manually use React Dom to render it) if the following conditions are met:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The component is exported as the default export."),(0,a.kt)("li",{parentName:"ul"},"No custom JSX runtime is used (see ",(0,a.kt)("a",{parentName:"li",href:"#custom-jsx-runtimes"},"Custom JSX Runtimes"),")."),(0,a.kt)("li",{parentName:"ul"},"No ",(0,a.kt)("a",{parentName:"li",href:"#exports"},"imports from ",(0,a.kt)("inlineCode",{parentName:"a"},'"./script"'))," in markup editor."),(0,a.kt)("li",{parentName:"ul"},"Auto-rendering is not ",(0,a.kt)("a",{parentName:"li",href:"#disabling-auto-rendering"},"disabled"),".")),(0,a.kt)("h4",{id:"root-element"},"Root Element"),(0,a.kt)("p",null,"To render the React components to a specific ",(0,a.kt)("a",{parentName:"p",href:"https://react.dev/reference/react-dom/client/createRoot"},"root")," DOM element use ",(0,a.kt)("inlineCode",{parentName:"p"},'"livecodes-app"')," as the element ",(0,a.kt)("inlineCode",{parentName:"p"},"id"),". Otherwise, if that element is not found, a new ",(0,a.kt)("inlineCode",{parentName:"p"},"div")," element is added to ",(0,a.kt)("inlineCode",{parentName:"p"},"document.body")," and is used as the root."),(0,a.kt)("p",null,"Example:"),(0,a.kt)(s.Z,{params:g,code:g.html,language:"html",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("h4",{id:"disabling-auto-rendering"},"Disabling Auto-rendering"),(0,a.kt)("p",null,"To disable auto-rendering, set the ",(0,a.kt)("a",{parentName:"p",href:"#custom-settings"},"custom settings")," ",(0,a.kt)("inlineCode",{parentName:"p"},"disableAutoRender")," property to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,a.kt)(s.Z,{config:f,code:JSON.stringify(f.customSettings,null,2),language:"json",codeTitle:"Custom Settings",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("h3",{id:"importing-modules"},"Importing Modules"),(0,a.kt)("p",null,"npm modules can be imported as described in the section about ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/module-resolution"},"module resolution"),", including bare module imports and importing from different CDNs. Stylesheet imports are added as ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tags in the page ",(0,a.kt)("inlineCode",{parentName:"p"},"head"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)(s.Z,{params:h,code:h.jsx,language:"jsx",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("p",null,"Module imports can be customized using import maps as described in ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/module-resolution#custom-module-resolution"},"module resolution")," documentations."),(0,a.kt)("h4",{id:"types-for-imported-modules"},"Types for Imported Modules"),(0,a.kt)("p",null,"Types for imported modules are loaded automatically (if available) to provide ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/intellisense"},"Intellisense"),", auto-completion and type information."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LiveCodes Intellisense",src:n(6082).Z,width:"1616",height:"945"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"LiveCodes Intellisense",src:n(938).Z,width:"1785",height:"895"})),(0,a.kt)("p",null,"Moreover, you can provide custom type definitions for modules that do not have types available on npm. See ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/intellisense#custom-types"},"Custom Types")," for details."),(0,a.kt)("h3",{id:"exports"},"Exports"),(0,a.kt)("p",null,"Values exported from script editor (default or named) can be imported in the markup editor by importing from ",(0,a.kt)("inlineCode",{parentName:"p"},'"./script"')," (with no extension)."),(0,a.kt)("p",null,"This can be useful, for example, when using ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/mdx"},"MDX")," to import components exported form JSX."),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{params:v,mdxType:"LiveCodes"}),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When values are imported from ",(0,a.kt)("inlineCode",{parentName:"p"},'"./script"'),", ",(0,a.kt)("a",{parentName:"p",href:"#auto-rendering"},"auto-rendering")," is disabled, because it is assumed that you want to take control over component rendering.")),(0,a.kt)("h3",{id:"styles"},"Styles"),(0,a.kt)("p",null,"CSS can be applied to the component using various ways:"),(0,a.kt)("h4",{id:"style-editor"},"Style Editor"),(0,a.kt)("p",null,"Styles added in the style editor is applied globally to the ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/result"},"result page"),". This can use different ",(0,a.kt)("strong",{parentName:"p"},"languages/processors")," supported in LiveCodes including CSS, SCSS, Less, Stylus, ..etc. See ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/css"},"style documentation")," for more details."),(0,a.kt)("p",null,"And of course, styles and stylesheets added in markup editor are also applied globally."),(0,a.kt)("h4",{id:"importing-stylesheets"},"Importing Stylesheets"),(0,a.kt)("p",null,"Stylesheets imported in script editor are added as ",(0,a.kt)("inlineCode",{parentName:"p"},'<link rel="stylesheet">')," tags in the page ",(0,a.kt)("inlineCode",{parentName:"p"},"head"),".\nThe stylesheet URL can be an absolute URL or a path in the npm package. The URL has to end with ",(0,a.kt)("inlineCode",{parentName:"p"},'".css"'),"."),(0,a.kt)("p",null,"example:"),(0,a.kt)(s.Z,{params:y,code:y.jsx,language:"jsx",formatCode:!1,mdxType:"RunInLiveCodes"}),(0,a.kt)("h4",{id:"css-modules"},"CSS Modules"),(0,a.kt)("p",null,"CSS modules are supported and are ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/cssmodules"},"documented separately"),". Make sure to enable CSS modules (from style editor menu or in ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#processors"},(0,a.kt)("inlineCode",{parentName:"a"},"processors"))," property of ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configuration object"),")."),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:k,mdxType:"LiveCodes"}),(0,a.kt)("h4",{id:"css-frameworks"},"CSS Frameworks"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/features/css#css-processors"},"CSS Frameworks")," supported in LiveCodes (e.g. ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/tailwindcss"},"Tailwind CSS"),", ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/unocss"},"UnoCSS"),", ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/windicss"},"WindiCSS"),") can detect class names added in JSX. Make sure that the required utility is enabled (from style editor menu or in ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object#processors"},(0,a.kt)("inlineCode",{parentName:"a"},"processors"))," property of ",(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/configuration/configuration-object"},"configuration object"),") and that required ",(0,a.kt)("a",{parentName:"p",href:"https://tailwindcss.com/docs/functions-and-directives#tailwind"},"directives")," are added to the style editor."),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{config:b,mdxType:"LiveCodes"}),(0,a.kt)("h4",{id:"css-in-js"},"CSS-in-JS"),(0,a.kt)("p",null,"CSS-in-JS libraries can be imported and used as usual."),(0,a.kt)("p",null,"Demo:"),(0,a.kt)(r.Z,{params:w,mdxType:"LiveCodes"}),(0,a.kt)("h3",{id:"custom-jsx-runtimes"},"Custom JSX Runtimes"),(0,a.kt)("p",null,"LiveCodes allows using other libraries (like ",(0,a.kt)("a",{parentName:"p",href:"https://preactjs.com/"},"Preact")," and ",(0,a.kt)("a",{parentName:"p",href:"https://nanojsx.io/"},"nano JSX"),") as the JSX runtime."),(0,a.kt)("p",null,"JSX is compiled to JavaScript using the TypeScript compiler, which allows multiple configuration options for JSX, including ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#jsx"},(0,a.kt)("inlineCode",{parentName:"a"},"jsx")),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#jsxFactory"},(0,a.kt)("inlineCode",{parentName:"a"},"jsxFactory")),", ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#jsxFragmentFactory"},(0,a.kt)("inlineCode",{parentName:"a"},"jsxFragmentFactory"))," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#jsxImportSource"},(0,a.kt)("inlineCode",{parentName:"a"},"jsxImportSource")),"."),(0,a.kt)("p",null,"These can be configured using in-code pragmas or in ",(0,a.kt)("a",{parentName:"p",href:"#custom-settings"},"custom settings"),"."),(0,a.kt)("p",null,"Example for using Preact:"),(0,a.kt)(s.Z,{params:x,code:"//highlight-next-line\n"+x.jsx,language:"jsx",formatCode:!1,showLineNumbers:!0,mdxType:"RunInLiveCodes"}),(0,a.kt)("admonition",{title:"note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("a",{parentName:"p",href:"#auto-rendering"},"Auto-rendering")," is disabled for custom JSX runtimes.")),(0,a.kt)("h2",{id:"language-info"},"Language Info"),(0,a.kt)("h3",{id:"name"},"Name"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jsx")),(0,a.kt)("h3",{id:"extension"},"Extension"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},".jsx")),(0,a.kt)("h3",{id:"editor"},"Editor"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"script")),(0,a.kt)("h2",{id:"compiler"},"Compiler"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/languages/typescript"},"TypeScript compiler")),(0,a.kt)("h2",{id:"code-formatting"},"Code Formatting"),(0,a.kt)("p",null,"Using ",(0,a.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier"),"."),(0,a.kt)("h2",{id:"custom-settings"},"Custom Settings"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/livecodes/docs/advanced/custom-settings"},"Custom settings")," added to the property ",(0,a.kt)("inlineCode",{parentName:"p"},"jsx")," are passed to the TypeScript compiler as ",(0,a.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/tsconfig#compilerOptions"},"compiler options")," while compiling JSX.\nIn addition, the option ",(0,a.kt)("inlineCode",{parentName:"p"},"disableAutoRender")," can be set to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to disable ",(0,a.kt)("a",{parentName:"p",href:"#auto-rendering"},"auto-rendering"),"."),(0,a.kt)("p",null,"Please note that custom settings should be valid JSON (i.e. functions are not allowed)."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Custom Settings"',title:'"Custom','Settings"':!0},'{\n  "jsx": {\n    "disableAutoRender": true,\n    "jsxFactory": "h",\n    "jsxFragmentFactory": "Fragment"\n  }\n}\n')),(0,a.kt)("h2",{id:"starter-template"},"Starter Template"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://livecodes.io/?template=react"},"https://livecodes.io/?template=react")),(0,a.kt)("h2",{id:"links"},"Links"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.dev/"},"React")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://react.dev/learn/writing-markup-with-jsx"},"JSX"))))}N.isMDXComponent=!0},6082:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense1-800c66514ea7b2f714e5e0e7bcd4d234.jpg"},938:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/intellisense2-245f541f966fd336ab6a76abe9a2d060.jpg"}}]);