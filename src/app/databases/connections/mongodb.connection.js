const mongoose = require('mongoose')
const {mongoDbUri} = require('../../../configs')

async function connectMongoDb() {
    if(!mongoDbUri) {
        console.error('MongoDB URI is not defined!')
        process.exit(1)
    }

    try{
        await mongoose.connect(mongoDbUri)
        console.log('Connected to MongoDB successfully!')
    } catch(err) {
        if(err instanceof Error) {
            console.error('MongoDB connection failed:', err.message)
        } else {
            console.error('MongoDB connection failed:', err)
        }
        process.exit(1)
    }
}

module.exports = connectMongoDb
