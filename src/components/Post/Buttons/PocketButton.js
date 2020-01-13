// @flow strict
import React from 'react';
import { PocketIcon, PocketShareButton } from 'react-share';
import styles from './Buttons.module.scss';

type Props = {
  url: string,
  title: string,
}

const PocketButton = ({ url, title }: Props) => <>
  <PocketShareButton
    className={styles['button']}
    url={url}
    title={title}
  >
    <PocketIcon className={styles['button-icon']} size={40} borderRadius={10}/>
  </PocketShareButton>
</>;

export default PocketButton;