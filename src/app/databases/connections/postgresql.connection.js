const pgp = require('pg-promise')()
const {postgreSqlUri} = require('../../../configs')

const connectPostgreSql = pgp(postgreSqlUri)

connectPostgreSql.connect()
  .then(obj => {
    console.log('Connected to PostgreSQL successfully!')
    obj.done()
  })
  .catch(err => {
    if(err instanceof Error) {
        console.error('PostgreSQL connection failed:', err.message)
    } else {
        console.error('PostgreSQL connection failed:', err)
    }
    process.exit(1)
  })

module.exports = connectPostgreSql
