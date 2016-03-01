'use strict'

const express = require('express')

const { PORT, IS_A_TEST } = require('../config')

const app = express()
app.set('port', PORT || 3000)

app.use(require('./routes'))

if (!IS_A_TEST) {
  const server = app.listen(app.get('port'), () => {
    const { port } = server.address()
    console.log(`(>'')>*<(''<) ~ app listening on http://localhost:${port}`)
  })
}

module.exports = app
