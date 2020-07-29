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
  // const hasPosts = nodes.length !== 0;

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
        <PostList tags={tags} title={title}/>

        {tags && tagSlugs && <Tags tags={tags} tagSlugs={tagSlugs}/>}

        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
         {/* 横長 */}
        <ins className="adsbygoogle"
             style={{ display: 'block' }}
             data-ad-client="ca-pub-4506236710956024"
             data-ad-slot="2206907154"
             data-ad-format="auto"
             data-full-width-responsive="true" />
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>

        <div className={styles['post__footer-share']}>
          <div className={styles['post__footer-shareButtons']}>
            <ShareButtons shareTitle={shareTitle} url={postUrl}/>
          </div>
        </div>

        {/* 前後の記事 */}
        {/* {hasPosts ? <NextPrevPost date={date} nodes={nodes}/> : null} */}

        <div className={styles['post__navButton']}>
          <Link className={styles['post__homeButton']} to="/">Topに戻る</Link>
        </div>

        <Author {...author}/>
      </div>

    </div>
  );
};

export default Post;
