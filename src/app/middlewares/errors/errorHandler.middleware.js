const {config} = require('../../../configs')

function errorHandler(err, req, res, next) {
    const statusCode = err.status || 500
    const message = config.env === 'production' ? 'Internal Server Error' : err.message

    res.status(statusCode).render('error', {
        title: `${statusCode}`,
        message,
        ...(process.env.NODE_ENV !== 'production' && { stack: err.stack }),
    })
}

module.exports = errorHandler
