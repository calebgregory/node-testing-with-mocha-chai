'use strict'

const pg = require('pg')

const SETUP_DB = `
  CREATE TABLE IF NOT EXISTS Players (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    energy_level INT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS Games (
    id SERIAL PRIMARY KEY,
    player_one INT REFERENCES Players(id) ON DELETE CASCADE,
    player_two INT REFERENCES Players(id) ON DELETE CASCADE
  );
`

module.exports = {
  setup: (connectionString) => {
    let client = new pg.Client(connectionString)
    client.connect()

    let query = client.query(SETUP_DB)
    query.on('error', (error) => console.error(error))
    query.on('end', () => client.end() )
  },

  query: (connectionString) => (queryArr) => new Promise((resolve, reject) => {
    let client = new pg.Client(connectionString)
    client.connect()

    let query = client.query(queryArr[0], queryArr[1] || [], (error, result) => {
      if (error) return reject(error)
      return resolve(result)
    })
  })
}
