/* eslint react/prop-types: 0 */

import React from 'react';
import { Text } from 'react-native';

const ProductList = ({ category }) => (
  <Text>List of products go here for {category.name}</Text>
);

export default ProductList;
