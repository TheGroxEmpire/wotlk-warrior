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

var SIM = core.NewSim(&DEFAULT_RSR)

func main() {}
