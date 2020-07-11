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
    bio: 'React、TypeScriptが得意。OOP、TDDとペア・モブプロでクリーンな設計のコードを書くエンジニア。モダンなPHPも書きます。弁護士ドットコム（株）所属',
    contacts: {
      twitter: 'Panda_Program',
      github: 'KushibikiMashu',
      linkedin: 'mashu-kushibiki',
    }
  }
};
