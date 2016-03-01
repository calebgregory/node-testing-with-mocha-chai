'use strict'

const chai = require('chai')
chai.use(require('chai-spies'))

const supertest = require('supertest')
const app = require('../../app')

const request = supertest.agent(app.listen())

const { DATABASE_URL } = require('../../config')

const game = require('../../lib/game')
require('./db')(DATABASE_URL)

module.exports = {
  expect: chai.expect,
  spy: chai.spy,
  request,
  game
}
