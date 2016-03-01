'use strict'

const { expect, request } = require('../../setup')

module.exports = {
  417: (done) => {
    request
      .post('/attack')
      .expect(417)
      .end(done)
  },

  200: (done) => {
    request
      .post('/attack', { attacker: 'abc', attackee: '123' })
      .expect(200)
      .end(done)
  },

  json: (done) => {
    request
      .post('/attack', { attacker: 'abc', attackee: '123' })
      .expect('Content-Type', /json/)
      .end(done)
  },

  newState: (done) => {
    request
      .post('/attack', { attacker: 'abc', attackee: '123' })
      .end((err, res) => {
        expect(res).to.have.property('abc')
        expect(res).to.have.property('123')
        done()
      })
  }
}
