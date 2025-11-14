const dotenv = require('dotenv')
const path = require('path')

const env = process.env.NODE_ENV || 'development'

const defaultEnvFile = '.env'
const envFile = `.env.${env}`

dotenv.config({path: path.resolve(process.cwd(), defaultEnvFile), override: false})
dotenv.config({path: path.resolve(process.cwd(), envFile)})

const envConfigs = {
    env,
    serverPort: process.env.PORT || 3000,
    postgreSqlUri: process.env.POSTGRESQL_URI || '',
    mongoDbUri: process.env.MONGODB_URI || '',
    redisUri: process.env.REDIS_URI || '',
    isDev: env === 'development',
    isProd: env === 'production',
}

module.exports = envConfigs
