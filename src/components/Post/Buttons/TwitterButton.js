import React from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import styles from '../Post.module.scss';

const TwitterButton = ({ url, title }) => <>
  <TwitterShareButton
    className={styles['post__footer-shareButton']}
    url={url}
    title={title}
    via="Panda_Program"
  >
    <TwitterIcon className={styles['post__footer-shareIcon']} size={40} round/>
  </TwitterShareButton>
</>;

export default TwitterButton;