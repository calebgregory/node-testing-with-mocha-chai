'use strict'

const pg = require('pg')
const { DATABASE_URL } = require('../../config')

module.exports = {
  Game: require('./Game')(pg),
  Player: require('./Player')(pg)(DATABASE_URL)
}
