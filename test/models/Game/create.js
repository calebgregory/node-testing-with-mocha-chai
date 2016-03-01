'use strict'

const { expect, models, query, TEST_NAME } = require('../../setup')

module.exports = {
  newRow: (done) => {
    const name = TEST_NAME
    const energyLevel = 10

    let playerIds = []
    models.Player.create({ name, energyLevel })
      .then(
        (id) => {
          playerIds = playerIds.concat(id)
          return models.Player.create({ name, energyLevel })
        }
      ).then(
        (id) => {
          playerIds = playerIds.concat(id)
          return models.Game.create({ playerOne: { _id: playerIds[0] }, playerTwo: { _id: playerIds[1] } })
        }
      ).then(
        () => {
          query([`SELECT * FROM Games ORDER BY id DESC LIMIT 1;`])
            .then(
              (result) => {
                expect(result.rows[0]['player_one']).to.equal(playerIds[0])
                expect(result.rows[0]['player_two']).to.equal(playerIds[1])
                done()
              }
            )
        }
      ).catch( done )
  },

  returnsId: (done) => {
    const name = TEST_NAME
    const energyLevel = 10

    let playerIds = []
    models.Player.create({ name, energyLevel })
      .then(
        (id) => {
          playerIds = playerIds.concat(id)
          return models.Player.create({ name, energyLevel })
        }
      ).then(
        (id) => {
          playerIds = playerIds.concat(id)
          return models.Game.create({ playerOne: { _id: playerIds[0] }, playerTwo: { _id: playerIds[1] } })
        }
      ).then(
        (id) => {
          expect(id).to.be.a('number')
          done()
        }
      ).catch( done )
  }

}
