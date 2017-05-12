import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

const ProductListRow = ({ name, image, price }) => (
  <View>
    <Image
      style={{width: 50, height: 50}}
      source={{uri: image}}
    />
    <Text>{name}</Text>
    <Text>{price}</Text>
  </View>
);

ProductListRow.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductListRow;
