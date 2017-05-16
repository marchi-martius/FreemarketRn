import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryHeaderView from '../CategoryHeaderView.android';
import categories from '../../constants/categories';

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryHeaderView category={categories[0]} onIconClicked={() => {}} />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
