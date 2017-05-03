import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import AndroidApp from '../AndroidApp';

it('renders correctly', () => {
  const tree = renderer.create(<AndroidApp />).toJSON();

  expect(tree).toMatchSnapshot();
});
