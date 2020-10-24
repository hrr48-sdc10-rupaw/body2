const games = require('./indexCassandra.js')


module.exports = {
  getOne: (params, callback) => {
    const queryString = 'SELECT * FROM games.game WHERE id = ?'
    games.execute(queryString, params, { prepare : true }, (err, results) => {
      if (err) {
        throw err
      } else {
        callback(null, results)
      }
    })
  }
}