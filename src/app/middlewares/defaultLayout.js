function defaultLayout(req, res, next) {
    res.locals.showHeader = true
    res.locals.showFooter = true
    res.locals.layout = 'main'

    /* const hideHeaderRoutes = ['/error']
    if (hideHeaderRoutes.some(route => req.path.startsWith(route))) {
        res.locals.showHeader = false
        res.locals.showFooter = true
    } */

    next()
}

module.exports = defaultLayout
