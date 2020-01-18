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
            activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']} key="portofolio">
        <a
          className={styles['menu__list-item-link']}
          href="https://kushibikimashu.github.io/portfolio"
          target="_blank"
        >
          ポートフォリオ
        </a>
      </li>
      <li className={styles['menu__list-item']} key="github">
        <a
          className={styles['menu__list-item-link']}
          href="https://github.com/KushibikiMashu"
          target="_blank"
        >
          GitHub
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
