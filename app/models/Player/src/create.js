'use strict'

module.exports = (pg) => (connectionString) => (init) => new Promise((resolve, reject) => {
  let client = new pg.Client(connectionString)
  client.connect()

  const callback = (error, result) => {
    client.end()
    if(error) return reject(error)
    return resolve(result)
  }

  let query = client.query(
    `
    INSERT INTO Players (
      name,
      energy_level
    ) VALUES (
      $1,
      $2
    )
    `,
    [ init.name, init.energyLevel ],
    callback
  )
})
