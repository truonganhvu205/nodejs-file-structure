const errorHandler = require('./errors/errorHandler.middleware')
const notFoundHandler = require('./errors/notFoundHandler.middleware')

const errorMiddlewares = {errorHandler, notFoundHandler}

module.exports = errorMiddlewares
