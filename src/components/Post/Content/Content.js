// @flow strict
import React, { useEffect, useState } from 'react';
import styles from './Content.module.scss';

type Props = {
  body: string,
  title: string,
  toc: string,
};

const insertTocIntoBody = (toc: string, body: string): string => {
  const article: HTMLElement = document.createElement('article');
  article.innerHTML = body;

  const firstElement: ?Node = article.firstChild;
  if (firstElement === null || firstElement === undefined) {
    return body;
  }

  const h2: HTMLHeadingElement = document.createElement('h2');
  const text:Text = document.createTextNode('目次');
  h2.appendChild(text);

  const div: HTMLDivElement = document.createElement('div');
  div.innerHTML = toc;
  div.classList.add(styles['content__body-toc']);

  // 最初の画像の下の位置に目次を追加する
  article.insertBefore(div, firstElement.nextSibling);
  article.insertBefore(h2, div);
  return article.outerHTML;
};

const Content = ({ body, title, toc }: Props) => {
  const [article, setArticle] = useState<string>(body);

  useEffect(() => {
    const withToc = typeof document !== 'undefined' ? insertTocIntoBody(toc, body) : body;
    setArticle(withToc);
  },
  []);

  return (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: article }}/>
    <div className={styles['content__body']}>
      <p>Happy Coding 🎉</p>
    </div>
  </div>
  );
};

export default Content;
