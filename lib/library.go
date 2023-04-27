package main

import "C"
import (
	"github.com/wowsims/wotlk/sim/core"
	"github.com/wowsims/wotlk/sim/core/proto"
)

var DEFAULT_RSR = proto.RaidSimRequest{
	Raid:       &proto.Raid{},
	Encounter:  &proto.Encounter{},
	SimOptions: &proto.SimOptions{},
}

// export run
func run() bool {
	sim := core.NewSim(&DEFAULT_RSR)
	sim.Reset()
	return true
}

func main() {}
