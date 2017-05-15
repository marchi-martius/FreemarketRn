import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

const CategoryHeaderView = ({ category, onIconClicked }) => (
  <View></View>
);

CategoryHeaderView.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onIconClicked: PropTypes.func.isRequired,
};

export default CategoryHeaderView;
