// @flow strict
import React from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import styles from '../Post.module.scss';

type Props = {
  url: string,
  title: string,
}

const TwitterButton = ({ url, title }: Props) => <>
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