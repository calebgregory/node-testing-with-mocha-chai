'use strict'

const chai = require('chai')
chai.use(require('chai-spies'))

const supertest = require('supertest')
const app = require('../../app')

const request = supertest.agent(app.listen())

module.exports = {
  expect: chai.expect,
  request
}
