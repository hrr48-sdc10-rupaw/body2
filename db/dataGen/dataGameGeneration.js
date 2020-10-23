const faker = require('faker');
const fs = require('fs');


const writeGames = fs.createWriteStream('gamesPostgreSQlTest.csv');
writeGames.write('id, titleCover, title, price, aboutInfo, requirements, genre, developer, publisher, releaseDate, steamAcheivments, languages, attributes, moreLikeThis\n', 'utf8');

const commaRemover = (string) => {
  var characters = string.split('');
  var lastCharacter = characters[characters.length - 1]
  if (lastCharacter === ',' || lastCharacter === '*') {
    characters.pop();
    var cleanString = characters.join('');
    return cleanString;
  } else {
    return string;
  }
}



const trueOrFalse = ['true', 'false'];

const mLTMaker = () => {
  var i = 0;
  var moreLikeThisString = '';
  while (i < 3) {
    var obj = {
      "&titleImage&": "&https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2&",
      "&price&": `&$${Math.floor(Math.random() * 200) + 1}.99&`
    }
    moreLikeThisString += JSON.stringify(obj) + '*'
    i++
  }
  return moreLikeThisString;
}

const requirementsMaker = () => {
  var result = ''
  var requirementsObj = {
   "&os&": `&${commaRemover(faker.random.word())}&`,
   "&processor&": `&${commaRemover(faker.random.word())}&`,
   "&memory&": `&${commaRemover(faker.random.word())}&`,
   "&graphics&": `&${commaRemover(faker.random.word())}&`,
   "&directX&": `&${commaRemover(faker.random.word())}&`,
   "&storage&": `&${commaRemover(faker.random.word())}&`
  }
  result += JSON.stringify(requirementsObj);
  return result;
}

const attributesMaker = () => {
  var result = ''
  var attributesObj = {
   "&achievements&": `${trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)]}`,
   "&partialControllersupport&": `${trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)]}`,
   "&remotePlay&": `${trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)]}`
  }
  result += JSON.stringify(attributesObj);
  return result;
}

const writeTenMillionGames = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;


  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
  var languageList = ['English', 'Spanish', 'Chinese', 'Hindi', 'Arabic', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Hebrew', 'Shyriiwook', 'Elvish', 'Alienese', 'Na\'vi', 'Droidspeak', 'Huttese', 'Mando\'a']

  var genreList = ['Platform','Shooter','Fighting','Beat \'em up','Stealth','Survival','Battle Royale','Rhythm','Survival horror','Metroidvania','Text adventures','Graphic adventures','Action RPG','MMORPG','First-person party-based RPG','JRPG','Monster Collection','Construction and management simulation','Life simulation', 'Vehicle simulation','4X game','Artillery game','Auto battler (Auto chess)','RTS','RTT','TBS','TBT','Wargame','Grand strategy wargame','Racing','Sports game','Competitive','Sports-based fighting','Board game or card game','Casual','Digital collectible card game','Horror game','Idle game','Logic game','Mobile game','Party game','Programming game','Advergame','Art game','Casual game','Educational game','Esports','Exergame','Personalized game','Serious game','Survival-Action-Adventure','Cross-Genre','Narrative-Adventure','Sandbox','Creative','Open world'];

  const listPicker = (list) => {
    let randomLanguage = list[Math.floor(Math.random() * list.length)]
    let randomLanguageIndex = languageList.indexOf(randomLanguage);
    list = list.splice(randomLanguageIndex, 1);
    return randomLanguage;
  }

  const languageMaker = (list) => {
    var i = 0;
    var languageString = '';
    while (i < 5) {
      var obj = {
        "&languageName&": `&${listPicker(languageList)}&`,
        "&interface&": trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)],
        "&fullAudio&": trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)],
        "&subtitles&": trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)]
      }
      languageString += JSON.stringify(obj) + '*'
      i++
    }
    return languageString;
  }
      const titleCover = 'https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2';
      const title = faker.commerce.productName();
      const price = `${Math.floor(Math.random() * 200) + 1}.99`;
      const aboutInfo = faker.lorem.paragraph();
      const requirements = `${commaRemover(requirementsMaker())}`
      const genre = `${listPicker(genreList)}, ${listPicker(genreList)}, ${listPicker(genreList)}, ${listPicker(genreList)}, ${listPicker(genreList)}`
      const developer = commaRemover(faker.random.word());
      const publisher = commaRemover(faker.random.word());
      const releaseDate = faker.date.between('2000-01-01', '2020-11-13');
      const steamAcheivments = 'https://sdc-moistair.s3.amazonaws.com/612-100x100.jpg,https://sdc-moistair.s3.amazonaws.com/818-100x100.jpg,https://sdc-moistair.s3.amazonaws.com/869-100x100.jpg';
      const languages = `${commaRemover(languageMaker(languageList))}`;
      const attributes = `${attributesMaker()}`
      const moreLikeThis = `${commaRemover(mLTMaker())}`

      //faker data here
      //concatinated data stream
      const data = `${id}|${titleCover}|${title}|${price}|${aboutInfo}|${requirements}|${genre}|${developer}|${publisher}|${releaseDate}|${steamAcheivments}|${languages}|${attributes}|${moreLikeThis}\n`;

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



writeTenMillionGames(writeGames, 'utf-8', () => {
  writeGames.end();
});




