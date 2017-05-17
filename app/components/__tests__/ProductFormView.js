import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import FormImagePicker from '../FormImagePicker';

it('renders successfully', () => {
  const tree = renderer.create(
    <FormImagePicker
      onPress={() => true}
      onBackPress={() => true}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
