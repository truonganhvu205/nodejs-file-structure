const mongoose = require('mongoose')
const {MONGODB_URI} = require('../env')

async function connect(req, res, next) {
    if(!MONGODB_URI) {
        console.error('MongoDB URI is not defined!')
        process.exit(1)
    }

    try{
        await mongoose.connect(MONGODB_URI)
        console.log('Connected to MongoDB successfully!')
    } catch(err) {
        if (err instanceof Error) {
            console.error('MongoDB connection failed:', err.message)
        } else {
            console.error('MongoDB connection failed:', err)
        }
        
        process.exit(1)
    }
}

module.exports = {connect}
