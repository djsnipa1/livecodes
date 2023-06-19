var M=e=>e.replace(/'[^'"]*'(?=(?:[^"]*"[^"]*")*[^"]*$)/g,function(s){return'"'+s.substring(1,s.length-1)+'"'}).replace(/(\w+(?=([^"\\]*(\\.|"([^"\\]*\\.)*[^"\\]*"))*[^"]*$))(\s*:)(?!(\w*)(?:"))/gm,function(s){return'"'+s.substring(0,s.length-1).trimEnd()+'":'}).replace(/,\s*([\]}])/g,"$1");var p=(e,t)=>new Promise((s,o)=>{if(t&&globalThis[t])return s(globalThis[t]);if(typeof globalThis.importScripts=="function")return globalThis.importScripts(e),t&&globalThis[t]?s(globalThis[t]):s(globalThis);let n=document.createElement("script");n.src=e,n.async=!0;let i=()=>{n.removeEventListener("load",r),n.removeEventListener("error",l)},r=()=>{if(i(),!t)return s("loaded: "+e);let a=setInterval(()=>{if(window[t])return clearInterval(a),s(window[t])},5)},l=()=>{i(),o("failed to load: "+e)};n.addEventListener("load",r),n.addEventListener("error",l),document.head.appendChild(n)});var q=e=>new Promise((t,s)=>{let o=new FileReader;o.readAsDataURL(e),o.onload=()=>typeof o.result=="string"?t(o.result):s(),o.onerror=n=>s(n)});var k=e=>{let t=`importScripts("${e}");`;return"data:text/javascript;base64,"+btoa(t)},L=e=>e.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm,"$1");var $=(e,t)=>({...t.customSettings[e]});var B=(e,t)=>async s=>{try{return await e(s)}catch(o){return typeof t=="function"&&t(o),s}};var H=["jspm","skypack"],N=["jsdelivr","unpkg","fastly.jsdelivr"],A=["jsdelivr.gh","statically"],x={getModuleUrl:(e,{isModule:t=!0,defaultCDN:s="jspm"}={})=>{e=e.replace(/#nobundle/g,"");let o=D(e,t,s);return o||(t?"https://jspm.dev/"+e:"https://cdn.jsdelivr.net/npm/"+e)},getUrl:(e,t)=>e.startsWith("http")?e:D(e,!1,t||G())||e,cdnLists:{npm:N,module:H,gh:A},checkCDNs:async(e,t)=>{let s=[t,...x.cdnLists.npm].filter(Boolean);for(let o of s)try{if((await fetch(x.getUrl(e,o),{method:"HEAD"})).ok)return o}catch{}return x.cdnLists.npm[0]}},G=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||x.cdnLists.npm[0]}catch{return x.cdnLists.npm[0]}},D=(e,t,s)=>{let o=t&&e.startsWith("unpkg:")?"?module":"";e.startsWith("gh:")?e=e.replace("gh",A[0]):e.includes(":")||(e=(s||(t?H[0]:N[0]))+":"+e);for(let n of Z){let[i,r]=n;if(i.test(e))return e.replace(i,r)+o}return null},Z=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://jspm.dev/$2"],[/^(node:)(.+)/i,"https://jspm.dev/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:d,getModuleUrl:bt}=x,j=d("@live-codes/browser-compilers@0.7.4/dist/");var P=d("cytoscape-svg@0.4.0/cytoscape-svg.js"),R=d("cytoscape@3.25.0/dist/cytoscape.min.js");var S=d("elkjs@0.8.2/lib/");var O=d("graphre@0.1.3/dist/graphre.js");var W=d("@hpcc-js/wasm@2.13.0/dist/index.js");var Q="0.6.64",xt=d(`malinajs@${Q}/malina.js`);var I=d("mermaid@10.2.2/dist/mermaid.esm.mjs");var F=d("nomnoml@1.6.1/dist/nomnoml.js");var z=d("@pintora/standalone@0.6.2/lib/pintora-standalone.umd.js"),J=d("plotly.js@2.23.2/dist/plotly.js");var V=d("svgbob-wasm@0.4.1-a0/svgbob_wasm_bg.wasm");var T=d("vega@5.25.0/build/vega.js"),_=d("vega-lite@5.9.3/build/vega-lite.js");var E=d("wavedrom@3.2.0/");var K=!1,X=(e,t)=>{e.tagName.toLowerCase()==="img"?e.src="data:image/svg+xml;base64,"+btoa(unescape(encodeURIComponent(t))):e.innerHTML=t},v=e=>M(L(e)),f=async(e,t,s,o,n=!1)=>{if(!e)return"";let i=document.createElement("div");i.innerHTML=e;let r=i.querySelectorAll(`script[type="application/diagram-${t}"]`);if(r.length===0)return i.remove(),e;await s();for(let a of r){if(!a.src&&!a.innerHTML.trim())continue;let m=a.dataset.output;if(!m)continue;let b=a.src?await fetch(a.src).then(c=>c.text()):a.innerHTML,h=await o(b,a),U=i.querySelectorAll(`[data-src="${m}"]`);for(let c of U)c.tagName.toLowerCase()!=="img"&&n&&(K=!0,h=`<svg-container> ${h} </svg-container>`),X(c,h);a.remove()}let l=i.innerHTML;return i.remove(),l},Y=async e=>{let t=document.createElement("div");t.innerHTML=e,document.body.appendChild(t);let s=t.querySelectorAll('script[type="application/diagram-gnuplot"]');if(s.length===0)return t.remove(),e;let o=j+"gnuplot",n=await p(o+"/gnuplot_api.js","Gnuplot"),i=k(o+"/gnuplot.js"),r=window.gnuplot=window.gnuplot||new n(i),l=(c,u)=>new Promise(async y=>{await Promise.all(u.map(w=>new Promise(C=>{r.putFile(w.fileName,w.content,C)}))),r.run(c,y)}),a=c=>new Promise(u=>{r.getFile(c,function(y){if(!y?.content){u("");return}let w=new Uint8Array(y.content),C=new Blob([w],{type:"image/svg+xml"});q(C).then(u)})});await new Promise(c=>r.removeFiles(null,c));let m=[],b=t.querySelectorAll('script[type="application/diagram-gnuplot-file"]');for(let c of b){if(!c.dataset.file&&!c.src)continue;let u=c.src?await fetch(c.src).then(w=>w.text()):c.innerHTML,y=c.dataset.file||c.src?.split("/")[c.src?.split("/").length-1]||"data.txt";m.push({fileName:y,content:u}),c.remove()}for(let c of s){if(!c.src&&!c.innerHTML.trim())continue;let u=c.src?await fetch(c.src).then(y=>y.text()):c.innerHTML;await l(u,m),c.remove()}let h=t.querySelectorAll("[data-src]");for(let c of h){let u=await a(c.dataset.src||"");u&&(c.tagName.toLowerCase()==="img"?c.src=u:c.innerHTML=atob(u.replace("data:image/svg+xml;base64,","")))}let U=t.innerHTML;return t.remove(),U},tt=async e=>{let t,s=async()=>{t=(await import(I)).default,t.initialize({startOnLoad:!1})},o=0,n=()=>o++;return f(e,"mermaid",s,async r=>{let l=document.createElement("div");l.id="livecodes-mermaid-chart-"+n(),document.body.appendChild(l);let{svg:a}=await t.render(l.id,r.trim());return l.remove(),a})},et=async e=>{let t;return f(e,"graphviz",async()=>{t=await(await import(W)).Graphviz.load()},(n,i)=>{let r=i.dataset.layout||"dot";return t.layout(n,"svg",r)})},st=async e=>{let t=document.createElement("div");t.innerHTML=e;let s=t.querySelectorAll('script[type="application/diagram-vega-lite"]'),o;if(s.length>0){o=await p(T,"vega");let l=await p(_,"vegaLite");for(let a of s){if(!a.src&&!a.innerHTML.trim()||!a.dataset.output)continue;let b={};try{let h=a.src?await fetch(a.src).then(U=>U.json()):JSON.parse(v(a.innerHTML));a.innerHTML=JSON.stringify(l.compile(h,b).spec),a.type="application/diagram-vega",a.removeAttribute("src")}catch{throw a.remove(),new Error("failed to parse vegaLite specs.")}}}let n=async()=>{o=o||await p(T,"vega")},i=async(l,a={})=>{let m=document.createElement("div");try{let b=JSON.parse(v(l));return await new o.View(o.parse(b),{...a,renderer:"svg",container:m}).runAsync(),m.querySelector("svg")?.outerHTML||""}catch{throw new Error("failed to parse vega specs.")}finally{m.remove()}},r=await f(t.innerHTML,"vega",n,i);return t.remove(),r},ot=async e=>{let t;return f(e,"plotly",async()=>{t=await p(J,"Plotly")},n=>{let i=document.createElement("div");try{let r=JSON.parse(v(n));return t.newPlot(i,r.data,r.layout,{displayModeBar:!1}),i.querySelector("svg")?.outerHTML||""}catch{throw new Error("failed to parse plotly specs.")}finally{i.remove()}})},rt=async e=>{let t;return f(e,"svgbob",async()=>{let{svgbobWasm:n}=await import(j+"svgbob-wasm/svgbob-wasm.js");t=await n(V)},n=>t.convert_string(n),!0)},nt=async e=>{let t;return f(e,"wavedrom",async()=>{await p(E+"skins/default.js","WaveSkin"),t=await p(E+"wavedrom.min.js","WaveDrom")},n=>{let i=document.createElement("div");try{let r=JSON.parse(v(n));return i.id="diagram-id",document.body.appendChild(i),t.RenderWaveForm(i.id,r,""),i.innerHTML||""}catch{throw new Error("failed to parse WaveDrom specs.")}finally{i.remove()}})},it=async e=>{let t;return f(e,"nomnoml",async()=>{await p(O,"graphre"),t=await p(F,"nomnoml")},n=>t.renderSvg(n))},ct=async e=>{let t,s;return f(e,"elk",async()=>{let i=S+"elk-api.js",r=S+"elk-worker.min.js",l=j+"elkjs-svg/elkjs-svg.js",a=await p(i,"ELK"),m=await p(l,"elksvg");t=new a({workerUrl:k(r)}),s=new m.Renderer},i=>{try{let r=JSON.parse(v(i));return t.layout(r).then(l=>s.toSvg(l))}catch{throw new Error("failed to parse ELK JSON.")}},!0)},at=async e=>{let t,s;return f(e,"cytoscape",async()=>{[t,s]=await Promise.all([p(R,"cytoscape"),p(P,"cytoscapeSvg")]),t.use(s)},i=>{let r=document.createElement("div");r.style.display="block",r.style.visibility="none",r.style.height="300px",r.style.width="300px",document.body.appendChild(r);try{let l={...JSON.parse(v(L(i))),container:r};return t(l).svg({scale:1,full:!0})}catch{throw new Error("failed to parse Cytoscape options.")}finally{r.remove()}})},lt=async(e,t)=>{let s;return f(e,"pintora",async()=>{s=await p(z,"pintora")},i=>{let r=document.createElement("div");s.default.renderTo(i,{container:r,config:{...$("pintora",t)}});let l=r.firstElementChild;return l?.setAttribute("xmlns","http://www.w3.org/2000/svg"),l?.setAttribute("xmlns:xlink","http://www.w3.org/1999/xlink"),r.innerHTML})},pt=()=>K?`
<script>
  class SVGContainer extends HTMLElement {
    constructor() {
      super();
      const shadowRoot = this.attachShadow({mode: 'closed'});
      shadowRoot.append(...this.childNodes);
    }
  }
  customElements.define('svg-container', SVGContainer);
<\/script>
`:"",g=e=>B(e,console.error),jt=async(e,{config:t})=>await Promise.resolve(e).then(g(Y)).then(g(tt)).then(g(et)).then(g(st)).then(g(ot)).then(g(rt)).then(g(nt)).then(g(it)).then(g(ct)).then(g(at)).then(g(o=>lt(o,t))).catch(o=>(console.error(o),e))+pt();export{jt as diagramsCompiler};
//# sourceMappingURL=lang-diagrams-compiler-esm.js.map
