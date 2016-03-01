'use strict'

const { query, TEST_NAME } = require('../setup')

module.exports = {
  cleanPlayers: (done) => {
    query([`DELETE FROM Players WHERE name = $1`, [ TEST_NAME ]]).then(() => done())
  }
}
