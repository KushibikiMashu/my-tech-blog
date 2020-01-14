// @flow strict
import React from 'react';
import { usePublishedPostList } from '../../../hooks';
import styles from './PostList.module.scss';

type Props = {
  tags: string[],
  title: string,
}

type Post = {
  tags: string[],
  title: string,
  description: string,
  slug: string,
  date: string,
  category: string,
  socialImage: string,
}

type Node = {
  frontmatter: Post
}

type Nodes = Node[]

const relatedPosts = (tags: string[], title: string, nodes: Nodes): Array<Post> => {
  const posts = [];

  for (let i = 0; i < nodes.length; i += 1) {
    const node = nodes[i].frontmatter;
    const { tags: postTags, title: postTitle } = node;

    // タグのチェックの計算量がO(n * m)なので、ビルドが遅くなったと感じた時にはアルゴリズムを改めたい
    for (let j = 0; j < tags.length; j += 1) {
      const tag = tags[j];

      if (isSamePost(title, postTitle) || posts.includes(node)) {
        continue;
      }

      if (postTags.includes(tag)) {
        posts.push(node);
      }
    }
  }

  return posts;
};

function isSamePost(title: string, postTitle: string):boolean {
  return title === postTitle;
}

const PostList = ({ tags, title }: Props) => {
  const nodes = usePublishedPostList();

  if (nodes.length === 0) {
    return null;
  }

  // 配列中のnullを削除する
  const posts = relatedPosts(tags, title, nodes);

  const renderPosts = () => posts.map((post: Post) => {
    // title, description, slug, date, category, socialImage
    const { title, slug } = post;
    return (
      <p key={title}>
        <a href={slug}>{title}</a>
      </p>
    );
  });

  return posts.length === 0 ? null
    : (
      <div className={styles['postList']}>
        <p className={styles['postList__heading']}><strong>関連する記事</strong></p>
        {renderPosts()}
      </div>
    );
};

export default PostList;