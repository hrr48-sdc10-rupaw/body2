const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var cors = require('cors')
const path = require('path')
const port = 3000;
const Game = require('../db/index.js');

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('/moist-air/', (req, res) => {
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

app.post('/moist-air/', (req, res) => {
  Game.create({
      id: req.body.id,
      titleCover: req.body.titleCover,
      title: req.body.title,
      price: req.body.price,
      aboutInfo: req.body.aboutInfo,
      requirements: {
        os: req.body.requirements.os,
        processor: req.body.requirements.processor,
        memory: req.body.requirements.memory,
        graphics: req.body.requirements.graphics,
        directX: req.body.requirements.directX,
        storage: req.body.requirements.storage,
        },
      genre: req.body.genre,
      developer: req.body.developer,
      publisher: req.body.publisher,
      releaseDate: req.body.releaseDate,
      steamAcheivments: req.body.steamAcheivments,
      languages: req.body.languages,
      attributes: {
        achievements:  req.body.attributes.achievements,
        controllerSupport:  req.body.attributes.controllerSupport,
        partialControllersupport:  req.body.attributes.partialControllersupport,
        remotePlay: req.body.attributes.remotePlay
        },
      moreLikeThis: req.body.moreLikeThis
  }, (err) => {
    if (err) {
      throw err;
    } else {
      res.writeHead(201);
      res.end('New Game Created')
    }
  })
});

app.put('/moist-air/game/', (req, res) => {
  req.query.id = parseInt(req.query.id);
  Game.findOneAndUpdate({id: req.query.id}, {price: req.body.price}, (err, result ) => {
    if (err) {
      throw err;
    } else {
      res.send(result)
      console.log('Game Updated')
    }
  })
});

app.delete('/moist-air/game', (req, res) => {
  req.query.id = parseInt(req.query.id);
  Game.deleteOne({id: req.query.id}, (err) => {
    if (err) {
      throw err;
    } else {
      res.end('Game Deleted')
    }
  })
});

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});

module.exports.app = app;
module.exports.server = server;



