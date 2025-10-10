const Test = require('../models/test.model')

class SiteController {
    // GET /
    index(req, res, next) {
        res.render('home')
    }
}

module.exports = new SiteController()
