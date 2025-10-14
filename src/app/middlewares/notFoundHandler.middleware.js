function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        message: 'Route not found',
    })
}

module.exports = notFoundHandler
