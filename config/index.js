'use strict'

const config = {
  development: './env/dev',
  production: './env/prod',
  test: './env/test'
}

const { NODE_ENV = 'development' } = process.env

module.exports = require(config[NODE_ENV])
