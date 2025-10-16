const notFoundHandler = require('./errors/notFoundHandler.middleware')
const errorHandler = require('./errors/errorHandler.middleware')

const errorMiddlewares = {notFoundHandler, errorHandler}

module.exports = errorMiddlewares
