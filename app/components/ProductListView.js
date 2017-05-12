import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListView, Text, StyleSheet } from 'react-native';

import ProductListRow from '../components/ProductListRow';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'dimgray',
  },
});

export default class ProductListView extends Component {
  constructor(props) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1.id !== r2.id,
    });
    this.dataSource = ds.cloneWithRows(props.products);
  }

  renderRow(row) {
    const { name, image, price } = row;
    return <ProductListRow {...{ name, image, price }} />;
  }

  render() {
    return (
      <ListView
        style={styles.listView}
        dataSource={this.dataSource}
        renderRow={(row) => this.renderRow(row)}
      />
    );
  }
}

ProductListView.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
};
