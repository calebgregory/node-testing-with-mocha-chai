'use strict'

const chai = require('chai')
chai.use(require('chai-spies'))

const supertest = require('supertest')
const app = require('../../app')
const request = supertest.agent(app.listen())

const { DATABASE_URL } = require('../../config')
const db = require('./db')
db.setup(DATABASE_URL)

const game = require('../../lib/game')
const models = require('../../app/models')

module.exports = {
  expect: chai.expect,
  spy: chai.spy,
  request,
  query: db.query(DATABASE_URL),
  TEST_NAME: 'T7E3S5T7',
  game,
  models
}
