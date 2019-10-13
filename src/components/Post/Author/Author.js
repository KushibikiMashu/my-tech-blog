// @flow strict
import React from 'react';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';
import { useSiteMetadata } from '../../../hooks';

const Author = () => {
  const { author } = useSiteMetadata();

  return (
    <div>
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
        <p className={styles['author__bio']}>
          <strong>プログラミングをするパンダ</strong>
          <br/>
          {author.bio}
          <div className={styles['author__bio-twitter']}>
            Twitter:{' '}
            <a
              href={getContactHref('twitter', author.contacts.twitter)}
              rel="noopener noreferrer"
              target="_blank"
            >
              <strong>@Panda_Program</strong>
            </a>
          </div>
        </p>
      </div>
    </div>
  );
};

export default Author;
