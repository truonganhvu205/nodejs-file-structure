const connectMongoDb = require('./mongodb.connection')
const connectPostgreSql = require('./postgresql.connection')
const {connectRedis} = require('./redis.connection')

const dbConnection = {
    connectPostgreSql,
    connectMongoDb,
    connectRedis,
}

module.exports = dbConnection
