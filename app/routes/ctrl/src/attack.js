'use strict'

module.exports = (req, res) => {
  const { attacker, attackee } = req.query
  if(!(attacker && attackee)) {
    return res.status(417).send(new Error('No attackee or attacker sent!'))
  }

  return res.status(200).json({ 'abc': '', '123': '' })
}
