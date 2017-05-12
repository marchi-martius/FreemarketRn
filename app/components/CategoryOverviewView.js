import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CategoryHeaderAndroid from './CategoryHeader.android';
import ProductList from '../containers/ProductList';

const CategoryOverviewView = ({ category, platform, onHeaderIconClicked }) => (
  <View>
    {platform === 'android' ? <CategoryHeaderAndroid category={category} onIconClicked={onHeaderIconClicked} /> : null}
    <ProductList />
  </View>
);


CategoryOverviewView.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  platform: PropTypes.oneOf(['android', 'ios']).isRequired,
  onHeaderIconClicked: PropTypes.func.isRequired,
};

export default CategoryOverviewView;
