'use strict';

module.exports = {
  url: 'https://panda-program.com',
  pathPrefix: '/',
  title: 'パンダのプログラミングブログ',
  subtitle: 'プログラミングをするパンダのTechブログ',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 20,
  googleAnalyticsId: 'UA-126057649-4',
  useKatex: false,
  menu: [
    {
      label: '記事一覧',
      path: '/'
    },
    {
      label: 'ポートフォリオ',
      path: '/portfolio',
    }
  ],
  author: {
    name: 'プログラミングをするパンダ',
    photo: '/photo.jpg',
    bio: 'Next.js（React）、TypeScriptが好き。OOP、TDDとペア・モブプロでテストを書きつつ、クリーンな設計のコードを目指す。PHPも書きます。弁護士ドットコム → BASE',
    contacts: {
      twitter: 'Panda_Program',
      github: 'KushibikiMashu',
      linkedin: 'mashu-kushibiki',
    }
  }
};
