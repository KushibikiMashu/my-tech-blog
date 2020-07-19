/* eslint-disable */
const fs = require('fs');
const path = require('path');
const readline = require('readline');

const { createCanvas, registerFont, loadImage } = require('canvas');

// const years = ['03', '05', '06', '07'];
//
// years.forEach((year) => {
//   const postsDir = path.resolve(__dirname, `../content/posts/2020/${year}`);
//   const filenames = fs.readdirSync(postsDir);
//
//   filenames.forEach((filename) => {
//     const stream = fs.createReadStream(`${postsDir}/${filename}`);
//     const lines = readline.createInterface(stream);
//     lines.on('line', (line) => {
//       if (line.startsWith('title: "')) {
//         console.log(line.slice(8, -1));
//       } else if (line.startsWith('title:')) {
//         console.log(line.slice(7));
//       }
//       if (line.startsWith('socialImage:')) {
//         console.log(line.slice(14, -1));
//       }
//     });
//   });
// });

const titles = [
  'PHP + curlでLINEに通知する\\n　　　（LINE Notify）',
  'PHP + Guzzleで\\nLINEに通知を送る',
  '     GASでSpreadSheetの\\nデータを毎週Slackに通知する',
  'エンジニアだってモテてみたい！\\nLINEで彼女へのサプライズを自動化した結果',
  'Docker+C言語の実行環境は\\n軽量なAlpine Linuxが良い',
  'GAS + GraphQLでGitHubの\\nコミット数をSlackに通知する',
  'Karabiner-Elementsのキー配列設定の\\nエクスポートとインポート方法',
  'PHPの日付処理ライブラリCarbonで\\n現在時刻との差(diff)を取得する',
  'Gatsby.jsでブログを立ち上げた',
  'GASで日本の休日・祝日を\\n判定する方法を解説します',
  '新人プログラマがLISPを学んだら\\nプログラミングの見方が変わった',
  'GAS + TypeScriptでLINEに\\n通知を送る方法を紹介します',
  'Laravel6.2にTailwind CSSを\\n導入する手順を紹介します',
  '　　書籍「Clean Coder」に挙げられている\\nソフトウェアのプロが備えるべき最低限のこと',
  'Laravel + BrowsersyncでBladeファイルの\\n変更を検知して自動でブラウザを更新する',
  '二分ヒープをPHPで手軽に扱う',
  'プログラミング学習における「コードの写経」は\\n是か非か。質の良い振り返りのための経験学習モデル',
  'LaravelにCircle CIを導入して\\n実行結果をSlackに通知する',
  '競技プログラミングAtCoderを快適に\\n解くためのPHPの環境を構築する',
  'テスト駆動開発（TDD）とは何か。\\nコードで実践方法を解説します',
  'Reactコンポーネントの雛形生成の\\n　　シェルスクリプトを書いた',
  'Google Apps ScriptからSlackと\\n　 LINEを連携するbotを作る',
  'Tailwind CSS入門 - フロントエンドで\\n素晴らしい開発体験を得るために',
  ' Stripeの全てのSubscriptionsの\\nstatusを集計する方法を紹介します',
  'スプレッドシートとUMLで\\n　診断チャートを作成する',
  'GASで議事録のテンプレ作成と\\n　　　周知を自動化する',
  'Gmailの新着メールをLINEに\\n転送する by Google Apps Script',
  'GASをclasp（CLIツール）+\\nTypeScriptでローカルで開発する',
  '【React】useSWRはAPIからデータ\\n取得をする快適なReact Hooksだと伝えたい',
  'Netlifyでリダイレクトの設定をする',
  '技術ブログ「積ん読」のススメ',
  '　Next.js + esa.io + Vercelで\\nJAMStackな爆速ブログを構築する',
  'GatsbyJS製の本ブログを\\n　　AMP対応しました',
  'Next.jsでGoogle Analyticsを\\n　　　使えるようにする',
  'Next.jsにTailwind CSSを導入する',
  ' Vercel + GatsbyJSの最適な\\nキャッシュ設定を紹介します',
  '　NetlifyでGatsbyJSのキャッシュを\\n設定してレスポンス速度を爆速にしよう',
  'jQueryの作者による「毎日コードを書く」習慣の\\n　　　効果と自分で半年やってみた感想',
  'Next.jsからSlackに通知を送る',
  '　 GatsbyJS公式推奨の\\nキャッシュ設定を理解する',
];

