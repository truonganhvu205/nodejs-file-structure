const {redisUri} = require('../../../configs')
const redis = require('redis')

let client

async function connectRedis() {
  if (!redisUri) {
    console.error('Redis URI is undefined!')
    process.exit(1)
  }

  try {
    client = redis.createClient({url: redisUri})

    client.on('error', (err) => {
      console.error('Redis connection error:', err);
    })

    client.on('connect', () => {
      console.log('Connected to Redis successfully!');
    })

    await client.connect()
    return client
  } catch (err) {
    if(err instanceof Error) {
        console.error('Redis connection failed:', err.message)
    } else {
        console.error('Redis connection failed:', err)
    }
    process.exit(1)
  }
}

module.exports = {connectRedis, client}
