// @flow strict
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard/lib/Component';
import { toast, ToastContainer } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import styles from './Buttons.module.scss';

type Props = {
  url: string,
}

const ClipButton = ({ url }: Props) => (
  <div
    className={styles['button']}
    style={{ backgroundColor: '#A0AEC0' }}
  >
    <CopyToClipboard
      text={url}
      onCopy={() => toast.success('Copied! 🎉')}
    >
      <FontAwesomeIcon
        className={styles['button__icon-clip']}
        color="white"
        icon={faPaperclip}
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

export default ClipButton;
