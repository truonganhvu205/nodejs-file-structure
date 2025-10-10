const siteRouter = require('./site')

function setupRoutes(app) {
    app.use('/', siteRouter)
}

module.exports = setupRoutes
