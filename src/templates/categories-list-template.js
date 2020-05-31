// @flow strict
import React from 'react';
import Sidebar from '../components/Sidebar';
import Layout from '../components/Layout';
import Page from '../components/Page';
import { useSiteMetadata } from '../hooks';
import Category from '../components/Category';

const CategoriesListTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Categories - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="Categories">
        <Category hasHeading={false} />
      </Page>
    </Layout>
  );
};

export default CategoriesListTemplate;
