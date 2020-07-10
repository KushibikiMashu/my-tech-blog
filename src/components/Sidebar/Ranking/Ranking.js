import React from 'react';
import Link from 'gatsby-link';

const Ranking = () => {
  const posts = [
    {
      title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
      path: '/posts/nextjs-with-cms-esa',
      count: 75,
    },
    {
      title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
      path: '/posts/test-driven-development',
      count: 72,
    },
    {
      title: 'Tailwind CSS入門 - フロントエンドで素晴らしい開発体験を得るために',
      slug: '/posts/recommend-developers-use-tailwind-css',
      count: 2,
    },
  ];

  return (
    <>
      <p style={{ margin: 0 }}>人気記事</p>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.path}>「{post.title}」(はてブ数 {post.count})</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
