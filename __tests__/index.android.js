import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index.android';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
