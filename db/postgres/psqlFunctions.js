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
  }


}

// 'SELECT games.*, gameGenres.genreId, gameLanguages.languageId \
//     FROM games, genres, languages\
//     INNER JOIN gameGenres\
//       ON gameGenres.gameId = $1\
//     Inner JOIN gameLanguages\
//       ON gameLanguages.gameId = $1\
//     WHERE games.id = $1'