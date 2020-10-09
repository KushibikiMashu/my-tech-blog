import React from 'react';
import Link from 'gatsby-link';

const Ranking = () => {
  const posts = [
    {
      title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
      path: '/posts/nextjs-with-cms-esa/',
    },
    {
      title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
      path: '/posts/test-driven-development',
    },
    {
      title: 'jQueryの作者による「毎日コードを書く」習慣の効果と自分で半年やってみた感想',
      path: '/posts/write-code-every-day',
    },
    {
      title: 'Next.js + TypeScriptにStorybookを導入して遭遇したエラーを全て共有します',
      path: '/posts/nextjs-storybook-typescript-errors',
    },
  ];

  return (
    <>
      <p style={{ margin: 0 }}>人気記事</p>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.path}>{post.title}</Link>
            <div style={{ height: 13 }}>
            <a href={`https://b.hatena.ne.jp/entry/https://panda-program.com${post.path}`}>
              <img src={`https://b.hatena.ne.jp/entry/image/https://panda-program.com${post.path}`}/>
            </a>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
