const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
const date = (new Date().getDate()).toString().padStart(2, '0');

const media = path.resolve(__dirname, `../static/media/${year}/${month}/${date}`);

// 全てのファイル名を取得
// const files = fs.readdirSync(media);

const name = `${media}/${year}_${month}_${date}__0.png`;
const file = fs.readFileSync(name);

(async () => {
  const blank = await sharp({
    create: {
      width: 475,
      height: 475,
      channels: 3,
      background: '#FFF'
    }
  })
    .png()
    .toBuffer();

  const target = await sharp(file)
    .resize(475, 475)
    .toBuffer();

  await sharp(blank)
    .composite([{
      input: target
    }])
    .toFile(name);
})();
