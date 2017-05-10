import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryListView from '../CategoryListView';

it('renders successfully', () => {
  const tree = renderer.create(
    <CategoryListView
      categories={[]}
      loadCategories={() => true}
      onCategoryPress={() => true}
      afterCategoryPress={() => true}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
