const connectMongoDb = require('./mongodb.connection')
const connectPostgreSql = require('./postgresql.connection')

const dbConnection = {
    connectMongoDb, 
    connectPostgreSql, 
}

module.exports = dbConnection
