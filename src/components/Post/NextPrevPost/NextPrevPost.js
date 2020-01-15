import React from 'react';
import { Link } from 'gatsby';
import { usePublishedPostList } from '../../../hooks';
import styles from './NextPrevPost.module.scss';

const NextPrevPost = ({ date }) => {
  const nodes = usePublishedPostList();

  if (nodes.length === 0) {
    return null;
  }

  const pickDates = (nodes) => {
    const dates = [];

    for (let i = 0; i < nodes.length; i += 1) {
      dates.push(nodes[i].frontmatter.date);
    }

    return dates;
  };

  const binarySearch = (array, target) => {
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

  const key = binarySearch(pickDates(nodes), date);

  const nextPost = (node) => {
    const { title, slug } = node.frontmatter;
    return (
      <Link to={slug} className={styles['nextPrevPost__link--left']}>
      <p className={styles['nextPrevPost__link-arrow--left']}>← Next post</p>
          <p>{title}</p>
      </Link>
    );
  };

  const prevPost = (node) => {
    const { title, slug } = node.frontmatter;
    return (
      <Link to={slug} className={styles['nextPrevPost__link--right']}>
        <p className={styles['nextPrevPost__link-arrow--right']}>Previous post →</p>
        <p>{title}</p>
      </Link>
    );
  };

  const hasNext = () => key !== nodes.length - 1;
  const hasPrev = () => key !== 0;

  return (
    <div className={styles['nextPrevPost']}>
      {hasNext() ? nextPost(nodes[key + 1]) : null}
      {hasPrev() ? prevPost(nodes[key - 1]) : null}
    </div>
  );
};

export default NextPrevPost;