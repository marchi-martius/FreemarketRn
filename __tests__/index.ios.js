/* eslint react/jsx-filename-extension: 0 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import Index from '../index.ios';

it('renders correctly', () => {
  const tree = renderer.create(
    <Index />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
