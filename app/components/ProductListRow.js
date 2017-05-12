import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, Image } from 'react-native';

const ident = 10;
const styles = StyleSheet.create({
  row: {
    margin: ident,
    backgroundColor: 'white',
    borderRadius: 5,
    flexDirection: 'row',
    padding: ident
  },
  image: {
    width: 100,
    height: 100,
  },
  descriptionBlock: {
    paddingLeft: ident,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  name: {
    color: 'black',
    fontSize: 15
  },
  numbersBlock: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeBlock: {

  },
  timeTitle: {
    fontSize: 10
  },
  timeValue: {
    color: 'red',
    fontSize: 15,
  },
  priceBlock: {
    backgroundColor: 'dimgray',
    width: 100,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  price: {
    color: 'white',
  }
});

const ProductListRow = ({ name, image, price }) => (
  <View style={styles.row}>
    <Image
      style={styles.image}
      source={{uri: image}}
    />
    <View style={styles.descriptionBlock}>
      <Text style={styles.name}>{name}</Text>
      <View style={styles.numbersBlock}>
        <View style={styles.timeBlock}>
          <Text style={styles.timeTitle}>Time Left:</Text>
          <Text style={styles.timeValue}>17m 5s</Text>
        </View>
        <View style={styles.priceBlock}>
          <Text style={styles.price}>${price}</Text>
        </View>
      </View>
    </View>
  </View>
);

ProductListRow.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductListRow;
