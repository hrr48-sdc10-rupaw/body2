DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;
\c sdc;

SET maintenance_work_mem to '16GB';



CREATE TABLE games (
  id SERIAL NOT NULL PRIMARY KEY,
  titlecover VARCHAR (250),
  title VARCHAR (250),
  price VARCHAR (250),
  aboutInfo VARCHAR (500),
  os VARCHAR (250),
  processor VARCHAR (250),
  memory VARCHAR (250),
  graphics VARCHAR (250),
  directX VARCHAR (250),
  storage VARCHAR (250),
  genre VARCHAR (500),
  developer VARCHAR (250),
  publisher VARCHAR (250),
  releaseDate VARCHAR (250),
	steamAcheivments VARCHAR (400),
  languages VARCHAR (500),
  achievements  BOOLEAN,
  partialControllersupport  BOOLEAN,
  remotePlay BOOLEAN,
  moreLikeThis VARCHAR (500)
);

-- games table
COPY games (id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, storage, genre, developer, publisher, releaseDate, steamAcheivments, languages, achievements, partialControllersupport, remotePlay, moreLikeThis)
FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/games.csv'
DELIMITER '|'
CSV HEADER;

