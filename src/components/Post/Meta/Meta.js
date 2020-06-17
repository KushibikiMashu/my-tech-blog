// @flow strict
import React from 'react';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  updatedAt?: string,
};

const Date = ({ label, date }) => (
  <>
    <span>{label}:{' '}</span>
    <time dateTime={date}>
      {date}
    </time>
  </>
);

const Meta = ({ date, updatedAt }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>
      {typeof updatedAt === 'undefined' || updatedAt === 'Invalid date' ? <Date label="公開日" date={date}/>
        : <Date label="更新日" date={updatedAt}/>
      }
    </p>
    <p className={styles['meta__date']}>by <a href="https://twitter.com/Panda_Program">@Panda_Program</a></p>
  </div>
);

export default Meta;
