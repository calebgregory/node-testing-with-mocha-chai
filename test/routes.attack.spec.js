'use strict'

describe('routes', () => {
  describe('/attack', () => {
    describe('POST', () => {
      const test = require('./routes/attack/post.js')

      it('returns a 417 if no attacker or attackee provided', test[417])
      it('returns a 200 if successful', test[200])
      it('returns json if successful', test['json'])
      it('returns newState if successful', test['newState'])
    })
  })
})
