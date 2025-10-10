// Vu Truong Anh
// truonganhvu205@gmail.com

const app = require('./app')
const db = require('./config/db')
const { PORT } = require('./config/env')

db.connect()
app.listen(PORT)
