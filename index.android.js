import React from 'react';
import { AppRegistry } from 'react-native';
import { Router, Scene } from 'react-native-router-flux'

import App from './app/App';
import Main from './app/screens/Main.android';

const FreemarketRn = () => {
  return <App><Main /></App>;
}
export default FreemarketRn;

AppRegistry.registerComponent('FreemarketRn', () => FreemarketRn);
