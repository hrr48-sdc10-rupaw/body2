const db = require('./psqlFunctions.js');


module.exports = {
  getOneGame: (req, res) => {
    console.time();
    var reqId = [req.query.id];
    db.getOne(reqId, (err, results) => {
      if (err) {
        throw err;
      } else {
        // console.log(results.rows[0])
        const objArrayParser = function(array) {
          var newArray = [];
          for (var i = 0; i < array.length; i++) {
            var currentObj = array[i];
            var tempArray = currentObj.split('&');
            var newObj = tempArray.join('"')
            newArray.push(JSON.parse(newObj))
          }
          return newArray;
        }
        const objParser = (array) => {
          console.log(array)
          var newObjString = array.join('"');
          console.log('newObjString: ' + newObjString)

          // console.log('newObj: ' + newObj)
          console.log('object parsed')
          return JSON.parse(newObjString);

        }
        game = {
          id: results.rows[0].id,
          titlecover: results.rows[0].titlecover,
          title: results.rows[0].title,
          price: results.rows[0].price,
          aboutInfo: results.rows[0].aboutInfo,
          requirements: results.rows[0].requirements.split('&'),
          genre: results.rows[0].genre.split(','),
          developer: results.rows[0].developer,
          publisher: results.rows[0].publisher,
          releaseDate: results.rows[0].releaseDate,
          steamAcheivments: results.rows[0].steamacheivments.split(','),
          languages: results.rows[0].languages.split('*'),
          attributes: results.rows[0].attributes.split('&'),
          moreLikeThis: results.rows[0].morelikethis.split('*')
        }

        game.languages = objArrayParser(game.languages);
        game.moreLikeThis = objArrayParser(game.moreLikeThis);

        console.log(game.languages)
        game.requirements = objParser(game.requirements);
        console.log(game.requirements)
        game.attributes = objParser(game.attributes);
        console.log(game.attributes)

        res.status(200).json(game);
        res.end(console.log('Game Recieved'))
        console.timeEnd();
      }
    })
  }
}


// const parseOBJ = (array) => {
//   for (var i = 0; i < array.length; i++) {
//     array[i] =
//   }
//   return array;
// }