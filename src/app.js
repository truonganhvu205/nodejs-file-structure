const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const setupRoutes = require('./app/routes')
const methodOverride = require('method-override')
// const {helpers} = require('./utils')
const {notFoundHandler, errorHandler} = require('./app/middlewares')
const {connectMongoDb, connectPostgreSql} = require('./app/databases')

const app = express()

async function connectDatabases() {
    try{
        await Promise.all([
            connectMongoDb(),
            connectPostgreSql,
        ])
        console.log('All databases connected successfully!')
    } catch(err) {
        console.error('Databases connection failed:', err.message)
        process.exit(1)
    }
}

app.use(morgan('combined'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
    extname: '.hbs', 
    // helpers, 
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
app.use(express.static('public'))

setupRoutes(app)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = {connectDatabases, app}
