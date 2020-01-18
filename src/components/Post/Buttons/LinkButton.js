// @flow strict
import React, { useCallback } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

import styles from './Buttons.module.scss';

type Props = {
  url: string,
}

const LinkButton = ({ url }: Props) => {
  const copyCallback = useCallback(() => toast.success('記事のURLがコピーされました 🎉'));
  return (
    <div
      className={styles['button']}
      style={{ backgroundColor: '#A0AEC0' }}
    >
      <CopyToClipboard
        text={url}
        onCopy={copyCallback}
      >
        <FontAwesomeIcon
          color="white"
          icon={faLink}
          size='lg'
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
  );
};
export default LinkButton;
