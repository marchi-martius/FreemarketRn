import React, { Component } from 'react';
import { ListView } from 'react-native';

import CategoryListItem from '../containers/CategoryListItem';

export default class CategoryListView extends Component {
  constructor(props) {
    super(props);

    props.loadCategories();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });
    this.dataSource = ds.cloneWithRows([]);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.categories.length != this.props.categories.length ||
       nextProps.categories.map(cat => cat.id) !== this.props.categories.map(cat => cat.id)) {
      this.dataSource.cloneWithRows(nextProps.categories);
    }
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={(row) => <CategoryListItem id={row.id} name={row.name} />}
      />
    );
  }
}
