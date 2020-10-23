const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')
const path = require('path')
const port = 3000;

app.use(cors())
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../client/build')))

//db switcher
//mongoDB
// const db = require('../db/mongo/mongoDBFunctions.js');

//postgresQL
const db = require('../db/postgres/controllersPostgres.js');

//cassandra
// const db = require('../db/cassandra/controllersCassandra.js')

// app.get('/moist-air/',  db.getAllGames);

app.get('/moist-air/game', db.getOneGame);

app.post('/moist-air/', db.postGame);

// app.put('/moist-air/game/', db.updateGame);

// app.delete('/moist-air/game', db.deleteOneGame);

let server = app.listen(port, () => {
  console.log(`listening at ${port}...`);
});

module.exports.app = app;
module.exports.server = server;



