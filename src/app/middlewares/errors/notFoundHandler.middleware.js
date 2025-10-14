function notFoundHandler(req, res, next) {
    res.status(404).json({
        success: false,
        message: 'Not found.',
    })
}

module.exports = notFoundHandler
