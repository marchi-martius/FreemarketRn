import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import ProductListRow from '../ProductListRow';

it('renders correctly', () => {
  const tree = renderer.create(
    <ProductListRow
      name="Item"
      image="http://i.ebayimg.com/images/g/64EAAOSwCQZZDJPO/s-l1600.jpg"
      price={10}
    />,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
