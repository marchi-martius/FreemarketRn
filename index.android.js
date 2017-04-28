/* eslint react/jsx-filename-extension: 0 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';

import ProductsList from './app/containers/ProductsList';

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    alignItems: 'center',
  },
});

function renderNavigationView() {
  return (
    <View style={styles.navigationView}>
      <Text>Hello World</Text>
    </View>
  );
}

export default function FreemarketRn() {
  return (
    <DrawerLayoutAndroid
      drawerWidth={300}
      renderNavigationView={renderNavigationView}
    >
      <ProductsList />
    </DrawerLayoutAndroid>
  );
}

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
