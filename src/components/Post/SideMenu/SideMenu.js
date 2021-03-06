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
  const toggleCallback = useCallback(() => toggle(!isOpen));

  const renderPostList = () => nodes.slice().reverse().map(({ id, frontmatter }) => {
    const { title, slug } = frontmatter;
    const isActivePost = postId === id;
    return (
      <li key={title} className={styles['sideMenu__drawer-list__item']}>
        <Link
          to={slug}
          activeClassName={styles['sideMenu__drawer-list__item-activeLink']}
        >
          {isActivePost ? <FontAwesomeIcon icon={faAngleRight} size="1x" className={styles['sideMenu__drawer-list__item-icon']} /> : null}
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
            <Link to="/" className={styles['sideMenu__drawer-header-link']}><span>Topに戻る</span></Link>
        </header>
        <ul className={styles['sideMenu__drawer-list']}>
          {renderPostList()}
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
          aria-label={isOpen ? 'show post list' : 'close post list'}
          onClick={toggleCallback}
        >
          {isOpen ? <FontAwesomeIcon icon={faTimes} size="xs" />
            : <>
              <FontAwesomeIcon icon={faChevronLeft} size="xs" />
              {' '}
              <FontAwesomeIcon icon={faChevronRight} size="xs" />
            </>
          }
        </button>
      </div>
    </section>
  );
};

export default SideMenu;
