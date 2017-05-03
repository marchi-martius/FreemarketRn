/* eslint react/jsx-filename-extension: 0 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';

import ProductList from './app/containers/ProductList';
import CategoryList from './app/containers/CategoryList';

import categories from './app/constants/categories';

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    alignItems: 'center',
  },
});

export default class FreemarketRn extends Component {
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

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
