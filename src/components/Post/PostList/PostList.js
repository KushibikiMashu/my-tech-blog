// @flow string
import React from 'react';
import { usePublishedPostList } from '../../../hooks';
import styles from './PostList.module.scss';

type Props = {
  tags: Array<string>,
  title: string,
}

function isEmpty(post: Object) {
  return Object.keys(post).length === 0;
}

const relatedPosts = (tags: Array<string>, title: string, nodes) => nodes.map((node) => {
  const { tags: postTags, title: postTitle } = node.frontmatter;

  let post = {};

  // タグのチェックの計算量がO(n * m)なので、ビルドが遅くなったと感じた時にはアルゴリズムを改めたい
  for (let i = 0; i < tags.length; i += 1) {
    const tag = tags[i];

    if (postTags.includes(tag)) {
      // 現在の投稿と同じ記事は関連記事として扱わない
      if (isEmpty(post) && title !== postTitle) {
        post = node.frontmatter;
      }
    }
  }

  if (isEmpty(post)) {
    return null;
  }

  return post;
});

const PostList = ({ tags, title }: Props) => {
  const nodes = usePublishedPostList();

  if (nodes.length === 0) {
    return null;
  }

  const renderPosts = () => {
    const posts = relatedPosts(tags, title, nodes);
    return posts.map((post) => {
      if (post === null) {
        return null;
      }

      // title, description, slug, date, category, socialImage
      const { title, slug } = post;
      return (
        <p key={title}><
          a href={slug}>{title}</a>
        </p>
      );
    });
  };

  return (
    <div className={styles['postList']}>
      <p className={styles['postList__heading']}><strong>関連する記事</strong></p>
      {renderPosts()}
    </div>
  );
};

export default PostList;