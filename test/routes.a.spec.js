'use strict'

describe('/a', () => {
  describe('GET', () => {
    const test = require('./routes/a/get.js')

    it('returns a 200', test[200])
  })
})
