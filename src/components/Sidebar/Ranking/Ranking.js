import React from 'react';
import Link from 'gatsby-link';

const Ranking = () => {
  const posts = [
    {
      title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
      path: '/posts/nextjs-with-cms-esa',
      count: 76,
    },
    {
      title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
      path: '/posts/test-driven-development',
      count: 72,
    },
    {
      title: 'jQueryの作者による「毎日コードを書く」習慣の効果と自分で半年やってみた感想',
      slug: '/posts/write-code-every-day',
      count: 9,
    },
    {
      title: 'Next.js + TypeScriptにStorybookを導入して遭遇したエラーを全て共有します',
      slug: '/posts/nextjs-storybook-typescript-errors',
      count: 2,
    },
  ];

  return (
    <>
      <p style={{ margin: 0 }}>人気記事</p>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.path}>{post.title}(はてブ数 {post.count})</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
