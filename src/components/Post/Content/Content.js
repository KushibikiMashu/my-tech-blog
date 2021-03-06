// @flow strict
import React from 'react';
import kebabCase from 'lodash/kebabCase';
import styles from './Content.module.scss';
import Meta from '../Meta';

type Props = {
  body: string,
  title: string,
  toc: string,
  date: string,
  updatedAt?: string,
  category?: string,
};

// const insertTocIntoBody = (toc: string, body: string): string => {
//   const article: HTMLElement = document.createElement('article');
//   article.innerHTML = body;
//
//   const firstElement: ?Node = article.firstChild;
//   if (firstElement === null || firstElement === undefined) {
//     return body;
//   }
//
//   const h2: HTMLHeadingElement = document.createElement('h2');
//   const text: Text = document.createTextNode('目次');
//   h2.appendChild(text);
//
//   const div: HTMLDivElement = document.createElement('div');
//   div.innerHTML = toc;
//   div.classList.add(styles['content__body-toc']);
//
//   article.insertBefore(div, firstElement);
//   article.insertBefore(h2, div);
//   return article.outerHTML;
// };

// const [article, setArticle] = useState<string>(body);

// useEffect(() => {
//   const withToc = typeof document !== 'undefined' ? insertTocIntoBody(toc, body) : body;
//   setArticle(withToc);
// },
// []);

const Content = ({
  body, title, toc, date, updatedAt, category
}: Props) => (
    <div className={styles['content']}>

      <ul className={styles['content__breadcrumb']}>
        <li>
          <a href="/">TOP</a>{' '}›
        </li>
        {category === undefined ? null : (
          <li>
            <a href={`/category/${kebabCase(category)}`}>{category}</a>{' '}›
          </li>
        )}
        <li>
          {title}
        </li>
      </ul>

      <h1 className={styles['content__title']}>{title}</h1>
      <Meta date={date} updatedAt={updatedAt}/>

      <div className={styles['content__body']}>
        <h2>目次</h2>
        <div className={styles['content__body-toc']} dangerouslySetInnerHTML={{ __html: toc }}/>
        <div dangerouslySetInnerHTML={{ __html: body }}/>
      </div>
      <div className={styles['content__body']}>
        <p>Happy Coding 🎉</p>
      </div>
    </div>
);

export default Content;
