import 'react-native'
import React from 'react'
import ProductsList from '../ProductsList'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <ProductsList />
  ).toJSON();

  expect(tree).toMatchSnapshot();
})
