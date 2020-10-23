const db = require('./cassandra/indexCassandra.js')


async function createSchema() {
  await db.execute('CREATE KEYSPACE games WITH REPLICATION = {
                        'class': 'SimpleStrategy',
                        'replication_factor': 1
                      }
  ');
  await db.execute('USE game');
  await db.execute('CREATE TABLE games.game (
    id INT,
    titlecover text,
    title text,
    price text,
    aboutInfo text,
    os text,
    processor text,
    memory text,
    graphics text,
    directX text,
    storage text,
    genre text,
    developer text,
    publisher text,
    releaseDate text,
    steamAcheivments text,
    languages text,
    achievements  boolean,
    partialControllersupport  boolean,
    remotePlay boolean,
    moreLikeThis text,
    PRIMARY KEY (id))');
  await db.execute('COPY games.game (id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, storage, genre, developer, publisher, releaseDate, steamAcheivments, languages, achievements, partialControllersupport, remotePlay, moreLikeThis) FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/gamesCassandra.csv' WITH DELIMITER='|' AND HEADER = TRUE');
}
