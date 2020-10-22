const db = require('./psqlFunctions.js');


module.exports = {
  getOneGame: (req, res) => {
    console.time();
    var reqId = [req.query.id];
    db.getOne(reqId, (err, results) => {
      if (err) {
        throw err;
      } else {
        res.status(200).json(results.rows);
        res.end(console.log('Game Recieved'))
        console.timeEnd();
      }
    })
  }
}