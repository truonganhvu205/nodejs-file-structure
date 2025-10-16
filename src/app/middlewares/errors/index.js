const notFoundHandler = require('./notFoundHandler.middleware')
const errorHandler = require('./errorHandler.middleware')

const errorMiddlewares = {notFoundHandler, errorHandler}

module.exports = errorMiddlewares
