import 'react-native';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import configureStore from 'redux-mock-store';

import CategoryOverviewView from '../CategoryOverviewView';
import categories from '../../constants/categories';

it('renders correctly', () => {
  const store = configureStore()({});
  const tree = renderer.create(
    <Provider store={store}>
      <CategoryOverviewView
        category={categories[0]}
        platform="android"
        onHeaderIconClicked={() => {}}
      />
    </Provider>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
