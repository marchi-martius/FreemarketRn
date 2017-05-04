import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from '../../App';
import Main from '../Main.android';

it('renders correctly', () => {
  const tree = renderer.create(<App><Main /></App>).toJSON();

  expect(tree).toMatchSnapshot();
});
