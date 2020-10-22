-- DROP DATABASE IF EXISTS sdc;

-- CREATE DATABASE sdc;
\c sdc;

SET maintenance_work_mem to '16GB';

\timing;


-- CREATE TABLE games (
--   id SERIAL NOT NULL PRIMARY KEY,
--   titlecover VARCHAR (250),
--   title VARCHAR (250),
--   price VARCHAR (250),
--   aboutInfo VARCHAR (500),
--   os VARCHAR (250),
--   processor VARCHAR (250),
--   memory VARCHAR (250),
--   graphics VARCHAR (250),
--   directX VARCHAR (250),
--   storage VARCHAR (250),
--   developer VARCHAR (250),
--   publisher VARCHAR (250),
--   releaseDate VARCHAR (250),
-- 	steamAcheivment1 VARCHAR (250),
-- 	steamAcheivment2 VARCHAR (250),
-- 	steamAcheivment3 VARCHAR (250),
--   achievements  BOOLEAN,
--   partialControllersupport  BOOLEAN,
--   remotePlay BOOLEAN,
--   mLT1TitleImage VARCHAR (250),
--   mLT1price VARCHAR (250),
--   mLT2TitleImage VARCHAR (250),
--   mLT2price VARCHAR (250),
--   mLT3TitleImage VARCHAR (250),
--   mLT3price VARCHAR (250)
-- );

-- -- games table
-- COPY games (id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, storage, developer, publisher, releaseDate, steamAcheivment1, steamAcheivment2, steamAcheivment3, achievements, partialControllersupport, remotePlay, mLT1TitleImage, mLT1price, mLT2TitleImage, mLT2price, mLT3TitleImage, mLT3price)
-- FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/games.csv'
-- DELIMITER ','
-- CSV HEADER;

-- DROP TABLE IF EXISTS languages;

-- CREATE TABLE languages (
--   id SERIAL NOT NULL PRIMARY KEY,
--   languageName VARCHAR (250)
-- );

-- -- languages table

-- COPY languages (id, languageName)
-- FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/genres.csv'
-- DELIMITER ','
-- CSV HEADER;

-- DROP TABLE IF EXISTS gameLanguages;

-- CREATE TABLE gameLanguages (
--   	id SERIAL NOT NULL PRIMARY KEY,
--     languageId INT,
--     gameId INT,
--     languageName VARCHAR (150),
--     interface BOOLEAN,
--     fullAudio  BOOLEAN,
--     subtitles  BOOLEAN,
--     CONSTRAINT fk_languageId
--       FOREIGN KEY(languageId)
--         REFERENCES languages(id),
--     CONSTRAINT fk_gameId
--       FOREIGN KEY(gameId)
--         References games(id)
-- );

-- -- gamelanguages table
-- COPY gameLanguages (id, gameId, languageId, interface, fullAudio, subtitles)
-- FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/games-languages.csv'
-- DELIMITER ','
-- CSV HEADER;

-- DROP TABLE IF EXISTS genres;

-- CREATE TABLE genres (
--   id SERIAL NOT NULL PRIMARY KEY,
--   genreName VARCHAR (100)
-- );

-- -- genres table
-- COPY genres (id, genreName)
-- FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/genres.csv'
-- DELIMITER ','
-- CSV HEADER;

-- DROP TABLE IF EXISTS gameGenres;

-- CREATE TABLE gameGenres (
--   id SERIAL NOT NULL PRIMARY KEY,
--   gameId INT,
--   genreId INT
-- );

-- -- gamegenres table

-- COPY gameGenres (id, gameId, genreId)
-- FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/games-genres.csv'
-- DELIMITER ','
-- CSV HEADER;

-- ALTER TABLE gameGenres
--   ADD CONSTRAINT fk_genreId
--       FOREIGN KEY(genreId)
--         REFERENCES genres(id);

-- ALTER TABLE gameGenres
--   ADD CONSTRAINT fk_gameId
--       FOREIGN KEY(gameId)
--         References games(id)