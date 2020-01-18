// @flow strict
import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faChevronLeft, faAngleRight, faTimes
} from '@fortawesome/free-solid-svg-icons';
import styles from './SideMenu.module.scss';
import type { FrontmatterObj } from '../../../types';

type Props = {
  postId: string,
  nodes: FrontmatterObj[]
}

const SideMenu = ({ nodes, postId }: Props) => {
  const [isOpen, toggle] = useState<boolean>(false);
  const toggleCallback = useCallback((): void => toggle(!isOpen));
  const reversed = nodes.slice().reverse();

  const postList = () => reversed.map((node) => {
    const { id, frontmatter } = node;
    const { title, slug } = frontmatter;
    const isActivePost = postId === id;
    return (
      <li key={title} className={styles['sideMenu__drawer-list__item']}>
        <Link
          to={slug}
          className={
            isActivePost ? styles['sideMenu__drawer-list__item-activeLink'] : undefined
          }
        >
          {isActivePost ? <>
            <FontAwesomeIcon icon={faAngleRight} className={styles['sideMenu__drawer-list__item-icon']} />
          </>
            : null}
          {title}
        </Link>
      </li>
    );
  });

  return (
    <section className={styles['sideMenu']}>
      <div
        className={styles['sideMenu__drawer']}
        style={isOpen
          ? { transform: 'translateX(0)' }
          : undefined
        }
      >
        <header className={styles['sideMenu__drawer-header']}>
          <div>記事一覧</div>
        </header>
        <ul className={styles['sideMenu__drawer-list']}>
          {postList()}
        </ul>
      </div>
      <div
        className={styles['sideMenu__close']}
        style={isOpen
          ? { display: 'block', opacity: 0.3 }
          : { display: 'none', opacity: 0 }
        }
        onClick={toggleCallback}
      >
      </div>
      <div className={styles['sideMenu__fab']}>
        <button
          className={styles['sideMenu__fab-button']}
          type="button"
          onClick={toggleCallback}
        >
          {isOpen ? <FontAwesomeIcon className={styles['sideMenu__fab-icon']} icon={faTimes} />
            : <>
              <FontAwesomeIcon className={styles['sideMenu__fab-icon']} icon={faChevronLeft} />
              {' '}
            <FontAwesomeIcon className={styles['sideMenu__fab-icon']} icon={faChevronRight} />
            </>
          }
        </button>
      </div>
    </section>
  );
};

export default SideMenu;