// Vu Truong Anh
// truonganhvu205@gmail.com

const app = require('./app')
const {appDb, appPort} = require('./config')

appDb.connect()

app.listen(appPort.port, () => {
    console.log(`App listening on port ${appPort.port}`)
})
