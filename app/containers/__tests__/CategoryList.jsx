import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryList from '../CategoryList';
import categories from '../../constants/categories';

it('renders successfully', () => {
  const tree = renderer.create(
    <CategoryList categories={categories} onPressCategory={() => true} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
