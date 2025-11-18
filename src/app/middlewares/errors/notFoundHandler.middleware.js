function notFoundHandler(req, res, next) {
    res.status(404).render('errors/404' ,{
        title: false,
        message: 'Route not found.',
    })
}

module.exports = notFoundHandler
