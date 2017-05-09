import React from 'react';
import { DrawerLayoutAndroid, View, Text, StyleSheet } from 'react-native';

import CategoryList from '../containers/CategoryList';
import CategoryOverview from '../containers/CategoryOverview';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
  },
  title: {
    // flex: 1,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue"
  }
});

const CategoriesNavigation = () => (
  <View style={styles.navigation}>
    <View style={styles.title}>
      <Text>Categories</Text>
    </View>
    <CategoryList />
  </View>
);

const Main = () => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    renderNavigationView={() => <CategoriesNavigation />}
    ref={(_drawer) => { this.drawer = _drawer }}
  >
    <CategoryOverview
      platform="android"
      openDrawer={() => this.drawer.openDrawer()}
    />
  </DrawerLayoutAndroid>
);

export default Main;
