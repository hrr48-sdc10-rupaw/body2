const cassandra = require('cassandra-driver');


const client = new cassandra.Client({ contactPoints:['localhost']});

client.connect((err) => {
  if (err) {
    throw err;
  } else {
    console.log('Connected to Cassandra!')
  }
})


module.exports = client;