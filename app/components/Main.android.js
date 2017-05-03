import React, { Component } from 'react';
import { DrawerLayoutAndroid } from 'react-native';

import ProductList from './ProductList';
import CategoryList from '../containers/CategoryList';

const Main = () => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    renderNavigationView={() => <CategoriesNavigation />}
  >
    <ProductList category={{name: 'Home Decor'}} />
  </DrawerLayoutAndroid>
);
export default Main;
