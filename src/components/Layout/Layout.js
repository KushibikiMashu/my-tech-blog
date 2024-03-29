// @flow strict
import React from 'react';
import Helmet from 'react-helmet';
import { withPrefix } from 'gatsby';
import type { Node as ReactNode } from 'react';
import { useSiteMetadata } from '../../hooks';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode,
  title: string,
  slug?: string,
  description?: string,
  socialImage?: string,
};

const Layout = ({
  children,
  title,
  description,
  socialImage,
}: Props) => {
  const { url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : '/site.png';
  const metaImageUrl = url + withPrefix(metaImage);
  const shortDescription = typeof description === 'undefined' ? '' : description.slice(0, 120);

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="ja"/>
        <title>{title}</title>
        <meta name="description" content={shortDescription}/>
        <meta name="image" content={metaImageUrl} />
        <meta property="og:description" content={shortDescription}/>
        <meta property="og:site_name" content={title}/>
        <meta property="og:image" content={metaImageUrl}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:title" content={title}/>
        <meta name="twitter:description" content={shortDescription}/>
        <meta name="twitter:image" content={metaImageUrl}/>
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
