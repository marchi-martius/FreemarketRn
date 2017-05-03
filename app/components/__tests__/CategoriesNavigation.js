import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoriesNavigation from '../CategoriesNavigation';

it('renders correctly', () => {
  const tree = renderer.create(<CategoriesNavigation />).toJSON();

  expect(tree).toMatchSnapshot();
});
