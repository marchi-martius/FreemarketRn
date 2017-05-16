import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import ProductListRow from '../components/ProductListRow';
import colors from '../constants/colors';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: colors.productsBackground,
  },
});

export default class ProductListView extends Component {
  static renderRow(row) {
    const { name, image, price } = row;
    return <ProductListRow {...{ name, image, price }} />;
  }
  constructor(props) {
    super(props);
    props.loadProducts();
  }

  render() {
    return (
      <FlatList
        style={styles.listView}
        data={this.props.products}
        renderItem={({ item }) => this.constructor.renderRow(item)}
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
  loadProducts: PropTypes.func.isRequired,
};
