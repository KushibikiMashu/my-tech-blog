// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import 'react-toastify/dist/ReactToastify.min.css';
import { Disqus } from 'gatsby-plugin-disqus';
import Author from './Author';
import Content from './Content';
import Tags from './Tags';
import StickyFooter from './Footer';
import { usePublishedPostList, useSiteMetadata } from '../../hooks';
import type { Node, FrontmatterObj } from '../../types';
import PostList from './PostList';
import styles from './Post.module.scss';
import ShareButtons from './Buttons';
import NextPrevPost from './NextPrevPost';
import SideMenu from './SideMenu';

type Props = {
  post: Node
};

const Post = ({ post }: Props) => {
  const { id: postId, html, tableOfContents } = post;
  const { tagSlugs, slug } = post.fields;
  const {
    tags, title, date, updatedAt
  } = post.frontmatter;

  const { url: siteUrl, author } = useSiteMetadata();
  const postUrl = siteUrl + slug;
  const shareTitle = `「${title}」\n`;

  const nodes: FrontmatterObj[] = usePublishedPostList();
  const hasPosts = nodes.length !== 0;

  const disqusConfig = {
    title,
    url: postUrl,
    identifier: postId,
  };

  return (
    <div className={styles['post']}>

      <SideMenu postId={postId} nodes={nodes}/>

      <div className={styles['post__content']}>
        <Content
          body={html}
          title={title}
          toc={tableOfContents}
          date={date}
          updatedAt={updatedAt}
        />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}

        <Disqus config={disqusConfig} />

        <div className={styles['post__footer-share']}>
          <ShareButtons title={title} shareTitle={shareTitle} url={postUrl}/>
        </div>

        <PostList tags={tags} title={title}/>

        {hasPosts ? <NextPrevPost date={date} nodes={nodes}/> : null}

         <div className={styles['post__navButton']}>
          <Link className={styles['post__homeButton']} to="/">Topに戻る</Link>
         </div>

        <Author {...author}/>
      </div>

      <StickyFooter
        title={shareTitle}
        postUrl={postUrl}
      />
    </div>
  );
};

export default Post;
