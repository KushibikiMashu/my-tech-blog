// @flow strict
import React from 'react';
import { TwitterShareButton, TwitterIcon } from 'react-share';
import { Link } from 'gatsby';
import Author from './Author';
import Comments from './Comments';
import Content from './Content';
import Meta from './Meta';
import Tags from './Tags';
import styles from './Post.module.scss';
import { useSiteMetadata } from '../../hooks';
import type { Node } from '../../types';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;
  const { url } = useSiteMetadata();

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
          <div>
            <TwitterShareButton
                className={styles['post__footer-shareButton']}
                url={url + slug}
                title={`「${title}」\n`}
                via="Panda_Program"
            >
              <TwitterIcon className={styles['post__footer-shareIcon']} size={40} round />
            </TwitterShareButton>
          </div>
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
