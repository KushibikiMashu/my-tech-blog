// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

type Props = {
  name: string,
  bio: string,
  photo: string,
  contacts: {
    twitter: string,
  }
}

const Author = ({
  photo, name, contacts, bio
}: Props) => (
    <div className={styles['author']}>
      <div className={styles['author__photo']}>
        <img
          className={styles['author__photo-image']}
          width="75"
          height="75"
          src={photo}
          alt={name}
        />
      </div>
      <div className={styles['author__bio']}>
        <div className={styles['author__bio-description']}>
          <span className={styles['author__bio-name']}>プログラミングをするパンダ</span>
          <div className={styles['author__bio-twitter']}>
            <a
              href={getContactHref('twitter', contacts.twitter)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={styles['author__bio-twitter__name']}>Twitter:{' '}@Panda_Program</span>
            </a>
          </div>
        </div>
        {bio}
      </div>
    </div>
);

export default Author;
