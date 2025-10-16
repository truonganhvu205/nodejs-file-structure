function notFoundHandler(req, res, next) {
    res.status(404).render('errors/404error' ,{
        title: false,
        message: 'Route not found.',
    })
}

module.exports = notFoundHandler
