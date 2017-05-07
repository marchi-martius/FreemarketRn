import React from 'react';
import { DrawerLayoutAndroid, View, Text, StyleSheet } from 'react-native';

import CategoryList from '../containers/CategoryList';
import CategoryOverview from '../containers/CategoryOverview';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
    alignItems: 'center',
  },
});

const CategoriesNavigation = () => (
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
    <CategoryOverview platform="android" />
  </DrawerLayoutAndroid>
);

export default Main;
