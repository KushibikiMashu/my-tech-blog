// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import 'react-toastify/dist/ReactToastify.min.css';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import StickyFooter from './Footer';
import { useSiteMetadata } from '../../hooks';
import type { Node } from '../../types';
import {
  TwitterButton,
  HatenaBookmarkButton,
  PocketButton,
  ClipButton,
} from './Buttons';
import PostList from './PostList';
import styles from './Post.module.scss';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { url } = useSiteMetadata();
  const postUrl = url + slug;
  const shareTitle = `「${title}」\n`;

  return (
    <div className={styles['post']}>

      <div className={styles['post__content']}>
        <Content body={html} title={title}/>
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date}/>

        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}

        <div className={styles['post__footer-share']}>
          <TwitterButton url={postUrl} title={shareTitle}/>
          <HatenaBookmarkButton url={postUrl}/>
          <PocketButton url={postUrl} title={title}/>
          <ClipButton url={postUrl}/>
        </div>

        <PostList tags={tags} title={title}/>

        <div className={styles['post__navButton']}>
          <Link className={styles['post__homeButton']} to="/">Topに戻る</Link>
        </div>

        <Author/>
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title}/>
      </div>

      <StickyFooter
        title={shareTitle}
        postUrl={postUrl}
      />
    </div>
  );
};

export default Post;
