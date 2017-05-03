import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../containers/App'
import CategoriesNavigation from '../CategoriesNavigation';

it('renders correctly', () => {
  const tree = renderer.create(<App><CategoriesNavigation /></App>).toJSON();

  expect(tree).toMatchSnapshot();
});
