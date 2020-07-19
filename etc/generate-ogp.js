const fs = require('fs');
const path = require('path');
const { createCanvas, registerFont, loadImage } = require('canvas');

// 引数は以下のような記事タイトルを想定している
// \nで改行する
// 「GASで日本の休日・祝日を判定する\n方法を解説します（Google Apps Script)」
const text = process.argv[2];
if (typeof text !== 'string') {
  console.log('Invalid args');
  return;
}

const year = new Date().getFullYear();
const month = (new Date().getMonth() + 1).toString().padStart(2, '0');
const date = (new Date().getDate()).toString().padStart(2, '0');
const media = path.resolve(__dirname, `../static/media/${year}/${month}/${date}`);
const target = `${media}/${year}_${month}_${date}__0.png`;

(async () => {
  const font = path.resolve(__dirname, './modules/NotoSansJP-Bold.otf');
  const src = path.resolve(__dirname, './modules/ogp-base.png');

  registerFont(font, { family: 'NotoSansJP' });

  const width = 600;
  const height = 315;

  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const image = await loadImage(fs.readFileSync(src));
  ctx.drawImage(image, 0, 0, width, height);

  ctx.fillStyle = 'black';
  ctx.font = '32px "NotoSansJP"';
  ctx.textAlign = 'center';

  ctx.fillText(text.split('\\n').join('\n'), width / 2, height * 2.8 / 7, 500);

  const buf = canvas.toBuffer();
  fs.writeFileSync(target, buf);
})();
