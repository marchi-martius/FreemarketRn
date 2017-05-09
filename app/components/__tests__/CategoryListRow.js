import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryListRow from '../CategoryListRow';

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryListRow
      onPress={() => true}
      name="Item"
      icon="book"
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
