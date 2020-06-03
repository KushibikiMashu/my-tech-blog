// @flow strict
import React from 'react';
import moment from 'moment';
import styles from './Meta.module.scss';

type Props = {
  date: string,
  updatedAt?: string,
};

const Meta = ({ date, updatedAt }: Props) => (
  <div className={styles['meta']}>
    <p className={styles['meta__date']}>
      {updatedAt === undefined || updatedAt === '' ? `公開日: ${moment(date).format('YYYY/MM/DD')}`
        : `更新日: ${moment(updatedAt).format('YYYY/MM/DD')}`
      }
    </p>
    <p className={styles['meta__date']}>by <a href="https://twitter.com/Panda_Program">@Panda_Program</a></p>
  </div>
);

export default Meta;
