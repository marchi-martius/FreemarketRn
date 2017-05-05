import React, { Children, PropTypes, cloneElement } from 'react';
import { View } from 'react-native';

/*
 *Passing category to all children as prop
 */
const CategoryOverviewView = ({ category, children }) => (
  <View>
    {Children.map(children, child => cloneElement(child, { category }))}
  </View>
);

CategoryOverviewView.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default CategoryOverviewView;
