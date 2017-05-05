import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import ToolbarAndroid from 'ToolbarAndroid';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: 'dodgerblue',
  },
});

const CategoryHeader = ({ category }) => (
  <ToolbarAndroid
    title={category.name}
    style={styles.toolbar}
    titleColor='white'
  />
);

export default CategoryHeader;
