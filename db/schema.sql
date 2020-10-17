DROP DATABASE IF EXISTS sdc;

CREATE DATABASE sdc;

\conect sdc;

CREATE TABLE game (
  id SERIAL NOT NULL ,
  titlecover VARCHAR (250),
  title VARCHAR (250),
  price VARCHAR (250),
  aboutInfo VARCHAR (250),
  os VARCHAR (250),
  processor VARCHAR (250),
  memory VARCHAR (250),
  graphics VARCHAR (250),
  directX VARCHAR (250),
  storage VARCHAR (250),

	genre VARCHAR (250),
  developer VARCHAR (250),
  publisher VARCHAR (250),
  releaseDate VARCHAR (250),
	steamAcheivments VARCHAR (250),

  achievements  BOOLEAN,
  controllerSupport  BOOLEAN,
  partialControllersupport  BOOLEAN,
  remotePlay BOOLEAN
);

CREATE TABLE morelikethis (
  id SERIAL NOT NULL PRIMARY KEY,
  titleImage VARCHAR (250),
  price VARCHAR (250)
);

CREATE TABLE languages (
  	languageName VARCHAR (250),
			interface BOOLEAN,
			fullAudio  BOOLEAN,
			subtitles  BOOLEAN
)


CREATE TABLE genres (
  id SERIAL NOT NULL PRIMARY KEY,
  genreName VARCHAR (100)
)