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
        <meta property="og:description" content={shortDescription}/>
        <meta property="og:site_name" content={title}/>
        <meta property="og:image" content={metaImageUrl}/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:title" content={title}/>
        <meta property="twitter:description" content={shortDescription}/>
        <meta property="twitter:image" content={metaImageUrl}/>
        {/* google adsence */}
        <script data-ad-client="ca-pub-4506236710956024" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
        {/* SEO */}
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
