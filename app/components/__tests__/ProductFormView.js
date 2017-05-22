import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductFormView from '../ProductFormView';

it('renders successfully', () => {
  const tree = renderer.create(
    <ProductFormView
      onPress={() => true}
      onBackPress={() => true}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
