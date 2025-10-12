require('dotenv').config()

module.exports = {
    port: process.env.PORT,
    mongoDbUri: process.env.MONGODB_URI,
}
