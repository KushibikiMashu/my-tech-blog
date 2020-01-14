// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const usePublishedPostList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PublishedPostList {
        allMarkdownRemark(
          filter: { frontmatter: { draft: { eq: false }, template: { eq: "post" } } }
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
          }
        }
      }
    `
  );

  return allMarkdownRemark.nodes;
};

export default usePublishedPostList;