import React from 'react';
import { Link } from 'gatsby';
import kebabCase from 'lodash/kebabCase';
import { useCategoriesList } from '../../hooks';

const Category = ({ hasHeading }) => {
  const categories = useCategoriesList().sort(
    (prev, next) => (prev.totalCount > next.totalCount ? -1 : 1)
  );

  return (
    <>
      {hasHeading ? <p style={{ margin: 0 }}>カテゴリー</p> : null}
    <ul style={{ lineStyle: 'none', paddingLeft: 20 }}>
      {categories.map((category) => (
        <li key={category.fieldValue}>
          <Link to={`/category/${kebabCase(category.fieldValue)}/`}>
            {category.fieldValue} ({category.totalCount})
          </Link>
        </li>
      ))}
    </ul>
    </>
  );
};

export default Category;
