import React from 'react';
import { Link } from 'gatsby';
import styles from './Menu.module.scss';

const Menu = ({ menu }) => (
  <nav className={styles['menu']}>
    <ul className={styles['menu__list']}>
      {menu.map((item) => (
        <li className={styles['menu__list-item']} key={item.path}>
          <Link
            to={item.path}
            className={styles['menu__list-item-link']}
            // pagesが複数になればコメントアウトを外す
            // activeClassName={styles['menu__list-item-link--active']}
          >
            {item.label}
          </Link>
        </li>
      ))}
      <li className={styles['menu__list-item']} key="portofolip">
        <a
          className={styles['menu__list-item-link']}
          href="https://kushibikimashu.github.io/portfolio/"
          target="_blank"
        >
          ポートフォリオ
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
