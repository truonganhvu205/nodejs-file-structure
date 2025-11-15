const siteRouter = require('./site.route')

function setupRoutes(app) {
    app.use('/', siteRouter)
}

module.exports = setupRoutes
