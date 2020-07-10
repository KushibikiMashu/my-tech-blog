import React from 'react';
import Link from 'gatsby-link';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';

const clickPostEvent = (category, label) => (e) => {
  e.preventDefault();

  trackCustomEvent({
    category,
    label,
    action: 'click',
  });
};

const Ranking = () => {
  const posts = [
    {
      title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
      slug: '/posts/nextjs-with-cms-esa',
      count: 75,
    },
    {
      title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
      slug: '/posts/test-driven-development',
      count: 72,
    },
  ];

  return (
    <>
      <p style={{ margin: 0 }}>人気記事</p>
      <ul style={{ paddingLeft: '20px' }}>
        {posts.map((post) => (
          <li key={post.title}>
            <Link to={post.slug} onClick={clickPostEvent('ranking', post.slug)}>「{post.title}」(はてブ数 {post.count})</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Ranking;
