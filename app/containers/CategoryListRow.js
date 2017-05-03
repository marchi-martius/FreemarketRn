import React, { Component } from 'react';
import { TouchableHighlight, Text } from 'react-native';

export default class CategoryListRow extends Component {
  onPressCategory() {
    return this.props.onPressCategory(this.props.rowID);
  }

  render() {
    return (
      <TouchableHighlight onPress={() => this.onPressCategory()} >
        <Text>{this.props.rowData.name}</Text>
      </TouchableHighlight>
    );
  }
}
