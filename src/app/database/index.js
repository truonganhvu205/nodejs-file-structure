const connectMongoDb = require('./connections/mongo_db.js')
const connectPostgreDb = require('./connections/postgre_db.js')

module.exports = {connectMongoDb, connectPostgreDb}
