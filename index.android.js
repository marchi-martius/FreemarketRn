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
  ListView
} from 'react-native';

import ProductsList from './app/containers/ProductsList';

const Categories = [
  {name: 'Antiques'},
  {name: 'Books, Comics & Magazines'},
  {name: 'Cars, Motorcycles & Vehicles'},
  {name: 'Events Tickets'},
  {name: 'Pet Supplies'}
]

export default class FreemarketRn extends Component {
  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(Categories)
    };
  }

  renderNavigationView() {
    return(
      <View style={styles.navigationView}>
	      <Text>Categories</Text>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={(rowData) => <Text>{rowData.name}</Text>}
        />
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        	drawerWidth={300}
        	renderNavigationView={this.renderNavigationView.bind(this)}>
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
