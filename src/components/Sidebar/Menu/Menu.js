// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

type Props = {
  menu: {
    label: string,
    path: string
  }[]
};

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item, index) => (
        <li className={styles['menu__list-item']} key={index}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']} key="policy">
        <Link
          to='/posts/policy'
          className={styles['menu__list-item-link']}
        >
          プライバシーポリシー
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
