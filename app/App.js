/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

import ProductsList from './containers/ProductsList';
import CategoriesList from './containers/CategoriesList';
import { Categories } from './lib/Constants';
// import rootReducer from './app/reducers'

// const initialState = {
//   categories: Categories,
//   categoryIndex: 0
// };
// const store = createStore(rootReducer, initialState);

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      categories: Categories,
      categoryIndex: 0
    };
  }

  onPressCategory(index) {
    this.setState({
      categoryIndex: index
    });
  }

  currentCategory() {
    return this.state.categories[this.state.categoryIndex];
  }

  renderNavigationView() {
    return(
      <View style={styles.navigationView}>
	      <Text>Categories</Text>
        <CategoriesList
          categories={this.state.categories}
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
      	<ProductsList category={this.currentCategory()} />
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
