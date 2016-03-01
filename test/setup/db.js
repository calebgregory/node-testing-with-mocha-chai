'use strict'

const pg = require('pg')

const SETUP_DB = `
  CREATE TABLE IF NOT EXISTS Players (
    id PRIMARY KEY INT NOT NULL SERIAL,
    name VARCHAR(50) NOT NULL,
    energy_level INT NOT NULL
  );
  CREATE TABLE IF NOT EXISTS Games (
    id PRIMARY KEY INT NOT NULL SERIAL,
    player_one INT REFERENCES Players(id),
    player_two INT REFERENCES Players(id)
  );
`

module.exports = (connectionString) => {
  let client = new pg.Client(connectionString)
  client.connect()

  let query = client.query(SETUP_DB)
  query.on('end', () => client.end() )
}
