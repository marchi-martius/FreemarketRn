import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { ToolbarAndroid } from 'react-native-vector-icons/FontAwesome';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: colors.toolbar,
  },
});

const CategoryHeader = ({ category, onIconClicked }) => (
  <ToolbarAndroid
    title={category.name}
    titleColor={colors.headerText}
    navIconName={'bars'}
    onIconClicked={() => onIconClicked()}
    style={styles.toolbar}
  />
);

CategoryHeader.propTypes = {
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  onIconClicked: PropTypes.func.isRequired,
};

export default CategoryHeader;
