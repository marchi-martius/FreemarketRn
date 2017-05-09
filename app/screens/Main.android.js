import React from 'react';
import { DrawerLayoutAndroid, View, Text, StyleSheet } from 'react-native';

import CategoryList from '../containers/CategoryList';
import CategoryOverview from '../containers/CategoryOverview';

const styles = StyleSheet.create({
  navigation: {
    flex: 1,
  },
  titleBlock: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "dodgerblue",
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    color: 'white',
  }
});

const CategoriesNavigation = ({afterCategoryPress}) => (
  <View style={styles.navigation}>
    <View style={styles.titleBlock}>
      <Text style={styles.title}>Categories</Text>
    </View>
    <CategoryList afterCategoryPress={afterCategoryPress} />
  </View>
);

const Main = () => (
  <DrawerLayoutAndroid
    drawerWidth={300}
    renderNavigationView={() => <CategoriesNavigation afterCategoryPress={ () => this.drawer.closeDrawer() } />}
    ref={(_drawer) => { this.drawer = _drawer }}
  >
    <CategoryOverview
      platform="android"
      onHeaderIconClicked={() => this.drawer.openDrawer()}
    />
  </DrawerLayoutAndroid>
);

export default Main;
