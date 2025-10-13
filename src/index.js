// Vu Truong Anh
// truonganhvu205@gmail.com

const app = require('./app')
const {connectMongoDb} = require('./app/database')
const {serverPort} = require('./config')

;(async() => {
    try{
        await connectMongoDb()

        app.listen(serverPort, () => {
            console.log(`App listening on port ${serverPort}`)
        })
    } catch(err) {
        console.error('Failed to start server:', err.message)
        process.exit(1)
    }
})()
