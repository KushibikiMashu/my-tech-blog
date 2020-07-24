// @flow strict
import React from 'react';
import { Link } from 'gatsby';
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

function isSamePost(title: string, postTitle: string): boolean {
  return title === postTitle;
}

const PostList = ({ tags, title }: Props) => {
  const nodes = usePublishedPostList();

  if (nodes.length === 0) {
    return null;
  }

  // 最大5件に絞る
  const posts = relatedPosts(tags, title, nodes).reverse().slice(0, 5);

  return posts.length === 0 ? null
    : (
      <div className={styles['postList']}>
        <h2 className={styles['postList__heading-title']}>{tags[0]}に関する記事</h2>
        {posts.map(({ title, slug }: Post) => (
          <div className={styles['postList__post']} key={title}>
            <Link className={styles['postList__post-link']} to={slug}>
              <p>
                <span className={styles['postList__post-icon']}>›</span>
                {title}
              </p>
            </Link>
          </div>
        ))
        }
      </div>
    );
};

export default PostList;
