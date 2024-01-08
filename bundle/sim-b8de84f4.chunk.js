import{eF as e,A as t,eO as a,eP as l,eQ as n,eR as s,eS as o,as as i,aU as d,eT as c,eI as r,eJ as p,eK as m,eL as h,eM as g,cg as u,ch as S,eb as I,L as f,m as v,eU as y,E as T,cs as b,cn as W,cq as w,aG as O,bq as R,aH as k,I as F,a2 as P,ab as A,F as E,w as C,B as L,V as N,S as M,b4 as B,g as D,u as H,bF as x}from"./detailed_results-77112d1d.chunk.js";import{y as G,F as V,b as j,o as U,c as q,d as K,e as _,f as z,C as J,B as Q,E as X,N as Y,G as Z,r as $,H as ee,J as te,K as ae,L as le,O as ne,T as se,x as oe,I as ie}from"./preset_utils-478252a8.chunk.js";import{T as de}from"./totem_inputs-8adc5c9e.chunk.js";const ce=G({fieldName:"shield",values:[{value:e.NoShield,tooltip:"No Shield"},{actionId:t.fromSpellId(57960),value:e.WaterShield},{actionId:t.fromSpellId(49281),value:e.LightningShield}]}),re=G({fieldName:"imbueMh",values:[{value:a.NoImbue,tooltip:"No Main Hand Enchant"},{actionId:t.fromSpellId(58804),value:a.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:a.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:a.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:a.FrostbrandWeapon}]}),pe=G({fieldName:"imbueOh",values:[{value:a.NoImbue,tooltip:"No Off Hand Enchant"},{actionId:t.fromSpellId(58804),value:a.WindfuryWeapon},{actionId:t.fromSpellId(58790),value:a.FlametongueWeapon,text:"R10"},{actionId:t.fromSpellId(58789),value:a.FlametongueWeaponDownrank,text:"R9"},{actionId:t.fromSpellId(58796),value:a.FrostbrandWeapon}]}),me=V({fieldName:"syncType",label:"Sync/Stagger Setting",labelTooltip:"Choose your sync or stagger option Perfect\n\t\t<ul>\n\t\t\t<li><div>Auto: Will auto pick sync options based on your weapons attack speeds</div></li>\n\t\t\t<li><div>None: No Sync or Staggering, used for mismatched weapon speeds</div></li>\n\t\t\t<li><div>Perfect Sync: Makes your weapons always attack at the same time, for match weapon speeds</div></li>\n\t\t\t<li><div>Delayed Offhand: Adds a slight delay to the offhand attacks while staying within the 0.5s flurry ICD window</div></li>\n\t\t</ul>",values:[{name:"Automatic",value:l.Auto},{name:"None",value:l.NoSync},{name:"Perfect Sync",value:l.SyncMainhandOffhandSwings},{name:"Delayed Offhand",value:l.DelayOffhandSwings}]}),he={inputs:[j({fieldName:"rotationType",label:"Type",labelTooltip:"<ul>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div>Standard: Priority Rotation</div>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<div>Custom: Highest spell that is ready will be cast.</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>",values:[{name:"Standard",value:n.Priority},{name:"Custom",value:n.Custom}]}),U({fieldName:"customRotation",numColumns:2,values:[{actionId:t.fromSpellId(49238),value:s.LightningBolt},{actionId:t.fromSpellId(49238),value:s.LightningBoltWeave,text:"Weave"},{actionId:t.fromSpellId(49238),value:s.LightningBoltDelayedWeave,text:"Delay"},{actionId:t.fromSpellId(49271),value:s.ChainLightning},{actionId:t.fromSpellId(17364),value:s.StormstrikeDebuffMissing,text:"Debuff"},{actionId:t.fromSpellId(17364),value:s.Stormstrike},{actionId:t.fromSpellId(49233),value:s.FlameShock},{actionId:t.fromSpellId(49231),value:s.EarthShock},{actionId:t.fromSpellId(58734),value:s.MagmaTotem},{actionId:t.fromSpellId(61657),value:s.FireNova},{actionId:t.fromSpellId(60103),value:s.LavaLash},{actionId:t.fromSpellId(49281),value:s.LightningShield},{actionId:t.fromSpellId(60043),value:s.LavaBurst,text:"Weave"},{actionId:t.fromSpellId(49236),value:s.FrostShock}],showWhen:e=>e.getRotation().rotationType==n.Custom}),j({fieldName:"primaryShock",label:"Primary Shock",values:[{name:"None",value:o.None},{name:"Earth Shock",value:o.Earth},{name:"Frost Shock",value:o.Frost}],showWhen:e=>e.getRotation().rotationType!=n.Custom}),q({fieldName:"weaveFlameShock",label:"Weave Flame Shock",labelTooltip:"Use Flame Shock whenever the target does not already have the DoT.",showWhen:e=>e.getRotation().rotationType!=n.Custom}),K({fieldName:"flameShockClipTicks",label:"Refresh Flame Shock at ticks remaining",labelTooltip:"Set to 0 to require the debuff be missing. A tick is 3s, affected by spell haste",enableWhen:e=>e.getRotation().weaveFlameShock,showWhen:e=>e.getRotation().rotationType==n.Custom?null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.FlameShock)):e.getRotation().weaveFlameShock}),q({fieldName:"lightningboltWeave",label:"Enable Weaving Lightning Bolt",labelTooltip:"Will provide a DPS increase, but is harder to execute",enableWhen:e=>e.getTalents().maelstromWeapon>0,showWhen:e=>e.getRotation().rotationType!=n.Custom}),j({fieldName:"maelstromweaponMinStack",label:"Minimum Maelstrom Stacks to Weave",labelTooltip:"3 stacks is the most realistic, however there are cases where lower might be possible, just much harder to do in practice",values:[{name:"1",value:1},{name:"2",value:2},{name:"3",value:3},{name:"4",value:4}],enableWhen:e=>e.getRotation().rotationType==n.Custom?null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltWeave)):e.getRotation().lightningboltWeave,showWhen:e=>e.getRotation().rotationType!=n.Custom||null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltWeave))}),K({fieldName:"autoWeaveDelay",label:"Weaving Delay After Auto Attack",labelTooltip:"The amount of time to wait after an auto attack before weaveing, in milliseconds",enableWhen:e=>e.getRotation().rotationType==n.Custom?null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltWeave)):e.getRotation().lightningboltWeave,showWhen:e=>e.getRotation().rotationType!=n.Custom||null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltWeave))}),K({fieldName:"delayGcdWeave",label:"Delay LL to Weave",labelTooltip:"The amount of time to hold Lava Lash to weave in milliseconds. Setting to 0 will disable delaying",enableWhen:e=>e.getRotation().rotationType!=n.Custom&&e.getRotation().lightningboltWeave,showWhen:e=>e.getRotation().rotationType!=n.Custom}),K({fieldName:"delayGcdWeave",label:"Delay Weave Time",labelTooltip:"The amount of time to hold a GCD to weave in milliseconds. Setting to 0 will disable delaying",enableWhen:e=>e.getRotation().rotationType==n.Custom&&null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltDelayedWeave)),showWhen:e=>e.getRotation().rotationType==n.Custom&&null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.LightningBoltDelayedWeave))}),q({fieldName:"lavaburstWeave",label:"Enable Weaving Lava Burst",labelTooltip:"Not particularily useful for dual wield, mostly a 2h option",enableWhen:e=>e.getRotation().lightningboltWeave,showWhen:e=>e.getRotation().rotationType!=n.Custom}),K({fieldName:"firenovaManaThreshold",label:"Minimum mana to cast Fire Nova",labelTooltip:"Fire Nova will not be cast when mana is below this value. Set this medium-low, it has a bad mana-to-damage ratio",showWhen:e=>e.getRotation().rotationType!=n.Custom||null!=e.getRotation().customRotation?.spells.find((e=>e.spell==s.FireNova))}),K({fieldName:"shamanisticRageManaThreshold",label:"Mana % to use Shamanistic Rage",enableWhen:e=>e.getTalents().shamanisticRage}),q({fieldName:"bloodlust",label:"Use Bloodlust",labelTooltip:"Player will cast bloodlust",getValue:e=>e.getRotation().bloodlust==i.UseBloodlust,setValue:(e,t,a)=>{const l=t.getRotation();l.bloodlust=a?i.UseBloodlust:i.NoBloodlust,t.setRotation(e,l)}})]},ge={items:[{id:40543,enchant:3817,gems:[41398,40014]},{id:44661,gems:[40014]},{id:40524,enchant:3808,gems:[40014]},{id:40403,enchant:3605},{id:40523,enchant:3832,gems:[40003,40014]},{id:40282,enchant:3845,gems:[42702,0]},{id:40520,enchant:3604,gems:[42154,0]},{id:40275,gems:[42156]},{id:40522,enchant:3823,gems:[39999,42156]},{id:40367,enchant:3606,gems:[40058]},{id:40474},{id:40074},{id:40684},{id:37390},{id:39763,enchant:3789},{id:39468,enchant:3789},{id:40322}]},ue={items:[{id:45610,enchant:3817,gems:[41398,42702]},{id:45517,gems:[39999]},{id:46203,enchant:3808,gems:[39999]},{id:45461,enchant:3831,gems:[40014]},{id:46205,enchant:3832,gems:[40058,40053]},{id:45460,enchant:3845,gems:[39999,0]},{id:46200,enchant:3604,gems:[40014,0]},{id:45553,gems:[36766,36766,36766]},{id:46208,enchant:3823,gems:[39999,39999]},{id:45989,enchant:3606,gems:[40053,39999]},{id:45456,gems:[39999]},{id:46046,gems:[40053]},{id:45609},{id:46038},{id:45612,enchant:3789,gems:[39999]},{id:46097,enchant:3789,gems:[40003]},{id:40322}]},Se={items:[{id:45610,enchant:3817,gems:[41398,42702]},{id:45517,gems:[39999]},{id:46203,enchant:3808,gems:[39999]},{id:45461,enchant:3831,gems:[40052]},{id:46205,enchant:3832,gems:[40052,40052]},{id:45460,enchant:3845,gems:[39999,0]},{id:46200,enchant:3604,gems:[40053,0]},{id:45553,gems:[36766,36766,36766]},{id:46208,enchant:3823,gems:[39999,39999]},{id:45989,enchant:3606,gems:[40053,39999]},{id:45456,gems:[39999]},{id:45608,gems:[39999]},{id:45609},{id:46038},{id:45132,enchant:3789,gems:[40052]},{id:46097,enchant:3789,gems:[39999]},{id:40322}]},Ie={items:[{id:48353,enchant:3817,gems:[41398,40128]},{id:47060,gems:[40159]},{id:48351,enchant:3808,gems:[40128]},{id:47552,enchant:3722,gems:[40159]},{id:46965,enchant:3832,gems:[40159,49110,40128]},{id:47916,enchant:3845,gems:[40159,0]},{id:48354,enchant:3604,gems:[40128,0]},{id:47112,enchant:3599,gems:[40128,40159,40128]},{id:48352,enchant:3823,gems:[40128,40128]},{id:47099,enchant:3606,gems:[40128,40128]},{id:46046,gems:[40128]},{id:47075,gems:[40128]},{id:47188},{id:45609},{id:47206,enchant:3789},{id:47156,enchant:3789,gems:[40128]},{id:47666}]},fe={items:[{id:48358,enchant:3817,gems:[41398,40128]},{id:47433,gems:[40159]},{id:48360,enchant:3808,gems:[40128]},{id:47551,enchant:3722,gems:[40159]},{id:47412,enchant:3832,gems:[40159,49110,40128]},{id:47989,enchant:3845,gems:[40159,0]},{id:48357,enchant:3604,gems:[40128,0]},{id:47460,enchant:3599,gems:[40128,40159,40128]},{id:48359,enchant:3823,gems:[40128,40128]},{id:47456,enchant:3606,gems:[40128,40128]},{id:46046,gems:[40128]},{id:47443,gems:[40128]},{id:47477},{id:45609},{id:47483,enchant:3789},{id:47475,enchant:3789,gems:[40128]},{id:47666}]},ve={items:[{id:51242,enchant:3817,gems:[41398,40118]},{id:50658,gems:[42156]},{id:51240,enchant:3808,gems:[40128]},{id:50653,enchant:3831,gems:[40128]},{id:51244,enchant:3832,gems:[40118,49110]},{id:50687,enchant:3845,gems:[40128,0]},{id:50619,enchant:3604,gems:[40125,40118,0]},{id:50613,enchant:3599,gems:[40128,40118,40128]},{id:51241,enchant:3823,gems:[40118,40128]},{id:50711,enchant:3606,gems:[40128,40128]},{id:50604,gems:[42156]},{id:50402,gems:[42156]},{id:50343},{id:45609},{id:51939,enchant:3789,gems:[40118]},{id:50710,enchant:3789,gems:[40118]},{id:50458}]},ye={items:[{id:51242,enchant:3817,gems:[41398,40118]},{id:51890,gems:[40118]},{id:51240,enchant:3808,gems:[40128]},{id:50653,enchant:3831,gems:[40128]},{id:51244,enchant:3832,gems:[40118,49110]},{id:51914,enchant:3845,gems:[40118,0]},{id:50619,enchant:3604,gems:[40128,40159,0]},{id:50993,gems:[42150,42150,42150]},{id:51241,enchant:3823,gems:[40118,40159]},{id:50711,enchant:3606,gems:[40128,40128]},{id:50604,gems:[40128]},{id:50402,gems:[40128]},{id:50355},{id:50343},{id:50692,enchant:3789,gems:[40128]},{id:50710,enchant:3789,gems:[40128]},{id:50458}]},Te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:49233}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:17364}}}}},castSpell:{spellId:{spellId:17364}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},be={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGe",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"3"}}}},{cmp:{op:"OpLt",lhs:{math:{op:"OpAdd",lhs:{const:{val:"300ms"}},rhs:{spellCastTime:{spellId:{spellId:49238}}}}},rhs:{autoTimeToNext:{}}}}]}},castSpell:{spellId:{spellId:49238}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{spellId:49233}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},We={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:66842}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:49233}}},rhs:{const:{val:"0s"}}}},{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"8s"}}}}]}},castSpell:{spellId:{spellId:49233}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{auraNumStacks:{auraId:{spellId:53817}}},rhs:{const:{val:"5"}}}},castSpell:{spellId:{spellId:49238}}}},{action:{condition:{not:{val:{auraIsActive:{sourceUnit:{type:"CurrentTarget"},auraId:{spellId:17364}}}}},castSpell:{spellId:{spellId:17364}}}},{action:{castSpell:{spellId:{spellId:49231}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{totemRemainingTime:{totemType:"Water"}},rhs:{const:{val:"20s"}}}},castSpell:{spellId:{spellId:66842}}}},{action:{castSpell:{spellId:{spellId:17364}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLe",lhs:{dotRemainingTime:{spellId:{spellId:58734}}},rhs:{const:{val:"100ms"}}}},{not:{val:{auraIsActive:{auraId:{spellId:2894}}}}}]}},castSpell:{spellId:{spellId:58734}}}},{action:{castSpell:{spellId:{spellId:61657}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:49281}}}}},castSpell:{spellId:{spellId:49281}}}},{action:{castSpell:{spellId:{spellId:60103}}}}]},we=_("Preraid Preset",{items:[{id:43311,enchant:3817,gems:[41398,42156]},{id:40678},{id:37373,enchant:3808},{id:37840,enchant:3605},{id:39597,enchant:3832,gems:[40053,40088]},{id:43131,enchant:3845,gems:[0]},{id:39601,enchant:3604,gems:[40053,0]},{id:37407,gems:[42156]},{id:37669,enchant:3823},{id:37167,enchant:3606,gems:[40053,42156]},{id:37685},{id:37642},{id:37390},{id:40684},{id:41384,enchant:3789},{id:40704,enchant:3789},{id:33507}]}),Oe=_("P1 Preset",ge),Re=_("P2 Preset FT",ue),ke=_("P2 Preset WF",Se),Fe=_("P3 Preset [A]",Ie,{faction:d.Alliance}),Pe=_("P3 Preset [H]",fe,{faction:d.Horde}),Ae=_("P4 Preset FT",ve),Ee=_("P4 Preset WF",ye),Ce=c.create({totems:r.create({earth:p.StrengthOfEarthTotem,air:m.WindfuryTotem,fire:h.MagmaTotem,water:g.ManaSpringTotem,useFireElemental:!0}),maelstromweaponMinStack:3,lightningboltWeave:!0,autoWeaveDelay:500,delayGcdWeave:750,lavaburstWeave:!1,firenovaManaThreshold:3e3,shamanisticRageManaThreshold:25,primaryShock:o.Earth,weaveFlameShock:!0,rotationType:n.Priority,customRotation:u.create({spells:[S.create({spell:s.LightningBolt}),S.create({spell:s.StormstrikeDebuffMissing}),S.create({spell:s.LightningBoltWeave}),S.create({spell:s.Stormstrike}),S.create({spell:s.FlameShock}),S.create({spell:s.EarthShock}),S.create({spell:s.MagmaTotem}),S.create({spell:s.LightningShield}),S.create({spell:s.FireNova}),S.create({spell:s.LightningBoltDelayedWeave}),S.create({spell:s.LavaLash})]})}),Le=z("Default FT",Te),Ne=z("Default WF",be),Me=z("Phase 3",We),Be={name:"Standard",data:I.create({talentsString:"053030152-30405003105021333031131031051",glyphs:f.create({major1:v.GlyphOfFireNova,major2:v.GlyphOfFlametongueWeapon,major3:v.GlyphOfFeralSpirit})})},De={name:"Phase 3",data:I.create({talentsString:"053030152-30505003105001333031131131051",glyphs:f.create({major1:v.GlyphOfFireNova,major2:v.GlyphOfFlametongueWeapon,major3:v.GlyphOfFeralSpirit})})},He=y.create({shield:e.LightningShield,bloodlust:!0,imbueMh:a.WindfuryWeapon,imbueOh:a.FlametongueWeapon,syncType:l.Auto,totems:r.create({earth:p.StrengthOfEarthTotem,fire:h.MagmaTotem,water:g.ManaSpringTotem,air:m.WindfuryTotem})}),xe=T.create({defaultPotion:b.PotionOfSpeed,flask:W.FlaskOfEndlessRage,food:w.FoodFishFeast}),Ge=O.create({giftOfTheWild:R.TristateEffectImproved,arcaneBrilliance:!0,leaderOfThePack:R.TristateEffectImproved,totemOfWrath:!0,wrathOfAirTotem:!0,moonkinAura:R.TristateEffectImproved,sanctifiedRetribution:!0,divineSpirit:!0,battleShout:R.TristateEffectImproved,demonicPact:500}),Ve=k.create({bloodFrenzy:!0,sunderArmor:!0,curseOfWeakness:R.TristateEffectRegular,curseOfElements:!0,faerieFire:R.TristateEffectImproved,judgementOfWisdom:!0,misery:!0,totemOfWrath:!0,shadowMastery:!0});const je=$(M.SpecEnhancementShaman,{cssClass:"enhancement-shaman-sim-ui",cssScheme:"shaman",knownIssues:[],epStats:[P.StatIntellect,P.StatAgility,P.StatStrength,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatMeleeHaste,P.StatArmorPenetration,P.StatExpertise,P.StatSpellPower,P.StatSpellCrit,P.StatSpellHit,P.StatSpellHaste],epPseudoStats:[A.PseudoStatMainHandDps,A.PseudoStatOffHandDps],epReferenceStat:P.StatAttackPower,displayStats:[P.StatHealth,P.StatStamina,P.StatStrength,P.StatAgility,P.StatIntellect,P.StatAttackPower,P.StatMeleeHit,P.StatMeleeCrit,P.StatMeleeHaste,P.StatExpertise,P.StatArmorPenetration,P.StatSpellPower,P.StatSpellHit,P.StatSpellCrit,P.StatSpellHaste],defaults:{gear:Ee.gear,epWeights:E.fromMap({[P.StatIntellect]:1.48,[P.StatAgility]:1.59,[P.StatStrength]:1.1,[P.StatSpellPower]:1.13,[P.StatSpellHit]:0,[P.StatSpellCrit]:.91,[P.StatSpellHaste]:.37,[P.StatAttackPower]:1,[P.StatMeleeHit]:1.38,[P.StatMeleeCrit]:.81,[P.StatMeleeHaste]:1.61,[P.StatArmorPenetration]:.48,[P.StatExpertise]:0},{[A.PseudoStatMainHandDps]:5.21,[A.PseudoStatOffHandDps]:2.21}),consumes:xe,rotation:Ce,talents:Be.data,specOptions:He,raidBuffs:Ge,partyBuffs:C.create({}),individualBuffs:L.create({blessingOfKings:!0,blessingOfWisdom:R.TristateEffectImproved,blessingOfMight:R.TristateEffectImproved,judgementsOfTheWise:!0}),debuffs:Ve},playerIconInputs:[ce,re,pe],rotationInputs:he,includeBuffDebuffInputs:[ee,te,ae,le],excludeBuffDebuffInputs:[ne],otherInputs:{inputs:[me,se,oe]},itemSwapSlots:[N.ItemSlotMainHand,N.ItemSlotOffHand],customSections:[de,function(e,a){let l=new J(e,"fire-elemental-settings",{header:{title:"Fire Elemental"}}),n=F.newGroupContainer();n.classList.add("fire-elemental-icon-container"),l.bodyElement.appendChild(n);const s=Q({getModObject:e=>e,getValue:e=>e.getSpecOptions().totems||r.create(),setValue:(e,t,a)=>{const l=t.getSpecOptions();l.totems=a,t.setSpecOptions(e,l),t.rotationChangeEmitter.emit(e)},changeEmitter:e=>e.specOptionsChangeEmitter},t.fromSpellId(2894),"useFireElemental");return new X(n,a.player,s),new Y(l.bodyElement,a.player,{positive:!0,label:"Bonus spell power",labelTooltip:"Bonus spell power to snapshot Fire Elemental with. Will prioritize dropping Fire Elemental if greater then 0",inline:!0,getValue:e=>e.getSpecOptions().totems?.bonusSpellpower||0,setValue:(e,t,a)=>{const l=t.getSpecOptions();l.totems&&(l.totems.bonusSpellpower=a),t.setSpecOptions(e,l)},changedEvent:e=>e.specOptionsChangeEmitter}),new Z(l.bodyElement,a.player,{label:"Use Tier 10 (4pc)",labelTooltip:"Will use Tier 10 (4pc) to snapshot Fire Elemental.",inline:!0,getValue:e=>e.getSpecOptions().totems?.enhTierTenBonus||!1,setValue:(e,t,a)=>{const l=t.getSpecOptions();l.totems&&(l.totems.enhTierTenBonus=a),t.setSpecOptions(e,l)},changedEvent:e=>e.currentStatsEmitter,showWhen:e=>e.getCurrentStats().sets.includes("Frost Witch's Battlegear (4pc)")}),l}],encounterPicker:{showExecuteProportion:!1},presets:{talents:[Be,De],rotations:[Le,Ne,Me],gear:[we,Oe,Re,ke,Fe,Pe,Ae,Ee]},autoRotation:e=>{const t=e.getCurrentStats().sets.includes("Triumphant Nobundo's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Nobundo's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Triumphant Thrall's Battlegear (4pc)")||e.getCurrentStats().sets.includes("Thrall's Battlegear (4pc)"),l=e.getSpecOptions();return t?(console.log("has set"),Me.rotation.rotation):l.imbueMh==a.FlametongueWeapon?Le.rotation.rotation:Ne.rotation.rotation},raidSimPresets:[{spec:M.SpecEnhancementShaman,tooltip:B[M.SpecEnhancementShaman],defaultName:"Enhancement",iconUrl:D(H.ClassShaman,1),talents:Be.data,specOptions:He,consumes:xe,defaultFactionRaces:{[d.Unknown]:x.RaceUnknown,[d.Alliance]:x.RaceDraenei,[d.Horde]:x.RaceOrc},defaultGear:{[d.Unknown]:{},[d.Alliance]:{1:Oe.gear,2:Re.gear,3:Fe.gear,4:Ae.gear},[d.Horde]:{1:Oe.gear,2:Re.gear,3:Pe.gear,4:Ae.gear}}}]});class Ue extends ie{constructor(e,t){super(e,t,je)}}export{Ue as E};
//# sourceMappingURL=sim-b8de84f4.chunk.js.map