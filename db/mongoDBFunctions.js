const Game = require('../db/index.js');

module.exports = {
//get all
getAllGames: (req, res) => {
  Game.find({}).exec((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results)
    }
  })
}


//get 1 game by 'id'



//post 1 neew game



//update(put) game with new data


//delete 1 game



}