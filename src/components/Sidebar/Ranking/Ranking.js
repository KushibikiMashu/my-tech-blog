// @flow strict
import React from 'react';
import Link from 'gatsby-link';
import { useSiteMetadata } from '../../../hooks';
import { posts, zennPosts } from './posts';
import type { Post } from './posts';

type RankingPost = {
  hatenaUrl: string;
  hatenaImgUrl: string;
} & Post

const hatena = 'https://b.hatena.ne.jp/entry';
const zenn = 'https://zenn.dev';

const getHatenaPosts = (posts: Post[], url: string): RankingPost[] => posts.map((post) => ({
  ...post,
  hatenaUrl: `${hatena}/${url}${post.path}`,
  hatenaImgUrl: `${hatena}/image/${url}${post.path}`,
}));

const PostList = (props: { heading: string, posts: RankingPost[], host?: string }) => (
  <>
    <p style={{ margin: 0 }}>{props.heading}</p>
    <ul style={{ paddingLeft: '20px' }}>
      {props.posts.map((post) => (
        <li key={post.title}>
          {props.host
            ? <a href={`${props.host}${post.path}`} target="_blank">{post.title}</a>
            : <Link to={post.path}>{post.title}</Link>
          }
          <div style={{ height: 13 }}>
            <a href={post.hatenaUrl} target="_blank">
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

  return <>
    <PostList heading="人気記事" posts={getHatenaPosts(posts, url)} />
    <PostList heading="Zenn 投稿記事" posts={getHatenaPosts(zennPosts, zenn)} host={zenn} />
  </>;
};

export default Ranking;
