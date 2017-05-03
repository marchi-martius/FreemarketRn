import React, { Component } from 'react';
import { Text, ListView, TouchableHighlight } from 'react-native';

export default class CategoriesList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(this.props.categories);
  }

  render() {
    return(
      <ListView
        dataSource={this.dataSource}
        renderRow={(rowData, sectionID, rowID) => <TouchableHighlight onPress={this.props.onPressCategory.bind(null, rowID)}><Text>{rowData.name}</Text></TouchableHighlight>}
      />
    );
  }
}
