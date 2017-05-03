/* eslint react/prop-types: 0 */

import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

const CategoryListRow = ({onPress, name}) => (
  <TouchableHighlight onPress={onPress} >
    <Text>{name}</Text>
  </TouchableHighlight>
);

export default CategoryListRow;
