"use strict";(()=>{var o=(r,e)=>({...e.customSettings[r]});self.createSolidCompiler=()=>(self.Babel.registerPreset("solid",self.babelPresetSolid.solid),async(e,{config:s,language:i})=>{let n=i==="solid.tsx",t=o("solid",s);return window.Babel.transform(e,{...t,filename:"script."+(n?"tsx":"jsx"),presets:[["env",{modules:!1}],...Array.isArray(t.presets)?t.presets:[],...n?["typescript"]:[],["solid",{generate:"dom",hydratable:!0}]]}).code});})();
