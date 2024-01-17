"use strict";(()=>{var l=["esm.sh","skypack","jspm"],a=["unpkg","jsdelivr","fastly.jsdelivr"],p=["fastly.jsdelivr.gh","jsdelivr.gh","statically"],r={getModuleUrl:(s,{isModule:t=!0,defaultCDN:e="esm.sh"}={})=>{s=s.replace(/#nobundle/g,"");let o=i(s,t,e);return o||(t?"https://esm.sh/"+s:"https://cdn.jsdelivr.net/npm/"+s)},getUrl:(s,t)=>s.startsWith("http")?s:i(s,!1,t||x())||s,cdnLists:{npm:a,module:l,gh:p},checkCDNs:async(s,t)=>{let e=[t,...r.cdnLists.npm].filter(Boolean);for(let o of e)try{if((await fetch(r.getUrl(s,o),{method:"HEAD"})).ok)return o}catch{}return r.cdnLists.npm[0]}},x=()=>{if(globalThis.appCDN)return globalThis.appCDN;try{return new URL(location.href).searchParams.get("appCDN")||r.cdnLists.npm[0]}catch{return r.cdnLists.npm[0]}},i=(s,t,e)=>{let o=t&&s.startsWith("unpkg:")?"?module":"";s.startsWith("gh:")?s=s.replace("gh",p[0]):s.includes(":")||(s=(e||(t?l[0]:a[0]))+":"+s);for(let n of h){let[c,u]=n;if(c.test(s))return s.replace(c,u)+o}return null},h=[[/^(jspm:)(.+)/i,"https://jspm.dev/$2"],[/^(npm:)(.+)/i,"https://esm.sh/$2"],[/^(node:)(.+)/i,"https://esm.sh/$2"],[/^(skypack:)(.+)/i,"https://cdn.skypack.dev/$2"],[/^(jsdelivr:)(.+)/i,"https://cdn.jsdelivr.net/npm/$2"],[/^(fastly.jsdelivr:)(.+)/i,"https://fastly.jsdelivr.net/npm/$2"],[/^(jsdelivr.gh:)(.+)/i,"https://cdn.jsdelivr.net/gh/$2"],[/^(fastly.jsdelivr.gh:)(.+)/i,"https://fastly.jsdelivr.net/gh/$2"],[/^(statically:)(.+)/i,"https://cdn.statically.io/gh/$2"],[/^(esm.run:)(.+)/i,"https://esm.run/$2"],[/^(esm.sh:)(.+)/i,"https://esm.sh/$2"],[/^(esbuild:)(.+)/i,"https://esbuild.vercel.app/$2"],[/^(bundle.run:)(.+)/i,"https://bundle.run/$2"],[/^(unpkg:)(.+)/i,"https://unpkg.com/$2"],[/^(bundlejs:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(bundle:)(.+)/i,"https://deno.bundlejs.com/?file&q=$2"],[/^(deno:)(.+)/i,"https://deno.bundlejs.com/?file&q=https://deno.land/x/$2/mod.ts"],[/^(https:\/\/deno\.land\/.+)/i,"https://deno.bundlejs.com/?file&q=$1"],[/^(github:|https:\/\/github\.com\/)(.[^\/]+?)\/(.[^\/]+?)\/(?!releases\/)(?:(?:blob|raw)\/)?(.+?\/.+)/i,"https://deno.bundlejs.com/?file&q=https://cdn.jsdelivr.net/gh/$2/$3@$4"],[/^(gist\.github:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(gitlab:|https:\/\/gitlab\.com\/)([^\/]+.*\/[^\/]+)\/(?:raw|blob)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://gl.githack.com/$2/raw/$3"],[/^(bitbucket:|https:\/\/bitbucket\.org\/)([^\/]+\/[^\/]+)\/(?:raw|src)\/(.+?)(?:\?.*)?$/i,"https://deno.bundlejs.com/?file&q=https://bb.githack.com/$2/raw/$3"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/]+)\/revisions\/([^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/$3/files/$4"],[/^(bitbucket:)snippets\/([^\/]+\/[^\/\#\?]+)(?:\?[^#]*)?(?:\#file-(.+?))$/i,"https://bb.githack.com/!api/2.0/snippets/$2/HEAD/files/$3"],[/^(bitbucket:)\!api\/2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(api\.bitbucket:)2.0\/snippets\/([^\/]+\/[^\/]+\/[^\/]+)\/files\/(.+?)(?:\?.*)?$/i,"https://bb.githack.com/!api/2.0/snippets/$2/files/$3"],[/^(rawgit:)(.+?\/[0-9a-f]+\/raw\/(?:[0-9a-f]+\/)?.+)$/i,"https://gist.githack.com/$2"],[/^(rawgit:|https:\/\/raw\.githubusercontent\.com)(\/[^\/]+\/[^\/]+|[0-9A-Za-z-]+\/[0-9a-f]+\/raw)\/(.+)/i,"https://deno.bundlejs.com/?file&q=https://raw.githack.com/$2/$3"]];var{getUrl:d,getModuleUrl:g}=r,m=d("@live-codes/browser-compilers@0.9.0/dist/");var f="0.6.64",y=d(`malinajs@${f}/malina.js`);var b=m+"fennel/?.lua";self.createFennelCompiler=()=>{let s=`
package.path = "${b}"
package.loaded.ffi = {typeof=function() end}
os = {getenv=function() end}
io = {open=function() end}
bit = {band = function(a,b) return a & b end,
       rshift=function(a,b) return a >> b end}
unpack = table.unpack

local fennel = require("fennel")
local compiler = fennel.compileString
local ok, result = pcall(compiler, %input%)
return {result, ok}
`;return async t=>{try{let e=self.fengari.load(s.replace("%input%",JSON.stringify(t)))(),o=e.get(1)||"";return e.get(2)||null?o:(console.error("Fennel compile error"),"")}catch(e){return console.error(e),""}}};})();
