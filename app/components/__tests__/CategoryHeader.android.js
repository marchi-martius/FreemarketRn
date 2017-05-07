import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryHeader from '../CategoryHeader.android';
import categories from '../../constants/categories';

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryHeader category={categories[0]} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
