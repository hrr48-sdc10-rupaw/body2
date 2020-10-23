const db = require('./psqlFunctions.js');


module.exports = {
  getOneGame: (req, res) => {
    console.time();
    var reqId = [req.query.id];
    db.getOne(reqId, (err, results) => {
      if (err) {
        throw err;
      } else {
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
          var newObjString = array.join('"');
          return JSON.parse(newObjString);

        }
        game = {
          id: results.rows[0].id,
          titlecover: results.rows[0].titlecover,
          title: results.rows[0].title,
          price: results.rows[0].price,
          aboutInfo: results.rows[0].aboutinfo,
          requirements: results.rows[0].requirements.split('&'),
          genre: results.rows[0].genre.split(','),
          developer: results.rows[0].developer,
          publisher: results.rows[0].publisher,
          releaseDate: results.rows[0].releasedate,
          steamAcheivments: results.rows[0].steamacheivments.split(','),
          languages: results.rows[0].languages.split('*'),
          attributes: results.rows[0].attributes.split('&'),
          moreLikeThis: results.rows[0].morelikethis.split('*')
        }
        game.languages = objArrayParser(game.languages);
        game.moreLikeThis = objArrayParser(game.moreLikeThis);
        game.requirements = objParser(game.requirements);
        game.attributes = objParser(game.attributes);
        console.log(game)
        res.json(game);
        res.end(console.log('Game Recieved'))
        console.timeEnd();
      }
    })
  },


  postGame: (req, res) => {
    var params = [req.body.id,
      req.body.titleCover,
      req.body.title,
      req.body.price,
      req.body.aboutInfo,
      req.body.requirements,
      req.body.genre,
      req.body.developer,
      req.body.publisher,
      req.body.releaseDate,
      req.body.steamAcheivments,
      req.body.languages,
      req.body.attributes,
      req.body.moreLikeThis];
    db.insertOne(params, (err, results) => {
      if (err) {
        throw err
      } else {
        res.sendStatus(201);
        res.end('Game Created')
      }
    })
  }
}

