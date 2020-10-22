const db = require('./cassandra/indexCassandra.js')


async function createSchema() {
  await db.execute('CREATE KEYSPACE game WITH REPLICATION = {
                        'class': 'SimpleStrategy',
                        'replication_factor': 1
                      }
  ');
  await db.execute('USE game');
  await db.execute('CREATE TABLE game.games (
    id INT,titlecover text,
    title text,
    price text,
    aboutInfo text,
    os text,
    processor text,
    memory text,
    graphics text,
    directX text,
    storage text,
    developer text,
    publisher text,
    releaseDate text,
    steamAcheivment1 text,
    steamAcheivment2 text,
    steamAcheivment3 text,
    achievements  boolean,
    partialControllersupport  boolean,
    remotePlay boolean,
    mLT1TitleImage text,
    mLT1price text,
    mLT2TitleImage text,
    mLT2price text,
    mLT3TitleImage text,
    mLT3price text,
    PRIMARY KEY (id))');
  await db.execute('COPY game.games (id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, storage, developer, publisher, releaseDate, steamAcheivment1, steamAcheivment2, steamAcheivment3, achievements, partialControllersupport, remotePlay, mLT1TitleImage, mLT1price, mLT2TitleImage, mLT2price, mLT3TitleImage, mLT3price) FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/games.csv' WITH HEADER = TRUE');
}

CREATE TABLE languages (
  id INT,
  languageName text,
  PRIMARY KEY (id)
);


COPY game.languages (id, languageName)
FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/languages.csv'
WITH DELIMITER='|' AND HEADER = TRUE;


CREATE TABLE gameLanguages (
    	id INT,
      languageId INT,
      gameId INT,
      languageName text,
      interface boolean,
      fullAudio  boolean,
      subtitles  boolean,
      PRIMARY KEY (id, languageId, gameId)
  );

COPY game.gameLanguages (id, gameId, languageId, interface, fullAudio, subtitles)
FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/genres.csv'
WITH DELIMITER='|' AND HEADER = TRUE;


CREATE TABLE genres (
  id INT,
  genreName text,
  PRIMARY KEY (id)
);

COPY game.genres (id, genreName)
FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/genres.csv'
WITH DELIMITER='|' AND HEADER = TRUE;
