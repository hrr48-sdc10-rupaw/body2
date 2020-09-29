const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path')
const port = 3000;
const Game = require('../db/index.js');

// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/moist-air/game',(req, res)=>{
  let data = Game.find({});
  data.exec((err, gameData)=>{
    if(err){
      res.send('there was an error');
    } else {
      res.send(gameData);
    }
  })
})

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});

module.exports.app = app;
module.exports.server = server;