'use strict'

const { expect, game } = require('../setup')

module.exports = {
  name: () => {
    const name = 'BARB'
    const newPlayer = game.player({ name })

    expect(newPlayer.name).to.equal(name)
  },

  id: () => {
    const name = 'BARB'
    const newPlayer = game.player({ name })

    expect(newPlayer).to.have.property('_id')
  },

  energyLevel: () => {
    const energyLevel = 666
    const newPlayer = game.player({ name: 'SATAN', energyLevel })

    expect(newPlayer.energyLevel).to.equal(energyLevel)
  },

  energyLevelDefault: () => {
    const defaultLevel = 10
    const newPlayer = game.player({ name: 'CARB' })

    expect(newPlayer.energyLevel).to.equal(defaultLevel)
  }
}
