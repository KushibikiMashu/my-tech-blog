// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './NextPrevPost.module.scss';
import type { FrontmatterObj } from '../../../types';

type Props = {
  date: string,
  nodes: FrontmatterObj[]
}

const binarySearch = (array: string[], target: string): number | false => {
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

  return false;
};

const pickDates = (nodes: FrontmatterObj[]): string[] => {
  const dates = [];

  for (let i = 0; i < nodes.length; i += 1) {
    dates.push(nodes[i].frontmatter.date);
  }

  return dates;
};

const NextPrevPost = ({ date, nodes }: Props) => {
  const index = binarySearch(pickDates(nodes), date);

  if (index === false) {
    return null;
  }

  const hasNext = () => index !== nodes.length - 1;
  const hasPrev = () => index !== 0;

  const renderNextPost = ({ frontmatter }) => {
    const { title, slug } = frontmatter;
    return (
      <Link to={slug} className={styles['nextPrevPost__link--left']}>
        <p className={styles['nextPrevPost__link-arrow--left']}>← 次の記事</p>
        <p>{title}</p>
      </Link>
    );
  };

  const renderPrevPost = ({ frontmatter }) => {
    const { title, slug } = frontmatter;
    return (
      <Link to={slug} className={styles['nextPrevPost__link--right']}>
        <p className={styles['nextPrevPost__link-arrow--right']}>前の記事 →</p>
        <p>{title}</p>
      </Link>
    );
  };

  return (
    <div className={styles['nextPrevPost']}>
      {hasNext() ? renderNextPost(nodes[index + 1]) : null}
      {hasPrev() ? renderPrevPost(nodes[index - 1]) : null}
    </div>
  );
};

export default NextPrevPost;