import React from 'react';
import { PocketIcon, PocketShareButton } from 'react-share';
import styles from '../Post.module.scss';

const PocketButton = ({ url, title }) => <>
  <PocketShareButton
    className={styles['post__footer-shareButton']}
    url={url}
    title={title}
  >
    <PocketIcon className={styles['post__footer-shareIcon']} size={40} round/>
  </PocketShareButton>
</>;

export default PocketButton;