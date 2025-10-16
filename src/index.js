// Vu Truong Anh
// truonganhvu205@gmail.com

const {connectDatabases, app} = require('./app')
const {serverPort} = require('./configs')

connectDatabases()

app.listen(serverPort, () => {
    console.log(`App listening on port ${serverPort}`)
})
