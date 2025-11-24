const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const path = require('path')
const setupRoutes = require('./app/routes')
const methodOverride = require('method-override')
const {defaultLayout, notFoundHandler, errorHandler} = require('./app/middlewares')
const {connectPostgreSql, connectMongoDb, connectRedis} = require('./app/databases')

const app = express()

async function connectDatabases() {
    try{
        await Promise.all([
            connectPostgreSql,
            connectMongoDb(),
            connectRedis(),
        ])
        console.log('All databases connected successfully!')
    } catch(err) {
        if(err instanceof Error) {
            console.error('Databases connection failed:', err.message)
        } else {
            console.error('Databases connection failed:', err)
        }
        process.exit(1)
    }
}

app.use(morgan('combined'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.use(defaultLayout)

app.engine('.hbs', engine({
    extname: '.hbs',
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

app.use(express.static('public'))

setupRoutes(app)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = {connectDatabases, app}
