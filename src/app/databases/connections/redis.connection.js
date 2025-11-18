const {redisUri} = require('../../../configs')
const redis = require('redis')
let client

async function connectRedis() {
  if (!redisUri) {
    console.error('Redis URL is not defined!')
    process.exit(1)
  }

  try {
    client = redis.createClient({
      url: redisUri,
    })

    client.on('error', (err) => {
      console.error('Redis connection error:', err);
    })

    client.on('connect', () => {
      console.log('Connected to Redis successfully!');
    })

    await client.connect()
    return client

  } catch (err) {
    console.error('Failed to connect to Redis:', err.message || err);
    process.exit(1)
  }
}

module.exports = { connectRedis, client }
