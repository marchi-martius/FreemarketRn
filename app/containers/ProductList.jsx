import React from 'react';
import { Text } from 'react-native';

export default function ProductList(props) {
  return <Text>List of products go here for {props.category.name}</Text>;
}
