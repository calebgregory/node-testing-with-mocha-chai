'use strict'

describe('models', () => {
  describe('Player', () => {
    beforeEach(require('./models/setup')['cleanPlayers'])

    describe('create', () => {
      const test = require('./models/Player/create')

      it('creates a row in the Player database', test['newRow'])
      it('returns the database id of the Player row', test['returnsId'])
    })
  })
})
