// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata } from '../hooks';

const PageTemplate = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout title={`ポートフォリオ - ${siteTitle}`} description="ポートフォリオです" socialImage="" >
      <Sidebar />
      <div>portfolio</div>
    </Layout>
  );
};

export default PageTemplate;
