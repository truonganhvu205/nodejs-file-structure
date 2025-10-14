require('dotenv').config()

const env = {
    serverPort: process.env.PORT || 3000,
    mongoDbUri: process.env.MONGODB_URI || '',
    postgreUri: process.env.POSTGRE_URI || '',
}

module.exports = env
