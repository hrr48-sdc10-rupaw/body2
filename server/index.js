const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path')
const port = 3000;
const Game = require('../db/index.js');

app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/moist-air/game', (req, res) => {
  Game.find({}).exec((err, results) => {
    if (err) {
      throw err;
    } else {
      res.send(results)
    }
  })
})

app.get('/moist-air/game',(req, res)=>{
  reqId = req.query.id;
  let data = Game.find({'id': reqId});

  data.exec((err, gameData)=>{
    if(err){
      res.send('there was an error');
    } else {
      res.send(gameData);
    }
  })
})

app.post('/moist-air/game', (req, res) => {
  Game.insertOne({
    {
      id: req.body.id,
      titleCover: req.body.titleCover,
      title: req.body.title,
      price: req.body.price,
      aboutInfo: req.body.aboutInfo,
      requirements: {
        os: {type: String},
        processor: {type: String},
        memory: {type: String},
        graphics: {type: String},
        directX: {type: String},
        storage: {type: String},
        },
      genre: [{type: String}],
      developer: {type: String},
      publisher: {type: String},
      releaseDate: {type: String},
      steamAcheivments:[{type: String}],
      languages: [{
        languageName: {type: String},
        interface: {type: Boolean},
        fullAudio:  {type: Boolean},
        subtitles:  {type: Boolean},
        }],
      attributes:{
        achievements:  {type: Boolean},
        controllerSupport:  {type: Boolean},
        partialControllersupport:  {type: Boolean},
        remotePlay: {type: Boolean}
        },
      moreLikeThis: [{titleImage:{type: String}, price: {type: String}}]
    }
  })
  res.send(console.log('it is working'))
})

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});

module.exports.app = app;
module.exports.server = server;