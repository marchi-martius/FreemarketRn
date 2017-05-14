import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, StyleSheet } from 'react-native';

import ProductListRow from '../components/ProductListRow';

const styles = StyleSheet.create({
  listView: {
    backgroundColor: 'dimgray',
  },
});

export default class ProductListView extends Component {
  constructor(props) {
    super(props);
    props.loadProducts();
  }

  renderRow(row) {
    const { name, image, price } = row;
    return <ProductListRow {...{ name, image, price }} />;
  }

  render() {
    return (
      <FlatList
        style={styles.listView}
        data={this.props.products}
        renderItem={({item}) => this.renderRow(item)}
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
