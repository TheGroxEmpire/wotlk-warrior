package warrior

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/stats"
)

func (warrior *Warrior) NewCrusherTentacle() *TentaclePet {
	crusherTentacle := &TentaclePet{
		Pet: core.NewPet("Vanquished Clutches of Yogg Saron (Crusher)", &warrior.Character, tentacleBaseStats, func(ownerStats stats.Stats) stats.Stats {
			return stats.Stats{}
		}, nil, false, true),
		Owner: warrior,
	}

	crusherTentacle.EnableAutoAttacks(crusherTentacle, core.AutoAttackOptions{
		MainHand: core.Weapon{
			BaseDamageMin:  842,
			BaseDamageMax:  1212,
			SwingSpeed:     2,
			SwingDuration:  time.Second * 2,
			CritMultiplier: 2,
		},
		AutoSwingMelee: true})

	crusherTentacle.Ability = crusherTentacle.RegisterSpell(core.SpellConfig{
		ActionID:         core.ActionID{SpellID: 65038},
		SpellSchool:      core.SpellSchoolPhysical,
		ProcMask:         core.ProcMaskMeleeMHSpecial,
		Flags:            core.SpellFlagMeleeMetrics | core.SpellFlagIncludeTargetBonusDamage,
		CritMultiplier:   2,
		DamageMultiplier: 1,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				CastTime: time.Millisecond * 600,
				GCD:      time.Second * 9,
			},
			IgnoreHaste: true,
		},
		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := sim.Roll(1388, 1612)
			spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeMeleeSpecialHitAndCrit)
		},
	})

	warrior.AddPet(crusherTentacle)

	return crusherTentacle
}

func (warrior *Warrior) NewCorruptorTentacle() *TentaclePet {
	corruptorTentacle := &TentaclePet{
		Pet: core.NewPet("Vanquished Clutches of Yogg Saron (Corruptor)", &warrior.Character, tentacleBaseStats, func(ownerStats stats.Stats) stats.Stats {
			return stats.Stats{}
		}, nil, false, true),
		Owner: warrior,
	}

	corruptorTentacle.Ability = corruptorTentacle.RegisterSpell(core.SpellConfig{
		ActionID:         core.ActionID{SpellID: 65035},
		SpellSchool:      core.SpellSchoolNature,
		ProcMask:         core.ProcMaskSpellDamage,
		Flags:            core.SpellFlagNoOnCastComplete,
		DamageMultiplier: 1,
		ThreatMultiplier: 1,

		Cast: core.CastConfig{
			DefaultCast: core.Cast{
				GCD: time.Millisecond * 3000,
			},
			IgnoreHaste: true,
		},

		ApplyEffects: func(sim *core.Simulation, target *core.Unit, spell *core.Spell) {
			baseDamage := sim.Roll(988, 1328)
			spell.CalcAndDealDamage(sim, target, baseDamage, spell.OutcomeMagicHit)
		},
	})

	warrior.AddPet(corruptorTentacle)

	return corruptorTentacle
}

func (warrior *Warrior) NewConstrictorTentacle() *TentaclePet {
	constrictorTentacle := &TentaclePet{
		Pet: core.NewPet("Vanquished Clutches of Yogg Saron (Constrictor)", &warrior.Character, tentacleBaseStats, func(ownerStats stats.Stats) stats.Stats {
			return stats.Stats{}
		}, nil, false, true),
		Owner: warrior,
	}
	constrictorTentacle.EnableAutoAttacks(constrictorTentacle, core.AutoAttackOptions{
		MainHand: core.Weapon{
			BaseDamageMin:  430,
			BaseDamageMax:  603,
			SwingSpeed:     2,
			SwingDuration:  time.Second * 2,
			CritMultiplier: 2,
		},
		AutoSwingMelee: true})

	// constrictorTentacle.Ability = constrictorTentacle.RegisterSpell(core.SpellConfig{
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

	warrior.AddPet(constrictorTentacle)

	return constrictorTentacle
}

type TentaclePet struct {
	core.Pet
	Owner   *Warrior
	Ability *core.Spell
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
	stats.Strength:  1,
	stats.Agility:   1,
	stats.Stamina:   1,
	stats.Intellect: 1,
	stats.Spirit:    1,
	stats.MeleeCrit: 5 * core.CritRatingPerCritChance,
	stats.MeleeHit:  0 * core.MeleeHitRatingPerHitChance,
	stats.Expertise: 0,
}
