import React from 'react';
import { DrawerLayoutAndroid, View, Text, StyleSheet } from 'react-native';

import ProductList from '../components/ProductList';
import CategoryList from '../containers/CategoryList';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    alignItems: 'center',
  },
});

const CategoriesNavigation  = () => (
  <View style={styles.navigation}>
    <Text>Categories</Text>
    <CategoryList />
  </View>
);

const Main = () => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    renderNavigationView={() => <CategoriesNavigation />}
  >
    <ProductList category={{name: 'Home Decor'}} />
  </DrawerLayoutAndroid>
);

export default Main;
