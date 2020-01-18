// @flow strict
import React, { useCallback } from 'react';
import { TwitterShareButton } from 'react-share';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { toast, ToastContainer } from 'react-toastify';
import { faLink } from '@fortawesome/free-solid-svg-icons';
import styles from './Footer.module.scss';

type Props = {
  title: string,
  postUrl: string,
}

const Footer = ({ title, postUrl }: Props) => {
  const toastCallback = useCallback(() => toast.success('記事のURLがコピーされました 🎉'));
  return (
  <div className={styles['footer']}>
    <TwitterShareButton
      className={styles['footer__button']}
      url={postUrl}
      title={title}
      via="Panda_Program"
      style={{ backgroundColor: '#1DA1F2' }}
    >
      <FontAwesomeIcon
        className={styles['footer__button-icon']}
        color="white"
        icon={faTwitter}
        size='2x'
      />
    </TwitterShareButton>
    <div
      className={styles['footer__button']}
      style={{
        marginLeft: 2,
        marginRight: 2,
        backgroundColor: '#00a4de',
      }}
    >
      <a href={`https://b.hatena.ne.jp/entry/${postUrl}`}
         className="hatena-bookmark-button"
         data-hatena-bookmark-layout="touch"
         data-hatena-bookmark-width="40"
         data-hatena-bookmark-height="40"
         title="このエントリーをはてなブックマークに追加"
         style={{ display: 'block' }}
      >
        <img
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加" height="40" width="40"
          style={{ border: 'none', margin: 'auto' }}
        />
      </a>
    </div>
    <div
      className={styles['footer__button']}
      style={{ backgroundColor: '#A0AEC0' }}
    >
      <CopyToClipboard
        text={postUrl}
        onCopy={toastCallback}
      >
        <FontAwesomeIcon
          className={styles['footer__button-icon']}
          color="white"
          icon={faLink}
          size='2x'
          style={{ width: '100%' }}
        />
      </CopyToClipboard>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
    </div>
  </div>
  );
};

export default Footer;