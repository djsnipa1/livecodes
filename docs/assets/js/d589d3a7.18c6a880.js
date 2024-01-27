"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,g=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?o.createElement(g,s(s({ref:t},d),{},{components:n})):o.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},325:(e,t,n)=>{n.d(t,{Z:()=>h});var o=n(7462),r=n(7294),a=n(9493);function s(e){const t=(0,r.useRef)(null),[n,o]=(0,r.useState)(e.className||""),[s,i]=(0,r.useState)(e.style||{}),[l,c]=(0,r.useState)(e.height),[d,p]=(0,r.useState)(),[u,m]=(0,r.useState)(JSON.stringify(e.config||"")),[g,f]=(0,r.useState)("");return(0,r.useEffect)((()=>{if(!t.current)return;const{className:n,style:r,height:s,sdkReady:l,config:h,...y}=e;if(o(n||""),i(r||{}),c(s),d&&g===JSON.stringify(y)){if(u===JSON.stringify(h))return;m(JSON.stringify(h)),"string"==typeof h?fetch(h).then((e=>e.json())).then((e=>{d?.setConfig(e)})):h&&d.setConfig(h)}else f(JSON.stringify(y)),d?.destroy(),(0,a.T)(t.current,{config:h,...y}).then((e=>{p(e),"function"==typeof l&&l(e)}))}),[e]),(0,r.useEffect)((()=>()=>{d?.destroy()}),[]),r.createElement("div",{ref:t,className:n,style:s,"data-height":l})}var i=n(1446),l=n(412),c=n(814),d=n(4866),p=n(5162),u=n(2134),m=n(420);function g(e){const[t,n]=(0,r.useState)(e.js),[o,a]=(0,r.useState)(e.ts),[s,i]=(0,r.useState)(e.react),[g,f]=(0,r.useState)(e.vue),[h,y]=(0,r.useState)(e.svelte),v="3.7rem",[b,w]=(0,r.useState)(!0),[k,E]=(0,r.useState)(v),S=(0,r.useRef)(null),C=()=>{setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${v})`)}),5),setTimeout((()=>{E(`calc(${S.current.offsetHeight}px + ${v})`)}),255)};return(0,r.useEffect)((()=>{if(l.Z.canUseDOM){const e=function(e,t){void 0===t&&(t="js");try{return window.prettier?.format(e,{parser:"html"===t?"html":"babel",plugins:window.prettierPlugins})}catch{return e}};n(e(t,"js")),a(e(o,"ts")),i(e(s,"jsx")),f(e(g,"html")),y(e(h,"html"))}}),[]),r.createElement("details",{className:`alert alert--info ${u.Z.details} ${m.Z.details}`,"data-collapsed":b,style:{height:b?v:k,overflow:"hidden",willChange:"height",transition:`height ${b?"250ms":"265ms"} ease-in-out 0s`,margin:"1em 0"}},r.createElement("summary",{onClick:()=>{w(!b),C()}},"show code"),r.createElement("div",{ref:S,style:{display:"block",overflow:"hidden"}},r.createElement("div",{className:u.Z.collapsibleContent},r.createElement(d.Z,{groupId:"sdk-code"},r.createElement(p.Z,{value:"js",label:"JS",attributes:{onMouseDown:C}},r.createElement(c.Z,{language:"js"},t)),r.createElement(p.Z,{value:"ts",label:"TS",attributes:{onMouseDown:C}},r.createElement(c.Z,{language:"ts"},o)),r.createElement(p.Z,{value:"react",label:"React",attributes:{onMouseDown:C}},r.createElement(c.Z,{language:"jsx"},s)),r.createElement(p.Z,{value:"vue",label:"Vue",attributes:{onMouseDown:C}},r.createElement(c.Z,{language:"html"},g)),r.createElement(p.Z,{value:"svelte",label:"Svelte",attributes:{onMouseDown:C}},r.createElement(c.Z,{language:"html"},h))))))}const f="container_Egsj";function h(e){const{className:t,style:n,showCode:a,height:l,...c}=e,d=e=>JSON.stringify(e,null,2),p=`\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),u=`\nimport { createPlayground, type EmbedOptions } from 'livecodes';\n\nconst options: EmbedOptions = ${d(c)};\ncreatePlayground('#container', options);\n\n`.trimStart(),m=`\nimport LiveCodes from 'livecodes/react';\n\nexport default function App() {\n  const options = ${d(c)};\n  return (<LiveCodes {...options}></LiveCodes>);\n}\n\n`.trimStart(),h=`\n<script setup>\nimport LiveCodes from "livecodes/vue";\n\nconst options = ${d(c)};\n<\/script>\n<template>\n  <LiveCodes v-bind="options" />\n</template>\n\n`,y=`\n<script>\nimport { onMount } from 'svelte';\nimport { createPlayground } from 'livecodes';\n\nconst options = ${d(c)};\nlet container;\nonMount(() => {\n  createPlayground(container, options);\n});\n<\/script>\n\n<div bind:this="{container}"></div>\n\n`.trimStart();return r.createElement(r.Fragment,null,r.createElement(s,(0,o.Z)({className:`${f} ${e.className}`,style:{height:l||"50vh",...e.style},appUrl:i.G},e)),!1!==e.showCode&&r.createElement(g,{js:p,ts:u,react:m,vue:h,svelte:y}))}},9493:(e,t,n)=>{n.d(t,{T:()=>r,r:()=>a});var o=n(7728);async function r(e,t){void 0===t&&(t={}),"object"!=typeof e||e instanceof HTMLElement||"headless"!==e.view||(t=e,e=null);const{appUrl:n="https://livecodes.io/",params:o={},config:r={},import:a,lite:s,loading:i="lazy",template:l,view:c="split"}=t,d="headless"===c;let p,u=null;if("string"==typeof e)u=document.querySelector(e);else if(e instanceof HTMLElement)u=e;else if(!d||"object"!=typeof e)throw new Error("A valid container element is required.");if(!u){if(!d)throw new Error(`Cannot find element: "${e}"`);u=document.createElement("div"),C(u),document.body.appendChild(u)}try{p=new URL(n)}catch{throw new Error(`"${n}" is not a valid URL.`)}const m=p.origin;if("object"==typeof o&&Object.keys(o).forEach((e=>{p.searchParams.set(e,String(o[e]))})),"string"==typeof r)try{new URL(r),p.searchParams.set("config",r)}catch{throw new Error('"config" is not a valid URL or configuration object.')}else{if("object"!=typeof r)throw new Error('"config" is not a valid URL or configuration object.');Object.keys(r).length>0&&p.searchParams.set("config","sdk")}l&&p.searchParams.set("template",l),a&&p.searchParams.set("x",a),s&&p.searchParams.set("lite","true"),p.searchParams.set("embed","true"),p.searchParams.set("loading",d?"eager":i),p.searchParams.set("view",c);let g=!1;const f="Cannot call API methods after calling `destroy()`.",h=await new Promise((e=>{if(!u)return;const t=u.dataset.height||u.style.height;if(t&&!d){const e=isNaN(Number(t))?t:t+"px";u.style.height=e}"false"===u.dataset.defaultStyles||d||(u.style.backgroundColor||="#fff",u.style.border||="1px solid black",u.style.borderRadius||="5px",u.style.boxSizing||="border-box",u.style.padding||="0",u.style.width||="100%",u.style.height||=u.style.height||"300px",u.style.minHeight="200px",u.style.flexGrow="1",u.style.overflow||="hidden",u.style.resize||="vertical");const n=document.createElement("iframe");n.setAttribute("allow","accelerometer; camera; encrypted-media; display-capture; geolocation; gyroscope; microphone; midi; clipboard-read; clipboard-write; web-share"),n.setAttribute("allowtransparency","true"),n.setAttribute("allowpaymentrequest","true"),n.setAttribute("allowfullscreen","true"),n.setAttribute("sandbox","allow-same-origin allow-downloads allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts");const o="eager"===i?"eager":"lazy";n.setAttribute("loading",o),n.classList.add("livecodes"),d?C(n):(n.style.height="100%",n.style.minHeight="200px",n.style.width="100%",n.style.margin="0",n.style.border="0",n.style.borderRadius=u.style.borderRadius),addEventListener("message",(function e(t){t.source===n.contentWindow&&t.origin===m&&"livecodes-get-config"===t.data?.type&&(removeEventListener("message",e),n.contentWindow?.postMessage({type:"livecodes-config",payload:r},m))})),n.onload=()=>{e(n)},n.src=p.href,u.appendChild(n)})),y=new Promise((e=>{addEventListener("message",(function t(n){n.source===h.contentWindow&&n.origin===m&&"livecodes-ready"===n.data?.type&&(removeEventListener("message",t),e(),y.settled=!0)}))})),v=()=>g?Promise.reject(f):new Promise((async e=>{y.settled&&e();h.contentWindow?.postMessage({type:"livecodes-load"},m),await y,e()})),b=(e,t)=>new Promise((async(n,o)=>{if(g)return o(f);await v();const r=j();addEventListener("message",(function t(a){if(a.source===h.contentWindow&&a.origin===m&&"livecodes-api-response"===a.data?.type&&a.data?.id===r&&a.data.method===e){removeEventListener("message",t);const e=a.data.payload;e?.error?o(e.error):n(e)}})),h.contentWindow?.postMessage({method:e,id:r,args:t},m)})),w={},k=["load","ready","code","console","tests","destroy"],E=(e,t)=>{if(g)throw new Error(f);return k.includes(e)?(b("watch",[e]),w[e]||(w[e]=[]),w[e]?.push(t),{remove:()=>{w[e]=w[e]?.filter((e=>e!==t)),0===w[e]?.length&&b("watch",[e,"unsubscribe"])}}):{remove:()=>{}}};addEventListener("message",(async e=>{const t={"livecodes-app-loaded":"load","livecodes-ready":"ready","livecodes-change":"code","livecodes-console":"console","livecodes-test-results":"tests","livecodes-destroy":"destroy"}[e.data?.type??""];if(e.source!==h.contentWindow||e.origin!==m||!t||!w[t])return;const n=e.data?.payload;w[t]?.forEach((e=>{e(n)}))}));const S=()=>{Object.values(w).forEach((e=>{e.length=0})),h?.remove?.(),g=!0};if("lazy"===i&&"IntersectionObserver"in window){new IntersectionObserver(((e,t)=>{e.forEach((async e=>{e.isIntersecting&&(await v(),t.unobserve(u))}))}),{rootMargin:"150px"}).observe(u)}function C(e){e.style.position="absolute",e.style.top="0",e.style.visibility="hidden",e.style.opacity="0"}const j=()=>(String(Math.random())+Date.now().toFixed()).replace("0.","");return{load:()=>v(),run:()=>b("run"),format:e=>b("format",[e]),getShareUrl:e=>b("getShareUrl",[e]),getConfig:e=>b("getConfig",[e]),setConfig:e=>b("setConfig",[e]),getCode:()=>b("getCode"),show:(e,t)=>b("show",[e,t]),runTests:()=>b("runTests"),onChange:e=>E("code",e),watch:E,exec:function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];return b("exec",[e,...n])},destroy:()=>y.settled?b("destroy").then(S):g?Promise.reject(f):(S(),Promise.resolve())}}function a(e){void 0===e&&(e={});const{appUrl:t,params:n,config:r,import:a,...s}=e,i="string"==typeof r?{config:r}:"object"==typeof r?{x:"code/"+(0,o.compressToEncodedURIComponent)(JSON.stringify(r))}:{},l=new URLSearchParams(JSON.parse(JSON.stringify({...s,...n,x:a,...i}))).toString();return(t||"https://livecodes.io")+(l?"?"+l:"")}globalThis.document&&document.currentScript&&"prefill"in document.currentScript?.dataset&&window.addEventListener("load",(()=>{document.querySelectorAll(".livecodes").forEach((e=>{let t;const n=e.dataset.options;if(n)try{t=JSON.parse(n)}catch{}let o;const a=e.dataset.config||e.dataset.prefill;if(a)try{o=JSON.parse(a)}catch{}const s=encodeURIComponent(e.outerHTML);e.innerHTML="",r(e,{import:"dom/"+s,...t,...o?{config:o}:{}})}))}))},9390:(e,t,n)=>{n.r(t),n.d(t,{ESMCode:()=>m,UMDCode:()=>g,assets:()=>p,config:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var o=n(7462),r=(n(7294),n(3905)),a=n(325),s=n(2263),i=n(814);const l={},c="Getting Started",d={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"There are multiple options:",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/livecodes/docs/getting-started",draft:!1,editUrl:"https://github.com/live-codes/livecodes/tree/develop/docs/docs/getting-started.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Why Another Playground?",permalink:"/livecodes/docs/why"},next:{title:"Features",permalink:"/livecodes/docs/features/"}},p={},u=[{value:"Standalone App",id:"standalone-app",level:2},{value:"Embedded Playgrounds",id:"embedded-playgrounds",level:2},{value:"App Embed Screen",id:"app-embed-screen",level:3},{value:"SDK",id:"sdk",level:3},{value:"Option 1: Using a bundler",id:"option-1-using-a-bundler",level:4},{value:"Option 2: Load from CDN",id:"option-2-load-from-cdn",level:4},{value:"Add your own content",id:"add-your-own-content",level:4},{value:"Self-Hosting",id:"self-hosting",level:2}],m=()=>{const{siteConfig:e}=(0,s.Z)();return(0,r.kt)(i.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script type="module">\n  import { createPlayground } from 'https://unpkg.com/livecodes@${e.customFields.sdkVersion}';\n\n  createPlayground('#container', {\n    template: 'react',\n    // other embed options\n  });\n<\/script>`)},g=()=>{const{siteConfig:e}=(0,s.Z)();return(0,r.kt)(i.Z,{title:"index.html",language:"html",mdxType:"CodeBlock"},`<div id="container"></div>\n<script src="https://unpkg.com/livecodes@${e.customFields.sdkVersion}/livecodes.umd.js"><\/script>\n<script>\n  // the UMD version provides the global object \`livecodes\`\n livecodes.createPlayground('#container', {\n${" ".repeat(4)}template: 'react',\n    // other embed options\n });\n<\/script>\n`)},f={markup:{language:"markdown",content:"# Hello LiveCodes!"},style:{language:"css",content:"body { color: blue; }"},script:{language:"javascript",content:'console.log("hello from JavaScript!");'},activeEditor:"script"},h={toc:u,ESMCode:m,UMDCode:g,config:f};function y(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"There are multiple options:"),(0,r.kt)("h2",{id:"standalone-app"},"Standalone App"),(0,r.kt)("p",null,"The easiest way to get started with LiveCodes is to just use the app (",(0,r.kt)("a",{parentName:"p",href:"https://livecodes.io"},"https://livecodes.io"),")."),(0,r.kt)("p",null,"It is packed with ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/"},"features")," and offers various ways to ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/import"},"import code"),"."),(0,r.kt)("h2",{id:"embedded-playgrounds"},"Embedded Playgrounds"),(0,r.kt)("p",null,"LiveCodes playgrounds can be easily ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embedded")," into any web page. This can be achieved using:"),(0,r.kt)("h3",{id:"app-embed-screen"},"App Embed Screen"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#standalone-app"},"standalone app")," allows you to embed any project from the ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"embed screen"),". The UI allows setting embed options and shows a preview of the embedded playground.",(0,r.kt)("br",{parentName:"p"}),"\n","Copy the generated code snippet (at the bottom of the screen) and add it to the web page that you want to embed the playground in."),(0,r.kt)("h3",{id:"sdk"},"SDK"),(0,r.kt)("p",null,"LiveCodes ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/sdk/"},(0,r.kt)("abbr",{title:"Software Development Kit"},"SDK"))," is available as ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/livecodes"},"npm package")," to allow easy embedding and communication with playgrounds."),(0,r.kt)("h4",{id:"option-1-using-a-bundler"},"Option 1: Using a bundler"),(0,r.kt)("p",null,"Install from npm."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm i livecodes\n")),(0,r.kt)("p",null,"then you can use it like that:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { createPlayground } from 'livecodes';\n\ncreatePlayground('#container', {\n  template: 'react',\n  // other embed options\n});\n")),(0,r.kt)("h4",{id:"option-2-load-from-cdn"},"Option 2: Load from CDN"),(0,r.kt)("p",null,"ESM:"),(0,r.kt)(m,{mdxType:"ESMCode"}),(0,r.kt)("p",null,"UMD:"),(0,r.kt)(g,{mdxType:"UMDCode"}),(0,r.kt)("h4",{id:"add-your-own-content"},"Add your own content"),(0,r.kt)("p",null,"You may use any of the methods to ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/code-prefill"},"prefill the playground")," with your own code."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import { createPlayground } from 'livecodes';\n\nconst config = {\n  markup: {\n    language: 'markdown',\n    content: '# Hello LiveCodes!',\n  },\n  style: {\n    language: 'css',\n    content: 'body { color: blue; }',\n  },\n  script: {\n    language: 'javascript',\n    content: 'console.log(\"hello from JavaScript!\");',\n  },\n  activeEditor: 'script',\n};\n\ncreatePlayground('#container', { config, params: { console: 'open' } });\n")),(0,r.kt)("p",null,"Live demo:",(0,r.kt)("br",{parentName:"p"}),"\n","(this is an interactive playground - try editing the code!)"),(0,r.kt)(a.Z,{config:f,params:{console:"open"},mdxType:"LiveCodes"}),(0,r.kt)("p",null,"Please refer to the section on ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/embeds"},"Embedded Playgrounds")," for more details."),(0,r.kt)("h2",{id:"self-hosting"},"Self-Hosting"),(0,r.kt)("p",null,"LiveCodes can be hosted on any static file server or CDN."),(0,r.kt)("p",null,"The easiest way is to download the app from ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/live-codes/livecodes/releases"},"releases"),", extract the folder and add it to your website."),(0,r.kt)("p",null,"Please check the section on ",(0,r.kt)("a",{parentName:"p",href:"/livecodes/docs/features/self-hosting"},"self-hosting")," for other methods of self-hosting, including the built-in setup to deploy to GitHub pages and how to use the SDK with the self-hosted app."))}y.isMDXComponent=!0}}]);