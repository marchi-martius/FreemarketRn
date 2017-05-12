import React, {Component} from "react";
import { connect } from 'react-redux';
import { Text } from 'react-native';
import ProductListView from '../components/ProductListView';
import products from '../constants/products'


const mapStateToProps = state => ({
  products: products,
});

// const ProductListView = () => <Text>Wtf</Text>;

export default connect(mapStateToProps)(ProductListView);
