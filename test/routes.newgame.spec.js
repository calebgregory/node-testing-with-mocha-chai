'use strict'

describe('routes', () => {
  describe('/newgame', () => {
    describe('POST', () => {
      const test = require('./routes/newgame/post.js')

      it('returns a 200 if successful', test[200])
      it('returns json', test['json'])
      it('returns a game id', test['gameId'])
    })
  })
})
