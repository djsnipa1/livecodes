"use strict";(()=>{var q='<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">{{codeiumMeta}}<title>LiveCodes</title><style>body{overflow:hidden}</style><link rel="preconnect" href="https://unpkg.com" crossorigin><link rel="dns-prefetch" href="https://unpkg.com"><link rel="stylesheet" href="{{baseUrl}}app.96911eddf80fed6ab0b5c7a99f797889.css" id="app-styles"><script src="{{esModuleShimsUrl}}" async><\/script><script type="importmap">{ "imports": { "@codemirror/autocomplete": "{{codemirrorCoreUrl}}", "@codemirror/commands": "{{codemirrorCoreUrl}}", "@codemirror/language": "{{codemirrorCoreUrl}}", "@codemirror/lint": "{{codemirrorCoreUrl}}", "@codemirror/search": "{{codemirrorCoreUrl}}", "@codemirror/state": "{{codemirrorCoreUrl}}", "@codemirror/theme-one-dark": "{{codemirrorCoreUrl}}", "@codemirror/view": "{{codemirrorCoreUrl}}", "@codemirror/lang-html": "{{codemirrorCoreUrl}}", "@codemirror/lang-css": "{{codemirrorCoreUrl}}", "@codemirror/lang-javascript": "{{codemirrorCoreUrl}}", "@lezer/common": "{{codemirrorCoreUrl}}", "@lezer/highlight": "{{codemirrorCoreUrl}}", "@lezer/lr": "{{codemirrorCoreUrl}}" } }<\/script></head><body><div id="container"><div id="toolbar"><div id="logo"><a href="/" title="LiveCodes: Code playground that runs in the browser!"><img alt="LiveCodes Logo" src="{{baseUrl}}assets/images/livecodes-logo.svg" width="50" loading="lazy"></a></div><div id="select-editor"></div><div id="project-title" contenteditable="true" tabindex="8">Untitled Project</div><div id="buttons"><a href="javascript:void(0)" id="run-button" class="button hint--bottom" data-hint="Run (Shift + Enter)" tabindex="9"><img width="20" height="20" alt="Run" src="{{baseUrl}}assets/images/play.svg" loading="lazy"> </a><a href="javascript:void(0)" id="share-button" class="button hint--bottom" data-hint="Share" tabindex="10"><img width="20" height="20" alt="Run" src="{{baseUrl}}assets/images/share.svg" loading="lazy"> </a><a href="javascript:void(0)" id="result-button" class="button hint--bottom" data-hint="Toggle Result" tabindex="11"><img width="28" height="28" alt="Result" src="{{baseUrl}}assets/images/document.svg" loading="lazy"> </a><a href="javascript:void(0)" id="fullscreen-button" class="button hint--bottom" data-hint="Full Screen" tabindex="12"><img width="28" height="28" alt="Fullscreen" src="{{baseUrl}}assets/images/expand.svg" loading="lazy"> </a><a href="javascript:void(0)" id="settings-button" class="button" aria-label="Menu" tabindex="13"><img width="30" height="30" alt="Menu" src="{{baseUrl}}assets/images/menu.svg" loading="lazy"></a><div id="settings-menu-container" class="menu-scroller"></div></div></div><div id="editor-container"><div id="editors"><div id="markup" class="editor"></div><div id="style" class="editor"></div><div id="script" class="editor"></div><div id="editor-tools" class="tool-buttons"><span id="copy-btn" class="hint--top-right" data-hint="Copy (Ctrl/Cmd + A, Ctrl/Cmd + C)"><img src="{{baseUrl}}assets/images/copy.svg" alt="copy"> </span><span id="undo-btn" class="hint--top-right" data-hint="Undo (Ctrl/Cmd + Z)"><img src="{{baseUrl}}assets/images/undo.svg" alt="undo"> </span><span id="redo-btn" class="hint--top-right" data-hint="Redo (Ctrl/Cmd + Shift + Z)"><img src="{{baseUrl}}assets/images/redo.svg" alt="redo"> </span><span id="format-btn" class="hint--top-right" data-hint="Format (Alt + Shift + F)"><img src="{{baseUrl}}assets/images/format.svg" alt="format"> </span><span id="copy-as-url-btn" class="hint--top-right" data-hint="Copy code as data URL"><img src="{{baseUrl}}assets/images/copy-as-url.svg" alt="copy"> </span><span id="editor-status"><span id="editor-mode" class="hint--top-right" data-hint="Editor Mode"></span> <span data-status="markup"></span> <span data-status="style"></span> <span data-status="script"></span> </span><span id="external-resources-btn" class="hint--top-left" data-hint="External Resources"><img src="{{baseUrl}}assets/images/script-sheet.svg" alt="external resources"> <span id="external-resources-mark" class="mark"></span> </span><span id="project-info-btn" class="hint--top-left" data-hint="Project Info"><img src="{{baseUrl}}assets/images/info.svg" alt="project info"> </span><span id="custom-settings-btn" class="hint--top-left" data-hint="Custom Settings"><img src="{{baseUrl}}assets/images/curly-braces.svg" alt="custom settings"> <span id="custom-settings-mark" class="mark"></span> </span><span id="editor-settings-btn" class="hint--top-left" data-hint="Editor Settings"><img src="{{baseUrl}}assets/images/gear.svg" alt="editor settings"></span></div><button id="code-run-button" class="hint--top-left" data-hint="Run (Shift + Enter)"><img width="20" height="20" alt="Run" src="{{baseUrl}}assets/images/play.svg" loading="lazy"></button></div><div id="output"><div id="result" class="full"></div><div id="tools-pane"></div></div></div></div><div id="overlay" style="display:none"></div><div id="modal-container" style="display:none"><div id="modal"></div></div><script src="https://polyfill.io/v3/polyfill.min.js" crossorigin="anonymous"><\/script><script>window.appCDN="{{appCDN}}"<\/script>{{codemirrorModule}}<script type="module">import{app}from"{{baseUrl}}{{script}}";window.app=app<\/script></body></html>';var s={getConfig:"livecodes-get-config",config:"livecodes-config",load:"livecodes-load",appLoaded:"livecodes-app-loaded",ready:"livecodes-ready",change:"livecodes-change",testResults:"livecodes-test-results",console:"livecodes-console",destroy:"livecodes-destroy",resizeEditor:"livecodes-resize-editor",apiResponse:"livecodes-api-response"};var B=()=>{try{return window.self!==window.top}catch{return!0}};var A=["esm.sh","skypack","jspm"],I=["unpkg","jsdelivr","fastly.jsdelivr"],P=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],l={getModuleUrl:(e,{isModule:t=!0,defaultCDN:d="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let o=R(e,t,d);return o||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")?e:R(e,!1,t||V())||e,cdnLists:{npm:I,module:A,gh:P},checkCDNs:async(e,t)=>{let d=[t,...l.cdnLists.npm].filter(Boolean);for(let o of d)try{if((await fetch(l.getUrl(e,o),{method:"HEAD"})).ok)return o}catch{}return l.cdnLists.npm[0]}},V=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||l.cdnLists.npm[0]}catch{return l.cdnLists.npm[0]}},R=(e,t,d)=>{let o=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",P[0]):e.includes(":")||(e=(d||(t?A[0]:I[0]))+":"+e);for(let a of K){let[b,v]=a;if(b.test(e))return e.replace(b,v)+o}return null},K=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:J,getModuleUrl:re}=l;var k="es-module-shims@1.4.4/dist/es-module-shims.js";var Z="0.6.64",ne=J(`malinajs@${Z}/malina.js`);var n=new URLSearchParams(location.search),U=n.get("view")==="headless",N=n.get("lite")!=null&&n.get("lite")!=="false",m=U||N||n.get("embed")!=null&&n.get("embed")!=="false"||B(),y=n.get("loading"),w=m&&y!=="eager",H=m?y==="lazy"||y==="click"||y==="eager"?y:"lazy":"eager",z=n.get("disableAI")!=null&&n.get("disableAI")!=="false",E=(e,t={})=>new Promise(async d=>{let o=document.querySelector(e);if(!o)throw new Error(`Cannot find element with the selector: "${e}"`);let a=(location.origin+location.pathname).split("/").slice(0,-1).join("/")+"/livecodes/",b=U?"headless.69514ca0dd6ae36662e450d7da4b858f.js":N?"lite.0fd44443fa1db4cd2dfb1beaf3defe81.js":m?"embed.0f97b821d05e10ba642c9d5cab046845.js":"app.b031e233e8f89029461b717cdddff1d0.js",v="*",S=document.createElement("style");S.innerHTML=`
        ${e} {
            min-width: 300px;
            min-height: 200px;
            padding: 0;
            overflow: hidden;
        }
        ${e} > iframe {
            border: 0;
            width: 100%;
            height: 100%;
        }
        ${e}.embed iframe {
            width: calc(100% - 2px);
            height: calc(100% - 2px);
            border: 1px solid #001b25;
            border-radius: 5px;
        }
    `,document.head.appendChild(S);let M=async()=>{let g=await l.checkCDNs(k,n.get("appCDN")),O=HTMLScriptElement.supports?HTMLScriptElement.supports("importmap"):!1,c=document.createElement("iframe");c.name="app",c.style.display="none";let W=z?"?disableAI":"";c.src="./app.html"+W;let $=!1;if(c.onload=()=>{if($)return;let r=q.replace(/{{baseUrl}}/g,a).replace(/{{script}}/g,b).replace(/{{appCDN}}/g,g).replace(/{{esModuleShimsUrl}}/g,l.getUrl(k,g)).replace(/{{codemirrorModule}}/g,O?"":`
    <script type="module">
      import * as mod from '${a}codemirror.902217478d6880e8076196bfb2c55976.js';
      window['${a}codemirror.902217478d6880e8076196bfb2c55976.js'] = mod;
    <\/script>
    `).replace(/{{codemirrorCoreUrl}}/g,`${a}vendor/codemirror/v6.0.1/codemirror-core.js`).replace(/src="[^"]*?\.svg"/g,p=>U?'src=""':p).replace(/{{codeiumMeta}}/g,`<meta name="codeium:type" content="${z?"none":"monaco"}" />`);c.contentWindow?.postMessage({content:r},location.origin),$=!0},o.appendChild(c),m){let r=(p,u=!1)=>{window.addEventListener(p,f=>{u&&f.detail==null||parent.postMessage({type:p,...u?{payload:f.detail}:{}},v)})};r(s.appLoaded),r(s.ready),r(s.change,!0),r(s.testResults,!0),r(s.console,!0),r(s.destroy)}c.addEventListener("load",async()=>{let r=c.contentWindow?.app;if(typeof r=="function"){let p=await r(t,a);U||(c.style.display="block"),window.dispatchEvent(new CustomEvent(s.appLoaded,{detail:p})),addEventListener("message",async u=>{if(m){if(u.source!==parent)return;let{method:f,id:D,args:C}=u.data??{};if(!f||!D)return;let F=Array.isArray(C)?C:[C],h;try{h=await p[f](...F)}catch(x){h={error:x.message||x}}typeof h=="object"&&Object.keys(h).forEach(x=>{typeof h[x]=="function"&&delete h[x]}),parent.postMessage({type:s.apiResponse,method:f,id:D,payload:h},v)}else{if(u.source!==c.contentWindow)return;u.data?.args==="home"&&(location.href=location.origin+location.pathname)}}),d(p)}})};if(w){window.addEventListener(s.load,()=>{M()},{once:!0});let g=document.createElement("link");g.href=a+b,g.rel="preload",g.as="script",document.head.appendChild(g)}else M()});var G="#livecodes",i=document.querySelector("#loading"),Q=document.querySelector("#loading-text"),Y=i.innerHTML;m&&(document.body.classList.add("embed"),w&&(i.classList.add("click-to-load"),i.title="Click to Load",Q.innerText="Click to load LiveCodes",i.addEventListener("click",L),addEventListener("message",e=>{e.source===parent&&e.data?.type===s.load&&L()}),H==="lazy"&&"IntersectionObserver"in window&&new IntersectionObserver((t,d)=>{t.forEach(o=>{o.isIntersecting&&(L(),d.unobserve(document.body))})},{rootMargin:"150px"}).observe(document.body)));function L(){window.dispatchEvent(new Event(s.load)),w&&(i.style.opacity="0",setTimeout(()=>{i.classList.remove("click-to-load"),i.innerHTML=Y,i.title="",i.style.opacity="1"},500))}function T(){i.style.opacity="0",setTimeout(()=>{i.remove()},500),document.querySelector(G).style.opacity="1"}function j(){document.body.style.height=window.innerHeight+"px"}j();window.addEventListener("resize",j,!1);setTimeout(j,500);window.addEventListener(s.appLoaded,e=>{T(),window.livecodes=e.detail});window.addEventListener(s.destroy,()=>{window.removeEventListener("resize",j),document.body.innerHTML="",document.head.innerHTML=""});m&&n.get("config")==="sdk"?(addEventListener("message",function e(t){t.source!==parent||t.data?.type!==s.config||(removeEventListener("message",e),E("#livecodes",t.data.payload).then(T))}),parent.postMessage({type:s.getConfig},"*")):E("#livecodes").then(T);})();
