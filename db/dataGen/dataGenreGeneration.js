const fs = require('fs');


const writeGenres = fs.createWriteStream('genres.csv');
writeGenres.write('id, languageName\n', 'utf8');

var genreList = ['Platform','Shooter','Fighting','Beat \'em up','Stealth','Survival','Battle Royale','Rhythm','Survival horror','Metroidvania','Text adventures','Graphic adventures','Action RPG','MMORPG','First-person party-based RPG','JRPG','Monster Collection','Construction and management simulation','Life simulation', 'Vehicle simulation','4X game','Artillery game','Auto battler (Auto chess)','RTS','RTT','TBS','TBT','Wargame','Grand strategy wargame','Racing','Sports game','Competitive','Sports-based fighting','Board game or card game','Casual','Digital collectible card game','Horror game','Idle game','Logic game','Mobile game','Party game','Programming game','Advergame','Art game','Casual game','Educational game','Esports','Exergame','Personalized game','Serious game','Survival-Action-Adventure','Cross-Genre','Narrative-Adventure','Sandbox','Creative','Open world'];


const writeAllGenres = (writer, encoding, callback) => {
  let i = genreList.length - 1;
  let id = 0;
  function write() {
    let ok = true;
    do {
    id += 1;

      const genreName = genreList[i];
      //faker data here
      //concatinated data stream
      const data = `${id}, ${genreName}\n`;
      i -= 1;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      // console.log('Writing Record' + id);
      writer.once('drain', write);
    }
  }
  write()
}



writeAllGenres(writeGenres, 'utf-8', () => {
  writeGenres.end();
});



const writeGamesGenres = fs.createWriteStream('games-genres.csv');
writeGamesGenres.write('id, gameId, genreId\n', 'utf8');

const trueOrFalse = ['true', 'false'];

const write30MillionGamesGenres = (writer, encoding, callback) => {
  let i = 30000000;
  let id = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const gameId = Math.floor(Math.random() * 10000000) + 1;
      const genreId = Math.floor(Math.random() * genreList.length) + 1;
      const data = `${id}, ${gameId}, ${genreId}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      console.log('Writing Record' + id);
      writer.once('drain', write);
    }
  }
  write()
}

write30MillionGamesGenres(writeGamesGenres, 'utf-8', () => {
  writeGamesGenres.end();
});





