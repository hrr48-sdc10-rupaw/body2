const faker = require('faker');
const fs = require('fs');


const writeGames = fs.createWriteStream('games.csv');
writeGames.write('id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, genre1, genre2, genre3, developer, publisher, releaseDate, steamAcheivment1, steamAcheivment2, steamAcheivment3, languageName1, interface1, fullAudio1, subtitles1, languageName2, interface2, fullAudio2, subtitles2, languageName3, interface3, fullAudio3, subtitles3, languageName4, interface4, fullAudio4, subtitles4, languageName5, interface5, fullAudio5, subtitles5, languageName6, interface6, fullAudio6, subtitles6, achievements, partialControllersupport, remotePlay, moreLikeThis\n', 'utf8');

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const writeTenMillionGames = (writer, encoding, callback) => {
  let i = 10000000;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      var languageList = ['English', 'Spanish', 'Chinese', 'Hindi', 'Arabic', 'Portuguese', 'Bengali', 'Russian', 'Japanese', 'Hebrew', 'Shyriiwook', 'Elvish', 'Alienese', 'Na\'vi', 'Droidspeak', 'Huttese', 'Mando\'a'];

      var genreList = ['Platform','Shooter','Fighting','Beat \'em up','Stealth','Survival','Battle Royale','Rhythm','Survival horror','Metroidvania','Text adventures','Graphic adventures','Action RPG','MMORPG','First-person party-based RPG','JRPG','Monster Collection','Construction and management simulation',
      'Life simulation', 'Vehicle simulation','4X game','Artillery game','Auto battler (Auto chess)','RTS','RTT','TBS','TBT','Wargame','Grand strategy wargame','Racing','Sports game','Competitive','Sports-based fighting','Board game or card game','Casual','Digital collectible card game','Horror game','Idle game','Logic game','Mobile game','Party game','Programming game','Advergame','Art game','Casual game','Educational game','Esports','Exergame','Personalized game','Serious game','Survival-Action-Adventure','Cross-Genre','Narrative-Adventure','Sandbox','Creative','Open world'];

      const listPicker = (list) => {
        let randomLanguage = list[Math.floor(Math.random() * list.length)]
        let randomLanguageIndex = languageList.indexOf(randomLanguage);
        list.splice(randomLanguageIndex, 1);
        return randomLanguage;
      }
      const titleCover = 'https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2';
      const title = faker.commerce.productName();
      const price = `${faker.random.number()}.99`;
      const aboutInfo = faker.lorem.paragraph();
      const os = capitalize(faker.random.word());
      const processor = capitalize(faker.random.word());
      const memory = capitalize(faker.random.word());
      const graphics = capitalize(faker.random.word());
      const directX = capitalize(faker.random.word());
      const genre1 = listPicker(genreList);
      const genre2 = listPicker(genreList);
      const genre3 = listPicker(genreList);
      const developer = capitalize(faker.random.word());
      const publisher = capitalize(faker.random.word());
      const releaseDate = faker.date.between('2000-01-01', '2020-11-13');
      const steamAcheivment1 = 'https://s3.us-east-2.amazonaws.com/images.for.hrr/869-100x100.jpg';
      const steamAcheivment2 = 'https://s3.us-east-2.amazonaws.com/images.for.hrr/818-100x100.jpg';
      const steamAcheivment3 = 'https://s3.us-east-2.amazonaws.com/images.for.hrr/612-100x100.jpg';

      const languageName1 = listPicker(languageList);
      const interface1 = faker.random.boolean();
      const fullAudio1 =  faker.random.boolean();
      const subtitles1 =  faker.random.boolean();
      const languageName2 = listPicker(languageList);
      const interface2 = faker.random.boolean();
      const fullAudio2 =  faker.random.boolean();
      const subtitles2 =  faker.random.boolean()
      const languageName3 = listPicker(languageList);
      const interface3 = faker.random.boolean();
      const fullAudio3 =  faker.random.boolean();
      const subtitles3 =  faker.random.boolean();
      const languageName4 = listPicker(languageList);
      const interface4 = faker.random.boolean();
      const fullAudio4 =  faker.random.boolean();
      const subtitles4 =  faker.random.boolean();
      const languageName5 = listPicker(languageList);
      const interface5 = faker.random.boolean();
      const fullAudio5 =  faker.random.boolean();
      const subtitles5 =  faker.random.boolean();
      const languageName6 = listPicker(languageList);
      const interface6 = faker.random.boolean();
      const fullAudio6 =  faker.random.boolean();
      const subtitles6 =  faker.random.boolean();

      const achievements = faker.random.boolean();
      const partialControllersupport = faker.random.boolean();
      const remotePlay = faker.random.boolean();
      const mLT1TitleImage = 'https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2'
      const mLT1price = `$${faker.random.number()}.99`
      const mLT2TitleImage = 'https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2'
      const mLT2price = `$${faker.random.number()}.99`
      const mLT3TitleImage = 'https://sdc-moistair.s3.amazonaws.com/kingdom-hearts-img.jp2';
      const mLT3price = `$${faker.random.number()}.99`;

      //faker data here
      //concatinated data stream
      const data = `${id}, ${titleCover}, ${title}, ${price}, ${aboutInfo}, ${os}, ${processor}, ${memory}, ${graphics}, ${directX}, ${genre1}, ${genre2}, ${genre3}, ${developer}, ${publisher}, ${releaseDate}, ${steamAcheivment1}, ${steamAcheivment2}, ${steamAcheivment2}, ${languageName1}, ${interface1}, ${fullAudio1}, ${subtitles1}, ${languageName2}, ${interface2}, ${fullAudio2}, ${subtitles2}, ${languageName3}, ${interface3}, ${fullAudio3}, ${subtitles3}, ${languageName4}, ${interface4}, ${fullAudio4}, ${subtitles4}, ${languageName5}, ${interface5}, ${fullAudio5}, ${subtitles5}, ${languageName6}, ${interface6}, ${fullAudio6}, ${subtitles6}, ${achievements}, ${partialControllersupport}, ${remotePlay}, ${mLT1TitleImage}, ${mLT1price}, ${mLT2TitleImage}, ${mLT2price}, ${mLT3TitleImage}, ${mLT3price}\n`;

      if (i === 0) {
        writer.write(data, encoding, callback);
      } else {
        console.log('Writing Record' + id);
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
  write()
}



writeTenMillionGames(writeGames, 'utf-8', () => {
  writeGames.end();
});



