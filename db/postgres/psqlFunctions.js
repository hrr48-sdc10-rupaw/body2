const db = require('./indexPostgreSQL.js')

module.exports = {

  //get all

  getOne: (params, callback) => {
    var queryString =
    'SELECT games.*, gameGenres.genreId, gameLanguages.languageId \
      FROM games\
      INNER JOIN gameGenres\
        ON gameGenres.gameId = $1\
      Inner JOIN gameLanguages\
        ON gameLanguages.gameId = $1\
        WHERE games.id = $1\
        ORDER by gameGenres.genreId';


    db.query(queryString, params, (err, results) => {
      if (err) {
        throw err;
      } else {
        callback(null, results);
      }
    })
  }

  // //get 1 game by 'id'

  // getOneGame: ,

  // //post 1 new game

  // postGame: ,

  // //update(put) game with new data

  // updateGame: ,

  // //delete 1 game

  // deleteOneGame:

}

// 'SELECT games.*, gameGenres.genreId, gameLanguages.languageId \
//     FROM games, genres, languages\
//     INNER JOIN gameGenres\
//       ON gameGenres.gameId = $1\
//     Inner JOIN gameLanguages\
//       ON gameLanguages.gameId = $1\
//     WHERE games.id = $1'