'use strict'

module.exports = (pg) => (connectionString) => ({
  create: require('./src/create')(pg)(connectionString)
})
