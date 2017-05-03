import React, { Component } from 'react';
import { ListView } from 'react-native';

import CategoryListRow from './CategoryListRow';
import categories from '../constants/categories';

export default class CategoryList extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(categories);
  }

  render() {
    const { onPressCategory } = this.props;
    const renderRow = (rowData, _, rowID) => {
      return <CategoryListRow {...{ rowData, rowID, onPressCategory }} />;
    };

    return <ListView dataSource={this.dataSource} renderRow={renderRow} />;
  }
}
