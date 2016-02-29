'use strict'

import express from 'express'

import { PORT, IS_A_TEST } from '../config'

const app = express()
app.set('port', PORT || 3000)

import routes from './routes'
app.use(routes)

if (!IS_A_TEST) {
  const server = app.listen(app.get('port'), () => {
    const { port } = server.address()
    console.log(`(>'')>*<(''<) ~ app listening on http://localhost:${port}`)
  })
}

module.exports = app
