// @flow strict
import React from 'react';
import styles from './Copyright.module.scss';

type Props = {
  copyright: string
};

const Copyright = ({ copyright }: Props) => (
  <div className={styles['copyright']}>
    <p>This site uses Google Analytics</p>
    <p>{copyright}</p>
  </div>
);

export default Copyright;
