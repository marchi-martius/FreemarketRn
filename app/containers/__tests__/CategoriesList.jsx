import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoriesList from '../CategoriesList';
import Categories from '../../constants/Categories';

it('renders successfully', () => {
  const tree = renderer.create(
    <CategoriesList categories={Categories} onPressCategory={() => true}/>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
