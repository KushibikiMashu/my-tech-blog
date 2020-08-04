// @flow strict
import React from 'react';
import { TwitterIcon, TwitterShareButton } from 'react-share';
import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import styles from './Buttons.module.scss';

type Props = {
  url: string,
  title: string,
}

const TwitterButton = ({ url, title }: Props) => (
  <TwitterShareButton
    className={styles['button']}
    url={url}
    title={title}
    via="Panda_Program"
    onClick={(e) => {
      e.preventDefault();

      trackCustomEvent({
        category: 'share',
        action: 'click',
        label: 'twitter'
      });
    }}
  >
    <TwitterIcon className={styles['button-icon']} size={40} borderRadius={10} />
  </TwitterShareButton>
);

export default TwitterButton;
