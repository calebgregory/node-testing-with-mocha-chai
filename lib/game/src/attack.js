'use strict'

module.exports = (attacker, attackee) => {
  const energyLevel = attackee.energyLevel - 1
  const newAttackee = Object.assign({}, attackee, { energyLevel })

  return {
    [attacker._id]: attacker,
    [attackee._id]: newAttackee
  }
}
