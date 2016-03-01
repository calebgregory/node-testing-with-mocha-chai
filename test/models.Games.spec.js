'use strict'

describe('models', () => {
  describe('Game', () => {
    beforeEach(require('./models/setup')['cleanGames'])

    describe('create', () => {
      const test = require('./models/Game/create')

      it('creates a row in the Game database', test['newRow'])
      it('returns the database id of the Game row', test['returnsId'])
    })
  })
})
