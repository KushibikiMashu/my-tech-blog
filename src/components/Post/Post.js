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
import PostList from './PostList';
import styles from './Post.module.scss';
import ShareButtons from './Buttons';
import NextPrevPost from './NextPrevPost';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { html, tableOfContents } = post;
  const { tagSlugs, slug } = post.fields;
  const { tags, title, date } = post.frontmatter;

  const { url: siteUrl } = useSiteMetadata();
  const postUrl = siteUrl + slug;
  const shareTitle = `「${title}」\n`;


  return (
    <div className={styles['post']}>

      <div className={styles['post__content']}>
        <Content
          body={html}
          title={title}
          toc={tableOfContents}
        />
      </div>

      <div className={styles['post__footer']}>
        <Meta date={date}/>

        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}

        <div className={styles['post__footer-share']}>
          <ShareButtons title={title} shareTitle={shareTitle} url={postUrl}/>
        </div>

        <PostList tags={tags} title={title}/>

        <NextPrevPost date={date}/>

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
