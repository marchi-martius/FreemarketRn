import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductListView from '../ProductListView';

it('renders successfully', () => {
  const tree = renderer.create(
    <ProductListView
      products={[]}
      loadProducts={() => true}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
