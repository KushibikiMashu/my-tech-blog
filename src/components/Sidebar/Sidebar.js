// @flow strict
import React from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import Category from '../Category';
import Ranking from './Ranking';
import { useSiteMetadata } from '../../hooks';

type Props = {
  isIndex?: boolean,
};

const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Contacts contacts={author.contacts} />
        <Ranking />
        <Menu menu={menu} />
        <Category hasHeading={true} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
