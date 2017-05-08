import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, TouchableHighlight, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const textColor = "white";
const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
  },
  text: {
    height: 40,
    fontSize: 18,
  }
});

const CategoryListRow = ({ onPress, name }) => (
  <TouchableHighlight onPress={onPress} >
    <View style={styles.row}>
      <Icon name="book" size={18} color="black" />
      <Text style={styles.text}>{name}</Text>
    </View>
  </TouchableHighlight>
);

CategoryListRow.propTypes = {
  name: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default CategoryListRow;
