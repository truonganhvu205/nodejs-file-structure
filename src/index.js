// Vu Truong Anh
// truonganhvu205@gmail.com

const app = require('./app')
const db = require('./config/db')
const {port} = require('./config/env')

db.connect()
app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
