import{f_ as a,A as t,f$ as e,g0 as s,a2 as l,F as o,bg as r,w as i,S as n,b4 as p,g as S,u as d,aU as u,bF as c}from"./detailed_results-77112d1d.chunk.js";import{y as f,m,b as h,r as w,H as g,M as I,g as P,J as b,A as v,h as y,t as H,T as M,ao as N,n as k,I as C}from"./preset_utils-478252a8.chunk.js";import{P as B,D as F,a as R,S as T,b as A,c as D,d as U,e as x,O as j,E,R as O,f as _,g as V,h as W,i as G,j as J,k as $}from"./presets-b58e6d90.chunk.js";const q=f({fieldName:"armor",values:[{value:a.NoArmor,tooltip:"No Inner Fire"},{actionId:t.fromSpellId(48168),value:a.InnerFire}]}),z=m({fieldName:"useMindBlast",id:t.fromSpellId(48127)}),K=m({fieldName:"useShadowWordDeath",id:t.fromSpellId(48158)}),L=m({fieldName:"useShadowfiend",id:t.fromSpellId(34433)}),Q={inputs:[h({fieldName:"rotationType",label:"Rotation Type",labelTooltip:"Choose how to clip your mindflay. Basic will never clip. Clipping will clip for other spells and use a 2xMF2 when there is time for 4 ticks. Ideal will evaluate the DPS gain of every action to determine MF actions.",values:[{name:"Ideal",value:e.Ideal},{name:"AoE",value:e.AoE}]}),h({fieldName:"precastType",label:"PreCast Spell",labelTooltip:"Choose which spell you want to Precast",values:[{name:"None",value:s.Nothing},{name:"Vampiric Touch",value:s.PrecastVt},{name:"Mind Blast",value:s.PrecastMb}]})]},X=w(n.SpecShadowPriest,{cssClass:"shadow-priest-sim-ui",cssScheme:"priest",knownIssues:[],epStats:[l.StatIntellect,l.StatSpirit,l.StatSpellPower,l.StatSpellHit,l.StatSpellCrit,l.StatSpellHaste,l.StatMP5],epReferenceStat:l.StatSpellPower,displayStats:[l.StatHealth,l.StatMana,l.StatStamina,l.StatIntellect,l.StatSpirit,l.StatSpellPower,l.StatSpellHit,l.StatSpellCrit,l.StatSpellHaste,l.StatMP5],modifyDisplayStats:a=>{let t=new o;return t=t.addStat(l.StatSpellHit,1*a.getTalents().shadowFocus*r),{talents:t}},defaults:{gear:B.gear,epWeights:o.fromMap({[l.StatIntellect]:.11,[l.StatSpirit]:.47,[l.StatSpellPower]:1,[l.StatSpellHit]:.87,[l.StatSpellCrit]:.74,[l.StatSpellHaste]:1.65,[l.StatMP5]:0}),consumes:F,rotation:R,talents:T.data,specOptions:A,raidBuffs:D,partyBuffs:i.create({}),individualBuffs:U,debuffs:x,other:j},playerIconInputs:[q],rotationIconInputs:[z,K,L],rotationInputs:Q,includeBuffDebuffInputs:[g,I,P,b,v,y,H],excludeBuffDebuffInputs:[],otherInputs:{inputs:[M,N,k]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[T,E],rotations:[O,_,V],gear:[W,G,J,$,B]},autoRotation:a=>{const t=a.sim.encounter.targets.length;return t>4?V.rotation.rotation:t>1?_.rotation.rotation:O.rotation.rotation},raidSimPresets:[{spec:n.SpecShadowPriest,tooltip:p[n.SpecShadowPriest],defaultName:"Shadow",iconUrl:S(d.ClassPriest,2),talents:T.data,specOptions:A,consumes:F,defaultFactionRaces:{[u.Unknown]:c.RaceUnknown,[u.Alliance]:c.RaceDwarf,[u.Horde]:c.RaceUndead},defaultGear:{[u.Unknown]:{},[u.Alliance]:{1:G.gear,2:J.gear,3:$.gear,4:B.gear},[u.Horde]:{1:G.gear,2:J.gear,3:$.gear,4:B.gear}}}]});class Y extends C{constructor(a,t){super(a,t,X)}}export{Y as S};
//# sourceMappingURL=sim-b556907f.chunk.js.map
