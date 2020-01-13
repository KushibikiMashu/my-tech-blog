// @flow strict
import React from 'react';
import { PocketIcon, PocketShareButton } from 'react-share';
import styles from '../Post.module.scss';

type Props = {
  url: string,
  title: string,
}

const PocketButton = ({ url, title }: Props) => <>
  <PocketShareButton
    className={styles['post__footer-shareButton']}
    url={url}
    title={title}
  >
    <PocketIcon className={styles['post__footer-shareIcon']} size={40} round/>
  </PocketShareButton>
</>;

export default PocketButton;