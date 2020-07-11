// @flow strict
import React from 'react';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import { useSiteMetadata } from '../hooks';
import Portfolio from '../components/Portfolio/Portfolio';

const PageTemplate = () => {
  const { title: siteTitle } = useSiteMetadata();

  return (
    <Layout title={`ポートフォリオ - ${siteTitle}`} description="ポートフォリオです" socialImage="" >
      <Sidebar />
      <Portfolio/>
    </Layout>
  );
};

export default PageTemplate;
