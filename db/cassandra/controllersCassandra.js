const db = require('./cassandraFunctions.js')


module.exports = {
  getOneGame: (req, res) => {
    console.time();
    var reqId = [req.query.id];
    db.getOne(reqId, (err, results) => {
      if (err) {
        console.log(results)
        throw err;
      } else {
        // console.log(results.rows[0])
        // const objParser = function(array) {
        //   var newArray = [];
        //   for (var i = 0; i < array.length; i++) {
        //     var currentObj = array[i];
        //     newArray.push(JSON.parse(currentObj))
        //   }
        //   return newArray;
        // }
        game = {
          id: results.rows[0].id,
          titlecover: results.rows[0].titlecover,
          title: results.rows[0].title,
          price: results.rows[0].price,
          aboutInfo: results.rows[0].aboutInfo,
          os: results.rows[0].os,
          processor: results.rows[0].processor,
          memory: results.rows[0].memory,
          graphics: results.rows[0].graphics,
          directX: results.rows[0].directX,
          storage: results.rows[0].storage,
          genre: results.rows[0].genre.split(','),
          developer: results.rows[0].developer,
          publisher: results.rows[0].publisher,
          releaseDate: results.rows[0].releaseDate,
          steamAcheivments: results.rows[0].steamacheivments.split(','),
          languages: results.rows[0].languages.split('*'),
          achievements: results.rows[0].achievements,
          partialControllersupport: results.rows[0].partialControllersupport,
          remotePlay : results.rows[0].remotePlay,
          moreLikeThis: results.rows[0].morelikethis.split('*')
        }
        // game.languages = objParser(game.languages);
        // game.moreLikeThis = objParser(game.moreLikeThis);
        res.status(200).json(game);
        res.end(console.log('Game Recieved'))
        console.timeEnd();
      }
    })
  }
}
