// @flow strict
import type { Language } from '../../types';

// eslint-disable-next-line
export const getWebSiteData = (language: Language) => {
  const sites = [
    {
      title: 'Creepy Nuts Fans',
      description: {
        ja: '日本一のラッパーR-指定、世界一のDJ松永のユニットCreepy Nutsの最新情報が集まるサイト。Next.js+TypeScriptで作り、Vercelにデプロイ',
        en: 'This web app is for the fans of Japanese HIP HOP Artists \'Creepy Nuts\'.',
        ch: '此网络应用程序适用于日本HIP HOP单位Creepy Nuts的粉丝。'
      },
      techs: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      image: {
        src: '/media/portfolio/creepynutsfans.png',
        alt: 'Creepy Nuts Fans'
      },
      link: 'https://creepynutsfans.com/'
    },
    {
      title: 'HIPSTY',
      description: {
        ja: '日本語ラップ好きな人のためのサイト。YouTubeのAPIを利用し、特定のチャンネルの動画を新着順で表示。動画の一覧をジャンル毎に切り替えできる。現在は更新停止',
        en: 'This web app is for Japanese HIPHOP lovers to find new music videos. This program calls YouTube API to fetch new data every five minutes.',
        ch: '这个网络应用程序是为了日本HIP HOP爱好者可以找到新的音乐视频。该程序调用YouTube API每五分钟获取一次新数据。'
      },
      techs: ['Next.js', 'React', 'TypeScript', 'Material-UI', 'Vercel'],
      image: {
        src: '/media/portfolio/hipsty.png',
        alt: 'HIPSTY'
      },
      link: 'https://hipsty.vercel.app'
    },
    {
      title: 'Bitcoin Chart',
      description: {
        ja: 'ビットコインの取引所ごとの価格差に着目し、価格をグラフで可視化。GASでスクレイピングしたデータをSpreadSheetに保存。React+TypeScriptで描画している。',
        en: 'You can see a chart of bitcoin price since 4/19/2018 on this site. I expected traders to practice arbitrage in the cryptocurrency market.',
        ch: '您可以在此网站上查看自2014年4月19日以来比特币价格图表，帮助交易者在加密货币市场上实行套利。'
      },
      techs: ['React', 'TypeScript', 'Google Apps Script', 'Highcharts', 'Neltify'],
      image: {
        src: '/media/portfolio/bitcoin_chart.png',
        alt: 'Bitcoin chart'
      },
      link: 'https://bitcoin-chart.netlify.com/'
    },
    {
      title: 'Whisky Distilleries Navi',
      description: {
        ja: '国内の主なウィスキー蒸留所を一覧できるサイト。各蒸留所の見学予約ページにワンクリックで遷移することができる。レスポンシブ対応済みのサイト。',
        en: 'This site lists famous whisky distilleries in Japan. You can check them all at once and can reserve a tour through this site.',
        ch: '该网站列出了日本有名的威士忌酿酒厂。您可以马上查看酿酒厂的历史，并可以预订参观游览。'
      },
      techs: ['HTML', 'Bootstrap 4', 'jQuery', 'Neltify'],
      image: {
        src: '/media/portfolio/whisky_distilleries.png',
        alt: 'Japanese whisky distilleries'
      },
      link: 'https://japanese-whisky-nav.net'
    }
  ];

  return sites.map((site) => ({ ...site, description: site.description[language] }));
};
