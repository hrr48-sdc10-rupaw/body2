const {Client} = require('pg');


const connectionString = "postgres://postgres:postgres@localhost:5432/sdc"

const client = new Client({connectionString: connectionString});
client.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('postgreSQL is connected!')
  }
});



module.exports = client;