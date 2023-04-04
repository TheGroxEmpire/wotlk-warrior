package warrior

import (
	"time"

	"github.com/wowsims/wotlk/sim/core"
)

func (warrior *Warrior) registerYogg0LTrinketCD() {
	actionID := core.ActionID{ItemID: 46312}

	warrior.Yogg0LTrinket = warrior.RegisterSpell(core.SpellConfig{
		ActionID: actionID,
		Cast: core.CastConfig{
			CD: core.Cooldown{
				Timer:    warrior.NewTimer(),
				Duration: time.Minute * 2,
			},
		},
		ApplyEffects: func(sim *core.Simulation, _ *core.Unit, _ *core.Spell) {
			tentacleSpawnRNG := sim.RandomFloat("Tentacle Spawn RNG")

			if tentacleSpawnRNG <= 0.33 {
				warrior.CrusherTentacle.EnableWithTimeout(sim, warrior.CrusherTentacle, time.Second*40)
			} else if tentacleSpawnRNG > 0.33 && tentacleSpawnRNG <= 0.66 {
				warrior.CorruptorTentacle.EnableWithTimeout(sim, warrior.CorruptorTentacle, time.Second*40)
			} else {
				warrior.ConstrictorTentacle.EnableWithTimeout(sim, warrior.ConstrictorTentacle, time.Second*40)
			}
		},
	})
	warrior.AddMajorCooldown(core.MajorCooldown{
		Spell:    warrior.Yogg0LTrinket,
		Priority: core.CooldownPriorityLow, // Use low prio so other actives get used first.
		Type:     core.CooldownTypeDPS,
	})
}