const paths = [
  '/media/2018/4/23__a.png',
  '/media/2018/4/24__0.png',
  '/media/2018/6/13__a.png',
  '/media/2018/6/14__a.png',
  '/media/2018/9/24__0.png',
  '/media/2018/9/25__a.png',
  '/media/2018/9/26__0.png',
  '/media/2018/11/25__0.png',
  '/media/2019/3/2019-03-24__0.jpg',
  '/media/2019/2/17__0.png',
  '/media/2018/12/05__0.png',
  '/media/2019/3/2020-03-31__a.png',
  '/media/2019/10/2019-10-13__0.png',
  '/media/2019/10/2019-10-28__0.png',
  '/media/2019/10/2019-10-26__0.png',
  '/media/2019/10/2019-10-29_2__0.png',
  '/media/2019/11/2019-11-01__0.png',
  '/media/2019/11/2019-11-03__0.png',
  '/media/2019/11/2019-11-04__0.png',
  '/media/2019/12/2019-12-02__0.png',
  '/media/2020/3/17__1.png',
  '/media/2020/06/17/2020_06_17__0.png',
  '/media/2020/5/31__0.png',
  '/media/2020/06/18/2020_06_18__0.png',
  '/media/2020/06/19/2020_06_19__0.png',
  '/media/2020/06/20/2020_06_20__0.jpg',
  '/media/2020/06/21/2020_06_21__0.png',
  '/media/2020/06/22/2020_06_22__0.png',
  '/media/2020/06/25/2020_06_25__0.png',
  '/media/2020/06/24/2020_06_24__0.png',
  '/media/2020/5/06__0.png',
  '/media/2020/5/24/0.png',
  '/media/2020/06/23/2020_06_23__0.png',
  '/media/2020/06/26/2020_06_26__0.png',
  '/media/2020/06/27/2020_06_27__0.png',
  '/media/2020/07/06/2020_07_06__0.png',
  '/media/2020/07/07/2020_07_07__0.png',
  '/media/2020/06/28/2020_06_28__0.png',
  '/media/2020/07/04/2020_07_04__0.png',
  '/media/2020/07/05/2020_07_05__0.png',
];

// const stream = fs.createReadStream(path.resolve(__dirname, './t.txt'));
// const lines = readline.createInterface(stream);
//
// let i = 0;
// const a = [];
// const b = [];
//
// lines.on('line', (line) => {
//   if (i % 2 === 1) {
//     const dir = line.split('/').slice(0, -1).join('/');
//     const dirPath = path.resolve(__dirname, `../static${dir}`);
//     if (!fs.existsSync(dirPath)) {
//       fs.mkdirSync(dirPath);
//     }
//   }
//
//
//   i++;
//   if (i % 2 === 1) {
//     a.push(line);
//   } else {
//     b.push(line);
//   }
//
//   console.log(a);
//   console.log(b);
// });
//
//
// タイトルを読み込む
// 画像パスを読み込む

const len = titles.length;

const make = (text, target) => {
  (async () => {
    const font = path.resolve(__dirname, './assets/NotoSansJP-Bold.otf');
    const src = path.resolve(__dirname, './assets/ogp-base.png');

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
};

for (let i = 0; i < len; i += 1) {
  const title = titles[i];
  const filename = path.resolve(__dirname, `../static${paths[i]}`);
  make(title, filename);
}
