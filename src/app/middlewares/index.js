const errorMiddlewares = require('./errors')
const defaultLayout = require('./defaultLayout')

module.exports = {
    defaultLayout,
    ...errorMiddlewares,
}
