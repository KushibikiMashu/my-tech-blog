// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NextPrevPost.module.scss';
import type { FrontmatterObj } from '../../../types';

type Props = {
  date: string,
  nodes: FrontmatterObj[]
}

const binarySearch = (array: string[], target: string): number | null => {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    }
    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return null;
};

const pickDates = (nodes: FrontmatterObj[]): string[] => nodes.map(
  ({ frontmatter }) => frontmatter.date
);

const NextPrevPost = ({ date, nodes }: Props) => {
  const index = binarySearch(pickDates(nodes), date);

  if (index === null) {
    return null;
  }

  const hasNext = () => index !== nodes.length - 1;
  const hasPrev = () => index !== 0;

  const renderNextPost = ({ title, slug }) => (
      <Link to={slug} className={styles['nextPrevPost__link--left']}>
        <p className={styles['nextPrevPost__link-arrow--left']}>
          <FontAwesomeIcon className={styles['nextPrevPost__link-icon--left']} icon={faAngleLeft} />
          次の記事
        </p>
        <p>{title}</p>
      </Link>
  );

  const renderPrevPost = ({ title, slug }) => (
      <Link to={slug} className={styles['nextPrevPost__link--right']}>
        <p className={styles['nextPrevPost__link-arrow--right']}>
          前の記事
          <FontAwesomeIcon className={styles['nextPrevPost__link-icon--right']} icon={faAngleRight} />
        </p>
        <p>{title}</p>
      </Link>
  );

  return (
    <div className={styles['nextPrevPost']}>
      {hasNext() ? renderNextPost(nodes[index + 1].frontmatter) : null}
      {hasPrev() ? renderPrevPost(nodes[index - 1].frontmatter) : null}
    </div>
  );
};

export default NextPrevPost;
