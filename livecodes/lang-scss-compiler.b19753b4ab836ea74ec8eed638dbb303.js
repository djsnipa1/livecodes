"use strict";(()=>{var f=["esm.sh","skypack","jspm"],b=["unpkg","jsdelivr","fastly.jsdelivr"],y=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],p={getModuleUrl:(t,{isModule:e=!0,defaultCDN:c="esm.sh"}={})=>{t=t.replace(/#nobundle/g,"");let s=h(t,e,c);return s||(e?"https://esm.sh/"+t:"https://cdn.jsdelivr.net/npm/"+t)},getUrl:(t,e)=>t.startsWith("http")?t:h(t,!1,e||x())||t,cdnLists:{npm:b,module:f,gh:y},checkCDNs:async(t,e)=>{let c=[e,...p.cdnLists.npm].filter(Boolean);for(let s of c)try{if((await fetch(p.getUrl(t,s),{method:"HEAD"})).ok)return s}catch{}return p.cdnLists.npm[0]}},x=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||p.cdnLists.npm[0]}catch{return p.cdnLists.npm[0]}},h=(t,e,c)=>{let s=e&&t.startsWith("unpkg:")?"?module":"";t.startsWith("gh:")?t=t.replace("gh",y[0]):t.includes(":")||(t=(c||(e?f[0]:b[0]))+":"+t);for(let d of v){let[u,o]=d;if(u.test(t))return t.replace(u,o)+s}return null},v=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var w=(t,e)=>({...e.customSettings[t]});self.createScssCompiler=()=>{let t=window.sass;return async(e,{config:c,language:s})=>{let d=s==="sass"?"indented":"scss",u=w(s,c),o=null,m=p.getUrl("~").replace("~",""),g=l=>{let r=o&&o!==l?new URL(l.replace(m,""),o).href:l,a=r.replace(m,"").split("/");return a.length===1||a.length===2&&a[0].startsWith("@")?Promise.reject("not a valid URL!"):fetch(r).then(n=>n.ok?n.text():Promise.reject("URL not found: "+r)).then(n=>({contents:n,syntax:d}))};return t.compileString(e,{...u,syntax:d,importers:[{canonicalize(l){return new URL(l,m)},load(l){let r=l.href;return g(r).catch(()=>{let i=r.split("/"),a=i[i.length-1],n=a.startsWith("_")?"":"_";return i[i.length-1]=n+a+".scss",g(i.join("/"))}).catch(()=>g(r+".scss")).catch(()=>new Promise((i,a)=>{fetch(r+"/package.json").then(n=>n.json()).then(n=>{n.sass?(o=r+"/"+n.sass,i(g(o))):n.style?(o=r+"/"+n.style,i(g(o))):a("Not found")})}))}}]}).css||""}};})();
