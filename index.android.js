/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  ListView,
  TouchableHighlight
} from 'react-native';

import ProductsList from './app/containers/ProductsList';
import CategoriesList from './app/containers/CategoriesList';
import { Categories } from './app/Constants';

export default class FreemarketRn extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Categories),
      categoryIndex: 0
    };
  }

  onPressCategory(index) {
    this.setState({
      categoryIndex: index
    });
  }

  renderNavigationView() {
    return(
      <View style={styles.navigationView}>
	      <Text>Categories</Text>
        <CategoriesList
          dataSource={this.state.dataSource}
          onPressCategory={this.onPressCategory.bind(this)}
        />
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        	drawerWidth={300}
        	renderNavigationView={this.renderNavigationView.bind(this)}>
      	<ProductsList category={Categories[this.state.categoryIndex]} />
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
