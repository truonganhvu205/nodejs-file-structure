const siteRouter = require('./site.routes')

function setupRoutes(app) {
    app.use('/', siteRouter)
}

module.exports = setupRoutes
