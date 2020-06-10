// @flow strict
import React, {useEffect, useState} from 'react';
import Author from './Author';
import Contacts from './Contacts';
import Copyright from './Copyright';
import Menu from './Menu';
import styles from './Sidebar.module.scss';
import Category from '../Category';
import { useSiteMetadata } from '../../hooks';


type Props = {
  isIndex?: boolean,
};

const PopularPosts = () => {
  // local
  const [count, setCount] = useState({
    '/nextjs-with-cms-esa': 73,
    '/test-driven-development': 71,
  })

  // data
  const endpoint = 'https://bookmark.hatenaapis.com/count/entry?url=https://panda-program.com/posts'
  const paths= [
    '/nextjs-with-cms-esa',
    '/test-driven-development',
  ]

  useEffect(() => {
    paths.forEach((path, index) => {
      fetch(`${endpoint}${path}`).then(res => {
          //   setCount({
          //   ...count,
          //   path: res.body,
          // })
          console.log(res)
          console.log(res.json())
        }
      )
    })
  } , [])

  return <>a</>
}


const Sidebar = ({ isIndex }: Props) => {
  const { author, copyright, menu } = useSiteMetadata();

  return (
    <div className={styles['sidebar']}>
      <div className={styles['sidebar__inner']}>
        <Author author={author} isIndex={isIndex} />
        <Menu menu={menu} />
        <PopularPosts />
        <Category hasHeading={true} />
        <Contacts contacts={author.contacts} />
        <Copyright copyright={copyright} />
      </div>
    </div>
  );
};

export default Sidebar;
