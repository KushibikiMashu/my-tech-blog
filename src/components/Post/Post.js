// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { TwitterShareButton } from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
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
            <TwitterButton url={postUrl} title={shareTitle} />
            <PocketButton url={postUrl} title={title}/>
            <HatenaBookmarkButton url={postUrl}/>
          </div>
        <Author/>
        {postListLink}
      </div>

        <div className={styles['post__comments']}>
        <Comments postSlug={slug} postTitle={post.frontmatter.title}/>
      </div>

      <div className={styles['post__sticky-footer']}>
        <TwitterShareButton
          className={styles['post__sticky-footer-shareButton']}
          url={url}
          title={title}
          via="Panda_Program"
        >
          <FontAwesomeIcon
            className={styles['post__sticky-footer-share--Icon']}
            color="white"
            icon={faTwitter}
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              height: 24,
              width: '33vw',
              borderRadius: 6,
              backgroundColor: '#1DA1F2'
            }}
          />
        </TwitterShareButton>
        <div style={{
          marginLeft: 2,
          marginRight: 2,
          width: '33vw',
          backgroundColor: '#00a4de',
          borderRadius: 6,
          height: 40,
        }}>
          <a href={ `https://b.hatena.ne.jp/entry/${postUrl}` }
             className="hatena-bookmark-button"
             data-hatena-bookmark-layout="touch-counter"
             data-hatena-bookmark-width="80"
             data-hatena-bookmark-height="40"
             title="このエントリーをはてなブックマークに追加"
          >
            <img
              src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
              alt="このエントリーをはてなブックマークに追加" height="40" width="40"
              style={{ border: 'none', margin: 'auto' }}
            />
          </a>
          <script
            type="text/javascript"
            src="https://b.st-hatena.com/js/bookmark_button.js"
            charSet="utf-8"
            async="async"
          />
        </div>
        <CopyToClipboard text={postUrl} onCopy={() => {}}>
          <FontAwesomeIcon
            className={styles['post__sticky-footer-share--Icon']}
            color="white"
            icon={faPaperclip}
            style={{
              paddingTop: 8,
              paddingBottom: 8,
              height: 24,
              width: '33vw',
              borderRadius: 6,
              backgroundColor: '#A0AEC0'
            }}
          />
        </CopyToClipboard>
      </div>
    </div>
  );
};

export default Post;
