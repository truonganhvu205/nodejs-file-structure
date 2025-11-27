const envConfigs = require('../../../configs')

function errorHandler(err, req, res, next) {
    const isDev = envConfigs?.isDev ?? false
    const statusCode = err.status || 500
    const message = isDev ? err.message : 'Internal Server Error'
    const stack = isDev ? err.stack : ''

    res.status(statusCode).render('errors/500error', {
        title: `${statusCode}`,
        message,
        stack,
        isDev,
        showHeader: false,
        showFooter: false,
    })
}

module.exports = errorHandler
