const pgp = require('pg-promise')()
const {postgreUri} = require('../../../config')

const connectPostgreDb = pgp(postgreUri)

connectPostgreDb.connect()
  .then(obj => {
    console.log('Connected to PostgreSQL successfully!')
    obj.done()
  })
  .catch(err => {
    console.error('PostgreSQL connection failed:', err.message)
  })

module.exports = connectPostgreDb
