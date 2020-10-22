const fs = require('fs');


const writeLanguages = fs.createWriteStream('languages.csv');
writeLanguages.write('id, languageName\n', 'utf8');

var languageList = ['English', 'Spanish', 'Chinese', 'Hindi', 'Arabic', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Hebrew', 'Shyriiwook', 'Elvish', 'Alienese', 'Na\'vi', 'Droidspeak', 'Huttese', 'Mando\'a'];

const writeAllLanguages = (writer, encoding, callback) => {
  let i = languageList.length - 1;
  let id = 0;
  function write() {
    let ok = true;
    do {

      id += 1;

      const languageName = languageList[i];
      //faker data here
      //concatinated data stream
      const data = `${id}, ${languageName}\n`;
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



writeAllLanguages(writeLanguages, 'utf-8', () => {
  writeLanguages.end();
});



const writeGamesLanguages = fs.createWriteStream('games-languages.csv');
writeGamesLanguages.write('id, gameId, languageId, interface, fullAudio, subtitles\n', 'utf8');

const trueOrFalse = ['true', 'false'];

const write60MillionGamesLanguages = (writer, encoding, callback) => {
  let i = 60000000;
  let id = 1;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const gameId = Math.floor(Math.random() * 10000000) + 1;
      const languageId = Math.floor(Math.random() * languageList.length) + 1;
      const interface = trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];
      const fullAudio =  trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];
      const subtitles =  trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];
      const data = `${id}, ${gameId}, ${languageId}, ${interface}, ${fullAudio}, ${subtitles}\n`;

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

write60MillionGamesLanguages(writeGamesLanguages, 'utf-8', () => {
  writeGamesLanguages.end();
});





