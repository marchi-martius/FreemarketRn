import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';

import ProductList from './ProductList';
import CategoryList from './CategoryList';

import categories from '../constants/categories';

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default class AndroidApp extends Component {
  constructor() {
    super();
    this.state = { categoryIndex: 0 };
  }

  currentCategory() {
    return categories[this.state.categoryIndex];
  }

  renderNavigationView() {
    return (
      <View style={styles.navigationView}>
        <Text>Categories</Text>
        <CategoryList
          categories={categories}
          onPressCategory={index => this.setState({ categoryIndex: index })}
        />
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        renderNavigationView={() => this.renderNavigationView()}
      >
        <ProductList category={this.currentCategory()} />
      </DrawerLayoutAndroid>
    );
  }
}
