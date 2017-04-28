/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid
} from 'react-native';

import ProductsList from './app/containers/ProductsList';

export default class FreemarketRn extends Component {
  renderNavigationView() {
    return(
      <View style={styles.navigationView}>
	<Text>Hello World</Text>
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
	drawerWidth={300}
	renderNavigationView={this.renderNavigationView}>
	<ProductsList />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  navigationView: {
    flex: 1,
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
