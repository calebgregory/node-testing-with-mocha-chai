'use strict'

const { expect, request } = require('../../setup')

module.exports = {
  200: (done) => {
    request
      .post('/newgame')
      .expect(200)
      .end(done)
  },

  json: (done) => {
    request
      .post('/newgame')
      .expect('Content-Type', /json/)
      .end(done)
  },

  gameId: (done) => {
    request
      .post('/newgame')
      .end((err, res) => {
        expect(res.body).to.have.property('gameId')
        done()
      })
  }
}
