import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CategoryHeader from './CategoryHeader.android';
import ProductList from '../containers/ProductList';

const CategoryOverviewView = ({ category, platform, onHeaderIconClicked }) => (
  <View>
    <CategoryHeaderAndroid category={category} onIconClicked={onHeaderIconClicked} />
    <ProductList />
  </View>
);


CategoryOverviewView.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  onHeaderIconClicked: PropTypes.func.isRequired,
};

export default CategoryOverviewView;
