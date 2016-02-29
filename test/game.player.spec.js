'use strict'

describe('game', () => {
  describe('player', () => {
    const test = require('./game/player')

    it('creates a player with a name', test['name'])
    it('creates a player with an id, called "_id"', test['id'])
    it('creates a player with an energy level', test['energyLevel'])
    it('creates a player with a default energy level of 10 if none provided', test['energyLevelDefault'])
  })
})
