import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getContactHref } from '../../../utils';
import styles from './Author.module.scss';

export const PureAuthor = ({ data }) => {
  const { author } = data.site.siteMetadata;

  return (
    <div className={styles['author']}>
      <p className={styles['author__bio']}>
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
  );
};

export const Author = (props) => (
  <StaticQuery
    query={graphql`
      query AuthorQuery {
        site {
          siteMetadata {
            author {
              name
              bio
              contacts {
                twitter
              }
            }
          }
        }
      }
    `}
    render={(data) => <PureAuthor {...props} data={data}/>}
  />
);

export default Author;
