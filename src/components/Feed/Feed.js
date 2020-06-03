// @flow strict
import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

moment.tz.setDefault('Asia/Tokyo');

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={moment(edge.node.frontmatter.date).format('YYYY/MM/DD')}>
            {moment(edge.node.frontmatter.date).format('YYYY/MM/DD')}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          <span className={styles['feed__item-meta-category']}>
            <Link to={edge.node.fields.categorySlug} className={styles['feed__item-meta-category-link']}>{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <p className={styles['feed__item-description']}>
          {edge.node.frontmatter.description}
          <span className={styles['feed__item-readmore']}>
            <Link to={edge.node.fields.slug}>記事を読む</Link>
          </span>
        </p>
      </div>
    ))}
  </div>
);

export default Feed;
