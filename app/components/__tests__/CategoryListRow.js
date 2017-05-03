import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryListRow from '../CategoryListRow';

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryListRow
      onPressCategory={() => true}
      rowID="a"
      rowData={{ name: 'Name' }}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
