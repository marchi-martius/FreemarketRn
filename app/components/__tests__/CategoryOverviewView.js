import { Text } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import CategoryOverviewView from '../CategoryOverviewView';
import categories from '../../constants/categories';

it('renders correctly', () => {
  const tree = renderer.create(
    <CategoryOverviewView category={categories[0]}>
      <Text>Hi</Text>
    </CategoryOverviewView>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
