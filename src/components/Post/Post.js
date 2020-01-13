// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import 'react-toastify/dist/ReactToastify.min.css';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import { useSiteMetadata } from '../../hooks';
import HatenaBookmarkButton from './Buttons/HatenaBookmarkButton';
import type { Node } from '../../types';
import TwitterButton from './Buttons/TwitterButton';
import PocketButton from './Buttons/PocketButton';
import StickyFooter from './Footer/Footer';

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
        <div className={styles['post__footer-share']}>
          <TwitterButton url={postUrl} title={shareTitle}/>
          <PocketButton url={postUrl} title={title}/>
          <HatenaBookmarkButton url={postUrl}/>
        </div>
        <Author/>
        {postListLink}
      </div>

      <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title}/>
      </div>

      <StickyFooter
        title={title}
        postUrl={postUrl}
      />
    </div>
  );
};

export default Post;
