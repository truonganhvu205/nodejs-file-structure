const dotenv = require('dotenv')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const envFile = `.env.${env}`
dotenv.config({path: path.resolve(process.cwd(), envFile)})

const envConfigs = {
    env,
    serverPort: process.env.PORT || 3000,
    mongoDbUri: process.env.MONGODB_URI || '',
    postgreSqlUri: process.env.POSTGRESQL_URI || '',
    isDev: env === 'development',
    isProd: env === 'production',
}

module.exports = envConfigs
