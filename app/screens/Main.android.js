import React from 'react';
import { DrawerLayoutAndroid, View, Text, StyleSheet } from 'react-native';

import CategoryList from '../containers/CategoryList';
import CategoryOverview from '../containers/CategoryOverview';
import CategoryHeader from '../components/CategoryHeader.android';

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
    <CategoryOverview>
      <CategoryHeader />
    </CategoryOverview>
  </DrawerLayoutAndroid>
);

export default Main;
