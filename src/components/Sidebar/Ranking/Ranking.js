import React from 'react';
import Link from 'gatsby-link';

const Ranking = () => {
  const posts = [
    {
      title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
      path: '/posts/nextjs-with-cms-esa',
      count: 74,
    },
    {
      title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
      path: '/posts/test-driven-development',
      count: 72,
    },
  ];

  return (
    <>
      <p style={{ margin: 0 }}>人気記事</p>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li>
            <Link to={post.path}>「{post.title}」(はてブ数 {post.count})</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
