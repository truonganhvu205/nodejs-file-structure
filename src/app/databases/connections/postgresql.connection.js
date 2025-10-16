const pgp = require('pg-promise')()
const {postgreSqlUri} = require('../../../configs')

const connectPostgreSql = pgp(postgreSqlUri)

connectPostgreSql.connect()
  .then(obj => {
    console.log('Connected to PostgreSQL successfully!')
    obj.done()
  })
  .catch(err => {
    console.error('PostgreSQL connection failed:', err.message)
  })

module.exports = connectPostgreSql
