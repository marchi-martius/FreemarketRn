import React, { Component } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

import ProductList from './ProductList';
import CategoryList from './CategoryList';

import categories from '../constants/categories';

export default class Category extends Component {
  constructor() {
    super();
    this.state = { categoryIndex: 0 };
  }

  currentCategory() {
    return categories[this.state.categoryIndex];
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        renderNavigationView={() => <CategoriesNavigation />}
      >
        <ProductList category={this.currentCategory()} />
      </DrawerLayoutAndroid>
    );
  }
}
