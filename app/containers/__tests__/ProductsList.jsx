import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductsList from '../ProductsList';

it('renders correctly', () => {
  const category = { name: 'Home Decor' };
  const tree = renderer.create(<ProductsList category={category} />).toJSON();

  expect(tree).toMatchSnapshot();
});
