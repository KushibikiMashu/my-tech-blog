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
    {updatedAt === undefined ? null : <p className={styles['meta__date']}>更新日: {moment(updatedAt).format('YYYY/MM/DD')}</p>}
    <p className={styles['meta__date']}>公開日: {moment(date).format('YYYY/MM/DD')}</p>
  </div>
);

export default Meta;
