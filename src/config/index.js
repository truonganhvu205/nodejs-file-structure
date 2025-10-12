const {connect} = require('./database')
const {port} = require('./env')

module.exports = {
    appPort: {port},
    appDb: {connect},
}
