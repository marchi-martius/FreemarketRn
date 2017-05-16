import React from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import App from './app/App';
import Main from './app/screens/Main.android';
import ProductForm from './app/screens/ProductForm';

const FreemarketRn = () => (
  <App>
    <Router>
      <Scene key="ProductIndex" component={Main} hideNavBar initial />
      <Scene key="ProductForm" component={ProductForm} hideNavBar />
    </Router>
  </App>
);
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
