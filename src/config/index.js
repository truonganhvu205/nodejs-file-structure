const {connect} = require('./db')
const {port} = require('./env')

module.exports = {
    appPort: {port},
    appDb: {connect},
}
