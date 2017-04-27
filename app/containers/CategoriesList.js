import React, { Component } from 'react';
import { Text, ListView, TouchableHighlight } from 'react-native';

export default class CategoriesList extends Component {
  constructor(props) {
    super(props);
    // const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    // this.props.dataSource = ds.cloneWithRows(this.props.categories);
  }

  render() {
    return(
      <ListView
        dataSource={this.props.dataSource}
        renderRow={(rowData, sectionID, rowID) => <TouchableHighlight onPress={this.props.onPressCategory.bind(null, rowID)}><Text>{rowData.name}</Text></TouchableHighlight>}
      />
    );
  }
}
