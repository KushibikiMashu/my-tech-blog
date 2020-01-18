// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div className={styles['author']}>
      <div className={styles['author__photo']}>
        <img
          className={styles['author__photo-image']}
          width="75"
          height="75"
          src={author.photo}
          alt={author.name}
        />
      </div>
      <div className={styles['author__bio']}>
        <div className={styles['author__bio-description']}>
          <span className={styles['author__bio-name']}>プログラミングをするパンダ</span>
          <div className={styles['author__bio-twitter']}>
            Twitter:{' '}
            <a
              href={getContactHref('twitter', author.contacts.twitter)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className={styles['author__bio-twitter__name']}>@Panda_Program</span>
            </a>
          </div>
        </div>
        {author.bio}
      </div>
    </div>
  );
};

export default Author;
