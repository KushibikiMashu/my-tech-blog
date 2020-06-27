// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import 'react-toastify/dist/ReactToastify.min.css';
import Author from './Author';
import Content from './Content';
import Tags from './Tags';
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
    tags, title, date, updatedAt, category
  } = post.frontmatter;

  const { url: siteUrl, author } = useSiteMetadata();
  const postUrl = siteUrl + slug;
  const shareTitle = `「${title}」\n`;

  const nodes: FrontmatterObj[] = usePublishedPostList();
  const hasPosts = nodes.length !== 0;

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
          category={category}
        />
      </div>

      <div className={styles['post__footer']}>
        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}

        <div className={styles['post__footer-share']}>
          <p className={styles['post__footer-shareComment']}>
            記事が良かったらシェアをお願いします😊
          </p>
          <div className={styles['post__footer-shareButtons']}>
            <ShareButtons shareTitle={shareTitle} url={postUrl}/>
          </div>
        </div>

        <PostList tags={tags} title={title}/>

        {hasPosts ? <NextPrevPost date={date} nodes={nodes}/> : null}

         <div className={styles['post__navButton']}>
          <Link className={styles['post__homeButton']} to="/">Topに戻る</Link>
         </div>

        <Author {...author}/>
      </div>

    </div>
  );
};

export default Post;
