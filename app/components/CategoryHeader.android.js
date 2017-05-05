import React, { PropTypes } from 'react';
import { StyleSheet, ToolbarAndroid } from 'react-native';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: colors.toolbar,
  },
});

const CategoryHeader = ({ category }) => (
  <ToolbarAndroid
    title={category.name}
    style={styles.toolbar}
    titleColor="white"
  />
);

CategoryHeader.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default CategoryHeader;
