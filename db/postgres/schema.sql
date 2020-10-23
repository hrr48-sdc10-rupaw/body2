DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;
\c sdc;

SET maintenance_work_mem to '16GB';



CREATE TABLE games (
  id SERIAL NOT NULL PRIMARY KEY,
  titlecover VARCHAR (250),
  title VARCHAR (250),
  price VARCHAR (250),
  aboutInfo VARCHAR (5000),
  requirements VARCHAR (500),
  genre VARCHAR (500),
  developer VARCHAR (250),
  publisher VARCHAR (250),
  releaseDate VARCHAR (250),
	steamAcheivments VARCHAR (400),
  languages VARCHAR (500),
  attributes VARCHAR (200),
  moreLikeThis VARCHAR (500)
);

-- games table
COPY games (id, titleCover, title, price, aboutInfo, requirements, genre, developer, publisher, releaseDate, steamAcheivments, languages, attributes, moreLikeThis)
FROM '/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/gamesPostgreSQLTest.csv'
DELIMITER '|'
CSV HEADER;

