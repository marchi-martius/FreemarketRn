import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductList from '../ProductList';

it('renders correctly', () => {
  const category = { name: 'Home Decor' };
  const tree = renderer.create(<ProductList category={category} />).toJSON();

  expect(tree).toMatchSnapshot();
});
