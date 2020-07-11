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

const items = [
  {
    title: 'ポートフォリオ',
    url: 'https://kushibikimashu.github.io/portfolio',
  },
  {
    title: 'GitHub',
    url: 'https://github.com/KushibikiMashu',
  },
];

const Menu = ({ menu }: Props) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      <li className={styles['menu__list-item']} key="portfolio">
        <Link
          to='/portfolio'
          className={styles['menu__list-item-link']}
        >
          ポートフォリオ
        </Link>
      </li>
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
      {items.map((item) => (
        <li className={styles['menu__list-item']} key={item.title}>
          <a
            className={styles['menu__list-item-link']}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.title}
          </a>
        </li>
      ))}
      <li className={styles['menu__list-item']} key="policy">
        <Link
          to='/pages/policy'
          className={styles['menu__list-item-link']}
        >
          プライバシーポリシー
        </Link>
      </li>
    </ul>
  </nav>
);

export default Menu;
