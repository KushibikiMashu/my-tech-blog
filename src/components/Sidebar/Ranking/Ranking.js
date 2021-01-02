import React from 'react';
import Link from 'gatsby-link';
import { useSiteMetadata } from '../../../hooks';

type Post = {
  title: string;
  path: string;
}

type RankingPost = {
  hatenaUrl: string;
  hatenaImgUrl: string;
} & Post

const hatena = 'https://b.hatena.ne.jp/entry';

const posts: Post[] = [
  {
    title: 'Next.jsのISRを使ってスプレッドシートをデータソースにして業務フローを変えた話',
    path: '/posts/nextjs-isr-spreadsheet',
  },
  {
    title: 'テスト駆動開発（TDD）とは何か。コードで実践方法を解説します',
    path: '/posts/test-driven-development/',
  },
  {
    title: 'Next.js + esa.io + VercelでJAMStackな爆速ブログを構築する',
    path: '/posts/nextjs-with-cms-esa/',
  },
  {
    title: '弁護士ドットコムライブラリーのフロントエンドのアーキテクチャ（Next.js + TypeScript）',
    path: '/posts/bengo4com-library-frontend',
  },
  {
    title: 'jQueryの作者による「毎日コードを書く」習慣の効果と自分で半年やってみた感想',
    path: '/posts/write-code-every-day',
  },
];

const getHatenaPosts = (posts: Post[], url: string): RankingPost[] => posts.map((post) => ({
  ...post,
  hatenaUrl: `${hatena}/${url}${post.path}`,
  hatenaImgUrl: `${hatena}/image/${url}${post.path}`,
}));

const PostList = (props: { heading: string, posts: RankingPost[] }) => (
  <>
    <p style={{ margin: 0 }}>{props.heading}</p>
    <ul style={{ paddingLeft: '20px' }}>
      {props.posts.map((post) => (
        <li key={post.title}>
          <Link to={post.path}>{post.title}</Link>
          <div style={{ height: 13 }}>
            <a href={post.hatenaUrl}>
              <img src={post.hatenaImgUrl} alt="はてなブックマーク数"/>
            </a>
          </div>
        </li>
      ))}
    </ul>
  </>
);

const Ranking = () => {
  const { url } = useSiteMetadata();
  const sitePosts = getHatenaPosts(posts, url);

  return <PostList heading="人気記事" posts={sitePosts} />;
};

export default Ranking;
