// @flow strict
import React, { useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import { trackCustomEvent } from 'gatsby-plugin-google-analytics';
import styles from './Buttons.module.scss';

type Props = {
  url: string,
}

const LinkButton = ({ url }: Props) => {
  const copyCallback = useCallback(() => toast.success('記事のURLをコピーしました'));
  return (
    <button
      className={styles['button']}
      aria-label="copy link"
      style={{ backgroundColor: '#A0AEC0' }}
    >
      <CopyToClipboard
        text={url}
        onCopy={copyCallback}
        onClick={(e) => {
          e.preventDefault();

          trackCustomEvent({
            category: 'share',
            action: 'click',
            label: 'link'
          });
        }}
      >
        <FontAwesomeIcon
          color="white"
          icon={faLink}
          size='sm'
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
        style={{ fontSize: 16 }}
      />
    </button>
  );
};
export default LinkButton;
