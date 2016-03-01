'use strict'

module.exports = (pg) => (connectionString) => (init) => new Promise((resolve, reject) => {
  let client = new pg.Client(connectionString)
  client.connect()

  const callback = (error, result) => {
    client.end()
    if(error) return reject(error)
    const { id } = result.rows[0]
    return resolve(id)
  }

  let query = client.query(
    `
    INSERT INTO Games (
      player_one,
      player_two
    ) VALUES (
      $1,
      $2
    ) RETURNING id;
    `,
    [ init.playerOne._id, init.playerTwo._id ],
    callback
  )
})
