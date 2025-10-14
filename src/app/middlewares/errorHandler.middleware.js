function errorHandler(err, req, res, next) {
    const statusCode = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(statusCode).render('error', {
        title: `${statusCode}`,
        message,
        stack: err.stack,
    })
}

module.exports = errorHandler
