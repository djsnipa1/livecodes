var Pe=Object.create;var G=Object.defineProperty;var Fe=Object.getOwnPropertyDescriptor;var Oe=Object.getOwnPropertyNames;var De=Object.getPrototypeOf,We=Object.prototype.hasOwnProperty;var $e=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var Ne=(e,t,n,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let f of Oe(t))!We.call(e,f)&&f!==n&&G(e,f,{get:()=>t[f],enumerable:!(l=Fe(t,f))||l.enumerable});return e};var Je=(e,t,n)=>(n=e!=null?Pe(De(e)):{},Ne(t||!e||!e.__esModule?G(n,"default",{value:e,enumerable:!0}):n,e));var Z=$e((lt,P)=>{var V=function(){var e=String.fromCharCode,t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",l={};function f(o,c){if(!l[o]){l[o]={};for(var p=0;p<o.length;p++)l[o][o.charAt(p)]=p}return l[o][c]}var g={compressToBase64:function(o){if(o==null)return"";var c=g._compress(o,6,function(p){return t.charAt(p)});switch(c.length%4){default:case 0:return c;case 1:return c+"===";case 2:return c+"==";case 3:return c+"="}},decompressFromBase64:function(o){return o==null?"":o==""?null:g._decompress(o.length,32,function(c){return f(t,o.charAt(c))})},compressToUTF16:function(o){return o==null?"":g._compress(o,15,function(c){return e(c+32)})+" "},decompressFromUTF16:function(o){return o==null?"":o==""?null:g._decompress(o.length,16384,function(c){return o.charCodeAt(c)-32})},compressToUint8Array:function(o){for(var c=g.compress(o),p=new Uint8Array(c.length*2),r=0,a=c.length;r<a;r++){var d=c.charCodeAt(r);p[r*2]=d>>>8,p[r*2+1]=d%256}return p},decompressFromUint8Array:function(o){if(o==null)return g.decompress(o);for(var c=new Array(o.length/2),p=0,r=c.length;p<r;p++)c[p]=o[p*2]*256+o[p*2+1];var a=[];return c.forEach(function(d){a.push(e(d))}),g.decompress(a.join(""))},compressToEncodedURIComponent:function(o){return o==null?"":g._compress(o,6,function(c){return n.charAt(c)})},decompressFromEncodedURIComponent:function(o){return o==null?"":o==""?null:(o=o.replace(/ /g,"+"),g._decompress(o.length,32,function(c){return f(n,o.charAt(c))}))},compress:function(o){return g._compress(o,16,function(c){return e(c)})},_compress:function(o,c,p){if(o==null)return"";var r,a,d={},S={},w="",T="",x="",h=2,H=3,m=2,y=[],s=0,i=0,L;for(L=0;L<o.length;L+=1)if(w=o.charAt(L),Object.prototype.hasOwnProperty.call(d,w)||(d[w]=H++,S[w]=!0),T=x+w,Object.prototype.hasOwnProperty.call(d,T))x=T;else{if(Object.prototype.hasOwnProperty.call(S,x)){if(x.charCodeAt(0)<256){for(r=0;r<m;r++)s=s<<1,i==c-1?(i=0,y.push(p(s)),s=0):i++;for(a=x.charCodeAt(0),r=0;r<8;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1}else{for(a=1,r=0;r<m;r++)s=s<<1|a,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=0;for(a=x.charCodeAt(0),r=0;r<16;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1}h--,h==0&&(h=Math.pow(2,m),m++),delete S[x]}else for(a=d[x],r=0;r<m;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1;h--,h==0&&(h=Math.pow(2,m),m++),d[T]=H++,x=String(w)}if(x!==""){if(Object.prototype.hasOwnProperty.call(S,x)){if(x.charCodeAt(0)<256){for(r=0;r<m;r++)s=s<<1,i==c-1?(i=0,y.push(p(s)),s=0):i++;for(a=x.charCodeAt(0),r=0;r<8;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1}else{for(a=1,r=0;r<m;r++)s=s<<1|a,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=0;for(a=x.charCodeAt(0),r=0;r<16;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1}h--,h==0&&(h=Math.pow(2,m),m++),delete S[x]}else for(a=d[x],r=0;r<m;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1;h--,h==0&&(h=Math.pow(2,m),m++)}for(a=2,r=0;r<m;r++)s=s<<1|a&1,i==c-1?(i=0,y.push(p(s)),s=0):i++,a=a>>1;for(;;)if(s=s<<1,i==c-1){y.push(p(s));break}else i++;return y.join("")},decompress:function(o){return o==null?"":o==""?null:g._decompress(o.length,32768,function(c){return o.charCodeAt(c)})},_decompress:function(o,c,p){var r=[],a,d=4,S=4,w=3,T="",x=[],h,H,m,y,s,i,L,u={val:p(0),position:c,index:1};for(h=0;h<3;h+=1)r[h]=h;for(m=0,s=Math.pow(2,2),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;switch(a=m){case 0:for(m=0,s=Math.pow(2,8),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;L=e(m);break;case 1:for(m=0,s=Math.pow(2,16),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;L=e(m);break;case 2:return""}for(r[3]=L,H=L,x.push(L);;){if(u.index>o)return"";for(m=0,s=Math.pow(2,w),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;switch(L=m){case 0:for(m=0,s=Math.pow(2,8),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;r[S++]=e(m),L=S-1,d--;break;case 1:for(m=0,s=Math.pow(2,16),i=1;i!=s;)y=u.val&u.position,u.position>>=1,u.position==0&&(u.position=c,u.val=p(u.index++)),m|=(y>0?1:0)*i,i<<=1;r[S++]=e(m),L=S-1,d--;break;case 2:return x.join("")}if(d==0&&(d=Math.pow(2,w),w++),r[L])T=r[L];else if(L===S)T=H+H.charAt(0);else return null;x.push(T),r[S++]=H+T.charAt(0),d--,H=T,d==0&&(d=Math.pow(2,w),w++)}}};return g}();typeof define=="function"&&define.amd?define(function(){return V}):typeof P<"u"&&P!=null&&(P.exports=V)});var O={title:"Untitled Project",description:"",head:`<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />`,htmlAttrs:'lang="en" class=""',tags:[],autoupdate:!0,autosave:!1,autotest:!1,delay:1500,formatOnsave:!1,mode:"full",theme:"dark",editorTheme:void 0,recoverUnsaved:!0,showSpacing:!1,welcome:!0,readonly:!1,allowLangChange:!0,activeEditor:void 0,languages:void 0,markup:{language:"html",content:""},style:{language:"css",content:""},script:{language:"javascript",content:""},stylesheets:[],scripts:[],cssPreset:"",imports:{},types:{},tests:{language:"typescript",content:""},tools:{enabled:"all",active:"",status:""},zoom:1,processors:[],customSettings:{},editor:void 0,fontFamily:void 0,fontSize:void 0,useTabs:!1,tabSize:2,lineNumbers:!0,wordWrap:!1,closeBrackets:!0,semicolons:!0,singleQuote:!1,trailingComma:!0,emmet:!0,editorMode:void 0,version:"20"};var z='<div id="import-container" class="modal-container"><div class="modal-title">Import</div><ul id="import-tabs" class="modal-tabs"><li data-target="import-code" class="active">Import Code</li><li data-target="import-json">Import Project JSON</li><li data-target="bulk-import-json">Bulk Import</li></ul><div id="import-screens" class="modal-screen-container"><div id="import-code" class="tab-content active"><div class="modal-screen"><form id="url-import-form"><label for="code-url">URL</label> <input type="text" id="code-url" placeholder="https://"> <button id="url-import-btn" class="wide-button" type="submit">Import from URL</button></form><form id="local-code-import-form"><label for="local-code-input">Local file</label> <label for="local-code-input" class="file-input-label">Import local files</label> <input type="file" id="local-code-input" class="file-input" multiple></form><div class="description">Supported Sources:<ul><li>GitHub gist</li><li>GitHub file</li><li>Directory in a GitHub repo</li><li>Gitlab snippet</li><li>Gitlab file</li><li>Directory in a Gitlab repo</li><li>JS Bin</li><li>Raw code</li><li>Code in web page DOM</li><li>Code in zip file</li><li>Official playgrounds<br>(TypeScript, Vue and Svelte)</li></ul>Please visit the <a href="{{DOCS_BASE_URL}}features/import" target="_blank" rel="noopener">documentations</a> for details.</div></div></div><div id="import-json" class="tab-content"><div class="modal-screen"><div class="description">Import a single project JSON to editor. A project can be exported from app&nbsp;menu&nbsp;\u2192 Export&nbsp;\u2192 Export&nbsp;Project&nbsp;(JSON).</div><form id="json-url-import-form"><label for="json-url">URL</label> <input type="text" id="json-url" placeholder="https://"> <button id="json-url-import-btn" class="wide-button" type="submit">Import project from URL</button></form><form id="file-url-import-form"><label for="file-input">Local file</label> <label for="file-input" class="file-input-label">Import project from local file</label> <input type="file" id="file-input" class="file-input" accept="application/json"></form></div></div><div id="bulk-import-json" class="tab-content"><div class="modal-screen"><div class="description">Bulk import multiple projects to your saved projects. Projects can be exported from the <a href="#" id="link-to-saved-projects">Saved Projects</a> screen.</div><form id="bulk-json-url-import-form"><label for="bulk-json-url">URL</label> <input type="text" id="bulk-json-url" placeholder="https://"> <button id="bulk-json-url-import-btn" class="wide-button" type="submit">Bulk import from URL</button></form><form id="bulk-file-url-import-form"><label for="bulk-file-input">Local file</label> <label for="bulk-file-input" class="file-input-label">Bulk import from local file</label> <input type="file" id="bulk-file-input" class="file-input" accept="application/json"></form></div></div></div></div>';var ze=e=>e.replace(/{{APP_VERSION}}/g,"20").replace(/{{SDK_VERSION}}/g,"0.4.0").replace(/{{COMMIT_SHA}}/g,"b9d8951").replace(/{{REPO_URL}}/g,"https://github.com/live-codes/livecodes").replace(/{{DOCS_BASE_URL}}/g,"/livecodes/docs/");var K=ze(z);var D=(e,t)=>new Promise((n,l)=>{if(t&&globalThis[t])return n(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?n(globalThis[t]):n(globalThis);let f=document.createElement("script");f.src=e,f.async=!0;let g=()=>{f.removeEventListener("load",o),f.removeEventListener("error",c)},o=()=>{if(g(),!t)return n("loaded: "+e);let p=setInterval(()=>{if(window[t])return clearInterval(p),n(window[t])},5)},c=()=>{g(),l("failed to load: "+e)};f.addEventListener("load",o),f.addEventListener("error",c),document.head.appendChild(f)});var Ke=e=>e.ok?e:Promise.reject(),_=(e,t)=>fetch(e,t).then(Ke);var W=e=>{if(!e)return null;let t=null;if(e.startsWith("http")||e.startsWith("data:"))try{t=new URL(e).href}catch{try{t=new URL(decodeURIComponent(e)).href}catch{}}return t};var C=Je(Z());var $=(e,t=!0)=>{let n=(0,C.decompressFromEncodedURIComponent)(e);if(n){if(!t)return n;try{if(JSON.parse(n))return n}catch{}}return(0,C.decompressFromBase64)(e)};var Q=e=>{let t=e.slice(5),n;try{n=JSON.parse($(t)||"{}")}catch{n={}}return n};var A=(e=location.origin)=>!!(e&&(e.endsWith("livecodes.io")||e.endsWith("livecodes.pages.dev")||e.endsWith("localpen.pages.dev")||e.startsWith("http://127.0.0.1")||e.startsWith("http://localhost")));var Y=["esm.sh","skypack","jspm"],ee=["unpkg","jsdelivr","fastly.jsdelivr"],te=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],j={getModuleUrl:(e,{isModule:t=!0,defaultCDN:n="esm.sh"}={})=>{e=e.replace(/#nobundle/g,"");let l=X(e,t,n);return l||(t?"https://esm.sh/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")?e:X(e,!1,t||Ve())||e,cdnLists:{npm:ee,module:Y,gh:te},checkCDNs:async(e,t)=>{let n=[t,...j.cdnLists.npm].filter(Boolean);for(let l of n)try{if((await fetch(j.getUrl(e,l),{method:"HEAD"})).ok)return l}catch{}return j.cdnLists.npm[0]}},Ve=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||j.cdnLists.npm[0]}catch{return j.cdnLists.npm[0]}},X=(e,t,n)=>{let l=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",te[0]):e.includes(":")||(e=(n||(t?Y[0]:ee[0]))+":"+e);for(let f of Ze){let[g,o]=f;if(g.test(e))return e.replace(g,o)+l}return null},Ze=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:oe,getModuleUrl:bt}=j;var re=oe("jszip@3.10.1/dist/jszip.js");var Qe="0.6.64",St=oe(`malinajs@${Qe}/malina.js`);var se="https://dpaste.com/",Ye="https://dpaste.com/api/v2/",ie="https://api2.livecodes.io/share",ce={getProject:async e=>{try{let t=await fetch(se+e+".txt");return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{try{let t=await fetch(Ye,{method:"POST",mode:"cors",headers:{"Content-Type":"application/x-www-form-urlencoded","User-Agent":"LiveCodes / https://livecodes.io/"},body:`content=${encodeURIComponent(JSON.stringify(e))}&title=${encodeURIComponent(e.title||"")}&syntax=json&expiry_days=365`});return t.ok?(await t.text()).replace(se,""):""}catch{return""}}},et={getProject:async e=>{if(e.length<11)return ce.getProject(e);if(!A())return{};try{let t=await fetch(ie+"?id="+e);return t.ok?JSON.parse(await t.text()):{}}catch{return{}}},shareProject:async e=>{if(!A())return"";try{let t=await fetch(ie,{method:"POST",mode:"cors",body:JSON.stringify(e)});return t.ok?t.text():""}catch{return""}}},le=A()?et:ce;var ae=e=>{let t=e.slice(3);return le.getProject(t)};var R=e=>{try{return e.startsWith("https://")?new URL(e):new URL("https://"+e)}catch{return}},k={github:/^(?:(?:http|https):\/\/)?github\.com\/(?:.*)/g,githubGist:/^(?:(?:http|https):\/\/)?gist\.github\.com(?:\/\S*)?\/(\w+)/g,gitlab:/^(?:(?:http|https):\/\/)?gitlab\.com\/(?:.*)/g,codepen:/^(?:(?:http|https):\/\/)?codepen\.io\/(\w+)\/pen\/(\w+)/g,jsbin:/^(?:(?:(?:http|https):\/\/)?(?:\w+.)?)?jsbin\.com\/((\w)+(\/\d+)?)(?:.*)/g,typescriptPlayground:/^(?:(?:http|https):\/\/)?(?:www\.)?typescriptlang\.org\/play(?:.*)/g,vuePlayground:/^(?:(?:http|https):\/\/)?play\.vuejs\.org(?:.*)/g,sveltePlayground:/^(?:(?:http|https):\/\/)?svelte\.dev\/repl\/(?:.*)/g},pe=e=>e.startsWith("code/"),ue=(e,t=new RegExp(k.codepen))=>t.test(e),me=e=>e.startsWith("dom/"),de=(e,t=new RegExp(k.github))=>{if(t.test(e))try{let n=R(e);return n?n.pathname.split("/")[3]==="blob":void 0}catch{return}};var ge=(e,t=new RegExp(k.github))=>{if(t.test(e))try{let n=R(e);if(!n)return;let l=n.pathname.split("/");return l[3]==="tree"||l.length===3}catch{return}},fe=(e,t=new RegExp(k.githubGist))=>t.test(e),ye=(e,t=new RegExp(k.gitlab))=>{if(t.test(e))try{let n=R(e);return n?n.pathname.split("/")[4]==="blob":void 0}catch{return}},he=(e,t=new RegExp(k.gitlab))=>{if(t.test(e))try{let n=R(e);if(!n)return;let l=n.pathname.split("/");return l[4]==="tree"||l.length===3}catch{return}},xe=(e,t=new RegExp(k.gitlab))=>{if(!t.test(e))return;let n=R(e);if(!n)return;let l=n.pathname.split("/");return l[l.length-2]==="snippets"},be=(e,t=new RegExp(k.jsbin))=>t.test(e),Se=e=>e.startsWith("id/"),Le=(e,t=new RegExp(k.typescriptPlayground))=>t.test(e),Ee=(e,t=new RegExp(k.vuePlayground))=>t.test(e),Te=(e,t=new RegExp(k.sveltePlayground))=>t.test(e);var we=async(e,t,n,l,f)=>{if(pe(e))return Q(e);if(Se(e))return ae(e);let g=await import(f+"import-src.52f2262ee4c0d99a6d4efe7127553c91.js"),{importFromCodepen:o,importFromDom:c,importFromGithub:p,importFromGithubDir:r,importFromGithubGist:a,importFromGitlab:d,importFromGitlabDir:S,importFromGitlabSnippet:w,importFromJsbin:T,importSveltePlayground:x,importTypescriptPlayground:h,importVuePlayground:H,importFromUrl:m}=g;return me(e)?c(e,t,n):fe(e)?a(e,t):ge(e)?r(e,t,l):de(e)?p(e,l):xe(e)?w(e,t):he(e)?S(e,t):ye(e)?d(e):ue(e)?o(e):be(e)?T(e):Te(e)?x(e):Le(e)?h(e):Ee(e)?H(e):W(e)?m(e,t,n):Promise.resolve({})};var ve=async(e,t)=>new Promise(async(n,l)=>{(await D(re,"JSZip")).loadAsync(e).then(async g=>{let o=g.file(/livecodes\.json/);if(o.length>0){o[0].async("string").then(d=>{n(JSON.parse(d))}).catch(l);return}let c=g.file(/((^src\/)|(\/src\/))/),p=g.file(/.*/),r=p.filter(d=>!d.name.includes("/")),a=c.length>0?c:r.length>0?r:p;if(a.length>0){let d=await Promise.all(a.map(async S=>({filename:S.name,content:await S.async("string")})));n(t(d,{}));return}n({})}).catch(l)});var Me=e=>e.querySelector("#url-import-form"),Ue=e=>e.querySelector("#url-import-btn"),N=e=>e.querySelector("#code-url"),He=e=>e.querySelector("#local-code-input"),ke=e=>e.querySelector("#json-url-import-form"),je=e=>e.querySelector("#json-url-import-btn"),qe=e=>e.querySelector("#json-url"),Ie=e=>e.querySelector("#bulk-json-url-import-form"),Ce=e=>e.querySelector("#bulk-json-url-import-btn"),Ae=e=>e.querySelector("#bulk-json-url"),Re=e=>e.querySelector("#link-to-saved-projects"),Be=e=>e.querySelector("#file-input");var _e=e=>e.querySelector("#bulk-file-input");var tt=e=>{let t=document.createElement("div");t.innerHTML=K;let n=t.firstChild,l=n.querySelectorAll("#import-tabs li");return l.forEach(f=>{e.addEventListener(f,"click",()=>{l.forEach(o=>o.classList.remove("active")),f.classList.add("active"),document.querySelectorAll("#import-screens > div").forEach(o=>{o.classList.remove("active")});let g=n.querySelector("#"+f.dataset.target);g?.classList.add("active"),g?.querySelector("input")?.focus()})}),n},yr=({baseUrl:e,modal:t,notifications:n,eventsManager:l,getUser:f,loadConfig:g,populateConfig:o,projectStorage:c,showScreen:p})=>{let r=tt(l),a=Me(r),d=Ue(r);l.addEventListener(a,"submit",async b=>{b.preventDefault();let v=d.innerHTML;d.innerHTML="Loading...",d.disabled=!0;let E=N(r),M=E.value,U=await we(M,{},O,await f?.(),e);U&&Object.keys(U).length>0?(await g({...O,...U},location.origin+location.pathname+"?x="+encodeURIComponent(M)),t.close()):(d.innerHTML=v,d.disabled=!1,n.error("failed to load URL"),E.focus())});let S=b=>new Promise((v,E)=>{let M=Array.from(b.files),U=[];for(let q of M){if(q.size>104857600){E("Error: Exceeded size 100 MB");return}let I=new FileReader;l.addEventListener(I,"load",async F=>{let J=F.target?.result||"";U.push({filename:q.name,content:J}),U.length===M.length&&v(o(U,{}))}),l.addEventListener(I,"error",()=>{E("Error: Failed to read file")}),I.readAsText(q)}}),w=b=>ve(b.files[0],o),T=He(r);l.addEventListener(T,"change",()=>{if(T.files?.length===0)return;(T.files?.length===1&&T.files[0].name.endsWith(".zip")?w:S)(T).then(g).then(t.close).catch(v=>{n.error(v)})});let x=ke(r),h=je(r);l.addEventListener(x,"submit",async b=>{b.preventDefault();let v=h.innerHTML;h.innerHTML="Loading...",h.disabled=!0;let E=qe(r),M=E.value;_(M).then(U=>U.json()).then(U=>g(U,location.origin+location.pathname+"?config="+M)).then(()=>t.close()).catch(()=>{h.innerHTML=v,h.disabled=!1,n.error("Error: failed to load URL"),E.focus()})});let H=Ie(r),m=Ce(r);l.addEventListener(H,"submit",async b=>{b.preventDefault();let v=m.innerHTML;m.innerHTML="Loading...",m.disabled=!0;let E=Ae(r),M=E.value;_(M).then(U=>U.json()).then(s).catch(()=>{m.innerHTML=v,m.disabled=!1,n.error("Error: failed to load URL"),E.focus()})});let y=b=>new Promise((v,E)=>{if(b.files?.length===0)return;let M=b.files[0];if(["application/json","text/plain"].indexOf(M.type)===-1){E("Error: Incorrect file type");return}let q=100*1024*1024;if(M.size>q){E("Error: Exceeded size 100 MB");return}let B=new FileReader;l.addEventListener(B,"load",async I=>{let F=I.target?.result||"";try{v(JSON.parse(F))}catch{E("Invalid configuration file")}}),l.addEventListener(B,"error",()=>{E("Error: Failed to read file")}),B.readAsText(M)}),s=async b=>{let v=E=>E.config||E.pen;if(Array.isArray(b)&&b.every(v)&&c){await c.bulkInsert(b.map(v)),n.success("Import Successful!"),p("open");return}return Promise.reject("Error: Invalid file")},i=Be(r);l.addEventListener(i,"change",()=>{y(i).then(g).then(t.close).catch(b=>{n.error(b)})});let L=_e(r);l.addEventListener(L,"change",()=>{y(L).then(s).catch(b=>{n.error(b)})});let u=Re(r);l.addEventListener(u,"click",b=>{b.preventDefault(),p("open")}),t.show(r,{isAsync:!0}),N(r).focus()};export{yr as createImportUI,we as importCode};
