CREATE KEYSPACE IF NOT EXISTS game
                      WITH REPLICATION = {
                        'class': 'SimpleStrategy',
                        'replication_factor': 3
                      };

USE game;





CREATE TABLE game.games (
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
    PRIMARY KEY (id))

'COPY game.games (id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, storage, developer, publisher, releaseDate, steamAcheivment1, steamAcheivment2, steamAcheivment3, achievements, partialControllersupport, remotePlay, mLT1TitleImage, mLT1price, mLT2TitleImage, mLT2price, mLT3TitleImage, mLT3price) FROM "/Users/michael/Documents/Galvanize/HRR48/SDC/SDC-Project/body/gamesTest.csv" WITH HEADER = TRUE'