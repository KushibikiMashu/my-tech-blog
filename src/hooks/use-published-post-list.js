// @flow strict
import { useStaticQuery, graphql } from 'gatsby';

const usePublishedPostList = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      {
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
              date(formatString: "YYYY/MM/DD")
              category
              socialImage
              updatedAt(formatString: "YYYY年MM月DD日")
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
