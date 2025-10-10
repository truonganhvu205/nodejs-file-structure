function errorHandler(err, req, res, next) {
    const status = err.status || 500
    const message = err.message || 'Internal Server Error'
    const isDev = process.env.NODE_ENV === 'development'

    res.status(status).render('error', {
        title: `${status}`,
        message,
        stack: isDev ? err.stack : null,
        isDev,
    })
}

module.exports = errorHandler
