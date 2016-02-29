'use strict'

const uuid = require('node-uuid')

function Player(name, energyLevel = 10) {
  this._id = uuid.v4()
  this.name = name
  this.energyLevel = energyLevel
}

module.exports = (init) => new Player(init.name, init.energyLevel)
