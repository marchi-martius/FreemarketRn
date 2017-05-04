import React, { PropTypes } from 'react';
import { Text } from 'react-native';

const ProductListView = ({ category }) => (
  <Text>List of products go here for {category.name}</Text>
);

ProductListView.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number.isRequired,
    string: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductListView;
