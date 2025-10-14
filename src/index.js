// Vu Truong Anh
// truonganhvu205@gmail.com

const app = require('./app')
const {connectMongoDb, connectPostgreDb} = require('./app/database')
const {serverPort} = require('./config')

;(async() => {
    try{
        await Promise.all([
            connectMongoDb(),
            connectPostgreDb,
        ])
        console.log('All databases connected successfully!')
    } catch(err) {
        console.error('Databases connection failed:', err.message)
        process.exit(1)
    }
})()

app.listen(serverPort, () => {
    console.log(`App listening on port ${serverPort}`)
})
