// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const usePublishedPostList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PublishedPostList {
        allMarkdownRemark(
          filter: {frontmatter: {draft: {eq: false}, template: {eq: "post"}}},
          sort: {fields: frontmatter___date, order: ASC}
         ) {
          nodes {
            frontmatter {
              tags
              title
              description
              slug
              date
              category
              socialImage
            }
            id
          }
        }
      }
    `
  );

  return allMarkdownRemark.nodes;
};

export default usePublishedPostList;