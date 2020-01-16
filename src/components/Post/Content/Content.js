// @flow strict
import React from 'react';
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

  const div: HTMLDivElement = document.createElement('div');
  div.innerHTML = toc;
  // 目次にクラス名を追加する
  // div.classList.add("test");

  // 記事の2番目の位置に目次を追加する
  article.insertBefore(div, firstElement.nextSibling);
  return article.outerHTML;
};

const Content = ({ body, title, toc }: Props) => {
  const article = insertTocIntoBody(toc, body);
  return (
  <div className={styles['content']}>
    <h1 className={styles['content__title']}>{title}</h1>
    {/* <Meta date={date}/> */}
    <div className={styles['content__body']} dangerouslySetInnerHTML={{ __html: article }}/>
    <div className={styles['content__body']}>
      <p>Happy Coding 🎉</p>
    </div>
  </div>
  );
};

export default Content;
