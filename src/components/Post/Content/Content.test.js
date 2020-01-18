// @flow strict
import React from 'react';
import renderer from 'react-test-renderer';
import Content from './Content';

describe('Content', () => {
  it('renders correctly', () => {
    const props = {
      title: 'test',
      body: '<p>test</p>',
      toc: '<ul>test</ul>',
      date: '2019-12-02T09:00:00.000Z',
      updatedAt: '2019-12-01T09:00:00.000Z',
    };

    const tree = renderer.create(<Content {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
