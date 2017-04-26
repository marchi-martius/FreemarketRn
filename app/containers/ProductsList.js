import React, { Component } from 'react';
import { Text } from 'react-native';

export default class ProductsList extends Component {
  render() {
    return(
      <Text>List of products go here for {this.props.category.name}</Text>
    );
  }
}
