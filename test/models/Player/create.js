'use strict'

const { expect, models, query, TEST_NAME } = require('../../setup')

module.exports = {
  newRow: (done) => {
    const name = TEST_NAME
    const energyLevel = 10
    models.Player.create({ name, energyLevel })
      .then(
        () => {
          query([`SELECT * FROM Players WHERE name = $1`, [ name ]])
            .then(
              (result) => {
                expect(result.rows[0]['name']).to.equal(name)
                expect(result.rows[0]['energy_level']).to.equal(energyLevel)
                done()
              }
            )
        }
      )
      .catch( done )
  }
}
