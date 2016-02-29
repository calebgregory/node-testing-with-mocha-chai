'use strict'

const { expect, spy, game } = require('../setup')

module.exports = {
  takesTwoPlayers: () => {
    const playerOne = game.player({ name: 'BARB', energyLevel: 10 })
    const playerTwo = game.player({ name: 'GARG', energyLevel: 10 })

    const _attack = spy(game.attack)
    const action = _attack(playerOne, playerTwo)

    expect(action).to.be.ok
    expect(_attack).to.have.been.called.with(playerOne, playerTwo)
  },

  reducesPoints: () => {
    const playerOne = game.player({ name: 'BARB', energyLevel: 10 })
    const playerTwo = game.player({ name: 'GARG', energyLevel: 10 })

    const idTwo = playerTwo._id

    const nextState = game.attack(playerOne, playerTwo)

    expect(nextState[idTwo]['energyLevel']).to.equal(9)
  },

  returnsTwoPlayers: () => {
    const playerOne = game.player({ name: 'BARB', energyLevel: 10 })
    const playerTwo = game.player({ name: 'GARG', energyLevel: 10 })

    const idOne = playerOne._id
    const idTwo = playerTwo._id

    const nextState = game.attack(playerOne, playerTwo)

    expect(nextState).to.have.property(idOne)
    expect(nextState).to.have.property(idTwo)
  }
}
