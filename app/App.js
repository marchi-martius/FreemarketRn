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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProductsList from './containers/ProductsList';
import CategoriesList from './containers/CategoriesList';
import { setCurrentCategory } from './actions/categories'

class App extends Component {

  onPressCategory = (index) => {
    this.props.setCategory(index);
  }

  currentCategory() {
    return this.props.categories[this.props.categoryIndex];
  }

  renderNavigationView() {
    return(
      <View style={styles.navigationView}>
	      <Text>Categories</Text>
        <CategoriesList
          categories={this.props.categories}
          onPressCategory={this.onPressCategory}
        />
      </View>
    );
  }

  render() {
    return (
      <DrawerLayoutAndroid
        	drawerWidth={300}
        	renderNavigationView={this.renderNavigationView.bind(this)}>
      	<ProductsList category={this.currentCategory()}

         />
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

const mapStateToProps = (state) => ({
  categories: state.categories,
  categoryIndex: state.categoryIndex
});

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (index) => {
      dispatch(setCurrentCategory(index));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
