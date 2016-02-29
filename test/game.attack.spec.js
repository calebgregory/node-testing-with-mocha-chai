'use strict'

describe('game', () => {
  describe('attack', () => {
    const test = require('./game/attack')

    it('takes two players, an attackee and an attacker', test['takesTwoPlayers'])
    it('reduces the energy level of the attackee by one point', test['reducesPoints'])
    it('returns two players', test['returnsTwoPlayers'])
  })
})
