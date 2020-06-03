// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  updatedAt?: string,
};

const Meta = ({date, updatedAt}: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>
      {updatedAt === undefined || updatedAt === '' ? (
          <>
            <span>公開日:{' '}</span>
            <time dateTime={`${moment(date).format('YYYY/MM/DD')}`}>
              {moment(date).format('YYYY/MM/DD')}
            </time>
          </>
        )
        : (
          <>
            <span>更新日:{' '}</span>
            <time dateTime={moment(updatedAt).format('YYYY/MM/DD')}>
              {moment(updatedAt).format('YYYY/MM/DD')}
            </time>
          </>
        )
      }
    </p>
    <p className={styles['meta__date']}>by <a href="https://twitter.com/Panda_Program">@Panda_Program</a></p>
  </div>
);

export default Meta;
