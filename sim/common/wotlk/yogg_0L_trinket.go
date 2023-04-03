package wotlk

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func init() {
	core.NewItemEffect(46312, func(agent core.Agent) {
		character := agent.GetCharacter()
		actionID := core.ActionID{ItemID: 46312}

		crusherTentacle := &TentaclePet{
			Pet:          core.NewPet("Vanquished Clutches of Yogg Saron (Crusher)", character, tentacleBaseStats, nil, nil, false, true),
			TentacleType: 0,
		}

		corruptorTentacle := &TentaclePet{
			Pet:          core.NewPet("Vanquished Clutches of Yogg Saron (Corruptor)", character, tentacleBaseStats, nil, nil, false, true),
			TentacleType: 1,
		}

		constrictorTentacle := &TentaclePet{
			Pet:          core.NewPet("Vanquished Clutches of Yogg Saron (Constrictor)", character, tentacleBaseStats, nil, nil, false, true),
			TentacleType: 2,
		}

		character.AddPet(crusherTentacle)
		character.AddPet(corruptorTentacle)
		character.AddPet(constrictorTentacle)

		crusherTentacle.EnableAutoAttacks(crusherTentacle, core.AutoAttackOptions{
			MainHand: core.Weapon{
				BaseDamageMin:  842,
				BaseDamageMax:  1212,
				SwingSpeed:     2,
				SwingDuration:  time.Second * 2,
				CritMultiplier: 2,
			},
			AutoSwingMelee: true})

		constrictorTentacle.EnableAutoAttacks(constrictorTentacle, core.AutoAttackOptions{
			MainHand: core.Weapon{
				BaseDamageMin:  430,
				BaseDamageMax:  603,
				SwingSpeed:     2,
				SwingDuration:  time.Second * 2,
				CritMultiplier: 2,
			},
			AutoSwingMelee: true})

		crusherTentacle.Ability = *crusherTentacle.GetOrRegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{SpellID: 65038},
			SpellSchool: core.SpellSchoolPhysical,
			ProcMask:    core.ProcMaskMeleeMHSpecial,
			Flags:       core.SpellFlagMeleeMetrics | core.SpellFlagIncludeTargetBonusDamage,

			Cast: core.CastConfig{
				DefaultCast: core.Cast{
					ChannelTime: time.Millisecond * 600,
					GCD:         time.Second * 0,
				},
				IgnoreHaste: true,
				CD: core.Cooldown{
					Timer:    crusherTentacle.NewTimer(),
					Duration: time.Second * 9,
				},
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				baseDamage := sim.Roll(1388, 1612)
				spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeMeleeSpecialHitAndCrit)
			},
		})

		corruptorTentacle.Ability = *corruptorTentacle.GetOrRegisterSpell(core.SpellConfig{
			ActionID:    core.ActionID{SpellID: 65035},
			SpellSchool: core.SpellSchoolNature,
			ProcMask:    core.ProcMaskSpellDamage,
			Flags:       core.SpellFlagNoOnCastComplete,

			Cast: core.CastConfig{
				DefaultCast: core.Cast{
					GCD: core.GCDDefault,
				},
				IgnoreHaste: true,
			},
			ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
				baseDamage := sim.Roll(988, 1328)
				spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeMagicHit)
			},
		})

		// constrictorTentacle.Ability = *constrictorTentacle.GetOrRegisterSpell(core.SpellConfig{
		// 	ActionID:    core.ActionID{SpellID: 65033},
		// 	SpellSchool: core.SpellSchoolPhysical,
		// 	ProcMask:    core.ProcMaskMeleeMHSpecial,
		// 	Flags:       core.SpellFlagNoOnCastComplete,

		// 	Cast: core.CastConfig{
		// 		DefaultCast: core.Cast{
		// 			GCD: core.GCDDefault,
		// 		},
		// 		IgnoreHaste: true,
		// 	},
		// 	Dot: core.DotConfig{
		// 		Aura: core.Aura{
		// 			Label: "Constricting Rends",
		// 		},
		// 		NumberOfTicks: 5,
		// 		TickLength:    time.Second * 3,
		// 		OnSnapshot: func(sim *core.Simulation, target *core.Unit, dot *core.Dot, _ bool) {
		// 			dot.SnapshotBaseDamage = 150
		// 		},
		// 		OnTick: func(sim *core.Simulation, target *core.Unit, dot *core.Dot) {
		// 			dot.CalcAndDealPeriodicSnapshotDamage(sim, target, dot.OutcomeTick)
		// 		},
		// 	},

		// 	ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
		// 		result := spell.CalcOutcome(sim, target, spell.OutcomeMeleeSpecialHit)
		// 		if result.Landed() {
		// 			spell.Dot(target).ApplyOrReset(sim)
		// 		}
		// 		spell.DealOutcome(sim, result)
		// 	},
		// })

		summon := character.GetOrRegisterSpell(core.SpellConfig{
			ActionID: actionID,
			Cast: core.CastConfig{
				CD: core.Cooldown{
					Timer:    character.NewTimer(),
					Duration: time.Minute * 1,
				},
			},
			ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
				tentacleSpawnRNG := sim.RandomFloat("Tentacle Spawn RNG")

				if tentacleSpawnRNG <= 0.33 {
					crusherTentacle.EnableWithTimeout(sim, crusherTentacle, time.Second*40)
				} else if tentacleSpawnRNG > 0.33 && tentacleSpawnRNG <= 0.66 {
					corruptorTentacle.EnableWithTimeout(sim, corruptorTentacle, time.Second*40)
				} else {
					constrictorTentacle.EnableWithTimeout(sim, constrictorTentacle, time.Second*40)
				}
			},
		})
		character.AddMajorCooldown(core.MajorCooldown{
			Spell:    summon,
			Priority: core.CooldownPriorityLow, // Use low prio so other actives get used first.
			Type:     core.CooldownTypeDPS,
		})

	})
}

type TentaclePet struct {
	core.Pet
	TentacleType byte

	Ability core.Spell
}

func (tentacle *TentaclePet) GetPet() *core.Pet {
	return &tentacle.Pet
}

func (tentacle *TentaclePet) Initialize() {
}

func (tentacle *TentaclePet) Reset(_ *core.Simulation) {
}

func (tentacle *TentaclePet) OnGCDReady(sim *core.Simulation) {
	if tentacle.Ability.IsReady(sim) {
		tentacle.Ability.Cast(sim, tentacle.CurrentTarget)
	} else {
		tentacle.DoNothing()
	}
}

var tentacleBaseStats = stats.Stats{
	stats.Strength:  0,
	stats.Agility:   0,
	stats.Stamina:   1,
	stats.Intellect: 0,
	stats.Spirit:    0,
	stats.MeleeCrit: 5 * core.CritRatingPerCritChance,
	stats.MeleeHit:  5 * core.MeleeHitRatingPerHitChance,
	stats.Expertise: 0,
}
