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
  description?: string,
  socialImage? :string
};

const Layout = ({
  children,
  title,
  description,
  socialImage,
  slug,
}: Props) => {
  const { author, url } = useSiteMetadata();
  const metaImage = socialImage != null ? socialImage : author.photo;
  const metaImageUrl = url + withPrefix(metaImage);
  const shortDescription = description.slice(0, 120);
  const canonicalUrl = `${url}${slug}} `;

  return (
    <div className={styles.layout}>
      <Helmet>
        <html lang="ja" />
        <title>{title}</title>
        <meta name="description" content={shortDescription} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={metaImageUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={shortDescription} />
        <meta name="twitter:image" content={metaImageUrl} />
        {/* google adsence */}
        <script data-ad-client="ca-pub-4506236710956024" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
        {/* SEO */}
        {slug === undefined ? null : <link rel="canonical" href={canonicalUrl} /> }
      </Helmet>
      {children}
    </div>
  );
};

export default Layout;
