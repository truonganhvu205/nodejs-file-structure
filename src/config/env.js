require('dotenv').config()

const env = {
    serverPort: process.env.PORT,
    mongoDbUri: process.env.MONGODB_URI,
}

module.exports = env
