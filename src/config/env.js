require('dotenv').config()

const port = process.env.PORT
const mongoDbUri = process.env.MONGODB_URI

module.exports = {port, mongoDbUri}
