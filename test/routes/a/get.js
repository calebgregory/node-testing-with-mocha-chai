'use strict'

const { request } = require('../../setup')

module.exports = {
  200: (done) => {
    request
      .get('/a')
      .expect(200)
      .end(done)
  }
}
