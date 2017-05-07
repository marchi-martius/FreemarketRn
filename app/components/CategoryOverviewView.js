import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import CategoryHeaderAndroid from './CategoryHeader.android';

const CategoryOverviewView = ({ category, platform }) => (
  <View>
    {platform === 'android' ? <CategoryHeaderAndroid category={category} /> : null}
  </View>
);


CategoryOverviewView.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  platform: PropTypes.oneOf(['android', 'ios']).isRequired,
};

export default CategoryOverviewView;
