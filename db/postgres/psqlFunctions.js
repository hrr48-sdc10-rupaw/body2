const db = require('./indexPostgreSQL.js')

module.exports = {

  //get all

  getOne: (params, callback) => {
    const queryString =
    'SELECT * FROM games WHERE id = $1';


    db.query(queryString, params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(null, results);
      }
    })
  },

  insertOne: (params, callback) => {
    const queryString = 'INSERT INTO games (id, titleCover, title, price, aboutInfo, requirements, genre, developer, publisher, releaseDate, steamAcheivments, languages, attributes, moreLikeThis) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)'
    db.query(queryString, params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(null,results)
      }
    })
  }
}

