// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  const postListLink = <Link className={styles['post__home-button']} to="/">記事一覧へ</Link>;

  return (
    <div className={styles['post']}>

      {postListLink}

      <div className={styles['post__content']}>
        <Content body={html} title={title}/>
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date}/>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}
        <Author/>
        {postListLink}
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title}/>
      </div>
    </div>
  );
};

export default Post;
