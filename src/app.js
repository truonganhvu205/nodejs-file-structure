const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const path = require('path')
const setupRoutes = require('./routes')
const methodOverride = require('method-override')
const errorHandler = require('./middlewares/errorHandler.middleware')

const app = express()

app.use(morgan('combined'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(methodOverride('_method'))

app.engine('.hbs', engine({
    extname: '.hbs',
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))
app.use(express.static(path.join(__dirname, 'public')))

setupRoutes(app)
app.use(errorHandler)

module.exports = app
