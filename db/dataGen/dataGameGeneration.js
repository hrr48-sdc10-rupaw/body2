const faker = require('faker');
const fs = require('fs');


const writeGames = fs.createWriteStream('gamesTest.csv');
writeGames.write('id, titleCover, title, price, aboutInfo, os, processor, memory, graphics, directX, developer, publisher, releaseDate, steamAcheivment1, steamAcheivment2, steamAcheivment3, achievements, partialControllersupport, remotePlay, mLT1TitleImage, mLT1price, mLT2TitleImage, mLT2price, mLT3TitleImage, mLT3price\n', 'utf8');

const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
const trueOrFalse = ['true', 'false'];
const writeTenMillionGames = (writer, encoding, callback) => {
  let i = 100;
  let id = 0;
  function write() {
    let ok = true;
    do {
      i -= 1;
      id += 1;
      const titleCover = 'kingdom-hearts-img.jp2';
      const title = faker.commerce.productName();
      const price = `${Math.floor(Math.random() * 200) + 1}.99`;
      const aboutInfo = faker.lorem.paragraph();
      const os = capitalize(faker.random.word());
      const processor = capitalize(faker.random.word());
      const memory = capitalize(faker.random.word());
      const graphics = capitalize(faker.random.word());
      const directX = capitalize(faker.random.word());
      const developer = capitalize(faker.random.word());
      const publisher = capitalize(faker.random.word());
      const releaseDate = faker.date.between('2000-01-01', '2020-11-13');
      const steamAcheivment1 = 'images.for.hrr/869-100x100.jpg';
      const steamAcheivment2 = 'images.for.hrr/818-100x100.jpg';
      const steamAcheivment3 = 'images.for.hrr/612-100x100.jpg';
      const achievements = trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];;
      const partialControllersupport = trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];;
      const remotePlay = trueOrFalse[Math.floor(Math.random() * trueOrFalse.length)];;
      const mLT1TitleImage = 'kingdom-hearts-img.jp2'
      const mLT1price = `$${Math.floor(Math.random() * 200) + 1}.99`
      const mLT2TitleImage = 'kingdom-hearts-img.jp2'
      const mLT2price = `$${Math.floor(Math.random() * 200) + 1}.99`
      const mLT3TitleImage = 'kingdom-hearts-img.jp2';
      const mLT3price = `$${Math.floor(Math.random() * 200) + 1}.99`;

      //faker data here
      //concatinated data stream
      const data = `${id}, ${titleCover}, ${title}, ${price}, ${aboutInfo}, ${os}, ${processor}, ${memory}, ${graphics}, ${directX}, ${developer}, ${publisher}, ${releaseDate}, ${steamAcheivment1}, ${steamAcheivment2}, ${steamAcheivment2}, ${achievements}, ${partialControllersupport}, ${remotePlay}, ${mLT1TitleImage}, ${mLT1price}, ${mLT2TitleImage}, ${mLT2price}, ${mLT3TitleImage}, ${mLT3price}\n`;

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



