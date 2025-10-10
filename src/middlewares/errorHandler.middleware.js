function errorHandler(err, req, res, next) {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'

    res.status(status).render('error', {
        title: `${status}`,
        message,
        stack: err.stack,
    })
}

module.exports = errorHandler
