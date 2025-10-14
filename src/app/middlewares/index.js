const errorHandler = require('./errors/errorHandler.middleware')
const notFoundHandler = require('./errors/notFoundHandler.middleware')

module.exports = {
    errorHandler,
    notFoundHandler,
}
